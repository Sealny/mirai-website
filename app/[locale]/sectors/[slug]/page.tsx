import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const sectorSlugs = ['logistics-rail', 'ev-batteries', 'agri-food', 'tourism-delegations', 'education-training', 'banking-institutional'] as const;
type SectorSlug = typeof sectorSlugs[number];

const slugToKey: Record<SectorSlug, string> = {
  'logistics-rail': 'sector_logistics_rail',
  'ev-batteries': 'sector_ev_batteries',
  'agri-food': 'sector_agri_food',
  'tourism-delegations': 'sector_tourism_delegations',
  'education-training': 'sector_education_training',
  'banking-institutional': 'sector_banking_institutional',
};

export function generateStaticParams() {
  const localeList = ['en', 'zh', 'pl', 'de', 'no', 'sv', 'fi', 'da', 'et'];
  return localeList.flatMap(locale =>
    sectorSlugs.map(slug => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  if (!sectorSlugs.includes(params.slug as SectorSlug)) return {};
  const nsKey = slugToKey[params.slug as SectorSlug] as any;
  const t = await getTranslations({ locale: params.locale, namespace: nsKey });
  return { title: `${t('name')} | Mirai Consulting` };
}

export default function SectorPage({ params: { slug, locale } }: { params: { slug: string; locale: string } }) {
  setRequestLocale(locale);
  if (!sectorSlugs.includes(slug as SectorSlug)) notFound();
  return <SectorContent slug={slug as SectorSlug} />;
}

function SectorContent({ slug }: { slug: SectorSlug }) {
  const nsKey = slugToKey[slug] as any;
  const t = useTranslations(nsKey);
  const sectorsT = useTranslations('sectors');
  const locale = useLocale();
  const isFullContent = ['en', 'zh', 'pl'].includes(locale);

  return (
    <>
      <section className="bg-mirai-off-white py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="max-w-3xl">
            <Link href={`/${locale}/sectors`} className="font-sans text-xs text-mirai-gray hover:text-mirai-red mb-6 inline-block tracking-wide">
              ← {sectorsT('backToSectors')}
            </Link>
            <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-4">Sector Focus</p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-mirai-black leading-tight mb-4">{t('name')}</h1>
            <p className="text-body text-mirai-gray-dark italic">{t('positioning')}</p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-subsection mb-6">{t('whyTitle')}</h2>
              {isFullContent ? (
                <div className="space-y-4">
                  <p className="text-body text-mirai-gray-dark leading-relaxed">{t('whyBody')}</p>
                </div>
              ) : (
                <div className="border-l-4 border-mirai-gray-lighter pl-4 py-2">
                  <p className="text-sm text-mirai-gray-dark italic mb-2">{t('contentNote')}</p>
                  <Link href={`/en/sectors/${slug}`} className="text-xs font-sans text-mirai-red hover:underline">{t('readInEnglish')}</Link>
                </div>
              )}
            </div>
            <div>
              <h2 className="font-display text-subsection mb-6">{t('servicesTitle')}</h2>
              <ul className="space-y-3">
                {[1,2,3,4,5].map((n) => (
                  <li key={n} className="flex gap-3 text-sm text-mirai-gray-dark">
                    <span className="text-mirai-red flex-shrink-0">—</span>
                    <span>{t(`service${n}` as any)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t" style={{ borderTopWidth: '0.5px', borderColor: '#E8E9EC' }}>
                <Link href={`/${locale}/contact`} className="btn-primary w-full text-center">
                  {t('cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
