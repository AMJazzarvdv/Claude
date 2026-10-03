// Fully synthesized audio. No samples: bells are additive inharmonic partials,
// screams are formant-filtered sawtooths, stone grinding is filtered brown
// noise, wind is modulated noise, etc. Positional sounds use HRTF panners.

const rand = (a, b) => a + Math.random() * (b - a);

export class AudioEngine {
  constructor() { this.ctx = null; this.enabled = false; this.volume = 0.8; }

  init() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.enabled = true;

    this.master = ctx.createGain(); this.master.gain.value = this.volume;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.knee.value = 12; comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);

    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.musicBus = ctx.createGain(); this.musicBus.gain.value = 0.9; this.musicBus.connect(this.master);
    this.reverb = ctx.createConvolver(); this.reverb.buffer = this._impulse(3.2, 2.6);
    this.reverbIn = ctx.createGain(); this.reverbIn.gain.value = 0.7;
    this.reverbIn.connect(this.reverb).connect(this.master);

    this.white = this._noiseBuffer(3, 'white');
    this.brown = this._noiseBuffer(4, 'brown');
    this.pink = this._noiseBuffer(4, 'pink');

    this._ambience();
    this._music();
    this.grinds = new Map();
  }

  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }

  // ------------------------------------------------------------- plumbing
  _noiseBuffer(sec, kind) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * sec);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      let last = 0, b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        if (kind === 'brown') { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
        else if (kind === 'pink') { b0 = 0.997 * b0 + w * 0.029591; b1 = 0.985 * b1 + w * 0.032534; b2 = 0.95 * b2 + w * 0.048056; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.6; }
        else d[i] = w;
      }
    }
    return buf;
  }

  _impulse(sec, decay) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * sec);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      let lp = 0;
      for (let i = 0; i < len; i++) {
        const t = i / len;
        lp = lp * 0.6 + (Math.random() * 2 - 1) * 0.4; // soften highs
        d[i] = lp * Math.pow(1 - t, decay) * (i < 200 ? i / 200 : 1);
      }
    }
    return buf;
  }

  setListener(pos, fwd) {
    if (!this.ctx) return;
    const L = this.ctx.listener, t = this.ctx.currentTime;
    if (L.positionX) {
      L.positionX.setTargetAtTime(pos.x, t, 0.02); L.positionY.setTargetAtTime(pos.y, t, 0.02); L.positionZ.setTargetAtTime(pos.z, t, 0.02);
      L.forwardX.setTargetAtTime(fwd.x, t, 0.02); L.forwardY.setTargetAtTime(fwd.y, t, 0.02); L.forwardZ.setTargetAtTime(fwd.z, t, 0.02);
      L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0;
    } else { L.setPosition(pos.x, pos.y, pos.z); L.setOrientation(fwd.x, fwd.y, fwd.z, 0, 1, 0); }
  }

  _panner(pos, ref = 2.5, roll = 1.1) {
    const p = this.ctx.createPanner();
    p.panningModel = 'HRTF'; p.distanceModel = 'inverse';
    p.refDistance = ref; p.rolloffFactor = roll; p.maxDistance = 120;
    if (p.positionX) { p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z; }
    else p.setPosition(pos.x, pos.y, pos.z);
    return p;
  }

  // Returns a node to connect a voice into: dry (positional or not) + reverb send.
  _dest(pos, wet = 0.25, ref, roll) {
    const g = this.ctx.createGain();
    if (pos) { const p = this._panner(pos, ref, roll); g.connect(p); p.connect(this.sfx); const s = this.ctx.createGain(); s.gain.value = wet; p.connect(s); s.connect(this.reverbIn); }
    else { g.connect(this.sfx); const s = this.ctx.createGain(); s.gain.value = wet; g.connect(s); s.connect(this.reverbIn); }
    setTimeout(() => g.disconnect(), 12000);
    return g;
  }

  _env(param, t, a, peak, d, end = 0.0001) {
    param.setValueAtTime(0.0001, t);
    param.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + a);
    param.exponentialRampToValueAtTime(end, t + a + d);
  }

  _osc(type, f, t, dur, dest, gainPeak, a = 0.005, d = dur) {
    const o = this.ctx.createOscillator(); o.type = type; o.frequency.value = f;
    const g = this.ctx.createGain(); this._env(g.gain, t, a, gainPeak, d);
    o.connect(g).connect(dest); o.start(t); o.stop(t + a + d + 0.05);
    return o;
  }

  _noise(t, dur, dest, { type = 'bandpass', f = 1000, q = 1, gain = 0.5, a = 0.005, buf = this.white, fEnd } = {}) {
    const s = this.ctx.createBufferSource(); s.buffer = buf;
    s.loopStart = 0; s.loop = true;
    const fl = this.ctx.createBiquadFilter(); fl.type = type; fl.frequency.setValueAtTime(f, t); fl.Q.value = q;
    if (fEnd) fl.frequency.exponentialRampToValueAtTime(fEnd, t + dur);
    const g = this.ctx.createGain(); this._env(g.gain, t, a, gain, dur);
    s.connect(fl).connect(g).connect(dest);
    s.start(t, Math.random() * 2); s.stop(t + a + dur + 0.05);
    return fl;
  }

  get now() { return this.ctx.currentTime; }

  // ------------------------------------------------------------- sounds
  toll(pos, base = 196, vol = 0.6, len = 7) {
    if (!this.enabled) return;
    const t = this.now + 0.01, dest = this._dest(pos, 0.9, 8, 0.6);
    const partials = [[0.5, 0.55, 1], [1, 0.75, 0.8], [1.183, 0.5, 0.55], [1.506, 0.32, 0.5], [2, 0.5, 0.42], [2.514, 0.22, 0.3], [2.662, 0.2, 0.26], [3.011, 0.17, 0.22], [4.166, 0.1, 0.15], [5.433, 0.07, 0.1], [6.796, 0.04, 0.07]];
    for (const [r, amp, dk] of partials) {
      this._osc('sine', base * r * rand(0.998, 1.002), t, len * dk, dest, amp * vol * 0.35, 0.004);
      if (r <= 1) this._osc('sine', base * r + 0.7, t, len * dk, dest, amp * vol * 0.18, 0.004);
    }
    this._noise(t, 0.05, dest, { f: 3200, q: 0.8, gain: vol * 0.5 });
  }

  chime(pos, base = 880, vol = 0.25) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.5);
    for (const [r, a] of [[1, 1], [2.76, 0.4], [5.4, 0.2]]) this._osc('sine', base * r, t, 1.5 / r, dest, vol * a * 0.4);
  }

  creak(pos, vol = 0.25) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.2);
    const o = this.ctx.createOscillator(); o.type = 'sawtooth';
    const f0 = rand(38, 60);
    o.frequency.setValueAtTime(f0, t); o.frequency.linearRampToValueAtTime(f0 * rand(1.3, 1.8), t + 0.35);
    const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = rand(600, 1100); bp.Q.value = 5;
    const g = this.ctx.createGain(); this._env(g.gain, t, 0.05, vol * 0.5, 0.35);
    o.connect(bp).connect(g).connect(dest); o.start(t); o.stop(t + 0.5);
  }

  footstep(pos, vol = 0.18, soft = false) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.05, 1.5, 1.6);
    this._noise(t, 0.07, dest, { f: rand(900, 1700), q: 0.9, gain: vol * (soft ? 0.4 : 1) });
    this._noise(t, 0.05, dest, { type: 'lowpass', f: 250, q: 0.5, gain: vol * 1.2 * (soft ? 0.4 : 1), buf: this.brown });
  }

  scream(pos, pitch = 1, vol = 0.5, dur = 1.1) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.5, 3, 0.9);
    const f0 = 330 * pitch;
    const src = this.ctx.createOscillator(); src.type = 'sawtooth';
    src.frequency.setValueAtTime(f0 * 0.8, t);
    src.frequency.exponentialRampToValueAtTime(f0 * 1.45, t + 0.12);
    src.frequency.exponentialRampToValueAtTime(f0 * 1.2, t + dur * 0.6);
    src.frequency.exponentialRampToValueAtTime(f0 * 0.75, t + dur);
    const vib = this.ctx.createOscillator(); vib.frequency.value = 6.5;
    const vg = this.ctx.createGain(); vg.gain.value = f0 * 0.05; vib.connect(vg).connect(src.frequency);
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.06); g.gain.setValueAtTime(vol, t + dur * 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    for (const [f, q, a] of [[850, 7, 1], [1250, 8, 0.7], [2700, 9, 0.35], [3500, 10, 0.15]]) {
      const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f * (pitch > 1 ? 1.08 : 1); bp.Q.value = q;
      const ga = this.ctx.createGain(); ga.gain.value = a * 2.2;
      src.connect(bp).connect(ga).connect(g);
    }
    g.connect(dest);
    this._noise(t, dur * 0.9, dest, { f: 2000, q: 0.6, gain: vol * 0.12 });
    src.start(t); vib.start(t); src.stop(t + dur + 0.1); vib.stop(t + dur + 0.1);
  }

  groan(pos, pitch = 1, vol = 0.15) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.2, 2, 1.2), dur = rand(0.4, 0.7);
    const src = this.ctx.createOscillator(); src.type = 'sawtooth';
    const f0 = 150 * pitch;
    src.frequency.setValueAtTime(f0 * 1.1, t); src.frequency.linearRampToValueAtTime(f0 * 0.85, t + dur);
    const g = this.ctx.createGain(); this._env(g.gain, t, 0.08, vol, dur);
    for (const [f, a] of [[500, 1], [900, 0.5]]) { const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = 6; const ga = this.ctx.createGain(); ga.gain.value = a * 2; src.connect(bp).connect(ga).connect(g); }
    g.connect(dest); src.start(t); src.stop(t + dur + 0.1);
  }

  hit(pos) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.3);
    const o = this.ctx.createOscillator(); o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(38, t + 0.2);
    const g = this.ctx.createGain(); this._env(g.gain, t, 0.003, 0.9, 0.25); o.connect(g).connect(dest); o.start(t); o.stop(t + 0.3);
    this._noise(t, 0.14, dest, { type: 'lowpass', f: 2200, gain: 0.6 });
    this._noise(t, 0.09, dest, { f: 5000, q: 1, gain: 0.3, fEnd: 2000 });
  }

  palletDrop(pos) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.45, 4, 0.8);
    const o = this.ctx.createOscillator(); o.frequency.setValueAtTime(85, t); o.frequency.exponentialRampToValueAtTime(32, t + 0.35);
    const g = this.ctx.createGain(); this._env(g.gain, t, 0.003, 1.1, 0.4); o.connect(g).connect(dest); o.start(t); o.stop(t + 0.5);
    this._noise(t, 0.09, dest, { f: 1500, q: 0.7, gain: 0.7 });
    for (const f of [190, 310, 470, 640]) this._osc('sine', f * rand(0.95, 1.05), t, 0.18, dest, 0.25);
  }

  palletBreak(pos) {
    if (!this.enabled) return;
    for (let k = 0; k < 5; k++) {
      const t = this.now + k * rand(0.06, 0.12), dest = this._dest(pos, 0.4, 4, 0.8);
      this._noise(t, rand(0.05, 0.12), dest, { f: rand(500, 2200), q: 1.2, gain: 0.7 });
      this._osc('sine', rand(160, 420), t, 0.12, dest, 0.3);
    }
  }

  vault(pos, loud = false) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.15);
    this._noise(t, 0.32, dest, { f: 400, fEnd: 1800, q: 1.2, gain: loud ? 0.45 : 0.18, a: 0.12 });
    this._noise(t + 0.3, 0.07, dest, { type: 'lowpass', f: 300, gain: loud ? 0.8 : 0.3, buf: this.brown });
  }

  skillWarn() { if (!this.enabled) return; const t = this.now, d = this._dest(null, 0.1); this._osc('sine', 1480, t, 0.18, d, 0.22); this._osc('sine', 2220, t, 0.12, d, 0.08); }
  skillGood() { if (!this.enabled) return; const t = this.now, d = this._dest(null, 0.2); this._noise(t, 0.01, d, { type: 'highpass', f: 3000, gain: 0.3 }); this._osc('sine', 880, t, 0.25, d, 0.12); }
  skillGreat() { if (!this.enabled) return; const t = this.now, d = this._dest(null, 0.4); for (const f of [1320, 1760, 2640]) this._osc('sine', f, t, 0.6, d, 0.09); }
  uiClick() { if (!this.enabled) return; const t = this.now, d = this._dest(null, 0.05); this._osc('triangle', 660, t, 0.06, d, 0.08); }

  crack(pos) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.8, 12, 0.5);
    for (const r of [1, 1.37, 2.11, 2.93, 3.7]) this._osc('triangle', 150 * r * rand(0.98, 1.02), t, 1.1 / Math.sqrt(r), dest, 0.35 / r);
    this._noise(t, 0.25, dest, { f: 1400, q: 0.5, gain: 0.9, fEnd: 500 });
    const o = this.ctx.createOscillator(); o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.5);
    const g = this.ctx.createGain(); this._env(g.gain, t, 0.002, 1.2, 0.55); o.connect(g).connect(dest); o.start(t); o.stop(t + 0.7);
  }

  chains(pos, n = 8) {
    if (!this.enabled) return;
    for (let k = 0; k < n; k++) {
      const t = this.now + k * rand(0.04, 0.1), dest = this._dest(pos, 0.3);
      for (const f of [2400, 3650, 5100]) this._osc('sine', f * rand(0.9, 1.15), t, rand(0.05, 0.12), dest, 0.07);
    }
  }

  gurgle(pos, n = 10, spread = 1.5) {
    if (!this.enabled) return;
    for (let k = 0; k < n; k++) {
      const t = this.now + Math.random() * spread, dest = this._dest(pos, 0.3, 2, 1.2);
      const o = this.ctx.createOscillator(); o.frequency.setValueAtTime(rand(120, 260), t); o.frequency.exponentialRampToValueAtTime(rand(500, 900), t + 0.04);
      const g = this.ctx.createGain(); this._env(g.gain, t, 0.004, 0.25, 0.05); o.connect(g).connect(dest); o.start(t); o.stop(t + 0.1);
    }
  }

  boom(pos, f = 48, vol = 1) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.9, 10, 0.5);
    const o = this.ctx.createOscillator(); o.frequency.setValueAtTime(f * 1.6, t); o.frequency.exponentialRampToValueAtTime(f * 0.6, t + 2);
    const g = this.ctx.createGain(); this._env(g.gain, t, 0.01, vol, 2.2); o.connect(g).connect(dest); o.start(t); o.stop(t + 2.4);
    this._noise(t, 1.4, dest, { type: 'lowpass', f: 200, gain: vol * 0.8, buf: this.brown });
  }

  stoneShift(pos, vol = 0.5) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.6, 4, 0.9);
    this._noise(t, 1.2, dest, { f: 220, q: 1.5, gain: vol, a: 0.1, buf: this.brown, fEnd: 120 });
    const o = this.ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(42, t); o.frequency.linearRampToValueAtTime(30, t + 1.4);
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 180;
    const g = this.ctx.createGain(); this._env(g.gain, t, 0.2, vol * 0.6, 1.3); o.connect(lp).connect(g).connect(dest); o.start(t); o.stop(t + 1.7);
  }

  settle(pos) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.1, 1.5, 1.8);
    for (let k = 0; k < 3; k++) this._noise(t + k * 0.03, 0.02, dest, { f: rand(2500, 4500), q: 2, gain: 0.12 });
  }

  blink() { if (!this.enabled) return; const t = this.now, d = this._dest(null, 0); this._noise(t, 0.2, d, { type: 'lowpass', f: 500, gain: 0.08, a: 0.05, buf: this.pink }); }

  ironGate(pos) {
    if (!this.enabled) return;
    const t = this.now, dest = this._dest(pos, 0.7, 6, 0.6);
    const o = this.ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(310, t); o.frequency.linearRampToValueAtTime(240, t + 1.8);
    const vib = this.ctx.createOscillator(); vib.frequency.value = 11; const vg = this.ctx.createGain(); vg.gain.value = 9; vib.connect(vg).connect(o.frequency);
    const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1300; bp.Q.value = 14;
    const g = this.ctx.createGain(); this._env(g.gain, t, 0.3, 0.5, 1.6);
    o.connect(bp).connect(g).connect(dest); o.start(t); vib.start(t); o.stop(t + 2.1); vib.stop(t + 2.1);
    this._noise(t, 2, dest, { type: 'lowpass', f: 160, gain: 0.6, buf: this.brown, a: 0.3 });
  }

  escapeChord() {
    if (!this.enabled) return;
    const t = this.now, d = this._dest(null, 0.9);
    for (const f of [220, 277.2, 329.6, 440, 554.4]) this._osc('sine', f, t, 3.5, d, 0.06, 1.2);
  }

  crow() {
    if (!this.enabled || !this.listenerPos) return;
    const a = Math.random() * Math.PI * 2, p = { x: this.listenerPos.x + Math.cos(a) * 30, y: 12, z: this.listenerPos.z + Math.sin(a) * 30 };
    const n = 2 + Math.floor(Math.random() * 3);
    for (let k = 0; k < n; k++) {
      const t = this.now + k * rand(0.35, 0.5), dest = this._dest(p, 0.6, 6, 0.6);
      const o = this.ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(rand(700, 900), t); o.frequency.exponentialRampToValueAtTime(rand(420, 520), t + 0.25);
      const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1150; bp.Q.value = 3;
      const g = this.ctx.createGain(); this._env(g.gain, t, 0.02, 0.18, 0.25);
      o.connect(bp).connect(g).connect(dest); o.start(t); o.stop(t + 0.35);
    }
  }

  // ------------------------------------------------------------- loops
  _loopNoise(buf, filterType, f, q, gain, dest) {
    const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = true;
    const fl = this.ctx.createBiquadFilter(); fl.type = filterType; fl.frequency.value = f; fl.Q.value = q;
    const g = this.ctx.createGain(); g.gain.value = gain;
    s.connect(fl).connect(g).connect(dest); s.start();
    return { s, fl, g };
  }

  _lfo(rate, depth, target, type = 'sine') {
    const o = this.ctx.createOscillator(); o.type = type; o.frequency.value = rate;
    const g = this.ctx.createGain(); g.gain.value = depth; o.connect(g).connect(target); o.start();
    return o;
  }

  _ambience() {
    const amb = this.ctx.createGain(); amb.gain.value = 1; amb.connect(this.master);
    this.ambBus = amb;
    const w = this._loopNoise(this.pink, 'lowpass', 420, 0.7, 0.22, amb);
    this._lfo(0.06, 260, w.fl.frequency); this._lfo(0.045, 0.1, w.g.gain);
    const wh = this._loopNoise(this.white, 'bandpass', 1300, 9, 0.012, amb);
    this._lfo(0.11, 500, wh.fl.frequency); this._lfo(0.07, 0.01, wh.g.gain);
    const drone = this.ctx.createGain(); drone.gain.value = 0.03; drone.connect(amb);
    for (const f of [41.2, 41.6, 61.7, 82.6]) { const o = this.ctx.createOscillator(); o.frequency.value = f; o.connect(drone); o.start(); }
    // breathing layer when injured / low resolve
    this.breath = this._loopNoise(this.pink, 'bandpass', 900, 1.2, 0, this.sfx);
    this.breathLfo = this._lfo(0.55, 0, this.breath.g.gain);
    // lament dust hiss
    this.hiss = this._loopNoise(this.white, 'bandpass', 4200, 3, 0, this.sfx);
    this._lfo(7, 0.0, this.hiss.g.gain);
  }

  _music() {
    const ctx = this.ctx;
    this.chase = ctx.createGain(); this.chase.gain.value = 0; this.chase.connect(this.musicBus);
    // low pulsing dissonance
    const low = ctx.createGain(); low.gain.value = 0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 320; lp.Q.value = 3;
    for (const f of [55, 58.27, 82.4]) { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(lp); o.start(); }
    lp.connect(low).connect(this.chase);
    const pulse = ctx.createOscillator(); pulse.type = 'square'; pulse.frequency.value = 2.2;
    const pg = ctx.createGain(); pg.gain.value = 0.11; pulse.connect(pg).connect(low.gain); pulse.start();
    low.gain.value = 0.12;
    // high tremolo strings
    this.high = ctx.createGain(); this.high.gain.value = 0; this.high.connect(this.chase);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2100; bp.Q.value = 1.2;
    const trem = ctx.createGain(); trem.gain.value = 0.03;
    for (const f of [880, 932.3, 1396.9]) { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; const v = this._lfo(5, 3, o.frequency); o.connect(bp); o.start(); }
    bp.connect(trem).connect(this.high);
    this._lfo(9, 0.03, trem.gain, 'triangle');
    // percussion hits are scheduled in update
    this.nextDrum = 0;
  }

  // Each killer/sentinel position gets a positional grinding loop whose
  // loudness follows how fast the stone is moving.
  grind(id, pos, intensity) {
    if (!this.enabled) return;
    let g = this.grinds.get(id);
    if (!g) {
      const p = this._panner(pos, 3, 1.25);
      const s = this.ctx.createBufferSource(); s.buffer = this.brown; s.loop = true;
      const f1 = this.ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 170; f1.Q.value = 1.1;
      const f2 = this.ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 900; f2.Q.value = 2.5;
      const gain = this.ctx.createGain(); gain.gain.value = 0;
      const m2 = this.ctx.createGain(); m2.gain.value = 0.45;
      s.connect(f1).connect(gain); s.connect(f2).connect(m2).connect(gain);
      gain.connect(p).connect(this.sfx);
      s.start();
      g = { p, gain, f1 };
      this.grinds.set(id, g);
    }
    const t = this.now;
    if (g.p.positionX) { g.p.positionX.setTargetAtTime(pos.x, t, 0.05); g.p.positionY.setTargetAtTime(pos.y, t, 0.05); g.p.positionZ.setTargetAtTime(pos.z, t, 0.05); }
    const flutter = 0.6 + Math.random() * 0.8;
    g.gain.gain.setTargetAtTime(intensity * flutter * 1.6, t, 0.04);
    g.f1.frequency.setTargetAtTime(140 + Math.random() * 90, t, 0.05);
  }

  update(dt, s) {
    if (!this.enabled) return;
    this.listenerPos = s.listener;
    const t = this.now;
    this.chase.gain.setTargetAtTime(s.chase * 0.9, t, 0.6);
    this.high.gain.setTargetAtTime(s.chase > 0.6 ? (s.chase - 0.6) * 2.2 : 0, t, 0.4);
    this.breath.g.gain.setTargetAtTime(s.breath * 0.05, t, 0.3);
    this.hiss.g.gain.setTargetAtTime(s.lament * 0.05, t, 0.3);
    this.ambBus.gain.setTargetAtTime(s.ambient ?? 1, t, 0.5);
    if (s.chase > 0.3 && t > this.nextDrum) {
      this.nextDrum = t + (s.chase > 0.7 ? 0.9 : 1.8);
      const d = this._dest(null, 0.5);
      const o = this.ctx.createOscillator(); o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.4);
      const g = this.ctx.createGain(); this._env(g.gain, t, 0.004, 0.5 * s.chase, 0.5); o.connect(g).connect(d); o.start(t); o.stop(t + 0.6);
    }
    this.crowT = (this.crowT ?? 12) - dt;
    if (this.crowT < 0) { this.crowT = rand(18, 45); this.crow(); }
  }

  silenceGrind(id) { if (!this.grinds) return; const g = this.grinds.get(id); if (g) g.gain.gain.setTargetAtTime(0, this.now, 0.05); }
}
