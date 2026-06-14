import { NextRequest, NextResponse } from 'next/server'
import { SITE_URL } from '@/lib/site'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`

/**
 * ✅ SEO FIX: Ping Google & Bing to crawl sitemap after new content is published.
 *
 * Call from your admin/backend after creating/updating a blog or project:
 *   POST https://digitalrisemarketing.in/api/ping-sitemap
 *   Body: { "secret": "<PING_SECRET>" }
 *
 * Set PING_SECRET env var to a random string for basic auth.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.PING_SECRET
  if (secret) {
    const body = await req.json().catch(() => ({}))
    if (body.secret !== secret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  return NextResponse.json({
    sitemap: SITEMAP_URL,
    status: 'accepted',
    note: 'Sitemap refreshed. Google/Bing sitemap ping endpoints are deprecated, so no external ping was sent.',
  })
}

// Also allow GET so you can test from browser
export async function GET() {
  return NextResponse.json({
    message: 'Send POST with { secret } to acknowledge a sitemap refresh request',
    sitemap: SITEMAP_URL,
  })
}
