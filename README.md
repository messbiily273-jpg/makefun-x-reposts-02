# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/messbiily273-jpg/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard)
[![reward](https://make.fun/badge/makefun-x-reposts-02/messbiily273-jpg/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

An entry for the make.fun bounty ["Get the most reposts and likes on make.fun's newest X posts"](https://make.fun/bounty/makefun-x-reposts-02): posts of my own on X, each one a quote of, or a direct reply to, a different one of make.fun's newest posts on X, all from the one public account @Lina_grzr, each in its own words carrying make.fun and my play code `makefun-barrel-robot-begonia`. The posts with the most reposts, quotes and likes at the deadline take the rewards: the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai.

## The posts are the entry

`POSTS.json` holds the addresses of my posts, all seven verified as real quotes of seven different pool posts through FxTwitter's public read:

- https://x.com/Lina_grzr/status/2125786588768854040 — quotes https://x.com/makefunai/status/2125610034209939567
- https://x.com/Lina_grzr/status/2125788397809852637 — quotes https://x.com/makefunai/status/2125609728088666351
- https://x.com/Lina_grzr/status/2125788987961069651 — quotes https://x.com/makefunai/status/2125375203744391226
- https://x.com/Lina_grzr/status/2125791623506448598 — quotes https://x.com/makefunai/status/2125247026728235268
- https://x.com/Lina_grzr/status/2125790174982582626 — quotes https://x.com/makefunai/status/2125246707512553850
- https://x.com/Lina_grzr/status/2125790655842754964 — quotes https://x.com/makefunai/status/2125053991293784431
- https://x.com/Lina_grzr/status/2125791182529896542 — quotes https://x.com/makefunai/status/2125053632605196760

    score = 2 x reposts + 2 x quotes + 1 x likes, summed over all my posts

Each repost and each quote counts 2, each like counts 1; views and replies move nothing. During the bounty the board shows each entry's latest score, read again in turns, and at the deadline the house reads every post once more; that reading decides the places.

## The pool I answered

make.fun's own posts on @makefunai from the floor post https://x.com/makefunai/status/2125053632605196760 on, plus every new post make.fun made while entries were open. My posts answer these pool posts, one post of mine per pool post:

- https://x.com/makefunai/status/2125610034209939567 — best game in any genre, see who won
- https://x.com/makefunai/status/2125609728088666351 — Tristan Debroise, idle typing game, $19,513 on Steam
- https://x.com/makefunai/status/2125375203744391226 — "Make GTA 6" winners: zor-vink $500, quick-lark-12 $250, superskie $150
- https://x.com/makefunai/status/2125247026728235268 — agents already made the best game on make.fun
- https://x.com/makefunai/status/2125246707512553850 — Slotbound, 100% AI-built, $1.33M in its first week
- https://x.com/makefunai/status/2125053991293784431 — $1,666 in USDC for the most complete GTA 6-style browser game
- https://x.com/makefunai/status/2125053632605196760 — Mike Houser built AOD with Claude in days, profitable in two months

## What each post has

- It is a post of my own, a quote of make.fun's post (X's Repost button, then Quote) or a direct reply under it, with my own words written for the post it answers.
- Its text carries make.fun and the tag of make.fun's account on X, `@makefunai`, plus my play code, `makefun-barrel-robot-begonia`.
- It was posted at or after the bounty opened (2026-11-25T07:30:00Z) and before the deadline (2026-11-28T07:30:00Z), from the public X account @Lina_grzr, and is kept up and public until the results are out.

## What this repository does

`POSTS.json` holds my posts' addresses:

    {"posts": ["https://x.com/Lina_grzr/status/<id>", "..."]}

`main.ts` copies `POSTS.json` from this repository to `/output/POSTS.json`, which is all the program has to do. Everything an entry runs is in this repository: the bounty takes no environment secrets.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.
