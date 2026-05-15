"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    Menu, X, Layout, BarChart3, Megaphone, Cpu, Clapperboard,
    ChevronDown, ChevronRight, ArrowUpRight, Sparkles, Globe, TrendingUp, Brain, Film
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Colour palette per service for icon glow & accent
const SERVICE_ACCENTS: Record<string, { glow: string; bg: string; border: string; text: string }> = {
    "Web Architecture": { glow: "shadow-blue-500/30", bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
    "Paid Advertising": { glow: "shadow-orange-500/30", bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400" },
    "Organic Growth": { glow: "shadow-emerald-500/30", bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
    "AI Agents": { glow: "shadow-violet-500/30", bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400" },
    "Content Creation": { glow: "shadow-pink-500/30", bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400" },
};

const FALLBACK_ACCENT = { glow: "shadow-dr-gold/30", bg: "bg-dr-gold/10", border: "border-dr-gold/30", text: "text-dr-gold" };

const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "4.9★", label: "Average Rating" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState(false);
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [services, setServices] = useState<any[]>([
        { title: "Web Architecture", href: "/web-architecture", icon: Globe, desc: "High-performance digital foundations" },
        { title: "Paid Advertising", href: "/paid-advertising", icon: TrendingUp, desc: "ROI-focused acquisition campaigns" },
        { title: "Organic Growth", href: "/organic-growth", icon: Megaphone, desc: "SEO and social dominance" },
        { title: "AI Agents", href: "/ai-agents", icon: Brain, desc: "Intelligent automation systems" },
        { title: "Content Creation", href: "/content-creation", icon: Film, desc: "Storytelling that converts" },
    ]);

    const iconMap: Record<string, any> = {
        Layout, BarChart3, Megaphone, Cpu, Clapperboard,
        Globe, TrendingUp, Brain, Film,
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://digitalrise-marketing-backend-1-o9fm.onrender.com";
                const cleanUrl = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl;
                const res = await fetch(`${cleanUrl}/api/services`);
                if (res.ok) {
                    const data = await res.json();
                    setServices(data.map((s: any) => ({
                        ...s,
                        icon: iconMap[s.icon] || Layout,
                        desc: s.description,
                    })));
                }
            } catch (err) {
                console.error("Failed to fetch services:", err);
            }
        };
        fetchServices();
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setHoveredService(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredService(false);
            setActiveCard(null);
        }, 180);
    };

    /* ── stagger variants ── */
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || hoveredService
                ? "bg-[#0A0E1A]/90 backdrop-blur-md border-b border-white/5 py-2"
                : "bg-transparent py-4"
                }`}
            onMouseLeave={handleMouseLeave}
        >
            {/* ─── NAV BAR ─── */}
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-[220px] h-[60px] group-hover:scale-105 transition-transform">
                        <Image
                            src="/Proposal_-_Proposal-removebg-preview.png"
                            alt="DigitalRise"
                            fill
                            sizes="(max-width: 768px) 180px, 220px"
                            className="object-contain object-left scale-135 origin-left"
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/projects" className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide">
                        Projects
                    </Link>

                    <div onMouseEnter={handleMouseEnter} className="relative h-full flex items-center">
                        <button className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide flex items-center gap-1">
                            Services
                            <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredService ? "rotate-180 text-[#D4AF37]" : ""}`} />
                        </button>
                    </div>

                    <Link href="/blogs" className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide">
                        Blogs
                    </Link>
                    <Link href="/partnership" className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide">
                        Partnership
                    </Link>
                </nav>

                <div className="hidden md:block">
                    <Link
                        href="/booking"
                        className="group relative px-6 py-3 bg-dr-orange text-white text-xs font-black tracking-widest rounded-xl transition-all duration-300 overflow-hidden shadow-lg shadow-dr-orange/20 hover:scale-105 flex items-center gap-2"
                    >
                        <span className="relative z-10 flex items-center gap-2 uppercase">
                            Start Project
                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                </div>

                <button className="md:hidden text-white hover:text-[#D4AF37] transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* ─── MEGA MENU ─── */}
            <AnimatePresence>
                {hoveredService && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden md:block absolute top-[100%] left-0 right-0"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* ── Panel shell ── */}
                        <div className="relative bg-[#080C18]/98 backdrop-blur-lg border-t border-white/[0.06] shadow-[0_48px_120px_-24px_rgba(0,0,0,0.9)] overflow-hidden">

                            {/* ambient blobs - reduced blur for performance */}
                            <div className="absolute -top-32 left-1/4 w-[600px] h-[400px] rounded-full bg-dr-gold/[0.04] blur-[80px] pointer-events-none lg:block hidden" />
                            <div className="absolute top-0 right-0 w-[400px] h-full bg-violet-700/[0.03] blur-[60px] pointer-events-none lg:block hidden" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-blue-700/[0.03] blur-[40px] pointer-events-none lg:block hidden" />

                            {/* thin gold top-border accent */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-dr-gold/40 to-transparent" />

                            <div className="max-w-7xl mx-auto px-10 pt-10 pb-0">

                                {/* ── ROW 1: left panel + service cards ── */}
                                <div className="grid grid-cols-12 gap-10 pb-10 border-b border-white/[0.05]">

                                    {/* LEFT PANEL */}
                                    <div className="col-span-3 flex flex-col gap-8">
                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dr-gold/[0.08] border border-dr-gold/20 rounded-full mb-5">
                                                <Sparkles size={10} className="text-dr-gold" />
                                                <span className="text-[9px] font-black tracking-[0.35em] text-dr-gold/80 uppercase">Full-Stack Growth</span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-white leading-tight tracking-tight mb-4">
                                                Every service,<br />
                                                <span className="text-gradient-gold">one vision.</span>
                                            </h3>
                                            <p className="text-[13px] text-white/35 leading-relaxed font-medium">
                                                Cohesive digital ecosystems that compound growth across every channel — engineered for velocity.
                                            </p>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-1 gap-3">
                                            {stats.map((s) => (
                                                <div key={s.label} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                                    <span className="text-xl font-black text-dr-gold tracking-tight">{s.value}</span>
                                                    <span className="text-[11px] text-white/40 font-medium">{s.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* SERVICE CARDS */}
                                    <div className="col-span-9">
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="grid grid-cols-3 gap-4"
                                        >
                                            {services.map((service, i) => {
                                                const accent = SERVICE_ACCENTS[service.title] ?? FALLBACK_ACCENT;
                                                const Icon = service.icon;
                                                const isActive = activeCard === service.title;

                                                return (
                                                    <motion.div key={service.title} variants={cardVariants}>
                                                        <Link
                                                            href={service.href}
                                                            className={`group relative flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-400 overflow-hidden cursor-pointer ${isActive
                                                                ? `${accent.bg} ${accent.border}`
                                                                : "bg-white/[0.015] border-white/[0.06] hover:border-white/10 hover:bg-white/[0.03]"
                                                                }`}
                                                            onMouseEnter={() => setActiveCard(service.title)}
                                                            onMouseLeave={() => setActiveCard(null)}
                                                        >
                                                            {/* glowing top edge on hover */}
                                                            <div className={`absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${accent.text}`} />

                                                            {/* icon row */}
                                                            <div className="flex items-center justify-between">
                                                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 border ${isActive
                                                                    ? `${accent.bg} ${accent.border} ${accent.text} ${accent.glow}`
                                                                    : "bg-white/[0.04] border-white/[0.08] text-white/30 group-hover:text-white/60"
                                                                    }`}>
                                                                    <Icon size={20} strokeWidth={1.5} />
                                                                </div>
                                                                <ArrowUpRight
                                                                    size={15}
                                                                    className={`transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${accent.text}`}
                                                                />
                                                            </div>

                                                            {/* text */}
                                                            <div>
                                                                <h5 className={`font-bold text-[15px] mb-1 transition-colors duration-300 ${isActive ? accent.text : "text-white/85 group-hover:text-white"}`}>
                                                                    {service.title}
                                                                </h5>
                                                                <p className="text-[12px] text-white/30 leading-relaxed group-hover:text-white/45 transition-colors duration-300">
                                                                    {service.desc}
                                                                </p>
                                                            </div>

                                                            {/* bottom shimmer line */}
                                                            <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 via-current ${accent.text}`} />
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}

                                            {/* "View all services" card — always at end */}
                                            <motion.div variants={cardVariants}>
                                                <Link
                                                    href="/#services"
                                                    className="group relative flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border border-dashed border-white/[0.08] hover:border-dr-gold/30 bg-transparent hover:bg-dr-gold/[0.03] transition-all duration-400 h-full text-center"
                                                >
                                                    <div className="w-10 h-10 rounded-full border border-dr-gold/20 group-hover:border-dr-gold/50 flex items-center justify-center transition-all duration-300">
                                                        <ChevronRight size={16} className="text-dr-gold/40 group-hover:text-dr-gold group-hover:translate-x-0.5 transition-all" />
                                                    </div>
                                                    <span className="text-[11px] font-bold tracking-widest uppercase text-white/25 group-hover:text-dr-gold/70 transition-colors duration-300">
                                                        All Services
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* ── ROW 2: CTA strip ── */}
                                <div className="flex items-center justify-between py-5">
                                    <p className="text-[12px] text-white/25 font-medium">
                                        Not sure where to start?{" "}
                                        <Link href="/booking" className="text-dr-gold/70 hover:text-dr-gold transition-colors underline underline-offset-2">
                                            Book a free strategy call →
                                        </Link>
                                    </p>

                                    <Link
                                        href="/booking"
                                        className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-dr-gold/[0.08] border border-dr-gold/20 hover:border-dr-gold/50 hover:bg-dr-gold/[0.14] transition-all duration-300"
                                    >
                                        <span className="text-[11px] font-black tracking-widest text-dr-gold uppercase">Request Audit</span>
                                        <ArrowUpRight size={13} className="text-dr-gold/60 group-hover:text-dr-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── MOBILE MENU ─── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0A0E1A] border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            <Link href="/projects" className="text-lg font-medium text-white/80 hover:text-[#D4AF37] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                Projects
                            </Link>

                            <div className="border-b border-white/5 pb-4">
                                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-4">Services</span>
                                <div className="grid gap-3 pl-2">
                                    {services.map((service) => {
                                        const accent = SERVICE_ACCENTS[service.title] ?? FALLBACK_ACCENT;
                                        const Icon = service.icon;
                                        return (
                                            <Link
                                                key={service.title}
                                                href={service.href}
                                                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-dr-gold/20 transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${accent.bg} ${accent.text}`}>
                                                    <Icon size={15} strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white/85">{service.title}</p>
                                                    <p className="text-[11px] text-white/30">{service.desc}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            <Link href="/blogs" className="text-lg font-medium text-white/80 hover:text-[#D4AF37] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                Blogs
                            </Link>
                            <Link href="/partnership" className="text-lg font-medium text-white/80 hover:text-[#D4AF37] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                Partnership
                            </Link>

                            <Link
                                href="/booking"
                                className="group relative w-full py-4 bg-dr-orange text-white text-center text-sm font-black tracking-widest uppercase rounded-xl hover:bg-dr-orange/90 overflow-hidden shadow-lg shadow-dr-orange/20 transition-all flex items-center justify-center gap-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Project
                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
