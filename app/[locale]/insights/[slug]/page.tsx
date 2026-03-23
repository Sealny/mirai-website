import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const postSlugs = [
  'chinese-companies-bank-account-poland',
  'poland-immigration-reform-2025',
  'eu-blue-card-poland-guide',
  'polish-business-culture-chinese-managers',
  'ev-supply-chain-poland',
];

const postMap: Record<string, { titleKey: string; excerptKey: string; category: string; date: string }> = {
  'chinese-companies-bank-account-poland': { titleKey: 'post1Title', excerptKey: 'post1Excerpt', category: 'Market entry', date: '2026-01-15' },
  'poland-immigration-reform-2025': { titleKey: 'post2Title', excerptKey: 'post2Excerpt', category: 'Immigration & visas', date: '2026-02-01' },
  'eu-blue-card-poland-guide': { titleKey: 'post3Title', excerptKey: 'post3Excerpt', category: 'Immigration & visas', date: '2026-02-20' },
  'polish-business-culture-chinese-managers': { titleKey: 'post4Title', excerptKey: 'post4Excerpt', category: 'Culture & communication', date: '2026-03-05' },
  'ev-supply-chain-poland': { titleKey: 'post5Title', excerptKey: 'post5Excerpt', category: 'Sector updates', date: '2026-03-10' },
};

export function generateStaticParams() {
  const localeList = ['en', 'zh', 'pl', 'de', 'no', 'sv', 'fi', 'da', 'et'];
  return localeList.flatMap(locale => postSlugs.map(slug => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const post = postMap[params.slug];
  if (!post) return {};
  const t = await getTranslations({ locale: params.locale, namespace: 'insights' });
  return { title: `${t(post.titleKey as any)} | Mirai Consulting` };
}

export default function InsightPostPage({ params: { slug, locale } }: { params: { slug: string; locale: string } }) {
  setRequestLocale(locale);
  if (!postSlugs.includes(slug)) notFound();
  return <PostContent slug={slug} />;
}

function PostContent({ slug }: { slug: string }) {
  const t = useTranslations('insights');
  const locale = useLocale();
  const post = postMap[slug];

  if (!post) return null;

  return (
    <>
      <section className="bg-mirai-off-white py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-8">
          <Link href={`/${locale}/insights`} className="font-sans text-xs text-mirai-gray hover:text-mirai-red mb-8 inline-block">← {t('backToInsights')}</Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-sans text-xs tracking-wide uppercase text-mirai-red bg-white px-2 py-1 rounded border" style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}>{post.category}</span>
            <time className="font-sans text-xs text-mirai-gray">{post.date}</time>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-normal text-mirai-black leading-tight">{t(post.titleKey as any)}</h1>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-8">
          <p className="text-body text-mirai-gray-dark leading-relaxed italic mb-8 border-l-2 border-mirai-red pl-4">{t(post.excerptKey as any)}</p>
          <div className="space-y-4 text-mirai-gray-dark">
            <p className="text-body leading-relaxed">{t('fullContentComingSoon')}</p>
          </div>
          <div className="mt-12 pt-8 border-t" style={{ borderTopWidth: '0.5px', borderColor: '#E8E9EC' }}>
            <p className="font-sans text-sm text-mirai-gray-dark mb-4">{t('consultationPrompt')}</p>
            <Link href={`/${locale}/contact`} className="btn-primary">{t('bookConsultation')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
