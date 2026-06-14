import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-dr-navy flex flex-col items-center justify-center px-8 text-center pt-32 pb-20">
                <h1 className="text-6xl md:text-9xl font-black text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                    404
                </h1>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Project Not Found</h2>
                    <p className="text-dr-text/60 text-lg mb-10 max-w-md mx-auto">
                        The project you are looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        href="/portfolio"
                        className="px-8 py-4 bg-dr-gold text-dr-navy font-bold text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all inline-block"
                    >
                        BACK TO PORTFOLIO
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
