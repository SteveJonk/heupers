'use client';

import { useState } from 'react';

/** Native share sheet, or copy the link where there is none. */
export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const data = { title: document.title, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // The user closed the share sheet.
    }
  };

  return (
    <button type='button' className='inline-flex items-center gap-2 font-medium transition hover:text-accent-deep' onClick={share}>
      <svg className='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' aria-hidden='true'>
        <circle cx='18' cy='5.5' r='2.5' />
        <circle cx='6' cy='12' r='2.5' />
        <circle cx='18' cy='18.5' r='2.5' />
        <path d='m8.2 10.8 7.6-4m-7.6 6.4 7.6 4' />
      </svg>
      <span>{copied ? 'Link gekopieerd' : 'Delen'}</span>
    </button>
  );
}
