import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceFeaturesGrid from "@/components/sections/ServiceFeaturesGrid";
import { Clapperboard, PenTool, Image as ImageIcon, Video, Sparkles, Megaphone, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Content Creation | DigitalRise Marketing",
    description: "The ultimate storytelling engine for your business. We produce high-fidelity video, copywriting, and design that drives results.",
};

export default function ContentCreationPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="hidden md:block absolute top-[10%] right-[20%] w-[600px] h-[600px] bg-dr-orange/5 rounded-full blur-[120px] opacity-40" />
                    <div className="hidden md:block absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-dr-gold/5 rounded-full blur-[120px] opacity-30" />
                </div>

                <ServiceHero
                    badge="Media House"
                    badgeColor="text-dr-orange"
                    title={<>Elite <span className="text-gradient-gold">Storytelling</span> Engine</>}
                    description="Capturing attention is easy. Holding it requires a story. We produce high-fidelity content that turns strangers into loyal brand advocates."
                    buttonText="Tell Your Story"
                    blobColor="bg-dr-orange/5"
                    blobPosition="top-[10%] right-[10%]"
                />

                <section className="relative z-10 py-10 px-6">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-4">Content Ecosystem</h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight">Magnetic Communication.</h3>
                    </div>
                </section>

                <ServiceFeaturesGrid
                    borderColor="border-white/5"
                    hoverBorderColor="hover:border-dr-orange/20"
                    items={[
                        {
                            icon: Video,
                            iconColor: "text-dr-orange",
                            title: "Cinematic Production",
                            description: "High-end commercials, brand films, and social reels that look and feel like premium cinema."
                        },
                        {
                            icon: PenTool,
                            iconColor: "text-dr-gold",
                            title: "Psychological Copy",
                            description: "Direct-response copy and brand narratives that leverage human psychology to trigger action."
                        },
                        {
                            icon: ImageIcon,
                            iconColor: "text-white",
                            title: "Visual Identity",
                            description: "Disruptive graphic design and art direction that makes your brand stand out in a saturated feed."
                        },
                        {
                            icon: Megaphone,
                            iconColor: "text-dr-green",
                            title: "Omnichannel Strategy",
                            description: "Distribution systems that ensure your content reaches the right eyes on TikTok, Meta, and YouTube."
                        },
                        {
                            icon: Sparkles,
                            iconColor: "text-dr-gold",
                            title: "Brand Storytelling",
                            description: "Developing a unique brand voice and narrative that creates deep emotional resonance with your audience."
                        },
                        {
                            icon: Target,
                            iconColor: "text-dr-orange",
                            title: "Conversion Content",
                            description: "Specific content designed for the bottom of the funnel—case studies, reviews, and product demos."
                        }
                    ]}
                />

                {/* Detailed Sections */}
                <section className="py-32 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto space-y-32">

                        {/* Storytelling Section */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dr-gold/20 bg-dr-gold/5 text-dr-gold text-xs font-bold tracking-widest uppercase">
                                    <Sparkles size={14} /> The Storyteller
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
                                    Your business deserves a <span className="text-dr-text/40">legendary narrative.</span>
                                </h2>
                                <p className="text-lg text-white/50 leading-relaxed font-light">
                                    We don&apos;t just &quot;make posts.&quot; We architect stories. Our team of writers and strategists dive deep into your brand&apos;s DNA to find the &quot;Why&quot; that makes people care. We turn features into benefits and benefits into emotions.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Narrative-driven brand positioning",
                                        "Viral hook development for short-form video",
                                        "Long-form thought leadership and scriptwriting",
                                        "Cohesive brand voice across all touchpoints"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-dr-gold" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative aspect-video glass rounded-[2.5rem] border border-white/5 p-1 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-dr-gold/10 to-transparent opacity-50" />
                                <div className="z-10 text-center space-y-4 p-8">
                                    <div className="flex justify-center gap-1 mb-4">
                                        {[1, 2, 3, 4, 1, 2, 3].map((h, i) => (
                                            <div key={i} className={`w-1 bg-white/40 h-${h * 2 + 2} rounded-full`} />
                                        ))}
                                    </div>
                                    <p className="text-xl font-bold italic">&quot;Storytelling is the only way to bypass the logic brain and hit the wallet.&quot;</p>
                                </div>
                            </div>
                        </div>

                        {/* Production Section */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1 relative aspect-[9/16] max-w-[300px] mx-auto glass rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl shadow-dr-orange/10">
                                <div className="absolute inset-0 bg-dr-orange/5" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-xs font-bold text-dr-orange">LATEST REEL</p>
                                    <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                                        <div className="w-[60%] h-full bg-dr-orange rounded-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dr-orange/20 bg-dr-orange/5 text-dr-orange text-xs font-bold tracking-widest uppercase">
                                    <Clapperboard size={14} /> Production House
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
                                    High-voltage video <span className="text-dr-text/40">production.</span>
                                </h2>
                                <p className="text-lg text-white/50 leading-relaxed font-light">
                                    From 15-second TikTok hooks to 15-minute documentary-style brand stories. We handle the entire pipeline: Creative Direction, Filming, Sound Engineering, and Color Grading.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 glass border border-white/5 rounded-2xl">
                                        <h4 className="text-dr-gold font-bold mb-2">60+ Million</h4>
                                        <p className="text-xs text-white/40 font-medium">Combined organic views for our clients.</p>
                                    </div>
                                    <div className="p-6 glass border border-white/5 rounded-2xl">
                                        <h4 className="text-dr-orange font-bold mb-2">High-Fi</h4>
                                        <p className="text-xs text-white/40 font-medium">4K production for every platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Stop being a company. Start being a character.</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/booking" className="px-10 py-5 bg-dr-orange text-white font-black text-xs tracking-widest rounded-xl hover:bg-dr-orange-hover transition-all">
                                PARTNER WITH US
                            </Link>
                            <Link href="/proposal" className="px-10 py-5 glass border border-white/10 font-black text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all">
                                VIEW CASE STUDIES
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
