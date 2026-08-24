"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import { Zap, CheckCircle2 } from "lucide-react";

export default function AboutMobileAppSection() {
  return (
    <section className="py-20 sm:py-28 relative bg-[var(--color-section-bg)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
              <Zap className="w-4 h-4" />
              <span>Latitude & Longitude GPS Engine</span>
            </div>

            <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide leading-tight">
              THE MOBILE APP: <br />
              <span className="text-[var(--color-accent)]">GPS DISCOVERY</span>
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Available for both iOS and Android devices, GYMatch offers one
              amazing answer for all your fitness needs. Merely enter your
              pin-based latitude & longitude coordinates, and the nearest gym
              locations, active spotters, and coaches appear instantly on your
              screen.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--color-foreground)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                <span>Real-time GPS pin-based gym & studio discovery</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--color-foreground)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                <span>
                  Filter by CrossFit, MMA dojos, Yoga, and Heavy Lifting
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--color-foreground)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                <span>
                  Connect seamlessly across town or traveling worldwide
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="w-full max-w-[320px]">
              <PhoneMockup
                src="/assets/app/others/Explore.webp"
                alt="GYMatch GPS Discovery App Screen"
                priority={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
