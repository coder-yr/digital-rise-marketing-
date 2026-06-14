"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FAQ from '@/components/sections/FAQ';
import {
    Calendar,
    Clock,
    Search,
    ChevronRight,
    Twitter,
    Linkedin,
    Mail,
    ArrowUpRight,
    User,
    ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface BlogPost {
    id: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    authorName?: string;
    image?: string;
    image1?: string;
    image2?: string;
    createdAt?: string;
}

export default function BlogTemplate({ post, relatedPosts }: { post: BlogPost; relatedPosts: BlogPost[] }) {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        "AI & Tech",
        "Digital Assets",
        "Strategy",
        "SaaS",
        "Branding"
    ];

    const featuredInsights = relatedPosts.slice(0, 3);

    const enhanceContent = (html: string) => {
        if (!html) return '';
        
        let enhanced = html
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, '&');

        const lines = enhanced.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
        let htmlLines: string[] = [];
        let inList = false;
        let listType = '';

        const closeListIfNeeded = () => {
            if (inList) {
                htmlLines.push(`</${listType}>`);
                inList = false;
                listType = '';
            }
        };

        lines.forEach(line => {
            const isBlockTag = /^(<h[1-6]|<p|<div|<blockquote|<ul|<ol|<li|<pre|<img)/i.test(line);
            if (isBlockTag) {
                closeListIfNeeded();
                htmlLines.push(line);
                return;
            }

            if (line.startsWith('### ')) {
                closeListIfNeeded();
                htmlLines.push(`<h3 class="text-2xl font-black mt-12 mb-6 text-white uppercase font-cabinet tracking-tight">${line.substring(4).trim()}</h3>`);
                return;
            }
            if (line.startsWith('## ')) {
                closeListIfNeeded();
                htmlLines.push(`<h2 class="text-3xl font-black mt-16 mb-8 text-white uppercase font-cabinet tracking-tight">${line.substring(3).trim()}</h2>`);
                return;
            }
            if (line.startsWith('# ')) {
                closeListIfNeeded();
                htmlLines.push(`<h1 class="text-4xl font-black mt-16 mb-10 text-dr-gold uppercase font-cabinet tracking-tight">${line.substring(2).trim()}</h1>`);
                return;
            }
            if (line.startsWith('> ')) {
                closeListIfNeeded();
                htmlLines.push(`<blockquote class="border-l-4 border-dr-gold pl-6 py-2 my-8 bg-white/[0.02] rounded-r-2xl text-white/90 italic font-medium">${line.substring(2).trim()}</blockquote>`);
                return;
            }

            // Unordered List
            if (line.startsWith('- ') || line.startsWith('* ')) {
                if (!inList || listType !== 'ul') {
                    closeListIfNeeded();
                    htmlLines.push('<ul class="space-y-3 my-8">');
                    inList = true;
                    listType = 'ul';
                }
                let content = line.substring(2).trim();
                content = content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
                htmlLines.push(`<li class="text-white/80">${content}</li>`);
                return;
            }

            // Ordered List
            if (/^\d+\.\s/.test(line)) {
                if (!inList || listType !== 'ol') {
                    closeListIfNeeded();
                    htmlLines.push('<ol class="list-decimal pl-6 space-y-3 my-8 text-white/80">');
                    inList = true;
                    listType = 'ol';
                }
                let content = line.replace(/^\d+\.\s/, '').trim();
                content = content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
                htmlLines.push(`<li>${content}</li>`);
                return;
            }

            closeListIfNeeded();

            let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
            
            // Highlight emojis to make them pop
            formattedLine = formattedLine.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '<span class="text-2xl mr-2 drop-shadow-lg inline-block align-middle">$1</span>');

            htmlLines.push(`<p>${formattedLine}</p>`);
        });

        closeListIfNeeded();
        enhanced = htmlLines.join('\n');

        if (!enhanced.trim().startsWith('<div')) {
            enhanced = `<div class="prose-container">\n${enhanced}\n</div>`;
        }

        return enhanced;
    };

    return (
        <div className="bg-[#0A0E1A] text-white min-h-screen font-satoshi selection:bg-dr-gold/30">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-40 pb-28 px-6 overflow-hidden border-b border-white/5">
                    {/* Architectural Grid Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none" style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        backgroundPosition: 'center center'
                    }}>
                        <div className="absolute inset-0 bg-[#0A0E1A] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,black_100%)]"></div>
                    </div>

                    {/* Cinematic Glow & Noise */}
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        {post.image ? (
                            <Image 
                                src={post.image} 
                                alt="Hero Background" 
                                fill 
                                className="object-cover opacity-30 mix-blend-luminosity" 
                                priority 
                            />
                        ) : (
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#D4AF3725_0%,transparent_60%)]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/50 via-[#0A0E1A]/80 to-[#0A0E1A]" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-2 text-xs font-bold text-white/40 mb-8 tracking-widest uppercase"
                        >
                            <Link href="/blogs" className="hover:text-dr-gold transition-colors">Insights</Link>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span className="text-dr-gold/80">{post.category || 'Trends'}</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-10 max-w-5xl font-cabinet uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40 drop-shadow-2xl">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dr-gold/20 to-dr-orange/20 border border-white/10 flex items-center justify-center overflow-hidden">
                                        <User size={20} className="text-dr-gold" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">{post.authorName || 'Alex Rivera'}</p>
                                        <p className="text-[10px] text-white/40 uppercase tracking-wider">Marketing Lead</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-white/60">
                                    <Calendar size={14} className="text-dr-gold/60" />
                                    <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : post.date || 'May 24, 2024'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-white/60">
                                    <Clock size={14} className="text-dr-gold/60" />
                                    <span>{post.readTime || '8 min read'}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content & Sidebar */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Content Area */}
                        <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 relative">
                            {/* Floating Social Icons */}
                            <div className="hidden md:flex flex-col gap-4 sticky top-32 h-fit pt-2">
                                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-dr-gold hover:text-dr-gold transition-colors bg-[#0A0E1A] text-white/40 shadow-xl shadow-black/50">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                </button>
                                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-dr-gold hover:text-dr-gold transition-colors bg-[#0A0E1A] text-white/40 shadow-xl shadow-black/50">
                                    <Twitter size={16} />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-dr-gold hover:text-dr-gold transition-colors bg-[#0A0E1A] text-white/40 shadow-xl shadow-black/50">
                                    <Linkedin size={16} />
                                </button>
                            </div>

                            <div className="flex-1 min-w-0">
                                <article className="prose prose-lg prose-invert prose-dr max-w-none text-[1.1rem] leading-[1.8] text-white/80">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: enhanceContent(post.content)
                                        }}
                                    />
                                </article>

                                {/* Additional Image Gallery */}
                                {(post.image1 || post.image2) && (
                                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {post.image1 && (
                                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
                                                <Image src={post.image1} alt="Content Image 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                            </div>
                                        )}
                                        {post.image2 && (
                                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
                                                <Image src={post.image2} alt="Content Image 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                            </div>
                                        )}
                                    </div>
                                )}


                            {/* Author Profile Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-24 p-10 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center gap-10"
                            >
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-dr-gold/20 flex-shrink-0 bg-dr-navy-light relative">
                                    <User size={64} className="absolute inset-0 m-auto text-dr-gold/20" />
                                    <Image
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
                                        alt="Author"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-2xl font-black mb-4 uppercase tracking-tight font-cabinet">About {post.authorName || 'Alex Rivera'}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                                        Alex is a senior marketing strategist at Digital Rise with over 12 years of excellence in the digital frontier. He specializes in the intersection of neural networks and consumer psychology.
                                    </p>
                                    <div className="flex items-center justify-center md:justify-start gap-4">
                                        <a href="#" className="flex items-center gap-2 text-[10px] font-bold text-dr-gold hover:text-white transition-colors uppercase tracking-widest underline decoration-dr-gold/30 underline-offset-4">
                                            Follow on Twitter
                                        </a>
                                        <span className="w-1 h-1 rounded-full bg-white/10" />
                                        <a href="#" className="flex items-center gap-2 text-[10px] font-bold text-dr-gold hover:text-white transition-colors uppercase tracking-widest underline decoration-dr-gold/30 underline-offset-4">
                                            LinkedIn Profile
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Sidebar */}
                        <aside className="lg:col-span-4 lg:border-l lg:border-white/5 lg:pl-10">
                            <div className="sticky top-32 space-y-12 pb-20">
                                {/* Search */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search Insights..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:border-dr-gold/50 outline-none transition-all placeholder:text-white/20"
                                    />
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                </div>

                                {/* Featured Insights */}
                                <div className="space-y-6">
                                    <h4 className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase flex items-center gap-4">
                                        <span className="w-2 h-2 rounded-full bg-dr-gold shadow-[0_0_10px_#D4AF37]" />
                                        Featured Insights
                                    </h4>
                                    <div className="space-y-8">
                                    {featuredInsights.map((insight, i) => (
                                        <Link key={i} href={`/blogs/${insight.slug}`} className="group block">
                                            <p className="text-[9px] text-dr-gold/60 uppercase tracking-widest mb-2">{insight.category}</p>
                                            <h5 className="text-sm font-bold leading-snug group-hover:text-dr-gold transition-colors font-cabinet">
                                                {insight.title}
                                            </h5>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase">Categories</h4>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((cat, i) => (
                                        <button key={i} className="px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[10px] font-bold text-white/60 hover:border-dr-gold/30 hover:text-white transition-all uppercase tracking-wider">
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-dr-gold/5 rounded-full blur-3xl -mr-16 -mt-16" />
                                <h4 className="text-xl font-black mb-4 font-cabinet uppercase tracking-tight">Inside the Rise</h4>
                                <p className="text-xs text-white/40 leading-relaxed mb-8 font-medium">Get weekly hi-marketing deep dives delivered straight to your inbox.</p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="email@address.com"
                                        className="w-full bg-dr-navy border border-white/10 rounded-xl px-5 py-4 text-xs focus:border-dr-gold/50 outline-none transition-all placeholder:text-white/10"
                                    />
                                    <button className="w-full py-4 bg-cyan-400 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-xl shadow-cyan-400/10">
                                        Join 12,000+ Marketers
                                    </button>
                                </div>
                            </div>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* Continue Reading Section */}
                <section className="py-32 px-6 border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black mb-16 font-cabinet uppercase tracking-tight">Continue Reading</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((rel, i) => (
                                <Link key={i} href={`/blogs/${rel.slug}`} className="group">
                                    <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative border border-white/5">
                                        {rel.image ? (
                                            <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                        ) : (
                                            <div className="absolute inset-0 bg-white/[0.02] flex items-center justify-center text-white/10">No Image</div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dr-navy to-transparent opacity-60" />
                                    </div>
                                    <p className="text-[10px] text-dr-gold uppercase tracking-widest mb-3 font-bold">{rel.category || 'Strategy'}</p>
                                    <h3 className="text-lg font-bold leading-tight group-hover:text-dr-gold transition-colors font-cabinet">
                                        {rel.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQ />

                {/* Growth CTA Section */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden bg-gradient-to-br from-dr-navy-light to-dr-navy border border-white/10">
                            {/* Abstract Glows */}
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-purple-600/10 blur-[120px] rounded-full" />
                                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[100%] bg-cyan-600/10 blur-[120px] rounded-full" />
                            </div>

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-5xl md:text-7xl font-black mb-8 font-cabinet tracking-tighter uppercase leading-[0.9]">Need Growth?</h2>
                                <p className="text-white/60 text-lg mb-12 font-medium">Our AI-powered agency strategies have helped over 500+ brands scale their digital presence. Let's build your future together.</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Link href="/booking" className="w-full sm:w-auto px-10 py-5 bg-[#1a0b2e] border border-purple-500/30 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-purple-500 transition-all shadow-2xl shadow-purple-500/10">
                                        Book a Free Strategy Audit
                                    </Link>
                                    <Link href="/portfolio" className="w-full sm:w-auto px-10 py-5 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-cyan-400 hover:text-black transition-all">
                                        View Our Portfolio
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
