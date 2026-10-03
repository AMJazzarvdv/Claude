// Lightweight GPU particle pools: stone dust, wood splinters, blood, peat
// bubbles, floating ash and the pale wisps that drift over the graves.
import * as THREE from 'three';

class Pool {
  constructor(scene, tex, cap, blending, sizeScale = 1) {
    this.cap = cap; this.n = 0;
    this.pos = new Float32Array(cap * 3); this.vel = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 3); this.size = new Float32Array(cap); this.alpha = new Float32Array(cap);
    this.life = new Float32Array(cap); this.max = new Float32Array(cap); this.grav = new Float32Array(cap); this.drag = new Float32Array(cap);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo = g;
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending,
      uniforms: { tex: { value: tex }, scale: { value: 400 * sizeScale }, fogColor: { value: scene.fog ? scene.fog.color : new THREE.Color(0x262b33) }, fogDensity: { value: scene.fog ? scene.fog.density : 0.036 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; varying float vFog; uniform float scale; uniform float fogDensity;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = size * scale / max(0.1, -mv.z); float d = -mv.z; vFog = 1.0 - exp(-fogDensity*fogDensity*d*d); }`,
      fragmentShader: `uniform sampler2D tex; uniform vec3 fogColor; varying vec3 vC; varying float vA; varying float vFog;
        void main(){ vec4 t = texture2D(tex, gl_PointCoord); gl_FragColor = vec4(mix(vC, fogColor, vFog), t.a * vA); if (gl_FragColor.a < 0.003) discard; }`,
    });
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }
  emit(p, v, color, size, life, grav = 0, drag = 0.5, alpha = 1) {
    let i = this.n < this.cap ? this.n++ : Math.floor(Math.random() * this.cap);
    this.pos.set([p.x, p.y, p.z], i * 3); this.vel.set([v.x, v.y, v.z], i * 3);
    this.col.set([color.r, color.g, color.b], i * 3);
    this.size[i] = size; this.life[i] = life; this.max[i] = life; this.grav[i] = grav; this.drag[i] = drag; this.alpha[i] = alpha;
    this.baseA = this.baseA || new Float32Array(this.cap); this.baseA[i] = alpha;
  }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        const j = --this.n;
        if (i !== j) {
          for (const a of [this.pos, this.vel, this.col]) { a[i * 3] = a[j * 3]; a[i * 3 + 1] = a[j * 3 + 1]; a[i * 3 + 2] = a[j * 3 + 2]; }
          for (const a of [this.size, this.life, this.max, this.grav, this.drag, this.alpha, this.baseA]) a[i] = a[j];
        }
        i--; continue;
      }
      const k = i * 3, d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[k] *= d; this.vel[k + 1] = this.vel[k + 1] * d - this.grav[i] * dt; this.vel[k + 2] *= d;
      this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
      if (this.pos[k + 1] < 0.02 && this.grav[i] > 0) { this.pos[k + 1] = 0.02; this.vel[k + 1] *= -0.2; this.vel[k] *= 0.5; this.vel[k + 2] *= 0.5; }
      const f = this.life[i] / this.max[i];
      this.alpha[i] = this.baseA[i] * Math.min(1, f * 3) * Math.min(1, (1 - f) * 8 + 0.2);
    }
    this.geo.setDrawRange(0, this.n);
    for (const k of ['position', 'color', 'size', 'alpha']) this.geo.attributes[k].needsUpdate = true;
  }
  clear() { this.n = 0; this.geo.setDrawRange(0, 0); }
}

const C = (r, g, b) => ({ r, g, b });

// Branching stone-crack decal painted once on a canvas.
let crackTex = null;
function getCrackTex() {
  if (crackTex) return crackTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  let seed = 7; const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const branch = (x, y, a, len, w) => {
    if (len < 4 || w < 0.4) return;
    const nx = x + Math.cos(a) * len, ny = y + Math.sin(a) * len;
    g.strokeStyle = 'rgba(8,6,5,0.95)'; g.lineWidth = w; g.lineCap = 'round';
    g.beginPath(); g.moveTo(x, y); g.lineTo(nx, ny); g.stroke();
    branch(nx, ny, a + (r() - 0.5) * 0.9, len * 0.75, w * 0.7);
    if (r() < 0.55) branch(nx, ny, a + (r() < 0.5 ? -1 : 1) * (0.5 + r() * 0.7), len * 0.55, w * 0.6);
  };
  for (let k = 0; k < 5; k++) branch(64, 64, (k / 5) * Math.PI * 2 + r(), 14 + r() * 10, 3.2);
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 22); grd.addColorStop(0, 'rgba(20,16,12,0.55)'); grd.addColorStop(1, 'rgba(20,16,12,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  crackTex = new THREE.CanvasTexture(c); crackTex.colorSpace = THREE.SRGBColorSpace;
  return crackTex;
}

// Fading cracked footprints the Reliquary leaves wherever it moved unseen.
class CrackDecals {
  constructor(scene, cap = 72) {
    this.cap = cap; this.i = 0; this.time = 0;
    const geo = new THREE.PlaneGeometry(1, 1); geo.rotateX(-Math.PI / 2);
    this.birth = new Float32Array(cap).fill(-999);
    geo.setAttribute('aBirth', new THREE.InstancedBufferAttribute(this.birth, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2,
      uniforms: { tex: { value: getCrackTex() }, uTime: { value: 0 }, uLife: { value: 14 }, fogColor: { value: scene.fog ? scene.fog.color : new THREE.Color(0x464e5c) }, fogDensity: { value: scene.fog ? scene.fog.density : 0.03 } },
      vertexShader: `attribute float aBirth; varying vec2 vUv; varying float vA; varying float vFog; uniform float uTime, uLife, fogDensity;
        void main(){ vUv = uv; float age = uTime - aBirth; vA = clamp(1.0 - age / uLife, 0.0, 1.0) * clamp(age * 4.0, 0.0, 1.0);
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
          float d = -mv.z; vFog = 1.0 - exp(-fogDensity * fogDensity * d * d); }`,
      fragmentShader: `uniform sampler2D tex; uniform vec3 fogColor; varying vec2 vUv; varying float vA; varying float vFog;
        void main(){ vec4 t = texture2D(tex, vUv); float a = t.a * vA * (1.0 - vFog); if (a < 0.01) discard; gl_FragColor = vec4(t.rgb, a); }`,
    });
    this.mat = mat;
    this.mesh = new THREE.InstancedMesh(geo, mat, cap);
    this.mesh.frustumCulled = false;
    const m = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001);
    for (let k = 0; k < cap; k++) this.mesh.setMatrixAt(k, m);
    scene.add(this.mesh);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3(); this._up = new THREE.Vector3(0, 1, 0);
  }
  add(x, z, yaw, size) {
    const k = this.i++ % this.cap;
    this._q.setFromAxisAngle(this._up, yaw); this._s.set(size, 1, size); this._p.set(x, 0.03, z);
    this._m.compose(this._p, this._q, this._s);
    this.mesh.setMatrixAt(k, this._m); this.mesh.instanceMatrix.needsUpdate = true;
    this.birth[k] = this.time; this.mesh.geometry.attributes.aBirth.needsUpdate = true;
  }
  update(dt) { this.time += dt; this.mat.uniforms.uTime.value = this.time; }
  clear() { this.birth.fill(-999); this.mesh.geometry.attributes.aBirth.needsUpdate = true; }
}

// Expanding ground ring of the Toll of Stone.
class Shockwaves {
  constructor(scene) {
    this.list = [];
    for (let k = 0; k < 3; k++) {
      const m = new THREE.Mesh(new THREE.RingGeometry(0.93, 1, 72), new THREE.MeshBasicMaterial({ color: 0xff8a4a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
      m.rotation.x = -Math.PI / 2; m.visible = false; scene.add(m);
      this.list.push({ m, t: 99, max: 24, dur: 0.8 });
    }
  }
  fire(pos, radius = 24, color = 0xff8a4a) {
    const w = this.list.find((x) => x.t >= x.dur) || this.list[0];
    w.t = 0; w.max = radius; w.m.position.set(pos.x, 0.25, pos.z); w.m.visible = true; w.m.material.color.setHex(color);
  }
  update(dt) {
    for (const w of this.list) {
      if (w.t >= w.dur) { w.m.visible = false; continue; }
      w.t += dt;
      const f = Math.min(1, w.t / w.dur), r = 0.5 + w.max * (1 - Math.pow(1 - f, 3));
      w.m.scale.set(r, r, r); w.m.material.opacity = (1 - f) * 0.6;
    }
  }
}
const rv = (s) => (Math.random() - 0.5) * s;

export class FX {
  constructor(scene, T) {
    this.soft = new Pool(scene, T.dust, 1600, THREE.NormalBlending);
    this.glow = new Pool(scene, T.glow, 300, THREE.AdditiveBlending, 1);
    this.cracks = new CrackDecals(scene);
    this.waves = new Shockwaves(scene);
    this.wispT = 0; this.ashT = 0;
  }
  dust(p, n = 10) {
    for (let k = 0; k < n; k++) this.soft.emit({ x: p.x + rv(0.5), y: p.y + rv(0.4), z: p.z + rv(0.5) }, { x: rv(0.6), y: -0.1 - Math.random() * 0.4, z: rv(0.6) }, C(0.55, 0.52, 0.47), 0.12 + Math.random() * 0.2, 1.5 + Math.random() * 2, 0.05, 0.8, 0.7);
  }
  splinters(p) {
    for (let k = 0; k < 40; k++) this.soft.emit({ x: p.x + rv(1.2), y: p.y + rv(0.4), z: p.z + rv(1.2) }, { x: rv(5), y: 1 + Math.random() * 3, z: rv(5) }, C(0.25, 0.17, 0.1), 0.05 + Math.random() * 0.06, 1.2 + Math.random(), 9, 0.4, 1);
    this.dust(p, 20);
  }
  blood(p) {
    for (let k = 0; k < 24; k++) this.soft.emit({ x: p.x + rv(0.2), y: p.y + rv(0.3), z: p.z + rv(0.2) }, { x: rv(3), y: Math.random() * 2, z: rv(3) }, C(0.28, 0.02, 0.02), 0.04 + Math.random() * 0.05, 0.8 + Math.random() * 0.6, 9, 0.6, 1);
  }
  sink(p) {
    for (let k = 0; k < 60; k++) this.soft.emit({ x: p.x + rv(2), y: 0.2 + Math.random() * 2.5, z: p.z + rv(2) }, { x: rv(0.4), y: 0.6 + Math.random(), z: rv(0.4) }, C(0.03, 0.03, 0.03), 0.3 + Math.random() * 0.4, 2 + Math.random() * 2, -0.1, 0.3, 0.8);
  }
  crack(x, z, yaw, size = 0.9) { this.cracks.add(x, z, yaw, size); }
  shockwave(pos, radius, color) { this.waves.fire(pos, radius, color); this.dust(pos.clone ? pos.clone().setY(0.4) : pos, 40); }
  debris(p) {
    for (let k = 0; k < 50; k++) this.soft.emit({ x: p.x + rv(0.8), y: 0.4 + Math.random() * 2, z: p.z + rv(0.8) }, { x: rv(6), y: 1 + Math.random() * 4, z: rv(6) }, C(0.38, 0.37, 0.35), 0.06 + Math.random() * 0.1, 1.4 + Math.random(), 9, 0.3, 1);
    this.dust({ x: p.x, y: 1.2, z: p.z }, 40);
  }
  splash(p) {
    for (let k = 0; k < 40; k++) this.glow.emit({ x: p.x + rv(0.3), y: p.y + rv(0.2), z: p.z + rv(0.3) }, { x: rv(4), y: 1 + Math.random() * 3, z: rv(4) }, C(0.55, 0.75, 1.0), 0.06 + Math.random() * 0.08, 0.6 + Math.random() * 0.6, 7, 0.4, 0.9);
  }
  holyGlow(p) { this.glow.emit({ x: p.x, y: p.y, z: p.z }, { x: 0, y: 0, z: 0 }, C(0.6, 0.8, 1.0), 0.12, 0.25, 0, 0, 0.8); }
  ambient(dt, cam, pools) {
    this.ashT -= dt;
    while (this.ashT < 0) {
      this.ashT += 0.04;
      this.soft.emit({ x: cam.x + rv(30), y: 0.3 + Math.random() * 6, z: cam.z + rv(30) }, { x: 0.3 + rv(0.2), y: rv(0.15), z: 0.15 + rv(0.2) }, C(0.6, 0.6, 0.62), 0.03 + Math.random() * 0.03, 6 + Math.random() * 4, 0, 0, 0.5);
    }
    this.wispT -= dt;
    if (this.wispT < 0 && pools) {
      this.wispT = 0.35;
      const pl = pools[Math.floor(Math.random() * pools.length)];
      if (pl) this.glow.emit({ x: pl.x + rv(pl.r * 2), y: 0.3 + Math.random() * 1.2, z: pl.z + rv(pl.r * 2) }, { x: rv(0.3), y: 0.05 + Math.random() * 0.1, z: rv(0.3) }, C(0.35, 0.5, 0.75), 0.15 + Math.random() * 0.1, 4 + Math.random() * 3, 0, 0.1, 0.7);
    }
  }
  update(dt) { this.soft.update(dt); this.glow.update(dt); this.cracks.update(dt); this.waves.update(dt); }
  clear() { this.soft.clear(); this.glow.clear(); this.cracks.clear(); }
}
