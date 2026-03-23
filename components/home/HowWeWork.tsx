import { useTranslations } from 'next-intl';
import AnimateIn from '@/components/shared/AnimateIn';

export default function HowWeWork() {
  const t = useTranslations('home');

  return (
    <section className="bg-white section-padding">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn direction="left">
            <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-4">
              {t('howWeWorkLabel')}
            </p>
            <h2 className="font-display text-section text-mirai-black mb-6">
              {t('howWeWorkTitle')}
            </h2>
            <p className="text-body text-mirai-gray-dark leading-relaxed">
              {t('howWeWorkBody')}
            </p>
          </AnimateIn>
          {/* Flow diagram */}
          <AnimateIn delay={150}>
            <div className="bg-mirai-off-white border rounded p-8" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>
              <div className="flex flex-col gap-4">
                <div className="bg-white border rounded p-4 text-center" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>
                  <div className="font-sans text-xs tracking-widest uppercase text-mirai-gray mb-1">{t('flowClient')}</div>
                  <div className="font-display text-lg">{t('flowClientDesc')}</div>
                </div>
                <div className="text-center text-mirai-red font-sans text-xl">↓</div>
                <div className="bg-mirai-black text-white rounded p-4 text-center">
                  <div className="font-sans text-xs tracking-widest uppercase text-mirai-gray-light mb-1">Mirai Consulting</div>
                  <div className="font-display text-lg">{t('flowMiraiDesc')}</div>
                </div>
                <div className="text-center text-mirai-red font-sans text-xl">↓</div>
                <div className="bg-white border rounded p-4" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>
                  <div className="font-sans text-xs tracking-widest uppercase text-mirai-gray mb-3 text-center">{t('flowPartners')}</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Legal', 'Tax', 'Immigration', 'Recruitment', 'Banking', 'Real Estate'].map((p) => (
                      <div key={p} className="text-xs text-center font-sans text-mirai-gray-dark border rounded py-1" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>{p}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
