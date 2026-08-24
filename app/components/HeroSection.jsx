"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import {
  MapPin,
  Users,
  Zap,
  Apple,
  Smartphone,
  ShieldCheck,
  Target,
  Lock,
} from "lucide-react";

// Animated counter component counting up from 0
function AnimatedCounter({ end, suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2200;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * end;
      setCount(
        decimals > 0
          ? parseFloat(current.toFixed(decimals))
          : Math.floor(current),
      );
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [end, decimals]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Protocol features array with icons and exact client approved copy
const PROTOCOL_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Discovery:",
    description:
      "Find facilities near you with our real-time mapping interface and full amenity breakdowns.",
  },
  {
    icon: Users,
    title: "Live Training Presence:",
    description:
      "See who’s training in your gym in real-time, right now with live updates.",
  },
  {
    icon: Target,
    title: "Precision Matching:",
    description:
      "Filter partners by discipline, weight class, fitness level, and training goals.",
  },
  {
    icon: Lock,
    title: "Secure Connection:",
    description:
      "Coordinate sessions via temporary, encrypted chat-no contact info required.",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden"
    >
      {/* Background High-Res Athletic Photo with Mask Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-20 pointer-events-none">
        <Image
          src="/assets/img/taking-his-training-to-the-next-level.jpg"
          alt="Fitness Training Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)]"></div>
      </div>

      {/* Animated Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-[var(--color-accent)]/15 to-emerald-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column: Headline, 2x2 Glass Feature Cards & Call To Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 text-center lg:text-left"
          >
            {/* Pill Tag with Live Pulse Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              <Zap className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-foreground)]">
                The Performance Protocol
              </span>
            </div>

            {/* H1 Main Headline */}
            <h1 className="font-bebas text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-[var(--color-foreground)]">
              THE GYMATCH{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-lime-400 to-emerald-400">
                ECOSYSTEM
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] mx-auto lg:mx-0 leading-relaxed ">
              Stop searching. Start training. Gymatch is the privacy-first
              infrastructure connecting dedicated fitness enthusiasts and
              martial arts practitioners globally.
            </p>

            {/* 2x2 Frosted Glass Feature Cards with Left Icon Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left mx-auto lg:mx-0">
              {PROTOCOL_FEATURES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[var(--color-surface)]/60 backdrop-blur-md border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]/90 transition-all duration-300 group shadow-sm flex items-start gap-3.5"
                  >
                    {/* Left Icon Box */}
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all duration-300 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Right Content: Title & Description Stacked */}
                    <div className="space-y-1 flex-1">
                      <strong className="text-[var(--color-foreground)] font-bold text-xs sm:text-sm tracking-wide block">
                        {item.title}
                      </strong>
                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Action Area */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                <span>Your training, digitized. Download Gymatch.</span>
              </div>

              {/* Dual CTA Buttons with Official Store Logos */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="https://apps.apple.com/pk/app/gymatch/id6780825578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 shadow-xl shadow-[var(--color-accent)]/25 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.09-3.41-2.73-7.3-7.44-11.66-14.13-6.52-10.02-11.66-20.9-15.42-32.63-3.76-11.73-5.64-22.9-5.64-33.51 0-14.4 3.66-26.17 10.98-35.3 7.32-9.13 16.48-13.78 27.48-13.95 4.96 0 10.15 1.21 15.58 3.63 5.43 2.42 9.4 3.63 11.9 3.63 2.15 0 6.1-1.26 11.87-3.78 5.76-2.52 10.83-3.71 15.22-3.57 11.75.63 21.05 4.97 27.91 13.02-10.42 6.32-15.5 15.02-15.25 26.11.26 8.5 3.51 15.8 9.77 21.9 6.26 6.1 13.73 9.43 22.4 9.99-2.22 6.64-4.88 12.87-7.98 18.7zM119.22 31.85c0-6.72 2.4-13.06 7.19-19.03 4.79-5.97 10.74-9.59 17.85-10.86.36 1.48.54 2.87.54 4.18 0 6.62-2.48 13.02-7.44 19.2-4.96 6.18-10.97 9.87-18.04 11.08-.12-.99-.18-4.57-.18-4.57z" />
                  </svg>
                  <span>Download for iOS</span>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.app.gymatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 fill-current text-[var(--color-accent)]"
                    viewBox="0 0 512 512"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-59.8 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 59-34.1c18-10.4 18-46.3-.1-56.8zM104.6 499l220.7-221.3 59.8 60.1L104.6 499z" />
                  </svg>
                  <span>GET GOOGLE PLAY</span>
                </a>
              </div>
            </div>

            {/* Key Metrics Counter Strip */}
            <div className="pt-8 border-t border-[var(--color-border)] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-bebas text-3xl sm:text-4xl text-[var(--color-foreground)]">
                  <AnimatedCounter end={10} suffix="K+" />
                </div>
                <div className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-wider">
                  Matches Made
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-bebas text-3xl sm:text-4xl text-[var(--color-accent)]">
                  <AnimatedCounter end={50} suffix="K+" />
                </div>
                <div className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-wider">
                  Fitness Hubs
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-bebas text-3xl sm:text-4xl text-[var(--color-foreground)]">
                  <AnimatedCounter end={4.9} decimals={1} suffix=" ★" />
                </div>
                <div className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-wider">
                  App Rating
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Phone Showcase Mockup with Buttery Smooth Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 relative flex justify-center"
          >
            <div className="relative w-full max-w-[340px]">
              <PhoneMockup
                src="/assets/app/others/HOME.png"
                alt="GYMatch Main Home Feed App Screen"
                priority={true}
              />

              {/* Hardware-Accelerated Floating Badge 1: Bottom Center */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-[300px] animate-float-up">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[var(--color-surface)]/95 backdrop-blur-xl border border-[var(--color-border)] shadow-2xl">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-foreground)]">
                      32 Spotters Active Now
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">
                      Within 2.5 miles of your location
                    </div>
                  </div>
                </div>
              </div>

              {/* Hardware-Accelerated Floating Badge 2: Top Left */}
              <div className="absolute top-10 -left-8 sm:-left-14 z-30 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[var(--color-surface)]/95 backdrop-blur-xl border border-[var(--color-border)] shadow-2xl animate-float-down">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--color-foreground)]">
                    Auto-GPS Detection
                  </div>
                  <div className="text-[10px] text-[var(--color-text-muted)]">
                    Real-time local gyms
                  </div>
                </div>
              </div>

              {/* Hardware-Accelerated Floating Badge 3: Mid Right */}
              <div className="absolute bottom-28 -right-6 sm:-right-12 z-30 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[var(--color-surface)]/95 backdrop-blur-xl border border-[var(--color-border)] shadow-2xl animate-float-up">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-black flex items-center justify-center font-bold text-xs shrink-0">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--color-foreground)]">
                    Instant Matching
                  </div>
                  <div className="text-[10px] text-[var(--color-text-muted)]">
                    Temporary safety chat
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
