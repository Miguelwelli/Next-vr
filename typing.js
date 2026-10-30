/*
 * NextVR — o motor de digitação do teclado flutuante.
 *
 * UM arquivo, DOIS lugares de uso, por isso ele não é um módulo esbuild:
 *   1. a casca o carrega com `<script defer src="./typing.js">` e escreve nos campos do DOM dela;
 *   2. o lado nativo injeta o MESMO arquivo como document-start script nas páginas hospedadas
 *      (os WebView de browser e o site que a janela mostra), para que um `<input>` do YouTube
 *      receba exatamente a mesma tecla que um `<input>` da casca.
 * Duas cópias deste arquivo divergiam sempre que um site recebia uma tecla de um jeito e o outro
 * de outro — daí o arquivo ser único e copiado byte a byte por web/build.mjs.
 *
 * O que ele NÃO é: um teclado. Ele só escreve. Layout, shift, repetição e o teclado deitado no
 * mundo vivem em windows.js. A entrada é sempre "uma tecla" (um caractere, ⌫ ou ⏎), nunca um texto.
 */
(() => {
  'use strict';
  // Document start e um re-load podem rodar este arquivo mais de uma vez na mesma página.
  if (window.__nextvrTyping) return;

  /*
   * Campos que aceitam digitação. O seletor tem de ser idêntico ao de NextVrActivity.EDITABLE_SELECTOR:
   * os dois decidem, no mesmo toque, se o teclado abre; se discordarem, um toque abriria o teclado
   * aqui e o fecharia lá.
   */
  const SELECTOR =
    'input:not([type=button]):not([type=submit]):not([type=reset]):not([type=checkbox])' +
    ':not([type=radio]):not([type=range]):not([type=color]):not([type=file]),' +
    'textarea,[contenteditable]:not([contenteditable="false"])';

  /** O campo que aceita texto a partir de `el` — ou null se `el` não for campo nem estiver dentro de um. */
  const editable = el => {
    if (!el || el.nodeType !== 1) return null;
    if (el.matches && el.matches(SELECTOR)) return el;
    return typeof el.closest === 'function' ? el.closest(SELECTOR) : null;
  };
  /** O campo em foco agora: é nele que um teclado real escreveria. */
  const live = () => editable(document.activeElement);

  const isControl = el => el.tagName === 'INPUT' || el.tagName === 'TEXTAREA';

  /* Os quatro estados de uma tecla. Um toque é uma tecla inteira; segurar é keydown + repetições
   * com `repeat` + um único keyup no fim — que é o que um jogo 3D no browser escuta para andar. */
  const KEY_DOWN = 1, KEY_REPEAT = 2, KEY_UP = 3;

  /* ---------------------------------------------------------------- eventos */

  /** Dispara um keydown/keyup de verdade. Devolve false quando a página cancelou com preventDefault. */
  function keyEvent(el, type, init) {
    let event;
    try {
      event = new KeyboardEvent(type, Object.assign({ bubbles: true, cancelable: true, composed: true }, init));
    } catch (_) {
      event = new Event(type, { bubbles: true, cancelable: true });
    }
    return el.dispatchEvent(event);
  }

  /** Dispara beforeinput → aplica → input. A página pode vetar a alteração com preventDefault. */
  function manualInput(el, text, inputType, mutate) {
    let allowed = true;
    try {
      if (typeof InputEvent === 'function') {
        allowed = el.dispatchEvent(new InputEvent('beforeinput', { bubbles: true, cancelable: true, inputType, data: text }));
      }
    } catch (_) { /* InputEvent é opcional: segue para a alteração */ }
    if (!allowed) return false;
    mutate();
    try { el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType, data: text })); }
    catch (_) { el.dispatchEvent(new Event('input', { bubbles: true })); }
    return true;
  }

  /**
   * O caminho fiel: `execCommand` é exatamente o comando que o Blink executa quando o IME de
   * verdade digita, então o cursor, a validação do campo (number, date, maxlength) e o `input`
   * saem do próprio navegador. Devolve false quando não dá para usar, e aí o reserva abaixo assume.
   *
   * <p>Observed, not assumed: o Blink dispara `input` mas NÃO dispara `beforeinput` por este
   * caminho. O cancelamento de uma tecla continua existindo pelo `keydown`, que é cancelável e
   * chega ao mesmo lugar para quem quer barrar a tecla; quem precisa de `beforeinput` para rewrite
   * recebe o `input` logo depois.
   */
  function execCommand(el, command, value) {
    try {
      if (typeof document.queryCommandEnabled !== 'function' || !document.queryCommandEnabled(command)) return false;
      return !!document.execCommand(command, false, value);
    } catch (_) { return false; }
  }

  /** O conteúdo do campo, do jeito que muda quando algo é escrito nele. */
  const snapshot = el => isControl(el) ? el.value : el.innerHTML;

  /**
   * Executa um comando de edição e só credits se o campo MUDOU.
   *
   * <p>O `execCommand` responde `true` mesmo quando o quadro do renderizador ainda não percebeu o
   * foco que acabamos de dar — a tecla seguinte logo depois de abrir o teclado é exatamente esse
   * caso, e uma tecla que responde sucesso sem escrever é o pior defeito que um teclado pode ter.
   * Aí o reserva assume em vez de fingir.
   */
  function edited(el, command, value, before) {
    if (!execCommand(el, command, value)) return false;
    return snapshot(el) !== before;
  }

  /* --------------------------------------------------------------- o cursor */

  /** Intervalo selecionado de um <input>/<textarea>. */
  function selection(el) {
    const start = typeof el.selectionStart === 'number' ? el.selectionStart : el.value.length;
    const end = typeof el.selectionEnd === 'number' ? el.selectionEnd : start;
    return [start, end];
  }

  /** O Range real dentro de um contenteditable — ou null quando o cursor está em outro lugar. */
  function domRange(el) {
    const sel = document.getSelection();
    const range = sel && sel.rangeCount ? sel.getRangeAt(0) : null;
    return range && el.contains(range.commonAncestorContainer) ? range : null;
  }

  /** Põe o cursor no fim do campo: é onde o texto novo vai nascer. */
  function caretToEnd(el) {
    if (!isControl(el)) return;
    const at = el.value.length;
    try { el.setSelectionRange(at, at); } catch (_) { /* type=number/date não têm seleção */ }
  }

  /**
   * Um code unit para trás pode ser a metade baixa de um par substituto (emoji, caractere
   * composto). Apagar só a metade deixa um caractere quebrado na página, então o par inteiro sai.
   */
  function stepBack(value, at) {
    if (at <= 0) return 0;
    const low = value.charCodeAt(at - 1);
    if (at >= 2 && low >= 0xDC00 && low <= 0xDFFF) {
      const high = value.charCodeAt(at - 2);
      if (high >= 0xD800 && high <= 0xDBFF) return at - 2;
    }
    return at - 1;
  }

  /* ------------------------------------------------------------- a edição */

  /*
   * Só o caminho de reserva escreve `el.value` direto. Os tipos que o navegador normaliza
   * (número, data, hora) recusam a atribuição e ESVAZIAM o campo, então a tecla é filtrada antes:
   * o campo de um teclado real nunca aceita uma letra num input type=number.
   */
  const NORMALIZED = {
    number: /[0-9.eE+\-]/, date: /[0-9\-\/]/, 'datetime-local': /[0-9\-\/:T]/,
    month: /[0-9\-]/, time: /[0-9:.]/, week: /[0-9\-]/,
  };

  function writeField(el, text, start, end, inputType) {
    const before = el.value;
    return manualInput(el, text, inputType, () => {
      el.value = before.slice(0, start) + text + before.slice(end);
      if (el.value === before && text !== '') { /* recusou a tecla: nada a fazer */ return; }
      const caret = start + text.length;
      try { el.setSelectionRange(caret, caret); } catch (_) {}
    });
  }

  function insertIntoField(el, text) {
    if (el.tagName === 'INPUT' && /[\r\n]/.test(text)) return false;      // campo de uma linha só
    const before = snapshot(el);
    if (edited(el, 'insertText', text, before)) return true;
    if (isControl(el)) {
      const [start, end] = selection(el);
      const keep = NORMALIZED[el.type];
      const typed = keep ? Array.from(text).filter(c => keep.test(c)).join('') : text;
      if (!typed) return false;
      return writeField(el, typed, start, end, 'insertText');
    }
    const current = domRange(el);
    return manualInput(el, text, 'insertText', () => {
      const range = current || (() => { const n = document.createRange(); n.selectNodeContents(el); n.collapse(false); return n; })();
      range.deleteContents();
      const node = document.createTextNode(text);
      range.insertNode(node);
      range.setStartAfter(node);
      range.collapse(true);
      const sel = document.getSelection();
      if (sel) { sel.removeAllRanges(); sel.addRange(range); }
    });
  }

  function deleteFromField(el) {
    const before = snapshot(el);
    if (edited(el, 'delete', null, before)) return true;
    if (isControl(el)) {
      let [start, end] = selection(el);
      if (start === end) { if (start === 0) return false; start = end = stepBack(el.value, start); }
      return writeField(el, '', start, end, 'deleteContentBackward');
    }
    const range = domRange(el);
    if (!range) return false;
    // contenteditable sem execCommand: recua o Range até o texto anterior e apaga.
    if (range.collapsed) {
      const node = range.startContainer;
      if (node.nodeType !== 3) return false;            // nada de texto imediatamente antes
      const from = stepBack(node.data, range.startOffset);
      if (from === range.startOffset) return false;
      range.setStart(node, from);
    }
    return manualInput(el, null, 'deleteContentBackward', () => {
      range.deleteContents();
      const sel = document.getSelection();
      if (sel) { sel.removeAllRanges(); sel.addRange(range); }
    });
  }

  function submitForm(form) {
    try {
      // requestSubmit roda a validação e dispara o evento submit; form.submit() não dispara nada,
      // e é por isso que a barra de endereço da casca nunca navegava num Enter de verdade.
      if (typeof form.requestSubmit === 'function') form.requestSubmit();
      else form.submit();
      return true;
    } catch (_) { return false; }
  }

  /* ------------------------------------------------------------ as teclas */

  const PUNCTUATION = { ' ': 'Space', ',': 'Comma', '.': 'Period', '-': 'Minus', '=': 'Equal', 'ç': 'Semicolon' };
  const descriptor = (ch, shift, repeat) => ({
    key: ch,
    code: PUNCTUATION[ch] || (/^[a-z]$/i.test(ch) ? 'Key' + ch.toUpperCase() : /^[0-9]$/.test(ch) ? 'Digit' + ch : undefined),
    shiftKey: !!shift,
    // `repeat` é a diferença entre "digitar" e "segurar". Um jogo 3D no navegador começa a andar no
    // keydown e para no keyup: o que mantém ele andando é a sequência de keydown com repeat=true, e
    // um keyup no meio do caminho (o que uma repetição-ingênua fazia) é o personagem parar e dar
    // um passo a cada tecla.
    repeat: !!repeat,
  });

  function insertNewline(el) {
    const before = snapshot(el);
    if (edited(el, 'insertLineBreak', null, before)) return true;      // contenteditable
    if (edited(el, 'insertText', '\n', before)) return true;           // textarea
    if (!isControl(el)) return insertIntoField(el, '\n');
    const [start, end] = selection(el);
    return writeField(el, '\n', start, end, 'insertLineBreak');
  }

  function enterKey(el) {
    // Enter num campo de uma linha dentro de um formulário envia o formulário; em textarea e
    // contenteditable é uma nova linha.
    const submitted = el.form && el.tagName === 'INPUT' ? submitForm(el.form) : false;
    if (!submitted) insertNewline(el);
    return true;
  }

  /** Foca um campo e o traz para dentro da vista: sem isso o cursor fica fora do campo de visão. */
  function reveal(el) {
    const field = editable(el);
    // Um campo de uma janela que ja fechou chega aqui pelo atalho "ultimo campo": focar um no
    // destacado nao faria nada e o teclado ficaria apontando para o vazio.
    if (!field || !field.isConnected) return null;
    if (document.activeElement !== field) {
      try { field.focus({ preventScroll: true }); } catch (_) { try { field.focus(); } catch (__) {} }
      caretToEnd(field);
    }
    try { field.scrollIntoView({ block: 'center', inline: 'nearest' }); } catch (_) {}
    return field;
  }

  /*
   * Para onde a tecla vai. Um campo em foco leva o texto; sem campo nenhum, a tecla vai para o
   * elemento que está realmente em foco — o canvas de um jogo 3D, ou o body. Sem isto, um jogo
   * rodando no browser da janela não receberia tecla nenhuma: `document.activeElement` seria o body
   * e o teclado pareceria quebrado justamente onde ele mais importa.
   */
  function keyTarget() {
    const field = live();
    if (field) return field;
    const active = document.activeElement;
    return active && active !== document.body ? active : document.body;
  }

  /** O nome e o código da tecla, com o shift aplicado ao caractere que ela escreve. */
  const stroke = (k, shift, repeat) =>
    descriptor(k === '⌫' || k === '⏎' ? k : (shift ? k.toUpperCase() : k), shift, repeat);

  /**
   * A entrada única, usada exatamente igual pela casca e pelo lado nativo.
   *
   * `k` é uma tecla: um caractere (espaço inclusive), ⌫ ou ⏎. `phase` é o estado da tecla:
   *
   * - `0` (ou ausente) — a tecla inteira: keydown, o texto entra, keyup. É o que um toque dá;
   * - `KEY_DOWN` — só o keydown: a tecla fica segurada;
   * - `KEY_REPEAT` — keydown com `repeat: true` e o texto entra de novo, sem keyup no meio;
   * - `KEY_UP` — só o keyup: a tecla foi solta.
   *
   * Separar os estados é o que faz `segurar W` andar num jogo em vez de piscar uma letra por vez.
   */
  function key(k, shift, phase) {
    if (typeof k !== 'string' || !k) return false;
    const el = keyTarget();
    if (!el) return false;
    const capital = !!shift;
    if (phase === KEY_UP) return keyEvent(el, 'keyup', stroke(k, capital, false));
    const field = editable(el);
    // Foco sem scroll: abrir o teclado já revelou o campo, e repetir o scroll a cada tecla brigaria
    // com a rolagem que o usuário está fazendo na página.
    if (field && document.activeElement !== field) {
      try { field.focus({ preventScroll: true }); } catch (_) { try { field.focus(); } catch (__) {} }
    }
    // keydown primeiro: um site que faz preventDefault() no keydown quer a tecla e não o texto.
    if (!keyEvent(el, 'keydown', stroke(k, capital, phase === KEY_REPEAT))) return false;
    if (field) {
      if (k === '⌫') deleteFromField(field);
      else if (k === '⏎') enterKey(field);
      else insertIntoField(field, capital ? k.toUpperCase() : k);
    }
    // Segurar é keydown + repetições: o keyup só sai quando a tecla sobe de verdade. Um keyup no meio
    // da repetição é o personagem parando e dando um passo por letra.
    if (phase === KEY_DOWN || phase === KEY_REPEAT) return true;
    return keyEvent(el, 'keyup', stroke(k, capital, false));
  }

  const api = {
    selector: SELECTOR, editable, live, focus: reveal, key,
    down: KEY_DOWN, repeat: KEY_REPEAT, up: KEY_UP,
  };
  try {
    Object.defineProperty(window, '__nextvrTyping', { value: api, writable: false, configurable: true });
  } catch (_) {
    window.__nextvrTyping = api;
  }
})();