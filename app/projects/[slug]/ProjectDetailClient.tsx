"use client";

import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/portfolio';

export default function ProjectDetailClient({ project }: { project: Project }) {
    if (!project) return null;

    return (
        <main className="relative z-10 pt-32 pb-20 bg-dr-navy min-h-screen">
            {/* Ambient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className={`absolute top-0 left-[10%] w-[600px] h-[600px] bg-gradient-to-br ${project.color || 'from-dr-gold/20 to-transparent'} rounded-full blur-[180px] opacity-10`} />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="mb-12">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-dr-gold hover:text-white transition-colors uppercase">
                        <ArrowLeft className="w-4 h-4" /> BACK TO PROJECTS
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-7">
                        <div className="mb-6 flex gap-4 items-center">
                            <span className="px-4 py-1.5 glass text-white/80 text-[10px] uppercase tracking-widest font-bold rounded-full border border-white/10">
                                {project.category || 'Projects'}
                            </span>
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-dr-orange hover:text-white hover:underline transition-all"
                                >
                                    LIVE SITE <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white mb-8">
                            {project.title || 'Project Detail'}
                        </h1>

                        <p className="text-xl text-dr-text/70 leading-relaxed mb-8">
                            {project.longDescription || project.description || 'No description available for this project.'}
                        </p>

                        <h2 className="text-sm font-black tracking-[0.2em] text-white/50 uppercase mb-6 mt-16 border-t border-white/10 pt-8">
                            Key Features & Achievements
                        </h2>

                        <ul className="space-y-4">
                            {project.features && Array.isArray(project.features) && project.features.length > 0 ? (
                                project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-dr-gold flex-shrink-0" />
                                        <span className="text-white/80 font-medium">{feature}</span>
                                    </li>
                                ))
                            ) : (
                                <li className="text-white/40 italic text-sm">No specific features listed.</li>
                            )}
                        </ul>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 glass p-2 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
                            <div className="w-full bg-dr-navy rounded-t-[1.5rem] border-b border-white/10 p-3 flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>

                            <div className="w-full aspect-[4/5] bg-dr-navy overflow-hidden relative group">
                                {project.url ? (
                                    <a href={project.url} target="_blank" rel="noreferrer" className="block w-full h-full relative cursor-pointer">
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                                            <span className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest rounded-full flex items-center gap-2">
                                                VISIT LIVE PREVIEW <ExternalLink className="w-4 h-4" />
                                            </span>
                                        </div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (project.url) {
                                                    target.src = `https://image.thum.io/get/width/1200/crop/800/noanimate/${project.url}`;
                                                }
                                            }}
                                        />
                                    </a>
                                ) : (
                                    <div className="w-full h-full relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-32 p-12 lg:p-20 rounded-[3rem] border border-dr-gold/20 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-dr-gold/10 to-transparent pointer-events-none" />
                    <h3 className="text-3xl lg:text-5xl font-black mb-8 text-white relative z-10">
                        Want similar results for your brand?
                    </h3>
                    <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg relative z-10">
                        Let's build a performance-driven experience that scales your business effectively.
                    </p>
                    <Link
                        href="/booking"
                        className="relative z-10 inline-flex px-10 py-5 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all shadow-xl shadow-dr-gold/20"
                    >
                        START YOUR PROJECT
                    </Link>
                </div>
            </div>
        </main>
    );
}
