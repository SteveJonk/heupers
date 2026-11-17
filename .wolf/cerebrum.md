# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-11-17

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->
- Communicates in English; site copy is Dutch. Use client wording from the client doc verbatim where it exists.
- Wants a plan with open questions + defaults before multi-page builds; then "use defaults" is a common answer.
- Client chose the Signaaloranje scheme; nav dropdowns must open on click only.

## Key Learnings

- Next.js app conventions: components in `src/components/{layout,ui,sections,form}`, PascalCase files, named exports, single quotes, `cn()` from `@/lib/cn`, `@/` alias. Heupers content lives in `src/lib/content.ts`; button label class is `CAPS` in `src/lib/styles.ts`.
- Tailwind v3 CDN (prototype) vs v4 (app): in v3 a responsive `sm:text-5xl` resets line-height AFTER a base `leading-*`; in v4 `leading-*` always wins. Add `sm:leading-none` (5xl+) / `sm:leading-10` (4xl) to match. v4 named text sizes use ratio line-heights, so `text-2xl lg:text-[1.75rem]` needs `lg:leading-8`. Also v4: `bg-linear-*`, `backdrop-blur-sm` (= v3 `backdrop-blur`), important suffix `pl-11!`, buttons default cursor (fixed in base layer).
- CSS in `@layer components` loses to utilities. Rules that must beat a utility (e.g. `.hide-on-menu` vs `flex`) go unlayered.
- `src/lib/env.ts` throws without NEXT_PUBLIC_SANITY_PROJECT_ID; there is no app/.env. Use the `app` launch config (placeholder fallback). `npm ci` was needed (node_modules missing).
- The browser pane, when hidden, pauses requestAnimationFrame → React 19 never reveals streamed Suspense content there. Test Suspense/useSearchParams pages with headless Playwright instead.
- Parity check method: measure `main > *` heights + h1-h3 font-size/line-height in both the app (3000) and designs (8765) at 1280 and 375; identical numbers = pixel-matched layout.
- **Project:** heupers
- **Description:** A block-based website scaffold: Next.js 16 (App Router, React 19, Tailwind v4)
- Design prototype lives in `app/designs/` (static HTML, Tailwind CDN). Shared header/footer/nav/carousel live in `assets/site.js`; content in `assets/data.js`. Edit nav once in `NAV` in site.js.
- Top-level `const` in a classic script is a global binding but NOT a `window` property: check `typeof VACATURES !== 'undefined'`, not `window.VACATURES`.
- The browser pane opens `file://` pages as data: snapshots, so relative assets don't load: use the `designs` launch config (python http.server on 8765).

## Do-Not-Repeat

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->
- [2026-11-17] In zsh, `python3 - <<EOF ... EOF` followed by a second `<<'CSS'` heredoc does NOT feed the second heredoc to python (zsh runs it through cat). Write the content to a file or append with `cat >> file <<'X'` instead.
- [2026-11-17] zsh does not word-split `$FILES`; pass file lists literally or use `${=FILES}`.
- [2026-11-16] Active-nav matching `item.page === sub` was true for every page when both were undefined. Guard with `item.page && …` / default `sub` to null.
- [2026-11-16] A grid with `gap-px bg-stone` plus horizontal padding shows stone-colored side bars; put the padding on a wrapper, not on the gap-px grid.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->
- [2026-11-17] Static conversion: `.reveal`/count-up via one global `ScrollEffects` client component (class-based, content visible without JS) instead of the template's `Reveal` wrapper (div-only, hidden without JS, different timing). Vacature filters live in the URL via `useSearchParams` + `history.replaceState` inside Suspense (fallback = unfiltered list, so static HTML lists all vacatures). `@next/next/no-img-element` turned off project-wide (plain <img> decision).
- [2026-11-17] Next.js conversion decisions (user): keep template UI ([slug], PageBuilder, blocks, SiteHeader/Footer, demo-content, old tokens) in place, static routes shadow it; vacature detail at /vacatures/senior-projectmanager-bedrijfsmatig-vastgoed; Unsplash images as plain <img> (no remotePatterns); install frontend:code-style plugin before building. No Sanity work in this step.
- [2026-11-16] Prototype header/footer injected synchronously by `site.header()`/`site.footer()` (currentScript.outerHTML) instead of duplicating markup in 8 files: one source of truth while iterating; maps to `<Header>`/`<Footer>` components in Next.js.
