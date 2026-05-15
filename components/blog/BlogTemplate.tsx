"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    ArrowLeft,
    Calendar,
    Clock,
    MapPin,
    ArrowUpRight,
    Heart,
    Star,
    Send,
    Zap,
    Sparkles
} from 'lucide-react';
import { motion, AnimatePresence, Variants, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

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
    createdAt?: string;
}

export default function BlogTemplate({ post }: { post: BlogPost }) {

    const [likes, setLikes] = useState(124);
    const [isLiked, setIsLiked] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    
    // Reading progress logic using Framer Motion (optimized)
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [reviews, setReviews] = useState([
        { name: "Rahul Sharma", rating: 5, comment: "Excellent insights on local marketing!", date: "2 days ago" },
        { name: "Priya Patil", rating: 4, comment: "Very helpful for my small business in Badlapur East.", date: "1 week ago" }
    ]);
    const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });
    const [toc, setToc] = useState<{ id: string; text: string }[]>([]);



    // Extract headers for Table of Contents
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.content;
            const headings = tempDiv.querySelectorAll('h2, h3');
            const newToc: { id: string; text: string }[] = [];
            headings.forEach((heading, index) => {
                const text = heading.textContent || `Section ${index}`;
                const id = heading.id || text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                newToc.push({ id, text });
            });
            if (newToc.length === 0) {
                 newToc.push(
                     { id: "overview", text: "Overview" },
                     { id: "details", text: "Details" },
                     { id: "faqs", text: "FAQs" },
                     { id: "reviews", text: "Reviews" }
                 );
            }
            setToc(newToc);
        }
    }, [post.content]);

    const handleLike = () => {
        if (isLiked) {
            setLikes(prev => prev - 1);
        } else {
            setLikes(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (newReview.name && newReview.comment) {
            setReviews([{ ...newReview, date: "Just now" }, ...reviews]);
            setNewReview({ name: '', comment: '', rating: 5 });
            setShowReviewForm(false);
        }
    };



    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Format title
    const titleWords = post.title.split(' ');
    const lastWord = titleWords.pop() || '';
    const restOfTitle = titleWords.join(' ');

    return (
        <>
            <Header />
            {/* Reading Progress Bar */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1.5 bg-dr-gold z-[100] origin-left shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                style={{ scaleX }}
            />

            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden selection:bg-dr-gold/30">
                {/* Visual Background Elements - Using radial gradients for performance */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-full transform translate-x-1/2 -translate-y-1/2 will-change-transform"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                        className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(255,107,74,0.1)_0%,transparent_70%)] rounded-full transform -translate-x-1/2 translate-y-1/2 will-change-transform"
                    />
                </div>

                {/* Hero Section */}
                <section className="relative pt-40 pb-20 px-6 z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/blogs" className="inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-dr-gold/60 hover:text-dr-gold uppercase transition-all mb-10 group border border-dr-gold/20 px-6 py-2 rounded-full glass shadow-xl shadow-dr-gold/5">
                                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> THE PERSPECTIVE
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-10 uppercase">
                                {restOfTitle} <br />
                                <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-dr-gold via-white to-dr-gold animate-shine">{lastWord}</span>
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
                                <div className="flex items-center gap-3 glass px-5 py-2.5 rounded-2xl border border-white/5 shadow-inner">
                                    <Calendar size={14} className="text-dr-gold" /> 
                                    <span className="text-[10px] font-black tracking-[0.2em] text-white/60 uppercase">
                                        {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : post.date || 'March 1, 2026'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 glass px-5 py-2.5 rounded-2xl border border-white/5 shadow-inner">
                                    <Clock size={14} className="text-dr-gold" /> 
                                    <span className="text-[10px] font-black tracking-[0.2em] text-white/60 uppercase">{post.readTime || '5 MIN READ'}</span>
                                </div>
                                <div className="flex items-center gap-3 bg-dr-gold/10 px-5 py-2.5 rounded-2xl border border-dr-gold/20 shadow-lg shadow-dr-gold/5">
                                    <Zap size={14} className="text-dr-gold" />
                                    <span className="text-[10px] font-black tracking-[0.2em] text-dr-gold uppercase">{post.category || 'MARKETING'}</span>
                                </div>
                            </div>
                        </motion.div>

                        {post.image && (
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="max-w-5xl mx-auto mt-16 relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-dr-navy via-transparent to-transparent z-10 opacity-60" />
                                <Image 
                                    src={post.image} 
                                    alt={post.title} 
                                    fill 
                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                    priority
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2s]" 
                                />
                                <div className="absolute inset-0 glass opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Article Content Area */}
                <section className="relative py-24 px-6 z-10 overflow-visible">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Sidebar */}
                        <aside className="lg:col-span-4 hidden lg:block sticky top-32 h-fit space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-dr-gold/20" />
                                <h4 className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase mb-10">Navigation Hub</h4>
                                <ul className="space-y-8">
                                    {toc.map((item, i) => (
                                        <li key={i}>
                                            <a href={`#${item.id}`} className="text-[11px] font-black text-white/30 hover:text-dr-gold transition-all flex items-center gap-4 group uppercase tracking-widest">
                                                <span className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-dr-gold transition-all" />
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="glass p-10 rounded-[2.5rem] border border-dr-gold/20 relative overflow-hidden group shadow-2xl bg-gradient-to-br from-dr-navy to-dr-navy-light"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-dr-gold/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-dr-gold/20 transition-colors" />
                                <div className="relative z-10">
                                    <Sparkles className="text-dr-gold mb-6" size={32} />
                                    <h4 className="text-xl font-black text-white mb-4 leading-tight uppercase tracking-tighter">Scale Your Vision.</h4>
                                    <p className="text-[11px] text-white/40 leading-relaxed mb-10 font-medium tracking-wide">We design high-conversion growth systems for businesses that demand dominance.</p>
                                    <Link href="/booking" className="inline-flex items-center justify-center w-full py-5 bg-white text-dr-navy text-[10px] font-black tracking-[0.2em] uppercase rounded-2xl hover:bg-dr-gold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5">
                                        Book Consultation
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Stats/Social Proof in Sidebar */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="glass p-8 rounded-[2rem] border border-white/5 flex items-center gap-6"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-dr-gold/10 flex items-center justify-center text-dr-gold">
                                    <Star size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">User Rating</p>
                                    <p className="text-lg font-black text-white tracking-tighter">4.9 / 5.0</p>
                                </div>
                            </motion.div>
                        </aside>

                        {/* Main Content Body */}
                        <div className="lg:col-span-8">
                            {/* Content Shell */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                className="relative"
                            >
                                {/* Top Decoration */}
                                <div className="flex items-center gap-4 mb-16 opacity-20">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white" />
                                    <Sparkles size={16} className="text-dr-gold" />
                                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white" />
                                </div>

                                {/* Dynamic Rich Text Content */}
                                <div 
                                    className="prose prose-invert prose-dr max-w-none"
                                    dangerouslySetInnerHTML={{ 
                                        __html: post.content
                                            .replace(/&lt;/g, '<')
                                            .replace(/&gt;/g, '>')
                                            .replace(/&quot;/g, '"')
                                            .replace(/&#39;/g, "'")
                                            .replace(/&amp;/g, '&')
                                    }} 
                                />

                                {/* Bottom Decoration */}
                                <div className="flex items-center gap-4 mt-24 opacity-20">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white" />
                                    <Heart size={16} className="text-dr-gold" />
                                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white" />
                                </div>
                            </motion.div>

                            {/* Engagement Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-20 glass p-8 rounded-[2rem] border border-white/5 flex flex-wrap items-center justify-between gap-8"
                            >
                                <div className="flex items-center gap-6">
                                    <button
                                        onClick={handleLike}
                                        className={`flex items-center gap-3 px-8 py-3 rounded-xl border transition-all ${isLiked ? 'bg-dr-gold text-dr-navy border-dr-gold' : 'bg-white/5 border-white/10 hover:border-dr-gold/40'}`}
                                    >
                                        <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                                        <span className="text-[11px] font-black uppercase tracking-widest">{likes} Likes</span>
                                    </button>
                                    <button
                                        onClick={() => setShowReviewForm(!showReviewForm)}
                                        className="flex items-center gap-3 px-8 py-3 rounded-xl border border-white/10 bg-white/5 hover:border-dr-gold transition-all"
                                    >
                                        <Star size={18} />
                                        <span className="text-[11px] font-black uppercase tracking-widest">Feedback</span>
                                    </button>
                                </div>

                                <div className="flex items-center gap-4">
                                    <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Share Blueprint</p>
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center hover:border-dr-gold transition-colors cursor-pointer">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Review Form */}
                            <AnimatePresence>
                                {showReviewForm && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="mt-8"
                                    >
                                        <div className="glass p-10 rounded-[2.5rem] border border-dr-gold/30">
                                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Your Intelligence</h3>
                                            <form onSubmit={handleSubmitReview} className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <input
                                                        type="text"
                                                        placeholder="FULL NAME"
                                                        value={newReview.name}
                                                        onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[10px] font-black tracking-widest text-white focus:border-dr-gold/50 outline-none transition-all uppercase"
                                                        required
                                                    />
                                                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6">
                                                        <span className="text-[9px] font-black text-white/30 uppercase">Rating:</span>
                                                        <div className="flex gap-1 text-dr-gold">
                                                            {[1, 2, 3, 4, 5].map(star => (
                                                                <button
                                                                    key={star}
                                                                    type="button"
                                                                    onClick={() => setNewReview({ ...newReview, rating: star })}
                                                                >
                                                                    <Star size={18} fill={star <= newReview.rating ? "currentColor" : "none"} />
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <textarea
                                                    placeholder="SHARE YOUR THOUGHTS..."
                                                    value={newReview.comment}
                                                    onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[10px] font-black tracking-widest text-white focus:border-dr-gold/50 outline-none transition-all min-h-[120px] uppercase"
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full py-5 bg-dr-gold text-dr-navy font-black text-[10px] tracking-[0.3em] uppercase rounded-xl hover:bg-dr-gold-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-dr-gold/10"
                                                >
                                                    Transmit Review <Send size={14} />
                                                </button>
                                            </form>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>



                            <motion.aside
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-20 glass p-10 rounded-[2.5rem] border border-dr-gold/20"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <MapPin size={18} className="text-dr-gold" />
                                    <h3 className="text-2xl font-black tracking-tighter uppercase">Local SEO Hubs</h3>
                                </div>
                                <div className="grid gap-4 md:grid-cols-3">
                                    {[
                                        { label: 'Badlapur', href: '/digital-marketing-badlapur' },
                                        { label: 'Kalyan', href: '/digital-marketing-kalyan' },
                                        { label: 'Ambernath', href: '/digital-marketing-ambernath' },
                                    ].map((city) => (
                                        <Link
                                            key={city.href}
                                            href={city.href}
                                            className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 hover:border-dr-gold/30 transition-colors"
                                        >
                                            <p className="text-[9px] font-black tracking-[0.35em] text-dr-gold uppercase mb-2">Service Area</p>
                                            <h4 className="font-black tracking-tight">Digital Marketing in {city.label}</h4>
                                        </Link>
                                    ))}
                                </div>
                            </motion.aside>

                            <motion.aside
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-8 glass p-10 rounded-[2.5rem] border border-white/5"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <Zap size={18} className="text-dr-gold" />
                                    <h3 className="text-2xl font-black tracking-tighter uppercase">Related Services</h3>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {[
                                        { label: 'Paid Advertising', href: '/paid-advertising' },
                                        { label: 'Organic Growth', href: '/organic-growth' },
                                        { label: 'Web Architecture', href: '/web-architecture' },
                                        { label: 'AI Agents', href: '/ai-agents' },
                                    ].map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 hover:border-dr-gold/30 transition-colors"
                                        >
                                            <p className="text-[9px] font-black tracking-[0.35em] text-dr-gold uppercase mb-2">Service Link</p>
                                            <h4 className="font-black tracking-tight">{service.label}</h4>
                                        </Link>
                                    ))}
                                </div>
                            </motion.aside>

                            {/* Client Reviews */}
                            <div id="reviews" className="mt-32 space-y-16">
                                <h2 className="text-4xl font-black text-white tracking-tighter leading-none uppercase">
                                    CLIENT <span className="text-white/20">FEEDBACK</span>
                                </h2>

                                <div className="grid gap-8">
                                    {reviews.map((review, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="glass p-10 rounded-[2rem] border border-white/5 relative"
                                        >
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dr-gold/20 to-dr-orange/20 border border-white/10" />
                                                    <div>
                                                        <p className="text-xs font-black text-white uppercase tracking-widest">{review.name}</p>
                                                        <p className="text-[9px] text-white/20 uppercase tracking-[0.3em]">{review.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 text-dr-gold/40">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <Star key={star} size={12} fill={star <= review.rating ? "#D4AF37" : "none"} className={star <= review.rating ? "text-dr-gold" : ""} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-white/50 leading-relaxed font-medium italic">"{review.comment}"</p>
                                        </motion.div>
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
