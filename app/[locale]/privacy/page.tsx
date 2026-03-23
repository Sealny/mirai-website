import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'legal' });
  return { title: t('privacyTitle') + ' | Mirai Consulting' };
}

export default async function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal' });

  return (
    <>
      <section className="bg-mirai-off-white py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-8">
          <h1 className="font-display text-4xl font-normal">{t('privacyTitle')}</h1>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-8 space-y-8 text-mirai-gray-dark">
          <p className="text-sm text-mirai-gray">{t('privacyLastUpdated')}</p>

          <div>
            <h2 className="font-display text-xl mb-3">{t('privacyDataController')}</h2>
            <p className="font-sans text-sm leading-relaxed">
              MiraiWorks OÜ<br />
              Registry code: 17421958<br />
              Tartu mnt 67/1-13b, 10115 Tallinn, Harju maakond, Estonia<br />
              <a href="mailto:hello@miraisolutions.org" className="text-mirai-red hover:underline">hello@miraisolutions.org</a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-3">Data processor</h2>
            <p className="font-sans text-sm leading-relaxed">
              MiraiWorks OÜ acts as both data controller and data processor for personal data submitted through this website. We process data on behalf of our clients solely for the purposes described in this policy and do not engage sub-processors without your knowledge. All processing activities are conducted in accordance with GDPR (EU) 2016/679.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-3">{t('privacyDataCollected')}</h2>
            <p className="text-sm leading-relaxed">{t('privacyDataCollectedBody')}</p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-3">{t('privacyPurpose')}</h2>
            <p className="text-sm leading-relaxed">{t('privacyPurposeBody')}</p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-3">{t('privacyRights')}</h2>
            <p className="text-sm leading-relaxed">{t('privacyRightsBody')}</p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-3">{t('privacyCookies')}</h2>
            <p className="text-sm leading-relaxed">{t('privacyCookiesBody')}</p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-3">{t('privacyContact')}</h2>
            <p className="text-sm leading-relaxed">
              <a href="mailto:hello@miraisolutions.org" className="text-mirai-red hover:underline">hello@miraisolutions.org</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
