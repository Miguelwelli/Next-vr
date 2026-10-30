// iOS/Safari camera + hand-tracking bridge for the extracted Next VR web app.
// Requires HTTPS (or localhost) and camera permission.
let stream = null;
let video = null;
let landmarker = null;
let rafId = 0;
let lastVideoTime = -1;
let visionModule = null;

const MODEL_URL = "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";
const WASM_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";
const MODULE_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";

function setCameraBackground() {
  let env = "sunset";
  try { env = JSON.parse(localStorage.getItem("nextvr.v1") || "{}").env || "sunset"; } catch {}
  document.documentElement.dataset.nextvrCamera = stream && env === "passthrough" ? "on" : "off";
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, (a.z || 0) - (b.z || 0));
}

async function loadLandmarker() {
  if (landmarker) return landmarker;
  if (!visionModule) visionModule = await import(MODULE_URL);
  const vision = await visionModule.FilesetResolver.forVisionTasks(WASM_URL);
  const options = {
    baseOptions: { modelAssetPath: MODEL_URL, delegate: "GPU" },
    runningMode: "VIDEO",
    numHands: 2,
    minHandDetectionConfidence: 0.55,
    minHandPresenceConfidence: 0.5,
    minTrackingConfidence: 0.5
  };
  try {
    landmarker = await visionModule.HandLandmarker.createFromOptions(vision, options);
  } catch (gpuError) {
    options.baseOptions.delegate = "CPU";
    landmarker = await visionModule.HandLandmarker.createFromOptions(vision, options);
  }
  return landmarker;
}

function processFrame() {
  if (!stream || !video || !landmarker) return;
  if (video.readyState >= 2 && video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;
    try {
      const result = landmarker.detectForVideo(video, performance.now());
      const landmarks = result.landmarks || [];
      const hands = landmarks.map((points, index) => {
        const thumb = points[4];
        const indexTip = points[8];
        const palmWidth = distance(points[5], points[17]);
        const pinching = distance(thumb, indexTip) < Math.max(0.035, palmWidth * 0.42);
        const x = points[8].x;
        const y = points[8].y;
        // Convert normalized fingertip coordinates into the app's angular pointer space.
        return {
          id: index,
          pinching,
          palmWidth,
          aim: [(x - 0.5) * 4.359, (0.5 - y) * 1.453],
          lm: points.map(p => ({ x: p.x, y: p.y }))
        };
      });
      if (typeof window.nextvrHands === "function") {
        window.nextvrHands({
          hands,
          validForMs: 350,
          timestampNs: Math.round(performance.now() * 1e6)
        });
      }
    } catch (error) {
      // Keep the render loop alive if a single camera frame cannot be processed.
    }
  }
  setCameraBackground();
  rafId = requestAnimationFrame(processFrame);
}

window.nextvrStartHands = async function () {
  if (!navigator.mediaDevices?.getUserMedia) {
    alert("Este navegador não liberou acesso à câmera. Abra o site em HTTPS no Safari.");
    return false;
  }
  if (stream && landmarker) return true;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 640 },
        height: { ideal: 480 },
        frameRate: { ideal: 30, max: 30 }
      }
    });
    video = document.getElementById("ios-camera-passthrough");
    video.srcObject = stream;
    await video.play();
    await loadLandmarker();
    setCameraBackground();
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(processFrame);
    return true;
  } catch (error) {
    if (stream) stream.getTracks().forEach(track => track.stop());
    stream = null;
    setCameraBackground();
    console.error("Next VR iOS camera bridge:", error);
    alert("Não foi possível ativar a câmera ou carregar o rastreamento de mãos. Verifique a permissão e a conexão com a internet.");
    return false;
  }
};

window.nextvrStopHands = function () {
  cancelAnimationFrame(rafId);
  rafId = 0;
  if (stream) stream.getTracks().forEach(track => track.stop());
  stream = null;
  if (video) video.srcObject = null;
  if (landmarker) { landmarker.close(); landmarker = null; }
  setCameraBackground();
};

window.addEventListener("storage", setCameraBackground);
setInterval(setCameraBackground, 700);
