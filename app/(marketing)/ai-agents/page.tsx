import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceFeaturesGrid from "@/components/sections/ServiceFeaturesGrid";
import { Cpu, Bot, Zap, MessageSquare, ShoppingCart, Mic, Settings, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AI Agents | DigitalRise Marketing",
    description: "Deployment of intelligent AI agents for Ecommerce, Voice, Lead Generation, and Custom Enterprise Automation.",
};

export default function AIAgentsPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="hidden md:block absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-dr-gold/5 rounded-full blur-[120px] opacity-40" />
                    <div className="hidden md:block absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-dr-orange/5 rounded-full blur-[120px] opacity-30" />
                </div>

                <ServiceHero
                    badge="Growth Architecture"
                    badgeColor="text-dr-gold"
                    title={<>Autonomous <span className="text-gradient-gold">AI Agents</span></>}
                    description="We don't just build chatbots. We build intelligent digital employees that handle sales, support, and complex operations 24/7."
                    buttonText="Get a Custom AI Audit"
                    blobColor="bg-dr-gold/5"
                    blobPosition="top-[10%] left-[10%]"
                />

                <section className="relative z-10 py-10 px-6">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-4">Core Capabilities</h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight">Systematized Intelligence.</h3>
                    </div>
                </section>

                <ServiceFeaturesGrid
                    borderColor="border-white/5"
                    hoverBorderColor="hover:border-dr-gold/20"
                    items={[
                        {
                            icon: Bot,
                            iconColor: "text-dr-gold",
                            title: "Customer Support Agents",
                            description: "Hallucination-free agents trained on your business data to resolve 80%+ of support tickets instantly."
                        },
                        {
                            icon: MessageSquare,
                            iconColor: "text-dr-orange",
                            title: "Lead Gen & Qualification",
                            description: "Agents that engage visitors, qualify leads based on your criteria, and book meetings into your CRM."
                        },
                        {
                            icon: ShoppingCart,
                            iconColor: "text-dr-green",
                            title: "Ecommerce Sales Agents",
                            description: "Personalized shopping assistants that help users find products, handle cart queries, and boost AOV."
                        },
                        {
                            icon: Mic,
                            iconColor: "text-dr-gold",
                            title: "Voice AI Agents",
                            description: "Ultra-low latency voice agents for outbound lead follow-ups and inbound reception management."
                        },
                        {
                            icon: Cpu,
                            iconColor: "text-white",
                            title: "Internal Workflow Ops",
                            description: "Connect your internal stack (Slack, Notion, CRM) to automate repetitive administrative heavy lifting."
                        },
                        {
                            icon: Settings,
                            iconColor: "text-dr-orange",
                            title: "Custom Enterprise Agents",
                            description: "Bespoke agents built for unique industry needs—from legal research to financial reporting."
                        }
                    ]}
                />

                {/* Detailed Sections */}
                <section className="py-32 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto space-y-32">

                        {/* Ecommerce Section */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dr-gold/20 bg-dr-gold/5 text-dr-gold text-xs font-bold tracking-widest uppercase">
                                    <ShoppingCart size={14} /> Ecommerce Intelligence
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
                                    Turn every visitor into a <span className="text-dr-text/40">buying customer.</span>
                                </h2>
                                <p className="text-lg text-white/50 leading-relaxed font-light">
                                    Our Ecommerce agents don&apos;t just answer FAQs. They are trained as elite sales associates who understand intent, suggest cross-sells, handle objections, and provide a seamless path to checkout—in any business niche.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Product recommendations based on user intent",
                                        "Abandoned cart recovery & discount management",
                                        "Order tracking and shipping status automation",
                                        "Available for Shopify, WooCommerce, and Custom Stores"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-dr-gold" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative aspect-square glass rounded-[2.5rem] border border-white/5 p-12 flex flex-col justify-center">
                                <div className="absolute top-0 right-0 p-8">
                                    <Zap className="text-dr-gold w-12 h-12 opacity-20" />
                                </div>
                                <div className="space-y-6">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 max-w-[80%] self-start">
                                        <p className="text-xs font-medium text-white/60">Customer</p>
                                        <p className="text-sm">I&apos;m looking for a premium marketing solution for a new brand.</p>
                                    </div>
                                    <div className="p-4 bg-dr-gold text-dr-navy rounded-2xl max-w-[80%] self-end">
                                        <p className="text-xs font-black uppercase tracking-widest opacity-60">AI Agent</p>
                                        <p className="text-sm font-bold">Of course. Based on your scale, our Premium Growth Architecture is the best fit. Shall I show you the pricing tiers?</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Voice AI Section */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1 relative aspect-square glass rounded-[2.5rem] border border-white/5 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-dr-gold/10 to-transparent" />
                                <div className="relative text-center space-y-6">
                                    <Mic size={64} className="text-dr-gold mx-auto animate-pulse" />
                                    <div className="flex gap-2 justify-center">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className={`w-1 bg-dr-gold/40 rounded-full h-${i * 4}`} />
                                        ))}
                                    </div>
                                    <p className="text-xs font-black tracking-widest text-white/40 uppercase">Natural Human Speech</p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 space-y-8 text-right lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dr-orange/20 bg-dr-orange/5 text-dr-orange text-xs font-bold tracking-widest uppercase">
                                    <Mic size={14} /> Voice AI Infrastructure
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
                                    Scale your voice presence <span className="text-dr-text/40">with human clarity.</span>
                                </h2>
                                <p className="text-lg text-white/50 leading-relaxed font-light">
                                    Eliminate the wait. Our Voice AI agents handle inbound support calls and outbound lead follow-ups with less than 500ms latency, sounding indistinguishable from a human professional.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 glass border border-white/5 rounded-2xl">
                                        <h4 className="text-dr-gold font-bold mb-2">Inbound</h4>
                                        <p className="text-xs text-white/40">Receptionist, booking, & qualification.</p>
                                    </div>
                                    <div className="p-6 glass border border-white/5 rounded-2xl">
                                        <h4 className="text-dr-orange font-bold mb-2">Outbound</h4>
                                        <p className="text-xs text-white/40">Lead follow-up & cold outreach.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lead Generation & Custom Agents Section */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dr-green/20 bg-dr-green/5 text-dr-green text-xs font-bold tracking-widest uppercase">
                                    <Target size={14} /> Revenue Capture
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
                                    Capture leads while <span className="text-dr-text/40">you sleep.</span>
                                </h2>
                                <p className="text-lg text-white/50 leading-relaxed font-light">
                                    Our Lead Generation agents act as your 24/7 sales development representatives. They qualify every visitor, extract key data points, and only push high-intent prospects to your calendar or CRM.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-white text-sm">Lead Qualification</h4>
                                        <p className="text-xs text-white/40 font-medium">Auto-filter prospects based on budget, timeline, and needs.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-white text-sm">Instant Booking</h4>
                                        <p className="text-xs text-white/40 font-medium">Integrated with Calendly, HubSpot, and Google Calendar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-dr-gold to-dr-orange rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative aspect-video glass rounded-[2.5rem] border border-white/5 p-8 overflow-hidden">
                                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                        <p className="text-[10px] font-black tracking-widest text-white/20 uppercase">Lead Pipeline Analysis</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { name: "John Doe", type: "Enterprise", status: "Qualified", score: 98 },
                                            { name: "Jane Smith", type: "SMB", status: "Nurturing", score: 45 },
                                            { name: "Steve Ross", type: "Ecommerce", status: "Qualified", score: 92 },
                                        ].map((lead, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-dr-gold/10 flex items-center justify-center text-dr-gold text-xs font-bold">
                                                        {lead.name[0]}
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold">{lead.name}</p>
                                                        <p className="text-[10px] text-white/40">{lead.type}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className={`text-[10px] font-bold ${lead.status === 'Qualified' ? 'text-dr-green' : 'text-dr-gold'}`}>{lead.status}</p>
                                                    <p className="text-[10px] text-white/20">Lead Score: {lead.score}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Ready to deploy your digital employee?</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/booking" className="px-10 py-5 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all">
                                BOOK A STRATEGY CALL
                            </Link>
                            <Link href="/proposal" className="px-10 py-5 glass border border-white/10 font-black text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all">
                                REQUEST A PROPOSAL
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
