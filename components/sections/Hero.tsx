"use client";

import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MarketingAgency",
        "name": "DigitalRise Marketing",
        "description": "Premium digital marketing agency in Badlapur City specializing in AI, Performance Ads, and Web Architecture.",
        "url": "https://www.digitalrisemarketing.in",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Badlapur City",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: any = {
        hidden: { y: 20, opacity: 0 },
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
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Background Mesh Gradients */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden h-full">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 45, 0],
                        opacity: [0.1, 0.12, 0.1]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="hidden lg:block absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)] rounded-full will-change-transform"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        rotate: [0, -45, 0],
                        opacity: [0.05, 0.08, 0.05]
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="hidden lg:block absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,107,0,0.15)_0%,transparent_70%)] rounded-full will-change-transform"
                />

                {/* Simpler, static radial gradients for mobile - replacing heavy blur filters */}
                <div className="lg:hidden absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-full" />
                <div className="lg:hidden absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,107,0,0.15)_0%,transparent_70%)] rounded-full" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto text-center z-10"
            >
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-12">
                    <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-dr-gold/50 to-transparent" />
                    <div className="flex items-center gap-2 px-4 py-1.5 glass border border-white/10 rounded-full shadow-2xl shadow-dr-gold/5">
                        <Sparkles size={12} className="text-dr-gold animate-pulse" />
                        <span className="text-dr-gold text-[10px] font-bold tracking-[0.5em] uppercase">
                            Digital Growth Architects
                        </span>
                    </div>
                    <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-dr-gold/50 to-transparent" />
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-12 flex flex-col items-center text-center"
                >
                    <span className="text-[0.4em] font-bold tracking-[0.2em] text-dr-gold/80 block mb-6 uppercase">
                        Digital Marketing Agency in Badlapur City
                    </span>
                    <span className="text-white">RISE ABOVE </span>
                    <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-dr-gold via-white/90 to-dr-gold animate-shine py-2 leading-none">
                        THE NOISE.
                    </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-dr-text/40 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    We synthesize high-conversion web architecture, AI automation, and performance marketing into <span className="text-white/80">engineered growth engines.</span>
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-20">
                    <Link
                        href="/booking"
                        className="group relative px-12 py-6 bg-dr-gold text-dr-navy font-bold text-xs tracking-[0.2em] rounded-2xl transition-all duration-500 overflow-hidden shadow-[0_20px_50px_-10px_rgba(212,175,55,0.3)] hover:scale-105 hover:-translate-y-1 flex items-center gap-3"
                    >
                        <span className="relative z-10 flex items-center gap-4">
                            START YOUR ASCENT
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </Link>

                    <Link
                        href="#services"
                        className="group flex items-center gap-5 text-[10px] font-bold tracking-[0.4em] text-white/30 hover:text-dr-gold transition-all duration-500"
                    >
                        EXPLORE CAPABILITIES
                        <div className="w-12 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-dr-gold transition-all duration-500" />
                    </Link>
                </motion.div>

                {/* Hero Image - Realigned and Optimized for Responsiveness */}
                <motion.div
                    variants={itemVariants}
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group mx-auto"
                >
                    <Image
                        src="/images/hero.png"
                        alt="DigitalRise Marketing Agency - Digital Marketing Agency in Badlapur City Office"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dr-navy/60 via-transparent to-transparent" />

                    {/* Glassmorphism Overlay for premium feel */}
                    <div className="absolute inset-0 border border-white/5 rounded-2xl md:rounded-3xl pointer-events-none" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
