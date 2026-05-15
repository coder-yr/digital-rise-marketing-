"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
    const footerLinks = [
        { title: "Services", links: ["Web Architecture", "Paid Advertising", "Organic Growth", "AI Agents", "Content Creation"] },
        { title: "Company", links: [{ name: "About Us", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Blogs", href: "/blogs" }, { name: "Careers", href: "/careers" }] },
        { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
    ];

    return (
        <footer className="bg-[#0A0E1A] border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    <Link href="/" className="flex items-center gap-2 mb-6 group">
                        <div className="relative w-24 h-24 group-hover:scale-105 transition-transform">
                            <Image
                                src="/Proposal_-_Proposal-removebg-preview.png"
                                alt="DigitalRise"
                                fill
                                sizes="96px"
                                className="object-contain"
                            />
                        </div>
                    </Link>
                    <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
                        Synthesizing AI, performance marketing, and cutting-edge design to help brands dominate their market.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:bg-white/10 transition-all border border-white/5">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:bg-white/10 transition-all border border-white/5">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:bg-white/10 transition-all border border-white/5">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:bg-white/10 transition-all border border-white/5">
                            <Github size={18} />
                        </a>
                    </div>
                </div>

                {footerLinks.map((section) => (
                    <div key={section.title}>
                        <h4 className="font-display font-bold text-white text-lg mb-6">{section.title}</h4>
                        <ul className="space-y-4">
                            {section.links.map((link) => (
                                <li key={typeof link === 'string' ? link : link.name}>
                                    <Link 
                                        href={typeof link === 'string' ? "#" : link.href} 
                                        className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {typeof link === 'string' ? link : link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h4 className="font-display font-bold text-white text-lg mb-6">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-white/60 text-sm group cursor-pointer hover:text-white transition-colors">
                            <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>Hendrepada, Badlapur West,<br />Maharashtra, India - 421503</span>
                        </li>
                        <li className="flex items-center gap-3 text-white/60 text-sm group cursor-pointer hover:text-white transition-colors">
                            <Mail size={18} className="text-[#D4AF37] shrink-0" />
                            <span>contact@digitalrisemarketing.in</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-white/40 text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} DigitalRise Marketing. All rights reserved.
                </p>
                <div className="flex items-center gap-8">
                    <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Sitemap</Link>
                    <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Accessibility</Link>
                </div>
            </div>
        </footer>
    );
}
