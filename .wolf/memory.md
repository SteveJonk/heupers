# Memory

> Chronological action log. Hooks and AI append to this file automatically.
> Old sessions are consolidated by the daemon weekly.

## Session: 2026-11-16 13:17

| Time | Action | File(s) | Outcome | ~Tokens |
|------|--------|---------|---------|--------|
| 13:29 | Design: Signaaloranje vast (kiezer weg), dropdown alleen op klik, logo's -> referentie-slider (6 placeholder-quotes), carrousel-JS generiek (initCarousel) | app/designs/index.html | ok, browser-geverifieerd | ~25k |
| 13:58 | Built 7 design pages + shared assets (site.js/site.css/data.js), homepage refactored to shared layout, Jens/Marc contacts, menu renamed | app/designs/*.html, app/designs/assets/* | ok, browser-verified desktop+mobile | ~150k |
| 14:31 | Removed ZZP & Interim from nav; added Interim checkbox filter (+3 interim mock vacatures, Interim badge) | app/designs/assets/*, vacatures.html, index.html | ok, browser-verified | ~15k |

## Session: 2026-11-17 11:50

| Time | Action | File(s) | Outcome | ~Tokens |
|------|--------|---------|---------|--------|
| 11:56 | Planned Next.js conversion; paused for code-style plugin install | .wolf/STATUS.md, .wolf/cerebrum.md | plan approved | ~2k |
| 12:20 | Static Next.js conversion of 8 design pages (routes, theme, Header/Footer, cards, carousel, filters, demo forms); parity verified at 1280/375 + Playwright interaction test | app/src/**, globals.css, layout.tsx, eslint.config.mjs, .claude/launch.json | done, typecheck+lint clean, 8 routes static | ~60k |
