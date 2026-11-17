'use client';

import { useState } from 'react';
import { Carousel } from '@/components/ui/Carousel';
import { VacatureCard } from '@/components/ui/VacatureCard';
import { VACATURE_COUNTS, VACATURES, type Sector } from '@/lib/content';

const FILTERS = ['Alle', 'Bouw', 'Vastgoed'] as const;

/** Homepage: sector chips + the vacature carousel they filter. */
export function VacatureCarousel({ children }: { children: React.ReactNode }) {
  const [sector, setSector] = useState<'Alle' | Sector>('Alle');
  const shown = VACATURES.filter((vacature) => sector === 'Alle' || vacature.sector === sector);

  return (
    <>
      <div className='reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'>
        {children}
        <div className='flex flex-wrap items-center gap-2' role='group' aria-label='Filter op sector'>
          {FILTERS.map((filter) => (
            <button key={filter} type='button' className='chip' aria-pressed={sector === filter} onClick={() => setSector(filter)}>
              {filter} <span>({VACATURE_COUNTS[filter]})</span>
            </button>
          ))}
        </div>
      </div>

      <Carousel className='reveal mt-10' label='Actuele vacatures' prevLabel='Vorige vacatures' nextLabel='Volgende vacatures' resetKey={sector}>
        {shown.map((vacature, index) => (
          <VacatureCard
            key={vacature.titel}
            vacature={vacature}
            index={index}
            total={shown.length}
            className='w-[82%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]'
          />
        ))}
      </Carousel>
    </>
  );
}
