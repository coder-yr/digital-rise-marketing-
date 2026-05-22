import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ───────────────────────────────────────────────
  // 🔧 SEO FIX #1: Enforce trailing-slash consistency
  // Setting to false means /about is canonical, /about/ redirects to /about.
  // This eliminates "Duplicate without user-selected canonical" in GSC.
  // ───────────────────────────────────────────────
  trailingSlash: false,

  // ───────────────────────────────────────────────
  // 🔧 SEO FIX #2: Compress output for faster TTFB
  // ───────────────────────────────────────────────
  compress: true,

  // ───────────────────────────────────────────────
  // React Compiler for performance
  // ───────────────────────────────────────────────
  reactCompiler: true,

  // ───────────────────────────────────────────────
  // Image optimization with allowed remote patterns
  // ───────────────────────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "sqtkbfcbjommazyxenwf.supabase.co",
      },
    ],
    // SEO FIX: Use modern image formats for smaller payloads
    formats: ["image/avif", "image/webp"],
  },

  // ───────────────────────────────────────────────
  // 🔧 SEO FIX #3: Security + cache headers
  // ───────────────────────────────────────────────
  async headers() {
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self' https://digirise-backend-production.up.railway.app/",
      "frame-ancestors 'none'",
      "img-src 'self' data: blob: https://images.unsplash.com https://sqtkbfcbjommazyxenwf.supabase.co https://www.googletagmanager.com https://www.google-analytics.com",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://code.iconify.design",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
      "font-src 'self' data: https://fonts.gstatic.com https://api.fontshare.com",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://digirise-backend-production.up.railway.app/",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join('; ');

    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
      {
        // Global security headers for all routes
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
    ];
  },

  // ───────────────────────────────────────────────
  // 🔧 SEO FIX #4: Redirect www ↔ non-www + trailing slash cleanup
  // (Vercel handles www redirect at the platform level, but we add
  //  programmatic redirects for edge cases.)
  // ───────────────────────────────────────────────
  async redirects() {
    return [
      // Catch any trailing-slash URLs and 301 them to non-trailing
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
