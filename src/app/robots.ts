import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/register'],
    },
    sitemap: 'https://gosirat.com/sitemap.xml',
  }
}
