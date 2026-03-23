import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('sectorsTitle') };
}

const sectors = [
  { key: 'logistics', slug: 'logistics-rail' },
  { key: 'ev', slug: 'ev-batteries' },
  { key: 'agriFood', slug: 'agri-food' },
  { key: 'tourism', slug: 'tourism-delegations' },
  { key: 'education', slug: 'education-training' },
  { key: 'banking', slug: 'banking-institutional' },
];

export default function SectorsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <SectorsContent />;
}

function SectorsContent() {
  const t = useTranslations('sectors');
  const locale = useLocale();

  return (
    <>
      <section className="bg-mirai-off-white py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-4">{t('sectionLabel')}</p>
          <h1 className="font-display text-4xl md:text-5xl font-normal">{t('pageTitle')}</h1>
        </div>
      </section>
      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((s) => (
              <Link key={s.slug} href={`/${locale}/sectors/${s.slug}`} className="card group hover:border-mirai-red transition-colors">
                <h2 className="font-display text-xl mb-2 group-hover:text-mirai-red transition-colors">
                  {t(`${s.key}Name` as any)}
                </h2>
                <p className="text-sm text-mirai-gray-dark">{t(`${s.key}Desc` as any)}</p>
                <div className="mt-4 text-xs font-sans text-mirai-red">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
