'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { key: 'services', href: '/for-european-firms' },
  { key: 'about', href: '/about' },
  { key: 'insights', href: '/insights' },
  { key: 'community', href: '/community' },
  { key: 'contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const locale = useLocale();
  const t = useTranslations('nav');

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500"
      style={{
        borderBottom: visible ? '0.5px solid #E8E9EC' : 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <Image
              src="/assets/logo/mirai-logo-transparent.png"
              alt="Mirai Consulting"
              width={180}
              height={39}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                className="font-sans text-sm text-mirai-gray-dark hover:text-mirai-black transition-colors tracking-wide"
              >
                {t(link.key as any)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href={`/${locale}/contact`}
              className="hidden md:inline-flex btn-primary text-xs py-2 px-4"
            >
              {t('bookConsultation')}
            </Link>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-px bg-mirai-black transition-transform ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block h-px bg-mirai-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-mirai-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t py-4" style={{ borderTopWidth: '0.5px', borderTopColor: '#E8E9EC' }}>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={`/${locale}${link.href}`}
                  className="font-sans text-sm text-mirai-gray-dark hover:text-mirai-black py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.key as any)}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="btn-primary text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                {t('bookConsultation')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
