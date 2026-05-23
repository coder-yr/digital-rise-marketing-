"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        goal: "",
        name: "",
        email: "",
        phone: "",
        website: "",
        brief: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://captivating-purpose-production-88fb.up.railway.app/';
            const cleanUrl = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;
            const res = await fetch(`${cleanUrl}/api/submissions/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error("Submission failed");
            setStatus("success");
            setFormData({ goal: "", name: "", email: "", phone: "", website: "", brief: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="text-center py-10">
                <CheckCircle2 size={48} className="text-dr-gold mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-4">Message Sent!</h4>
                <p className="text-white/40 text-sm mb-8">We've received your inquiry and will get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="text-xs text-dr-gold font-bold tracking-widest uppercase hover:underline">
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="goal" className="block text-xs font-bold mb-3 text-white/60">
                    What do you want to improve?
                </label>
                <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors"
                    required
                >
                    <option value="">Select an option</option>
                    <option value="website">Website Performance</option>
                    <option value="ads">Paid Advertising</option>
                    <option value="organic">Organic Growth</option>
                    <option value="automation">AI Automation</option>
                    <option value="content">Content Creation</option>
                    <option value="all">Complete System</option>
                </select>
            </div>

            <div>
                <label htmlFor="name" className="block text-xs font-bold mb-3 text-white/60">
                    Your name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20"
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-xs font-bold mb-3 text-white/60">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20"
                    required
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-xs font-bold mb-3 text-white/60">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+91 70216 02399"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20"
                    required
                />
            </div>

            <div>
                <label htmlFor="website" className="block text-xs font-bold mb-3 text-white/60">
                    Company website
                </label>
                <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    autoComplete="url"
                    placeholder="https://yourcompany.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20"
                />
            </div>

            <div>
                <label htmlFor="brief" className="block text-xs font-bold mb-3 text-white/60">
                    Project brief
                </label>
                <textarea
                    id="brief"
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and challenges..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20 resize-none"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-5 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all shadow-lg shadow-dr-gold/10 hover:shadow-dr-gold/20 disabled:opacity-50"
            >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status === "error" && (
                <p className="text-xs text-center text-red-500 mt-2">Something went wrong. Please try again.</p>
            )}

            <div className="text-center">
                <a
                    href="/booking"
                    className="text-xs text-white/40 hover:text-dr-gold transition-colors inline-flex items-center gap-2"
                >
                    Or book a call
                    <ArrowRight className="w-3 h-3 text-xs" />
                </a>
            </div>
        </form>
    );
}
