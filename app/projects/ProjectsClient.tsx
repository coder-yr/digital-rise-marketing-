"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { ArrowRight, ExternalLink, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsClient() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://digitalrise-marketing-backend-3.onrender.com';
                const cleanUrl = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;
                const res = await fetch(`${cleanUrl}/api/projects?t=${Date.now()}`); // Cache busting
                if (res.ok) {
                    const data = await res.json();
                    setProjects(data);
                }
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Helper to safely parse JSON strings if they come from DB as strings
    const getFirstImage = (imagesData: any) => {
        if (!imagesData) return null;
        let images = imagesData;
        if (typeof imagesData === 'string') {
            try {
                images = JSON.parse(imagesData);
            } catch (e) {
                return imagesData; // fallback if it's just a single string URL
            }
        }
        return Array.isArray(images) && images.length > 0 ? images[0] : (typeof images === 'string' ? images : null);
    };

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex flex-col glass rounded-3xl border border-white/5 overflow-hidden h-full"
                    >
                        {/* Image Placeholder */}
                        <div className="w-full aspect-[16/10] bg-white/5 animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]" />
                        </div>
                        
                        {/* Content Placeholder */}
                        <div className="p-10 flex flex-col flex-grow">
                            {/* Category Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-4 bg-dr-gold/30 rounded-full animate-pulse" />
                                <div className="w-20 h-3 bg-white/10 rounded-full animate-pulse" />
                            </div>

                            {/* Title */}
                            <div className="w-3/4 h-6 bg-white/10 rounded-lg mb-2 animate-pulse" />
                            <div className="w-1/2 h-6 bg-white/10 rounded-lg mb-8 animate-pulse" />
                            
                            {/* Description Lines */}
                            <div className="space-y-3 flex-grow mb-8">
                                <div className="w-full h-3 bg-white/5 rounded-full animate-pulse" />
                                <div className="w-5/6 h-3 bg-white/5 rounded-full animate-pulse" />
                                <div className="w-4/6 h-3 bg-white/5 rounded-full animate-pulse" />
                            </div>

                            {/* Footer */}
                            <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-auto">
                                <div className="w-32 h-3 bg-white/10 rounded-full animate-pulse" />
                                <div className="w-16 h-3 bg-white/10 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            <AnimatePresence mode="popLayout">
                {projects.map((project, index) => {
                    const mainImage = getFirstImage(project.images);
                    
                    return (
                        <motion.div
                            key={project.slug || index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link 
                                href={`/projects/${project.slug}`} 
                                className="group flex flex-col glass rounded-3xl border border-white/5 overflow-hidden hover:border-dr-gold/30 transition-all duration-700 bg-white/[0.02] h-full"
                            >
                                <div className="relative w-full aspect-[16/10] bg-dr-navy/50 overflow-hidden">
                                    {/* Glass Overlay on Hover */}
                                    <div className="absolute inset-0 bg-dr-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center backdrop-blur-[4px]">
                                        <motion.span 
                                            whileHover={{ scale: 1.05 }}
                                            className="px-6 py-3 bg-dr-gold text-dr-navy text-[10px] font-black tracking-[0.2em] rounded-full flex items-center gap-3 shadow-2xl uppercase"
                                        >
                                            VIEW CASE STUDY <ArrowRight className="w-4 h-4" />
                                        </motion.span>
                                    </div>

                                    {/* Main Image */}
                                    {mainImage ? (
                                        <img
                                            src={mainImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                            loading={index < 6 ? "eager" : "lazy"}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (project.liveUrl) {
                                                    target.src = `https://image.thum.io/get/width/1200/crop/800/noanimate/${project.liveUrl}`;
                                                }
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-white/5">
                                            <Layout className="w-12 h-12 text-white/10" />
                                        </div>
                                    )}

                                    {/* Gold Accent Corner */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="p-10 flex flex-col flex-grow relative overflow-hidden">
                                    {/* Subtle Gradient Hover */}
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-1 h-4 bg-dr-gold rounded-full" />
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-dr-gold/60">
                                            {project.category || 'Portfolio'}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-dr-gold transition-colors tracking-tight leading-tight uppercase">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-sm text-white/40 mb-8 flex-grow leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-dr-gold animate-pulse" />
                                            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Active Deployment</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-dr-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                            <span className="text-[10px] font-black uppercase tracking-widest">Detail</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

