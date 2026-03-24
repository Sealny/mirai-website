"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BackgroundPaths } from '@/components/ui/background-paths';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="relative bg-mirai-off-white overflow-hidden">
      <BackgroundPaths />
      <div className="relative z-10 max-w-content mx-auto px-6 md:px-12 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-6"
          >
            未来咨询 · Mirai Consulting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-hero font-normal text-mirai-black leading-tight mb-6"
          >
            {t('heroHeadline')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-body text-mirai-gray-dark leading-relaxed mb-10 max-w-2xl"
          >
            {t('heroSubhead')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t('ctaBook')}
            </Link>
            <Link href={`/${locale}/for-european-firms`} className="btn-secondary">
              {t('ctaExplore')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
