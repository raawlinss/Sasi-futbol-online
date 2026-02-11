export class LoudSnippetPlayer {
  constructor(url, opts = {}) {
    this.url = `${url || ''}`;
    this.opts = {
      // More frequent intervals.
      intervalMinMs: 9000,
      intervalMaxMs: 13000,
      // Default snippet length. Tweaked to be more noticeable (requested: ~2x longer).
      snippetMinMs: 6000,
      snippetMaxMs: 9000,
      fadeMs: 50,
      volume: 0.9,
      maxPeaks: 60,
      minSeparationSec: 2.5,
      ...opts
    };

    this.ctx = null;
    this.master = null;
    this.buffer = null;
    this.peaks = [];
    this.running = false;
    this.timer = null;
    this.initialized = false;
    this.initPromise = null;
  }

  getCacheKey() {
    // Bump version when the peak scoring algorithm changes.
    return `loudDjPeaks:v2:${this.url}`;
  }

  unlock() {
    try {
      if (!this.ctx) {
        // WebAudio must be created/resumed from a user gesture in most browsers.
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.master = this.ctx.createGain();
        this.master.gain.value = Math.max(0, Math.min(1, Number(this.opts.volume) || 0.9));
        this.master.connect(this.ctx.destination);
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume?.();
      }
    } catch {
      // ignore
    }
  }

  async init() {
    if (this.initialized) return true;
    if (this.initPromise) return this.initPromise;

    this.initPromise = (async () => {
      if (!this.url) return false;
      this.unlock();
      if (!this.ctx) return false;

      const resp = await fetch(this.url);
      if (!resp.ok) return false;
      const arr = await resp.arrayBuffer();
      const buffer = await this.ctx.decodeAudioData(arr);
      this.buffer = buffer;

      let cachedPeaks = null;
      try {
        const raw = localStorage.getItem(this.getCacheKey());
        if (raw) {
          const parsed = JSON.parse(raw);
          if (
            parsed
            && parsed.v === 1
            && Math.abs(Number(parsed.duration || 0) - Number(buffer.duration || 0)) < 0.5
            && Array.isArray(parsed.peaks)
            && parsed.peaks.length >= 8
          ) {
            cachedPeaks = parsed.peaks;
          }
        }
      } catch {
        // ignore
      }

      if (cachedPeaks) {
        this.peaks = cachedPeaks;
      } else {
        this.peaks = await this.computePeaks(buffer);
        try {
          localStorage.setItem(
            this.getCacheKey(),
            JSON.stringify({ v: 1, duration: buffer.duration, peaks: this.peaks })
          );
        } catch {
          // ignore (storage quota / disabled)
        }
      }
      this.initialized = true;
      return true;
    })();

    return this.initPromise;
  }

  stop() {
    this.running = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  start() {
    this.running = true;
    this.scheduleNext();
  }

  scheduleNext() {
    if (!this.running) return;
    const min = Math.max(500, Number(this.opts.intervalMinMs) || 15000);
    const max = Math.max(min, Number(this.opts.intervalMaxMs) || 20000);
    const delay = min + Math.random() * (max - min);
    this.timer = setTimeout(() => {
      this.timer = null;
      this.playRandomSnippet();
      this.scheduleNext();
    }, delay);
  }

  playRandomSnippet() {
    if (!this.running) return;
    if (!this.ctx || !this.buffer) return;
    if (!this.peaks || this.peaks.length === 0) return;
    if (this.ctx.state === 'suspended') return;

    // Weighted pick: bias towards the "scream-like" loud+bright parts (score^2).
    let total = 0;
    for (let i = 0; i < this.peaks.length; i += 1) {
      const w0 = Number(this.peaks[i]?.score ?? this.peaks[i]?.rms ?? 0);
      total += w0 * w0;
    }
    let peak = null;
    if (total > 0) {
      let r = Math.random() * total;
      for (let i = 0; i < this.peaks.length; i += 1) {
        const p = this.peaks[i];
        const w = Number(p?.score ?? p?.rms ?? 0);
        r -= w * w;
        if (r <= 0) {
          peak = p;
          break;
        }
      }
    }
    if (!peak) {
      peak = this.peaks[Math.floor(Math.random() * this.peaks.length)];
    }
    const peakSec = Number(peak?.t) || 0;

    const durMs = this.opts.snippetMinMs + Math.random() * (this.opts.snippetMaxMs - this.opts.snippetMinMs);
    const durSec = Math.max(0.25, durMs / 1000);

    const leadIn = 0.22;
    const maxStart = Math.max(0, this.buffer.duration - durSec - 0.02);
    const startSec = Math.max(0, Math.min(maxStart, peakSec - leadIn));

    const src = this.ctx.createBufferSource();
    src.buffer = this.buffer;

    const gain = this.ctx.createGain();
    gain.gain.value = 0;

    src.connect(gain);
    gain.connect(this.master || this.ctx.destination);

    const t0 = this.ctx.currentTime + 0.02;
    const t1 = t0 + durSec;
    const fade = Math.max(0.01, (Number(this.opts.fadeMs) || 50) / 1000);
    const vol = Math.max(0, Math.min(1, Number(this.opts.volume) || 0.9));

    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(vol, t0 + fade);
    gain.gain.setValueAtTime(vol, Math.max(t0 + fade, t1 - fade));
    gain.gain.linearRampToValueAtTime(0, t1);

    try {
      src.start(t0, startSec, durSec);
    } catch {
      // ignore
    }
    try {
      src.stop(t1 + 0.05);
    } catch {
      // ignore
    }
  }

  async computePeaks(buffer) {
    const data0 = buffer.getChannelData(0);
    const sr = buffer.sampleRate || 48000;
    const windowSec = 0.15;
    const hopSec = 0.07;

    const win = Math.max(32, Math.floor(windowSec * sr));
    const hop = Math.max(16, Math.floor(hopSec * sr));
    // Downsample within each window to keep analysis cheaper (avoids gameplay hitches).
    const stride = 8;

    const frames = [];
    let frameIdx = 0;
    for (let i = 0; i + win < data0.length; i += hop) {
      let sum = 0;
      let sumHi = 0;
      let count = 0;
      let prev = data0[i] || 0;
      for (let j = 0; j < win; j += stride) {
        const s = data0[i + j] || 0;
        sum += s * s;
        // High-frequency proxy: squared difference between successive samples (helps prefer screams/shouts).
        const d = s - prev;
        sumHi += d * d;
        prev = s;
        count += 1;
      }
      const rms = Math.sqrt(sum / Math.max(1, count));
      const rmsHi = Math.sqrt(sumHi / Math.max(1, count));
      // Score: loud (rms) AND bright/transient (rmsHi). This biases toward shouted segments.
      const score = Math.pow(Math.max(0, rms), 0.85) * Math.pow(Math.max(0, rmsHi), 0.75);
      frames.push({ t: i / sr, rms });
      frames[frames.length - 1].score = score;

      frameIdx += 1;
      if (frameIdx % 180 === 0) {
        // Yield to keep UI responsive during analysis.
        await new Promise((r) => setTimeout(r, 0));
      }
    }

    frames.sort((a, b) => (b.score ?? b.rms) - (a.score ?? a.rms));

    const maxPeaks = Math.max(8, Math.floor(this.opts.maxPeaks) || 60);
    const minSep = Math.max(0.6, Number(this.opts.minSeparationSec) || 2.5);
    const chosen = [];

    for (let i = 0; i < frames.length && chosen.length < maxPeaks; i += 1) {
      const f = frames[i];
      let ok = true;
      for (let k = 0; k < chosen.length; k += 1) {
        if (Math.abs(chosen[k].t - f.t) < minSep) {
          ok = false;
          break;
        }
      }
      if (ok) chosen.push({ t: f.t, rms: f.rms, score: Number(f.score || 0) });
    }

    return chosen;
  }
}
