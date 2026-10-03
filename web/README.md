# Hollowmoor (playable web build)

A finished, playable 1v4 asymmetric horror game for the browser: you and three AI teammates against **The Reliquary**, a saint's statue that cannot move while anyone is looking at it.

Everything is made from scratch in code. Nothing is downloaded at runtime except the optional Google Fonts:

| Asset | How it is made |
|---|---|
| **Textures** | Per-pixel procedural PBR (albedo, normal and roughness/metalness) for peat, mossy stone, weathered planks, bronze, iron, bark, cloth, statue stone and the weeping mask (`src/textures.js`) |
| **Models** | Jointed survivor rigs, the Reliquary (lathe-carved robe, peaked cowl, broken halo, spindly fingers), bells, pallets, Weeping Posts, lychgates, recursive dead trees, rocks, gravestones and grass tufts (`src/models.js`) |
| **Animation** | Procedural walk, run, crouch, crawl, ring, heal, vault, hang, carry and struggle poses. The Reliquary only changes pose while nobody is watching it |
| **Audio** | All synthesized with Web Audio: additive bell tolls, formant screams, filtered-noise wind, grinding stone, pallet slams, chains, peat gurgles, crows and the chase score (`src/audio.js`) |
| **World** | Seeded procedural parish: a ruined church, a graveyard, ruins, shacks, peat stacks, 7 bells, 6 posts, 2 gates and 13+ pallets. It changes every match (`src/world.js`) |
| **Rendering** | three.js with PCF soft shadows, exponential fog, a shader sky with the moon and clouds, layered ground mist, bloom, and a grading pass for vignette, grain, chromatic aberration and eyelid blinks |

## Play

* **Hosted:** open `dist/index.html` from any static web server, for example `npx serve dist`. You can also open the single-file `dist/hollowmoor.html` the same way.
* **Build from source:** run `npm install`, then `npm run build` (this writes `dist/`), then `npm run artifact` (this writes the single-file `dist/hollowmoor.html`).

## Controls
`WASD` move, mouse look, `Shift` sprint, `C`/`Ctrl` crouch, hold `E` or left mouse to ring/heal/unbind/open/shroud, `Space` to vault, drop pallets and hit toll checks, hold `R` to mend, `B` to blink on purpose, `A`/`D` alternating to wiggle free, `Esc` to pause.

## How a vigil works
Ring 5 of 7 Mourning Bells (watch for toll checks), open a Lychgate, and walk out before the moor rises. The Reliquary is stone while it is on your screen with clear line of sight. Watching it drains your Resolve until you blink. After it has been held still for a while it Laments and lunges harder when released. It plants Sentinel copies and can jump into any copy nobody is watching. Only the real one's relic smoulders. Shroud a Sentinel to seal it, or shroud the real one to blind it.

## Source map
`src/main.js` renderer, post-FX, input, camera, gaze system, match flow · `src/entities.js` survivors and teammate AI, bells, pallets, posts, gates · `src/killer.js` the Reliquary AI and Sentinels · `src/world.js` map generation, collision, line of sight and A* navigation · `src/ui.js` HUD, perks and toll checks · `src/fx.js` particles.
