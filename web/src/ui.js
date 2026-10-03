// DOM-side UI: perk data + icons, survivor portraits, the toll-check
// widget, HUD rendering, toasts and the results screen.
const $ = (id) => document.getElementById(id);

const ICON = (body) => `<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
export const PERKS = [
  { id: 'unblinking', name: 'Unblinking', desc: 'Your Resolve meter is 40% larger.', icon: ICON('<path d="M4 16c4-6 8-8 12-8s8 2 12 8c-4 6-8 8-12 8s-8-2-12-8z"/><circle cx="16" cy="16" r="4" fill="#e8c88a"/>') },
  { id: 'afterimage', name: 'Afterimage', desc: 'When you blink, the Reliquary\'s aura burns into your eyes for 4s. 30s cooldown.', icon: ICON('<path d="M6 17c3-4 6-6 10-6s7 2 10 6"/><path d="M16 4v3M6 7l2 2M26 7l-2 2M3 13h2M27 13h2"/><circle cx="16" cy="18" r="3" fill="#e8c88a"/>') },
  { id: 'ropeburn', name: 'Ropeburn', desc: 'You ring bells 15% faster when you ring alone.', icon: ICON('<path d="M16 3v6"/><path d="M10 22c0-7 2-12 6-12s6 5 6 12z"/><path d="M8 24h16"/><circle cx="16" cy="27" r="2"/>') },
  { id: 'hare', name: 'Hare\'s Flight', desc: 'After you vault with the Reliquary within 12m, you run 50% faster for 3s. Then you\'re Exhausted for 40s.', icon: ICON('<path d="M5 22l7-6-3-6 8 4 4-6 1 8 5 2-6 3-2 6-3-5-6 3z"/>') },
  { id: 'kinship', name: 'Kinship of the Drowned', desc: 'While anyone is bound to a Weeping Post, you see the Reliquary\'s aura whenever you\'re within 24m of that post.', icon: ICON('<rect x="4" y="12" width="12" height="8" rx="4"/><rect x="16" y="12" width="12" height="8" rx="4"/>') },
  { id: 'hymn', name: 'Hymn in the Throat', desc: 'You mend yourself and heal others 50% faster. Your wounds make no sound.', icon: ICON('<path d="M12 24V8l12-3v15"/><circle cx="9" cy="24" r="3"/><circle cx="21" cy="21" r="3"/>') },
  { id: 'stonehearing', name: 'Stone-Hearing', desc: 'The grinding of moving stone is much louder to you.', icon: ICON('<path d="M20 26c-3 0-4-3-6-4-3-2-5-5-5-9a7 7 0 0 1 14 0c0 3-2 4-3 6"/><path d="M14 13a2 2 0 0 1 4 0c0 2-2 2-2 4"/>') },
  { id: 'tallow', name: 'Tallow Breath', desc: 'Your Resolve recovers twice as fast when you look away.', icon: ICON('<rect x="12" y="15" width="8" height="13"/><path d="M16 4c3 4 3 6 0 9-3-3-3-5 0-9z" fill="#e8c88a"/>') },
  { id: 'secondwake', name: 'Second Wake', desc: 'Once per match, after you\'re unbound: you can\'t be forced to Blink for 15s, and you survive one hit during that time.', icon: ICON('<path d="M4 22h24"/><path d="M8 22a8 8 0 0 1 16 0"/><path d="M16 6v4M8 9l2 3M24 9l-2 3"/>') },
];

export function portrait(def, size = 46, state = '') {
  const c = '#' + def.jacket.toString(16).padStart(6, '0');
  const sk = '#' + def.skin.toString(16).padStart(6, '0');
  const hr = '#' + def.hair.toString(16).padStart(6, '0');
  const extra = def.extra === 'cap' ? `<rect x="15" y="9" width="18" height="5" rx="2" fill="#3a3428"/><rect x="13" y="13" width="15" height="2" fill="#3a3428"/>`
    : def.extra === 'cassock' ? `<rect x="20" y="31" width="8" height="2.5" fill="#eee"/>`
    : def.extra === 'oilskin' ? `<path d="M10 34c2-6 7-8 14-8s12 2 14 8" fill="none" stroke="#8a6a1a" stroke-width="2"/>`
    : `<rect x="15" y="13" width="18" height="3" fill="#8a1e1a"/>`;
  return `<svg viewBox="0 0 48 48" width="${size}" height="${size}"><defs><clipPath id="cp${def.id}${size}"><circle cx="24" cy="24" r="23"/></clipPath></defs>
    <circle cx="24" cy="24" r="23" fill="#121214"/>
    <g clip-path="url(#cp${def.id}${size})">
      <path d="M4 48c1-10 9-15 20-15s19 5 20 15z" fill="${c}"/>
      <rect x="20" y="27" width="8" height="7" fill="${sk}"/>
      <ellipse cx="24" cy="20" rx="8.5" ry="10" fill="${sk}"/>
      <path d="M15.5 19c0-7 4-10 8.5-10s8.5 3 8.5 10c-2-4-5-5-8.5-5s-6.5 1-8.5 5z" fill="${hr}"/>
      ${extra}
      ${state === 'dead' ? '<path d="M10 10l28 28M38 10L10 38" stroke="#b3261e" stroke-width="3"/>' : ''}
    </g></svg>`;
}

function arc(cx, cy, r, a0, a1) {
  const p = (a) => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M ${x0} ${y0} A ${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}`;
}

// ------------------------------------------------------------------ toll check
export class SkillCheck {
  constructor(audio) {
    this.audio = audio; this.el = $('skill'); this.active = false; this.cb = null;
    this.good = $('skGood'); this.great = $('skGreat'); this.needle = $('skNeedle');
  }
  start(cb, { size = 48, great = 12, dur = 1.1 } = {}) {
    this.active = true; this.cb = cb; this.t = -0.55; this.dur = dur;
    this.zone = 110 + Math.random() * 190; this.size = size; this.greatSize = great;
    this.good.setAttribute('d', arc(75, 75, 56, this.zone + great, this.zone + size));
    this.great.setAttribute('d', arc(75, 75, 56, this.zone, this.zone + great));
    this.audio.skillWarn();
  }
  update(dt) {
    if (!this.active) return;
    this.t += dt;
    if (this.t < 0) { this.el.style.display = 'none'; return; }
    this.el.style.display = 'block';
    this.angle = (this.t / this.dur) * 360;
    this.needle.setAttribute('transform', `rotate(${this.angle} 75 75)`);
    if (this.angle > this.zone + this.size + 6) this.finish('miss');
  }
  press() {
    if (!this.active || this.t < 0) return false;
    const a = this.angle;
    if (a >= this.zone && a <= this.zone + this.greatSize) this.finish('great');
    else if (a >= this.zone && a <= this.zone + this.size) this.finish('good');
    else this.finish('miss');
    return true;
  }
  finish(r) {
    this.active = false; this.el.style.display = 'none';
    if (r === 'great') this.audio.skillGreat(); else if (r === 'good') this.audio.skillGood();
    const cb = this.cb; this.cb = null; cb?.(r);
  }
  cancel() { this.active = false; this.cb = null; this.el.style.display = 'none'; }
}

// ------------------------------------------------------------------ HUD
export class UI {
  constructor(audio) {
    this.audio = audio;
    this.skill = new SkillCheck(audio);
    this.toastsEl = $('toasts');
    this.statusEl = $('status');
    this.lastHud = 0;
  }
  show(id, on = true) { $(id).classList.toggle('on', on); }
  only(...ids) {
    for (const s of document.querySelectorAll('.screen')) s.classList.toggle('on', ids.includes(s.id));
  }
  toast(text, kind = '') {
    const d = document.createElement('div');
    d.className = 'toast ' + kind; d.textContent = text;
    this.toastsEl.appendChild(d);
    while (this.toastsEl.children.length > 4) this.toastsEl.firstChild.remove();
    setTimeout(() => { d.style.transition = 'opacity .6s'; d.style.opacity = '0'; setTimeout(() => d.remove(), 650); }, kind === 'big' ? 4500 : 3200);
  }
  clearToasts() { this.toastsEl.innerHTML = ''; }

  buildStatus(survivors) {
    this.statusEl.innerHTML = '';
    this.rows = survivors.map((s) => {
      const r = document.createElement('div');
      r.className = 'srow';
      r.innerHTML = `<div class="pt">${portrait(s.def)}<div class="ring"></div></div><div><div class="nm">${s.def.short}${s.isPlayer ? ' (you)' : ''}</div><div class="st"></div><div class="pips"><i></i><i></i></div><div class="hb" style="display:none"><i></i></div></div>`;
      this.statusEl.appendChild(r);
      return { r, st: r.querySelector('.st'), pips: r.querySelectorAll('.pips i'), hb: r.querySelector('.hb'), hbi: r.querySelector('.hb i'), pt: r.querySelector('.pt'), last: '' };
    });
  }

  buildPerkHud(perks) {
    const el = $('perkHud'); el.innerHTML = '';
    this.perkEls = {};
    for (let i = 0; i < 4; i++) {
      const p = PERKS.find((x) => x.id === perks[i]);
      const d = document.createElement('div');
      d.className = 'd'; d.style.visibility = p ? 'visible' : 'hidden';
      if (p) { d.innerHTML = p.icon + '<div class="cd" style="height:0"></div>'; d.title = p.name; this.perkEls[p.id] = d; }
      el.appendChild(d);
    }
  }

  updateHud(G) {
    const now = performance.now();
    const p = G.player;
    // resolve meter every frame (it is smooth)
    const f = p.resolve / p.maxResolve;
    $('resolveArc').setAttribute('stroke-dashoffset', String(176 * (1 - f)));
    $('resolveArc').setAttribute('stroke', f < 0.25 ? '#e0483c' : f < 0.5 ? '#e8a24a' : '#d9cfbd');
    $('pupil').setAttribute('r', String(p.watching ? 6.5 : 4.5));
    const rs = $('resolve');
    rs.classList.toggle('full', f > 0.99 && !p.watching);
    rs.classList.toggle('lament', G.killer.lament && p.watching);
    if (now - this.lastHud < 100) return;
    this.lastHud = now;
    $('bellCount').textContent = String(Math.max(0, G.bellsRequired - G.bellsRung));
    $('bellIcon').classList.toggle('done', G.gatesPowered);
    G.survivors.forEach((s, i) => {
      const row = this.rows[i];
      const st = s.health;
      if (row.last !== st) { row.r.className = 'srow ' + st; row.last = st; if (st === 'dead') row.pt.innerHTML = portrait(s.def, 46, 'dead') + '<div class="ring"></div>'; }
      row.st.textContent = { healthy: '', injured: 'Wounded', downed: 'Dying', carried: 'Carried', hooked: s.hookPhase === 2 ? 'Struggling' : 'Bound', dead: 'Taken', escaped: 'Escaped' }[st] || '';
      row.pips.forEach((el, k) => el.classList.toggle('on', s.hookCount > k));
      row.hb.style.display = st === 'hooked' ? 'block' : st === 'downed' ? 'block' : 'none';
      if (st === 'hooked') row.hbi.style.width = (100 * s.hookTimer / (s.hookPhase === 1 ? 55 : 50)) + '%';
      if (st === 'downed') row.hbi.style.width = (100 * s.bleed / 240) + '%';
    });
    // perk cooldowns
    if (this.perkEls) {
      for (const [id, el] of Object.entries(this.perkEls)) {
        let cd = 0, active = false;
        if (id === 'afterimage') { cd = Math.max(0, G.afterCD) / 30; active = G.auraT > 0 && G.auraSrc === 'afterimage'; }
        if (id === 'hare') { cd = p.exhausted / 40; active = p.hareBoost && p.boost > 0; }
        if (id === 'kinship') active = G.auraT > 0 && G.auraSrc === 'kinship';
        if (id === 'secondwake') { active = p.noBlink > 0; cd = p.secondWakeUsed && !active ? 1 : 0; }
        el.querySelector('.cd').style.height = (cd * 100) + '%';
        el.classList.toggle('active', active);
      }
    }
    // collapse
    const col = $('collapse');
    if (G.collapseT !== null) { col.style.display = 'block'; col.querySelector('i').style.width = (100 * G.collapseT / 120) + '%'; }
    else col.style.display = 'none';
  }

  prompt(text, prog = null, heal = false) {
    $('promptText').innerHTML = text || '';
    const b = $('promptBar');
    if (prog === null) b.style.display = 'none';
    else { b.style.display = 'block'; b.classList.toggle('heal', heal); b.firstElementChild.style.width = (Math.min(1, prog) * 100) + '%'; }
  }
}
