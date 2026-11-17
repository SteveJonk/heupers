import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/sections/PageHeader';
import { HoverArrow } from '@/components/ui/icons';
import { PersonCard } from '@/components/ui/PersonCard';
import { cn } from '@/lib/cn';
import { TEAM, toUnsplashUrl } from '@/lib/content';
import { CAPS } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Over Heupers',
  description:
    'Heupers Werving & Selectie is een familiebedrijf met ruim 35 jaar ervaring in het verbinden van professionals binnen bouw, vastgoedontwikkeling en infrastructuur.',
};

export default function OverOnsPage() {
  return (
    <main id='main'>
      <PageHeader
        image='photo-1486406146926-c627a92ad1ab'
        crumbs={[{ label: 'Over Heupers' }]}
        title='Over Heupers Werving & Selectie'
        lead='Al jarenlang verbinden wij professionals met toonaangevende organisaties binnen de bouw- en vastgoedsector.'
      />

      {/* Intro */}
      <section className='bg-white py-20 sm:py-28' aria-label='Wie wij zijn'>
        <div className='mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          <div className='reveal lg:col-span-5'>
            <p className='eyebrow text-accent-deep'>Familiebedrijf</p>
            <p className='mt-5 font-display text-3xl font-light leading-snug sm:text-[2.25rem]'>Onze kracht ligt in onze persoonlijke benadering, marktkennis en langdurige relaties.</p>
          </div>
          <div className='reveal content lg:col-span-7 lg:pt-10'>
            <p>Heupers Werving &amp; Selectie is een familiebedrijf dat zich heeft gespecialiseerd in het vinden en verbinden van professionals binnen de bouw, vastgoedontwikkeling en infrastructuur.</p>
            <p>Met ruim 35 jaar ervaring en een uitgebreid netwerk binnen de sector weten wij als geen ander hoe belangrijk de juiste mensen zijn voor het succes van een organisatie.</p>
            <p>
              Wij geloven dat succesvolle werving en selectie verder gaat dan alleen het invullen van een vacature. Het draait om het vinden van de juiste match tussen kandidaat en opdrachtgever, waarbij niet alleen ervaring en deskundigheid, maar ook persoonlijkheid, ambities en bedrijfscultuur centraal staan.
            </p>
          </div>
        </div>

        <div className='mx-auto mt-16 max-w-site px-5 sm:mt-20 sm:px-8'>
          <ul className='reveal grid gap-px border-y border-stone bg-stone sm:grid-cols-3'>
            <li className='bg-white py-8 sm:pr-10'>
              <p className='font-display text-6xl font-light leading-none'>
                <span data-countup='35'>35</span>
                <span className='text-accent'>+</span>
              </p>
              <p className='mt-4 text-sm leading-snug text-muted'>jaar ervaring in werving &amp; selectie voor bouw en vastgoed</p>
            </li>
            <li className='bg-white py-8 sm:px-10'>
              <p className='font-display text-[1.75rem] font-light leading-tight'>Vast &amp; tijdelijk</p>
              <p className='mt-4 text-sm leading-snug text-muted'>Vaste functies én de tijdelijke inzet van zelfstandige professionals</p>
            </li>
            <li className='bg-white py-8 sm:pl-10'>
              <p className='font-display text-[1.75rem] font-light leading-tight'>Tot directieniveau</p>
              <p className='mt-4 text-sm leading-snug text-muted'>Van projectleiders en projectmanagers tot directie- en managementfuncties</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Persoonlijk */}
      <section className='bg-paper py-20 sm:py-28' aria-labelledby='persoonlijk-title'>
        <div className='mx-auto grid max-w-site items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          <figure className='reveal aspect-[4/3] overflow-hidden bg-stone lg:col-span-6'>
            <img src={toUnsplashUrl('photo-1556761175-5973dc0f32e7', 'w=1400&q=75')} alt="Collega's in overleg in een licht kantoor" loading='lazy' className='h-full w-full object-cover' />
          </figure>
          <div className='reveal lg:col-span-6'>
            <p className='eyebrow text-accent-deep'>Onze aanpak</p>
            <h2 id='persoonlijk-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-[2.75rem]'>
              Persoonlijk, betrokken en resultaatgericht
            </h2>
            <div className='content mt-6'>
              <p>
                Als familiebedrijf hechten wij veel waarde aan vertrouwen, betrokkenheid en persoonlijk contact. Wij kennen onze opdrachtgevers, begrijpen hun organisaties en weten welke professionals daadwerkelijk het verschil kunnen maken.
              </p>
              <p>
                Dankzij ons uitgebreide netwerk en onze jarenlange aanwezigheid in de markt zijn wij in staat om gericht en discreet te zoeken naar professionals die niet altijd actief op zoek zijn naar een nieuwe uitdaging.
              </p>
              <p>
                Wij richten ons op zowel vaste functies als de tijdelijke inzet van zelfstandige professionals. Van ervaren projectleiders en projectmanagers tot directie- en managementfuncties binnen de bouw- en vastgoedsector.
              </p>
            </div>
            <Link href='/werkwijze' className={cn('group mt-8 inline-flex items-center gap-3 border border-ink px-6 py-3.5 transition hover:bg-ink hover:text-white', CAPS)}>
              Bekijk onze werkwijze
              <HoverArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Relaties */}
      <section className='bg-white py-20 sm:py-28' aria-labelledby='relaties-title'>
        <div className='mx-auto grid max-w-site items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          <div className='reveal lg:order-1 lg:col-span-6'>
            <p className='eyebrow text-accent-deep'>Al tientallen jaren</p>
            <h2 id='relaties-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-[2.75rem]'>
              Sterke relaties, duurzame resultaten
            </h2>
            <div className='content mt-6'>
              <p>Veel van onze opdrachtgevers vertrouwen al tientallen jaren op onze dienstverlening. Die langdurige samenwerkingen vormen de basis van ons bedrijf.</p>
              <p>
                Wij geloven niet in snelle plaatsingen, maar in duurzame verbindingen. Door goed te luisteren, eerlijk te adviseren en actief mee te denken, bouwen wij aan relaties die verder gaan dan één succesvolle bemiddeling.
              </p>
            </div>
          </div>
          <figure className='reveal aspect-[4/3] overflow-hidden bg-stone lg:order-2 lg:col-span-6'>
            <img
              src={toUnsplashUrl('photo-1504307651254-35680f356dfd', 'w=1400&q=75')}
              alt='Bouwvakkers aan het werk op een wapeningsvloer, van bovenaf gezien'
              loading='lazy'
              className='h-full w-full object-cover'
            />
          </figure>
        </div>
      </section>

      {/* Slogan */}
      <section className='bg-ink py-20 text-white sm:py-28' aria-label='Onze belofte'>
        <div className='reveal mx-auto max-w-site px-5 text-center sm:px-8'>
          <p className='eyebrow text-accent-soft'>Heupers Werving &amp; Selectie</p>
          <p className='mx-auto mt-6 max-w-4xl font-display text-4xl font-light leading-tight sm:text-6xl sm:leading-none'>
            Vertrouwd in mensen.
            <br />
            <span className='text-accent'>Sterk in verbinding.</span>
          </p>
        </div>
      </section>

      {/* Team */}
      <section className='bg-white py-20 sm:py-28' aria-labelledby='team-title'>
        <div className='mx-auto max-w-site px-5 sm:px-8'>
          <div className='reveal flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-2xl'>
              <p className='eyebrow text-accent-deep'>Persoonlijk contact</p>
              <h2 id='team-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-5xl sm:leading-none'>
                Maak kennis met de familie Heupers.
              </h2>
            </div>
            <p className='max-w-sm leading-relaxed text-muted'>Bel ons gerust. Je spreekt altijd direct met iemand die de markt en jouw vakgebied kent.</p>
          </div>
          <ul className='mt-14 grid gap-8 sm:grid-cols-2 lg:max-w-4xl'>
            {TEAM.map((person) => (
              <PersonCard key={person.naam} person={person} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
