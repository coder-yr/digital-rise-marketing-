import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceFeaturesGrid from "@/components/sections/ServiceFeaturesGrid";
import { Layout, Server, Gauge, ShieldCheck, Database, ShoppingBag, Zap, ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import StructuredData from "@/components/ui/StructuredData";

/**
 * 🔧 SEO FIX: Service Page Refactor (Web Architecture)
 *
 * Improvements:
 * 1. Optimized Metadata using constructMetadata.
 * 2. Injected Service and Breadcrumb JSON-LD schemas.
 * 3. Added semantic internal links to related services for link juice distribution.
 */

const PAGE_TITLE = "Web Architecture & Development Services | DigitalRise";
const PAGE_DESC = "High-performance digital foundations with AdminJS integration, robust backend, and premium frontend for any business. We build websites that rank and convert.";
const CANONICAL_PATH = "/web-architecture";

export const metadata: Metadata = constructMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  canonical: CANONICAL_PATH,
});

export default function WebArchitecturePage() {
  const sData = serviceSchema({
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_PATH,
  });

  const bData = breadcrumbSchema([
    { name: "Services", url: "/#services" },
    { name: "Web Architecture", url: CANONICAL_PATH },
  ]);

  return (
    <>
      <StructuredData data={sData} />
      <StructuredData data={bData} />
      <Header />
      <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="hidden md:block absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-dr-gold/5 rounded-full blur-[120px] opacity-40" />
          <div className="hidden md:block absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-dr-green/5 rounded-full blur-[120px] opacity-30" />
        </div>

        <ServiceHero
          badge="Infrastructure"
          badgeColor="text-dr-gold"
          title={<>Premium <span className="text-gradient-gold">Web Architecture</span></>}
          description="We don't just build websites. We engineer high-performance digital foundations with AdminJS control centers and smooth server backends."
          buttonText="START PROJECT"
          blobColor="bg-dr-gold/5"
          blobPosition="top-[10%] left-[20%]"
        />

        <section className="relative z-10 py-10 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-4">The Tech Stack</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">Engineered for Velocity.</h3>
          </div>
        </section>

        <ServiceFeaturesGrid
          borderColor="border-white/5"
          hoverBorderColor="hover:border-dr-gold/20"
          items={[
            {
              icon: Layout,
              iconColor: "text-dr-gold",
              title: "Premium Frontend",
              description: "Butter-smooth animations and highly responsive layouts built with React & Next.js."
            },
            {
              icon: Server,
              iconColor: "text-dr-orange",
              title: "Robust Backend",
              description: "Secure, lightning-fast API layers and server-side logic that never breaks under pressure."
            },
            {
              icon: Database,
              iconColor: "text-dr-green",
              title: "AdminJS Integration",
              description: "Custom admin panels that let you manage every section of your business without touching code."
            },
            {
              icon: ShoppingBag,
              iconColor: "text-white",
              title: "Ecommerce Core",
              description: "Scalable ecommerce solutions built specifically for high conversion and seamless checkout."
            },
            {
              icon: Gauge,
              iconColor: "text-dr-gold",
              title: "Performance First",
              description: "99+ PageSpeed scores and optimized Core Web Vitals for maximum SEO ranking."
            },
            {
              icon: ShieldCheck,
              iconColor: "text-dr-orange",
              title: "Security Native",
              description: "Bespoke security protocols and data encryption to keep your business and users safe."
            }
          ]}
        />

        {/* Detailed Sections */}
        <section className="py-32 px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-32">
            {/* AdminJS Section */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dr-gold/20 bg-dr-gold/5 text-dr-gold text-xs font-bold tracking-widest uppercase">
                  <Database size={14} /> Admin Center
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
                  Control every pixel with <span className="text-dr-text/40">AdminJS.</span>
                </h2>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  We integrate AdminJS into your architecture, giving you a beautiful, automated dashboard to manage users, orders, content, and analytics. Handle your entire business from one central command center.
                </p>
                <ul className="space-y-4">
                  {[
                    "Visual database management for non-developers",
                    "Custom resource CRUD operations",
                    "Role-based access control (RBAC)",
                    "Automated data reporting and CSV exports"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-dr-gold" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-dr-gold to-dr-orange rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-video glass rounded-[2.5rem] border border-white/5 p-8 flex flex-col justify-center overflow-hidden">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-dr-gold animate-pulse" />
                    <p className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase">Dashboard Live</p>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-white/5 rounded-lg w-full flex items-center px-4"><div className="h-2 w-20 bg-white/20 rounded" /></div>
                    <div className="h-8 bg-white/5 rounded-lg w-full flex items-center px-4"><div className="h-2 w-32 bg-white/20 rounded" /></div>
                    <div className="h-24 bg-dr-gold/10 rounded-lg w-full flex items-center justify-center border border-dr-gold/20">
                      <Zap className="text-dr-gold w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecommerce Section */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative aspect-square glass rounded-[2.5rem] border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dr-gold/5 to-transparent" />
                <div className="relative space-y-6 text-center">
                  <ShoppingBag size={64} className="text-dr-gold mx-auto" />
                  <div className="p-4 glass rounded-2xl border border-white/10">
                    <p className="text-2xl font-black text-white">$42,930.00</p>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Total Revenue Today</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dr-green/20 bg-dr-green/5 text-dr-green text-xs font-bold tracking-widest uppercase">
                  <ShoppingBag size={14} /> Full-Stack Commerce
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
                  E-commerce for high-growth <span className="text-dr-text/40">brands.</span>
                </h2>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  No templates. No slow plugins. We build bespoke ecommerce backends that load in milliseconds and frontends that glide. Perfect for any business looking to dominate their niche.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 glass border border-white/5 rounded-2xl">
                    <h4 className="text-dr-gold font-bold mb-2">Omni-Channel</h4>
                    <p className="text-xs text-white/40">Sync orders across web, mobile, and social.</p>
                  </div>
                  <div className="p-6 glass border border-white/5 rounded-2xl">
                    <h4 className="text-dr-green font-bold mb-2">99.9% Uptime</h4>
                    <p className="text-xs text-white/40">Serverless architecture for zero downtime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking / Contextual Service Links */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h4 className="text-xs font-bold tracking-[0.4em] text-dr-gold uppercase mb-12">Related Services</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/organic-growth" className="p-8 glass rounded-2xl border border-white/5 hover:border-dr-gold/20 transition-all">
                <h5 className="font-bold mb-2">Organic Growth</h5>
                <p className="text-xs text-white/40">Scale your brand with SEO and content systems.</p>
              </Link>
              <Link href="/paid-advertising" className="p-8 glass rounded-2xl border border-white/5 hover:border-dr-gold/20 transition-all">
                <h5 className="font-bold mb-2">Paid Advertising</h5>
                <p className="text-xs text-white/40">High-ROI campaigns across Meta and Google.</p>
              </Link>
              <Link href="/ai-agents" className="p-8 glass rounded-2xl border border-white/5 hover:border-dr-gold/20 transition-all">
                <h5 className="font-bold mb-2">AI Agents</h5>
                <p className="text-xs text-white/40">Automate lead intake and reporting reliably.</p>
              </Link>
              <Link href="/content-creation" className="p-8 glass rounded-2xl border border-white/5 hover:border-dr-gold/20 transition-all">
                <h5 className="font-bold mb-2">Content Creation</h5>
                <p className="text-xs text-white/40">Creative assets that convert attention to offers.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Architecture that turns code into capital.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/booking" className="px-10 py-5 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all">
                START ARCHITECTURE
              </Link>
              <Link href="/blogs" className="px-10 py-5 glass border border-white/10 font-black text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all">
                READ THE BLOG
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
