// Shared model plumbing: materials (with world-space weathering), UV helpers,
// merge buckets, small scene-graph helpers and lathe fold displacement.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise, mulberry32 } from '../noise.js';

export const NZ = new Noise(99);

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
  M.T = T; // raw textures for builders that need their own materials
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

export function mesh(geo, mat, parent, x = 0, y = 0, z = 0, cast = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true;
  parent?.add(m);
  return m;
}

export function pivot(parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g;
}


export function displaceFolds(geo, folds, amp, height, cyl = false) {
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


export function auraClone(model, mat) {
  // Object3D.clone JSON-copies userData; rigs keep node references there, so strip it while cloning
  const saved = [];
  model.traverse((o) => { saved.push([o, o.userData]); o.userData = {}; });
  const c = model.clone(true);
  for (const [o, u] of saved) o.userData = u;
  c.traverse((o) => { if (o.isMesh) { o.material = mat; o.castShadow = false; o.receiveShadow = false; o.renderOrder = 999; } });
  return c;
}

