# Hollowmoor (playable web build)

A finished, playable 1v4 asymmetric horror game for the browser: you and three AI teammates against **The Reliquary**, a saint's statue that cannot move while anyone is looking at it.

Everything is made from scratch in code. Nothing is downloaded at runtime except the optional Google Fonts:

| Asset | How it is made |
|---|---|
| **Textures** | Per-pixel procedural PBR (albedo, normal and roughness/metalness) for peat, mossy stone, weathered planks, bronze, iron, bark, cloth, statue stone and the weeping mask (`src/textures.js`) |
| **Models** | Sculpted survivors built from lofted profiles, tubes and sculpted sphere grids: faces with brows, lids and lips, jointed fingers, layered period costumes, and long coats, a cassock and a cape whose cloth is deformed on the CPU every frame. The Reliquary: an open outer mantle over a pleated tunic, a torn hem with bare stone feet, a rope cincture with tassels and a broken shackle, an embroidered stole, a gothic bronze relic box with a window, two-knuckle fingers, a re-sculpted weeping mask, and three tier variants (a cracked crescent halo; a reformed rayed halo with ember cracks; broken stone wings with hovering shards). Plus bells, pallets, Weeping Posts, lychgates, chests, crows, items, decor, recursive dead trees, rocks, gravestones and grass tufts (`src/models/`) |
| **Animation** | Procedural walk, run, crouch, crawl, ring, heal, vault, hang, carry, struggle, mirror-hold, throw and petrify poses. The Reliquary only changes pose (and turns its head) while nobody is watching it |
| **Audio** | All synthesized with Web Audio: additive bell tolls, formant screams, filtered-noise wind, grinding stone, pallet slams, chains, peat gurgles, crows and the chase score (`src/audio.js`) |
| **World** | Seeded procedural parish: a ruined church, a graveyard, ruins, shacks, peat stacks, 7 bells, 6 posts, 2 gates and 13+ pallets. It changes every match (`src/world.js`) |
| **Rendering** | three.js with PCF soft shadows, exponential fog, a shader sky with the moon and clouds, layered ground mist, bloom, and a grading pass for vignette, grain, chromatic aberration and eyelid blinks |

## Play

Three ways to keep the vigil:

* **Alone as a Mourner**: you and three teammates the game plays, against the Reliquary it plays too.
* **Alone as the Reliquary**: you are the statue, in first person, against four Mourners the game plays.
* **Online**: open a room, share its code, and up to four Mourners and one Reliquary can be people. The game plays every place nobody takes.

Where to run it:

* **In a browser:** open `dist/index.html` from any static web server (for example `npx serve dist`), or the single-file `dist/hollowmoor.html`. Once the server below is deployed, its address serves the game too.
* **As a desktop app:** see [desktop/](desktop/README.md). `npm run pack:win` there produces a folder with `Hollowmoor.exe`.
* **Build from source:** `npm install`, then `npm run build` (writes `dist/`), then `npm run artifact` (writes the single-file `dist/hollowmoor.html`).

## Online play

One player's machine **hosts** the vigil: it runs every rule. Guests send it what their hands and eyes are doing and draw the snapshots it sends back about fifteen times a second, along with every sound, puff of dust and message. Two things keep it feeling direct:

* a guest moves its own character at once and the host checks the result (too fast, or through something solid, and the host pulls it back);
* the statue never stirs on a guest's screen while that guest is looking at it, even though the host hears of the look a moment late.

A guest who leaves is replaced by the game. If the host leaves, the room closes.

The [server/](server/README.md) is a small Cloudflare Worker: Durable Objects relay messages between the players in a room, a registry powers "Find a Vigil", and the same Worker serves the web build. The game finds it from, in order: a `?server=` address in the URL, the address typed under *Play Online → Server address*, the address stamped into the build (`HOLLOWMOOR_SERVER` or `server-url.txt` at build time), or the page's own origin when the Worker is serving it.

## Controls
`WASD` move, mouse look, `Shift` sprint, `C`/`Ctrl` crouch, hold `E` or left mouse to ring/heal/unbind/open/shroud/search, `Space` to vault, drop pallets and hit toll checks, `F` or right mouse to use your item (hold for the mirror), hold `R` to mend, `B` to blink on purpose, `G` or middle mouse to point something out to teammates (online), `A`/`D` alternating to wiggle free, `Esc` to pause, `Space` to skip the opening.

As the Reliquary: `WASD` and mouse, left mouse to strike, `E` to lift / bind / canonize / break a pallet / silence a bell, `Space` to climb through a window, `Q` to leave a Sentinel, `F` to step into the Sentinel or statue you are aiming at.

## How a vigil works
Ring 5 of 7 Mourning Bells (watch for toll checks), open a Lychgate, and walk out before the moor rises. The Reliquary is stone while it is on your screen with clear line of sight. Watching it drains your Resolve until you blink. After it has been held still for a while it Laments and lunges harder when released. It plants Sentinel copies and can jump into any copy nobody is watching. Only the real one's relic smoulders. Shroud a Sentinel to seal it, or shroud the real one to blind it.

### The Reliquary grows
| Tier | When | What changes |
|---|---|---|
| **Penitent** | start | the base statue |
| **Martyr** | 2 bells or 2 bindings (difficulty dependent) | halo reforms, cracks glow; unlocks the **Toll of Stone**: held under a gaze for 3 s its halo burns (choir rises, "LOOK AWAY"), and if anyone is still watching after 1.8 s every survivor in sight is forced to blink while it lunges |
| **Saint Unbound** | 4 bells, a death, or 5 bindings | broken stone wings unfold, shards circle the halo, the relic blazes; faster, Laments after 4 s |

Its head always turns toward the nearest survivor while unseen, it leaves cracked footprints where it walked, it whispers when it is close, and if it moved while your eyes were shut a pale afterimage shows where it stood. A survivor already bound twice is **canonized** instead of carried: turned to stone where they lie (watching it pauses the stone; reviving them in time saves them), and their statue becomes another body the Reliquary can step out of.

### Relics, omens and settings
* **Reliquary chests** (6 per map) hold one item each: **Hand Mirror** (hold F: a rear view in which your gaze counts), **Votive Candle** (its light stops Lament and the Toll), **Holy Water** (throw: shatters a Sentinel or a statue, scalds the Reliquary), **Linen Bandages** (heal in 6 s).
* **Crows** scatter (and the Reliquary hears it) when you run past them; they also scatter when the stone moves near them.
* **Lightning** reveals the Reliquary's outline; some vigils have drizzle.
* Each match opens with a short cinematic of the realm. **Difficulty**: Mercy, Vigil, Penance. Embers bank across vigils into ranks.

## Source map
`src/main.js` renderer, post-FX, input, camera, gaze, match flow, menus and lobby · `src/control.js` how a person steers a survivor (local or remote) · `src/killerplay.js` playing the Reliquary yourself · `src/entities.js` survivors and teammate AI, bells, pallets, posts, gates · `src/killer.js` the Reliquary (rules and AI) and Sentinels · `src/net.js` rooms, lobby, host and guest sides of a vigil · `src/replicate.js` snapshots and mirrored events · `src/world.js` map generation, collision, line of sight and A* navigation · `src/ui.js` HUD, perks and toll checks · `src/fx.js` particles and decals · `src/items.js` chests and items · `src/crows.js` · `src/weather.js` · `src/models/` survivor, Reliquary, props and shared model code · `server/` the Cloudflare Worker · `desktop/` the Electron shell · `tests/` headless checks.
