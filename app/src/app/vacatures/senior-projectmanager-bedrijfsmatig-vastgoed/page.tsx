import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/sections/PageHeader';
import { ApplyBar } from '@/components/ui/ApplyBar';
import { ArrowIcon, HoverArrow, MailIcon, PhoneIcon } from '@/components/ui/icons';
import { ShareButton } from '@/components/ui/ShareButton';
import { VacatureCard } from '@/components/ui/VacatureCard';
import { cn } from '@/lib/cn';
import { MAIL, toUnsplashUrl, VACATURES } from '@/lib/content';
import { CAPS } from '@/lib/styles';

const TITLE = 'Senior Projectmanager Bedrijfsmatig Vastgoed';
const APPLY_HREF = `/stuur-je-cv?vacature=${encodeURIComponent(TITLE)}`;
const TEL_JENS = 'tel:+31639890060';

export const metadata: Metadata = {
  title: TITLE,
  description:
    'Namens Next Level Development zoekt Heupers Werving & Selectie een ervaren Senior Projectmanager Bedrijfsmatig Vastgoed in de regio Eindhoven. € 7.500 – € 9.500 bruto per maand.',
};

const FACTS = [
  { label: 'Opdrachtgever', value: 'Next Level Development' },
  { label: 'Locatie', value: 'Regio Eindhoven' },
  { label: 'Dienstverband', value: 'Fulltime' },
];

/* Meer vacatures: drie andere, zelfde sector (Vastgoed) eerst. */
const OTHERS = VACATURES.filter((vacature) => !vacature.uitgelicht)
  .sort((a, b) => Number(b.sector === 'Vastgoed') - Number(a.sector === 'Vastgoed'))
  .slice(0, 3);

export default function VacaturePage() {
  return (
    <>
      <main id='main'>
        <PageHeader
          image='photo-1586528116311-ad8dd3c8310d'
          crumbs={[{ label: 'Vacatures', href: '/vacatures' }, { label: 'Vastgoed' }]}
          title={TITLE}
          spacing='pb-12 sm:pb-16'
          overlay='from-ink/95 via-ink/85 to-ink/50'
          titleClassName='max-w-4xl text-[2.3rem]'
        >
          <dl className='rise mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-8 [animation-delay:.2s] lg:grid-cols-4'>
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className='eyebrow text-accent-soft'>{fact.label}</dt>
                <dd className='mt-2 font-display text-lg'>{fact.value}</dd>
              </div>
            ))}
            <div>
              <dt className='eyebrow text-accent-soft'>Salaris</dt>
              <dd className='mt-2 font-display text-lg'>
                € 7.500 – € 9.500 <span className='text-sm text-white/70'>bruto p/m</span>
              </dd>
            </div>
          </dl>
        </PageHeader>

        {/* Vacaturetekst + zijbalk */}
        <div className='bg-white pb-28 pt-14 sm:pt-20 lg:pb-28'>
          <div className='mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
            <article className='content lg:col-span-7'>
              <h2>De functie</h2>
              <p>Namens Next Level Development zijn wij vanuit Heupers Werving &amp; Selectie op zoek naar een ervaren Senior Projectmanager Bedrijfsmatig Vastgoed.</p>
              <p className='text-lg! text-ink!'>
                Ben jij een ervaren projectmanager met een sterke bouwtechnische achtergrond en krijg je energie van het realiseren van grootschalige logistieke en bedrijfsmatige vastgoedprojecten? Wil jij verantwoordelijkheid dragen voor het volledige bouwproces, van technische uitwerking en voorbereiding tot en met de uiteindelijke oplevering? Dan komen wij graag met je in contact.
              </p>

              <h2>Over Next Level Development</h2>
              <p>Next Level Development is een ambitieuze vastgoedontwikkelaar die zich richt op de ontwikkeling en realisatie van hoogwaardig logistiek en bedrijfsmatig vastgoed.</p>
              <p>De organisatie kenmerkt zich door een ondernemende mentaliteit, korte communicatielijnen en een sterke focus op kwaliteit, duurzaamheid en resultaat.</p>
              <p>
                Binnen Next Level Development werk je samen met ervaren professionals aan omvangrijke vastgoedontwikkelingen. De projecten vragen om technisch inzicht, organisatorisch vermogen en een projectmanager die zelfstandig beslissingen durft te nemen.
              </p>

              <h2>Wat ga je doen?</h2>
              <p>Als Senior Projectmanager ben je verantwoordelijk voor de technische voorbereiding, aansturing en realisatie van grootschalige vastgoedprojecten.</p>
              <p>Je bent betrokken vanaf de ontwikkelingsfase en zorgt ervoor dat projecten technisch, financieel en organisatorisch succesvol worden gerealiseerd.</p>
              <p>
                <strong>Je werkzaamheden bestaan onder andere uit:</strong>
              </p>
              <ul>
                <li>Het aansturen en coördineren van het volledige bouwproces.</li>
                <li>Het beoordelen van ontwerpen, technische uitwerkingen en bouwmethodieken.</li>
                <li>Het begeleiden van aanbestedingen en contractvorming.</li>
                <li>Het selecteren en aansturen van aannemers, adviseurs en overige bouwpartners.</li>
                <li>Het bewaken van planning, kwaliteit, budget en voortgang.</li>
                <li>Het signaleren en beheersen van technische en financiële risico&apos;s.</li>
                <li>Het onderhouden van contacten met opdrachtgevers, gemeenten en betrokken partijen.</li>
                <li>Het begeleiden van projecten tot en met oplevering en nazorg.</li>
              </ul>
              <p>Je bent de verbindende schakel tussen ontwikkeling en realisatie en weet verschillende belangen samen te brengen.</p>

              <h2>Wie zoeken wij?</h2>
              <p>Wij zoeken een zelfstandige en resultaatgerichte projectmanager die ruime ervaring heeft met complexe bouwprojecten.</p>
              <p>
                <strong>Je beschikt over:</strong>
              </p>
              <ul>
                <li>Een afgeronde hbo- of wo-opleiding richting Bouwkunde of vergelijkbaar.</li>
                <li>Ruime ervaring als projectmanager binnen de bouw of vastgoedontwikkeling.</li>
                <li>Een sterke bouwtechnische achtergrond.</li>
                <li>Ervaring met grootschalige utiliteitsbouw, logistiek vastgoed of bedrijfsmatige projecten.</li>
                <li>Kennis van contractvorming, bouwkosten en projectbeheersing.</li>
                <li>Uitstekende communicatieve en organisatorische vaardigheden.</li>
                <li>Een proactieve, zelfstandige en oplossingsgerichte werkhouding.</li>
              </ul>
              <p>Je bent iemand die overzicht houdt, verantwoordelijkheid neemt en zich prettig voelt binnen een ondernemende organisatie.</p>

              <h2>Wat wordt geboden?</h2>
              <ul>
                <li>Een salaris tussen € 7.500 en € 9.500 bruto per maand, afhankelijk van kennis en ervaring.</li>
                <li>Een verantwoordelijke functie binnen een ambitieuze vastgoedontwikkelaar.</li>
                <li>Betrokkenheid bij omvangrijke en technisch uitdagende projecten.</li>
                <li>Veel zelfstandigheid en ruimte voor eigen initiatief.</li>
                <li>Een professionele werkomgeving met korte communicatielijnen.</li>
                <li>Mogelijkheden om jezelf verder te ontwikkelen.</li>
              </ul>

              <div className='mt-14! border-l-[3px] border-accent bg-paper p-6 sm:p-8'>
                <h2 className='mt-0!'>Interesse?</h2>
                <p className='mt-4'>Ben jij toe aan een volgende stap en wil je betrokken zijn bij de realisatie van grootschalig bedrijfsmatig vastgoed?</p>
                <p className='mt-4'>
                  Neem dan contact op met Heupers Werving &amp; Selectie. Wij vertellen je graag meer over Next Level Development, de projecten en de mogelijkheden binnen deze functie.
                </p>
                <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                  <Link href={APPLY_HREF} className={cn('group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-ink transition hover:bg-accent-soft', CAPS)}>
                    Solliciteer direct
                    <HoverArrow />
                  </Link>
                  <a href={TEL_JENS} className={cn('inline-flex items-center justify-center gap-3 border border-ink px-7 py-4 transition hover:bg-ink hover:text-white', CAPS)}>
                    Bel Jens
                  </a>
                </div>
              </div>
            </article>

            {/* Zijbalk: blijft in beeld tijdens scrollen */}
            <aside className='lg:col-span-4 lg:col-start-9' aria-label='Solliciteren en contact'>
              <div className='lg:sticky lg:top-28'>
                <div className='border border-stone'>
                  <div className='bg-ink p-6 text-white sm:p-8'>
                    <p className='eyebrow text-accent-soft'>Direct solliciteren</p>
                    <p className='mt-3 font-display text-2xl font-light leading-snug'>Interesse in deze functie?</p>
                    <Link href={APPLY_HREF} className={cn('mt-6 flex items-center justify-center gap-3 bg-accent px-6 py-4 text-ink transition hover:bg-accent-soft', CAPS)}>
                      Solliciteer direct
                      <ArrowIcon />
                    </Link>
                  </div>
                  <div className='p-6 sm:p-8'>
                    <p className='eyebrow text-muted'>Jouw contactpersoon</p>
                    <div className='mt-5 flex items-center gap-4'>
                      <img src={toUnsplashUrl('photo-1560250097-0b93528c311a', 'crop=faces&w=160&h=160&q=70')} alt='' className='h-16 w-16 shrink-0 object-cover grayscale' />
                      <div>
                        <p className='font-display text-lg'>Jens Heupers</p>
                        <p className='text-sm text-muted'>Heupers Werving &amp; Selectie</p>
                      </div>
                    </div>
                    <ul className='mt-6 divide-y divide-stone border-y border-stone text-sm'>
                      <li>
                        <a href={TEL_JENS} className='flex items-center gap-3 py-3.5 transition hover:text-accent-deep'>
                          <PhoneIcon />
                          06 3989 0060
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${MAIL}?subject=${encodeURIComponent(TITLE)}`} className='flex items-center gap-3 py-3.5 transition hover:text-accent-deep'>
                          <MailIcon />
                          {MAIL}
                        </a>
                      </li>
                    </ul>
                    <p className='mt-5 text-sm leading-relaxed text-muted'>Liever eerst vrijblijvend sparren? Bel Jens gerust. Je gegevens worden altijd vertrouwelijk behandeld.</p>
                  </div>
                </div>

                <div className='mt-5 flex items-center justify-between gap-4 border border-stone px-6 py-4 text-sm'>
                  <span className='text-muted'>Deel deze vacature</span>
                  <ShareButton />
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Meer vacatures */}
        <section className='bg-paper py-20 sm:py-24' aria-labelledby='meer-title'>
          <div className='mx-auto max-w-site px-5 sm:px-8'>
            <div className='reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
              <h2 id='meer-title' className='font-display text-4xl font-light leading-tight'>
                Meer vacatures
              </h2>
              <Link href='/vacatures' className={cn('group inline-flex items-center gap-3 self-start border-b border-ink pb-2 sm:self-auto', CAPS)}>
                Alle vacatures
                <HoverArrow />
              </Link>
            </div>
            <div className='reveal mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {OTHERS.map((vacature, index) => (
                <VacatureCard key={vacature.titel} vacature={vacature} index={index} total={OTHERS.length} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <ApplyBar>
        <div className='min-w-0 flex-1'>
          <p className='truncate font-display text-[15px]'>Senior Projectmanager</p>
          <p className='truncate text-xs text-muted'>€ 7.500 – € 9.500 · Regio Eindhoven</p>
        </div>
        <Link href={APPLY_HREF} className='shrink-0 bg-accent px-5 py-3.5 font-display text-[12px] font-medium uppercase tracking-[.16em] text-ink'>
          Solliciteer
        </Link>
      </ApplyBar>
    </>
  );
}
