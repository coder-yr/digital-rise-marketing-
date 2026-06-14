"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How is DigitalRise different from other marketing agencies in Badlapur City?",
        answer: "We don't just run ads. We build a complete growth ecosystem. We connect your website, ads, and AI automation into one system that delivers consistent results.",
    },
    {
        question: "Why are you the best digital marketing agency in Badlapur City?",
        answer: "DigitalRise offers premium, data-driven solutions right here in Badlapur City. We specialize in AI agents and performance marketing that help local and global brands scale fast.",
    },
    {
        question: "Do you work with startups or established companies?",
        answer: "We help high-growth brands scale. Whether you are a new startup or a large enterprise, our systems are built for speed and better decision-making.",
    },
    {
        question: "When will I see results for my business in Badlapur City?",
        answer: "Our 'Build + Launch' sprint takes 2-4 weeks. You will see data immediately. Most clients see significant ROI growth within 60-90 days as the system optimizes.",
    },
    {
        question: "Can I hire you for a single service like SEO?",
        answer: "Yes, we handle specific services like SEO or ad audits. However, our methods work best when we control the full growth loop to maximize your profit.",
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
                <div className="text-center mb-20">
                    <h2 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                        Common Questions
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                        Everything you need to know.
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            id={`faq-panel-${index}`}
                            className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? "border-dr-gold/30 bg-white/[0.05]"
                                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                                }`}
                        >
                            <button
                                type="button"
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-dr-gold' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-dr-gold' : 'text-white/40'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-label={faq.question}
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-dr-text/80 leading-relaxed border-t border-white/5">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
