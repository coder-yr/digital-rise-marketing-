"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How is DigitalRise different from a typical marketing agency?",
        answer: "We don't just run ads or build websites in isolation. We build a complete growth ecosystem. Every piece of your digital presence—from your site's architecture to your ad creative and backend automations—is connected to feed data into a central system that compounds results over time.",
    },
    {
        question: "Do you work with startups or established enterprises?",
        answer: "We specialize in working with high-growth brands that are ready to scale. Whether you're a funded startup needing to prove traction or an established enterprise looking to modernize your acquisition channels, our systems are built for velocity and data-driven decision making.",
    },
    {
        question: "What is the typical timeline for seeing results?",
        answer: "Our 'Build + Launch' sprint typically takes 2-4 weeks to get your core infrastructure and campaigns live. You'll start seeing data immediately, with optimization cycles beginning in week 4. Most clients see significant ROI improvements within the first 60-90 days as the system learns.",
    },
    {
        question: "Can I hire you for just one service (e.g., only SEO)?",
        answer: "While we can execute specific services, our methodology works best when we control the full loop. However, we often start with a single high-leverage area (like a site rebuild or ad account audit) and expand from there once trust and results are established.",
    },
    {
        question: "Do you offer white-label services for other agencies?",
        answer: "We occasionally partner with select agencies for specialized technical implementations or AI automation builds. Contact us directly to discuss partnership opportunities.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <section className="py-32 px-8 bg-dr-navy relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto">
                <FadeIn direction="up">
                    <div className="text-center mb-20">
                        <h2 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                            Common Questions
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                            Everything you need to know.
                        </h3>
                    </div>
                </FadeIn>

                <StaggerContainer className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FadeIn useVariants key={index}>
                            <div
                                className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? "border-dr-gold/30 bg-white/[0.05]"
                                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={`font-bold text-lg ${openIndex === index ? 'text-dr-gold' : 'text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-dr-gold' : 'text-white/40'}`}>
                                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-dr-text/80 leading-relaxed border-t border-white/5">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default FAQ;
