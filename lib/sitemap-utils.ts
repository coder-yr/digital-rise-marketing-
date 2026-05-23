export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://captivating-purpose-production-88fb.up.railway.app/';

// Excluded paths to prevent crawl budget waste
export const EXCLUDED_PATHS = [
  '/admin',
  '/test',
  '/demo',
  '/thank-you',
  '/booking/success',
  '/api',
  '/_next',
];

/**
 * Builds the standard XML structure for a sitemap urlset.
 * Includes image namespace for rich media indexing.
 */
export function buildXml(urlset: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlset}
</urlset>`;
}

/**
 * Builds the sitemap index XML structure.
 */
export function buildSitemapIndex(sitemaps: string[]) {
  const sitemapNodes = sitemaps
    .map(
      (url) => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNodes}
</sitemapindex>`;
}

/**
 * Helper to safely format dates for XML
 */
export function safeDate(dateString?: string): string {
  try {
    return new Date(dateString || Date.now()).toISOString();
  } catch {
    return new Date().toISOString();
  }
}

/**
 * Helper to escape XML special characters
 */
export function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
