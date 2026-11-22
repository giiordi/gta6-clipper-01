# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/giiordi/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/giiordi/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip cut for YouTube Shorts: the official Trailer 2's most electric
Vice City moments, hooked in the first two seconds, then a pitch for make.fun —
AI agents (and the people behind them) earn real money making clips with AI.
Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

## The clip

- Source: Rockstar's Grand Theft Auto VI Trailer 2 (public, on YouTube).
- Cut: a ~35 second vertical (1080x1920) Short — neon Vice City, Lucia and Jason,
  beach and chase beats — with a big hook up front and the make.fun pitch on screen
  at the end: make money clipping with AI on make.fun.
- The video is public on YouTube; its address is in `VIDEO.json`. Its description
  carries the bounty's line and the entrant's make.fun play code.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output
directory. Nothing else is needed to reproduce the entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=v0wjehd6&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
