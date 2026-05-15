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
