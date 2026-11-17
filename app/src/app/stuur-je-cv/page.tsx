import type { Metadata } from 'next';
import { CvForm } from '@/components/form/CvForm';
import { PageHeader } from '@/components/sections/PageHeader';
import { PhoneIcon } from '@/components/ui/icons';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Stuur je cv',
  description: 'Stuur je cv naar Heupers Werving & Selectie. Solliciteer op een vacature of open, dan nemen we persoonlijk contact met je op.',
};

const NEXT_STEPS = [
  { title: 'We lezen je cv persoonlijk', body: 'Geen systeem dat filtert: iemand van de familie Heupers bekijkt je gegevens.' },
  { title: 'Telefonische kennismaking', body: 'We bespreken je achtergrond en ambities en kijken of er een wederzijdse klik is.' },
  { title: 'Een kop koffie', body: 'We nemen de tijd om je écht te leren kennen, zodat we je kunnen verbinden met een organisatie die bij je past.' },
];

export default function StuurJeCvPage() {
  return (
    <main id='main'>
      <PageHeader
        image='photo-1541888946425-d81bb19240f5'
        crumbs={[{ label: 'Stuur je cv' }]}
        title='Stuur je cv.'
        lead='Solliciteer op een vacature of stuur je cv open in. Wij nemen persoonlijk contact met je op voor een eerste kennismaking.'
        spacing='pb-16 sm:pb-20'
      />

      <section className='bg-paper py-16 sm:py-24' aria-label='Sollicitatieformulier'>
        <div className='mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16'>
          <div className='reveal bg-white p-6 sm:p-10 lg:col-span-7'>
            <CvForm />
          </div>

          {/* Wat gebeurt er hierna */}
          <aside className='lg:col-span-5' aria-labelledby='next-title'>
            <div className='lg:sticky lg:top-28'>
              <h2 id='next-title' className='reveal font-display text-3xl font-light leading-tight sm:text-4xl sm:leading-10'>
                Wat gebeurt er hierna?
              </h2>
              <ol className='reveal mt-8 border-l border-stone'>
                {NEXT_STEPS.map((step, index) => {
                  const last = index === NEXT_STEPS.length - 1;

                  return (
                    <li key={step.title} className={cn('relative pl-8', !last && 'pb-8')}>
                      <span
                        className={cn(
                          'absolute -left-[13px] top-0 grid h-[26px] w-[26px] place-items-center font-display text-xs',
                          last ? 'bg-accent text-ink' : 'bg-ink text-white',
                        )}
                      >
                        {index + 1}
                      </span>
                      <h3 className='font-display text-xl'>{step.title}</h3>
                      <p className='mt-2 leading-relaxed text-muted'>{step.body}</p>
                    </li>
                  );
                })}
              </ol>
              <div className='reveal mt-10 hidden border-t border-stone pt-8 lg:block'>
                <p className='text-sm text-muted'>Liever eerst even bellen?</p>
                <a href='tel:+31639890060' className='mt-2 inline-flex items-center gap-2 font-display text-xl transition hover:text-accent-deep'>
                  <PhoneIcon className='h-5 w-5' />
                  Jens Heupers · 06 3989 0060
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
