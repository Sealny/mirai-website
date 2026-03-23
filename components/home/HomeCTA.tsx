import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function HomeCTA() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="bg-mirai-off-white section-padding">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8 text-center">
        <h2 className="font-display text-section text-mirai-black mb-6">
          {t('ctaHeading')}
        </h2>
        <Link href={`/${locale}/contact`} className="btn-primary">
          {t('ctaBook')}
        </Link>
      </div>
    </section>
  );
}
