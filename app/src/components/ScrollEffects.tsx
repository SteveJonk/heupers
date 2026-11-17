'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * The design's scroll-reveal (`.reveal` -> `.in`) and count-up (`data-countup`),
 * re-attached on every route. Content stays visible without JS: `.reveal` only
 * hides while `<html>` has the `js` class.
 */
export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.reveal:not(.in)').forEach((element) => revealObserver.observe(element));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => revealObserver.disconnect();

    const countObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          countObserver.unobserve(entry.target);
          const element = entry.target as HTMLElement;
          const end = Number(element.dataset.countup);
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / 1400);
            element.textContent = String(Math.round(end * (1 - Math.pow(1 - progress, 3))));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }),
      { threshold: 0.6 },
    );
    document.querySelectorAll('[data-countup]').forEach((element) => countObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
