(() => {
  'use strict';

  const strings = {
    en: { title: 'Send a little hello', close: 'Close', sent: 'Sent to Ali!', love: 'Love', smile: 'Smile', snack: 'Snack', hug: 'Hug' },
    ar: { title: 'أرسل تحية صغيرة', close: 'إغلاق', sent: 'تم الإرسال إلى علي!', love: 'حب', smile: 'ابتسامة', snack: 'وجبة', hug: 'عناق' }
  };
  const icons = {
    love: '<svg viewBox="0 0 64 64" aria-hidden="true"><path fill="#e64b59" d="M32 55S7 40 7 23C7 9 25 6 32 20 39 6 57 9 57 23 57 40 32 55 32 55Z"/><path fill="#ff9b9f" d="M17 22c1-6 7-8 11-5-5 0-7 3-8 7Z"/></svg>',
    smile: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26" fill="#ffd34e"/><circle cx="23" cy="26" r="3" fill="#59452c"/><circle cx="41" cy="26" r="3" fill="#59452c"/><path d="M20 37c3 8 8 12 12 12s9-4 12-12" fill="none" stroke="#59452c" stroke-width="4" stroke-linecap="round"/></svg>',
    snack: '<svg viewBox="0 0 64 64" aria-hidden="true"><path fill="#c77b36" d="M9 27c2-12 11-19 23-19s21 7 23 19H9Z"/><path fill="#f1c75b" d="M8 29h48v6H8z"/><path fill="#5c9c58" d="m11 36 8-5 8 5 8-5 8 5 10-5 5 6-5 5H13z"/><path fill="#9b4935" d="M12 44h40c-3 9-10 13-20 13S15 53 12 44Z"/><path fill="#f7d89a" d="M18 18c8-5 20-5 28 0"/></svg>',
    hug: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M7 36c8-12 16-14 23-5l2 3 2-3c7-9 15-7 23 5l-8 13c-6 7-13 6-17 1-4 5-11 6-17-1L7 36Z" fill="#d88d68"/><path d="M32 43s-9-6-9-12c0-5 7-7 9-2 2-5 9-3 9 2 0 6-9 12-9 12Z" fill="#e64b59"/><path d="m12 34 10 8M52 34 42 42" fill="none" stroke="#9f5f48" stroke-width="4" stroke-linecap="round"/></svg>'
  };

  function close(doc) {
    const modal = doc?.querySelector('.v3-message-backdrop');
    if (!modal) return;
    const returnFocus = modal._returnFocus;
    doc.removeEventListener('keydown', modal._onKeydown, true);
    if (modal._timer) clearTimeout(modal._timer);
    modal.remove();
    if (returnFocus?.isConnected) returnFocus.focus();
    if (!modal._closed) {
      modal._closed = true;
      modal._onClose?.();
    }
  }

  function open(doc, lang, onSent, returnFocus) {
    if (!doc?.body) return;
    close(doc);
    const ar = lang === 'ar';
    const copy = ar ? strings.ar : strings.en;
    const backdrop = doc.createElement('div');
    backdrop.className = 'v3-message-backdrop';
    backdrop.dir = ar ? 'rtl' : 'ltr';
    backdrop._returnFocus = returnFocus;
    backdrop.innerHTML = `<section class="v3-message-dialog" role="dialog" aria-modal="true" aria-labelledby="v3-message-title"><button class="v3-message-close" type="button" aria-label="${copy.close}">×</button><h2 id="v3-message-title">${copy.title}</h2><div class="v3-message-grid">${['love','smile','snack','hug'].map(key => `<button class="v3-message-choice" type="button" data-message="${key}" aria-label="${copy[key]}">${icons[key]}<span>${copy[key]}</span></button>`).join('')}</div></section>`;
    const dialog = backdrop.firstElementChild;
    const closeButton = dialog.querySelector('.v3-message-close');
    const onKeydown = event => { if (event.key === 'Escape') { event.preventDefault(); close(doc); } };
    backdrop._onKeydown = onKeydown;
    doc.addEventListener('keydown', onKeydown, true);
    closeButton.addEventListener('click', () => close(doc));
    backdrop.addEventListener('click', event => { if (event.target === backdrop) close(doc); });
    dialog.querySelectorAll('.v3-message-choice').forEach(button => button.addEventListener('click', () => {
      const key = button.dataset.message;
      dialog.innerHTML = `<button class="v3-message-close" type="button" aria-label="${copy.close}">×</button><div class="v3-message-success" role="status"><svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="35" fill="#4d9b68"/><path d="m22 41 12 12 25-27" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg><h2>${copy.sent}</h2><p class="v3-message-sent-label"><span>${copy[key]}</span>${icons[key]}</p></div>`;
      dialog.querySelector('.v3-message-close').addEventListener('click', () => close(doc));
      if (!backdrop._sent) { backdrop._sent = true; onSent?.(key); }
      backdrop._timer = setTimeout(() => close(doc), 1200);
    }));
    doc.body.appendChild(backdrop);
    closeButton.focus();
  }

  function confirm(doc, lang, title, body, returnFocus, onClose) {
    if (!doc?.body) return;
    close(doc);
    const ar = lang === 'ar';
    const copy = ar ? strings.ar : strings.en;
    const backdrop = doc.createElement('div');
    backdrop.className = 'v3-message-backdrop';
    backdrop.dir = ar ? 'rtl' : 'ltr';
    backdrop._returnFocus = returnFocus;
    backdrop._onClose = onClose;
    backdrop.innerHTML = `<section class="v3-message-dialog v3-message-confirm" role="dialog" aria-modal="true" aria-labelledby="v3-message-confirm-title" aria-describedby="v3-message-confirm-body"><button class="v3-message-close" type="button" aria-label="${copy.close}">×</button><div class="v3-message-success" role="status"><svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="35" fill="#4d9b68"/><path d="m22 41 12 12 25-27" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg><h2 id="v3-message-confirm-title"></h2><p id="v3-message-confirm-body"></p></div></section>`;
    const dialog = backdrop.firstElementChild;
    dialog.querySelector('#v3-message-confirm-title').textContent = title;
    dialog.querySelector('#v3-message-confirm-body').textContent = body;
    const dismiss = () => close(doc);
    const onKeydown = event => { if (event.key === 'Escape') { event.preventDefault(); dismiss(); } };
    backdrop._onKeydown = onKeydown;
    doc.addEventListener('keydown', onKeydown, true);
    dialog.querySelector('.v3-message-close').addEventListener('click', dismiss);
    backdrop.addEventListener('click', event => { if (event.target === backdrop) dismiss(); });
    doc.body.appendChild(backdrop);
    dialog.querySelector('.v3-message-close').focus();
    backdrop._timer = setTimeout(dismiss, 1200);
  }

  window.NaseejV3MessageModal = { open, close, confirm };
})();
