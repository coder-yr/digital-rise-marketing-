import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Target, Rocket, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | DigitalRise",
    description: "We build the systems that power the next generation of industry leaders. Architecture, not just advertising.",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden">
                {/* Background Elements */}

                {/* Hero Section */}
                <section className="relative pt-40 pb-20 px-6">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        <div className="hidden md:block absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-dr-gold/5 rounded-full blur-[120px] opacity-40" />
                    </div>

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none text-white">
                            For the Ambitions <br />
                            <span className="text-gradient-gold">That Can&apos;t Wait.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-dr-text/60 font-light leading-relaxed">
                            We&rsquo;re not just an agency. We&rsquo;re a growth architecture firm. We build the systems that power the next generation of industry leaders.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 px-6 bg-dr-navy-light/30 relative">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-dr-gold/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
                                <div className="glass rounded-[2rem] p-10 border border-white/5 relative z-10 aspect-square flex flex-col justify-center items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-dr-gold to-dr-orange mb-6 flex items-center justify-center">
                                        <Users className="text-dr-navy w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-2">Built for Scale</h3>
                                    <p className="text-sm text-white/50">Founded by engineers and marketers who tired of the &quot;black box&quot; agency model.</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">Our Origin</h4>
                                <h2 className="text-4xl font-black mb-6 leading-tight">Architecture, Not Just Advertising.</h2>
                                <p className="text-lg text-white/60 mb-6 leading-relaxed">
                                    DigitalRise began with a simple observation: most businesses treat growth as a series of disconnected experiments. Ads here, SEO there, a website redesign every three years.
                                </p>
                                <p className="text-lg text-white/60 leading-relaxed">
                                    We realized that sustainable, exponential growth requires a <strong>system</strong>. One where your acquisition channels, your conversion engine, and your retention loops are all engineered to work together.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 px-6 relative">
                    <div className="max-w-7xl mx-auto">
                        <h4 className="text-center text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-12">Our Core Values</h4>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Value 1 */}
                            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-dr-gold/20 transition-all group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-dr-gold mb-6 group-hover:scale-110 transition-transform">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Precision Over Volume</h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    We don&apos;t believe in &quot;spray and pray&quot;. Every campaign, every line of code, and every piece of content is deployed with a specific, measurable intent.
                                </p>
                            </div>

                            {/* Value 2 */}
                            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-dr-orange/20 transition-all group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-dr-orange mb-6 group-hover:scale-110 transition-transform">
                                    <Rocket size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Velocity Matters</h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    Speed is a competitive advantage. We build systems that allow for rapid testing, fast iteration, and quick deployment of winning strategies.
                                </p>
                            </div>

                            {/* Value 3 */}
                            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-dr-green/20 transition-all group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-dr-green mb-6 group-hover:scale-110 transition-transform">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Radical Transparency</h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    No hidden fees, no owned data. We build *your* infrastructure. You own the data, the accounts, and the assets. Always.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
