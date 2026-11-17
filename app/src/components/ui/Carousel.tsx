'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowIcon, ArrowLeftIcon, PauseIcon, PlayIcon } from '@/components/ui/icons';
import { cn } from '@/lib/cn';

type CarouselProps = {
  label: string;
  prevLabel: string;
  nextLabel: string;
  /** Autoplay step in ms. */
  interval?: number;
  /** Change it (e.g. a filter value) to jump back to the first card. */
  resetKey?: string;
  className?: string;
  children: ReactNode;
};

const controlClass = 'grid h-11 w-11 place-items-center border border-stone bg-white transition hover:border-ink';

/** Horizontal scroll-snap track with arrows, swipe, autoplay and a progress line. */
export function Carousel({ label, prevLabel, nextLabel, interval = 5000, resetKey, className, children }: CarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedBy = useRef({ hover: false, focus: false, outOfView: true });
  const [playing, setPlaying] = useState(true);
  const [fits, setFits] = useState(false);
  const [progress, setProgress] = useState(0);

  const behavior = (): ScrollBehavior =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setFits(track.scrollWidth <= track.clientWidth + 4);
    setProgress(track.scrollWidth ? Math.min(100, ((track.scrollLeft + track.clientWidth) / track.scrollWidth) * 100) : 100);
  }, []);

  const stepSize = (track: HTMLDivElement) => {
    const card = track.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0') : track.clientWidth;
  };

  const next = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (atEnd) track.scrollTo({ left: 0, behavior: behavior() });
    else track.scrollBy({ left: stepSize(track), behavior: behavior() });
  }, []);

  const prev = () => {
    const track = trackRef.current;
    if (!track) return;

    if (track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth, behavior: behavior() });
    else track.scrollBy({ left: -stepSize(track), behavior: behavior() });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- autoplay is off for reduced motion, known only in the browser
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);

    const observer = new IntersectionObserver(([entry]) => (pausedBy.current.outOfView = !entry.isIntersecting), { threshold: 0.3 });
    if (rootRef.current) observer.observe(rootRef.current);

    window.addEventListener('resize', updateProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateProgress);
    };
  }, [updateProgress]);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    updateProgress();
  }, [resetKey, updateProgress]);

  useEffect(() => {
    if (!playing || fits) return;

    const timer = setInterval(() => {
      const { hover, focus, outOfView } = pausedBy.current;
      if (!hover && !focus && !outOfView && !document.hidden) next();
    }, interval);
    return () => clearInterval(timer);
  }, [playing, fits, interval, next]);

  return (
    <div
      ref={rootRef}
      className={className}
      role='region'
      aria-roledescription='carrousel'
      aria-label={label}
      onMouseEnter={() => (pausedBy.current.hover = true)}
      onMouseLeave={() => (pausedBy.current.hover = false)}
      onFocus={() => (pausedBy.current.focus = true)}
      onBlur={(event) => (pausedBy.current.focus = event.currentTarget.contains(event.relatedTarget))}
    >
      <div
        ref={trackRef}
        className='track -mx-5 -mb-4 flex gap-5 overflow-x-auto scroll-px-5 px-5 pb-8 pt-2 sm:-mx-4 sm:scroll-px-4 sm:px-4'
        onScroll={updateProgress}
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse') setPlaying(false);
        }}
      >
        {children}
      </div>

      {/* Everything in view? Then no arrows, pause button or progress line. */}
      <div className='mt-6 flex items-center gap-4 sm:gap-6' hidden={fits}>
        <div className='relative h-px flex-1 bg-stone' aria-hidden='true'>
          <div className='absolute inset-y-0 -top-px left-0 h-[3px] bg-accent transition-[width] duration-500' style={{ width: `${progress}%` }} />
        </div>
        <button
          type='button'
          className={controlClass}
          aria-label={playing ? 'Automatisch afspelen pauzeren' : 'Automatisch afspelen starten'}
          onClick={() => setPlaying(!playing)}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          type='button'
          className={cn(controlClass, 'hover:bg-ink hover:text-white')}
          aria-label={prevLabel}
          onClick={() => {
            setPlaying(false);
            prev();
          }}
        >
          <ArrowLeftIcon />
        </button>
        <button
          type='button'
          className={cn(controlClass, 'hover:bg-ink hover:text-white')}
          aria-label={nextLabel}
          onClick={() => {
            setPlaying(false);
            next();
          }}
        >
          <ArrowIcon className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
}
