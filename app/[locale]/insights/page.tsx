import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('insightsTitle'),
    description: t('insightsDescription'),
  };
}

const posts = [
  { slug: 'chinese-companies-bank-account-poland', category: 'Market entry', date: '2026-01-15', titleKey: 'post1Title', excerptKey: 'post1Excerpt' },
  { slug: 'poland-immigration-reform-2025', category: 'Immigration & visas', date: '2026-02-01', titleKey: 'post2Title', excerptKey: 'post2Excerpt' },
  { slug: 'eu-blue-card-poland-guide', category: 'Immigration & visas', date: '2026-02-20', titleKey: 'post3Title', excerptKey: 'post3Excerpt' },
  { slug: 'polish-business-culture-chinese-managers', category: 'Culture & communication', date: '2026-03-05', titleKey: 'post4Title', excerptKey: 'post4Excerpt' },
  { slug: 'ev-supply-chain-poland', category: 'Sector updates', date: '2026-03-10', titleKey: 'post5Title', excerptKey: 'post5Excerpt' },
];

export default function InsightsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <InsightsContent />;
}

function InsightsContent() {
  const t = useTranslations('insights');
  const locale = useLocale();

  return (
    <>
      <section className="bg-mirai-off-white py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-6">Insights</p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-mirai-black">{t('headline')}</h1>
            <p className="text-body text-mirai-gray-dark leading-relaxed mt-4">{t('subhead')}</p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
          {['en', 'zh'].includes(locale) ? (
            <div className="max-w-3xl space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="border-b pb-8" style={{ borderBottomWidth: '0.5px', borderColor: '#E8E9EC' }}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-sans text-xs tracking-wide uppercase text-mirai-red bg-mirai-off-white px-2 py-1 rounded">{post.category}</span>
                    <time className="font-sans text-xs text-mirai-gray">{post.date}</time>
                  </div>
                  <h2 className="font-display text-xl mb-2">
                    <Link href={`/${locale}/insights/${post.slug}`} className="hover:text-mirai-red transition-colors">
                      {t(post.titleKey as any)}
                    </Link>
                  </h2>
                  <p className="text-sm text-mirai-gray-dark leading-relaxed">{t(post.excerptKey as any)}</p>
                  <Link href={`/${locale}/insights/${post.slug}`} className="mt-3 inline-block text-xs font-sans text-mirai-red hover:underline">
                    {t('readMore')} →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl">
              <p className="text-body text-mirai-gray-dark mb-6">{t('otherLangNote')}</p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/en/insights" className="btn-secondary text-sm">Read in English</Link>
                <Link href="/zh/insights" className="btn-secondary text-sm">中文阅读</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
