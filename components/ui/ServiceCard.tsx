"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MouseEvent, useRef } from "react";

interface ServiceCardProps {
    icon: string;
    badge: string;
    badgeColor: "gold" | "orange" | "green";
    title: string;
    description: string;
    feature?: string;
    link: string;
    wide?: boolean;
    tags?: string[];
    deliveryStats?: Array<{ label: string; value: string }>;
}

const ServiceCard = ({
    icon,
    badge,
    badgeColor,
    title,
    description,
    feature,
    link,
    wide = false,
    tags = [],
    deliveryStats = [],
}: ServiceCardProps) => {
    const badgeColors = {
        gold: "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20",
        orange: "bg-[#FF6B4A]/10 text-[#FF6B4A] border-[#FF6B4A]/20",
        green: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
    };

    const glowColors = {
        gold: "group-hover:shadow-[0_0_80px_-20px_rgba(212,175,55,0.3)]",
        orange: "group-hover:shadow-[0_0_80px_-20px_rgba(255,107,74,0.3)]",
        green: "group-hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.3)]",
    };

    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`service-card group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between overflow-hidden ${wide ? "h-full" : "h-[420px]"
                } ${glowColors[badgeColor]}`}
        >
            {/* Background Gradient */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${badgeColor === 'gold' ? 'rgba(212,175,55,0.06)' :
                        badgeColor === 'orange' ? 'rgba(255,107,74,0.06)' :
                            'rgba(16,185,129,0.06)'
                        }, transparent 40%)`
                }}
            />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                        {/* @ts-ignore */}
                        <iconify-icon icon={icon} width="24" height="24" />
                    </div>

                    <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${badgeColors[badgeColor]}`}
                    >
                        {badge}
                    </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {/* Tags (for wide card) */}
                {wide && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <span key={tag} className="bg-white/5 text-white/50 text-[10px] px-2 py-1 rounded border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Delivery Stats (for wide card) */}
                {wide && deliveryStats.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-white/5">
                        {deliveryStats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{stat.label}</p>
                                <p className="text-sm font-bold text-white">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                {feature && (
                    <div className="flex items-center gap-2 text-xs font-medium text-white/40 group-hover:text-white/60 transition-colors">
                        <CheckCircle2 size={14} className={badgeColor === "gold" ? "text-[#D4AF37]" : badgeColor === "orange" ? "text-[#FF6B4A]" : "text-[#10B981]"} />
                        {feature}
                    </div>
                )}

                <Link
                    href={link}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[#D4AF37] group-hover:text-[#0A0E1A] transition-all duration-300 ml-auto"
                >
                    <ArrowRight size={14} />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
