"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatarUrl?: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Prashant Patil",
        role: "Managing Director",
        company: "Yasharshree Real Estate",
        content: "DigitalRise completely transformed our sales pipeline for the Yasharshree project. We were getting 60+ high-quality leads daily through paid ads with a CPL of just ₹25-30. Their strategy helped us sell out 35-65 lac units in record time.",
        rating: 5,
        avatarUrl: "/images/testimonials/prashant_patil.png"
    },
    {
        name: "Ishika Sharma",
        role: "Project Lead",
        company: "Smart India Hackathon (SIH)",
        content: "Working on our Health AI Chatbot for SIH was a challenge until DigitalRise stepped in. The UI/UX and the AI integration they suggested made our project stand out. Highly recommended! View: https://health-ai-chatbot-amber.vercel.app/",
        rating: 5,
        avatarUrl: "/images/testimonials/ishika_sharma.png"
    },
    {
        name: "Sanjay Gupta",
        role: "CEO",
        company: "Gupta Textiles",
        content: "DigitalRise transformed our lead generation in the textile sector. The AI automation they implemented saved us 20 hours a week and scaled our reach across North India. Best marketing system we've used to date.",
        rating: 5,
        avatarUrl: "/images/testimonials/sanjay_gupta.png"
    },
    {
        name: "Arjun Reddy",
        role: "Founder",
        company: "Reddy Logistics",
        content: "The web architecture overhaul improved our site speed by 300%. Our conversion rates for interstate transport queries followed suit immediately. They truly understand the Indian B2B landscape.",
        rating: 5,
        avatarUrl: "/images/testimonials/arjun_reddy.png"
    },
    {
        name: "Deepa Lakshmi",
        role: "Marketing Director",
        company: "Lakshmi Jewels",
        content: "We were skeptical about the 'growth loop' concept, but the results speak for themselves. The synergy between our paid ads and organic content has lowered our CAC by 40% in just three months for our ethnic collections.",
        rating: 5,
        avatarUrl: "/images/testimonials/deepa_lakshmi.png"
    },
    {
        name: "Rohan Mehta",
        role: "CTO",
        company: "Venture Capital India",
        content: "Scaling our portfolio companies' digital presence has never been easier. DigitalRise provides a level of technical depth and market local insight that is rare in the Indian agency space.",
        rating: 5,
        avatarUrl: "/images/testimonials/rohan_mehta.png"
    },
    {
        name: "Rahul Khanna",
        role: "CEO",
        company: "Khanna EduTech",
        content: "Scaling an ed-tech startup in India is tough, but DigitalRise made it look easy. Their automated funnel approach helped us enroll 500+ students in just the first two months of our campaign.",
        rating: 5
    },
];

const Testimonials = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DigitalRise Marketing",
        "review": testimonials.map((t) => ({
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "reviewBody": t.content
        }))
    };

    return (
        <section className="py-32 px-8 bg-dr-navy relative overflow-hidden" id="testimonials">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Background Accents - Optimized with radial gradients instead of heavy DOM filters */}
            <div className="hidden lg:block absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />
            <div className="hidden lg:block absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,107,0,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                        Client Outcomes
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                        Real Results, Real Growth.
                    </h3>
                    <p className="text-dr-text/60 text-lg max-w-2xl mx-auto">
                        See how Indian brands are scaling faster with our high-performance marketing systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group hover:border-dr-gold/20 transition-all duration-300 flex flex-col"
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-dr-navy border border-white/10 rounded-full flex items-center justify-center text-dr-gold shadow-xl">
                                <Quote size={20} fill="currentColor" />
                            </div>

                            <div className="flex gap-1 mb-6 mt-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-dr-gold fill-dr-gold" />
                                ))}
                            </div>

                            <p className="text-white/80 leading-relaxed mb-8 italic">
                                &quot;{testimonial.content.includes('https') ? (
                                    <>
                                        {testimonial.content.split('View:')[0]}
                                        <a href="https://health-ai-chatbot-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-dr-gold hover:underline">
                                            View Project
                                        </a>
                                    </>
                                ) : testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-dr-gold to-dr-orange flex items-center justify-center text-dr-navy font-bold text-lg flex-shrink-0">
                                    {testimonial.avatarUrl ? (
                                        <Image 
                                            src={testimonial.avatarUrl} 
                                            alt={testimonial.name} 
                                            width={48} 
                                            height={48} 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        testimonial.name.charAt(0)
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-black">
                                        {testimonial.role} <span className="text-dr-gold/40 mx-1">|</span> {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
