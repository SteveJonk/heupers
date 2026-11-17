import { MailIcon, PhoneIcon } from '@/components/ui/icons';
import { toTelHref, toUnsplashUrl, type TeamLid } from '@/lib/content';

export function PersonCard({ person }: { person: TeamLid }) {
  return (
    <li className='reveal flex flex-col gap-5'>
      <div className='aspect-[4/3] overflow-hidden bg-stone sm:aspect-[4/5]'>
        <img
          src={toUnsplashUrl(person.img, 'crop=faces&w=700&h=875&q=70')}
          alt={`Portretfoto van ${person.naam}`}
          loading='lazy'
          className='h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0'
        />
      </div>
      <div>
        <h3 className='font-display text-xl'>{person.naam}</h3>
        <p className='mt-1 text-sm text-muted'>{person.rol}</p>
      </div>
      <div className='flex flex-wrap gap-2 text-sm'>
        <a href={toTelHref(person.tel)} className='inline-flex items-center gap-2 border border-stone px-3.5 py-2.5 transition hover:border-ink'>
          <PhoneIcon />
          {person.tel}
        </a>
        <a href={`mailto:${person.mail}`} className='inline-flex items-center gap-2 border border-stone px-3.5 py-2.5 transition hover:border-ink' aria-label={`Mail ${person.naam}`}>
          <MailIcon />
          Mail
        </a>
      </div>
    </li>
  );
}
