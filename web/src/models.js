// Every model in the game is constructed here from primitives + procedural
// textures: survivors (jointed rigs), the Reliquary, bells, pallets, posts,
// gates, trees, rocks, gravestones, candles.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise, mulberry32 } from './noise.js';

const NZ = new Noise(99);

// --------------------------------------------------------------- materials
// World-space weathering: large-scale tone variation, damp grime creeping up
// from the ground, and moss on upward-facing surfaces. Breaks up tiling.
const WEATHER_HEAD = `
varying vec3 vWPos; varying vec3 vWNrm;
float wHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float wNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(wHash(i), wHash(i+vec2(1,0)), f.x), mix(wHash(i+vec2(0,1)), wHash(i+vec2(1,1)), f.x), f.y); }
`;
export function weatherize(mat, { grime = 1.4, moss = 0.8, vary = 0.5 } = {}) {
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos; varying vec3 vWNrm;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 wwp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wwp = instanceMatrix * wwp;
        #endif
        wwp = modelMatrix * wwp; vWPos = wwp.xyz; vWNrm = normalize(mat3(modelMatrix) * objectNormal);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\n' + WEATHER_HEAD)
      .replace('#include <map_fragment>', `#include <map_fragment>
        float wn = wNoise(vWPos.xz * 0.23 + vWPos.y * 0.15);
        float wn2 = wNoise(vWPos.xz * 1.3 + vec2(vWPos.y * 1.1, -vWPos.y * 0.7));
        diffuseColor.rgb *= mix(1.0 - ${vary.toFixed(2)}, 1.0 + ${(vary * 0.4).toFixed(2)}, wn) * mix(0.88, 1.06, wn2);
        float gr = 1.0 - smoothstep(0.0, ${grime.toFixed(2)}, vWPos.y + (wn2 - 0.5) * 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.32, 0.3, 0.26), gr * 0.85);
        float up = smoothstep(0.5, 0.9, vWNrm.y) * smoothstep(0.3, 0.6, wn2);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.035, 0.055, 0.022), up * ${moss.toFixed(2)});`);
  };
  mat.customProgramCacheKey = () => 'weather' + grime + moss + vary;
  return mat;
}

export function makeMaterials(T) {
  const std = (tex, o = {}) => new THREE.MeshStandardMaterial({
    map: tex.map, normalMap: tex.normalMap, roughnessMap: tex.ormMap, metalnessMap: tex.ormMap,
    roughness: 1, metalness: o.metalness ?? 1, ...o,
  });
  const M = {
    ground: new THREE.MeshStandardMaterial({ map: T.ground.map, normalMap: T.ground.normalMap, roughnessMap: T.ground.ormMap, roughness: 1, metalness: 0, vertexColors: true }),
    stone: std(T.stone),
    stoneClean: std(T.stoneClean),
    planks: std(T.planks),
    timber: std(T.timber, { color: 0xb8a690 }),
    bronze: std(T.bronze),
    iron: std(T.iron),
    statue: std(T.statue),
    mask: std(T.mask),
    bark: std(T.bark),
    peat: new THREE.MeshStandardMaterial({ color: 0x050403, roughness: 0.08, metalness: 0.2 }),
    peatBlock: std(T.ground, { color: 0x4a3a2c, metalness: 0 }),
    wax: new THREE.MeshStandardMaterial({ color: 0xd8ccb0, roughness: 0.6, emissive: 0x3a2008, emissiveIntensity: 0.4 }),
    black: new THREE.MeshStandardMaterial({ color: 0x030303, roughness: 0.35 }),
    relic: new THREE.MeshBasicMaterial({ color: 0xff5a1e }),
    relicDead: new THREE.MeshStandardMaterial({ color: 0x1a0d08, roughness: 0.9 }),
    shroud: new THREE.MeshStandardMaterial({ color: 0xcfc8b8, roughness: 1, side: THREE.DoubleSide, map: T.cloth.map, normalMap: T.cloth.normalMap }),
    tendril: new THREE.MeshStandardMaterial({ color: 0x080606, roughness: 0.3, metalness: 0.1 }),
    lanternGlass: new THREE.MeshBasicMaterial({ color: 0x331c10 }),
    lanternLit: new THREE.MeshBasicMaterial({ color: 0xffd8a0 }),
    lanternRed: new THREE.MeshBasicMaterial({ color: 0xff3a24 }),
    reed: new THREE.MeshStandardMaterial({ color: 0x4a4a2a, roughness: 0.9, side: THREE.DoubleSide }),
    aura: new THREE.MeshBasicMaterial({ color: 0xff2a20, transparent: true, opacity: 0.55, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }),
    auraAlly: new THREE.MeshBasicMaterial({ color: 0xffe0a0, transparent: true, opacity: 0.45, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }),
  };
  weatherize(M.stone, { grime: 1.6, moss: 0.85, vary: 0.45 });
  weatherize(M.stoneClean, { grime: 0.9, moss: 0.6, vary: 0.35 });
  weatherize(M.planks, { grime: 0.8, moss: 0.3, vary: 0.4 });
  weatherize(M.timber, { grime: 1.0, moss: 0.4, vary: 0.35 });
  weatherize(M.statue, { grime: 0.6, moss: 0.7, vary: 0.4 });
  weatherize(M.bark, { grime: 1.2, moss: 0.5, vary: 0.4 });
  weatherize(M.peatBlock, { grime: 0.5, moss: 0.5, vary: 0.35 });
  // the Reliquary's own stone is never world-weathered (it moves; the pattern must not swim)
  M.relStone = std(T.statue, { color: 0xc8c2b6 });
  M.flame = new THREE.SpriteMaterial({ map: T.flame, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  M.glow = new THREE.SpriteMaterial({ map: T.glow, color: 0xffa860, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false, opacity: 0.35 });
  M.cloth = (color) => new THREE.MeshStandardMaterial({ color, map: T.cloth.map, normalMap: T.cloth.normalMap, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.95 });
  M.skin = (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.65 });
  return M;
}

// --------------------------------------------------------------- helpers
// Box-projected UVs from world positions so tiled textures line up across
// merged pieces and never stretch.
export function worldUV(geo, scale = 0.5) {
  const p = geo.attributes.position, n = geo.attributes.normal;
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    let u, v;
    if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); }
    else if (ax >= az) { u = p.getZ(i); v = p.getY(i); }
    else { u = p.getX(i); v = p.getY(i); }
    uv[i * 2] = u * scale; uv[i * 2 + 1] = v * scale;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

export function boxGeo(w, h, d, x, y, z, ry = 0, rx = 0, rz = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(1, 1, 1));
  g.applyMatrix4(m);
  return g;
}

export class MergeBucket {
  constructor() { this.lists = new Map(); }
  add(mat, geo, uvScale) {
    if (uvScale) worldUV(geo, uvScale);
    const g = geo.index ? geo.toNonIndexed() : geo;
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!this.lists.has(mat)) this.lists.set(mat, []);
    this.lists.get(mat).push(g);
  }
  build(parent, { cast = true, receive = true } = {}) {
    for (const [mat, list] of this.lists) {
      for (let i = 0; i < list.length; i += 400) {
        const merged = mergeGeometries(list.slice(i, i + 400), false);
        const mesh = new THREE.Mesh(merged, mat);
        mesh.castShadow = cast; mesh.receiveShadow = receive;
        parent.add(mesh);
      }
    }
    this.lists.clear();
  }
}

function mesh(geo, mat, parent, x = 0, y = 0, z = 0, cast = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true;
  parent?.add(m);
  return m;
}

function pivot(parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g;
}

// --------------------------------------------------------------- survivor
export const SURVIVORS = [
  { id: 'wren', short: 'Wren', name: 'Wren Ashdown', title: 'Peat Cutter', jacket: 0x4b5232, pants: 0x3a2e22, skin: 0xd9b08c, hair: 0x5a3b22, extra: 'cap', voice: 1.25,
    bio: 'Cut turf on the moor since she was nine. Knows where the ground will hold.' },
  { id: 'ilias', short: 'Ilias', name: 'Father Ilias Moro', title: 'Defrocked Priest', jacket: 0x18171a, pants: 0x18171a, skin: 0xc79a78, hair: 0x9a9a98, extra: 'cassock', voice: 0.82,
    bio: 'He rang the parish bells the night the village sank. He has not slept since.' },
  { id: 'juno', short: 'Juno', name: 'Juno Okafor', title: 'Lightkeeper\'s Daughter', jacket: 0xb8902a, pants: 0x262a30, skin: 0x6a4630, hair: 0x140e0a, extra: 'oilskin', voice: 1.18,
    bio: 'Followed a lantern inland from the drowned lighthouse. The lantern was not hers.' },
  { id: 'tey', short: 'Tey', name: 'Teodor "Tey" Vas', title: 'Grave-Robber', jacket: 0x2e2420, pants: 0x2b2b2b, skin: 0xe0b896, hair: 0x2a1a10, extra: 'bandana', voice: 0.95,
    bio: 'Dug up the wrong saint. Has been running ever since.' },
];

export function buildSurvivor(def, M) {
  const root = new THREE.Group();
  const body = pivot(root);
  const jacket = M.cloth(def.jacket), pants = M.cloth(def.pants), skin = M.skin(def.skin), hair = M.cloth(def.hair);
  const boot = new THREE.MeshStandardMaterial({ color: 0x1a1410, roughness: 0.7 });
  const j = {};
  j.hips = pivot(body, 0, 0.95, 0);
  mesh(new THREE.BoxGeometry(0.34, 0.2, 0.21), pants, j.hips, 0, 0.02, 0);
  j.spine = pivot(j.hips, 0, 0.06, 0);
  const torso = mesh(new THREE.CapsuleGeometry(0.16, 0.3, 6, 14), jacket, j.spine, 0, 0.27, 0);
  torso.scale.set(1.18, 1, 0.78);
  const hem = mesh(new THREE.CylinderGeometry(0.19, 0.21, 0.16, 16, 1, true), jacket, j.hips, 0, -0.02, 0);
  hem.material = jacket.clone(); hem.material.side = THREE.DoubleSide; hem.scale.set(1, 1, 0.8);
  const belt = mesh(new THREE.CylinderGeometry(0.185, 0.185, 0.035, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0x1e1610, roughness: 0.6, side: THREE.DoubleSide }), j.hips, 0, 0.07, 0);
  belt.scale.set(1, 1, 0.8);
  mesh(new THREE.BoxGeometry(0.04, 0.035, 0.02), M.iron, j.hips, 0, 0.07, 0.15);
  const collar = mesh(new THREE.TorusGeometry(0.075, 0.022, 6, 16), jacket, j.spine, 0, 0.52, 0);
  collar.rotation.x = Math.PI / 2;
  j.neck = pivot(j.spine, 0, 0.55, 0);
  mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.08, 10), skin, j.neck, 0, 0.02, 0);
  j.head = pivot(j.neck, 0, 0.07, 0);
  const head = mesh(new THREE.SphereGeometry(0.105, 20, 16), skin, j.head, 0, 0.1, 0.005);
  head.scale.set(0.92, 1.12, 1);
  const hairCap = mesh(new THREE.SphereGeometry(0.11, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), hair, j.head, 0, 0.115, -0.008);
  hairCap.scale.set(0.95, 1.08, 1.04);
  // back of the head: hair down to the nape
  const back = mesh(new THREE.SphereGeometry(0.108, 16, 12, Math.PI * 1.15, Math.PI * 0.7, 0.2, Math.PI * 0.62), hair, j.head, 0, 0.1, -0.012);
  back.scale.set(0.96, 1.14, 1.06);
  mesh(new THREE.BoxGeometry(0.025, 0.04, 0.03), skin, j.head, 0, 0.085, 0.1);
  const brow = M.cloth(def.hair);
  for (const sx of [-1, 1]) {
    mesh(new THREE.SphereGeometry(0.012, 6, 6), M.black, j.head, sx * 0.036, 0.115, 0.093, false);
    mesh(new THREE.BoxGeometry(0.035, 0.008, 0.01), brow, j.head, sx * 0.037, 0.135, 0.097, false).rotation.z = sx * -0.15;
    mesh(new THREE.SphereGeometry(0.022, 8, 6), skin, j.head, sx * 0.097, 0.1, 0.0).scale.set(0.45, 1, 0.8);
  }
  mesh(new THREE.BoxGeometry(0.04, 0.006, 0.01), new THREE.MeshStandardMaterial({ color: 0x4a2a24, roughness: 0.7 }), j.head, 0, 0.055, 0.098, false);

  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? 1 : -1;
    const sh = (j['sh' + side] = pivot(j.spine, sx * 0.215, 0.47, 0));
    mesh(new THREE.CapsuleGeometry(0.055, 0.2, 4, 10), jacket, sh, 0, -0.14, 0);
    const el = (j['el' + side] = pivot(sh, 0, -0.29, 0));
    mesh(new THREE.CapsuleGeometry(0.047, 0.19, 4, 10), jacket, el, 0, -0.12, 0);
    mesh(new THREE.SphereGeometry(0.052, 10, 8), skin, el, 0, -0.275, 0.005).scale.set(0.85, 1.25, 0.6);
    mesh(new THREE.SphereGeometry(0.02, 6, 6), skin, el, sx * -0.035, -0.26, 0.02);
    const hp = (j['hip' + side] = pivot(j.hips, sx * 0.1, -0.02, 0));
    mesh(new THREE.CapsuleGeometry(0.075, 0.28, 4, 10), pants, hp, 0, -0.21, 0);
    const kn = (j['kn' + side] = pivot(hp, 0, -0.43, 0));
    mesh(new THREE.CapsuleGeometry(0.06, 0.3, 4, 10), pants, kn, 0, -0.2, 0);
    mesh(new THREE.BoxGeometry(0.1, 0.075, 0.25), boot, kn, 0, -0.43, 0.045);
  }

  if (def.extra === 'cap') {
    mesh(new THREE.CylinderGeometry(0.115, 0.115, 0.05, 16), M.cloth(0x3a3428), j.head, 0, 0.19, 0);
    mesh(new THREE.BoxGeometry(0.2, 0.012, 0.09), M.cloth(0x3a3428), j.head, 0, 0.17, 0.1);
    const scarf = mesh(new THREE.TorusGeometry(0.075, 0.03, 8, 16), M.cloth(0x7a2420), j.neck, 0, 0.0, 0);
    scarf.rotation.x = Math.PI / 2;
  } else if (def.extra === 'cassock') {
    mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.75, 16, 1, true), jacket, j.hips, 0, -0.33, 0).material.side = THREE.DoubleSide;
    const collar = mesh(new THREE.TorusGeometry(0.058, 0.014, 6, 16), new THREE.MeshStandardMaterial({ color: 0xeeeeea, roughness: 0.6 }), j.neck, 0, 0.0, 0);
    collar.rotation.x = Math.PI / 2;
    const rosary = mesh(new THREE.TorusGeometry(0.12, 0.006, 4, 20), M.bronze, j.spine, 0, 0.32, 0.12);
    rosary.rotation.x = 0.3;
  } else if (def.extra === 'oilskin') {
    const skirt = mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.4, 16, 1, true), jacket, j.hips, 0, -0.14, 0);
    skirt.material = jacket.clone(); skirt.material.side = THREE.DoubleSide; skirt.material.roughness = 0.45;
    const hood = mesh(new THREE.SphereGeometry(0.12, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), jacket, j.spine, 0, 0.52, -0.08);
    hood.rotation.x = -1.2;
    mesh(new THREE.SphereGeometry(0.06, 10, 8), hair, j.head, 0, 0.17, -0.09);
  } else if (def.extra === 'bandana') {
    const band = mesh(new THREE.CylinderGeometry(0.113, 0.113, 0.04, 16, 1, true), M.cloth(0x8a1e1a), j.head, 0, 0.16, 0);
    band.material.side = THREE.DoubleSide;
    mesh(new THREE.BoxGeometry(0.16, 0.2, 0.08), M.cloth(0x4a3a28), j.hips, -0.2, -0.05, 0.02);
    const strap = mesh(new THREE.TorusGeometry(0.3, 0.012, 4, 24), M.cloth(0x2a2018), j.spine, -0.03, 0.2, 0);
    strap.rotation.set(0, Math.PI / 2, 0.7);
    mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.45, 14, 1, true), jacket, j.hips, 0, -0.18, 0).material.side = THREE.DoubleSide;
  }

  root.userData = { j, body, pose: {}, def };
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return root;
}

const JOINTS = ['hips', 'spine', 'neck', 'head', 'shL', 'elL', 'shR', 'elR', 'hipL', 'knL', 'hipR', 'knR'];

// Procedural animation: compute target joint angles for an animation state,
// then blend toward them.
export function animateSurvivor(rig, anim, t, dt, o = {}) {
  const { j, body } = rig.userData;
  const T = {}; for (const k of JOINTS) T[k] = [0, 0, 0];
  let bodyY = 0, bodyRX = 0, bodyZ = 0;
  const sp = o.speed ?? 0;
  const s = Math.sin, c = Math.cos;
  switch (anim) {
    case 'idle': case 'stand': {
      const b = s(t * 1.6);
      T.spine[0] = 0.03 * b; T.shL[2] = 0.08; T.shR[2] = -0.08; T.elL[0] = -0.15; T.elR[0] = -0.15;
      T.head[0] = o.injured ? 0.25 : 0.02 * b;
      if (o.injured) { T.spine[0] = 0.25; T.shL[0] = -0.4; T.elL[0] = -1.6; }
      break;
    }
    case 'walk': case 'run': case 'back': case 'crouch': {
      const run = anim === 'run', crouch = anim === 'crouch', back = anim === 'back';
      const f = run ? 9.5 : crouch ? 5.5 : 7.2;
      const p = t * f * (back ? -1 : 1);
      const A = run ? 0.75 : crouch ? 0.45 : 0.45;
      T.hipL[0] = s(p) * A; T.hipR[0] = -s(p) * A;
      T.knL[0] = Math.max(0, -s(p + 0.6)) * (run ? 1.4 : 0.8); T.knR[0] = Math.max(0, s(p + 0.6)) * (run ? 1.4 : 0.8);
      T.shL[0] = -s(p) * (run ? 0.9 : 0.4); T.shR[0] = s(p) * (run ? 0.9 : 0.4);
      T.elL[0] = run ? -1.3 : -0.3; T.elR[0] = run ? -1.3 : -0.3;
      T.spine[0] = run ? 0.28 : 0.06; T.spine[1] = s(p) * 0.1;
      bodyY = Math.abs(s(p)) * (run ? 0.06 : 0.025);
      if (crouch) {
        bodyY = -0.38; T.hipL[0] -= 1.1; T.hipR[0] -= 1.1; T.knL[0] += 1.7; T.knR[0] += 1.7;
        T.spine[0] = 0.55; T.head[0] = -0.4; T.shL[0] = -0.5; T.shR[0] = -0.5;
      }
      if (o.injured && !crouch) { T.shL[0] = -0.4; T.elL[0] = -1.7; T.spine[2] = 0.08; T.head[0] = 0.1; }
      if (back) { T.spine[0] = -0.05; T.head[0] = -0.05; }
      break;
    }
    case 'crawl': {
      const p = t * 3 * Math.min(1, sp + 0.15);
      bodyRX = 1.35; bodyY = -0.68;
      T.head[0] = -1.0; T.neck[0] = -0.2;
      T.shL[0] = -2.6 + s(p) * 0.5; T.shR[0] = -2.6 - s(p) * 0.5; T.elL[0] = -0.4; T.elR[0] = -0.4;
      T.hipL[0] = 0.1 + s(p) * 0.2; T.hipR[0] = 0.1 - s(p) * 0.2; T.knL[0] = 0.4; T.knR[0] = 0.6;
      break;
    }
    case 'ring': {
      const p = t * 2.4;
      const pull = (s(p) + 1) / 2;
      T.shL[0] = -2.7 + pull * 1.0; T.shR[0] = -2.7 + pull * 1.0; T.shL[2] = -0.15; T.shR[2] = 0.15;
      T.elL[0] = -0.2 - pull * 0.9; T.elR[0] = -0.2 - pull * 0.9;
      T.spine[0] = 0.05 + pull * 0.25; T.head[0] = -0.35 + pull * 0.2;
      T.hipL[0] = -pull * 0.35; T.hipR[0] = -pull * 0.35; T.knL[0] = pull * 0.7; T.knR[0] = pull * 0.7;
      bodyY = -pull * 0.1;
      break;
    }
    case 'work': {
      const p = t * 4;
      bodyY = -0.42; T.hipL[0] = -1.5; T.knL[0] = 2.2; T.hipR[0] = 0.25; T.knR[0] = 1.65;
      T.spine[0] = 0.45; T.head[0] = 0.2;
      T.shL[0] = -1.1 + s(p) * 0.15; T.shR[0] = -1.15 + s(p + 1.5) * 0.15; T.elL[0] = -0.7; T.elR[0] = -0.7;
      break;
    }
    case 'reach': {
      const p = t * 3;
      T.shL[0] = -1.35 + s(p) * 0.08; T.shR[0] = -1.4; T.elL[0] = -0.4; T.elR[0] = -0.5; T.spine[0] = 0.2;
      break;
    }
    case 'hooked': {
      const sw = s(t * 1.3) * (o.struggle ? 0.35 : 0.08);
      T.shL[0] = -2.95; T.shR[0] = -2.95; T.shL[2] = -0.25; T.shR[2] = 0.25; T.elL[0] = -0.2; T.elR[0] = -0.2;
      T.head[0] = 0.55; T.spine[0] = 0.1 + sw; T.spine[1] = sw;
      T.hipL[0] = 0.15 + (o.struggle ? s(t * 9) * 0.5 : 0); T.hipR[0] = -0.05 - (o.struggle ? s(t * 9) * 0.5 : 0);
      T.knL[0] = 0.4; T.knR[0] = 0.3;
      break;
    }
    case 'carried': {
      const w = o.wiggle ? s(t * 12) * 0.35 : 0;
      bodyRX = 1.5;
      T.shL[0] = -2.9 + w; T.shR[0] = -2.9 - w; T.elL[0] = -0.2; T.elR[0] = -0.2;
      T.head[0] = 0.4; T.hipL[0] = -0.3 + w; T.hipR[0] = -0.3 - w; T.knL[0] = 1.2; T.knR[0] = 1.0;
      break;
    }
    case 'vault': {
      bodyY = 0.15; T.hipL[0] = -1.5; T.hipR[0] = -1.2; T.knL[0] = 1.9; T.knR[0] = 1.6;
      T.shL[0] = -1.2; T.shR[0] = -0.8; T.spine[0] = 0.45;
      break;
    }
    case 'drop': {
      T.shR[0] = -1.0 - 1.4 * Math.max(0, 1 - (o.phase ?? 1)); T.shL[0] = -0.6; T.spine[0] = 0.3;
      break;
    }
  }
  if (o.lookPitch !== undefined && (anim === 'idle' || anim === 'walk' || anim === 'run' || anim === 'back' || anim === 'stand')) {
    T.head[0] += o.lookPitch * 0.5; T.neck[0] += o.lookPitch * 0.3;
    T.head[1] += (o.lookYaw ?? 0) * 0.6; T.neck[1] += (o.lookYaw ?? 0) * 0.3;
  }
  const k = 1 - Math.exp(-dt * (anim === 'vault' ? 25 : 14));
  for (const n of JOINTS) {
    const r = j[n].rotation;
    r.x += (T[n][0] - r.x) * k; r.y += (T[n][1] - r.y) * k; r.z += (T[n][2] - r.z) * k;
  }
  body.position.y += (bodyY - body.position.y) * k;
  body.rotation.x += (bodyRX - body.rotation.x) * k;
  body.position.z += (bodyZ - body.position.z) * k;
}

// --------------------------------------------------------------- Reliquary
export const RELIQUARY_POSES = {
  pray: { lean: 0.05, twist: 0, hx: 0.35, hy: 0, hz: 0, l: [-0.95, -0.55, -1.45], r: [-0.95, 0.55, -1.45], curl: 0.6 },
  reach: { lean: 0.38, twist: 0, hx: -0.15, hy: 0, hz: 0.1, l: [-1.5, -0.12, -0.1], r: [-1.55, 0.1, -0.15], curl: 0.05 },
  lunge: { lean: 0.62, twist: 0.35, hx: -0.25, hy: -0.2, hz: 0.25, l: [-1.15, -0.2, -0.3], r: [-2.5, 0.25, -0.7], curl: 0.15 },
  claw: { lean: 0.15, twist: -0.1, hx: -0.4, hy: 0, hz: -0.15, l: [-2.85, -0.4, -0.5], r: [-2.8, 0.45, -0.55], curl: 0.9 },
  tilt: { lean: 0.18, twist: 0.1, hx: 0.25, hy: 0.3, hz: 0.75, l: [0.08, -0.08, -0.15], r: [0.05, 0.1, -0.1], curl: 0.3 },
  beckon: { lean: 0.1, twist: -0.25, hx: 0.05, hy: 0.45, hz: 0.2, l: [-0.7, -0.6, -1.6], r: [-1.25, 0.75, -0.8], curl: 0.45 },
  stalk: { lean: 0.95, twist: 0.05, hx: -0.75, hy: 0.15, hz: -0.1, l: [-0.55, -0.15, -0.25], r: [-0.5, 0.2, -0.2], curl: 0.7 },
  carry: { lean: 0.25, twist: 0.2, hx: 0.1, hy: -0.3, hz: 0.1, l: [-0.4, -0.2, -1.9], r: [-0.9, 0.5, -0.4], curl: 0.8 },
  weep: { lean: 0.3, twist: 0, hx: 0.75, hy: 0, hz: 0.05, l: [-1.7, -0.75, -2.0], r: [-1.65, 0.7, -2.05], curl: 0.5 },
};

export function buildReliquary(M, { alive = true } = {}) {
  const root = new THREE.Group();
  const S = M.relStone;
  // lower robe — tall, narrow, deeply folded, torn at the hem
  const prof = [[0.5, 0], [0.47, 0.08], [0.4, 0.45], [0.32, 0.85], [0.26, 1.12], [0.235, 1.27], [0.22, 1.3]].map(([r, y]) => new THREE.Vector2(r, y));
  const lower = new THREE.LatheGeometry(prof, 64);
  displaceFolds(lower, 11, 0.04, 1.3);
  { const p = lower.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) < 0.01) { const a = Math.atan2(p.getZ(i), p.getX(i)); p.setY(i, Math.max(0, NZ.noise(a * 4, 3) * 0.08 + 0.02)); } lower.computeVertexNormals(); }
  mesh(lower, S, root);
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2 + 0.3;
    const sh = mesh(new THREE.ConeGeometry(0.05, 0.22, 4), S, root, Math.cos(a) * 0.5, 0.04, Math.sin(a) * 0.5);
    sh.rotation.set(Math.PI / 2 + 0.5, 0, -a);
  }
  const chest = pivot(root, 0, 1.24, 0);
  const mprof = [[0.22, 0], [0.26, 0.14], [0.29, 0.28], [0.3, 0.38], [0.24, 0.48], [0.1, 0.55], [0.0, 0.56]].map(([r, y]) => new THREE.Vector2(r, y));
  const mantle = new THREE.LatheGeometry(mprof, 48);
  displaceFolds(mantle, 7, 0.018, 0.56);
  const mm = mesh(mantle, S, chest);
  mm.scale.set(1.08, 1, 0.78);
  // a stole hanging down the front
  for (const sx of [-1, 1]) {
    const st = mesh(new THREE.BoxGeometry(0.07, 0.95, 0.02), S, chest, sx * 0.09, -0.1, 0.24);
    st.rotation.x = -0.12;
  }
  // reliquary box set into the chest: the relic smoulders inside the real one
  const box = pivot(chest, 0, 0.27, 0.215);
  mesh(new THREE.BoxGeometry(0.13, 0.17, 0.07), M.bronze, box);
  mesh(new THREE.ConeGeometry(0.085, 0.07, 4), M.bronze, box, 0, 0.12, 0).rotation.y = Math.PI / 4;
  const relic = mesh(new THREE.PlaneGeometry(0.07, 0.1), alive ? M.relic.clone() : M.relicDead, box, 0, 0, 0.036, false);
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(0.01, 0.12, 0.015), M.bronze, box, sx * 0.04, 0, 0.04);
  const chain = mesh(new THREE.TorusGeometry(0.25, 0.016, 6, 40), M.iron, root, 0, 1.08, 0);
  chain.rotation.x = Math.PI / 2 + 0.12; chain.scale.set(1.1, 0.85, 1);
  // peaked cowl with the mask recessed in its shadow
  const head = pivot(chest, 0, 0.55, 0.03);
  const cowlGeo = new THREE.SphereGeometry(0.2, 32, 24, Math.PI * 0.82, Math.PI * 1.36, 0, Math.PI * 0.72);
  { const p = cowlGeo.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y > 0) { const k = y / 0.2; p.setY(i, y * (1 + 0.45 * k * k)); p.setZ(i, p.getZ(i) - 0.07 * k * k); } } cowlGeo.computeVertexNormals(); }
  const hood = mesh(cowlGeo, S, head, 0, 0.1, -0.01);
  hood.scale.set(1, 1.12, 1.2);
  const hoodIn = mesh(cowlGeo.clone(), new THREE.MeshStandardMaterial({ color: 0x020202, roughness: 1, side: THREE.BackSide }), head, 0, 0.1, -0.012, false);
  hoodIn.scale.set(0.985, 1.1, 1.18);
  const face = mesh(new THREE.SphereGeometry(0.12, 28, 22), M.mask, head, 0, 0.085, 0.045);
  face.scale.set(0.78, 1.2, 0.6);
  for (const sx of [-1, 1]) {
    const eye = mesh(new THREE.SphereGeometry(0.024, 10, 8), M.black, head, sx * 0.04, 0.11, 0.108, false);
    eye.scale.set(1.15, 0.7, 0.6);
  }
  const halo = pivot(head, 0, 0.2, -0.22);
  const ring = mesh(new THREE.TorusGeometry(0.34, 0.02, 8, 64, Math.PI * 1.45), M.bronze, halo);
  ring.rotation.z = 0.9;
  const frag = mesh(new THREE.TorusGeometry(0.34, 0.02, 8, 12, 0.45), M.bronze, halo, 0.03, -0.05, 0.02);
  frag.rotation.z = -0.25;
  const rnd = mulberry32(17);
  for (let k = 0; k < 9; k++) {
    const a = (k / 9) * Math.PI * 2;
    const len = 0.08 + rnd() * 0.18;
    const ray = mesh(new THREE.ConeGeometry(0.011, len, 4), M.bronze, halo, Math.cos(a) * (0.36 + len / 2), Math.sin(a) * (0.36 + len / 2), 0);
    ray.rotation.z = a - Math.PI / 2;
  }
  // long arms: open sleeves, thin stone forearms, spindly fingers
  const arms = {};
  for (const side of ['l', 'r']) {
    const sx = side === 'l' ? 1 : -1;
    const sh = pivot(chest, sx * 0.3, 0.38, 0);
    const sleeve = new THREE.CylinderGeometry(0.075, 0.15, 0.44, 18, 4, true);
    displaceFolds(sleeve, 5, 0.012, 0.44, true);
    const sm = mesh(sleeve, S, sh, 0, -0.2, 0);
    sm.material = S.clone(); sm.material.side = THREE.DoubleSide;
    const el = pivot(sh, 0, -0.38, 0);
    mesh(new THREE.CylinderGeometry(0.036, 0.027, 0.52, 10), S, el, 0, -0.26, 0);
    const hand = pivot(el, 0, -0.53, 0);
    mesh(new THREE.BoxGeometry(0.068, 0.1, 0.026), S, hand, 0, -0.04, 0);
    const fingers = [];
    for (let f = 0; f < 4; f++) {
      const fp = pivot(hand, -0.025 + f * 0.017, -0.088, 0);
      const len = [0.19, 0.24, 0.23, 0.18][f];
      const seg1 = mesh(new THREE.CylinderGeometry(0.0075, 0.0065, len * 0.55, 5), S, fp, 0, -len * 0.27, 0);
      const k2 = pivot(fp, 0, -len * 0.55, 0);
      mesh(new THREE.CylinderGeometry(0.0065, 0.003, len * 0.5, 5), S, k2, 0, -len * 0.25, 0);
      fp.userData.k2 = k2;
      fingers.push(fp);
    }
    const th = pivot(hand, sx * 0.038, -0.03, 0.01);
    mesh(new THREE.CylinderGeometry(0.008, 0.005, 0.11, 5), S, th, 0, -0.055, 0);
    th.rotation.z = sx * 0.7;
    arms[side] = { sh, el, hand, fingers };
  }
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  root.userData = { chest, head, arms, relic, alive };
  return root;
}

function displaceFolds(geo, folds, amp, height, cyl = false) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const r = Math.hypot(x, z);
    if (r < 1e-4) continue;
    const a = Math.atan2(z, x);
    const yn = cyl ? (y / height + 0.5) : y / height;
    const k = cyl ? yn : (1 - yn * 0.8);
    const d = (Math.sin(a * folds + yn * 3) * amp + NZ.noise(a * 3, y * 4) * amp * 0.8) * k;
    const nr = r + d;
    p.setX(i, (x / r) * nr); p.setZ(i, (z / r) * nr);
  }
  geo.computeVertexNormals();
}

export function poseReliquary(model, pose) {
  const P = typeof pose === 'string' ? RELIQUARY_POSES[pose] : pose;
  const { chest, head, arms } = model.userData;
  chest.rotation.set(P.lean, P.twist, 0);
  head.rotation.set(P.hx, P.hy, P.hz);
  for (const side of ['l', 'r']) {
    const a = arms[side], v = P[side];
    a.sh.rotation.set(v[0], 0, v[1]);
    a.el.rotation.set(v[2], 0, 0);
    a.hand.rotation.set(-P.curl * 0.3, 0, 0);
    for (const f of a.fingers) { f.rotation.x = -P.curl * 0.8; if (f.userData.k2) f.userData.k2.rotation.x = -P.curl * 1.0; }
  }
}

// Ghostly copy for aura reveals (rendered through walls).
export function auraClone(model, mat) {
  // Object3D.clone JSON-copies userData; rigs keep node references there, so strip it while cloning
  const saved = [];
  model.traverse((o) => { saved.push([o, o.userData]); o.userData = {}; });
  const c = model.clone(true);
  for (const [o, u] of saved) o.userData = u;
  c.traverse((o) => { if (o.isMesh) { o.material = mat; o.castShadow = false; o.receiveShadow = false; o.renderOrder = 999; } });
  return c;
}

// --------------------------------------------------------------- props
export function buildBell(M) {
  const g = new THREE.Group();
  const B = new MergeBucket();
  B.add(M.stoneClean, boxGeo(1.7, 0.42, 1.7, 0, 0.21, 0), 0.6);
  B.add(M.stoneClean, boxGeo(1.9, 0.08, 1.9, 0, 0.44, 0), 0.6);
  for (const sx of [-1, 1]) {
    B.add(M.timber, boxGeo(0.2, 2.9, 0.2, sx * 0.72, 1.9, 0), 0.7);
    B.add(M.timber, boxGeo(0.12, 1.1, 0.12, sx * 0.48, 1.0, 0, 0, 0, sx * 0.55), 0.7);
  }
  B.add(M.timber, boxGeo(1.9, 0.22, 0.24, 0, 3.32, 0), 0.7);
  B.add(M.timber, boxGeo(0.5, 0.18, 0.3, 0, 3.12, 0), 0.7);
  B.add(M.iron, boxGeo(0.08, 0.2, 0.08, 0, 3.0, 0), 1);
  B.build(g);
  // bronze bell on a swinging pivot
  const sw = pivot(g, 0, 3.02, 0);
  const prof = [[0.43, 0], [0.45, 0.025], [0.42, 0.07], [0.35, 0.18], [0.3, 0.36], [0.285, 0.52], [0.26, 0.62], [0.16, 0.69], [0.0, 0.71]].map(([r, y]) => new THREE.Vector2(r, y));
  const bellGeo = new THREE.LatheGeometry(prof, 40);
  const bm = mesh(bellGeo, M.bronze.clone(), sw, 0, -0.73, 0);
  bm.material.side = THREE.DoubleSide;
  const lip = mesh(new THREE.TorusGeometry(0.44, 0.02, 6, 40), M.bronze, sw, 0, -0.71, 0);
  lip.rotation.x = Math.PI / 2;
  const clap = pivot(sw, 0, -0.1, 0);
  mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.5, 6), M.iron, clap, 0, -0.27, 0);
  mesh(new THREE.SphereGeometry(0.05, 10, 8), M.iron, clap, 0, -0.55, 0);
  // rope + striped sally
  const rope = pivot(sw, 0.3, -0.05, 0);
  mesh(new THREE.CylinderGeometry(0.014, 0.014, 1.9, 6), new THREE.MeshStandardMaterial({ color: 0x8a7a5a, roughness: 1 }), rope, 0, -0.95, 0);
  const sally = mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.32, 10), M.cloth(0x8a2a22), rope, 0, -1.35, 0);
  for (const dy of [-0.08, 0.08]) mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.05, 10), M.cloth(0xd8d0c0), rope, 0, -1.35 + dy, 0);
  // candles (lit when unrung, blaze when rung)
  const candles = [];
  for (const [cx, cz] of [[0.65, 0.65], [-0.65, 0.6], [0.6, -0.65], [-0.6, -0.6], [0.2, 0.75]]) {
    const h = 0.12 + Math.random() * 0.2;
    mesh(new THREE.CylinderGeometry(0.03, 0.035, h, 8), M.wax, g, cx, 0.48 + h / 2, cz);
    const fl = new THREE.Sprite(M.flame); fl.scale.set(0.06, 0.12, 1); fl.position.set(cx, 0.48 + h + 0.05, cz);
    g.add(fl); candles.push(fl);
  }
  const light = new THREE.PointLight(0xffa050, 1.6, 9, 1.6);
  light.position.set(0, 1.0, 0); g.add(light);
  const halo = new THREE.Sprite(M.glow.clone()); halo.scale.set(3.5, 3.5, 1); halo.position.set(0, 1.0, 0); g.add(halo);
  const holy = new THREE.Sprite(M.glow.clone()); holy.material.color.set(0xfff0c8); holy.material.opacity = 0; holy.scale.set(7, 7, 1); holy.position.set(0, 3.2, 0); g.add(holy);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { swing: sw, clap, rope, candles, light, halo, holy };
  return g;
}

export function buildPallet(M) {
  const g = new THREE.Group();
  // Stands upright beside a gap (local X = passage direction, Y = length);
  // rotation.x on the pivot swings it down across the gap toward local +Z.
  const p = pivot(g);
  const B = new MergeBucket();
  const rnd = mulberry32(Math.floor(Math.random() * 1e6));
  for (const sx of [-0.48, 0, 0.48]) B.add(M.timber, boxGeo(0.1, 1.95, 0.08, sx, 0.97, -0.03, 0, 0, (rnd() - 0.5) * 0.02), 0.8);
  for (let k = 0; k < 9; k++) {
    const y = 0.1 + k * 0.215;
    B.add(M.planks, boxGeo(1.18 - rnd() * 0.1, 0.16, 0.035, (rnd() - 0.5) * 0.06, y, 0.03, 0, 0, (rnd() - 0.5) * 0.08), 0.9);
  }
  B.build(p);
  g.userData = { pivot: p };
  return g;
}

export function buildPost(M) {
  const g = new THREE.Group();
  const B = new MergeBucket();
  const pool = mesh(new THREE.CircleGeometry(1.5, 32), M.peat, g, 0, 0.035, 0, false);
  pool.rotation.x = -Math.PI / 2;
  const rm = mesh(new THREE.RingGeometry(1.4, 1.9, 32), new THREE.MeshStandardMaterial({ color: 0x0d0a08, roughness: 1, transparent: true, opacity: 0.9 }), g, 0, 0.03, 0, false);
  rm.rotation.x = -Math.PI / 2;
  // gnarled trunk
  let y = -0.2, x = 0;
  const rads = [0.21, 0.18, 0.15, 0.13];
  for (let k = 0; k < 4; k++) {
    const len = 0.95, rz = (k % 2 ? -1 : 1) * (0.06 + Math.random() * 0.06);
    const c = new THREE.CylinderGeometry(rads[k] * 0.9, rads[k], len * 1.06, 9);
    c.applyMatrix4(new THREE.Matrix4().makeRotationZ(rz)); c.translate(x - Math.sin(rz) * len / 2, y + len / 2, 0);
    B.add(M.bark, c);
    x += -Math.sin(rz) * len; y += len * Math.cos(rz);
  }
  // gibbet arm + brace
  const top = y - 0.12, armLen = 1.35;
  const arm = new THREE.CylinderGeometry(0.09, 0.11, armLen, 8); arm.rotateZ(Math.PI / 2 - 0.08); arm.translate(x + armLen / 2 - 0.05, top, 0);
  B.add(M.bark, arm);
  const brace = new THREE.CylinderGeometry(0.06, 0.07, 0.95, 7); brace.rotateZ(-0.8); brace.translate(x + 0.32, top - 0.33, 0);
  B.add(M.bark, brace);
  // roots into the peat
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 + 0.4;
    const r = new THREE.ConeGeometry(0.09, 0.9, 5); r.rotateZ(Math.PI / 2 - 0.35); r.rotateY(-a); r.translate(Math.cos(a) * 0.35, 0.05, Math.sin(a) * 0.35);
    B.add(M.bark, r);
  }
  B.build(g);
  const end = new THREE.Vector3(x + armLen - 0.15, top - 0.05, 0);
  for (let k = 0; k < 9; k++) {
    const l = mesh(new THREE.TorusGeometry(0.035, 0.009, 5, 10), M.iron, g, end.x, end.y - 0.06 - k * 0.062, 0);
    l.rotation.y = k % 2 ? Math.PI / 2 : 0;
  }
  // iron hook
  const hookY = end.y - 0.62;
  const hk = mesh(new THREE.TorusGeometry(0.09, 0.018, 6, 16, Math.PI * 1.4), M.iron, g, end.x, hookY - 0.06, 0);
  hk.rotation.set(0, Math.PI / 2, Math.PI * 0.8);
  // reeds and a few bones of earlier mourners
  for (let k = 0; k < 30; k++) {
    const a = Math.random() * Math.PI * 2, r = 1.4 + Math.random() * 0.7, h = 0.5 + Math.random() * 0.9;
    const reed = mesh(new THREE.ConeGeometry(0.012, h, 3), M.reed, g, Math.cos(a) * r, h / 2, Math.sin(a) * r, false);
    reed.rotation.set((Math.random() - 0.5) * 0.3, 0, (Math.random() - 0.5) * 0.3);
  }
  const bone = new THREE.MeshStandardMaterial({ color: 0x8a8272, roughness: 0.8 });
  for (let k = 0; k < 4; k++) {
    const b = mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.32, 6), bone, g, (Math.random() - 0.5) * 2, 0.04, (Math.random() - 0.5) * 2);
    b.rotation.set(Math.PI / 2, Math.random() * 3, 0);
  }
  const tendrils = pivot(g, end.x, 0, 0);
  for (let k = 0; k < 7; k++) {
    const a = (k / 7) * Math.PI * 2;
    const t = mesh(new THREE.ConeGeometry(0.07, 2.0, 6), M.tendril, tendrils, Math.cos(a) * 0.55, 1.0, Math.sin(a) * 0.55);
    t.rotation.set(Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35);
  }
  tendrils.scale.set(1, 0.001, 1); tendrils.visible = false;
  g.userData = { hangPoint: new THREE.Vector3(end.x, hookY, 0), tendrils };
  return g;
}

export function buildGate(M) {
  const g = new THREE.Group();
  const B = new MergeBucket();
  for (const sx of [-1, 1]) {
    B.add(M.stone, boxGeo(0.8, 3.4, 0.9, sx * 2.25, 1.7, 0), 0.5);
    B.add(M.stone, boxGeo(1.0, 0.3, 1.1, sx * 2.25, 3.5, 0), 0.5);
  }
  // gabled lychgate roof
  for (const s of [-1, 1]) B.add(M.planks, boxGeo(5.8, 0.08, 1.6, 0, 4.15, s * 0.62, 0, s * 0.62, 0), 0.5);
  B.add(M.timber, boxGeo(5.8, 0.2, 0.2, 0, 4.62, 0), 0.6);
  B.add(M.timber, boxGeo(4.0, 0.25, 0.25, 0, 3.55, 0), 0.6);
  // lever pedestal
  B.add(M.stoneClean, boxGeo(0.5, 1.0, 0.5, 3.4, 0.5, 1.2), 0.6);
  B.build(g);
  const doors = [];
  for (const s of [-1, 1]) {
    const hinge = pivot(g, s * 1.85, 0, 0);
    const D = new MergeBucket();
    for (let k = 0; k < 8; k++) D.add(M.iron, boxGeo(0.04, 2.6, 0.04, -s * (0.12 + k * 0.22), 1.4, 0), 1);
    for (const y of [0.3, 1.4, 2.6]) D.add(M.iron, boxGeo(1.8, 0.07, 0.06, -s * 0.9, y, 0), 1);
    D.add(M.iron, boxGeo(1.6, 0.05, 0.05, -s * 0.9, 1.4, 0, 0, 0, s * 0.55), 1);
    D.build(hinge);
    doors.push(hinge);
  }
  const lever = pivot(g, 3.4, 1.0, 1.2);
  mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 8), M.iron, lever, 0, 0.3, 0);
  mesh(new THREE.SphereGeometry(0.06, 8, 8), M.iron, lever, 0, 0.6, 0);
  lever.rotation.x = -0.6;
  const lamps = [];
  for (let k = 0; k < 3; k++) {
    const lp = mesh(new THREE.BoxGeometry(0.16, 0.24, 0.16), M.lanternGlass, g, -0.8 + k * 0.8, 3.25, 0.2, false);
    mesh(new THREE.BoxGeometry(0.2, 0.04, 0.2), M.iron, g, -0.8 + k * 0.8, 3.39, 0.2);
    lamps.push(lp);
  }
  const light = new THREE.PointLight(0xff4020, 0, 10, 1.6); light.position.set(0, 3, 0.8); g.add(light);
  // escape light beyond the gate
  const beyond = new THREE.Sprite(M.glow.clone()); beyond.material.color.set(0xd8e8ff); beyond.material.opacity = 0; beyond.scale.set(10, 8, 1); beyond.position.set(0, 2, -4); g.add(beyond);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { doors, lever, lamps, light, beyond };
  return g;
}

export function buildHatch(M) {
  const g = new THREE.Group();
  const ring = mesh(new THREE.CylinderGeometry(0.9, 1.0, 0.5, 20, 1, true), M.stone, g, 0, 0.25, 0);
  ring.material = M.stone.clone(); ring.material.side = THREE.DoubleSide;
  mesh(new THREE.TorusGeometry(0.95, 0.12, 8, 24), M.stone, g, 0, 0.5, 0).rotation.x = Math.PI / 2;
  const water = mesh(new THREE.CircleGeometry(0.9, 24), new THREE.MeshBasicMaterial({ color: 0x9ab8d8 }), g, 0, 0.3, 0, false);
  water.rotation.x = -Math.PI / 2;
  const glow = new THREE.Sprite(M.glow.clone()); glow.material.color.set(0xa8c8ff); glow.material.opacity = 0.7; glow.scale.set(4, 4, 1); glow.position.y = 1; g.add(glow);
  const light = new THREE.PointLight(0x9ab8ff, 3, 10, 1.5); light.position.y = 1.2; g.add(light);
  return g;
}

export function buildShroud(M) {
  const geo = new THREE.ConeGeometry(0.75, 2.6, 18, 6, true);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i), a = Math.atan2(p.getZ(i), p.getX(i));
    const k = (1.3 - y) / 2.6;
    p.setX(i, p.getX(i) * (1 + Math.sin(a * 7) * 0.08 * k));
    p.setZ(i, p.getZ(i) * (1 + Math.sin(a * 7) * 0.08 * k));
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, M.shroud); m.position.y = 1.3; m.castShadow = true;
  const g = new THREE.Group(); g.add(m);
  return g;
}

// Dead tree from recursive branching, merged into one geometry.
export function treeGeometry(seed) {
  const rnd = mulberry32(seed);
  const parts = [];
  const up = new THREE.Vector3(0, 1, 0);
  function branch(start, dir, len, rad, depth) {
    const segs = 3;
    let p = start.clone(), d = dir.clone();
    for (let s = 0; s < segs; s++) {
      const l = len / segs;
      const r0 = rad * (1 - s / segs * 0.45), r1 = rad * (1 - (s + 1) / segs * 0.45);
      const c = new THREE.CylinderGeometry(r1, r0, l * 1.05, depth > 1 ? 7 : 4, 1);
      c.translate(0, l / 2, 0);
      const q = new THREE.Quaternion().setFromUnitVectors(up, d.clone().normalize());
      c.applyQuaternion(q); c.translate(p.x, p.y, p.z);
      parts.push(c);
      p = p.add(d.clone().normalize().multiplyScalar(l));
      d.x += (rnd() - 0.5) * 0.5; d.z += (rnd() - 0.5) * 0.5; d.y += 0.05; d.normalize();
    }
    if (depth <= 0 || rad < 0.02) return;
    const n = 2 + Math.floor(rnd() * 2);
    for (let k = 0; k < n; k++) {
      const a = rnd() * Math.PI * 2, tilt = 0.5 + rnd() * 0.7;
      const nd = new THREE.Vector3(Math.cos(a) * Math.sin(tilt), Math.cos(tilt), Math.sin(a) * Math.sin(tilt)).lerp(d, 0.3).normalize();
      branch(p.clone(), nd, len * (0.55 + rnd() * 0.2), rad * 0.6, depth - 1);
    }
  }
  const h = 4 + rnd() * 3;
  branch(new THREE.Vector3(0, -0.3, 0), new THREE.Vector3((rnd() - 0.5) * 0.2, 1, (rnd() - 0.5) * 0.2), h, 0.22 + rnd() * 0.12, 3);
  // root flare
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 + rnd();
    const c = new THREE.ConeGeometry(0.12, 0.9, 5); c.rotateZ(Math.PI / 2 - 0.25); c.rotateY(-a); c.translate(Math.cos(a) * 0.3, 0.05, Math.sin(a) * 0.3);
    parts.push(c);
  }
  const g = mergeGeometries(parts.map((p) => { const q = p.index ? p.toNonIndexed() : p; return q; }), false);
  return g;
}

export function rockGeometry(seed, sx = 1, sy = 0.7, sz = 1) {
  const g = new THREE.IcosahedronGeometry(1, 3);
  const N = new Noise(seed);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const v = new THREE.Vector3(p.getX(i), p.getY(i), p.getZ(i));
    const d = 1 + N.fbm(v.x * 1.5 + v.z, v.y * 1.5 + v.x, 4) * 0.35;
    v.multiplyScalar(d); v.x *= sx; v.y *= sy; v.z *= sz;
    if (v.y < -0.1) v.y = -0.1;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

export function gravestoneGeometries() {
  const a = new THREE.BoxGeometry(0.55, 0.8, 0.12); a.translate(0, 0.4, 0);
  const top = new THREE.CylinderGeometry(0.275, 0.275, 0.12, 16, 1, false, 0, Math.PI); top.rotateX(Math.PI / 2); top.rotateZ(Math.PI / 2); top.translate(0, 0.8, 0);
  const slab = mergeGeometries([a.toNonIndexed(), top.toNonIndexed()]);
  const v = new THREE.BoxGeometry(0.12, 1.1, 0.12); v.translate(0, 0.55, 0);
  const h = new THREE.BoxGeometry(0.55, 0.12, 0.12); h.translate(0, 0.78, 0);
  const cross = mergeGeometries([v.toNonIndexed(), h.toNonIndexed()]);
  const ob = new THREE.CylinderGeometry(0.08, 0.2, 1.5, 4); ob.translate(0, 0.75, 0);
  const obb = new THREE.BoxGeometry(0.45, 0.25, 0.45); obb.translate(0, 0.12, 0);
  const obelisk = mergeGeometries([ob.toNonIndexed(), obb.toNonIndexed()]);
  return [slab, cross, obelisk];
}

export function grassBladeGeometry() {
  const g = new THREE.BufferGeometry();
  const w = 0.045, h = 1;
  const pos = [-w, 0, 0, w, 0, 0, -w * 0.7, h * 0.4, 0, w * 0.7, h * 0.4, 0, -w * 0.35, h * 0.75, 0, w * 0.35, h * 0.75, 0, 0, h, 0];
  const uv = [0, 0, 1, 0, 0, 0.4, 1, 0.4, 0, 0.75, 1, 0.75, 0.5, 1];
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex([0, 1, 2, 2, 1, 3, 2, 3, 4, 4, 3, 5, 4, 5, 6]);
  g.computeVertexNormals();
  return g;
}
