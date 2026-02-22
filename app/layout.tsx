import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { AIChatbot } from "@/components/AIChatbot";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "DigitalRise Marketing | Premium Service Architecture",
  description: "We synthesize cutting-edge AI, performance advertising, and bespoke web architecture to scale high-growth brands at velocity.",
  verification: {
    google: "VR-prJIPW9eodXQ1cS0jzighBwD1bzdnx1RKcFTEBKU", // TODO: Replace this with your code from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        <CustomCursor />
        <SmoothScroll>
          {children}
          <WhatsAppCTA />
          <AIChatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
