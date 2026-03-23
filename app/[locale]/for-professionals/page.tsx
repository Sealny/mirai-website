import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('professionalsTitle'),
    description: t('professionalsDescription'),
  };
}

export default function ForProfessionalsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <ForProfessionalsContent />;
}

function ForProfessionalsContent() {
  const t = useTranslations('professionals');
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

      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <h2 className="font-display text-subsection mb-8">{t('servicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((n) => (
              <div key={n} className="card">
                <div className="font-sans text-xs text-mirai-red tracking-widest uppercase mb-3">0{n}</div>
                <h3 className="font-display text-lg mb-2">{t(`service${n}Title` as any)}</h3>
                <p className="text-sm text-mirai-gray-dark leading-relaxed">{t(`service${n}Desc` as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-mirai-off-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-subsection mb-4">{t('communityTitle')}</h2>
            <p className="text-body text-mirai-gray-dark leading-relaxed mb-8">{t('communityDesc')}</p>
            <Link href={`/${locale}/community`} className="btn-secondary">{t('communityLink')}</Link>
          </div>
        </div>
      </section>

      <section className="bg-mirai-black text-white py-20">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8 text-center">
          <h2 className="font-display text-section mb-6">{t('ctaTitle')}</h2>
          <Link href={`/${locale}/contact`} className="btn-primary">{t('ctaButton')}</Link>
        </div>
      </section>
    </>
  );
}
