import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type IconProps = { className?: string };

function Outline({ className, children, strokeWidth = 1.5 }: IconProps & { children: ReactNode; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={strokeWidth} aria-hidden='true'>
      {children}
    </svg>
  );
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return <Outline className={className}><path d='M5 12h14m-5-5 5 5-5 5' /></Outline>;
}

export function ArrowLeftIcon({ className = 'h-5 w-5' }: IconProps) {
  return <Outline className={className}><path d='M19 12H5m5 5-5-5 5-5' /></Outline>;
}

/** The arrow that nudges right when its `group` parent is hovered. */
export function HoverArrow({ className }: IconProps) {
  return <ArrowIcon className={cn('h-4 w-4 transition group-hover:translate-x-1', className)} />;
}

export function PinIcon({ className = 'h-4 w-4 shrink-0' }: IconProps) {
  return (
    <Outline className={className}>
      <path d='M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z' />
      <circle cx='12' cy='9.5' r='2.5' />
    </Outline>
  );
}

export function ClockIcon({ className = 'h-4 w-4 shrink-0' }: IconProps) {
  return (
    <Outline className={className}>
      <circle cx='12' cy='12' r='8.5' />
      <path d='M12 7.5V12l3 2' />
    </Outline>
  );
}

export function EuroIcon({ className = 'h-4 w-4 shrink-0' }: IconProps) {
  return <Outline className={className}><path d='M17 6.5A6.5 6.5 0 1 0 17 17.5M4.5 10.5h9m-9 3h9' /></Outline>;
}

export function PhoneIcon({ className = 'h-4 w-4 shrink-0' }: IconProps) {
  return <Outline className={className}><path d='M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2' /></Outline>;
}

export function MailIcon({ className = 'h-4 w-4 shrink-0' }: IconProps) {
  return (
    <Outline className={className}>
      <rect x='3' y='5' width='18' height='14' rx='1' />
      <path d='m3.5 6 8.5 7 8.5-7' />
    </Outline>
  );
}

export function ChevronIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return <Outline className={className} strokeWidth={2}><path d='m6 9 6 6 6-6' /></Outline>;
}

export function CheckIcon({ className = 'h-6 w-6' }: IconProps) {
  return <Outline className={className} strokeWidth={2}><path d='m5 12.5 4.5 4.5L19 7.5' /></Outline>;
}

export function QuoteIcon({ className = 'h-9 w-9 text-accent' }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 32 32' fill='currentColor' aria-hidden='true'>
      <path d='M13 7C7.5 9 4 13.4 4 19v6h9v-9H8.2c.4-3.3 2.4-5.8 5.8-7.2zm15 0c-5.5 2-9 6.4-9 12v6h9v-9h-4.8c.4-3.3 2.4-5.8 5.8-7.2z' />
    </svg>
  );
}

export function LinkedInIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
      <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5Z' />
    </svg>
  );
}

export function MenuIcon({ className = 'h-6 w-6' }: IconProps) {
  return <Outline className={className}><path d='M4 7h16M4 12h16M4 17h16' /></Outline>;
}

export function PlayIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
      <path d='M7 5v14l12-7z' />
    </svg>
  );
}

export function PauseIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
      <rect x='6' y='5' width='4' height='14' />
      <rect x='14' y='5' width='4' height='14' />
    </svg>
  );
}
