import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="bg-mirai-off-white">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="hero-animate font-sans text-xs tracking-widest uppercase text-mirai-red mb-6">
            未来咨询 · Mirai Consulting
          </p>
          <h1 className="hero-animate hero-animate-delay-1 font-display text-4xl md:text-5xl lg:text-hero font-normal text-mirai-black leading-tight mb-6">
            {t('heroHeadline')}
          </h1>
          <p className="hero-animate hero-animate-delay-2 text-body text-mirai-gray-dark leading-relaxed mb-10 max-w-2xl">
            {t('heroSubhead')}
          </p>
          <div className="hero-animate hero-animate-delay-3 flex flex-col sm:flex-row gap-4">
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t('ctaBook')}
            </Link>
            <Link href={`/${locale}/for-european-firms`} className="btn-secondary">
              {t('ctaExplore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
