import { World } from './world/World.js';
import { NetworkManager } from './network/NetworkManager.js';
import { LoudSnippetPlayer } from './audio/LoudSnippetPlayer.js';
import { installMobileControls } from './input/MobileControls.js';
import { QUICK_COMMANDS } from '../shared/protocol/index.js';

let world;
let network;
let loudDj;
let mobileControls;

try {
  document.querySelector('#app').innerHTML = '<div id="game-container"></div>';

  world = new World(document.querySelector('#game-container'));
  window.world = world;

  network = new NetworkManager(world);
  window.network = network;

  // Touch UI (joystick + buttons) for mobile.
  try {
    mobileControls = installMobileControls({ world, network });
    window.mobileControls = mobileControls;
  } catch {
    mobileControls = null;
  }

  // Background "DJ" that plays short snippets from loud parts of the MP3.
  try {
    const audioUrl = new URL('../ses/Oğuz Sasinin Ball3Dde sinir krizi geçirdiği anlar.mp3', import.meta.url).href;
    loudDj = new LoudSnippetPlayer(audioUrl, {
      volume: 0.92,
      // More frequent + longer snippets.
      intervalMinMs: 9000,
      intervalMaxMs: 13000,
      snippetMinMs: 6000,
      snippetMaxMs: 9000
    });
    window.loudDj = loudDj;
    world.renderer?.domElement?.addEventListener?.('click', () => loudDj?.unlock?.(), { passive: true });
    // Best-effort autoplay: browsers will still require a gesture; this ensures the first interaction enables sound.
    window.addEventListener('pointerdown', () => loudDj?.unlock?.(), { passive: true });
  } catch {
    loudDj = null;
  }

  let last = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const delta = Math.min(0.05, (now - last) / 1000);
    last = now;
    network.update(now, delta);
    world.update(delta);
  }
  requestAnimationFrame(animate);
} catch (e) {
  console.error('Critical Game Error:', e);
  alert('Game Error: ' + e.message);
}

const loginScreen = document.getElementById('login-screen');
const loginBtn = document.getElementById('login-btn');
const nicknameInput = document.getElementById('nickname-input');
const adminPassInput = document.getElementById('admin-pass-input');
const lobbyScreen = document.getElementById('lobby-screen');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const adminPanel = document.getElementById('admin-panel');
const spectatorPanel = document.getElementById('spectator-panel');
const lobbySpectatorToggleBtn = document.getElementById('lobby-spectator-toggle');
const lobbyLeaveRoomBtn = document.getElementById('lobby-leave-room');

window.isAdmin = false;
window.isReplayActive = false;
window.inRoom = false;

function lockPointerIfNeeded() {
  world?.renderer?.domElement?.requestPointerLock?.();
}

function sendChatFromInput() {
  const text = chatInput?.value?.trim();
  if (!text) return;
  network.sendChat(text);
  chatInput.value = '';
}

function updateAdminPasswordVisibility() {
  if (!adminPassInput || !nicknameInput) return;
  const nick = `${nicknameInput.value || ''}`.trim();
  const isRawlins = nick.toLowerCase() === 'rawlins';
  if (isRawlins) {
    adminPassInput.classList.remove('hidden');
  } else {
    adminPassInput.classList.add('hidden');
    adminPassInput.value = '';
  }
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const nick = nicknameInput.value.trim();
    if (nick.length < 1) {
      alert('Nick en az 1 karakter olmali.');
      return;
    }

    loudDj?.unlock?.();
    // Pre-init during login so peak analysis doesn't hitch during gameplay.
    loudDj?.init?.().catch(() => { /* ignore */ });

    window.isAdmin = false;
    window.inRoom = false;

    const pass = adminPassInput && !adminPassInput.classList.contains('hidden')
      ? adminPassInput.value
      : null;
    network.joinGame(nick, pass);
  });
}

if (nicknameInput) {
  nicknameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loginBtn?.click();
  });

  nicknameInput.addEventListener('input', () => {
    updateAdminPasswordVisibility();
  });
}

if (adminPassInput) {
  adminPassInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loginBtn?.click();
  });
}

updateAdminPasswordVisibility();

if (chatSendBtn) {
  chatSendBtn.addEventListener('click', () => {
    sendChatFromInput();
    chatInput?.blur?.();
    lockPointerIfNeeded();
  });
}

if (chatInput) {
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendChatFromInput();
      chatInput.blur();
      lockPointerIfNeeded();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!loginScreen.classList.contains('hidden')) return;
    if (!window.inRoom) return;

    const open = lobbyScreen.style.display === 'flex';
    if (open) {
      lobbyScreen.style.display = 'none';
      lockPointerIfNeeded();
    } else {
      lobbyScreen.style.display = 'flex';
      document.exitPointerLock();
    }
    return;
  }

  const tag = document.activeElement?.tagName;
  const isTyping = tag === 'INPUT' || tag === 'TEXTAREA';
  if (isTyping) return;

  if (e.key === 'Enter') {
    if (!loginScreen.classList.contains('hidden')) return;
    if (!window.inRoom) return;
    if (!chatInput) return;
    e.preventDefault();
    chatInput.focus();
    document.exitPointerLock();
    return;
  }

  if (e.key === '1') network.sendQuickCommand(QUICK_COMMANDS.passMe);
  if (e.key === '2') network.sendQuickCommand(QUICK_COMMANDS.imOpen);
  if (e.key === '3') network.sendQuickCommand(QUICK_COMMANDS.fallBack);
  if (e.key === '4') network.sendQuickCommand(QUICK_COMMANDS.shoot);
});

for (const btn of document.querySelectorAll('[data-quick-command]')) {
  btn.addEventListener('click', () => {
    const code = btn.getAttribute('data-quick-command');
    if (code) network.sendQuickCommand(code);
  });
}

const capApplyBtn = document.getElementById('admin-cap-apply');
const capInput = document.getElementById('admin-cap-input');
const addBotBtn = document.getElementById('admin-add-bot');
const removeBotBtn = document.getElementById('admin-remove-bot');
const restartMatchBtn = document.getElementById('admin-restart-match');
const durationSelect = document.getElementById('admin-duration-select');
const durationApplyBtn = document.getElementById('admin-duration-apply');
const weatherSelect = document.getElementById('admin-weather-select');
const weatherApplyBtn = document.getElementById('admin-weather-apply');

if (capApplyBtn) {
  capApplyBtn.addEventListener('click', () => {
    const cap = Number.parseInt(capInput?.value ?? '24', 10);
    if (Number.isFinite(cap)) {
      network.setActiveCap(cap);
    }
  });
}

if (addBotBtn) {
  addBotBtn.addEventListener('click', () => {
    network.addBot();
  });
}

if (removeBotBtn) {
  removeBotBtn.addEventListener('click', () => {
    network.removeBot();
  });
}

if (restartMatchBtn) {
  restartMatchBtn.addEventListener('click', () => {
    network.sendAdminCommand('restartMatch', {});
  });
}

if (durationApplyBtn) {
  durationApplyBtn.addEventListener('click', () => {
    const v = Number.parseInt(durationSelect?.value ?? '0', 10);
    if (Number.isFinite(v)) {
      network.sendAdminCommand('setMatchDuration', { durationMin: v });
    }
  });
}

if (weatherApplyBtn) {
  weatherApplyBtn.addEventListener('click', () => {
    const mode = `${weatherSelect?.value || 'day'}`.trim();
    network.sendAdminCommand('setWeatherMode', { mode });
  });
}

const specJoinBtn = document.getElementById('spec-join-btn');
const specReturnBtn = document.getElementById('spec-return-btn');
const seatSelect = document.getElementById('seat-select');
const seatApplyBtn = document.getElementById('seat-apply-btn');
const freecamBtn = document.getElementById('spec-freecam-btn');

if (seatSelect && seatSelect.options.length === 0) {
  for (let i = 0; i < 60; i += 1) {
    const opt = document.createElement('option');
    opt.value = `${i}`;
    opt.textContent = `Tribun Koltuk ${i + 1}`;
    seatSelect.appendChild(opt);
  }
}

if (lobbySpectatorToggleBtn) {
  lobbySpectatorToggleBtn.addEventListener('click', () => {
    if (window.isSpectator) {
      network.sendSpectatorRequest('return');
    } else {
      network.sendSpectatorRequest('join', Number.parseInt(seatSelect?.value ?? '0', 10));
    }
  });
}

if (lobbyLeaveRoomBtn) {
  lobbyLeaveRoomBtn.addEventListener('click', () => {
    lobbyScreen.style.display = 'none';
    network.leaveToLogin();
    window.inRoom = false;
    loginScreen.classList.remove('hidden');
    document.exitPointerLock();
    loudDj?.stop?.();
    mobileControls?.setVisible?.(false);
  });
}

if (specJoinBtn) {
  specJoinBtn.addEventListener('click', () => {
    network.sendSpectatorRequest('join', Number.parseInt(seatSelect?.value ?? '0', 10));
  });
}

if (specReturnBtn) {
  specReturnBtn.addEventListener('click', () => {
    network.sendSpectatorRequest('return');
  });
}

if (seatApplyBtn) {
  seatApplyBtn.addEventListener('click', () => {
    network.sendSpectatorRequest('seat', Number.parseInt(seatSelect?.value ?? '0', 10));
  });
}

if (freecamBtn) {
  freecamBtn.addEventListener('click', () => {
    network.sendSpectatorRequest('freecam');
  });
}

window.addEventListener('room:error', (e) => {
  const msg = `${e?.detail?.message || 'error'}`;
  alert(msg);
});

window.addEventListener('join:accepted', () => {
  loginScreen.classList.add('hidden');
  window.inRoom = true;
  lobbyScreen.style.display = 'none';
  lockPointerIfNeeded();

  if (loudDj) {
    loudDj.stop();
    loudDj.unlock();
    loudDj.init().then((ok) => {
      if (ok) loudDj.start();
    }).catch(() => { /* ignore */ });
  }
});

window.addEventListener('join:denied', (e) => {
  const reason = `${e?.detail?.reason || ''}`;
  const message = `${e?.detail?.message || 'Giris reddedildi.'}`;
  window.inRoom = false;
  loginScreen.classList.remove('hidden');
  lobbyScreen.style.display = 'none';
  document.exitPointerLock();

  if (reason === 'bad_password' || reason === 'admin_taken') {
    updateAdminPasswordVisibility();
    if (adminPassInput) adminPassInput.value = '';
  }

  loudDj?.stop?.();
  alert(message);
});
