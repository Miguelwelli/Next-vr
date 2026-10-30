(()=>{var ex=0,dm=1,tx=2;var Jg=1,nx=2,xs=3,$i=0,Zn=1,zn=2;var Zs=0,ka=1,hm=2,pm=3,fm=4,ix=5,Ir=100,sx=101,rx=102,mm=103,gm=104,ax=200,ox=201,lx=202,cx=203,ih=204,sh=205,ux=206,dx=207,hx=208,px=209,fx=210,mx=211,gx=212,yx=213,vx=214,xx=0,bx=1,_x=2,gc=3,wx=4,Sx=5,Mx=6,Ax=7,Bh=0,Ex=1,Tx=2,Ks=0,Rx=1,Cx=2,Lx=3,Px=4,Ix=5,Nx=6,ym="attached",Dx="detached",Qg=300,Fa=301,Ba=302,rh=303,ah=304,$c=306,Ur=1e3,oi=1001,No=1002,pn=1003,yc=1004;var Ro=1005;var cn=1006,zh=1007;var Qs=1008;var Js=1009,kx=1010,Ox=1011,Hh=1012,e0=1013,Ys=1014,bs=1015,Do=1016,t0=1017,n0=1018,Dr=1020,Ux=1021,yi=1023,Fx=1024,Bx=1025,kr=1026,za=1027,zx=1028,i0=1029,Hx=1030,s0=1031,r0=1033,Md=33776,Ad=33777,Ed=33778,Td=33779,vm=35840,xm=35841,bm=35842,_m=35843,a0=36196,wm=37492,Sm=37496,Mm=37808,Am=37809,Em=37810,Tm=37811,Rm=37812,Cm=37813,Lm=37814,Pm=37815,Im=37816,Nm=37817,Dm=37818,km=37819,Om=37820,Um=37821,Rd=36492,Fm=36494,Bm=36495,Vx=36283,zm=36284,Hm=36285,Vm=36286;var Ha=2300,Fr=2301,Cd=2302,Gm=2400,Wm=2401,qm=2402,Gx=2500;var o0=0,Yc=1,Xo=2,l0=3e3,Or=3001,Wx=3200,qx=3201,Vh=0,Xx=1,vi="",Wt="srgb",fn="srgb-linear",Gh="display-p3",jc="display-p3-linear",vc="linear",Ot="srgb",xc="rec709",bc="p3";var ma=7680;var Xm=519,$x=512,Yx=513,jx=514,c0=515,Zx=516,Kx=517,Jx=518,Qx=519,oh=35044;var $m="300 es",lh=1035,_s=2e3,_c=2001,er=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ym=1234567,Co=Math.PI/180,Va=180/Math.PI;function Di(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function Cn(n,e,t){return Math.max(e,Math.min(t,n))}function Wh(n,e){return(n%e+e)%e}function eb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tb(n,e,t){return n!==e?(t-n)/(e-n):0}function Lo(n,e,t){return(1-t)*n+t*e}function nb(n,e,t,i){return Lo(n,e,1-Math.exp(-t*i))}function ib(n,e=1){return e-Math.abs(Wh(n,e*2)-e)}function sb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ab(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ob(n,e){return n+Math.random()*(e-n)}function lb(n){return n*(.5-Math.random())}function cb(n){n!==void 0&&(Ym=n);let e=Ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ub(n){return n*Co}function db(n){return n*Va}function ch(n){return(n&n-1)===0&&n!==0}function hb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pb(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $o={DEG2RAD:Co,RAD2DEG:Va,generateUUID:Di,clamp:Cn,euclideanModulo:Wh,mapLinear:eb,inverseLerp:tb,lerp:Lo,damp:nb,pingpong:ib,smoothstep:sb,smootherstep:rb,randInt:ab,randFloat:ob,randFloatSpread:lb,seededRandom:cb,degToRad:ub,radToDeg:db,isPowerOfTwo:ch,ceilPowerOfTwo:hb,floorPowerOfTwo:wc,setQuaternionFromProperEuler:pb,normalize:wt,denormalize:Xi},je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],b=s[1],v=s[4],M=s[7],E=s[2],R=s[5],x=s[8];return r[0]=a*y+o*b+l*E,r[3]=a*p+o*v+l*R,r[6]=a*m+o*M+l*x,r[1]=c*y+u*b+d*E,r[4]=c*p+u*v+d*R,r[7]=c*m+u*M+d*x,r[2]=h*y+f*b+g*E,r[5]=h*p+f*v+g*R,r[8]=h*m+f*M+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ld.makeScale(e,t)),this}rotate(e){return this.premultiply(Ld.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ld.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ld=new ot;function u0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fb(){let n=ko("canvas");return n.style.display="block",n}var jm={};function Po(n){n in jm||(jm[n]=!0,console.warn(n))}var Zm=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Km=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vl={[fn]:{transfer:vc,primaries:xc,toReference:n=>n,fromReference:n=>n},[Wt]:{transfer:Ot,primaries:xc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[jc]:{transfer:vc,primaries:bc,toReference:n=>n.applyMatrix3(Km),fromReference:n=>n.applyMatrix3(Zm)},[Gh]:{transfer:Ot,primaries:bc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Km),fromReference:n=>n.applyMatrix3(Zm).convertLinearToSRGB()}},mb=new Set([fn,jc]),yt={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!mb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Vl[e].toReference,s=Vl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vl[n].primaries},getTransfer:function(n){return n===vi?vc:Vl[n].transfer}};function Oa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ga,Sc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ga===void 0&&(ga=ko("canvas")),ga.width=e.width,ga.height=e.height;let i=ga.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ga}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oa(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oa(t[i]/255)*255):t[i]=Oa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gb=0,Mc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Id(s[a].image)):r.push(Id(s[a]))}else r=Id(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Id(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yb=0,Mn=class n extends er{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=oi,s=oi,r=cn,a=Qs,o=yi,l=Js,c=n.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Di(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Or?Wt:vi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Wt?Or:l0}set encoding(e){Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Or?Wt:vi}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Qg;Mn.DEFAULT_ANISOTROPY=1;var At=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(f+1)/2,E=(m+1)/2,R=(u+h)/4,x=(d+y)/4,U=(g+p)/4;return v>M&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=x/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=U/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=x/r,s=U/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-y)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uh=class extends er{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Po("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Or?Wt:vi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ws=class extends uh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ac=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dh=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==h||c!==f||u!==g){let p=1-o,m=l*h+c*f+u*g+d*y,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let E=Math.sqrt(v),R=Math.atan2(E,m*b);p=Math.sin(p*R)/E,o=Math.sin(o*R)/E}let M=o*b;if(l=l*p+h*M,c=c*p+f*M,u=u*p+g*M,d=d*p+y*M,p===1-o){let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nd=new D,Jm=new nt,xi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pi):Pi.fromBufferAttribute(r,a),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Wl.subVectors(this.max,_o),ya.subVectors(e.a,_o),va.subVectors(e.b,_o),xa.subVectors(e.c,_o),Gs.subVectors(va,ya),Ws.subVectors(xa,va),Tr.subVectors(ya,xa);let t=[0,-Gs.z,Gs.y,0,-Ws.z,Ws.y,0,-Tr.z,Tr.y,Gs.z,0,-Gs.x,Ws.z,0,-Ws.x,Tr.z,0,-Tr.x,-Gs.y,Gs.x,0,-Ws.y,Ws.x,0,-Tr.y,Tr.x,0];return!Dd(t,ya,va,xa,Wl)||(t=[1,0,0,0,1,0,0,0,1],!Dd(t,ya,va,xa,Wl))?!1:(ql.crossVectors(Gs,Ws),t=[ql.x,ql.y,ql.z],Dd(t,ya,va,xa,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ps=[new D,new D,new D,new D,new D,new D,new D,new D],Pi=new D,Gl=new xi,ya=new D,va=new D,xa=new D,Gs=new D,Ws=new D,Tr=new D,_o=new D,Wl=new D,ql=new D,Rr=new D;function Dd(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Rr.fromArray(n,r);let o=s.x*Math.abs(Rr.x)+s.y*Math.abs(Rr.y)+s.z*Math.abs(Rr.z),l=e.dot(Rr),c=t.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var vb=new xi,wo=new D,kd=new D,li=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):vb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);let t=wo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(kd)),this.expandByPoint(wo.copy(e.center).sub(kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fs=new D,Od=new D,Xl=new D,qs=new D,Ud=new D,$l=new D,Fd=new D,Br=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fs.copy(this.origin).addScaledVector(this.direction,t),fs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Od.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(Od);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xl),o=qs.dot(this.direction),l=-qs.dot(Xl),c=qs.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Od).addScaledVector(Xl,h),f}intersectSphere(e,t){fs.subVectors(e.center,this.origin);let i=fs.dot(this.direction),s=fs.dot(fs)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fs)!==null}intersectTriangle(e,t,i,s,r){Ud.subVectors(t,e),$l.subVectors(i,e),Fd.crossVectors(Ud,$l);let a=this.direction.dot(Fd),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qs.subVectors(this.origin,e);let l=o*this.direction.dot($l.crossVectors(qs,$l));if(l<0)return null;let c=o*this.direction.dot(Ud.cross(qs));if(c<0||l+c>a)return null;let u=-o*qs.dot(Fd);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class n{constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,y,p)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ba.setFromMatrixColumn(e,0).length(),r=1/ba.setFromMatrixColumn(e,1).length(),a=1/ba.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,y=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xb,e,bb)}lookAt(e,t,i){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Xs.crossVectors(i,si),Xs.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Xs.crossVectors(i,si)),Xs.normalize(),Yl.crossVectors(si,Xs),s[0]=Xs.x,s[4]=Yl.x,s[8]=si.x,s[1]=Xs.y,s[5]=Yl.y,s[9]=si.y,s[2]=Xs.z,s[6]=Yl.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],b=i[3],v=i[7],M=i[11],E=i[15],R=s[0],x=s[4],U=s[8],w=s[12],_=s[1],I=s[5],N=s[9],O=s[13],L=s[2],T=s[6],F=s[10],G=s[14],q=s[3],W=s[7],J=s[11],Q=s[15];return r[0]=a*R+o*_+l*L+c*q,r[4]=a*x+o*I+l*T+c*W,r[8]=a*U+o*N+l*F+c*J,r[12]=a*w+o*O+l*G+c*Q,r[1]=u*R+d*_+h*L+f*q,r[5]=u*x+d*I+h*T+f*W,r[9]=u*U+d*N+h*F+f*J,r[13]=u*w+d*O+h*G+f*Q,r[2]=g*R+y*_+p*L+m*q,r[6]=g*x+y*I+p*T+m*W,r[10]=g*U+y*N+p*F+m*J,r[14]=g*w+y*O+p*G+m*Q,r[3]=b*R+v*_+M*L+E*q,r[7]=b*x+v*I+M*T+E*W,r[11]=b*U+v*N+M*F+E*J,r[15]=b*w+v*O+M*G+E*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15];return g*(+r*l*d-s*c*d-r*o*h+i*c*h+s*o*f-i*l*f)+y*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+p*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*u-i*c*u)+m*(-s*o*u-t*l*d+t*o*h+s*a*d-i*a*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],b=d*p*c-y*h*c+y*l*f-o*p*f-d*l*m+o*h*m,v=g*h*c-u*p*c-g*l*f+a*p*f+u*l*m-a*h*m,M=u*y*c-g*d*c+g*o*f-a*y*f-u*o*m+a*d*m,E=g*d*l-u*y*l-g*o*h+a*y*h+u*o*p-a*d*p,R=t*b+i*v+s*M+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/R;return e[0]=b*x,e[1]=(y*h*r-d*p*r-y*s*f+i*p*f+d*s*m-i*h*m)*x,e[2]=(o*p*r-y*l*r+y*s*c-i*p*c-o*s*m+i*l*m)*x,e[3]=(d*l*r-o*h*r-d*s*c+i*h*c+o*s*f-i*l*f)*x,e[4]=v*x,e[5]=(u*p*r-g*h*r+g*s*f-t*p*f-u*s*m+t*h*m)*x,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*m-t*l*m)*x,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*f+t*l*f)*x,e[8]=M*x,e[9]=(g*d*r-u*y*r-g*i*f+t*y*f+u*i*m-t*d*m)*x,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*m+t*o*m)*x,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*f-t*o*f)*x,e[12]=E*x,e[13]=(u*y*s-g*d*s+g*i*h-t*y*h-u*i*p+t*d*p)*x,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*p-t*o*p)*x,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*h+t*o*h)*x,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,y=a*u,p=a*d,m=o*d,b=l*c,v=l*u,M=l*d,E=i.x,R=i.y,x=i.z;return s[0]=(1-(y+m))*E,s[1]=(f+M)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(f-M)*R,s[5]=(1-(h+m))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(g+v)*x,s[9]=(p-b)*x,s[10]=(1-(h+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ba.set(s[0],s[1],s[2]).length(),a=ba.set(s[4],s[5],s[6]).length(),o=ba.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ii.copy(this);let c=1/r,u=1/a,d=1/o;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,t.setFromRotationMatrix(Ii),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=_s){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s),f,g;if(o===_s)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===_c)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=_s){let l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(a-r),h=(t+e)*c,f=(i+s)*u,g,y;if(o===_s)g=(a+r)*d,y=-2*d;else if(o===_c)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ba=new D,Ii=new Ee,xb=new D(0,0,0),bb=new D(1,1,1),Xs=new D,Yl=new D,si=new D,Qm=new Ee,eg=new nt,ci=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_b=0,tg=new D,_a=new nt,ms=new Ee,jl=new D,So=new D,wb=new D,Sb=new nt,ng=new D(1,0,0),ig=new D(0,1,0),sg=new D(0,0,1),Mb={type:"added"},Ab={type:"removed"},Ut=class n extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new ci,i=new nt,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ot}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.multiply(_a),this}rotateOnWorldAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.premultiply(_a),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(sg,e)}translateOnAxis(e,t){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jl.copy(e):jl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(So,jl,this.up):ms.lookAt(jl,So,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),_a.setFromRotationMatrix(ms),this.quaternion.premultiply(_a.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ab)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(ms),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,wb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new D,gs=new D,Bd=new D,ys=new D,wa=new D,Sa=new D,rg=new D,zd=new D,Hd=new D,Vd=new D,Zl=!1,Ia=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ni.subVectors(s,t),gs.subVectors(i,t),Bd.subVectors(e,t);let a=Ni.dot(Ni),o=Ni.dot(gs),l=Ni.dot(Bd),c=gs.dot(gs),u=gs.dot(Bd),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ys)===null?!1:ys.x>=0&&ys.y>=0&&ys.x+ys.y<=1}static getUV(e,t,i,s,r,a,o,l){return Zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zl=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ys)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ys.x),l.addScaledVector(a,ys.y),l.addScaledVector(o,ys.z),l)}static isFrontFacing(e,t,i,s){return Ni.subVectors(i,t),gs.subVectors(e,t),Ni.cross(gs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),Ni.cross(gs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;wa.subVectors(s,i),Sa.subVectors(r,i),zd.subVectors(e,i);let l=wa.dot(zd),c=Sa.dot(zd);if(l<=0&&c<=0)return t.copy(i);Hd.subVectors(e,s);let u=wa.dot(Hd),d=Sa.dot(Hd);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(wa,a);Vd.subVectors(e,r);let f=wa.dot(Vd),g=Sa.dot(Vd);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Sa,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return rg.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(rg,o);let m=1/(p+y+h);return a=y*m,o=h*m,t.copy(i).addScaledVector(wa,a).addScaledVector(Sa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Gd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=Wh(e,1),t=Cn(t,0,1),i=Cn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Gd(a,r,e+1/3),this.g=Gd(a,r,e),this.b=Gd(a,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let i=d0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=Pd(e.r),this.g=Pd(e.g),this.b=Pd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return yt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Cn(Rn.r*255,0,255))*65536+Math.round(Cn(Rn.g*255,0,255))*256+Math.round(Cn(Rn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Rn.copy(this),t);let i=Rn.r,s=Rn.g,r=Rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Wt){yt.fromWorkingColorSpace(Rn.copy(this),e);let t=Rn.r,i=Rn.g,s=Rn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($s),this.setHSL($s.h+e,$s.s+t,$s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($s),e.getHSL(Kl);let i=Lo($s.h,Kl.h,t),s=Lo($s.s,Kl.s,t),r=Lo($s.l,Kl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Ie;Ie.NAMES=d0;var Eb=0,Kn=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ka,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ih&&(i.blendSrc=this.blendSrc),this.blendDst!==sh&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},un=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ln=new D,Jl=new je,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jl.fromBufferAttribute(this,t),Jl.applyMatrix3(e),this.setXY(t,Jl.x,Jl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oh&&(e.usage=this.usage),e}};var Ec=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Tc=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Hn=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Tb=0,gi=new Ee,Wd=new Ut,Ma=new D,ri=new xi,Mo=new xi,bn=new D,Vn=class n extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u0(e)?Tc:Ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,i){return gi.makeTranslation(e,t,i),this.applyMatrix4(gi),this}scale(e,t,i){return gi.makeScale(e,t,i),this.applyMatrix4(gi),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ma).negate(),this.translate(Ma.x,Ma.y,Ma.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Mo.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(ri.min,Mo.min),ri.expandByPoint(bn),bn.addVectors(ri.max,Mo.max),ri.expandByPoint(bn)):(ri.expandByPoint(Mo.min),ri.expandByPoint(Mo.max))}ri.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bn.fromBufferAttribute(o,c),l&&(Ma.fromBufferAttribute(e,c),bn.add(Ma)),s=Math.max(s,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let _=0;_<o;_++)c[_]=new D,u[_]=new D;let d=new D,h=new D,f=new D,g=new je,y=new je,p=new je,m=new D,b=new D;function v(_,I,N){d.fromArray(s,_*3),h.fromArray(s,I*3),f.fromArray(s,N*3),g.fromArray(a,_*2),y.fromArray(a,I*2),p.fromArray(a,N*2),h.sub(d),f.sub(d),y.sub(g),p.sub(g);let O=1/(y.x*p.y-p.x*y.y);isFinite(O)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(f,-y.y).multiplyScalar(O),b.copy(f).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(O),c[_].add(m),c[I].add(m),c[N].add(m),u[_].add(b),u[I].add(b),u[N].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let _=0,I=M.length;_<I;++_){let N=M[_],O=N.start,L=N.count;for(let T=O,F=O+L;T<F;T+=3)v(i[T+0],i[T+1],i[T+2])}let E=new D,R=new D,x=new D,U=new D;function w(_){x.fromArray(r,_*3),U.copy(x);let I=c[_];E.copy(I),E.sub(x.multiplyScalar(x.dot(I))).normalize(),R.crossVectors(U,I);let O=R.dot(u[_])<0?-1:1;l[_*4]=E.x,l[_*4+1]=E.y,l[_*4+2]=E.z,l[_*4+3]=O}for(let _=0,I=M.length;_<I;++_){let N=M[_],O=N.start,L=N.count;for(let T=O,F=O+L;T<F;T+=3)w(i[T+0]),w(i[T+1]),w(i[T+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new It(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ag=new Ee,Cr=new Br,Ql=new li,og=new D,Aa=new D,Ea=new D,Ta=new D,qd=new D,ec=new D,tc=new je,nc=new je,ic=new je,lg=new D,cg=new D,ug=new D,sc=new D,rc=new D,St=class extends Ut{constructor(e=new Vn,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ec.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(qd.fromBufferAttribute(d,e),a?ec.addScaledVector(qd,u):ec.addScaledVector(qd.sub(t),u))}t.add(ec)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),Cr.copy(e.ray).recast(e.near),!(Ql.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Ql,og)===null||Cr.origin.distanceToSquared(og)>(e.far-e.near)**2))&&(ag.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(ag),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,E=v;M<E;M+=3){let R=o.getX(M),x=o.getX(M+1),U=o.getX(M+2);s=ac(this,m,e,i,c,u,d,R,x,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let b=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);s=ac(this,a,e,i,c,u,d,b,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,E=v;M<E;M+=3){let R=M,x=M+1,U=M+2;s=ac(this,m,e,i,c,u,d,R,x,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let b=p,v=p+1,M=p+2;s=ac(this,a,e,i,c,u,d,b,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Rb(n,e,t,i,s,r,a,o){let l;if(e.side===Zn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===$i,o),l===null)return null;rc.copy(o),rc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(rc);return c<t.near||c>t.far?null:{distance:c,point:rc.clone(),object:n}}function ac(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Aa),n.getVertexPosition(l,Ea),n.getVertexPosition(c,Ta);let u=Rb(n,e,t,i,Aa,Ea,Ta,sc);if(u){s&&(tc.fromBufferAttribute(s,o),nc.fromBufferAttribute(s,l),ic.fromBufferAttribute(s,c),u.uv=Ia.getInterpolation(sc,Aa,Ea,Ta,tc,nc,ic,new je)),r&&(tc.fromBufferAttribute(r,o),nc.fromBufferAttribute(r,l),ic.fromBufferAttribute(r,c),u.uv1=Ia.getInterpolation(sc,Aa,Ea,Ta,tc,nc,ic,new je),u.uv2=u.uv1),a&&(lg.fromBufferAttribute(a,o),cg.fromBufferAttribute(a,l),ug.fromBufferAttribute(a,c),u.normal=Ia.getInterpolation(sc,Aa,Ea,Ta,lg,cg,ug,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Ia.getNormal(Aa,Ea,Ta,d.normal),u.face=d}return u}var tr=class n extends Vn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(d,2));function g(y,p,m,b,v,M,E,R,x,U,w){let _=M/x,I=E/U,N=M/2,O=E/2,L=R/2,T=x+1,F=U+1,G=0,q=0,W=new D;for(let J=0;J<F;J++){let Q=J*I-O;for(let re=0;re<T;re++){let z=re*_-N;W[y]=z*b,W[p]=Q*v,W[m]=L,c.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[m]=R>0?1:-1,u.push(W.x,W.y,W.z),d.push(re/x),d.push(1-J/U),G+=1}}for(let J=0;J<U;J++)for(let Q=0;Q<x;Q++){let re=h+Q+T*J,z=h+Q+T*(J+1),X=h+(Q+1)+T*(J+1),ne=h+(Q+1)+T*J;l.push(re,z,ne),l.push(z,X,ne),q+=6}o.addGroup(f,q,w),f+=q,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ga(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bn(n){let e={};for(let t=0;t<n.length;t++){let i=Ga(n[t]);for(let s in i)e[s]=i[s]}return e}function Cb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function h0(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}var Lb={clone:Ga,merge:Bn},Pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ss=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pb,this.fragmentShader=Ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=Cb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Rc=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=_s}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qt=class extends Rc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Co*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ra=-90,Ca=1,hh=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(Ra,Ca,e,t);s.layers=this.layers,this.add(s);let r=new qt(Ra,Ca,e,t);r.layers=this.layers,this.add(r);let a=new qt(Ra,Ca,e,t);a.layers=this.layers,this.add(a);let o=new qt(Ra,Ca,e,t);o.layers=this.layers,this.add(o);let l=new qt(Ra,Ca,e,t);l.layers=this.layers,this.add(l);let c=new qt(Ra,Ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_s)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_c)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Cc=class extends Mn{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fa,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ph=class extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Po("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Or?Wt:vi),this.texture=new Cc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tr(5,5,5),r=new Ss({name:"CubemapFromEquirect",uniforms:Ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Zs});r.uniforms.tEquirect.value=t;let a=new St(s,r),o=t.minFilter;return t.minFilter===Qs&&(t.minFilter=cn),new hh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Xd=new D,Nb=new D,Db=new ot,ai=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Xd.subVectors(i,t).cross(Nb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Xd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Db.getNormalMatrix(e),s=this.coplanarPoint(Xd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Lr=new li,oc=new D,Uo=class{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,a=new ai){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_s){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],y=s[10],p=s[11],m=s[12],b=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,p-f,M-m).normalize(),i[1].setComponents(l+r,h+c,p+f,M+m).normalize(),i[2].setComponents(l+a,h+u,p+g,M+b).normalize(),i[3].setComponents(l-a,h-u,p-g,M-b).normalize(),i[4].setComponents(l-o,h-d,p-y,M-v).normalize(),t===_s)i[5].setComponents(l+o,h+d,p+y,M+v).normalize();else if(t===_c)i[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oc.x=s.normal.x>0?e.max.x:e.min.x,oc.y=s.normal.y>0?e.max.y:e.min.y,oc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function p0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function kb(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let d=c.array,h=c.usage,f=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,d){let h=u.array,f=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),f.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let y=0,p=g.length;y<p;y++){let m=g[y];t?n.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}var Pn=class n extends Vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],y=[],p=[];for(let m=0;m<u;m++){let b=m*h-a;for(let v=0;v<c;v++){let M=v*d-r;g.push(M,-b,0),y.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let v=b+c*m,M=b+c*(m+1),E=b+1+c*(m+1),R=b+1+c*m;f.push(v,M,R),f.push(M,E,R)}this.setIndex(f),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(y,3)),this.setAttribute("uv",new Hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h_="gl_FragColor = linearToOutputTexel( gl_FragColor );",p_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,__=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,V_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,J_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ww=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ew=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ww=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Ob,alphahash_pars_fragment:Ub,alphamap_fragment:Fb,alphamap_pars_fragment:Bb,alphatest_fragment:zb,alphatest_pars_fragment:Hb,aomap_fragment:Vb,aomap_pars_fragment:Gb,batching_pars_vertex:Wb,batching_vertex:qb,begin_vertex:Xb,beginnormal_vertex:$b,bsdfs:Yb,iridescence_fragment:jb,bumpmap_pars_fragment:Zb,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:e_,color_fragment:t_,color_pars_fragment:n_,color_pars_vertex:i_,color_vertex:s_,common:r_,cube_uv_reflection_fragment:a_,defaultnormal_vertex:o_,displacementmap_pars_vertex:l_,displacementmap_vertex:c_,emissivemap_fragment:u_,emissivemap_pars_fragment:d_,colorspace_fragment:h_,colorspace_pars_fragment:p_,envmap_fragment:f_,envmap_common_pars_fragment:m_,envmap_pars_fragment:g_,envmap_pars_vertex:y_,envmap_physical_pars_fragment:C_,envmap_vertex:v_,fog_vertex:x_,fog_pars_vertex:b_,fog_fragment:__,fog_pars_fragment:w_,gradientmap_pars_fragment:S_,lightmap_fragment:M_,lightmap_pars_fragment:A_,lights_lambert_fragment:E_,lights_lambert_pars_fragment:T_,lights_pars_begin:R_,lights_toon_fragment:L_,lights_toon_pars_fragment:P_,lights_phong_fragment:I_,lights_phong_pars_fragment:N_,lights_physical_fragment:D_,lights_physical_pars_fragment:k_,lights_fragment_begin:O_,lights_fragment_maps:U_,lights_fragment_end:F_,logdepthbuf_fragment:B_,logdepthbuf_pars_fragment:z_,logdepthbuf_pars_vertex:H_,logdepthbuf_vertex:V_,map_fragment:G_,map_pars_fragment:W_,map_particle_fragment:q_,map_particle_pars_fragment:X_,metalnessmap_fragment:$_,metalnessmap_pars_fragment:Y_,morphcolor_vertex:j_,morphnormal_vertex:Z_,morphtarget_pars_vertex:K_,morphtarget_vertex:J_,normal_fragment_begin:Q_,normal_fragment_maps:ew,normal_pars_fragment:tw,normal_pars_vertex:nw,normal_vertex:iw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:rw,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:ow,iridescence_pars_fragment:lw,opaque_fragment:cw,packing:uw,premultiplied_alpha_fragment:dw,project_vertex:hw,dithering_fragment:pw,dithering_pars_fragment:fw,roughnessmap_fragment:mw,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:vw,shadowmap_vertex:xw,shadowmask_pars_fragment:bw,skinbase_vertex:_w,skinning_pars_vertex:ww,skinning_vertex:Sw,skinnormal_vertex:Mw,specularmap_fragment:Aw,specularmap_pars_fragment:Ew,tonemapping_fragment:Tw,tonemapping_pars_fragment:Rw,transmission_fragment:Cw,transmission_pars_fragment:Lw,uv_pars_fragment:Pw,uv_pars_vertex:Iw,uv_vertex:Nw,worldpos_vertex:Dw,background_vert:kw,background_frag:Ow,backgroundCube_vert:Uw,backgroundCube_frag:Fw,cube_vert:Bw,cube_frag:zw,depth_vert:Hw,depth_frag:Vw,distanceRGBA_vert:Gw,distanceRGBA_frag:Ww,equirect_vert:qw,equirect_frag:Xw,linedashed_vert:$w,linedashed_frag:Yw,meshbasic_vert:jw,meshbasic_frag:Zw,meshlambert_vert:Kw,meshlambert_frag:Jw,meshmatcap_vert:Qw,meshmatcap_frag:eS,meshnormal_vert:tS,meshnormal_frag:nS,meshphong_vert:iS,meshphong_frag:sS,meshphysical_vert:rS,meshphysical_frag:aS,meshtoon_vert:oS,meshtoon_frag:lS,points_vert:cS,points_frag:uS,shadow_vert:dS,shadow_frag:hS,sprite_vert:pS,sprite_frag:fS},fe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},qi={basic:{uniforms:Bn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Bn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Bn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Bn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Bn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Bn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Bn([fe.points,fe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Bn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Bn([fe.common,fe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Bn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Bn([fe.sprite,fe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Bn([fe.common,fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Bn([fe.lights,fe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};qi.physical={uniforms:Bn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var lc={r:0,b:0,g:0};function mS(n,e,t,i,s,r,a){let o=new Ie(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(p,m){let b=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$c)?(u===void 0&&(u=new St(new tr(1,1,1),new Ss({name:"BackgroundCubeMaterial",uniforms:Ga(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=yt.getTransfer(v.colorSpace)!==Ot,(d!==v||h!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new Pn(2,2),new Ss({name:"BackgroundMaterial",uniforms:Ga(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=yt.getTransfer(v.colorSpace)!==Ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,m){p.getRGB(lc,h0(n)),i.buffers.color.setClear(lc.r,lc.g,lc.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:g}}function gS(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,u=!1;function d(L,T,F,G,q){let W=!1;if(a){let J=y(G,F,T);c!==J&&(c=J,f(c.object)),W=m(L,G,F,q),W&&b(L,G,F,q)}else{let J=T.wireframe===!0;(c.geometry!==G.id||c.program!==F.id||c.wireframe!==J)&&(c.geometry=G.id,c.program=F.id,c.wireframe=J,W=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,U(L,T,F,G),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,T,F){let G=F.wireframe===!0,q=o[L.id];q===void 0&&(q={},o[L.id]=q);let W=q[T.id];W===void 0&&(W={},q[T.id]=W);let J=W[G];return J===void 0&&(J=p(h()),W[G]=J),J}function p(L){let T=[],F=[],G=[];for(let q=0;q<s;q++)T[q]=0,F[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:G,object:L,attributes:{},index:null}}function m(L,T,F,G){let q=c.attributes,W=T.attributes,J=0,Q=F.getAttributes();for(let re in Q)if(Q[re].location>=0){let X=q[re],ne=W[re];if(ne===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),X===void 0||X.attribute!==ne||ne&&X.data!==ne.data)return!0;J++}return c.attributesNum!==J||c.index!==G}function b(L,T,F,G){let q={},W=T.attributes,J=0,Q=F.getAttributes();for(let re in Q)if(Q[re].location>=0){let X=W[re];X===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));let ne={};ne.attribute=X,X&&X.data&&(ne.data=X.data),q[re]=ne,J++}c.attributes=q,c.attributesNum=J,c.index=G}function v(){let L=c.newAttributes;for(let T=0,F=L.length;T<F;T++)L[T]=0}function M(L){E(L,0)}function E(L,T){let F=c.newAttributes,G=c.enabledAttributes,q=c.attributeDivisors;F[L]=1,G[L]===0&&(n.enableVertexAttribArray(L),G[L]=1),q[L]!==T&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,T),q[L]=T)}function R(){let L=c.newAttributes,T=c.enabledAttributes;for(let F=0,G=T.length;F<G;F++)T[F]!==L[F]&&(n.disableVertexAttribArray(F),T[F]=0)}function x(L,T,F,G,q,W,J){J===!0?n.vertexAttribIPointer(L,T,F,q,W):n.vertexAttribPointer(L,T,F,G,q,W)}function U(L,T,F,G){if(i.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let q=G.attributes,W=F.getAttributes(),J=T.defaultAttributeValues;for(let Q in W){let re=W[Q];if(re.location>=0){let z=q[Q];if(z===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let X=z.normalized,ne=z.itemSize,te=t.get(z);if(te===void 0)continue;let H=te.buffer,se=te.type,de=te.bytesPerElement,be=i.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||z.gpuType===e0);if(z.isInterleavedBufferAttribute){let qe=z.data,$=qe.stride,on=z.offset;if(qe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<re.locationSize;Ne++)E(re.location+Ne,qe.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Ne=0;Ne<re.locationSize;Ne++)M(re.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Ne=0;Ne<re.locationSize;Ne++)x(re.location+Ne,ne/re.locationSize,se,X,$*de,(on+ne/re.locationSize*Ne)*de,be)}else{if(z.isInstancedBufferAttribute){for(let qe=0;qe<re.locationSize;qe++)E(re.location+qe,z.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let qe=0;qe<re.locationSize;qe++)M(re.location+qe);n.bindBuffer(n.ARRAY_BUFFER,H);for(let qe=0;qe<re.locationSize;qe++)x(re.location+qe,ne/re.locationSize,se,X,ne*de,ne/re.locationSize*qe*de,be)}}else if(J!==void 0){let X=J[Q];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(re.location,X);break;case 3:n.vertexAttrib3fv(re.location,X);break;case 4:n.vertexAttrib4fv(re.location,X);break;default:n.vertexAttrib1fv(re.location,X)}}}}R()}function w(){N();for(let L in o){let T=o[L];for(let F in T){let G=T[F];for(let q in G)g(G[q].object),delete G[q];delete T[F]}delete o[L]}}function _(L){if(o[L.id]===void 0)return;let T=o[L.id];for(let F in T){let G=T[F];for(let q in G)g(G[q].object),delete G[q];delete T[F]}delete o[L.id]}function I(L){for(let T in o){let F=o[T];if(F[L.id]===void 0)continue;let G=F[L.id];for(let q in G)g(G[q].object),delete G[q];delete F[L.id]}}function N(){O(),u=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:_,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:M,disableUnusedAttributes:R}}function yS(n,e,t,i){let s=i.isWebGL2,r;function a(u){r=u}function o(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function vS(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=a||e.has("OES_texture_float"),E=v&&M,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:R}}function xS(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ai,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let b=r?0:i,v=b*4,M=m.clippingState||null;l.value=M,M=u(g,h,v,f);for(let E=0;E!==v;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=f;v!==y;++v,M+=4)a.copy(d[v]).applyMatrix4(b,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function bS(n){let e=new WeakMap;function t(a,o){return o===rh?a.mapping=Fa:o===ah&&(a.mapping=Ba),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===rh||o===ah)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ph(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Wa=class extends Rc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Na=4,dg=[.125,.215,.35,.446,.526,.582],Nr=20,$d=new Wa,hg=new Ie,Yd=null,jd=0,Zd=0,Pr=(1+Math.sqrt(5))/2,La=1/Pr,pg=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Pr,La),new D(0,Pr,-La),new D(La,0,Pr),new D(-La,0,Pr),new D(Pr,La,0),new D(-Pr,La,0)],Lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,jd,Zd),e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fa||e.mapping===Ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Do,format:yi,colorSpace:fn,depthBuffer:!1},s=fg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(r)),this._blurMaterial=wS(r,e,t)}return s}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,$d)}_sceneToCubeUV(e,t,i,s){let o=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(hg),u.toneMapping=Ks,u.autoClear=!1;let f=new un({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),g=new St(new tr,f),y=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,y=!0):(f.color.copy(hg),y=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):b===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;cc(s,b*v,m>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Fa||e.mapping===Ba;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;cc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,$d)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pg[(s-1)%pg.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new St(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Nr-1),y=r/g,p=isFinite(r)?1+Math.floor(u*y):Nr;p>Nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nr}`);let m=[],b=0;for(let x=0;x<Nr;++x){let U=x/y,w=Math.exp(-U*U/2);m.push(w),x===0?b+=w:x<p&&(b+=2*w)}for(let x=0;x<m.length;x++)m[x]=m[x]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let M=this._sizeLods[s],E=3*M*(s>v-Na?s-v+Na:0),R=4*(this._cubeSize-M);cc(t,E,R,3*M,2*M),l.setRenderTarget(t),l.render(d,$d)}};function _S(n){let e=[],t=[],i=[],s=n,r=n-Na+1+dg.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Na?l=dg[a-n+Na-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,y=3,p=2,m=1,b=new Float32Array(y*g*f),v=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let R=0;R<f;R++){let x=R%3*2/3-1,U=R>2?0:-1,w=[x,U,0,x+2/3,U,0,x+2/3,U+1,0,x,U,0,x+2/3,U+1,0,x,U+1,0];b.set(w,y*g*R),v.set(h,p*g*R);let _=[R,R,R,R,R,R];M.set(_,m*g*R)}let E=new Vn;E.setAttribute("position",new It(b,y)),E.setAttribute("uv",new It(v,p)),E.setAttribute("faceIndex",new It(M,m)),e.push(E),s>Na&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fg(n,e,t){let i=new ws(n,e,t);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function wS(n,e,t){let i=new Float32Array(Nr),s=new D(0,1,0);return new Ss({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function mg(){return new Ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function gg(){return new Ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===rh||l===ah,u=l===Fa||l===Ba;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Lc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Lc(n));let h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function MS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function AS(n,e,t,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)e.remove(y[p])}h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let p=0,m=y.length;p<m;p++)e.update(y[p],n.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let b=f.array;y=f.version;for(let v=0,M=b.length;v<M;v+=3){let E=b[v+0],R=b[v+1],x=b[v+2];h.push(E,R,R,x,x,E)}}else if(g!==void 0){let b=g.array;y=g.version;for(let v=0,M=b.length/3-1;v<M;v+=3){let E=v+0,R=v+1,x=v+2;h.push(E,R,R,x,x,E)}}else return;let p=new(u0(h)?Tc:Ec)(h,1);p.version=y;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ES(n,e,t,i){let s=i.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,g){n.drawElements(r,g,o,f*l),t.update(g,r,1)}function d(f,g,y){if(y===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,o,f*l,y),t.update(g,r,y)}function h(f,g,y){if(y===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<y;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,o,f,0,y);let m=0;for(let b=0;b<y;b++)m+=g[b];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function TS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function RS(n,e){return n[0]-e[0]}function CS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function LS(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new At,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,y=r.get(u);if(y===void 0||y.count!==g){let L=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],x=u.morphAttributes.color||[],U=0;b===!0&&(U=1),v===!0&&(U=2),M===!0&&(U=3);let w=u.attributes.position.count*U,_=1;w>e.maxTextureSize&&(_=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let I=new Float32Array(w*_*4*g),N=new Ac(I,w,_,g);N.type=bs,N.needsUpdate=!0;let O=U*4;for(let T=0;T<g;T++){let F=E[T],G=R[T],q=x[T],W=w*_*4*T;for(let J=0;J<F.count;J++){let Q=J*O;b===!0&&(a.fromBufferAttribute(F,J),I[W+Q+0]=a.x,I[W+Q+1]=a.y,I[W+Q+2]=a.z,I[W+Q+3]=0),v===!0&&(a.fromBufferAttribute(G,J),I[W+Q+4]=a.x,I[W+Q+5]=a.y,I[W+Q+6]=a.z,I[W+Q+7]=0),M===!0&&(a.fromBufferAttribute(q,J),I[W+Q+8]=a.x,I[W+Q+9]=a.y,I[W+Q+10]=a.z,I[W+Q+11]=q.itemSize===4?a.w:1)}}y={count:g,texture:N,size:new je(w,_)},r.set(u,y),u.addEventListener("dispose",L)}let p=0;for(let b=0;b<h.length;b++)p+=h[b];let m=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",m),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let f=h===void 0?0:h.length,g=i[u.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<f;v++){let M=g[v];M[0]=v,M[1]=h[v]}g.sort(CS);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(RS);let y=u.morphAttributes.position,p=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let M=o[v],E=M[0],R=M[1];E!==Number.MAX_SAFE_INTEGER&&R?(y&&u.getAttribute("morphTarget"+v)!==y[E]&&u.setAttribute("morphTarget"+v,y[E]),p&&u.getAttribute("morphNormal"+v)!==p[E]&&u.setAttribute("morphNormal"+v,p[E]),s[v]=R,m+=R):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let b=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function PS(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Pc=class extends Mn{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:kr,u!==kr&&u!==za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===kr&&(i=Ys),i===void 0&&u===za&&(i=Dr),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},f0=new Mn,m0=new Pc(1,1);m0.compareFunction=c0;var g0=new Ac,y0=new dh,v0=new Cc,yg=[],vg=[],xg=new Float32Array(16),bg=new Float32Array(9),_g=new Float32Array(4);function Ka(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=yg[s];if(r===void 0&&(r=new Float32Array(s),yg[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zc(n,e){let t=vg[e];t===void 0&&(t=new Int32Array(e),vg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function DS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function kS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function OS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;_g.set(i),n.uniformMatrix2fv(this.addr,!1,_g),gn(t,i)}}function US(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;bg.set(i),n.uniformMatrix3fv(this.addr,!1,bg),gn(t,i)}}function FS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;xg.set(i),n.uniformMatrix4fv(this.addr,!1,xg),gn(t,i)}}function BS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function HS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function VS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function GS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function WS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function qS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function XS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function $S(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?m0:f0;t.setTexture2D(e||r,s)}function YS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||y0,s)}function jS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||v0,s)}function ZS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||g0,s)}function KS(n){switch(n){case 5126:return IS;case 35664:return NS;case 35665:return DS;case 35666:return kS;case 35674:return OS;case 35675:return US;case 35676:return FS;case 5124:case 35670:return BS;case 35667:case 35671:return zS;case 35668:case 35672:return HS;case 35669:case 35673:return VS;case 5125:return GS;case 36294:return WS;case 36295:return qS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return ZS}}function JS(n,e){n.uniform1fv(this.addr,e)}function QS(n,e){let t=Ka(e,this.size,2);n.uniform2fv(this.addr,t)}function eM(n,e){let t=Ka(e,this.size,3);n.uniform3fv(this.addr,t)}function tM(n,e){let t=Ka(e,this.size,4);n.uniform4fv(this.addr,t)}function nM(n,e){let t=Ka(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iM(n,e){let t=Ka(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sM(n,e){let t=Ka(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rM(n,e){n.uniform1iv(this.addr,e)}function aM(n,e){n.uniform2iv(this.addr,e)}function oM(n,e){n.uniform3iv(this.addr,e)}function lM(n,e){n.uniform4iv(this.addr,e)}function cM(n,e){n.uniform1uiv(this.addr,e)}function uM(n,e){n.uniform2uiv(this.addr,e)}function dM(n,e){n.uniform3uiv(this.addr,e)}function hM(n,e){n.uniform4uiv(this.addr,e)}function pM(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||f0,r[a])}function fM(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||y0,r[a])}function mM(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||v0,r[a])}function gM(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||g0,r[a])}function yM(n){switch(n){case 5126:return JS;case 35664:return QS;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return dM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}var fh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KS(t.type)}},mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yM(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Kd=/(\w+)(\])?(\[|\.)?/g;function wg(n,e){n.seq.push(e),n.map[e.id]=e}function vM(n,e,t){let i=n.name,s=i.length;for(Kd.lastIndex=0;;){let r=Kd.exec(i),a=Kd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wg(t,c===void 0?new fh(o,n,e):new mh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new gh(o),wg(t,d)),t=d}}}var Ua=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);vM(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Sg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var xM=37297,bM=0;function _M(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function wM(n){let e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n),i;switch(e===t?i="":e===bc&&t===xc?i="LinearDisplayP3ToLinearSRGB":e===xc&&t===bc&&(i="LinearSRGBToLinearDisplayP3"),n){case fn:case jc:return[i,"LinearTransferOETF"];case Wt:case Gh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Mg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_M(n.getShaderSource(e),a)}else return s}function SM(n,e){let t=wM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function MM(n,e){let t;switch(e){case Rx:t="Linear";break;case Cx:t="Reinhard";break;case Lx:t="OptimizedCineon";break;case Px:t="ACESFilmic";break;case Nx:t="AgX";break;case Ix:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function AM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Da).join(`
`)}function EM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Da).join(`
`)}function TM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function RM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Da(n){return n!==""}function Ag(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(n){return n.replace(CM,PM)}var LM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function PM(n,e){let t=Ke[e];if(t===void 0){let i=LM.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yh(t)}var IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(n){return n.replace(IM,NM)}function NM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xs&&(e="SHADOWMAP_TYPE_VSM"),e}function kM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fa:case Ba:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ba:e="ENVMAP_MODE_REFRACTION";break}return e}function UM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Ex:e="ENVMAP_BLENDING_MIX";break;case Tx:e="ENVMAP_BLENDING_ADD";break}return e}function FM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function BM(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=DM(t),c=kM(t),u=OM(t),d=UM(t),h=FM(t),f=t.isWebGL2?"":AM(t),g=EM(t),y=TM(r),p=s.createProgram(),m,b,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Da).join(`
`),m.length>0&&(m+=`
`),b=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Da).join(`
`),b.length>0&&(b+=`
`)):(m=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),b=[f,Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ks?"#define TONE_MAPPING":"",t.toneMapping!==Ks?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ks?MM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,SM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),a=yh(a),a=Ag(a,t),a=Eg(a,t),o=yh(o),o=Ag(o,t),o=Eg(o,t),a=Tg(a),o=Tg(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let M=v+m+a,E=v+b+o,R=Sg(s,s.VERTEX_SHADER,M),x=Sg(s,s.FRAGMENT_SHADER,E);s.attachShader(p,R),s.attachShader(p,x),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(N){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(R).trim(),T=s.getShaderInfoLog(x).trim(),F=!0,G=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,R,x);else{let q=Mg(s,R,"vertex"),W=Mg(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+q+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||T==="")&&(G=!1);G&&(N.diagnostics={runnable:F,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:T,prefix:b}})}s.deleteShader(R),s.deleteShader(x),w=new Ua(s,p),_=RM(s,p)}let w;this.getUniforms=function(){return w===void 0&&U(this),w};let _;this.getAttributes=function(){return _===void 0&&U(this),_};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(p,xM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=x,this}var zM=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xh(e),t.set(e,i)),i}},xh=class{constructor(e){this.id=zM++,this.code=e,this.usedTimes=0}};function HM(n,e,t,i,s,r,a){let o=new Oo,l=new vh,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return w===0?"uv":`uv${w}`}function p(w,_,I,N,O){let L=N.fog,T=O.geometry,F=w.isMeshStandardMaterial?N.environment:null,G=(w.isMeshStandardMaterial?t:e).get(w.envMap||F),q=G&&G.mapping===$c?G.image.height:null,W=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let J=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,Q=J!==void 0?J.length:0,re=0;T.morphAttributes.position!==void 0&&(re=1),T.morphAttributes.normal!==void 0&&(re=2),T.morphAttributes.color!==void 0&&(re=3);let z,X,ne,te;if(W){let On=qi[W];z=On.vertexShader,X=On.fragmentShader}else z=w.vertexShader,X=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),te=l.getFragmentShaderID(w);let H=n.getRenderTarget(),se=O.isInstancedMesh===!0,de=O.isBatchedMesh===!0,be=!!w.map,qe=!!w.matcap,$=!!G,on=!!w.aoMap,Ne=!!w.lightMap,We=!!w.bumpMap,Re=!!w.normalMap,Vt=!!w.displacementMap,Qe=!!w.emissiveMap,P=!!w.metalnessMap,A=!!w.roughnessMap,j=w.anisotropy>0,ce=w.clearcoat>0,le=w.iridescence>0,ue=w.sheen>0,Ce=w.transmission>0,_e=j&&!!w.anisotropyMap,Me=ce&&!!w.clearcoatMap,Ue=ce&&!!w.clearcoatNormalMap,et=ce&&!!w.clearcoatRoughnessMap,oe=le&&!!w.iridescenceMap,_t=le&&!!w.iridescenceThicknessMap,ct=ue&&!!w.sheenColorMap,Xe=ue&&!!w.sheenRoughnessMap,De=!!w.specularMap,Ae=!!w.specularColorMap,Ze=!!w.specularIntensityMap,bt=Ce&&!!w.transmissionMap,jt=Ce&&!!w.thicknessMap,rt=!!w.gradientMap,pe=!!w.alphaMap,B=w.alphaTest>0,ve=!!w.alphaHash,xe=!!w.extensions,Be=!!T.attributes.uv1,ke=!!T.attributes.uv2,Rt=!!T.attributes.uv3,Ct=Ks;return w.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ct=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:z,fragmentShader:X,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:de,instancing:se,instancingColor:se&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:fn,map:be,matcap:qe,envMap:$,envMapMode:$&&G.mapping,envMapCubeUVHeight:q,aoMap:on,lightMap:Ne,bumpMap:We,normalMap:Re,displacementMap:h&&Vt,emissiveMap:Qe,normalMapObjectSpace:Re&&w.normalMapType===Xx,normalMapTangentSpace:Re&&w.normalMapType===Vh,metalnessMap:P,roughnessMap:A,anisotropy:j,anisotropyMap:_e,clearcoat:ce,clearcoatMap:Me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:et,iridescence:le,iridescenceMap:oe,iridescenceThicknessMap:_t,sheen:ue,sheenColorMap:ct,sheenRoughnessMap:Xe,specularMap:De,specularColorMap:Ae,specularIntensityMap:Ze,transmission:Ce,transmissionMap:bt,thicknessMap:jt,gradientMap:rt,opaque:w.transparent===!1&&w.blending===ka,alphaMap:pe,alphaTest:B,alphaHash:ve,combine:w.combine,mapUv:be&&y(w.map.channel),aoMapUv:on&&y(w.aoMap.channel),lightMapUv:Ne&&y(w.lightMap.channel),bumpMapUv:We&&y(w.bumpMap.channel),normalMapUv:Re&&y(w.normalMap.channel),displacementMapUv:Vt&&y(w.displacementMap.channel),emissiveMapUv:Qe&&y(w.emissiveMap.channel),metalnessMapUv:P&&y(w.metalnessMap.channel),roughnessMapUv:A&&y(w.roughnessMap.channel),anisotropyMapUv:_e&&y(w.anisotropyMap.channel),clearcoatMapUv:Me&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&y(w.sheenRoughnessMap.channel),specularMapUv:De&&y(w.specularMap.channel),specularColorMapUv:Ae&&y(w.specularColorMap.channel),specularIntensityMapUv:Ze&&y(w.specularIntensityMap.channel),transmissionMapUv:bt&&y(w.transmissionMap.channel),thicknessMapUv:jt&&y(w.thicknessMap.channel),alphaMapUv:pe&&y(w.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(Re||j),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:ke,vertexUv3s:Rt,pointsUvs:O.isPoints===!0&&!!T.attributes.uv&&(be||pe),fog:!!L,useFog:w.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:re,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&w.map.isVideoTexture===!0&&yt.getTransfer(w.map.colorSpace)===Ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zn,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:xe&&w.extensions.derivatives===!0,extensionFragDepth:xe&&w.extensions.fragDepth===!0,extensionDrawBuffers:xe&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)_.push(I),_.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(b(_,w),v(_,w),_.push(n.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function b(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function v(w,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),w.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function M(w){let _=g[w.type],I;if(_){let N=qi[_];I=Lb.clone(N.uniforms)}else I=w.uniforms;return I}function E(w,_){let I;for(let N=0,O=c.length;N<O;N++){let L=c[N];if(L.cacheKey===_){I=L,++I.usedTimes;break}}return I===void 0&&(I=new BM(n,_,w,r),c.push(I)),I}function R(w){if(--w.usedTimes===0){let _=c.indexOf(w);c[_]=c[c.length-1],c.pop(),w.destroy()}}function x(w){l.remove(w)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:E,releaseProgram:R,releaseShaderCache:x,programs:c,dispose:U}}function VM(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function GM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,h,f,g,y,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=y,m.group=p),e++,m}function o(d,h,f,g,y,p){let m=a(d,h,f,g,y,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(d,h,f,g,y,p){let m=a(d,h,f,g,y,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||GM),i.length>1&&i.sort(h||Cg),s.length>1&&s.sort(h||Cg)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function WM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Lg,n.set(i,[a])):s>=r.length?(a=new Lg,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function qM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function XM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var $M=0;function YM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jM(n,e){let t=new qM,i=XM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);let r=new D,a=new Ee,o=new Ee;function l(u,d){let h=0,f=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,p=0,m=0,b=0,v=0,M=0,E=0,R=0,x=0,U=0,w=0;u.sort(YM);let _=d===!0?Math.PI:1;for(let N=0,O=u.length;N<O;N++){let L=u[N],T=L.color,F=L.intensity,G=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=T.r*F*_,f+=T.g*F*_,g+=T.b*F*_;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],F);w++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*_),L.castShadow){let J=L.shadow,Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=q,s.directionalShadowMatrix[y]=L.shadow.matrix,M++}s.directional[y]=W,y++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(T).multiplyScalar(F*_),W.distance=G,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[m]=W;let J=L.shadow;if(L.map&&(s.spotLightMap[x]=L.map,x++,J.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[m]=J.matrix,L.castShadow){let Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[m]=Q,s.spotShadowMap[m]=q,R++}m++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(T).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[b]=W,b++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*_),W.distance=L.distance,W.decay=L.decay,L.castShadow){let J=L.shadow,Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=L.shadow.matrix,E++}s.point[p]=W,p++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(F*_),W.groundColor.copy(L.groundColor).multiplyScalar(F*_),s.hemi[v]=W,v++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=g;let I=s.hash;(I.directionalLength!==y||I.pointLength!==p||I.spotLength!==m||I.rectAreaLength!==b||I.hemiLength!==v||I.numDirectionalShadows!==M||I.numPointShadows!==E||I.numSpotShadows!==R||I.numSpotMaps!==x||I.numLightProbes!==w)&&(s.directional.length=y,s.spot.length=m,s.rectArea.length=b,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=R+x-U,s.spotLightMap.length=x,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=w,I.directionalLength=y,I.pointLength=p,I.spotLength=m,I.rectAreaLength=b,I.hemiLength=v,I.numDirectionalShadows=M,I.numPointShadows=E,I.numSpotShadows=R,I.numSpotMaps=x,I.numLightProbes=w,s.version=$M++)}function c(u,d){let h=0,f=0,g=0,y=0,p=0,m=d.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){let M=u[b];if(M.isDirectionalLight){let E=s.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(M.isSpotLight){let E=s.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let E=s.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let E=s.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let E=s.hemi[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function Pg(n,e){let t=new jM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ZM(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Pg(n,e),t.set(r,[l])):a>=o.length?(l=new Pg(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var bh=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_h=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QM(n,e,t){let i=new Uo,s=new je,r=new je,a=new At,o=new bh({depthPacking:qx}),l=new _h,c={},u=t.maxTextureSize,d={[$i]:Zn,[Zn]:$i,[zn]:zn},h=new Ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:KM,fragmentShader:JM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Vn;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jg;let m=this.type;this.render=function(R,x,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let w=n.getRenderTarget(),_=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Zs),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=m!==xs&&this.type===xs,L=m===xs&&this.type!==xs;for(let T=0,F=R.length;T<F;T++){let G=R[T],q=G.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let W=q.getFrameExtents();if(s.multiply(W),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,q.mapSize.y=r.y)),q.map===null||O===!0||L===!0){let Q=this.type!==xs?{minFilter:pn,magFilter:pn}:{};q.map!==null&&q.map.dispose(),q.map=new ws(s.x,s.y,Q),q.map.texture.name=G.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let J=q.getViewportCount();for(let Q=0;Q<J;Q++){let re=q.getViewport(Q);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),N.viewport(a),q.updateMatrices(G,Q),i=q.getFrustum(),M(x,U,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===xs&&b(q,U),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(w,_,I)};function b(R,x){let U=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ws(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(x,null,U,h,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(x,null,U,f,y,null)}function v(R,x,U,w){let _=null,I=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)_=I;else if(_=U.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){let N=_.uuid,O=x.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let T=L[O];T===void 0&&(T=_.clone(),L[O]=T,x.addEventListener("dispose",E)),_=T}if(_.visible=x.visible,_.wireframe=x.wireframe,w===xs?_.side=x.shadowSide!==null?x.shadowSide:x.side:_.side=x.shadowSide!==null?x.shadowSide:d[x.side],_.alphaMap=x.alphaMap,_.alphaTest=x.alphaTest,_.map=x.map,_.clipShadows=x.clipShadows,_.clippingPlanes=x.clippingPlanes,_.clipIntersection=x.clipIntersection,_.displacementMap=x.displacementMap,_.displacementScale=x.displacementScale,_.displacementBias=x.displacementBias,_.wireframeLinewidth=x.wireframeLinewidth,_.linewidth=x.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=n.properties.get(_);N.light=U}return _}function M(R,x,U,w,_){if(R.visible===!1)return;if(R.layers.test(x.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===xs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let O=e.update(R),L=R.material;if(Array.isArray(L)){let T=O.groups;for(let F=0,G=T.length;F<G;F++){let q=T[F],W=L[q.materialIndex];if(W&&W.visible){let J=v(R,W,w,_);R.onBeforeShadow(n,R,x,U,O,J,q),n.renderBufferDirect(U,null,O,J,R,q),R.onAfterShadow(n,R,x,U,O,J,q)}}}else if(L.visible){let T=v(R,L,w,_);R.onBeforeShadow(n,R,x,U,O,T,null),n.renderBufferDirect(U,null,O,T,R,null),R.onAfterShadow(n,R,x,U,O,T,null)}}let N=R.children;for(let O=0,L=N.length;O<L;O++)M(N[O],x,U,w,_)}function E(R){R.target.removeEventListener("dispose",E);for(let U in c){let w=c[U],_=R.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}function e1(n,e,t){let i=t.isWebGL2;function s(){let B=!1,ve=new At,xe=null,Be=new At(0,0,0,0);return{setMask:function(ke){xe!==ke&&!B&&(n.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){B=ke},setClear:function(ke,Rt,Ct,vn,On){On===!0&&(ke*=vn,Rt*=vn,Ct*=vn),ve.set(ke,Rt,Ct,vn),Be.equals(ve)===!1&&(n.clearColor(ke,Rt,Ct,vn),Be.copy(ve))},reset:function(){B=!1,xe=null,Be.set(-1,0,0,0)}}}function r(){let B=!1,ve=null,xe=null,Be=null;return{setTest:function(ke){ke?de(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ke){ve!==ke&&!B&&(n.depthMask(ke),ve=ke)},setFunc:function(ke){if(xe!==ke){switch(ke){case xx:n.depthFunc(n.NEVER);break;case bx:n.depthFunc(n.ALWAYS);break;case _x:n.depthFunc(n.LESS);break;case gc:n.depthFunc(n.LEQUAL);break;case wx:n.depthFunc(n.EQUAL);break;case Sx:n.depthFunc(n.GEQUAL);break;case Mx:n.depthFunc(n.GREATER);break;case Ax:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ke}},setLocked:function(ke){B=ke},setClear:function(ke){Be!==ke&&(n.clearDepth(ke),Be=ke)},reset:function(){B=!1,ve=null,xe=null,Be=null}}}function a(){let B=!1,ve=null,xe=null,Be=null,ke=null,Rt=null,Ct=null,vn=null,On=null;return{setTest:function(Lt){B||(Lt?de(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Lt){ve!==Lt&&!B&&(n.stencilMask(Lt),ve=Lt)},setFunc:function(Lt,Un,Wi){(xe!==Lt||Be!==Un||ke!==Wi)&&(n.stencilFunc(Lt,Un,Wi),xe=Lt,Be=Un,ke=Wi)},setOp:function(Lt,Un,Wi){(Rt!==Lt||Ct!==Un||vn!==Wi)&&(n.stencilOp(Lt,Un,Wi),Rt=Lt,Ct=Un,vn=Wi)},setLocked:function(Lt){B=Lt},setClear:function(Lt){On!==Lt&&(n.clearStencil(Lt),On=Lt)},reset:function(){B=!1,ve=null,xe=null,Be=null,ke=null,Rt=null,Ct=null,vn=null,On=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap,h={},f={},g=new WeakMap,y=[],p=null,m=!1,b=null,v=null,M=null,E=null,R=null,x=null,U=null,w=new Ie(0,0,0),_=0,I=!1,N=null,O=null,L=null,T=null,F=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=W>=2);let Q=null,re={},z=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),ne=new At().fromArray(z),te=new At().fromArray(X);function H(B,ve,xe,Be){let ke=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(B,Rt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<xe;Ct++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(ve+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Rt}let se={};se[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(n.DEPTH_TEST),l.setFunc(gc),Qe(!1),P(dm),de(n.CULL_FACE),Re(Zs);function de(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function be(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function qe(B,ve){return f[B]!==ve?(n.bindFramebuffer(B,ve),f[B]=ve,i&&(B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function $(B,ve){let xe=y,Be=!1;if(B)if(xe=g.get(ve),xe===void 0&&(xe=[],g.set(ve,xe)),B.isWebGLMultipleRenderTargets){let ke=B.texture;if(xe.length!==ke.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Ct=ke.length;Rt<Ct;Rt++)xe[Rt]=n.COLOR_ATTACHMENT0+Rt;xe.length=ke.length,Be=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,Be=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,Be=!0);Be&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function on(B){return p!==B?(n.useProgram(B),p=B,!0):!1}let Ne={[Ir]:n.FUNC_ADD,[sx]:n.FUNC_SUBTRACT,[rx]:n.FUNC_REVERSE_SUBTRACT};if(i)Ne[mm]=n.MIN,Ne[gm]=n.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Ne[mm]=B.MIN_EXT,Ne[gm]=B.MAX_EXT)}let We={[ax]:n.ZERO,[ox]:n.ONE,[lx]:n.SRC_COLOR,[ih]:n.SRC_ALPHA,[fx]:n.SRC_ALPHA_SATURATE,[hx]:n.DST_COLOR,[ux]:n.DST_ALPHA,[cx]:n.ONE_MINUS_SRC_COLOR,[sh]:n.ONE_MINUS_SRC_ALPHA,[px]:n.ONE_MINUS_DST_COLOR,[dx]:n.ONE_MINUS_DST_ALPHA,[mx]:n.CONSTANT_COLOR,[gx]:n.ONE_MINUS_CONSTANT_COLOR,[yx]:n.CONSTANT_ALPHA,[vx]:n.ONE_MINUS_CONSTANT_ALPHA};function Re(B,ve,xe,Be,ke,Rt,Ct,vn,On,Lt){if(B===Zs){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(de(n.BLEND),m=!0),B!==ix){if(B!==b||Lt!==I){if((v!==Ir||R!==Ir)&&(n.blendEquation(n.FUNC_ADD),v=Ir,R=Ir),Lt)switch(B){case ka:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hm:n.blendFunc(n.ONE,n.ONE);break;case pm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,E=null,x=null,U=null,w.set(0,0,0),_=0,b=B,I=Lt}return}ke=ke||ve,Rt=Rt||xe,Ct=Ct||Be,(ve!==v||ke!==R)&&(n.blendEquationSeparate(Ne[ve],Ne[ke]),v=ve,R=ke),(xe!==M||Be!==E||Rt!==x||Ct!==U)&&(n.blendFuncSeparate(We[xe],We[Be],We[Rt],We[Ct]),M=xe,E=Be,x=Rt,U=Ct),(vn.equals(w)===!1||On!==_)&&(n.blendColor(vn.r,vn.g,vn.b,On),w.copy(vn),_=On),b=B,I=!1}function Vt(B,ve){B.side===zn?be(n.CULL_FACE):de(n.CULL_FACE);let xe=B.side===Zn;ve&&(xe=!xe),Qe(xe),B.blending===ka&&B.transparent===!1?Re(Zs):Re(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);let Be=B.stencilWrite;c.setTest(Be),Be&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),j(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(B){N!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),N=B)}function P(B){B!==ex?(de(n.CULL_FACE),B!==O&&(B===dm?n.cullFace(n.BACK):B===tx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),O=B}function A(B){B!==L&&(q&&n.lineWidth(B),L=B)}function j(B,ve,xe){B?(de(n.POLYGON_OFFSET_FILL),(T!==ve||F!==xe)&&(n.polygonOffset(ve,xe),T=ve,F=xe)):be(n.POLYGON_OFFSET_FILL)}function ce(B){B?de(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function le(B){B===void 0&&(B=n.TEXTURE0+G-1),Q!==B&&(n.activeTexture(B),Q=B)}function ue(B,ve,xe){xe===void 0&&(Q===null?xe=n.TEXTURE0+G-1:xe=Q);let Be=re[xe];Be===void 0&&(Be={type:void 0,texture:void 0},re[xe]=Be),(Be.type!==B||Be.texture!==ve)&&(Q!==xe&&(n.activeTexture(xe),Q=xe),n.bindTexture(B,ve||se[B]),Be.type=B,Be.texture=ve)}function Ce(){let B=re[Q];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(B){ne.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ne.copy(B))}function bt(B){te.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function jt(B,ve){let xe=d.get(ve);xe===void 0&&(xe=new WeakMap,d.set(ve,xe));let Be=xe.get(B);Be===void 0&&(Be=n.getUniformBlockIndex(ve,B.name),xe.set(B,Be))}function rt(B,ve){let Be=d.get(ve).get(B);u.get(ve)!==Be&&(n.uniformBlockBinding(ve,Be,B.__bindingPointIndex),u.set(ve,Be))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,re={},f={},g=new WeakMap,y=[],p=null,m=!1,b=null,v=null,M=null,E=null,R=null,x=null,U=null,w=new Ie(0,0,0),_=0,I=!1,N=null,O=null,L=null,T=null,F=null,ne.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:de,disable:be,bindFramebuffer:qe,drawBuffers:$,useProgram:on,setBlending:Re,setMaterial:Vt,setFlipSided:Qe,setCullFace:P,setLineWidth:A,setPolygonOffset:j,setScissorTest:ce,activeTexture:le,bindTexture:ue,unbindTexture:Ce,compressedTexImage2D:_e,compressedTexImage3D:Me,texImage2D:De,texImage3D:Ae,updateUBOMapping:jt,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Xe,texSubImage2D:Ue,texSubImage3D:et,compressedTexSubImage2D:oe,compressedTexSubImage3D:_t,scissor:Ze,viewport:bt,reset:pe}}function t1(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return f?new OffscreenCanvas(P,A):ko("canvas")}function y(P,A,j,ce){let le=1;if((P.width>ce||P.height>ce)&&(le=ce/Math.max(P.width,P.height)),le<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let ue=A?wc:Math.floor,Ce=ue(le*P.width),_e=ue(le*P.height);d===void 0&&(d=g(Ce,_e));let Me=j?g(Ce,_e):d;return Me.width=Ce,Me.height=_e,Me.getContext("2d").drawImage(P,0,0,Ce,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ce+"x"+_e+")."),Me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return ch(P.width)&&ch(P.height)}function m(P){return o?!1:P.wrapS!==oi||P.wrapT!==oi||P.minFilter!==pn&&P.minFilter!==cn}function b(P,A){return P.generateMipmaps&&A&&P.minFilter!==pn&&P.minFilter!==cn}function v(P){n.generateMipmap(P)}function M(P,A,j,ce,le=!1){if(o===!1)return A;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=A;if(A===n.RED&&(j===n.FLOAT&&(ue=n.R32F),j===n.HALF_FLOAT&&(ue=n.R16F),j===n.UNSIGNED_BYTE&&(ue=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.R8UI),j===n.UNSIGNED_SHORT&&(ue=n.R16UI),j===n.UNSIGNED_INT&&(ue=n.R32UI),j===n.BYTE&&(ue=n.R8I),j===n.SHORT&&(ue=n.R16I),j===n.INT&&(ue=n.R32I)),A===n.RG&&(j===n.FLOAT&&(ue=n.RG32F),j===n.HALF_FLOAT&&(ue=n.RG16F),j===n.UNSIGNED_BYTE&&(ue=n.RG8)),A===n.RGBA){let Ce=le?vc:yt.getTransfer(ce);j===n.FLOAT&&(ue=n.RGBA32F),j===n.HALF_FLOAT&&(ue=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ue=Ce===Ot?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function E(P,A,j){return b(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==pn&&P.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function R(P){return P===pn||P===yc||P===Ro?n.NEAREST:n.LINEAR}function x(P){let A=P.target;A.removeEventListener("dispose",x),w(A),A.isVideoTexture&&u.delete(A)}function U(P){let A=P.target;A.removeEventListener("dispose",U),I(A)}function w(P){let A=i.get(P);if(A.__webglInit===void 0)return;let j=P.source,ce=h.get(j);if(ce){let le=ce[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&_(P),Object.keys(ce).length===0&&h.delete(j)}i.remove(P)}function _(P){let A=i.get(P);n.deleteTexture(A.__webglTexture);let j=P.source,ce=h.get(j);delete ce[A.__cacheKey],a.memory.textures--}function I(P){let A=P.texture,j=i.get(P),ce=i.get(A);if(ce.__webglTexture!==void 0&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(j.__webglFramebuffer[le]))for(let ue=0;ue<j.__webglFramebuffer[le].length;ue++)n.deleteFramebuffer(j.__webglFramebuffer[le][ue]);else n.deleteFramebuffer(j.__webglFramebuffer[le]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[le])}else{if(Array.isArray(j.__webglFramebuffer))for(let le=0;le<j.__webglFramebuffer.length;le++)n.deleteFramebuffer(j.__webglFramebuffer[le]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let le=0;le<j.__webglColorRenderbuffer.length;le++)j.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[le]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let le=0,ue=A.length;le<ue;le++){let Ce=i.get(A[le]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),a.memory.textures--),i.remove(A[le])}i.remove(A),i.remove(P)}let N=0;function O(){N=0}function L(){let P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function T(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function F(P,A){let j=i.get(P);if(P.isVideoTexture&&Vt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){let ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(j,P,A);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function G(P,A){let j=i.get(P);if(P.version>0&&j.__version!==P.version){ne(j,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function q(P,A){let j=i.get(P);if(P.version>0&&j.__version!==P.version){ne(j,P,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function W(P,A){let j=i.get(P);if(P.version>0&&j.__version!==P.version){te(j,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}let J={[Ur]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[No]:n.MIRRORED_REPEAT},Q={[pn]:n.NEAREST,[yc]:n.NEAREST_MIPMAP_NEAREST,[Ro]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[zh]:n.LINEAR_MIPMAP_NEAREST,[Qs]:n.LINEAR_MIPMAP_LINEAR},re={[$x]:n.NEVER,[Qx]:n.ALWAYS,[Yx]:n.LESS,[c0]:n.LEQUAL,[jx]:n.EQUAL,[Jx]:n.GEQUAL,[Zx]:n.GREATER,[Kx]:n.NOTEQUAL};function z(P,A,j){if(j?(n.texParameteri(P,n.TEXTURE_WRAP_S,J[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,J[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,J[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Q[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Q[A.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==oi||A.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,R(A.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,R(A.minFilter)),A.minFilter!==pn&&A.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ce=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===pn||A.minFilter!==Ro&&A.minFilter!==Qs||A.type===bs&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Do&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(P,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function X(P,A){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",x));let ce=A.source,le=h.get(ce);le===void 0&&(le={},h.set(ce,le));let ue=T(A);if(ue!==P.__cacheKey){le[ue]===void 0&&(le[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),le[ue].usedTimes++;let Ce=le[P.__cacheKey];Ce!==void 0&&(le[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&_(A)),P.__cacheKey=ue,P.__webglTexture=le[ue].texture}return j}function ne(P,A,j){let ce=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ce=n.TEXTURE_3D);let le=X(P,A),ue=A.source;t.bindTexture(ce,P.__webglTexture,n.TEXTURE0+j);let Ce=i.get(ue);if(ue.version!==Ce.__version||le===!0){t.activeTexture(n.TEXTURE0+j);let _e=yt.getPrimaries(yt.workingColorSpace),Me=A.colorSpace===vi?null:yt.getPrimaries(A.colorSpace),Ue=A.colorSpace===vi||_e===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let et=m(A)&&p(A.image)===!1,oe=y(A.image,et,!1,s.maxTextureSize);oe=Qe(A,oe);let _t=p(oe)||o,ct=r.convert(A.format,A.colorSpace),Xe=r.convert(A.type),De=M(A.internalFormat,ct,Xe,A.colorSpace,A.isVideoTexture);z(ce,A,_t);let Ae,Ze=A.mipmaps,bt=o&&A.isVideoTexture!==!0&&De!==a0,jt=Ce.__version===void 0||le===!0,rt=E(A,oe,_t);if(A.isDepthTexture)De=n.DEPTH_COMPONENT,o?A.type===bs?De=n.DEPTH_COMPONENT32F:A.type===Ys?De=n.DEPTH_COMPONENT24:A.type===Dr?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:A.type===bs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===kr&&De===n.DEPTH_COMPONENT&&A.type!==Hh&&A.type!==Ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ys,Xe=r.convert(A.type)),A.format===za&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,A.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Dr,Xe=r.convert(A.type))),jt&&(bt?t.texStorage2D(n.TEXTURE_2D,1,De,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,De,oe.width,oe.height,0,ct,Xe,null));else if(A.isDataTexture)if(Ze.length>0&&_t){bt&&jt&&t.texStorage2D(n.TEXTURE_2D,rt,De,Ze[0].width,Ze[0].height);for(let pe=0,B=Ze.length;pe<B;pe++)Ae=Ze[pe],bt?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,ct,Xe,Ae.data):t.texImage2D(n.TEXTURE_2D,pe,De,Ae.width,Ae.height,0,ct,Xe,Ae.data);A.generateMipmaps=!1}else bt?(jt&&t.texStorage2D(n.TEXTURE_2D,rt,De,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ct,Xe,oe.data)):t.texImage2D(n.TEXTURE_2D,0,De,oe.width,oe.height,0,ct,Xe,oe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){bt&&jt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,De,Ze[0].width,Ze[0].height,oe.depth);for(let pe=0,B=Ze.length;pe<B;pe++)Ae=Ze[pe],A.format!==yi?ct!==null?bt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,oe.depth,ct,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,De,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,oe.depth,ct,Xe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,De,Ae.width,Ae.height,oe.depth,0,ct,Xe,Ae.data)}else{bt&&jt&&t.texStorage2D(n.TEXTURE_2D,rt,De,Ze[0].width,Ze[0].height);for(let pe=0,B=Ze.length;pe<B;pe++)Ae=Ze[pe],A.format!==yi?ct!==null?bt?t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,ct,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,De,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,ct,Xe,Ae.data):t.texImage2D(n.TEXTURE_2D,pe,De,Ae.width,Ae.height,0,ct,Xe,Ae.data)}else if(A.isDataArrayTexture)bt?(jt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,De,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ct,Xe,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,ct,Xe,oe.data);else if(A.isData3DTexture)bt?(jt&&t.texStorage3D(n.TEXTURE_3D,rt,De,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ct,Xe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,ct,Xe,oe.data);else if(A.isFramebufferTexture){if(jt)if(bt)t.texStorage2D(n.TEXTURE_2D,rt,De,oe.width,oe.height);else{let pe=oe.width,B=oe.height;for(let ve=0;ve<rt;ve++)t.texImage2D(n.TEXTURE_2D,ve,De,pe,B,0,ct,Xe,null),pe>>=1,B>>=1}}else if(Ze.length>0&&_t){bt&&jt&&t.texStorage2D(n.TEXTURE_2D,rt,De,Ze[0].width,Ze[0].height);for(let pe=0,B=Ze.length;pe<B;pe++)Ae=Ze[pe],bt?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ct,Xe,Ae):t.texImage2D(n.TEXTURE_2D,pe,De,ct,Xe,Ae);A.generateMipmaps=!1}else bt?(jt&&t.texStorage2D(n.TEXTURE_2D,rt,De,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,Xe,oe)):t.texImage2D(n.TEXTURE_2D,0,De,ct,Xe,oe);b(A,_t)&&v(ce),Ce.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function te(P,A,j){if(A.image.length!==6)return;let ce=X(P,A),le=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+j);let ue=i.get(le);if(le.version!==ue.__version||ce===!0){t.activeTexture(n.TEXTURE0+j);let Ce=yt.getPrimaries(yt.workingColorSpace),_e=A.colorSpace===vi?null:yt.getPrimaries(A.colorSpace),Me=A.colorSpace===vi||Ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ue=A.isCompressedTexture||A.image[0].isCompressedTexture,et=A.image[0]&&A.image[0].isDataTexture,oe=[];for(let pe=0;pe<6;pe++)!Ue&&!et?oe[pe]=y(A.image[pe],!1,!0,s.maxCubemapSize):oe[pe]=et?A.image[pe].image:A.image[pe],oe[pe]=Qe(A,oe[pe]);let _t=oe[0],ct=p(_t)||o,Xe=r.convert(A.format,A.colorSpace),De=r.convert(A.type),Ae=M(A.internalFormat,Xe,De,A.colorSpace),Ze=o&&A.isVideoTexture!==!0,bt=ue.__version===void 0||ce===!0,jt=E(A,_t,ct);z(n.TEXTURE_CUBE_MAP,A,ct);let rt;if(Ue){Ze&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,jt,Ae,_t.width,_t.height);for(let pe=0;pe<6;pe++){rt=oe[pe].mipmaps;for(let B=0;B<rt.length;B++){let ve=rt[B];A.format!==yi?Xe!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B,0,0,ve.width,ve.height,Xe,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B,0,0,ve.width,ve.height,Xe,De,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B,Ae,ve.width,ve.height,0,Xe,De,ve.data)}}}else{rt=A.mipmaps,Ze&&bt&&(rt.length>0&&jt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,jt,Ae,oe[0].width,oe[0].height));for(let pe=0;pe<6;pe++)if(et){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,oe[pe].width,oe[pe].height,Xe,De,oe[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ae,oe[pe].width,oe[pe].height,0,Xe,De,oe[pe].data);for(let B=0;B<rt.length;B++){let xe=rt[B].image[pe].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B+1,0,0,xe.width,xe.height,Xe,De,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B+1,Ae,xe.width,xe.height,0,Xe,De,xe.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe,De,oe[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ae,Xe,De,oe[pe]);for(let B=0;B<rt.length;B++){let ve=rt[B];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B+1,0,0,Xe,De,ve.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B+1,Ae,Xe,De,ve.image[pe])}}}b(A,ct)&&v(n.TEXTURE_CUBE_MAP),ue.__version=le.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function H(P,A,j,ce,le,ue){let Ce=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Me=M(j.internalFormat,Ce,_e,j.colorSpace);if(!i.get(A).__hasExternalTextures){let et=Math.max(1,A.width>>ue),oe=Math.max(1,A.height>>ue);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,ue,Me,et,oe,A.depth,0,Ce,_e,null):t.texImage2D(le,ue,Me,et,oe,0,Ce,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Re(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,le,i.get(j).__webglTexture,0,We(A)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,le,i.get(j).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(P,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ce=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||Re(A)){let le=A.depthTexture;le&&le.isDepthTexture&&(le.type===bs?ce=n.DEPTH_COMPONENT32F:le.type===Ys&&(ce=n.DEPTH_COMPONENT24));let ue=We(A);Re(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ce,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ce,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){let ce=We(A);j&&Re(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,A.width,A.height):Re(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{let ce=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0;le<ce.length;le++){let ue=ce[le],Ce=r.convert(ue.format,ue.colorSpace),_e=r.convert(ue.type),Me=M(ue.internalFormat,Ce,_e,ue.colorSpace),Ue=We(A);j&&Re(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Me,A.width,A.height):Re(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,Me,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Me,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let ce=i.get(A.depthTexture).__webglTexture,le=We(A);if(A.depthTexture.format===kr)Re(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(A.depthTexture.format===za)Re(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function be(P){let A=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");de(A.__webglFramebuffer,P)}else if(j){A.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ce]),A.__webglDepthbuffer[ce]=n.createRenderbuffer(),se(A.__webglDepthbuffer[ce],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),se(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(P,A,j){let ce=i.get(P);A!==void 0&&H(ce.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&be(P)}function $(P){let A=P.texture,j=i.get(P),ce=i.get(A);P.addEventListener("dispose",U),P.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=A.version,a.memory.textures++);let le=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Ce=p(P)||o;if(le){j.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[_e]=[];for(let Me=0;Me<A.mipmaps.length;Me++)j.__webglFramebuffer[_e][Me]=n.createFramebuffer()}else j.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let _e=0;_e<A.mipmaps.length;_e++)j.__webglFramebuffer[_e]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(ue)if(s.drawBuffers){let _e=P.texture;for(let Me=0,Ue=_e.length;Me<Ue;Me++){let et=i.get(_e[Me]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Re(P)===!1){let _e=ue?A:[A];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Me=0;Me<_e.length;Me++){let Ue=_e[Me];j.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Me]);let et=r.convert(Ue.format,Ue.colorSpace),oe=r.convert(Ue.type),_t=M(Ue.internalFormat,et,oe,Ue.colorSpace,P.isXRRenderTarget===!0),ct=We(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,_t,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,j.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),se(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),z(n.TEXTURE_CUBE_MAP,A,Ce);for(let _e=0;_e<6;_e++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let Me=0;Me<A.mipmaps.length;Me++)H(j.__webglFramebuffer[_e][Me],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else H(j.__webglFramebuffer[_e],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);b(A,Ce)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){let _e=P.texture;for(let Me=0,Ue=_e.length;Me<Ue;Me++){let et=_e[Me],oe=i.get(et);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),z(n.TEXTURE_2D,et,Ce),H(j.__webglFramebuffer,P,et,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),b(et,Ce)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?_e=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ce.__webglTexture),z(_e,A,Ce),o&&A.mipmaps&&A.mipmaps.length>0)for(let Me=0;Me<A.mipmaps.length;Me++)H(j.__webglFramebuffer[Me],P,A,n.COLOR_ATTACHMENT0,_e,Me);else H(j.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,_e,0);b(A,Ce)&&v(_e),t.unbindTexture()}P.depthBuffer&&be(P)}function on(P){let A=p(P)||o,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ce=0,le=j.length;ce<le;ce++){let ue=j[ce];if(b(ue,A)){let Ce=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(ue).__webglTexture;t.bindTexture(Ce,_e),v(Ce),t.unbindTexture()}}}function Ne(P){if(o&&P.samples>0&&Re(P)===!1){let A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,ce=P.height,le=n.COLOR_BUFFER_BIT,ue=[],Ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(P),Me=P.isWebGLMultipleRenderTargets===!0;if(Me)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){ue.push(n.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&ue.push(Ce);let et=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(et===!1&&(P.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Me){let oe=i.get(A[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,j,ce,0,0,j,ce,le,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]);let et=i.get(A[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function We(P){return Math.min(s.maxSamples,P.samples)}function Re(P){let A=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Vt(P){let A=a.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function Qe(P,A){let j=P.colorSpace,ce=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===lh||j!==fn&&j!==vi&&(yt.getTransfer(j)===Ot?o===!1?e.has("EXT_sRGB")===!0&&ce===yi?(P.format=lh,P.minFilter=cn,P.generateMipmaps=!1):A=Sc.sRGBToLinear(A):(ce!==yi||le!==Js)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=qe,this.setupRenderTarget=$,this.updateRenderTargetMipmap=on,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Re}function n1(n,e,t){let i=t.isWebGL2;function s(r,a=vi){let o,l=yt.getTransfer(a);if(r===Js)return n.UNSIGNED_BYTE;if(r===t0)return n.UNSIGNED_SHORT_4_4_4_4;if(r===n0)return n.UNSIGNED_SHORT_5_5_5_1;if(r===kx)return n.BYTE;if(r===Ox)return n.SHORT;if(r===Hh)return n.UNSIGNED_SHORT;if(r===e0)return n.INT;if(r===Ys)return n.UNSIGNED_INT;if(r===bs)return n.FLOAT;if(r===Do)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ux)return n.ALPHA;if(r===yi)return n.RGBA;if(r===Fx)return n.LUMINANCE;if(r===Bx)return n.LUMINANCE_ALPHA;if(r===kr)return n.DEPTH_COMPONENT;if(r===za)return n.DEPTH_STENCIL;if(r===lh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zx)return n.RED;if(r===i0)return n.RED_INTEGER;if(r===Hx)return n.RG;if(r===s0)return n.RG_INTEGER;if(r===r0)return n.RGBA_INTEGER;if(r===Md||r===Ad||r===Ed||r===Td)if(l===Ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Md)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ad)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ed)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Td)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Md)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ad)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ed)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Td)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vm||r===xm||r===bm||r===_m)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===vm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_m)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===a0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wm||r===Sm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===wm)return l===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Sm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mm||r===Am||r===Em||r===Tm||r===Rm||r===Cm||r===Lm||r===Pm||r===Im||r===Nm||r===Dm||r===km||r===Om||r===Um)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Mm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Am)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Em)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Im)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dm)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===km)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Om)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Um)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rd||r===Fm||r===Bm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Rd)return l===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vx||r===zm||r===Hm||r===Vm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Rd)return o.COMPRESSED_RED_RGTC1_EXT;if(r===zm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Dr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var wh=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ln=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},i1={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Sh=class extends er{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,y=t.getContextAttributes(),p=null,m=null,b=[],v=[],M=new je,E=null,R=new qt;R.layers.enable(1),R.viewport=new At;let x=new qt;x.layers.enable(2),x.viewport=new At;let U=[R,x],w=new wh;w.layers.enable(1),w.layers.enable(2);let _=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=b[z];return X===void 0&&(X=new Io,b[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=b[z];return X===void 0&&(X=new Io,b[z]=X),X.getGripSpace()},this.getHand=function(z){let X=b[z];return X===void 0&&(X=new Io,b[z]=X),X.getHandSpace()};function N(z){let X=v.indexOf(z.inputSource);if(X===-1)return;let ne=b[X];ne!==void 0&&(ne.update(z.inputSource,z.frame,c||a),ne.dispatchEvent({type:z.type,data:z.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",L);for(let z=0;z<b.length;z++){let X=v[z];X!==null&&(v[z]=null,b[z].disconnect(X))}_=null,I=null,e.setRenderTarget(p),f=null,h=null,d=null,s=null,m=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new ws(f.framebufferWidth,f.framebufferHeight,{format:yi,type:Js,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let X=null,ne=null,te=null;y.depth&&(te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=y.stencil?za:kr,ne=y.stencil?Dr:Ys);let H={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(H),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new ws(h.textureWidth,h.textureHeight,{format:yi,type:Js,depthTexture:new Pc(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let se=e.properties.get(m);se.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(z){for(let X=0;X<z.removed.length;X++){let ne=z.removed[X],te=v.indexOf(ne);te>=0&&(v[te]=null,b[te].disconnect(ne))}for(let X=0;X<z.added.length;X++){let ne=z.added[X],te=v.indexOf(ne);if(te===-1){for(let se=0;se<b.length;se++)if(se>=v.length){v.push(ne),te=se;break}else if(v[se]===null){v[se]=ne,te=se;break}if(te===-1)break}let H=b[te];H&&H.connect(ne)}}let T=new D,F=new D;function G(z,X,ne){T.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(ne.matrixWorld);let te=T.distanceTo(F),H=X.projectionMatrix.elements,se=ne.projectionMatrix.elements,de=H[14]/(H[10]-1),be=H[14]/(H[10]+1),qe=(H[9]+1)/H[5],$=(H[9]-1)/H[5],on=(H[8]-1)/H[0],Ne=(se[8]+1)/se[0],We=de*on,Re=de*Ne,Vt=te/(-on+Ne),Qe=Vt*-on;X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Qe),z.translateZ(Vt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let P=de+Vt,A=be+Vt,j=We-Qe,ce=Re+(te-Qe),le=qe*be/A*P,ue=$*be/A*P;z.projectionMatrix.makePerspective(j,ce,le,ue,P,A),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function q(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;w.near=x.near=R.near=z.near,w.far=x.far=R.far=z.far,(_!==w.near||I!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),_=w.near,I=w.far);let X=z.parent,ne=w.cameras;q(w,X);for(let te=0;te<ne.length;te++)q(ne[te],X);ne.length===2?G(w,R,x):w.projectionMatrix.copy(R.projectionMatrix),W(z,w,X)};function W(z,X,ne){ne===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(ne.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Va*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let J=null;function Q(z,X){if(u=X.getViewerPose(c||a),g=X,u!==null){let ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let te=!1;ne.length!==w.cameras.length&&(w.cameras.length=0,te=!0);for(let H=0;H<ne.length;H++){let se=ne[H],de=null;if(f!==null)de=f.getViewport(se);else{let qe=d.getViewSubImage(h,se);de=qe.viewport,H===0&&(e.setRenderTargetTextures(m,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(m))}let be=U[H];be===void 0&&(be=new qt,be.layers.enable(H),be.viewport=new At,U[H]=be),be.matrix.fromArray(se.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(se.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(de.x,de.y,de.width,de.height),H===0&&(w.matrix.copy(be.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),te===!0&&w.cameras.push(be)}}for(let ne=0;ne<b.length;ne++){let te=v[ne],H=b[ne];te!==null&&H!==void 0&&H.update(te,X,c||a)}J&&J(z,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let re=new p0;re.setAnimationLoop(Q),this.setAnimationLoop=function(z){J=z},this.dispose=function(){}}};function s1(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,h0(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function r1(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){let M=v.program;i.uniformBlockBinding(b,M)}function c(b,v){let M=s[b.id];M===void 0&&(g(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",p));let E=v.program;i.updateUBOMapping(b,E);let R=e.render.frame;r[b.id]!==R&&(h(b),r[b.id]=R)}function u(b){let v=d();b.__bindingPointIndex=v;let M=n.createBuffer(),E=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let v=s[b.id],M=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,x=M.length;R<x;R++){let U=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,_=U.length;w<_;w++){let I=U[w];if(f(I,R,w,E)===!0){let N=I.__offset,O=Array.isArray(I.value)?I.value:[I.value],L=0;for(let T=0;T<O.length;T++){let F=O[T],G=y(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,N+L,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,v,M,E){let R=b.value,x=v+"_"+M;if(E[x]===void 0)return typeof R=="number"||typeof R=="boolean"?E[x]=R:E[x]=R.clone(),!0;{let U=E[x];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return E[x]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(b){let v=b.uniforms,M=0,E=16;for(let x=0,U=v.length;x<U;x++){let w=Array.isArray(v[x])?v[x]:[v[x]];for(let _=0,I=w.length;_<I;_++){let N=w[_],O=Array.isArray(N.value)?N.value:[N.value];for(let L=0,T=O.length;L<T;L++){let F=O[L],G=y(F),q=M%E;q!==0&&E-q<G.boundary&&(M+=E-q),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=G.storage}}}let R=M%E;return R>0&&(M+=E-R),b.__size=M,b.__cache={},this}function y(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var zr=class{constructor(e={}){let{canvas:t=fb(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=Ks,this.toneMappingExposure=1;let v=this,M=!1,E=0,R=0,x=null,U=-1,w=null,_=new At,I=new At,N=null,O=new Ie(0),L=0,T=t.width,F=t.height,G=1,q=null,W=null,J=new At(0,0,T,F),Q=new At(0,0,T,F),re=!1,z=new Uo,X=!1,ne=!1,te=null,H=new Ee,se=new je,de=new D,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return x===null?G:1}let $=i;function on(C,V){for(let Z=0;Z<C.length;Z++){let K=C[Z],Y=t.getContext(K,V);if(Y!==null)return Y}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ve,!1),$===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),$=on(V,C),$===null)throw on(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ne,We,Re,Vt,Qe,P,A,j,ce,le,ue,Ce,_e,Me,Ue,et,oe,_t,ct,Xe,De,Ae,Ze,bt;function jt(){Ne=new MS($),We=new vS($,Ne,e),Ne.init(We),Ae=new n1($,Ne,We),Re=new e1($,Ne,We),Vt=new TS($),Qe=new VM,P=new t1($,Ne,Re,Qe,We,Ae,Vt),A=new bS(v),j=new SS(v),ce=new kb($,We),Ze=new gS($,Ne,ce,We),le=new AS($,ce,Vt,Ze),ue=new PS($,le,ce,Vt),ct=new LS($,We,P),et=new xS(Qe),Ce=new HM(v,A,j,Ne,We,Ze,et),_e=new s1(v,Qe),Me=new WM,Ue=new ZM(Ne,We),_t=new mS(v,A,j,Re,ue,h,l),oe=new QM(v,ue,We),bt=new r1($,Vt,We,Re),Xe=new yS($,Ne,Vt,We),De=new ES($,Ne,Vt,We),Vt.programs=Ce.programs,v.capabilities=We,v.extensions=Ne,v.properties=Qe,v.renderLists=Me,v.shadowMap=oe,v.state=Re,v.info=Vt}jt();let rt=new Sh(v,$);this.xr=rt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let C=Ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(T,F,!1))},this.getSize=function(C){return C.set(T,F)},this.setSize=function(C,V,Z=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=C,F=V,t.width=Math.floor(C*G),t.height=Math.floor(V*G),Z===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(T*G,F*G).floor()},this.setDrawingBufferSize=function(C,V,Z){T=C,F=V,G=Z,t.width=Math.floor(C*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(_)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,V,Z,K){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,V,Z,K),Re.viewport(_.copy(J).multiplyScalar(G).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,V,Z,K){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,V,Z,K),Re.scissor(I.copy(Q).multiplyScalar(G).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){Re.setScissorTest(re=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(C=!0,V=!0,Z=!0){let K=0;if(C){let Y=!1;if(x!==null){let we=x.texture.format;Y=we===r0||we===s0||we===i0}if(Y){let we=x.texture.type,Le=we===Js||we===Ys||we===Hh||we===Dr||we===t0||we===n0,Oe=_t.getClearColor(),He=_t.getClearAlpha(),tt=Oe.r,$e=Oe.g,Ye=Oe.b;Le?(f[0]=tt,f[1]=$e,f[2]=Ye,f[3]=He,$.clearBufferuiv($.COLOR,0,f)):(g[0]=tt,g[1]=$e,g[2]=Ye,g[3]=He,$.clearBufferiv($.COLOR,0,g))}else K|=$.COLOR_BUFFER_BIT}V&&(K|=$.DEPTH_BUFFER_BIT),Z&&(K|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Me.dispose(),Ue.dispose(),Qe.dispose(),A.dispose(),j.dispose(),ue.dispose(),Ze.dispose(),bt.dispose(),Ce.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",On),rt.removeEventListener("sessionend",Lt),te&&(te.dispose(),te=null),Un.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let C=Vt.autoReset,V=oe.enabled,Z=oe.autoUpdate,K=oe.needsUpdate,Y=oe.type;jt(),Vt.autoReset=C,oe.enabled=V,oe.autoUpdate=Z,oe.needsUpdate=K,oe.type=Y}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){let V=C.target;V.removeEventListener("dispose",xe),Be(V)}function Be(C){ke(C),Qe.remove(C)}function ke(C){let V=Qe.get(C).programs;V!==void 0&&(V.forEach(function(Z){Ce.releaseProgram(Z)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Z,K,Y,we){V===null&&(V=be);let Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=Zv(C,V,Z,K,Y);Re.setMaterial(K,Le);let He=Z.index,tt=1;if(K.wireframe===!0){if(He=le.getWireframeAttribute(Z),He===void 0)return;tt=2}let $e=Z.drawRange,Ye=Z.attributes.position,en=$e.start*tt,ii=($e.start+$e.count)*tt;we!==null&&(en=Math.max(en,we.start*tt),ii=Math.min(ii,(we.start+we.count)*tt)),He!==null?(en=Math.max(en,0),ii=Math.min(ii,He.count)):Ye!=null&&(en=Math.max(en,0),ii=Math.min(ii,Ye.count));let xn=ii-en;if(xn<0||xn===1/0)return;Ze.setup(Y,K,Oe,Z,He);let hs,Gt=Xe;if(He!==null&&(hs=ce.get(He),Gt=De,Gt.setIndex(hs)),Y.isMesh)K.wireframe===!0?(Re.setLineWidth(K.wireframeLinewidth*qe()),Gt.setMode($.LINES)):Gt.setMode($.TRIANGLES);else if(Y.isLine){let at=K.linewidth;at===void 0&&(at=1),Re.setLineWidth(at*qe()),Y.isLineSegments?Gt.setMode($.LINES):Y.isLineLoop?Gt.setMode($.LINE_LOOP):Gt.setMode($.LINE_STRIP)}else Y.isPoints?Gt.setMode($.POINTS):Y.isSprite&&Gt.setMode($.TRIANGLES);if(Y.isBatchedMesh)Gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Gt.renderInstances(en,xn,Y.count);else if(Z.isInstancedBufferGeometry){let at=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,bd=Math.min(Z.instanceCount,at);Gt.renderInstances(en,xn,bd)}else Gt.render(en,xn)};function Rt(C,V,Z){C.transparent===!0&&C.side===zn&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,Hl(C,V,Z),C.side=$i,C.needsUpdate=!0,Hl(C,V,Z),C.side=zn):Hl(C,V,Z)}this.compile=function(C,V,Z=null){Z===null&&(Z=C),p=Ue.get(Z),p.init(),b.push(p),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),C!==Z&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);let K=new Set;return C.traverse(function(Y){let we=Y.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){let Oe=we[Le];Rt(Oe,Z,Y),K.add(Oe)}else Rt(we,Z,Y),K.add(we)}),b.pop(),p=null,K},this.compileAsync=function(C,V,Z=null){let K=this.compile(C,V,Z);return new Promise(Y=>{function we(){if(K.forEach(function(Le){Qe.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){Y(C);return}setTimeout(we,10)}Ne.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ct=null;function vn(C){Ct&&Ct(C)}function On(){Un.stop()}function Lt(){Un.start()}let Un=new p0;Un.setAnimationLoop(vn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(C){Ct=C,rt.setAnimationLoop(C),C===null?Un.stop():Un.start()},rt.addEventListener("sessionstart",On),rt.addEventListener("sessionend",Lt),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(V),V=rt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,x),p=Ue.get(C,b.length),p.init(),b.push(p),H.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),z.setFromProjectionMatrix(H),ne=this.localClippingEnabled,X=et.init(this.clippingPlanes,ne),y=Me.get(C,m.length),y.init(),m.push(y),Wi(C,V,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(q,W),this.info.render.frame++,X===!0&&et.beginShadows();let Z=p.state.shadowsArray;if(oe.render(Z,C,V),X===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),_t.render(y,C),p.setupLights(v._useLegacyLights),V.isArrayCamera){let K=V.cameras;for(let Y=0,we=K.length;Y<we;Y++){let Le=K[Y];rm(y,C,Le,Le.viewport)}}else rm(y,C,V);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(v,C,V),Ze.resetDefaultState(),U=-1,w=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Wi(C,V,Z,K){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||z.intersectsSprite(C)){K&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(H);let Le=ue.update(C),Oe=C.material;Oe.visible&&y.push(C,Le,Oe,Z,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||z.intersectsObject(C))){let Le=ue.update(C),Oe=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),de.copy(Le.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(H)),Array.isArray(Oe)){let He=Le.groups;for(let tt=0,$e=He.length;tt<$e;tt++){let Ye=He[tt],en=Oe[Ye.materialIndex];en&&en.visible&&y.push(C,Le,en,Z,de.z,Ye)}}else Oe.visible&&y.push(C,Le,Oe,Z,de.z,null)}}let we=C.children;for(let Le=0,Oe=we.length;Le<Oe;Le++)Wi(we[Le],V,Z,K)}function rm(C,V,Z,K){let Y=C.opaque,we=C.transmissive,Le=C.transparent;p.setupLightsView(Z),X===!0&&et.setGlobalState(v.clippingPlanes,Z),we.length>0&&jv(Y,we,V,Z),K&&Re.viewport(_.copy(K)),Y.length>0&&zl(Y,V,Z),we.length>0&&zl(we,V,Z),Le.length>0&&zl(Le,V,Z),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function jv(C,V,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let we=We.isWebGL2;te===null&&(te=new ws(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?Do:Js,minFilter:Qs,samples:we?4:0})),v.getDrawingBufferSize(se),we?te.setSize(se.x,se.y):te.setSize(wc(se.x),wc(se.y));let Le=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(O),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Oe=v.toneMapping;v.toneMapping=Ks,zl(C,Z,K),P.updateMultisampleRenderTarget(te),P.updateRenderTargetMipmap(te);let He=!1;for(let tt=0,$e=V.length;tt<$e;tt++){let Ye=V[tt],en=Ye.object,ii=Ye.geometry,xn=Ye.material,hs=Ye.group;if(xn.side===zn&&en.layers.test(K.layers)){let Gt=xn.side;xn.side=Zn,xn.needsUpdate=!0,am(en,Z,K,ii,xn,hs),xn.side=Gt,xn.needsUpdate=!0,He=!0}}He===!0&&(P.updateMultisampleRenderTarget(te),P.updateRenderTargetMipmap(te)),v.setRenderTarget(Le),v.setClearColor(O,L),v.toneMapping=Oe}function zl(C,V,Z){let K=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,we=C.length;Y<we;Y++){let Le=C[Y],Oe=Le.object,He=Le.geometry,tt=K===null?Le.material:K,$e=Le.group;Oe.layers.test(Z.layers)&&am(Oe,V,Z,He,tt,$e)}}function am(C,V,Z,K,Y,we){C.onBeforeRender(v,V,Z,K,Y,we),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,V,Z,K,C,we),Y.transparent===!0&&Y.side===zn&&Y.forceSinglePass===!1?(Y.side=Zn,Y.needsUpdate=!0,v.renderBufferDirect(Z,V,K,Y,C,we),Y.side=$i,Y.needsUpdate=!0,v.renderBufferDirect(Z,V,K,Y,C,we),Y.side=zn):v.renderBufferDirect(Z,V,K,Y,C,we),C.onAfterRender(v,V,Z,K,Y,we)}function Hl(C,V,Z){V.isScene!==!0&&(V=be);let K=Qe.get(C),Y=p.state.lights,we=p.state.shadowsArray,Le=Y.state.version,Oe=Ce.getParameters(C,Y.state,we,V,Z),He=Ce.getProgramCacheKey(Oe),tt=K.programs;K.environment=C.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(C.isMeshStandardMaterial?j:A).get(C.envMap||K.environment),tt===void 0&&(C.addEventListener("dispose",xe),tt=new Map,K.programs=tt);let $e=tt.get(He);if($e!==void 0){if(K.currentProgram===$e&&K.lightsStateVersion===Le)return lm(C,Oe),$e}else Oe.uniforms=Ce.getUniforms(C),C.onBuild(Z,Oe,v),C.onBeforeCompile(Oe,v),$e=Ce.acquireProgram(Oe,He),tt.set(He,$e),K.uniforms=Oe.uniforms;let Ye=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=et.uniform),lm(C,Oe),K.needsLights=Jv(C),K.lightsStateVersion=Le,K.needsLights&&(Ye.ambientLightColor.value=Y.state.ambient,Ye.lightProbe.value=Y.state.probe,Ye.directionalLights.value=Y.state.directional,Ye.directionalLightShadows.value=Y.state.directionalShadow,Ye.spotLights.value=Y.state.spot,Ye.spotLightShadows.value=Y.state.spotShadow,Ye.rectAreaLights.value=Y.state.rectArea,Ye.ltc_1.value=Y.state.rectAreaLTC1,Ye.ltc_2.value=Y.state.rectAreaLTC2,Ye.pointLights.value=Y.state.point,Ye.pointLightShadows.value=Y.state.pointShadow,Ye.hemisphereLights.value=Y.state.hemi,Ye.directionalShadowMap.value=Y.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ye.spotShadowMap.value=Y.state.spotShadowMap,Ye.spotLightMatrix.value=Y.state.spotLightMatrix,Ye.spotLightMap.value=Y.state.spotLightMap,Ye.pointShadowMap.value=Y.state.pointShadowMap,Ye.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=$e,K.uniformsList=null,$e}function om(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Ua.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function lm(C,V){let Z=Qe.get(C);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Zv(C,V,Z,K,Y){V.isScene!==!0&&(V=be),P.resetTextureUnits();let we=V.fog,Le=K.isMeshStandardMaterial?V.environment:null,Oe=x===null?v.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:fn,He=(K.isMeshStandardMaterial?j:A).get(K.envMap||Le),tt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ye=!!Z.morphAttributes.position,en=!!Z.morphAttributes.normal,ii=!!Z.morphAttributes.color,xn=Ks;K.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(xn=v.toneMapping);let hs=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Gt=hs!==void 0?hs.length:0,at=Qe.get(K),bd=p.state.lights;if(X===!0&&(ne===!0||C!==w)){let mi=C===w&&K.id===U;et.setState(K,C,mi)}let Zt=!1;K.version===at.__version?(at.needsLights&&at.lightsStateVersion!==bd.state.version||at.outputColorSpace!==Oe||Y.isBatchedMesh&&at.batching===!1||!Y.isBatchedMesh&&at.batching===!0||Y.isInstancedMesh&&at.instancing===!1||!Y.isInstancedMesh&&at.instancing===!0||Y.isSkinnedMesh&&at.skinning===!1||!Y.isSkinnedMesh&&at.skinning===!0||Y.isInstancedMesh&&at.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&at.instancingColor===!1&&Y.instanceColor!==null||at.envMap!==He||K.fog===!0&&at.fog!==we||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==et.numPlanes||at.numIntersection!==et.numIntersection)||at.vertexAlphas!==tt||at.vertexTangents!==$e||at.morphTargets!==Ye||at.morphNormals!==en||at.morphColors!==ii||at.toneMapping!==xn||We.isWebGL2===!0&&at.morphTargetsCount!==Gt)&&(Zt=!0):(Zt=!0,at.__version=K.version);let Ar=at.currentProgram;Zt===!0&&(Ar=Hl(K,V,Y));let cm=!1,bo=!1,_d=!1,En=Ar.getUniforms(),Er=at.uniforms;if(Re.useProgram(Ar.program)&&(cm=!0,bo=!0,_d=!0),K.id!==U&&(U=K.id,bo=!0),cm||w!==C){En.setValue($,"projectionMatrix",C.projectionMatrix),En.setValue($,"viewMatrix",C.matrixWorldInverse);let mi=En.map.cameraPosition;mi!==void 0&&mi.setValue($,de.setFromMatrixPosition(C.matrixWorld)),We.logarithmicDepthBuffer&&En.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&En.setValue($,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,bo=!0,_d=!0)}if(Y.isSkinnedMesh){En.setOptional($,Y,"bindMatrix"),En.setOptional($,Y,"bindMatrixInverse");let mi=Y.skeleton;mi&&(We.floatVertexTextures?(mi.boneTexture===null&&mi.computeBoneTexture(),En.setValue($,"boneTexture",mi.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(En.setOptional($,Y,"batchingTexture"),En.setValue($,"batchingTexture",Y._matricesTexture,P));let wd=Z.morphAttributes;if((wd.position!==void 0||wd.normal!==void 0||wd.color!==void 0&&We.isWebGL2===!0)&&ct.update(Y,Z,Ar),(bo||at.receiveShadow!==Y.receiveShadow)&&(at.receiveShadow=Y.receiveShadow,En.setValue($,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Er.envMap.value=He,Er.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),bo&&(En.setValue($,"toneMappingExposure",v.toneMappingExposure),at.needsLights&&Kv(Er,_d),we&&K.fog===!0&&_e.refreshFogUniforms(Er,we),_e.refreshMaterialUniforms(Er,K,G,F,te),Ua.upload($,om(at),Er,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ua.upload($,om(at),Er,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&En.setValue($,"center",Y.center),En.setValue($,"modelViewMatrix",Y.modelViewMatrix),En.setValue($,"normalMatrix",Y.normalMatrix),En.setValue($,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let mi=K.uniformsGroups;for(let Sd=0,Qv=mi.length;Sd<Qv;Sd++)if(We.isWebGL2){let um=mi[Sd];bt.update(um,Ar),bt.bind(um,Ar)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ar}function Kv(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Jv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,V,Z){Qe.get(C.texture).__webglTexture=V,Qe.get(C.depthTexture).__webglTexture=Z;let K=Qe.get(C);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){let Z=Qe.get(C);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Z=0){x=C,E=V,R=Z;let K=!0,Y=null,we=!1,Le=!1;if(C){let He=Qe.get(C);He.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer($.FRAMEBUFFER,null),K=!1):He.__webglFramebuffer===void 0?P.setupRenderTarget(C):He.__hasExternalTextures&&P.rebindTextures(C,Qe.get(C.texture).__webglTexture,Qe.get(C.depthTexture).__webglTexture);let tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);let $e=Qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[V])?Y=$e[V][Z]:Y=$e[V],we=!0):We.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?Y=Qe.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?Y=$e[Z]:Y=$e,_.copy(C.viewport),I.copy(C.scissor),N=C.scissorTest}else _.copy(J).multiplyScalar(G).floor(),I.copy(Q).multiplyScalar(G).floor(),N=re;if(Re.bindFramebuffer($.FRAMEBUFFER,Y)&&We.drawBuffers&&K&&Re.drawBuffers(C,Y),Re.viewport(_),Re.scissor(I),Re.setScissorTest(N),we){let He=Qe.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+V,He.__webglTexture,Z)}else if(Le){let He=Qe.get(C.texture),tt=V||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,He.__webglTexture,Z||0,tt)}U=-1},this.readRenderTargetPixels=function(C,V,Z,K,Y,we,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Re.bindFramebuffer($.FRAMEBUFFER,Oe);try{let He=C.texture,tt=He.format,$e=He.type;if(tt!==yi&&Ae.convert(tt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ye=$e===Do&&(Ne.has("EXT_color_buffer_half_float")||We.isWebGL2&&Ne.has("EXT_color_buffer_float"));if($e!==Js&&Ae.convert($e)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===bs&&(We.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-K&&Z>=0&&Z<=C.height-Y&&$.readPixels(V,Z,K,Y,Ae.convert(tt),Ae.convert($e),we)}finally{let He=x!==null?Qe.get(x).__webglFramebuffer:null;Re.bindFramebuffer($.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(C,V,Z=0){let K=Math.pow(2,-Z),Y=Math.floor(V.image.width*K),we=Math.floor(V.image.height*K);P.setTexture2D(V,0),$.copyTexSubImage2D($.TEXTURE_2D,Z,0,0,C.x,C.y,Y,we),Re.unbindTexture()},this.copyTextureToTexture=function(C,V,Z,K=0){let Y=V.image.width,we=V.image.height,Le=Ae.convert(Z.format),Oe=Ae.convert(Z.type);P.setTexture2D(Z,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?$.texSubImage2D($.TEXTURE_2D,K,C.x,C.y,Y,we,Le,Oe,V.image.data):V.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,K,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Le,V.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,K,C.x,C.y,Le,Oe,V.image),K===0&&Z.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Z,K,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=C.max.x-C.min.x+1,Le=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,He=Ae.convert(K.format),tt=Ae.convert(K.type),$e;if(K.isData3DTexture)P.setTexture3D(K,0),$e=$.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)P.setTexture2DArray(K,0),$e=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,K.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,K.unpackAlignment);let Ye=$.getParameter($.UNPACK_ROW_LENGTH),en=$.getParameter($.UNPACK_IMAGE_HEIGHT),ii=$.getParameter($.UNPACK_SKIP_PIXELS),xn=$.getParameter($.UNPACK_SKIP_ROWS),hs=$.getParameter($.UNPACK_SKIP_IMAGES),Gt=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Gt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Gt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,C.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,C.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?$.texSubImage3D($e,Y,V.x,V.y,V.z,we,Le,Oe,He,tt,Gt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D($e,Y,V.x,V.y,V.z,we,Le,Oe,He,Gt.data)):$.texSubImage3D($e,Y,V.x,V.y,V.z,we,Le,Oe,He,tt,Gt),$.pixelStorei($.UNPACK_ROW_LENGTH,Ye),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,en),$.pixelStorei($.UNPACK_SKIP_PIXELS,ii),$.pixelStorei($.UNPACK_SKIP_ROWS,xn),$.pixelStorei($.UNPACK_SKIP_IMAGES,hs),Y===0&&K.generateMipmaps&&$.generateMipmap($e),Re.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Re.unbindTexture()},this.resetState=function(){E=0,R=0,x=null,Re.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _s}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Gh?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===jc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Wt?Or:l0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Or?Wt:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Mh=class extends zr{};Mh.prototype.isWebGL1Renderer=!0;var Ic=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qa=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fn=new D,Bo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ig=new D,Ng=new At,Dg=new At,a1=new D,kg=new Ee,uc=new D,Jd=new li,Og=new Ee,Qd=new Br,Nc=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ym,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uc),this.boundingBox.expandByPoint(uc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uc),this.boundingSphere.expandByPoint(uc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jd.copy(this.boundingSphere),Jd.applyMatrix4(s),e.ray.intersectsSphere(Jd)!==!1&&(Og.copy(s).invert(),Qd.copy(e.ray).applyMatrix4(Og),!(this.boundingBox!==null&&Qd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ym?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Ng.fromBufferAttribute(s.attributes.skinIndex,e),Dg.fromBufferAttribute(s.attributes.skinWeight,e),Ig.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Dg.getComponent(r);if(a!==0){let o=Ng.getComponent(r);kg.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(a1.copy(Ig).applyMatrix4(kg),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},zo=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ah=class extends Mn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=pn,u=pn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ug=new Ee,o1=new Ee,Dc=class n{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ee;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:o1;Ug.multiplyMatrices(o,t[r]),Ug.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ah(t,e,e,yi,bs);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new zo),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Hr=class extends It{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pa=new Ee,Fg=new Ee,dc=[],Bg=new xi,l1=new Ee,Ao=new St,Eo=new li,kc=class extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,l1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pa),Bg.copy(e.boundingBox).applyMatrix4(Pa),this.boundingBox.union(Bg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pa),Eo.copy(e.boundingSphere).applyMatrix4(Pa),this.boundingSphere.union(Eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(i),e.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pa),Fg.multiplyMatrices(i,Pa),Ao.matrixWorld=Fg,Ao.raycast(e,dc);for(let a=0,o=dc.length;a<o;a++){let l=dc[a];l.instanceId=r,l.object=this,t.push(l)}dc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ho=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zg=new D,Hg=new D,Vg=new Ee,eh=new Br,hc=new li,Xa=class extends Ut{constructor(e=new Vn,t=new Ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)zg.fromBufferAttribute(t,s-1),Hg.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=zg.distanceTo(Hg);e.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(s),hc.radius+=r,e.ray.intersectsSphere(hc)===!1)return;Vg.copy(s).invert(),eh.copy(e.ray).applyMatrix4(Vg);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,u=new D,d=new D,h=new D,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let m=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let v=m,M=b-1;v<M;v+=f){let E=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,R),eh.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(h);U<e.near||U>e.far||t.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let v=m,M=b-1;v<M;v+=f){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),eh.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Gg=new D,Wg=new D,Oc=class extends Xa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Gg.fromBufferAttribute(t,s),Wg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gg.distanceTo(Wg);e.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Uc=class extends Xa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Vo=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qg=new Ee,Eh=new Br,pc=new li,fc=new D,Fc=class extends Ut{constructor(e=new Vn,t=new Vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(s),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;qg.copy(s).invert(),Eh.copy(e.ray).applyMatrix4(qg);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,y=f;g<y;g++){let p=c.getX(g);fc.fromBufferAttribute(d,p),Xg(fc,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,y=f;g<y;g++)fc.fromBufferAttribute(d,g),Xg(fc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xg(n,e,t,i,s,r,a){let o=Eh.distanceSqToPoint(n);if(o<t){let l=new D;Eh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Bc=class extends Mn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zc=class n extends Vn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,y=[],p=i/2,m=0;b(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Hn(d,3)),this.setAttribute("normal",new Hn(h,3)),this.setAttribute("uv",new Hn(f,2));function b(){let M=new D,E=new D,R=0,x=(t-e)/i;for(let U=0;U<=r;U++){let w=[],_=U/r,I=_*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,L=O*l+o,T=Math.sin(L),F=Math.cos(L);E.x=I*T,E.y=-_*i+p,E.z=I*F,d.push(E.x,E.y,E.z),M.set(T,x,F).normalize(),h.push(M.x,M.y,M.z),f.push(O,1-_),w.push(g++)}y.push(w)}for(let U=0;U<s;U++)for(let w=0;w<r;w++){let _=y[w][U],I=y[w+1][U],N=y[w+1][U+1],O=y[w][U+1];u.push(_,I,O),u.push(I,N,O),R+=6}c.addGroup(m,R,0),m+=R}function v(M){let E=g,R=new je,x=new D,U=0,w=M===!0?e:t,_=M===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*_,0),h.push(0,_,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let L=N/s*l+o,T=Math.cos(L),F=Math.sin(L);x.x=w*F,x.y=p*_,x.z=w*T,d.push(x.x,x.y,x.z),h.push(0,_,0),R.x=T*.5+.5,R.y=F*.5*_+.5,f.push(R.x,R.y),g++}for(let N=0;N<s;N++){let O=E+N,L=I+N;M===!0?u.push(L,L+1,O):u.push(L+1,L,O),U+=3}c.addGroup(m,U,M===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $a=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bi=class extends $a{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ya=class extends Kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function mc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function c1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function u1(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function $g(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function x0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var nr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Th=class extends nr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gm,endingEnd:Gm}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wm:r=e,o=2*t-i;break;case qm:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wm:a=e,l=2*i-t;break;case qm:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-h*p+2*h*y-h*g,b=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,v=(-1-f)*p+(1.5+f)*y+.5*g,M=f*p-f*y;for(let E=0;E!==o;++E)r[E]=m*a[u+E]+b*a[c+E]+v*a[l+E]+M*a[d+E];return r}},Rh=class extends nr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Ch=class extends nr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_i=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mc(t,this.TimeBufferType),this.values=mc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mc(e.times,Array),values:mc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Th(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case Fr:t=this.InterpolantFactoryMethodLinear;break;case Cd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return Cd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&c1(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Cd,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Fr;var ir=class extends _i{};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Ha;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends _i{};Hc.prototype.ValueTypeName="color";var Ms=class extends _i{};Ms.prototype.ValueTypeName="number";var Lh=class extends nr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)nt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Yi=class extends _i{InterpolantFactoryMethodLinear(e){return new Lh(this.times,this.values,this.getValueSize(),e)}};Yi.prototype.ValueTypeName="quaternion";Yi.prototype.DefaultInterpolation=Fr;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends _i{};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Ha;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends _i{};As.prototype.ValueTypeName="vector";var Vc=class{constructor(e,t=-1,i,s=Gx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Di(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(h1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(_i.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=u1(l);l=$g(l,1,u),c=$g(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ms(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,h,f,g,y){if(f.length!==0){let p=[],m=[];x0(f,p,m,g),p.length!==0&&y.push(new d(h,p,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)f[h[g].morphTargets[y]]=-1;for(let y in f){let p=[],m=[];for(let b=0;b!==h[g].morphTargets.length;++b){let v=h[g];p.push(v.time),m.push(v.morphTarget===y?1:0)}s.push(new Ms(".morphTargetInfluence["+y+"]",p,m))}l=f.length*a}else{let f=".bones["+t[d].name+"]";i(As,f+".position",h,"pos",s),i(Yi,f+".quaternion",h,"rot",s),i(As,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function d1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return Hc;case"quaternion":return Yi;case"bool":case"boolean":return ir;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function h1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=d1(n.type);if(n.times===void 0){let t=[],i=[];x0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var js={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ph=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},p1=new Ph,Es=class{constructor(e){this.manager=e!==void 0?e:p1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Es.DEFAULT_MATERIAL_NAME="__DEFAULT";var vs={},Ih=class extends Error{constructor(e,t){super(e),this.response=t}},Go=class extends Es{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=js.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vs[e]!==void 0){vs[e].push({onLoad:t,onProgress:i,onError:s});return}vs[e]=[],vs[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=vs[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0,y=0,p=new ReadableStream({start(m){b();function b(){d.read().then(({done:v,value:M})=>{if(v)m.close();else{y+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let R=0,x=u.length;R<x;R++){let U=u[R];U.onProgress&&U.onProgress(E)}m.enqueue(M),b()}})}}});return new Response(p)}else throw new Ih(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{js.add(e,c);let u=vs[e];delete vs[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=vs[e];if(u===void 0)throw this.manager.itemError(e),c;delete vs[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Nh=class extends Es{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=js.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ko("img");function l(){u(),js.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ja=class extends Es{constructor(e){super(e)}load(e,t,i,s){let r=new Mn,a=new Nh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Za=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Gc=class extends Za{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},th=new Ee,Yg=new D,jg=new D,Wo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Yg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yg),jg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jg),t.updateMatrixWorld(),th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dh=class extends Wo{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Va*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Wc=class extends Za{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zg=new Ee,To=new D,nh=new D,kh=class extends Wo{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),To.setFromMatrixPosition(e.matrixWorld),i.position.copy(To),nh.copy(i.position),nh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nh),i.updateMatrixWorld(),s.makeTranslation(-To.x,-To.y,-To.z),Zg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zg)}},qc=class extends Za{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Oh=class extends Wo{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Oh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rr=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xc=class extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=js.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return js.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),js.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});js.add(e,l),r.manager.itemStart(e)}};var Xh="\\[\\]\\.:\\/",f1=new RegExp("["+Xh+"]","g"),$h="[^"+Xh+"]",m1="[^"+Xh.replace("\\.","")+"]",g1=/((?:WC+[\/:])*)/.source.replace("WC",$h),y1=/(WCOD+)?/.source.replace("WCOD",m1),v1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),x1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),b1=new RegExp("^"+g1+y1+v1+x1+"$"),_1=["material","materials","bones","map"],Uh=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f1,"")}static parseTrackName(e){let t=b1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);_1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Uh;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var UT=new Float32Array(1);var qo=class{constructor(e,t,i=0,s=1/0){this.ray=new Br(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Fh(e,this,i,t),i.sort(Kg),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fh(e[s],this,i,t);return i.sort(Kg),i}};function Kg(n,e){return n.distance-e.distance}function Fh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Fh(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Jn=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function b0(n){if(n.comfortVersion===Jn.version)return n;let e={...n,comfortVersion:Jn.version,winDist:Jn.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=Jn.windowScale),e}function w1(n,e){return n>0&&e>0?n/e:16/9}function jo(n,e,t){let i=w1(n,e),s=t>0?t:i,r,a;s>=i?(r=n,a=n/s):(a=e,r=e*s);let o=Math.round((n-r)/2),l=Math.round((e-a)/2),c=Math.round(r),u=Math.round(a);return{x:o,y:l,w:c,h:u,u0:o/n,v0:l/e,uw:c/n,vh:u/e}}function Yh(n,e,t,i,s){let r=jo(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var ji=4096,In={width:1200,height:800},ar=160;function S1(n,e=ji){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let a=Math.ceil(t)+ar*2,o=Math.ceil(i)+ar*2,l=s==="window"?r%3*1360:s==="slot"?1360:0,c=s==="dock"?800:s==="keyboard"?3160:s==="slot"?0:1200+Math.floor(r/3)*980,u=s==="dock"?400:s==="keyboard"?936:980;if(r>5||a>(s==="window"||s==="slot"?1360:e)||o>u||l+a>e||c+o>e)throw new Error("Workspace texture is full; close a window first.");return[l,c,a,o]})}var Kc=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var d,h,f;if(window.__gorillaStereoOverlay){let g=2*Math.tan($o.degToRad(36)),p=[{overlay:!0,matrix:new Ee().makeTranslation(0,0,-1).multiply(new Ee().makeScale(g*1.78,g*1.48,1)).toArray(),rect:[0,0,In.width/2,In.height],uvR:[In.width/2/ji,1-In.height/ji,In.width/2/ji,In.height/ji]}],m=JSON.stringify(p),b="[]";(m!==this.sent||b!==this.sentSpecs)&&(this.sent=m,this.sentSpecs=b,(h=(d=window.NativeXR)==null?void 0:d.frame)==null||h.call(d,m,b));return}e.updateMatrixWorld(!0);let t=[];e.traverse(g=>{g.isCSS3DObject&&g.visible&&t.push(g)});for(let g of t)g.element.parentNode!==this.domElement&&this.domElement.append(g.element),g.element.style.transform!=="none"&&(g.element.style.transform="none");for(let g of this.slots.keys())t.some(y=>y.id===g)||this.slots.delete(g);let i=t.map(g=>{let y=g.element.classList.contains("dock")?"dock":g.element.classList.contains("kb")?"keyboard":g.element.classList.contains("win-drop-slot")?"slot":"window";if(y==="window"&&!this.slots.has(g.id)){let b=new Set(this.slots.values()),v=0;for(;b.has(v);)v++;this.slots.set(g.id,v)}let p=y==="window"||y==="slot"?1040:ji-ar*2,m=(y==="dock"?400:y==="keyboard"?936:980)-ar*2;return{width:Math.min(g.element.offsetWidth,p),height:Math.min(g.element.offsetHeight,m),kind:y,slot:this.slots.get(g.id)||0}}),s;try{s=S1(i)}catch(g){this.lastError!==g.message&&(this.lastError=g.message,(f=window.nextvrMessage)==null||f.call(window,g.message));return}let r=[],a=[];t.forEach((g,y)=>{let p=g.element,[m,b,v,M]=s[y],E=`${m+ar}px`,R=`${b+ar}px`;p.style.left!==E&&(p.style.left=E),p.style.top!==R&&(p.style.top=R);let x=g.matrixWorld.clone().multiply(new Ee().makeScale(v,M,1)),U=+(p.dataset.curve||0);r.push({id:p.dataset.windowId||(i[y].kind==="dock"?"dock":i[y].kind),matrix:x.toArray(),rect:s[y],curve:U,glass:[ar/v,ar/M,i[y].width/v,i[y].height/M]});let w=p.getBoundingClientRect();for(let _ of p.querySelectorAll("[data-native-app]")){let I=_.getBoundingClientRect();if(!I.width||!I.height)continue;let N=+(_.dataset.aspect||0),O=jo(I.width,I.height,N),L=g.matrixWorld.clone().multiply(new Ee().makeTranslation(I.left-w.left+O.x+O.w/2-i[y].width/2,i[y].height/2-(I.top-w.top+O.y+O.h/2),.5)).multiply(new Ee().makeScale(O.w,O.h,1));r.push({browser:"app:"+_.dataset.nativeApp,matrix:L.toArray(),rect:[0,0,Math.round(I.width),Math.round(I.height)],curve:+(p.dataset.curve||0),uv:[O.u0,O.v0,O.uw,O.vh]});let T=[O.u0,O.v0,O.uw,O.vh].map(F=>F.toFixed(5)).join(",");_.dataset.uv!==T&&(_.dataset.uv=T,this.last=0)}for(let _ of p.querySelectorAll("[data-native-xr]")){let I=_.getBoundingClientRect();if(!I.width||!I.height)continue;let N="xr:"+_.dataset.nativeXr,O=+(_.dataset.aspect||0),L=jo(I.width,I.height,O),T=g.matrixWorld.clone().multiply(new Ee().makeTranslation(I.left-w.left+L.x+L.w/2-i[y].width/2,i[y].height/2-(I.top-w.top+L.y+L.h/2),.5)).multiply(new Ee().makeScale(L.w,L.h,1));r.push({browser:N,matrix:T.toArray(),rect:[0,0,Math.round(I.width),Math.round(I.height)],curve:+(p.dataset.curve||0),uv:[L.u0,L.v0,L.uw/2,L.vh],uvR:[L.u0+L.uw/2,L.v0,L.uw/2,L.vh]})}for(let _ of p.querySelectorAll("[data-native-browser]")){let I=_.getBoundingClientRect();if(!I.width||!I.height)continue;let N=_.dataset.nativeBrowser,O=_.dataset.url;if(!O)continue;let L=Math.round(I.width),T=Math.round(I.height),F={left:I.left,top:I.top,right:I.right,bottom:I.bottom};for(let J=_.parentElement;J&&J!==p;J=J.parentElement){let Q=getComputedStyle(J);if(/(auto|scroll|hidden)/.test(Q.overflow+Q.overflowY)){let re=J.getBoundingClientRect();F.left=Math.max(F.left,re.left),F.top=Math.max(F.top,re.top),F.right=Math.min(F.right,re.right),F.bottom=Math.min(F.bottom,re.bottom)}}a.push({id:N,url:O,width:L,height:T});let G=F.right-F.left,q=F.bottom-F.top;if(G<=0||q<=0)continue;let W=g.matrixWorld.clone().multiply(new Ee().makeTranslation(F.left-w.left+G/2-i[y].width/2,i[y].height/2-(F.top-w.top+q/2),.5)).multiply(new Ee().makeScale(G,q,1));r.push({browser:N,matrix:W.toArray(),rect:[0,0,L,T],curve:+(p.dataset.curve||0),homeOverlay:_.dataset.homeOverlay==="1",uv:[(F.left-I.left)/L,(I.bottom-F.bottom)/T,G/L,q/T]})}});let o=2*Math.tan($o.degToRad(36)),l=new Ee().makeTranslation(0,0,-1).multiply(new Ee().makeScale(o*1.5,o,1));if(window.__gorillaStereoOverlay){let g=new Ee().makeTranslation(0,0,-1).multiply(new Ee().makeScale(o*1.78,o*1.48,1));r.push({overlay:!0,matrix:g.toArray(),rect:[0,0,In.width/2,In.height],uvR:[In.width/2/ji,1-In.height/ji,In.width/2/ji,In.height/ji]})}else r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,In.width,In.height]});let c=performance.now(),u=document.documentElement.dataset.qualityTier||document.documentElement.dataset.quality;if(c-this.last>=({low:32,medium:24,auto:24,high:16}[u]||24)){this.last=c;let g=JSON.stringify(r),y=JSON.stringify(a);(g!==this.sent||y!==this.sentSpecs)&&(this.sent=g,this.sentSpecs=y,window.NativeXR.frame(g,y))}}invalidate(){this.sent=this.sentSpecs=null,this.last=0}};var Ja=new D,VT=new D,M1=new D,Ko=()=>null,Jc=()=>!0,w0=()=>null,Zo=null,Qa=[],_0=0;function S0(n){let e=typeof performance<"u"?performance.now():Date.now(),t=n==null?void 0:n.hands;if(!Array.isArray(t)||t.length===0){e-_0>400&&(Qa.length=0);return}Qa.length=0;for(let i of t){let s=(i==null?void 0:i.points)||(i==null?void 0:i.lm);if(!s)continue;let r=1,a=1,o=0,l=0;if(typeof s.length=="number"&&typeof s[0]=="number")for(let c=0;c+1<s.length;c+=3){let u=s[c],d=s[c+1];u<r&&(r=u),d<a&&(a=d),u>o&&(o=u),d>l&&(l=d)}else if(Array.isArray(s))for(let c of s)c&&(c.x<r&&(r=c.x),c.y<a&&(a=c.y),c.x>o&&(o=c.x),c.y>l&&(l=c.y));o>=r&&l>=a&&Qa.push({x0:Math.max(0,r-.14),y0:Math.max(0,a-.14),x1:Math.min(1,o+.14),y1:Math.min(1,l+.14)})}Qa.length>0&&(_0=e)}var Qc={energy:0,lastA:null,lastStepT:0,onMotion(n){let e=n==null?void 0:n.rotationRate,t=e?Math.hypot(e.alpha||0,e.beta||0,e.gamma||0):0,i=(n==null?void 0:n.accelerationIncludingGravity)||(n==null?void 0:n.acceleration);if(!i||i.x===null)return;let s=Math.hypot(i.x||0,i.y||0,i.z||0);if(this.lastA){let r=Math.abs(s-this.lastA.mag);r>.26&&t<65?(this.energy=Math.min(4,this.energy*.84+r),this.energy>.34&&(this.lastStepT=typeof performance<"u"?performance.now():Date.now())):this.energy*=.86}this.lastA={x:i.x,y:i.y,z:i.z,mag:this.lastA?.92*this.lastA.mag+.08*s:s}},moving(){if(!this.lastA)return!0;let n=typeof performance<"u"?performance.now():Date.now();return this.energy>.3&&n-this.lastStepT<620}},Xt={W:96,H:72,cv:null,ctx:null,prev:null,pos:new D,out:new D,prevOut:new D,stepDelta:new D,lastT:0,lastSc:0,_lastSentX:0,_lastSentZ:0,depth:1.45,init(){this.cv||typeof document>"u"||(this.cv=document.createElement("canvas"),this.cv.width=this.W,this.cv.height=this.H,this.ctx=this.cv.getContext("2d",{willReadFrequently:!0}))},reset(){var e,t,i;this.pos.set(0,0,0),this.out.set(0,0,0),this.prevOut.set(0,0,0),this.stepDelta.set(0,0,0),this.prev=null,this.lastSc=0,this._lastSentX=0,this._lastSentZ=0;let n=Ko();n&&(n.position.x=0,n.position.z=0),typeof Zo=="function"?Zo(0,0,0):typeof window<"u"&&((t=(e=window.NativeXR)==null?void 0:e.resetSixDof)==null||t.call(e)),typeof window<"u"&&((i=window.__updateBackfaceStates)==null||i.call(window))},processGray(n,e){let t=this.W,i=this.H;if(!n||n.length<t*i)return null;if(!this.prev)return this.prev=new Float32Array(n),null;let s=this.prev,r=1e18,a=0,o=0;for(let p=-7;p<=7;p++)for(let m=-7;m<=7;m++){let b=0;for(let v=22;v<50&&b<r;v+=2){let M=v*t,E=(v+p)*t;for(let R=30;R<66;R+=2)b+=Math.abs(n[E+R+m]-s[M+R])}b<r&&(r=b,a=m,o=p)}let l=[],c=new Float32Array(25);for(let p=10;p<=i-18;p+=10)for(let m=10;m<=t-18;m+=11){let b=(m+4)/t,v=(p+4)/i,M=!1;for(let O of Qa)if(b>O.x0&&b<O.x1&&v>O.y0&&v<O.y1){M=!0;break}if(M)continue;let E=0;for(let O=p;O<p+8;O++){let L=O*t;for(let T=m;T<m+7;T++)E+=Math.abs(s[L+T+1]-s[L+T])}if(E<200)continue;let R=1e18,x=0,U=0,w=0;for(let O=-2;O<=2;O++)for(let L=-2;L<=2;L++){let T=m+a+L,F=p+o+O;if(T<0||F<0||T+8>t||F+8>i){c[w++]=1e18;continue}let G=0;for(let q=0;q<8;q++){let W=(p+q)*t+m,J=(F+q)*t+T;for(let Q=0;Q<8;Q++)G+=Math.abs(n[J+Q]-s[W+Q])}c[w++]=G,G<R&&(R=G,x=L,U=O)}let _=(O,L)=>c[(L+2)*5+(O+2)],I=0,N=0;if(Math.abs(x)<2){let O=_(x-1,U),L=_(x+1,U),T=O-2*R+L;T>0&&O<1e17&&L<1e17&&(I=.5*(O-L)/T)}if(Math.abs(U)<2){let O=_(x,U-1),L=_(x,U+1),T=O-2*R+L;T>0&&O<1e17&&L<1e17&&(N=.5*(O-L)/T)}l.push({x:m+4-t*.5,y:p+4-i*.5,dx:a+x+I,dy:o+U+N})}if(this.prev.set(n),l.length<10)return null;let u=p=>{let m=0,b=0,v=0,M=0;for(let U of p)m+=U.dx,b+=U.dy,v+=U.x,M+=U.y;let E=p.length;m/=E,b/=E,v/=E,M/=E;let R=0,x=0;for(let U of p){let w=U.x-v,_=U.y-M;R+=(U.dx-m)*w+(U.dy-b)*_,x+=w*w+_*_}return{sc:x>0?R/x:0,mx:m,my:b,px:v,py:M}},d=u(l),h=l.map(p=>Math.hypot(p.dx-d.mx-d.sc*(p.x-d.px),p.dy-d.my-d.sc*(p.y-d.py))),f=[...h].sort((p,m)=>p-m),g=f[f.length>>1]||.5;if(g>.85)return null;let y=l.filter((p,m)=>h[m]<=Math.max(.35,g*2));return y.length<8?null:(d=u(y),this.applyFlowScale(d.sc,a,o,e,d.mx-a),{sc:d.sc,gx:a,gy:o})},applyFlowScale(n,e=0,t=0,i,s=0){if(!Jc())return;let r=Ko();if(!r)return;if(!Number.isFinite(n)||Math.abs(n)<.0035||Math.abs(n)>.16){this.lastSc=0;return}if(Math.hypot(e,t)>3.2){this.lastSc=0;return}if(!(i!==void 0?!!i:Qc.moving())){this.lastSc=0;return}let o=this.lastSc;if(this.lastSc=n,o===0||Math.sign(o)!==Math.sign(n)||Math.abs(n-o)>Math.max(.018,Math.abs(n)*.95))return;let l=(n+o)*.5,c=Math.max(-.075,Math.min(.075,l*this.depth));Ja.set(0,0,-1).applyQuaternion(r.quaternion),Ja.y=0,Ja.lengthSq()>1e-6?Ja.normalize():Ja.set(0,0,-1),this.pos.addScaledVector(Ja,c),this.pos.y=0;let u=Math.hypot(this.pos.x,this.pos.z);if(u>3){let d=3/u;this.pos.x*=d,this.pos.z*=d}this.pos.y=0},update(n,e=.016){var o,l,c;if(!Jc()){(this.pos.lengthSq()>0||this.out.lengthSq()>0)&&this.reset();return}let t=Math.max(.38,1-Math.exp(-Math.max(.005,e)*24));this.out.lerp(this.pos,t),this.out.y=0,this.stepDelta.subVectors(this.out,this.prevOut),this.stepDelta.y=0,this.prevOut.copy(this.out);let i=Ko();i&&(i.position.x=this.out.x,i.position.z=this.out.z),Math.hypot(this.out.x-this._lastSentX,this.out.z-this._lastSentZ)>1e-4&&(this._lastSentX=this.out.x,this._lastSentZ=this.out.z,typeof Zo=="function"?Zo(this.out.x,0,this.out.z):typeof window<"u"&&((l=(o=window.NativeXR)==null?void 0:o.sixDofOffset)==null||l.call(o,this.out.x,0,this.out.z)),typeof window<"u"&&((c=window.__updateBackfaceStates)==null||c.call(window)));let s=w0();if(!s||s.readyState<2||n-this.lastT<45||(this.lastT=n,this.init(),!this.ctx))return;let r=this.W,a=this.H;try{this.ctx.drawImage(s,0,0,r,a);let u=this.ctx.getImageData(0,0,r,a).data,d=new Float32Array(r*a);for(let h=0,f=0;h<d.length;h++,f+=4)d[h]=u[f]*.3+u[f+1]*.59+u[f+2]*.11;this.processGray(d)}catch{}},consumeStepDelta(n=M1){return n.copy(this.stepDelta),n.y=0,this.stepDelta.set(0,0,0),n}};function eu({camera:n,settings:e,getCamera:t,isEnabled:i,getVideo:s,onNativeOffset:r}={}){typeof t=="function"?Ko=t:n&&(Ko=()=>n),typeof i=="function"?Jc=i:e&&typeof e=="object"&&(Jc=()=>e.sixdof!==0),typeof s=="function"&&(w0=s),typeof r=="function"&&(Zo=r)}typeof window<"u"&&(window.addEventListener("devicemotion",n=>Qc.onMotion(n),{passive:!0}),window.SixDof=Xt,window.Walk=Qc,window.nextvrSixDof=(n,e=0,t=0)=>{if(n&&typeof n=="object"){if(n.gray&&n.gray.length>=Xt.W*Xt.H)return Xt.processGray(n.gray,n.moving);let s=Number(n.sc??0),r=Number(n.gx??0),a=Number(n.gy??0);return Xt.applyFlowScale(s,r,a,n.moving),{sc:s,gx:r,gy:a}}let i=Number(n??0);return Xt.applyFlowScale(i,Number(e||0),Number(e?t:0)),{sc:i,gx:Number(e||0),gy:Number(t||0)}});var M0=new D,A1=new nt,A0=new D,Gr=class extends Ut{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Zi=new Ee,E1=new Ee,tu=class{constructor(e={}){let t=this,i,s,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(y,p){let m=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(s/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let b,v;p.isOrthographicCamera&&(b=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);let M=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,E=p.isOrthographicCamera?`scale( ${M} )scale(`+m+")translate("+d(b)+"px,"+d(v)+"px)"+h(p.matrixWorldInverse):`scale( ${M} )translateZ(`+m+"px)"+h(p.matrixWorldInverse),x=(p.isPerspectiveCamera?"perspective("+m+"px) ":"")+E+"translate("+r+"px,"+a+"px)";o.camera.style!==x&&(u.style.transform=x,o.camera.style=x),g(y,y,p,E)},this.setSize=function(y,p){i=y,s=p,r=i/2,a=s/2,l.style.width=y+"px",l.style.height=p+"px",c.style.width=y+"px",c.style.height=p+"px",u.style.width=y+"px",u.style.height=p+"px"};function d(y){return Math.abs(y)<1e-10?0:y}function h(y){let p=y.elements;return"matrix3d("+d(p[0])+","+d(-p[1])+","+d(p[2])+","+d(p[3])+","+d(p[4])+","+d(-p[5])+","+d(p[6])+","+d(p[7])+","+d(p[8])+","+d(-p[9])+","+d(p[10])+","+d(p[11])+","+d(p[12])+","+d(-p[13])+","+d(p[14])+","+d(p[15])+")"}function f(y){let p=y.elements;return"translate(-50%,-50%)"+("matrix3d("+d(p[0])+","+d(p[1])+","+d(p[2])+","+d(p[3])+","+d(-p[4])+","+d(-p[5])+","+d(-p[6])+","+d(-p[7])+","+d(p[8])+","+d(p[9])+","+d(p[10])+","+d(p[11])+","+d(p[12])+","+d(p[13])+","+d(p[14])+","+d(p[15])+")")}function g(y,p,m,b){if(y.isCSS3DObject){let v=y.visible===!0&&y.layers.test(m.layers)===!0;if(y.element.style.display=v===!0?"":"none",v===!0){y.onBeforeRender(t,p,m);let M;y.isCSS3DSprite?(Zi.copy(m.matrixWorldInverse),Zi.transpose(),y.rotation2D!==0&&Zi.multiply(E1.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(M0,A1,A0),Zi.setPosition(M0),Zi.scale(A0),Zi.elements[3]=0,Zi.elements[7]=0,Zi.elements[11]=0,Zi.elements[15]=1,M=f(Zi)):M=f(y.matrixWorld);let E=y.element,R=o.objects.get(y);if(R===void 0||R.style!==M){E.style.transform=M;let x={style:M};o.objects.set(y,x)}E.parentNode!==u&&u.appendChild(E),y.onAfterRender(t,p,m)}}for(let v=0,M=y.children.length;v<M;v++)g(y.children[v],p,m,b)}}};var ge=!!window.NativeXR,Ht=ge?In:{width:innerWidth,height:innerHeight},R0={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"sunset",panorama:"sunset",quality:"auto",showFps:0,wideCamera:0,spatialLauncher:0,dockSnapSlot:1,fingerTouch:1,pinchOnApp:1,gunGesture:1,mrDim:0,sixdof:1,lateLatch:0,gorillaInstalled:0,profileName:"",profileAvatar:""},Jo={};try{Jo=JSON.parse(localStorage.getItem("nextvr.v1")||"{}")||{}}catch{}var Fe={...R0,...Jo};Fe.sunsetDefaultVersion||(!Fe.envChosen&&Fe.env==="passthrough"&&(!Jo.panorama||Jo.panorama==="lagoon")&&(Fe.env="sunset"),(!Jo.panorama||Fe.env==="sunset"&&!Fe.envChosen)&&(Fe.panorama=Fe.env==="passthrough"?"sunset":Fe.env),Fe.sunsetDefaultVersion=1);if(ge){Fe=b0(Fe),Fe.handsOn=!0,Fe.handDrawSeen||(Fe.handDraw=R0.handDraw,Fe.handDrawSeen=1);try{localStorage.setItem("nextvr.v1",JSON.stringify(Fe))}catch{}}var S=Fe,Ve=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Fe))}catch{}},dn={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",libAll:"Todos",libFilter:"Filtro",libGames:"Jogos",libGamesEmpty:"Os jogos de headset aparecem aqui quando o PhoneXR os encontra.",libRecentEmpty:"Os apps abertos recentemente aparecem aqui.",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"P\xF4r do sol \xB7 palmeiras",envDusk:"Crep\xFAsculo",envCinema:"Cinema",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",envDark:"Panorama 360\xB0 \xB7 Dark",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.exit":"Sair do jogo","game.menu":"Menu do jogo","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",libAll:"All",libFilter:"Filter",libGames:"Games",libGamesEmpty:"Headset games appear here when PhoneXR finds them.",libRecentEmpty:"Recently opened apps will appear here.",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"Sunset \xB7 palms",envDusk:"Dusk",envCinema:"Cinema",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",envDark:"360\xB0 panorama \xB7 Dark",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.exit":"Exit game","game.menu":"Game menu","game.continue":"Continue","game.settings":"Settings","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",libAll:"Todo",libFilter:"Filtro",libGames:"Juegos",libGamesEmpty:"Los juegos de realidad virtual aparecer\xE1n aqu\xED cuando PhoneXR los encuentre.",libRecentEmpty:"Las aplicaciones abiertas recientemente aparecer\xE1n aqu\xED.",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Atardecer \xB7 palmeras",envDusk:"Crep\xFAsculo",envCinema:"Cine",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.exit":"Salir del juego","game.menu":"Men\xFA del juego","game.continue":"Continuar","game.settings":"Ajustes","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}};Object.assign(dn.pt,{dockSnapSlot:"Espa\xE7o pr\xE9-definido na Dock",dockSnapDesc:"Mostrar janela preta transparente ao mover janelas na Dock normal",dockSnapHint:"Solte aqui para encaixar no espa\xE7o pr\xE9-definido",fingerTouch:"Toque com indicador (sem pin\xE7a)",fingerTouchDesc:"Abrir apps na Dock ou Spatial levando o indicador \xE0 frente",qualityHigh:"Alta (1080p)",qualityMedium:"M\xE9dia (890p)",qualityLow:"Baixa (390p)",qualityAuto:"Autom\xE1tica"});Object.assign(dn.en,{dockSnapSlot:"Pre-defined Dock Slot",dockSnapDesc:"Show semi-transparent black slot when moving windows in normal Dock",dockSnapHint:"Drop here to snap into pre-defined slot",fingerTouch:"Index Finger Touch (No Pinch)",fingerTouchDesc:"Open apps in Dock or Spatial by pushing your index finger forward",qualityHigh:"High (1080p)",qualityMedium:"Medium (890p)",qualityLow:"Low (390p)",qualityAuto:"Auto"});Object.assign(dn.es,{dockSnapSlot:"Espacio predefinido en Dock",dockSnapDesc:"Mostrar ventana negra semitransparente al mover ventanas en el Dock normal",dockSnapHint:"Suelta aqu\xED para encajar en el espacio predefinido",fingerTouch:"Toque con \xEDndice (sin pinza)",fingerTouchDesc:"Abrir apps en el Dock o Spatial llevando el dedo \xEDndice hacia adelante",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Baja (390p)",qualityAuto:"Autom\xE1tica"});dn.ja={...dn.en,desktop:"\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",browser:"\u30D6\u30E9\u30A6\u30B6",youtube:"YouTube",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC",settings:"\u8A2D\u5B9A",menu:"\u30E1\u30CB\u30E5\u30FC",store:"\u30B9\u30C8\u30A2",env:"\u74B0\u5883",keyboard:"\u30AD\u30FC\u30DC\u30FC\u30C9",center:"\u6B63\u9762\u306B\u30EA\u30BB\u30C3\u30C8",search:"\u30A6\u30A7\u30D6\u3092\u691C\u7D22",searchYt:"\u52D5\u753B\u3092\u691C\u7D22",open:"\u958B\u304F",close:"\u9589\u3058\u308B",general:"\u4E00\u822C",hands:"\u30CF\u30F3\u30C9\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0",windows:"\u30A6\u30A3\u30F3\u30C9\u30A6",dock:"\u30C9\u30C3\u30AF",perf:"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",language:"\u8A00\u8A9E",on:"\u30AA\u30F3",off:"\u30AA\u30D5",sens:"\u611F\u5EA6",scale:"\u30B9\u30B1\u30FC\u30EB",dist:"\u8DDD\u96E2",curve:"\u30AB\u30FC\u30D6",size:"\u30B5\u30A4\u30BA",quality:"\u753B\u8CEA",apps:"\u30A2\u30D7\u30EA",recents:"\u6700\u8FD1",battery:"\u30D0\u30C3\u30C6\u30EA\u30FC",net:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",time:"\u6642\u523B",libAll:"\u3059\u3079\u3066",libFilter:"\u30D5\u30A3\u30EB\u30BF\u30FC",libGames:"\u30B2\u30FC\u30E0",centered:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",langChanged:"\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u3057\u305F",langTitle:"\u8A00\u8A9E",langContinue:"\u6B21\u3078",langPick:"\u8A00\u8A9E\u3092\u9078\u629E",notif:"\u901A\u77E5",noNotif:"\u65B0\u3057\u3044\u901A\u77E5\u306F\u3042\u308A\u307E\u305B\u3093",profile:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",dockSnapSlot:"\u30C9\u30C3\u30AF\u5B9A\u7FA9\u6E08\u307F\u30B9\u30ED\u30C3\u30C8",dockSnapDesc:"\u30A6\u30A3\u30F3\u30C9\u30A6\u79FB\u52D5\u6642\u306B\u534A\u900F\u660E\u306E\u9ED2\u67A0\u3092\u8868\u793A",dockSnapHint:"\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u914D\u7F6E",qualityHigh:"\u9AD8 (1080p)",qualityMedium:"\u4E2D (890p)",qualityLow:"\u4F4E (390p)",qualityAuto:"\u81EA\u52D5"};dn.fr={...dn.en,desktop:"Espace de travail",browser:"Navigateur",youtube:"YouTube",gallery:"Galerie",settings:"Param\xE8tres",menu:"Menu",store:"Boutique",env:"Environnements",keyboard:"Clavier",center:"Recentrer",search:"Rechercher sur le web",searchYt:"Rechercher des vid\xE9os",open:"Ouvrir",close:"Fermer",general:"G\xE9n\xE9ral",hands:"Suivi des mains",windows:"Fen\xEAtres",dock:"Dock",perf:"Performance",language:"Langue",on:"Activ\xE9",off:"D\xE9sactiv\xE9",sens:"Sensibilit\xE9",scale:"\xC9chelle",dist:"Distance",curve:"Courbure",size:"Taille",quality:"Qualit\xE9",apps:"Applications",recents:"R\xE9cents",battery:"Batterie",net:"R\xE9seau",time:"Heure",libAll:"Tout",libFilter:"Filtre",libGames:"Jeux",centered:"Espace recentr\xE9",langChanged:"Langue modifi\xE9e",langTitle:"Langue",langContinue:"Continuer",langPick:"Choisissez votre langue",notif:"Notifications",noNotif:"Aucune notification",profile:"Profil",dockSnapSlot:"Emplacement pr\xE9d\xE9fini du Dock",dockSnapDesc:"Afficher un cadre noir semi-transparent lors du d\xE9placement",dockSnapHint:"Rel\xE2chez ici pour placer la fen\xEAtre",qualityHigh:"Haute (1080p)",qualityMedium:"Moyenne (890p)",qualityLow:"Basse (390p)",qualityAuto:"Auto"};dn.de={...dn.en,desktop:"Arbeitsbereich",browser:"Browser",youtube:"YouTube",gallery:"Galerie",settings:"Einstellungen",menu:"Men\xFC",store:"Store",env:"Umgebungen",keyboard:"Tastatur",center:"Zentrieren",search:"Im Web suchen",searchYt:"Videos suchen",open:"\xD6ffnen",close:"Schlie\xDFen",general:"Allgemein",hands:"Hand-Tracking",windows:"Fenster",dock:"Dock",perf:"Leistung",language:"Sprache",on:"Ein",off:"Aus",sens:"Empfindlichkeit",scale:"Skalierung",dist:"Abstand",curve:"Kr\xFCmmung",size:"Gr\xF6\xDFe",quality:"Qualit\xE4t",apps:"Apps",recents:"Zuletzt",battery:"Akku",net:"Netzwerk",time:"Zeit",libAll:"Alle",libFilter:"Filter",libGames:"Spiele",centered:"Ansicht zentriert",langChanged:"Sprache ge\xE4ndert",langTitle:"Sprache",langContinue:"Weiter",langPick:"Sprache ausw\xE4hlen",notif:"Mitteilungen",noNotif:"Keine neuen Mitteilungen",profile:"Profil",dockSnapSlot:"Vordefinierter Dock-Platz",dockSnapDesc:"Halbtransparentes schwarzes Zielfenster beim Bewegen anzeigen",dockSnapHint:"Hier ablegen zum Einrasten",qualityHigh:"Hoch (1080p)",qualityMedium:"Mittel (890p)",qualityLow:"Niedrig (390p)",qualityAuto:"Automatisch"};dn.ko={...dn.en,desktop:"\uC791\uC5C5 \uACF5\uAC04",browser:"\uBE0C\uB77C\uC6B0\uC800",youtube:"YouTube",gallery:"\uAC24\uB7EC\uB9AC",settings:"\uC124\uC815",menu:"\uBA54\uB274",store:"\uC2A4\uD1A0\uC5B4",env:"\uD658\uACBD",keyboard:"\uD0A4\uBCF4\uB4DC",center:"\uC911\uC559 \uC815\uB82C",search:"\uC6F9 \uAC80\uC0C9",searchYt:"\uB3D9\uC601\uC0C1 \uAC80\uC0C9",open:"\uC5F4\uAE30",close:"\uB2EB\uAE30",general:"\uC77C\uBC18",hands:"\uD578\uB4DC \uD2B8\uB798\uD0B9",windows:"\uCC3D",dock:"\uB3C5",perf:"\uC131\uB2A5",language:"\uC5B8\uC5B4",on:"\uCF1C\uC9D0",off:"\uAEBC\uC9D0",sens:"\uAC10\uB3C4",scale:"\uD06C\uAE30 \uBE44\uC728",dist:"\uAC70\uB9AC",curve:"\uACE1\uB960",size:"\uD06C\uAE30",quality:"\uD654\uC9C8",apps:"\uC571",recents:"\uCD5C\uADFC \uD56D\uBAA9",battery:"\uBC30\uD130\uB9AC",net:"\uB124\uD2B8\uC6CC\uD06C",time:"\uC2DC\uAC04",libAll:"\uC804\uCCB4",libFilter:"\uD544\uD130",libGames:"\uAC8C\uC784",centered:"\uD654\uBA74\uC774 \uC911\uC559\uC5D0 \uB9DE\uCDB0\uC84C\uC2B5\uB2C8\uB2E4",langChanged:"\uC5B8\uC5B4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4",langTitle:"\uC5B8\uC5B4",langContinue:"\uACC4\uC18D",langPick:"\uC5B8\uC5B4 \uC120\uD0DD",notif:"\uC54C\uB9BC",noNotif:"\uC0C8 \uC54C\uB9BC \uC5C6\uC74C",profile:"\uD504\uB85C\uD544",dockSnapSlot:"\uB3C5 \uC0AC\uC804 \uC815\uC758 \uC2AC\uB86F",dockSnapDesc:"\uCC3D \uC774\uB3D9 \uC2DC \uBC18\uD22C\uBA85 \uAC80\uC740 \uC2AC\uB86F \uD45C\uC2DC",dockSnapHint:"\uC5EC\uAE30\uC5D0 \uB193\uC544 \uC2AC\uB86F\uC5D0 \uBC30\uCE58",qualityHigh:"\uB192\uC74C (1080p)",qualityMedium:"\uC911\uAC04 (890p)",qualityLow:"\uB0AE\uC74C (390p)",qualityAuto:"\uC790\uB3D9"};dn.it={...dn.en,desktop:"Spazio di lavoro",browser:"Browser",youtube:"YouTube",gallery:"Galleria",settings:"Impostazioni",menu:"Menu",store:"Store",env:"Ambienti",keyboard:"Tastiera",center:"Ricentra",search:"Cerca sul web",searchYt:"Cerca video",open:"Apri",close:"Chiudi",general:"Generale",hands:"Tracciamento mani",windows:"Finestre",dock:"Dock",perf:"Prestazioni",language:"Lingua",on:"Attivo",off:"Disattivo",sens:"Sensibilit\xE0",scale:"Scala",dist:"Distanza",curve:"Curvatura",size:"Dimensione",quality:"Qualit\xE0",apps:"App",recents:"Recenti",battery:"Batteria",net:"Rete",time:"Ora",libAll:"Tutti",libFilter:"Filtro",libGames:"Giochi",centered:"Ambiente centrato",langChanged:"Lingua modificata",langTitle:"Lingua",langContinue:"Continua",langPick:"Scegli la lingua",notif:"Notifiche",noNotif:"Nessuna notifica",profile:"Profilo",dockSnapSlot:"Slot predefinito Dock",dockSnapDesc:"Mostra finestra nera semitrasparente quando sposti le finestre",dockSnapHint:"Rilascia qui per agganciare",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Bassa (390p)",qualityAuto:"Automatica"};dn.nl={...dn.en,desktop:"Werkruimte",browser:"Browser",youtube:"YouTube",gallery:"Galerij",settings:"Instellingen",menu:"Menu",store:"Winkel",env:"Omgevingen",keyboard:"Toetsenbord",center:"Centreren",search:"Zoeken op het web",searchYt:"Video\u2019s zoeken",open:"Openen",close:"Sluiten",general:"Algemeen",hands:"Handtracking",windows:"Vensters",dock:"Dock",perf:"Prestaties",language:"Taal",on:"Aan",off:"Uit",sens:"Gevoeligheid",scale:"Schaal",dist:"Afstand",curve:"Kromming",size:"Grootte",quality:"Kwaliteit",apps:"Apps",recents:"Recent",battery:"Batterij",net:"Netwerk",time:"Tijd",libAll:"Alles",libFilter:"Filter",libGames:"Games",centered:"Omgeving gecentreerd",langChanged:"Taal gewijzigd",langTitle:"Taal",langContinue:"Doorgaan",langPick:"Kies je taal",notif:"Meldingen",noNotif:"Geen nieuwe meldingen",profile:"Profiel",dockSnapSlot:"Vooraf ingesteld Dock-vak",dockSnapDesc:"Toon halftransparant zwart vak tijdens verplaatsen van vensters",dockSnapHint:"Laat hier los om te plaatsen",qualityHigh:"Hoog (1080p)",qualityMedium:"Gemiddeld (890p)",qualityLow:"Laag (390p)",qualityAuto:"Automatisch"};dn.ru={...dn.en,desktop:"\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",browser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440",youtube:"YouTube",gallery:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",menu:"\u041C\u0435\u043D\u044E",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",env:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",keyboard:"\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",center:"\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0441\u0435\u0442\u0438",searchYt:"\u041F\u043E\u0438\u0441\u043A \u0432\u0438\u0434\u0435\u043E",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",general:"\u041E\u0431\u0449\u0438\u0435",hands:"\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0440\u0443\u043A",windows:"\u041E\u043A\u043D\u0430",dock:"\u0414\u043E\u043A",perf:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",language:"\u042F\u0437\u044B\u043A",on:"\u0412\u043A\u043B.",off:"\u0412\u044B\u043A\u043B.",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",scale:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431",dist:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",curve:"\u0418\u0437\u0433\u0438\u0431",size:"\u0420\u0430\u0437\u043C\u0435\u0440",quality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",apps:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",recents:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",battery:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F",net:"\u0421\u0435\u0442\u044C",time:"\u0412\u0440\u0435\u043C\u044F",libAll:"\u0412\u0441\u0435",libFilter:"\u0424\u0438\u043B\u044C\u0442\u0440",libGames:"\u0418\u0433\u0440\u044B",centered:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",langChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0451\u043D",langTitle:"\u042F\u0437\u044B\u043A",langContinue:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",langPick:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A",notif:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",noNotif:"\u041D\u0435\u0442 \u043D\u043E\u0432\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",profile:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",dockSnapSlot:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0442 \u0434\u043E\u043A\u0430",dockSnapDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u0447\u0451\u0440\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043E\u043A\u043E\u043D",dockSnapHint:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F",fingerTouch:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C (\u0431\u0435\u0437 \u0449\u0438\u043F\u043A\u0430)",fingerTouchDesc:"\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442; \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0443\u043A\u0438 \u0432\u043F\u0435\u0440\u0451\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 (\u0431\u0435\u0437 \u043B\u0443\u0447\u0430 \u0438 \u043A\u0440\u0443\u0436\u043A\u0430)",qualityHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qualityMedium:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qualityLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",qualityAuto:"\u0410\u0432\u0442\u043E"};var Qo=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E",table:"ja"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",table:"ru"},{id:"de",label:"Deutsch",table:"de"},{id:"ko",label:"\uD55C\uAD6D\uC5B4",table:"ko"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano",table:"it"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands",table:"nl"},{id:"pt-PT",label:"Portugu\xEAs (Portugal)",table:"pt"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),T1="pt",cu=n=>Qo.find(e=>e.id===n)||Qo.find(e=>e.id===T1);var tp=()=>cu(Fe.lang).table||"pt",k=n=>(dn[tp()]||dn.pt)[n]||dn.pt[n]||n,qr=n=>Qo.some(e=>e.id===n&&e.table)?(Fe.lang=n,Ve(),Se("lang"),!0):!1,ru={},ze=(n,e)=>((ru[n]||(ru[n]=[])).push(e),e),Se=(n,e)=>(ru[n]||[]).forEach(t=>t(e));function it(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(it._t),it._t=setTimeout(()=>e.classList.remove("on"),2400)}var Pe=new qa,me=new qt(72,1,.05,120);me.rotation.order="YXZ";var Mt=new Ln;Pe.add(Mt);var $t=1.55;me.position.set(0,$t,0);eu({settings:Fe,camera:me,contentRoot:Mt});var to=ge?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new zr({antialias:!0,alpha:!0});ge||(to.setClearColor(0,0),document.getElementById("gl").appendChild(to.domElement));var ie=ge?new Kc:new tu;document.getElementById("css3d").appendChild(ie.domElement);if(ge){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}var Jh=Object.freeze({high:{id:"high",height:1080,label:"1080p",dpr:2},medium:{id:"medium",height:890,label:"890p",dpr:1.55},low:{id:"low",height:390,label:"390p",dpr:1}}),au="medium",np=()=>Fe.quality==="auto"?au:Jh[Fe.quality]?Fe.quality:"medium",C0=()=>Jh[np()]||Jh.medium;function L0(){let n=np();return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.55)}function P0(){var t,i;let n=np(),e=C0();document.documentElement.dataset.quality=Fe.quality,document.documentElement.dataset.qualityTier=n,document.documentElement.dataset.qualityRes=e.label,(i=(t=window.NativeXR)==null?void 0:t.setQuality)==null||i.call(t,n)}function uu(){P0(),ge||(Ht.width=innerWidth,Ht.height=innerHeight);let n=Ht.width,e=Ht.height;me.aspect=n/e,me.updateProjectionMatrix(),to.setPixelRatio(L0()),to.setSize(n,e),ie.setSize(n,e),Se("resize")}addEventListener("resize",uu);addEventListener("orientationchange",()=>setTimeout(uu,120));uu();ze("quality",uu);var R1=Object.freeze(["passthrough","sunset","dusk","cinema","lagoon","virtual","palm","night","space","tropical","lakeside","dark"]),ip=()=>[{id:"sunset",name:k("envSunset"),thumb:"./env/sunset.jpg"},{id:"passthrough",name:k("envPass"),thumb:null},{id:"dark",name:k("envDark"),thumb:"./env/dark.jpg"},{id:"dusk",name:k("envDusk"),thumb:"./env/dusk.jpg"},{id:"palm",name:k("envPalm"),thumb:"./env/palm.jpg"},{id:"lagoon",name:k("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:k("envVirtual"),thumb:"./env/virtual.jpg"},{id:"night",name:k("envNight"),thumb:"./env/night.jpg"},{id:"space",name:k("envSpace"),thumb:"./env/space.jpg"},{id:"cinema",name:k("envCinema"),thumb:"./env/cinema.jpg"},{id:"tropical",name:k("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:k("envLakeside"),thumb:"./env/lakeside.jpg"}];function wi(n){var e,t,i;Fe.env=R1.includes(n)?n:"passthrough",Fe.envChosen=1,Fe.env!=="passthrough"&&(Fe.panorama=Fe.env),Ve(),Se("env",Fe.env),typeof window<"u"&&((e=window.nextvrShowCircleLoader)==null||e.call(window,"env",Fe.env)),(i=(t=window.NativeXR)==null?void 0:t.env)==null||i.call(t,Fe.env)}var ki=n=>wi(n?"passthrough":Fe.panorama);function du(n){var e,t;Fe.mrDim=n?1:0,Ve(),typeof document<"u"&&(Fe.mrDim?document.documentElement.dataset.mrDim="1":delete document.documentElement.dataset.mrDim),(t=(e=window.NativeXR)==null?void 0:e.setMrDim)==null||t.call(e,!!Fe.mrDim),Se("mr-dim",Fe.mrDim)}var su,T0;typeof document<"u"&&Fe.mrDim&&(document.documentElement.dataset.mrDim="1",(T0=(su=window.NativeXR)==null?void 0:su.setMrDim)==null||T0.call(su,!0));var Gn={ok:!1,has:!1,q:new nt,tmp:new nt,e:new ci},C1=new nt,L1=new nt(-Math.SQRT1_2,0,0,Math.SQRT1_2),P1=new D(0,0,1),ou=Math.PI/180;function I1(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*ou}function N1(n){n.alpha!=null&&(Gn.has=!0,Gn.e.set(n.beta*ou,n.alpha*ou,-n.gamma*ou,"YXZ"),Gn.tmp.setFromEuler(Gn.e),Gn.tmp.multiply(L1),Gn.tmp.multiply(C1.setFromAxisAngle(P1,-I1())),Gn.q.copy(Gn.tmp))}async function Xr(){if(ge)return Gn.ok=Gn.has=!0,Se("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(it("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",N1,!0),Gn.ok=!0,setTimeout(()=>{Gn.has||it("Sem girosc\xF3pio: arraste para olhar")},1200),Se("gyro",!0),!0)}catch{return it("Girosc\xF3pio indispon\xEDvel"),!1}}var D1=()=>Gn.ok&&Gn.has,Wr=null,eo=0,Qh=0;addEventListener("pointerdown",n=>{ge||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Wr={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Wr&&(eo-=(n.clientX-Wr.x)*.0032,Qh=Math.max(-1.2,Math.min(1.2,Qh-(n.clientY-Wr.y)*.0032)),Wr={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Wr=null);addEventListener("pointercancel",()=>Wr=null);function Oi(){Xt.reset();let n=new ci().setFromQuaternion(me.quaternion,"YXZ");Mt.rotation.y=n.y,Mt.position.set(0,0,0),me.position.set(0,$t,0),Se("recenter"),it(k("centered"))}var I0=[],el=n=>I0.push(n),E0=performance.now(),nu=0,jh=0,Zh=0,iu=0,Kh=0,lu=0,Qn=null,N0=()=>{let n=performance.now();Zh>0&&(iu+=(n-Zh)/1e3,Kh++,iu>=1&&(lu=Math.round(Kh/iu),iu=0,Kh=0)),Zh=n};function ep(n){let e=Math.min((n-E0)/1e3,.05);if(E0=n,ge||(D1()?(me.quaternion.slerp(Gn.q,1-Math.exp(-e*12)),eo&&(me.rotateY(eo),eo=0)):(me.quaternion.setFromEuler(new ci(Qh,me.rotation.y+eo,0,"YXZ")),eo=0)),Xt.update(n,e),me.position.set(Xt.out.x,$t+Xt.out.y,Xt.out.z),window.__gorillaStereoOverlay){ie.render(Pe,me),requestAnimationFrame(ep);return}for(let t of I0)t(e,n);if(to.render(Pe,me),ie.render(Pe,me),nu+=e,jh++,nu>=1){let t=Math.round(jh/nu);if(Fe.quality==="auto"){let s=ge&&Fe.handsOn&&lu>=15?Math.min(t,lu*2):t,r=s>=52?"high":s>=34?"medium":"low";r!==au&&(au=r,P0(),to.setPixelRatio(L0()),Se("quality-tier",au))}let i=document.getElementById("fps");i.textContent=Fe.showFps?t+" fps \xB7 "+C0().label+(ge&&Fe.handsOn?" \xB7 tracking "+lu+" fps":"")+(ge&&Fe.handsOn?U1():""):"",nu=0,jh=0}requestAnimationFrame(ep)}var k1=typeof location<"u"&&(new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1")),O1=typeof location<"u"&&location.hash.includes("onboarding=skip");k1||(requestAnimationFrame(ep),O1&&!Fe.entryEnvChosen?ki(!0):wi(Fe.env));if(ge){let n=new Ee,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),me.quaternion.setFromRotationMatrix(n),me.position.set(Xt.out.x,$t+Xt.out.y,Xt.out.z),me.updateMatrixWorld(!0),e&&(Mt.rotation.y=new ci().setFromQuaternion(me.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=it,window.nextvrDiag=t=>{Qn=t}}function U1(){if(!Qn)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n(Qn.camera);t!==null&&e.push("cam "+t);let i=n(Qn.infer);return i!==null&&e.push("infer "+i+"ms"),Qn.delegate&&e.push(String(Qn.delegate).split(" ")[0]),typeof Qn.narrow=="number"&&typeof Qn.wide=="number"&&Qn.narrow+Qn.wide>0&&e.push("slots "+(Qn.narrow>=Qn.wide?1:2)),n(Qn.stale)>0&&e.push("stale "+Math.round(Qn.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var hu=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},pu=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var Si=[],ye={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},or=new hu,no=new pu,ap=Math.tan(36*Math.PI/180),O0=ap*1.5,mu=!1,gu=-1/0,nl=2*O0,il=2*ap,sp=null,U0=500;eu({getHands:()=>({list:Si,lastAt:gu})});var op=()=>mu;async function Ki(){if(mu)return!0;mu=!0;try{let n=await window.nextvrStartHands?.();if(!n){mu=!1;return!1}return Se("hands",!0),!0}catch(n){return mu=!1,it("Não foi possível iniciar a câmera."),!1}}function F0(n){for(let e of n)Se(`pinch${e}`,ye)}function sl(){let n=or.cancel();no.reset(),ye.down=ye.active=!1,ye.phase=or.phase,ye.hand=null,ye.mode="idle",z1(),F0(n)}function $r(){sl()}function lp(){sl(),Si.length=0,mu=!1,gu=-1/0,Se("phonehands",{hands:[],consumed:new Set,scaleX:nl,scaleY:il}),window.nextvrStopHands?.(),ge&&window.NativeXR.hands(!1),Se("hands",!1)}function Yr(n){let e=nl*2*O0,t=il*2*ap;return{x:.5+n[0]/e,y:.5-n[1]/t}}var F1=250,D0=1.6,k0=.06,ei={x:0,y:0},tl=0,fu=0;function yu(n=performance.now()){if(!ye.active)return{x:ye.x,y:ye.y};let e=n-tl;if(!(e>0)||e>F1)return{x:ye.x,y:ye.y};let t=e/1e3,i=s=>Math.max(-k0,Math.min(k0,s));return{x:Math.min(1,Math.max(0,ye.x+i(ei.x*t))),y:Math.min(1,Math.max(0,ye.y+i(ei.y*t)))}}function B1(n,e,t=0){let i=t>0&&fu>0?(t-fu)/1e9:tl>0?(e-tl)/1e3:-1;if(ye.active&&i>.004&&i<.3){let s=r=>Math.max(-D0,Math.min(D0,r));ei.x+=(s((n.x-ye.x)/i)-ei.x)*.35,ei.y+=(s((n.y-ye.y)/i)-ei.y)*.35,Math.hypot(ei.x,ei.y)<.12&&(ei.x=ei.y=0)}else i>=0&&i<=.004||(ei.x=ei.y=0);tl=e,fu=t>0?t:0}function z1(){ei.x=ei.y=0,tl=0,fu=0}window.nextvrHands=(n,e=1,t=1)=>{var u;if(!mu)return;N0();let i=performance.now();if(nl=e,il=t,gu=i,U0=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),Si.splice(0,Si.length,...n.hands||[]),Se("handframe",{...n,hands:Si}),window.__gorillaStereoOverlay){(u=window.__gorillaOnHands)==null||u.call(window,i);return}let r={hands:Si,consumed:new Set,scaleX:nl,scaleY:il};if(S0(r),Se("phonehands",r),r.blockFar){sl();return}let a=Si.filter(d=>!r.consumed.has(d.id)),o=or.down&&a.find(d=>d.id===or.handId)||a.find(d=>d.pinching)||[...a].sort((d,h)=>h.palmWidth-d.palmWidth)[0];if(!o){sl();return}let l=Yr(o.aim);B1(l,i,Number(n.timestampNs)||0),ye.x=l.x,ye.y=l.y,ye.active=!0,ye.hand=o;let c=o.predicted?[]:or.update(o.id,o.pinching);c.includes("down")?no.begin(o.id,l.x*Ht.width,l.y*Ht.height,i):c.includes("up")?no.end():c.includes("cancel")&&no.reset(),or.down&&!o.predicted&&no.sample(o.id,l.x*Ht.width,l.y*Ht.height,i),ye.mode=no.mode,ye.down=or.down,ye.phase=or.phase,F0(c),ye.down&&Se("pinchsample",ye)};var rp=document.getElementById("overlay");rp.getContext("2d").clearRect(0,0,rp.width,rp.height);el(()=>{var n,e;!window.__gorillaStereoOverlay&&ge&&sp!==!!S.handDraw&&(sp=!!S.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,sp)),Si.length&&performance.now()-gu>U0&&(Si.length=0,sl(),Se("phonehands",{hands:[],consumed:new Set,scaleX:nl,scaleY:il}))});var H1=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),V1=Object.freeze({gauge:'<path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 3-4"/><circle cx="12" cy="14" r="1"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',edit3:'<path d="M12 20h9M4 17.5l-.5 3.5 3.5-.5L19 8.5 15.5 5z"/><path d="m14 6.5 3.5 3.5"/>',zap:'<path d="M13 2 4 13h7l-1 9 10-12h-7z"/>',maximize:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',distance:'<path d="M6 12h12M9 9l-3 3 3 3M15 9l3 3-3 3"/>',curve:'<path d="M3 17c3-8 15-8 18 0"/><path d="M4 20h2M18 20h2"/>',appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',vision:'<path d="M4.2 8.6C4.7 6.5 6.4 5 8.6 5h6.8c2.2 0 3.9 1.5 4.4 3.6l.8 4.2c.3 1.8-1.1 3.5-3 3.5h-1.5c-.6 0-1.2-.2-1.7-.7l-1.3-1.1h-2.2l-1.3 1.1c-.5.5-1.1.7-1.7.7H6.4c-1.9 0-3.3-1.7-3-3.5z"/><path d="M3.6 9 1.8 8.2M20.4 9l1.8-.8M12 6.4v4.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="M20 12H5"/><path d="m12 19-7-7 7-7"/>',star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.3 12 2"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),G1=Object.freeze({...V1,...H1});function ee(n,e="ui-icon"){let t=G1[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var Kt=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),rl=(n,e,t)=>Math.max(e,Math.min(t,n)),Wn=n=>Number.isFinite(n)?n:0;function cp(n,e=0,t=1.55,i=null){let s=Wn(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,a=Wn(n==null?void 0:n.z),o=Number.isFinite(i)?i:Math.hypot(s,a);o<1e-5&&(o=Kt.minDistance,s=0,a=-o);let l=rl(Math.atan2(-s,-a),-Kt.maxYaw,Kt.maxYaw);o=rl(o,Kt.minDistance,Kt.maxDistance);let c=Math.max(0,Wn(e)),u=t+Kt.lowerEdgeFromEye+c,d=t+Kt.upperEdgeFromEye-c;return r=u<=d?rl(r,u,d):t,{x:-Math.sin(l)*o,y:r,z:-Math.cos(l)*o}}function B0(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((Wn(e.x)-Wn(n.x))*t,(Wn(e.y)-Wn(n.y))*i)}function up(n,e,t,i){return B0(n,e,t,i)>=Kt.dragActivationPx}function z0(n,e,t,i){return B0(n,e,t,i)>=Kt.resizeActivationPx}function dp(n,e){let t=Wn(n==null?void 0:n.x),i=Wn(n==null?void 0:n.y),s=Wn(n==null?void 0:n.z),r=Wn(e==null?void 0:e.x)-t,a=Wn(e==null?void 0:e.y)-i,o=Wn(e==null?void 0:e.z)-s,l=Math.hypot(r,a,o);if(!Number.isFinite(l)||l<=Kt.motionDeadZone)return{x:t,y:i,z:s};let u=Math.min(l,Kt.maxMotionStep)/l;return{x:t+r*u,y:i+a*u,z:s+o*u}}var W1=Object.freeze({maxAngle:1.15});function al(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(W1.maxAngle,e))}function vu(n,e){let t=al(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function xu(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function lr(n,e=Kt.maxResize){let t=rl(Wn(e),Kt.minResize,Kt.maxResize);return rl(Number.isFinite(n)?n:1,Kt.minResize,t)}function H0(n,e,t=1.55){let i=Math.max(1e-5,Wn(e)),s=Math.min(n-(t+Kt.lowerEdgeFromEye),t+Kt.upperEdgeFromEye-n);return lr(s/i)}function V0(n,e,t,i){return!(e>1)||!Number.isFinite(t)?lr(n,i):lr(n*t/e,i)}function G0(n,e){let t=lr(n),s=lr(e)-t;return Math.abs(s)<.004?t:lr(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function W0(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let a=0;a<i;a++)r.push({angle:a===0?0:a%2?e:-e,row:0});for(let a=0;a<s;a++)r.push({angle:s===1?0:a===0?-e/2:e/2,row:1});return r}var q0=1.22;function hp(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function X0({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=hp(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function $0(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var ol=n=>Number.isFinite(n)?n:0,Y0=(n,e,t)=>Math.max(e,Math.min(t,n));function io(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=ol(n==null?void 0:n.x),a=ol(n==null?void 0:n.y),o=ol(n==null?void 0:n.z),l=a-s,c=Math.hypot(r,o),u=Math.hypot(r,l,o)||1e-6,d=Math.max(0,ol(e)),h=Math.max(0,ol(t));return{x:r,y:a,z:o,yaw:Math.atan2(-r,-o),pitch:c>1e-6?Math.atan2(l,c):l>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(d,c||1e-6),halfPitch:Math.atan2(h,u)}}function j0(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return io(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function pp(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return io({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function q1(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,a=n.pitch-n.halfPitch,o=n.pitch+n.halfPitch,l=e.pitch-e.halfPitch,c=e.pitch+e.halfPitch,u=Math.min(i,r)-Math.max(t,s),d=Math.min(o,c)-Math.max(a,l);return u>0&&d>0?-Math.sqrt(u*d):Math.hypot(Math.max(-u,0),Math.max(-d,0))}function bu(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,a=Number.isFinite(t.gap)?t.gap:.03,o=n.box||io(n,n.hw||.5,n.hh||.35),l=0,c=0;for(let h of e){let f=q1(o,h);if(f<0){let g=f*f;l+=26e3*g+1e3,g>c&&(c=g)}else if(f<a){let g=a-f;l+=900*g*g}}let u=Math.hypot(o.x,o.z)||1e-6;l+=26*Math.abs(o.yaw),Math.abs(o.yaw)>r&&(l+=26*(Math.abs(o.yaw)-r)*40),u>s&&(l+=34*(u-s));let d=Number.isFinite(t.lift)?t.lift:o.y;return l+=Math.abs(o.y-d)*12,{score:l,overlap:c,yaw:o.yaw,radius:u}}function X1({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:a=3,ringStep:o=.16,rows:l=2,topRowStep:c=1.22}={}){let u=[],d=Number.isFinite(e)?e:n,h=[0];for(let f=1;f<=6;f++){let g=f*t;if(g>r+1e-9)break;h.push(g,-g)}for(let f=0;f<l;f++){let g=f===0?d:d+s*2*(c-1)+s;for(let y=0;y<a;y++){let p=i+y*o;for(let m of h){let b=Y0(m,-r,r);u.push({x:Math.sin(b)*p,y:g,z:-Math.cos(b)*p,angle:b,row:f,radius:p})}}}return u}function Z0({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,lift:l=null,rings:c=3,ringStep:u=.16,rows:d=2,gap:h=.03,topRowStep:f=1.22,improvement:g=1e-6}={}){let y={eye:t,desiredDistance:s,maxYaw:o,gap:h,lift:l??t},p=X1({eye:t,lift:l??t,step:i,distance:s,halfHeight:a,outerLimit:o,rings:c,ringStep:u,rows:d,topRowStep:f}),m=null;for(let b of p){let v=io(b,r,a),{score:M,overlap:E}=bu({...b,box:v},n,y),R={x:b.x,y:b.y,z:b.z,angle:b.angle,row:b.row,radius:b.radius,score:M,overlap:E,box:v};(!m||R.score<m.score-g)&&(m=R)}if(e){let b=io(e,r,a),{score:v,overlap:M}=bu({...e,box:b},n,y),E={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:v,overlap:M,box:b,desired:!0};(!m||E.score<=m.score+g)&&(m=E)}return m}function K0({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,gap:l=.03,maxShift:c=3}={}){let u={eye:t,desiredDistance:s,maxYaw:o,gap:l,lift:n.y},d=(p,m,b)=>io({x:p,y:m,z:b},r,a),h=bu({...n,box:d(n.x,n.y,n.z)},e,u);if(h.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:h.score,moved:!1,overlap:0};let f={x:n.x,y:n.y,z:n.z,score:h.score,overlap:h.overlap},g=Math.hypot(n.x,n.z)||s,y=Math.atan2(-n.x,-n.z);for(let p=1;p<=c;p++)for(let m of[1,-1]){let b=Y0(y+m*p*i,-o,o),v=-Math.sin(b)*g,M=-Math.cos(b)*g,{score:E,overlap:R}=bu({x:v,y:n.y,z:M,box:d(v,n.y,M)},e,u);E<f.score&&(f={x:v,y:n.y,z:M,score:E,overlap:R})}return{...f,moved:f.x!==n.x||f.z!==n.z}}var _u={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3};function wu(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}var so=class{constructor({armMs:e=_u.armMs,graceMs:t=_u.graceMs,holdMs:i=_u.holdMs,progressHoldMs:s=_u.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,a=s&&r;if(this.open){if(a)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let o=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:o,active:!1}}if(a){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let o=i-this.startedAt;return o>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,o/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var xt=.00105,he=[],co=null,qn={y:$t-.6,z:-1.7,h:.12};function hy(n=null){let e=[];for(let t of he)t===n||t.hidden||t.onboarding||e.push(j0(t));if(Fi&&mt.offsetWidth>0){let t=pp(Ei);t&&e.push(t)}if(st&&Dn&&!bl&&st.element.offsetWidth>0){let t=pp(Dn);t&&e.push(t)}return e}var bp=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:a=!1,chrome:o=!0,resizable:l=!0}){this.onboarding=a,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new D,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=al(a?0:S.win360?S.win360K:0),this.curveRadius=vu(s,this.curve);let c=document.createElement("div");c.className="win-shell",c.dataset.windowId=e,c.dataset.resizeScale="1",c.style.width=s+"px";let u=document.createElement("div");u.className="win",u.style.width=s+"px",u.style.height=r+"px",u.innerHTML=`<div class="win-bar">
        <button class="win-new-tab-btn" data-win-new-tab type="button" title="Criar nova guia"><span class="win-new-tab-plus">+</span><span>Criar nova guia</span></button>
        <div class="win-grip" style="display:none"></div><div class="win-title" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden"></div>
        <div class="win-top-right-acts">
          <button class="win-btn" data-act="pin" aria-label="${k("repin")}" title="${k("repin")}">${ee("crosshair")}</button>
          <button class="win-btn wide fold-btn" data-act="curve" aria-label="360\xB0" title="Dobra / 360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
          <button class="win-btn close" data-act="close" aria-label="${k("close")}" title="${k("close")}">${ee("x")}</button>
        </div>
      </div><div class="win-body"></div>`,u.querySelector(".win-title").textContent=t,u.querySelector(".win-body").appendChild(i),u.addEventListener("pointerdown",()=>Jt(this),!0),u.querySelector(".win-bar").addEventListener("click",f=>{var p;if(f.target.closest("[data-win-new-tab]")){(p=window.nextvrOpenBrowserOption)==null||p.call(window,"new-tab");return}let y=f.target.closest("[data-act]");y&&(y.dataset.act==="close"?ft(this):y.dataset.act==="curve"?this.setCurve(this.curve>0?0:al(S.win360K)):J0(this))}),u.addEventListener("click",f=>{var y;let g=f.target.closest('[data-act="pin"]');g&&!((y=u.querySelector(".win-bar"))!=null&&y.contains(g))&&J0(this)});let d=document.createElement("div");d.className="win-handle",d.title=k("moveWindow"),d.setAttribute("aria-label",k("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.hidden=!l,h.title=k("resize"),h.setAttribute("aria-label",k("resize")),h.innerHTML=ee("move"),c.append(u,d,h),this.el=u,this.shell=c,this.handle=d,this.resizeHandle=h,c.dataset.curve=String(this.curve),(a||!o)&&(u.querySelector(".win-bar").hidden=!0),this.obj=new Gr(c),this.obj.scale.setScalar(xt*(this.onboarding?Jn.welcomeScale:S.winScale)),Mt.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=fp(s*xt,r*xt,this,this.hitSegments),this.bendHit(),this.grab=fp(260*xt,90*xt,this),this.grab.userData.isHandle=!0,this.resizeHit=fp(80*xt,80*xt,this),this.resizeHit.userData.isResize=!0,!ge){let f=g=>({x:g.clientX/Ht.width,y:g.clientY/Ht.height});d.addEventListener("pointerdown",g=>{g.stopPropagation();let y=f(g);Rp(this,y.x,y.y,"desktop"),d.setPointerCapture(g.pointerId)}),d.addEventListener("pointermove",g=>{if(lt.win===this){let y=f(g);Cp(y.x,y.y)}}),d.addEventListener("pointerup",ns),d.addEventListener("pointercancel",ns),h.addEventListener("pointerdown",g=>{g.stopPropagation();let y=f(g);yy(this,y.x,y.y),h.setPointerCapture(g.pointerId)}),h.addEventListener("pointermove",g=>{if(Dt.win===this){let y=f(g);vy(y.x,y.y)}}),h.addEventListener("pointerup",mr),h.addEventListener("pointercancel",mr)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new Pn(this.w*xt,this.h*xt,i,1),this.hitSegments=i,this.curveRadius=vu(this.w,this.curve),this.bendHit(),this.apply(),Bi(),Se("wins",he)}setCurve(e){this.curve=al(e),this.curveRadius=vu(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new Pn(this.w*xt,this.h*xt,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return xu(e,this.curveRadius)*xt}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,xu(e.getX(t)/xt,this.curveRadius)*xt);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*S.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2($t-e.position.y,i)*S.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?Jn.welcomeScale:S.winScale)*this.resizeScale;e.scale.setScalar(xt*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let a=(this.h/2+34)*xt*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-a),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation);let o=28;this.resizeHit.translateX((this.w/2+o)*xt*r),this.resizeHit.translateY(-(this.h/2+o)*xt*r),this.resizeHit.translateZ(this.bulge(this.w/2)+.003),this.resizeHit.scale.setScalar(r),e.updateMatrixWorld(!0),this.hit.updateMatrixWorld(!0),this.grab.updateMatrixWorld(!0),this.resizeHit.updateMatrixWorld(!0)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&lt.win===this&&ns(),t&&Dt.win===this&&mr(),(s=(i=ie).invalidate)==null||s.call(i))}};function fp(n,e,t,i=1){let s=new St(new Pn(n,e,i,1),new un({visible:!1}));return s.userData.win=t,Mt.add(s),s}function Bi(){let n=he.some(o=>!o.onboarding&&!o.hidden);for(let o of he)o.onboarding&&(o.id==="spatial-launcher"?(n?(o.resizeScale=.88,o.target.set(0,$t-.22,-.84)):(o.resizeScale=1.24,o.target.set(0,$t-.01,-.84)),o.apply()):o.target.set(0,$t,-Jn.welcomeDistance));let e=he.filter(o=>o.pinned&&!o.onboarding&&!o.hidden),t=e.length;if(!t)return;let i=ge?S.winDist:-qn.z+.5+(S.winDist-2.2),s=Math.max(...e.map(o=>o.w*o.resizeScale))*xt*S.winScale,r=ge?X0({width:s,dist:i,gap:.5,outerLimit:Kt.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));if(W0(t,r).forEach(({angle:o,row:l},c)=>{let u=e[c],d=u.h*xt*S.winScale*u.resizeScale,h=qn.y+qn.h/2+.14+d/2,f=Math.sin(o)*i,g=-Math.cos(o)*i,y=l===0?h:Math.min(h+d*2*(q0-1)+d,$t+Kt.upperEdgeFromEye-d);u.target.set(f,y,g)}),!ge)return;let a=Math.min(r,hp(s,i)*.6);for(let o of e){let l=o.w*xt*S.winScale*o.resizeScale/2,c=o.h*xt*S.winScale*o.resizeScale/2,u=K0({desired:{x:o.target.x,y:o.target.y,z:o.target.z},occupied:hy(o),eye:$t,step:a,distance:i,halfWidth:l,halfHeight:c,outerLimit:Kt.maxYaw-.06,maxShift:4});o.target.set(u.x,u.y,u.z)}}ze("recenter",Bi);ze("resize",Bi);function Qt(n){var s,r;let e=he.find(a=>a.id===n.id);if(e)return Jt(e),e;let t=he.filter(a=>!a.onboarding&&!a.hidden);if(t.length>=5){let a=$0(t);a&&(it(`${k("arcFull")}: ${a.title}`),ft(a))}let i=new bp(n);return he.push(i),Bi(),Jt(i),i.obj.position.copy(i.target),n.free&&Y1(i,n.at),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),Pe.updateMatrixWorld(!0),(r=(s=ie).invalidate)==null||r.call(s),Se("wins",he),i}function Y1(n,e=null){n.pinned=!1;let t=n.w*xt*S.winScale*n.resizeScale/2,i=n.h*xt*S.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:qn.y+qn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-S.winDist)||S.winDist,a=Z0({occupied:hy(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-S.winDist},eye:$t,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:Kt.maxYaw-.06,lift:s,rings:3,rows:1});a&&n.target.set(a.x,a.y,a.z)}function ft(n){var s,r,a;if(typeof n=="string"&&(n=he.find(o=>o.id===n)),!n)return;let e=he.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);vt&&(vt.nativeId?vt.nativeId===i:n.el.contains(vt))&&di(!1),fl&&n.el.contains(fl)&&(fl=null),lt.win===n&&ns(),Dt.win===n&&mr(),he.splice(e,1),(s=n._cleanupQB)==null||s.call(n),Mt.remove(n.obj),Mt.remove(n.hit),Mt.remove(n.grab),Mt.remove(n.resizeHit),n.shell.remove(),co===n&&(co=he[he.length-1]||null),Bi(),(a=(r=ie).invalidate)==null||a.call(r),Se("wins",he)}function Jt(n){co!==n&&(co=n,n.lastFocus=performance.now(),he.forEach(e=>e.el.classList.toggle("focus",e===co)))}function J0(n){var e,t,i,s;n.pinned=!0,n.shell.classList.remove("free"),Bi(),n.obj.position.copy(n.target),n.apply(),(t=(e=ie).invalidate)==null||t.call(e),(s=(i=ie).render)==null||s.call(i,Pe,me)}var vl=()=>co,hi=new qo,Tu=new je,lt={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},Dt={win:null,start:null,active:!1,startScale:1,startDistance:1},hn={source:null,start:null,active:!1,plane:null,anchor:null},ui=document.createElement("div");ui.className="win-drop-slot";ui.dataset.windowId="drop-slot";ui.hidden=!0;ui.innerHTML='<div class="win-drop-slot-inner"><span class="win-drop-slot-badge"></span></div>';var dr=new Gr(ui);dr.visible=!1;Mt.add(dr);var Ru=null,Cu=!1;function j1(n){let e=ge?S.winDist:-qn.z+.5+(S.winDist-2.2),t=n.h*xt*S.winScale*n.resizeScale,i=qn.y+qn.h/2+.14+t/2,s=gr||0,r=.56;return[0,-r,r].map(a=>{let o=s+a;return new D(Math.sin(o)*e,i,-Math.cos(o)*e)})}function py(n){var g;if(!n||S.spatialLauncher||S.dockSnapSlot===0){fy();return}let e=j1(n),t=he.filter(y=>y!==n&&!y.onboarding&&!y.hidden),i=e.filter(y=>!t.some(p=>p.obj.position.distanceTo(y)<.22)),s=i.length?i:e,r=s[0],a=n.obj.position.distanceTo(s[0]);for(let y=1;y<s.length;y++){let p=n.obj.position.distanceTo(s[y]);p<a&&(r=s[y],a=p)}Ru=r;let o=(g=lt.anchor)!=null&&g.center?Mt.worldToLocal(lt.anchor.center.clone()):n.obj.position;Cu=n.obj.position.distanceTo(o)>.04&&a<=.16,ui.style.width=n.w+"px",ui.style.height=n.h+"px";let c=ui.querySelector(".win-drop-slot-badge");c&&(c.textContent=k("dockSnapHint")),ui.classList.toggle("is-ready",Cu),ui.hidden=!1,dr.position.copy(r);let u=Math.atan2(-r.x,-r.z)*S.winCurve,d=Math.hypot(r.x,r.z)||.001,h=Math.atan2($t-r.y,d)*S.winTilt*-1;dr.rotation.set(h,u,0,"YXZ");let f=S.winScale*n.resizeScale;dr.scale.setScalar(xt*f),dr.visible=!0}function fy(){var n,e;Ru=null,Cu=!1,(dr.visible||!ui.hidden)&&(dr.visible=!1,ui.hidden=!0,ui.classList.remove("is-ready"),(e=(n=ie).invalidate)==null||e.call(n))}function sa(n,e,t=hi){return me.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0),Tu.set(n*2-1,1-e*2),t.setFromCamera(Tu,me),t}function Z1(n){return n.h*xt*S.winScale*n.resizeScale/2}function K1(n,e,t=null){let i=cp(e,Z1(n),$t,t);return new D(i.x,i.y,i.z)}function Rp(n,e,t,i="handle",s=null){if(n.onboarding||Dt.win)return!1;lt.win&&ns(),Jt(n),sa(e,t);let r=n.obj.getWorldPosition(new D),a=new ai().setFromNormalAndCoplanarPoint(hi.ray.direction.clone(),r),o=hi.ray.intersectPlane(a,new D);if(!o)return!1;let l=Mt.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(lt,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:a,anchor:{hit:o.clone(),center:r.clone(),radius:c,applied:new D}}),!0}function J1(){let n=lt.win;!n||lt.active||(lt.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Bi(),py(n))}function Cp(n,e){let t=lt.win;if(!t)return!1;sa(n,e);let i=hi.ray.intersectPlane(lt.plane,new D);if(!i)return!1;if(!lt.active){if(!up(lt.start,{x:n,y:e},Ht.width,Ht.height))return!1;J1()}let s=lt.anchor,r=i.clone().sub(s.hit);s.applied.copy(dp(s.applied,r));let a=s.center.clone().add(s.applied),o=K1(t,Mt.worldToLocal(a),s.radius);return t.target.copy(o),t.obj.position.copy(t.target),py(t),!0}function ns(){let n=lt.win;n&&(Cu&&Ru&&(n.target.copy(Ru),n.obj.position.copy(n.target),n.apply()),n.shell.classList.remove("moving")),fy(),Object.assign(lt,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function my(n,e,t="pinch"){if(!Fi||lt.win||Dt.win)return!1;hn.start&&Ns(),sa(n,e);let i=Nn.getWorldPosition(new D),s=new ai().setFromNormalAndCoplanarPoint(hi.ray.direction.clone(),i),r=hi.ray.intersectPlane(s,new D);return r?(Object.assign(hn,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new D}}),mt.classList.add("grab-armed"),Ft.setAttribute("aria-pressed","true"),!0):!1}function Q1(){!hn.start||hn.active||(hn.active=!0,mt.classList.remove("grab-armed"),mt.classList.add("moving"))}function Lp(n,e){if(!hn.start)return!1;sa(n,e);let t=hi.ray.intersectPlane(hn.plane,new D);if(!t)return!1;if(!hn.active){if(!up(hn.start,{x:n,y:e},Ht.width,Ht.height))return!1;Q1()}let i=hn.anchor,s=t.clone().sub(i.hit);i.applied.copy(dp(i.applied,s));let r=i.center.clone().add(i.applied),a=Mt.worldToLocal(r),o=cp(a,qn.h/2,$t),l=Math.max($t-.55,Math.min($t-.08,o.y));return ea=new D(o.x,l,o.z),gr=Math.atan2(-o.x,-o.z),po(),!0}function Ns(){mt==null||mt.classList.remove("grab-armed","moving"),Ft==null||Ft.setAttribute("aria-pressed","false"),Object.assign(hn,{source:null,start:null,active:!1,plane:null,anchor:null})}function gy(n,e,t){me.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new D).project(me),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*Ht.width,(t-r)*Ht.height)}function yy(n,e,t){return n.onboarding||lt.win?!1:(Dt.win&&mr(),Jt(n),Object.assign(Dt,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,gy(n,e,t))}),!0)}function vy(n,e){let t=Dt.win;if(!t)return!1;if(!Dt.active){if(!z0(Dt.start,{x:n,y:e},Ht.width,Ht.height))return!1;Dt.active=!0,t.shell.classList.add("resizing")}let i=t.h*xt*S.winScale/2,s=Math.max(Dt.startScale,H0(t.obj.position.y,i,$t)),r=V0(Dt.startScale,Dt.startDistance,gy(t,n,e),s);return t.resizeScale=lr(G0(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function mr(){Dt.win&&Dt.win.shell.classList.remove("resizing"),Object.assign(Dt,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function Xn(n,e){sa(n,e);let t=[];for(let o of he)o.hidden||(o.onboarding||t.push(o.resizeHit,o.grab),t.push(o.hit));let i=hi.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),a=i.object.geometry.parameters;return{win:s,u:r.x/a.width+.5,v:.5-r.y/a.height,distance:i.distance}}var xy=Xn;window.windowHitAt=Xn;var dt=null,nn=null,eA=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function tA(n,e,t,i,s){var l,c;let r=s?eA(s):null;e===0&&(n.target=r,n.activation=r);let a=n.target||r;if(!a)return;let o=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";a.dispatchEvent(new PointerEvent(o,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function cl(n,e,t=n.x,i=n.y,s=null){var r,a;if(n.id==="shell"&&((r=n.win)!=null&&r.onboarding))tA(n,e,t,i,s);else if(window.NativeXR.handTouch(n.id,e,t,i),e===1&&s){let o=(a=s.closest)==null?void 0:a.call(s,"[data-qb-url],[data-qb-act]");o&&o.click()}}function ia(n,e,t){let i=n.getBoundingClientRect(),s=i.left+e*(i.width||n.offsetWidth),r=i.top+t*(i.height||n.offsetHeight),a=document.elementFromPoint(s,r);if(a&&n.contains(a))return a;let o=null,l=c=>{for(let u of c.children){let d=u.getBoundingClientRect();d.width>0&&d.height>0&&s>=d.left&&s<=d.right&&r>=d.top&&r<=d.bottom&&(o=u),l(u)}};return l(n),o||n}function is(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),a=document.elementFromPoint(r.left+i,r.top+s)||Pp(t,i,s);if(e===0&&!(a!=null&&a.closest("[data-native-browser],[data-native-app]"))){let g=fA(a);g?di(!0,g):di(!1)}if(a==null?void 0:a.closest("[data-native-xr]")){dt=null;return}let l=a==null?void 0:a.closest("[data-native-app]");if(l){let g=l.getBoundingClientRect(),y=Yh(l.offsetWidth,l.offsetHeight,+(l.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!y&&!dt)return;let p="app:"+l.dataset.nativeApp;if(dt&&dt.id!==p&&(cl(dt,3),dt=null),e===0){if(!y)return;dt={id:p,win:n.win,x:y.u,y:y.v}}dt&&dt.id===p&&(y||e!==2)&&(y&&(dt.x=y.u,dt.y=y.v),cl(dt,e,dt.x,dt.y)),(e===1||e===3)&&(dt=null);return}let c=a==null?void 0:a.closest("[data-native-browser]"),u=c==null?void 0:c.getBoundingClientRect(),d=c?c.dataset.nativeBrowser:"shell",h=r.left+i-((u==null?void 0:u.left)||0),f=r.top+s-((u==null?void 0:u.top)||0);dt&&dt.id!==d&&(cl(dt,3),dt=null,e!==0)||(e===0&&(dt={id:d,win:n.win,x:h,y:f}),dt&&dt.id===d&&(dt.x=h,dt.y=f,cl(dt,e,h,f,a)),(e===1||e===3)&&(dt=null))}function by(){dt&&cl(dt,3),dt=null,nn=null,ns(),mr(),Ns()}ze("pinchcancel",by);function hr(n,e){if(ge){is(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=Pp(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function Pp(n,e,t){let i=null,s=r=>{for(let a of r.children){let o=nA(a,n);e>=o.l&&e<=o.r&&t>=o.t&&t<=o.b&&(i=a,s(a))}};return s(n),i||n}function nA(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}var dl=null,Lu=!1,Ai=null,Pu=!1,_y=new Map;function Ip(){dl&&(clearTimeout(dl),dl=null)}var iA='button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-nav],[data-spatial-act],[data-spatial-env],[data-store-launch],[data-install-gorilla],[data-launch-gorilla],.lib-tile,[data-qb-url],[data-fist-act],[data-fist-env],[data-entry-act],[data-entry-tab],[data-entry-env]';function sA(n,e){var s;let t=Ds(n,e);if(t){let r=t.popupOpt?t.el:An[t.i];return{x:n,y:e,el:r||null,isDock:!0}}let i=Xn(n,e);if(i&&!i.handle&&!i.resize){let r=ia(i.win.el,i.u,i.v),a=((s=r==null?void 0:r.closest)==null?void 0:s.call(r,iA))||null;if(a)return{x:n,y:e,el:a,hit:i}}return null}function rA(n=null){if(S.pinchOnApp===0)return null;let e=n||ye.hand,t=e==null?void 0:e.points;if(!t||t.length<26||Math.hypot(t[18]-t[15],t[19]-t[16])<=.008||Math.hypot(t[24]-t[18],t[25]-t[19])<=.008)return null;let i=Number(Ls==null?void 0:Ls.scaleX)||1,s=Number(Ls==null?void 0:Ls.scaleY)||1,r=[];Number.isFinite(t[12])&&Number.isFinite(t[13])&&Number.isFinite(t[24])&&Number.isFinite(t[25])&&r.push([((t[12]+t[24])*.5-.5)*i+.5,((t[13]+t[25])*.5-.5)*s+.5]),Number.isFinite(t[24])&&Number.isFinite(t[25])&&r.push([(t[24]-.5)*i+.5,(t[25]-.5)*s+.5]),t.length>=30&&Number.isFinite(t[15])&&Number.isFinite(t[16])&&Number.isFinite(t[27])&&Number.isFinite(t[28])&&r.push([((t[15]+t[27])*.5-.5)*i+.5,((t[16]+t[28])*.5-.5)*s+.5]),Array.isArray(e.palm)&&e.palm.length>=2&&r.push([(e.palm[0]-.5)*i+.5,(e.palm[1]-.5)*s+.5]);let a=[[0,0],[0,-.016],[0,.016],[-.016,0],[.016,0]];for(let[l,c]of r)for(let[u,d]of a){let h=sA(l+u,c+d);if(h)return h}let o=_y.get((e==null?void 0:e.id)||"right");return o&&performance.now()-o.at<=380&&o.el&&document.body.contains(o.el)?{x:o.x,y:o.y,el:o.el}:null}var Iu=null;function aA(n,e,t,i,s){var l,c;if(!(n!=null&&n.el))return!1;let a=ia(n.el,e,t),o=!1;for(;a&&a!==document.body;){if(a instanceof HTMLElement){let u=a.scrollHeight>a.clientHeight+2,d=a.scrollWidth>a.clientWidth+2;if(u&&Math.abs(s)>1e-4&&(a.scrollTop-=s*1650,o=!0),d&&Math.abs(i)>1e-4&&(a.scrollLeft-=i*1650,o=!0),o)break}if(a===n.el)break;a=a.parentElement}if(!o){let u=n.el.querySelector("[data-spatial-scroll-track], .spatial-honeycomb, .st-quest-main, .st-main, .lib-grid, .set-body, .win-body");u instanceof HTMLElement&&(u.scrollHeight>u.clientHeight+2&&Math.abs(s)>1e-4&&(u.scrollTop-=s*1650,o=!0),u.scrollWidth>u.clientWidth+2&&Math.abs(i)>1e-4&&(u.scrollLeft-=i*1650,o=!0))}return o&&((c=(l=ie).invalidate)==null||c.call(l)),o}ze("pinchdown",()=>{var l,c,u,d,h,f,g,y,p,m;Ip(),Lu=!1,Ai=null,Pu=!1,Iu={x:ye.x,y:ye.y};let n=ye.x,e=ye.y,t=Xn(n,e),i=yl(n,e),s=Q0(n,e),r=Ds(n,e),a=!!(t!=null&&t.resize||t!=null&&t.handle||s||r||i&&i.button||t&&((c=(l=ia(t.win.el,t.u,t.v))==null?void 0:l.closest)!=null&&c.call(l,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-store-launch],[data-launch-gorilla],.lib-tile,[data-qb-url],[data-fist-act],[data-fist-env],[data-native-app],[data-native-browser],[data-native-xr]'))),o=S.fingerTouch!==0||!a?rA():null;if(o&&(Ai=o,n=o.x,e=o.y,t=Xn(n,e),i=yl(n,e),s=Q0(n,e),r=Ds(n,e),!(((d=(u=o.el)==null?void 0:u.dataset)==null?void 0:d.id)==="browser"||((f=(h=o.el)==null?void 0:h.dataset)==null?void 0:f.spatialBuiltin)==="browser"||((y=(g=o.el)==null?void 0:g.dataset)==null?void 0:y.app)==="browser")&&o.el&&!(t!=null&&t.resize)&&!(t!=null&&t.handle)&&!s&&!(i&&i.button)&&cr(o.x,o.y,o.el))){Pu=!0,Ts=performance.now()+220;return}if(t!=null&&t.resize){yy(t.win,n,e);return}if(t!=null&&t.handle){Rp(t.win,n,e,"handle",(p=ye.hand)==null?void 0:p.id);return}if(s&&(!t||s.distance<=(t.distance??1/0)+.12)&&(!i||s.distance<i.distance)){my(n,e,"pinch");return}if(r&&(!t||r.distance<=(t.distance??1/0)+.15)&&(!i||r.distance<i.distance)){Ai&&(ye.x=n,ye.y=e),pl("down");return}if(i&&(!t||i.distance<t.distance)){Uu(i.button);return}if(t){Jt(t.win);let b=ia(t.win.el,t.u,t.v);((m=b==null?void 0:b.closest)==null?void 0:m.call(b,'[data-spatial-builtin="browser"], [data-app="browser"]'))&&(dl=setTimeout(()=>{dl=null,Lu=!0,nn=null,xl("spatial")},2e3)),nn={win:t.win,hit:t};return}pl("down")});ze("pinchsample",()=>{if(ts&&Ry(performance.now()),nn&&ye.mode==="drag"&&!(Ai!=null&&Ai.el)&&(hr(nn.hit,"down"),nn=null),ye.mode==="drag"&&!(Ai!=null&&Ai.el)&&!Dt.win&&!lt.win&&!hn.start){let n=Iu||{x:ye.x,y:ye.y},e=ye.x-n.x,t=ye.y-n.y;Iu={x:ye.x,y:ye.y};let i=Xn(ye.x,ye.y);i&&!i.handle&&!i.resize&&aA(i.win,i.u,i.v,e,t)}});ze("pinchup",()=>{if(Ip(),Iu=null,Pu){Pu=!1,Ai=null,nn=null;return}let n=Ai;Ai=null;let e=n?n.x:ye.x,t=n?n.y:ye.y;if(Lu){Lu=!1,nn=null;return}if(ts){ks();return}if(Mi>=0||Jr||oo){n&&(ye.x=e,ye.y=t),pl("up");return}if(n!=null&&n.el&&document.body.contains(n.el)){nn=null,cr(n.x,n.y,n.el);return}if(nn&&ye.mode==="drag"&&(hr(nn.hit,"down"),nn=null),nn){let r=Xn(e,t),a=r&&!r.handle&&!r.resize&&r.win===nn.win?r:nn.hit;nn=null,hr(a,"down"),hr(a,"up");return}if(dt){let r=Xn(e,t);r&&r.win===dt.win&&!r.handle&&!r.resize?is(r,1):by();return}if(Dt.win){mr();return}if(lt.win){ns();return}if(hn.start){Lp(ye.x,ye.y),Ns();return}let i=Ds(e,t),s=Xn(e,t);if(i&&(!s||i.distance<=(s.distance??1/0)+.15)){n&&(ye.x=e,ye.y=t),pl("up");return}if(s&&!s.handle&&!s.resize){hr(s,"up");return}pl("up")});var mt=document.createElement("div");mt.className="dock";var Ti=document.createElement("div");Ti.className="browser-tab-popup dock-browser-popup";Ti.dataset.browserTabMenu="dock";Ti.hidden=!0;Ti.innerHTML=`
  <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
  <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
`;Ti.addEventListener("click",n=>{var i;let e=n.target.closest("[data-browser-opt]");if(!e)return;n.stopPropagation();let t=e.dataset.browserOpt||"new-tab";na(),(i=window.nextvrOpenBrowserOption)==null||i.call(window,t)});var Ft=document.createElement("button");Ft.type="button";Ft.className="dock-grab";Ft.title=k("moveDock");Ft.setAttribute("aria-label",k("moveDock"));Ft.setAttribute("aria-pressed","false");var Nn=new Gr(mt);Mt.add(Nn);var Ei=new St(new Pn(1,1),new un({visible:!1})),Ui=new St(new Pn(1,1),new un({visible:!1})),Qi=new St(new Pn(.26,.14),new un({visible:!1,side:zn}));Mt.add(Ei,Ui,Qi);function na(){var e,t,i,s;Ti.hidden=!0;let n=document.querySelector('[data-browser-tab-menu="spatial"]');n&&(n.hidden=!0),(t=(e=ie).invalidate)==null||t.call(e),(s=(i=ie).render)==null||s.call(i,Pe,me)}function xl(n="dock"){var e,t,i,s,r,a;if(n==="spatial"){let o=document.querySelector('[data-browser-tab-menu="spatial"]');o&&(o.hidden=!1)}else{let o=Ou("browser");o&&(Ti.style.left=`${o.offsetLeft+o.offsetWidth/2}px`),Ti.hidden=!1,po()}(t=(e=window.NativeXR)==null?void 0:e.click)==null||t.call(e),(s=(i=ie).invalidate)==null||s.call(i),(a=(r=ie).render)==null||a.call(r,Pe,me)}typeof window<"u"&&(window.nextvrShowBrowserTabMenu=xl,window.nextvrHideBrowserTabMenus=na);if(!ge){let n=e=>({x:e.clientX/Ht.width,y:e.clientY/Ht.height});Ft.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);my(t.x,t.y,"desktop")&&Ft.setPointerCapture(e.pointerId)}),Ft.addEventListener("pointermove",e=>{if(hn.source==="desktop"){let t=n(e);Lp(t.x,t.y)}}),Ft.addEventListener("pointerup",e=>{hn.source==="desktop"&&(Ns(),Ft.hasPointerCapture(e.pointerId)&&Ft.releasePointerCapture(e.pointerId))}),Ft.addEventListener("pointercancel",Ns)}var Fi=!0,ul=!1;function Bt(n){var e,t;Fi=!!n,Nn.visible=Fi,Fi||(Mi=-1,Ns()),(t=(e=ie).invalidate)==null||t.call(e)}var wy=()=>Fi;function Yt(n){var t,i;let e=!!n;return ul===e||(ul=e,mt.style.setProperty("display",e?"none":"","important"),Ei.visible=Ui.visible=!e,Bt(!e),(i=(t=ie).invalidate)==null||i.call(t)),ul}var ku=()=>ul,oA=[],An=[],Ou=n=>An.find(e=>e.dataset.id===n)||null,_p=[],lA=ee("wifi"),cA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',uA='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function Sy(n){oA=n,An=[],_p.length=0,mt.innerHTML="";for(let e of n){if(e.kind==="sep"){mt.appendChild(dA());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",mt.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=S.profileAvatar?`<img src="${S.profileAvatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`:uA,S.profileName&&(t.title=S.profileName);else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${lA}</span><span class="dk-bat">${cA}<span class="dk-bat-percent"></span></span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),_p.push({b:t,win:e.win})}if(e.id==="browser"){let i=null;t.addEventListener("pointerdown",()=>{clearTimeout(i),i=setTimeout(()=>{t.dataset.holdConsumed="1",xl("dock")},2e3)});let s=()=>{clearTimeout(i),i=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s)}t.addEventListener("click",()=>{if(t.dataset.holdConsumed==="1"){t.dataset.holdConsumed="0";return}na(),e.run()}),mt.appendChild(t),An.push(t)}mt.appendChild(Ti),Ft.title=k("moveDock"),Ft.setAttribute("aria-label",k("moveDock")),mt.appendChild(Ft),Np(),Dp(),ho(),My(),po()}function dA(){let n=document.createElement("span");return n.className="dock-sep",n}function My(){for(let{b:n,win:e}of _p){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",he.some(i=>i.id===e))}}ze("wins",My);var es={time:"--:--",date:"",batteryLevel:null,charging:!1,online:navigator.onLine},rs=()=>({...es});function Nu(){Se("device-status",rs())}function Np(){let n=mt.querySelector(".dk-time"),e=new Date;es.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),es.date=e.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n&&(n.textContent=es.time),Nu()}Np();setInterval(Np,1e3);function Dp(){let n=mt.querySelector(".dk-wifi");es.online=navigator.onLine,n&&(n.style.opacity=es.online?"1":".35"),Nu()}addEventListener("online",Dp);addEventListener("offline",Dp);var uo=null;function ho(){let n=mt.querySelector(".dk-bat");if(!uo){n&&(n.style.display="none"),es.batteryLevel=null,es.charging=!1,Nu();return}let e=Math.max(0,Math.min(1,Number(uo.level)||0)),t=!!uo.charging;if(es.batteryLevel=e,es.charging=t,n){n.style.display="";let i=n.querySelector(".dk-bat-percent"),s=n.querySelector(".fill");s&&(s.setAttribute("width",String(Math.max(1.6,13*e))),s.setAttribute("fill",t?"#8de6c8":e<.2?"#ff6b6b":"currentColor")),i&&(i.textContent=`${Math.round(e*100)}%`),n.title=`${Math.round(e*100)}%${t?" \xB7 carregando":""}`}Nu()}window.nextvrBattery=n=>{try{let e=typeof n=="string"?JSON.parse(n):n;e&&typeof e.level=="number"&&(uo=e,ho())}catch{}};!ge&&navigator.getBattery&&navigator.getBattery().then(n=>{uo=n,n.addEventListener("levelchange",ho),n.addEventListener("chargingchange",ho),ho()}).catch(()=>{});var Mi=-1,Jr=null,mp={x:-1,y:-1},hl=null,oo=!1;function wp(){hl&&(clearTimeout(hl),hl=null)}ze("pinchcancel",()=>{Mi=-1,Jr=null,oo=!1,wp(),Ip()});function pl(n){var s,r,a;let e=Ds(ye.x,ye.y);if(n==="down"){if(wp(),oo=!1,mp={x:ye.x,y:ye.y},e!=null&&e.popupOpt){Mi=-1,Jr=e.popupOpt;return}Jr=null,Mi=e?e.i:-1,Mi>=0&&((r=(s=An[Mi])==null?void 0:s.dataset)==null?void 0:r.id)==="browser"&&(hl=setTimeout(()=>{hl=null,oo=!0,xl("dock")},2e3));return}if(wp(),oo){oo=!1,Mi=-1,Jr=null;return}let t=Mi,i=Jr;if(Mi=-1,Jr=null,n==="up"){let o=(e==null?void 0:e.popupOpt)||i;if(o){na(),(a=window.nextvrOpenBrowserOption)==null||a.call(window,o);return}let l=e&&e.i===t?e.i:-1;if(l<0&&t>=0&&Math.hypot(ye.x-mp.x,ye.y-mp.y)<.085&&(l=t),l<0)return;let c=An[l];c&&(c.style.transform="scale(.88)",setTimeout(()=>c.style.transform="",150),c.click())}}function Q0(n,e){return!Fi||!Sp?null:(sa(n,e),Ui.updateMatrixWorld(!0),hi.intersectObject(Ui,!1)[0]||null)}function Ds(n,e){if(!Fi)return null;if(sa(n,e),!Ti.hidden){Qi.updateMatrixWorld(!0);let o=hi.intersectObject(Qi,!1)[0];if(o){let c=Qi.worldToLocal(o.point.clone()).y>=0?"new-tab":"incognito-tab",u=Ti.querySelector(`[data-browser-opt="${c}"]`);return{i:-1,popupOpt:c,el:u,distance:o.distance}}}Ei.updateMatrixWorld(!0);let t=hi.intersectObject(Ei,!1)[0];if(!t)return null;let i=Ei.worldToLocal(t.point.clone()),s=Ei.geometry.parameters,r=(i.x/s.width+.5)*mt.offsetWidth,a=(.5-i.y/s.height)*mt.offsetHeight;for(let o=0;o<An.length;o++){let l=An[o];if(r>=l.offsetLeft-4&&r<=l.offsetLeft+l.offsetWidth+4&&a>=l.offsetTop-4&&a<=l.offsetTop+l.offsetHeight+4)return{i:o,distance:t.distance,button:l}}return null}var ey="",Sp="",gr=0,ea=null;ze("recenter",()=>{gr=0,Rs.ready=!1,ea=null,Ns();for(let n of he)!n.onboarding&&!n.hidden&&(n.pinned=!0,n.shell.classList.remove("free"));po(),Bi();for(let n of he)n.hidden||n.apply()});ze("summon-dock",()=>{var e;me.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0);let n=me.getWorldDirection(new D).transformDirection(Mt.matrixWorld.clone().invert());gr=Math.atan2(-n.x,-n.z),Rs.ready=!1,ea=null,Ns(),po(),(e=window.NativeXR)==null||e.click()});function po(){let n=Ht.width>Ht.height,e=(ge?Jn.dockDistance:n?1.42:1.75)*S.dockDist,t=ge?-Jn.dockDrop:n?-.5:-.6,i=xt*(ge?Jn.dockScale:n?.74:.88)*S.dockSize;ea?Nn.position.copy(ea):Nn.position.set(-Math.sin(gr)*e,$t+t,-Math.cos(gr)*e),Nn.rotation.set(.26,gr,0,"YXZ"),Nn.scale.setScalar(i);let s=mt.offsetWidth*i,r=mt.offsetHeight*i,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==ey&&(ey=a,Ei.geometry.dispose(),Ei.geometry=new Pn(s,r),qn.h=r,ea||Bi());let o=Ft.offsetWidth*i,l=Ft.offsetHeight*i,c=o.toFixed(3)+"x"+l.toFixed(3);o>0&&c!==Sp&&(Sp=c,Ui.geometry.dispose(),Ui.geometry=new Pn(o,l)),Ei.position.copy(Nn.position),Ei.rotation.copy(Nn.rotation),Qi.position.copy(Nn.position),Qi.rotation.copy(Nn.rotation);let u=Ou("browser"),d=u&&mt.offsetWidth>0?(u.offsetLeft+u.offsetWidth*.5-mt.offsetWidth*.5)*i:0;Qi.translateX(d),Qi.translateY((mt.offsetHeight*.5+52)*i),Qi.translateZ(.005),Ui.position.copy(Nn.position),Ui.rotation.copy(Nn.rotation),Ui.translateY((mt.offsetHeight/2-Ft.offsetTop-Ft.offsetHeight/2)*i),Ui.translateZ(.004),!ea&&(qn.y!==Nn.position.y||qn.z!==-e)&&(qn.y=Nn.position.y,qn.z=-e,Bi())}var hA=[["q","w","e","r","t","y","u","i","o","p",{k:"\u232B",cls:"wide kb-bksp",icon:"backspace",label:"Apagar"}],["a","s","d","f","g","h","j","k","l",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide kb-shift",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@close",cls:"util kb-hide",icon:"keyboard",label:"Fechar teclado"},{k:"@sym",cls:"util kb-sym",lbl:"!123",label:"N\xFAmeros e s\xEDmbolos"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:" "},{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@settings",cls:"util",icon:"settings",label:"Configura\xE7\xF5es"}]],pr={q:"1",w:"2",e:"3",r:"4",t:"5",y:"6",u:"7",i:"8",o:"9",p:"0",a:"@",s:"#",d:"$",f:"&",g:"*",h:"(",j:")",k:"'",l:'"',z:"%",x:"-",c:"+",v:"=",b:"/",n:";",m:":",",":"!",".":"?"},ty=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],pA=0,st=null,Dn=null,vt=null,ao=null,ss=!1,ta=!1,fr=!1,bl=!1,Is=window.__nextvrTyping,fA=n=>(Is==null?void 0:Is.editable(n))||null,fl=null,Mp=1,Ay=2,Du=3,mA=ge;function yr(n){var t,i;if(bl=!!n,!st)return!1;let e=!!n;return st.visible=!e,st.element.style.setProperty("display",e?"none":"","important"),Dn&&(Dn.visible=!e),e&&ks(),(i=(t=ie).invalidate)==null||i.call(t),!0}var Ey=()=>!!st&&st.visible!==!1,Ty=()=>bl;function gA(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&he.find(s=>s.shell===t)||null}function di(n,e){var s,r,a,o,l,c,u,d,h,f,g,y;if(!n){ge&&console.log("kb close; was serving",(vt==null?void 0:vt.nativeId)||(vt==null?void 0:vt.tagName)||"nothing"),ks(),st&&(Mt.remove(st),Mt.remove(Dn),st.element.remove(),st=null),vt=null,ao=null,ss=ta=fr=!1,Rs.ready=!1,(r=(s=ie).invalidate)==null||r.call(s),(o=(a=ie).render)==null||o.call(a,Pe,me);return}let t=e||fl;if(vt=t&&!t.nativeId?(Is==null?void 0:Is.focus(t))||null:t||null,vt&&!vt.nativeId&&(fl=vt),ao=gA(vt),ge&&console.log("kb open for",(vt==null?void 0:vt.nativeId)||(vt==null?void 0:vt.tagName)||"nothing","in window",(ao==null?void 0:ao.id)??"none"),st){Ap(),Pe.updateMatrixWorld(!0),(c=(l=ie).invalidate)==null||c.call(l),(d=(u=ie).render)==null||d.call(u,Pe,me);return}let i=document.createElement("div");i.className="kb";for(let p of hA){let m=document.createElement("div");m.className="kb-row";for(let b of p){let v=typeof b=="string"?b:b.k,M=document.createElement("button");M.className="key"+(typeof b=="string"?"":" "+b.cls),typeof b=="string"?(M.textContent=v,pr[v]&&(M.dataset.sub=pr[v])):b.icon?(M.innerHTML=ee(b.icon),M.setAttribute("aria-label",b.label),M.title=b.label):M.textContent=b.lbl||v,M.dataset.k=v,m.appendChild(M)}i.appendChild(m)}i.addEventListener("click",p=>{let m=p.target.closest("[data-k]");m&&(Uu(m),ks())}),st=new Gr(i),st.scale.setScalar(xt*(ge?Jn.keyboardScale:.9)),Mt.add(st),Dn=new St(new Pn(1,1),new un({visible:!1})),Mt.add(Dn),Ap(),Pe.updateMatrixWorld(!0),(f=(h=ie).invalidate)==null||f.call(h),(y=(g=ie).render)==null||y.call(g,Pe,me)}function yA(){ss?ta?(ss=!1,ta=!1):ta=!0:(ss=!0,ta=!1),Op()}function kp(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@"),r=s&&fr&&pr[n]?pr[n]:n;if(t===Du){e&&e.classList.remove("hot"),s&&gp(r,r,!!i,Du);return}if(t===Mp){if(ge&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){di(!1);return}if(n==="\u21E7"){yA();return}if(n==="@sym"){fr=!fr,Op();return}if(n==="@lang"||n==="@settings")return;if(n==="@mic"){it(k("micOff"));return}if(n==="@emoji"){gp(n,ty[pA++%ty.length],!1,Mp);return}}gp(r,r,r==="\u232B"||r==="\u23CE"||fr?!1:void 0,t)}function gp(n,e,t,i){if(!vt)return!1;let s=t===void 0?ss:t;return vt.nativeId?window.NativeXR.key(vt.nativeId,e,!!s,i||0):Is==null||Is.key(n,!!s,i||0),mA&&i!==Ay&&console.log("kb key ->",vt.nativeId||vt.tagName+"."+(vt.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==Du&&s&&ss&&!ta&&(ss=!1,Op()),!0}function Op(){if(st){for(let n of st.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=ss?ta?"lock":"once":"";for(let n of st.element.querySelectorAll('[data-k="@sym"]'))n.textContent=fr?"ABC":"!123",n.dataset.state=fr?"lock":"";for(let n of st.element.querySelectorAll("[data-k]")){let e=n.dataset.k;fr&&pr[e]?(n.textContent=pr[e],n.dataset.sub=e):e.length===1&&/[a-zç,.]/i.test(e)&&(n.textContent=/[a-zç]/i.test(e)?ss?e.toUpperCase():e.toLowerCase():e,pr[e]&&(n.dataset.sub=pr[e]))}}}var ny="",vA=.35,Rs={yaw:0,ready:!1},xA=n=>Math.atan2(Math.sin(n),Math.cos(n));function bA(){let n=ao;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return gr}function Ap(n=0){if(!st)return;let e=bA();Rs.ready?Rs.yaw+=xA(e-Rs.yaw)*(1-Math.exp(-n*7)):(Rs.yaw=e,Rs.ready=!0);let t=Rs.yaw,i=ge?Jn.keyboardDistance:-qn.z-.35;st.position.set(-Math.sin(t)*i,$t-(ge?Jn.keyboardDrop:.68),-Math.cos(t)*i),st.rotation.set(-Math.PI/2+vA,t,0,"YXZ");let s=st.element.offsetWidth*st.scale.x,r=st.element.offsetHeight*st.scale.x,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==ny&&(ny=a,Dn.geometry.dispose(),Dn.geometry=new Pn(s,r)),Dn.position.copy(st.position),Dn.rotation.copy(st.rotation)}var _A=700,wA=90,SA=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),ts=null,ml=0;function yl(n,e){var o,l;if(!st||bl)return null;Tu.set(n*2-1,-(e*2-1)),hi.setFromCamera(Tu,me);let t=hi.intersectObject(Dn,!1)[0];if(!t)return null;let i=Dn.worldToLocal(t.point.clone()),s=Dn.geometry.parameters,r=(i.x/s.width+.5)*st.element.offsetWidth,a=(.5-i.y/s.height)*st.element.offsetHeight;return{distance:t.distance,button:((l=(o=Pp(st.element,r,a))==null?void 0:o.closest)==null?void 0:l.call(o,"[data-k]"))||null}}function Uu(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return ks(),e?(ts={key:e,button:n,shift:ss},kp(e,n,Mp),SA(e)&&(ml=performance.now()+_A),!0):!1}function ks(){let n=ts;ts=null,ml=0,n&&kp(n.key,n.button,Du,n.shift)}ze("pinchcancel",ks);function Ry(n){var i,s;if(!ts)return!1;let e=yl(ye.x,ye.y);if(!e)return ks(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==ts.key?(ks(),Uu(e.button)):(ml&&n>=ml&&(kp(ts.key,ts.button,Ay),ml=n+wA),!0)}var iy="";el((n,e)=>{let t=`${S.winScale}:${S.winDist}`;if(iy!==t&&(iy=t,Bi()),po(),Ap(n),ts&&Ry(e),nn&&ye.mode==="drag"&&(hr(nn.hit,"down"),nn=null),dt&&ye.active&&ye.down){let i=Xn(ye.x,ye.y);i&&i.win===dt.win&&!i.handle&&!i.resize&&is(i,2)}if((Dt.win||lt.win&&lt.source!=="fist")&&ye.active&&ye.down){let i=yu(e);Dt.win&&vy(i.x,i.y),lt.win&&lt.source!=="fist"&&Cp(i.x,i.y)}if(hn.start&&ye.active&&ye.down){let i=yu(e);Lp(i.x,i.y)}for(let i of he)i.hidden||i.apply();Cy()});function yp(n){let e=n.matrixWorld.elements,t=me.position.x-e[12],i=me.position.z-e[14];return t*e[8]+i*e[10]<0}function Cy(){var e,t,i,s;Pe.updateMatrixWorld(!0);let n=!1;if(Fi&&mt){let r=yp(Nn)?"1":"0";mt.dataset.backface!==r&&(mt.dataset.backface=r,Ft&&(Ft.dataset.backface=r),n=!0)}if(st&&st.visible!==!1&&st.element){let r=yp(st)?"1":"0";st.element.dataset.backface!==r&&(st.element.dataset.backface=r,n=!0)}for(let r of he){if(r.hidden||!r.shell)continue;let a=yp(r.obj)?"1":"0";r.shell.dataset.backface!==a&&(r.shell.dataset.backface=a,n=!0)}n&&((t=(e=ie).invalidate)==null||t.call(e),(s=(i=ie).render)==null||s.call(i,Pe,me))}typeof window<"u"&&(window.__updateBackfaceStates=Cy);var Ly='button, .d-btn, .spatial-app-tile, .lib-tile, .st-card, .st-tab, .quick-control, .entry-card, .entry-seg-btn, .entry-btn, .entry-store-card, .entry-profile-box, .yt-link, [role="button"]',jr=null;function Cs(n){var t;let e=((t=n==null?void 0:n.closest)==null?void 0:t.call(n,Ly))||null;return e===jr?e:(jr&&jr.classList.remove("nextvr-choosing"),jr=e,jr&&jr.classList.add("nextvr-choosing"),jr)}function Qr(n){var i;let e=((i=n==null?void 0:n.closest)==null?void 0:i.call(n,Ly))||(n instanceof HTMLElement?n:null);if(!e)return null;Cs(e),e.classList.remove("nextvr-clicking"),e.classList.add("nextvr-clicking");let t=e.querySelector(":scope > .nextvr-click-ripple");return t||(t=document.createElement("span"),t.className="nextvr-click-ripple",t.setAttribute("aria-hidden","true"),e.appendChild(t)),t.classList.remove("is-active"),t.classList.add("is-active"),setTimeout(()=>{e.classList.remove("nextvr-clicking"),t==null||t.remove()},340),e}typeof window<"u"&&(window.__nextvrChooseAnim=Cs,window.__nextvrClickAnim=Qr,document.addEventListener("pointerover",n=>{n.target instanceof Element&&Cs(n.target)},{passive:!0,capture:!0}),document.addEventListener("click",n=>{n.target instanceof Element&&Qr(n.target)},{passive:!0,capture:!0}));if(ge){let n=function(){try{uo=JSON.parse(window.NativeXR.battery()),ho()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?di(!0,{nativeId:e}):(vt==null?void 0:vt.nativeId)!==e&&di(!1)},window.nextvrAppFocus=e=>di(!0,{nativeId:e}),n(),setInterval(n,1e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var pt=null,Su=new Map,Mu=new so({holdMs:2e3,graceMs:260}),lo=new Set,Ls={hands:[],consumed:new Set,scaleX:1,scaleY:1},ll=null,vp=0,sy=350,MA=240;function Ep(n,e){me.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0);let t=new qo;return t.setFromCamera(new je(n*2-1,1-e*2),me),t}function Eu(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function Tp(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new D),s=n.curve>0?xu(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function AA(n,e){let t=n.obj.getWorldPosition(new D),i=new D(0,0,1).transformDirection(n.obj.matrixWorld),s=new ai().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new D);let r=n.obj.matrixWorld.clone().invert(),a=e.origin.clone().applyMatrix4(r),o=e.origin.clone().add(e.direction).applyMatrix4(r).sub(a).normalize(),l=n.curveRadius,c=o.x*o.x+o.z*o.z;if(c<1e-9)return e.intersectPlane(s,new D);let u=2*(a.x*o.x+(a.z-l)*o.z),d=a.x*a.x+(a.z-l)*(a.z-l)-l*l,h=u*u-4*c*d;if(h<0)return e.intersectPlane(s,new D);let f=Math.sqrt(h);for(let g of[(-u-f)/(2*c),(-u+f)/(2*c)]){if(!(g>0))continue;let y=a.clone().addScaledVector(o,g);if(!(Math.abs(y.x)>l+1e-6||y.z>l))return y.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new D)}function ry(n){let e=null;for(let t of he){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new D),s=AA(t,n.ray);if(!s)continue;let{local:r,scale:a}=Tp(t,s);if(Math.abs(r.x)*a.x>t.w*a.x/2+.08||Math.abs(r.y)*a.y>t.h*a.y/2+.08)continue;let o=n.ray.origin.distanceTo(s);(!e||o<e.distance)&&(e={win:t,point:s,distance:o})}return e}var Ps=new Map,Ts=0,ro=null;function Kr(n){var e,t,i,s;ro!==n&&(ro&&((t=(e=ro.classList)==null?void 0:e.remove)==null||t.call(e,"finger-hover")),ro=n||null,ro&&((s=(i=ro.classList)==null?void 0:i.add)==null||s.call(i,"finger-hover")))}function EA(n){if(!n||n.pinching||n.fist||n.predicted)return!1;let e=n.points;if(!e||e.length<63||Math.hypot(e[21]-e[18],e[22]-e[19])<.005)return!1;let t=e[0],i=e[1],s=e[18],r=e[19],a=e[24],o=e[25],l=Math.hypot(a-t,o-i),c=Math.hypot(s-t,r-i);return l>.045&&l>c*1.05}function Au(n,e){var r,a,o,l,c,u,d,h,f,g,y,p,m,b,v,M,E,R,x;if(!Number.isFinite(n)||!Number.isFinite(e))return null;let t=yl(n,e),i=Xn(n,e),s=Ds(n,e);if(!s&&Fi){for(let U of[-.02,.02,-.038,.038])if(s=Ds(n,e+U),s)break}if(t&&(!i||t.distance<i.distance)&&t.button)return Cs(t.button),{kind:"kb",x:n,y:e,el:t.button,key:"kb:"+(((r=t.button.dataset)==null?void 0:r.k)||t.button.textContent||"")};if(s&&(!i||s.distance<=(i.distance??1/0)+.15)){if(s.popupOpt&&s.el)return Cs(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(An[s.i]){let U=An[s.i];return Cs(U),{kind:"dock",x:n,y:e,el:U,key:"dock:"+(((a=U.dataset)==null?void 0:a.id)||s.i)}}}if(i&&!i.handle&&!i.resize){let U=ia(i.win.el,i.u,i.v),w=((o=U==null?void 0:U.closest)==null?void 0:o.call(U,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-spatial-env],[data-fist-act],[data-fist-env],[data-qb-url],[data-browser-opt],[data-id],[data-act],[data-lang]'))||null,_=((l=U==null?void 0:U.closest)==null?void 0:l.call(U,"[data-native-browser],[data-native-app],[data-native-xr]"))||null;if(w){Cs(w);let I=((c=w.dataset)==null?void 0:c.browserOpt)||((u=w.dataset)==null?void 0:u.spatialBuiltin)||((d=w.dataset)==null?void 0:d.spatialAndroid)||((h=w.dataset)==null?void 0:h.spatialXr)||((f=w.dataset)==null?void 0:f.spatialScroll)||((g=w.dataset)==null?void 0:g.spatialEnv)||((y=w.dataset)==null?void 0:y.fistAct)||((p=w.dataset)==null?void 0:p.fistEnv)||((m=w.dataset)==null?void 0:m.qbUrl)||((b=w.dataset)==null?void 0:b.id)||((v=w.dataset)==null?void 0:v.act)||((M=w.dataset)==null?void 0:M.lang)||w.getAttribute("aria-label")||w.title||((R=(E=w.textContent)==null?void 0:E.trim())==null?void 0:R.slice(0,24))||"btn";return{kind:"win",x:n,y:e,el:w,hit:i,key:`win:${i.win.id}:${I}`}}if(_){let I=Math.round(i.u*16),N=Math.round(i.v*12);return{kind:"win-surf",x:n,y:e,el:_,hit:i,key:`surf:${i.win.id}:${I}:${N}`}}}if(s!=null&&s.popupOpt&&s.el)return Cs(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(s&&An[s.i]){let U=An[s.i];return Cs(U),{kind:"dock",x:n,y:e,el:U,key:"dock:"+(((x=U.dataset)==null?void 0:x.id)||s.i)}}return null}function ay(n,e){let t=n.points,i=Number(e==null?void 0:e.scaleX)||1,s=Number(e==null?void 0:e.scaleY)||1,r=[[0,0],[0,.015],[0,-.015],[.015,0],[-.015,0]];if(t&&t.length>=26&&Number.isFinite(t[24])&&Number.isFinite(t[25])){let a=(t[24]-.5)*i+.5,o=(t[25]-.5)*s+.5;for(let[d,h]of r){let f=Au(a+d,o+h);if(f)return f}if(Number.isFinite(t[12])&&Number.isFinite(t[13])){let d=((t[12]+t[24])*.5-.5)*i+.5,h=((t[13]+t[25])*.5-.5)*s+.5;for(let[f,g]of r){let y=Au(d+f,h+g);if(y)return y}}let l=(t[21]-.5)*i+.5,c=(t[22]-.5)*s+.5,u=Au(l,c);if(u)return u}if(Array.isArray(n.aim)&&n.aim.length>=2){let a=Yr(n.aim);for(let[o,l]of r){let c=Au(a.x+o,a.y+l);if(c)return c}}return null}function cr(n,e,t=null){var a,o,l,c,u,d,h,f,g,y,p,m,b,v,M,E,R,x,U,w,_,I,N,O,L,T,F,G,q,W,J,Q,re,z,X,ne;if((a=t==null?void 0:t.dataset)!=null&&a.browserOpt)return na(),(o=window.nextvrOpenBrowserOption)==null||o.call(window,t.dataset.browserOpt),(c=(l=ie).invalidate)==null||c.call(l),(d=(u=ie).render)==null||d.call(u,Pe,me),!0;if(t&&An.includes(t))return t.classList.add("finger-pressed"),t.style.transform="scale(.88)",setTimeout(()=>{t.style.transform="",t.classList.remove("finger-pressed")},160),Qr(t),t.click(),(f=(h=ie).invalidate)==null||f.call(h),(y=(g=ie).render)==null||y.call(g,Pe,me),!0;let i=yl(n,e),s=Xn(n,e),r=Ds(n,e);if(i&&(!s||i.distance<s.distance))return Uu(i.button),setTimeout(()=>ks(),55),!0;if(r&&(!s||r.distance<=(s.distance??1/0)+.15)){if(r.popupOpt)return na(),(p=window.nextvrOpenBrowserOption)==null||p.call(window,r.popupOpt),!0;if(An[r.i]){let te=An[r.i];return te.classList.add("finger-pressed"),te.style.transform="scale(.88)",setTimeout(()=>{te.style.transform="",te.classList.remove("finger-pressed")},160),Qr(te),te.click(),(b=(m=ie).invalidate)==null||b.call(m),(M=(v=ie).render)==null||M.call(v,Pe,me),!0}}if(s&&!s.handle&&!s.resize){Jt(s.win);let te=t&&s.win.el.contains(t)?t:ia(s.win.el,s.u,s.v),H=((E=te==null?void 0:te.closest)==null?void 0:E.call(te,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url]'))||te;H!=null&&H.classList&&(H.classList.add("finger-pressed"),setTimeout(()=>{var be,qe;return(qe=(be=H.classList)==null?void 0:be.remove)==null?void 0:qe.call(be,"finger-pressed")},180),Qr(H));let se=!1,de=()=>{se=!0};return(R=H==null?void 0:H.addEventListener)==null||R.call(H,"click",de,{once:!0}),hr(s,"down"),hr(s,"up"),(x=H==null?void 0:H.removeEventListener)==null||x.call(H,"click",de),!se&&H&&(!((U=H.closest)!=null&&U.call(H,"[data-native-browser],[data-native-app],[data-native-xr]"))||(w=H.matches)!=null&&w.call(H,"[data-qb-url],[data-qb-act]"))&&((_=H.click)==null||_.call(H)),(N=(I=ie).invalidate)==null||N.call(I),(L=(O=ie).render)==null||L.call(O,Pe,me),!0}if(r!=null&&r.popupOpt)return na(),(T=window.nextvrOpenBrowserOption)==null||T.call(window,r.popupOpt),!0;if(r&&An[r.i]){let te=An[r.i];return te.classList.add("finger-pressed"),te.style.transform="scale(.88)",setTimeout(()=>{te.style.transform="",te.classList.remove("finger-pressed")},160),Qr(te),te.click(),(G=(F=ie).invalidate)==null||G.call(F),(W=(q=ie).render)==null||W.call(q,Pe,me),!0}return t&&typeof t.click=="function"&&document.body.contains(t)?((Q=(J=t.classList)==null?void 0:J.add)==null||Q.call(J,"finger-pressed"),setTimeout(()=>{var te,H;return(H=(te=t.classList)==null?void 0:te.remove)==null?void 0:H.call(te,"finger-pressed")},160),Qr(t),t.click(),(z=(re=ie).invalidate)==null||z.call(re),(ne=(X=ie).render)==null||ne.call(X,Pe,me),!0):!1}function TA(n){return!n||n.length<63?0:Math.hypot(n[15]-n[0],n[16]-n[1])+Math.hypot(n[51]-n[0],n[52]-n[1])+Math.hypot(n[51]-n[15],n[52]-n[16])+Math.hypot(n[27]-n[0],n[28]-n[1])}var gl=new Map;function RA(n,e,t,i,s){var f,g,y;let r=Xn(e,t)||n.winHit;if(!r||!r.win||r.win.hidden)return!1;n.winHit=r;let a=r.win.el,o=ia(a,r.u,r.v);if((f=o==null?void 0:o.closest)==null?void 0:f.call(o,"[data-native-browser],[data-native-app]"))return n.nativeDownSent?is(r,2):(n.nativeDownSent=!0,is(r,0)),!0;let c=null,u=null,d=o;for(;d&&d!==document.body&&!(d instanceof HTMLElement&&(!c&&d.scrollHeight>d.clientHeight+2&&(c=d),!u&&d.scrollWidth>d.clientWidth+2&&(u=d),c&&u)||d===a);)d=d.parentElement;if(!c||!u){let p=a.querySelectorAll("[data-spatial-scroll-track], .spatial-honeycomb, .st-quest-main, .st-main, .lib-grid, .set-body, .win-body");for(let m of p)m instanceof HTMLElement&&(!c&&m.scrollHeight>m.clientHeight+2&&(c=m),!u&&m.scrollWidth>m.clientWidth+2&&(u=m))}let h=!1;return c&&Math.abs(s)>1e-4&&(n.dirY===0&&(n.dirY=c.scrollTop<=4&&t-n.startScreenY>.012?1:-1),c.scrollTop+=n.dirY*s*1850,h=!0),u&&Math.abs(i)>1e-4&&(n.dirX===0&&(n.dirX=u.scrollLeft<=4&&e-n.startScreenX>.012?1:-1),u.scrollLeft+=n.dirX*i*1850,h=!0),h&&((y=(g=ie).invalidate)==null||y.call(g)),h}function oy(n){let e=gl.get(n);e!=null&&e.nativeDownSent&&e.winHit&&is(e.winHit,1),gl.delete(n)}function CA(n,e,t){var L,T,F,G,q,W,J,Q,re;if(S.fingerTouch===0)return Ps.delete(n==null?void 0:n.id),oy(n==null?void 0:n.id),Kr(null),!1;let i=n==null?void 0:n.points,s=Ps.get(n==null?void 0:n.id);if(i&&i.length>=26&&Math.hypot(i[18]-i[15],i[19]-i[16])>.008){let z=ay(n,e);z!=null&&z.el&&_y.set(n.id||"right",{x:z.x,y:z.y,el:z.el,at:t})}if(!EA(n)){let z=(L=gl.get(n==null?void 0:n.id))==null?void 0:L.scrolling;if(oy(n==null?void 0:n.id),!z&&s&&!s.latched&&!(n!=null&&n.pinching)&&!(n!=null&&n.fist)&&!(n!=null&&n.predicted)&&i&&i.length>=26&&t-s.enterAt>=40&&t-s.lastSeenAt<=220&&t-s.lastTapAt>=360&&Math.hypot(i[0]-(s.wristX??i[0]),i[1]-(s.wristY??i[1]))<=.045){let X=cr(s.tapX,s.tapY,s.targetEl);if(Ps.delete(n==null?void 0:n.id),Kr(null),X)return Ts=t+220,!0}return Ps.delete(n==null?void 0:n.id),Kr(null),!1}let r=i&&i.length>=26?i[24]:.5,a=i&&i.length>=26?i[25]:.5,o=Number(e==null?void 0:e.scaleX)||1,l=Number(e==null?void 0:e.scaleY)||1,c=(r-.5)*o+.5,u=(a-.5)*l+.5,d=gl.get(n.id),h=Xn(c,u)||(Array.isArray(n.aim)&&n.aim.length>=2?Xn(Yr(n.aim).x,Yr(n.aim).y):null);if(!d)d={startTipX:r,startTipY:a,startWristX:i?i[0]:r,startWristY:i?i[1]:a,startScreenX:c,startScreenY:u,lastScreenX:c,lastScreenY:u,dirX:0,dirY:0,scrolling:!1,nativeDownSent:!1,winHit:h},gl.set(n.id,d);else{let z=c-d.lastScreenX,X=u-d.lastScreenY;d.lastScreenX=c,d.lastScreenY=u,h&&(d.winHit=h);let ne=Math.hypot(r-d.startTipX,a-d.startTipY),te=i?Math.hypot(i[0]-d.startWristX,i[1]-d.startWristY):0;if(!d.scrolling&&d.winHit&&(ne>=.022&&te>=.012||ne>=.036)&&(d.scrolling=!0),d.scrolling)return RA(d,c,u,z,X),s&&(s.latched=!0),Kr(null),!0}let g=(i&&i.length>=17?i[16]:a)-a,y=i&&i.length>=26?Math.hypot(i[24]-i[0],i[25]-i[1]):.1,p=i&&i.length>=20?Math.hypot(i[18]-i[0],i[19]-i[1]):.08,m=y/Math.max(1e-4,p),b=n.head&&n.head.length===63?n.head[25]:0,v=n.head&&n.head.length===63?Math.hypot(n.head[24],n.head[25],n.head[26]):0,M=n.head&&n.head.length===63?n.head[29]-n.head[26]:0,E=Number(n.palmWidth)||0,R=TA(n.points),x=s,U=ay(n,e),w=z=>{if(!z)return!1;let X=v>0&&z.baseDist>0?v-z.baseDist:0,ne=v>0&&z.baseDist>0?X/z.baseDist:0,te=E>.012&&z.basePalm>.012?(z.basePalm-E)/z.basePalm:0,H=R>.02&&z.baseSpan>.02?(z.baseSpan-R)/z.baseSpan:0,se=M-z.baseTipRelZ;return X>=.016||ne>=.036||te>=.042||H>=.042||se>=.014&&(X>=.006||te>=.018||H>=.018)},_=z=>{if(!z)return!1;let X=z.restTipY-a>=.0075,ne=g-z.restFingerLift>=.0075,te=b-z.restHeadY>=.0075,H=z.maxIndexRatio>1.08&&z.maxIndexRatio-m>=.08,se=(z.wristX??.5)-z.restTipX,de=(z.wristY??.7)-z.restTipY,be=Math.hypot(se,de)||1,qe=(r-z.restTipX)*(se/be)+(a-z.restTipY)*(de/be)>=.0075;return X||ne||te||H||qe||w(z)};if(!U){if(x&&x.pendingBrowserTap&&!x.holdMenuOpened&&t-x.lastTapAt>=360&&(x.pendingBrowserTap=!1,cr(x.tapX,x.tapY,x.targetEl)))return x.latched=!0,x.lastTapAt=t,Ts=t+220,!0;let z=x&&(_(x)||Math.hypot(r-x.restTipX,a-x.restTipY)>=.006);return x&&t-x.lastSeenAt<=180&&t-x.enterAt>=40&&!x.latched&&z&&t-x.lastTapAt>=360&&cr(x.tapX,x.tapY,x.targetEl)?(x.latched=!0,x.lastTapAt=t,Ts=t+220,!0):((!x||t-x.lastSeenAt>180)&&(Ps.delete(n.id),Kr(null)),!1)}Kr(U.el);let I=x&&t-x.enterAt>=40&&U.key===x.targetKey&&_(x);if(!x||U.key!==x.targetKey&&!I)return x&&!x.latched&&t-x.enterAt>=45&&t-x.lastSeenAt<=120&&x.lastTipY-a>=.01&&Math.abs(r-x.lastTipX)<=.018&&t-x.lastTapAt>=360&&cr(x.tapX,x.tapY,x.targetEl)?(x.latched=!0,x.lastTapAt=t,Ts=t+220,!0):(x={targetKey:U.key,targetEl:U.el,tapX:U.x,tapY:U.y,wristX:i[0],wristY:i[1],maxIndexRatio:m,restTipY:a,restFingerLift:g,restHeadY:b,lastTipX:r,lastTipY:a,baseDist:v,basePalm:E,baseSpan:R,baseTipRelZ:M,enterAt:t,lastSeenAt:t,latched:!1,holdMenuOpened:!1,pendingBrowserTap:!1,lastTapAt:(x==null?void 0:x.lastTapAt)??-1e3},Ps.set(n.id,x),!1);U.key===x.targetKey&&(x.tapX=U.x,x.tapY=U.y,x.targetEl=U.el,x.wristX=i[0],x.wristY=i[1],x.lastSeenAt=t);let N=((F=(T=x.targetEl)==null?void 0:T.dataset)==null?void 0:F.id)==="browser"||((q=(G=x.targetEl)==null?void 0:G.dataset)==null?void 0:q.spatialBuiltin)==="browser"||((J=(W=x.targetEl)==null?void 0:W.dataset)==null?void 0:J.app)==="browser";if(N&&!x.holdMenuOpened&&t-x.enterAt>=2e3)return x.holdMenuOpened=!0,x.pendingBrowserTap=!1,x.latched=!0,x.lastTapAt=t,xl(((re=(Q=x.targetEl)==null?void 0:Q.dataset)==null?void 0:re.id)==="browser"?"dock":"spatial"),Ts=t+220,!0;if(t-x.enterAt<40)return x.restTipY=Math.max(x.restTipY,a),x.restFingerLift=Math.min(x.restFingerLift,g),x.restHeadY=Math.min(x.restHeadY,b),x.maxIndexRatio=Math.max(x.maxIndexRatio||m,m),x.lastTipX=r,x.lastTipY=a,v>0&&(x.baseDist=x.baseDist>0?x.baseDist*.5+v*.5:v),E>0&&(x.basePalm=x.basePalm>0?x.basePalm*.5+E*.5:E),R>0&&(x.baseSpan=x.baseSpan>0?x.baseSpan*.5+R*.5:R),x.baseTipRelZ=x.baseTipRelZ*.5+M*.5,!1;let O=_(x);if(x.lastTipX=r,x.lastTipY=a,!x.latched&&O&&t-x.lastTapAt>=360){if(N&&w(x)&&!(x.restTipY-a>=.0075||g-x.restFingerLift>=.0075))return x.pendingBrowserTap=!0,x.latched=!0,!1;if(cr(x.tapX,x.tapY,x.targetEl))return x.latched=!0,x.lastTapAt=t,Ts=t+220,!0}else if(x.latched){let z=v>0&&x.baseDist>0?v-x.baseDist:0,X=E>.012&&x.basePalm>.012?(x.basePalm-E)/x.basePalm:0,ne=R>.02&&x.baseSpan>.02?LA(x,R):0;if(z<=.008&&X<=.022&&ne<=.022&&Math.abs(x.restTipY-a)<=.006){if(x.pendingBrowserTap&&!x.holdMenuOpened&&t-x.lastTapAt>=360)return x.pendingBrowserTap=!1,x.latched=!1,x.lastTapAt=t,Ts=t+220,cr(x.tapX,x.tapY,x.targetEl),!0;x.latched=!1,x.restTipY=a,x.restFingerLift=g,x.restHeadY=b,x.maxIndexRatio=m,x.baseDist=v,x.basePalm=E,x.baseSpan=R,x.baseTipRelZ=M}}else x.restTipY=Math.max(x.restTipY,a),x.restFingerLift=Math.min(x.restFingerLift,g),x.restHeadY=Math.min(x.restHeadY,b),x.maxIndexRatio=Math.max(x.maxIndexRatio||m,m),v>0&&(x.baseDist=x.baseDist>0?Math.min(x.baseDist,x.baseDist*.92+v*.08):v),E>.012&&(x.basePalm=x.basePalm>0?Math.max(x.basePalm,x.basePalm*.92+E*.08):E),R>.02&&(x.baseSpan=x.baseSpan>0?Math.max(x.baseSpan,x.baseSpan*.92+R*.08):R);return!1}function LA(n,e){return(n.baseSpan-e)/n.baseSpan}var tn=null,ur=null,Nt={frames:0,armed:!1,lastArmedAt:0,lastTriggerAt:-2e3};function PA(n){if(!n||n.left||n.predicted||n.pinching||n.fist||n.id&&n.id!=="right")return!1;let e=n.points;if(!e||e.length<63)return!1;let t=(c,u)=>Math.hypot(e[c*3]-e[u*3],e[c*3+1]-e[u*3+1]);if(t(5,6)<.008||t(14,16)<.008||t(18,20)<.008)return!1;let i=Math.max(.042,t(0,9)),s=t(0,8)>t(0,6)*1.13&&t(0,8)>i*1.28,r=t(1,4)>t(1,2)*1.38&&t(4,8)>i*.48&&t(4,5)>i*.34,a=t(0,12)<t(0,10)*1.12||t(0,12)<t(0,8)*.8,o=t(0,16)<t(0,14)*1.12||t(0,16)<t(0,8)*.78,l=t(0,20)<t(0,18)*1.14||t(0,20)<t(0,8)*.76;return s&&r&&a&&o&&l}function IA(n){if(!n||n.left||n.predicted)return!1;let e=n.points;if(!e||e.length<63)return!1;let t=(c,u)=>Math.hypot(e[c*3]-e[u*3],e[c*3+1]-e[u*3+1]);if(t(5,6)<.008)return!1;let i=Math.max(.042,t(0,9)),s=t(0,12)<t(0,10)*1.14,r=t(0,16)<t(0,14)*1.14,a=t(0,20)<t(0,18)*1.16;if(!(s&&r&&a))return!1;let o=n.fist===!0||t(0,8)<t(0,6)*1.1,l=n.pinching===!0||t(4,8)<i*.35;return o||l}function ly(n,e,t=!1){var d,h;ur&&(clearTimeout(ur),ur=null);let i=document.getElementById("hud")||document.body;(!tn||!document.body.contains(tn))&&(tn=document.createElement("div"),tn.id="gun-gesture-indicator",tn.className="gun-logo-bubble",tn.innerHTML='<img src="./icons/nextvr-bolinha-logo.png" alt="NextVR" class="gun-logo-img" draggable="false"/>',i.appendChild(tn));let s=n.points,r=Number(e==null?void 0:e.scaleX)||1,a=Number(e==null?void 0:e.scaleY)||1,o=s&&s.length>=26?s[24]*.65+s[12]*.35:((d=n.palm)==null?void 0:d[0])??.55,l=s&&s.length>=26?Math.min(s[25],s[13])-.055:(((h=n.palm)==null?void 0:h[1])??.5)-.08,c=Math.max(.08,Math.min(.92,(o-.5)*r+.5)),u=Math.max(.08,Math.min(.9,(l-.5)*a+.5));tn.style.left=`${(c*100).toFixed(1)}%`,tn.style.top=`${(u*100).toFixed(1)}%`,tn.hidden=!1,tn.classList.toggle("fired",!!t),tn.classList.toggle("gun-triggered",!!t)}function Zr(n=0){ur&&(clearTimeout(ur),ur=null),tn&&(n>0?ur=setTimeout(()=>{var e,t;ur=null,tn==null||tn.remove(),tn=null,(t=(e=ie).invalidate)==null||t.call(e)},n):(tn.remove(),tn=null))}function NA(n,e){var s,r,a,o,l,c,u,d,h;if(S.gunGesture===0)return Nt.frames=0,Nt.armed=!1,Zr(0),!1;let t=document.getElementById("gorilla-overlay");if(t&&t.style.display&&t.style.display!=="none"||he.some(f=>(f.id==="entry-menu"||f.id==="language")&&!f.hidden)||document.querySelector(".entry-menu-root")||lt.win||Dt.win||hn.start)return Nt.frames=0,Nt.armed=!1,Zr(0),!1;let i=((n==null?void 0:n.hands)||[]).find(f=>f&&!f.left&&(!f.id||f.id==="right"));return i?PA(i)?(Nt.frames+=1,Nt.frames>=2&&(Nt.armed=!0,Nt.lastArmedAt=e,ly(i,n,!1),(r=(s=ie).invalidate)==null||r.call(s)),Nt.armed):Nt.armed&&e-Nt.lastArmedAt<=550&&e-Nt.lastTriggerAt>=850&&IA(i)?(Nt.armed=!1,Nt.frames=0,Nt.lastTriggerAt=e,Ji.delete(i.id||"right"),lo.add(i.id||"right"),n.consumed.add(i.id||"right"),$r(),ly(i,n,!0),Zr(240),(a=window.nextvrToggleSpatialAndDockFromGesture)==null||a.call(window),(l=(o=window.NativeXR)==null?void 0:o.click)==null||l.call(o),(u=(c=ie).invalidate)==null||u.call(c),(h=(d=ie).render)==null||h.call(d,Pe,me),!0):(e-Nt.lastArmedAt>220&&(Nt.frames=0,Nt.armed=!1,Zr(0)),!1):(e-Nt.lastArmedAt>240&&(Nt.frames=0,Nt.armed=!1,Zr(0)),!1)}var Ji=new Map;function DA(n){if(!n||n.predicted||n.pinching)return!1;if(n.fist===!0)return!0;let e=n.points;if(!e||e.length<63)return!1;let t=(o,l)=>Math.hypot(e[o*3]-e[l*3],e[o*3+1]-e[l*3+1]);if(t(5,6)<.008||t(14,16)<.008||t(18,20)<.008)return!1;let i=t(0,8)<t(0,6)*1.08,s=t(0,12)<t(0,10)*1.08,r=t(0,16)<t(0,14)*1.08,a=t(0,20)<t(0,18)*1.08;return i&&s&&r&&a}function kA(n,e){var r,a,o,l,c,u,d;if(S.gunGesture===0)return Ji.clear(),!1;let t=document.getElementById("gorilla-overlay");if(t&&t.style.display&&t.style.display!=="none"||he.some(h=>(h.id==="entry-menu"||h.id==="language")&&!h.hidden)||document.querySelector(".entry-menu-root")||Dt.win||hn.start)return Ji.clear(),!1;let i=(n==null?void 0:n.hands)||[],s=new Set;for(let h of i){if(!h)continue;let f=h.id||(h.left?"left":"right");s.add(f);let g=DA(h),y=Eu(h,n,!0),p=Ji.get(f);if(g){if(!p||!p.active)p={active:!0,startAt:e,lastSeenAt:e,startX:y.x,startY:y.y,latched:!1},Ji.set(f,p);else if(p.lastSeenAt=e,Math.hypot(y.x-p.startX,y.y-p.startY)>.12&&(p.startAt=e,p.startX=y.x,p.startY=y.y),!p.latched&&e-p.startAt>=2e3)return p.latched=!0,lt.win&&lt.source==="fist"&&ns(),$r(),(r=window.nextvrOpenFistQuickMenu)==null||r.call(window),(o=(a=window.NativeXR)==null?void 0:a.click)==null||o.call(a),(c=(l=ie).invalidate)==null||c.call(l),(d=(u=ie).render)==null||d.call(u,Pe,me),!0}else p&&(p.latched||e<p.lastSeenAt||e-p.lastSeenAt>260)&&Ji.delete(f)}for(let[h,f]of Ji.entries())!s.has(h)&&(f.latched||e<f.lastSeenAt||e-f.lastSeenAt>260)&&Ji.delete(h);return!1}var _n=null,xp=null;function OA(n="env",e=""){var s,r;let t=document.getElementById("hud")||document.body;(!_n||!document.body.contains(_n))&&(_n=document.createElement("div"),_n.id="vr-circle-loader",_n.className="vr-circle-loader",_n.dataset.circleLoader="1",_n.hidden=!0,_n.innerHTML=`
      <div class="vr-circle-ring-wrap">
        <svg viewBox="0 0 84 84" class="vr-circle-ring-svg">
          <circle cx="42" cy="42" r="34" class="vr-circle-track"/>
          <circle cx="42" cy="42" r="34" class="vr-circle-progress"/>
        </svg>
        <div class="vr-circle-label"></div>
      </div>
    `,t.appendChild(_n)),_n.dataset.kind=n;let i=_n.querySelector(".vr-circle-label");i&&(i.textContent=n==="env"?`Carregando ambiente${e?" \xB7 "+e:""}\u2026`:`Abrindo ${e||"app"}\u2026`),_n.hidden=!1,_n.classList.remove("active"),_n.offsetWidth,_n.classList.add("active"),(r=(s=ie).invalidate)==null||r.call(s),xp&&clearTimeout(xp),xp=setTimeout(()=>{var a,o;_n&&(_n.hidden=!0,_n.classList.remove("active"),(o=(a=ie).invalidate)==null||o.call(a))},620)}window.nextvrShowCircleLoader=OA;function cy(n=!1,e=Ls){let t=pt;t!=null&&t.down&&(is({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(lo.add(t.id),e.consumed.add(t.id))),pt=null}ze("phonehands",n=>{var l,c;Ls=n;let e=new Set(n.hands.map(u=>u.id));n.hands.length||Kr(null);for(let u of Su.keys())e.has(u)||Su.delete(u);for(let u of Ps.keys())e.has(u)||Ps.delete(u);for(let u of lo){let d=n.hands.find(h=>h.id===u);!d||!d.pinching?lo.delete(u):n.consumed.add(u)}if(lt.win&&lt.source==="fist"){let u=n.hands.find(d=>d.id===lt.hand);if(!u||!u.fist||!he.includes(lt.win)||(l=lt.win)!=null&&l.hidden)ns();else{n.consumed.add(u.id);let d=Eu(u,n,!0);Cp(d.x,d.y)}}let t=performance.now();if(NA(n,t),kA(n,t),!document.documentElement.classList.contains("xr-on")&&!he.some(u=>u.id==="entry-menu"&&!u.hidden))if(lt.win||Dt.win||hn.start||mt.classList.contains("grab-armed")||pt)Mu.reset();else{let u=(n.hands||[]).filter(f=>f.pinching&&!f.predicted),d=wu(u),h=Mu.update(t,{left:d,right:d});if(h.opened){Mu.reset(),$r(),nn=null,dt=null,Mi=-1,ns(),mr(),Ns();for(let f of u)lo.add(f.id),n.consumed.add(f.id);Oi()}else d&&h.progress>.15&&($r(),nn=null,dt=null,Mi=-1)}else Mu.reset();if(!(lt.win&&lt.source==="fist")){let u=n.hands.find(d=>!d.fist);if(u){let d=Eu(u,n),h=ry(Ep(d.x,d.y));if(h){let{local:f,scale:g}=Tp(h.win,h.point),y=h.win;(Math.abs(f.x)*g.x>y.w*g.x/2-.06||Math.abs(f.y)*g.y>y.h*g.y/2-.06)&&(ll=h.win,vp=t)}}}for(let u of he)(u!==ll||t-vp>sy)&&u.shell.classList.remove("phone-grab-hover");ll&&t-vp<=sy?ll.shell.classList.add("phone-grab-hover"):ll=null;for(let u of n.hands){let d=Su.get(u.id)||!1;if(Su.set(u.id,u.fist),!lt.win&&!Dt.win&&u.fist&&!d){let h=Eu(u,n,!0),f=ry(Ep(h.x,h.y));f&&(((c=ye.hand)==null?void 0:c.id)===u.id&&$r(),Rp(f.win,h.x,h.y,"fist",u.id)&&n.consumed.add(u.id))}}let i=null;for(let u of n.hands){if(n.consumed.has(u.id)||!u.head||u.head.length!==63)continue;if(Array.isArray(u.aim)&&u.aim.length>=2){let h=Yr(u.aim);if(Ds(h.x,h.y))continue}let d=new D().fromArray(u.head,24);if(!(d.length()>.7)){d.applyMatrix4(me.matrixWorld);for(let h of he){if(h.hidden||h.id==="spatial-launcher")continue;let f=Tp(h,d),g=(pt==null?void 0:pt.win)===h&&pt.id===u.id,y=g?.08:.02,p=g?.26:.11;f.d>p||f.d<-.12||Math.abs(f.local.x)*f.scale.x>h.w*f.scale.x/2+y||Math.abs(f.local.y)*f.scale.y>h.h*f.scale.y/2+y||(!i||g||!i.current&&Math.abs(f.d)<Math.abs(i.d))&&(i={...f,id:u.id,win:h,point:d,current:g})}}}let s=()=>{if(!(lt.win||Dt.win||hn.start||mt.classList.contains("grab-armed")))for(let u of n.hands)n.consumed.has(u.id)||CA(u,n,t)};if(!i&&pt&&e.has(pt.id)&&he.includes(pt.win)&&!pt.win.hidden&&t-pt.lastSeen<=MA&&(i={...pt,current:!0,held:!0}),!i){cy(!e.has(pt==null?void 0:pt.id),n),s();return}i.current?(pt.d+=(i.d-pt.d)*.45,pt.u+=(i.u-pt.u)*.45,pt.v+=(i.v-pt.v)*.45,i.held||(pt.lastSeen=t)):(cy(!1,n),pt={...i,down:!1,previousD:i.d,lastSeen:t});let r=pt,a=r.u>=0&&r.u<=1&&r.v>=0&&r.v<=1,o={win:r.win,u:Math.max(0,Math.min(1,r.u)),v:Math.max(0,Math.min(1,r.v))};!r.down&&a&&r.d<=.012&&r.previousD>.012?(ye.down&&$r(),Jt(r.win),is(o,0),r.down=!0):r.down&&(r.d>=.035||!a)?(is(o,1),r.down=!1,n.hands.some(u=>u.id===r.id&&u.pinching)&&(lo.add(r.id),n.consumed.add(r.id))):r.down&&is(o,2),r.previousD=r.d,r.down?(n.blockFar=!0,n.consumed.add(r.id)):s()});var uy=0,dy="";el((n,e)=>{var a,o,l,c;if(!ge||e-uy<16)return;uy=e;let t=Ls,i=[],s=S.fingerTouch!==0;for(let u of t.hands){let d=Ps.get(u.id),h=!!(d!=null&&d.targetEl),f=!!(!u.left&&(u.id==="right"||!u.id)&&Nt.armed&&tn&&!tn.hidden);if((pt==null?void 0:pt.id)===u.id&&pt.down){let M=pt,E=new D((M.u-.5)*M.win.w,(.5-M.v)*M.win.h,0).applyMatrix4(M.win.obj.matrixWorld);i.push({id:u.id,end:me.worldToLocal(E).toArray(),direct:!0,touching:!0,fingerHover:!0,blueOutline:f,down:M.down,...s?{noBeam:!0}:{}});continue}if(t.consumed.has(u.id)||t.blockFar){i.push({id:u.id,hidden:!0,blueOutline:f});continue}let g=((a=ye.hand)==null?void 0:a.id)===u.id?yu(e):Yr(u.aim),y=Ep(g.x,g.y),p=he.filter(M=>!M.hidden).flatMap(M=>[M.resizeHit,M.grab,M.hit]);Fi&&(Ti.hidden||p.push(Qi),p.push(Ui,Ei)),Dn&&st&&!bl&&p.push(Dn);let m=y.intersectObjects(p,!1)[0],b=((o=ye.hand)==null?void 0:o.id)===u.id&&ye.down||e<Ts,v=h||b||!!m||(pt==null?void 0:pt.id)===u.id;i.push({id:u.id,...m?{end:m.point.toArray()}:{},down:b,touching:v,fingerHover:h,blueOutline:f,...s?{noBeam:!0}:{}})}let r=JSON.stringify(i);r!==dy&&(dy=r,(c=(l=window.NativeXR).handTargets)==null||c.call(l,r))});var Py={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function Iy(n){return Py[n]||Py.landscape}function Ny(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return Iy(n==null?void 0:n.shape)}function UA(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function _l(n){let e=UA(Ny(n));return{w:e.w+2,h:e.h+116}}var FA=400,By=3;function Fp(n,e){if(e!=null&&e.shape)return e.shape;let t=sn.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var Et={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:By,sdk:0,recents:[],library:0,launch:null},sn={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},pi=new Map,Up=new Set,Dy=0,ky="";var Bp=n=>Et.sessions.find(e=>e.pkg===n)||null,BA=()=>Et.sessions.filter(n=>n.alive),zA=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function Os(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{it(k("appCommandFailed"))}}function HA(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Et.sessions=Array.isArray(e.sessions)?e.sessions:[],Et.shizuku=e.shizuku||Et.shizuku,Et.input=e.input||Et.input,Et.capacity=e.capacity||By,Et.recents=Array.isArray(e.recents)?e.recents:[],Et.sdk=e.sdk||Et.sdk,Et.launch=e.launch||null,Et.diagnostics=e.diagnostics||Et.diagnostics,e.icons!=null&&e.icons!==sn.icons&&(sn.icons=e.icons,sn.loaded=!1),VA(),Se("appsState"))}function VA(){var e,t,i,s;let n=new Set;for(let r of Et.sessions)if(r.state!=="stopped"){if(r.state==="suspended"){Oy(r.pkg,!0);continue}n.add(r.pkg),pi.has(r.pkg)?zy(r):GA(r)}for(let r of[...pi.keys()])n.has(r)||Oy(r,!0);(t=(e=ie).invalidate)==null||t.call(e),(s=(i=ie).render)==null||s.call(i,Pe,me),Bu(!0)}function GA(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?k("appMirrorBadge"):k("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(h,f,g)=>{let y=document.createElement("button");return y.className="app-key",y.title=f,y.setAttribute("aria-label",f),y.innerHTML=ee(g),y.onclick=()=>Os({cmd:"key",pkg:n.pkg,key:h}),y},a=document.createElement("button");a.className="app-key",a.title=k("appKeyboard"),a.dataset.act="keys",a.innerHTML=ee("keyboard"),a.onclick=()=>YA(n.pkg);let o=document.createElement("button");o.className="app-key",o.dataset.act="rotate",o.title=k("appRotate"),o.setAttribute("aria-label",k("appRotate")),o.innerHTML=ee("rotate"),o.onclick=()=>XA(n.pkg),t.append(i,s,r("back",k("appBack"),"back"),r("home",k("appHome"),"top"),r("recents",k("appRecents"),"appGrid"),a,o);let l=document.createElement("div");l.className="app-surface",l.dataset.nativeApp=n.pkg,l.dataset.aspect=String(n.display&&n.display.aspect||16/9),l.dataset.shape=Fp(n.pkg,n);let c=document.createElement("div");c.className="app-state",e.append(t,l),l.append(c);let u=_l(n),d=Qt({id:zA(n.pkg),title:n.title,node:e,w:u.w,h:u.h});pi.set(n.pkg,{win:d,surface:l,status:c,badge:i,session:n}),zy(n)}function zy(n){var r,a;let e=pi.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?k("appMirrorBadge"):k("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:k("appStarting"),creating:k("appStarting"),launching:k("appStarting"),running:"",failed:n.error?qA(n):k("appFailed")};n.mode==="display"&&((r=Et.shizuku)!=null&&r.binding||!((a=Et.shizuku)!=null&&a.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=k("appWaitingService"),i.creating=k("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=k("appMirrorStarting"),i.creating=k("appMirrorStarting"),i.launching=k("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&WA.has(n.error))){let o=document.createElement("button");o.className="app-state-btn",o.textContent=k("appOpenOnPhone"),o.onclick=()=>Os({cmd:"phone",pkg:n.pkg}),e.status.appendChild(o)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var WA=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function qA(n){let e={shizuku_unavailable:k("appNeedShizuku"),shizuku_denied:k("appShizukuDenied"),shizuku_blocked:k("appShizukuBlocked"),display_refused:k("appDisplayRefused"),display_failed:k("appDisplayFailed"),no_launcher_activity:k("appNoLauncher"),consent_denied:k("appConsentDenied"),mirror_stopped:k("appMirrorStopped"),mirror_failed:k("appMirrorFailed"),mirror_refused:k("appMirrorFailed"),projection_failed:k("appMirrorFailed"),display_empty:k("appDisplayEmpty"),app_not_running:k("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?k("appSurfaceFailed"):e[t]||`${k("appFailed")}: ${t}`}function Oy(n,e){let t=pi.get(n);t&&(pi.delete(n),e&&Up.add(n),ft(t.win),Up.delete(n))}ze("wins",()=>{for(let n of[...pi.keys()]){let e=pi.get(n);Up.has(n)||he.includes(e.win)||(pi.delete(n),Os({cmd:"close",pkg:n}))}Se("appsState")});function Fu(n){n&&Os({cmd:"open",pkg:n,shape:Fp(n,Bp(n))})}function XA(n){var a;let e=pi.get(n),t=Bp(n),s=((e==null?void 0:e.surface.dataset.shape)||Fp(n,t))==="portrait"?"landscape":"portrait",r=_l({shape:s,display:(t==null?void 0:t.display)||((a=e==null?void 0:e.session)==null?void 0:a.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),Os({cmd:"shape",pkg:n,shape:s}),Bu(!0)}function Uy(){Os({cmd:"shizuku"})}function $A(){sn.loaded=!1,Os({cmd:"refresh"})}function YA(n){di(!0,{nativeId:"app:"+n})}function zp(n){var e,t;if(sn.loaded&&!n)return sn;sn.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,sn.query,sn.showSystem),s=JSON.parse(i||'{"apps":[]}');sn.apps=Array.isArray(s.apps)?s.apps:[],sn.shown=s.shown||sn.apps.length,sn.total=s.total||sn.apps.length,sn.icons=s.icons||sn.icons}catch{sn.apps=[]}return Se("appsState"),sn}function Bu(n){let e=[];for(let[i,s]of pi)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===ky||(ky=t,Os({cmd:"sync",windows:e}))}function jA(){Dy||(Dy=setInterval(()=>{pi.size&&Bu(!1)},FA))}ze("wins",()=>Bu(!0));var Fy={install:()=>k("shizukuInstall"),start:()=>k("shizukuStart"),update:()=>k("shizukuUpdate"),ask:()=>k("shizukuAsk"),denied:()=>k("shizukuDenied"),rebind:()=>k("shizukuRebind"),ready:()=>k("shizukuReady"),unknown:()=>k("shizukuUnknown")},ZA=new Set(["hosted","permission","capture"]);function KA(){let n=Et.shizuku||{};return ZA.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function Hy(){var u;let n=Et.shizuku||{},e=KA(),t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>k("routeHosted"),permission:()=>k("routePermission"),capture:()=>k("routeCapture")};s.textContent=(r[e]||r.capture)();let a=document.createElement("small");if(a.textContent=(Fy[n.state]||Fy.unknown)(),s.appendChild(a),e==="capture"&&!((u=Et.input)!=null&&u.accessibility)){let d=document.createElement("small");d.textContent=k("appCaptureInput"),s.appendChild(d)}else if(n.detail){let d=document.createElement("small");d.textContent=n.detail,s.appendChild(d)}t.append(i,s);let o=document.createElement("button");o.className="az-btn",n.ask?(o.textContent=k("shizukuGrant"),o.onclick=()=>Uy()):(o.textContent=k("shizukuRecheck"),o.onclick=()=>{$A(),Uy()}),t.appendChild(o);let l=document.createElement("button");l.className="az-btn ghost",l.textContent=k("appSelfTest"),l.onclick=async()=>{var d;l.disabled=!0;try{await Os({cmd:"selftest"});let h=(d=Et.diagnostics)==null?void 0:d.selfTest;h&&it(h.ok?k("appSelfTestOk"):k("appSelfTestFailed"))}catch{it(k("appCommandFailed"))}finally{l.disabled=!1}},t.appendChild(l);let c=document.createElement("button");return c.className="az-btn ghost",c.textContent=k("appDiagnostics"),c.onclick=()=>{let d=t.querySelector(".az-caps");if(d){d.remove();return}let h=document.createElement("pre");h.className="az-caps",h.textContent=JA(),h.onclick=()=>QA(h.textContent),t.appendChild(h)},t.appendChild(c),t}function JA(){var i;let n=Et.shizuku||{},e=Et.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||Et.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...Et.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=Et.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||Et.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function QA(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&it(k("appDiagnosticsCopied"));return}catch{}}var as=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Hp(n){let e=Bp(n.pkg),t=`<span class="nm">${as((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${as(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${as(e.state==="suspended"?k("appMinimized"):k("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${as(k("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${as(n.pkg)}" data-session="${e?as(e.state):""}" data-pkg="${as(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${as(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${as(k("androidApps"))}">${ee("device")}</span>`+r+s+`</span><span class="lib-label">${as(n.label||n.pkg)}</span></button>`}function zu(n){let e=pi.get(n);e&&Jt(e.win)}function Vy(){return BA().length}function Gy(){return sn.apps}function Wy(){ge&&(window.nextvrApps=HA,jA(),ze("lang",()=>{sn.loaded=!1,Se("appsState")}))}var Gu="nextvr-xr-game",wl="nextvr-xr-menu",kt={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},vr=[],eE=null,Wp=!1,Xy=()=>kt,$y=()=>vr,Yy=()=>kt.hosting,Sl=()=>kt.runtime==="ready",jy=()=>kt.handMode,tE=()=>{var n;return((n=kt.game)==null?void 0:n.package)||null};function Bs(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function qy(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(kt,e),Vu=null,kt.hosting&&((t=kt.game)!=null&&t.package)?sE(kt.game):rE(),Se("xr",{...kt,games:vr}))}function nE(n){let e;try{e=JSON.parse(n)}catch{e=null}vr=Array.isArray(e==null?void 0:e.games)?e.games:[],eE=(e==null?void 0:e.problem)||null,Wp=!0,Se("xr",{...kt,games:vr})}function Zy(){var n,e;if(!(!ge||window.nextvrXr)){window.nextvrXr=qy,window.nextvrXrLibrary=nE;try{qy(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}Vp(),ze("lang",()=>{Vp(),Se("xr",{...kt,games:vr})})}}function Vp(){Bs({cmd:"library"})}function Ky(){Wp=!1,Bs({cmd:"refresh"}),Vp()}function qp(n){!n||kt.hosting||Bs({cmd:"open",package:n})}function Xp(){kt.hosting&&Bs({cmd:"close"})}function iE(){kt.hosting&&Bs({cmd:"minimize"})}function Jy(){kt.hosting&&Bs({cmd:"restore"})}function $p(){Bs({cmd:"runtime"})}function Qy(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}kt.handMode=e,Se("xr",{...kt,games:vr})}function Yp(){Bs({cmd:"selftest"})}function jp(){return vr.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function ev(n){let e=n.game,t=`<span class="nm">${Us(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=tE()===e.package?`<span class="lib-open">${Us(k("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${Us(e.describe||k("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${Us(e.package)}" aria-label="${Us(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${Us(k("xrTitle"))}">${ee("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${Us(e.label||e.package)}</span></button>`}var Us=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function tv(){if(Sl()||!Wp||!vr.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=kt.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=kt.runtimeBundled?k("xrMissing"):k("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=kt.summary||kt.problem||k("xrSummaryMissing"),t.appendChild(i),n.append(e,t),kt.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=k("xrInstall"),r.onclick=()=>{$p(),it(k("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=k("xrSelfTest"),s.onclick=()=>Yp(),n.appendChild(s),n}var Fs=!1,Gp=null;function sE(n){var u;if(Fs)return;Gp={windows:he.map(d=>({win:d,hidden:d.hidden})),dockHidden:ku(),keyboard:Ey(),focus:((u=vl())==null?void 0:u.id)||null};for(let d of he)d.setHidden(!0);yr(!0),Yt(!0),document.documentElement.classList.add("game-on","xr-on"),Fs=!0,Zp.reset(),Hu(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=k("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=kt.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let a=document.createElement("span");a.className="app-bar-spacer";let o=document.createElement("button");o.className="app-key",o.title=k("appMinimize"),o.setAttribute("aria-label",k("appMinimize")),o.innerHTML=ee("chevronDown"),o.onclick=()=>iE();let l=document.createElement("button");l.className="app-key",l.title=k("close"),l.setAttribute("aria-label",k("close")),l.innerHTML=ee("x"),l.onclick=()=>Xp(),t.append(i,a,o,l),e.append(t,s);let c=_l({shape:"landscape",display:{w:r.w,h:r.h}});Qt({id:Gu,title:n.label||n.package,node:e,w:c.w,h:c.h})}function rE(){if(!Fs)return;Fs=!1,Vu=null;for(let e of[...he])(e.id===Gu||e.id===wl)&&ft(e);document.documentElement.classList.remove("game-on","xr-on");let n=Gp;if(Gp=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...he])!e.has(i)&&!i.onboarding&&ft(i);Yt(n.dockHidden);for(let{win:i,hidden:s}of n.windows)he.includes(i)&&i.setHidden(s);n.keyboard&&yr(!1);let t=he.find(i=>i.id===n.focus);t&&Jt(t)}Zp.reset(),Hu(0)}ze("wins",()=>{!Fs||!window.nextvrXr||he.some(n=>n.id===Gu)||Xp()});var Zp=new so,aE=()=>Fs&&he.some(n=>n.id===wl);function oE(){if(!Fs||he.some(i=>i.id===wl)||!kt.game)return;let n=kt.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${Us(n.label||n.package)}</div>
    <p class="gm-sub">${Us(k("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${k("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${ee("settings")}<span>${k("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${k("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&(lE(),s.dataset.act==="exit"?Xp():s.dataset.act==="settings"&&Se("game:settings"))});let t=Qt({id:wl,title:k("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:$t,z:-.55}});t==null||t.setCurve(0)}function lE(){let n=he.find(e=>e.id===wl);n&&ft(n)}function Hu(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var Vu=null;function cE(){let n=Fs?xy(ye.x,ye.y):null,e=!!n&&n.win.id!==Gu&&!n.win.onboarding;e!==Vu&&(Vu=e,Bs({cmd:"hands-ui",blocked:e}))}ze("phonehands",n=>{if(!Fs)return;cE();let e=(n.hands||[]).filter(s=>s.pinching),t=wu(e),i=Zp.update(performance.now(),{left:t,right:t});Hu(i.progress),i.opened&&oE(),i.closed&&!aE()&&Hu(0)});var Ml=null,$n=null,qu="",Wu=0,xr=new Set,uE='button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';function dE(){var i;let n=document.getElementById("entry-fullscreen");if(n&&!n.hidden)return n;let e=vl();if(e&&!e.hidden)return e.el;let t=document.querySelector(".dock");return t&&t.offsetWidth&&getComputedStyle(t).display!=="none"?t:((i=he.find(s=>!s.hidden&&!s.onboarding))==null?void 0:i.el)||null}function nv(){let n=dE();return n?[...n.querySelectorAll(uE)].filter(e=>{if(e.closest("[hidden],.win-shell[hidden]"))return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&getComputedStyle(e).visibility!=="hidden"}):[]}function zs(n){$n&&$n!==n&&$n.classList.remove("joycon-selected"),$n=n||null,$n&&($n.classList.add("joycon-selected"),$n.focus({preventScroll:!0}))}function Kp(n){let e=nv();if(!e.length){zs(null);return}if(e.indexOf($n)<0){zs(e[0]);return}let i=$n.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2,a=n==="left"?[-1,0]:n==="right"?[1,0]:n==="up"?[0,-1]:[0,1],o=null,l=1/0;for(let c of e){if(c===$n)continue;let u=c.getBoundingClientRect(),d=u.left+u.width/2-s,h=u.top+u.height/2-r,f=d*a[0]+h*a[1];if(f<=2)continue;let g=Math.abs(d*a[1]-h*a[0]),y=f+g*1.8;y<l&&(o=c,l=y)}o||(o=n==="left"||n==="up"?e.at(-1):e[0]),zs(o)}function hE(){let n=nv();n.length&&((!$n||!n.includes($n))&&zs(n[0]),$n==null||$n.click())}function pE(){var s;let n=document.querySelector('#entry-fullscreen [data-entry-act="back"]');if(n){n.click(),zs(null);return}let e=vl(),t=(s=e==null?void 0:e.el)==null?void 0:s.querySelector('[data-entry-act="back"]');if(t){t.click(),zs(null);return}if(e&&!e.onboarding){ft(e),zs(null);return}let i=document.activeElement;i&&i!==document.body&&i.blur()}function fE(){if(Ml){let n=Ml;Ml=null;for(let{win:e,hidden:t}of n.windows)he.includes(e)&&e.setHidden(t);Yt(n.dockHidden),Bt(n.dockVisible),yr(n.keyboardHidden),zs(null);return}Ml={windows:he.filter(n=>!n.onboarding).map(n=>({win:n,hidden:n.hidden})),dockHidden:ku(),dockVisible:wy(),keyboardHidden:Ty()};for(let{win:n}of Ml.windows)n.setHidden(!0);yr(!0),Yt(!0),zs(null)}function mE(n,e){if(n==="home"){!xr.has(n)&&e===0&&fE(),xr.add(n);return}if(n==="left"||n==="right"||n==="up"||n==="down"){(!xr.has(n)||e>0)&&Kp(n),xr.add(n);return}xr.has(n)||(xr.add(n),n==="accept"?hE():n==="back"&&pE())}function gE(n,e,t=0){e?mE(n,t):xr.delete(n)}function yE(n,e){return Math.abs(n)<.58&&Math.abs(e)<.58?"":Math.abs(n)>Math.abs(e)?n<0?"left":"right":e<0?"up":"down"}function vE(n,e){let t=yE(n,e);if(!t){qu="",Wu=0;return}let i=performance.now();t!==qu?(qu=t,Kp(t),Wu=i+320):i>=Wu&&(Kp(t),Wu=i+170)}function iv(){!ge||window.__nextvrJoyconInstalled||(window.__nextvrJoyconInstalled=!0,window.__nextvrJoyconKey=gE,window.__nextvrJoyconAxes=vE,window.addEventListener("blur",()=>{xr.clear(),qu=""}),window.addEventListener("gamepadconnected",n=>{var t;let e=((t=n.gamepad)==null?void 0:t.id)||"Bluetooth gamepad";it(/joy.?con/i.test(e)?"Joy-Con conectado":`Controle conectado: ${e}`)}))}var sv="v2.0.0";var Jp="ENTRE EM OUTRO MUNDO";var rv=Object.freeze(["NeyVR","Faylan","colaboradores do nextVR","JocaVR"]),av=Object.freeze({NeyVR:"o Dono absoluto mais aurudo do planeta.",Faylan:"o desenvolvedor mais sabido de todo o universo muita aura","colaboradores do nextVR":"",JocaVR:"o portador de jogos mais importante do planeta aurudo 67"}),Qp="NextVR \u2014 realidade aumentada",Xu=Object.freeze(["O NextVR \xE9 um projeto de realidade virtual criado para transformar a maneira como voc\xEA interage com o mundo digital usando apenas um celular e um VR Box.","Nosso objetivo \xE9 aproximar a experi\xEAncia de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.","Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualiza\xE7\xE3o representa um novo passo rumo a uma experi\xEAncia mais completa, interativa e acess\xEDvel.","NextVR \u2014 Mais que um app, uma nova forma de ver."]),xE=[Qp,...Xu].join(`

`);var bE=`
<svg viewBox="0 0 28 24" fill="none" class="entry-back-svg" aria-hidden="true">
  <path d="M11 5L4 12L11 19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19C21.8 12 24 14.2 24 17V19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,_E=`
<svg viewBox="0 0 36 36" fill="none" class="entry-reticle-svg" aria-hidden="true">
  <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M18 3V8M18 28V33M3 18H8M28 18H33" stroke="currentColor" stroke-width="2"/>
</svg>`,ov=`
<svg viewBox="0 0 24 24" fill="currentColor" class="entry-user-svg" aria-hidden="true">
  <circle cx="12" cy="8.2" r="4.2"/>
  <path d="M4 20.5c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8z"/>
</svg>`,lv=`
<svg viewBox="0 0 24 24" fill="none" class="entry-store-svg" aria-hidden="true">
  <path d="M6 8h12l-1.2 12H7.2L6 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,wE=`
<svg viewBox="0 0 24 24" class="entry-verified-svg" aria-hidden="true">
  <circle cx="12" cy="12" r="10.5" fill="#fe2c55" stroke="#ff6384" stroke-width="1"/>
  <path d="M7.6 12.4l3 3 5.8-6.2" fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,SE=[{id:"beat-vr",name:"Beat Saber",cat:"Modo VR Imediato \xB7 4.9 \u2605",bg:"#070814",img:"./beat-saber-logo.jpg"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"A\xE7\xE3o \xB7 Arena VR \xB7 4.8 \u2605",bg:"#0a1426",img:"./hyper-dash-logo.jpg"},{id:"roblox-vr",name:"Roblox",cat:"Ambiente Preto \xB7 4.8 \u2605",bg:"#090d16",img:"./roblox-logo.jpg"},{id:"tiktok",name:"TikTok",cat:"V\xEDdeos Curtos \xB7 4.9 \u2605",bg:"#000000",img:"./tiktok-logo.jpg"},{id:"youtube",name:"YouTube VR",cat:"V\xEDdeo \xB7 360\xB0 \xB7 4.8 \u2605",bg:"#dc2626",img:"./icons/youtube.svg"},{id:"discord",name:"Discord",cat:"Social \xB7 Voz \xB7 4.7 \u2605",bg:"#4f46e5",img:"./icons/discord.svg"},{id:"netflix",name:"Netflix",cat:"Cinema \xB7 TV \xB7 4.8 \u2605",bg:"#991b1b"},{id:"spotify",name:"Spotify",cat:"M\xFAsica \xB7 \xC1udio \xB7 4.8 \u2605",bg:"#059669",img:"./icons/spotify.svg"}],ME=[{id:"chrome",label:"Chrome N",url:"./icons/nextvr-chrome-n.png"},{id:"purple",label:"Neon N",url:"./icons/nextvr-n.png"},{id:"cyber",label:"Cyber Blue",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><circle cx="40" cy="29" r="13" fill="#fff"/><path d="M16 68c0-13 11-21 24-21s24 8 24 21z" fill="#fff"/></svg>')},{id:"emerald",label:"Emerald VR",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><rect x="14" y="26" width="52" height="26" rx="10" fill="#fff"/><circle cx="30" cy="39" r="6" fill="#0f172a"/><circle cx="50" cy="39" r="6" fill="#0f172a"/></svg>')}];function Ri(n){return String(n||"").replace(/[&<>"']/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":e===">"?"&gt;":e==='"'?"&quot;":"&#39;")}var ef={pt:{start:"Iniciar",startVr:"Iniciar VR",settings:"Configura\xE7\xF5es",basicSettings:"Configura\xE7\xF5es b\xE1sicas",handStyle:"Hand tracking style",handDrawn:"M\xE3o desenhada",handInvisible:"Invis\xEDvel",collaborators:"Colaboradores",about:"Sobre",back:"Voltar",store:"Store",storeTitle:"Store NextVR \u2014 Jogos & Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Ativado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"qualidade",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"M\xE9dia (890p)",qLow:"Baixa (390p)",ocularCell:"c\xE2mera grande ocular (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRILHO",handCell:"Hand tracking",fingerTouchOn:"Toque (Sem Pin\xE7a): ON",fingerTouchOff:"Toque (Sem Pin\xE7a): OFF",envTitle:"Ambiente",envAr:"C\xE2mera (AR)",envSunset:"P\xF4r do Sol",envNight:"Noite"},en:{start:"Start",startVr:"Start VR",settings:"Settings",basicSettings:"Basic Settings",handStyle:"Hand tracking style",handDrawn:"Drawn hand",handInvisible:"Invisible",collaborators:"Collaborators",about:"About",back:"Back",store:"Store",storeTitle:"NextVR Store \u2014 Games & Apps",langCell:"LANGUAGE",spatialCell:"SPATIAL APP",on:"Enabled",dock:"Dock",dockSnapOn:"Dock Slot: ON",dockSnapOff:"Dock Slot: OFF",qualityCell:"quality",qAuto:"Auto",qHigh:"High (1080p)",qMed:"Medium (890p)",qLow:"Low (390p)",ocularCell:"ultra-wide camera (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRIGHTNESS",handCell:"Hand tracking",fingerTouchOn:"Finger Touch: ON",fingerTouchOff:"Finger Touch: OFF",envTitle:"Environment",envAr:"Camera (AR)",envSunset:"Sunset",envNight:"Night"},es:{start:"Iniciar",startVr:"Iniciar VR",settings:"Ajustes",basicSettings:"Ajustes b\xE1sicos",handStyle:"Hand tracking style",handDrawn:"Mano dibujada",handInvisible:"Invisible",collaborators:"Colaboradores",about:"Acerca de",back:"Volver",store:"Tienda",storeTitle:"Tienda NextVR \u2014 Juegos y Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Activado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"calidad",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"Media (890p)",qLow:"Baja (390p)",ocularCell:"c\xE1mara gran angular (0.5x)",volumeCell:"VOLUMEN",brightnessCell:"BRILLO",handCell:"Hand tracking",fingerTouchOn:"Toque \xCDndice: ON",fingerTouchOff:"Toque \xCDndice: OFF",envTitle:"Entorno",envAr:"C\xE1mara (AR)",envSunset:"Atardecer",envNight:"Noche"},ja:{start:"\u958B\u59CB",startVr:"VR\u3092\u958B\u59CB",settings:"\u8A2D\u5B9A",basicSettings:"\u57FA\u672C\u8A2D\u5B9A",handStyle:"Hand tracking style",handDrawn:"\u624B\u3092\u8868\u793A",handInvisible:"\u975E\u8868\u793A",collaborators:"\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u30FC",about:"\u6982\u8981",back:"\u623B\u308B",store:"\u30B9\u30C8\u30A2",storeTitle:"NextVR \u30B9\u30C8\u30A2 \u2014 \u30B2\u30FC\u30E0\uFF06\u30A2\u30D7\u30EA",langCell:"\u8A00\u8A9E",spatialCell:"SPATIAL APP",on:"\u30AA\u30F3",dock:"\u30C9\u30C3\u30AF",dockSnapOn:"\u30B9\u30ED\u30C3\u30C8: ON",dockSnapOff:"\u30B9\u30ED\u30C3\u30C8: OFF",qualityCell:"\u753B\u8CEA",qAuto:"\u81EA\u52D5",qHigh:"\u9AD8 (1080p)",qMed:"\u4E2D (890p)",qLow:"\u4F4E (390p)",ocularCell:"\u8D85\u5E83\u89D2\u30AB\u30E1\u30E9 (0.5x)",volumeCell:"\u97F3\u91CF",brightnessCell:"\u660E\u308B\u3055",handCell:"Hand tracking",fingerTouchOn:"\u6307\u30BF\u30C3\u30C1: ON",fingerTouchOff:"\u6307\u30BF\u30C3\u30C1: OFF",envTitle:"\u74B0\u5883",envAr:"\u30AB\u30E1\u30E9 (AR)",envSunset:"\u5915\u66AE\u308C",envNight:"\u591C"},ru:{start:"\u041D\u0430\u0447\u0430\u0442\u044C",startVr:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C VR",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",basicSettings:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",handStyle:"Hand tracking style",handDrawn:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0443\u043A\u0430",handInvisible:"\u041D\u0435\u0432\u0438\u0434\u0438\u043C\u0430\u044F",collaborators:"\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",about:"\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",back:"\u041D\u0430\u0437\u0430\u0434",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",storeTitle:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D NextVR \u2014 \u0418\u0433\u0440\u044B \u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",langCell:"\u042F\u0417\u042B\u041A",spatialCell:"SPATIAL APP",on:"\u0412\u043A\u043B.",dock:"\u0414\u043E\u043A",dockSnapOn:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: ON",dockSnapOff:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: OFF",qualityCell:"\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",qAuto:"\u0410\u0432\u0442\u043E",qHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qMed:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",ocularCell:"\u0448\u0438\u0440\u043E\u043A\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430 (0.5x)",volumeCell:"\u0413\u0420\u041E\u041C\u041A\u041E\u0421\u0422\u042C",brightnessCell:"\u042F\u0420\u041A\u041E\u0421\u0422\u042C",handCell:"Hand tracking",fingerTouchOn:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: ON",fingerTouchOff:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: OFF",envTitle:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",envAr:"\u041A\u0430\u043C\u0435\u0440\u0430 (AR)",envSunset:"\u0417\u0430\u043A\u0430\u0442",envNight:"\u041D\u043E\u0447\u044C"},de:{start:"Starten",startVr:"VR starten",settings:"Einstellungen",basicSettings:"Grundeinstellungen",handStyle:"Hand tracking style",handDrawn:"Gezeichnete Hand",handInvisible:"Unsichtbar",collaborators:"Mitwirkende",about:"\xDCber",back:"Zur\xFCck",store:"Store",storeTitle:"NextVR Store \u2014 Spiele & Apps",langCell:"SPRACHE",spatialCell:"SPATIAL APP",on:"Aktiviert",dock:"Dock",dockSnapOn:"Dock-Slot: ON",dockSnapOff:"Dock-Slot: OFF",qualityCell:"Qualit\xE4t",qAuto:"Auto",qHigh:"Hoch (1080p)",qMed:"Mittel (890p)",qLow:"Niedrig (390p)",ocularCell:"Ultraweitwinkel (0.5x)",volumeCell:"LAUTST\xC4RKE",brightnessCell:"HELLIGKEIT",handCell:"Hand tracking",fingerTouchOn:"Finger-Touch: ON",fingerTouchOff:"Finger-Touch: OFF",envTitle:"Umgebung",envAr:"Kamera (AR)",envSunset:"Sonnenuntergang",envNight:"Nacht"}},Je=n=>(ef[tp()]||ef.pt)[n]||ef.pt[n]||n;function tf(n){return Je(n?"handDrawn":"handInvisible")}function nf({onStart:n,onLaunchGorilla:e,getStatus:t,fullscreen:i=!1}={}){let s=document.createElement("div");s.className=i?"entry-menu-root entry-menu-root--fullscreen":"entry-menu-root",s.dataset.entryMenu="2.0.0",i&&(s.dataset.entryFullscreen="1");let r="home",a=6,o=0,l=null,c=null,u=["Carregando c\xE2mera AR...","Carregando Dock...","Otimizando Hand tracking...","Calibrando lentes 3D...","Carregando aplicativos espaciais...","Iniciando NextVR..."],d=N=>N<17?u[0]:N<35?u[1]:N<55?u[2]:N<75?u[3]:N<92?u[4]:u[5],h=()=>{l&&(clearInterval(l),l=null)},f=()=>{let N=s.querySelector("[data-entry-countdown]"),O=s.querySelector("[data-entry-load-pct]"),L=s.querySelector("[data-entry-load-bar]"),T=s.querySelector("[data-entry-load-status]"),F=s.querySelector("[data-entry-countdown-sub]");N&&(N.textContent=String(a)),O&&(O.textContent=`${o}%`),L&&(L.style.width=`${o}%`),T&&(T.textContent=d(o)),F&&(F.textContent=`COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...`)},g=()=>{h(),a=6,o=0,r="loading",_();let N=6e3,O=performance.now();l=setInterval(()=>{let L=Math.max(0,performance.now()-O);if(o=Math.min(100,Math.round(L/N*100)),a=Math.max(1,Math.ceil((N-L)/1e3)),L>=N){o=100,f(),h(),n==null||n();return}f()},60)},y=()=>{let N=t==null?void 0:t();if(N!=null&&N.clockText)return N.clockText;if(N!=null&&N.time&&N.time!=="--:--")return N.time;let O=new Date;return`${String(O.getHours()).padStart(2,"0")}:${String(O.getMinutes()).padStart(2,"0")}`},p=()=>{var O,L;try{let T=(L=(O=window.NativeXR)==null?void 0:O.battery)==null?void 0:L.call(O);if(T&&T!=="null"){let F=typeof T=="string"?JSON.parse(T):T;if(F&&typeof F.level=="number"){let G=Math.round(Math.max(0,Math.min(1,F.level))*100);return{percent:G,charging:!!F.charging,text:`${G}%${F.charging?" \u26A1":""}`}}}}catch{}let N=t==null?void 0:t();if(N&&typeof N.batteryLevel=="number"){let T=Math.round(Math.max(0,Math.min(1,N.batteryLevel))*100);return{percent:T,charging:!!N.charging,text:`${T}%${N.charging?" \u26A1":""}`}}return{percent:100,charging:!1,text:"100%"}},m=()=>{var N,O;S.handsOn=1,S.handDraw=S.handDraw?0:1,Ve(S),(O=(N=window.NativeXR)==null?void 0:N.handVisuals)==null||O.call(N,!!S.handDraw),Se("handDraw",!!S.handDraw)},b=()=>{let N=tf(S.handDraw);return`
      <nav class="entry-cards-row" role="navigation" aria-label="Menu principal NextVR">
        <button type="button" class="entry-card entry-card--primary" data-entry-act="start">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("start")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="settings"?"entry-card--active":""}" data-entry-act="settings">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("settings")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${S.handDraw?"entry-card--hand-drawn":"entry-card--hand-invisible"}" data-entry-act="hand-style" data-hand-draw="${S.handDraw?"1":"0"}">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("handStyle")}</span>
            <span class="entry-card-state" data-hand-style-label>${N}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="collaborators"?"entry-card--active":""}" data-entry-act="collaborators">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("collaborators")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="about"?"entry-card--active":""}" data-entry-act="about">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("about")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>
      </nav>`},v=()=>`
      <div class="entry-brand-stage" data-entry-panel="brand">
        <div class="entry-brand-grid-bg" aria-hidden="true"></div>
        <div class="entry-updates-feed" data-entry-updates role="region" aria-label="Atualiza\xE7\xF5es NextVR">
          <div class="entry-updates-head">
            <span class="entry-updates-dot" aria-hidden="true"></span>
            <span class="entry-updates-title">ATUALIZA\xC7\xD5ES \xB7 NOTIFICA\xC7\xD5ES</span>
            <span class="entry-updates-badge">v2.0.0</span>
          </div>
          <div class="entry-updates-list">
            <article class="entry-notif-card" data-entry-notif="sixdof">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">AGORA \xB7 6DOF AR</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">6DoF Estabilizado &amp; Verso Branco Transl\xFAcido</strong>
              <p class="entry-notif-desc">Corrigido o avan\xE7o sozinho; travamento horizontal no ch\xE3o e verso da Dock branco transl\xFAcido ao passar por tr\xE1s.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="browser-hold">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">NOVO \xB7 NAVEGADOR (2S)</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">+ Nova Guia &amp; + Guia An\xF4nima</strong>
              <p class="entry-notif-desc">Segure por 2 segundos no app do Navegador (com Hand Tracking de Pin\xE7a ou Toque) para escolher + Nova Guia ou + Guia An\xF4nima.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="dock-pinch">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">CORRE\xC7\xC3O \xB7 HAND TRACKING</span>
                <span class="entry-notif-time">Ativo</span>
              </div>
              <strong class="entry-notif-heading">Pin\xE7a Calibrada Perto da Dock (em Bar)</strong>
              <p class="entry-notif-desc">Corrigida a sele\xE7\xE3o de apps com pin\xE7a ao aproximar-se da Dock em barra, com prioridade sobre janelas de fundo.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="spatial-library">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">GORILLA TAG VR \xB7 UPDATE</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">Contador de Moedas no Bra\xE7o Direito &amp; M\xE3os Corrigidas</strong>
              <p class="entry-notif-desc">Nova logo amarela do Gorilla Tag, contador de moedas 3D no bra\xE7o direito, m\xE3o direita/esquerda corrigidas e sa\xEDda autom\xE1tica desativada.</p>
            </article>
          </div>
        </div>
        <div class="entry-brand-store-dock">
          <div class="entry-brand-store-info" data-entry-act="store" role="button" tabindex="0">
            <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-brand-store-thumb" draggable="false" />
            <div class="entry-brand-store-meta">
              <span class="entry-brand-store-tag">STORE \xB7 EM DESTAQUE</span>
              <strong class="entry-brand-store-name">Gorilla Tag VR</strong>
            </div>
          </div>
          <div class="entry-brand-store-actions">
            <button type="button" class="entry-btn entry-btn--primary entry-brand-store-open" data-entry-act="store">
              ${lv}<span>${Je("store")}</span>
            </button>
          </div>
        </div>
      </div>`,M=()=>{let N=!!S.gorillaInstalled,L=c!==null?`<button type="button" class="entry-btn entry-btn--primary" disabled>Baixando... ${c}%</button>`:N?`<span class="entry-store-badge-ok" data-entry-gorilla-installed>\u2713 Na Biblioteca</span>
         <button type="button" class="entry-btn entry-btn--primary" data-entry-play-gorilla>Jogar Gorilla Tag</button>`:'<button type="button" class="entry-btn entry-btn--primary" data-entry-install-gorilla>BAIXAR</button>';return`
      <div class="entry-subpanel entry-subpanel--store" data-entry-panel="store">
        <div class="entry-subpanel-head">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <h2 class="entry-subpanel-title">${Je("storeTitle")}</h2>
            <div style="display:inline-flex;gap:6px;flex-wrap:wrap">
              <span class="entry-store-card-pill" style="background:rgba(255,255,255,.16);color:#fff">P\xE1gina inicial</span>
              <span class="entry-store-card-pill">Jogos</span>
              <span class="entry-store-card-pill">Apps</span>
              <span class="entry-store-card-pill">Lista de desejos</span>
            </div>
          </div>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Je("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${Je("startVr")}</button>
          </div>
        </div>

        <div class="entry-store-body">
          <div class="entry-store-featured" data-entry-store-gorilla>
            <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-store-gorilla-logo" draggable="false" />
            <div class="entry-store-featured-info">
              <div class="entry-store-kicker">DESTAQUE VR \xB7 LENTES GOOGLE CARDBOARD 2015</div>
              <div class="entry-store-title">Gorilla Tag</div>
              <div class="entry-store-desc">Mapa da floresta 3D com locomo\xE7\xE3o f\xEDsica pelas m\xE3os e bra\xE7os de gorila em Hand Tracking. Ao baixar, vai para a Biblioteca de Apps.</div>
              <div class="entry-store-actions">
                ${L}
              </div>
            </div>
          </div>

          <div class="entry-store-section-label">NAVEGAR POR TUDO \xB7 JOGOS &amp; APPS NEXTVR</div>
          <div class="entry-store-grid">
            ${SE.map(T=>{let F=T.img?`<img src="${T.img}" alt="${Ri(T.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block">`:T.name.slice(0,2).toUpperCase();return`
              <div class="entry-store-card" data-entry-store-app="${T.id}">
                <div class="entry-store-card-dot" style="background:${T.bg};overflow:hidden;padding:0">${F}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${Ri(T.name)}</div>
                  <div class="entry-store-card-cat">${Ri(T.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Gr\xE1tis</span>
              </div>`}).join("")}
          </div>
        </div>
      </div>`},E=()=>{let N=[{id:"passthrough",label:Je("envAr")},{id:"sunset",label:Je("envSunset")},{id:"night",label:Je("envNight")},{id:"dark",label:"Dark Panor\xE2mico"}],O=[{id:"auto",label:Je("qAuto")},{id:"high",label:Je("qHigh")},{id:"medium",label:Je("qMed")},{id:"low",label:Je("qLow")}],L=S.entryEnvChosen&&S.env&&S.env!=="passthrough"?S.env:"passthrough",T=S.quality==="med"?"medium":S.quality||"auto",F=!!S.wideCamera,G=!!S.spatialLauncher,q=S.dockSnapSlot!==0,W=S.lang||"pt",J=Number.isFinite(S.mediaVolume)?S.mediaVolume:70,Q=Number.isFinite(S.brightness)?S.brightness:75;return`
      <div class="entry-subpanel entry-subpanel--settings" data-entry-panel="settings">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${Je("basicSettings")}</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Je("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${Je("startVr")}</button>
          </div>
        </div>
        <div class="entry-bento-grid">
          <div class="entry-bento-cell entry-bento-cell--idioma">
            <div class="entry-bento-title">${Je("langCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${W==="pt"?"on":""}" data-entry-lang="pt">PT</button>
              <button type="button" class="entry-seg-btn ${W==="en"?"on":""}" data-entry-lang="en">EN</button>
              <button type="button" class="entry-seg-btn ${W==="es"?"on":""}" data-entry-lang="es">ES</button>
              <button type="button" class="entry-seg-btn ${W==="ja"?"on":""}" data-entry-lang="ja">JA</button>
              <button type="button" class="entry-seg-btn ${W==="ru"?"on":""}" data-entry-lang="ru">RU</button>
              <button type="button" class="entry-seg-btn ${W==="de"?"on":""}" data-entry-lang="de">DE</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--spatial">
            <div class="entry-bento-title">${Je("spatialCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${G?"on":""}" data-entry-spatial="1">${Je("on")}</button>
              <button type="button" class="entry-seg-btn ${G?"":"on"}" data-entry-spatial="0">${Je("dock")}</button>
              <button type="button" class="entry-seg-btn ${q?"on":""}" data-entry-dock-snap="${q?"1":"0"}" title="Espa\xE7o pr\xE9-definido ao mover janelas na Dock normal">${Je(q?"dockSnapOn":"dockSnapOff")}</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--qualidade">
            <div class="entry-bento-title">${Je("qualityCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              ${O.map(re=>`<button type="button" class="entry-seg-btn ${T===re.id?"on":""}" data-entry-quality="${re.id}">${re.label}</button>`).join("")}
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--ocular">
            <div class="entry-bento-title">${Je("ocularCell")} \xB7 3DoF / 6DoF</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${F?"on":""}" data-entry-wide-cam="1">0.5x</button>
              <button type="button" class="entry-seg-btn ${F?"":"on"}" data-entry-wide-cam="0">1.0x</button>
              <button type="button" class="entry-seg-btn ${S.sixdof===0?"on":""}" data-entry-dof="3dof" title="Modo 3DoF (rota\xE7\xE3o de cabe\xE7a)">3DoF</button>
              <button type="button" class="entry-seg-btn ${S.sixdof!==0?"on":""}" data-entry-dof="6dof" title="Modo 6DoF Falso (andar no espa\xE7o)">6DoF</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--volume">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${Je("volumeCell")}</span>
              <span class="entry-bento-val" data-vol-val>${J}%</span>
            </div>
            <input type="range" min="0" max="100" value="${J}" class="entry-slider" data-entry-volume />
          </div>

          <div class="entry-bento-cell entry-bento-cell--brilho">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${Je("brightnessCell")}</span>
              <span class="entry-bento-val" data-bri-val>${Q}%</span>
            </div>
            <input type="range" min="10" max="100" value="${Q}" class="entry-slider" data-entry-brightness />
          </div>

          <div class="entry-bento-cell entry-bento-cell--hand">
            <div class="entry-bento-title">${Je("handCell")}</div>
            <div class="entry-hand-col">
              <button type="button" class="entry-seg-btn ${S.handDraw?"on":""}" data-entry-hand-draw="1">${Je("handDrawn")}</button>
              <button type="button" class="entry-seg-btn ${S.handDraw?"":"on"}" data-entry-hand-draw="0">${Je("handInvisible")}</button>
              <button type="button" class="entry-seg-btn ${S.fingerTouch!==0?"on":""}" data-entry-finger-touch="${S.fingerTouch!==0?"1":"0"}" title="Toque com o indicador indo \xE0 frente sem precisar pin\xE7ar">${S.fingerTouch!==0?Je("fingerTouchOn"):Je("fingerTouchOff")}</button>
              <button type="button" class="entry-seg-btn ${S.pinchOnApp!==0?"on":""}" data-entry-pinch-app="${S.pinchOnApp!==0?"1":"0"}" title="Fazer a pin\xE7a encima de um app abre o app na hora, sem precisar do raio">Pin\xE7a no App (Sem Raio): ${S.pinchOnApp!==0?"ON":"OFF"}</button>
              <button type="button" class="entry-seg-btn ${S.gunGesture!==0?"on":""}" data-entry-gun-gesture="${S.gunGesture!==0?"1":"0"}" title="Gesto na m\xE3o direita (bolinha com contorno azul) e fechar a m\xE3o por 2s"><span>Bolinha M\xE3o Dir. / Soco: ${S.gunGesture!==0?"ON":"OFF"}</span></button>
              <button type="button" class="entry-seg-btn ${S.mrDim?"on":""}" data-entry-mr-dim="${S.mrDim?"1":"0"}" title="Escurecer o ambiente real (MR) em volta dos apps flutuantes">Ambiente MR: ${S.mrDim?"Escuro":"Normal"}</button>
              <button type="button" class="entry-seg-btn ${S.showFps?"on":""}" data-entry-fps="1">FPS: ${S.showFps?"ON":"OFF"}</button>
              <div class="entry-hand-env-title">${Je("envTitle")}</div>
              ${N.map(re=>`<button type="button" class="entry-seg-btn ${L===re.id?"on":""}" data-entry-env="${re.id}">${re.label}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>`},R=()=>`
    <div class="entry-subpanel" data-entry-panel="collaborators">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title">${Je("collaborators")}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Je("back")}</button>
        </div>
      </div>
      <div class="entry-collab-list" role="list">
        ${rv.map(N=>{let O=av[N]||"",L=N==="colaboradores do nextVR";return`
          <div class="entry-collab-item ${L?"entry-collab-item--blue":""}" role="listitem" data-collaborator-name="${N}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name ${L?"entry-collab-name--blue":""}" ${L?'data-collab-blue="1"':""}>${N}</span>
              <span class="entry-collab-verified" data-collab-verified="${N}" title="Verificado">${wE}</span>
              ${O?`<span class="entry-collab-bio" data-collab-bio="${N}">${Ri(O)}</span>`:""}
            </span>
          </div>`}).join("")}
      </div>
    </div>`,x=()=>`
    <div class="entry-subpanel entry-subpanel--about" data-entry-panel="about">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title" data-about-title>${Qp}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
        </div>
      </div>
      <div class="entry-about-body" data-about-body>
        ${Xu.map((N,O)=>`
          <p class="entry-about-p ${O===Xu.length-1?"entry-about-p--closing":""}">${N}</p>
        `).join("")}
      </div>
    </div>`,U=()=>{let N=S.profileName||"",O=S.profileAvatar||"";return`
      <div class="entry-subpanel entry-subpanel--profile" data-entry-panel="profile">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">Login / Perfil NextVR</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
            <button type="button" class="entry-btn entry-btn--primary" data-profile-save>Salvar Login</button>
          </div>
        </div>
        <div class="entry-login-body">
          <div class="entry-login-left">
            <div class="entry-login-avatar-preview" data-profile-avatar-preview title="Toque para escolher foto da galeria">
              ${O?`<img src="${Ri(O)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`:ov}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK</span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${Ri(N)}" />
            </label>
            <div class="entry-login-presets-wrap">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR</span>
              <div class="entry-login-presets">
                ${ME.map(T=>`
                  <button type="button" class="entry-login-preset ${O===T.url?"on":""}" data-profile-preset="${Ri(T.url)}" title="${Ri(T.label)}">
                    <img src="${Ri(T.url)}" alt="${Ri(T.label)}" />
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>`},w=N=>{let O=d(o);return`
      <div class="entry-hud-screen" data-entry-panel="loading" role="status" aria-live="polite">
        <div class="entry-subtitle">${Jp}</div>

        <header class="entry-hud-top">
          <div class="entry-hud-top-left" aria-hidden="true">
            <div class="entry-hud-sq-box"><div class="entry-hud-sq-inner"></div></div>
            <div class="entry-hud-lines">
              <span class="entry-hud-line-short"></span>
              <span class="entry-hud-line-long"></span>
            </div>
            <div class="entry-hud-vdiv"></div>
          </div>

          <div class="entry-hud-top-right">
            <div class="entry-hud-vdiv" aria-hidden="true"></div>
            <div class="entry-hud-rect" aria-hidden="true">
              <span>NEXTVR</span>
              <b data-entry-battery-top>${N.text}</b>
            </div>
            <button type="button" class="entry-hud-rect entry-hud-rect--btn" data-entry-cancel-countdown title="Cancelar">
              CANCELAR
            </button>
          </div>
        </header>

        <div class="entry-hud-center">
          <div class="entry-hud-frame-wrap">
            <svg class="entry-hud-frame-svg" viewBox="0 0 920 400" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <filter id="entryHudGlow" x="-15%" y="-15%" width="130%" height="130%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon points="274,14 646,14 628,32 292,32" fill="#00f2fe" filter="url(#entryHudGlow)" />
              <polygon points="292,368 628,368 646,386 274,386" fill="#00f2fe" filter="url(#entryHudGlow)" />
              <path d="M 68,14 L 256,14 L 284,42 L 636,42 L 664,14 L 852,14 L 876,66 L 868,78 Q 906,200 868,322 L 876,334 L 852,386 L 664,386 L 636,358 L 284,358 L 256,386 L 68,386 L 44,334 L 52,322 Q 14,200 52,78 L 44,66 Z"
                fill="rgba(4, 34, 58, 0.34)"
                stroke="#38bdf8"
                stroke-width="2.5"
                stroke-linejoin="round" />
            </svg>

            <div class="entry-hud-frame-content">
              <div class="entry-hud-brand">NextVR</div>
              <div class="entry-hud-pct-row">
                <span class="entry-hud-pct" data-entry-load-pct>${o}%</span>
                <span class="entry-hud-sec">(<b data-entry-countdown>${a}</b>s)</span>
              </div>
              <div class="entry-hud-status" data-entry-load-status>${O}</div>
              <div class="entry-hud-hint" data-entry-countdown-sub>COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...</div>
            </div>
          </div>
        </div>

        <footer class="entry-hud-bottom">
          <div class="entry-hud-bar-track">
            <div class="entry-hud-bar-fill" data-entry-load-bar style="width:${o}%"></div>
          </div>
        </footer>
      </div>`},_=()=>{let N=p();if(r==="loading"){s.innerHTML=w(N);let H=s.querySelector("[data-entry-cancel-countdown]");H&&(H.onclick=()=>{h(),r="home",_()});return}let O=r==="settings"?E():r==="collaborators"?R():r==="about"?x():r==="profile"?U():r==="store"?M():v(),L=S.profileName?Ri(S.profileName):"NextVR (Login)",T=S.profileAvatar?`<img src="${Ri(S.profileAvatar)}" alt="" class="entry-profile-q-img" />`:ov;s.innerHTML=`
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">MAIN MENU</h1>
        <div class="entry-subtitle">${Jp}</div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${r==="store"?"on":""}" data-entry-act="store" title="Abrir Store NextVR">
            ${lv}
            <span>${Je("store")}</span>
          </button>
          <div class="entry-top-battery" data-entry-battery-pill title="Bateria sincronizada com o celular">
            <span class="entry-top-bat-bar"><i data-entry-battery-fill style="width:${N.percent}%"></i></span>
            <b data-entry-battery-top>${N.text}</b>
          </div>
        </div>
        <button type="button" class="entry-top-reticle" data-entry-act="gear" title="Configura\xE7\xF5es">${_E}</button>
      </header>

      <div class="entry-rail-backdrop" aria-hidden="true">
        <div class="entry-rail-lines"></div>
      </div>

      <div class="entry-layout">
        <aside class="entry-left-column">
          ${b()}

          <div class="entry-profile-box" data-entry-act="profile" role="button" tabindex="0" title="Clique para editar Nome e Foto de Perfil">
            <button type="button" class="entry-profile-q" data-entry-act="profile" title="Foto de Perfil / Login">${T}</button>
            <div class="entry-profile-info">
              <div class="entry-profile-name"><span data-profile-display-name>${L}</span> <small class="entry-profile-edit-tag">PERFIL</small></div>
              <div class="entry-profile-meta">Hand: <span data-profile-hand>${tf(S.handDraw)}</span></div>
              <div class="entry-profile-meta">Hora: <span data-entry-clock>${y()}</span> \xB7 Bat: <span data-entry-battery>${N.text}</span></div>
            </div>
            <div class="entry-profile-ver">${sv}</div>
          </div>
        </aside>

        <main class="entry-right-stage">
          ${O}
          ${r==="home"?`
            <button type="button" class="entry-corner-back" data-entry-act="start" title="Iniciar">
              ${bE}
            </button>
          `:""}
        </main>
      </div>
    `,s.querySelectorAll('[data-entry-act="start"]').forEach(H=>{H.onclick=()=>{i?g():n==null||n()}});let F=s.querySelector("[data-entry-cancel-countdown]");F&&(F.onclick=()=>{h(),r="home",_()}),s.querySelectorAll('[data-entry-act="settings"], [data-entry-act="gear"]').forEach(H=>{H.onclick=()=>{h(),r=r==="settings"?"home":"settings",_()}}),s.querySelectorAll('[data-entry-act="store"]').forEach(H=>{H.onclick=se=>{se.stopPropagation(),h(),r=r==="store"?"home":"store",_()}}),s.querySelectorAll('[data-entry-act="hand-style"]').forEach(H=>{H.onclick=()=>{m(),_()}}),s.querySelectorAll('[data-entry-act="collaborators"]').forEach(H=>{H.onclick=()=>{h(),r=r==="collaborators"?"home":"collaborators",_()}}),s.querySelectorAll('[data-entry-act="about"]').forEach(H=>{H.onclick=()=>{h(),r=r==="about"?"home":"about",_()}}),s.querySelectorAll('[data-entry-act="profile"]').forEach(H=>{H.onclick=se=>{se.stopPropagation(),h(),r=r==="profile"?"home":"profile",_()}}),s.querySelectorAll('[data-entry-act="back"]').forEach(H=>{H.onclick=()=>{h(),r="home",_()}});let G=s.querySelector("[data-entry-install-gorilla]");G&&(G.onclick=()=>{if(S.gorillaInstalled=1,Ve(S),Se("gorilla-installed",!0),window.__gorillaFastTest){c=null,_();return}c=45,_(),setTimeout(()=>{c=90,r==="store"&&_()},110),setTimeout(()=>{c=null,r==="store"&&_()},230)});let q=s.querySelector("[data-entry-play-gorilla]");q&&(q.onclick=()=>{S.gorillaInstalled=1,Ve(S),Se("gorilla-installed",!0),typeof e=="function"?e():n==null||n()});let W=s.querySelector("[data-profile-name-input]");W&&(W.oninput=()=>{S.profileName=W.value.trim(),Ve(S);let H=s.querySelector("[data-profile-display-name]");H&&(H.textContent=S.profileName||"NextVR (Login)")});let J=s.querySelector("[data-profile-save]");J&&(J.onclick=()=>{W&&(S.profileName=W.value.trim()),Ve(S),Se("profile-updated",{name:S.profileName,avatar:S.profileAvatar}),r="home",_()}),s.querySelectorAll("[data-profile-preset]").forEach(H=>{H.onclick=()=>{W&&(S.profileName=W.value.trim()),S.profileAvatar=H.dataset.profilePreset,Ve(S),Se("profile-updated",{name:S.profileName,avatar:S.profileAvatar}),_()}});let Q=s.querySelector("[data-profile-upload]"),re=s.querySelector("[data-profile-avatar-preview]"),z=s.querySelector("[data-profile-file]"),X=()=>{var H;W&&(S.profileName=W.value.trim(),Ve(S)),typeof((H=window.NativeXR)==null?void 0:H.pickProfilePhoto)=="function"?window.NativeXR.pickProfilePhoto():z&&z.click()};Q&&(Q.onclick=X),re&&(re.onclick=X),z&&(z.onchange=()=>{var de;let H=(de=z.files)==null?void 0:de[0];if(!H)return;let se=new FileReader;se.onload=()=>{let be=new Image;be.onload=()=>{let qe=document.createElement("canvas");qe.width=160,qe.height=160;let $=qe.getContext("2d"),on=Math.min(be.width,be.height),Ne=(be.width-on)/2,We=(be.height-on)/2;$.drawImage(be,Ne,We,on,on,0,0,160,160),W&&(S.profileName=W.value.trim()),S.profileAvatar=qe.toDataURL("image/jpeg",.86),Ve(S),Se("profile-updated",{name:S.profileName,avatar:S.profileAvatar}),_()},be.src=String(se.result)},se.readAsDataURL(H)}),s.querySelectorAll("[data-entry-hand-draw]").forEach(H=>{H.onclick=()=>{var se,de;S.handsOn=1,S.handDraw=H.dataset.entryHandDraw==="1"?1:0,Ve(S),(de=(se=window.NativeXR)==null?void 0:se.handVisuals)==null||de.call(se,!!S.handDraw),Se("handDraw",!!S.handDraw),_()}}),s.querySelectorAll("[data-entry-finger-touch]").forEach(H=>{H.onclick=()=>{var se,de;S.fingerTouch=S.fingerTouch===0?1:0,Ve(S),(de=(se=window.NativeXR)==null?void 0:se.setFingerTouch)==null||de.call(se,!!S.fingerTouch),Se("fingerTouch",!!S.fingerTouch),_()}}),s.querySelectorAll("[data-entry-pinch-app]").forEach(H=>{H.onclick=()=>{S.pinchOnApp=S.pinchOnApp===0?1:0,Ve(S),Se("pinchOnApp",!!S.pinchOnApp),_()}}),s.querySelectorAll("[data-entry-gun-gesture]").forEach(H=>{H.onclick=()=>{S.gunGesture=S.gunGesture===0?1:0,Ve(S),Se("gunGesture",!!S.gunGesture),_()}}),s.querySelectorAll("[data-entry-env]").forEach(H=>{H.onclick=()=>{let se=H.dataset.entryEnv;S.entryEnvChosen=1,se==="passthrough"?(S.env="passthrough",Ve(S),ki(!0)):wi(se),_()}}),s.querySelectorAll("[data-entry-quality]").forEach(H=>{H.onclick=()=>{var se,de;S.quality=H.dataset.entryQuality==="med"?"medium":H.dataset.entryQuality,Ve(S),Se("quality",S.quality),(de=(se=window.NativeXR)==null?void 0:se.setQuality)==null||de.call(se,S.quality),_()}}),s.querySelectorAll("[data-entry-dock-snap]").forEach(H=>{H.onclick=()=>{S.dockSnapSlot=S.dockSnapSlot===0?1:0,Ve(S),Se("dockSnapSlot",!!S.dockSnapSlot),_()}}),s.querySelectorAll("[data-entry-wide-cam]").forEach(H=>{H.onclick=()=>{var se,de;S.wideCamera=H.dataset.entryWideCam==="1"?1:0,Ve(S),(de=(se=window.NativeXR)==null?void 0:se.wideCamera)==null||de.call(se,!!S.wideCamera),Se("wideCamera",!!S.wideCamera),_()}}),s.querySelectorAll("[data-entry-dof]").forEach(H=>{H.onclick=()=>{var de,be;let se=H.dataset.entryDof==="6dof";S.sixdof=se?1:0,Ve(S),se||Xt.reset(),(be=(de=window.NativeXR)==null?void 0:de.setSixDofEnabled)==null||be.call(de,se),Se("sixdof",se),_()}}),s.querySelectorAll("[data-entry-spatial]").forEach(H=>{H.onclick=()=>{S.spatialLauncher=H.dataset.entrySpatial==="1"?1:0,S.spatialLauncher&&(S.env="passthrough",ki(!0)),Ve(S),Se("spatialLauncher",!!S.spatialLauncher),_()}}),s.querySelectorAll("[data-entry-lang]").forEach(H=>{H.onclick=()=>{qr(H.dataset.entryLang),_()}}),s.querySelectorAll("[data-entry-fps]").forEach(H=>{H.onclick=()=>{S.showFps=S.showFps?0:1,Ve(S),Se("fps-toggle",S.showFps),_()}}),s.querySelectorAll("[data-entry-mr-dim]").forEach(H=>{H.onclick=()=>{var se,de;S.mrDim=S.mrDim?0:1,Ve(S),(de=(se=window.NativeXR)==null?void 0:se.setMrDim)==null||de.call(se,!!S.mrDim),Se("mr-dim",S.mrDim),_()}});let ne=s.querySelector("[data-entry-volume]");ne&&(ne.oninput=()=>{var de,be;let H=Number(ne.value);S.mediaVolume=H,Ve(S),ge&&((be=(de=window.NativeXR)==null?void 0:de.setMediaVolumePercent)==null||be.call(de,H));let se=s.querySelector("[data-vol-val]");se&&(se.textContent=`${H}%`)});let te=s.querySelector("[data-entry-brightness]");te&&(te.oninput=()=>{var de,be;let H=Number(te.value);S.brightness=H,Ve(S),ge&&((be=(de=window.NativeXR)==null?void 0:de.setBrightnessPercent)==null||be.call(de,H));let se=s.querySelector("[data-bri-val]");se&&(se.textContent=`${H}%`)})};return _(),s.resetToHome=()=>{h(),r="home",_()},ze("handDraw",()=>{let N=tf(S.handDraw),O=s.querySelector("[data-hand-style-label]"),L=s.querySelector("[data-profile-hand]"),T=s.querySelector('[data-entry-act="hand-style"]');O&&(O.textContent=N),L&&(L.textContent=N),T&&(T.dataset.handDraw=S.handDraw?"1":"0",T.classList.toggle("entry-card--hand-drawn",!!S.handDraw),T.classList.toggle("entry-card--hand-invisible",!S.handDraw))}),ze("device-status",()=>{let N=s.querySelector("[data-entry-clock]");N&&(N.textContent=y());let O=p(),L=s.querySelector("[data-entry-battery]"),T=s.querySelector("[data-entry-battery-top]"),F=s.querySelector("[data-entry-battery-fill]");L&&(L.textContent=O.text),T&&(T.textContent=O.text),F&&(F.style.width=`${O.percent}%`)}),window.nextvrProfilePhoto=N=>{N&&(S.profileAvatar=String(N),Ve(S),Se("profile-updated",{name:S.profileName,avatar:S.profileAvatar}),_())},s}function sf(n,e){if(e===o0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Xo||e===Yc){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Xo)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var $u=class extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new df(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new Mf(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=rr.extractUrlBase(e);a=rr.resolveURL(c,this.path)}else a=rr.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Go(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pv){try{a[ut.KHR_BINARY_GLTF]=new Af(e)}catch(d){s&&s(d);return}r=JSON.parse(a[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new If(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case ut.KHR_MATERIALS_UNLIT:a[d]=new cf;break;case ut.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ef(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:a[d]=new Tf;break;case ut.KHR_MESH_QUANTIZATION:a[d]=new Rf;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function AE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},lf=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qc(u),c.distance=d;break;case"spot":c=new Wc(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,_r(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},cf=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,i){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],fn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}},uf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},df=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(o,o)}return Promise.all(r)}},hf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},pf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],fn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Wt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(o[0],o[1],o[2],fn),Promise.all(r)}},gf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},yf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(o[0],o[1],o[2],fn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Wt)),Promise.all(r)}},vf=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},xf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},bf=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},_f=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},wf=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sf=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}},Mf=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Ci.TRIANGLES&&c.mode!==Ci.TRIANGLE_STRIP&&c.mode!==Ci.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(let g of d){let y=new Ee,p=new D,m=new nt,b=new D(1,1,1),v=new kc(g.geometry,g.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,y.compose(p,m,b));for(let M in l)if(M==="_COLOR_0"){let E=l[M];v.instanceColor=new Hr(E.array,E.itemSize,E.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Ut.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},pv="glTF",Al=12,cv={JSON:1313821514,BIN:5130562},Af=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Al),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Al,r=new DataView(e,Al),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===cv.JSON){let c=new Uint8Array(e,Al+a,o);this.content=i.decode(c)}else if(l===cv.BIN){let c=Al+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ef=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=Lf[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=Lf[u]||u.toLowerCase();if(a[u]!==void 0){let h=i.accessors[e.attributes[u]],f=fo[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let y=f.attributes[g],p=l[g];p!==void 0&&(y.normalized=p)}d(f)},o,c,fn,h)})})}},Tf=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Rf=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Yu=class extends nr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,d=(i-t)/u,h=d*d,f=h*d,g=e*c,y=g-c,p=-2*f+3*h,m=f-h,b=1-p,v=m-h+d;for(let M=0;M!==o;M++){let E=a[y+M+o],R=a[y+M+l]*u,x=a[g+M+o],U=a[g+M]*u;r[M]=b*E+v*R+p*x+m*U}return r}},EE=new nt,Cf=class extends Yu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return EE.fromArray(r).normalize().toArray(r),r}},Ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uv={9728:pn,9729:cn,9984:yc,9985:zh,9986:Ro,9987:Qs},dv={33071:oi,33648:No,10497:Ur},rf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},br={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},TE={CUBICSPLINE:void 0,LINEAR:Fr,STEP:Ha},af={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function RE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new $a({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),n.DefaultMaterial}function ra(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function _r(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(i){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;a.push(h)}if(s){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;o.push(h)}if(r){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function LE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PE(n){let e,t=n.extensions&&n.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+of(t.attributes):e=n.indices+":"+of(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+of(n.targets[i]);return e}function of(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Pf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var NE=new Ee,If=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new ja(this.options.manager):this.textureLoader=new Xc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Go(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ra(r,o,s),_r(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(rr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=rf[s.type],o=fo[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new It(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=rf[s.type],c=fo[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,p;if(f&&f!==d){let m=Math.floor(h/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(b);v||(y=new c(o,m*f,s.count*f/u),v=new Fo(y,f/u),t.cache.add(b,v)),p=new Bo(v,l,h%f/u,g)}else o===null?y=new c(s.count*l):y=new c(o,h,s.count*l),p=new It(y,l,g);if(s.sparse!==void 0){let m=rf.SCALAR,b=fo[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new b(a[1],v,s.sparse.count*m),R=new c(a[2],M,s.sparse.count*l);o!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized));for(let x=0,U=E.length;x<U;x++){let w=E[x];if(p.setX(w,R[x*l]),l>=2&&p.setY(w,R[x*l+1]),l>=3&&p.setZ(w,R[x*l+2]),l>=4&&p.setW(w,R[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return u.magFilter=uv[h.magFilter]||cn,u.minFilter=uv[h.minFilter]||Qs,u.wrapS=dv[h.wrapS]||Ur,u.wrapT=dv[h.wrapT]||Ur,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){let p=new Mn(y);p.needsUpdate=!0,h(p)}),t.load(rr.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||IE(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Vo,Kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ho,Kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return $a}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let d=s[ut.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],fn),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Wt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=zn);let u=r.alphaMode||af.OPAQUE;if(u===af.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===af.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==un&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==un&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==un){let d=r.emissiveFactor;o.emissive=new Ie().setRGB(d[0],d[1],d[2],fn)}return r.emissiveTexture!==void 0&&a!==un&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),_r(d,r),t.associations.set(d,{materials:e}),r.extensions&&ra(s,d,r),d})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hv(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=PE(c),d=s[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=hv(new Vn,c,t),s[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?RE(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){let y=u[f],p=a[f],m,b=c[f];if(p.mode===Ci.TRIANGLES||p.mode===Ci.TRIANGLE_STRIP||p.mode===Ci.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Nc(y,b):new St(y,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Ci.TRIANGLE_STRIP?m.geometry=sf(m.geometry,Yc):p.mode===Ci.TRIANGLE_FAN&&(m.geometry=sf(m.geometry,Xo));else if(p.mode===Ci.LINES)m=new Oc(y,b);else if(p.mode===Ci.LINE_STRIP)m=new Xa(y,b);else if(p.mode===Ci.LINE_LOOP)m=new Uc(y,b);else if(p.mode===Ci.POINTS)m=new Fc(y,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&LE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),_r(m,r),p.extensions&&ra(s,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&ra(s,d[0],r),d[0];let h=new Ln;r.extensions&&ra(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new qt($o.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Wa(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),_r(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let h=new Ee;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dc(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){let f=s.channels[d],g=s.samplers[f.sampler],y=f.target,p=y.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let h=d[0],f=d[1],g=d[2],y=d[3],p=d[4],m=[];for(let b=0,v=h.length;b<v;b++){let M=h[b],E=f[b],R=g[b],x=y[b],U=p[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let w=i._createAnimationTracks(M,E,R,x,U);if(w)for(let _=0;_<w.length;_++)m.push(w[_])}return new Vc(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,NE)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new zo:c.length>1?u=new Ln:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),_r(u,r),r.extensions&&ra(i,u,r),r.matrix!==void 0){let d=new Ee;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Ln;i.name&&(r.name=s.createUniqueName(i.name)),_r(r,i),i.extensions&&ra(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[h,f]of s.associations)(h instanceof Kn||h instanceof Mn)&&d.set(h,f);return u.traverse(h=>{let f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];br[r.path]===br.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(br[r.path]){case br.weights:c=Ms;break;case br.rotation:c=Yi;break;case br.position:case br.scale:c=As;break;default:switch(i.itemSize){case 1:c=Ms;break;case 2:case 3:default:c=As;break}break}let u=s.interpolation!==void 0?TE[s.interpolation]:Fr,d=this._getArrayFromAccessor(i);for(let h=0,f=l.length;h<f;h++){let g=new c(l[h]+"."+br[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Pf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Yi?Cf:Yu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function DE(n,e,t){let i=e.attributes,s=new xi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let u=Pf(fo[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){let y=Pf(fo[h.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new li;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function hv(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=Lf[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return yt.workingColorSpace!==fn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),_r(n,e),DE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?CE(n,e.targets,t):n})}var cs=Object.freeze({model:"Google Cardboard 2015",k1:.22,k2:.24,ipd:.064,fov:80}),ca=[0,2,7],kf=.55,ju=.14,fv=11.4,kE=1.42,mo=1.04,Ju=!1,Cl=!1,gt=null,fi=null,Hs=null,Li=null,ti=null,wn=null,rn=null,Ll=null,Pl=null,os=null,mv=1,Zu=!1,El=null,Ku=0,Qu=0,Mv=0,Of=[],Il=[],zt=()=>new D,yn=zt(),Hf=new D(ca[0],.9,ca[2]),ed=[],ls=[null,null],Tl=[null,null],Nl=[0,0],aa=[zt(),zt()],OE=[zt(),zt()],zi=[null,null],ua=[!1,!1],Nf=[zt(),zt()],wr=null,gv=[0,0],UE=0,ht={cs:1,T:null,n:0,mn:[0,0,0],d:[1,1,1],st:null,id:null,seen:null,stamp:0},Tt=[0,0,0],Ge={x:0,y:0,z:0,d:0,nx:0,ny:1,nz:0,fx:0,fy:1,fz:0};function FE(n){let e=n.length/9|0;ht.T=n,ht.n=e;let t=[1e9,1e9,1e9],i=[-1e9,-1e9,-1e9];for(let c=0;c<n.length;c+=3)for(let u=0;u<3;u++){let d=n[c+u];d<t[u]&&(t[u]=d),d>i[u]&&(i[u]=d)}ht.mn=t,ht.d=[0,1,2].map(c=>Math.max(1,Math.ceil((i[c]-t[c])/ht.cs)+1));let s=ht.d[0]*ht.d[1]*ht.d[2],r=new Int32Array(s+1),a=ht.cs,o=c=>{let u=[1e9,1e9,1e9,-1e9,-1e9,-1e9];for(let d=0;d<3;d++)for(let h=0;h<3;h++){let f=n[c*9+d*3+h];f<u[h]&&(u[h]=f),f>u[h+3]&&(u[h+3]=f)}return[0,1,2].map(d=>[Math.floor((u[d]-t[d])/a),Math.floor((u[d+3]-t[d])/a)])},l=null;for(let c=0;c<2;c++){if(c===1){for(let u=0;u<s;u++)r[u+1]+=r[u];ht.st=r.slice(),ht.id=new Int32Array(r[s]),l=r.slice()}for(let u=0;u<e;u++){let d=o(u);for(let h=d[2][0];h<=d[2][1];h++)for(let f=d[1][0];f<=d[1][1];f++)for(let g=d[0][0];g<=d[0][1];g++){let y=(h*ht.d[1]+f)*ht.d[0]+g;c===0?r[y+1]++:ht.id[l[y]++]=u}}}ht.seen=new Int32Array(e)}function BE(n,e,t,i,s,r,a,o,l,c,u,d){let h=a-i,f=o-s,g=l-r,y=c-i,p=u-s,m=d-r,b=n-i,v=e-s,M=t-r,E=h*b+f*v+g*M,R=y*b+p*v+m*M;if(E<=0&&R<=0){Tt[0]=i,Tt[1]=s,Tt[2]=r;return}let x=n-a,U=e-o,w=t-l,_=h*x+f*U+g*w,I=y*x+p*U+m*w;if(_>=0&&I<=_){Tt[0]=a,Tt[1]=o,Tt[2]=l;return}let N=E*I-_*R;if(N<=0&&E>=0&&_<=0){let z=E/(E-_);Tt[0]=i+z*h,Tt[1]=s+z*f,Tt[2]=r+z*g;return}let O=n-c,L=e-u,T=t-d,F=h*O+f*L+g*T,G=y*O+p*L+m*T;if(G>=0&&F<=G){Tt[0]=c,Tt[1]=u,Tt[2]=d;return}let q=F*R-E*G;if(q<=0&&R>=0&&G<=0){let z=R/(R-G);Tt[0]=i+z*y,Tt[1]=s+z*p,Tt[2]=r+z*m;return}let W=_*G-F*I;if(W<=0&&I-_>=0&&F-G>=0){let z=(I-_)/(I-_+(F-G));Tt[0]=a+z*(c-a),Tt[1]=o+z*(u-o),Tt[2]=l+z*(d-l);return}let J=1/(W+q+N),Q=q*J,re=N*J;Tt[0]=i+h*Q+y*re,Tt[1]=s+f*Q+p*re,Tt[2]=r+g*Q+m*re}function Vf(n,e,t,i){if(!ht.T)return!1;let s=ht.T,r=ht.cs,a=ht.mn,o=ht.d,l=i*i,c=!1,u=++ht.stamp,d=[0,1,2].map(g=>Math.max(0,Math.floor(([n,e,t][g]-i-a[g])/r))),h=[0,1,2].map(g=>Math.min(o[g]-1,Math.floor(([n,e,t][g]+i-a[g])/r)));for(let g=d[2];g<=h[2];g++)for(let y=d[1];y<=h[1];y++)for(let p=d[0];p<=h[0];p++){let m=(g*o[1]+y)*o[0]+p;for(let b=ht.st[m],v=ht.st[m+1];b<v;b++){let M=ht.id[b];if(ht.seen[M]===u)continue;ht.seen[M]=u;let E=M*9;BE(n,e,t,s[E],s[E+1],s[E+2],s[E+3],s[E+4],s[E+5],s[E+6],s[E+7],s[E+8]);let R=n-Tt[0],x=e-Tt[1],U=t-Tt[2],w=R*R+x*x+U*U;if(w<l){l=w,c=!0,Ge.x=Tt[0],Ge.y=Tt[1],Ge.z=Tt[2];let _=s[E+3]-s[E],I=s[E+4]-s[E+1],N=s[E+5]-s[E+2],O=s[E+6]-s[E],L=s[E+7]-s[E+1],T=s[E+8]-s[E+2];Ge.fx=I*T-N*L,Ge.fy=N*O-_*T,Ge.fz=_*L-I*O;let F=Math.hypot(Ge.fx,Ge.fy,Ge.fz)||1;Ge.fx/=F,Ge.fy/=F,Ge.fz/=F}}}if(!c)return!1;let f=Math.sqrt(l);return Ge.d=f,f>1e-5?(Ge.nx=(n-Ge.x)/f,Ge.ny=(e-Ge.y)/f,Ge.nz=(t-Ge.z)/f):(Ge.nx=Ge.fx,Ge.ny=Ge.fy,Ge.nz=Ge.fz),!0}function yv(n,e,t,i,s){if(!ht.T)return null;let r=ht.T,a=ht.cs,o=ht.mn,l=ht.d,c=Math.floor((n-o[0])/a),u=Math.floor((t-o[2])/a);if(c<0||u<0||c>=l[0]||u>=l[2])return null;let d=e,h=e+i*s,f=Math.floor((d-o[1])/a),g=Math.floor((h-o[1])/a),y=null;for(;i<0?f>=Math.max(g,0):f<=Math.min(g,l[1]-1);f+=i){if(f<0||f>=l[1])continue;let p=(u*l[1]+f)*l[0]+c;for(let m=ht.st[p],b=ht.st[p+1];m<b;m++){let v=ht.id[m]*9,M=r[v]-n,E=r[v+2]-t,R=r[v+3]-n,x=r[v+5]-t,U=r[v+6]-n,w=r[v+8]-t,_=(x-w)*(M-U)+(U-R)*(E-w);if(Math.abs(_)<1e-9)continue;let I=((x-w)*(0-U)+(U-R)*(0-w))/_,N=((w-E)*(0-U)+(M-U)*(0-w))/_,O=1-I-N;if(I<0||N<0||O<0)continue;let L=I*r[v+1]+N*r[v+4]+O*r[v+7];if(!((L-e)*i<=0||Math.abs(L-e)>s)&&(!y||Math.abs(L-e)<Math.abs(y.y-e))){let T=r[v+3]-r[v],F=r[v+4]-r[v+1],G=r[v+5]-r[v+2],q=r[v+6]-r[v],W=r[v+7]-r[v+1],J=r[v+8]-r[v+2],Q=G*q-T*J,re=Math.hypot(F*J-G*W,Q,T*W-F*q)||1;y={y:L,ny:Q/re}}}}return y}function zE(n,e,t,i){let s=(r,a)=>{let o=yv(r,e+1.5,a,-1,8);if(!o)return null;let l=Math.abs(o.ny)>.6?o:null;if(!l)return null;let c=yv(r,l.y+.05,a,1,3);if(c&&Math.abs(c.y-l.y)<2.2)return null;let u=l.y+i+.05;return Vf(r,u,a,i-.02)?null:[r,u,a]};for(let r=0;r<=8;r++)for(let a=0;a<(r?16:1);a++){let o=a/16*6.2832,l=n+Math.cos(o)*r*.5,c=t+Math.sin(o)*r*.5,u=s(l,c);if(u)return u}return null}var HE=(n,e)=>{let t=n.attributes[e];if(t&&(t.isInterleavedBufferAttribute||!(t.array instanceof Float32Array))){let i=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)i[s*t.itemSize+r]=t.getComponent(s,r);n.setAttribute(e,new It(i,t.itemSize))}};function VE(n){let e=0,t=0;for(let u of n)e+=u.attributes.position.count,t+=u.index?u.index.count:u.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),a=new Uint32Array(t),o=0,l=0;for(let u of n){let d=u.attributes.position.count;if(i.set(u.attributes.position.array,o*3),s.set(u.attributes.normal.array,o*3),r.set(u.attributes.uv.array,o*2),u.index){let h=u.index.array;for(let f=0;f<h.length;f++)a[l++]=h[f]+o}else for(let h=0;h<d;h++)a[l++]=o+h;o+=d}let c=new Vn;return c.setAttribute("position",new It(i,3)),c.setAttribute("normal",new It(s,3)),c.setAttribute("uv",new It(r,2)),c.setIndex(new It(a,1)),c}function Uf(n){return n?(n.generateMipmaps=!1,n.minFilter=cn,n.magFilter=cn,n.anisotropy=1,n):null}function GE(n){var o;n.updateMatrixWorld(!0);let e=[];n.traverse(l=>{l.isMesh&&l.geometry.attributes.position&&e.push(l)});let t=0;e.forEach(l=>{let c=l.geometry;t+=Math.floor((c.index?c.index.count:c.attributes.position.count)/3)});let i=new Float32Array(t*9),s=0,r=new Map,a=new Map;for(let l of e){let c=Array.isArray(l.material)?l.material[0]:l.material,u=l.geometry.clone();u.applyMatrix4(l.matrixWorld);let d=u.attributes.position,h=u.index,f=Math.floor((h?h.count:d.count)/3)*3;for(let p=0;p<f;p++){let m=h?h.getX(p):p;i[s++]=d.getX(m),i[s++]=d.getY(m),i[s++]=d.getZ(m)}u.attributes.normal||u.computeVertexNormals(),u.attributes.uv||u.setAttribute("uv",new It(new Float32Array(d.count*2),2));for(let p of Object.keys(u.attributes))p!=="position"&&p!=="normal"&&p!=="uv"&&u.deleteAttribute(p);["position","normal","uv"].forEach(p=>HE(u,p));let g=`${c.map?((o=c.map.source)==null?void 0:o.uuid)||c.map.uuid:"nomap"}|${c.color?c.color.getHexString():"fff"}|${c.transparent?1:0}|${c.alphaTest||0}|${c.side||0}`,y=a.get(g);y||(y=new Ya({map:Uf(c.map),color:c.color?c.color.clone():16777215,transparent:c.transparent,opacity:c.opacity,alphaTest:c.alphaTest,side:c.side,emissive:c.emissive?c.emissive.clone():0,emissiveMap:Uf(c.emissiveMap)}),a.set(g,y)),r.has(g)||r.set(g,{m:y,l:[]}),r.get(g).l.push(u),l.geometry.dispose()}for(let l of r.values()){let c=l.l,u=null;try{let h=VE(c);h.computeBoundingSphere(),u=new St(h,l.m)}catch{}(u?[u]:c.map(h=>new St(h,l.m))).forEach(h=>{h.matrixAutoUpdate=!1,h.frustumCulled=!0,ti.add(h)}),u&&c.forEach(h=>h.dispose())}return i.subarray(0,s)}function WE(n){ed.length=0,n.updateMatrixWorld(!0);let e=[];if(n.traverse(T=>{T.isSkinnedMesh&&e.push(T)}),!e.length)return;let t=e.reduce((T,F)=>F.geometry.attributes.position.count>T.geometry.attributes.position.count?F:T);e.forEach(T=>{T!==t&&(T.visible=!1)});let i=t.skeleton.bones,s=T=>T.name.toLowerCase().replace(/[^a-z]/g,""),r=T=>i.find(F=>T.test(s(F))),a={ur:r(/^upperarmr$/),lr:r(/^lowerarmr$/),hr:r(/^wristr$/),ul:r(/^upperarml$/),ll:r(/^lowerarml$/),hl:r(/^wristl$/),body:r(/^main$/),head:r(/^head$/)},o={};["r","l"].forEach(T=>{o[T]={pinky:r(new RegExp("^pinkyf?"+T+"$")),index:r(new RegExp("^pointerf?"+T+"$")),thumb:r(new RegExp("^thumb"+T+"$"))}});let l=new Set([a.ur,a.lr,a.hr,a.ul,a.ll,a.hl]);for(let T in o)for(let F in o[T])l.add(o[T][F]);let c=i.map(T=>l.has(T)),u=t.geometry,d=u.attributes.skinIndex,h=u.attributes.skinWeight,f=u.attributes.position.count,g=u.index,y=new Uint8Array(f);for(let T=0;T<f;T++){let F=0;for(let G=0;G<4;G++)c[d.getComponent(T,G)]&&(F+=h.getComponent(T,G));y[T]=F>.45?1:0}let p=[],m=g?g.count:f;for(let T=0;T<m;T+=3){let F=g?g.getX(T):T,G=g?g.getX(T+1):T+1,q=g?g.getX(T+2):T+2;y[F]&&y[G]&&y[q]&&p.push(F,G,q)}p.length>90&&(u.clearGroups(),u.setIndex(p));let b=Array.isArray(t.material)?t.material[0]:t.material;t.material=new Ya({map:Uf(b.map),color:b.color?b.color.clone():16777215,emissive:2236962}),t.frustumCulled=!1;let v=T=>T.getWorldPosition(zt()),M=v(a.ur),E=v(a.ul),R=M.clone().sub(E).normalize(),x=v(a.head).sub(v(a.body)).normalize();x.addScaledVector(R,-x.dot(R)).normalize();let U=new D().crossVectors(R,x),w=new nt().setFromRotationMatrix(new Ee().makeBasis(R,x,U)).invert(),_=M.distanceTo(v(a.lr))+v(a.lr).distanceTo(v(a.hr)),I=mo/_,N=M.clone().add(E).multiplyScalar(.5),O={};["r","l"].forEach(T=>{let F={};for(let J in o[T]){let Q=o[T][J];F[J]=Q?[{b:Q,bind:Q.quaternion.clone(),pos:Q.getWorldPosition(zt()),wq:Q.getWorldQuaternion(new nt),Al:zt(),cur:0}]:[]}let G=T==="r"?a.hr:a.hl,q=G.getWorldPosition(zt()),W=q.clone().sub(N).dot(R)>0?1:-1;O[T]={hb:G,hbBind:G.quaternion.clone(),hpos:q,hwq:G.getWorldQuaternion(new nt),ch:F,nRest:R.clone().multiplyScalar(-W),qs:null}});function L(T,F){let G=T.nRest.clone().multiplyScalar(F),q=[T.ch.index[0],T.ch.pinky[0]].filter(Boolean).map(z=>z.pos),J=(q.length?q.reduce((z,X)=>z.add(X),zt()).multiplyScalar(1/q.length):T.hpos.clone().addScaledVector(x,-.1)).sub(T.hpos).normalize(),Q=G.clone().addScaledVector(J,-G.dot(J)).normalize(),re=T.hwq.clone().invert();T.fl=J.clone().applyQuaternion(re),T.nl=Q.clone().applyQuaternion(re),T.QlInv=new nt().setFromRotationMatrix(new Ee().makeBasis(T.fl,Q.clone().applyQuaternion(re),new D().crossVectors(T.fl,T.nl))).invert();for(let z in T.ch)T.ch[z].forEach(X=>{X.Al.crossVectors(J,Q).normalize().applyQuaternion(X.wq.clone().invert())})}L(O.r,mv),L(O.l,mv),os&&os.parent&&os.parent.remove(os),os=new Ln,os.quaternion.copy(w),os.scale.setScalar(I),os.add(n),os.position.set(0,-.32,.1).sub(N.clone().applyQuaternion(w).multiplyScalar(I)),rn.add(os),rn.updateMatrixWorld(!0),[[a.ur,a.lr,a.hr,1],[a.ul,a.ll,a.hl,-1]].forEach(([T,F,G,q])=>{let W=rn.worldToLocal(v(T));ed.push({s:T,e:F,h:G,side:q,bs:T.quaternion.clone(),be:F.quaternion.clone(),sp:W,reach:mo*.97,axis:G.position.clone().normalize(),info:O[q>0?"r":"l"]})})}function vv(n,e,t,i){n.quaternion.copy(e),n.updateWorldMatrix(!0,!0);let s=n.getWorldPosition(zt()),r=t.getWorldPosition(zt()).sub(s).normalize(),a=i.clone().sub(s).normalize(),o=n.getWorldQuaternion(new nt),l=new nt().setFromUnitVectors(r,a),c=n.parent.getWorldQuaternion(new nt).invert();n.quaternion.copy(c.multiply(l).multiply(o)),n.updateWorldMatrix(!1,!0)}function qE(n,e){if(!n||!n.hb)return;let t=n.hb;if(t.quaternion.copy(n.hbBind),e){t.updateWorldMatrix(!0,!1);let s=t.getWorldQuaternion(new nt).clone().invert(),r=rn.getWorldQuaternion(new nt),a=e.f.clone().applyQuaternion(r).applyQuaternion(s).normalize(),o=e.n.clone().applyQuaternion(r).applyQuaternion(s);if(o.addScaledVector(a,-o.dot(a)),o.lengthSq()>1e-4){o.normalize(),n.nl&&o.dot(n.nl)<-.15&&o.negate();let l=new nt().setFromRotationMatrix(new Ee().makeBasis(a,o,new D().crossVectors(a,o))).multiply(n.QlInv);l.slerp(new nt,.35),n.qs?n.qs.slerp(l,.22):n.qs=l.clone(),t.quaternion.multiply(n.qs)}for(let l in n.ch){let c=Math.max(0,Math.min(.85,e.c[l]??0));n.ch[l].forEach(u=>{u.cur=u.cur*.72+c*.28,u.b.quaternion.copy(u.bind).multiply(new nt().setFromAxisAngle(u.Al,u.cur*.95))})}}else for(let i in n.ch)n.ch[i].forEach(s=>{s.cur*=.85,s.b.quaternion.copy(s.bind).multiply(new nt().setFromAxisAngle(s.Al,s.cur*1.15))});t.updateWorldMatrix(!1,!0)}function xv(n,e,t){n.s.quaternion.copy(n.bs),n.e.quaternion.copy(n.be),n.s.updateWorldMatrix(!0,!0);let i=n.s.getWorldPosition(zt()),s=n.e.getWorldPosition(zt()),r=n.h.getWorldPosition(zt()),a=i.distanceTo(s),o=s.distanceTo(r),l=e.clone().sub(i),c=Math.min(Math.max(l.length(),Math.abs(a-o)+.01),(a+o)*.995);l.normalize();let u=Math.max(-1,Math.min(1,(a*a+c*c-o*o)/(2*a*c))),d=rn.getWorldQuaternion(new nt),h=new D(n.side*.45,-1,.35).normalize().applyQuaternion(d),f=h.clone().addScaledVector(l,-h.dot(l));f.lengthSq()<1e-4&&f.set(0,-1,0),f.normalize();let g=i.clone().addScaledVector(l,a*u).addScaledVector(f,a*Math.sqrt(Math.max(0,1-u*u)));if(vv(n.s,n.bs,n.e,g),vv(n.e,n.be,n.h,e),s=n.e.getWorldPosition(zt()),r=n.h.getWorldPosition(zt()),e.clone().sub(r).lengthSq()>1e-5){let p=n.e.parent.getWorldQuaternion(new nt).invert(),m=n.e.getWorldQuaternion(new nt),b=new nt().setFromUnitVectors(r.sub(s).normalize(),e.clone().sub(s).normalize());n.e.quaternion.copy(p.multiply(b).multiply(m)),n.e.updateWorldMatrix(!1,!0)}qE(n.info,t)}var oa=(n,e)=>new D(n[e].x-.5,.5-n[e].y,-(n[e].z||0));function bv(n,e){let t=oa(n,0),i=oa(n,5),s=oa(n,9),r=oa(n,17),a=s.clone().sub(t).normalize(),o=i.clone().sub(t),l=r.clone().sub(t),c=e?new D().crossVectors(l,o):new D().crossVectors(o,l);c.addScaledVector(a,-c.dot(a)).normalize();let u=t.distanceTo(s)||.1,d=(f,g)=>Math.max(0,Math.min(1,1.55-oa(n,f).distanceTo(t)/(oa(n,g).distanceTo(t)||u)*.72)),h=Math.max(0,Math.min(1,1.4-oa(n,4).distanceTo(r)/(i.distanceTo(r)||u)*.75));return{f:a,n:c,c:{index:d(8,5),pinky:d(20,17),thumb:h}}}var Av="nextvr.gorilla.coins",Yn=(()=>{try{let n=localStorage.getItem(Av);if(n!==null&&n!==""){let e=Number(n);if(Number.isFinite(e)&&e>=0)return Math.floor(e)}}catch{}return 100})(),kn=null,Sr=null,Ff=null,go=null,Bf=-1,Df=0;function zf(n=1){let e=Math.max(0,Math.floor(Yn+n));if(e===Yn)return Yn;Yn=e;try{localStorage.setItem(Av,String(Yn))}catch{}return Ev(),gt&&(gt.dataset.gorillaRightArmCoins=String(Yn)),typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Yn),Yn}function Ev(){if(!Ff||!Sr||Bf===Yn)return;Bf=Yn;let n=Ff,e=Sr.width,t=Sr.height;n.clearRect(0,0,e,t),n.fillStyle="#0b1222",n.beginPath(),n.roundRect?n.roundRect(4,4,e-8,t-8,22):n.rect(4,4,e-8,t-8),n.fill(),n.lineWidth=5,n.strokeStyle="#facc15",n.stroke();let i=50,s=t/2,r=28,a=n.createRadialGradient(i-8,s-8,4,i,s,r);a.addColorStop(0,"#fef08a"),a.addColorStop(.55,"#facc15"),a.addColorStop(1,"#ca8a04"),n.fillStyle=a,n.beginPath(),n.arc(i,s,r,0,Math.PI*2),n.fill(),n.lineWidth=3,n.strokeStyle="#fef9c3",n.stroke(),n.fillStyle="#713f12",n.font="900 26px Inter, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("$",i,s+1),n.textAlign="left",n.fillStyle="#fde047",n.font="800 16px Inter, system-ui, sans-serif",n.fillText("MOEDAS",92,34),n.fillStyle="#ffffff",n.font="900 36px Inter, system-ui, sans-serif",n.fillText(String(Yn),92,74),go&&(go.needsUpdate=!0)}function XE(){if(kn)return kn;Sr=document.createElement("canvas"),Sr.width=256,Sr.height=112,Ff=Sr.getContext("2d"),go=new Bc(Sr),go.minFilter=cn,go.magFilter=cn,Bf=-1,Ev(),kn=new Ln,kn.name="gorilla-right-arm-coin-counter";let n=new un({color:1976635}),e=new St(new tr(.088,.044,.072),n);e.position.set(0,0,-.02),kn.add(e);let t=new un({color:15381256}),i=new St(new tr(.148,.068,.012),t);i.position.set(0,0,-.004),kn.add(i);let s=new un({map:go,transparent:!0,depthTest:!0,side:zn}),r=new St(new Pn(.14,.062),s);return r.position.set(0,0,.004),kn.add(r),typeof window<"u"&&(window.__gorillaRightArmCoinCounter={coins:Yn,attachedTo:"right-arm",side:1,visible:!0}),kn}function Tv(){if(!kn||!rn)return;let n=ed[0],e=Gf(),t=new D(0,1,0).applyQuaternion(rn.getWorldQuaternion(new nt));if(n&&n.e&&n.h){let i=n.e.getWorldPosition(zt()),s=n.h.getWorldPosition(zt()),r=i.clone().lerp(s,.72),a=e.clone().sub(r);a.lengthSq()>1e-5&&(a.normalize(),r.addScaledVector(a,.065)),kn.position.copy(r),kn.up.copy(t),kn.lookAt(e)}else{let i=rn.localToWorld(new D(.24,-.22,-.44));kn.position.copy(i),kn.up.copy(t),kn.lookAt(e)}typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Yn,window.__gorillaRightArmCoinCounter.position=kn.position.toArray())}function $E(n,e){if(!e||e.length<21||(n==null?void 0:n.physicalSide)==="right")return!0;if((n==null?void 0:n.physicalSide)==="left")return!1;if(e[9].x>=.54)return!0;if(e[9].x<=.46)return!1;if(e[9].y<e[0].y&&Math.abs(e[5].x-e[17].x)>.022)return e[5].x<e[17].x;let t=String((n==null?void 0:n.id)||(n==null?void 0:n.handedness)||"").toLowerCase();return typeof(n==null?void 0:n.left)=="boolean"?n.left===!0:t.includes("left")||t==="l"?!0:t.includes("right")||t==="r"?!1:e[9].x>=.5}function YE(n){Tl[0]=null,Tl[1]=null;let e=[];for(let t=0;t<Si.length;t++){let i=Si[t];if(!i||!i.points||i.points.length<63)continue;let s=i.points,r=new Array(21);for(let a=0;a<21;a++)r[a]={x:s[a*3],y:s[a*3+1],z:s[a*3+2]||0};e.push({th:i,lm:r})}if(e.length>=2){e.sort((t,i)=>t.lm[9].x-i.lm[9].x);for(let t=0;t<2;t++){let{lm:i}=e[t],s=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);ls[t]={x:i[9].x,y:i[9].y,s,ori:bv(i,t===1),t:n},Tl[t]=i}}else if(e.length===1){let{th:t,lm:i}=e[0],r=$E(t,i)?1:0,a=1-r,o=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);ls[r]={x:i[9].x,y:i[9].y,s:o,ori:bv(i,r===1),t:n},Tl[r]=i,ls[a]=null,Tl[a]=null,ua[a]=!1,zi[a]=null}if(wr&&n-wr.t<450){let t=wr.idx;ls[t]={x:wr.x,y:wr.y,s:wr.s,ori:null,t:n}}}var Gf=()=>rn.getWorldPosition(zt());function td(){wn&&(wn.position.copy(Hf),yn.set(0,0,0),ua[0]=!1,ua[1]=!1,zi[0]=null,zi[1]=null,Nl[0]=0,Nl[1]=0,wn.updateMatrixWorld(!0))}var Rl=()=>new Promise(n=>setTimeout(n,16));async function _v(n){let e=await fetch(n);if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.arrayBuffer(),i=new Uint8Array(t);if(i.length>=4&&i[0]===103&&i[1]===108&&i[2]===84&&i[3]===70)return t;let s=new DecompressionStream("gzip"),r=s.writable.getWriter();return r.write(i),r.close(),await new Response(s.readable).arrayBuffer()}function wv(n,e){return new Promise((t,i)=>n.parse(e,"",t,i))}function la(n,e){fi&&(fi.querySelectorAll("[data-gorilla-splash-fill]").forEach(t=>{t.style.width=`${n}%`}),e&&fi.querySelectorAll("[data-gorilla-splash-step]").forEach(t=>{t.textContent=e}))}function jE(){if(ti)return;ti=new qa,ti.background=new Ie(8898815),ti.fog=new Ic(8898815,.0042),ti.add(new Gc(14677247,4877115,.98));let n=new Vr(16773846,.92);n.position.set(30,60,20),ti.add(n);let e=new Vr(10875900,.32);e.position.set(-28,34,-22),ti.add(e),wn=new Ln,ti.add(wn),rn=new qt(cs.fov,1200/2/800,.05,380),rn.position.set(0,0,0),wn.add(rn);let t=cs.ipd*.5;Ll=new qt(cs.fov,1200/2/800,.05,380),Ll.position.set(-t,0,0),Pl=new qt(cs.fov,1200/2/800,.05,380),Pl.position.set(t,0,0),rn.add(Ll,Pl);let i=XE();i&&!i.parent&&ti.add(i),Tv(),Il.length=0;let s=new zc(.24,.24,.055,18);s.rotateX(Math.PI*.5);let r=new Ya({color:16498468,emissive:9584654}),a=[[0,1.35,4.8],[-2.2,1.45,3.6],[2.2,1.45,3.6],[-3.8,1.85,.8],[3.8,1.85,.8],[0,2.2,-2.5],[-1.8,1.6,8.8],[1.8,1.6,8.8]];for(let o=0;o<a.length;o++){let[l,c,u]=a[o],d=new St(s,r);d.position.set(l,c,u),d.userData={baseY:c,phase:o*.85,cooldownUntil:0},ti.add(d),Il.push(d)}try{Li=new zr({canvas:Hs,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),Li.setPixelRatio(1),Li.setSize(896,560,!1),Li.setScissorTest(!0)}catch{Li=null}}async function ZE(){if(!Zu){if(El)return El;if(jE(),typeof window<"u"&&window.__gorillaFastTest){Zu=!0;return}return El=(async()=>{var n;try{la(18,"Descompactando mapa da floresta 3D..."),await Rl();let e=new $u;e.textureLoader=new ja((n=e.options)==null?void 0:n.manager);let[t,i]=await Promise.all([_v("./gorilla-map.task"),_v("./gorilla-rig.task")]);la(45,"Carregando texturas e geometria..."),await Rl();let[s,r]=await Promise.all([wv(e,t),wv(e,i)]);la(68,"Otimizando malhas 3D (Lambert merge)..."),await Rl();let a=GE(s.scene);la(84,"Construindo grade f\xEDsica de colis\xE3o..."),await Rl(),FE(a);let o=zE(ca[0],ca[1],ca[2],kf)||[ca[0],.9,ca[2]];Hf.set(o[0],o[1],o[2]),la(94,"Ativando bra\xE7os Gorilla 3D..."),await Rl(),WE(r.scene),td(),Zu=!0,la(100,"Pronto! Entrando no Gorilla Tag...")}catch(e){console.warn("Gorilla Tag load fallback:",e),Zu=!0}finally{El=null}})(),El}}function KE(){if(gt)return;let n=document.getElementById("hud")||document.body;gt=document.createElement("div"),gt.id="gorilla-overlay",gt.dataset.testid="gorilla-overlay",gt.dataset.cardboardLenses="2015",gt.dataset.gorillaStage="idle",gt.dataset.gorillaRightArmCoins=String(Yn),gt.dataset.lensModel=cs.model,gt.dataset.lensK1=String(cs.k1),gt.dataset.lensK2=String(cs.k2),gt.style.cssText=["position:fixed","left:0","top:0","width:1200px","height:800px","z-index:9997","display:none","background:#050811","overflow:hidden","touch-action:none"].join(";"),Hs=document.createElement("canvas"),Hs.id="gorilla-canvas",Hs.width=896,Hs.height=560,Hs.style.cssText="position:absolute;left:0;top:0;width:1200px;height:800px;display:block;",gt.appendChild(Hs);let e=document.createElement("div");e.className="gorilla-cardboard-divider",e.style.cssText=["position:absolute","left:599px","top:0","width:2px","height:800px","background:rgba(255,255,255,.22)","pointer-events:none","z-index:4"].join(";"),gt.appendChild(e);let t=(r,a)=>{let o=document.createElement("div");return o.style.cssText=`position:absolute;left:${r+120}px;top:12px;width:360px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:6;pointer-events:auto;font-family:Inter,system-ui,sans-serif`,o.innerHTML=`
      <button type="button" data-gorilla-act="jump" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(251,191,36,.45);background:rgba(120,53,15,.82);color:#fde68a;font:700 10px Inter,sans-serif;cursor:pointer">Salto</button>
      <button type="button" data-gorilla-act="spawn" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Spawn</button>
      <button type="button" data-gorilla-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-gorilla-act="exit" ${a?'data-gorilla-exit="1"':""} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(153,27,27,.82);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `,o};gt.appendChild(t(0,!0)),gt.appendChild(t(600,!1)),fi=document.createElement("div"),fi.id="gorilla-splash",fi.dataset.testid="gorilla-splash",fi.style.cssText=["position:absolute","left:0","top:0","width:1200px","height:800px","z-index:10","display:none","flex-direction:row","align-items:stretch","justify-content:stretch","background:radial-gradient(circle at 50% 38%, #1e293b 0%, #090d16 70%, #030712 100%)","color:#f8fafc","font-family:Inter,system-ui,sans-serif","text-align:center","user-select:none"].join(";");let i=r=>`
    <div style="width:600px;height:800px;display:flex;align-items:center;justify-content:center;${r?"border-right:1px solid rgba(255,255,255,.15)":""}">
      <div style="padding:26px 32px;border-radius:24px;background:rgba(15,23,42,.90);border:1px solid rgba(56,189,248,.38);box-shadow:0 24px 64px rgba(0,0,0,.72);display:flex;flex-direction:column;align-items:center;gap:12px;max-width:460px">
        <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:88px;height:88px;border-radius:20px;object-fit:cover;box-shadow:0 12px 32px rgba(249,115,22,.45);border:2px solid rgba(255,255,255,.22)">
        <div class="gorilla-splash-title" ${r?'data-gorilla-entering="1"':""} style="font-size:23px;font-weight:800;letter-spacing:.02em;color:#f8fafc">Entrando no Gorilla Tag</div>
        <div class="gorilla-splash-sub" style="font-size:11.5px;font-weight:600;color:#94a3b8;letter-spacing:.08em;text-transform:uppercase">Lentes ${cs.model} \xB7 Hand Tracking</div>
        <div data-gorilla-splash-step style="font-size:11.5px;font-weight:600;color:#38bdf8;margin-top:2px">Inicializando floresta 3D...</div>
        <div style="width:220px;height:7px;border-radius:999px;background:rgba(148,163,184,.2);overflow:hidden;margin-top:4px">
          <div data-gorilla-splash-fill style="width:15%;height:100%;border-radius:999px;background:linear-gradient(90deg,#f97316,#38bdf8);transition:width .2s ease"></div>
        </div>
      </div>
    </div>
  `;fi.innerHTML=i(!0)+i(!1),gt.appendChild(fi),gt.addEventListener("click",r=>{let a=r.target.closest("[data-gorilla-act]");if(!a)return;let o=a.dataset.gorillaAct;if(o==="exit")Cv();else if(o==="spawn")td();else if(o==="jump"){let l=new D(0,0,-1).applyQuaternion(rn?rn.getWorldQuaternion(new nt):new nt);l.y=0,l.lengthSq()>1e-4&&l.normalize(),yn.x+=l.x*4.2,yn.z+=l.z*4.2,yn.y=Math.max(yn.y,4.8),zf(1)}else o==="recenter"&&(Mv=new ci().setFromQuaternion(me.quaternion,"YXZ").y)});let s=r=>{let a=gt.getBoundingClientRect();if(!a.width||!a.height)return;let o=Math.max(0,Math.min(1,(r.clientX-a.left)/a.width)),l=Math.max(0,Math.min(1,(r.clientY-a.top)/a.height)),c=o>=.5?(o-.5)*2:o*2;wr={idx:c>=.5?1:0,x:c,y:l,s:r.buttons?.12:.18,t:performance.now()}};gt.addEventListener("pointerdown",s),gt.addEventListener("pointermove",r=>{r.buttons&&s(r)}),gt.addEventListener("pointerup",()=>{wr=null}),n.appendChild(gt)}function Sv(){let n=Gf();for(let e=0;e<3&&Vf(n.x,n.y,n.z,kf);e++){let t=kf-Ge.d;wn.position.x+=Ge.nx*t,wn.position.y+=Ge.ny*t,wn.position.z+=Ge.nz*t,n.x+=Ge.nx*t,n.y+=Ge.ny*t,n.z+=Ge.nz*t;let i=yn.x*Ge.nx+yn.y*Ge.ny+yn.z*Ge.nz;i<0&&(yn.x-=Ge.nx*i,yn.y-=Ge.ny*i,yn.z-=Ge.nz*i,Ge.ny>.5&&(yn.x*=.88,yn.z*=.88))}n.y<Hf.y-18&&td()}function Rv(n){if(!Ju)return;Ku=requestAnimationFrame(Rv);let e=Math.min((n-(Qu||n))/1e3,.04)||.016;if(Qu=n,!ti||!wn||!rn)return;let t=new ci().setFromQuaternion(me.quaternion,"YXZ");rn.quaternion.setFromEuler(new ci(t.x,t.y-Mv,t.z,"YXZ")),YE(n);let i=Xt.consumeStepDelta();i.lengthSq()>1e-6&&(wn.position.x+=i.x,wn.position.z+=i.z,wn.position.y+=i.y*.25),yn.y-=9.8*e,yn.multiplyScalar(1-.14*e),wn.position.addScaledVector(yn,e),wn.updateMatrixWorld(!0),Sv();for(let s=0;s<2;s++){ls[s]&&n-ls[s].t>220&&(ls[s]=null);let r=ls[s],a=ed[s?0:1];if(!r){if(ua[s]=!1,zi[s]=null,Nl[s]=0,a){let g=new D(s?.24:-.24,-.26,-.46);xv(a,rn.localToWorld(g),null)}continue}Nl[s]++;let o=a?a.sp:zt(),l=zt();if(l.set((r.x-.5)*1.65,(.5-r.y)*1.8-.34,-Math.min(.95,Math.max(.25,.09/Math.max(r.s,.035)))),zi[s]){let g=l.clone().sub(zi[s]);g.length()>.32&&l.copy(zi[s]).addScaledVector(g.normalize(),.32),l.lerp(zi[s],.24)}let c=l.clone().sub(o);c.length()>mo*.97&&l.copy(o).addScaledVector(c.setLength(mo*.97),1),OE[s].copy(l);let u=rn.localToWorld(l.clone());if(Nl[s]>=1&&Vf(u.x,u.y,u.z,ju)){let g=new D(Ge.x+Ge.nx*ju,Ge.y+Ge.ny*ju,Ge.z+Ge.nz*ju);if(!ua[s])ua[s]=!0,Nf[s].copy(g);else{let y=Nf[s].clone().sub(u),p=y.length();if(p>.001){p>.28&&y.multiplyScalar(.28/p),wn.position.add(y),Df+=y.length(),Df>=.38&&(Df=0,zf(1));let m=y.clone().multiplyScalar(kE/Math.max(e,.01));yn.lerp(m,.56),yn.length()>fv&&yn.setLength(fv),wn.updateMatrixWorld(!0),Sv()}}aa[s].copy(Nf[s])}else ua[s]=!1,aa[s].copy(u);let h=rn.worldToLocal(aa[s].clone()),f=h.clone().sub(o);f.length()>mo*.97&&(h.copy(o).addScaledVector(f.setLength(mo*.97),1),aa[s].copy(rn.localToWorld(h))),zi[s]||(zi[s]=zt()),zi[s].copy(h),a&&xv(a,aa[s],r.ori)}if(Il.length){let s=Gf();for(let r=0;r<Il.length;r++){let a=Il[r],o=a.userData;if(n<o.cooldownUntil){a.visible=!1;continue}a.visible=!0,a.rotation.y+=e*2.4,a.position.y=o.baseY+Math.sin(n*.003+o.phase)*.08;let l=a.position.distanceTo(s),c=ls[0]?a.position.distanceTo(aa[0]):99,u=ls[1]?a.position.distanceTo(aa[1]):99;(l<.85||c<.45||u<.45)&&(o.cooldownUntil=n+4500,a.visible=!1,zf(5))}}if(Tv(),Li&&Ll&&Pl){wn.updateMatrixWorld(!0);let s=Hs.width,r=Hs.height,a=s>>1;Li.setViewport(0,0,a,r),Li.setScissor(0,0,a,r),Li.render(ti,Ll),Li.setViewport(a,0,a,r),Li.setScissor(a,0,a,r),Li.render(ti,Pl)}}function yo(){var t,i,s,r,a,o;if(KE(),Cl||Ju)return;Cl=!0,window.__gorillaStereoOverlay=!0,window.__gorillaExit=Cv,window.__gorillaOnHands=null,gt&&(gt.dataset.gorillaRightArmCoins=String(Yn)),S.handsOn=!0,Ki().catch(()=>{});try{(i=(t=window.NativeXR)==null?void 0:t.handVisuals)==null||i.call(t,!1)}catch{}Of=he.map(l=>({win:l,hidden:!!l.hidden}));for(let l of[...he])typeof l.setHidden=="function"?l.setHidden(!0):l.shell&&(l.shell.style.display="none");yr(!0),Bt(!1),Yt(!0),(r=(s=ie).invalidate)==null||r.call(s),(o=(a=ie).render)==null||o.call(a,Pe,me),gt.dataset.gorillaStage="entering",gt.style.display="block",fi.style.display="flex",la(15,"Iniciando Gorilla Tag...");let n=typeof window<"u"&&!!window.__gorillaFastTest,e=new Promise(l=>setTimeout(l,n?240:1200));Promise.all([ZE(),e]).then(()=>{Cl&&(Cl=!1,Ju=!0,gt.dataset.gorillaStage="playing",fi.style.display="none",td(),Qu=performance.now(),Rv(Qu))})}function Cv(){var n,e,t,i,s,r;Cl=!1,Ju=!1,window.__gorillaStereoOverlay=!1,window.__gorillaOnHands=null,gv[0]=0,gv[1]=0,UE=0,Ku&&(cancelAnimationFrame(Ku),Ku=0),fi&&(fi.style.display="none"),gt&&(gt.dataset.gorillaStage="idle",gt.style.display="none");try{(e=(n=window.NativeXR)==null?void 0:n.handVisuals)==null||e.call(n,!!S.handDraw)}catch{}for(let{win:a,hidden:o}of Of)he.includes(a)&&(typeof a.setHidden=="function"?a.setHidden(o):a.shell&&(a.shell.style.display=""));Of=[],S.spatialLauncher||(Yt(!1),Bt(!0)),(i=(t=ie).invalidate)==null||i.call(t),(r=(s=ie).render)==null||r.call(s,Pe,me)}var ae=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var JE=n=>{if(ge)return Sn("browser-extra",k("browser"),n);try{window.open(n,"_blank","noopener")}catch{it("Bloqueado pelo navegador")}},QE=[{name:"Google",url:"https://www.google.com/",bg:"#ffffff",color:"#4285F4",badge:"G"},{name:"YouTube",url:"https://www.youtube.com/",bg:"#ff0033",color:"#ffffff",badge:"\u25B6"},{name:"Roblox",url:"https://www.roblox.com/",bg:"#090d16",color:"#f8fafc",badge:"\u25C8",img:"./roblox-logo.jpg"},{name:"Discord",url:"https://discord.com/app",bg:"#5865F2",color:"#ffffff",badge:"D"},{name:"Instagram",url:"https://www.instagram.com/",bg:"linear-gradient(135deg,#feda75,#d62976,#4f5bd5)",color:"#ffffff",badge:"\u25CE"},{name:"Facebook",url:"https://www.facebook.com/",bg:"#1877F2",color:"#ffffff",badge:"f"},{name:"Beat Saber",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"#070814",color:"#ffffff",badge:"\u2694",img:"./beat-saber-logo.jpg"},{name:"TikTok",url:"https://www.tiktok.com/",bg:"#000000",color:"#25F4EE",badge:"\u266A",img:"./tiktok-logo.jpg"}],eT=[{title:"YouTube \xB7 V\xEDdeos 360\xB0 VR",domain:"youtube.com",url:"https://www.youtube.com/",bg:"linear-gradient(135deg,#7f1d1d,#ef4444)",badge:"\u25B6 YouTube"},{title:"Roblox \xB7 Mundos e Jogos",domain:"roblox.com",url:"https://www.roblox.com/",bg:"linear-gradient(135deg,#0f172a,#334155)",badge:"\u25C8 Roblox",img:"./roblox-logo.jpg"},{title:"Beat Saber \xB7 VR Imediato",domain:"moonrider.xyz",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"linear-gradient(135deg,#1e1b4b,#dc2626)",badge:"\u2694 Beat Saber",img:"./beat-saber-logo.jpg"},{title:"Hyper Dash \xB7 Arena VR",domain:"immersiveweb.dev",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0c4a6e,#0284c7)",badge:"\u26A1 Hyper Dash",img:"./hyper-dash-logo.jpg"}],tT=[{name:"Spotify",url:"https://open.spotify.com/",bg:"#121316",logoBg:"#1ED760",logoColor:"#000000",logoText:"Spotify",pill:!0},{name:"Music",url:"https://music.youtube.com/",bg:"#121316",logoBg:"#FF0033",logoColor:"#ffffff",logoText:"\u25C9 Music",pill:!0},{name:"Crunchyroll",url:"https://www.crunchyroll.com/",bg:"#121316",logoBg:"#F47521",logoColor:"#ffffff",logoText:"crunchyroll",pill:!1},{name:"HBO Max",url:"https://www.max.com/",bg:"#121316",logoBg:"#002BE7",logoColor:"#ffffff",logoText:"HBO max",pill:!1},{name:"Hulu",url:"https://www.hulu.com/",bg:"#121316",logoBg:"#1CE783",logoColor:"#050709",logoText:"hulu",pill:!1},{name:"Tubi",url:"https://tubitv.com/",bg:"#121316",logoBg:"#FA382F",logoColor:"#ffffff",logoText:"tubi",pill:!1},{name:"Paramount+",url:"https://www.paramountplus.com/",bg:"#121316",logoBg:"#0064FF",logoColor:"#ffffff",logoText:"Paramount+",pill:!1},{name:"Peacock",url:"https://www.peacocktv.com/",bg:"#121316",logoBg:"#000000",logoColor:"#ffffff",logoText:"peacock",pill:!1},{name:"Twitch",url:"https://www.twitch.tv/",bg:"#121316",logoBg:"#9146FF",logoColor:"#ffffff",logoText:"twitch",pill:!1},{name:"ESPN",url:"https://www.espn.com/",bg:"#121316",logoBg:"#CC0000",logoColor:"#ffffff",logoText:"ESPN",pill:!1}],nT=[{title:"Acima das Nuvens 360\xB0",sub:"Experi\xEAncia WebXR Panor\xE2mica",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0284c7,#1e1b4b)"},{title:"Explora\xE7\xE3o Espacial VR",sub:"Tour Orbital Interativo 3D",url:"https://eyes.nasa.gov/",bg:"linear-gradient(135deg,#311042,#090d16)"},{title:"Jogos WebXR Imersivos",sub:"Cat\xE1logo VR no Navegador",url:"https://constructarcade.com/",bg:"linear-gradient(135deg,#065f46,#0f172a)"}];function iT(){return`
    <div class="qb-home-scroll">
      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Populares</span></div>
        <div class="qb-pop-row">
          ${QE.map(n=>`
            <button type="button" class="qb-pop-item" data-qb-url="${Te(n.url)}" title="${Te(n.name)}">
              <span class="qb-pop-icon" style="background:${n.bg};color:${n.color};overflow:hidden;padding:0">${n.img?`<img src="${n.img}" alt="${Te(n.name)}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`:Te(n.badge)}</span>
              <span class="qb-pop-lbl">${Te(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Continuar navegando</span><span class="qb-sec-more">Ver mais</span></div>
        <div class="qb-cont-grid">
          ${eT.map(n=>`
            <button type="button" class="qb-cont-card" data-qb-url="${Te(n.url)}" title="${Te(n.title)}">
              <div class="qb-cont-thumb" style="background:${n.bg};overflow:hidden">${n.img?`<img src="${n.img}" alt="${Te(n.title)}" style="width:100%;height:100%;object-fit:cover;display:block">`:`<span>${Te(n.badge)}</span>`}</div>
              <div class="qb-cont-meta">
                <div class="qb-cont-ttl">${Te(n.title)}</div>
                <div class="qb-cont-dom">${Te(n.domain)}</div>
              </div>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Entretenimento</span></div>
        <div class="qb-ent-grid">
          ${tT.map(n=>`
            <button type="button" class="qb-ent-tile" data-qb-url="${Te(n.url)}" title="${Te(n.name)}">
              <div class="qb-ent-card" style="background:${n.bg}">
                <span class="qb-ent-logo" style="background:${n.logoBg};color:${n.logoColor}">${Te(n.logoText)}</span>
              </div>
              <span class="qb-ent-lbl">${Te(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Experi\xEAncias imersivas</span><span class="qb-sec-more">Explorar</span></div>
        <div class="qb-imm-grid">
          ${nT.map(n=>`
            <button type="button" class="qb-imm-card" data-qb-url="${Te(n.url)}" style="background:${n.bg}">
              <span class="qb-imm-badge">WEBXR</span>
              <span class="qb-imm-ttl">${Te(n.title)}</span>
              <span class="qb-imm-sub">${Te(n.sub)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `}function fd(n,e,t="https://duckduckgo.com/",i={}){var L,T,F,G,q,W,J,Q,re,z;let s=(i==null?void 0:i.mode)==="incognito-tab"||i!=null&&i.incognito?"incognito-tab":"new-tab",r=s==="incognito-tab",a=r&&t==="https://duckduckgo.com/"?"https://duckduckgo.com/?kae=d&kp=-1":t,o=r?"Navegador \xB7 Guia An\xF4nima":(i==null?void 0:i.mode)==="new-tab"?"Navegador \xB7 Nova Guia":e||"Navegador",l=he.find(X=>X.id==="browser");if(l){l.el.dataset.browserMode=s,l.el.dataset.incognito=r?"1":"0",l.shell&&(l.shell.dataset.browserMode=s,l.shell.dataset.incognito=r?"1":"0");let X=l.el.querySelector(".win-title");X&&(X.textContent=o);let ne=l.el.querySelector("[data-browser-incognito]");ne&&(ne.dataset.browserIncognito=r?"1":"0",ne.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",ne.style.background=r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)",ne.style.borderColor=r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)");let te=l.el.querySelector("[data-native-browser], iframe"),H=l.el.querySelector(".qb-home-overlay"),se=t==="https://duckduckgo.com/";H&&(H.hidden=!se);let de=l.el.querySelector(".qb-urlfld");return de&&(de.value=a),te&&(te.dataset.homeOverlay=se?"1":"0",ge?(te.dataset.url=a,(T=(L=window.NativeXR)==null?void 0:L.browserCmd)==null||T.call(L,"browser","go",a)):te.src=a),Jt(l),(G=(F=ie).invalidate)==null||G.call(F),(W=(q=ie).render)==null||W.call(q,Pe,me),l}let c=ae("div");c.style.cssText=`display:flex;flex-direction:column;height:100%;background:${r?"#120e1e":"#171a22"};color:#e9edf4`;let u=ae("div");u.style.cssText=`display:flex;align-items:center;gap:4px;padding:3px 6px;background:${r?"#0b0814":"#0e1117"};border-bottom:1px solid rgba(255,255,255,.08)`;let d=ae("button","qb-icn");d.innerHTML=ee("back"),d.title="Voltar";let h=ae("button","qb-icn");h.innerHTML=ee("enter"),h.style.transform="rotate(180deg)",h.title="Avan\xE7ar";let f=ae("button","qb-icn");f.innerHTML=ee("refresh"),f.title="Recarregar";let g=ae("span","qb-mode-badge");g.dataset.browserIncognito=r?"1":"0",g.dataset.qbAct="home",g.title="In\xEDcio do Navegador",g.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",g.style.cssText=`cursor:pointer;font-size:10px;font-weight:800;letter-spacing:.04em;padding:3px 8px;border-radius:999px;white-space:nowrap;color:#f8fafc;background:${r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)"};border:1px solid ${r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)"}`;let y=ae("input","fld qb-urlfld");y.type="text",y.placeholder=r?"Pesquisa privada an\xF4nima ou URL":"Pesquisar ou inserir URL",y.value=a;let p=ae("button","qb-icn");p.innerHTML=ee("star"),p.title="Favorito",u.append(d,h,f,g,y,p);let m=ae("div");m.style.cssText="flex:1;min-height:0;position:relative;background:#181a20";let b=t==="https://duckduckgo.com/",v=ae("div","qb-home-overlay",iT());v.hidden=!b;let M=ae(ge?"div":"iframe");ge?(M.dataset.nativeBrowser="browser",M.style.cssText="width:100%;height:100%;background:#181a20;position:relative;overflow:hidden",M.dataset.url=a,M.dataset.homeOverlay=b?"1":"0",M.appendChild(v),m.appendChild(M)):(M.style.cssText="width:100%;height:100%;border:0;background:#fff",M.referrerPolicy="no-referrer",M.sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation",M.src=a,M.dataset.homeOverlay=b?"1":"0",m.append(M,v));let E=ae("div","qb-dock"),R=document.createElement("button");R.className="dock-av",R.title="Perfil",R.setAttribute("aria-label","Perfil"),R.innerHTML=sT,E.appendChild(R);let x=document.createElement("button");x.className="dock-status",x.title="Status",x.innerHTML=`<span class="dock-time">--:--</span><span class="dock-wifi">${ee("wifi")}</span><span class="dock-bat">${rT}</span>`,E.appendChild(x),c.append(u,m,E);function U(){let X=rs(),ne=E.querySelector(".dock-time");if(ne&&(ne.textContent=X.time==="--:--"?new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):X.time),ge&&X.batteryLevel!=null){let te=E.querySelector(".dock-bat .b-fill");te&&(te.setAttribute("width",String(Math.max(2,13*X.batteryLevel))),te.setAttribute("fill",X.charging?"#8de6c8":X.batteryLevel<.2?"#ff6b6b":"currentColor"))}}U();let w=setInterval(U,2e4);!ge&&navigator.getBattery&&navigator.getBattery().then(X=>{function ne(){let te=E.querySelector(".dock-bat .b-fill");te&&(te.setAttribute("width",String(Math.max(2,13*X.level))),te.setAttribute("fill",X.charging?"#8de6c8":X.level<.2?"#ff6b6b":"currentColor"))}X.addEventListener("levelchange",ne),X.addEventListener("chargingchange",ne),ne()}).catch(()=>{});function _(){let X=E.querySelector(".dock-wifi");X&&(X.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",_),addEventListener("offline",_),_();function I(X){var te,H,se,de;let ne=(X||"").trim();ne&&(/^https?:\/\//i.test(ne)||(ne=/\.\w{2,}($|\/)/.test(ne)?"https://"+ne:"https://duckduckgo.com/?q="+encodeURIComponent(ne)),y.value=ne,v.hidden=!0,M.dataset.homeOverlay="0",ge?(M.dataset.url=ne,(H=(te=window.NativeXR)==null?void 0:te.browserCmd)==null||H.call(te,"browser","go",ne)):M.src=ne,(de=(se=ie).invalidate)==null||de.call(se))}function N(X,ne){var te,H;ge&&((H=(te=window.NativeXR)==null?void 0:te.browserCmd)==null||H.call(te,"browser",X,ne||""))}v.addEventListener("click",X=>{let ne=X.target.closest("[data-qb-url]");if(!ne)return;X.stopPropagation();let te=ne.dataset.qbUrl||"";if(te.includes("roblox.com")){Ul();return}if(te.includes("moonrider.xyz")){md();return}I(te)}),g.onclick=()=>{var X,ne;v.hidden=!v.hidden,M.dataset.homeOverlay=v.hidden?"0":"1",(ne=(X=ie).invalidate)==null||ne.call(X)},y.addEventListener("keydown",X=>{X.key==="Enter"&&(I(y.value),y.blur())}),y.addEventListener("focus",()=>di(!0,y)),d.onclick=()=>N("back"),h.onclick=()=>N("fwd"),f.onclick=()=>N("reload");let O=Qt({id:"browser",title:o,node:c});return O!=null&&O.el&&(O.el.dataset.browserMode=s,O.el.dataset.incognito=r?"1":"0"),O!=null&&O.shell&&(O.shell.dataset.browserMode=s,O.shell.dataset.incognito=r?"1":"0"),O._cleanupQB=()=>{clearInterval(w),removeEventListener("online",_),removeEventListener("offline",_)},O.obj.position.copy(O.target),O.apply(),Pe.updateMatrixWorld(!0),(Q=(J=ie).invalidate)==null||Q.call(J),(z=(re=ie).render)==null||z.call(re,Pe,me),O}function Uv(n="new-tab"){let e=n==="incognito-tab",t=fd("browser",e?"Navegador \xB7 Guia An\xF4nima":"Navegador \xB7 Nova Guia",e?"https://duckduckgo.com/?kae=d&kp=-1":"https://duckduckgo.com/",{mode:e?"incognito-tab":"new-tab",incognito:e});return it(e?"Guia An\xF4nima aberta":"Nova Guia aberta"),t}typeof window<"u"&&(window.nextvrOpenBrowserOption=Uv);var sT='<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',rT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';function Sn(n,e,t,i){var g,y,p,m;if(n==="browser"||n==="youtube"||n==="netflix"||n==="prime"||n==="tiktok"||n==="twitch"||n==="discord")return fd(n,e,t);let s=ae("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=ae("div","row browser-bar"),a=ae("input","fld");a.value=t,a.placeholder=k("search");let o=ae("button","go",ee("enter"));o.setAttribute("aria-label",k("open")),o.title=k("open");let l=ae("button","go",ee("external"));l.setAttribute("aria-label",k("open")),l.title=k("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(a,o,l);let c=ae("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let u=ae("div");u.style.cssText="flex:1;min-height:0;position:relative";let d=ae(ge?"div":"iframe");ge&&(d.dataset.nativeBrowser=n,d.style.cssText="width:100%;height:100%;background:#fff"),d.setAttribute("referrerpolicy","no-referrer"),d.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),u.appendChild(d),s.append(r,c,u);let h=b=>{let v=(b||"").trim();if(v){if(/^https?:\/\//i.test(v)||(v=/\.\w{2,}($|\/)/.test(v)?"https://"+v:"https://duckduckgo.com/?q="+encodeURIComponent(v)),a.value=v,ge){d.dataset.url=v,c.style.display="none";return}d.src=v,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};o.onclick=()=>h(a.value),a.addEventListener("keydown",b=>{b.key==="Enter"&&h(a.value)}),a.addEventListener("focus",()=>di(!0,a)),l.onclick=()=>JE(a.value),h(t);let f=Qt({id:n,title:e,node:s});return f.shell.classList.add("web-page-window"),f.obj.position.copy(f.target),f.apply(),Pe.updateMatrixWorld(!0),(y=(g=ie).invalidate)==null||y.call(g),(m=(p=ie).render)==null||m.call(p,Pe,me),f}var Te=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var nd=[];function tm(){let n=ae("div","pad"),e=ae("div");e.innerHTML=`<h2>${k("gallery")}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;let t=ae("div");t.style.marginTop="22px",t.innerHTML=`<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${k("env")}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;let i=ae("div","grid3"),s=()=>{i.innerHTML="";for(let d of ip()){let h=ae("button","env"+(d.thumb?" env-pano":""));h.style.background=d.thumb?`url('${d.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",h.innerHTML=`<span>${d.name}</span>`,h.setAttribute("aria-pressed",S.env===d.id?"true":"false"),h.onclick=()=>{wi(d.id),[...i.children].forEach(f=>f.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true"),it("Ambiente: "+d.name)},i.appendChild(h)}};s(),ze("env",s),t.appendChild(i);let r=ae("div");r.style.cssText="margin-top:26px;display:flex;align-items:center;gap:10px",r.innerHTML=`<h3 style="font-size:18px;margin:0;font-weight:700">${k("gallery")}</h3>`;let a=ae("button","go",k("pickPhotos")),o=ae("input");o.type="file",o.accept="image/*",o.multiple=!0,o.style.display="none",r.appendChild(a);let l=ae("div","grid4"),c=ae("div");c.style.cssText="margin-top:14px";let u=()=>{if(l.innerHTML="",!nd.length){l.innerHTML=`<p class="sub" style="grid-column:1/-1">${k("noPhotos")}</p>`;return}nd.forEach(d=>{let h=ae("button","thumb");h.innerHTML=`<img src="${d}" alt="">`,h.onclick=()=>{c.innerHTML=`<img src="${d}" style="width:100%;border-radius:16px">`},l.appendChild(h)})};return a.onclick=()=>o.click(),o.onchange=()=>{for(let d of o.files)nd.push(URL.createObjectURL(d));u(),it(nd.length+" fotos")},u(),n.append(e,t,r,o,l,c),Qt({id:"gallery",title:k("gallery"),node:n})}function ud(){let n=ae("div","pad");n.innerHTML=`<h2>${k("env")}</h2><p class="sub">Troque sem fechar nada.</p>`;let e=ae("div","grid3");for(let t of ip()){let i=ae("button","env"+(t.thumb?" env-pano":""));i.style.background=t.thumb?`url('${t.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",i.innerHTML=`<span>${t.name}</span>`,i.setAttribute("aria-pressed",S.env===t.id),i.onclick=()=>{wi(t.id),[...e.children].forEach(s=>s.setAttribute("aria-pressed","false")),i.setAttribute("aria-pressed","true")},e.appendChild(i)}return n.appendChild(e),Qt({id:"env",title:k("env"),node:n})}function aT(n,e,t){let i=ae("div","opt");return i.append(ae("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function an(n,e,t,i){let s=ae("div","yt-row"),r=ae("span","yt-ic");r.innerHTML=n;let a=ae("div","yt-txt");if(a.innerHTML=`<div class="yt-title">${e}</div>${t?`<div class="yt-sub">${t}</div>`:""}`,s.append(r,a),i){let o=ae("div","yt-ctl");o.appendChild(i),s.appendChild(o)}else{let o=ae("span","yt-ch");o.innerHTML="",s.appendChild(o)}return s}function da(n,e){let t=ae("button","yt-sw");t.type="button",t.setAttribute("role","switch");let i=()=>{t.dataset.on=S[n]?"1":"0",t.setAttribute("aria-checked",S[n]?"true":"false")};return i(),t.onclick=()=>{S[n]=S[n]?0:1,Ve(),i(),e&&e(S[n])},t}function vo(n){let e=ae("div","yt-sec");return e.textContent=n,e}function ha(n,e,t,i){let s=ae("input","yt-range");return s.type="range",s.min=e,s.max=t,s.step=i,s.value=S[n],s.oninput=()=>{S[n]=+s.value,Ve()},s}function Fv(n){n.innerHTML="";let e=Xy(),t=n,i=ae("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${k(Sl()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=ae("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!Sl()){let o=ae("button","go",k("xrInstall"));o.onclick=()=>{$p()},s.append(o)}let r=ae("button","go",k("xrSelfTest"));r.onclick=()=>Yp(),s.append(r);let a=ae("div","seg");for(let[o,l,c]of[["controllers",k("xrModeControllers"),k("xrModeControllersSub")],["hands",k("xrModeHands"),k("xrModeHandsSub")]]){let u=ae("button",null,l);u.title=c,u.setAttribute("aria-pressed",String(jy()===o)),u.onclick=()=>{Qy(o),[...a.children].forEach(d=>d.setAttribute("aria-pressed","false")),u.setAttribute("aria-pressed","true")},a.appendChild(u)}t.append(aT(k("xrHandMode"),k("xrHandModeSub"),a),s),t.append(ae("p","note",k("xrHandModeNote"))),!Sl()&&!e.runtimeBundled&&t.append(ae("p","note",k("xrBundlingNote")))}function Bl(){var U,w;let n=ae("div","quick-center"),e=ae("section","quick-panel"),t=ae("aside","quick-side"),i=ae("div","quick-status"),s=()=>{var I,N;try{let O=(N=(I=window.NativeXR)==null?void 0:I.battery)==null?void 0:N.call(I);if(O){let L=JSON.parse(O);if(L&&typeof L.level=="number")return L}}catch{}let _=rs();return _&&typeof _.batteryLevel=="number"?{level:_.batteryLevel,charging:!!_.charging}:null},r=s(),a=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});i.innerHTML=`<div><strong>Controles r\xE1pidos</strong><span>${a}</span></div><div class="quick-battery">${ee("battery")}<b data-cc-battery>${r?Math.round(r.level*100):"\u2014"}%</b></div>`,ze("device-status",()=>{let _=i.querySelector("[data-cc-battery]");if(!_)return;let I=s();_.textContent=`${I?Math.round(I.level*100):"\u2014"}%`});let l=ae("button","quick-gear",ee("settings"));l.type="button",l.title="Todas as configura\xE7\xF5es",l.setAttribute("aria-label","Todas as configura\xE7\xF5es"),l.onclick=()=>dd(),i.appendChild(l);let c=ae("div","quick-tiles"),u=(_,I,N,O,L=!1)=>{let T=ae("button",`quick-tile${L?" is-disabled":""}`);return T.type="button",T.innerHTML=`<span class="quick-tile-icon">${ee(_)}</span><span><b>${I}</b><small>${N}</small></span>`,T.disabled=L,O&&(T.onclick=O),c.appendChild(T),T};u("wifi","Wi-Fi","Abrir conex\xF5es",()=>{var _;return(_=window.NativeXR)!=null&&_.systemPanel?window.NativeXR.systemPanel("internet"):it("Conex\xF5es dispon\xEDveis no Android")}),u("bluetooth","Bluetooth","Dispositivos",()=>{var _;return(_=window.NativeXR)!=null&&_.systemPanel?window.NativeXR.systemPanel("bluetooth"):it("Bluetooth dispon\xEDvel no Android")}),u("android","Apps Android","Abrir janela Shizuku",()=>hd()),u("lock","Limite","Movimento protegido",null,!0),e.append(i,c);let d=ae("div","quick-section");d.innerHTML='<div class="quick-section-title"><b>Controles r\xE1pidos</b><span>Toque para ativar ou ajustar</span></div>';let h=ae("div","quick-controls"),f=S.env==="night"?"passthrough":S.env,g=!1,y=null,p=null,m=_=>{var I;g=!!_,(I=window.NativeXR)!=null&&I.audioEnabled&&window.NativeXR.audioEnabled(!g);for(let N of[y,p])N&&(N.classList.toggle("is-active",g),N.setAttribute("aria-pressed",String(g)));y&&(y.querySelector("small").textContent=g?"\xC1udio silenciado":"Som ativado")},b=(_,I,N,O,L=!1)=>{let T=ae("button",`quick-control${L?" is-active":""}`);return T.type="button",T.setAttribute("aria-pressed",String(L)),T.innerHTML=`<span>${ee(_)}</span><b>${I}</b><small>${N}</small>`,T.onclick=()=>{let F=O(T);T.classList.toggle("is-active",!!F),T.setAttribute("aria-pressed",String(!!F))},h.appendChild(T),T};b("camera","Vis\xE3o do ambiente",S.env==="passthrough"?"C\xE2mera ativa":"C\xE2mera desligada",_=>{let I=S.env!=="passthrough";return ki(I),_.querySelector("small").textContent=I?"C\xE2mera ativa":"C\xE2mera desligada",I},S.env==="passthrough"),y=b("volumeoff","N\xE3o perturbe","Silenciar \xE1udio do app",()=>(m(!g),g)),b("crosshair","Recentralizar","Ajustar a vis\xE3o",()=>(Oi(),it("Vis\xE3o recentralizada"),!1)),b("moon","Modo noturno",S.env==="night"?"Ativado":"Desativado",_=>{let I=S.env!=="night";return I?(f=S.env,wi("night")):wi(f==="night"?"passthrough":f),_.querySelector("small").textContent=I?"Ativado":"Desativado",I},S.env==="night"),b("settings","Mais configura\xE7\xF5es","Imagem, janelas e idioma",()=>(dd(),!1)),b("android","Apps do Android","Abrir launcher Shizuku",()=>(hd(),!1)),b("appGrid","Spatial App",S.spatialLauncher?"Ativado (Sem Dock)":"Desativado (Dock normal)",_=>{let I=!S.spatialLauncher;return yd(I),_.querySelector("small").textContent=I?"Ativado (Sem Dock)":"Desativado (Dock normal)",I},!!S.spatialLauncher),b("vision","C\xE2mera Grande Ocular",S.wideCamera?"Ativada":"Normal",_=>{var I,N;return S.wideCamera=S.wideCamera?0:1,Ve(S),(N=(I=window.NativeXR)==null?void 0:I.wideCamera)==null||N.call(I,!!S.wideCamera),_.querySelector("small").textContent=S.wideCamera?"Ativada":"Normal",!!S.wideCamera},!!S.wideCamera),b("move",k("dockSnapSlot"),S.dockSnapSlot!==0?k("on"):k("off"),_=>(S.dockSnapSlot=S.dockSnapSlot===0?1:0,Ve(S),_.querySelector("small").textContent=S.dockSnapSlot!==0?k("on"):k("off"),S.dockSnapSlot!==0),S.dockSnapSlot!==0),b("crosshair",k("fingerTouch"),S.fingerTouch!==0?k("on"):k("off"),_=>{var I,N;return S.fingerTouch=S.fingerTouch===0?1:0,Ve(S),(N=(I=window.NativeXR)==null?void 0:I.setFingerTouch)==null||N.call(I,S.fingerTouch!==0),Se("fingerTouch",S.fingerTouch!==0),_.querySelector("small").textContent=S.fingerTouch!==0?k("on"):k("off"),S.fingerTouch!==0},S.fingerTouch!==0),b("crosshair","Pin\xE7a no App (Sem Raio)",S.pinchOnApp!==0?"Ativado":"Desativado",_=>(S.pinchOnApp=S.pinchOnApp===0?1:0,Ve(S),Se("pinchOnApp",S.pinchOnApp!==0),_.querySelector("small").textContent=S.pinchOnApp!==0?"Ativado":"Desativado",S.pinchOnApp!==0),S.pinchOnApp!==0),b("crosshair","Gesto de Soco 2s (Menu R\xE1pido)",S.gunGesture!==0?"Ativado":"Desativado",_=>(S.gunGesture=S.gunGesture===0?1:0,Ve(S),Se("gunGesture",S.gunGesture!==0),_.querySelector("small").textContent=S.gunGesture!==0?"Ativado":"Desativado",S.gunGesture!==0),S.gunGesture!==0),b("move","Modo 3DoF / 6DoF",S.sixdof!==0?"6DoF Ativado":"3DoF Ativado",_=>{var I,N;return S.sixdof=S.sixdof===0?1:0,Ve(S),S.sixdof||Xt.reset(),(N=(I=window.NativeXR)==null?void 0:I.setSixDofEnabled)==null||N.call(I,S.sixdof!==0),Se("sixdof",S.sixdof!==0),_.querySelector("small").textContent=S.sixdof!==0?"6DoF Ativado":"3DoF Ativado",S.sixdof!==0},S.sixdof!==0),d.appendChild(h),e.append(d);let v=ae("div","quick-side-title","Ajustes"),M=ae("span","quick-side-icon",ee("volume")),E=ae("input","quick-vertical");E.type="range",E.min="0",E.max="100",E.value=(U=window.NativeXR)!=null&&U.volume?window.NativeXR.volume():65,E.setAttribute("aria-label","Volume"),E.title=`Volume ${E.value}%`,E.oninput=()=>{var _,I;(I=(_=window.NativeXR)==null?void 0:_.setVolume)==null||I.call(_,+E.value),E.title=`Volume ${E.value}%`},p=ae("button","quick-side-button",ee("volumeoff")),p.type="button",p.title="Silenciar \xE1udio",p.setAttribute("aria-label","Silenciar \xE1udio"),p.setAttribute("aria-pressed","false"),p.onclick=()=>m(!g);let R=ae("span","quick-side-icon",ee("sun")),x=ae("input","quick-vertical");return x.type="range",x.min="10",x.max="100",x.value=(w=window.NativeXR)!=null&&w.brightness?window.NativeXR.brightness():70,x.setAttribute("aria-label","Brilho"),x.title=`Brilho ${x.value}%`,x.oninput=()=>{var _,I;(I=(_=window.NativeXR)==null?void 0:_.setBrightness)==null||I.call(_,+x.value),x.title=`Brilho ${x.value}%`},t.append(v,M,E,p,R,x),n.append(e,t),Qt({id:"control-center",title:"Configura\xE7\xF5es",node:n,w:980,h:640})}function dd(){let n=ae("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;";let e=ae("div");e.style.cssText="display:flex;align-items:center;gap:6px;padding:8px 8px 4px;";let t=ae("button","yt-back");t.innerHTML=ee("back"),t.title="Voltar",t.setAttribute("aria-label","Voltar"),t.onclick=()=>{let m=he.find(b=>b.id==="settings");m&&ft(m)};let i=ae("div","yt-head-title");i.textContent=k("settings"),e.append(t,i);let s=ae("div");s.style.cssText="flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;";let r=null,a=()=>{r=Qt({id:"language-pick",title:k("langTitle"),w:320,h:420,node:qv(S.lang||"pt",m=>{qr(m),it(k("langChanged")),ft(r);let b=he.find(v=>v.id==="settings");b&&ft(b),dd()},!0)})};s.append(vo(k("general")));let o=ae("button","yt-link");o.append(an(ee("globe"),k("language"),cu(S.lang||"pt").label)),o.onclick=a,s.append(o),s.append(an(ee("gauge"),"Contador de FPS","Mostrar taxa de quadros",da("showFps")));let l=ae("div");l.style.cssText="display:inline-flex;gap:6px;align-items:center;";let c=ae("button","entry-seg-btn"+(S.sixdof===0?" on":""),"3DoF");c.dataset.settingsDof="3dof";let u=ae("button","entry-seg-btn"+(S.sixdof!==0?" on":""),"6DoF");u.dataset.settingsDof="6dof";let d=()=>{c.classList.toggle("on",S.sixdof===0),u.classList.toggle("on",S.sixdof!==0)};c.onclick=()=>{var m,b;S.sixdof=0,Ve(S),Xt.reset(),(b=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||b.call(m,!1),Se("sixdof",!1),d()},u.onclick=()=>{var m,b;S.sixdof=1,Ve(S),(b=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||b.call(m,!0),Se("sixdof",!0),d()},l.append(c,u),s.append(an(ee("move"),"Modo 3DoF / 6DoF","Alternar entre 3DoF (rota\xE7\xE3o) e 6DoF (andar no espa\xE7o)",l));let h=ae("button","yt-link");h.append(an(ee("image"),"Ambiente","Trocar passthrough / panorama")),h.onclick=()=>{let m=he.find(b=>b.id==="settings");m&&ft(m),tm()},s.append(h),s.append(vo(k("hands"))),s.append(an(ee("user"),"Rastreamento","MediaPipe nativo \xB7 c\xE2mera traseira")),s.append(an(ee("edit3"),"Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",da("handDraw"))),s.append(an(ee("crosshair"),k("fingerTouch"),k("fingerTouchDesc"),da("fingerTouch",m=>{var b,v;(v=(b=window.NativeXR)==null?void 0:b.setFingerTouch)==null||v.call(b,!!m),Se("fingerTouch",!!m)}))),s.append(an(ee("crosshair"),"Pin\xE7a no App (Sem Raio)","Fazer a pin\xE7a encima de um app abre o app na hora, sem precisar do raio",da("pinchOnApp",m=>Se("pinchOnApp",!!m)))),s.append(an(ee("crosshair"),"Gesto de Soco 2s (Menu R\xE1pido)","Fechar a m\xE3o toda por 2 segundos abre o menuzinho de recentrar dock e ambientes",da("gunGesture",m=>Se("gunGesture",!!m)))),s.append(an(ee("zap"),"Sensibilidade","Pin\xE7a com histerese est\xE1vel")),s.append(vo(k("windows"))),s.append(an(ee("maximize"),"Tamanho","Escala das janelas",ha("winScale",.6,1.6,.05))),s.append(an(ee("distance"),"Dist\xE2ncia","Dist\xE2ncia do arco",ha("winDist",ge?.6:1.5,ge?1.8:3.4,.05))),s.append(an(ee("curve"),k("curve"),"Abertura do arco",ha("winCurve",0,1,.05))),s.append(an(ee("curve"),k("win360"),k("win360k"),ha("win360K",.2,1.15,.05))),s.append(an(ee("curve"),k("win360All"),"Novas janelas curvadas",da("win360"))),s.append(an(ee("move"),"Inclina\xE7\xE3o","Ajuste vertical das janelas",ha("winTilt",0,1.5,.05))),s.append(vo(k("dock"))),s.append(an(ee("appGrid"),"Tamanho da dock",null,ha("dockSize",.7,1.5,.05))),s.append(an(ee("distance"),"Dist\xE2ncia da dock",null,ha("dockDist",.7,1.5,.05))),s.append(an(ee("move"),k("dockSnapSlot"),k("dockSnapDesc"),da("dockSnapSlot"))),s.append(vo(k("perf")));let f=ae("div","yt-seg");for(let[m,b]of[["low",k("qualityLow")],["medium",k("qualityMedium")],["high",k("qualityHigh")],["auto",k("qualityAuto")]]){let v=ae("button","yt-seg-btn");v.textContent=b,v.setAttribute("aria-pressed",S.quality===m),v.onclick=()=>{S.quality=m,Ve(),Se("quality"),[...f.children].forEach(M=>M.setAttribute("aria-pressed","false")),v.setAttribute("aria-pressed","true")},f.appendChild(v)}s.append(an(ee("settings"),k("quality"),"1080p \xB7 890p \xB7 390p \xB7 Auto",f)),s.append(vo(k("xrTitle")));let g=ae("button","yt-link");g.append(an(ee("controller"),k("xrTitle"),k("xrSub"))),g.setAttribute("aria-expanded","false");let y=ae("div","card");y.dataset.xrPage="",y.style.margin="0 16px 14px",y.hidden=!0,g.onclick=()=>{y.hidden=!y.hidden,g.setAttribute("aria-expanded",String(!y.hidden)),y.hidden||Fv(y)},s.append(g,y);let p=ae("div","yt-foot");return p.textContent="NextVR \xB7 shell XR para Android \xB7 v1.0",s.append(p),n.append(e,s),Qt({id:"settings",title:k("settings"),node:n})}function oT(){let n=he.find(h=>h.id==="quick-settings");if(n)return Jt(n),Yf(rs()),n;let e=ae("div","quick-settings");e.innerHTML=`<section class="qs-panel">
    <header class="qs-top">
      <div class="qs-system">
        <span class="qs-battery" data-q-battery>${ee("battery")}<span>--%</span></span>
        <span data-q-time>--:--</span><span class="qs-date" data-q-date></span>
      </div>
      <span class="qs-top-spacer"></span>
      <button class="qs-top-action" data-q-settings aria-label="Configura\xE7\xF5es NextVR">${ee("settings")}<span>Configura\xE7\xF5es</span></button>
      <button class="qs-repin" data-act="pin" aria-label="Voltar ao arco">${ee("crosshair")}</button>
      <button class="qs-close" data-q-close aria-label="Fechar">${ee("x")}</button>
    </header>
    <div class="qs-ranges">
      <label class="qs-range" title="Volume de m\xEDdia"><input data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume"><span>${ee("volume")}</span></label>
      <label class="qs-range" title="Brilho da tela"><input data-q-range="brightness" type="range" min="0" max="100" value="50" aria-label="Brilho"><span>${ee("sun")}</span></label>
    </div>
    <div class="qs-cards">
      <div class="qs-card"><div class="qs-card-line">${ee("wifi")}<span class="qs-card-title">Wi-Fi</span></div><span class="qs-card-sub" data-q-network>Verificando conex\xE3o</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("bluetooth")}<span class="qs-card-title">Bluetooth</span></div><span class="qs-card-sub">Gerenciado pelo Android</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("link")}<span class="qs-card-title">Link</span></div><span class="qs-card-sub">N\xE3o conectado</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("boundary")}<span class="qs-card-title">Limite</span></div><span class="qs-card-sub">Desativado</span></div>
    </div>
    <div class="qs-tools">
      <button class="qs-tool" data-q-env>${ee("scene")}<span>Vis\xE3o do ambiente</span></button>
      <button class="qs-tool" disabled title="O NextVR n\xE3o usa microfone">${ee("mic")}<span>Microfone</span></button>
      <button class="qs-tool" data-q-recenter>${ee("move")}<span>Redefinir visualiza\xE7\xE3o</span></button>
      <button class="qs-tool" data-q-night aria-pressed="false">${ee("sun")}<span>Modo noturno</span></button>
      <button class="qs-tool" data-q-dnd aria-pressed="false">${ee("moon")}<span>N\xE3o perturbe</span></button>
      <button class="qs-tool" disabled title="Espelhamento do sistema n\xE3o dispon\xEDvel nesta tela">${ee("cast")}<span>Espelhar</span></button>
      <button class="qs-tool" disabled>${ee("bug")}<span>Relatar problema</span></button>
      <button class="qs-tool" disabled>${ee("lock")}<span>Modo viagem</span></button>
      <button class="qs-tool" disabled>${ee("device")}<span>Remote Desktop</span></button>
    </div>
  </section>
  <aside class="qs-side" aria-label="Controles r\xE1pidos">
    <div class="qs-volume"><span class="qs-more"><i></i><i></i><i></i></span>
      <div class="qs-volume-slider-wrap"><input class="qs-v-range" data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume de m\xEDdia"></div>
      ${ee("volume")}
    </div>
    <button class="qs-side-button" data-q-mute aria-pressed="false" aria-label="Silenciar m\xEDdia">${ee("volumeoff")}</button>
    <button class="qs-side-button" data-q-night aria-pressed="false" aria-label="Modo noturno">${ee("moon")}</button>
  </aside>`;let t=e,i={night:!1,dnd:!1,muted:!1,lastVolume:50};try{i={...i,...JSON.parse(localStorage.getItem("nextvr.quick-settings.v1")||"{}")}}catch{}let s=[...t.querySelectorAll("[data-q-range]")],r=(h,f)=>{var g,y;try{let p=Number((y=(g=window.NativeXR)==null?void 0:g[h])==null?void 0:y.call(g));return Number.isFinite(p)?Math.max(0,Math.min(100,p)):f}catch{return f}},a=ge?r("mediaVolumePercent",50):50,o=ge?r("brightnessPercent",50):50;a>0&&(i.lastVolume=a);function l(h,f){let g=Math.max(0,Math.min(100,Number(f)||0));for(let y of s.filter(p=>p.dataset.qRange===h))y.value=String(g),y.style.setProperty("--fill",`${g}%`);h==="volume"&&(a=g,g>0?(i.lastVolume=g,i.muted=!1):i.muted=!0)}function c(){try{localStorage.setItem("nextvr.quick-settings.v1",JSON.stringify(i))}catch{}}function u(){t.classList.toggle("night",!!i.night),t.querySelectorAll("[data-q-night]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.night))),t.querySelectorAll("[data-q-dnd]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.dnd))),t.querySelectorAll("[data-q-mute]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.muted)))}l("volume",a),l("brightness",o),u();for(let h of s)h.addEventListener("input",()=>l(h.dataset.qRange,h.value)),h.addEventListener("change",()=>{var f,g,y,p;ge&&(h.dataset.qRange==="volume"&&((g=(f=window.NativeXR).setMediaVolumePercent)==null||g.call(f,a)),h.dataset.qRange==="brightness"&&((p=(y=window.NativeXR).setBrightnessPercent)==null||p.call(y,Number(h.value))),u(),c())});t.addEventListener("click",h=>{var g,y;let f=p=>h.target.closest(p);if(f("[data-q-close]")){ft(he.find(p=>p.id==="quick-settings"));return}if(f("[data-q-settings]")){dd();return}if(f("[data-q-env]")){ud();return}if(f("[data-q-recenter]")){Oi();return}if(f("[data-q-night]")){i.night=!i.night,u(),c();return}if(f("[data-q-dnd]")){i.dnd=!i.dnd,u(),c();return}f("[data-q-mute]")&&(i.muted=!i.muted,i.muted?(a>0&&(i.lastVolume=a),l("volume",0)):l("volume",i.lastVolume||50),ge&&((y=(g=window.NativeXR).setMediaVolumePercent)==null||y.call(g,a)),u(),c())});let d=Qt({id:"quick-settings",title:"Configura\xE7\xF5es",node:e,w:1040,h:660,chrome:!1,resizable:!1});return Yf(rs()),d}function Yf(n=rs()){var a;let e=(a=he.find(o=>o.id==="quick-settings"))==null?void 0:a.el.querySelector(".quick-settings");if(!e)return;let t=e.querySelector("[data-q-battery] span");t&&(t.textContent=n.batteryLevel==null?"--%":`${Math.round(n.batteryLevel*100)}%`);let i=e.querySelector("[data-q-time]");i&&(i.textContent=n.time||"--:--");let s=e.querySelector("[data-q-date]");s&&(s.textContent=n.date||"");let r=e.querySelector("[data-q-network]");r&&(r.textContent=n.online?"Conectado \xE0 internet":"Sem conex\xE3o")}ze("device-status",Yf);var Bv="nextvr.lib.recent.v1",lT=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},Ol=lT(Bv),cT=()=>{try{localStorage.setItem(Bv,JSON.stringify(Ol))}catch{}},zv=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">N</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X",label:"X",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],jf={id:"gorilla-tag",name:"Gorilla Tag",label:"Gorilla Tag",bg:"#0b141a",html:'<img class="lx-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',kind:"app"},jn=n=>{let e=he.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null};function Ul(){var e,t,i,s,r,a,o,l;document.documentElement.dataset.robloxBlackEnv="1",(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,"black"),S.handDraw=1,(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!0),ge&&!op()&&Ki();for(let c of he)c.id!=="roblox"&&c.setHidden(!0);Bt(!1),Yt(!0);let n=Sn("roblox","Roblox","https://www.roblox.com/");return n&&(n.setHidden(!1),n.obj.position.copy(n.target),n.apply(),Pe.updateMatrixWorld(!0),Jt(n)),(a=(r=ie).invalidate)==null||a.call(r),(l=(o=ie).render)==null||l.call(o,Pe,me),n}ze("wins",()=>{var n,e,t,i,s,r;if(document.documentElement.dataset.robloxBlackEnv==="1"&&!he.some(a=>a.id==="roblox")){delete document.documentElement.dataset.robloxBlackEnv,(e=(n=window.NativeXR)==null?void 0:n.env)==null||e.call(n,S.env||"passthrough");for(let a of he)a.id!=="spatial-launcher"&&a.setHidden(!1);S.spatialLauncher?pd():(Yt(!1),Bt(!0)),(i=(t=ie).invalidate)==null||i.call(t),(r=(s=ie).render)==null||r.call(s,Pe,me)}});function md(){var l,c,u,d,h,f,g,y,p,m;let n=he.find(b=>b.id==="beat-saber");if(n)return n.setHidden(!1),Jt(n),(c=(l=ie).invalidate)==null||c.call(l),(d=(u=ie).render)==null||d.call(u,Pe,me),n;S.spatialLauncher||(Bt(!1),Yt(!0));let e=ae("div","beat-saber-vr-stage");e.dataset.beatSaberVr="1",e.style.cssText="position:relative;width:100%;height:100%;background:radial-gradient(circle at 50% 38%,#141838 0%,#060814 68%,#020308 100%);overflow:hidden;display:flex;flex-direction:column;color:#f8fafc",e.innerHTML=`
    <div class="bs-vr-hud" style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:rgba(6,8,20,.82);border-bottom:1px solid rgba(56,189,248,.28);z-index:3">
      <div style="display:flex;align-items:center;gap:12px">
        <img src="./beat-saber-logo.jpg" alt="Beat Saber" style="width:40px;height:40px;border-radius:10px;object-fit:cover;border:1px solid rgba(255,255,255,.22)">
        <div>
          <div style="display:flex;align-items:center;gap:8px">
            <strong style="font-size:16px;letter-spacing:.04em;color:#fff">BEAT SABER VR</strong>
            <span data-bs-vr-active="1" style="font-size:10px;font-weight:800;padding:2px 8px;border-radius:999px;background:linear-gradient(90deg,#ef4444,#06b6d4);color:#fff">MODO VR ATIVO</span>
          </div>
          <div style="font-size:11px;color:#94a3b8">Sabres Neon Vermelho &amp; Azul sincronizados com Hand Tracking</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:16px">
        <div style="text-align:right">
          <div style="font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em">Combo / Score</div>
          <strong data-bs-score style="font-size:18px;color:#38bdf8;font-variant-numeric:tabular-nums">4x \xB7 1.280</strong>
        </div>
        <button type="button" class="st-btn" data-bs-exit style="background:rgba(239,68,68,.24);border:1px solid rgba(248,113,113,.45);color:#fecaca;padding:7px 14px;border-radius:999px;font-size:12px;font-weight:800">SAIR DO VR</button>
      </div>
    </div>
    <div style="position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden">
      <canvas data-bs-canvas width="960" height="520" style="width:100%;height:100%;display:block"></canvas>
      <iframe src="https://moonrider.xyz/?mode=ride&vr=1" allow="xr-spatial-tracking; fullscreen; autoplay" style="position:absolute;inset:0;width:100%;height:100%;border:0;opacity:.92;pointer-events:auto" title="Beat Saber VR"></iframe>
    </div>
  `;let t=e.querySelector("[data-bs-canvas]"),i=(h=t==null?void 0:t.getContext)==null?void 0:h.call(t,"2d"),s=0,r=performance.now(),a=b=>{if(!i||!document.body.contains(e))return;let v=(b-r)*.001,M=t.width,E=t.height;i.fillStyle="#050712",i.fillRect(0,0,M,E),i.strokeStyle="rgba(56,189,248,0.28)",i.lineWidth=2;for(let I=-3;I<=3;I++)i.beginPath(),i.moveTo(M*.5+I*26,E*.28),i.lineTo(M*.5+I*155,E),i.stroke();let R=v*1.4%1,x=26+R*68,U=M*.5-50-R*120,w=E*.3+R*(E*.52);i.fillStyle="#ff1744",i.strokeStyle="#ff8a80",i.lineWidth=3,i.fillRect(U-x*.5,w-x*.5,x,x),i.strokeRect(U-x*.5,w-x*.5,x,x);let _=M*.5+50+R*120;i.fillStyle="#00e5ff",i.strokeStyle="#84ffff",i.fillRect(_-x*.5,w-x*.5,x,x),i.strokeRect(_-x*.5,w-x*.5,x,x),s=requestAnimationFrame(a)};s=requestAnimationFrame(a);let o=Qt({id:"beat-saber",title:"Beat Saber VR",node:e,w:1020,h:640});return o!=null&&o.shell&&(o.shell.dataset.beatSaberVr="1"),o!=null&&o.el&&(o.el.dataset.beatSaberVr="1"),(f=e.querySelector("[data-bs-exit]"))==null||f.addEventListener("click",()=>{cancelAnimationFrame(s),ft(o),S.spatialLauncher||(Yt(!1),Bt(!0))}),Jt(o),(y=(g=ie).invalidate)==null||y.call(g),(m=(p=ie).render)==null||m.call(p,Pe,me),o}typeof window<"u"&&(window.nextvrOpenRobloxVr=Ul,window.nextvrOpenBeatSaberVr=md);var nm={youtube:()=>Sn("youtube","YouTube","https://m.youtube.com/"),browser:()=>Sn("browser",k("browser"),"https://duckduckgo.com/"),store:()=>im(),gallery:()=>tm(),settings:()=>Bl(),discord:()=>Sn("discord","Discord","https://discord.com/app"),netflix:()=>Sn("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>Sn("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>Sn("twitch","Twitch","https://www.twitch.tv/"),prime:()=>Sn("prime","prime video","https://www.primevideo.com/"),whatsapp:()=>Sn("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>Sn("instagram","Instagram","https://www.instagram.com/"),x:()=>Sn("x","X","https://x.com/"),facebook:()=>Sn("facebook","Facebook","https://www.facebook.com/"),telegram:()=>Sn("telegram","Telegram","https://web.telegram.org/"),spotify:()=>Sn("spotify","Spotify","https://open.spotify.com/"),"gorilla-tag":()=>yo(),"beat-vr":()=>md(),"roblox-vr":()=>Ul(),roblox:()=>Ul(),"hyper-vr":()=>fd("browser","Hyper Dash VR","https://immersiveweb.dev/")},Dl="apps",id="home",kl=null,uT=[["apps","Apps"],["horizon","Horizon+"]],dT=[{id:"gorilla-tag",name:"Gorilla Tag",cat:"games",rating:"4.9",reviews:"28 mil",tag:"VR \xB7 Hand Tracking",badge:"DESTAQUE",img:"./icons/gorilla-tag-logo.jpg",bg:"linear-gradient(135deg,#431407,#ea580c)"},{id:"beat-vr",name:"Beat Saber",cat:"games",rating:"4.9",reviews:"45 mil",tag:"Modo VR Imediato",badge:"VR",img:"./beat-saber-logo.jpg",bg:"linear-gradient(135deg,#450a0a,#0284c7)"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"games",rating:"4.8",reviews:"9,4 mil",tag:"A\xE7\xE3o \xB7 Arena VR",badge:"VR",img:"./hyper-dash-logo.jpg",bg:"linear-gradient(135deg,#082f49,#0284c7)"},{id:"roblox-vr",name:"Roblox",cat:"games",rating:"4.8",reviews:"64 mil",tag:"Ambiente Preto \xB7 Hand Tracking",badge:"NOVO",img:"./roblox-logo.jpg",bg:"linear-gradient(135deg,#090d16,#1e293b)"},{id:"tiktok",name:"TikTok",cat:"apps",rating:"4.9",reviews:"52 mil",tag:"V\xEDdeos \xB7 Social",badge:"APP",img:"./tiktok-logo.jpg",bg:"linear-gradient(135deg,#09090b,#18181b)"},{id:"youtube",name:"YouTube VR",cat:"apps",rating:"4.8",reviews:"31 mil",tag:"V\xEDdeo 360\xB0 \xB7 4K",badge:"APP",img:"./icons/youtube.svg",bg:"linear-gradient(135deg,#450a0a,#dc2626)",isSvg:!0},{id:"discord",name:"Discord",cat:"apps",rating:"4.7",reviews:"19 mil",tag:"Comunidade \xB7 Voz",badge:"APP",img:"./icons/discord.svg",bg:"linear-gradient(135deg,#312e81,#4f46e5)",isSvg:!0},{id:"netflix",name:"Netflix",cat:"apps",rating:"4.8",reviews:"22 mil",tag:"Cinema VR",badge:"APP",img:"",bg:"linear-gradient(135deg,#450a0a,#991b1b)",textLogo:"N"}];function hT(){let n=ae("div","st st-quest-store"),e=uT.map(([s,r])=>`<button class="st-tab" data-tab="${s}" aria-selected="${Dl===s}" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden">${r}</button>`).join(""),t=[["home","P\xE1gina inicial"],["games","Jogos"],["apps","Apps"],["wishlist","Lista de desejos"]].map(([s,r])=>`<button type="button" class="st-quest-pill ${id===s&&Dl!=="horizon"?"on":""}" data-qtab="${s}">${r}</button>`).join(""),i=`
    <div class="st-top st-quest-top">
      ${e}
      <div class="st-quest-nav-left">
        <button type="button" class="st-quest-search-btn" data-openlib title="Pesquisar na Loja">${ee("search")}</button>
        <div class="st-quest-pills">${t}</div>
      </div>
      <div class="st-quest-nav-right">
        <button type="button" class="st-quest-icon-btn" data-openlib title="Biblioteca">${ee("store")}</button>
        <button type="button" class="st-ava" data-ava aria-label="Perfil"><img src="./icons/nextvr-chrome-n.png" alt="Perfil" style="width:100%;height:100%;border-radius:50%;object-fit:cover"></button>
        <button type="button" class="st-x" data-x aria-label="Fechar">${ee("x")}</button>
      </div>
    </div>`;if(Dl==="horizon")i+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else{let s=!!S.gorillaInstalled,r=kl!==null?`<span class="st-quest-card-btn" style="background:rgba(251,146,60,.24);color:#fdba74">Baixando... ${kl}%</span>`:s?`<div style="display:flex;gap:6px;align-items:center">
             <span data-gorilla-installed="1" style="font-size:10px;font-weight:800;color:#4ade80;padding:3px 8px;border-radius:999px;background:rgba(34,197,94,.16);border:1px solid rgba(74,222,128,.35)">\u2713 Instalado</span>
             <button class="st-btn st-quest-card-btn" data-launch-gorilla style="background:#2563eb;color:#fff">ABRIR</button>
           </div>`:'<button class="st-btn st-quest-card-btn" data-install-gorilla style="background:#2563eb;color:#fff">BAIXAR</button>',o=dT.filter(l=>id==="games"?l.cat==="games":id==="apps"?l.cat==="apps":!0).map(l=>{let c=l.id==="gorilla-tag",u=l.textLogo?`<span style="font-size:38px;font-weight:900;color:#ef4444;letter-spacing:-.04em">${l.textLogo}</span>`:l.isSvg?`<img src="${l.img}" alt="${l.name}" style="width:48px;height:48px;object-fit:contain">`:`<img class="${c?"st-gorilla-logo":""}" src="${l.img}" alt="${l.name}" style="width:100%;height:100%;object-fit:cover;display:block">`,d=c?r:`<button type="button" class="st-btn st-quest-card-btn" data-store-launch="${l.id}" style="background:rgba(255,255,255,.12);color:#f8fafc">Abrir</button>`;return`
        <article class="st-quest-card ${c?"st-gorilla-card":""}" ${c?"data-store-gorilla":""} data-store-card="${l.id}">
          <div class="st-quest-card-art" style="background:${l.bg}" ${c?"":`data-store-launch="${l.id}"`}>
            ${u}
            <span class="st-quest-card-badge">${l.badge}</span>
          </div>
          <div class="st-quest-card-body">
            <div class="st-quest-card-title">${l.name}</div>
            <div class="st-quest-card-meta">
              <span class="st-quest-rating">${l.rating} \u2605 (${l.reviews})</span>
              <span class="st-quest-tag">${l.tag}</span>
            </div>
            <div class="st-quest-card-foot">
              <span class="st-quest-free">Gr\xE1tis</span>
              ${d}
            </div>
          </div>
        </article>`}).join("");i+=`
      <div class="st-quest-hero">
        <div class="st-quest-hero-copy">
          <span class="st-quest-hero-kicker">META QUEST \xB7 NEXTVR STORE</span>
          <h2 class="st-quest-hero-title">JOGOS E APPS EM DESTAQUE</h2>
          <p class="st-quest-hero-sub">Gorilla Tag (${cs.model}), Beat Saber em modo VR imediato, Hyper Dash VR, Roblox com ambiente escuro e TikTok.</p>
          <div class="st-quest-hero-actions">
            <button type="button" class="st-btn st-quest-hero-cta" data-store-launch="beat-vr">Jogar Beat Saber VR</button>
            <button type="button" class="st-btn st-quest-hero-sec" data-openlib>Abrir Biblioteca</button>
          </div>
        </div>
        <div class="st-quest-hero-collage">
          <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="st-quest-hero-tile" data-launch-gorilla>
          <img src="./beat-saber-logo.jpg" alt="Beat Saber" class="st-quest-hero-tile" data-store-launch="beat-vr">
          <img src="./hyper-dash-logo.jpg" alt="Hyper Dash VR" class="st-quest-hero-tile" data-store-launch="hyper-vr">
          <img src="./roblox-logo.jpg" alt="Roblox" class="st-quest-hero-tile" data-store-launch="roblox-vr">
          <img src="./tiktok-logo.jpg" alt="TikTok" class="st-quest-hero-tile" data-store-launch="tiktok">
        </div>
      </div>

      <div class="st-quest-section-head">
        <h3 class="st-quest-section-title">Navegar por tudo</h3>
        <span class="st-quest-sort-pill">Ordenar por: Mais populares \u2304</span>
      </div>

      <div class="st-quest-grid">
        ${o}
      </div>
      <p class="st-note" style="font-size:11px;opacity:.75;margin:8px 0 0">Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>`}return n.innerHTML=i,n.addEventListener("click",s=>{let r=o=>s.target.closest(o),a;if(a=r("[data-tab]")){Dl=a.dataset.tab,ds();return}if(a=r("[data-qtab]")){Dl="apps",id=a.dataset.qtab,ds();return}if(r("[data-x]")){let o=he.find(l=>l.id==="store");o&&ft(o);return}if(r("[data-ava]")){it("Perfil NextVR");return}if(r("[data-openlib]")){sm();return}if(r("[data-install-gorilla]")){S.gorillaInstalled=1,Ve(),pa("gorilla-tag",!0),ni(),kl=35,ds(),setTimeout(()=>{kl=80,ds()},120),setTimeout(()=>{kl=null,ds(),ni(),it("Gorilla Tag baixado! Adicionado \xE0 Biblioteca de Apps.")},260);return}if(r("[data-launch-gorilla]")){pa("gorilla-tag"),yo();return}if(a=r("[data-store-launch]")){let o=a.dataset.storeLaunch;pa(o,!0);let l=nm[o];l&&l();return}}),n}function ds(){var t,i,s;let n=jn("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(hT()),n.querySelector(".st").scrollTop=e,(s=(i=ie).invalidate)==null||s.call(i)}function im(){var i,s,r,a;let n=he.find(o=>o.id==="store");if(n)return ds(),Jt(n),(s=(i=ie).render)==null||s.call(i,Pe,me),n;let e=ae("div");e.style.cssText="height:100%";let t=Qt({id:"store",title:"Store",node:e});return ds(),(a=(r=ie).render)==null||a.call(r,Pe,me),t}var ld="recent",Vi="all",Zf="",Wf=["all","apps","games","recent"],pT=n=>({all:k("libAll"),apps:k("apps"),games:k("libGames"),recent:k("recents")})[n]||k("libAll");function pa(n,e){Ol=[n,...Ol.filter(t=>t!==n)].slice(0,40),cT(),e||ni()}function fT(){var s;!$y().length&&((s=window.NativeXR)!=null&&s.xrLibrary)&&Ky();let e=[...jp(),...zv.map(r=>({...r,kind:"app"})),...S.gorillaInstalled?[jf]:[]];Vi==="games"&&(e=e.filter(r=>r.kind==="xr")),Vi==="games"&&S.gorillaInstalled&&(e=[...e,jf]),Vi==="apps"&&(e=e.filter(r=>r.kind==="app")),Vi==="recent"&&(e=e.filter(r=>Ol.includes(r.id)));let t=Zf.trim().toLowerCase();if(t&&(e=e.filter(r=>(r.name+" "+(r.label||"")).toLowerCase().includes(t))),ld==="az")return[...e].sort((r,a)=>r.name.localeCompare(a.name,"pt-BR"));let i=r=>{let a=Ol.indexOf(r.id);return a<0?1e6:a};return[...e].sort((r,a)=>i(r)-i(a))}function mT(n){let e=n.imgUrl?`<img class="logo" src="${n.imgUrl}" alt="" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">`:n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${ee(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug&&!n.imgUrl?`${e}<span class="nm fb">${n.label||n.name}</span>`:t,s=n.id==="gorilla-tag"||n.imgUrl?' style="width:100%;height:100%;display:block"':"";return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand"${s}>${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function gT(){var l;let n=fT(),e=ae("div","lib"),t=pT(Vi),i=he.find(c=>c.id==="library"),s=Vi==="games"?k("libGamesEmpty"):Vi==="recent"?k("libRecentEmpty"):k("appNoResults"),r=(c,u,d)=>`<button class="lib-rail-btn" data-lib-nav="${c}"
    aria-label="${Te(u)}" title="${Te(u)}" aria-pressed="${Vi===c}">${ee(d)}</button>`;e.innerHTML=`<aside class="lib-rail" aria-label="${Te(k("apps"))}">
      ${r("all",k("libAll"),"appGrid")}
      ${r("games",k("libGames"),"controller")}
      ${r("recent",k("recents"),"timer")}
      <span class="lib-rail-spacer"></span>
      ${r("apps",k("apps"),"phone")}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${Te(k("apps"))}</h2>
        <div class="lib-searchbox">${ee("search")}
          <input class="lib-search open" data-q aria-label="${Te(k("searchApps"))}"
            placeholder="${Te(k("searchApps"))}" value="${Te(Zf)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${Te(k("recents"))}">
          <span>${ld==="az"?"A\u2013Z":Te(k("recents"))}</span>${ee("chevronDown")}
        </button>
        <button class="lib-pill" data-filter aria-label="${Te(k("libFilter"))}">
          <span>${Te(k("libFilter"))} \xB7 ${Te(t)} <i>(${n.length})</i></span>${ee("chevronDown")}
        </button>
        <button class="lib-curve" data-lib-curve aria-label="${Te(k("win360"))}"
          title="${Te(k("win360"))}" aria-pressed="${!!(i!=null&&i.curve)}">360\xB0</button>
        <button class="lib-close" data-lib-close aria-label="${Te(k("close"))}" title="${Te(k("close"))}">${ee("x")}</button>
        <button class="lib-repin" data-act="pin" aria-label="${Te(k("repin"))}" title="${Te(k("repin"))}">${ee("crosshair")}</button>
      </div>
      <div class="lib-scroll">
        <div class="lib-grid">
          ${n.map(c=>c.kind==="xr"?ev(c):c.kind==="android"?Hp(c.app):mT(c)).join("")}
          ${n.length?"":`<div class="lib-empty">${Te(s)}</div>`}
        </div>
      </div>
    </section>`;let a=tv();a&&((l=e.querySelector(".lib-scroll"))==null||l.prepend(a));let o=e.querySelector('[data-q]:not([data-q="android"])');return o&&(o.addEventListener("input",()=>{var u;Zf=o.value,ni(!0);let c=(u=jn("library"))==null?void 0:u.querySelector("[data-q]");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),o.addEventListener("focus",()=>di(!0,o))),e.addEventListener("click",c=>{let u=h=>c.target.closest(h),d;if(u("[data-lib-close]")){ft(he.find(h=>h.id==="library"));return}if(d=u("[data-lib-nav]")){Vi=d.dataset.libNav,ni();return}if(u("[data-lib-curve]")){let h=he.find(f=>f.id==="library");h&&(h.setCurve(h.curve>0?0:S.win360K),ni());return}if(u("[data-sort]")){ld=ld==="az"?"recent":"az",ni();return}if(u("[data-filter]")){Vi=Wf[(Wf.indexOf(Vi)+1)%Wf.length],ni();return}if(d=u("[data-android]")){let h=d.dataset.android;Fu(h),zu(h);return}if(d=u("[data-xr]")){let h=d.dataset.xr;Yy()?Jy():qp(h);return}if(d=u("[data-app]")){let h=[...zv,jf].find(g=>g.id===d.dataset.app);if(!h)return;pa(h.id);let f=nm[h.id];f?f():it(h.name+": sem endere\xE7o cadastrado");return}}),e}function ni(n){var i,s,r;let e=jn("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(gT()),e.querySelector(".lib-scroll").scrollTop=t,(r=(s=ie).invalidate)==null||r.call(s)}var sd="Todos",qf="",yT=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function vT(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function Kf(n){var u;zp(!1);let e=((u=n.querySelector(".android-app-scroll"))==null?void 0:u.scrollTop)||0;n.innerHTML="",n.classList.add("android-launcher");let t=ae("div","android-launcher-head");t.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${ee("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${ee("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${ee("refresh")}</button></div>`,t.querySelector(".android-search input").value=qf;let i=Hy(),s=ae("div","android-categories"),r=yT.map(d=>`<button class="android-category" data-category="${d}" aria-pressed="${sd===d}">${d}</button>`).join("");s.innerHTML=r;let a=ae("div","android-results");a.innerHTML='<b>APPS INSTALADOS</b><span class="android-results-count"></span>';let o=ae("div","android-app-scroll"),l=ae("div","android-app-grid"),c=()=>{let d=qf.trim().toLocaleLowerCase("pt-BR"),h=Gy().filter(g=>{let y=sd==="Todos"||vT(g)===sd,p=!d||`${g.label||""} ${g.pkg||""}`.toLocaleLowerCase("pt-BR").includes(d);return y&&p}),f=a.querySelector(".android-results-count");f&&(f.textContent=`${h.length} ${h.length===1?"app":"apps"}`),l.innerHTML=h.length?h.map(g=>Hp(g)).join(""):`<div class="android-empty">${k("noAndroidApps")}</div>`};c(),o.appendChild(l),n.append(t),i&&n.appendChild(i),n.append(s,a,o),o.scrollTop=e,n.oninput=d=>{d.target.matches(".android-search input")&&(qf=d.target.value,c())},n.onclick=d=>{let h=d.target.closest("[data-category]");if(h){sd=h.dataset.category,s.querySelectorAll("[data-category]").forEach(g=>g.setAttribute("aria-pressed",String(g===h))),c();return}if(d.target.closest(".android-refresh")){zp(!0),c();return}let f=d.target.closest("[data-android]");f&&(Fu(f.dataset.android),zu(f.dataset.android))}}function hd(){let n=jn("shizuku");if(n)return Kf(n),Jt(he.find(t=>t.id==="shizuku"));let e=ae("div","android-launcher");return Kf(e),Qt({id:"shizuku",title:"Apps do Android",node:e})}function sm(){var i,s,r,a;let n=he.find(o=>o.id==="library");if(n)return ni(),Jt(n),(s=(i=ie).render)==null||s.call(i,Pe,me),n;let e=ae("div");e.style.cssText="height:100%";let t=Qt({id:"library",title:k("apps"),node:e,w:1040,h:660,chrome:!1,resizable:!1});return ni(),(a=(r=ie).render)==null||a.call(r,Pe,me),t}var xT=[{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#818cf8,#6366f1)",icon:"compass"},{id:"environments",name:"Ambientes",bg:"linear-gradient(145deg,#8b5cf6,#4c1d95)",icon:"vision"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",icon:"settings"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#1db954,#0b3b1e)",slug:"spotify"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#a855f7,#581c87)",slug:"twitch"},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#ffffff,#e2e8f0)",slug:"youtube",lightBg:!0},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b82f6,#1d4ed8)",slug:"facebook"},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",slug:"telegram"},{id:"x",name:"X",bg:"linear-gradient(145deg,#18181b,#050507)",slug:"x"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#6366f1,#4338ca)",slug:"discord"},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#22c55e,#15803d)",slug:"whatsapp"},{id:"shizuku",name:"My apps",bg:"linear-gradient(145deg,#f97316,#ea580c)",icon:"appGrid"}],bT=[{id:"gorilla-tag",name:"Gorilla Tag",bg:"#0d1b12",imgUrl:"./icons/gorilla-tag-logo.jpg",isGame:!0},{id:"roblox-vr",name:"Roblox VR",bg:"#090d16",imgUrl:"./roblox-logo.jpg",icon:"controller",isGame:!0,url:"https://www.roblox.com/"},{id:"beat-vr",name:"Beat Saber Web",bg:"#070814",imgUrl:"./beat-saber-logo.jpg",icon:"controller",isGame:!0,url:"https://moonrider.xyz/?mode=ride&vr=1"},{id:"hyper-vr",name:"Hyper Dash VR",bg:"#0a1426",imgUrl:"./hyper-dash-logo.jpg",icon:"controller",isGame:!0,url:"https://immersiveweb.dev/"},{id:"webxr-games",name:"WebXR Games",bg:"linear-gradient(145deg,#7c3aed,#4c1d95)",icon:"controller",isGame:!0,url:"https://constructarcade.com/"},{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#e50914,#7f1d1d)",slug:"netflix"},{id:"prime",name:"Prime Video",bg:"linear-gradient(145deg,#00a8e1,#0369a1)",slug:"prime"}],Hi="all",cd="recent",Jf="",Xf=!1,Lv='<svg class="ui-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',_T='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M5 19h14"/></svg>',wT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="4 5 20 5 14 12 14 19 10 17 10 12 4 5"/></svg>',ST='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M4 12h7M4 17h4M17 7v11m0 0-3-3m3 3 3-3"/></svg>',MT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 14.5c0-3 2-5.5 4.2-5.5 1.8 0 3.3 1.8 4.8 4.2 1.5 2.4 2.6 3.3 4 3.3 1.4 0 2.5-1.2 2.5-3 0-2.5-1.6-4.5-3.6-4.5-1.5 0-2.7 1.1-4.2 3.4-1.5 2.3-2.9 4.1-4.8 4.1-1.7 0-2.9-.8-2.9-2z"/></svg>',AT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1.5"/><rect x="10" y="5" width="5" height="14" rx="1.5"/><rect x="17" y="5" width="4" height="14" rx="1.2"/></svg>';function ET(){var r;let n=xT.map(a=>({kind:"builtin",...a})),e=bT.map(a=>({kind:"builtin",...a})),t=(((r=jp)==null?void 0:r())||[]).map(a=>({kind:"xr",pkg:a.packageName,name:a.label||a.packageName,iconUrl:a.icon||"",isGame:!0})),i;Hi==="worlds"||Hi==="downloads"?i=[...e.filter(a=>a.isGame),...t,...n]:Hi==="apps"?i=[...n,...e.filter(a=>!a.isGame)]:i=[...n,...e,...t];let s=Jf.trim().toLowerCase();return s&&(i=i.filter(a=>a.name.toLowerCase().includes(s))),cd==="az"&&(i=[...i].sort((a,o)=>a.name.localeCompare(o.name,"pt-BR"))),i}function TT(n){if(n.kind==="xr"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Te(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-glyph">${ee("controller")}</span><span class="spatial-app-init">${Te(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-xr="${Te(n.pkg)}" data-spatial-game="1" title="${Te(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--game">${i}</span>
      <span class="spatial-app-label">${Te(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}if(n.kind==="android"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Te(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-init">${Te(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-android="${Te(n.pkg)}" title="${Te(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--android">${i}</span>
      <span class="spatial-app-label">${Te(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}let e=n.imgUrl?`<img class="spatial-app-img" src="${Te(n.imgUrl)}" alt="" draggable="false">`:n.slug?`<img class="spatial-app-svg" src="./icons/${n.slug}.svg" alt="" draggable="false" onerror="this.remove()">`:n.icon?`<span class="spatial-app-glyph">${ee(n.icon)}</span>`:n.html||`<span class="spatial-app-init">${Te(n.name.slice(0,2))}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-builtin="${Te(n.id)}" ${n.isGame?'data-spatial-game="1"':""} ${n.url?`data-spatial-url="${Te(n.url)}"`:""} title="${Te(n.name)}">
    <span class="spatial-app-circle ${n.lightBg?"spatial-app-circle--light":""}" style="background:${n.bg}">${e}</span>
    <span class="spatial-app-label">${Te(n.name)}</span>
    <i class="spatial-app-tick" aria-hidden="true"></i>
  </button>`}function RT(){let n=ET(),e=rs(),t=Math.round(Math.max(0,Math.min(1,e.batteryLevel??.9))*100),i=e.time&&e.time!=="--:--"?e.time:"9:48",s=S.profileAvatar?`<img src="${Te(S.profileAvatar)}" alt="" class="spatial-hz-avatar-img" draggable="false" />`:ee("user"),r=S.env||"passthrough",a=!!S.mrDim,o=ae("div","spatial-launcher-root");o.innerHTML=`
    <header class="spatial-hz-header">
      <div class="spatial-hz-top-status" aria-label="Status e Ambiente MR">
        <span class="spatial-hz-top-bat"><span class="spatial-hz-bat-pill"><i style="width:${t}%"></i></span><strong data-spatial-bat-top>${t}%</strong></span>
        <span class="spatial-hz-top-clock" data-spatial-clock-top>${Te(i)}</span>
        <span class="spatial-hz-top-wifi">${ee("wifi")}</span>
        <button type="button" class="spatial-hz-mrdim-circle ${a?"on":""}" data-spatial-act="mr-dim" title="${a?"Ambiente MR: Escuro (toque para Normal)":"Escurecer Ambiente MR em volta dos apps"}" aria-pressed="${a?"true":"false"}">
          ${ee("vision")}
        </button>
      </div>
      <h2 class="spatial-hz-title">Library</h2>
      <div class="spatial-hz-env-pills" aria-label="Ambientes Virtuais">
        <button type="button" class="spatial-hz-env-pill ${r==="passthrough"?"on":""}" data-spatial-env="passthrough" title="C\xE2mera Real (Passthrough)">C\xE2mera</button>
        <button type="button" class="spatial-hz-env-pill spatial-hz-mrdim-pill ${a?"on":""}" data-spatial-act="mr-dim" title="Alternar Ambiente MR Escuro ou Normal">${a?"MR Escuro: ON":"Escurecer MR"}</button>
        <button type="button" class="spatial-hz-env-pill ${r==="sunset"?"on":""}" data-spatial-env="sunset" title="Ambiente P\xF4r do Sol 360\xB0">Sunset</button>
        <button type="button" class="spatial-hz-env-pill ${r==="lagoon"?"on":""}" data-spatial-env="lagoon" title="Ambiente Lagoa 360\xB0">Lagoon</button>
        <button type="button" class="spatial-hz-env-pill ${r==="dark"?"on":""}" data-spatial-env="dark" title="Ambiente Escuro 360\xB0">Dark</button>
      </div>
      <label class="spatial-hz-search">
        ${ee("search")}
        <input type="text" class="spatial-hz-search-input" data-spatial-search placeholder="Search" value="${Te(Jf)}" aria-label="Search Library" />
      </label>
    </header>

    <div class="spatial-launcher-stage">
      <aside class="spatial-hz-rail" aria-label="Library navigation">
        <button type="button" class="spatial-hz-nav-item ${Hi==="all"?"on":""}" data-spatial-nav="all">
          ${Lv}<span>All</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Hi==="apps"?"on":""}" data-spatial-nav="apps">
          ${ee("appGrid")}<span>Apps</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Hi==="worlds"?"on":""}" data-spatial-nav="worlds">
          ${ee("location")}<span>Worlds</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Hi==="horizon"?"on":""}" data-spatial-nav="horizon">
          ${ee("refresh")}<span>Horizon+</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Hi==="downloads"?"on":""}" data-spatial-nav="downloads">
          ${_T}<span>Downloads</span>
        </button>
        <div class="spatial-hz-rail-divider" aria-hidden="true"></div>
        <button type="button" class="spatial-hz-nav-item spatial-hz-nav-item--store" data-spatial-act="store">
          <span class="spatial-hz-store-badge">${ee("store")}</span><span>Store</span>
        </button>
      </aside>

      <div class="spatial-honeycomb-wrap">
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--left" data-spatial-scroll="left" aria-label="Rolar para a esquerda" title="Rolar para a esquerda">\u2039</button>
        <div class="spatial-honeycomb" data-spatial-scroll-track role="list">
          ${n.map(TT).join("")}
        </div>
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--right" data-spatial-scroll="right" aria-label="Rolar para a direita" title="Rolar para a direita">\u203A</button>
      </div>

      <aside class="spatial-hz-filters" aria-label="Filters and sorting">
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="filter" title="Filter: Installed">
          ${wT}<span>Filter: Insta...</span>${ee("chevronDown")}
        </button>
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="sort" title="Sort">
          ${ST}<span>Sort: ${cd==="az"?"A\u2013Z":"Recen..."}</span>${ee("chevronDown")}
        </button>
      </aside>
    </div>

    <footer class="spatial-hz-bottom" aria-label="Horizon bar">
      <div class="spatial-hz-bot-left">
        <button type="button" class="spatial-hz-game-pill" data-spatial-act="store" title="Store">${ee("controller")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="env" title="C\xE2mera Traseira (Ambiente Real)">${ee("camera")}</button>
      </div>

      <div class="spatial-hz-bot-center">
        <div class="spatial-hz-bot-main">
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="recenter" title="Recentralizar">${MT}</button>
          <button type="button" class="spatial-hz-home-circle" data-spatial-nav="all" title="Library">${Lv}</button>
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="close" title="Alternar para Dock">${AT}</button>
        </div>
        <div class="spatial-hz-bot-status">
          ${ee("wifi")}
          <span data-spatial-clock>${Te(i)}</span>
          <span class="spatial-hz-bat-pill"><i style="width:${t}%"></i></span>
          <span data-spatial-bat>${t}%</span>
        </div>
      </div>

      <div class="spatial-hz-bot-right">
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="library" title="Biblioteca Completa">${ee("notification")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="settings" title="Configura\xE7\xF5es">${ee("sliders")}</button>
        <button type="button" class="spatial-hz-avatar-btn" data-spatial-act="settings" title="Perfil">${s}</button>
      </div>
    </footer>

    <div class="browser-tab-popup spatial-browser-popup" data-browser-tab-menu="spatial" hidden>
      <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
      <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
    </div>
  `;let l=o.querySelector("[data-spatial-search]");l&&l.addEventListener("input",()=>{Jf=l.value,Gi()});let c=o.querySelector('[data-spatial-builtin="browser"]'),u=o.querySelector('[data-browser-tab-menu="spatial"]'),d=null;if(c&&u){c.addEventListener("pointerdown",()=>{clearTimeout(d),d=setTimeout(()=>{var g,y,p,m,b,v;c.dataset.holdConsumed="1",u.hidden=!1,(y=(g=window.NativeXR)==null?void 0:g.click)==null||y.call(g),(m=(p=ie).invalidate)==null||m.call(p),(v=(b=ie).render)==null||v.call(b,Pe,me)},2e3)});let f=()=>{clearTimeout(d),d=null};c.addEventListener("pointerup",f),c.addEventListener("pointercancel",f),c.addEventListener("pointerleave",f)}let h=o.querySelector("[data-spatial-scroll-track]");if(h){let f=0,g=0,y=!1;h.addEventListener("pointerdown",p=>{f=p.clientX,g=h.scrollLeft,y=!1}),h.addEventListener("pointermove",p=>{var b,v;if(p.buttons!==1)return;let m=p.clientX-f;Math.abs(m)>6&&(y=!0,h.scrollLeft=g-m,(v=(b=ie).invalidate)==null||v.call(b))}),h.addEventListener("wheel",p=>{var m,b;Math.abs(p.deltaY)>Math.abs(p.deltaX)&&(h.scrollLeft+=p.deltaY,p.preventDefault()),(b=(m=ie).invalidate)==null||b.call(m)},{passive:!1}),h.addEventListener("scroll",()=>{var p,m;return(m=(p=ie).invalidate)==null?void 0:m.call(p)},{passive:!0}),h._wasDragging=()=>y}return o.addEventListener("click",f=>{var R,x,U,w,_;let g=f.target.closest("[data-spatial-scroll]");if(g&&h){f.stopPropagation();let I=g.dataset.spatialScroll==="left"?-1:1;h.scrollLeft=Math.max(0,h.scrollLeft+I*240),(x=(R=ie).invalidate)==null||x.call(R),(w=(U=ie).render)==null||w.call(U,Pe,me);return}let y=f.target.closest("[data-browser-opt]");if(y){f.stopPropagation();let I=y.dataset.browserOpt||"new-tab";u&&(u.hidden=!0),Uv(I);return}let p=f.target.closest("[data-spatial-xr]");if(p){let I=p.dataset.spatialXr;I&&qp(I);return}let m=f.target.closest("[data-spatial-builtin]");if(m){if(m.dataset.holdConsumed==="1"){m.dataset.holdConsumed="0";return}u&&!u.hidden&&(u.hidden=!0);let I=m.dataset.spatialBuiltin;if(I==="environments"){ud();return}if(I==="shizuku"){hd();return}if(I==="gorilla-tag"){yo();return}if(I==="beat-vr"){md();return}if(I==="roblox-vr"||I==="roblox"){Ul();return}if(m.dataset.spatialUrl){fd("browser",m.title||"Navegador",m.dataset.spatialUrl);return}let N=nm[I];N&&N();return}let b=f.target.closest("[data-spatial-android]");if(b){let I=b.dataset.spatialAndroid;Fu(I),zu(I);return}let v=f.target.closest("[data-spatial-env]");if(v){let I=v.dataset.spatialEnv||"passthrough";wi(I),Gi();return}let M=f.target.closest("[data-spatial-nav]");if(M){Hi=M.dataset.spatialNav||"all",Gi();return}let E=(_=f.target.closest("[data-spatial-act]"))==null?void 0:_.dataset.spatialAct;E==="settings"?Bl():E==="store"?im():E==="library"?sm():E==="recenter"?Oi():E==="sort"?(cd=cd==="az"?"recent":"az",Gi()):E==="filter"?(Hi=Hi==="downloads"?"all":"downloads",Gi()):E==="env"?ud():E==="mr-dim"?(du(!S.mrDim),Gi(),it(S.mrDim?"Ambiente MR: Escuro":"Ambiente MR: Normal")):E==="close"&&yd(!1)}),o}function Gi(){var a,o,l,c,u,d;let n=jn("spatial-launcher");if(!n)return;let e=n.querySelector(".spatial-honeycomb"),t=(e==null?void 0:e.scrollTop)||0,i=(e==null?void 0:e.scrollLeft)||0,s=((o=(a=n.querySelector(".finger-hover"))==null?void 0:a.dataset)==null?void 0:o.spatialBuiltin)||null;n.innerHTML="",n.appendChild(RT());let r=n.querySelector(".spatial-honeycomb");r&&(r.scrollTop=t,r.scrollLeft=i),s&&((c=(l=n.querySelector(`[data-spatial-builtin="${s}"]`))==null?void 0:l.classList)==null||c.add("finger-hover")),(d=(u=ie).invalidate)==null||d.call(u)}var Qf=!1,em=!1,Pv=0;function pd(){var e,t,i,s;if(Xf)return;let n=he.find(r=>r.id==="spatial-launcher");if(!(!S.spatialLauncher||!n)){Xf=!0;try{let r=he.filter(o=>o.id!=="spatial-launcher"&&o.id!=="fist-menu"&&!o.onboarding&&!o.hidden);if(r.length>1){let o=r[r.length-1];for(let l of r)l!==o&&ft(l)}r.length!==Pv&&(Qf=!1,em=!1,Pv=r.length);let a=Qf||r.length>0&&!em;n.hidden!==a&&(n.setHidden(a),(t=(e=ie).invalidate)==null||t.call(e),(s=(i=ie).render)==null||s.call(i,Pe,me))}finally{Xf=!1}}}ze("wins",pd);ze("env",()=>{jn("spatial-launcher")&&Gi(),jn("fist-menu")&&xo()});ze("mr-dim",()=>{jn("spatial-launcher")&&Gi(),jn("fist-menu")&&xo()});function Hv(){var t,i,s,r,a,o,l,c;if(S.spatialLauncher||he.some(u=>u.id==="spatial-launcher")){let u=he.find(h=>h.id==="spatial-launcher");u||(S.spatialLauncher=1,u=gd());let d=!u.hidden;return Qf=d,em=!d,u.setHidden(d),(i=(t=ie).invalidate)==null||i.call(t),(r=(s=ie).render)==null||r.call(s,Pe,me),it(d?"Spatial App ocultado":"Spatial App exibido"),!d}let n=document.querySelector(".dock"),e=!n||n.hidden||getComputedStyle(n).display==="none";return e?(Yt(!1),Bt(!0),it("Dock exibida")):(Bt(!1),Yt(!0),it("Dock ocultada")),(o=(a=ie).invalidate)==null||o.call(a),(c=(l=ie).render)==null||c.call(l,Pe,me),e}window.nextvrToggleSpatialAndDockFromGesture=Hv;function gd(){var i,s,r,a,o,l,c,u;let n=he.find(d=>d.id==="spatial-launcher");if(n)return Gi(),pd(),(s=(i=ie).invalidate)==null||s.call(i),(a=(r=ie).render)==null||a.call(r,Pe,me),n;S.env="passthrough",ki(!0);let e=ae("div","spatial-launcher-host"),t=Qt({id:"spatial-launcher",title:"Spatial App",node:e,w:1040,h:660,onboarding:!0,chrome:!1,resizable:!1});return t.handle.hidden=!0,t.resizeHandle.hidden=!0,Gi(),pd(),(l=(o=ie).invalidate)==null||l.call(o),(u=(c=ie).render)==null||u.call(c,Pe,me),t}function CT(){let n=S.env||"passthrough",e=ae("div","fist-quick-menu");return e.innerHTML=`
    <div class="fist-menu-head">
      <div class="fist-menu-badge">${ee("crosshair")}</div>
      <div>
        <h3 class="fist-menu-title">Menu R\xE1pido</h3>
        <p class="fist-menu-sub">Atalho de soco (2s) \xB7 Escolha uma a\xE7\xE3o</p>
      </div>
    </div>

    <div class="fist-menu-actions">
      <button type="button" class="fist-menu-btn fist-menu-btn--primary" data-fist-act="recenter">
        ${ee("move")}
        <div>
          <strong>Recentrar Dock e Vis\xE3o</strong>
          <small>Traga a dock e janelas para a dire\xE7\xE3o do olhar</small>
        </div>
      </button>

      <button type="button" class="fist-menu-btn" data-fist-act="environments">
        ${ee("vision")}
        <div>
          <strong>Entrar em Ambiente Virtual</strong>
          <small>Abrir painel completo de ambientes 360\xB0</small>
        </div>
      </button>

      <button type="button" class="fist-menu-btn ${S.mrDim?"fist-menu-btn--primary":""}" data-fist-act="mr-dim">
        ${ee("camera")}
        <div>
          <strong>Ambiente MR: ${S.mrDim?"Escuro (Ativo)":"Normal"}</strong>
          <small>Escurecer o ambiente real em volta dos apps flutuantes</small>
        </div>
      </button>
    </div>

    <div class="fist-menu-env-section">
      <span class="fist-menu-section-lbl">Trocar Ambiente Agora</span>
      <div class="fist-menu-env-grid">
        <button type="button" class="fist-env-chip ${n==="passthrough"?"on":""}" data-fist-env="passthrough">
          ${ee("camera")}<span>C\xE2mera Real</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="sunset"?"on":""}" data-fist-env="sunset">
          ${ee("vision")}<span>Sunset 360\xB0</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="lagoon"?"on":""}" data-fist-env="lagoon">
          ${ee("vision")}<span>Lagoon 360\xB0</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="dark"?"on":""}" data-fist-env="dark">
          ${ee("vision")}<span>Escuro 360\xB0</span>
        </button>
      </div>
    </div>

    <div class="fist-menu-footer-row">
      <button type="button" class="fist-menu-sec-btn" data-fist-act="toggle-dock">
        ${ee("appGrid")}<span>Mostrar / Ocultar Dock</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="toggle-spatial">
        ${ee("maximize")}<span>${S.spatialLauncher?"Modo Dock":"Apps Flutuantes"}</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="settings">
        ${ee("settings")}<span>Ajustes</span>
      </button>
    </div>
  `,e.addEventListener("click",t=>{let i=t.target.closest("[data-fist-env]");if(i){let a=i.dataset.fistEnv||"passthrough";wi(a),xo(),it("Ambiente: "+a);return}let s=t.target.closest("[data-fist-act]");if(!s)return;let r=s.dataset.fistAct;r==="recenter"?(S.spatialLauncher||(Yt(!1),Bt(!0)),Oi(),ft("fist-menu")):r==="environments"?(ft("fist-menu"),ud()):r==="mr-dim"?(du(!S.mrDim),xo(),it(S.mrDim?"Ambiente MR: Escuro":"Ambiente MR: Normal")):r==="toggle-dock"?(Hv(),ft("fist-menu")):r==="toggle-spatial"?(ft("fist-menu"),yd(!S.spatialLauncher)):r==="settings"?(ft("fist-menu"),Bl()):r==="close"&&ft("fist-menu")}),e}function xo(){var e,t;let n=jn("fist-menu");n&&(n.innerHTML="",n.appendChild(CT()),(t=(e=ie).invalidate)==null||t.call(e))}function LT(){var i,s,r,a,o,l,c,u;let n=he.find(d=>d.id==="fist-menu");if(n)return n.setHidden(!1),xo(),Jt(n),(s=(i=ie).invalidate)==null||s.call(i),(a=(r=ie).render)==null||a.call(r,Pe,me),n;let e=ae("div","fist-quick-menu-host"),t=Qt({id:"fist-menu",title:"Menu R\xE1pido",node:e,w:520,h:430});return xo(),(l=(o=ie).invalidate)==null||l.call(o),(u=(c=ie).render)==null||u.call(c,Pe,me),t}window.nextvrOpenFistQuickMenu=LT;function yd(n){var e,t,i,s;if(S.spatialLauncher=n?1:0,S.spatialLauncher&&(S.env="passthrough",ki(!0)),Ve(S),S.spatialLauncher){for(let r of[...he])r.id!=="spatial-launcher"&&!r.onboarding&&ft(r);Yt(!0),Bt(!1),gd()}else{let r=he.find(a=>a.id==="spatial-launcher");r&&ft(r),Yt(!1),!fa&&!us&&!Vs&&Bt(!0),(t=(e=ie).invalidate)==null||t.call(e),(s=(i=ie).render)==null||s.call(i,Pe,me)}}ze("spatialLauncher",n=>yd(n));ze("device-status",n=>{let e=jn("spatial-launcher");if(!e)return;let t=e.querySelector("[data-spatial-clock]");t&&(n!=null&&n.time)&&n.time!=="--:--"&&(t.textContent=n.time);let i=e.querySelector("[data-spatial-bat]"),s=e.querySelector(".spatial-hz-bat-pill i");if(typeof(n==null?void 0:n.batteryLevel)=="number"){let r=Math.round(Math.max(0,Math.min(1,n.batteryLevel))*100);i&&(i.textContent=`${r}%`),s&&(s.style.width=`${r}%`)}});var Mr=Object.freeze({compass:ee("compass"),store:ee("store"),people:ee("people"),camera:ee("camera"),gear:ee("settings"),play:ee("play"),shizuku:ee("shizuku"),vision:ee("vision")});function PT(){ki(S.env!=="passthrough")}function Vv(){let n=Ou("virtual-environment");if(!n)return;let e=S.env!=="passthrough";n.setAttribute("aria-pressed",String(e)),n.title=`${k("envVirtual")} \xB7 ${e?k("on"):k("off")}`}function vd(){Sy([{kind:"avatar",id:"profile",label:k("profile"),run:OT},{kind:"status",id:"status",label:k("settings"),run:oT},{kind:"tool",id:"virtual-environment",label:k("envVirtual"),svg:Mr.vision,run:PT},{kind:"spacer"},{id:"browser",win:"browser",label:k("browser"),svg:Mr.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>Sn("browser",k("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:k("store"),svg:Mr.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:im},{id:"discord",win:"discord",label:"Discord",svg:Mr.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>Sn("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:k("gallery"),svg:Mr.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:tm},{id:"settings",win:"control-center",label:k("settings"),svg:Mr.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:Bl},{id:"youtube",win:"youtube",label:"YouTube",svg:Mr.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>Sn("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:k("shizuku"),svg:Mr.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:hd},{id:"library",win:"library",launcher:!0,label:k("apps"),run:sm}]),Vv()}ze("env",Vv);ze("lang",vd);function IT(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=Vy(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=ae("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}Wy();iv();Zy();ze("appsState",()=>{IT(),Gv()});ze("xr",()=>{Gv();let n=jn("settings");n!=null&&n.querySelector("[data-xr-page]")&&Fv(n.querySelector("[data-xr-page]"))});var $f=0;function Gv(){$f||($f=setTimeout(()=>{$f=0,jn("library")&&ni(),jn("spatial-launcher")&&Gi();let n=jn("shizuku");n&&Kf(n)},500))}var NT=document.getElementById("boot"),y2=document.getElementById("bootGo"),Vs=null;NT.hidden=!0;function Wv(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function qv(n,e,t=!1){let i=ae("div",t?"langwin slim":"langwin"),s=a=>cu(a).label;return(()=>{let a=t?"":`<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
         <p class="lq-tag">Aponte e pin\xE7a<br>para escolher.</p>
       </div>`;i.innerHTML=`${t?`<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${s(n)}</span></div>`:""}
      <div class="lq-main">
        ${a}
        <div class="lang-options" role="list">${Qo.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${k("langSoon")}</i>`}</button>`).join("")}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${t?"Escolha o idioma.":"Aponte com a m\xE3o e fa\xE7a uma pin\xE7a."}</span>
        <button class="lq-go">${k("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>e(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function DT(){var e,t;let n=Qt({id:"language",title:"Next VR",w:390,h:500,onboarding:!0,node:qv(S.lang||Wv(),kT)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}ze("handframe",n=>{let e=Vs==null?void 0:Vs.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function kT(n){if(!Vs)return;qr(n),Vs&&(ft(Vs),Vs=null),Bt(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=Xr(),t=S.handsOn?Ki():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Oi(),280)}var fa=null,us=null,xd=new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1");function Xv(){var e;if(S.gorillaInstalled=1,Ve(S),pa("gorilla-tag",!0),ni(),ds(),xd&&ge&&typeof((e=window.NativeXR)==null?void 0:e.startVrSession)=="function"){S.autoLaunchGorilla=1,Ve(S),Fl();return}Fl(),yo()}ze("gorilla-installed",()=>{S.gorillaInstalled=1,Ve(S),pa("gorilla-tag",!0),ni(),ds()});function $v(){us&&us.remove();let n=document.createElement("div");return n.id="entry-fullscreen",n.appendChild(nf({fullscreen:!0,onStart:Fl,onLaunchGorilla:Xv,getStatus:rs})),document.body.appendChild(n),us=n,n}function Yv(){return Qt({id:"entry-menu",title:"NextVR",w:840,h:525,chrome:!1,resizable:!1,onboarding:!0,node:nf({fullscreen:!1,onStart:Fl,onLaunchGorilla:Xv,getStatus:rs})})}async function Fl(n=!1){var r,a,o,l,c,u,d,h,f,g,y,p,m;let e=n===!0;S.lang||qr(Wv()||"pt");let t=!e&&xd&&ge&&typeof((r=window.NativeXR)==null?void 0:r.startVrSession)=="function";if(us&&!t&&(us.remove(),us=null),fa?(ft(fa),fa=null):ft("entry-menu"),S.spatialLauncher){for(let b of[...he])b.id!=="spatial-launcher"&&!b.onboarding&&ft(b);Yt(!0),Bt(!1),gd()}else ft("spatial-launcher"),Yt(!1),Bt(!0);if(document.getElementById("stat").hidden=!1,ge||(document.getElementById("perm").hidden=!1),(o=(a=window.NativeXR)==null?void 0:a.handVisuals)==null||o.call(a,!!S.handDraw),(c=(l=window.NativeXR)==null?void 0:l.wideCamera)==null||c.call(l,!!S.wideCamera),e||(d=(u=window.NativeXR)==null?void 0:u.startVrSession)==null||d.call(u,JSON.stringify(S)),(f=(h=ie).invalidate)==null||f.call(h),(y=(g=ie).render)==null||y.call(g,Pe,me),t){(m=(p=us==null?void 0:us.querySelector(".entry-menu-root"))==null?void 0:p.resetToHome)==null||m.call(p);return}let i=Xr(),s=S.handsOn?Ki():Promise.resolve(!1);await Promise.allSettled([i,s]),ge||setTimeout(()=>Oi(),280)}function OT(){var n;return ge&&((n=window.NativeXR)!=null&&n.openEntryMenu)?(window.NativeXR.openEntryMenu(),null):(Bt(!1),document.getElementById("stat").hidden=!0,xd||!ge?$v():(fa=Yv(),fa))}var Iv=!1;window.nextvrEnterWorkspace=n=>{var e,t,i,s,r,a,o,l,c,u;if(n)try{let d=typeof n=="string"?JSON.parse(n):n;d.handDraw!==void 0&&(S.handDraw=d.handDraw?1:0),d.showFps!==void 0&&(S.showFps=d.showFps?1:0),d.mediaVolume!==void 0&&(S.mediaVolume=d.mediaVolume),d.brightness!==void 0&&(S.brightness=d.brightness),d.quality!==void 0&&(S.quality=d.quality,Se("quality")),d.wideCamera!==void 0&&(S.wideCamera=d.wideCamera?1:0),d.spatialLauncher!==void 0&&(S.spatialLauncher=d.spatialLauncher?1:0),d.dockSnapSlot!==void 0&&(S.dockSnapSlot=d.dockSnapSlot?1:0),d.fingerTouch!==void 0&&(S.fingerTouch=d.fingerTouch?1:0),d.mrDim!==void 0&&du(!!d.mrDim),d.sixdof!==void 0&&(S.sixdof=d.sixdof?1:0,S.sixdof||Xt.reset(),(t=(e=window.NativeXR)==null?void 0:e.setSixDofEnabled)==null||t.call(e,S.sixdof!==0)),d.gorillaInstalled!==void 0&&(S.gorillaInstalled=d.gorillaInstalled?1:0,S.gorillaInstalled&&(pa("gorilla-tag",!0),ni(),ds())),d.profileName!==void 0&&(S.profileName=d.profileName),d.profileAvatar!==void 0&&(S.profileAvatar=d.profileAvatar),d.lang&&qr(d.lang),!S.spatialLauncher&&d.entryEnvChosen&&d.env&&d.env!=="passthrough"?wi(d.env):(S.env="passthrough",ki(!0));let h=!!d.autoLaunchGorilla;S.autoLaunchGorilla&&(S.autoLaunchGorilla=0),Ve(S),vd(),(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!!S.handDraw),(a=(r=window.NativeXR)==null?void 0:r.wideCamera)==null||a.call(r,!!S.wideCamera),(l=(o=window.NativeXR)==null?void 0:o.setFingerTouch)==null||l.call(o,S.fingerTouch!==0),h&&setTimeout(()=>yo(),120)}catch{}else ge&&(ki(!0),(u=(c=window.NativeXR)==null?void 0:c.setFingerTouch)==null||u.call(c,S.fingerTouch!==0));Fl(!0),Iv||(Iv=!0,setTimeout(()=>Oi(),220))};ze("profile-updated",()=>vd());document.getElementById("btnGyro").onclick=()=>Xr();document.getElementById("btnHand").onclick=()=>op()?lp():Ki();ze("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});ze("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});vd();var Nv=new URLSearchParams(location.search).get("onboarding")||(location.hash.includes("onboarding=language")?"language":location.hash.includes("onboarding=skip")?"skip":""),rd,Dv,ad,kv,od,Ov;xd?(Bt(!1),document.getElementById("stat").hidden=!0,(Dv=(rd=window.NativeXR)==null?void 0:rd.handVisuals)==null||Dv.call(rd,!!S.handDraw),$v()):Nv==="language"?(Bt(!1),document.getElementById("stat").hidden=!0,Vs=DT()):Nv==="skip"?(S.spatialLauncher?(Yt(!0),Bt(!1),gd()):(Yt(!1),Bt(!0)),ge&&((kv=(ad=window.NativeXR)==null?void 0:ad.wideCamera)==null||kv.call(ad,!!S.wideCamera),Xr(),S.handsOn&&Ki()),document.getElementById("perm").hidden=!1,setTimeout(()=>Oi(),280)):(Bt(!1),document.getElementById("stat").hidden=!0,ge&&((Ov=(od=window.NativeXR)==null?void 0:od.handVisuals)==null||Ov.call(od,!!S.handDraw),Xr(),S.handsOn&&Ki()),fa=Yv());ge&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=ie).invalidate)==null||e.call(n),Xr(),S.handsOn&&Ki()},window.nextvrSuspend=()=>{lp()},ze("hands",()=>{document.getElementById("perm").hidden=!0}));ze("game:settings",()=>Bl());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
