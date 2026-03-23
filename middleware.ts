import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/constants';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
