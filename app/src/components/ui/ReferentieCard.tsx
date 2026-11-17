import { QuoteIcon } from '@/components/ui/icons';
import type { Referentie } from '@/lib/content';

type ReferentieCardProps = {
  referentie: Referentie;
  index: number;
  total: number;
};

/** Capitalised words only, so "Erik de Groot" becomes "EG". */
function toInitials(name: string) {
  return name
    .split(' ')
    .filter((word) => word[0] === word[0].toUpperCase())
    .map((word) => word[0])
    .slice(0, 2)
    .join('');
}

export function ReferentieCard({ referentie, index, total }: ReferentieCardProps) {
  return (
    <figure
      role='group'
      aria-roledescription='referentie'
      aria-label={`${index + 1} van ${total}: ${referentie.naam}, ${referentie.bedrijf}`}
      className='flex w-[88%] shrink-0 snap-start flex-col border border-t-[3px] border-stone border-t-accent bg-paper p-7 sm:w-[calc((100%-1.25rem)/2)] sm:p-8 lg:w-[calc((100%-2.5rem)/3)]'
    >
      <div className='flex items-start justify-between gap-4'>
        <QuoteIcon />
        <span className='bg-white px-2.5 py-1 font-display text-[11px] font-medium uppercase tracking-[.16em]'>{referentie.sector}</span>
      </div>
      <blockquote className='mt-6 flex-1 font-display text-[1.2rem] font-light leading-relaxed sm:text-[1.3rem]'>
        <p>{referentie.quote}</p>
      </blockquote>
      <figcaption className='mt-6 flex items-center gap-4 border-t border-stone pt-6'>
        <span className='grid h-12 w-12 shrink-0 place-items-center bg-ink font-display text-sm font-medium tracking-wider text-white' aria-hidden='true'>
          {toInitials(referentie.naam)}
        </span>
        <span className='min-w-0'>
          <span className='block font-medium'>{referentie.naam}</span>
          <span className='block text-sm text-muted'>
            {referentie.functie} · {referentie.bedrijf}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
