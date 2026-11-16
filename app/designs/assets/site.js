/* ==================================================================
   Heupers — gedeelde layout en gedrag voor alle design-pagina's.
   Laden in <head> direct NA de Tailwind CDN. In de pagina:
     <body data-page="home">  <script>site.header()</script> ... <script>site.footer()</script>
   In Next.js wordt dit: tailwind.config + <Header>/<Footer>-componenten.
   ================================================================== */
document.documentElement.classList.add('js');

/* Design tokens — 1-op-1 de tailwind.config van de Next.js-site */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Waarden staan in :root (zie assets/site.css)
        ink: 'rgb(var(--ink) / <alpha-value>)',                 // tekst, donkere vlakken
        paper: 'rgb(var(--paper) / <alpha-value>)',             // lichte sectie-achtergrond
        stone: 'rgb(var(--stone) / <alpha-value>)',             // lijnen, randen
        muted: 'rgb(var(--muted) / <alpha-value>)',             // secundaire tekst
        accent: 'rgb(var(--accent) / <alpha-value>)',           // accent-vlak, altijd met ink-tekst
        'accent-soft': 'rgb(var(--accent-soft) / <alpha-value>)', // hover, labels op donker
        'accent-deep': 'rgb(var(--accent-deep) / <alpha-value>)'  // accent als tekst op licht
      },
      fontFamily: {
        display: ['Jost', 'Futura', 'Avenir Next', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      maxWidth: { site: '76rem' }
    }
  }
};

const site = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const tel = t => 'tel:+31' + t.replace(/\D/g, '').replace(/^0/, '');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const LOGO = `<g> <path d="M950.53,175.68l-37.32.74-39.98-65.41-22.63-.05v65.38s-33.47-.02-33.47-.02V3.78s69.58.25,69.58.25c13.77.05,26.31,5.1,36.93,13.07,11.16,9.51,16.61,22.57,17.1,37.11.78,23.32-12.48,43.16-35.65,50.91l45.43,70.57ZM884.95,81.9c14.67-1.09,23.71-13.12,22.98-26.1-.73-12.99-10.37-23.4-24.51-23.52l-32.8-.27v50.32s34.33-.44,34.33-.44Z"/> <polygon points="0 176.35 1.12 4.01 34.17 4.05 34.19 71.78 106.15 71.79 106.16 4 139.63 4.07 139.64 176.33 106.15 176.34 106.13 101.79 34.18 101.82 34.2 176.3 0 176.35"/> <path d="M471.52,4.04l.03,108.1c-.8,30-15.52,55.46-44.22,64.85-39.25,12.84-86.25-1.98-96.26-45.13l-2.46-19.71.02-108.15,33.61-.06.26,113.21c.03,11.05,5.64,21.91,14.51,27.65,13.25,8.58,30.64,8.56,44.18,1.16,10.5-5.74,14.96-16.25,16.52-27.96l-.02-114.15,33.86.19Z"/> <path d="M783.42,176.59c-5.52.85-10.57,1.01-15.98-.33l-100.4-.07-.02-172.27,112.03-.05-.05,28.21-78.76.03-.07,41.52,71.05.02.06,28.63-71.13.05.06,44.94,83.38-.03-.16,29.35Z"/> <polygon points="297.31 176.61 181.01 176.21 180.94 4.01 292.99 3.93 293.01 32.05 214.23 32.16 214.16 73.64 285.02 73.62 284.83 102.25 214.15 102.36 214.25 147.25 297.57 147.23 297.31 176.61"/> <path d="M1101.63,145.4c-13.15,40.11-78.78,47.02-112.06,19.84-7.72-6.3-13.54-13.88-18.65-22.6l26.6-16.38c9.31,18.76,27.88,27.67,47.77,25.79,15.58-1.47,27.76-11.29,26.03-24.81-3.02-23.59-42.38-18.87-70.85-33.75-16.23-8.49-25.54-24.01-24.92-42.29,1.23-36.55,36.03-55.04,71.81-50.54,21.6,2.72,40.23,14.55,51.32,33.82l-24.43,17.31c-11.01-19.81-34.51-28.41-54.82-18.82-5.44,2.57-9.15,8.04-10.25,12.63-1.53,6.38-.25,13.13,4.73,17.42,5.13,4.42,12.04,6.52,18.65,8.25l34.9,9.16c28.6,7.5,43.78,35.68,34.18,64.98Z"/> <path d="M619.98,98.21c-10.66,9.61-24.39,15.27-38.49,15.43l-35.93.39-.02,62.3h-33.38s-.02-172.5-.02-172.5h67.43c8.85-.01,17.19,2.22,25.29,5.15,19.94,8.08,31.65,26.72,31.5,48.29-.1,15.41-4.41,30.17-16.37,40.95ZM600.21,71.38c4.4-9.58,3.78-19.74-1.44-28.36-5.55-6.91-13.96-10.96-23.2-10.96h-30.04s0,52.55,0,52.55l31.04-.14c9.77-.04,18.31-4.89,23.64-13.09Z"/> <polygon points="76.53 240.87 86.8 241.18 70.1 301.7 58.32 301.68 44.37 256.33 30.02 301.69 18.15 301.65 1.3 240.95 11.78 240.76 24.49 288.58 39.45 240.99 49.18 240.88 63.92 288.76 76.53 240.87"/> <polygon points="392.57 301.62 384.14 301.68 350.58 257.32 350.19 301.75 341.04 301.68 341.04 240.84 349.44 240.77 382.7 284.34 383.34 240.86 392.59 240.93 392.57 301.62"/> <path d="M465.2,276.71l-18.07-.08.04-7.89,27.04-.05-.05,24.32c-12.29,10.77-30.12,13.39-44.52,5.14-9.27-5.32-13.36-15.51-13.71-25.84-.63-18.91,13.97-33.02,32.72-32.25,9.65.4,18.51,3.67,24.08,12.32l-7.46,5.07c-6.14-8.51-16.15-10.85-25.86-7.37-8.75,3.14-13.89,11.94-13.75,22.13.18,12.86,9.68,23.01,23.06,22.35,5.92-.29,11.62-2.75,16.51-5.88l-.02-11.97Z"/> <path d="M571.76,287.73l13.74,13.93-11.46.08-7.54-7.66c-10.68,11.97-31.33,11.27-36.93.37-5.37-10.44-.24-21.43,10.23-26.81-6.09-5.34-7.87-12.27-5.45-18.33,2.57-6.45,9.1-9.55,16.31-8.98,5.6.44,10.37,3.35,12.37,8.05s1.71,11.08-2.73,14.63l-7.72,6.15,13.27,12.63,4.68-11.9,8.48.03c-1.82,6.6-3.34,10.61-7.24,17.81ZM554.99,257.32c1.41-3.15.35-6.77-1.75-8.28-1.69-1.22-6.07-1.27-8.18-.2-1.83.93-3.37,4.23-3.03,7.16.27,2.27,2.75,6.01,4.63,7.43,3.23-.33,6.92-2.97,8.33-6.11ZM560.93,288.04l-15.17-14.71c-3.47.73-7.06,4.04-8.17,6.7-1.6,3.83-1.7,9.25,1.38,11.8,6.74,5.58,16.72,3.39,21.96-3.79Z"/> <path d="M205.35,301.8l-14.98-23.81-9.53-.18-.06,23.92-9.63-.04-.02-60.86,24.77.27c9.07.1,16.15,7.03,17.14,14.94,1.16,9.15-3.37,17.22-13.19,20.12l16.61,25.36-11.12.28ZM193.1,269.24c7.05-.15,10.73-4.62,10.5-10.49-.2-5.2-3.93-9.61-10.05-9.69l-12.7-.17.04,20.6,12.21-.25Z"/> <polygon points="733.18 274.51 706.19 274.54 706.2 293.72 736.58 293.73 736.61 301.71 696.87 301.75 696.84 240.9 736.34 240.9 736.37 248.86 706.2 248.94 706.25 266.24 733.28 266.27 733.18 274.51"/> <polygon points="144.59 274.25 117.87 274.54 117.59 293.74 148.08 293.77 148.05 301.71 108.08 301.73 108.07 240.93 148 240.87 147.8 248.84 117.84 249.01 117.72 266.2 144.57 266.3 144.59 274.25"/> <polygon points="853.49 274.3 826.65 274.38 826.54 293.69 857.12 293.78 857.06 301.74 817.15 301.74 817.1 240.84 857.03 241.02 856.99 248.85 826.55 248.96 826.69 266.19 853.55 266.3 853.49 274.3"/> <polygon points="1092.15 274.42 1065.45 274.5 1065.47 293.76 1095.55 293.71 1095.62 301.7 1055.71 301.76 1055.67 240.93 1095.51 240.88 1095.61 248.89 1065.58 248.95 1065.44 266.25 1092.12 266.28 1092.15 274.42"/> <path d="M926.64,283.61l8.48,4.55c-5.89,9.98-15.5,14.23-26.48,14.74-18.58.86-32.86-13.06-32.57-31.69.3-18.89,15.7-32.91,34.64-31.14,10.09.94,18.88,5.67,23.86,14.86l-8.23,4.3c-5.04-8.95-15-12.5-24.7-9.83-9.29,2.55-15.43,11.46-15.48,21.82-.05,10.51,5.6,19.45,15.03,22.28,9.78,2.94,19.94-.14,25.44-9.89Z"/> <path d="M664.28,301.45c-12.12,4.07-27.01-.18-31.89-11.72l7.61-4.5c4.26,8.42,13.87,12.12,22.44,7.84,2.9-1.44,4.79-5.29,4.55-8.28-.26-3.28-3.16-6.32-6.61-7.42l-15.2-4.86c-5.9-1.89-9.94-7.24-10.7-12.52-.87-6.04,1.13-11.83,6.22-15.68,9.64-7.29,27.73-5.37,33.57,6.74l-7.2,5.16c-3.7-7.43-12.14-10.22-19.64-6.01-2.26,1.27-3.67,4.87-3.45,7.55.19,2.32,2.94,5.52,5.72,6.4l14.39,4.6c7.56,2.42,12.24,8.84,12.27,15.98s-3.92,13.98-12.09,16.72Z"/> <polygon points="275.2 240.99 285.59 240.89 262.38 301.69 251.32 301.63 228.26 240.95 239.01 240.86 256.91 289.95 275.2 240.99"/> <polygon points="979.54 301.64 969.99 301.65 969.95 248.95 951.02 248.89 951.12 240.87 999 240.88 998.7 248.83 979.58 249.05 979.54 301.64"/> <polygon points="797 293.67 796.58 301.7 759.99 301.73 760.01 240.85 769.57 240.94 769.55 293.64 797 293.67"/> <polygon points="1029.87 301.72 1020.02 301.61 1020.02 240.85 1029.88 240.97 1029.87 301.72"/> <path d="M315.01,301.21c-3.23.45-6.32.45-9.51.14l-.04-60.11,9.37-.09.18,60.06Z"/> </g>`;
  const icon = {
    pin: '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    clock: '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    bag: '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3.5" y="7.5" width="17" height="12" rx="1"/><path d="M9 7.5V5.5h6v2"/></svg>',
    euro: '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17 6.5A6.5 6.5 0 1 0 17 17.5M4.5 10.5h9m-9 3h9"/></svg>',
    building: '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 20.5V5.5l8-2v17M12 8.5l8 2.5v9.5M2.5 20.5h19M7 8h2m-2 3.5h2M7 15h2m6-1.5h2m-2 3.5h2"/></svg>',
    arrow: '<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
    arrowSm: '<svg class="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
    phone: '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    mail: '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    chevron: '<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    quote: '<svg class="h-9 w-9 text-accent" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 7C7.5 9 4 13.4 4 19v6h9v-9H8.2c.4-3.3 2.4-5.8 5.8-7.2zm15 0c-5.5 2-9 6.4-9 12v6h9v-9h-4.8c.4-3.3 2.4-5.8 5.8-7.2z"/></svg>',
    linkedin: '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5Z"/></svg>'
  };

  /* ---- Navigatie (één bron voor desktop, mobiel en footer) ---- */
  const NAV = [
    { label: 'Home', href: 'index.html', page: 'home' },
    { label: 'Vacatures', page: 'vacatures', items: [
      { label: 'Vacatures Bouw', href: 'vacatures.html?sector=Bouw', count: 'Bouw' },
      { label: 'Vacatures Vastgoed', href: 'vacatures.html?sector=Vastgoed', count: 'Vastgoed' },
      { label: 'Alle vacatures', href: 'vacatures.html', count: 'Alle', divider: true }
    ] },
    { label: 'Voor opdrachtgevers', href: 'opdrachtgevers.html', page: 'opdrachtgevers' },
    { label: 'Over ons', page: 'over', items: [
      { label: 'Over Heupers', href: 'over-ons.html', page: 'over-ons' },
      { label: 'Onze werkwijze', href: 'werkwijze.html', page: 'werkwijze' }
    ] },
    { label: 'Contact', href: 'contact.html', page: 'contact' }
  ];
  const CONTACTS = [
    { naam: 'Jens Heupers', tel: '06 3989 0060' },
    { naam: 'Marc Heupers', tel: '06 5477 7862' }
  ];
  const MAIL = 'info@heupers.nl';
  const btn = 'font-display text-[13px] font-medium uppercase tracking-[.16em]';

  function header() {
    const page = document.body.dataset.page;
    const sub = document.body.dataset.sub || null; // null: anders matcht undefined === undefined
    const isActive = n => n.page === page || (n.items || []).some(i => i.page && i.page === sub);
    const desktop = NAV.map((n, i) => n.items ? `
        <li class="dd relative">
          <button type="button" class="nav-link flex items-center gap-1.5${isActive(n) ? ' is-active' : ''}" aria-expanded="false" aria-controls="dd-${i}" data-dd>
            ${esc(n.label)} ${icon.chevron}
          </button>
          <div id="dd-${i}" class="dd-menu absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4">
            <ul class="border border-stone bg-white py-2 text-ink shadow-xl">
              ${n.items.map(it => `${it.divider ? '<li class="mx-5 my-1 border-t border-stone" aria-hidden="true"></li>' : ''}
              <li><a href="${it.href}" class="flex items-center justify-between px-5 py-3 hover:bg-paper${it.page && it.page === sub ? ' font-medium' : ''}"${it.page && it.page === sub ? ' aria-current="page"' : ''}>${esc(it.label)}${it.count ? ` <span class="text-xs text-muted" data-count="${it.count}"></span>` : ''}</a></li>`).join('')}
            </ul>
          </div>
        </li>` : `
        <li><a href="${n.href}" class="nav-link"${n.page === page ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`).join('');

    const mobile = NAV.map(n => n.items ? `
        <li class="py-3">
          <span class="eyebrow text-muted">${esc(n.label)}</span>
          <ul class="mt-2 flex flex-col gap-1 pl-4 text-base">
            ${n.items.map(it => `<li><a href="${it.href}" class="block py-2">${esc(it.label)}</a></li>`).join('')}
          </ul>
        </li>` : `
        <li><a href="${n.href}" class="block py-3">${esc(n.label)}</a></li>`).join('');

    document.currentScript.outerHTML = `
<header id="site-header" class="fixed inset-x-0 top-0 z-50">
  <div class="bar mx-auto flex max-w-site items-center justify-between gap-6 px-5 sm:px-8">
    <a href="index.html" class="shrink-0" aria-label="Heupers Werving & Selectie, naar de homepage">
      <svg viewBox="0 0 1104.51 303.01" fill="currentColor" class="logo h-9 w-auto sm:h-10" aria-hidden="true">${LOGO}</svg>
    </a>
    <nav aria-label="Hoofdmenu" class="hidden xl:block">
      <ul class="flex items-center gap-7 font-display text-[15px]">${desktop}
      </ul>
    </nav>
    <div class="flex items-center gap-3">
      <a href="stuur-je-cv.html" class="cta hidden items-center gap-3 border px-5 py-3 ${btn} transition hover:bg-white hover:text-ink sm:inline-flex">
        Stuur je cv
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>
      </a>
      <button type="button" id="menu-btn" class="grid h-11 w-11 place-items-center xl:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="Menu openen">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-stone bg-white text-ink xl:hidden">
    <nav aria-label="Mobiel menu" class="mx-auto max-w-site px-5 py-4 sm:px-8">
      <ul class="flex flex-col font-display text-lg">${mobile}
      </ul>
      <a href="stuur-je-cv.html" class="mt-4 flex items-center justify-center gap-3 bg-ink px-5 py-4 font-display text-sm font-medium uppercase tracking-[.16em] text-white">Stuur je cv</a>
    </nav>
  </div>
</header>`;
  }

  function footer() {
    const col = (title, links) => `
      <nav class="lg:col-span-2" aria-label="${title}">
        <p class="eyebrow text-accent-soft">${title}</p>
        <ul class="mt-5 space-y-3 text-sm text-white/80">
          ${links.map(([l, h]) => `<li><a href="${h}" class="hover:text-white">${l}</a></li>`).join('')}
        </ul>
      </nav>`;
    document.currentScript.outerHTML = `
<footer id="contact" class="bg-ink text-white">
  <div class="mx-auto max-w-site px-5 sm:px-8">
    <div class="reveal flex flex-col gap-8 border-b border-white/15 py-16 lg:flex-row lg:items-center lg:justify-between">
      <h2 class="max-w-xl font-display text-3xl font-light leading-tight sm:text-4xl">Klaar voor je volgende stap? Of op zoek naar versterking?</h2>
      <div class="flex flex-col gap-3 sm:flex-row">
        <a href="stuur-je-cv.html" class="inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 ${btn} text-ink transition hover:bg-accent-soft">Stuur je cv</a>
        <a href="contact.html" class="inline-flex items-center justify-center gap-3 border border-white/70 px-7 py-4 ${btn} transition hover:bg-white hover:text-ink">Neem contact op</a>
      </div>
    </div>

    <div class="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <svg viewBox="0 0 1104.51 303.01" fill="currentColor" class="h-10 w-auto" role="img" aria-label="Heupers Werving & Selectie">${LOGO}</svg>
        <p class="mt-6 max-w-xs text-sm leading-relaxed text-white/70">Familiebedrijf in werving &amp; selectie voor de bouw- en vastgoedsector, sinds 35 jaar.</p>
        <p class="mt-4 font-display text-sm text-accent-soft">Vertrouwd in mensen. Sterk in verbinding.</p>
      </div>
      ${col('Vacatures', [['Bouw', 'vacatures.html?sector=Bouw'], ['Vastgoed', 'vacatures.html?sector=Vastgoed'], ['Interim &amp; ZZP', 'vacatures.html?interim=1'], ['Stuur je cv', 'stuur-je-cv.html']])}
      ${col('Heupers', [['Over Heupers', 'over-ons.html'], ['Onze werkwijze', 'werkwijze.html'], ['Voor opdrachtgevers', 'opdrachtgevers.html'], ['Contact', 'contact.html']])}
      <address class="not-italic lg:col-span-4">
        <p class="eyebrow text-accent-soft">Contact</p>
        <ul class="mt-5 space-y-3 text-sm text-white/80">
          ${CONTACTS.map(c => `<li><a href="${tel(c.tel)}" class="hover:text-white">${c.naam} · ${c.tel}</a></li>`).join('')}
          <li><a href="mailto:${MAIL}" class="hover:text-white">${MAIL}</a></li>
          <li>Voorbeeldstraat 12, 1234 AB Plaatsnaam</li>
          <li><a href="#" class="inline-flex items-center gap-2 hover:text-white">${icon.linkedin} LinkedIn</a></li>
        </ul>
      </address>
    </div>

    <div class="flex flex-col gap-3 border-t border-white/15 py-8 text-xs text-white/60 sm:flex-row sm:justify-between">
      <p>© 2026 Heupers Werving &amp; Selectie · KvK 00000000</p>
      <ul class="flex gap-6">
        <li><a href="#" class="hover:text-white">Privacyverklaring</a></li>
        <li><a href="#" class="hover:text-white">Cookies</a></li>
      </ul>
    </div>
  </div>
</footer>`;
  }

  /* ---- Herbruikbare kaarten ---- */
  const VAC_IMG = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;
  const SECTOR_IMG = { Bouw: VAC_IMG('photo-1503387762-592deb58ef4e'), Vastgoed: VAC_IMG('photo-1487958449943-2429e8be8625') };

  const vacCard = (v, i, n, width = '') => `
  <a href="${v.url || 'vacature.html'}" data-sector="${esc(v.sector)}" role="group" aria-roledescription="vacature" aria-label="${i + 1} van ${n}: ${esc(v.titel)}"
     class="group flex shrink-0 snap-start flex-col border border-stone bg-white transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_12px_24px_-14px_rgba(31,33,35,.4)] ${width}">
    <div class="relative aspect-[4/3] overflow-hidden bg-stone">
      <img src="${v.img ? VAC_IMG(v.img) : SECTOR_IMG[v.sector]}" alt="" loading="lazy" class="h-full w-full object-cover transition duration-700 group-hover:scale-105">
      <span class="absolute left-3 top-3 flex gap-1.5">
        <span class="bg-white px-2.5 py-1 font-display text-[11px] font-medium uppercase tracking-[.16em] text-ink">${esc(v.sector)}</span>
        ${v.interim ? '<span class="bg-accent px-2.5 py-1 font-display text-[11px] font-medium uppercase tracking-[.16em] text-ink">Interim</span>' : ''}
      </span>
    </div>
    <div class="flex flex-1 flex-col gap-4 p-5">
      <h3 class="font-display text-[1.2rem] leading-snug">${esc(v.titel)}</h3>
      <ul class="space-y-2 text-sm text-muted">
        <li class="flex items-center gap-2.5">${icon.pin}${esc(v.locatie)}</li>
        <li class="flex items-center gap-2.5">${icon.clock}${esc(v.uren)}${v.type ? ' · ' + esc(v.type) : ''}</li>
        ${v.salaris ? `<li class="flex items-center gap-2.5">${icon.euro}${esc(v.salaris)}</li>` : ''}
      </ul>
      <span class="mt-auto flex items-center justify-between border-t border-stone pt-4 text-sm font-medium">
        Bekijk vacature
        <span class="transition group-hover:translate-x-1">${icon.arrow}</span>
      </span>
    </div>
  </a>`;

  const initials = n => n.split(' ').filter(w => w[0] === w[0].toUpperCase()).map(w => w[0]).slice(0, 2).join('');
  const refCard = (r, i, n) => `
  <figure role="group" aria-roledescription="referentie" aria-label="${i + 1} van ${n}: ${esc(r.naam)}, ${esc(r.bedrijf)}"
     class="flex w-[88%] shrink-0 snap-start flex-col border border-stone border-t-[3px] border-t-accent bg-paper p-7 sm:w-[calc((100%-1.25rem)/2)] sm:p-8 lg:w-[calc((100%-2.5rem)/3)]">
    <div class="flex items-start justify-between gap-4">
      ${icon.quote}
      <span class="bg-white px-2.5 py-1 font-display text-[11px] font-medium uppercase tracking-[.16em]">${esc(r.sector)}</span>
    </div>
    <blockquote class="mt-6 flex-1 font-display text-[1.2rem] font-light leading-relaxed sm:text-[1.3rem]"><p>${esc(r.quote)}</p></blockquote>
    <figcaption class="mt-6 flex items-center gap-4 border-t border-stone pt-6">
      <span class="grid h-12 w-12 shrink-0 place-items-center bg-ink font-display text-sm font-medium tracking-wider text-white" aria-hidden="true">${esc(initials(r.naam))}</span>
      <span class="min-w-0">
        <span class="block font-medium">${esc(r.naam)}</span>
        <span class="block text-sm text-muted">${esc(r.functie)} · ${esc(r.bedrijf)}</span>
      </span>
    </figcaption>
  </figure>`;

  const personCard = p => `
  <li class="reveal flex flex-col gap-5">
    <div class="aspect-[4/3] overflow-hidden bg-stone sm:aspect-[4/5]">
      <img src="https://images.unsplash.com/${p.img}?auto=format&fit=crop&crop=faces&w=700&h=875&q=70" alt="Portretfoto van ${esc(p.naam)}" loading="lazy" class="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0">
    </div>
    <div>
      <h3 class="font-display text-xl">${esc(p.naam)}</h3>
      <p class="mt-1 text-sm text-muted">${esc(p.rol)}</p>
    </div>
    <div class="flex flex-wrap gap-2 text-sm">
      <a href="${tel(p.tel)}" class="inline-flex items-center gap-2 border border-stone px-3.5 py-2.5 transition hover:border-ink">${icon.phone}${esc(p.tel)}</a>
      <a href="mailto:${esc(p.mail)}" class="inline-flex items-center gap-2 border border-stone px-3.5 py-2.5 transition hover:border-ink" aria-label="Mail ${esc(p.naam)}">${icon.mail}Mail</a>
    </div>
  </li>`;

  /* ---- Carrousel: pijlen, swipe, autoplay. Verwacht #<p>-carousel/-track/-controls/-progress/-play/-prev/-next ---- */
  function initCarousel(p, interval = 5000) {
    const $ = id => document.getElementById(`${p}-${id}`);
    const root = $('carousel'), track = $('track'), playBtn = $('play'), progress = $('progress'), controls = $('controls');
    const cards = [...track.children];
    const behavior = reduceMotion ? 'auto' : 'smooth';
    let playing = !reduceMotion, hovering = false, focused = false, inView = false;

    const stepSize = () => {
      const c = cards.find(c => !c.hidden);
      return c ? c.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0) : track.clientWidth;
    };
    const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const next = () => atEnd() ? track.scrollTo({ left: 0, behavior }) : track.scrollBy({ left: stepSize(), behavior });
    const prev = () => track.scrollLeft <= 4 ? track.scrollTo({ left: track.scrollWidth, behavior }) : track.scrollBy({ left: -stepSize(), behavior });

    function setPlaying(on) {
      playing = on;
      playBtn.querySelector('[data-icon="pause"]').classList.toggle('hidden', !on);
      playBtn.querySelector('[data-icon="play"]').classList.toggle('hidden', on);
      playBtn.setAttribute('aria-label', on ? 'Automatisch afspelen pauzeren' : 'Automatisch afspelen starten');
    }
    setPlaying(playing);

    $('next').addEventListener('click', () => { setPlaying(false); next(); });
    $('prev').addEventListener('click', () => { setPlaying(false); prev(); });
    playBtn.addEventListener('click', () => setPlaying(!playing));
    track.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') setPlaying(false); });
    root.addEventListener('mouseenter', () => hovering = true);
    root.addEventListener('mouseleave', () => hovering = false);
    root.addEventListener('focusin', () => focused = true);
    root.addEventListener('focusout', () => focused = root.contains(document.activeElement));
    new IntersectionObserver(([e]) => inView = e.isIntersecting, { threshold: .3 }).observe(root);
    setInterval(() => { if (playing && !controls.hidden && inView && !hovering && !focused && !document.hidden) next(); }, interval);

    /* Past alles in beeld? Dan geen pijlen, pauzeknop of voortgangslijn. */
    const updateProgress = () => {
      controls.hidden = track.scrollWidth <= track.clientWidth + 4;
      const max = track.scrollWidth;
      progress.style.width = max ? Math.min(100, (track.scrollLeft + track.clientWidth) / max * 100) + '%' : '100%';
    };
    track.addEventListener('scroll', updateProgress, { passive: true });
    addEventListener('resize', updateProgress);
    updateProgress();
    return { track, cards, updateProgress };
  }

  /* Demo-formulier: valideert native en toont daarna het bedankt-blok.
     ponytail: geen backend; koppel later aan een API-route of formulierdienst. */
  function demoForm(form, done) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.hidden = true;
      done.hidden = false;
      done.focus();
    });
  }

  /* ---- Gedrag dat elke pagina deelt ---- */
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('site-header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const setSolid = () => header.classList.toggle('is-solid', scrollY > 40 || menuBtn.getAttribute('aria-expanded') === 'true');
    addEventListener('scroll', setSolid, { passive: true });
    setSolid();
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.getAttribute('aria-expanded') !== 'true';
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
      mobileMenu.classList.toggle('hidden', !open);
      setSolid();
    });
    mobileMenu.addEventListener('click', e => { if (e.target.closest('a')) menuBtn.click(); });

    /* Dropdowns: alleen op klik; sluiten bij klik erbuiten, op een link of met Escape */
    const setDd = (b, open) => { b.parentElement.classList.toggle('open', open); b.setAttribute('aria-expanded', String(open)); };
    const ddBtns = [...document.querySelectorAll('[data-dd]')];
    ddBtns.forEach(b => b.addEventListener('click', () => {
      const open = !b.parentElement.classList.contains('open');
      ddBtns.forEach(o => setDd(o, false));
      setDd(b, open);
    }));
    document.addEventListener('click', e => ddBtns.forEach(b => {
      const dd = b.parentElement;
      if (!dd.contains(e.target) || (e.target.closest('a') && dd.contains(e.target))) setDd(b, false);
    }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') ddBtns.forEach(b => { if (b.parentElement.classList.contains('open')) { setDd(b, false); b.focus(); } }); });

    /* Aantallen vacatures in menu en filters */
    if (typeof VACATURES !== 'undefined') {
      const counts = { Alle: VACATURES.length, Interim: VACATURES.filter(v => v.interim).length };
      VACATURES.forEach(v => counts[v.sector] = (counts[v.sector] || 0) + 1);
      document.querySelectorAll('[data-count]').forEach(el => el.textContent = `(${counts[el.dataset.count] || 0})`);
    }

    /* Scroll-reveal en tellers */
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    if (!reduceMotion) {
      const cio = new IntersectionObserver(entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        const end = +e.target.dataset.countup, t0 = performance.now();
        const tick = t => {
          const p = Math.min(1, (t - t0) / 1400);
          e.target.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }), { threshold: .6 });
      document.querySelectorAll('[data-countup]').forEach(el => cio.observe(el));
    }
  });

  return { header, footer, esc, tel, icon, vacCard, refCard, personCard, initCarousel, demoForm, reduceMotion, CONTACTS, MAIL };
})();
