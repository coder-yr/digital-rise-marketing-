import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/ui/ServiceCard';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/ui/ContactForm';
import { MousePointer2, Target, Phone, Sparkles } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { localBusinessSchema } from '@/lib/schema';
import StructuredData from '@/components/ui/StructuredData';
import ScrollReveal from '@/components/ui/ScrollReveal';

/**
 * 🔧 SEO FIX: Homepage Optimization
 *
 * Improvements:
 * 1. Optimized Title and Meta Description via constructMetadata.
 * 2. Properly connected LocalBusiness schema.
 * 3. Verified H1, H2, H3 hierarchy for semantic clarity.
 * 4. Fixed duplicate metadata declaration.
 */

export const metadata = constructMetadata({
  title: "DigitalRise Marketing | Digital Marketing Agency in Badlapur",
  description: "DigitalRise Marketing helps businesses in Badlapur, Ambernath, Thane, Ghatkopar, and Mumbai grow through SEO, web development, AI automation, and performance marketing.",
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <StructuredData data={localBusinessSchema()} />
      <Header />

      <main id="main-content" className="relative z-10">
        {/* Ambient Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="hidden lg:block absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-full opacity-40" />
          <div className="hidden lg:block absolute top-[40%] -left-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,107,0,0.1)_0%,transparent_70%)] rounded-full opacity-30" />
          <div className="lg:hidden absolute top-[20%] right-[-10%] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] rounded-full" />
        </div>

        <Hero />

        {/* Services Section */}
        <section id="services" className="py-32 px-8 bg-dr-navy relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <ScrollReveal className="max-w-3xl">
                <h2 className="text-xs font-bold tracking-[0.4em] text-dr-gold uppercase mb-6">
                  Services
                </h2>
                <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-none text-white">
                  Everything you need to grow—<span className="text-dr-text/40">under one roof.</span>
                </h3>
                <p className="mt-8 text-dr-text/40 text-lg max-w-xl">
                  A tight system across website, ads, organic, automation, and content—designed to work together and multiply results.
                </p>
              </ScrollReveal>

              <a
                href="/booking"
                className="px-8 py-4 glass border border-dr-gold/20 text-dr-gold font-bold text-xs tracking-widest rounded-full hover:bg-dr-gold/10 transition-all"
              >
                GET A CUSTOM PLAN
              </a>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <ServiceCard
                icon="lucide:layout-template"
                badge="Conversion-first"
                badgeColor="gold"
                title="Web Development"
                description="High-performance landing pages and full websites with premium UI, clean code, and SEO baked in."
                feature="Speedy GSC LCP"
                link="/web-architecture"
                index={0}
              />
              <ServiceCard
                icon="lucide:bar-chart-3"
                badge="Measured ROI"
                badgeColor="orange"
                title="Paid Advertising"
                description="Campaign architecture, creative testing, and landing page alignment to cut waste and scale profitability."
                feature="Meta, Google, TikTok"
                link="/paid-advertising"
                index={1}
              />
              <ServiceCard
                icon="lucide:megaphone"
                badge="Compounding"
                badgeColor="green"
                title="Organic Advertising (SEO)"
                description="SEO, social strategy, and systemized publishing that builds trust and lowers CAC over time."
                feature="SEO + Social"
                link="/organic-growth"
                index={2}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <ServiceCard
                  icon="lucide:cpu"
                  badge="Automation-ops"
                  badgeColor="gold"
                  title="AI Agents"
                  description="Custom AI agents for lead intake, qualification, follow-ups, reporting, and internal workflows—reliably."
                  feature="CRM connections"
                  link="/ai-agents"
                  index={3}
                />
              </div>
              <div className="lg:col-span-8">
                <ServiceCard
                  icon="lucide:clapperboard"
                  badge="Full-pipeline"
                  badgeColor="orange"
                  title="Content Creation"
                  description="Content systems, scripts, editing, thumbnails, and distribution. We build your attention engine and convert it to offers."
                  feature=""
                  link="/content-creation"
                  wide
                  index={4}
                  tags={['Short-form', 'Long-form', 'Design', 'Distribution']}
                  deliveryStats={[
                    { label: 'Weekly output', value: '3-20 assets' },
                    { label: 'Creative testing', value: 'Built-in' },
                    { label: 'Turnaround', value: '48-72h' },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="process" className="py-32 px-8 bg-dr-navy relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-xs font-bold tracking-[0.4em] text-dr-gold uppercase mb-6">
                How We Win
              </h2>
              <h3 className="text-5xl font-medium tracking-tight leading-none mb-10">
                A system, not a one-off campaign.
              </h3>
              <p className="text-dr-text/60 text-lg mb-12">
                We connect your website, ads, and AI into one growth loop. This makes every improvement build your profit over time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/projects"
                  className="px-8 py-4 bg-dr-gold text-dr-navy font-bold text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all text-center"
                >
                  SEE OUR PROJECTS
                </a>
                <a
                  href="/booking"
                  className="px-8 py-4 border border-white/20 font-bold text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all text-center"
                >
                  REQUEST PRICING
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="glass p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">Website</span>
                  <MousePointer2 className="text-white/20 w-5 h-5" />
                </div>
                <p className="text-sm font-bold mb-2">Faster load + better flow</p>
                <p className="text-[10px] text-white/40 leading-relaxed">Get more sales. Scale your business.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">Ads</span>
                  <Target className="text-white/20 w-5 h-5" />
                </div>
                <p className="text-sm font-bold mb-2">Creative testing engine</p>
                <p className="text-[10px] text-white/40 leading-relaxed">Scale winners. Cut losers.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">Automation</span>
                  <Phone className="text-white/20 w-5 h-5" />
                </div>
                <p className="text-sm font-bold mb-2">Agents + reporting</p>
                <p className="text-[10px] text-white/40 leading-relaxed">Less busywork. More output.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Testimonials />
        <FAQ />

        {/* Contact Section */}
        <section id="contact" className="py-32 px-8 bg-dr-navy relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-[10px] font-bold tracking-[0.4em] text-dr-gold uppercase mb-6">Progress</h2>
                <h3 className="text-5xl font-bold tracking-tight leading-none mb-8">Clarity first. Then momentum.</h3>
                <p className="text-dr-text/60 text-lg">
                  Every engagement starts with a fast audit, then we execute a focused sprint and iterate weekly based on data.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass p-8 rounded-2xl border border-white/5 flex gap-8 items-start hover:border-dr-gold/20 transition-all">
                  <span className="w-10 h-10 rounded-lg border border-dr-gold/20 flex items-center justify-center text-[10px] font-black text-dr-gold shrink-0 mt-1">01</span>
                  <div>
                    <h5 className="text-lg font-black mb-2">Audit + positioning</h5>
                    <p className="text-sm text-white/40 leading-relaxed">We identify leverage points in your funnel, offer, and acquisition channels.</p>
                  </div>
                </div>
                <div className="glass p-8 rounded-2xl border border-white/5 flex gap-8 items-start hover:border-dr-orange/20 transition-all">
                  <span className="w-10 h-10 rounded-lg border border-dr-orange/20 flex items-center justify-center text-[10px] font-black text-dr-orange shrink-0 mt-1">02</span>
                  <div>
                    <h5 className="text-lg font-black mb-2">Build + launch sprint</h5>
                    <p className="text-sm text-white/40 leading-relaxed">Landing pages, ads, content, and automations shipped fast—aligned to one goal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass p-10 rounded-[2.5rem] border border-white/5 relative">
                <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase mb-6">Contact</h4>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-8 bg-dr-navy/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-dr-gold uppercase mb-8">Service Area</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xl font-bold text-white uppercase">Badlapur City</div>
              <div className="text-xl font-bold text-white uppercase">Mumbai</div>
              <div className="text-xl font-bold text-white uppercase">Maharashtra</div>
              <div className="text-xl font-bold text-white uppercase">India</div>
            </div>
            <p className="mt-8 text-dr-text/30 text-xs font-medium tracking-tight">
              DigitalRise is the #1 Digital Marketing Agency in Badlapur City. We provide premium AI and marketing solutions here and across India.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
