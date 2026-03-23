import { useTranslations } from 'next-intl';
import AnimateIn from '@/components/shared/AnimateIn';

export default function StatsBar() {
  const t = useTranslations('home');

  const stats = [
    { value: '$44.95bn', labelKey: 'statTrade' },
    { value: '3,000+', labelKey: 'statCompanies' },
    { value: '6', labelKey: 'statMarkets' },
    { value: '38', labelKey: 'statCities' },
  ];

  return (
    <section className="bg-mirai-black text-white">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.labelKey} delay={i * 80} direction="none" className="text-center">
              <div className="font-display text-3xl md:text-4xl font-normal text-white mb-2">
                {stat.value}
              </div>
              <div className="font-sans text-xs tracking-wide text-mirai-gray-light uppercase">
                {t(stat.labelKey as any)}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
