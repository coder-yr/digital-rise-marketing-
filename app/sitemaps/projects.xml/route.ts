import { buildXml, API_URL, safeDate, escapeXml } from '@/lib/sitemap-utils';
import { SITE_URL } from '@/lib/site';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
// ✅ SEO FIX: 5-min revalidation so new projects get crawled quickly
export const revalidate = 300;

type ProjectSitemapItem = {
  slug: string;
  title: string;
  thumbnail?: string;
  images?: string[];
  image?: string;
  coverImage?: string;
  updatedAt?: string;
  createdAt?: string;
}

async function fetchProjects() {
  const candidates = [API_URL]
  if (process.env.NODE_ENV !== 'production') {
    candidates.push('http://localhost:5000')
  }

  for (const baseUrl of candidates) {
    try {
      const cleanApiUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      const res = await fetch(`${cleanApiUrl}/api/projects`, { cache: 'no-store' });
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
    const projects = await fetchProjects();

    const urlNodes = (projects as ProjectSitemapItem[]).map((project) => {
      const lastmod = project.updatedAt || project.createdAt;
      let imgNode = '';

      const imagePath = project.thumbnail || (project.images && project.images[0]) || project.image || project.coverImage;
      if (imagePath) {
        const imgUrl = imagePath.startsWith('http') ? imagePath : `${SITE_URL}${imagePath}`;
        imgNode = `
    <image:image>
      <image:loc>${escapeXml(imgUrl)}</image:loc>
      <image:title>${escapeXml(project.title)}</image:title>
    </image:image>`;
      }

      return `  <url>
    <loc>${SITE_URL}/projects/${project.slug}</loc>
    <lastmod>${safeDate(lastmod)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>${imgNode}
  </url>`;
    }).join('\n');

    return new NextResponse(buildXml(urlNodes), {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=60',
      }
    });
  } catch (error) {
    console.error('Sitemap projects fetch error:', error);
    return new NextResponse(buildXml(''), {
      headers: { 'Content-Type': 'application/xml' }
    });
  }
}
