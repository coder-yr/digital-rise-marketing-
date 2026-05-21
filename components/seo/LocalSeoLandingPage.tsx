"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, MapPin, Sparkles, Target, Gauge, FileText, HelpCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/ui/ContactForm";
import StructuredData from "@/components/ui/StructuredData";
import type { LocalSeoCity } from "@/lib/localSeo";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

/**
 * 🔧 SEO FIX: Local SEO Landing Page Component Refactor
 *
 * Improvements:
 * 1. Uses centralized localBusinessSchema and breadcrumbSchema.
 * 2. Injects FAQPage schema based on pain points and common local questions.
 * 3. Improved semantic structure for better indexing.
 */

const whatsappHref = "https://wa.me/917021602399?text=Hi%20DigitalRise%2C%20I%20want%20to%20grow%20my%20local%20leads.";

export default function LocalSeoLandingPage({ city }: { city: LocalSeoCity }) {
  // Generate Schemas
  const lbSchema = localBusinessSchema({
    name: `DigitalRise Marketing - ${city.cityName}`,
    url: `${SITE_URL}${city.canonicalPath}`,
    description: city.metaDescription,
    areaServed: [
      { type: "City", name: city.cityName },
      { type: "State", name: "Maharashtra" }
    ]
  });

  const bSchema = breadcrumbSchema([
    { name: city.cityName, url: city.canonicalPath }
  ]);

  const fSchema = faqSchema([
    {
      question: `What is the best digital marketing strategy for businesses in ${city.cityName}?`,
      answer: `The best strategy involves a mix of Local SEO (ranking in Google Maps), high-conversion landing pages, and automated lead follow-up. For ${city.cityName} businesses, focusing on local intent keywords is key.`
    },
    {
      question: `How long does it take to see results from SEO in ${city.cityName}?`,
      answer: `While some improvements happen in weeks, a comprehensive SEO strategy typically takes 3-6 months to dominate local search results and drive consistent organic enquiries.`
    },
    {
      question: `Do I need a big budget for digital marketing in ${city.cityName}?`,
      answer: `Not necessarily. We focus on ROI-driven campaigns that scale with your business. Local SEO is often the most cost-effective way to start growing in ${city.cityName}.`
    }
  ]);

  return (
    <>
      <StructuredData data={lbSchema} />
      <StructuredData data={bSchema} />
      <StructuredData data={fSchema} />
      <Header />
      <main id="main-content" className="relative overflow-hidden bg-dr-navy text-white pt-40 pb-20">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-dr-gold/10 rounded-full blur-[150px]" />
          <div className="hidden md:block absolute bottom-[15%] -right-[5%] w-[520px] h-[520px] bg-dr-orange/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs items={[{ label: city.cityName }]} />

          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border border-dr-gold/20 mb-8">
              <MapPin size={14} className="text-dr-gold" />
              <span className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase">
                Local SEO for {city.cityName}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8 uppercase">
              Digital Marketing Agency in <span className="text-gradient-gold">{city.cityName}</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {city.overview} {city.localIntent}
            </p>

            <p className="mt-6 text-dr-text/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {city.servicePitch}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all uppercase"
              >
                Book a Strategy Call
                <ArrowRight size={14} />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 bg-white/5 font-black text-xs tracking-widest rounded-xl hover:border-dr-gold hover:text-dr-gold transition-all uppercase"
              >
                WhatsApp Us
                <MessageCircle size={14} />
              </a>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3 mb-20">
            {city.painPoints.map((item) => (
              <article key={item.title} className="glass p-8 rounded-[2rem] border border-white/5">
                <Target className="text-dr-gold mb-5" size={28} />
                <h2 className="text-2xl font-black mb-3 tracking-tight">{item.title}</h2>
                <p className="text-white/45 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <Sparkles className="text-dr-gold" size={18} />
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                Services Built for <span className="text-white/20">{city.cityName}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {city.services.map((service) => (
                <article key={service.title} className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <Gauge className="text-dr-gold" size={24} />
                    <span className="text-[9px] font-black tracking-[0.35em] text-white/30 uppercase">Local Growth</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-3">{service.title}</h3>
                  <p className="text-white/45 leading-relaxed mb-8 flex-1">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-dr-gold uppercase hover:gap-3 transition-all"
                  >
                    Explore Service
                    <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-20">
            <div className="glass p-10 md:p-12 rounded-[2.5rem] border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-dr-gold" size={18} />
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">
                  Blog Topics for <span className="text-white/20">{city.cityName}</span>
                </h2>
              </div>
              <p className="text-white/45 leading-relaxed mb-8">
                These topics support local search intent, answer small-business questions, and create internal link targets for your CMS blog strategy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {city.blogTopics.map((topic) => (
                  <article key={topic.title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                    <h3 className="font-black tracking-tight mb-2">{topic.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{topic.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="glass p-10 md:p-12 rounded-[2.5rem] border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-dr-gold" size={18} />
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">
                  Related Markets
                </h2>
              </div>
              <p className="text-white/45 leading-relaxed mb-8">
                Keep the local architecture tight by linking nearby city pages together and reinforcing your service area coverage.
              </p>
              <div className="space-y-4 mb-10">
                {city.relatedCities.map((relatedCity) => (
                  <Link
                    key={relatedCity.href}
                    href={relatedCity.href}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 hover:border-dr-gold/30 transition-colors"
                  >
                    <span className="font-black tracking-tight">{relatedCity.label}</span>
                    <ArrowRight size={14} className="text-dr-gold" />
                  </Link>
                ))}
              </div>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white text-dr-navy font-black text-[10px] tracking-[0.3em] rounded-xl hover:bg-dr-gold transition-all uppercase"
              >
                Read Local SEO Blogs
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* Local FAQ Section for better indexing signals */}
          <section className="mb-20">
             <div className="flex items-center gap-4 mb-8">
              <HelpCircle className="text-dr-gold" size={18} />
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                Common Questions in <span className="text-white/20">{city.cityName}</span>
              </h2>
            </div>
            <div className="grid gap-6">
              <div className="glass p-8 rounded-[2rem] border border-white/5">
                <h3 className="text-xl font-bold mb-4">What is the best digital marketing strategy for businesses in {city.cityName}?</h3>
                <p className="text-white/45 leading-relaxed">The best strategy involves a mix of Local SEO (ranking in Google Maps), high-conversion landing pages, and automated lead follow-up. For {city.cityName} businesses, focusing on local intent keywords is key.</p>
              </div>
              <div className="glass p-8 rounded-[2rem] border border-white/5">
                <h3 className="text-xl font-bold mb-4">How long does it take to see results from SEO in {city.cityName}?</h3>
                <p className="text-white/45 leading-relaxed">While some improvements happen in weeks, a comprehensive SEO strategy typically takes 3-6 months to dominate local search results and drive consistent organic enquiries.</p>
              </div>
            </div>
          </section>

          <section className="glass p-10 md:p-14 rounded-[2.5rem] border border-dr-gold/20 mb-20">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                  Convert Local Interest Into <span className="text-gradient-gold">Leads</span>
                </h2>
                <p className="text-white/45 leading-relaxed mb-6">
                  Put a direct contact path on every local landing page so visitors can book a call, send a WhatsApp message, or submit a form without friction.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-dr-gold text-dr-navy font-black text-[10px] tracking-[0.3em] rounded-xl hover:bg-dr-gold-hover transition-all uppercase"
                  >
                    Contact CTA
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/15 bg-white/5 font-black text-[10px] tracking-[0.3em] rounded-xl hover:border-dr-gold hover:text-dr-gold transition-all uppercase"
                  >
                    WhatsApp CTA
                    <MessageCircle size={14} />
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/5 bg-dr-navy/50 p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
