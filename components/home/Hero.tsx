"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { SilkBackground } from '@/components/ui/silk-background';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="relative h-screen min-h-[600px] bg-white overflow-hidden flex flex-col">
      <SilkBackground />

      {/* Big logo — top-left corner */}
      <div className="relative z-10 px-8 md:px-14 pt-10 md:pt-12 hero-fade-in">
        <Image
          src="/assets/logo/mirai-logo-transparent.png"
          alt="Mirai Consulting"
          width={1381}
          height={302}
          className="w-44 md:w-64 lg:w-80"
          priority
        />
      </div>

      {/* Hero text — vertically centred in remaining space */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-content mx-auto px-8 md:px-14 lg:px-16">
          <div className="max-w-2xl">
            <p className="hero-fade-in hero-delay-1 font-sans text-xs tracking-widest uppercase text-mirai-red mb-5">
              未来咨询 · Mirai Consulting
            </p>
            <h1 className="hero-fade-in hero-delay-2 font-display text-4xl md:text-5xl lg:text-6xl font-normal text-mirai-black leading-[1.12] mb-7">
              {t('heroHeadline')}
            </h1>
            <p className="hero-fade-in hero-delay-3 text-base md:text-lg text-mirai-gray-dark leading-relaxed mb-10">
              {t('heroSubhead')}
            </p>
            <div className="hero-fade-in hero-delay-4 flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {t('ctaBook')}
              </Link>
              <Link href={`/${locale}/for-european-firms`} className="btn-secondary">
                {t('ctaExplore')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 pb-8 flex justify-center hero-fade-in hero-delay-5">
        <div className="scroll-hint-line" />
      </div>
    </section>
  );
}
