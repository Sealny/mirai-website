import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('chineseOrgsTitle'),
    description: t('chineseOrgsDescription'),
  };
}

const services = [
  { icon: '01', key: 'entryCoord' },
  { icon: '02', key: 'entitySetup' },
  { icon: '03', key: 'banking' },
  { icon: '04', key: 'immigration' },
  { icon: '05', key: 'softLanding' },
  { icon: '06', key: 'ongoing' },
];

export default function ForChineseOrgsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <ForChineseOrgsContent />;
}

function ForChineseOrgsContent() {
  const t = useTranslations('chineseOrgs');
  const locale = useLocale();

  return (
    <>
      <section className="bg-mirai-off-white py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-6">{t('label')}</p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-mirai-black leading-tight mb-6">{t('headline')}</h1>
            <p className="text-body text-mirai-gray-dark leading-relaxed">{t('subhead')}</p>
          </div>
        </div>
      </section>

      {/* Pain points + Services */}
      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-subsection mb-6">{t('painPointsTitle')}</h2>
              <ul className="space-y-3">
                {[1,2,3,4,5].map((n) => (
                  <li key={n} className="flex gap-3 text-sm text-mirai-gray-dark">
                    <span className="text-mirai-red flex-shrink-0 mt-1">—</span>
                    <span>{t(`pain${n}` as any)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-subsection mb-6">{t('servicesTitle')}</h2>
              <div className="space-y-4">
                {services.map((s) => (
                  <div key={s.key} className="flex gap-4 border-b pb-4" style={{ borderBottomWidth: '0.5px', borderColor: '#E8E9EC' }}>
                    <span className="font-sans text-xs text-mirai-red font-medium tracking-wide flex-shrink-0 w-6">{s.icon}</span>
                    <div>
                      <p className="font-sans text-sm font-medium text-mirai-black">{t(`${s.key}Title` as any)}</p>
                      <p className="text-xs text-mirai-gray-dark mt-1">{t(`${s.key}Desc` as any)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner network */}
      <section className="bg-mirai-off-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <h2 className="font-display text-subsection mb-4">{t('networkTitle')}</h2>
          <p className="text-body text-mirai-gray-dark mb-8">{t('networkDesc')}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              t('networkLaw'),
              t('networkTax'),
              t('networkImmigration'),
              t('networkRecruitment'),
              t('networkRealEstate'),
              t('networkBanking'),
            ].map((p) => (
              <div key={p} className="border rounded p-4 bg-white text-center font-sans text-sm text-mirai-gray-dark" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mirai-black text-white py-20">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8 text-center">
          <h2 className="font-display text-section mb-6">{t('ctaTitle')}</h2>
          <Link href={`/${locale}/contact`} className="btn-primary">
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
