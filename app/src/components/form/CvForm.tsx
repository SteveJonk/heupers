'use client';

import Link from 'next/link';
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { FormSuccess } from '@/components/form/FormSuccess';
import { HoverArrow } from '@/components/ui/icons';
import { cn } from '@/lib/cn';
import { VACATURES } from '@/lib/content';
import { CAPS } from '@/lib/styles';

const MAX_CV_BYTES = 5 * 1024 * 1024;

/* ponytail: demo only, no backend; wire to an API route or form service in the CMS step. */
export function CvForm() {
  const [vacature, setVacature] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [sent, setSent] = useState(false);

  /* `?vacature=<titel>` (from a vacature page) preselects that vacature. */
  useEffect(() => {
    const chosen = new URLSearchParams(window.location.search).get('vacature');
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the query string is only known in the browser
    if (chosen && VACATURES.some((item) => item.titel === chosen)) setVacature(chosen);
  }, []);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.setCustomValidity(file && file.size > MAX_CV_BYTES ? 'Je cv is groter dan 5 MB.' : '');
    setFileName(file?.name ?? null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSent(true);
  };

  if (sent) {
    return (
      <FormSuccess title='Bedankt, we hebben je cv ontvangen.'>
        <p className='mx-auto mt-3 max-w-md text-muted'>We bekijken je cv persoonlijk en bellen je binnen een paar werkdagen voor een eerste kennismaking.</p>
        <Link href='/vacatures' className={cn('mt-8 inline-flex items-center gap-3 border border-ink px-6 py-3.5 transition hover:bg-ink hover:text-white', CAPS)}>
          Bekijk meer vacatures
        </Link>
      </FormSuccess>
    );
  }

  return (
    <form className='grid gap-6' noValidate onSubmit={handleSubmit}>
      <div>
        <h2 className='font-display text-3xl font-light leading-tight'>Jouw gegevens</h2>
        <p className='mt-2 text-sm text-muted'>Velden met * zijn verplicht. Je gegevens worden vertrouwelijk behandeld.</p>
      </div>

      <div className='field'>
        <label htmlFor='vacature'>Ik solliciteer op</label>
        <select id='vacature' name='vacature' className='input' value={vacature} onChange={(event) => setVacature(event.target.value)}>
          <option value=''>Open sollicitatie</option>
          {VACATURES.map((item) => (
            <option key={item.titel}>{item.titel}</option>
          ))}
        </select>
      </div>

      <div className='grid gap-6 sm:grid-cols-2'>
        <div className='field'>
          <label htmlFor='voornaam'>Voornaam *</label>
          <input id='voornaam' name='voornaam' className='input' autoComplete='given-name' required />
        </div>
        <div className='field'>
          <label htmlFor='achternaam'>Achternaam *</label>
          <input id='achternaam' name='achternaam' className='input' autoComplete='family-name' required />
        </div>
        <div className='field'>
          <label htmlFor='email'>E-mailadres *</label>
          <input id='email' name='email' type='email' inputMode='email' spellCheck={false} className='input' autoComplete='email' required />
        </div>
        <div className='field'>
          <label htmlFor='tel'>Telefoonnummer *</label>
          <input id='tel' name='tel' type='tel' inputMode='tel' className='input' autoComplete='tel' required />
        </div>
        <div className='field'>
          <label htmlFor='woonplaats'>
            Woonplaats <span className='hint'>(optioneel)</span>
          </label>
          <input id='woonplaats' name='woonplaats' className='input' autoComplete='address-level2' />
        </div>
        <div className='field'>
          <label htmlFor='linkedin'>
            LinkedIn-profiel <span className='hint'>(optioneel)</span>
          </label>
          <input id='linkedin' name='linkedin' type='url' inputMode='url' spellCheck={false} className='input' placeholder='https://linkedin.com/in/…' autoComplete='url' />
        </div>
      </div>

      <div className='field'>
        <span className='label' id='cv-label'>
          Je cv *
        </span>
        <div
          className='drop flex flex-col items-center justify-center gap-3 px-6 py-10 text-center'
          data-over={dragOver ? 'true' : 'false'}
          onDragEnter={() => setDragOver(true)}
          onDragOver={() => setDragOver(true)}
          onDragLeave={() => setDragOver(false)}
          onDrop={() => setDragOver(false)}
        >
          <input id='cv' name='cv' type='file' accept='.pdf,.doc,.docx' required aria-labelledby='cv-label' aria-describedby='cv-hint' onChange={handleFile} />
          <svg className='h-9 w-9 text-accent-deep' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.3' aria-hidden='true'>
            <path d='M14 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8L14 3.5Z' />
            <path d='M14 3.5V8h4.5M12 17v-6m-2.5 2.5L12 11l2.5 2.5' />
          </svg>
          <p className='font-display text-lg'>
            {fileName ? (
              <>
                <span className='font-medium'>{fileName}</span> <span className='text-sm text-muted'>· wijzigen</span>
              </>
            ) : (
              <>
                <span className='underline decoration-accent decoration-2 underline-offset-4'>Kies een bestand</span> of sleep het hierheen
              </>
            )}
          </p>
          <p id='cv-hint' className='text-sm text-muted'>
            PDF of Word, maximaal 5 MB
          </p>
        </div>
      </div>

      <div className='field'>
        <label htmlFor='motivatie'>
          Toelichting <span className='hint'>(optioneel)</span>
        </label>
        <textarea id='motivatie' name='motivatie' className='input' placeholder='Wat zoek je in je volgende stap? Een paar zinnen is genoeg.' />
      </div>

      <label className='check'>
        <input type='checkbox' name='privacy' required />
        <span>
          Ik ga akkoord met de verwerking van mijn gegevens volgens de{' '}
          <a href='#' className='text-ink underline underline-offset-2'>
            privacyverklaring
          </a>
          . Heupers bewaart mijn cv maximaal 12 maanden. *
        </span>
      </label>

      <button type='submit' className={cn('group inline-flex items-center justify-center gap-3 self-start bg-accent px-7 py-4 text-ink transition hover:bg-accent-soft', CAPS)}>
        Verstuur mijn cv
        <HoverArrow />
      </button>
    </form>
  );
}
