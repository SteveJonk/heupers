# STATUS — heupers

> Single source of truth for resuming work. Read this FIRST when starting a session.
> Update this file at the end of every work phase so the next `/clear` resumes in 1 read.
> Last updated: 2026-11-16

---

## ✅ Done

<!-- Move items here from "🚀 Next phase" when finished. Group by area. -->

**Static HTML design prototype (`app/designs/`)** — 2026-11-16
- Homepage: Signaaloranje color scheme only (picker removed), nav dropdowns click-only, client logos replaced by an opdrachtgevers reviews slider (6 placeholder reviews) placed below "Zo werken wij".
- Shared layout: `assets/site.js` (Tailwind config, header/footer injected via `site.header()` / `site.footer()`, nav, dropdowns, carousel, cards, demo forms), `assets/site.css`, `assets/data.js` (VACATURES, REFERENTIES, TEAM).
- New pages from client doc (`~/Downloads/Over Heupers Werving.docx.pdf`): `over-ons.html`, `werkwijze.html`, `opdrachtgevers.html`, `vacatures.html` (filter + search, featured real vacature), `vacature.html` (vacature 1: Senior Projectmanager Bedrijfsmatig Vastgoed, Next Level Development), `contact.html`, `stuur-je-cv.html` (prefill via `?vacature=`).
- Team/contact = Jens Heupers (06 3989 0060) and Marc Heupers (06 5477 7862), info@heupers.nl.

---

## 🚀 Next phase

**Goal:** Client review of the 8-page prototype, then convert the approved prototype to Next.js (skill: `tailwind-html-to-nextjs`), then CMS (`wire-sanity`).

### Open items / placeholders to replace
- Address + KvK number (footer, contact page) — not in client doc.
- Team roles and portrait photos for Jens & Marc (currently stock photos).
- Opdrachtgevers reviews (6, fabricated placeholders) — must be real before launch.
- 11 mock vacatures + 3 ZZP mock items on homepage; client doc has 24 more real vacatures (only #1 used, by request).
- Forms are demo-only (no backend).
- "ZZP & Interim" removed from main nav (2026-11-16); interim work is found via the Interim checkbox on `vacatures.html` (`?interim=1`, data flag `interim: true`). Footer + homepage ZZP section link there.

---

## 📁 Active architecture

- **Stack:** Next.js 16 app in `app/` (not yet built out); design prototype in `app/designs/` = static HTML + Tailwind CDN 3.4.17.
- **Key modules:** `app/designs/assets/site.js` (one source for nav/header/footer + shared JS), `assets/data.js` (content as it will come from Sanity).
- **Patterns:** each page = `<body data-page=".." data-sub="..">` + `<script>site.header()</script>` … `<script>site.footer()</script>`; colors via tokens ink/paper/stone/muted/accent/accent-soft/accent-deep.

---

## ⚠️ External blockers (don't block coding)

- _<env vars, secrets, external accounts, manual steps>_

---

## 🔧 Useful commands

```bash
# preview the designs (relative assets need a server; launch config "designs" in .claude/launch.json)
python3 -m http.server 8765 --directory app/designs
```

---

## 📚 References (read IF needed)

- `.wolf/cerebrum.md` — User Preferences + Do-Not-Repeat + Decision Log
- `.wolf/anatomy.md` — token-efficient file index
- `.wolf/buglog.json` — known bugs + fixes
