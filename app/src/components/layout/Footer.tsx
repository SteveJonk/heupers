import Link from 'next/link';
import { HeupersLogo } from '@/components/ui/HeupersLogo';
import { LinkedInIcon } from '@/components/ui/icons';
import { CONTACTS, MAIL, toTelHref } from '@/lib/content';
import { CAPS } from '@/lib/styles';
import { cn } from '@/lib/cn';

const COLUMNS = [
  {
    title: 'Vacatures',
    links: [
      { label: 'Bouw', href: '/vacatures?sector=Bouw' },
      { label: 'Vastgoed', href: '/vacatures?sector=Vastgoed' },
      { label: 'Interim & ZZP', href: '/vacatures?interim=1' },
      { label: 'Stuur je cv', href: '/stuur-je-cv' },
    ],
  },
  {
    title: 'Heupers',
    links: [
      { label: 'Over Heupers', href: '/over-ons' },
      { label: 'Onze werkwijze', href: '/werkwijze' },
      { label: 'Voor opdrachtgevers', href: '/opdrachtgevers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className='bg-ink text-white'>
      <div className='mx-auto max-w-site px-5 sm:px-8'>
        <div className='reveal flex flex-col gap-8 border-b border-white/15 py-16 lg:flex-row lg:items-center lg:justify-between'>
          <h2 className='max-w-xl font-display text-3xl font-light leading-tight sm:text-4xl sm:leading-10'>
            Klaar voor je volgende stap? Of op zoek naar versterking?
          </h2>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Link href='/stuur-je-cv' className={cn('inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-ink transition hover:bg-accent-soft', CAPS)}>
              Stuur je cv
            </Link>
            <Link href='/contact' className={cn('inline-flex items-center justify-center gap-3 border border-white/70 px-7 py-4 transition hover:bg-white hover:text-ink', CAPS)}>
              Neem contact op
            </Link>
          </div>
        </div>

        <div className='grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <HeupersLogo className='h-10 w-auto' label='Heupers Werving & Selectie' />
            <p className='mt-6 max-w-xs text-sm leading-relaxed text-white/70'>
              Familiebedrijf in werving &amp; selectie voor de bouw- en vastgoedsector, sinds 35 jaar.
            </p>
            <p className='mt-4 font-display text-sm text-accent-soft'>Vertrouwd in mensen. Sterk in verbinding.</p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} className='lg:col-span-2' aria-label={column.title}>
              <p className='eyebrow text-accent-soft'>{column.title}</p>
              <ul className='mt-5 space-y-3 text-sm text-white/80'>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className='hover:text-white'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <address className='not-italic lg:col-span-4'>
            <p className='eyebrow text-accent-soft'>Contact</p>
            <ul className='mt-5 space-y-3 text-sm text-white/80'>
              {CONTACTS.map((contact) => (
                <li key={contact.naam}>
                  <a href={toTelHref(contact.tel)} className='hover:text-white'>
                    {contact.naam} · {contact.tel}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${MAIL}`} className='hover:text-white'>
                  {MAIL}
                </a>
              </li>
              {/* Placeholder: adres en KvK staan nog niet in de klantdocumenten. */}
              <li>Voorbeeldstraat 12, 1234 AB Plaatsnaam</li>
              <li>
                <a href='#' className='inline-flex items-center gap-2 hover:text-white'>
                  <LinkedInIcon /> LinkedIn
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className='flex flex-col gap-3 border-t border-white/15 py-8 text-xs text-white/60 sm:flex-row sm:justify-between'>
          <p>© 2026 Heupers Werving &amp; Selectie · KvK 00000000</p>
          <ul className='flex gap-6'>
            <li>
              <a href='#' className='hover:text-white'>
                Privacyverklaring
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
