import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ChevronRight, FileText, Mail, Phone, ArrowUpRight } from "lucide-react";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";

export const metadata: Metadata = {
    title: "Terms of Service | DigitalRise Marketing",
    description: "Read the Terms of Service for DigitalRise Marketing. Understand the rules, guidelines, and terms for using our digital marketing and web development services.",
    openGraph: {
        title: "Terms of Service | DigitalRise Marketing",
        description: "Read the Terms of Service for DigitalRise Marketing.",
        url: "https://digitalrisemarketing.in/terms-of-service",
        siteName: "DigitalRise Marketing",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | DigitalRise Marketing",
        description: "Read the Terms of Service for DigitalRise Marketing.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What services does DigitalRise Marketing offer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer Website Development, Mobile App Development, SEO Services, Digital Marketing, Lead Generation, CRM Solutions, WhatsApp Automation, and AI Automation."
            }
        },
        {
            "@type": "Question",
            "name": "What is the governing law for these terms?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "These terms are governed by and construed in accordance with the laws of India, specifically under the jurisdiction of Maharashtra."
            }
        },
        {
            "@type": "Question",
            "name": "How can I contact support regarding the terms?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact our support team at contact@digitalrisemarketing.in or call us directly."
            }
        }
    ]
};

export default function TermsOfServicePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Header />
            <main className="min-h-screen bg-[#0A0E1A] text-white pt-32 pb-20 relative overflow-hidden">
                {/* Background Glow Effects */}
                <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
                    <nav className="inline-flex items-center text-sm font-medium text-white/50 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/terms-of-service" className="text-[#D4AF37]">Terms of Service</Link>
                    </nav>
                    <div className="flex flex-col items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative">
                            <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-20 rounded-2xl" />
                            <FileText size={40} className="relative z-10" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
                            Terms of Service
                        </h1>
                    </div>
                    <p className="text-white/50 text-sm tracking-widest uppercase font-bold">Last Updated: June 2026</p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                    {/* Sticky Table of Contents */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-32 glass p-8 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                            <h3 className="font-black text-xl mb-6 text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                                Index
                            </h3>
                            <ul className="space-y-4 text-sm font-medium text-white/50">
                                <li><a href="#acceptance" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">1. Acceptance of Terms</a></li>
                                <li><a href="#services-offered" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">2. Services Offered</a></li>
                                <li><a href="#user-responsibilities" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">3. User Responsibilities</a></li>
                                <li><a href="#payment-terms" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">4. Payment Terms</a></li>
                                <li><a href="#intellectual-property" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">5. Intellectual Property</a></li>
                                <li><a href="#limitations" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">6. Service Limitations</a></li>
                                <li><a href="#liability" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">7. Liability</a></li>
                                <li><a href="#termination" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">8. Termination</a></li>
                                <li><a href="#governing-law" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">9. Governing Law</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="lg:col-span-9 space-y-8">
                        
                        <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.01]">
                            <p className="text-white/80 text-lg leading-relaxed font-light">
                                These Terms of Service ("Terms") govern your access to and use of DigitalRise Marketing's website, services, and applications. Please read these Terms carefully before using our services.
                            </p>
                        </div>

                        {/* Section 01 */}
                        <section id="acceptance" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">01</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 01
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Acceptance of Terms</h2>
                                <p className="text-white/70 leading-relaxed font-light">
                                    By accessing or using the services provided by DigitalRise Marketing, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
                                </p>
                            </div>
                        </section>

                        {/* Section 02 */}
                        <section id="services-offered" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">02</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 02
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Services Offered</h2>
                                <p className="text-white/70 leading-relaxed mb-8 font-light">
                                    DigitalRise Marketing provides a variety of digital services designed for scale and exponential growth, including:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Website Development", "Mobile App Development", "SEO Services", 
                                        "Digital Marketing", "Lead Generation", "CRM Solutions", 
                                        "WhatsApp Automation", "AI Automation"
                                    ].map((service, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-all group/item">
                                            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover/item:scale-110 transition-transform">
                                                <ChevronRight size={16} />
                                            </div>
                                            <span className="text-white/80 font-medium">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 03 & 04 Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section id="user-responsibilities" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                        Section 03
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 text-white">User Responsibilities</h2>
                                    <p className="text-white/70 leading-relaxed text-sm font-light">
                                        You are responsible for any activity that occurs through your account and for your agreement to these Terms. You agree not to use the Service for any unlawful purpose or to conduct any illegal activity.
                                    </p>
                                </div>
                            </section>

                            <section id="payment-terms" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                        Section 04
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 text-white">Payment Terms</h2>
                                    <p className="text-white/70 leading-relaxed text-sm font-light">
                                        Fees for our services are specified in individual service agreements or proposals. Payments must be made in accordance with the terms laid out. Failure to pay may result in suspension.
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Section 05 */}
                        <section id="intellectual-property" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">05</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 05
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Intellectual Property Rights</h2>
                                <p className="text-white/70 leading-relaxed font-light">
                                    The Service and its original content, features, and functionality are and will remain the exclusive property of DigitalRise Marketing and its licensors. Unless explicitly stated in a service agreement, custom code, designs, and marketing assets created for clients belong to the client upon full payment of services.
                                </p>
                            </div>
                        </section>

                        {/* Remaining sections combined in grid for visual variety */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section id="limitations" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500">
                                <h2 className="text-xl font-bold mb-3 text-white">6. Limitations</h2>
                                <p className="text-white/70 text-sm font-light leading-relaxed">
                                    While we strive to provide uninterrupted service, DigitalRise Marketing does not guarantee that the services will be completely error-free or uninterrupted.
                                </p>
                            </section>
                            
                            <section id="liability" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500">
                                <h2 className="text-xl font-bold mb-3 text-white">7. Liability</h2>
                                <p className="text-white/70 text-sm font-light leading-relaxed">
                                    In no event shall DigitalRise Marketing be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of the Service.
                                </p>
                            </section>

                            <section id="termination" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500">
                                <h2 className="text-xl font-bold mb-3 text-white">8. Termination</h2>
                                <p className="text-white/70 text-sm font-light leading-relaxed">
                                    We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                                </p>
                            </section>
                            
                            <section id="governing-law" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500">
                                <h2 className="text-xl font-bold mb-3 text-white">9. Governing Law</h2>
                                <p className="text-white/70 text-sm font-light leading-relaxed">
                                    These Terms shall be governed and construed in accordance with the laws of India, specifically within the jurisdiction of Maharashtra.
                                </p>
                            </section>
                        </div>

                        {/* Contact Section */}
                        <section id="contact" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden mt-12">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <a href={`mailto:${SITE_EMAIL}`} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/10 transition-all flex flex-col items-start gap-4 relative overflow-hidden">
                                        <div className="absolute -right-4 -top-4 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 group-hover:scale-110 transition-all duration-500">
                                            <Mail size={80} />
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] relative z-10 group-hover:scale-110 transition-transform">
                                            <Mail size={24} />
                                        </div>
                                        <div className="relative z-10">
                                            <h3 className="font-bold text-white mb-1">Email Support</h3>
                                            <p className="text-white/60 font-light group-hover:text-white transition-colors">{SITE_EMAIL}</p>
                                        </div>
                                    </a>
                                    
                                    <a href={`tel:${SITE_PHONE}`} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/10 transition-all flex flex-col items-start gap-4 relative overflow-hidden">
                                        <div className="absolute -right-4 -top-4 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 group-hover:scale-110 transition-all duration-500">
                                            <Phone size={80} />
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] relative z-10 group-hover:scale-110 transition-transform">
                                            <Phone size={24} />
                                        </div>
                                        <div className="relative z-10">
                                            <h3 className="font-bold text-white mb-1">Call Us</h3>
                                            <p className="text-white/60 font-light group-hover:text-white transition-colors">{SITE_PHONE}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Related Documents */}
                        <div className="p-8 rounded-[2rem] bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-700" />
                            <div className="relative z-10">
                                <h3 className="font-bold text-white text-lg mb-2">Related Legal Documents</h3>
                                <p className="text-white/60 text-sm font-light">Explore our other policies and terms of service.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                                <Link href="/privacy-policy" className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-white font-medium transition-all flex items-center justify-center gap-2 group/btn">
                                    Privacy Policy <ArrowUpRight size={16} className="text-[#D4AF37] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </Link>
                                <Link href="/data-deletion" className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-white font-medium transition-all flex items-center justify-center gap-2 group/btn">
                                    Data Deletion <ArrowUpRight size={16} className="text-[#D4AF37] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
