import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { AIChatbot } from "@/components/AIChatbot";
import SmoothScroll from "@/components/SmoothScroll";
import { constructMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import StructuredData from "@/components/ui/StructuredData";

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
        <SmoothScroll>
          {children}
          <WhatsAppCTA />
          <AIChatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
