import { MetadataRoute } from 'next'
import { EXCLUDED_PATHS, SITE_URL } from '@/lib/sitemap-utils'

/**
 * 🔧 SEO FIX: Comprehensive robots.txt
 *
 * Integrates with the new modular sitemap architecture.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          ...EXCLUDED_PATHS,
          '/*?*', // Block query-string variants from indexing
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/blogs/',
          '/projects/',
          '/about',
          '/digital-marketing-badlapur',
          '/digital-marketing-kalyan',
          '/digital-marketing-ambernath',
          '/web-architecture',
          '/paid-advertising',
          '/organic-growth',
          '/ai-agents',
          '/content-creation',
        ],
        disallow: EXCLUDED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}

