import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ChevronRight, Trash2, Mail, Phone, ArrowUpRight, AlertCircle } from "lucide-react";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";

export const metadata: Metadata = {
    title: "Data Deletion Instructions | DigitalRise Marketing",
    description: "Learn how to request the deletion of your personal data from DigitalRise Marketing systems and understand your data privacy rights.",
    openGraph: {
        title: "Data Deletion Instructions | DigitalRise Marketing",
        description: "Learn how to request the deletion of your personal data.",
        url: "https://digitalrisemarketing.in/data-deletion",
        siteName: "DigitalRise Marketing",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Deletion Instructions | DigitalRise Marketing",
        description: "Learn how to request the deletion of your personal data.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I request my data to be deleted?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can request data deletion by sending an email to contact@digitalrisemarketing.in with the subject line 'Data Deletion Request' and including your name, email, phone number, and relationship with us."
            }
        },
        {
            "@type": "Question",
            "name": "How long does the data deletion process take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We will process your data deletion request within 30 days of verifying your identity."
            }
        },
        {
            "@type": "Question",
            "name": "Are there any exceptions where data cannot be deleted?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we may retain certain data as required by law for accounting, tax, or legal compliance purposes, or to resolve ongoing disputes."
            }
        }
    ]
};

export default function DataDeletionPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Header />
            <main className="min-h-screen bg-[#0A0E1A] text-white pt-32 pb-20 relative overflow-hidden">
                {/* Background Glow Effects */}
                <div className="absolute top-20 right-1/2 translate-x-1/2 w-[600px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
                    <nav className="inline-flex items-center text-sm font-medium text-white/50 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/data-deletion" className="text-[#D4AF37]">Data Deletion</Link>
                    </nav>
                    <div className="flex flex-col items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative">
                            <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-20 rounded-2xl" />
                            <Trash2 size={40} className="relative z-10" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
                            Data Deletion
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
                                <li><a href="#your-rights" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">1. Your Rights</a></li>
                                <li><a href="#how-to-request" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">2. How to Request</a></li>
                                <li><a href="#required-information" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">3. Required Information</a></li>
                                <li><a href="#processing-timeline" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">4. Processing Timeline</a></li>
                                <li><a href="#exceptions" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">5. Legal Exceptions</a></li>
                                <li><a href="#contact" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">6. Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="lg:col-span-9 space-y-8">
                        
                        <div className="glass p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-transparent relative overflow-hidden">
                            <div className="absolute right-0 top-0 text-[#D4AF37]/10 -translate-y-1/4 translate-x-1/4">
                                <AlertCircle size={200} />
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed font-light relative z-10">
                                At DigitalRise Marketing, we believe in giving you full control over your personal data. If you no longer wish for us to store your information, you have the right to request the complete erasure of your data from our systems.
                            </p>
                        </div>

                        {/* Section 01 */}
                        <section id="your-rights" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">01</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 01
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Your Data Deletion Rights</h2>
                                <p className="text-white/70 leading-relaxed font-light">
                                    In accordance with global data protection laws (such as GDPR), you have the "Right to be Forgotten." This means you can ask us to delete any personally identifiable information (PII) we hold about you, provided there is no compelling legal reason for us to keep it.
                                </p>
                            </div>
                        </section>

                        {/* Section 02 & 03 Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section id="how-to-request" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                        Section 02
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 text-white">How to Request</h2>
                                    <ol className="list-decimal pl-5 text-white/70 space-y-3 font-light marker:text-[#D4AF37]">
                                        <li>Compose a new email.</li>
                                        <li>To: <strong className="text-white">contact@digitalrisemarketing.in</strong></li>
                                        <li>Subject: <strong className="text-white">Data Deletion Request</strong></li>
                                        <li>Include verification details.</li>
                                        <li>Send. Our team will acknowledge receipt.</li>
                                    </ol>
                                </div>
                            </section>

                            <section id="required-information" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                        Section 03
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 text-white">Required Info</h2>
                                    <p className="text-white/70 text-sm mb-4 font-light">To protect against fraudulent requests, include:</p>
                                    <ul className="space-y-3">
                                        {["Full Legal Name", "Associated Email Address", "Phone Number", "Relationship (e.g., Client)"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-white/70 text-sm font-light">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>

                        {/* Section 04 */}
                        <section id="processing-timeline" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-32 h-32 shrink-0 rounded-full bg-white/5 border border-[#D4AF37]/30 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(212,175,55,0.1)] relative group-hover:scale-105 transition-transform">
                                <div className="absolute inset-0 rounded-full border border-white/10 border-t-[#D4AF37] animate-spin" style={{ animationDuration: '3s' }} />
                                <span className="text-3xl font-black text-white">30</span>
                                <span className="text-xs text-[#D4AF37] uppercase font-bold tracking-widest">Days</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
                                    Section 04
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-white">Processing Timeline</h2>
                                <p className="text-white/70 leading-relaxed font-light">
                                    Upon receiving your request and verifying your identity, we will begin the deletion process across our servers, CRM systems, and marketing platforms. We guarantee that your data will be permanently deleted within <strong className="text-white">30 days</strong>. We will notify you once completed.
                                </p>
                            </div>
                        </section>

                        {/* Section 05 */}
                        <section id="exceptions" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">05</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 05
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Legal Exceptions</h2>
                                <p className="text-white/70 leading-relaxed mb-6 font-light">
                                    Please note that we may not be able to completely delete all of your data if we are required to retain it by law. Common exceptions include:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Tax and accounting purposes (e.g., invoices).",
                                        "Compliance with a legal obligation or court order.",
                                        "Establish, exercise, or defend legal claims.",
                                        "Complete a transaction for which data was collected."
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-white/70 font-light flex gap-3 items-start">
                                            <AlertCircle size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

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
                                <Link href="/terms-of-service" className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-white font-medium transition-all flex items-center justify-center gap-2 group/btn">
                                    Terms of Service <ArrowUpRight size={16} className="text-[#D4AF37] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
