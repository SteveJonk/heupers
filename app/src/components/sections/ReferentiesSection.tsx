import { Carousel } from '@/components/ui/Carousel';
import { ReferentieCard } from '@/components/ui/ReferentieCard';
import { cn } from '@/lib/cn';
import { REFERENTIES } from '@/lib/content';

/** "Wat opdrachtgevers over ons zeggen" — reviews carousel (home, opdrachtgevers). */
export function ReferentiesSection({ className }: { className?: string }) {
  return (
    <section id='referenties' className={cn('bg-white py-20 sm:py-28', className)} aria-labelledby='ref-title'>
      <div className='mx-auto max-w-site px-5 sm:px-8'>
        <div className='reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='eyebrow text-accent-deep'>Opdrachtgevers aan het woord</p>
            <h2 id='ref-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-5xl sm:leading-none'>
              Wat opdrachtgevers
              <br />
              over ons zeggen.
            </h2>
          </div>
          <p className='max-w-sm leading-relaxed text-muted'>Bouwbedrijven, ontwikkelaars en vastgoedpartijen over hun samenwerking met Heupers.</p>
        </div>

        <Carousel
          className='reveal mt-10'
          label='Referenties van opdrachtgevers'
          prevLabel='Vorige referenties'
          nextLabel='Volgende referenties'
          interval={7000}
        >
          {REFERENTIES.map((referentie, index) => (
            <ReferentieCard key={referentie.naam} referentie={referentie} index={index} total={REFERENTIES.length} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
