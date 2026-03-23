import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import AudienceCards from '@/components/home/AudienceCards';
import StatsBar from '@/components/home/StatsBar';
import SectorGrid from '@/components/home/SectorGrid';
import HowWeWork from '@/components/home/HowWeWork';
import HomeCTA from '@/components/home/HomeCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDescription'),
      images: [{ url: '/assets/og/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <AudienceCards />
      <StatsBar />
      <SectorGrid />
      <HowWeWork />
      <HomeCTA />
    </>
  );
}
