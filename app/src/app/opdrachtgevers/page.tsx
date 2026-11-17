import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/sections/PageHeader';
import { ReferentiesSection } from '@/components/sections/ReferentiesSection';
import { ArrowIcon, HoverArrow, MailIcon, PhoneIcon } from '@/components/ui/icons';
import { cn } from '@/lib/cn';
import { CONTACTS, MAIL, toTelHref, toUnsplashUrl } from '@/lib/content';
import { CAPS } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Voor opdrachtgevers',
  description:
    'Op zoek naar de juiste professional voor uw organisatie? Heupers ondersteunt bij werving & selectie, interim & zzp en management- en directiefuncties in bouw en vastgoed.',
};

const SERVICES = [
  {
    title: 'Werving & Selectie',
    body: 'Het vinden van professionals voor vaste functies.',
    icon: (
      <>
        <circle cx='11' cy='11' r='6.5' />
        <path d='m20.5 20.5-4.9-4.9M8.5 11h5M11 8.5v5' />
      </>
    ),
  },
  {
    title: 'Interim & ZZP',
    body: 'De tijdelijke inzet van ervaren zelfstandige professionals.',
    icon: (
      <>
        <circle cx='12' cy='12' r='8.5' />
        <path d='M12 7v5l3.5 2' />
      </>
    ),
  },
  { title: 'Management & Directie', body: 'Het gericht en vertrouwelijk zoeken naar ervaren leidinggevenden en directieleden.', icon: <path d='M4 19.5h16M6 19.5v-6m4 6v-9m4 9v-12m4 12v-15' /> },
  {
    title: 'Specialistische functies',
    body: 'Het invullen van uitdagende posities binnen bouw, vastgoedontwikkeling en infrastructuur.',
    icon: <path d='M3.5 20.5V9l8.5-5.5L20.5 9v11.5M3.5 20.5h17M9 20.5v-6h6v6' />,
  },
];

const contactRowClass = 'group flex items-center justify-between gap-4 py-4 transition hover:text-accent-soft';

export default function OpdrachtgeversPage() {
  return (
    <main id='main'>
      <PageHeader image='photo-1497366216548-37526070297c' crumbs={[{ label: 'Voor opdrachtgevers' }]} title='Op zoek naar de juiste professional voor uw organisatie?'>
        <div className='rise mt-10 flex flex-col gap-3 [animation-delay:.2s] sm:flex-row sm:gap-4'>
          <a href='#contact-opdrachtgevers' className={cn('group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-ink transition hover:bg-accent-soft', CAPS)}>
            Plan een kennismaking
            <HoverArrow />
          </a>
          <a href='#diensten' className={cn('inline-flex items-center justify-center gap-3 border border-white/80 px-7 py-4 transition hover:bg-white hover:text-ink', CAPS)}>
            Onze diensten
          </a>
        </div>
      </PageHeader>

      {/* Intro */}
      <section className='bg-white py-20 sm:py-28' aria-label='Wat wij voor u doen'>
        <div className='mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          <div className='reveal content lg:col-span-7'>
            <p className='text-xl! leading-relaxed! text-ink!'>Bij Heupers Werving &amp; Selectie begrijpen wij hoe belangrijk de juiste mensen zijn voor het succes van uw organisatie.</p>
            <p>
              Of het nu gaat om het invullen van een specialistische functie, het versterken van uw managementteam of het tijdelijk inzetten van een ervaren zelfstandige professional: wij denken graag met u mee.
            </p>
            <p>
              Met ruim 35 jaar ervaring binnen de bouw- en vastgoedsector beschikken wij over een uitgebreid netwerk van professionals, van ervaren uitvoerders en projectmanagers tot senior management en directieleden.
            </p>
          </div>
          <div className='reveal border-t border-stone pt-8 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-2'>
            <p className='font-display text-7xl font-light leading-none'>
              <span data-countup='35'>35</span>
              <span className='text-accent'>+</span>
            </p>
            <p className='mt-4 text-muted'>jaar ervaring binnen de bouw- en vastgoedsector</p>
          </div>
        </div>
      </section>

      {/* Netwerk */}
      <section className='bg-paper py-20 sm:py-28' aria-labelledby='netwerk-title'>
        <div className='mx-auto grid max-w-site items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          <figure className='reveal aspect-[4/3] overflow-hidden bg-stone lg:col-span-6'>
            <img src={toUnsplashUrl('photo-1517048676732-d65bc937f952', 'w=1400&q=75')} alt='Overleg aan een vergadertafel' loading='lazy' className='h-full w-full object-cover' />
          </figure>
          <div className='reveal lg:col-span-6'>
            <p className='eyebrow text-accent-deep'>Persoonlijk en gericht</p>
            <h2 id='netwerk-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-[2.75rem]'>
              Uw uitdaging, ons netwerk
            </h2>
            <div className='content mt-6'>
              <p>
                Iedere organisatie en iedere vacature is anders. Daarom geloven wij in een persoonlijke en gerichte aanpak. Wij verdiepen ons in uw organisatie, de functie en de mensen die daarbij passen.
              </p>
              <p>Dankzij onze jarenlange relaties en uitgebreide marktkennis weten wij ook professionals te bereiken die niet actief op zoek zijn naar een nieuwe uitdaging.</p>
            </div>
            <Link href='/werkwijze' className={cn('group mt-8 inline-flex items-center gap-3 border-b border-ink pb-2', CAPS)}>
              Lees over onze werkwijze
              <HoverArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section id='diensten' className='bg-white py-20 sm:py-28' aria-labelledby='diensten-title'>
        <div className='mx-auto max-w-site px-5 sm:px-8'>
          <div className='reveal max-w-2xl'>
            <p className='eyebrow text-accent-deep'>Onze diensten</p>
            <h2 id='diensten-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-5xl sm:leading-none'>
              Wij ondersteunen opdrachtgevers bij:
            </h2>
          </div>
          <ul className='mt-14 grid gap-5 sm:grid-cols-2'>
            {SERVICES.map((service, index) => (
              <li key={service.title} className={cn('reveal flex flex-col gap-5 border border-stone p-8 sm:p-10', index % 2 === 1 && '[transition-delay:.08s]')}>
                <svg className='h-10 w-10 text-accent-deep' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.3' aria-hidden='true'>
                  {service.icon}
                </svg>
                <h3 className='font-display text-2xl'>{service.title}</h3>
                <p className='leading-relaxed text-muted'>{service.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ReferentiesSection className='border-t border-stone' />

      {/* Aanvraag + contact */}
      <section id='contact-opdrachtgevers' className='bg-paper py-20 sm:py-28' aria-labelledby='aanvraag-title'>
        <div className='mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          <div className='reveal lg:col-span-6'>
            <p className='eyebrow text-accent-deep'>Altijd open voor een uitdagende aanvraag</p>
            <h2 id='aanvraag-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-[2.75rem]'>
              Wij staan altijd open voor een nieuwe uitdaging.
            </h2>
            <div className='content mt-6'>
              <p>Heeft u een vacature die lastig in te vullen is, zoekt u een specifiek profiel of wilt u vrijblijvend kennismaken om toekomstige mogelijkheden te bespreken?</p>
              <p>
                Bij Heupers Werving &amp; Selectie houden wij van persoonlijk contact, duidelijke afspraken en langdurige samenwerkingen. Wij denken graag met u mee over de mogelijkheden binnen uw organisatie.
              </p>
            </div>
          </div>

          <div className='reveal bg-ink p-8 text-white sm:p-10 lg:col-span-6'>
            <h3 className='font-display text-2xl font-light leading-snug sm:text-[1.75rem]'>Meer weten over onze werkwijze en voorwaarden?</h3>
            <p className='mt-4 leading-relaxed text-white/80'>
              Wilt u meer informatie over onze dienstverlening, de mogelijkheden voor samenwerking of de voorwaarden die wij hanteren? Neem gerust vrijblijvend contact met ons op. Wij vertellen u graag meer over onze werkwijze en bespreken hoe wij uw organisatie kunnen ondersteunen.
            </p>
            <ul className='mt-8 divide-y divide-white/15 border-y border-white/15'>
              {CONTACTS.map((contact) => (
                <li key={contact.naam}>
                  <a href={toTelHref(contact.tel)} className={contactRowClass}>
                    <span className='font-display text-lg'>{contact.naam}</span>
                    <span className='flex items-center gap-2 text-white/80 group-hover:text-accent-soft'>
                      <PhoneIcon />
                      {contact.tel}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${MAIL}`} className={contactRowClass}>
                  <span className='font-display text-lg'>E-mail</span>
                  <span className='flex items-center gap-2 text-white/80 group-hover:text-accent-soft'>
                    <MailIcon />
                    {MAIL}
                  </span>
                </a>
              </li>
            </ul>
            <Link
              href='/contact?onderwerp=opdrachtgever'
              className={cn('mt-8 inline-flex w-full items-center justify-center gap-3 bg-accent px-7 py-4 text-ink transition hover:bg-accent-soft sm:w-auto', CAPS)}
            >
              Stuur ons een bericht
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
