import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import AnimateIn from '@/components/shared/AnimateIn';

const cards = [
  { key: 'chineseOrgs', href: '/for-chinese-organizations', icon: '◈' },
  { key: 'professionals', href: '/for-professionals', icon: '◉' },
  { key: 'europeanFirms', href: '/for-european-firms', icon: '◫' },
];

export default function AudienceCards() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="bg-white section-padding">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimateIn key={card.key} delay={i * 100}>
              <Link
                href={`/${locale}${card.href}`}
                className="group card hover:border-mirai-red transition-colors duration-200 block h-full"
              >
                <div className="text-mirai-red text-2xl mb-4">{card.icon}</div>
                <h3 className="font-display text-subsection mb-3 group-hover:text-mirai-red transition-colors">
                  {t(`${card.key}Title` as any)}
                </h3>
                <p className="text-sm text-mirai-gray leading-relaxed">
                  {t(`${card.key}Desc` as any)}
                </p>
                <div className="mt-6 text-xs font-sans tracking-wide text-mirai-red group-hover:translate-x-1 transition-transform inline-block">
                  {t('learnMore')} →
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
