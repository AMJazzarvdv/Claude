# Hollowmoor

An original asymmetric horror game (1 killer vs 4 survivors) built in **Unreal Engine 5**.
Its headline killer is **The Reliquary**, a saint's statue that can't move while it's watched. It wears down your eyes until you blink, and it can hop into any decoy statue nobody is watching.

See [`Docs/GameDesign.md`](Docs/GameDesign.md) for the full design: killers, survivors, perks, maps and the graphics plan.

## Getting started
1. Install Unreal Engine 5.4+ and a C++ toolchain (Visual Studio 2022 / Xcode / clang).
2. Right-click `Hollowmoor.uproject` → *Generate project files*, then build `HollowmoorEditor`.
3. In the editor, make Blueprint children of `HMSurvivor`, `HMKiller_Reliquary`, `HMSentinel` and `HMBell`, then assign the meshes, anim blueprints and the input mapping.

This repo holds the gameplay code and the design. The art (models, textures, animation, audio) still has to be authored or sourced. The design doc lists the pipeline.
