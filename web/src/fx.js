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
const rv = (s) => (Math.random() - 0.5) * s;

export class FX {
  constructor(scene, T) {
    this.soft = new Pool(scene, T.dust, 1600, THREE.NormalBlending);
    this.glow = new Pool(scene, T.glow, 300, THREE.AdditiveBlending, 1);
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
  update(dt) { this.soft.update(dt); this.glow.update(dt); }
  clear() { this.soft.clear(); this.glow.clear(); }
}
