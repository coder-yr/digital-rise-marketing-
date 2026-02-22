"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const initialState = {
    success: false,
    message: "",
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    // If successful, show a clean success state
    if (state?.success) {
        return (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
                <div className="w-16 h-16 bg-dr-green/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-dr-green" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent</h3>
                <p className="text-white/60 text-sm max-w-sm">
                    {state.message}
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-8 text-xs text-dr-gold hover:text-white transition-colors underline underline-offset-4"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form action={formAction} className="space-y-6">
            {state?.message && !state.success && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-200">{state.message}</p>
                </div>
            )}

            <div>
                <label htmlFor="goal" className="block text-xs font-bold mb-3 text-white/60">
                    What do you want to improve?
                </label>
                <select
                    id="goal"
                    name="goal"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold focus:ring-1 focus:ring-dr-gold transition-all text-white disabled:opacity-50"
                    required
                    disabled={isPending}
                >
                    <option value="" className="bg-dr-navy-light text-white">Select an option</option>
                    <option value="website" className="bg-dr-navy-light text-white">Website Performance</option>
                    <option value="ads" className="bg-dr-navy-light text-white">Paid Advertising</option>
                    <option value="organic" className="bg-dr-navy-light text-white">Organic Growth</option>
                    <option value="automation" className="bg-dr-navy-light text-white">AI Automation</option>
                    <option value="content" className="bg-dr-navy-light text-white">Content Creation</option>
                    <option value="all" className="bg-dr-navy-light text-white">Complete System</option>
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
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold focus:ring-1 focus:ring-dr-gold transition-all placeholder:text-white/20 disabled:opacity-50"
                    required
                    disabled={isPending}
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
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold focus:ring-1 focus:ring-dr-gold transition-all placeholder:text-white/20 disabled:opacity-50"
                    required
                    disabled={isPending}
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
                    placeholder="https://yourcompany.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold focus:ring-1 focus:ring-dr-gold transition-all placeholder:text-white/20 disabled:opacity-50"
                    disabled={isPending}
                />
            </div>

            <div>
                <label htmlFor="brief" className="block text-xs font-bold mb-3 text-white/60">
                    Project brief
                </label>
                <textarea
                    id="brief"
                    name="brief"
                    placeholder="Tell us about your goals and challenges..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold focus:ring-1 focus:ring-dr-gold transition-all placeholder:text-white/20 resize-none disabled:opacity-50"
                    required
                    disabled={isPending}
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="group relative w-full px-8 py-5 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all shadow-lg shadow-dr-gold/10 hover:shadow-dr-gold/20 disabled:opacity-70 flex items-center justify-center overflow-hidden"
            >
                <span className={`relative z-10 flex items-center gap-2 transition-opacity duration-300 ${isPending ? 'opacity-0' : 'opacity-100'}`}>
                    SEND MESSAGE
                </span>

                {isPending && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <Loader2 className="w-5 h-5 animate-spin text-dr-navy" />
                    </div>
                )}
            </button>

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
