'use client';

import Link from 'next/link';
import { useEffect, useState, type FormEvent } from 'react';
import { FormSuccess } from '@/components/form/FormSuccess';
import { HoverArrow } from '@/components/ui/icons';
import { cn } from '@/lib/cn';
import { CAPS } from '@/lib/styles';

type Rol = 'kandidaat' | 'opdrachtgever';

/* ponytail: demo only, no backend; wire to an API route or form service in the CMS step. */
export function ContactMessageForm() {
  const [rol, setRol] = useState<Rol>('kandidaat');
  const [sent, setSent] = useState(false);

  /* `?onderwerp=opdrachtgever` (from the opdrachtgevers page) preselects the role. */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the query string is only known in the browser
    if (new URLSearchParams(window.location.search).get('onderwerp') === 'opdrachtgever') setRol('opdrachtgever');
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSent(true);
  };

  if (sent) {
    return (
      <FormSuccess title='Bedankt voor je bericht.'>
        <p className='mx-auto mt-3 max-w-md text-muted'>We nemen binnen één werkdag persoonlijk contact met je op.</p>
      </FormSuccess>
    );
  }

  return (
    <form className='grid gap-6' noValidate onSubmit={handleSubmit}>
      <div>
        <h2 className='font-display text-3xl font-light leading-tight'>Stuur ons een bericht</h2>
        <p className='mt-2 text-sm text-muted'>Velden met * zijn verplicht. We reageren binnen één werkdag.</p>
      </div>

      <fieldset className='field'>
        <legend className='label mb-2 text-sm font-medium'>Ik ben</legend>
        <div className='seg'>
          {(['kandidaat', 'opdrachtgever'] as const).map((value) => (
            <label key={value}>
              <input type='radio' name='rol' value={value} checked={rol === value} onChange={() => setRol(value)} />
              {value === 'kandidaat' ? 'Kandidaat' : 'Opdrachtgever'}
            </label>
          ))}
        </div>
      </fieldset>

      <div className='grid gap-6 sm:grid-cols-2'>
        <div className='field'>
          <label htmlFor='naam'>Naam *</label>
          <input id='naam' name='naam' className='input' autoComplete='name' required />
        </div>
        {/* Organisatie alleen tonen (en verplichten) voor opdrachtgevers. */}
        {rol === 'opdrachtgever' && (
          <div className='field'>
            <label htmlFor='bedrijf'>Organisatie *</label>
            <input id='bedrijf' name='bedrijf' className='input' autoComplete='organization' required />
          </div>
        )}
        <div className='field'>
          <label htmlFor='email'>E-mailadres *</label>
          <input id='email' name='email' type='email' inputMode='email' spellCheck={false} className='input' autoComplete='email' required />
        </div>
        <div className='field'>
          <label htmlFor='tel'>
            Telefoonnummer <span className='hint'>(optioneel)</span>
          </label>
          <input id='tel' name='tel' type='tel' inputMode='tel' className='input' autoComplete='tel' />
        </div>
      </div>

      <div className='field'>
        <label htmlFor='bericht'>Bericht *</label>
        <textarea id='bericht' name='bericht' className='input' required placeholder='Waar kunnen wij je mee helpen?' />
      </div>

      <label className='check'>
        <input type='checkbox' name='privacy' required />
        <span>
          Ik ga akkoord met de verwerking van mijn gegevens volgens de{' '}
          <a href='#' className='text-ink underline underline-offset-2'>
            privacyverklaring
          </a>
          . *
        </span>
      </label>

      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <button type='submit' className={cn('group inline-flex items-center justify-center gap-3 bg-ink px-7 py-4 text-white transition hover:bg-ink/85', CAPS)}>
          Verstuur bericht
          <HoverArrow />
        </button>
        <Link href='/stuur-je-cv' className='text-sm text-muted underline decoration-stone underline-offset-4 transition hover:text-ink hover:decoration-ink'>
          Wil je solliciteren? Stuur je cv
        </Link>
      </div>
    </form>
  );
}
