import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-bg-primary)] overflow-hidden select-none">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4">
        {/* Animated Double Ring & Glowing Logo Container */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer Ripple Wave */}
          <div className="absolute inset-0 rounded-full border border-[var(--color-accent)]/30 animate-ping opacity-75"></div>
          
          {/* Inner Glowing Spinner Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)] border-r-[var(--color-accent)] animate-spin"></div>
          
          {/* Central Logo Container */}
          <div className="relative w-12 h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shadow-xl shadow-[var(--color-accent)]/10">
            <Image
              src="/fav.png"
              alt="GYMatch Loading"
              width={32}
              height={32}
              className="w-7 h-7 object-contain animate-pulse"
              priority
            />
          </div>
        </div>

        {/* High-Impact Typography & Animated Status */}
        <div className="space-y-2">
          <h2 className="font-bebas text-3xl sm:text-4xl tracking-widest text-[var(--color-foreground)] leading-none">
            GYMATCH <span className="text-[var(--color-accent)]">LOADING</span>
          </h2>
          
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
            <span>Connecting Fitness Hubs</span>
            <span className="inline-flex gap-1 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
