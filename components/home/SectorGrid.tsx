import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const sectors = [
  { key: 'logistics', slug: 'logistics-rail' },
  { key: 'ev', slug: 'ev-batteries' },
  { key: 'agriFood', slug: 'agri-food' },
  { key: 'tourism', slug: 'tourism-delegations' },
  { key: 'education', slug: 'education-training' },
  { key: 'banking', slug: 'banking-institutional' },
];

export default function SectorGrid() {
  const t = useTranslations('sectors');
  const locale = useLocale();

  return (
    <section className="bg-mirai-off-white section-padding">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
        <div className="mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-4">{t('sectionLabel')}</p>
          <h2 className="font-display text-section text-mirai-black">{t('sectionTitle')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector) => (
            <Link
              key={sector.key}
              href={`/${locale}/sectors/${sector.slug}`}
              className="group bg-white border hover:border-mirai-red p-6 transition-colors duration-200 rounded"
              style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}
            >
              <h3 className="font-display text-lg mb-2 group-hover:text-mirai-red transition-colors">
                {t(`${sector.key}Name` as any)}
              </h3>
              <p className="text-sm text-mirai-gray leading-relaxed">
                {t(`${sector.key}Desc` as any)}
              </p>
              <div className="mt-4 text-xs font-sans text-mirai-red">→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
