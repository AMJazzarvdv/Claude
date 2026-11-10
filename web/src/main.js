// HOLLOWMOOR — entry point. Renderer, post-processing, input, camera, the
// gaze system, match flow and menus.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { buildTextures } from './textures.js';
import { makeMaterials, SURVIVORS, buildReliquary, poseReliquary, RELIQUARY_POSES } from './models.js';
import * as RM from './models/reliquary.js';
import { World, HALF } from './world.js';
import { AudioEngine } from './audio.js';
import { Bell, Pallet, Post, Gate, Hatch, Survivor, V, angDiff, yawTo, flatDist } from './entities.js';
import { Killer, Sentinel, Memorial, TIER_NAMES } from './killer.js';
import { Chest, ItemReveal, ITEMS, ITEM_ICONS, HOLD, buildItemModel } from './items.js';
import { Input, SurvivorControl, makeView } from './control.js';
import { Net } from './net.js';
import { KillerControl } from './killerplay.js';
import { Crows } from './crows.js';
import { Weather } from './weather.js';
import { Ambient } from './ambient.js';
import { FX } from './fx.js';
import { UI, PERKS, portrait } from './ui.js';
import { clamp } from './noise.js';

const $ = (id) => document.getElementById(id);

// ------------------------------------------------------------------ settings
const settings = { sens: 1, vol: 0.8, quality: 'high', invert: false, showFps: false, difficulty: 'vigil' };
try { Object.assign(settings, JSON.parse(localStorage.getItem('hollowmoor.settings') || '{}')); } catch { /* storage unavailable */ }
const saveSettings = () => { try { localStorage.setItem('hollowmoor.settings', JSON.stringify(settings)); } catch { /* ignore */ } };

// Difficulty: Reliquary speed, bell length, how soon it ascends, how alert teammates are.
const DIFFS = {
  mercy: { id: 'mercy', name: 'Mercy', desc: 'A slower stone. Bells ring faster. It ascends late.', killerSpeed: 0.92, bellTime: 64, tier2: 3, tier3: 5, aiNotice: 0.4 },
  vigil: { id: 'vigil', name: 'Vigil', desc: 'The vigil as it was meant to be kept.', killerSpeed: 1, bellTime: 72, tier2: 2, tier3: 4, aiNotice: 0.3 },
  penance: { id: 'penance', name: 'Penance', desc: 'A faster stone that ascends early. Heavier bells.', killerSpeed: 1.07, bellTime: 80, tier2: 1, tier3: 3, aiNotice: 0.22 },
};
const REALMS = [
  { name: 'The Sunken Nave', rain: false },
  { name: 'Peat-Cutters\' Rows', rain: true },
  { name: 'St. Ebba\'s Drowned Yard', rain: null },
];
const RANKS = [[0, 'Novice'], [15000, 'Mourner'], [40000, 'Bellringer'], [90000, 'Keeper of the Vigil'], [180000, 'Saint of Hollowmoor']];
const rankOf = (e) => { let r = RANKS[0][1]; for (const [min, name] of RANKS) if (e >= min) r = name; return r; };
const bank = { get() { try { return Number(localStorage.getItem('hollowmoor.embers') || 0); } catch { return 0; } }, add(n) { try { localStorage.setItem('hollowmoor.embers', String(this.get() + n)); } catch { /* ignore */ } } };

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
const mirrorCam = new THREE.PerspectiveCamera(50, 1.6, 0.05, 400);
// The mirror's view renders to a texture that is drawn, flipped like a real
// mirror, onto an oval over the HUD.
const mirrorRT = new THREE.WebGLRenderTarget(16, 16, { type: THREE.HalfFloatType });
mirrorRT.texture.repeat.set(-1, 1); mirrorRT.texture.offset.set(1, 0);
const mirrorOverlay = new THREE.Scene(), mirrorOrtho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
{
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 58, 64, 64, 63.5);
  g.addColorStop(0, '#fff'); g.addColorStop(1, '#000');
  x.fillStyle = '#000'; x.fillRect(0, 0, 128, 128); x.fillStyle = g; x.beginPath(); x.arc(64, 64, 64, 0, Math.PI * 2); x.fill();
  mirrorOverlay.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: mirrorRT.texture, alphaMap: new THREE.CanvasTexture(c), transparent: true, depthTest: false, depthWrite: false, fog: false })));
}

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
    uHurt: { value: 0 }, uFade: { value: 1 }, uHit: { value: 0 }, uAspect: { value: 1 }, uFlash: { value: 0 }, uWarn: { value: 0 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime, uBlink, uLow, uLament, uHurt, uFade, uHit, uAspect, uFlash, uWarn; varying vec2 vUv;
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
      c += vec3(0.7, 0.78, 1.0) * uFlash * (0.2 + l * 2.0);
      float r = length(d * vec2(uAspect, 1.0));
      c = mix(c, c * vec3(1.7, 0.45, 0.3), smoothstep(0.3, 0.95, r) * uWarn);
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
const localInput = new Input(true);
const keys = localInput.keys, pressed = localInput.pressed;
let mouseDX = 0, mouseDY = 0, noLock = false;
addEventListener('keydown', (e) => {
  if (game?.state === 'playing' && ['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ControlLeft', 'KeyS', 'KeyW', 'KeyF'].includes(e.code)) e.preventDefault();
  if (!keys.has(e.code)) pressed.add(e.code);
  keys.add(e.code);
  if (game?.state === 'intro' && ['Space', 'Escape', 'Enter'].includes(e.code)) { e.preventDefault(); game.endIntro(); return; }
  if (e.code === 'Escape' && game) {
    if (game.menu && noLock) game.resume();
    else if (game.state === 'playing' && (noLock || !document.pointerLockElement)) game.pause();
    else if (game.state === 'paused' && noLock) game.resume();
  }
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => { keys.clear(); localInput.mouseDown = false; localInput.rightDown = false; });
addEventListener('mousemove', (e) => {
  if (!game || game.state !== 'playing') return;
  if (document.pointerLockElement === canvas || noLock) { mouseDX += e.movementX || 0; mouseDY += e.movementY || 0; }
});
canvas.addEventListener('mousedown', (e) => {
  if (e.button === 0) { localInput.mouseDown = true; pressed.add('Mouse0'); }
  if (e.button === 2) { localInput.rightDown = true; pressed.add('Mouse2'); }
  if (game?.state === 'intro') game.endIntro();
  if (game?.state === 'playing' && !game.menu && !document.pointerLockElement && !noLock) lock();
});
addEventListener('mouseup', (e) => { if (e.button === 0) localInput.mouseDown = false; if (e.button === 2) localInput.rightDown = false; });
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
  if (document.pointerLockElement === canvas) { if (game.paused) game.resume(true); ui.show('clickPlay', false); }
  else if ((game.state === 'playing' || game.state === 'intro') && !noLock) { game.endIntro(); game.pause(); }
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
    // audioLocal / fxLocal always act on this machine; audio / fx are what the simulation calls (the host mirrors those to every player)
    this.audioLocal = audio; this.fxLocal = this.fx = new FX(scene, T);
    this.mode = 'solo'; this.role = 'survivor'; this.inp = localInput; this.net = null; this.effects = [];
    localInput.skill = ui.skill;
    this.state = 'title';
    this.time = 0;
    this.camYaw = 0; this.camPitch = -0.15; this.camPos = V();
    this.survivors = []; this.bells = []; this.pallets = []; this.posts = []; this.gates = []; this.sentinels = [];
    this.memorials = []; this.chests = []; this.projectiles = []; this.candle = null; this.diff = DIFFS.vigil;
    this.quality = settings.quality;
    this.noises = []; this.scratches = [];
    this.worldLights = [];
    this.titleT = 0; this.flash = 0;
  }

  // ---------------------------------------------------------------- world
  buildWorld(seed, { rain = false } = {}) {
    if (this.world) this.disposeMatch();
    this.quality = settings.quality;
    this.world = new World(scene, this.M, this.T, seed, settings.quality);
    this.bells = this.world.bellSpots.map((s, i) => new Bell(this, s, i));
    this.pallets = this.world.palletSpots.map((s, i) => new Pallet(this, s, i));
    this.posts = this.world.postSpots.map((s, i) => new Post(this, s, i));
    this.gates = this.world.gateSpots.map((s, i) => new Gate(this, s, i));
    // lights lent to things that appear mid-match (adding lights later would recompile every shader)
    this.spareLights = [0, 1, 2].map(() => { const L = new THREE.PointLight(0xffb060, 0, 9, 1.6); L.position.set(0, -30, 0); L.userData.free = true; this.world.root.add(L); return L; });
    this.chests = this.world.chestSpots.map((s, i) => new Chest(this, s, i));
    for (const lp of this.world.decorLights) { const g = new THREE.Sprite(this.M.glow); g.scale.set(1.5, 1.5, 1); g.position.copy(lp); this.world.root.add(g); }
    this.crows = new Crows(this, this.world.perches);
    this.weather = new Weather(this, scene, { rain });
    this.ambient = new Ambient(this);
    this.M.ground.roughness = rain ? 0.55 : 1;
    audio.rain(rain ? 1 : 0);
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
    for (const s of this.survivors) {
      scene.remove(s.model); scene.remove(s.aura);
      // survivors are rebuilt every match: free their meshes (textures are cached and shared; held items are not theirs)
      if (s.heldModel) s.heldModel.parent?.remove(s.heldModel);
      s.model.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
    }
    if (this.killer) { scene.remove(this.killer.model); scene.remove(this.killer.aura); scene.remove(this.killer.cloth); scene.remove(this.killer.ghost); audio.silenceGrind('killer'); }
    for (const pr of this.projectiles) scene.remove(pr.model);
    if (this.weather) { this.weather.dispose(scene); this.weather = null; }
    if (this.ambient) { this.ambient.dispose(); this.ambient = null; }
    audio.rain(0);
    if (this.world) { this.world.dispose(); if (this.world.sky) scene.remove(this.world.sky); }
    this.survivors = []; this.killer = null; this.sentinels = []; this.hatch = null;
    if (this.netFlasks) { for (const f of this.netFlasks.values()) scene.remove(f.model); this.netFlasks = null; }
    for (const e of this.effects) e.finish?.();
    this.memorials = []; this.chests = []; this.projectiles = []; this.effects = []; this.candle = null; this.crows = null;
    this.spectate = null; this.menu = false; this.seeT = 0;
    document.body.classList.remove('as-killer');
    $('killerHud').hidden = true; $('markers').innerHTML = ''; this.pings = [];
    $('mirrorFrame').hidden = true;
    this.fx.clear();
  }

  setupTitle() {
    this.state = 'title';
    this.fovKick = 0; camera.fov = 64; camera.updateProjectionMatrix();
    if (!this.world) this.buildWorld(7);
    if (!this.titleStatue) {
      // the title shows it fully ascended
      this.titleStatue = buildReliquary(this.M, { alive: true });
      poseReliquary(this.titleStatue, RELIQUARY_POSES.judgement ? 'judgement' : 'weep');
      RM.setReliquaryTier?.(this.titleStatue, 3);
      this.titleFX = { time: 0, glow: 0.6, relic: 0.8, wings: 1, halo: 0.6 };
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
      // the statue close, a little right of centre (clear of the menu), on free ground
      const fwd = look.clone().sub(cp).setY(0).normalize(), right = V(-fwd.z, 0, fwd.x);
      let sp = null;
      for (const [f, side] of [[4.8, 1.0], [5.6, 1.2], [6.4, 1.3], [r * 0.42, 0]]) {
        const q = cp.clone().addScaledVector(fwd, f).addScaledVector(right, side); q.y = 0;
        const c = W.cellIndex(q.x, q.z);
        if (c >= 0 && W.grid[c] === 0 && W.raycast(cp, V(q.x, 1.4, q.z)) > 0.99) { sp = q; break; }
      }
      if (!sp) continue;
      this.titleCam = { a, r, statue: sp };
      break search;
    }
    const sp = this.titleCam.statue || V(-6.2, 0, -12.5);
    const cp0 = V(-4 + Math.cos(this.titleCam.a) * this.titleCam.r, 0, Math.sin(this.titleCam.a) * this.titleCam.r);
    this.titleStatue.position.copy(sp); this.titleStatue.rotation.y = Math.atan2(cp0.x - sp.x, cp0.z - sp.z) + 0.4;
    this.world.root.add(this.titleStatue);
    this.titleStart = performance.now();
    renderRank();
    ui.only('title');
  }

  // ---------------------------------------------------------------- match
  // cfg: { mode: 'solo'|'host'|'client', seed, rain, realm, diff,
  //        survivors: [{ def, perks, me, peer, name }], killer: { me, peer, name } }
  async startMatch(cfg) {
    this.matchId = (this.matchId || 0) + 1;
    ui.only();
    grade.uniforms.uFade.value = 1;
    $('loadText').textContent = 'The moor shifts beneath you…';
    ui.show('loading'); $('loadBar').style.width = '100%';
    await new Promise((r) => setTimeout(r, 30));
    if (this.titleStatue) this.titleStatue.parent?.remove(this.titleStatue);
    this.cfg = cfg; this.mode = cfg.mode || 'solo';
    const sim = this.mode !== 'client', net = this.net;
    const realm = REALMS[cfg.realm] || REALMS[0];
    this.realm = realm;
    this.diff = DIFFS[cfg.diff] || DIFFS.vigil;
    this.buildWorld(cfg.seed, { rain: !!cfg.rain });
    const W = this.world;
    this.survivors = cfg.survivors.map((c) => {
      const s = new Survivor(this, SURVIVORS[c.def], !!c.me, c.perks || []);
      s.human = !!(c.me || c.peer); s.peer = c.peer || null; s.playerName = c.name || '';
      if (s.human) { s.score = { objectives: 0, survival: 0, altruism: 0, boldness: 0 }; s.scoreLog = []; }
      if (c.me) { s.input = localInput; s.view = { cam: camera, mirror: mirrorCam, ready: true }; }
      else if (c.peer) { s.view = makeView(); if (sim) { s.input = net.remoteInput(c.peer); s.net = { epoch: 1, free: false, pos: V(), t: 0 }; } }
      return s;
    });
    this.player = this.survivors.find((s) => s.isPlayer) || null;
    this.killer = new Killer(this);
    const kc = cfg.killer || {};
    this.killer.human = !!(kc.me || kc.peer); this.killer.peer = kc.peer || null; this.killer.playerName = kc.name || '';
    if (this.killer.human) { this.killer.score = { brutality: 0, devotion: 0, cunning: 0, dread: 0 }; this.killer.scoreLog = []; }
    if (kc.me) { this.killer.input = localInput; this.killer.model.visible = false; } // you look out through its eyes
    else if (kc.peer && sim) { this.killer.input = net.remoteInput(kc.peer); this.killer.net = { epoch: 1, free: false, pos: V(), t: 0 }; }
    this.role = kc.me ? 'killer' : 'survivor';
    this.me = kc.me ? this.killer : this.player;
    if (sim) {
      this.survivors.forEach((s, k) => {
        const a = (k / 4) * Math.PI * 2;
        const p = W.randomFreePoint(Math.random, 0, 2.5, W.survivorSpawn.x + Math.cos(a) * 2, W.survivorSpawn.z + Math.sin(a) * 2);
        s.place(p); s.yaw = yawTo(s.pos, V(0, 0, 0));
      });
      this.killer.place(W.killerSpawn); this.killer.yaw = yawTo(this.killer.pos, V(0, 0, 0));
      // two Sentinels already wait near bells
      const bs = this.bells.slice().sort(() => Math.random() - 0.5).slice(0, 2);
      for (const b of bs) {
        const p = W.randomFreePoint(Math.random, 3, 6, b.pos.x, b.pos.z);
        this.sentinels.push(new Sentinel(this, V(p.x, 0, p.z), Math.random() * 6.28, ['pray', 'tilt', 'beckon'][Math.floor(Math.random() * 3)]));
      }
    } else {
      // a guest: everything is placed by the host's first snapshot
      this.survivors.forEach((s, k) => s.place({ x: W.survivorSpawn.x + k * 0.8, z: W.survivorSpawn.z }));
      this.killer.place(W.killerSpawn);
      this.weather.auto = false; this.crows.auto = false;
    }
    this.bellsRung = 0; this.bellsRequired = 5; this.gatesPowered = false; this.collapseT = null; this.hookEvents = 0;
    this.noises = []; this.scratches = []; this.time = 0; this.endT = null; this.auraT = 0; this.afterCD = 0; this.auraSrc = '';
    this.stareScore = 0; this.over = false; this.spectate = null; this.fate = null;
    this.fovKick = 0; camera.fov = 64; camera.updateProjectionMatrix();
    this.memorials = []; this.projectiles = []; this.effects = []; this.candle = null; this.deaths = 0; this.tollWarnT = -99; this.lookWarn = 0; this.canonYaw = 0;
    for (const s of this.survivors) { s.item = null; s.itemCharges = 0; }
    localInput.skillT = 3; localInput.holdLatch = false; localInput.lastWiggleKey = null; localInput.escapeCD = 0;
    this.hitShake = 0; this.chase = 0;
    this.camYaw = this.me.yaw; this.camPitch = -0.12;
    this.camPos.copy(this.me.pos).add(V(0, 2, 0));
    ui.buildStatus(this.survivors);
    ui.buildPerkHud(this.player ? [...this.player.perks] : []);
    ui.clearToasts();
    $('fps').style.display = settings.showFps ? 'block' : 'none';
    document.body.classList.toggle('as-killer', this.role === 'killer');
    $('killerHud').hidden = this.role !== 'killer'; this.pings = []; this.killerSeen = false;
    ui.show('loading', false);
    this.updateItemHud(); this.updateTierHud();
    net?.onMatchBuilt();
    this.startIntro(realm);
  }

  // ---------------------------------------------------------------- intro
  startIntro(realm) {
    const k = this.killer, W = this.world;
    this.state = 'intro'; this.introT = 0; this.introDur = 6.5;
    ui.only('intro');
    $('introRealm').textContent = realm.name;
    $('introDiff').textContent = `${this.diff.name} · ${this.weather.rain ? 'Drizzle' : 'Still mist'}`;
    const f = k.forward(), head = k.headPos();
    const roomy = (p) => W.boxes.every((b) => Math.max(b.minX - p.x, p.x - b.maxX, b.minY - p.y, p.y - b.maxY, b.minZ - p.z, p.z - b.maxZ) > 0.45);
    // a vantage in front of the statue's face with a clear sightline
    let end = null;
    for (const d of [3.4, 4.2, 5.2, 2.6]) for (const da of [0, 0.5, -0.5, 1, -1]) {
      const c = Math.cos(da), sn = Math.sin(da);
      const dir = V(f.x * c - f.z * sn, 0, f.x * sn + f.z * c);
      const p = V(k.pos.x + dir.x * d, 1.9, k.pos.z + dir.z * d);
      if (!end && W.raycast(p, head) > 0.98 && roomy(p)) end = p;
    }
    this.introTo = end || V(k.pos.x + f.x * 3.4, 1.9, k.pos.z + f.z * 3.4);
    // the approach: low over the moor toward its face, kept clear of walls and away from the trees' branches
    const trees = W.circles.filter((c) => c.h > 2.5);
    const clearance = (a, b) => {
      let m = 99;
      for (let i = 0; i <= 8; i++) {
        const x = a.x + (b.x - a.x) * i / 8, z = a.z + (b.z - a.z) * i / 8;
        for (const c of trees) m = Math.min(m, Math.hypot(c.x - x, c.z - z) - c.r);
      }
      return m;
    };
    // the flight must stay out of every wall: sample the actual curved path (see updateIntro)
    const at = (from, e) => V(from.x + (this.introTo.x - from.x) * e, from.y + (this.introTo.y - from.y) * e + Math.sin(e * Math.PI) * this.introArc, from.z + (this.introTo.z - from.z) * e);
    const pathOK = (from) => {
      let prev = from;
      for (let i = 1; i <= 16; i++) { const p = at(from, i / 16); if (W.raycast(prev, p) < 0.999 || !roomy(p)) return false; prev = p; }
      return roomy(from);
    };
    const back = V(this.introTo.x - k.pos.x, 0, this.introTo.z - k.pos.z).normalize();
    let best = null, bestS = -1;
    for (const [d, y, arc] of [[18, 3.6, 1.2], [22, 3.6, 1.2], [14, 3.0, 0.8], [10, 2.6, 0.4], [7, 2.3, 0]]) {
      this.introArc = arc;
      for (let i = 0; i < 12; i++) {
        const a = (i % 2 ? 1 : -1) * Math.ceil(i / 2) * 0.22;
        const dir = V(back.x * Math.cos(a) - back.z * Math.sin(a), 0, back.x * Math.sin(a) + back.z * Math.cos(a));
        const p = V(k.pos.x + dir.x * d, y, k.pos.z + dir.z * d);
        if (Math.abs(p.x) > HALF - 3 || Math.abs(p.z) > HALF - 3) continue;
        if (W.raycast(p, head) < 0.98 || !pathOK(p)) continue;
        const s = Math.min(clearance(p, this.introTo), clearance(p, head) + 0.5) - Math.abs(a) * 0.6;
        if (s > bestS) { bestS = s; best = { p, arc }; }
      }
      if (best) break;
    }
    // nowhere to fly in from (it stands in a ruin): ease back from its face instead
    if (!best) { this.introArc = 0; best = { p: this.introTo.clone().addScaledVector(back, 1.6).setY(this.introTo.y + 0.3), arc: 0 }; if (!roomy(best.p) || W.raycast(best.p, head) < 0.98) best.p = this.introTo.clone(); }
    this.introFrom = best.p; this.introArc = best.arc;
    this.introLook0 = V(k.pos.x, 2.2, k.pos.z); this.introLook1 = head.clone().add(V(0, -0.15, 0));
    this.introFlash = false;
    RM.setReliquaryLook?.(k.model, 0, 0);
    k.sync(0);
    audio.toll(null, 98, 0.6, 9);
    setTimeout(() => { if (this.state === 'intro') audio.choir(this.killer.headPos(), 3.5, 0.35, 0, 98); }, 3000);
  }

  updateIntro(dt) {
    this.introT += dt;
    const t = clamp(this.introT / (this.introDur - 0.6), 0, 1);
    const e = t * t * (3 - 2 * t);
    camera.position.lerpVectors(this.introFrom, this.introTo, e);
    camera.position.y += Math.sin(e * Math.PI) * this.introArc;
    // lightning: in the flash its head has already turned to look at you
    if (!this.introFlash && this.introT > 3.9) {
      this.introFlash = true;
      const k = this.killer;
      RM.setReliquaryLook?.(k.model, angDiff(k.yaw, yawTo(k.pos, camera.position)), Math.atan2(camera.position.y - 2.3, Math.max(0.5, flatDist(k.pos, camera.position))));
      if (this.weather) { this.weather.flashes = [0, 0.14]; this.weather.flashT = 0; }
      audio.thunder(160);
      this.hitShake = 0.35;
    }
    if (this.introFlash) { this.hitShake = Math.max(0, this.hitShake - dt * 1.5); camera.position.x += (Math.random() - 0.5) * this.hitShake * 0.05; camera.position.y += (Math.random() - 0.5) * this.hitShake * 0.05; }
    const look = this.introLook0.clone().lerp(this.introLook1, Math.min(1, e * 1.4));
    camera.lookAt(look); camera.updateMatrixWorld();
    audio.setListener(camera.position, look.clone().sub(camera.position).normalize());
    this.killer.sync(dt);
    for (const b of this.bells) b.update(dt);
    grade.uniforms.uFade.value = clamp(1 - this.introT / 1.2, 0, 1) + clamp((this.introT - (this.introDur - 0.4)) / 0.4, 0, 1);
    grade.uniforms.uBlink.value = 0; grade.uniforms.uLow.value = 0; grade.uniforms.uHurt.value = 0; grade.uniforms.uLament.value = 0; grade.uniforms.uHit.value = 0; grade.uniforms.uWarn.value = 0;
    audio.update(dt, { listener: camera.position, chase: 0, breath: 0, lament: 0 });
    // online, the opening holds on its last shot until everyone has arrived
    const waiting = this.net && this.mode !== 'solo' && !this.net.readyToBegin();
    if (waiting) this.introT = Math.min(this.introT, this.introDur - 0.5);
    $('introWait').hidden = !(waiting && this.introT > this.introDur - 1.2);
    if (this.introT >= this.introDur) this.endIntro();
  }

  endIntro() {
    if (this.state !== 'intro') return;
    if (this.net && this.mode !== 'solo' && !this.net.readyToBegin()) return;
    $('introWait').hidden = true;
    this.state = 'playing';
    ui.only('hud');
    this.fadeIn = 0; this.matchStart = performance.now() - 900;
    this.camYaw = this.me.yaw; this.camPitch = -0.12;
    this.camPos.copy(this.me.pos).add(V(0, 2, 0));
    keys.clear(); pressed.clear();
    const m = this.matchId, hint = (text, kind, ms) => setTimeout(() => { if (this.matchId === m && this.state !== 'title') ui.toast(text, kind); }, ms);
    if (this.role === 'killer') { hint('Bind them all before five bells ring', 'big', 600); hint('You are stone while any of them can see you', 'warn', 3800); }
    else { hint('Ring five of the seven Mourning Bells', 'big', 600); hint('It cannot move while you watch it', 'warn', 3800); }
    this.net?.onIntroEnd();
  }

  pause() {
    if (this.state !== 'playing' || this.menu) return;
    keys.clear(); localInput.mouseDown = false; localInput.rightDown = false;
    // an online vigil does not stop for one player's menu
    if (this.mode !== 'solo') { this.menu = true; ui.only('hud', 'pause'); return; }
    this.state = 'paused'; ui.only('hud', 'pause'); audio.silenceGrind('killer');
  }
  resume(fromLock = false) {
    if (this.menu) { this.menu = false; ui.only('hud'); if (!fromLock && !noLock) lock(); return; }
    if (this.state !== 'paused') return;
    this.state = 'playing'; ui.only('hud');
    if (!fromLock && !noLock) lock();
  }
  get paused() { return this.state === 'paused' || !!this.menu; }
  abandon() { this.leaveOnline(); this.toTitle(); }
  toTitle() { this.state = 'title'; this.menu = false; this.disposeMatch(); this.world = null; document.exitPointerLock?.(); this.setupTitle(); }
  leaveOnline() { if (this.net) { this.net.restore(); this.net.leave(); } this.net = null; this.mode = 'solo'; }
  // after an online vigil: clear the moor and stand in the room again
  backToLobby() { this.toTitle(); ui.only('lobby'); }

  // ---------------------------------------------------------------- shared services
  borrowLight(color, distance = 9, intensity = 2.6) {
    const L = this.spareLights?.find((x) => x.userData.free) || new THREE.PointLight();
    L.userData.free = false; L.color.setHex(color); L.distance = distance; L.intensity = intensity;
    return L;
  }
  returnLight(L) { L.intensity = 0; L.position.set(0, -30, 0); L.userData.free = true; }
  nearCandle(pos) { return !!(this.candle && flatDist(this.candle.pos, pos) < this.candle.r); }
  addMemorial(s) { this.memorials.push(new Memorial(this, s)); }

  giveItem(s, id) {
    s.item = id; s.itemCharges = ITEMS[id].charges;
    this.attachHeld(s);
    this.sfxTo(s, 'itemUse');
    this.toastTo(s, `You found ${ITEMS[id].name}`, 'good');
    if (s.isPlayer) this.updateItemHud();
  }
  consumeItem(s) {
    s.item = null; s.itemCharges = 0; s.mirrorUp = false;
    this.attachHeld(s);
    if (s.isPlayer) this.updateItemHud();
  }
  // what a chest gave rises out of it and flies to the finder's hand (shown on every machine)
  revealItem(chest, s, id) {
    this.effects.push(new ItemReveal(this, chest, s, id));
    this.net?.event('reveal', chest.id, this.survivors.indexOf(s), id);
  }
  revealShow(chestId, si, id) { const c = this.chests[chestId], s = this.survivors[si]; if (c && s) this.effects.push(new ItemReveal(this, c, s, id)); }
  attachHeld(s) {
    if (s.heldModel) { s.heldModel.parent?.remove(s.heldModel); s.heldModel = null; }
    if (!s.item) return;
    const j = s.model.userData.j, hand = j.handR || j.elR;
    const m = buildItemModel(s.item, this.M);
    if (!j.handR) m.position.set(0, -0.27, 0.04);
    else if (HOLD[s.item]) m.quaternion.setFromRotationMatrix(HOLD[s.item]);
    m.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    hand.add(m); s.heldModel = m;
  }

  holyHit(target, by = null) {
    if (target === this.killer) { target.scald(); this.addScore(by, 'boldness', 1500, 'Scalded the Reliquary'); return; }
    if (target.isMemorial) { target.shatter(); this.toast('The statue crumbles. Their vigil is over.', 'good'); this.addScore(by, 'altruism', 300, 'Laid a statue to rest'); return; }
    const i = this.sentinels.indexOf(target);
    if (i < 0) return;
    this.sentinels.splice(i, 1);
    this.world.root.remove(target.model); this.world.root.remove(target.cloth);
    this.fx.debris(target.pos); this.audio.shatter(target.pos.clone().setY(1.2));
    this.toast('A Sentinel shatters', 'good'); this.addScore(by, 'boldness', 600, 'Shattered a Sentinel');
  }

  onAscend(k, tier) {
    const m = this.matchId;
    this.toast(`The Reliquary ascends: ${TIER_NAMES[tier]}`, 'big');
    setTimeout(() => { if (this.matchId === m) this.toast(tier === 2 ? 'Its halo burns. Hold its gaze too long and it tolls.' : 'It has wings now. It moves faster and Laments sooner.', 'warn'); }, 2200);
    this.ascendFelt(k, tier);
  }
  // what this machine's player feels when it ascends (guests run this when they see the tier change)
  ascendFelt(k, tier) {
    if (flatDist(k.pos, this.viewPos()) < 35) { this.hitShake = Math.max(this.hitShake, 0.5); this.fovKick = 9; }
    this.updateTierHud();
  }
  onTollCharge(k) {
    if (this.time - this.tollWarnT > 20) { this.tollWarnT = this.time; this.toast('Its halo is burning. Look away!', 'warn', 'survivor'); }
  }
  tollOfStone(k) {
    const head = k.headPos();
    for (const s of this.survivors) {
      if (!s.alive || s.health === 'hooked' || s.health === 'carried') continue;
      if (flatDist(s.pos, k.pos) > 24 || !this.world.lineOfSight(head, s.eye())) continue;
      if (s.noBlink <= 0) s.forceBlink(0.9);
      s.resolve = Math.max(0, s.resolve - 25);
      this.feel(s, 'toll');
      this.addScore(k, 'dread', 100, 'Eyes forced shut');
    }
    this.fx.shockwave(k.pos, 24);
    this.audio.tollRelease(head);
    this.noise(k.pos, 50, 'toll');
    this.toast('The Toll of Stone', 'bad');
  }
  onCanonizeStart(t) {
    this.toast(`It is turning ${t.name} to stone. Look at it to stop it!`, 'bad', 'survivor');
    this.audio.choir(t.chest(), 3.2, 0.4, 0.04, 92.5);
  }
  onLightning() {
    this.net?.event('lightning', this.weather.flashes);
    this.lightningSeen();
  }
  lightningSeen() {
    if (this.state !== 'playing' || !this.player?.alive || !this.killer) return;
    if (flatDist(this.killer.pos, this.player.pos) < 55) { this.auraT = Math.max(this.auraT, 0.7); if (this.auraSrc !== 'afterimage') this.auraSrc = 'lightning'; }
  }

  // ---------------------------------------------------------------- hooks for entities
  // A line for everyone (aud: only 'survivor's or only the 'killer' player, when given).
  toast(t, k, aud = null) { if (!aud || aud === this.role) ui.toast(t, k); this.net?.event('toast', t, k || '', aud); }
  // A line for one person: shown here if it is this machine's player, sent to them otherwise.
  toastTo(s, t, k) { if (!s) return; if (s === this.me) ui.toast(t, k); else if (s.peer) this.net?.eventTo(s.peer, 'toast', t, k || ''); }
  sfxTo(s, name) { if (!s) return; if (s === this.me) audio[name](); else if (s.peer) this.net?.eventTo(s.peer, 'sfx', name); }
  // A jolt for one person's camera: 'hit' or 'toll'.
  feel(s, kind) {
    if (s !== this.me) { if (s.peer) this.net?.eventTo(s.peer, 'feel', kind); return; }
    if (kind === 'hit') { this.hitShake = 1; this.fovKick = 7; }
    else if (kind === 'toll') { this.hitShake = Math.max(this.hitShake, 0.8); this.flash = Math.max(this.flash || 0, 0.7); this.fovKick = -7; }
  }
  noise(pos, r, type) {
    this.noises.push({ pos: pos.clone(), r, type, t: this.time }); if (this.noises.length > 40) this.noises.shift();
    this.killerHeard?.(pos, r, type);
  }
  addScore(s, cat, amt, label) { if (!s || !s.score) return; s.score[cat] = (s.score[cat] || 0) + amt; if (label) s.scoreLog.push(`${label} +${amt}`); }
  get promptText() { return localInput.promptText; }
  // where this machine's player stands (or their camera, once they are gone)
  viewPos() { const m = this.me; return m && (m === this.killer || m.alive) ? m.pos : camera.position; }
  bellRateMult() { return Math.max(0.7, 1 - 0.05 * this.hookEvents); }
  isWatched(pts) { return this.survivors.some((s) => this.canSee(s, pts)); }
  agentCircles(self) {
    const out = this._ac || (this._ac = []); out.length = 0;
    if (this.killer && !this.killer.action) out.push(this.killer.circle);
    for (const s of this.sentinels) out.push(s.circle);
    for (const m of this.memorials) out.push(m.circle);
    return out;
  }
  killerCircles() {
    const out = this._kc || (this._kc = []); out.length = 0;
    for (const s of this.sentinels) out.push(s.circle);
    for (const m of this.memorials) out.push(m.circle);
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
        this.audio.toll(null, 98, 0.9, 10); this.audio.toll(null, 147, 0.6, 9); this.audio.toll(null, 196, 0.5, 8);
      }, 1800);
      for (const b of this.bells) if (!b.done) { b.locked = true; for (const r of [...b.ringers]) r.cancelAction(); }
    }
  }
  onSurvivorHooked(s) { this.hookEvents++; this.toast(`${s.name} is bound to a Weeping Post`, 'bad'); }
  onSurvivorDied(s, how) {
    this.deaths = (this.deaths || 0) + 1; s.fate = how;
    if (how === 'sacrificed') this.addScore(this.killer, 'devotion', 1500, 'Given to the moor');
    this.toast(how === 'canonized' ? `${s.name} was canonized. Their statue joins the vigil.` : `${s.name} ${how === 'bled' ? 'bled out in the peat' : 'was taken by the moor'}`, 'bad');
    this.sealed(s, how);
    this.checkAllDone();
  }
  onEscape(s, how) {
    s.fate = how;
    this.toast(`${s.name} escaped${how === 'hatch' ? ' through the Drowned Well' : ''}`, 'good');
    this.addScore(s, 'survival', how === 'hatch' ? 4000 : 5000, 'Escaped');
    this.sfxTo(s, 'escapeChord');
    this.sealed(s, how);
    this.checkAllDone();
  }
  // A survivor's fate is sealed (dead or out). Alone, that ends the vigil; with others, you watch on.
  sealed(s, how) {
    if (s.isPlayer) this.sealedLocal(how);
    else if (s.peer) this.net?.eventTo(s.peer, 'sealed', how);
  }
  sealedLocal(how) {
    this.endReason = how;
    if (this.mode === 'solo') this.endT = how === 'gate' || how === 'hatch' ? 2.5 : 3;
    else this.beginSpectate();
  }
  // The vigil is over for everyone when no survivor is left on the moor; without a
  // person playing the Reliquary it also ends once every person's fate is sealed.
  checkAllDone() {
    if (this.over || this.mode === 'client') return;
    const none = this.survivors.every((s) => !s.alive);
    const peopleDone = !this.killer.human && this.survivors.every((s) => !s.human || !s.alive);
    if (this.mode === 'solo') { if (none && this.endT === null) this.endT = 2.5; return; }
    if (none || peopleDone) { this.over = true; this.endT = 3; this.net?.matchOver(); }
  }
  onHit(s) { this.feel(s, 'hit'); }
  onGateOpened() {
    this.toast('A Lychgate swings open', 'good');
    if (this.collapseT === null) { this.collapseT = 120; setTimeout(() => this.toast('The moor is rising — two minutes', 'warn'), 1500); }
  }
  onPlayerBlink() {
    if (this.player?.hasPerk('afterimage') && this.afterCD <= 0) { this.auraT = 4; this.auraSrc = 'afterimage'; this.afterCD = 30; }
    this.killer?.snapGhost();
  }

  // ---------------------------------------------------------------- gaze
  canSee(s, pts) {
    if (!s.alive || s.blinking || s.health === 'hooked' || s.health === 'carried') return false;
    const v = s.view;
    if (v && v.ready) {
      // a person: what is on their screen, with nothing in the way
      // (the orbit camera while you are turned to stone is not your gaze)
      if (s.canonizing) return false;
      if (s.mirrorUp) {
        // the hand mirror shows what is behind you, and that gaze counts too
        const mc = v.mirror;
        for (const p of pts) {
          tmpV.copy(p).project(mc);
          if (tmpV.z > 1 || tmpV.z < -1 || Math.abs(tmpV.x) > 1 || Math.abs(tmpV.y) > 1) continue;
          if (mc.position.distanceTo(p) > 40) continue;
          if (this.world.raycast(mc.position, p) >= 0.995) return true;
        }
      }
      const cam = v.cam;
      for (const p of pts) {
        tmpV.copy(p).project(cam);
        if (tmpV.z > 1 || tmpV.z < -1 || Math.abs(tmpV.x) > 1 || Math.abs(tmpV.y) > 1) continue;
        if (cam.position.distanceTo(p) > 46) continue;
        if (this.world.raycast(cam.position, p) >= 0.995) return true;
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
      this.addScore(s, 'boldness', 20 * dt);
    }
    k.watchers = w;
  }

  // ---------------------------------------------------------------- HUD bits
  updateItemHud() {
    const s = this.player, el = $('itemSlot');
    if (!s || !s.item) { el.hidden = true; return; }
    const it = ITEMS[s.item];
    el.hidden = false;
    $('itemIcon').innerHTML = ITEM_ICONS[s.item];
    $('itemName').textContent = it.name;
    $('itemHint').innerHTML = it.hint;
    $('itemBar').style.display = it.timed ? 'block' : 'none';
  }

  updateTierHud() {
    const t = this.killer ? this.killer.tier : 1;
    $('tierName').textContent = TIER_NAMES[t];
    document.querySelectorAll('#tierPips i').forEach((el, i) => el.classList.toggle('on', i < t));
  }

  // ---------------------------------------------------------------- camera
  updateCamera(dt) {
    const sens = 0.0022 * settings.sens;
    this.camYaw -= mouseDX * sens;
    this.camPitch -= mouseDY * sens * (settings.invert ? -1 : 1);
    if (keys.has('ArrowLeft')) this.camYaw += dt * 2.2;
    if (keys.has('ArrowRight')) this.camYaw -= dt * 2.2;
    mouseDX = mouseDY = 0;
    this.camPitch = clamp(this.camPitch, -1.25, this.role === 'killer' ? 1.2 : 0.95);
    localInput.camYaw = this.camYaw; localInput.camPitch = this.camPitch;
    const pv = this.player?.view;
    if (pv) { pv.yaw = this.camYaw; pv.pitch = this.camPitch; pv.aspect = camera.aspect; }
    if (this.role === 'killer') return this.killerCamera(dt, camera);
    // once your own fate is sealed you watch over someone else's shoulder
    if (this.spectate && !this.spectate.alive) this.nextSpectate();
    const s = this.spectate || this.player;
    let pivot, dist = 3.4, side = 0.5;
    if (s.health === 'hooked' || s.health === 'carried') { pivot = V(s.pos.x, s.pos.y + (s.health === 'carried' ? 0 : 1.4), s.pos.z); dist = 4.2; side = 0; }
    else pivot = V(s.pos.x, s.pos.y + (s.health === 'downed' ? 0.55 : s.crouch ? 1.05 : 1.62), s.pos.z);
    if (s.health === 'downed') dist = 2.5;
    if (s.health === 'dead' || s.health === 'escaped') { pivot = this.camPos.clone(); dist = 0.001; side = 0; }
    if (s.canonizing || s.canonized) {
      // the camera circles you while the stone takes you
      this.canonYaw += dt * 0.45;
      const c = V(s.pos.x, 1.1, s.pos.z);
      camera.position.set(c.x + Math.sin(this.canonYaw) * 3.4, 1.9, c.z + Math.cos(this.canonYaw) * 3.4);
      camera.lookAt(c); camera.updateMatrixWorld();
      this.camPos.copy(camera.position);
      audio.setListener(camera.position, c.clone().sub(camera.position).normalize());
      return;
    }
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
    // the view breathes with the action: a touch wider at a sprint, a punch when struck, ascending or tolled
    this.fovKick -= Math.sign(this.fovKick) * Math.min(Math.abs(this.fovKick), dt * 9);
    const fov = 64 + (s.alive && s.speed > 3.6 ? 3 : 0) + this.fovKick;
    if (Math.abs(camera.fov - fov) > 0.01) { camera.fov += (fov - camera.fov) * Math.min(1, dt * (Math.abs(fov - 64) > Math.abs(camera.fov - 64) ? 18 : 5)); camera.updateProjectionMatrix(); }
    camera.lookAt(camera.position.clone().add(look));
    camera.updateMatrixWorld();
    audio.setListener(camera.position, look);
    // the mirror looks backward from just behind your head
    const fwd = V(Math.sin(this.camYaw), 0, Math.cos(this.camYaw));
    // inside the body's collision circle, so a wall at your back is never clipped through
    mirrorCam.position.set(s.pos.x - fwd.x * 0.2, s.pos.y + (s.crouch ? 1.05 : 1.65), s.pos.z - fwd.z * 0.2);
    mirrorCam.lookAt(mirrorCam.position.x - fwd.x * 10, mirrorCam.position.y - 0.4, mirrorCam.position.z - fwd.z * 10);
    mirrorCam.updateMatrixWorld();
  }

  beginSpectate() { this.spectate = null; this.nextSpectate(); if (this.spectate) ui.toast('Your vigil is over. You watch the others now.', 'warn'); }
  nextSpectate() {
    const alive = this.survivors.filter((s) => s.alive && !s.isPlayer);
    if (!alive.length) { this.spectate = null; return; }
    this.spectate = alive[(alive.indexOf(this.spectate) + 1) % alive.length];
  }

  // ---------------------------------------------------------------- frame
  // The simulation step: runs when playing alone and on the host of an online vigil.
  update(dt) {
    this.time += dt;
    const k = this.killer;
    if (pressed.has('Space')) { if (!ui.skill.press() && this.spectate) this.nextSpectate(); }
    this.net?.hostPre(dt);
    for (const s of this.survivors) s.update(dt);
    this.updateCamera(dt);
    this.computeWatch(dt);
    k.update(dt);
    for (const b of this.bells) b.update(dt);
    for (const pl of this.pallets) pl.update(dt);
    for (const po of this.posts) po.update(dt);
    for (const g of this.gates) g.update(dt);
    for (const st of this.sentinels) st.update(dt);
    for (const c of this.chests) c.update(dt);
    for (const pr of this.projectiles) pr.update(dt);
    if (this.projectiles.some((pr) => pr.done)) this.projectiles = this.projectiles.filter((pr) => !pr.done);
    if (this.candle && !this.candle.update(dt)) { this.candle.dispose(); this.candle = null; this.toast('The candle gutters out', 'warn'); }
    this.crows?.update(dt);
    // ascension: the Reliquary grows stronger as the vigil goes on
    {
      const d = this.diff;
      let want = 1;
      if (this.bellsRung >= d.tier2 || this.hookEvents >= 2) want = 2;
      if (this.bellsRung >= d.tier3 || this.deaths >= 1 || this.hookEvents >= 5) want = 3;
      if (want > k.tier) k.ascend(want);
    }
    // escapes through open gates
    for (const s of this.survivors) if (s.standing && Math.abs(s.pos.z) > HALF + 2.4) s.escape('gate');
    // the drowned well appears for the last one standing
    const alive = this.survivors.filter((s) => s.alive);
    if (!this.hatch && alive.length === 1 && alive[0].standing && this.survivors.length > 1) {
      this.hatch = new Hatch(this, this.world.hatchSpot);
      this.toastTo(alive[0], 'You hear water rising in an old well…', 'warn');
    }
    if (this.collapseT !== null) {
      this.collapseT -= dt;
      if (this.collapseT <= 0) { this.collapseT = 0; for (const s of this.survivors) if (s.alive) s.die('collapse'); this.collapseT = null; }
    }
    this.noises = this.noises.filter((n) => this.time - n.t < 6);
    if (this.scratches.length > 300) this.scratches.splice(0, this.scratches.length - 300);
    while (this.scratches.length && this.time - this.scratches[0].t > 12) this.scratches.shift();
    for (const s of this.survivors) if (s.alive) this.addScore(s, 'survival', 2 * dt);
    this.present(dt);
    this.net?.hostPost(dt);
  }

  // A guest's frame: no rules run here. Everything is dressed from the host's snapshots,
  // except this player's own movement, which is predicted so the controls stay crisp.
  updateClient(dt) {
    this.time += dt;
    const k = this.killer, p = this.player, net = this.net;
    if (pressed.has('Space')) { if (!ui.skill.press() && this.spectate) this.nextSpectate(); }
    // The statue must never stir on this screen while this player is looking at it, even though
    // the host hears of the look a moment late. If the host disagrees for long (what we see is
    // an old image and the real one is elsewhere), let it go and leave an afterimage.
    let held = false;
    if (this.role === 'survivor' && p.alive) {
      const sees = this.canSee(p, k.samplePoints());
      this.seeT = sees ? (this.seeT || 0) + dt : 0;
      held = sees && (p.watching || this.seeT < 0.4);
      if (sees && !held && !this.phantom) { k.snapGhost(); k.ghostPending = false; k.ghost.visible = true; k.ghostT = 1.2; }
      this.phantom = sees && !held;
    }
    net.clientPre(dt, held);
    if (this.role === 'killer') this.clientKillerControl(k, dt, localInput);
    else if (p.alive) this.clientControl(p, dt, localInput);
    for (const s of this.survivors) { if (s.blinkT > 0) s.blinkT -= dt; if (s.alive) s.visual(dt); }
    this.updateCamera(dt);
    k.sync(dt);
    for (const b of this.bells) b.visual(dt);
    for (const pl of this.pallets) pl.update(dt);
    for (const po of this.posts) po.update(dt);
    for (const g of this.gates) g.visual(dt);
    for (const st of this.sentinels) st.visual(dt);
    for (const c of this.chests) c.update(dt);
    if (this.candle) this.candle.update(dt);
    this.crows?.update(dt);
    this.present(dt);
    net.clientPost(dt, localInput, camera);
  }

  // What this machine's player sees and hears: auras, the audio mix, the grade, the HUD.
  // Runs on every machine, from the simulated state (host) or the replicated one (guest).
  present(dt) {
    const p = this.player, k = this.killer;
    for (const b of this.bells) if (b.locked) { b.model.userData.light.intensity = 0.15; b.model.userData.halo.material.opacity = 0.03; }
    for (const e of this.effects) e.update(dt);
    if (this.effects.some((e) => e.done)) this.effects = this.effects.filter((e) => !e.done);
    ui.skill.update(dt);
    if (this.role === 'killer') return this.presentKiller(dt, grade.uniforms);
    // auras
    this.afterCD -= dt; this.auraT -= dt;
    if (p.hasPerk('kinship')) {
      const hooked = this.survivors.find((s) => s.health === 'hooked');
      if (hooked && hooked.post && flatDist(hooked.post.pos, p.pos) < 24) { this.auraT = Math.max(this.auraT, 0.2); if (this.auraSrc !== 'afterimage' || this.auraT <= 0.2) this.auraSrc = 'kinship'; }
    }
    k.aura.visible = this.auraT > 0 && p.alive;
    for (const s of this.survivors) s.aura.visible = !s.isPlayer && s.alive && (s.health === 'hooked' || s.health === 'downed' || s.health === 'carried');

    // atmosphere / audio mix
    const dK = flatDist(k.pos, p.pos);
    let chase = 0;
    if (k.target === p && k.state === 'chase') chase = clamp(1.2 - dK / 26, 0.25, 1);
    else if (dK < 14 && k.moving) chase = 0.35;
    if (!p.alive) chase = 0;
    this.chase += (chase - this.chase) * Math.min(1, dt * 1.5);
    audio.update(dt, {
      listener: camera.position, chase: this.chase,
      breath: p.health === 'injured' || p.health === 'downed' ? 1 : p.alive && p.resolve < 30 ? 0.6 : 0,
      lament: k.lament && p.watching ? 1 : 0,
    });
    // grading uniforms
    const u = grade.uniforms;
    const bl = p.blinkT > 0 ? Math.min(1, Math.min((p.blinkDur - p.blinkT) / 0.07, p.blinkT / 0.12)) : 0;
    u.uBlink.value = bl;
    u.uLow.value = p.alive ? clamp(1 - p.resolve / (p.maxResolve * 0.4), 0, 1) : 0;
    u.uLament.value += ((k.lament && p.watching ? 1 : 0) - u.uLament.value) * Math.min(1, dt * 3);
    u.uHurt.value = p.health === 'injured' ? 0.6 : p.health === 'downed' || p.health === 'hooked' ? 1 : 0;
    u.uHit.value = this.hitShake;
    this.lookWarn = Math.max(0, this.lookWarn - dt);
    const warn = k.toll && p.watching ? 1 : 0;
    u.uWarn.value += (warn * (0.55 + Math.sin(this.time * 18) * 0.35) - u.uWarn.value) * Math.min(1, dt * 10);
    $('lookAway').hidden = !(k.toll && p.watching);
    if (p.item === 'mirror') $('itemBar').firstElementChild.style.width = (100 * p.itemCharges / ITEMS.mirror.charges) + '%';
    this.fadeIn = clamp((performance.now() - this.matchStart) / 1800, 0, 1);
    u.uFade.value = 1 - this.fadeIn;
    if (this.endT !== null) { this.endT -= dt; u.uFade.value = Math.max(u.uFade.value, clamp(1 - this.endT / 2.5, 0, 1)); if (this.endT <= 0) this.showEnd(); }

    if (this.spectate) ui.prompt(`Watching ${this.spectate.playerName || this.spectate.def.short}&nbsp;&nbsp;&nbsp;<kbd>Space</kbd> next&nbsp;&nbsp;&nbsp;<kbd>Esc</kbd> leave`, null, false);
    else ui.prompt(localInput.promptText, localInput.promptProg, localInput.promptHeal);
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
    const focus = this.state === 'playing' && this.me ? (this.spectate || this.me).pos : V(-4, 0, 0);
    moon.target.position.set(focus.x, 0, focus.z);
    moon.position.copy(moon.target.position).addScaledVector(W.moonDir, 70);
    this.fx.ambient(dt, camera.position, W.pools);
    this.fx.update(dt);
    this.ambient?.update(dt);
    if (this.weather) {
      this.weather.update(dt, camera.position);
      const f = this.weather.flash;
      hemi.intensity = 2.0 + f * 7;
      W.sky.material.uniforms.uFlash.value = f;
      this.flash = Math.max(0, (this.flash || 0) - dt * 2.5);
      grade.uniforms.uFlash.value = Math.max(f * 0.35, this.flash);
    }
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
    if (this.titleFX && RM.updateReliquaryFX) {
      const f = this.titleFX; f.time = this.time; f.glow = 0.55 + Math.sin(this.time * 1.3) * 0.25; f.relic = 0.7 + Math.sin(this.time * 2.2) * 0.25;
      RM.updateReliquaryFX(this.titleStatue, f);
    }
    this.titleStart ??= performance.now();
    grade.uniforms.uFade.value = clamp(1 - (performance.now() - this.titleStart) / 2000, 0, 1);
    grade.uniforms.uBlink.value = 0; grade.uniforms.uLow.value = 0; grade.uniforms.uHurt.value = 0; grade.uniforms.uLament.value = 0; grade.uniforms.uHit.value = 0; grade.uniforms.uWarn.value = 0;
    audio.setListener(camera.position, camera.getWorldDirection(V()));
    audio.update(dt, { listener: camera.position, chase: 0, breath: 0, lament: 0 });
  }

  showEnd() {
    this.endT = null;
    this.state = 'ended';
    document.exitPointerLock?.();
    const me = this.me, asKiller = this.role === 'killer';
    const verdict = $('verdict'), ep = $('epitaph');
    const taken = this.survivors.filter((s) => s.health === 'dead').length;
    let good, cats;
    if (asKiller) {
      good = taken >= 3;
      verdict.textContent = taken >= 4 ? 'A MERCILESS VIGIL' : taken === 3 ? 'THE MOOR IS FED' : taken >= 1 ? 'THE BELLS RANG ON' : 'THEY ALL WALKED OUT';
      ep.textContent = good ? 'The parish is quiet again. The stone settles back onto its plinth.' : 'Some of them reached the gate. The relic in your chest burns colder for it.';
      cats = [['Brutality', 'brutality'], ['Devotion', 'devotion'], ['Cunning', 'cunning'], ['Dread', 'dread']];
    } else {
      const p = this.player, esc = p.health === 'escaped';
      good = esc;
      verdict.textContent = esc ? 'ESCAPED' : this.endReason === 'bled' ? 'BLED OUT' : this.endReason === 'collapse' ? 'THE MOOR ROSE' : this.endReason === 'canonized' ? 'CANONIZED' : p.alive ? 'THE VIGIL ENDS' : 'SACRIFICED';
      const lines = esc
        ? ['You walked out through the lychgate and never looked back. You didn\'t dare to.', 'Behind you the bells kept ringing, though no one was pulling the ropes.', 'You climbed out of the Drowned Well, soaked and shaking, but alive.']
        : ['The peat closed over your head. The bells will need a new mourner.', 'You blinked. That was all it took.', 'The moor keeps everything it is given.'];
      ep.textContent = esc ? (this.endReason === 'hatch' ? lines[2] : lines[Math.floor(Math.random() * 2)]) : this.endReason === 'canonized' ? 'Your statue keeps the vigil now. It is still looking toward the gate.' : p.alive ? 'The host has closed the vigil.' : lines[Math.floor(Math.random() * 3)];
      cats = [['Objectives', 'objectives'], ['Survival', 'survival'], ['Altruism', 'altruism'], ['Boldness', 'boldness']];
    }
    verdict.className = 'verdict ' + (good ? 'good' : 'bad');
    const who = (s) => (s.playerName ? `${s.playerName} · ${s.def.short}` : s.name) + (s.isPlayer ? ' (you)' : '');
    let rows = this.survivors.map((s) => {
      const st = s.canonized ? ['Turned to stone', 'var(--blood-hi)'] : { escaped: ['Escaped', 'var(--ok)'], dead: ['Taken by the moor', 'var(--blood-hi)'] }[s.health] || ['Still on the moor', 'var(--muted)'];
      return `<div class="r">${portrait(s.def, 42, s.health === 'dead' ? 'dead' : '')}<div><b>${esc(who(s))}</b><span style="color:${st[1]}">${st[0]}</span></div></div>`;
    }).join('');
    if (this.killer.human) rows += `<div class="r"><div class="kport"></div><div><b>${esc(this.killer.playerName || 'The Reliquary')}${asKiller ? ' (you)' : ''}</b><span style="color:var(--ember)">The Reliquary · ${taken} taken</span></div></div>`;
    $('results').innerHTML = rows;
    const sc = me.score || {}, log = me.scoreLog || [];
    const total = Math.round(cats.reduce((a, [, k]) => a + (sc[k] || 0), 0));
    $('emberTotal').textContent = total.toLocaleString();
    $('score').innerHTML = cats.map(([l, k]) => `<div class="c"><div class="v">${Math.round(sc[k] || 0).toLocaleString()}</div><div class="l">${l}</div></div>`).join('');
    const counts = {};
    for (const e of log) { const k = e.replace(/ \+\d+$/, ''); counts[k] = (counts[k] || 0) + 1; }
    $('scoreLog').innerHTML = Object.entries(counts).map(([k, n]) => `<div>${k}${n > 1 ? ` ×${n}` : ''}</div>`).join('') + `<div>Bells rung by the four: ${this.bellsRung} / 7</div>`;
    $('scoreLog').innerHTML += `<div>The Reliquary reached: ${TIER_NAMES[this.killer.tier]} · ${this.diff.name}</div>`;
    try {
      const best = Number(localStorage.getItem('hollowmoor.best') || 0);
      if (total > best) { localStorage.setItem('hollowmoor.best', String(total)); $('scoreLog').innerHTML += '<div style="color:var(--ember)">A new personal best</div>'; }
    } catch { /* ignore */ }
    const before = bank.get(); bank.add(total); const after = bank.get();
    $('rankEnd').textContent = `${after.toLocaleString()} embers banked · ${rankOf(after)}` + (rankOf(after) !== rankOf(before) ? ' (new rank)' : '');
    renderRank();
    const online = this.mode !== 'solo';
    $('againBtn').textContent = online ? 'Return to the Lobby' : 'Keep Another Vigil';
    $('toTitleBtn').textContent = online ? 'Leave the Room' : 'Return to the Parish';
    ui.only('end');
  }
}
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
Object.assign(Game.prototype, SurvivorControl, KillerControl);

// ------------------------------------------------------------------ menus
let chosen = 0, soloRole = 'survivor';
let chosenPerks = ['unblinking', 'afterimage', 'ropeburn', 'kinship'];
try { const s = JSON.parse(localStorage.getItem('hollowmoor.loadout') || 'null'); if (s) { chosen = s.c ?? 0; chosenPerks = s.p ?? chosenPerks; } } catch { /* ignore */ }

function buildSelect() {
  const asK = soloRole === 'killer';
  const rr = $('roleRow');
  rr.innerHTML = `<button type="button" class="diff ${asK ? '' : 'sel'}" data-r="survivor"><b>A Mourner</b><span>Ring the bells and walk out alive.</span></button><button type="button" class="diff ${asK ? 'sel' : ''}" data-r="killer"><b>The Reliquary</b><span>Be the stone. Move when they blink.</span></button>`;
  rr.querySelectorAll('.diff').forEach((b) => b.onclick = () => { soloRole = b.dataset.r; audio.uiClick(); buildSelect(); });
  $('mournerBox').style.display = asK ? 'none' : '';
  $('selectTitle').textContent = asK ? 'Be the Reliquary' : 'Choose your Mourner';
  $('selectSub').textContent = asK ? 'Four Mourners will try to ring five bells and leave. Do not let them.' : 'Three others will keep the vigil with you. The Reliquary will be waiting.';
  $('startBtn').textContent = asK ? 'Wake on the Moor' : 'Enter the Moor';
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
  const dc = $('diffs');
  dc.innerHTML = Object.values(DIFFS).map((d) => `<button type="button" class="diff ${settings.difficulty === d.id ? 'sel' : ''}" data-d="${d.id}"><b>${d.name}</b><span>${d.desc}</span></button>`).join('');
  dc.querySelectorAll('.diff').forEach((b) => b.onclick = () => { settings.difficulty = b.dataset.d; saveSettings(); audio.uiClick(); buildSelect(); });
}

function renderRank() {
  const e = bank.get();
  $('rankLine').textContent = e > 0 ? `${rankOf(e)} · ${e.toLocaleString()} embers banked` : '';
}

let backTo = 'title';
document.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => {
  audio.init(); audio.setVolume(settings.vol); audio.uiClick();
  const go = b.dataset.go;
  backTo = game?.state === 'paused' ? 'pause' : 'title';
  if (go === 'select') buildSelect();
  if (go === 'online') { $('playerName').value = settings.name || ''; $('serverUrl').value = settings.server || ''; if (net?.connected && net.lobby) { ui.only('lobby'); renderLobby(); return; } }
  if (game?.state === 'paused') ui.only('hud', go); else ui.only(go);
}));
document.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => {
  audio.uiClick();
  if (game?.state === 'paused') ui.only('hud', 'pause'); else ui.only('title');
}));
// A vigil kept alone: you and three teammates the game plays, against the Reliquary it plays too.
function soloConfig() {
  const asK = soloRole === 'killer';
  const order = [chosen, ...SURVIVORS.map((_, i) => i).filter((i) => i !== chosen)];
  const realm = Math.floor(Math.random() * REALMS.length);
  return {
    mode: 'solo', seed: Math.floor(Math.random() * 1e9), realm, rain: REALMS[realm].rain ?? Math.random() < 0.5, diff: settings.difficulty,
    survivors: order.map((def, k) => ({ def, me: !asK && k === 0, perks: !asK && k === 0 ? chosenPerks.slice() : [] })), killer: { me: asK },
  };
}
$('startBtn').addEventListener('click', () => {
  audio.init(); audio.setVolume(settings.vol);
  try { localStorage.setItem('hollowmoor.loadout', JSON.stringify({ c: chosen, p: chosenPerks })); } catch { /* ignore */ }
  lock();
  game.startMatch(soloConfig());
});
$('resumeBtn').addEventListener('click', () => game.resume());
$('abandonBtn').addEventListener('click', () => { const online = game.mode !== 'solo'; game.abandon(); if (online) ui.only('online'); });
$('againBtn').addEventListener('click', () => {
  if (game.mode === 'solo') { lock(); game.startMatch(soloConfig()); return; }
  // online: back to the room (the host brings everyone; a guest waits there for the host)
  if (net.isHost) net.toLobby();
  game.backToLobby(); renderLobby();
});
$('toTitleBtn').addEventListener('click', () => { const online = game.mode !== 'solo'; game.leaveOnline(); game.toTitle(); if (online) ui.only('online'); });
$('clickPlay').addEventListener('click', () => lock());

// ------------------------------------------------------------------ online
const serverMeta = document.querySelector('meta[name="hollowmoor-server"]')?.content || '';
function serverUrl() {
  const q = new URLSearchParams(location.search).get('server');
  if (q) return q;
  if (settings.server) return settings.server;
  if (serverMeta) return serverMeta;
  // served by the game's own server: rooms live at the same address
  if (/^https?:$/.test(location.protocol) && !/claude|anthropic|^localhost$|^127\./.test(location.hostname)) return location.origin;
  return '';
}
let net = null;
const netStatus = (t, bad = false) => { const el = $('onlineStatus'); el.textContent = t || ''; el.classList.toggle('bad', bad); };
const myName = () => { const n = ($('playerName').value || '').trim().slice(0, 18) || 'Mourner'; settings.name = n; saveSettings(); return n; };
const onScreen = (id) => $(id).classList.contains('on');

function openNet() {
  if (net) return net;
  net = new Net(game, {
    lobby: (L, returned) => {
      if (returned && game.state !== 'title') game.backToLobby();
      else if (!net.inMatch && onScreen('online')) ui.only('lobby');
      renderLobby();
    },
    start: (cfg) => { if (net.isHost) lock(); game.net = net; game.startMatch(cfg); },
    closed: (reason) => {
      net.restore(); game.net = null; game.mode = 'solo';
      if (game.state !== 'title') game.toTitle();
      ui.only('online');
      netStatus(reason === 'host' ? 'The host left, so the room has closed.' : 'The connection to the room was lost.', true);
    },
  });
  window.__net = net; // used by the headless tests
  return net;
}

async function enterRoom(kind) {
  audio.init(); audio.setVolume(settings.vol);
  const server = ($('serverUrl').value || '').trim() || serverUrl();
  if (!server) { netStatus('No game server is set up for this copy. Open “Server address” and enter one.', true); return; }
  const fromField = ($('serverUrl').value || '').trim();
  if (fromField !== (settings.server || '')) { settings.server = fromField; saveSettings(); }
  const name = myName();
  let code = ($('roomCode').value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (kind === 'join' && code.length < 4) { netStatus('Enter the room code your host gave you.', true); return; }
  netStatus(kind === 'join' ? 'Joining…' : kind === 'quick' ? 'Looking for a vigil…' : 'Opening a room…');
  for (const b of ['createRoomBtn', 'quickBtn', 'joinBtn']) $(b).disabled = true;
  try {
    const n = openNet();
    if (kind !== 'join') code = await Net.newCode(server, kind === 'quick');
    const hello = await n.connect(server, code, name);
    game.net = null; // set when a vigil starts
    n.setPerks(chosenPerks.slice());
    if (kind === 'quick' && hello.host) n.setPublic(true);
    netStatus('');
    if (hello.host) { ui.only('lobby'); renderLobby(); }
  } catch (e) {
    netStatus(e.message || 'Could not reach the server', true);
  } finally {
    for (const b of ['createRoomBtn', 'quickBtn', 'joinBtn']) $(b).disabled = false;
  }
}
$('createRoomBtn').addEventListener('click', () => enterRoom('create'));
$('quickBtn').addEventListener('click', () => enterRoom('quick'));
$('joinBtn').addEventListener('click', () => enterRoom('join'));
$('roomCode').addEventListener('keydown', (e) => { if (e.code === 'Enter') enterRoom('join'); });
$('leaveRoomBtn').addEventListener('click', () => { audio.uiClick(); if (net) { net.restore(); net.leave(); } game.net = null; game.mode = 'solo'; netStatus(''); ui.only('online'); });
$('copyCode').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(net.lobby.code); $('copyCode').textContent = 'Copied'; } catch { $('copyCode').textContent = net.lobby.code; }
  setTimeout(() => { $('copyCode').textContent = 'Copy code'; }, 1600);
});
$('lobbyGo').addEventListener('click', () => {
  audio.uiClick();
  if (!net || !net.lobby) return;
  if (net.isHost) {
    const realm = Math.floor(Math.random() * REALMS.length);
    net.start({ seed: Math.floor(Math.random() * 1e9), realm, rain: REALMS[realm].rain ?? Math.random() < 0.5 });
  } else net.setReady(!net.lobby.players[net.id]?.ready);
});
$('lobbyPublic').addEventListener('change', () => net?.setPublic($('lobbyPublic').checked));

function renderLobby() {
  const L = net?.lobby; if (!L) return;
  const host = net.isHost, mySeat = L.seats.indexOf(net.id), me = L.players[net.id];
  $('lobbyCode').textContent = L.code;
  $('seats').innerHTML = [0, 1, 2, 3, 4].map((i) => {
    const peer = L.seats[i], pl = peer && L.players[peer], mine = peer === net.id, d = SURVIVORS[i];
    const head = i < 4 ? portrait(d, 46) : '<div class="kport"></div>';
    const title = i < 4 ? `<b>${d.name}</b><div class="role">${d.title}</div>` : '<b>The Reliquary</b><div class="role">The stone that hunts</div>';
    const tag = !pl ? '' : peer === net.hostId ? ' · host' : pl.ready ? ' · <span class="rdy">ready</span>' : '';
    const who = pl ? `<div class="who">${esc(pl.name)}${mine ? ' (you)' : ''}${tag}</div>` : '<div class="who bot">Open · played by the game</div>';
    return `<button type="button" class="seat ${i === 4 ? 'killer' : ''} ${mine ? 'mine' : ''} ${peer ? 'taken' : ''}" data-seat="${i}" ${peer && !mine ? 'disabled' : ''}>${head}<div>${title}${who}</div></button>`;
  }).join('');
  $('seats').querySelectorAll('.seat').forEach((b) => b.onclick = () => { audio.uiClick(); net.takeSeat(Number(b.dataset.seat)); });
  // perks matter only for a Mourner
  $('lobbyPerkBox').style.display = mySeat === 4 ? 'none' : '';
  const pc = $('lobbyPerks');
  pc.innerHTML = PERKS.map((p) => `<div class="perk ${chosenPerks.includes(p.id) ? 'sel' : ''}" data-id="${p.id}"><div class="d">${p.icon}</div><div><b>${p.name}</b><span>${p.desc}</span></div></div>`).join('');
  pc.querySelectorAll('.perk').forEach((c) => c.onclick = () => {
    const id = c.dataset.id;
    if (chosenPerks.includes(id)) chosenPerks = chosenPerks.filter((x) => x !== id);
    else if (chosenPerks.length < 4) chosenPerks.push(id);
    try { localStorage.setItem('hollowmoor.loadout', JSON.stringify({ c: chosen, p: chosenPerks })); } catch { /* ignore */ }
    audio.uiClick(); net.setPerks(chosenPerks.slice()); renderLobby();
  });
  $('lobbyPerkCount').textContent = `${chosenPerks.length} / 4`;
  const dc = $('lobbyDiffs');
  dc.innerHTML = Object.values(DIFFS).map((d) => `<button type="button" class="diff ${L.diff === d.id ? 'sel' : ''}" data-d="${d.id}" ${host ? '' : 'disabled'}><b>${d.name}</b><span>${d.desc}</span></button>`).join('');
  dc.querySelectorAll('.diff').forEach((b) => b.onclick = () => { audio.uiClick(); net.setDiff(b.dataset.d); });
  $('lobbyPublicRow').style.display = host ? '' : 'none';
  $('lobbyPublic').checked = !!L.pub;
  const go = $('lobbyGo'), st = $('lobbyStatus');
  const others = Object.keys(L.players).filter((id) => id !== net.hostId);
  if (host) {
    go.textContent = 'Begin the Vigil'; go.disabled = !net.canStart();
    const waiting = others.filter((id) => !L.players[id].ready).map((id) => L.players[id].name);
    const unseated = Object.keys(L.players).filter((id) => !L.seats.includes(id)).map((id) => L.players[id].name);
    st.textContent = net.inMatch ? 'A vigil is under way.' : unseated.length ? `${unseated.join(', ')} still needs to pick a place.` : waiting.length ? `Waiting for ${waiting.join(', ')} to be ready.` : others.length ? 'Everyone is ready.' : 'You can begin alone, or wait for others to join with the code.';
  } else {
    go.disabled = mySeat < 0 || net.inMatch;
    go.textContent = me?.ready ? 'Not Ready' : 'Ready';
    st.textContent = net.inMatch ? 'The host is still on the moor. They will return to the room.' : mySeat < 0 ? 'Pick a place to play.' : me?.ready ? 'Waiting for the host to begin.' : 'Press Ready when you are.';
  }
}

// settings bindings
const sens = $('sens'), vol = $('vol'), q = $('quality'), inv = $('invert'), fpsBox = $('showFps');
sens.value = settings.sens; vol.value = settings.vol; q.value = settings.quality; inv.checked = settings.invert; fpsBox.checked = settings.showFps;
sens.oninput = () => { settings.sens = Number(sens.value); saveSettings(); };
vol.oninput = () => { settings.vol = Number(vol.value); audio.setVolume(settings.vol); saveSettings(); };
q.onchange = () => { settings.quality = q.value; saveSettings(); moon.shadow.mapSize.set(q.value === 'high' ? 2048 : 1024, q.value === 'high' ? 2048 : 1024); moon.shadow.map?.dispose(); moon.shadow.map = null; buildComposer(); };
inv.onchange = () => { settings.invert = inv.checked; saveSettings(); };
fpsBox.onchange = () => { settings.showFps = fpsBox.checked; saveSettings(); $('fps').style.display = settings.showFps ? 'block' : 'none'; };

// ------------------------------------------------------------------ boot
let last = performance.now(), fpsAcc = 0, fpsN = 0, lastStep = last;
// A host whose window is hidden still has to run the vigil for its guests. Browsers stop
// drawing hidden pages, so a worker's clock steps the rules (without drawing) meanwhile.
try {
  const w = new Worker(URL.createObjectURL(new Blob(['setInterval(() => postMessage(0), 33)'], { type: 'text/javascript' })));
  w.onmessage = () => {
    if (!game || game.mode !== 'host' || game.state !== 'playing') return;
    const now = performance.now();
    if (now - lastStep < 120) return; // frames are being drawn: nothing to do
    let dt = Math.min(0.25, (now - lastStep) / 1000); lastStep = now; last = now;
    keys.clear(); pressed.clear();
    while (dt > 0) { const s = Math.min(dt, 1 / 30); game.update(s); dt -= s; }
  };
} catch { /* no workers here: a hidden host simply pauses */ }
function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000); last = now;
  const dt0 = dt;
  if (!game) return;
  fpsAcc += dt; fpsN++;
  if (fpsAcc > 0.5) { $('fps').textContent = `${Math.round(fpsN / fpsAcc)} fps`; fpsAcc = 0; fpsN = 0; }
  if (game.menu) { keys.clear(); pressed.clear(); mouseDX = mouseDY = 0; localInput.mouseDown = false; localInput.rightDown = false; }
  const wantClick = game.state === 'playing' && game.mode !== 'solo' && !game.menu && !noLock && !document.pointerLockElement;
  if ($('clickPlay').classList.contains('on') !== wantClick && (wantClick || game.mode !== 'solo')) ui.show('clickPlay', wantClick);
  $('netNote').textContent = game.mode === 'solo' || game.state !== 'playing' ? '' : game.mode === 'host' ? `Hosting · room ${net?.code || ''}` : `Room ${net?.code || ''}`;
  if (game.state === 'playing') {
    if (game.mode === 'client') game.updateClient(dt);
    else while (dt > 0) { const s = Math.min(dt, 1 / 30); game.update(s); dt -= s; pressed.clear(); }
  } else if (game.state === 'title') game.updateTitle(dt);
  else if (game.state === 'intro') game.updateIntro(dt);
  else if (game.state === 'paused' || game.state === 'ended') { /* frozen */ }
  pressed.clear();
  if (game.state !== 'paused') game.updateAmbient(dt0);
  lastStep = now;
  grade.uniforms.uTime.value = performance.now() / 1000;
  if (window.__noRender) return; // headless tests of the rules do not need pictures
  composer.render();
  renderMirror();
}

// The hand mirror: a small second view of what is behind you.
function renderMirror() {
  const on = game?.state === 'playing' && game.player?.alive && game.player.mirrorUp;
  const frameEl = $('mirrorFrame');
  if (frameEl.hidden === on) frameEl.hidden = !on;
  if (!on) return;
  const w = Math.round(Math.min(360, innerWidth * 0.34)), h = Math.round(w * 0.6);
  const x = Math.round((innerWidth - w) / 2), y = 190;
  mirrorCam.aspect = w / h; mirrorCam.updateProjectionMatrix();
  frameEl.style.width = w + 'px'; frameEl.style.height = h + 'px'; frameEl.style.bottom = y + 'px';
  const pr = renderer.getPixelRatio(), rw = Math.round(w * pr), rh = Math.round(h * pr);
  if (mirrorRT.width !== rw || mirrorRT.height !== rh) mirrorRT.setSize(rw, rh);
  const auto = renderer.shadowMap.autoUpdate, clear = renderer.autoClear;
  renderer.shadowMap.autoUpdate = false;
  renderer.setRenderTarget(mirrorRT); renderer.render(scene, mirrorCam); renderer.setRenderTarget(null);
  renderer.autoClear = false;
  renderer.setScissorTest(true); renderer.setScissor(x, y, w, h); renderer.setViewport(x, y, w, h);
  renderer.render(mirrorOverlay, mirrorOrtho);
  renderer.setScissorTest(false); renderer.setViewport(0, 0, innerWidth, innerHeight);
  renderer.autoClear = clear; renderer.shadowMap.autoUpdate = auto;
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
  window.__input = { keys, pressed }; // used by the headless tests
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
