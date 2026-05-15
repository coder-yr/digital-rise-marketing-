"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Handshake, Globe2, Briefcase, Zap, CheckCircle2 } from "lucide-react";

export default function PartnershipPage() {
    const [formData, setFormData] = useState({
        companyName: "",
        website: "",
        contactPerson: "",
        email: "",
        partnershipType: "Referral Partner",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://digitalrise-marketing-backend-3.onrender.com';
            const cleanUrl = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;
            const res = await fetch(`${cleanUrl}/api/submissions/partnership`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error("Submission failed");
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <>
                <Header />
                <main className="relative min-h-screen pt-48 flex items-center justify-center bg-dr-navy text-white">
                    <div className="text-center glass p-12 rounded-[3rem] border border-dr-gold/20 max-w-xl mx-auto">
                        <CheckCircle2 size={64} className="text-dr-gold mx-auto mb-8" />
                        <h1 className="text-4xl font-black mb-6">Application Received!</h1>
                        <p className="text-dr-text/60 text-lg mb-10">Thank you for your interest in partnering with DigitalRise. Our partnership team will review your application and get back to you shortly.</p>
                        <button onClick={() => setStatus("idle")} className="px-10 py-4 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all">
                            SUBMIT ANOTHER
                        </button>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden pb-32">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="hidden md:block absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-dr-gold/5 rounded-full blur-[120px] opacity-30" />
                </div>

                {/* Hero Section */}
                <section className="relative pt-40 pb-20 px-6">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h4 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">Strategic Alliances</h4>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none text-white">
                            Scale <span className="text-gradient-gold">Together.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-dr-text/60 font-light leading-relaxed">
                            For agencies, consultants, and integration partners looking to expand their capabilities with DigitalRise&apos;s proven growth architecture.
                        </p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="glass p-8 rounded-[2rem] border border-white/5 text-center hover:border-dr-gold/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center text-dr-gold">
                                <Handshake size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Revenue Share</h3>
                            <p className="text-sm text-white/40">Attractive commission models for every successful referral.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/5 text-center hover:border-dr-gold/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center text-dr-orange">
                                <Globe2 size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Global Reach</h3>
                            <p className="text-sm text-white/40">Access to our international network and resources.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/5 text-center hover:border-dr-gold/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center text-dr-green">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">White Label</h3>
                            <p className="text-sm text-white/40">Offer our services under your brand with full support.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/5 text-center hover:border-dr-gold/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center text-white">
                                <Zap size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Integration</h3>
                            <p className="text-sm text-white/40">Seamless integration with your existing workflow.</p>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="py-20 px-6 max-w-4xl mx-auto relative z-10">
                    <div className="glass rounded-[2rem] p-10 md:p-14 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-dr-gold/10 rounded-full blur-[80px]" />

                        <h2 className="text-3xl font-black mb-10 text-center">Become a Partner</h2>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Company Name</label>
                                    <input name="companyName" value={formData.companyName} onChange={handleChange} required type="text" className="w-full bg-dr-navy/50 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors" placeholder="Acme Inc." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Website</label>
                                    <input name="website" value={formData.website} onChange={handleChange} required type="url" className="w-full bg-dr-navy/50 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors" placeholder="https://acme.com" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Contact Person</label>
                                    <input name="contactPerson" value={formData.contactPerson} onChange={handleChange} required type="text" className="w-full bg-dr-navy/50 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors" placeholder="Jane Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Email Address</label>
                                    <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-dr-navy/50 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors" placeholder="jane@acme.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Partnership Type</label>
                                <select name="partnershipType" value={formData.partnershipType} onChange={handleChange} className="w-full bg-dr-navy/50 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors text-white/60">
                                    <option>Referral Partner</option>
                                    <option>White Label Solution</option>
                                    <option>Technology Integration</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-dr-navy/50 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors resize-none" placeholder="Tell us about your company and partnership goals..."></textarea>
                            </div>

                            <button disabled={status === "loading"} className="w-full bg-dr-gold text-dr-navy font-black py-4 rounded-xl uppercase tracking-widest hover:bg-dr-gold-hover transition-all shadow-lg shadow-dr-gold/10 mt-4 disabled:opacity-50">
                                {status === "loading" ? "Submitting..." : "Submit Application"}
                            </button>

                            {status === "error" && (
                                <p className="text-xs text-center text-red-500 mt-4">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
