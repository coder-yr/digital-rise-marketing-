import { buildSitemapIndex, SITE_URL } from '@/lib/sitemap-utils';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
// ✅ SEO FIX: match sub-sitemap revalidation (5 min) so index stays fresh
export const revalidate = 300;

export async function GET() {
  const sitemaps = [
    `${SITE_URL}/sitemaps/pages.xml`,
    `${SITE_URL}/sitemaps/blogs.xml`,
    `${SITE_URL}/sitemaps/services.xml`,
    `${SITE_URL}/sitemaps/locations.xml`,
    `${SITE_URL}/sitemaps/projects.xml`,
  ];

  const xml = buildSitemapIndex(sitemaps);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      // ✅ SEO FIX: reduced from 24h to 5 min to match sub-sitemaps
      'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=60',
    },
  });
}
