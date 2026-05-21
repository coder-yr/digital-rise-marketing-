import { buildXml, safeDate } from '@/lib/sitemap-utils';
import { SITE_URL } from '@/lib/site';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 86400;

export async function GET() {
  const services = [
    '/web-architecture',
    '/paid-advertising',
    '/organic-growth',
    '/ai-agents',
    '/content-creation'
  ];

  const urlNodes = services.map(url => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${safeDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n');

  return new NextResponse(buildXml(urlNodes), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
    }
  });
}
