'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { HeupersLogo } from '@/components/ui/HeupersLogo';
import { ArrowIcon, ChevronIcon, MenuIcon } from '@/components/ui/icons';
import { cn } from '@/lib/cn';
import { VACATURE_COUNTS } from '@/lib/content';
import { CAPS } from '@/lib/styles';

type NavItem = { label: string; href: string; count?: keyof typeof VACATURE_COUNTS; divider?: boolean };
type NavEntry = { label: string; href?: string; items?: NavItem[]; isActive: (pathname: string) => boolean };

/* One source for the desktop and the mobile menu. */
const NAV: NavEntry[] = [
  { label: 'Home', href: '/', isActive: (pathname) => pathname === '/' },
  {
    label: 'Vacatures',
    isActive: (pathname) => pathname.startsWith('/vacatures'),
    items: [
      { label: 'Vacatures Bouw', href: '/vacatures?sector=Bouw', count: 'Bouw' },
      { label: 'Vacatures Vastgoed', href: '/vacatures?sector=Vastgoed', count: 'Vastgoed' },
      { label: 'Alle vacatures', href: '/vacatures', count: 'Alle', divider: true },
    ],
  },
  { label: 'Voor opdrachtgevers', href: '/opdrachtgevers', isActive: (pathname) => pathname === '/opdrachtgevers' },
  {
    label: 'Over ons',
    isActive: (pathname) => pathname === '/over-ons' || pathname === '/werkwijze',
    items: [
      { label: 'Over Heupers', href: '/over-ons' },
      { label: 'Onze werkwijze', href: '/werkwijze' },
    ],
  },
  { label: 'Contact', href: '/contact', isActive: (pathname) => pathname === '/contact' },
];

const navLinkClass = cn(
  'relative after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-current',
  'after:transition-transform after:duration-250 hover:after:scale-x-100',
);

/** Only the vacature dropdown items have a query, so a plain path compare is enough. */
function isCurrentItem(pathname: string, item: NavItem) {
  return !item.count && item.href === pathname;
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef<Array<HTMLLIElement | null>>([]);
  const solid = scrolled || menuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Dropdowns open on click only; close on a click outside, on a link, or with Escape. */
  useEffect(() => {
    if (openDropdown === null) return;

    const dropdown = dropdownRefs.current[openDropdown];
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!dropdown?.contains(target) || target.closest('a')) setOpenDropdown(null);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      setOpenDropdown(null);
      dropdown?.querySelector('button')?.focus();
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openDropdown]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow] duration-300',
        solid
          ? 'bg-white text-ink shadow-[0_1px_0_var(--color-stone),0_8px_24px_-16px_rgba(27,28,28,.25)]'
          : 'text-white',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-site items-center justify-between gap-6 px-5 transition-[height] duration-300 sm:px-8',
          solid ? 'h-[4.5rem]' : 'h-[5.5rem]',
        )}
      >
        <Link href='/' className='shrink-0' aria-label='Heupers Werving & Selectie, naar de homepage' onClick={closeMenu}>
          <HeupersLogo className='h-9 w-auto sm:h-10' />
        </Link>

        <nav aria-label='Hoofdmenu' className='hidden xl:block'>
          <ul className='flex items-center gap-7 font-display text-[15px]'>
            {NAV.map((entry, index) => {
              const active = entry.isActive(pathname);

              if (!entry.items) {
                return (
                  <li key={entry.label}>
                    <Link
                      href={entry.href!}
                      className={cn(navLinkClass, active && 'after:scale-x-100')}
                      aria-current={active ? 'page' : undefined}
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              }

              const open = openDropdown === index;

              return (
                <li
                  key={entry.label}
                  className='relative'
                  ref={(element) => {
                    dropdownRefs.current[index] = element;
                  }}
                >
                  <button
                    type='button'
                    className={cn(navLinkClass, 'flex items-center gap-1.5', active && 'after:scale-x-100')}
                    aria-expanded={open}
                    aria-controls={`dropdown-${index}`}
                    onClick={() => setOpenDropdown(open ? null : index)}
                  >
                    {entry.label}
                    <ChevronIcon className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')} />
                  </button>
                  <div
                    id={`dropdown-${index}`}
                    className={cn(
                      'absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4',
                      open
                        ? 'visible translate-y-0 opacity-100 transition-[opacity,transform] duration-200'
                        : 'invisible translate-y-1.5 opacity-0',
                    )}
                  >
                    <ul className='border border-stone bg-white py-2 text-ink shadow-xl'>
                      {entry.items.map((item) => {
                        const current = isCurrentItem(pathname, item);

                        return [
                          item.divider && <li key={`${item.label}-divider`} className='mx-5 my-1 border-t border-stone' aria-hidden='true' />,
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={cn('flex items-center justify-between px-5 py-3 hover:bg-paper', current && 'font-medium')}
                              aria-current={current ? 'page' : undefined}
                            >
                              {item.label}
                              {item.count && <span className='text-xs text-muted'>({VACATURE_COUNTS[item.count]})</span>}
                            </Link>
                          </li>,
                        ];
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          <Link
            href='/stuur-je-cv'
            className={cn(
              'hidden items-center gap-3 border px-5 py-3 transition sm:inline-flex',
              CAPS,
              solid ? 'border-ink bg-ink text-white' : 'border-current hover:bg-white hover:text-ink',
            )}
          >
            Stuur je cv
            <ArrowIcon />
          </Link>
          <button
            type='button'
            id='menu-btn'
            className='grid h-11 w-11 place-items-center xl:hidden'
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div
        id='mobile-menu'
        className='max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-stone bg-white text-ink xl:hidden'
        hidden={!menuOpen}
      >
        <nav aria-label='Mobiel menu' className='mx-auto max-w-site px-5 py-4 sm:px-8'>
          <ul className='flex flex-col font-display text-lg'>
            {NAV.map((entry) =>
              entry.items ? (
                <li key={entry.label} className='py-3'>
                  <span className='eyebrow text-muted'>{entry.label}</span>
                  <ul className='mt-2 flex flex-col gap-1 pl-4 text-base'>
                    {entry.items.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className='block py-2' onClick={closeMenu}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={entry.label}>
                  <Link href={entry.href!} className='block py-3' onClick={closeMenu}>
                    {entry.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link
            href='/stuur-je-cv'
            className='mt-4 flex items-center justify-center gap-3 bg-ink px-5 py-4 font-display text-sm font-medium uppercase tracking-[.16em] text-white'
            onClick={closeMenu}
          >
            Stuur je cv
          </Link>
        </nav>
      </div>
    </header>
  );
}
