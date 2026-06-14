import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-dr-navy flex items-center justify-center">
      <div className="relative">
        {/* Animated logo/loader */}
        <div className="w-24 h-24 rounded-full border-2 border-dr-gold/20 border-t-dr-gold animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-dr-gold/10 rounded-full blur-xl animate-pulse" />
        </div>
      </div>
      
      {/* Subtle text */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] animate-pulse">
          DigitalRise <span className="text-dr-gold/40">Intelligence</span>
        </p>
      </div>
    </div>
  );
}
