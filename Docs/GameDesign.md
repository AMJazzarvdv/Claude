# HOLLOWMOOR — Game Design Document

1 killer vs 4 survivors, asymmetric horror. Unreal Engine 5.4+. It's inspired
by the genre, but every system, character and perk here is original.

## Setting
Hollowmoor is a drowned parish where the church bells stopped ringing when the
village sank into the peat. Now the dead come back to the moor to ring them. Every
trial is a "Vigil" held in some part of the parish: the Sunken Nave, the Peat
Cutters' Rows, the Orphanage of St. Ebba, the Lantern Docks.

## Core loop
| Concept | What it does |
|---|---|
| **Mourning Bells** (7 per map, 5 needed) | Survivors pull the rope together. Toll checks are a rhythm minigame, and missing one cracks the bell and makes a loud noise. |
| **Weeping Posts** | Where the killer binds downed survivors. You have 3 stages: Bound, Sinking (into the peat), and Taken. |
| **Lychgates** | The exits. They open after 5 bells. Then the **Collapse** starts: a 120s timer during which the moor floods. |
| **The Drowned Hatch** | If only one survivor is left, a last-chance well appears. |
| **Resolve** | Every survivor has a gaze stamina meter. Some killers drain it. When it's empty you are forced to **Blink**. |

## Killers

### The Reliquary (headline killer, implemented in C++)
*A saint's statue carved to hold a relic that was never a saint's bone.*
- **Petrified Gaze:** It cannot move or attack while any survivor has any part of it on screen with line of sight (it checks head, torso, hand and foot sockets). When nobody is watching, it moves at 135% speed and makes no heartbeat. All you hear is stone grinding.
- **Resolve drain:** Watching it tires your eyes, and an empty meter forces a Blink. Survivors have to *take turns* watching, which is the core of the teamwork.
- **Lament:** If it stays frozen for 6s straight, it weeps dust and doubles the drain. A staring contest always ends with you blinking.
- **Power: Votive Sentinels.** Tap to plant one of up to 4 hollow saints. Hold for 1.5s to **Transfer** into any Sentinel no survivor is watching. The body you leave becomes a Sentinel, and nothing tells survivors which one is real.
- **Counterplay:** **Shroud** a Sentinel (by interacting with a cloth). That seals it for 45s.
- **Animation direction:** When frozen, its anims pause mid-pose, so each time you look back it's in a new, worse posture: reaching, mid-lunge, head turned toward you.

### The Tidewife
She drags a wake of black water behind her. Survivors who wade through it leave bubbling footprints. Her power, **Undertow**, makes her sink into any puddle and come up out of another puddle on her trail.

### The Bellwright
A blacksmith with a cast bell for a head. **Ring** sends out a sound cone that deafens survivors (no audio cues) and shows them to him on his hearing map. His perks interfere with bells.

### The Cartographer of Skin
He marks survivors with **Ink**. A survivor marked three times shows up on his map table, and he can **Fold** the map to shortcut between two marked locations.

## Survivors
- **Wren Ashdown**, a peat cutter. Starts with *Ropeburn*.
- **Father Ilias Moro**, a defrocked priest. Starts with *Unblinking*.
- **Juno Okafor**, a lighthouse keeper's daughter. Starts with *Afterimage*.
- **Teodor "Tey" Vas**, a grave-robber. Starts with *Light Fingers*.

## Perks (3 tiers each)
Implemented in C++:
- **Unblinking (S):** +20/30/40 max Resolve.
- **Afterimage (S):** When you Blink, you see the killer's aura for 3/4/5s. 40s cooldown.
- **Ropeburn (S):** +8/10/12% bell speed while you ring alone.
- **Vespers (K):** Whenever a bell is rung, every survivor Blinks for 0.6/0.8/1.0s.
- **Grave Patience (K):** Each bind makes bells 4/5/6% slower (max 50%).

Designed, ready to implement on `UHMPerk`:
- **Light Fingers (S):** Search chests 30% faster. Your first item each match is a Tallow Candle.
- **Kinship of the Drowned (S):** While you're bound, other survivors see your aura and the killer's.
- **Second Wake (S):** Once per match, getting off a Weeping Post grants 6s of immunity from Blinking.
- **Hymn in the Throat (S):** Humming while you heal muffles your groans and doubles heal speed. You can't do it if you're injured yourself.
- **Peat-Sense (S):** Footsteps within 16m leave visible ripples in water.
- **Saint's Patience (K):** If you stand still for 4s, the next hit is a one-shot. Works only once per survivor.
- **Censer Smoke (K):** Breaking a pallet leaves smoke that hides survivor scratch marks... and yours.
- **The Last Rite (K):** After 4 bells are rung, the killer sees the aura of any survivor whose Resolve is under 25%.
- **Moorlight (K):** Lanterns within 24m of you go out, making Resolve regenerate more slowly.

## Graphics target (how to get there in UE5)
"Looks like a AAA game" mostly comes down to content and lighting more than code.
`Config/DefaultEngine.ini` already turns on the AAA-style rendering features:
- **Lumen** global illumination and reflections, **Nanite** geometry, and **Virtual Shadow Maps**.
- **Volumetric fog** with a fine grid, for the moor's fog layer, plus TSR anti-aliasing.
- Fixed exposure (auto-exposure off), so dark areas stay dark.

Content pipeline:
- Photogrammetry: Quixel Megascans covers stone, peat and church interiors.
- MetaHuman for survivor faces.
- Reliquary statue: sculpt in ZBrush, then bring it in as a high-poly Nanite skeletal mesh (5.5+) or as rigid parts. Give it a moss and lichen layered material with a "dust tear" decal that shows during Lament.
- Niagara: stone dust while Lamenting, peat mist, and candle flicker.
- Post-processing: subtle chromatic aberration and film grain, plus a vignette that grows while your Resolve is low.

## Project layout
```
Source/Hollowmoor/
  Core/        GameMode, shared enums
  Characters/  CharacterBase, Survivor (Resolve/Blink/visibility), Killer base
  Killers/     Reliquary + Sentinel
  Perks/       UHMPerk, UHMPerkComponent, survivor & killer perks
  Objectives/  Mourning Bell
```
