import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { siteConfig } from '@/lib/constants';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('contactTitle'),
    description: t('contactDescription'),
    openGraph: {
      title: t('contactTitle'),
      description: t('contactDescription'),
      images: [{ url: '/assets/og/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      <section className="bg-mirai-off-white py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-6">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-mirai-black leading-tight">
              {t('headline')}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-display text-subsection mb-6">{t('otherWays')}</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-mirai-gray mb-2">{t('emailLabel')}</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-mirai-red hover:underline">{siteConfig.email}</a>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-mirai-gray mb-2">{t('locationLabel')}</p>
                  <p className="text-mirai-gray-dark">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-mirai-gray mb-2">{t('bookingLabel')}</p>
                  <div className="border rounded p-4 text-center bg-mirai-off-white text-sm text-mirai-gray-dark" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>
                    {t('calendlyPlaceholder')}
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-mirai-gray mb-2">WeChat</p>
                  <div className="border rounded p-4 text-center bg-mirai-off-white text-sm text-mirai-gray-dark" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>
                    {t('wechatPlaceholder')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
