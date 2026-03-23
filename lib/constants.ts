export const locales = ['en', 'zh', 'pl', 'de', 'no', 'sv', 'fi', 'da', 'et'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
  pl: 'PL',
  de: 'DE',
  no: 'NO',
  sv: 'SV',
  fi: 'FI',
  da: 'DA',
  et: 'ET',
};

export const localeFullNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  pl: 'Polski',
  de: 'Deutsch',
  no: 'Norsk',
  sv: 'Svenska',
  fi: 'Suomi',
  da: 'Dansk',
  et: 'Eesti',
};

export const siteConfig = {
  name: 'Mirai Consulting',
  domain: 'miraiconsulting.eu',
  email: 'hello@miraisolutions.org',
  location: 'Warsaw, Poland',
  linkedinMatt: 'https://www.linkedin.com/in/matt-wieckowski-002b08168/',
  linkedinZekai: 'https://www.linkedin.com/in/zekai-xu-89332017b/',
};
