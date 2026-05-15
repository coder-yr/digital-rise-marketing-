"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    gradient: string;
    image: string;
    content?: string;
}

type BlogIndexItem = Partial<BlogPost> & { slug: string; title: string };

export default function BlogIndexClient({ blogs }: { blogs: BlogIndexItem[] }) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden">
            {/* Visual Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] mix-blend-overlay"></div>
                <motion.div
                    animate={{
                        opacity: [0.05, 0.08, 0.05]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="hidden md:block absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-dr-gold/10 rounded-full blur-[160px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.03, 0.05, 0.03]
                    }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2, ease: "linear" }}
                    className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-dr-orange/5 rounded-full blur-[140px]"
                />
            </div>

            {/* Perspective Hero */}
            <section className="relative pt-48 pb-24 px-6 z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center space-y-8"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border border-dr-gold/20 shadow-xl shadow-dr-gold/5">
                            <Sparkles size={14} className="text-dr-gold animate-pulse" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase">The Perspective</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight max-w-4xl">
                            DIGITAL GROWTH <br />
                            <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-dr-gold via-white to-dr-gold animate-shine">DEMYSTIFIED.</span>
                        </h1>

                        <p className="text-base md:text-lg text-dr-text/40 max-w-2xl leading-relaxed font-medium">
                            High-performance systems, AI automation, and the mechanics of local market dominance.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3 w-full max-w-5xl pt-6">
                            {[
                                { label: 'Badlapur', href: '/digital-marketing-badlapur' },
                                { label: 'Kalyan', href: '/digital-marketing-kalyan' },
                                { label: 'Ambernath', href: '/digital-marketing-ambernath' },
                            ].map((city) => (
                                <Link
                                    key={city.href}
                                    href={city.href}
                                    className="rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-4 text-left hover:border-dr-gold/30 transition-colors"
                                >
                                    <p className="text-[9px] font-black tracking-[0.35em] text-dr-gold uppercase mb-2">Local SEO Hub</p>
                                    <h2 className="text-xl font-black tracking-tight text-white">Digital Marketing in {city.label}</h2>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {blogs.map((post, index) => (
                            <motion.div key={post.slug} variants={itemVariants}>
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="group block relative glass rounded-[2.5rem] border border-white/[0.03] hover:border-dr-gold/20 transition-all duration-700 overflow-hidden shadow-2xl bg-dr-navy/40"
                                >
                                    {/* Card Media Area */}
                                    <div className="relative aspect-[16/11] overflow-hidden">
                                        {/* Fallback Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient || 'from-dr-gold/30 via-dr-navy/20 to-dr-orange/10'} group-hover:scale-110 transition-transform duration-700 opacity-20`}></div>
                                        
                                        {/* Actual Blog Image */}
                                        <Image 
                                            src={post.image || '/images/blogs/default-blog.png'} 
                                            alt={`Digital marketing blog ${post.title}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                            priority={index < 4}
                                        />

                                        {/* Overlay for better text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dr-navy via-dr-navy/20 to-transparent opacity-80"></div>

                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-1.5 glass border border-white/10 rounded-full text-[9px] font-black tracking-[0.2em] text-dr-gold uppercase">
                                                {post.category || 'MARKETING'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-10 space-y-6">
                                        <div className="flex items-center gap-6 text-[9px] font-black text-white/30 tracking-[0.3em] uppercase">
                                            <span className="flex items-center gap-2"><Calendar size={12} className="text-dr-gold/40" /> {post.date || new Date().toLocaleDateString()}</span>
                                            <div className="w-1 h-1 rounded-full bg-white/10"></div>
                                            <span className="flex items-center gap-2"><Clock size={12} className="text-dr-gold/40" /> {post.readTime || '5 MIN READ'}</span>
                                        </div>

                                        <h3 className="text-2xl font-black text-white tracking-tighter leading-tight group-hover:text-dr-gold transition-colors duration-500">
                                            {post.title}
                                        </h3>

                                        <p className="text-dr-text/40 text-[13px] leading-relaxed font-medium line-clamp-3">
                                            {post.excerpt || post.content?.substring(0, 150).replace(/<[^>]+>/g, '') + '...'}
                                        </p>

                                        <div className="pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-dr-gold uppercase group-hover:gap-6 transition-all duration-500">
                                                Read Blueprint <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Corner Hint */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-dr-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Newsletter / CTA Section */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-16 md:p-24 rounded-[3.5rem] border border-white/5 bg-dr-navy/40 text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-dr-gold/[0.02] via-transparent to-dr-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <h4 className="text-[10px] font-black tracking-[0.5em] text-dr-gold uppercase mb-10">STAY AHEAD</h4>
                        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-10">
                            THE ALPHA <span className="text-gradient-gold">INSIGHTS.</span>
                        </h3>
                        <p className="text-lg text-white/40 max-w-xl mx-auto mb-16 leading-relaxed font-medium">
                            Get our monthly breakdown of algorithm shifts, AI tools, and local growth hacks delivered directly to your inbox.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                suppressHydrationWarning
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-[10px] font-black tracking-widest text-white focus:outline-none focus:border-dr-gold/50 transition-all"
                            />
                            <button className="w-full sm:w-auto px-12 py-6 bg-white text-dr-navy font-black text-[10px] tracking-widest rounded-2xl hover:bg-dr-gold transition-all uppercase whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
