"use client";

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    ArrowLeft,
    Calendar,
    Clock,
    Search,
    Zap,
    MessageSquare,
    BarChart2,
    Globe,
    Users,
    Play,
    HelpCircle,
    TrendingUp,
    CheckCircle2,
    ChevronDown,
    MapPin,
    ArrowUpRight,
    Heart,
    Star,
    Send
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';

export default function BadlapurMarketingBlogPost() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [likes, setLikes] = useState(124);
    const [isLiked, setIsLiked] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [reviews, setReviews] = useState([
        { name: "Rahul Sharma", rating: 5, comment: "Excellent insights on local marketing!", date: "2 days ago" },
        { name: "Priya Patil", rating: 4, comment: "Very helpful for my small business in Badlapur East.", date: "1 week ago" }
    ]);
    const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });

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

    const faqs = [
        {
            q: "What is Social Media Marketing (SMM)?",
            a: "SMM involves using platforms like Instagram, Facebook, and LinkedIn to connect with your audience, build your brand, increase sales, and drive website traffic. It includes publishing high-quality content, engaging with followers, and running targeted ads."
        },
        {
            q: "Why is hiring a marketing agency in Badlapur important in 2026?",
            a: "In 2026, algorithms change daily. A local agency like DigitalRise stays ahead of trends, ensuring your business stays visible. We bring a strategic approach that freelancers often lack, focusing on measurable ROI for your local Badlapur business."
        },
        {
            q: "How long does it take to see results from Badlapur Marketing?",
            a: "While SEO is a long-term play (3-6 months), social media ads and SMM can show engagement and lead growth within weeks. Our 'Launch Sprint' is designed to get you initial results fast while building long-term organic authority."
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden">
                {/* Visual Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="hidden md:block absolute top-0 right-0 w-[1000px] h-[1000px] bg-dr-gold/10 rounded-full blur-[160px] transform translate-x-1/2 -translate-y-1/2"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.15, 0.1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                        className="hidden md:block absolute bottom-0 left-0 w-[800px] h-[800px] bg-dr-orange/5 rounded-full blur-[140px] transform -translate-x-1/2 translate-y-1/2"
                    />
                </div>

                {/* Hero Section */}
                <section className="relative pt-48 pb-24 px-6 z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/blogs" className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.4em] text-dr-gold/60 hover:text-dr-gold uppercase transition-all mb-12 group border border-dr-gold/20 px-6 py-2 rounded-full glass">
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> THE PERSPECTIVE
                            </Link>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-8"
                        >
                            BADLAPUR <br />
                            <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-dr-gold via-white to-dr-gold animate-shine">MARKETING</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-wrap items-center justify-center gap-6 mb-8"
                        >
                            <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-dr-text/40 uppercase">
                                <Calendar size={14} className="text-dr-gold" /> March 1, 2026
                            </div>
                            <div className="w-1 h-1 rounded-full bg-dr-text/20" />
                            <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-dr-text/40 uppercase">
                                <Clock size={14} className="text-dr-gold" /> 8 MIN READ
                            </div>
                            <div className="w-1 h-1 rounded-full bg-dr-text/20" />
                            <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-dr-gold uppercase border border-dr-gold/30 px-3 py-1 rounded-md">
                                LOCAL SEO & SMM
                            </div>
                        </motion.div>

                        {/* Interactive Buttons: Like and Review */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex items-center justify-center gap-4 mb-12"
                        >
                            <button
                                onClick={handleLike}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${isLiked ? 'bg-dr-gold text-dr-navy border-dr-gold' : 'bg-white/5 border-white/10 hover:border-dr-gold/40'}`}
                            >
                                <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
                                <span className="text-xs font-black uppercase tracking-widest">{likes}</span>
                            </button>
                            <button
                                onClick={() => setShowReviewForm(!showReviewForm)}
                                className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:border-dr-gold transition-all"
                            >
                                <Star size={16} />
                                <span className="text-xs font-black uppercase tracking-widest">Write a Review</span>
                            </button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg md:text-xl text-dr-text/60 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            The definitive blueprint for local businesses to outrank competitors and dominate the digital landscape in Badlapur city.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="max-w-7xl mx-auto mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
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
                            >
                                <h4 className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase mb-8">Table of Contents</h4>
                                <ul className="space-y-6">
                                    {["The Local Landscape", "What is SMM?", "Service Breakdown", "The ROI Factor", "FAQs", "Client Reviews"].map((item, i) => (
                                        <li key={i}>
                                            <a href={`#section-${i}`} className="text-sm font-bold text-dr-text/40 hover:text-dr-gold transition-colors flex items-center gap-3 group">
                                                <span className="w-6 h-[1px] bg-white/10 group-hover:w-10 group-hover:bg-dr-gold transition-all" />
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-3xl border border-dr-gold/20 relative overflow-hidden group shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-dr-gold/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-dr-gold/20 transition-colors" />
                                <h4 className="text-lg font-black text-white mb-4 relative z-10">Need a custom strategy?</h4>
                                <p className="text-xs text-white/40 leading-relaxed mb-8 relative z-10">We build bespoke growth systems for Badlapur brands that scale.</p>
                                <Link href="/booking" className="inline-flex items-center justify-center w-full py-4 bg-dr-gold text-dr-navy text-[10px] font-black tracking-widest uppercase rounded-xl hover:bg-dr-gold-hover hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10 shadow-lg shadow-dr-gold/10">
                                    Book Strategy Call
                                </Link>
                            </motion.div>

                            {/* Location Badge Interaction */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-dr-gold/10 flex items-center justify-center text-dr-gold group-hover:bg-dr-gold group-hover:text-dr-navy transition-all">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Serving Specifically</p>
                                    <p className="text-sm font-bold text-white uppercase">Badlapur East & West</p>
                                </div>
                            </motion.div>
                        </aside>

                        {/* Main Content Body */}
                        <div className="lg:col-span-8 space-y-24">
                            {/* Review Form Overlay/Section */}
                            <AnimatePresence>
                                {showReviewForm && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="glass p-8 rounded-3xl border border-dr-gold/30 mb-12">
                                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Write a Review</h3>
                                            <form onSubmit={handleSubmitReview} className="space-y-4">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    value={newReview.name}
                                                    onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-dr-gold/50 outline-none transition-all"
                                                    required
                                                />
                                                <textarea
                                                    placeholder="Your thoughts on this article..."
                                                    value={newReview.comment}
                                                    onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-dr-gold/50 outline-none transition-all min-h-[100px]"
                                                    required
                                                />
                                                <div className="flex items-center gap-4">
                                                    <div className="flex gap-1 text-dr-gold">
                                                        {[1, 2, 3, 4, 5].map(star => (
                                                            <button
                                                                key={star}
                                                                type="button"
                                                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                                            >
                                                                <Star size={16} fill={star <= newReview.rating ? "currentColor" : "none"} />
                                                            </button>
                                                        ))}
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="px-6 py-2 bg-dr-gold text-dr-navy font-black text-[10px] tracking-widest uppercase rounded-lg hover:bg-dr-gold-hover transition-all flex items-center gap-2"
                                                    >
                                                        Post Review <Send size={12} />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Section 0: The Local Landscape */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                id="section-0"
                                className="space-y-10"
                            >
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                                    THE LOCAL <span className="text-dr-text/40">LANDSCAPE</span>
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-base md:text-lg text-dr-text/60 leading-relaxed font-medium">
                                    Badlapur is no longer the sleepy suburb it once was. With a booming population of over <span className="text-white">1.7 lakh across East and West</span>, the local business competition has shifted from the streets to the screens.
                                </motion.p>
                                <motion.div variants={itemVariants} className="p-8 border-l-2 border-dr-gold bg-dr-gold/5 rounded-r-2xl">
                                    <p className="text-base md:text-lg text-dr-text/80 leading-relaxed italic">
                                        &quot;In 2026, if you aren&apos;t appearing in the top 3 results of Google Maps or the top of an Instagram feed, you don&apos;t exist to 80% of your potential customers.&quot;
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* Section 1: Why SMM is Mandatory */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                id="section-1"
                                className="space-y-10"
                            >
                                <motion.div variants={itemVariants} className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-dr-orange animate-pulse" />
                                    <span className="text-[10px] font-black tracking-widest text-white/60">STRATEGY FIRST</span>
                                </motion.div>
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                                    WHY SMM IS <span className="text-dr-text/40">MANDATORY</span>
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-base md:text-lg text-dr-text/60 leading-relaxed font-medium">
                                    Social Media Marketing (SMM) is your direct line of communication with the residents of Badlapur. It&apos;s about creating <span className="text-dr-gold">High-Intent Attention</span>.
                                </motion.p>

                                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: "Brand Awareness", desc: "Local visibility across Badlapur.", icon: Globe },
                                        { title: "Engagement", desc: "Building trust within the community.", icon: MessageSquare },
                                        { title: "Conversions", desc: "Turning likes into paying customers.", icon: BarChart2 },
                                        { title: "Authority", desc: "Becoming the #1 mentioned brand.", icon: Users },
                                    ].map((benefit, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)" }}
                                            className="glass p-8 rounded-3xl border border-white/5 transition-all cursor-default"
                                        >
                                            <benefit.icon className="text-dr-gold mb-4" size={24} />
                                            <h4 className="font-black text-white text-sm mb-2">{benefit.title}</h4>
                                            <p className="text-xs text-white/40 leading-relaxed">{benefit.desc}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Section 2: Full-Stack Execution */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                id="section-2"
                                className="space-y-12"
                            >
                                <motion.h4 variants={itemVariants} className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase">The Arsenal</motion.h4>
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                                    FULL-STACK <span className="text-dr-text/40">EXECUTION</span>
                                </motion.h2>

                                <motion.div variants={containerVariants} className="space-y-4">
                                    {[
                                        { title: "Social Media Strategy", desc: "A bespoke roadmap for Badlapur market dominance.", icon: CheckCircle2, color: "dr-gold" },
                                        { title: "Video Excellence", desc: "Premium Reels and Content that stops the scroll.", icon: Play, color: "dr-orange" },
                                        { title: "Local SEO Dominance", desc: "Owning search results for every local query.", icon: Search, color: "dr-gold" },
                                        { title: "High-ROI Ads", desc: "Precision Meta/Google campaigns with zero waste.", icon: Zap, color: "dr-orange" },
                                    ].map((service, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                                            className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 group cursor-pointer"
                                        >
                                            <div className="flex items-center gap-8">
                                                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-dr-gold group-hover:scale-110 group-hover:bg-dr-gold/10 transition-all duration-500`}>
                                                    <service.icon size={32} />
                                                </div>
                                                <div>
                                                    <h4 className="text-2xl font-black text-white mb-2 group-hover:text-dr-gold transition-colors">{service.title}</h4>
                                                    <p className="text-sm text-white/40">{service.desc}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-dr-gold group-hover:gap-6 transition-all uppercase">
                                                Explore <ArrowUpRight size={14} />
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Section 3: The DRI Difference */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                id="section-3"
                                className="space-y-10"
                            >
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                                    THE DRI <span className="text-dr-text/40">DIFFERENCE</span>
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-base md:text-lg text-dr-text/60 leading-relaxed font-medium">
                                    Most agencies offer management. <span className="text-white">We offer revenue.</span> By integrating AI automations with performance creative, we find gaps that others like Red Rock India or Digital Neetu miss.
                                </motion.p>

                                <motion.div
                                    variants={itemVariants}
                                    className="glass p-12 rounded-[3.5rem] border border-dr-gold/20 relative overflow-hidden bg-dr-gold/[0.01] group shadow-gold"
                                >
                                    <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-dr-gold/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-dr-gold/10 transition-colors duration-1000" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                                        <div>
                                            <TrendingUp className="text-dr-gold mb-6 group-hover:translate-y-[-5px] transition-transform duration-500" size={40} />
                                            <h4 className="text-2xl font-black text-white mb-6">Measured <span className="text-dr-gold">Impact</span></h4>
                                            <p className="text-sm text-white/40 leading-relaxed font-medium">Everything we do is tracked from impression to sale. No vanity metrics, just growth.</p>
                                        </div>
                                        <div className="space-y-6">
                                            {[
                                                "Real-time Data Dashboards",
                                                "Weekly Performance Sprints",
                                                "Custom AI Lead Qualifiers",
                                                "Competitor Gap Analysis",
                                                "Local Geo-Fencing (East/West)",
                                                "Automated Review Systems"
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ x: 5 }}
                                                    className="flex items-center gap-4 cursor-default"
                                                >
                                                    <div className="w-5 h-5 rounded-full border border-dr-gold/30 flex items-center justify-center text-dr-gold">
                                                        <CheckCircle2 size={12} />
                                                    </div>
                                                    <span className="text-xs font-black uppercase tracking-widest text-white/60">{item}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "GEO-FENCING", desc: "Targeting customers within 2km of your Badlapur store." },
                                        { title: "RETARGETING", desc: "Staying in front of people who visited your site but didn't buy." },
                                        { title: "AI RESPONSE", desc: "Instant lead engagement so you never miss a local inquiry." }
                                    ].map((edge, i) => (
                                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                                            <h5 className="text-dr-gold text-[10px] font-black tracking-widest mb-3">{edge.title}</h5>
                                            <p className="text-xs text-white/40 leading-relaxed">{edge.desc}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Section 4: Interactive FAQs */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                id="section-4"
                                className="space-y-12"
                            >
                                <motion.div variants={itemVariants} className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-dr-gold group">
                                        <HelpCircle size={32} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                                        COMMON <span className="text-dr-text/40">QUESTIONS</span>
                                    </h2>
                                </motion.div>

                                <motion.div variants={containerVariants} className="grid gap-4">
                                    {faqs.map((faq, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            className={`glass rounded-[2rem] border transition-all overflow-hidden cursor-pointer ${activeFaq === i ? 'border-dr-gold/40 bg-white/5' : 'border-white/5 hover:border-dr-gold/20'}`}
                                            onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        >
                                            <div className="p-8 flex items-center justify-between">
                                                <h4 className="text-xl font-bold text-white flex items-center gap-6">
                                                    <span className={`text-dr-gold/40 transition-colors ${activeFaq === i ? 'text-dr-gold' : ''}`}>0{i + 1}</span>
                                                    {faq.q}
                                                </h4>
                                                <motion.div
                                                    animate={{ rotate: activeFaq === i ? 180 : 0 }}
                                                    className="text-white/20"
                                                >
                                                    <ChevronDown size={24} />
                                                </motion.div>
                                            </div>
                                            <AnimatePresence>
                                                {activeFaq === i && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="px-8 pb-10 flex gap-6">
                                                            <div className="w-1 h-auto bg-dr-gold/20 rounded-full shrink-0" />
                                                            <p className="text-sm text-white/40 leading-relaxed font-medium">{faq.a}</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Section 5: Client Reviews */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                id="section-5"
                                className="space-y-12"
                            >
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none uppercase">
                                    CLIENT <span className="text-dr-text/40">REVIEWS</span>
                                </motion.h2>

                                <div className="space-y-6">
                                    {reviews.map((review, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            className="glass p-6 rounded-2xl border border-white/5"
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <p className="text-sm font-black text-white uppercase">{review.name}</p>
                                                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{review.date}</p>
                                                </div>
                                                <div className="flex gap-1 text-dr-gold">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <Star key={star} size={12} fill={star <= review.rating ? "currentColor" : "none"} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-white/60 leading-relaxed">{review.comment}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Compact Interactive CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-20 relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-dr-gold/20 via-dr-orange/20 to-dr-gold/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700" />
                                <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-dr-navy/40 backdrop-blur-3xl overflow-hidden">
                                    {/* Animated background lines */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-dr-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-dr-gold/10 transition-colors" />

                                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                                        <div className="text-center md:text-left space-y-4 max-w-md">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-dr-gold/10 rounded-full border border-dr-gold/20">
                                                <Zap className="text-dr-gold animate-pulse" size={12} />
                                                <span className="text-[9px] font-black tracking-widest text-dr-gold uppercase">Growth Engine</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight">
                                                READY TO <span className="text-gradient-gold">DOMINATE?</span>
                                            </h3>
                                            <p className="text-sm text-white/40 font-medium">
                                                Schedule your priority audit and secure your position in Badlapur city.
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center gap-6">
                                            <Link
                                                href="/booking"
                                                className="px-8 py-4 bg-white text-dr-navy font-black text-[10px] tracking-widest rounded-xl hover:bg-dr-gold hover:text-dr-navy hover:scale-105 active:scale-[0.98] transition-all uppercase shadow-xl shadow-white/5"
                                            >
                                                Get Custom Plan
                                            </Link>
                                            <Link
                                                href="/#contact"
                                                className="group flex items-center gap-3 text-[10px] font-black tracking-widest text-white/40 hover:text-white transition-colors uppercase"
                                            >
                                                Ask Question
                                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

