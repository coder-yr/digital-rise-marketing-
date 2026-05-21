import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import { constructMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import StructuredData from "@/components/ui/StructuredData";
import GlobalClientFeatures from "@/components/layout/GlobalClientFeatures";

/**
 * 🔧 SEO FIX: Centralized Root Metadata & Global Schema
 *
 * Improvements:
 * 1. Uses constructMetadata helper for consistent canonicals and OG tags.
 * 2. Injects Organization and WebSite schema (with Sitelinks Searchbox).
 * 3. Keeps Google Analytics and Iconify scripts.
 */

export const metadata: Metadata = constructMetadata({
  // No overrides needed as constructMetadata handles defaults
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VWWBTVBCL8"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VWWBTVBCL8');
          `}
        </Script>
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="lazyOnload"
        />
        
        {/* Global Structured Data */}
        <StructuredData data={organizationSchema()} />
        <StructuredData data={websiteSchema()} />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-dr-gold focus:px-4 focus:py-2 focus:text-dr-navy focus:font-bold"
        >
          Skip to content
        </a>
        <SmoothScroll>
          {children}
          <GlobalClientFeatures />
        </SmoothScroll>
      </body>
    </html>
  );
}
