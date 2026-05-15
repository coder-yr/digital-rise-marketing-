import { buildXml, SITE_URL, safeDate } from '@/lib/sitemap-utils';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 86400;

export async function GET() {
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'yearly' },
    { url: '/projects', priority: 0.9, changefreq: 'weekly' },
    { url: '/blogs', priority: 0.9, changefreq: 'daily' },
    { url: '/booking', priority: 0.8, changefreq: 'monthly' },
    { url: '/partnership', priority: 0.5, changefreq: 'yearly' },
  ];

  const urlNodes = pages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${safeDate()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('\n');

  return new NextResponse(buildXml(urlNodes), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
    }
  });
}
