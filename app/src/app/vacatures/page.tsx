import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { PageHeader } from '@/components/sections/PageHeader';
import { VacatureOverview, VacatureOverviewFromUrl } from '@/components/sections/VacatureOverview';
import { HoverArrow } from '@/components/ui/icons';
import { cn } from '@/lib/cn';
import { CAPS } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Vacatures',
  description: 'Actuele vacatures in de bouw- en vastgoedsector, van projectmanager tot directeur. Bekijk het aanbod van Heupers Werving & Selectie.',
};

export default function VacaturesPage() {
  return (
    <main id='main'>
      <PageHeader
        image='photo-1503387762-592deb58ef4e'
        crumbs={[{ label: 'Vacatures' }]}
        title='Jouw volgende stap in bouw en vastgoed.'
        lead='Van projectmanager tot directeur. Wij kennen de organisaties achter elke vacature en vertellen je graag meer.'
        spacing='pb-16 sm:pb-20'
      />

      <section className='bg-paper pb-20 sm:pb-28' aria-labelledby='overzicht-title'>
        <h2 id='overzicht-title' className='sr-only'>
          Alle vacatures
        </h2>
        {/* The static HTML holds the unfiltered list; the URL filters apply once the page hydrates. */}
        <Suspense fallback={<VacatureOverview />}>
          <VacatureOverviewFromUrl />
        </Suspense>
      </section>

      <section className='bg-white py-20 sm:py-24' aria-labelledby='open-title'>
        <div className='reveal mx-auto flex max-w-site flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between'>
          <div className='max-w-2xl'>
            <p className='eyebrow text-accent-deep'>Open sollicitatie</p>
            <h2 id='open-title' className='mt-4 font-display text-4xl font-light leading-tight'>
              Staat jouw functie er niet tussen?
            </h2>
            <p className='mt-4 leading-relaxed text-muted'>
              Veel functies vullen wij in via ons netwerk, nog voordat ze online staan. Stuur je cv in en we nemen contact op voor een eerste kennismaking.
            </p>
          </div>
          <Link href='/stuur-je-cv' className={cn('group inline-flex shrink-0 items-center justify-center gap-3 bg-ink px-7 py-4 text-white transition hover:bg-ink/85', CAPS)}>
            Stuur je cv
            <HoverArrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
