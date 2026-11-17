import Link from 'next/link';
import { ArrowIcon, ClockIcon, EuroIcon, PinIcon } from '@/components/ui/icons';
import { cn } from '@/lib/cn';
import { SECTOR_IMG, toUnsplashUrl, VACATURE_HREF, type Vacature } from '@/lib/content';

type VacatureCardProps = {
  vacature: Vacature;
  index: number;
  total: number;
  /** Width classes when the card sits in a carousel track. */
  className?: string;
};

export function VacatureCard({ vacature, index, total, className }: VacatureCardProps) {
  return (
    <Link
      href={VACATURE_HREF}
      aria-label={`${index + 1} van ${total}: ${vacature.titel}`}
      className={cn(
        'group flex shrink-0 snap-start flex-col border border-stone bg-white transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_12px_24px_-14px_rgba(31,33,35,.4)]',
        className,
      )}
    >
      <div className='relative aspect-[4/3] overflow-hidden bg-stone'>
        <img
          src={toUnsplashUrl(vacature.img ?? SECTOR_IMG[vacature.sector])}
          alt=''
          loading='lazy'
          className='h-full w-full object-cover transition duration-700 group-hover:scale-105'
        />
        <span className='absolute left-3 top-3 flex gap-1.5'>
          <span className='bg-white px-2.5 py-1 font-display text-[11px] font-medium uppercase tracking-[.16em] text-ink'>{vacature.sector}</span>
          {vacature.interim && (
            <span className='bg-accent px-2.5 py-1 font-display text-[11px] font-medium uppercase tracking-[.16em] text-ink'>Interim</span>
          )}
        </span>
      </div>
      <div className='flex flex-1 flex-col gap-4 p-5'>
        <h3 className='font-display text-[1.2rem] leading-snug'>{vacature.titel}</h3>
        <ul className='space-y-2 text-sm text-muted'>
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
              {vacature.salaris}
            </li>
          )}
        </ul>
        <span className='mt-auto flex items-center justify-between border-t border-stone pt-4 text-sm font-medium'>
          Bekijk vacature
          <span className='transition group-hover:translate-x-1'>
            <ArrowIcon className='h-5 w-5' />
          </span>
        </span>
      </div>
    </Link>
  );
}
