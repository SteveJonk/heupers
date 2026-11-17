import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { toUnsplashUrl } from '@/lib/content';

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  /** Unsplash photo id behind the dark overlay. */
  image: string;
  /** Trail after "Home"; the last one is the current page. */
  crumbs: Crumb[];
  title: string;
  lead?: string;
  /** Bottom/top padding of the inner container; the pages differ slightly. */
  spacing?: string;
  overlay?: string;
  titleClassName?: string;
  /** Extra content under the title (buttons, a facts list). */
  children?: ReactNode;
};

/** The dark photo header ("paginakop") at the top of every subpage. */
export function PageHeader({
  image,
  crumbs,
  title,
  lead,
  spacing = 'pb-16 sm:pb-24',
  overlay = 'from-ink/95 via-ink/80 to-ink/40',
  titleClassName = 'max-w-3xl text-[2.4rem]',
  children,
}: PageHeaderProps) {
  return (
    <section className='relative isolate overflow-hidden bg-ink text-white'>
      <img src={toUnsplashUrl(image, 'w=2000&q=75')} alt='' className='hero-img absolute inset-0 -z-20 h-full w-full object-cover' />
      <div className={cn('absolute inset-0 -z-10 bg-linear-to-r', overlay)} />
      <div className={cn('mx-auto max-w-site px-5 pt-36 sm:px-8 sm:pt-48', spacing)}>
        <nav aria-label='Kruimelpad' className='rise eyebrow text-white/60'>
          <Link href='/' className='hover:text-white'>
            Home
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label}>
              <span className='mx-2 text-accent'>/</span>
              {crumb.href ? (
                <Link href={crumb.href} className='hover:text-white'>
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current='page' className='text-white/90'>
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        <h1 className={cn('rise mt-6 font-display font-light leading-[1.08] [animation-delay:.1s] sm:text-6xl sm:leading-none', titleClassName)}>{title}</h1>
        {lead && <p className='rise mt-6 max-w-2xl text-lg leading-relaxed text-white/85 [animation-delay:.2s]'>{lead}</p>}
        {children}
      </div>
    </section>
  );
}
