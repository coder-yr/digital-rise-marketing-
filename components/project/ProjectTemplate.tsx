"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
    ArrowLeft, 
    ExternalLink, 
    CheckCircle2, 
    Github, 
    Layers, 
    Code2, 
    Monitor, 
    Sparkles, 
    Heart,
    Star,
    ChevronRight,
    Search
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

export interface ProjectData {
    id: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    techStack: any;
    images: any;
    liveUrl: string;
    githubUrl: string;
    metaTitle: string;
    metaDescription: string;
    createdAt: string;
}

export default function ProjectTemplate({ project }: { project: ProjectData }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!project) return null;

    // Helper to safely parse JSON strings if they come from DB as strings
    const safeParse = (data: any) => {
        if (typeof data === 'string') {
            try {
                return JSON.parse(data);
            } catch (e) {
                // If it looks like a stringified array but failed (e.g. missing brackets), try to clean it
                return [data];
            }
        }
        return Array.isArray(data) ? data : [];
    };

    const techStack = safeParse(project.techStack);
    const images = safeParse(project.images);
    const mainImage = images && images.length > 0 ? images[0] : null;

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
        <>
            {/* Reading Progress Bar */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1.5 bg-dr-gold z-[100] origin-left shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                style={{ scaleX }}
            />

            <main className="relative z-10 pt-32 pb-20 bg-dr-navy min-h-screen text-white overflow-hidden selection:bg-dr-gold/30">
                {/* Visual Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[1200px] h-[1200px] transform translate-x-1/2 -translate-y-1/2 will-change-transform"
                        style={{
                            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)'
                        }}
                    />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                        className="absolute bottom-0 left-0 w-[800px] h-[800px] transform -translate-x-1/2 translate-y-1/2 will-change-transform"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 107, 74, 0.1) 0%, transparent 70%)'
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link href="/projects" className="group inline-flex items-center gap-3 text-xs font-black tracking-[0.3em] text-dr-gold hover:text-white transition-all uppercase">
                            <div className="w-8 h-8 rounded-full border border-dr-gold/20 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                                <ArrowLeft className="w-4 h-4" />
                            </div>
                            BACK TO ARCHIVE
                        </Link>
                    </motion.div>

                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="mb-8 flex flex-wrap gap-4 items-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-dr-gold animate-pulse" />
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/60">
                                        Case Study
                                    </span>
                                </div>
                                
                                <div className="flex gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group inline-flex items-center gap-2 text-xs font-black tracking-widest text-dr-orange hover:text-white transition-all"
                                        >
                                            LIVE EXPERIENCE <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group inline-flex items-center gap-2 text-xs font-black tracking-widest text-dr-gold hover:text-white transition-all"
                                        >
                                            SOURCE CODE <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-10 uppercase">
                                {project.title.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 !== 0 ? "text-gradient-gold" : ""}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h1>

                            <div 
                                className="text-xl md:text-2xl text-dr-text/80 leading-relaxed font-medium md:w-3/4 lg:w-2/3"
                                dangerouslySetInnerHTML={{ 
                                    __html: enhanceContent(project.description || 'No description available.')
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Enormous Full-Width Main Device Preview */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="mb-24"
                    >
                        <div className="glass p-2 md:p-4 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative group">
                            <div className="w-full bg-[#0F1419] rounded-t-[2rem] border-b border-white/5 p-4 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                                </div>
                                <div className="px-4 py-1 bg-white/5 rounded-full flex items-center gap-2">
                                    <Search size={10} className="text-white/20" />
                                    <span className="text-[9px] text-white/20 font-black tracking-widest uppercase">
                                        {project.liveUrl || 'internal_preview'}
                                    </span>
                                </div>
                            </div>

                            <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-[#0A0E1A] overflow-hidden relative rounded-b-[1.5rem]">
                                {project.liveUrl ? (
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block w-full h-full relative cursor-pointer overflow-hidden group/link">
                                        <div className="absolute inset-0 bg-dr-navy/60 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
                                            <motion.span 
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-8 py-4 bg-dr-gold text-dr-navy text-[11px] font-black tracking-[0.2em] rounded-full flex items-center gap-3 shadow-2xl uppercase"
                                            >
                                                LIVE EXPLORATION <ExternalLink className="w-4 h-4" />
                                            </motion.span>
                                        </div>
                                        {mainImage && (
                                            <Image
                                                src={mainImage}
                                                alt={project.title}
                                                fill
                                                sizes="100vw"
                                                priority
                                                className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover/link:scale-105"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = `https://image.thum.io/get/width/1200/crop/800/noanimate/${project.liveUrl}`;
                                                }}
                                            />
                                        )}
                                    </a>
                                ) : (
                                    <div className="w-full h-full relative">
                                        {mainImage && (
                                            <Image
                                                src={mainImage}
                                                alt={project.title}
                                                fill
                                                sizes="100vw"
                                                priority
                                                className="w-full h-full object-cover object-top"
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 mb-24">
                        {/* Left Column: Details */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="space-y-16">
                                    {/* Tech Stack */}
                                    <section>
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="p-3 bg-dr-gold/10 border border-dr-gold/20 rounded-xl">
                                                <Code2 size={20} className="text-dr-gold" />
                                            </div>
                                            <h2 className="text-sm font-black tracking-[0.3em] text-white uppercase">
                                                Core Infrastructure
                                            </h2>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {techStack.length > 0 ? (
                                                techStack.map((tech: string, idx: number) => (
                                                    <motion.span 
                                                        key={idx}
                                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                                                        className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-black tracking-widest text-white/70 hover:text-dr-gold hover:border-dr-gold/30 transition-all uppercase"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))
                                            ) : (
                                                <span className="text-white/40 italic text-sm">Proprietary stack.</span>
                                            )}
                                        </div>
                                    </section>

                                    {/* Detailed Content */}
                                    {project.content && (
                                        <section className="prose prose-invert prose-dr max-w-none">
                                            <div dangerouslySetInnerHTML={{ 
                                                __html: enhanceContent(project.content)
                                            }} />
                                        </section>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Interactive Gallery */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 space-y-8">
                                {/* Technical Specs Card */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="p-8 glass rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <Monitor size={18} className="text-dr-gold" />
                                        <h4 className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Performance Audit</h4>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { label: 'Responsive Architecture', status: 'Optimized' },
                                            { label: 'Cloud Deployment', status: 'Scalable' },
                                            { label: 'SEO Integration', status: 'Global' }
                                        ].map((spec, i) => (
                                            <div key={i} className="flex items-center justify-between">
                                                <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{spec.label}</span>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 size={12} className="text-dr-gold" />
                                                    <span className="text-[10px] font-black text-dr-gold uppercase tracking-widest">{spec.status}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Multi-Image Gallery Grid */}
                                {images.length > 1 && (
                                    <div className="grid grid-cols-1 gap-6">
                                        {images.slice(1).map((img: string, idx: number) => (
                                            <motion.div 
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                whileHover={{ y: -5 }}
                                                className="aspect-[16/10] glass rounded-2xl overflow-hidden border border-white/5 relative group cursor-zoom-in"
                                            >
                                                <Image 
                                                    src={img} 
                                                    alt={`Gallery ${idx + 1}`} 
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative mt-32 p-12 lg:p-24 rounded-[4rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden text-center group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-dr-gold/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-dr-gold/10 border border-dr-gold/20 rounded-full mb-10">
                            <Sparkles size={12} className="text-dr-gold" />
                            <span className="text-[10px] font-black tracking-[0.3em] text-dr-gold uppercase">Growth Engine</span>
                        </div>

                        <h3 className="text-4xl lg:text-7xl font-black mb-10 text-white leading-tight uppercase tracking-tighter">
                            Scale your <br />
                            <span className="text-gradient-gold">Vision to Reality.</span>
                        </h3>
                        
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                            <Link
                                href="/booking"
                                className="group relative px-12 py-6 bg-dr-gold text-dr-navy font-black text-xs tracking-[0.2em] rounded-2xl hover:bg-white transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)] flex items-center gap-3 uppercase"
                            >
                                START YOUR PROJECT
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            <Link
                                href="/#services"
                                className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black text-xs tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-all uppercase"
                            >
                                EXPLORE CAPABILITIES
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
        </>
    );
}

