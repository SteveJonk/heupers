# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-11-16

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->
- Communicates in English; site copy is Dutch. Use client wording from the client doc verbatim where it exists.
- Wants a plan with open questions + defaults before multi-page builds; then "use defaults" is a common answer.
- Client chose the Signaaloranje scheme; nav dropdowns must open on click only.

## Key Learnings

- **Project:** heupers
- **Description:** A block-based website scaffold: Next.js 16 (App Router, React 19, Tailwind v4)
- Design prototype lives in `app/designs/` (static HTML, Tailwind CDN). Shared header/footer/nav/carousel live in `assets/site.js`; content in `assets/data.js`. Edit nav once in `NAV` in site.js.
- Top-level `const` in a classic script is a global binding but NOT a `window` property: check `typeof VACATURES !== 'undefined'`, not `window.VACATURES`.
- The browser pane opens `file://` pages as data: snapshots, so relative assets don't load: use the `designs` launch config (python http.server on 8765).

## Do-Not-Repeat

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->
- [2026-11-16] Active-nav matching `item.page === sub` was true for every page when both were undefined. Guard with `item.page && …` / default `sub` to null.
- [2026-11-16] A grid with `gap-px bg-stone` plus horizontal padding shows stone-colored side bars; put the padding on a wrapper, not on the gap-px grid.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->
- [2026-11-16] Prototype header/footer injected synchronously by `site.header()`/`site.footer()` (currentScript.outerHTML) instead of duplicating markup in 8 files: one source of truth while iterating; maps to `<Header>`/`<Footer>` components in Next.js.
