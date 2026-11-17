'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { CheckIcon } from '@/components/ui/icons';

/** Thank-you block that replaces a demo form; takes focus when it appears. */
export function FormSuccess({ title, children }: { title: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => ref.current?.focus(), []);

  return (
    <div ref={ref} className='py-10 text-center outline-none' tabIndex={-1}>
      <span className='mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-ink'>
        <CheckIcon />
      </span>
      <h2 className='mt-6 font-display text-3xl font-light'>{title}</h2>
      {children}
    </div>
  );
}
