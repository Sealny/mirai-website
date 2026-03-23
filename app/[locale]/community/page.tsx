import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('communityTitle'),
    description: t('communityDescription'),
  };
}

export default function CommunityPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <CommunityContent />;
}

function CommunityContent() {
  const t = useTranslations('community');
  const locale = useLocale();

  return (
    <>
      <section className="bg-mirai-off-white py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-6">Community</p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-mirai-black mb-6">{t('headline')}</h1>
            <p className="text-body text-mirai-gray-dark leading-relaxed">{t('subhead')}</p>
          </div>
        </div>
      </section>

      {/* Membership tiers */}
      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <h2 className="font-display text-subsection mb-12 text-center">{t('membershipTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individual */}
            <div className="card">
              <div className="font-sans text-xs text-mirai-red tracking-widest uppercase mb-3">{t('individualTier')}</div>
              <div className="font-display text-3xl mb-1">€100 <span className="text-base font-sans text-mirai-gray">/year</span></div>
              <div className="border-t my-4" style={{ borderTopWidth: '0.5px', borderColor: '#E8E9EC' }} />
              <ul className="space-y-2">
                {[1,2,3,4,5].map((n) => (
                  <li key={n} className="flex gap-2 text-sm text-mirai-gray-dark">
                    <span className="text-mirai-red flex-shrink-0">✓</span>
                    <span>{t(`individual${n}` as any)}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/contact`} className="btn-primary w-full text-center mt-6 block">{t('joinNow')}</Link>
            </div>
            {/* Corporate */}
            <div className="card bg-mirai-black text-white" style={{ borderColor: '#1A1A1A' }}>
              <div className="font-sans text-xs text-mirai-red tracking-widest uppercase mb-3">{t('corporateTier')}</div>
              <div className="font-display text-3xl mb-1 text-white">€800 <span className="text-base font-sans text-mirai-gray-light">/year</span></div>
              <div className="border-t my-4" style={{ borderTopWidth: '0.5px', borderColor: '#2D2D2D' }} />
              <ul className="space-y-2">
                {[1,2,3,4,5].map((n) => (
                  <li key={n} className="flex gap-2 text-sm text-mirai-gray-light">
                    <span className="text-mirai-red flex-shrink-0">✓</span>
                    <span>{t(`corporate${n}` as any)}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/contact`} className="btn-primary w-full text-center mt-6 block">{t('contactUs')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events + WeChat */}
      <section className="bg-mirai-off-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-subsection mb-4">{t('eventsTitle')}</h2>
              <p className="text-sm text-mirai-gray-dark mb-6">{t('eventsDesc')}</p>
              <div className="border rounded p-6 bg-white text-center text-sm text-mirai-gray-dark" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>
                {t('eventsPlaceholder')}
              </div>
            </div>
            <div>
              <h2 className="font-display text-subsection mb-4">WeChat</h2>
              <p className="text-sm text-mirai-gray-dark mb-6">{t('wechatDesc')}</p>
              <div className="border rounded p-6 bg-white text-center text-sm text-mirai-gray-dark max-w-xs" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC', aspectRatio: '1/1' }}>
                {t('wechatQR')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
