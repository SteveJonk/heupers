'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Mobile-only bar pinned to the bottom; slides away once the footer is in view. */
export function ApplyBar({ children }: { children: ReactNode }) {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        'hide-on-menu fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-stone bg-white/95 px-5 pt-3 pb-[calc(.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur-sm transition-transform duration-300 lg:hidden',
        footerVisible && 'translate-y-[110%]',
      )}
    >
      {children}
    </div>
  );
}
