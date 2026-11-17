import type { Metadata } from 'next';
import { ContactMessageForm } from '@/components/form/ContactMessageForm';
import { PageHeader } from '@/components/sections/PageHeader';
import { LinkedInIcon, PhoneIcon } from '@/components/ui/icons';
import { MAIL, TEAM, toTelHref, toUnsplashUrl } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met Heupers Werving & Selectie. Bel Jens of Marc Heupers, mail naar info@heupers.nl of stuur ons een bericht.',
};

export default function ContactPage() {
  return (
    <main id='main'>
      <PageHeader
        image='photo-1495474472287-4d71bcdd2085'
        crumbs={[{ label: 'Contact' }]}
        title='Laten we kennismaken.'
        lead='Bel ons, stuur een mail of laat een bericht achter. Wij nemen altijd persoonlijk contact met je op.'
        spacing='pb-16 sm:pb-20'
      />

      <section className='bg-paper py-16 sm:py-24' aria-label='Contactgegevens en formulier'>
        <div className='mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          {/* Gegevens */}
          <div className='lg:col-span-5'>
            <h2 className='reveal font-display text-3xl font-light leading-tight sm:text-4xl sm:leading-10'>Direct contact</h2>
            <p className='reveal mt-4 max-w-md leading-relaxed text-muted'>Je spreekt altijd met iemand van de familie Heupers. Bellen mag altijd, ook voor een vrijblijvend gesprek.</p>

            <ul className='mt-10 grid gap-4'>
              {TEAM.map((person) => (
                <li key={person.naam} className='reveal flex items-center gap-5 border border-stone bg-white p-4 sm:p-5'>
                  <img src={toUnsplashUrl(person.img, 'crop=faces&w=200&h=200&q=70')} alt='' className='h-20 w-20 shrink-0 object-cover grayscale' />
                  <div className='min-w-0'>
                    <p className='font-display text-xl'>{person.naam}</p>
                    <a href={toTelHref(person.tel)} className='mt-2 inline-flex items-center gap-2 text-sm transition hover:text-accent-deep'>
                      <PhoneIcon />
                      {person.tel}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <dl className='reveal mt-10 grid gap-6 border-t border-stone pt-8 text-sm sm:grid-cols-2 lg:grid-cols-1'>
              <div>
                <dt className='eyebrow text-muted'>E-mail</dt>
                <dd className='mt-2'>
                  <a href={`mailto:${MAIL}`} className='font-display text-lg underline decoration-stone underline-offset-4 transition hover:decoration-ink'>
                    {MAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className='eyebrow text-muted'>Adres</dt>
                {/* Placeholder: adres staat nog niet in de klantdocumenten. */}
                <dd className='mt-2 font-display text-lg leading-snug'>
                  Voorbeeldstraat 12
                  <br />
                  1234 AB Plaatsnaam
                </dd>
              </div>
              <div>
                <dt className='eyebrow text-muted'>Volg ons</dt>
                <dd className='mt-2'>
                  <a href='#' className='inline-flex items-center gap-2 font-display text-lg transition hover:text-accent-deep'>
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Formulier */}
          <div className='reveal bg-white p-6 sm:p-10 lg:col-span-7'>
            <ContactMessageForm />
          </div>
        </div>
      </section>
    </main>
  );
}
