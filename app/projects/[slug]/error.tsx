'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-dr-navy flex flex-col items-center justify-center px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Something went wrong!</h2>
            <p className="text-dr-text/60 text-lg mb-10 max-w-md mx-auto">
                We encountered an error while loading this project. It might be a temporary issue with our data server.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => reset()}
                    className="px-8 py-4 bg-dr-gold text-dr-navy font-bold text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all"
                >
                    TRY AGAIN
                </button>
                <Link
                    href="/portfolio"
                    className="px-8 py-4 border border-white/20 font-bold text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all text-white"
                >
                    BACK TO PORTFOLIO
                </Link>
            </div>
        </div>
    );
}
