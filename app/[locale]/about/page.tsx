import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Metadata } from 'next';
import AnimateIn from '@/components/shared/AnimateIn';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    openGraph: {
      title: t('aboutTitle'),
      description: t('aboutDescription'),
      images: [{ url: '/assets/og/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations('about');

  return (
    <>
      {/* Hero */}
      <section className="bg-mirai-off-white py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="max-w-3xl">
            <p className="hero-animate font-sans text-xs tracking-widest uppercase text-mirai-red mb-6">About</p>
            <h1 className="hero-animate hero-animate-delay-1 font-display text-4xl md:text-5xl font-normal text-mirai-black leading-tight mb-6">
              {t('headline')}
            </h1>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimateIn direction="left">
              <h2 className="font-display text-subsection mb-6">{t('storyTitle')}</h2>
              <div className="space-y-4">
                {t('story').split('\n\n').map((para: string, i: number) => (
                  <p key={i} className="text-body text-mirai-gray-dark leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <h2 className="font-display text-subsection mb-6">{t('missionTitle')}</h2>
              <p className="text-body text-mirai-gray-dark leading-relaxed italic border-l-2 border-mirai-red pl-6">
                {t('mission')}
              </p>
              <div className="mt-10">
                <h3 className="font-display text-lg mb-4">{t('principlesTitle')}</h3>
                <ol className="space-y-3">
                  {[1, 2, 3, 4].map((n) => (
                    <li key={n} className="flex gap-3 text-sm text-mirai-gray-dark">
                      <span className="text-mirai-red font-display text-lg leading-none flex-shrink-0">{n}.</span>
                      <span className="leading-relaxed">{t(`principle${n}` as any)}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Team — stacked, blended portraits */}
      <section className="bg-mirai-off-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <AnimateIn direction="none">
            <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-4">{t('teamLabel')}</p>
            <h2 className="font-display text-section mb-16">{t('teamTitle')}</h2>
          </AnimateIn>

          {/* Matt */}
          <AnimateIn className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 bg-white overflow-hidden rounded"
              style={{ border: '0.5px solid #E8E9EC' }}>
              {/* Portrait with blend */}
              <div className="md:col-span-2 relative min-h-[360px] bg-white overflow-hidden">
                <Image
                  src="/assets/team/matt-wieckowski.png"
                  alt="Matt Więckowski"
                  width={831}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ mixBlendMode: 'multiply' }}
                />
                {/* Gradient blend to white on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white pointer-events-none hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none md:hidden" />
              </div>
              {/* Bio */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl mb-1">Matt Więckowski</h3>
                <p className="font-sans text-xs text-mirai-red tracking-wide uppercase mb-4">{t('mattTitle')}</p>
                <p className="text-sm text-mirai-gray-dark leading-relaxed mb-5">{t('mattBio')}</p>
                <p className="font-sans text-xs text-mirai-gray mb-2">{t('mattCredentials')}</p>
                <p className="font-sans text-xs text-mirai-gray-dark">Warsaw, Poland</p>
              </div>
            </div>
          </AnimateIn>

          {/* Zekai */}
          <AnimateIn delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 bg-white overflow-hidden rounded"
              style={{ border: '0.5px solid #E8E9EC' }}>
              {/* Portrait with blend */}
              <div className="md:col-span-2 relative min-h-[360px] bg-white overflow-hidden md:order-last">
                <Image
                  src="/assets/team/zekai-xu.png"
                  alt="Zekai Xu"
                  width={1024}
                  height={1077}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ mixBlendMode: 'multiply' }}
                />
                {/* Gradient blend to white on the left */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white pointer-events-none hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none md:hidden" />
              </div>
              {/* Bio */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl mb-1">{t('zekaiName')}</h3>
                <p className="font-sans text-xs text-mirai-red tracking-wide uppercase mb-4">{t('zekaiTitle')}</p>
                <p className="text-sm text-mirai-gray-dark leading-relaxed mb-5">{t('zekaiBio')}</p>
                <p className="font-sans text-xs text-mirai-gray mb-2">{t('zekaiCredentials')}</p>
                <p className="font-sans text-xs text-mirai-gray-dark">Shanghai, China</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why this team */}
      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <AnimateIn className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-subsection mb-6">{t('whyTeamTitle')}</h2>
            <p className="text-body text-mirai-gray-dark leading-relaxed">{t('whyTeam')}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Credentials grid */}
      <section className="bg-mirai-off-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <AnimateIn direction="none">
            <h2 className="font-display text-subsection mb-8 text-center">{t('credentialsTitle')}</h2>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Fudan University',
              'Lund University',
              'Zhejiang University',
              'UNHCR Geneva',
              'Nordic tech',
              'Published research',
              'University of Warsaw',
              'MiraiWorks OÜ',
            ].map((cred, i) => (
              <AnimateIn key={cred} delay={i * 60} direction="none">
                <div className="border rounded p-4 text-center bg-white h-full" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>
                  <p className="font-sans text-xs text-mirai-gray-dark">{cred}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
