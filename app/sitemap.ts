import { MetadataRoute } from 'next';
import { locales } from '@/lib/constants';

const baseUrl = 'https://miraiconsulting.eu';

const routes = [
  '',
  '/about',
  '/contact',
  '/for-chinese-organizations',
  '/for-professionals',
  '/for-european-firms',
  '/sectors',
  '/sectors/logistics-rail',
  '/sectors/ev-batteries',
  '/sectors/agri-food',
  '/sectors/tourism-delegations',
  '/sectors/education-training',
  '/sectors/banking-institutional',
  '/insights',
  '/community',
  '/privacy',
  '/impressum',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap(locale =>
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(locales.map(l => [l, `${baseUrl}/${l}${route}`]))
      }
    }))
  );
}
