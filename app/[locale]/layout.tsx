import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/lib/constants';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/shared/CookieBanner';
import '../globals.css';

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-libre-bodoni',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: {
      template: '%s | Mirai Consulting',
      default: 'Mirai Consulting — China–Northern Europe corridor advisory',
    },
    description: 'Trusted coordination for the China–Northern Europe business corridor. Advisory firm for organizations and professionals.',
    metadataBase: new URL('https://miraiconsulting.eu'),
    openGraph: {
      images: [{ url: '/assets/og/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&display=swap" rel="stylesheet" />
        {locale === 'zh' && (
          <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap" rel="stylesheet" />
        )}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon/favicon-192.png" />
      </head>
      <body className={`font-serif text-mirai-black antialiased ${locale === 'zh' ? 'font-noto-sc' : ''}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
