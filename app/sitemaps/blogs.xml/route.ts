import { buildXml, API_URL, safeDate, escapeXml } from '@/lib/sitemap-utils';
import { SITE_URL } from '@/lib/site';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
// ✅ SEO FIX: Reduced to 5 min so new blogs are indexed within minutes, not hours
export const revalidate = 300;

type BlogSitemapItem = {
  slug: string;
  title: string;
  image?: string;
  updatedAt?: string;
  createdAt?: string;
  date?: string;
}

async function fetchBlogs() {
  const candidates = [API_URL]
  if (process.env.NODE_ENV !== 'production') {
    candidates.push('http://localhost:5000')
  }

  for (const baseUrl of candidates) {
    try {
      const cleanApiUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      const res = await fetch(`${cleanApiUrl}/api/blog`, { cache: 'no-store' });
      if (!res.ok) continue;
      return await res.json();
    } catch {
      continue;
    }
  }

  return [];
}

export async function GET() {
  try {
    // ✅ SEO FIX: no-store so we always fetch fresh list for the sitemap
    const blogs = await fetchBlogs();

    const urlNodes = (blogs as BlogSitemapItem[]).map((blog) => {
      const lastmod = blog.updatedAt || blog.createdAt || blog.date;
      let imgNode = '';

      if (blog.image) {
        const imgUrl = blog.image.startsWith('http') ? blog.image : `${SITE_URL}${blog.image}`;
        imgNode = `
    <image:image>
      <image:loc>${escapeXml(imgUrl)}</image:loc>
      <image:title>${escapeXml(blog.title)}</image:title>
    </image:image>`;
      }

      return `  <url>
    <loc>${SITE_URL}/blogs/${blog.slug}</loc>
    <lastmod>${safeDate(lastmod)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>${imgNode}
  </url>`;
    }).join('\n');

    return new NextResponse(buildXml(urlNodes), {
      headers: {
        'Content-Type': 'application/xml',
        // ✅ SEO FIX: shorter CDN cache so new blogs appear in sitemap fast
        'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=60',
      }
    });
  } catch (error) {
    console.error('Sitemap blogs fetch error:', error);
    return new NextResponse(buildXml(''), {
      headers: { 'Content-Type': 'application/xml' }
    });
  }
}
