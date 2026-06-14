"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import {
    ArrowLeft,
    Calendar,
    Zap,
    Target,
    ArrowUpRight,
    Search,
    ChevronDown,
    Plus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function BadlapurAdvertisingBlueprint() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "What is the cost of advertising for a local business in Badlapur?",
            a: "Advertising costs vary, but digital ads are very cost-effective. You can start with as little as ₹200/day on Meta (Facebook/Instagram) or Google Ads to reach customers specifically in areas like Hendrepada, Katrap, or Shirgaon."
        },
        {
            q: "How can I reach customers within 2km of my Badlapur store?",
            a: "By using geo-fencing and radius targeting on Meta and Google Ads. This ensures that only residents and commuters frequently in your immediate vicinity see your ads, maximizing ROI."
        },
        {
            q: "Can I manage my own advertising for my Badlapur shop?",
            a: "Yes, but to avoid wasting budget, it's recommended to consult experts. A specialized agency knows how to optimize keywords and creatives to prevent the common 'junk lead' problem many local businesses face."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Mastering Local Advertising in Badlapur City: The ROI Blueprint",
        "image": "https://www.digitalrisemarketing.in/images/blogs/advertising-guide.png",
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
        "datePublished": "2026-03-17",
        "description": "Learn how to advertise effectively in Badlapur City. Master geo-fencing, local targeting, and high-ROI ad spend strategies for your business."
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
                            <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-dr-gold via-white to-dr-gold">ADVERTISING BLUEPRINT</span>
                        </motion.h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                            <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-dr-text/40 uppercase">
                                <Calendar size={14} className="text-dr-gold" /> March 17, 2026
                            </div>
                            <div className="flex items-center gap-2 text-[12px] font-black tracking-widest text-dr-gold uppercase border border-dr-gold/30 px-3 py-1 rounded-md">
                                ADVERTISING & ROI
                            </div>
                        </div>

                        <img 
                            src="/images/blogs/advertising-guide.png" 
                            alt="Local Advertising and Target Metrics for Badlapur" 
                            className="w-full max-w-4xl mx-auto rounded-3xl border border-white/10 shadow-2xl mb-12"
                        />

                        <p className="text-lg md:text-xl text-dr-text/60 max-w-3xl mx-auto leading-relaxed font-medium">
                            The complete guide to high-impact advertising in Badlapur City. Learn how to reach thousands of potential customers in East and West at minimal cost.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="relative py-24 px-6 z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Sidebar */}
                        <aside className="lg:col-span-4 hidden lg:block sticky top-32 h-fit space-y-12">
                            <div className="glass p-8 rounded-3xl border border-dr-gold/20 shadow-2xl">
                                <h4 className="text-lg font-black text-white mb-4">Start Scaling with Ads</h4>
                                <p className="text-xs text-white/40 leading-relaxed mb-8">Target your perfect audience in Badlapur City with precision campaigns.</p>
                                <Link href="/booking" className="inline-flex items-center justify-center w-full py-4 bg-dr-gold text-dr-navy text-[10px] font-black tracking-widest uppercase rounded-xl hover:bg-dr-gold-hover transition-all shadow-lg">
                                    Start Advertising
                                </Link>
                            </div>
                        </aside>

                        {/* Main Body */}
                        <div className="lg:col-span-8 space-y-20">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Geo-Fencing in <span className="text-dr-text/40">Badlapur City</span></h2>
                                <p className="text-dr-text/60 leading-relaxed">
                                    In a city like Badlapur, where local markets are localized by station area and major roads, precision is key. Traditional print ads waste your money on people who may never visit your shop.
                                </p>
                                <p className="text-dr-text/60 leading-relaxed">
                                    With precise geo-fencing on Meta and Google Ads, you can focus your entire budget on a 2km radius around your location. Whether it&apos;s a restaurant in Badlapur East or a gym in Badlapur West, high-ROI advertising starts with knowing exactly who is seeing your message.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="glass p-8 rounded-3xl border border-white/5">
                                    <Target className="text-dr-gold mb-4" size={28} />
                                    <h4 className="font-black text-white mb-2">Social Ads</h4>
                                    <p className="text-xs text-white/40">Engagement and reach on Instagram and Facebook.</p>
                                </div>
                                <div className="glass p-8 rounded-3xl border border-white/5">
                                    <Search className="text-dr-gold mb-4" size={28} />
                                    <h4 className="font-black text-white mb-2">Google Search</h4>
                                    <p className="text-xs text-white/40">Capture customers actively searching for your service.</p>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Local <span className="text-dr-text/40">Ad FAQs (AEO)</span></h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, i) => (
                                        <div 
                                            key={i} 
                                            className="glass rounded-[2rem] border border-white/5 p-8 cursor-pointer hover:border-dr-gold/30 transition-all"
                                            onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        >
                                            <h4 className="text-lg font-bold text-white flex justify-between items-center">{faq.q} <Plus size={16} /></h4>
                                            {activeFaq === i && (
                                                <p className="text-sm text-white/40 leading-relaxed mt-4 pt-4 border-t border-white/5">{faq.a}</p>
                                            )}
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

