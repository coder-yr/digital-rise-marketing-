import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ChevronRight, Shield, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";

export const metadata: Metadata = {
    title: "Privacy Policy | DigitalRise Marketing",
    description: "Learn how DigitalRise Marketing collects, uses, and protects your personal data. Read our comprehensive Privacy Policy.",
    openGraph: {
        title: "Privacy Policy | DigitalRise Marketing",
        description: "Learn how DigitalRise Marketing collects, uses, and protects your personal data.",
        url: "https://digitalrisemarketing.in/privacy-policy",
        siteName: "DigitalRise Marketing",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | DigitalRise Marketing",
        description: "Learn how DigitalRise Marketing collects, uses, and protects your personal data.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How does DigitalRise Marketing collect data?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We collect data through contact forms, lead generation forms, WhatsApp inquiries, and website analytics technologies like cookies, Google Analytics, and Meta Pixel."
            }
        },
        {
            "@type": "Question",
            "name": "How is my personal data used?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Your data is used to provide digital marketing services, communicate with you regarding your projects, improve our website experience, and run targeted advertising campaigns."
            }
        },
        {
            "@type": "Question",
            "name": "How can I request my data to be deleted?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can request data deletion by following the instructions on our Data Deletion page or by contacting us at contact@digitalrisemarketing.in."
            }
        }
    ]
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Header />
            <main className="min-h-screen bg-[#0A0E1A] text-white pt-32 pb-20 relative overflow-hidden">
                {/* Background Glow Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
                    <nav className="inline-flex items-center text-sm font-medium text-white/50 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/privacy-policy" className="text-[#D4AF37]">Privacy Policy</Link>
                    </nav>
                    <div className="flex flex-col items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative">
                            <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-20 rounded-2xl" />
                            <Shield size={40} className="relative z-10" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
                            Privacy Policy
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
                                <li><a href="#information-we-collect" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">1. Information We Collect</a></li>
                                <li><a href="#how-we-use-data" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">2. How We Use Your Data</a></li>
                                <li><a href="#cookies-tracking" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">3. Cookies & Tracking</a></li>
                                <li><a href="#third-party-services" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">4. Third-Party Services</a></li>
                                <li><a href="#data-protection" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">5. Data Protection</a></li>
                                <li><a href="#user-rights" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">6. Your Rights</a></li>
                                <li><a href="#children-privacy" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">7. Children's Privacy</a></li>
                                <li><a href="#contact" className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 block">8. Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="lg:col-span-9 space-y-8">
                        
                        <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.01]">
                            <p className="text-white/80 text-lg leading-relaxed font-light">
                                Welcome to DigitalRise Marketing. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (https://digitalrisemarketing.in) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </div>

                        {/* Section 01 */}
                        <section id="information-we-collect" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">01</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 01
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Information We Collect</h2>
                                <p className="text-white/70 leading-relaxed mb-6 font-light">
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Identity Data", desc: "Includes first name, last name, username or similar identifier." },
                                        { title: "Contact Data", desc: "Includes billing address, delivery address, email address, and telephone numbers (including WhatsApp)." },
                                        { title: "Inquiry Data", desc: "Information collected from contact forms, lead generation forms, and direct communications via email or WhatsApp." },
                                        { title: "Technical Data", desc: "Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location." },
                                        { title: "Usage Data", desc: "Includes information about how you use our website, products, and services collected via website analytics." }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0 shadow-[0_0_10px_#D4AF37]" />
                                            <div>
                                                <strong className="text-white block mb-1">{item.title}</strong>
                                                <span className="text-white/60 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Section 02 */}
                        <section id="how-we-use-data" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">02</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 02
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">How We Use Your Data</h2>
                                <p className="text-white/70 leading-relaxed mb-6 font-light">
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 text-white/70 space-y-3 font-light marker:text-[#D4AF37]">
                                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                    <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                    <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 03 */}
                        <section id="cookies-tracking" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">03</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 03
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Cookies and Tracking Technologies</h2>
                                <p className="text-white/70 leading-relaxed font-light">
                                    We use cookies, pixels, and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                                </p>
                            </div>
                        </section>

                        {/* Section 04 */}
                        <section id="third-party-services" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">04</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 04
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Third-Party Services</h2>
                                <p className="text-white/70 leading-relaxed mb-6 font-light">
                                    We employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: "Google Analytics & Ads", desc: "Used to track website traffic and manage advertising campaigns." },
                                        { title: "Meta Pixel", desc: "Used to measure the effectiveness of our Facebook and Instagram advertising." },
                                        { title: "CRM Systems", desc: "Used to store and manage our client and lead data securely." },
                                        { title: "Automation Tools", desc: "Used for marketing automation and automated communication workflows." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                            <strong className="text-white block mb-2">{item.title}</strong>
                                            <span className="text-white/60 text-sm font-light">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 05 & 06 & 07 combined layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section id="data-protection" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                        Section 05
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 text-white">Data Protection Measures</h2>
                                    <p className="text-white/70 leading-relaxed text-sm font-light">
                                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Access is limited to authorized personnel only.
                                    </p>
                                </div>
                            </section>

                            <section id="children-privacy" className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                        Section 07
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 text-white">Children's Privacy</h2>
                                    <p className="text-white/70 leading-relaxed text-sm font-light">
                                        Our website and services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Section 06 */}
                        <section id="user-rights" className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-[-5%] right-[-2%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                <span className="text-[12rem] font-black text-white leading-none">06</span>
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                                    Section 06
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Your Rights</h2>
                                <p className="text-white/70 leading-relaxed mb-6 font-light">
                                    Under certain circumstances, you have rights under data protection laws in relation to your personal data. You have the right to:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Request Access", "Request Correction", "Request Erasure", "Object to Processing", "Request Restriction", "Request Transfer", "Withdraw Consent"].map((right, idx) => (
                                        <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium flex items-center gap-2 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all cursor-default">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> {right}
                                        </span>
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
                                <Link href="/terms-of-service" className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-white font-medium transition-all flex items-center justify-center gap-2 group/btn">
                                    Terms of Service <ArrowUpRight size={16} className="text-[#D4AF37] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
