import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'legal' });
  return { title: t('impressumTitle') + ' | Mirai Consulting' };
}

export default async function ImpressumPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal' });

  return (
    <>
      <section className="bg-mirai-off-white py-16">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <h1 className="font-display text-4xl font-normal">{t('impressumTitle')}</h1>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-8">
          <div className="space-y-8 text-mirai-gray-dark">
            <div>
              <h2 className="font-display text-xl mb-3">Company</h2>
              <p className="font-sans text-sm leading-relaxed">
                MiraiWorks OÜ<br />
                Legal form: Osaühing (OÜ)<br />
                Registry code: 17421958<br />
                Registered: 26.01.2026<br />
                Registered address: Tartu mnt 67/1-13b, 10115 Tallinn, Harju maakond, Estonia<br />
                Operating address: Warsaw, Poland
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl mb-3">Management</h2>
              <p className="font-sans text-sm leading-relaxed">
                Founder &amp; Managing Director: Mateusz Więckowski<br />
                Co-founder &amp; China Director: Zekai Xu
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl mb-3">Contact</h2>
              <p className="font-sans text-sm leading-relaxed">
                Email: <a href="mailto:hello@miraisolutions.org" className="text-mirai-red hover:underline">hello@miraisolutions.org</a><br />
                Website: miraiconsulting.eu
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl mb-3">Disclaimer</h2>
              <p className="font-sans text-sm leading-relaxed text-mirai-gray">
                {t('impressumDisclaimer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
