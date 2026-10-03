// HOLLOWMOOR — entry point. Renderer, post-processing, input, camera, the
// gaze system, match flow and menus.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { buildTextures } from './textures.js';
import { makeMaterials, SURVIVORS, buildReliquary, poseReliquary } from './models.js';
import { World, HALF } from './world.js';
import { AudioEngine } from './audio.js';
import { Bell, Pallet, Post, Gate, Hatch, Survivor, V, angDiff, yawTo, flatDist } from './entities.js';
import { Killer, Sentinel } from './killer.js';
import { FX } from './fx.js';
import { UI, PERKS, portrait } from './ui.js';
import { clamp } from './noise.js';

const $ = (id) => document.getElementById(id);

// ------------------------------------------------------------------ settings
const settings = { sens: 1, vol: 0.8, quality: 'high', invert: false, showFps: false };
try { Object.assign(settings, JSON.parse(localStorage.getItem('hollowmoor.settings') || '{}')); } catch { /* storage unavailable */ }
const saveSettings = () => { try { localStorage.setItem('hollowmoor.settings', JSON.stringify(settings)); } catch { /* ignore */ } };

// ------------------------------------------------------------------ renderer
const canvas = $('view');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
const pixelRatio = () => (settings.quality === 'high' ? Math.min(devicePixelRatio, 1.5) : Math.min(devicePixelRatio, 1));
renderer.setPixelRatio(pixelRatio());
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 2.3;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const FOG = 0x464e5c;
scene.fog = new THREE.FogExp2(FOG, 0.03);
scene.background = new THREE.Color(FOG);
const camera = new THREE.PerspectiveCamera(64, innerWidth / innerHeight, 0.05, 900);

const hemi = new THREE.HemisphereLight(0x8496b8, 0x2a2218, 2.0);
scene.add(hemi);
const moon = new THREE.DirectionalLight(0xb4c4e4, 1.7);
moon.castShadow = true;
moon.shadow.mapSize.set(settings.quality === 'high' ? 2048 : 1024, settings.quality === 'high' ? 2048 : 1024);
Object.assign(moon.shadow.camera, { left: -34, right: 34, top: 34, bottom: -34, near: 1, far: 160 });
moon.shadow.bias = -0.0005; moon.shadow.normalBias = 0.04;
scene.add(moon, moon.target);

// ------------------------------------------------------------------ post FX
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, uTime: { value: 0 }, uBlink: { value: 0 }, uLow: { value: 0 }, uLament: { value: 0 },
    uHurt: { value: 0 }, uFade: { value: 1 }, uHit: { value: 0 }, uAspect: { value: 1 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime, uBlink, uLow, uLament, uHurt, uFade, uHit, uAspect; varying vec2 vUv;
    float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv; vec2 d = uv - 0.5;
      float ca = 0.0012 + uLow * 0.004 + uLament * 0.004 + uHit * 0.01;
      vec3 c;
      c.r = texture2D(tDiffuse, uv + d * ca).r;
      c.g = texture2D(tDiffuse, uv).g;
      c.b = texture2D(tDiffuse, uv - d * ca).b;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(c, vec3(l), 0.22 + uHurt * 0.2 + uLow * 0.2);
      c *= vec3(0.93, 0.99, 1.08);
      float r = length(d * vec2(uAspect, 1.0));
      float vig = 1.0 - smoothstep(0.25, 0.95, r);
      c *= mix(0.25, 1.0, vig);
      c *= 1.0 - uLow * 0.65 * smoothstep(0.2, 0.75, r);
      c = mix(c, c * vec3(1.6, 0.3, 0.25), smoothstep(0.35, 0.95, r) * (uHurt * 0.25 + uHit * 0.8));
      float g = rnd(uv * 731.0 + fract(uTime * 7.3)) - 0.5;
      c += g * (0.018 + uLament * 0.05 + uLow * 0.02) * (0.4 + l);
      float e = abs(uv.y - 0.5) * 2.0;
      float lid = smoothstep(1.0 - uBlink * 1.1, 1.0 - uBlink * 1.1 + 0.18, e + (1.0 - abs(uv.x - 0.5) * 2.0) * -0.08);
      c *= 1.0 - lid;
      c *= 1.0 - uFade;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`,
};

let composer, bloom, grade;
function buildComposer() {
  const pr = pixelRatio();
  renderer.setPixelRatio(pr);
  const rt = new THREE.WebGLRenderTarget(innerWidth * pr, innerHeight * pr, { type: THREE.HalfFloatType, samples: settings.quality === 'high' ? 4 : 0 });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.6, 0.82);
  bloom.enabled = settings.quality === 'high';
  composer.addPass(bloom);
  grade = new ShaderPass(GradeShader);
  composer.addPass(grade);
  composer.addPass(new OutputPass());
  composer.setSize(innerWidth, innerHeight);
  grade.uniforms.uAspect.value = innerWidth / innerHeight;
}
buildComposer();
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight);
  grade.uniforms.uAspect.value = innerWidth / innerHeight;
});

// ------------------------------------------------------------------ input
const keys = new Set(), pressed = new Set();
let mouseDX = 0, mouseDY = 0, mouseDown = false, noLock = false;
addEventListener('keydown', (e) => {
  if (game?.state === 'playing' && ['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ControlLeft', 'KeyS', 'KeyW'].includes(e.code)) e.preventDefault();
  if (!keys.has(e.code)) pressed.add(e.code);
  keys.add(e.code);
  if (e.code === 'Escape' && game) {
    if (game.state === 'playing' && (noLock || !document.pointerLockElement)) game.pause();
    else if (game.state === 'paused' && noLock) game.resume();
  }
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => { keys.clear(); mouseDown = false; });
addEventListener('mousemove', (e) => {
  if (!game || game.state !== 'playing') return;
  if (document.pointerLockElement === canvas || noLock) { mouseDX += e.movementX || 0; mouseDY += e.movementY || 0; }
});
canvas.addEventListener('mousedown', (e) => {
  if (e.button === 0) mouseDown = true;
  if (game?.state === 'playing' && !document.pointerLockElement && !noLock) lock();
});
addEventListener('mouseup', (e) => { if (e.button === 0) mouseDown = false; });
canvas.addEventListener('contextmenu', (e) => e.preventDefault());

function lock() {
  try {
    const p = canvas.requestPointerLock?.();
    if (p && p.catch) p.catch(() => { noLock = true; });
    if (!canvas.requestPointerLock) noLock = true;
  } catch { noLock = true; }
}
document.addEventListener('pointerlockchange', () => {
  if (!game) return;
  if (document.pointerLockElement === canvas) { if (game.state === 'paused') game.resume(true); ui.show('clickPlay', false); }
  else if (game.state === 'playing' && !noLock) game.pause();
});
document.addEventListener('pointerlockerror', () => { noLock = true; });

// ------------------------------------------------------------------ game
const audio = new AudioEngine();
const ui = new UI(audio);
let game = null;

const tmpV = new THREE.Vector3();

class Game {
  constructor(T, M) {
    this.T = T; this.M = M; this.audio = audio; this.ui = ui; this.scene = scene; this.camera = camera;
    this.fx = new FX(scene, T);
    this.state = 'title';
    this.time = 0;
    this.camYaw = 0; this.camPitch = -0.15; this.camPos = V();
    this.survivors = []; this.bells = []; this.pallets = []; this.posts = []; this.gates = []; this.sentinels = [];
    this.noises = []; this.scratches = [];
    this.worldLights = [];
    this.titleT = 0;
  }

  // ---------------------------------------------------------------- world
  buildWorld(seed) {
    if (this.world) this.disposeMatch();
    this.world = new World(scene, this.M, this.T, seed, settings.quality);
    this.bells = this.world.bellSpots.map((s, i) => new Bell(this, s, i));
    this.pallets = this.world.palletSpots.map((s, i) => new Pallet(this, s, i));
    this.posts = this.world.postSpots.map((s, i) => new Post(this, s, i));
    this.gates = this.world.gateSpots.map((s, i) => new Gate(this, s, i));
    // altar candles + shack lanterns
    for (const p of this.world.altarCandles) {
      const f = new THREE.Sprite(this.M.flame); f.scale.set(0.06, 0.12, 1); f.position.copy(p); this.world.root.add(f);
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.2, 8), this.M.wax); c.position.copy(p).add(V(0, -0.12, 0)); this.world.root.add(c);
    }
    const altar = new THREE.PointLight(0xffa860, 2.2, 10, 1.6); altar.position.set(9.0, 1.8, 0); this.world.root.add(altar);
    this.flickers = [altar];
    (this.world.lanterns || []).slice(0, settings.quality === 'high' ? 3 : 1).forEach((p) => {
      const L = new THREE.PointLight(0xffb070, 1.8, 8, 1.6); L.position.copy(p); this.world.root.add(L); this.flickers.push(L);
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.2, 0.14), this.M.lanternLit); box.position.copy(p); this.world.root.add(box);
      const g = new THREE.Sprite(this.M.glow); g.scale.set(1.6, 1.6, 1); g.position.copy(p); this.world.root.add(g);
    });
    moon.position.copy(this.world.moonDir).multiplyScalar(60);
  }

  disposeMatch() {
    for (const s of this.survivors) { scene.remove(s.model); scene.remove(s.aura); }
    if (this.killer) { scene.remove(this.killer.model); scene.remove(this.killer.aura); scene.remove(this.killer.cloth); audio.silenceGrind('killer'); }
    if (this.world) { this.world.dispose(); if (this.world.sky) scene.remove(this.world.sky); }
    this.survivors = []; this.killer = null; this.sentinels = []; this.hatch = null;
    this.fx.clear();
  }

  setupTitle() {
    this.state = 'title';
    if (!this.world) this.buildWorld(7);
    if (!this.titleStatue) {
      this.titleStatue = buildReliquary(this.M, { alive: true });
      poseReliquary(this.titleStatue, 'weep');
    }
    // find a moonlit vantage with a clear view of the church and free ground for the statue
    const W = this.world, look = V(-3.5, 2.6, -8.2);
    this.titleCam = { a: -1.75, r: 22 };
    search: for (const r of [22, 19, 25, 16, 28]) for (let k = 0; k < 14; k++) {
      const a = -1.75 + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * 0.12;
      const cp = V(-4 + Math.cos(a) * r, 2.4, Math.sin(a) * r);
      let clear = W.raycast(cp, look) > 0.97;
      for (const da of [-0.22, 0.22]) clear = clear && W.raycast(V(-4 + Math.cos(a + da) * r, 2.4, Math.sin(a + da) * r), look) > 0.9;
      if (!clear || W.boxes.some((b) => cp.x > b.minX - 4 && cp.x < b.maxX + 4 && cp.z > b.minZ - 4 && cp.z < b.maxZ + 4)) continue;
      const sp = cp.clone().lerp(look, 0.42); sp.y = 0;
      const c = W.cellIndex(sp.x, sp.z);
      if (c < 0 || W.grid[c] !== 0) continue;
      this.titleCam = { a, r, statue: sp };
      break search;
    }
    const sp = this.titleCam.statue || V(-6.2, 0, -12.5);
    const cp0 = V(-4 + Math.cos(this.titleCam.a) * this.titleCam.r, 0, Math.sin(this.titleCam.a) * this.titleCam.r);
    this.titleStatue.position.copy(sp); this.titleStatue.rotation.y = Math.atan2(cp0.x - sp.x, cp0.z - sp.z) + 0.4;
    this.world.root.add(this.titleStatue);
    this.titleStart = performance.now();
    ui.only('title');
  }

  // ---------------------------------------------------------------- match
  async startMatch(defIndex, perks) {
    ui.only();
    grade.uniforms.uFade.value = 1;
    $('loadText').textContent = 'The moor shifts beneath you…';
    ui.show('loading'); $('loadBar').style.width = '100%';
    await new Promise((r) => setTimeout(r, 30));
    if (this.titleStatue) this.titleStatue.parent?.remove(this.titleStatue);
    this.buildWorld(Math.floor(Math.random() * 1e9));
    const W = this.world;
    // survivors: player first
    const order = [defIndex, ...SURVIVORS.map((_, i) => i).filter((i) => i !== defIndex)];
    this.survivors = order.map((i, k) => new Survivor(this, SURVIVORS[i], k === 0, k === 0 ? perks : []));
    this.player = this.survivors[0];
    this.survivors.forEach((s, k) => {
      const a = (k / 4) * Math.PI * 2;
      const p = W.randomFreePoint(Math.random, 0, 2.5, W.survivorSpawn.x + Math.cos(a) * 2, W.survivorSpawn.z + Math.sin(a) * 2);
      s.place(p); s.yaw = yawTo(s.pos, V(0, 0, 0));
    });
    this.killer = new Killer(this);
    this.killer.place(W.killerSpawn); this.killer.yaw = yawTo(this.killer.pos, V(0, 0, 0));
    // two Sentinels already wait near bells
    const bs = this.bells.slice().sort(() => Math.random() - 0.5).slice(0, 2);
    for (const b of bs) {
      const p = W.randomFreePoint(Math.random, 3, 6, b.pos.x, b.pos.z);
      this.sentinels.push(new Sentinel(this, V(p.x, 0, p.z), Math.random() * 6.28, ['pray', 'tilt', 'beckon'][Math.floor(Math.random() * 3)]));
    }
    this.bellsRung = 0; this.bellsRequired = 5; this.gatesPowered = false; this.collapseT = null; this.hookEvents = 0;
    this.noises = []; this.scratches = []; this.time = 0; this.endT = null; this.auraT = 0; this.afterCD = 0; this.auraSrc = '';
    this.score = { objectives: 0, survival: 0, altruism: 0, boldness: 0 }; this.scoreLog = []; this.stareScore = 0;
    this.skillT = 3; this.hitShake = 0; this.lastWiggleKey = null; this.escapeCD = 0; this.chase = 0;
    this.camYaw = this.player.yaw; this.camPitch = -0.12;
    this.camPos.copy(this.player.pos).add(V(0, 2, 0));
    ui.buildStatus(this.survivors);
    ui.buildPerkHud(perks);
    ui.clearToasts();
    $('fps').style.display = settings.showFps ? 'block' : 'none';
    ui.show('loading', false);
    ui.only('hud');
    this.state = 'playing';
    this.fadeIn = 0; this.matchStart = performance.now();
    audio.toll(null, 130, 0.5, 9);
    setTimeout(() => this.toast('Ring five of the seven Mourning Bells', 'big'), 900);
    setTimeout(() => this.toast('It cannot move while you watch it', 'warn'), 4200);
  }

  pause() { if (this.state !== 'playing') return; this.state = 'paused'; ui.only('hud', 'pause'); keys.clear(); mouseDown = false; }
  resume(fromLock = false) {
    if (this.state !== 'paused') return;
    this.state = 'playing'; ui.only('hud');
    if (!fromLock && !noLock) lock();
  }
  abandon() { this.state = 'title'; this.disposeMatch(); this.world = null; document.exitPointerLock?.(); this.setupTitle(); }

  // ---------------------------------------------------------------- hooks for entities
  toast(t, k) { ui.toast(t, k); }
  noise(pos, r, type) { this.noises.push({ pos: pos.clone(), r, type, t: this.time }); if (this.noises.length > 40) this.noises.shift(); }
  addScore(cat, amt, label) { if (!this.score) return; this.score[cat] += amt; if (label) this.scoreLog.push(`${label} +${amt}`); }
  bellRateMult() { return Math.max(0.7, 1 - 0.05 * this.hookEvents); }
  isWatched(pts) { return this.survivors.some((s) => this.canSee(s, pts)); }
  agentCircles(self) {
    const out = this._ac || (this._ac = []); out.length = 0;
    if (this.killer && !this.killer.action) out.push(this.killer.circle);
    for (const s of this.sentinels) out.push(s.circle);
    return out;
  }
  killerCircles() {
    const out = this._kc || (this._kc = []); out.length = 0;
    for (const s of this.sentinels) out.push(s.circle);
    return out;
  }

  onBellRung(bell) {
    this.bellsRung++;
    const left = Math.max(0, this.bellsRequired - this.bellsRung);
    this.toast(left > 0 ? `A Mourning Bell tolls — ${left} remain` : 'The final bell tolls', 'good');
    // Vespers (the Reliquary's offering): every toll forces all eyes shut
    setTimeout(() => { for (const s of this.survivors) s.forceBlink(1.0); }, 1200);
    if (left === 0 && !this.gatesPowered) {
      this.gatesPowered = true;
      setTimeout(() => {
        this.toast('The Lychgates are unsealed', 'big');
        audio.toll(null, 98, 0.9, 10); audio.toll(null, 147, 0.6, 9); audio.toll(null, 196, 0.5, 8);
      }, 1800);
      for (const b of this.bells) if (!b.done) { b.locked = true; for (const r of [...b.ringers]) r.cancelAction(); }
    }
  }
  onSurvivorHooked(s) { this.hookEvents++; this.toast(`${s.name} is bound to a Weeping Post`, 'bad'); }
  onSurvivorDied(s, how) {
    this.toast(`${s.name} ${how === 'bled' ? 'bled out in the peat' : 'was taken by the moor'}`, 'bad');
    if (s.isPlayer) { this.endT = 3; this.endReason = how; }
    this.checkAllDone();
  }
  onEscape(s, how) {
    this.toast(`${s.name} escaped${how === 'hatch' ? ' through the Drowned Well' : ''}`, 'good');
    if (s.isPlayer) { this.addScore('survival', how === 'hatch' ? 4000 : 5000, 'Escaped'); this.endT = 2.5; this.endReason = how; audio.escapeChord(); }
    this.checkAllDone();
  }
  checkAllDone() { if (this.survivors.every((s) => !s.alive) && this.endT === null) this.endT = 2.5; }
  onHit(s) { if (s.isPlayer) this.hitShake = 1; }
  onGateOpened() {
    this.toast('A Lychgate swings open', 'good');
    if (this.collapseT === null) { this.collapseT = 120; setTimeout(() => this.toast('The moor is rising — two minutes', 'warn'), 1500); }
  }
  onPlayerBlink() {
    if (this.player.hasPerk('afterimage') && this.afterCD <= 0) { this.auraT = 4; this.auraSrc = 'afterimage'; this.afterCD = 30; }
  }

  // ---------------------------------------------------------------- gaze
  canSee(s, pts) {
    if (!s.alive || s.blinking || s.health === 'hooked' || s.health === 'carried') return false;
    if (s.isPlayer) {
      for (const p of pts) {
        tmpV.copy(p).project(camera);
        if (tmpV.z > 1 || tmpV.z < -1 || Math.abs(tmpV.x) > 1 || Math.abs(tmpV.y) > 1) continue;
        if (camera.position.distanceTo(p) > 46) continue;
        if (this.world.raycast(camera.position, p) >= 0.995) return true;
      }
      return false;
    }
    // teammates focused on a task have their eyes on the work, not on the stone
    if (s.action && s.action.type !== 'drop') return false;
    const e = s.eye();
    for (let i = 0; i < Math.min(3, pts.length); i++) {
      const p = pts[i];
      if (e.distanceTo(p) > 30) continue;
      if (Math.abs(angDiff(s.yaw, yawTo(s.pos, p))) > 0.95) continue;
      if (this.world.raycast(e, p) >= 0.995) return true;
    }
    return false;
  }

  computeWatch(dt) {
    const k = this.killer, pts = k.samplePoints();
    let w = 0;
    for (const s of this.survivors) {
      s.watching = this.canSee(s, pts);
      if (!s.watching) continue;
      w++;
      const d = flatDist(s.pos, k.pos);
      const drain = 12 * clamp(1.6 - d / 22, 0.5, 1.6) * (k.lament ? 2.5 : 1);
      s.resolve -= drain * dt;
      if (s.resolve <= 0) {
        if (s.noBlink > 0) s.resolve = 0.01;
        else { s.resolve = 28; s.forceBlink(0.45); }
      }
      if (s.isPlayer) this.addScore('boldness', 20 * dt);
    }
    k.watchers = w;
  }

  // ---------------------------------------------------------------- player
  interactions(s, fwd) {
    const out = { space: null, hold: null };
    const near = (p, r) => flatDist(p, s.pos) < r;
    const facing = (p, min = 0.25) => { const d = V(p.x - s.pos.x, 0, p.z - s.pos.z); const l = d.length(); return l < 0.7 || d.divideScalar(l).dot(fwd) > min; };
    const sprint = keys.has('ShiftLeft') || keys.has('ShiftRight');
    let best = 1e9;
    for (const w of this.world.windows) {
      const sd = (s.pos.x - w.x) * w.nx + (s.pos.z - w.z) * w.nz, ld = Math.abs((s.pos.x - w.x) * w.ax + (s.pos.z - w.z) * w.az);
      if (Math.abs(sd) < 1.2 && ld < w.halfW + 0.2 && facing(w, 0.2) && Math.abs(sd) < best) { best = Math.abs(sd); out.space = { text: 'Vault', fn: () => s.startVault('window', w, sprint && s.speed > 3) }; }
    }
    for (const p of this.pallets) {
      if (p.state === 'broken') continue;
      const nd = p.normalDist(s.pos), ld = p.lateral(s.pos);
      if (p.state === 'up' && ld < p.w / 2 + 0.45 && nd < 1.15 && nd < best) { best = nd; out.space = { text: 'Drop pallet', fn: () => { s.startAction('drop'); p.drop(s); } }; }
      if (p.state === 'down' && ld < p.w / 2 + 0.2 && nd < 1.35 && nd > 0.55 && facing(p.center, 0.3) && nd < best) { best = nd; out.space = { text: 'Vault pallet', fn: () => s.startVault('pallet', p, sprint && s.speed > 3) }; }
    }
    best = 1e9;
    const consider = (d, text, fn) => { if (d < best) { best = d; out.hold = { text, fn }; } };
    for (const b of this.bells) if (!b.done && !b.locked && near(b.pos, 1.95) && facing(b.pos, 0)) consider(flatDist(b.pos, s.pos), 'Ring the bell', () => s.startAction('ring', { bell: b }));
    for (const o of this.survivors) {
      if (o === s) continue;
      if (o.health === 'hooked' && near(o.post.hang, 1.7)) consider(0.1, `Unbind ${o.def.short}`, () => s.startAction('unhook', { target: o }));
      if ((o.health === 'injured' || o.health === 'downed') && near(o.pos, 1.5)) consider(flatDist(o.pos, s.pos), `${o.health === 'downed' ? 'Revive' : 'Heal'} ${o.def.short}`, () => s.startAction('heal', { target: o }));
    }
    if (this.gatesPowered) for (const g of this.gates) if (!g.open && near(g.lever, 1.7)) consider(0.2, 'Open the Lychgate', () => s.startAction('gate', { gate: g }));
    for (const st of this.sentinels) if (st.shroud <= 0 && near(st.pos, 1.75) && facing(st.pos, 0.3)) consider(flatDist(st.pos, s.pos), 'Shroud the statue', () => s.startAction('shroud', { target: st }));
    const k = this.killer;
    if (k.petrified && k.veilT <= 0 && k.stunT <= 0 && near(k.pos, 1.75) && facing(k.pos, 0.3)) consider(flatDist(k.pos, s.pos), 'Shroud the statue', () => s.startAction('shroud', { target: k }));
    if (this.hatch && near(this.hatch.pos, 1.6)) consider(0, 'Descend into the Drowned Well', () => s.startAction('hatch'));
    return out;
  }

  playerControl(s, dt) {
    const fwd = V(Math.sin(this.camYaw), 0, Math.cos(this.camYaw));
    const right = V(-Math.cos(this.camYaw), 0, Math.sin(this.camYaw));
    let mx = 0, mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz -= 1;
    if (keys.has('KeyD')) mx += 1;
    if (keys.has('KeyA')) mx -= 1;
    const dir = fwd.clone().multiplyScalar(mz).addScaledVector(right, mx);
    const hold = keys.has('KeyE') || mouseDown;
    s.lookPitch = clamp(-this.camPitch, -0.6, 0.6);
    s.lookYaw = clamp(angDiff(s.yaw, this.camYaw), -1.1, 1.1);
    s.backpedal = false;
    this.promptText = ''; this.promptProg = null; this.promptHeal = false;

    if (s.health === 'hooked') return this.hookedControl(s, dt);
    if (s.health === 'downed') {
      s.crouch = false;
      if (dir.lengthSq() > 0) s.moveTo(dir, 0.7, dt); else s.speed = 0;
      this.promptText = s.healers.size ? 'Someone is helping you up…' : 'You are dying. Crawl to safety.';
      this.promptProg = s.healers.size ? s.healProg : null; this.promptHeal = true;
      return;
    }
    if (!s.standing) return;
    s.crouch = keys.has('KeyC') || keys.has('ControlLeft') || keys.has('ControlRight');

    if (s.action) {
      const a = s.action;
      const ok = { ring: hold, heal: hold, unhook: hold, gate: hold, shroud: hold, hatch: true, selfheal: keys.has('KeyR'), drop: true }[a.type];
      if (!ok || (dir.lengthSq() > 0 && a.type !== 'drop' && a.type !== 'hatch')) s.cancelAction();
      else {
        s.speed = 0;
        if (a.type === 'ring') { s.yaw += angDiff(s.yaw, yawTo(s.pos, a.bell.pos)) * Math.min(1, dt * 8); this.addScore('objectives', 1000 / 80 * dt); }
        if (a.type === 'heal' || a.type === 'unhook' || a.type === 'shroud' || a.type === 'gate') {
          const tp = a.type === 'gate' ? a.gate.lever : a.target.pos;
          s.yaw += angDiff(s.yaw, yawTo(s.pos, tp)) * Math.min(1, dt * 8);
        }
        this.actionPrompt(s, a);
        this.maybeSkillCheck(s, a, dt);
        return;
      }
    }
    const cand = this.interactions(s, fwd);
    if (pressed.has('Space') && cand.space) { cand.space.fn(); return; }
    if (hold && cand.hold && !this.holdLatch) { cand.hold.fn(); return; }
    if (!hold) this.holdLatch = false;
    if (keys.has('KeyR') && s.health === 'injured') { s.startAction('selfheal'); return; }
    if (pressed.has('KeyB') && !s.blinking) { s.forceBlink(0.3); s.resolve = Math.min(s.maxResolve, s.resolve + 30); }
    const parts = [];
    if (cand.space) parts.push(`<kbd>Space</kbd> ${cand.space.text}`);
    if (cand.hold) parts.push(`<kbd>E</kbd> ${cand.hold.text}`);
    if (s.health === 'injured' && !cand.hold) parts.push('<kbd>R</kbd> Mend wounds');
    this.promptText = parts.join('&nbsp;&nbsp;&nbsp;');

    if (dir.lengthSq() > 0) {
      dir.normalize();
      const back = dir.dot(fwd) < -0.35;
      const sprint = keys.has('ShiftLeft') || keys.has('ShiftRight');
      let sp;
      if (s.crouch) sp = 1.13;
      else if (back) { sp = 1.6; s.backpedal = true; }
      else if (sprint || s.boost > 0) sp = s.runSpeed();
      else sp = 2.26;
      s.moveTo(dir, sp, dt, true, back ? this.camYaw : null);
    } else s.speed = 0;
  }

  actionPrompt(s, a) {
    const names = { ring: 'Ringing', heal: a.target?.health === 'downed' ? 'Reviving' : 'Healing', selfheal: 'Mending', unhook: 'Unbinding', gate: 'Opening', shroud: 'Shrouding', hatch: 'Descending', drop: '' };
    let prog = null, heal = false;
    if (a.type === 'ring') prog = a.bell.progress;
    else if (a.type === 'heal') { prog = a.target.healProg; heal = true; }
    else if (a.type === 'selfheal') { prog = s.healProg; heal = true; }
    else if (a.type === 'unhook') prog = a.t / 1.2;
    else if (a.type === 'gate') prog = a.gate.progress;
    else if (a.type === 'shroud') prog = a.t / 2.2;
    this.promptText = names[a.type] || ''; this.promptProg = prog; this.promptHeal = heal;
  }

  maybeSkillCheck(s, a, dt) {
    if (!['ring', 'heal', 'selfheal'].includes(a.type) || ui.skill.active) return;
    this.skillT -= dt;
    if (this.skillT > 0) return;
    this.skillT = 2.5 + Math.random() * 4.5;
    if (Math.random() > 0.6) return;
    ui.skill.start((r) => {
      const act = s.action;
      if (r === 'great') { if (act?.type === 'ring') { act.bell.progress = Math.min(0.999, act.bell.progress + 0.012); } this.addScore('objectives', 150, 'Great toll check'); }
      else if (r === 'good') this.addScore('objectives', 50);
      else {
        if (act?.type === 'ring') { act.bell.progress = Math.max(0, act.bell.progress - 0.1); audio.crack(act.bell.pos.clone().setY(2.5)); this.noise(act.bell.pos, 80, 'crack'); this.toast('The bell cracks — the Reliquary heard that', 'bad'); }
        else if (act) { const tg = act.type === 'heal' ? act.target : s; tg.healProg = Math.max(0, tg.healProg - 0.1); audio.groan(s.chest(), s.def.voice, 0.3); this.noise(s.pos, 12, 'groan'); }
        s.cancelAction(); this.holdLatch = true;
      }
    });
  }

  hookedControl(s, dt) {
    s.speed = 0;
    this.escapeCD -= dt;
    if (s.hookPhase === 1) {
      this.promptText = s.escapeAttempts > 0 ? `Bound. Wait for help, or <kbd>Space</kbd> try to tear free (${s.escapeAttempts} left)` : 'Bound. Wait for help.';
      this.promptProg = s.hookTimer / 55;
      if (pressed.has('Space') && s.escapeAttempts > 0 && this.escapeCD <= 0) {
        s.escapeAttempts--; this.escapeCD = 1.2;
        if (Math.random() < 0.06) { s.unhook(s); this.addScore('survival', 1500, 'Tore free'); }
        else { s.hookTimer = Math.max(1, s.hookTimer - 8); audio.chains(s.post.hang, 4); this.toast('The chains hold', 'bad'); }
      }
    } else {
      this.promptText = 'Struggle! Hit the toll checks or the moor takes you';
      this.promptProg = s.hookTimer / 50;
      if (!ui.skill.active) {
        this.skillT -= dt;
        if (this.skillT <= 0) {
          this.skillT = 1.2 + Math.random() * 1.8;
          ui.skill.start((r) => { if (r === 'miss') { s.hookTimer -= 10; audio.gurgle(s.post.hang, 6, 0.5); } }, { size: 40, great: 0, dur: 1.0 });
        }
      }
    }
  }

  // ---------------------------------------------------------------- camera
  updateCamera(dt) {
    const s = this.player;
    const sens = 0.0022 * settings.sens;
    this.camYaw -= mouseDX * sens;
    this.camPitch -= mouseDY * sens * (settings.invert ? -1 : 1);
    if (keys.has('ArrowLeft')) this.camYaw += dt * 2.2;
    if (keys.has('ArrowRight')) this.camYaw -= dt * 2.2;
    mouseDX = mouseDY = 0;
    this.camPitch = clamp(this.camPitch, -1.25, 0.95);
    let pivot, dist = 3.4, side = 0.5;
    if (s.health === 'hooked' || s.health === 'carried') { pivot = V(s.pos.x, s.pos.y + (s.health === 'carried' ? 0 : 1.4), s.pos.z); dist = 4.2; side = 0; }
    else pivot = V(s.pos.x, s.pos.y + (s.health === 'downed' ? 0.55 : s.crouch ? 1.05 : 1.62), s.pos.z);
    if (s.health === 'downed') dist = 2.5;
    if (s.health === 'dead' || s.health === 'escaped') { pivot = this.camPos.clone(); dist = 0.001; side = 0; }
    const cp = Math.cos(this.camPitch), sp = Math.sin(this.camPitch);
    const look = V(Math.sin(this.camYaw) * cp, sp, Math.cos(this.camYaw) * cp);
    const right = V(-Math.cos(this.camYaw), 0, Math.sin(this.camYaw));
    const shoulder = pivot.clone().addScaledVector(right, side);
    let t = this.world.raycast(pivot, shoulder);
    const sh = pivot.clone().lerp(shoulder, Math.max(0, t - 0.15));
    const desired = sh.clone().addScaledVector(look, -dist);
    t = this.world.raycast(sh, desired);
    const cam = sh.clone().lerp(desired, Math.max(0.04, t - 0.08));
    cam.y = Math.max(cam.y, 0.3);
    if (s.alive) this.camPos.lerp(cam, 1 - Math.exp(-dt * 30));
    camera.position.copy(this.camPos);
    // shakes
    const k = this.killer;
    let shake = this.hitShake * 0.06;
    if (k.lament && s.watching) shake += 0.012;
    this.hitShake = Math.max(0, this.hitShake - dt * 2.5);
    camera.position.x += (Math.random() - 0.5) * shake; camera.position.y += (Math.random() - 0.5) * shake;
    camera.lookAt(camera.position.clone().add(look));
    camera.updateMatrixWorld();
    audio.setListener(camera.position, look);
  }

  // ---------------------------------------------------------------- frame
  update(dt) {
    this.time += dt;
    const p = this.player, k = this.killer;
    if (pressed.has('Space')) ui.skill.press();
    // carried: wiggle with alternating A / D
    if (p.health === 'carried') {
      const key = pressed.has('KeyA') ? 'A' : pressed.has('KeyD') ? 'D' : null;
      if (key && key !== this.lastWiggleKey) { p.wiggle += 0.035; this.lastWiggleKey = key; }
    }
    for (const s of this.survivors) s.update(dt);
    this.updateCamera(dt);
    this.computeWatch(dt);
    k.update(dt);
    for (const b of this.bells) { b.update(dt); if (b.locked) { b.model.userData.light.intensity = 0.15; b.model.userData.halo.material.opacity = 0.03; } }
    for (const pl of this.pallets) pl.update(dt);
    for (const po of this.posts) po.update(dt);
    for (const g of this.gates) g.update(dt);
    for (const st of this.sentinels) st.update(dt);
    ui.skill.update(dt);

    // escapes through open gates
    for (const s of this.survivors) if (s.standing && Math.abs(s.pos.z) > HALF + 2.4) s.escape('gate');
    // the drowned well appears for the last one standing
    const alive = this.survivors.filter((s) => s.alive);
    if (!this.hatch && alive.length === 1 && alive[0].standing && this.survivors.length > 1) {
      this.hatch = new Hatch(this, this.world.hatchSpot);
      this.toast('You hear water rising in an old well…', 'warn');
    }
    if (this.collapseT !== null) {
      this.collapseT -= dt;
      if (this.collapseT <= 0) { this.collapseT = 0; for (const s of this.survivors) if (s.alive) s.die('collapse'); this.collapseT = null; }
    }
    // auras
    this.afterCD -= dt; this.auraT -= dt;
    if (p.hasPerk('kinship')) {
      const hooked = this.survivors.find((s) => s.health === 'hooked');
      if (hooked && flatDist(hooked.post.pos, p.pos) < 24) { this.auraT = Math.max(this.auraT, 0.2); if (this.auraSrc !== 'afterimage' || this.auraT <= 0.2) this.auraSrc = 'kinship'; }
    }
    k.aura.visible = this.auraT > 0 && p.alive;
    for (const s of this.survivors) s.aura.visible = !s.isPlayer && s.alive && (s.health === 'hooked' || s.health === 'downed' || s.health === 'carried');
    this.noises = this.noises.filter((n) => this.time - n.t < 6);
    if (this.scratches.length > 300) this.scratches.splice(0, this.scratches.length - 300);
    while (this.scratches.length && this.time - this.scratches[0].t > 12) this.scratches.shift();
    if (p.alive) this.addScore('survival', 2 * dt);

    // atmosphere / audio mix
    const dK = flatDist(k.pos, p.pos);
    let chase = 0;
    if (k.target === p && k.state === 'chase') chase = clamp(1.2 - dK / 26, 0.25, 1);
    else if (dK < 14 && k.moving) chase = 0.35;
    if (!p.alive) chase = 0;
    this.chase += (chase - this.chase) * Math.min(1, dt * 1.5);
    audio.update(dt, {
      listener: camera.position, chase: this.chase,
      breath: p.health === 'injured' || p.health === 'downed' ? 1 : p.resolve < 30 ? 0.6 : 0,
      lament: k.lament && p.watching ? 1 : 0,
    });
    // grading uniforms
    const u = grade.uniforms;
    const bl = p.blinkT > 0 ? Math.min(1, Math.min((p.blinkDur - p.blinkT) / 0.07, p.blinkT / 0.12)) : 0;
    u.uBlink.value = bl;
    u.uLow.value = clamp(1 - p.resolve / (p.maxResolve * 0.4), 0, 1);
    u.uLament.value += ((k.lament && p.watching ? 1 : 0) - u.uLament.value) * Math.min(1, dt * 3);
    u.uHurt.value = p.health === 'injured' ? 0.6 : p.health === 'downed' || p.health === 'hooked' ? 1 : 0;
    u.uHit.value = this.hitShake;
    this.fadeIn = clamp((performance.now() - this.matchStart) / 1800, 0, 1);
    u.uFade.value = 1 - this.fadeIn;
    if (this.endT !== null) { this.endT -= dt; u.uFade.value = Math.max(u.uFade.value, clamp(1 - this.endT / 2.5, 0, 1)); if (this.endT <= 0) this.showEnd(); }

    ui.prompt(this.promptText, this.promptProg, this.promptHeal);
    $('wiggle').style.display = p.health === 'carried' ? 'block' : 'none';
    if (p.health === 'carried') $('wiggle').querySelector('i').style.width = (p.wiggle * 100) + '%';
    ui.updateHud(this);
  }

  updateAmbient(dt) {
    const W = this.world; if (!W) return;
    W.grassUniforms.uTime.value = this.time;
    W.mistUniforms.uTime.value = this.time;
    W.mistUniforms.uCam.value.copy(camera.position);
    W.sky.material.uniforms.uTime.value = this.time;
    W.sky.position.copy(camera.position);
    for (const L of this.flickers || []) L.intensity = (L.userData.base ??= L.intensity) * (0.85 + Math.sin(this.time * 11 + L.id) * 0.08 + (Math.random() - 0.5) * 0.1);
    const focus = this.state === 'playing' ? this.player.pos : V(-4, 0, 0);
    moon.target.position.set(focus.x, 0, focus.z);
    moon.position.copy(moon.target.position).addScaledVector(W.moonDir, 70);
    this.fx.ambient(dt, camera.position, W.pools);
    this.fx.update(dt);
  }

  updateTitle(dt) {
    this.time += dt; this.titleT += dt;
    // slow sway on the moonlit side of the church, the statue in the foreground
    const tc = this.titleCam || { a: -1.75, r: 22 };
    const a = tc.a + Math.sin(this.titleT * 0.05) * 0.2;
    camera.position.set(-4 + Math.cos(a) * tc.r, 2.4 + Math.sin(this.titleT * 0.2) * 0.2, Math.sin(a) * tc.r);
    camera.lookAt(-3.5, 2.6, -8.2);
    camera.updateMatrixWorld();
    for (const b of this.bells) b.update(dt);
    this.titleStart ??= performance.now();
    grade.uniforms.uFade.value = clamp(1 - (performance.now() - this.titleStart) / 2000, 0, 1);
    grade.uniforms.uBlink.value = 0; grade.uniforms.uLow.value = 0; grade.uniforms.uHurt.value = 0; grade.uniforms.uLament.value = 0; grade.uniforms.uHit.value = 0;
    audio.setListener(camera.position, camera.getWorldDirection(V()));
    audio.update(dt, { listener: camera.position, chase: 0, breath: 0, lament: 0 });
  }

  showEnd() {
    this.endT = null;
    this.state = 'ended';
    document.exitPointerLock?.();
    const p = this.player;
    const verdict = $('verdict'), ep = $('epitaph');
    const esc = p.health === 'escaped';
    verdict.textContent = esc ? 'ESCAPED' : this.endReason === 'bled' ? 'BLED OUT' : this.endReason === 'collapse' ? 'THE MOOR ROSE' : 'SACRIFICED';
    verdict.className = 'verdict ' + (esc ? 'good' : 'bad');
    const lines = esc
      ? ['You walked out through the lychgate and never looked back. You didn\'t dare to.', 'Behind you the bells kept ringing, though no one was pulling the ropes.', 'You climbed out of the Drowned Well, soaked and shaking, but alive.']
      : ['The peat closed over your head. The bells will need a new mourner.', 'You blinked. That was all it took.', 'The moor keeps everything it is given.'];
    ep.textContent = esc ? (this.endReason === 'hatch' ? lines[2] : lines[Math.floor(Math.random() * 2)]) : lines[Math.floor(Math.random() * 3)];
    $('results').innerHTML = this.survivors.map((s) => {
      const st = { escaped: ['Escaped', 'var(--ok)'], dead: ['Taken by the moor', 'var(--blood-hi)'] }[s.health] || ['Still on the moor', 'var(--muted)'];
      return `<div class="r">${portrait(s.def, 42, s.health === 'dead' ? 'dead' : '')}<div><b>${s.name}${s.isPlayer ? ' (you)' : ''}</b><span style="color:${st[1]}">${st[0]}</span></div></div>`;
    }).join('');
    const sc = this.score;
    const total = Math.round(sc.objectives + sc.survival + sc.altruism + sc.boldness);
    $('emberTotal').textContent = total.toLocaleString();
    $('score').innerHTML = [['Objectives', sc.objectives], ['Survival', sc.survival], ['Altruism', sc.altruism], ['Boldness', sc.boldness]]
      .map(([l, v]) => `<div class="c"><div class="v">${Math.round(v).toLocaleString()}</div><div class="l">${l}</div></div>`).join('');
    const counts = {};
    for (const e of this.scoreLog) { const k = e.replace(/ \+\d+$/, ''); counts[k] = (counts[k] || 0) + 1; }
    $('scoreLog').innerHTML = Object.entries(counts).map(([k, n]) => `<div>${k}${n > 1 ? ` ×${n}` : ''}</div>`).join('') + `<div>Bells rung by the four: ${this.bellsRung} / 7</div>`;
    try {
      const best = Number(localStorage.getItem('hollowmoor.best') || 0);
      if (total > best) { localStorage.setItem('hollowmoor.best', String(total)); $('scoreLog').innerHTML += '<div style="color:var(--ember)">A new personal best</div>'; }
    } catch { /* ignore */ }
    ui.only('end');
  }
}

// ------------------------------------------------------------------ menus
let chosen = 0;
let chosenPerks = ['unblinking', 'afterimage', 'ropeburn', 'kinship'];
try { const s = JSON.parse(localStorage.getItem('hollowmoor.loadout') || 'null'); if (s) { chosen = s.c ?? 0; chosenPerks = s.p ?? chosenPerks; } } catch { /* ignore */ }

function buildSelect() {
  const sc = $('survivorCards');
  sc.innerHTML = SURVIVORS.map((d, i) => `<div class="card ${i === chosen ? 'sel' : ''}" data-i="${i}">${portrait(d, 64)}<div><b>${d.name}</b><div class="t">${d.title}</div><div class="bio">${d.bio}</div></div></div>`).join('');
  sc.querySelectorAll('.card').forEach((c) => c.onclick = () => { chosen = Number(c.dataset.i); audio.uiClick(); buildSelect(); });
  const pc = $('perkCards');
  pc.innerHTML = PERKS.map((p) => `<div class="perk ${chosenPerks.includes(p.id) ? 'sel' : ''}" data-id="${p.id}"><div class="d">${p.icon}</div><div><b>${p.name}</b><span>${p.desc}</span></div></div>`).join('');
  pc.querySelectorAll('.perk').forEach((c) => c.onclick = () => {
    const id = c.dataset.id;
    if (chosenPerks.includes(id)) chosenPerks = chosenPerks.filter((x) => x !== id);
    else if (chosenPerks.length < 4) chosenPerks.push(id);
    audio.uiClick(); buildSelect();
  });
  $('perkCount').textContent = `${chosenPerks.length} / 4`;
}

let backTo = 'title';
document.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => {
  audio.init(); audio.setVolume(settings.vol); audio.uiClick();
  const go = b.dataset.go;
  backTo = game?.state === 'paused' ? 'pause' : 'title';
  if (go === 'select') buildSelect();
  if (game?.state === 'paused') ui.only('hud', go); else ui.only(go);
}));
document.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => {
  audio.uiClick();
  if (game?.state === 'paused') ui.only('hud', 'pause'); else ui.only('title');
}));
$('startBtn').addEventListener('click', () => {
  audio.init(); audio.setVolume(settings.vol);
  try { localStorage.setItem('hollowmoor.loadout', JSON.stringify({ c: chosen, p: chosenPerks })); } catch { /* ignore */ }
  lock();
  game.startMatch(chosen, chosenPerks.slice());
});
$('resumeBtn').addEventListener('click', () => game.resume());
$('abandonBtn').addEventListener('click', () => game.abandon());
$('againBtn').addEventListener('click', () => { lock(); game.startMatch(chosen, chosenPerks.slice()); });
$('toTitleBtn').addEventListener('click', () => { game.disposeMatch(); game.world = null; game.setupTitle(); });
$('clickPlay').addEventListener('click', () => lock());

// settings bindings
const sens = $('sens'), vol = $('vol'), q = $('quality'), inv = $('invert'), fpsBox = $('showFps');
sens.value = settings.sens; vol.value = settings.vol; q.value = settings.quality; inv.checked = settings.invert; fpsBox.checked = settings.showFps;
sens.oninput = () => { settings.sens = Number(sens.value); saveSettings(); };
vol.oninput = () => { settings.vol = Number(vol.value); audio.setVolume(settings.vol); saveSettings(); };
q.onchange = () => { settings.quality = q.value; saveSettings(); moon.shadow.mapSize.set(q.value === 'high' ? 2048 : 1024, q.value === 'high' ? 2048 : 1024); moon.shadow.map?.dispose(); moon.shadow.map = null; buildComposer(); };
inv.onchange = () => { settings.invert = inv.checked; saveSettings(); };
fpsBox.onchange = () => { settings.showFps = fpsBox.checked; saveSettings(); $('fps').style.display = settings.showFps ? 'block' : 'none'; };

// ------------------------------------------------------------------ boot
let last = performance.now(), fpsAcc = 0, fpsN = 0;
function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000); last = now;
  const dt0 = dt;
  if (!game) return;
  fpsAcc += dt; fpsN++;
  if (fpsAcc > 0.5) { $('fps').textContent = `${Math.round(fpsN / fpsAcc)} fps`; fpsAcc = 0; fpsN = 0; }
  if (game.state === 'playing') {
    while (dt > 0) { const s = Math.min(dt, 1 / 30); game.update(s); dt -= s; pressed.clear(); }
  } else if (game.state === 'title') game.updateTitle(dt);
  else if (game.state === 'paused' || game.state === 'ended') { /* frozen */ }
  pressed.clear();
  if (game.state !== 'paused') game.updateAmbient(dt0);
  grade.uniforms.uTime.value = performance.now() / 1000;
  composer.render();
}

try { if (matchMedia('(pointer: coarse)').matches && !matchMedia('(pointer: fine)').matches) $('touchNote').hidden = false; } catch { /* ignore */ }

async function boot() {
  const T = await buildTextures((f, name) => {
    $('loadBar').style.width = (f * 80) + '%';
    $('loadText').textContent = { ground: 'Cutting the peat…', stone: 'Laying the stones…', planks: 'Sawing the pallets…', bronze: 'Casting the bells…', statue: 'Carving the saint…', mask: 'Weeping…', bark: 'Killing the trees…' }[name] || $('loadText').textContent;
  });
  const M = makeMaterials(T);
  $('loadText').textContent = 'Drowning the parish…';
  $('loadBar').style.width = '90%';
  await new Promise((r) => setTimeout(r, 20));
  game = new Game(T, M);
  window.__G = game;
  window.__R = { renderer, scene, hemi, moon, get grade() { return grade; }, get bloom() { return bloom; }, camera };
  game.setupTitle();
  // warm up shaders before the curtain lifts
  camera.position.set(10, 4, 20); camera.lookAt(0, 2, 0);
  renderer.compile(scene, camera);
  $('loadBar').style.width = '100%';
  ui.show('loading', false);
  ui.only('title');
  requestAnimationFrame(frame);
}
boot().catch((e) => { console.error(e); $('loadText').textContent = 'The vigil failed to begin: ' + e.message; });
