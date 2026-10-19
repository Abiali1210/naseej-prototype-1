(() => {
  'use strict';
  window.naseejPreviewVersion = 'v1';
  const registry = { v1: { native: true }, v2: { src: './v2/index.html?embedded=1' }, v3: { src: './v3/index.html?embedded=1' } };
  const latestVersion = Object.keys(registry).filter((version) => version !== 'v1').at(-1) || 'v1';
  const frame = document.getElementById('version-frame');
  const select = document.getElementById('version-select');
  const role = document.getElementById('role-switch');
  const choice = document.getElementById('show-role-choice');
  const reset = document.getElementById('reset-demo');
  const live = document.getElementById('live-region');
  const media = document.getElementById('media-input');
  const phone = [...document.getElementById('app-frame').children].filter((node) => node !== frame);
  let active = 'v1';
  let pendingRole = null;
  const validRole = (value) => ['Grandparent', 'Parent', 'Grandchild'].includes(value);
  const send = (type, value) => {
    if (!frame.contentWindow) return;
    const message = value === undefined ? { type } : { type, role: value };
    frame.contentWindow.postMessage(message, location.origin === 'null' ? '*' : location.origin);
  };
  function selectVersion(value) {
    const version = registry[value] ? value : 'v1';
    select.value = version;
    if (version === active) return;
    if (version === 'v1') {
      send('naseej:deactivate');
      frame.hidden = true;
      frame.removeAttribute('src');
      phone.forEach((node) => { node.inert = false; node.removeAttribute('aria-hidden'); });
      live?.removeAttribute('aria-hidden');
      if (media) media.disabled = false;
      window.naseejPreviewVersion = active = 'v1';
      return;
    }
    window.naseejPreviewVersion = active = version;
    phone.forEach((node) => { node.inert = true; node.setAttribute('aria-hidden', 'true'); });
    live?.setAttribute('aria-hidden', 'true');
    if (media) media.disabled = true;
    frame.hidden = false;
    pendingRole = role?.value || 'Grandparent';
    frame.onload = () => { if (active === version) { pendingRole = role?.value || pendingRole || 'Grandparent'; send('naseej:role', pendingRole); } };
    frame.src = registry[version].src;
  }
  select.addEventListener('change', () => selectVersion(select.value));
  role?.addEventListener('change', () => {
    if (active === 'v1' && validRole(role.value)) return;
    if (active === 'v2' && validRole(role.value)) send('naseej:role', role.value);
  });
  choice?.addEventListener('click', () => { if (active === 'v2') send('naseej:role-choice'); });
  reset?.addEventListener('click', () => { if (active === 'v2') send('naseej:reset'); });
  window.addEventListener('message', (event) => {
    if (event.source !== frame.contentWindow || !event.data || event.data.type !== 'naseej:role-selected' || !validRole(event.data.role)) return;
    if (role) role.value = event.data.role;
  });
  const demoTools = document.getElementById('demo-tools');
  if (demoTools && innerWidth >= 1000) demoTools.open = true;
  if (latestVersion !== 'v1') selectVersion(latestVersion);
  else select.value = 'v1';
})();
