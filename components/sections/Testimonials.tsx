"use client";

import { Star, Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "Sarah Jenkins",
        role: "CMO",
        company: "TechFlow Inc.",
        content: "DigitalRise completely transformed our lead generation pipeline. The AI automation they implemented saved us 20 hours a week while doubling our qualified leads. It's not just marketing; it's a complete growth system.",
        rating: 5,
    },
    {
        name: "Michael Chang",
        role: "Founder",
        company: "Ventura Capital",
        content: "The web architecture overhaul improved our site speed by 300%. Our conversion rates followed suit immediately. Their team understands the technical side of SEO better than anyone we've worked with.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Marketing",
        company: "Global Retail Solutions",
        content: "We were skeptical about the 'growth loop' concept, but the results speak for themselves. The synergy between our paid ads and organic content has lowered our CAC by 40% in just three months.",
        rating: 5,
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
        <section className="py-32 px-8 bg-dr-navy relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Background Accents (Optional, matching page style) */}
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-dr-gold/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-dr-orange/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <FadeIn direction="up">
                    <div className="text-center mb-20">
                        <h2 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                            Client Outcomes
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                            Don't just take our word for it.
                        </h3>
                        <p className="text-dr-text/60 text-lg max-w-2xl mx-auto">
                            See how high-growth brands are scaling faster with our integrated systems.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn useVariants key={index}>
                            <div
                                className="glass p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group hover:border-dr-gold/20 transition-all duration-300 h-full flex flex-col"
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
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dr-gold to-dr-orange flex items-center justify-center text-dr-navy font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-white/40 uppercase tracking-wider">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
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

export default Testimonials;
