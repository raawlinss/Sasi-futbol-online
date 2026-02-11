import { ACTION_TYPES } from '../../shared/protocol/index.js';

function isMobileLike() {
  try {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return true;
  } catch {
    // ignore
  }
  return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

function setHeldKey(player, key, down) {
  if (!player || !player.keys) return;
  player.keys[key] = !!down;
}

export function installMobileControls({ world, network }) {
  if (!isMobileLike()) {
    return { enabled: false, cleanup() {} };
  }

  const root = document.getElementById('mobile-controls');
  const joy = document.getElementById('mobile-joystick');
  const stick = document.getElementById('mj-stick');
  const lookpad = document.getElementById('mobile-lookpad');

  const btnShoot = document.getElementById('m-btn-shoot');
  const btnPass = document.getElementById('m-btn-pass');
  const btnThrough = document.getElementById('m-btn-through');
  const btnCross = document.getElementById('m-btn-cross');
  const btnSlide = document.getElementById('m-btn-slide');
  const btnSprint = document.getElementById('m-btn-sprint');
  const btnMenu = document.getElementById('m-btn-menu');
  const btnChat = document.getElementById('m-btn-chat');

  const setVisible = (visible) => {
    if (!root) return;
    if (visible) root.classList.remove('hidden');
    else root.classList.add('hidden');
  };

  // Don't block login screen. Show controls only after join is accepted.
  setVisible(false);

  const state = {
    joyPointerId: null,
    joyCx: 0,
    joyCy: 0,
    joyRadius: 52,
    lookPointerId: null,
    lastLookX: 0,
    lastLookY: 0
  };

  function getPlayer() {
    return world?.player || null;
  }

  function setMove(x, z) {
    const p = getPlayer();
    p?.setMobileMove?.(x, z);
  }

  function resetMove() {
    setMove(0, 0);
    if (stick) stick.style.transform = 'translate(-50%, -50%)';
  }

  function onJoyDown(e) {
    if (!joy) return;
    const p = getPlayer();
    if (!p || p.isSpectator || window.isReplayActive) return;

    state.joyPointerId = e.pointerId;
    try { joy.setPointerCapture(e.pointerId); } catch { /* ignore */ }

    const r = joy.getBoundingClientRect();
    state.joyCx = r.left + r.width / 2;
    state.joyCy = r.top + r.height / 2;
    state.joyRadius = Math.max(34, Math.min(70, r.width * 0.36));
    e.preventDefault?.();
  }

  function onJoyMove(e) {
    if (state.joyPointerId === null || e.pointerId !== state.joyPointerId) return;
    const dx = e.clientX - state.joyCx;
    const dy = e.clientY - state.joyCy;

    const mag = Math.hypot(dx, dy);
    const m = mag > 1e-6 ? Math.min(1, mag / state.joyRadius) : 0;
    const nx = mag > 1e-6 ? (dx / mag) : 0;
    const ny = mag > 1e-6 ? (dy / mag) : 0;

    // local input: +X = right, +Z = forward
    const moveX = clamp(nx * m, -1, 1);
    const moveZ = clamp((-ny) * m, -1, 1);
    setMove(moveX, moveZ);

    if (stick) {
      const px = clamp(dx, -state.joyRadius, state.joyRadius);
      const py = clamp(dy, -state.joyRadius, state.joyRadius);
      stick.style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
    }
    e.preventDefault?.();
  }

  function onJoyUp(e) {
    if (state.joyPointerId === null || e.pointerId !== state.joyPointerId) return;
    try { joy?.releasePointerCapture?.(e.pointerId); } catch { /* ignore */ }
    state.joyPointerId = null;
    resetMove();
    e.preventDefault?.();
  }

  function onLookDown(e) {
    const p = getPlayer();
    if (!p || p.isSpectator || window.isReplayActive) return;
    state.lookPointerId = e.pointerId;
    state.lastLookX = e.clientX;
    state.lastLookY = e.clientY;
    try { lookpad?.setPointerCapture?.(e.pointerId); } catch { /* ignore */ }
    e.preventDefault?.();
  }

  function onLookMove(e) {
    if (state.lookPointerId === null || e.pointerId !== state.lookPointerId) return;
    const dx = e.clientX - state.lastLookX;
    const dy = e.clientY - state.lastLookY;
    state.lastLookX = e.clientX;
    state.lastLookY = e.clientY;

    const p = getPlayer();
    // Touch moves are larger than mouse movementX/Y. Scale down a bit.
    p?.applyLookDelta?.(dx, dy, 0.55);
    e.preventDefault?.();
  }

  function onLookUp(e) {
    if (state.lookPointerId === null || e.pointerId !== state.lookPointerId) return;
    try { lookpad?.releasePointerCapture?.(e.pointerId); } catch { /* ignore */ }
    state.lookPointerId = null;
    e.preventDefault?.();
  }

  function tapAction(type, charge = 0.55, curve = 0) {
    const p = getPlayer();
    if (!p || p.isSpectator || window.isReplayActive) return;
    // Prefer player's helper if it exists, else go direct.
    if (p.sendAction) {
      p.sendAction(type, charge, curve);
    } else {
      network?.sendActionRequest?.({ type, charge, curve });
    }
  }

  function trySlide() {
    const p = getPlayer();
    if (!p || p.isSpectator || window.isReplayActive) return;
    // Mirror keyboard behavior to keep feel consistent.
    const myId = window.network?.myId || null;
    const localOwnsBall = !!(myId && world?.ball?.controlledBy === myId);
    if (localOwnsBall) return;
    if (p.slideCooldown > 0) return;
    p.slideCooldown = 0.9;
    p.startLocalSlide?.();
    p.sendAction?.(ACTION_TYPES.slide);
  }

  function toggleMenu() {
    const loginScreen = document.getElementById('login-screen');
    const lobbyScreen = document.getElementById('lobby-screen');
    if (!lobbyScreen || !loginScreen) return;
    if (!loginScreen.classList.contains('hidden')) return;
    if (!window.inRoom) return;

    const open = lobbyScreen.style.display === 'flex';
    if (open) {
      lobbyScreen.style.display = 'none';
    } else {
      lobbyScreen.style.display = 'flex';
    }
  }

  function focusChat() {
    const chat = document.getElementById('chat-input');
    if (!chat) return;
    chat.focus?.();
  }

  // Joystick
  joy?.addEventListener('pointerdown', onJoyDown, { passive: false });
  joy?.addEventListener('pointermove', onJoyMove, { passive: false });
  joy?.addEventListener('pointerup', onJoyUp, { passive: false });
  joy?.addEventListener('pointercancel', onJoyUp, { passive: false });

  // Lookpad
  lookpad?.addEventListener('pointerdown', onLookDown, { passive: false });
  lookpad?.addEventListener('pointermove', onLookMove, { passive: false });
  lookpad?.addEventListener('pointerup', onLookUp, { passive: false });
  lookpad?.addEventListener('pointercancel', onLookUp, { passive: false });

  // Buttons
  btnShoot?.addEventListener('pointerdown', (e) => {
    setHeldKey(getPlayer(), ' ', true);
    e.preventDefault?.();
  }, { passive: false });
  btnShoot?.addEventListener('pointerup', (e) => {
    setHeldKey(getPlayer(), ' ', false);
    e.preventDefault?.();
  }, { passive: false });
  btnShoot?.addEventListener('pointercancel', (e) => {
    setHeldKey(getPlayer(), ' ', false);
    e.preventDefault?.();
  }, { passive: false });

  btnSprint?.addEventListener('pointerdown', (e) => { setHeldKey(getPlayer(), 'shift', true); e.preventDefault?.(); }, { passive: false });
  btnSprint?.addEventListener('pointerup', (e) => { setHeldKey(getPlayer(), 'shift', false); e.preventDefault?.(); }, { passive: false });
  btnSprint?.addEventListener('pointercancel', (e) => { setHeldKey(getPlayer(), 'shift', false); e.preventDefault?.(); }, { passive: false });

  btnPass?.addEventListener('click', () => tapAction(ACTION_TYPES.pass, 0.45, 0));
  btnThrough?.addEventListener('click', () => tapAction(ACTION_TYPES.through, 0.58, 0));
  btnCross?.addEventListener('click', () => tapAction(ACTION_TYPES.cross, 0.62, 0));
  btnSlide?.addEventListener('click', () => trySlide());
  btnMenu?.addEventListener('click', () => toggleMenu());
  btnChat?.addEventListener('click', () => focusChat());

  const onJoinAccepted = () => setVisible(true);
  const onJoinDenied = () => setVisible(false);
  const onSocketState = (e) => {
    if (e?.detail?.connected === false) setVisible(false);
  };
  window.addEventListener('join:accepted', onJoinAccepted);
  window.addEventListener('join:denied', onJoinDenied);
  window.addEventListener('socket:state', onSocketState);

  resetMove();

  return {
    enabled: true,
    setVisible,
    cleanup() {
      joy?.removeEventListener('pointerdown', onJoyDown);
      joy?.removeEventListener('pointermove', onJoyMove);
      joy?.removeEventListener('pointerup', onJoyUp);
      joy?.removeEventListener('pointercancel', onJoyUp);
      lookpad?.removeEventListener('pointerdown', onLookDown);
      lookpad?.removeEventListener('pointermove', onLookMove);
      lookpad?.removeEventListener('pointerup', onLookUp);
      lookpad?.removeEventListener('pointercancel', onLookUp);
      window.removeEventListener('join:accepted', onJoinAccepted);
      window.removeEventListener('join:denied', onJoinDenied);
      window.removeEventListener('socket:state', onSocketState);
      setVisible(false);
      resetMove();
    }
  };
}
