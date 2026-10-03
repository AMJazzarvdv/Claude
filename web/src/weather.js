// Weather over the moor: lightning (with thunder that arrives late, and a
// flash that shows you the Reliquary's outline wherever it is) and drizzle.
import * as THREE from 'three';

export class Weather {
  constructor(G, scene, { rain = false } = {}) {
    this.G = G; this.rain = rain;
    this.flash = 0; this.next = 25 + Math.random() * 30; this.flashes = [];
    if (rain) {
      const n = G.quality === 'low' ? 1200 : 2600;
      const pos = new Float32Array(n * 6);
      this.drops = [];
      for (let i = 0; i < n; i++) this.drops.push({ x: (Math.random() - 0.5) * 40, y: Math.random() * 18, z: (Math.random() - 0.5) * 40, s: 13 + Math.random() * 5 });
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
      this.lines = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0x9fb2cc, transparent: true, opacity: 0.32, depthWrite: false }));
      this.lines.frustumCulled = false;
      scene.add(this.lines);
      this.pos = pos;
    }
  }

  strike() {
    const G = this.G;
    // a double or triple flicker
    this.flashes = [0, 0.12 + Math.random() * 0.08, Math.random() < 0.5 ? 0.35 : -1].filter((t) => t >= 0);
    this.flashT = 0;
    G.audio.thunder(150 + Math.random() * 700);
    G.onLightning();
  }

  update(dt, cam) {
    const G = this.G;
    this.next -= dt;
    if (this.next <= 0) { this.next = 30 + Math.random() * 45; this.strike(); }
    if (this.flashes.length) {
      this.flashT += dt;
      let f = 0;
      for (const t0 of this.flashes) { const a = this.flashT - t0; if (a >= 0) f = Math.max(f, Math.exp(-a * 9) * (a < 0.03 ? a / 0.03 : 1)); }
      this.flash = f;
      if (this.flashT > 1.5) { this.flashes = []; this.flash = 0; }
    }
    if (this.rain && cam) {
      const p = this.pos;
      for (let i = 0; i < this.drops.length; i++) {
        const d = this.drops[i];
        d.y -= d.s * dt; d.x -= 1.5 * dt;
        if (d.y < 0) { d.y = 14 + Math.random() * 4; d.x = (Math.random() - 0.5) * 40; d.z = (Math.random() - 0.5) * 40; }
        const x = cam.x + d.x, z = cam.z + d.z, y = d.y;
        p[i * 6] = x; p[i * 6 + 1] = y; p[i * 6 + 2] = z;
        p[i * 6 + 3] = x + 0.03; p[i * 6 + 4] = y + 0.45; p[i * 6 + 5] = z;
      }
      this.lines.geometry.attributes.position.needsUpdate = true;
    }
  }

  dispose(scene) { if (this.lines) { scene.remove(this.lines); this.lines.geometry.dispose(); } }
}
