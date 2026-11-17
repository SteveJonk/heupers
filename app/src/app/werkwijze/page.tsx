import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/sections/PageHeader';
import { HoverArrow, QuoteIcon } from '@/components/ui/icons';
import { CAPS } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Onze werkwijze',
  description:
    'Persoonlijk contact vormt de basis van een succesvolle samenwerking. Zo werkt Heupers Werving & Selectie: van een telefonische kennismaking tot de juiste match.',
};

const QUESTIONS = [
  'Wat vindt iemand belangrijk in zijn werk?',
  'Waar krijgt iemand energie van?',
  'Welke ambities zijn er voor de toekomst?',
  'En misschien nog wel belangrijker: binnen welke organisatie en werkomgeving komt iemand het beste tot zijn recht?',
];

const STEPS = [
  {
    title: 'Telefonische kennismaking',
    body: 'Wij beginnen graag met een telefonisch kennismakingsgesprek. Tijdens dit eerste contact leren wij elkaar kennen, bespreken we de achtergrond en ambities van de kandidaat en kijken we of er een eerste wederzijdse klik is.',
  },
  { title: 'Een kop koffie', body: 'Wanneer er vanuit beide kanten interesse is om verder te praten, nodigen wij de kandidaat graag uit voor een kop koffie.' },
  {
    title: 'Verder kijken dan het cv',
    body: (
      <div className='max-w-xl sm:col-span-6'>
        <p className='leading-relaxed text-muted'>Tijdens deze persoonlijke kennismaking nemen wij uitgebreid de tijd om verder te kijken dan het cv.</p>
        <ul className='mt-5 grid gap-3'>
          {QUESTIONS.map((question) => (
            <li key={question} className='flex gap-3 font-display text-lg leading-snug'>
              <span className='mt-[.7em] h-[2px] w-4 shrink-0 bg-accent' aria-hidden='true' />
              {question}
            </li>
          ))}
        </ul>
        <p className='mt-5 leading-relaxed text-muted'>Door deze gesprekken leren wij onze kandidaten écht kennen. Niet alleen als professional, maar ook als persoon.</p>
      </div>
    ),
  },
  {
    title: 'Ook voor onze opdrachtgevers',
    body: 'Diezelfde persoonlijke betrokkenheid hanteren wij richting onze opdrachtgevers. Wij verdiepen ons in de organisatie, de mensen, de bedrijfscultuur en de verwachtingen die bij een functie horen.',
  },
  {
    title: 'De juiste match',
    body: 'Op deze manier kunnen wij gericht zoeken naar professionals die niet alleen beschikken over de juiste kennis en ervaring, maar ook daadwerkelijk passen binnen een organisatie.',
  },
];

const NEXT = [
  { eyebrow: 'Kandidaten', title: 'Benieuwd wat wij voor jou kunnen betekenen?', body: 'Stuur je cv vrijblijvend in. We bellen je voor een eerste kennismaking.', cta: 'Stuur je cv', href: '/stuur-je-cv', className: 'md:pr-12' },
  {
    eyebrow: 'Opdrachtgevers',
    title: 'Op zoek naar de juiste professional?',
    body: 'Wij verdiepen ons in uw organisatie en zoeken gericht naar mensen die echt passen.',
    cta: 'Voor opdrachtgevers',
    href: '/opdrachtgevers',
    className: 'md:pl-12',
  },
];

export default function WerkwijzePage() {
  return (
    <main id='main'>
      <PageHeader
        image='photo-1495474472287-4d71bcdd2085'
        crumbs={[{ label: 'Onze werkwijze' }]}
        title='Onze werkwijze'
        lead='Persoonlijk contact vormt de basis van een succesvolle samenwerking.'
      />

      {/* Intro */}
      <section className='bg-white py-20 sm:py-28' aria-label='Waar wij in geloven'>
        <div className='mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          <div className='reveal lg:col-span-5'>
            <p className='eyebrow text-accent-deep'>Mensen eerst</p>
            <p className='mt-5 font-display text-3xl font-light leading-snug sm:text-[2.25rem]'>Het draait om mensen, persoonlijkheden, ambities en wederzijds vertrouwen.</p>
          </div>
          <div className='reveal content lg:col-span-7 lg:pt-10'>
            <p>
              Bij Heupers Werving &amp; Selectie geloven wij dat het vinden van de juiste match verder gaat dan alleen een cv, werkervaring of functieomschrijving. Het draait om mensen, persoonlijkheden, ambities en wederzijds vertrouwen.
            </p>
            <p>
              <strong>Daarom staat persoonlijk contact bij ons altijd centraal.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Stappen */}
      <section className='bg-paper py-20 sm:py-28' aria-labelledby='stappen-title'>
        <div className='mx-auto max-w-site px-5 sm:px-8'>
          <div className='reveal max-w-2xl'>
            <p className='eyebrow text-accent-deep'>Stap voor stap</p>
            <h2 id='stappen-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-5xl sm:leading-none'>
              Van eerste gesprek tot de juiste match.
            </h2>
          </div>

          <ol className='mt-14 border-t border-stone'>
            {STEPS.map((step, index) => (
              <li key={step.title} className='reveal grid gap-4 border-b border-stone py-10 sm:grid-cols-12 sm:gap-8 sm:py-12'>
                <span className='font-display text-sm font-medium tracking-[.2em] text-accent-deep sm:col-span-2 sm:pt-2'>{String(index + 1).padStart(2, '0')}</span>
                <h3 className='font-display text-2xl font-normal sm:col-span-4 lg:text-[1.75rem] lg:leading-8'>{step.title}</h3>
                {typeof step.body === 'string' ? <p className='max-w-xl leading-relaxed text-muted sm:col-span-6'>{step.body}</p> : step.body}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Belofte */}
      <section className='bg-ink py-20 text-white sm:py-28' aria-label='Onze overtuiging'>
        <figure className='reveal mx-auto max-w-site px-5 sm:px-8'>
          <QuoteIcon className='h-12 w-12 text-accent' />
          <blockquote className='mt-8 max-w-4xl font-display text-3xl font-light leading-snug sm:text-5xl sm:leading-tight'>
            Wij geloven niet in het simpelweg doorsturen van cv&apos;s, maar in het persoonlijk verbinden van mensen en organisaties.
          </blockquote>
          <figcaption className='mt-8 max-w-xl leading-relaxed text-white/75'>
            Dat is de werkwijze van Heupers Werving &amp; Selectie. Persoonlijk, betrokken en gericht op langdurige samenwerkingen.
          </figcaption>
        </figure>
      </section>

      {/* Vervolg */}
      <section className='bg-white py-20 sm:py-28' aria-label='Kennismaken'>
        <div className='mx-auto max-w-site px-5 sm:px-8'>
          <div className='grid gap-px bg-stone md:grid-cols-2'>
            {NEXT.map((item) => (
              <Link key={item.href} href={item.href} className={`reveal group flex flex-col gap-5 bg-white py-10 sm:py-12 ${item.className}`}>
                <p className='eyebrow text-accent-deep'>{item.eyebrow}</p>
                <h2 className='font-display text-3xl font-light leading-tight'>{item.title}</h2>
                <p className='max-w-md leading-relaxed text-muted'>{item.body}</p>
                <span className={`mt-2 inline-flex items-center gap-3 ${CAPS}`}>
                  {item.cta} <HoverArrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
