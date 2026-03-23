import { getRequestConfig } from 'next-intl/server';
import { locales } from './lib/constants';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    const { notFound } = await import('next/navigation');
    notFound();
  }

  return {
    locale: locale!,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
