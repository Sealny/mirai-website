import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { siteConfig } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="bg-mirai-black text-white">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/assets/logo/mirai-logo-white.png"
              alt="Mirai Consulting"
              width={160}
              height={35}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-mirai-gray-light leading-relaxed mt-4">
              {t('tagline')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-mirai-gray-light mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/for-chinese-organizations`} className="text-sm text-mirai-gray-light hover:text-white transition-colors">{nav('forChineseOrgs')}</Link></li>
              <li><Link href={`/${locale}/for-professionals`} className="text-sm text-mirai-gray-light hover:text-white transition-colors">{nav('forProfessionals')}</Link></li>
              <li><Link href={`/${locale}/for-european-firms`} className="text-sm text-mirai-gray-light hover:text-white transition-colors">{nav('forEuropeanFirms')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-mirai-gray-light mb-4">{t('company')}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/about`} className="text-sm text-mirai-gray-light hover:text-white transition-colors">{nav('about')}</Link></li>
              <li><Link href={`/${locale}/insights`} className="text-sm text-mirai-gray-light hover:text-white transition-colors">{nav('insights')}</Link></li>
              <li><Link href={`/${locale}/community`} className="text-sm text-mirai-gray-light hover:text-white transition-colors">{nav('community')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-sm text-mirai-gray-light hover:text-white transition-colors">{nav('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-mirai-gray-light mb-4">{t('contactUs')}</h3>
            <ul className="space-y-2 text-sm text-mirai-gray-light">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a></li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ borderTopWidth: '0.5px', borderTopColor: '#2D2D2D' }}>
          <p className="text-xs text-mirai-gray-light font-sans">
            © {new Date().getFullYear()} MiraiWorks OÜ. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy`} className="text-xs text-mirai-gray-light hover:text-white font-sans transition-colors">{nav('privacy')}</Link>
            <Link href={`/${locale}/impressum`} className="text-xs text-mirai-gray-light hover:text-white font-sans transition-colors">{nav('impressum')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
