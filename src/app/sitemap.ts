import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gosirat.com';

  const routes = [
    '',
    '/about-us',
    '/careers',
    '/contact-us',
    '/cookie-policy',
    '/disclaimer',
    '/driver-app',
    '/events',
    '/green-initiative',
    '/help-center',
    '/how-it-works',
    '/parent-app',
    '/press',
    '/privacy-policy',
    '/register',
    '/safety',
    '/schools',
    '/support',
    '/terms-and-conditions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : (['/schools', '/parent-app', '/driver-app'].includes(route) ? 0.9 : 0.8),
  }));
}
