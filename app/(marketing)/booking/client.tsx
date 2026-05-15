"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight, Globe, ChevronDown, CheckCircle2 } from "lucide-react";

export default function BookingClient() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyUrl: "",
        date: "",
        timezone: "",
        time: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name || 'time']: e.target.value });
    };

    const handleTimeChange = (time: string) => {
        setFormData({ ...formData, time });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://digitalrise-marketing-backend-1-o9fm.onrender.com';
            const cleanUrl = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;
            const res = await fetch(`${cleanUrl}/api/submissions/booking`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error("Submission failed");
            setStatus("success");
            setFormData({ firstName: "", lastName: "", email: "", companyUrl: "", date: "", timezone: "", time: "" });
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
                        <h1 className="text-4xl font-black mb-6">Booking Confirmed!</h1>
                        <p className="text-dr-text/60 text-lg mb-10">We've received your request. Our team will reach out to you shortly to confirm the details.</p>
                        <button onClick={() => setStatus("idle")} className="px-10 py-4 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all">
                            BOOK ANOTHER SESSION
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
            <main className="relative min-h-screen pt-32 pb-20 bg-dr-navy text-white overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="hidden md:block absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-dr-gold/5 rounded-full blur-[120px] opacity-30" />
                    <div className="hidden md:block absolute top-[40%] -right-[5%] w-[500px] h-[500px] bg-dr-orange/5 rounded-full blur-[100px] opacity-20" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column: Info */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <h4 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                                Schedule a Call
                            </h4>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-8">
                                Let&apos;s Build Your <span className="text-gradient-gold">Growth Engine</span>
                            </h1>
                            <p className="text-dr-text/60 text-lg mb-10 leading-relaxed">
                                Book a 30-minute strategy session to discuss your current challenges and explore how our integrated systems can scale your business.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dr-gold">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white">Select a Date</h5>
                                        <p className="text-sm text-white/40">Choose a time that works for you</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dr-orange">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white">30-Minute Session</h5>
                                        <p className="text-sm text-white/40">Focused strategy discussion</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Calendar/Form */}
                        <div className="lg:col-span-7">
                            <div className="glass rounded-[2rem] border border-white/5 p-8 md:p-10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dr-gold via-dr-orange to-dr-gold opacity-50" />

                                <h3 className="text-xl font-bold mb-6">Enter Your Details</h3>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">First Name</label>
                                            <input name="firstName" value={formData.firstName} onChange={handleChange} required type="text" className="w-full bg-dr-navy/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-dr-gold transition-colors" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Last Name</label>
                                            <input name="lastName" value={formData.lastName} onChange={handleChange} required type="text" className="w-full bg-dr-navy/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-dr-gold transition-colors" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Work Email</label>
                                        <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-dr-navy/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-dr-gold transition-colors" placeholder="john@company.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Company URL</label>
                                        <input name="companyUrl" value={formData.companyUrl} onChange={handleChange} type="url" className="w-full bg-dr-navy/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-dr-gold transition-colors" placeholder="https://company.com" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Preferred Date</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
                                                <input
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    required
                                                    type="date"
                                                    className="w-full bg-dr-navy/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-dr-gold transition-colors text-white/80 placeholder-white/40 appearance-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Timezone</label>
                                            <div className="relative">
                                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
                                                <select name="timezone" value={formData.timezone} onChange={handleChange} required className="w-full bg-dr-navy/50 border border-white/10 rounded-lg pl-12 pr-10 py-3 text-sm focus:outline-none focus:border-dr-gold transition-colors text-white/80 appearance-none cursor-pointer">
                                                    <option value="" className="bg-dr-navy">Select your timezone</option>

                                                    <optgroup label="GCC" className="bg-dr-navy font-bold text-dr-gold">
                                                        <option value="Asia/Dubai" className="text-white">Dubai (GST)</option>
                                                        <option value="Asia/Riyadh" className="text-white">Riyadh (AST)</option>
                                                        <option value="Asia/Kuwait" className="text-white">Kuwait (AST)</option>
                                                        <option value="Asia/Muscat" className="text-white">Muscat (GST)</option>
                                                        <option value="Asia/Qatar" className="text-white">Qatar (AST)</option>
                                                        <option value="Asia/Bahrain" className="text-white">Bahrain (AST)</option>
                                                    </optgroup>

                                                    <optgroup label="India" className="bg-dr-navy font-bold text-dr-gold">
                                                        <option value="Asia/Kolkata" className="text-white">India (IST)</option>
                                                    </optgroup>

                                                    <optgroup label="Europe" className="bg-dr-navy font-bold text-dr-gold">
                                                        <option value="Europe/London" className="text-white">London (GMT)</option>
                                                        <option value="Europe/Paris" className="text-white">Paris (CET)</option>
                                                        <option value="Europe/Berlin" className="text-white">Berlin (CET)</option>
                                                        <option value="Europe/Zurich" className="text-white">Zurich (CET)</option>
                                                        <option value="Europe/Madrid" className="text-white">Madrid (CET)</option>
                                                        <option value="Europe/Rome" className="text-white">Rome (CET)</option>
                                                        <option value="Europe/Amsterdam" className="text-white">Amsterdam (CET)</option>
                                                        <option value="Europe/Dublin" className="text-white">Dublin (GMT)</option>
                                                    </optgroup>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Preferred Time</label>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                                            {["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"].map((time) => (
                                                <label key={time} className="cursor-pointer">
                                                    <input type="radio" name="time" value={time} checked={formData.time === time} onChange={() => handleTimeChange(time)} className="peer sr-only" required />
                                                    <div className="text-center py-2 px-1 text-xs border border-white/10 bg-white/5 rounded-lg text-white/60 peer-checked:bg-dr-gold peer-checked:text-dr-navy peer-checked:border-dr-gold hover:border-dr-gold/50 transition-all">
                                                        {time}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <button disabled={status === "loading"} className="w-full bg-dr-gold text-dr-navy font-black py-4 rounded-lg uppercase tracking-widest hover:bg-dr-gold-hover transition-all flex items-center justify-center gap-2 group mt-4 disabled:opacity-50">
                                        {status === "loading" ? "Submitting..." : "Confirm Booking"}
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                                    </button>

                                    {status === "error" && (
                                        <p className="text-xs text-center text-red-500 mt-4">Something went wrong. Please try again.</p>
                                    )}

                                    <p className="text-[10px] text-center text-white/30 mt-4">
                                        By booking, you agree to our Terms & Privacy Policy.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
