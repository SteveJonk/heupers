import Link from 'next/link';
import { ReferentiesSection } from '@/components/sections/ReferentiesSection';
import { VacatureCarousel } from '@/components/sections/VacatureCarousel';
import { HoverArrow, ArrowIcon } from '@/components/ui/icons';
import { PersonCard } from '@/components/ui/PersonCard';
import { cn } from '@/lib/cn';
import { TEAM, toUnsplashUrl, VACATURE_HREF, VACATURES } from '@/lib/content';
import { CAPS } from '@/lib/styles';

const PILLARS = [
  { title: 'Persoonlijk', body: 'Eén vast aanspreekpunt, van de eerste kennismaking tot je eerste werkdag.' },
  { title: 'Betrokken', body: 'We kennen de projecten, de teams en de mensen achter elke vacature.' },
  { title: 'Resultaatgericht', body: 'Een gerichte shortlist met kandidaten die echt passen.' },
];

const STEPS = [
  { title: 'Telefonische kennismaking', body: 'We leren elkaar kennen, bespreken je achtergrond en ambities en kijken of er een eerste wederzijdse klik is.', className: 'p-8 sm:pl-0 sm:pr-10' },
  { title: 'Een kop koffie', body: 'Is er interesse van beide kanten? Dan nodigen we je uit voor een kop koffie en kijken we verder dan het cv.', className: 'p-8 sm:px-10 [transition-delay:.1s]' },
  { title: 'De juiste match', body: 'We kennen onze opdrachtgevers en hun cultuur, en verbinden je met een organisatie waar je echt tot je recht komt.', className: 'p-8 sm:pl-10 sm:pr-0 [transition-delay:.2s]' },
];

const INTERIM = VACATURES.filter((vacature) => vacature.interim);

export default function HomePage() {
  return (
    <main id='main'>
      {/* Hero */}
      <section className='relative isolate min-h-[min(92vh,860px)] overflow-hidden bg-ink text-white'>
        <img
          src={toUnsplashUrl('photo-1541888946425-d81bb19240f5', 'w=2000&q=75')}
          alt='Bouwplaats van bovenaf met een team bouwvakkers in veiligheidshesjes'
          className='hero-img absolute inset-0 -z-20 h-full w-full object-cover'
          fetchPriority='high'
        />
        <div className='absolute inset-0 -z-10 bg-linear-to-r from-ink/90 via-ink/60 to-ink/10' />
        <div className='absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-t from-ink/80 to-transparent' />

        <div className='mx-auto flex min-h-[inherit] max-w-site flex-col justify-between px-5 pb-10 pt-36 sm:px-8 sm:pt-44'>
          <div className='max-w-2xl'>
            <p className='eyebrow rise text-white/80'>
              Bouw <span className='mx-2 text-accent'>/</span> Vastgoed <span className='mx-2 text-accent'>/</span> Mensen
            </p>
            <h1 className='rise mt-6 font-display text-[2.6rem] font-light leading-[1.05] [animation-delay:.12s] sm:text-6xl sm:leading-none lg:text-7xl'>
              De juiste mensen.
              <br />
              De juiste verbinding.
            </h1>
            <p className='rise mt-7 max-w-xl text-lg leading-relaxed text-white/85 [animation-delay:.24s]'>
              Heupers Werving &amp; Selectie verbindt ambitieuze professionals met toonaangevende organisaties binnen de bouw- en vastgoedsector.
            </p>
            <div className='rise mt-10 flex flex-col gap-3 [animation-delay:.36s] sm:flex-row sm:gap-4'>
              <a href='#vacatures' className={cn('group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-ink transition hover:bg-accent-soft', CAPS)}>
                Bekijk onze vacatures
                <HoverArrow />
              </a>
              <Link href='/opdrachtgevers' className={cn('group inline-flex items-center justify-center gap-3 border border-white/80 px-7 py-4 transition hover:bg-white hover:text-ink', CAPS)}>
                Voor opdrachtgevers
                <HoverArrow />
              </Link>
            </div>
          </div>

          <ul className='rise mt-16 grid gap-6 border-t border-white/20 pt-8 [animation-delay:.5s] sm:grid-cols-3 sm:gap-10'>
            {PILLARS.map((pillar) => (
              <li key={pillar.title}>
                <p className='eyebrow text-accent-soft'>{pillar.title}</p>
                <p className='mt-2 text-[15px] leading-relaxed text-white/80'>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vacatures (carrousel) */}
      <section id='vacatures' className='bg-paper py-20 sm:py-28' aria-labelledby='vac-title'>
        <div className='mx-auto max-w-site px-5 sm:px-8'>
          <VacatureCarousel>
            <div>
              <p className='eyebrow text-accent-deep'>Actuele vacatures</p>
              <h2 id='vac-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-5xl sm:leading-none'>
                Jouw volgende stap
                <br />
                in bouw en vastgoed.
              </h2>
            </div>
          </VacatureCarousel>

          <div className='reveal mt-12 flex justify-center sm:justify-end'>
            <Link href='/vacatures' className={cn('group inline-flex items-center gap-3 border-b border-ink pb-2', CAPS)}>
              Bekijk alle vacatures
              <HoverArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Over Heupers */}
      <section id='over' className='bg-white py-20 sm:py-28' aria-labelledby='over-title'>
        <div className='mx-auto grid max-w-site items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          {/* The prototype's optional video (data-video) is empty, so this is the photo only. */}
          <figure className='reveal relative aspect-[4/3] overflow-hidden bg-ink lg:col-span-6'>
            <img
              src={toUnsplashUrl('photo-1486406146926-c627a92ad1ab', 'w=1400&q=75')}
              alt='Kantoortorens met glazen gevels, van onderaf gezien'
              loading='lazy'
              className='h-full w-full object-cover'
            />
          </figure>

          <div className='lg:col-span-6'>
            <div className='reveal'>
              <p className='eyebrow text-accent-deep'>Over Heupers</p>
              <h2 id='over-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-[2.75rem]'>
                Al 35 jaar de verbindende schakel in bouw en vastgoed.
              </h2>
              <p className='mt-6 max-w-xl text-lg leading-relaxed text-muted'>
                Heupers Werving &amp; Selectie is een familiebedrijf, gespecialiseerd in het vinden en verbinden van professionals binnen de bouw, vastgoedontwikkeling en infrastructuur. Onze kracht ligt in onze persoonlijke benadering, marktkennis en langdurige relaties.
              </p>
              <Link href='/over-ons' className={cn('group mt-8 inline-flex items-center gap-3 border border-ink px-6 py-3.5 transition hover:bg-ink hover:text-white', CAPS)}>
                Meer over ons
                <HoverArrow />
              </Link>
            </div>

            <ul className='reveal mt-12 grid gap-6 border-t border-stone pt-10 sm:grid-cols-3'>
              <li className='flex flex-col gap-3'>
                <p className='font-display text-5xl font-light leading-none'>
                  <span data-countup='35'>35</span>
                  <span className='text-accent'>+</span>
                </p>
                <p className='text-sm leading-snug text-muted'>jaar ervaring in werving &amp; selectie</p>
              </li>
              <li className='flex flex-col gap-3'>
                <svg className='h-10 w-10 text-accent-deep' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.3' aria-hidden='true'>
                  <circle cx='9' cy='8' r='3.5' />
                  <path d='M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5' />
                  <circle cx='17' cy='9' r='2.6' />
                  <path d='M16.5 14.6c2.6.1 4.5 1.8 5 5.4' />
                </svg>
                <p className='text-sm leading-snug text-muted'>Persoonlijke aanpak met een vast aanspreekpunt</p>
              </li>
              <li className='flex flex-col gap-3'>
                <svg className='h-10 w-10 text-accent-deep' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.3' aria-hidden='true'>
                  <circle cx='12' cy='5' r='2.2' />
                  <circle cx='5' cy='18' r='2.2' />
                  <circle cx='19' cy='18' r='2.2' />
                  <path d='m10.9 7 -4.8 9m6.8-9 4.8 9M7.2 18h9.6' />
                </svg>
                <p className='text-sm leading-snug text-muted'>Sterk netwerk in bouw en vastgoed</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className='bg-paper py-20 sm:py-28' aria-labelledby='werk-title'>
        <div className='mx-auto max-w-site px-5 sm:px-8'>
          <div className='reveal max-w-2xl'>
            <p className='eyebrow text-accent-deep'>Zo werken wij</p>
            <h2 id='werk-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-5xl sm:leading-none'>
              Van kennismaking tot een match die blijft.
            </h2>
          </div>
          <ol className='mt-14 grid gap-px bg-stone sm:grid-cols-3'>
            {STEPS.map((step, index) => (
              <li key={step.title} className={cn('reveal flex flex-col gap-5 bg-paper', step.className)}>
                <span className='font-display text-sm font-medium tracking-[.2em] text-accent-deep'>{String(index + 1).padStart(2, '0')}</span>
                <h3 className='font-display text-2xl font-normal'>{step.title}</h3>
                <p className='leading-relaxed text-muted'>{step.body}</p>
              </li>
            ))}
          </ol>
          <div className='reveal mt-12 flex justify-center sm:justify-end'>
            <Link href='/werkwijze' className={cn('group inline-flex items-center gap-3 border-b border-ink pb-2', CAPS)}>
              Meer over onze werkwijze
              <HoverArrow />
            </Link>
          </div>
        </div>
      </section>

      <ReferentiesSection />

      {/* Kandidaten / werkgevers */}
      <section id='werkgevers' className='grid bg-ink text-white md:grid-cols-2' aria-label='Voor kandidaten en opdrachtgevers'>
        <article className='group relative isolate overflow-hidden'>
          <img
            src={toUnsplashUrl('photo-1504307651254-35680f356dfd', 'w=1400&q=70')}
            alt='Bouwvakkers aan het werk op een wapeningsvloer, van bovenaf gezien'
            loading='lazy'
            className='absolute inset-0 -z-20 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-105'
          />
          <div className='absolute inset-0 -z-10 bg-linear-to-r from-ink/95 via-ink/80 to-ink/40' />
          <div className='reveal flex min-h-[26rem] flex-col justify-center gap-6 px-5 py-16 sm:px-12 lg:px-16'>
            <p className='eyebrow text-accent-soft'>Kandidaten</p>
            <h2 className='max-w-md font-display text-3xl font-light leading-tight sm:text-4xl sm:leading-10'>Op zoek naar een nieuwe uitdaging?</h2>
            <p className='max-w-md leading-relaxed text-white/85'>Bekijk onze vacatures of stuur je cv vrijblijvend in. We denken graag met je mee.</p>
            <div className='flex flex-wrap gap-3 pt-2'>
              <Link href='/vacatures' className={cn('inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-ink transition hover:bg-accent-soft', CAPS)}>
                Naar de vacatures
              </Link>
              <Link href='/stuur-je-cv' className={cn('inline-flex items-center gap-3 border border-white/70 px-6 py-3.5 transition hover:bg-white hover:text-ink', CAPS)}>
                Stuur je cv
              </Link>
            </div>
          </div>
        </article>
        <article className='group relative isolate overflow-hidden border-t border-white/10 md:border-l md:border-t-0'>
          <img
            src={toUnsplashUrl('photo-1497366216548-37526070297c', 'w=1400&q=70')}
            alt='Strak kantoorinterieur met een lange lichte gang'
            loading='lazy'
            className='absolute inset-0 -z-20 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-105'
          />
          <div className='absolute inset-0 -z-10 bg-linear-to-r from-ink/95 via-ink/80 to-ink/40' />
          <div className='reveal flex min-h-[26rem] flex-col justify-center gap-6 px-5 py-16 sm:px-12 lg:px-16'>
            <p className='eyebrow text-accent-soft'>Opdrachtgevers</p>
            <h2 className='max-w-md font-display text-3xl font-light leading-tight sm:text-4xl sm:leading-10'>Op zoek naar de juiste professionals?</h2>
            <p className='max-w-md leading-relaxed text-white/85'>
              Wij ondersteunen bij werving &amp; selectie en het vinden van ervaren zzp&apos;ers en interim professionals. Laten we kennismaken onder het genot van een kop koffie.
            </p>
            <div className='pt-2'>
              <Link href='/opdrachtgevers' className={cn('inline-flex items-center gap-3 border border-white/70 px-6 py-3.5 transition hover:bg-white hover:text-ink', CAPS)}>
                Voor opdrachtgevers
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Persoonlijk contact + testimonial */}
      <section className='bg-white py-20 sm:py-28' aria-labelledby='team-title'>
        <div className='mx-auto max-w-site px-5 sm:px-8'>
          <div className='reveal flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-2xl'>
              <p className='eyebrow text-accent-deep'>Persoonlijk contact</p>
              <h2 id='team-title' className='mt-4 font-display text-4xl font-light leading-tight sm:text-5xl sm:leading-none'>
                Je spreekt altijd met een vast gezicht.
              </h2>
            </div>
            <p className='max-w-sm leading-relaxed text-muted'>Bel of app ons gerust. Je krijgt direct de recruiter die jouw vakgebied kent.</p>
          </div>

          <ul className='mt-14 grid gap-8 sm:grid-cols-2 lg:max-w-4xl'>
            {TEAM.map((person) => (
              <PersonCard key={person.naam} person={person} />
            ))}
          </ul>

          <figure className='reveal mt-20 grid gap-8 border-t border-stone pt-14 lg:grid-cols-12'>
            <svg className='h-10 w-10 text-accent lg:col-span-1' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d='M10 7H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2v1a3 3 0 0 0 3-3v-8a2 2 0 0 0-1-2Zm9 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2v1a3 3 0 0 0 3-3v-8a2 2 0 0 0-1-2Z' />
            </svg>
            <div className='lg:col-span-10'>
              <blockquote className='font-display text-2xl font-light leading-snug sm:text-[2rem]'>
                Heupers stelde me voor aan één ontwikkelaar, en dat was meteen raak. Binnen drie weken had ik mijn nieuwe baan, en ze belden na een maand nog om te vragen hoe het ging.
              </blockquote>
              <figcaption className='mt-6 text-sm text-muted'>
                <span className='font-medium text-ink'>Marieke J.</span> · Projectmanager Vastgoed, geplaatst in 2026
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ZZP & interim */}
      <section id='zzp' className='bg-paper py-20 sm:py-24' aria-labelledby='zzp-title'>
        <div className='mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-12'>
          <div className='reveal lg:col-span-5'>
            <p className='eyebrow text-accent-deep'>ZZP &amp; Interim</p>
            <h2 id='zzp-title' className='mt-4 font-display text-4xl font-light leading-tight'>
              Interim opdrachten in bouw en vastgoed.
            </h2>
            <p className='mt-5 max-w-md leading-relaxed text-muted'>
              Ben je zzp&apos;er of op zoek naar een interim opdracht? Bekijk ons actuele aanbod of laat je gegevens achter, dan nemen we contact op zodra er een passende opdracht is.
            </p>
            <Link href='/vacatures?interim=1' className={cn('group mt-8 inline-flex items-center gap-3 border-b border-ink pb-2', CAPS)}>
              Bekijk zzp &amp; interim opdrachten
              <HoverArrow />
            </Link>
          </div>
          <ul className='reveal divide-y divide-stone border-y border-stone lg:col-span-7'>
            {INTERIM.map((vacature) => (
              <li key={vacature.titel}>
                <Link href={VACATURE_HREF} className='group grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6'>
                  <div>
                    <h3 className='font-display text-xl'>{vacature.titel}</h3>
                    <p className='mt-1 text-sm text-muted'>
                      {vacature.locatie} · {vacature.type} · {vacature.uren}
                    </p>
                  </div>
                  <span className='eyebrow inline-flex items-center gap-2 text-accent-deep'>
                    {vacature.sector} <HoverArrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
