'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ArrowIcon, ClockIcon, EuroIcon, PinIcon } from '@/components/ui/icons';
import { VacatureCard } from '@/components/ui/VacatureCard';
import { cn } from '@/lib/cn';
import { toUnsplashUrl, VACATURE_COUNTS, VACATURE_HREF, VACATURES, type Sector, type Vacature } from '@/lib/content';
import { CAPS } from '@/lib/styles';

const FILTERS = ['Alle', 'Bouw', 'Vastgoed'] as const;
type Filter = (typeof FILTERS)[number];

function FeaturedCard({ vacature }: { vacature: Vacature }) {
  return (
    <Link
      href={VACATURE_HREF}
      className='group grid overflow-hidden border border-stone bg-white transition duration-300 hover:border-transparent hover:shadow-[0_18px_40px_-24px_rgba(31,33,35,.5)] md:grid-cols-12'
    >
      <div className='relative aspect-[16/10] overflow-hidden bg-stone md:col-span-5 md:aspect-auto md:min-h-[22rem]'>
        <img
          src={toUnsplashUrl(vacature.img!, 'w=1200&q=72')}
          alt=''
          className='absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105'
        />
        <span className='absolute left-3 top-3 bg-accent px-2.5 py-1 font-display text-[11px] font-medium uppercase tracking-[.16em] text-ink'>Uitgelicht</span>
      </div>
      <div className='flex flex-col gap-5 p-6 sm:p-10 md:col-span-7'>
        <p className='eyebrow text-accent-deep'>
          {vacature.sector}
          {vacature.opdrachtgever && (
            <>
              {' '}
              <span className='mx-1.5 text-stone'>/</span> {vacature.opdrachtgever}
            </>
          )}
        </p>
        <h3 className='font-display text-3xl font-light leading-tight sm:text-[2.25rem]'>{vacature.titel}</h3>
        {vacature.intro && <p className='max-w-xl leading-relaxed text-muted'>{vacature.intro}</p>}
        <ul className='flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted'>
          <li className='flex items-center gap-2.5'>
            <PinIcon />
            {vacature.locatie}
          </li>
          <li className='flex items-center gap-2.5'>
            <ClockIcon />
            {vacature.uren}
            {vacature.type && ` · ${vacature.type}`}
          </li>
          {vacature.salaris && (
            <li className='flex items-center gap-2.5'>
              <EuroIcon />
              {vacature.salaris} bruto p/m
            </li>
          )}
        </ul>
        <span className='mt-auto flex items-center justify-between border-t border-stone pt-5 text-sm font-medium'>
          Bekijk vacature
          <span className='transition group-hover:translate-x-1'>
            <ArrowIcon className='h-5 w-5' />
          </span>
        </span>
      </div>
    </Link>
  );
}

/** Sector and interim live in the URL (`?sector=Bouw&interim=1`), so menu and footer links can deep-link a filter. */
export function VacatureOverviewFromUrl() {
  return <VacatureOverview searchParams={useSearchParams()} />;
}

/** Without `searchParams` (the static fallback) it shows every vacature. */
export function VacatureOverview({ searchParams }: { searchParams?: URLSearchParams }) {
  const [query, setQuery] = useState('');
  const sectorParam = searchParams?.get('sector');
  const sector: Filter = sectorParam === 'Bouw' || sectorParam === 'Vastgoed' ? sectorParam : 'Alle';
  const interim = searchParams?.get('interim') === '1';

  /* Next.js keeps useSearchParams in sync with history.replaceState. */
  const setFilters = (next: { sector: Filter; interim: boolean }) => {
    const url = new URL(window.location.href);

    if (next.sector === 'Alle') url.searchParams.delete('sector');
    else url.searchParams.set('sector', next.sector);
    if (next.interim) url.searchParams.set('interim', '1');
    else url.searchParams.delete('interim');

    window.history.replaceState(null, '', url);
  };

  const search = query.trim().toLowerCase();
  const hits = VACATURES.filter(
    (vacature) =>
      (sector === 'Alle' || vacature.sector === (sector as Sector)) &&
      (!interim || vacature.interim) &&
      (!search || `${vacature.titel} ${vacature.locatie} ${vacature.opdrachtgever ?? ''}`.toLowerCase().includes(search)),
  );
  const featured = hits.filter((vacature) => vacature.uitgelicht);
  const rest = hits.filter((vacature) => !vacature.uitgelicht);

  const reset = () => {
    setQuery('');
    setFilters({ sector: 'Alle', interim: false });
    document.getElementById('q')?.focus();
  };

  return (
    <>
      <div className='border-b border-stone bg-white'>
        <form
          className='mx-auto flex max-w-site flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between'
          role='search'
          onSubmit={(event) => event.preventDefault()}
        >
          <div className='flex flex-wrap items-center gap-x-4 gap-y-3'>
            <div className='flex flex-wrap items-center gap-2' role='group' aria-label='Filter op sector'>
              {FILTERS.map((filter) => (
                <button key={filter} type='button' className='chip' aria-pressed={sector === filter} onClick={() => setFilters({ sector: filter, interim })}>
                  {filter} <span>({VACATURE_COUNTS[filter]})</span>
                </button>
              ))}
            </div>
            <span className='hidden h-8 w-px bg-stone sm:block' aria-hidden='true' />
            <label className='chip check-chip'>
              <input type='checkbox' name='interim' checked={interim} onChange={(event) => setFilters({ sector, interim: event.target.checked })} /> Interim{' '}
              <span>({VACATURE_COUNTS.Interim})</span>
            </label>
          </div>
          <label className='relative block lg:w-80'>
            <span className='sr-only'>Zoek op functie of plaats</span>
            <svg className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden='true'>
              <circle cx='11' cy='11' r='6.5' />
              <path d='m20 20-4.2-4.2' />
            </svg>
            <input
              id='q'
              name='q'
              type='search'
              className='input pl-11!'
              placeholder='Zoek op functie of plaats'
              autoComplete='off'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </form>
      </div>

      <div className='mx-auto max-w-site px-5 pt-10 sm:px-8 sm:pt-14'>
        <p className='text-sm text-muted' aria-live='polite'>
          {hits.length}
          {interim && ' interim'} {hits.length === 1 ? 'vacature' : 'vacatures'}
          {sector !== 'Alle' && ` in ${sector}`}
        </p>

        <div className='mt-6' hidden={!featured.length}>
          {featured.map((vacature) => (
            <FeaturedCard key={vacature.titel} vacature={vacature} />
          ))}
        </div>

        <div className='mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {rest.map((vacature, index) => (
            <VacatureCard key={vacature.titel} vacature={vacature} index={index} total={rest.length} />
          ))}
        </div>

        <div className='mt-6 border border-dashed border-stone bg-white px-6 py-16 text-center' hidden={hits.length > 0}>
          <p className='font-display text-2xl font-light'>Geen vacatures gevonden.</p>
          <p className='mx-auto mt-3 max-w-md text-muted'>Probeer een andere zoekterm, of stuur je cv in. We denken graag met je mee over passende functies.</p>
          <button type='button' className={cn('mt-6 inline-flex items-center gap-3 border border-ink px-6 py-3.5 transition hover:bg-ink hover:text-white', CAPS)} onClick={reset}>
            Toon alle vacatures
          </button>
        </div>
      </div>
    </>
  );
}
