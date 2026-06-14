import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import ProjectsClient from './ProjectsClient';
import { constructMetadata } from '@/lib/seo';

// ✅ SEO FIX: Use constructMetadata for canonical, OG, Twitter, robots
export const metadata = constructMetadata({
    title: 'Our Projects | DigitalRise Marketing – Badlapur',
    description: 'Explore our latest digital marketing and web projects — e-commerce stores, landing pages, and corporate websites built for performance and high conversions.',
    canonical: '/projects',
    keywords: ['web design projects', 'digital marketing projects', 'Badlapur', 'portfolio', 'DigitalRise Marketing'],
});

export default function ProjectsPage() {
    return (
        <>
            <Header />

            <main id="main-content" className="relative z-10 pt-32 pb-20 bg-dr-navy min-h-screen">
                {/* Ambient Background */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-dr-gold/5 rounded-full blur-[150px]" />
                    <div className="hidden md:block absolute bottom-[20%] -right-[5%] w-[500px] h-[500px] bg-dr-orange/5 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="max-w-3xl mb-20 text-center mx-auto">
                        <h1 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                            Our Work
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white mb-8">
                            Digital experiences that <span className="text-dr-text/40">convert.</span>
                        </h2>
                        <p className="text-dr-text/60 text-lg">
                            Explore our recent projects spanning across performance e-commerce, automated landing pages, and immersive animated web experiences.
                        </p>
                    </div>

                    <ProjectsClient />

                    <div className="mt-24 text-center">
                        <h3 className="text-3xl font-black mb-8 text-white">Ready for your digital transformation?</h3>
                        <Link
                            href="/booking"
                            className="inline-flex px-8 py-4 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all shadow-lg shadow-dr-gold/20"
                        >
                            START A PROJECT
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
