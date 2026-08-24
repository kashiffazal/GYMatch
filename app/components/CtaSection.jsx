"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Star, Apple, Smartphone } from "lucide-react";
import styles from "./CtaSection.module.css";

/* ── Inline CTA Phone Frame (aspect-ratio based, never clips) ── */
function CtaPhone({ src, alt, priority = false }) {
  return (
    <div className="relative w-full aspect-[9/19.5] rounded-[28px] sm:rounded-[34px] border-[5px] sm:border-[7px] border-[#1a1a1e] bg-black shadow-2xl shadow-black/70 ring-1 ring-white/10 overflow-hidden">
      {/* Dynamic Island Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[16px] w-[80px] bg-black rounded-b-[12px] z-30 flex items-center justify-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#111] ring-1 ring-white/10"></div>
        <div className="w-2 h-2 rounded-full bg-[#0a192f]/50 ring-1 ring-blue-500/20"></div>
      </div>
      {/* Screen Image */}
      <div className="relative w-full h-full overflow-hidden rounded-[23px] sm:rounded-[27px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
          className="object-cover object-top"
        />
        {/* Glass Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      {/* Subtle Ambient Radial Glow behind phones */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-12 items-center">
          {/* Left Column Content – Condensed */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left py-10 lg:py-16">
            <div className={styles.pillTag}>
              <ArrowRight className="w-4 h-4" />
              <span>Get Started Today!</span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.92] text-[var(--color-foreground)]">
              DISCOVER YOUR FITNESS MATCH{" "}
              <span className="text-[var(--color-accent)]">
                ANYWHERE, ANYTIME!
              </span>
            </h2>

            <p className="text-sm text-[var(--color-text-muted)] font-medium leading-relaxed w-[600px] mx-auto lg:mx-0">
              Download GYMatch now to explore nearby gym hubs, connect with
              active workout partners, and train with dedicated spotters 24/7.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="https://apps.apple.com/pk/app/gymatch/id6780825578"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)] transition-all flex items-center gap-2 shadow-lg cursor-pointer hover:scale-105"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.09-3.41-2.73-7.3-7.44-11.66-14.13-6.52-10.02-11.66-20.9-15.42-32.63-3.76-11.73-5.64-22.9-5.64-33.51 0-14.4 3.66-26.17 10.98-35.3 7.32-9.13 16.48-13.78 27.48-13.95 4.96 0 10.15 1.21 15.58 3.63 5.43 2.42 9.4 3.63 11.9 3.63 2.15 0 6.1-1.26 11.87-3.78 5.76-2.52 10.83-3.71 15.22-3.57 11.75.63 21.05 4.97 27.91 13.02-10.42 6.32-15.5 15.02-15.25 26.11.26 8.5 3.51 15.8 9.77 21.9 6.26 6.1 13.73 9.43 22.4 9.99-2.22 6.64-4.88 12.87-7.98 18.7zM119.22 31.85c0-6.72 2.4-13.06 7.19-19.03 4.79-5.97 10.74-9.59 17.85-10.86.36 1.48.54 2.87.54 4.18 0 6.62-2.48 13.02-7.44 19.2-4.96 6.18-10.97 9.87-18.04 11.08-.12-.99-.18-4.57-.18-4.57z" />
                </svg>
                <span>Download App</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.app.gymatch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all flex items-center gap-2 shadow-lg cursor-pointer hover:scale-105"
              >
                <Smartphone className="w-5 h-5 text-[var(--color-accent)]" />
                <span>Google Play</span>
              </a>
            </div>

            {/* Trust Features */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-[var(--color-text-muted)] font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />{" "}
                100% Free
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[var(--color-accent)] fill-current" />{" "}
                4.9 Rating
              </span>
            </div>
          </div>

          {/* Right Column: 2 Phones Only (Compact, Zero Crop) */}
          <div className="lg:col-span-5 relative flex justify-center items-end pb-0 pt-4">
            <div className="flex items-end justify-center w-full max-w-[380px] lg:max-w-[420px]">
              {/* Back Phone (slightly offset) */}
              <div className="w-[45%] opacity-85 z-10 transform translate-y-6 -mr-8 hover:translate-y-2 transition-transform duration-500">
                <CtaPhone
                  src="/assets/app/others/Explore.webp"
                  alt="Explore Map App Screen"
                />
              </div>

              {/* Front Hero Phone */}
              <div className="w-[52%] z-30 transform -translate-y-1 hover:-translate-y-4 transition-transform duration-500">
                <CtaPhone
                  src="/assets/app/others/HOME.webp"
                  alt="GYMatch Home App Screen"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
