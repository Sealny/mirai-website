'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations('cookies');
  const locale = useLocale();

  useEffect(() => {
    const consent = localStorage.getItem('mirai-cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('mirai-cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('mirai-cookie-consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-mirai-black text-white p-4 z-50">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-mirai-gray-light leading-relaxed">
          {t('message')}{' '}
          <Link href={`/${locale}/privacy`} className="text-mirai-gray-light underline hover:text-white">
            {t('privacyLink')}
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="font-sans text-xs text-mirai-gray-light hover:text-white border px-4 py-2 rounded transition-colors"
            style={{ borderWidth: '0.5px', borderColor: '#6B7080' }}
          >
            {t('decline')}
          </button>
          <button
            onClick={accept}
            className="font-sans text-xs bg-mirai-red text-white px-4 py-2 rounded hover:bg-mirai-red-dark transition-colors"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
