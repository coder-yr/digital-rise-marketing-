import { buildXml, safeDate } from '@/lib/sitemap-utils';
import { SITE_URL } from '@/lib/site';
import { localSeoCities } from '@/lib/localSeo';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const revalidate = 86400;

export async function GET() {
  const urlNodes = Object.values(localSeoCities).map(city => `  <url>
    <loc>${SITE_URL}${city.canonicalPath}</loc>
    <lastmod>${safeDate()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n');

  return new NextResponse(buildXml(urlNodes), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
    }
  });
}
