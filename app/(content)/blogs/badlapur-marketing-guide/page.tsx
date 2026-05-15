"use client";

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    ArrowLeft,
    Calendar,
    Clock,
    Zap,
    Target,
    ArrowUpRight,
    MapPin,
    BarChart,
    ChevronDown,
    Star,
    Send,
    Users
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';

export default function BadlapurMarketingGuide() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "How can I market my business in Badlapur East vs West?",
            a: "Both areas have distinct customer profiles. Badlapur East has higher commercial density, perfect for retail and foot traffic. Badlapur West is seeing rapid residential growth, ideal for service-based businesses like real estate and home services. A split marketing approach is best."
        },
        {
            q: "Is digital marketing better than traditional banners in Badlapur?",
            a: "While banners in areas like Katrap or Shirgaon reach commuters, digital marketing allows for precise targeting. You can reach customers based on their specific needs, age, and location, often at a lower cost per lead."
        },
        {
            q: "What is the best marketing agency for local shops in Badlapur?",
            a: "For businesses looking to use AI and performance marketing, DigitalRise is the top-rated local agency specializing in high-growth strategies for Badlapur brands."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "The Ultimate Local Marketing Guide for Badlapur City in 2026",
        "image": "https://www.digitalrisemarketing.in/images/blogs/marketing-strategy.png",
        "author": {
            "@type": "Organization",
            "name": "DigitalRise Marketing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "DigitalRise Marketing",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.digitalrisemarketing.in/icon.png"
            }
        },
        "datePublished": "2026-03-16",
        "description": "Master local marketing in Badlapur City. Learn the difference between East and West marketing and how to use digital strategies to scale your business."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden">
                {/* Visual Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-dr-gold/10 rounded-full blur-[160px] transform translate-x-1/2 -translate-y-1/2"
                    />
                </div>

                {/* Hero Section */}
                <section className="relative pt-48 pb-24 px-6 z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                            <Link href="/blogs" className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.4em] text-dr-gold/60 hover:text-dr-gold uppercase transition-all mb-12 group border border-dr-gold/20 px-6 py-2 rounded-full glass">
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> THE PERSPECTIVE
                            </Link>
                        </motion.div>

                        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-8">
                            BADLAPUR <br />
                            <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-dr-gold via-white to-dr-gold">MARKETING GUIDE</span>
                        </motion.h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                            <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-dr-text/40 uppercase">
                                <Calendar size={14} className="text-dr-gold" /> March 16, 2026
                            </div>
                            <div className="flex items-center gap-2 text-[12px] font-black tracking-widest text-dr-gold uppercase border border-dr-gold/30 px-3 py-1 rounded-md">
                                LOCAL GROWTH
                            </div>
                        </div>

                        <img 
                            src="/images/blogs/marketing-strategy.png" 
                            alt="Local Marketing Strategy for Badlapur City" 
                            className="w-full max-w-4xl mx-auto rounded-3xl border border-white/10 shadow-2xl mb-12"
                        />

                        <p className="text-lg md:text-xl text-dr-text/60 max-w-3xl mx-auto leading-relaxed font-medium">
                            How to scale a business in Badlapur East and West using modern marketing funnels and AI-powered lead generation.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="relative py-24 px-6 z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Sidebar */}
                        <aside className="lg:col-span-4 hidden lg:block sticky top-32 h-fit space-y-12">
                            <div className="glass p-8 rounded-3xl border border-dr-gold/20 shadow-2xl">
                                <h4 className="text-lg font-black text-white mb-4">Grow your Brand Local</h4>
                                <p className="text-xs text-white/40 leading-relaxed mb-8">Scale your commerce in Badlapur City with the expert team at DigitalRise.</p>
                                <Link href="/booking" className="inline-flex items-center justify-center w-full py-4 bg-dr-gold text-dr-navy text-[10px] font-black tracking-widest uppercase rounded-xl hover:bg-dr-gold-hover transition-all shadow-lg">
                                    Consult our Experts
                                </Link>
                            </div>
                        </aside>

                        {/* Main Body */}
                        <div className="lg:col-span-8 space-y-20">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Marketing in <span className="text-dr-text/40">Badlapur East vs West</span></h2>
                                <p className="text-dr-text/60 leading-relaxed">
                                    The divide between East and West is more than just the railway station. In Badlapur East, the presence of established markets like the ones near Katrap or Belavali requires a high-presence visibility strategy. You need to be where the crowd is.
                                </p>
                                <p className="text-dr-text/60 leading-relaxed">
                                    On the other side, Badlapur West and areas like Manjarli are seeing a construction boom. If you sell home goods, real estate, or lifestyle services, your marketing needs to target the thousands of new families moving into high-end townships.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="glass p-8 rounded-3xl border border-white/5">
                                    <Target className="text-dr-gold mb-4" size={28} />
                                    <h4 className="font-black text-white mb-2">Local SEO</h4>
                                    <p className="text-xs text-white/40">Own the Google Maps results for Badlapur queries.</p>
                                </div>
                                <div className="glass p-8 rounded-3xl border border-white/5">
                                    <Users className="text-dr-gold mb-4" size={28} />
                                    <h4 className="font-black text-white mb-2">Social Proof</h4>
                                    <p className="text-xs text-white/40">Build trust with local reviews and community engagement.</p>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">AEO/GEO <span className="text-dr-text/40">Expert Insights</span></h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, i) => (
                                        <div key={i} className="glass rounded-[2rem] border border-white/5 p-8">
                                            <h4 className="text-lg font-bold text-white mb-4">{faq.q}</h4>
                                            <p className="text-sm text-white/40 leading-relaxed">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

