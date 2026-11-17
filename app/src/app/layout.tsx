import type { Metadata } from 'next';
/*
 * FONTS — change these two imports to change the site's typefaces.
 *
 * Each one exposes a CSS variable that `globals.css` picks up:
 *   --font-display-src -> --font-display (headings, labels)
 *   --font-sans-src    -> --font-sans    (everything else)
 */
import { Inter, Jost } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ScrollEffects } from '@/components/ScrollEffects';
import { TrackingScriptsBody, TrackingScriptsHead } from '@/components/TrackingScripts';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const display = Jost({
  variable: '--font-display-src',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const sans = Inter({
  variable: '--font-sans-src',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

/* Static for now; the Sanity step moves this back to the siteInformation singleton. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Heupers Werving & Selectie',
    template: '%s · Heupers Werving & Selectie',
  },
  description:
    'Heupers Werving & Selectie verbindt ambitieuze professionals met toonaangevende organisaties in de bouw- en vastgoedsector.',
  openGraph: {
    type: 'website',
    siteName: 'Heupers Werving & Selectie',
    locale: 'nl_NL',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='nl'
      data-scroll-behavior='smooth'
      className={`${display.variable} ${sans.variable} h-full antialiased`}
      // The inline script below adds `js` before hydration.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <TrackingScriptsHead />
      </head>
      <body className='min-h-full font-sans'>
        {/* Vendor-specified position: first element inside <body>. */}
        <TrackingScriptsBody />
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-ink'
        >
          Naar de inhoud
        </a>
        <Header />
        {children}
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
