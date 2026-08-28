"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  Users,
  MapPin,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function WhatIsItSection() {
  return (
    <section
      id="what-is-gymatch"
      className="py-20 sm:py-28 bg-[var(--color-surface)]/40 border-y border-[var(--color-border)] relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Compass className="w-4 h-4" />
            <span>The Concept & Revolution</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            WHAT IS <span className="text-[var(--color-accent)]">GYMATCH?</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            GYMatch bridges the gap between{" "}
            <span className="text-[var(--color-foreground)] font-semibold">
              “I need a gym”
            </span>{" "}
            and{" "}
            <span className="text-[var(--color-accent)] font-semibold">
              “I’m training with a partner.”
            </span>{" "}
            It automatically detects your live GPS coordinates to reveal nearby
            fitness centers and active workout spotters around you.
          </p>
        </div>

        {/* 4 Unified Feature & Comparison Boxes (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Real-Time Geolocation Gym Discovery Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 shadow-2xl overflow-hidden group flex flex-col justify-between min-h-[420px]"
          >
            {/* Background Fitness Photo Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <Image
                src="/assets/img/home-real-time-geolocation-1.webp"
                alt="Gym Weight Lifting"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/80 to-transparent"></div>
            </div>

            <div className="p-8 sm:p-10 relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full border border-[var(--color-accent)]/20">
                  Pillar #1
                </span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-[var(--color-foreground)] leading-tight">
                REAL-TIME GEOLOCATION GYM DISCOVERY
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                No manual location input needed. Senses your exact GPS location
                anywhere in the world and instantly displays top gyms, CrossFit
                boxes, combat academies, and yoga studios around you.
              </p>

              <ul className="space-y-3 text-xs font-semibold text-[var(--color-foreground)] pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span>Automatic instant location detection</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span>Dynamic radius loading (1km / 5km / 10km)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span>Filter by category, amenities, timings & ratings</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-t border-[var(--color-border)] relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--color-foreground)]">
                Exploration Radius: Up to 10 Miles
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 2: Active Workout Partner Matching Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 shadow-2xl overflow-hidden group flex flex-col justify-between min-h-[420px]"
          >
            {/* Background Fitness Photo Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <Image
                src="/assets/img/home-active-workout-2.webp"
                alt="Gym Training Partners"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/80 to-transparent"></div>
            </div>

            <div className="p-8 sm:p-10 relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full border border-[var(--color-accent)]/20">
                  Pillar #2
                </span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-[var(--color-foreground)] leading-tight">
                ACTIVE WORKOUT PARTNER MATCHING
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Enable &ldquo;Find Workout Partner&rdquo; mode at any gym to see
                who is currently training at that location, compare workout
                goals or experience levels, and send instant training
                invitations.
              </p>

              <ul className="space-y-3 text-xs font-semibold text-[var(--color-foreground)] pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span>Live active gym partner feed & spotter status</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span>
                    Match by training style (Strength, MMA, Yoga, Cardio)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span>
                    Temporary lightweight chat with auto-expiring threads
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-t border-[var(--color-border)] relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--color-foreground)] font-mono">
                Spotters Online: 30,000+ Verified Users
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: Traditional Solo Lifter Friction (The Old Way) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-3xl bg-[var(--color-surface)] border border-red-500/30 hover:border-red-500/60 transition-all duration-300 shadow-2xl overflow-hidden group flex flex-col justify-between min-h-[420px]"
          >
            <div className="p-8 sm:p-10 relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <XCircle className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  The Old Way
                </span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-[var(--color-foreground)] leading-tight">
                TRADITIONAL GYM FRICTION
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                The friction of solo fitness training before GYMatch: manual
                search, lack of spotters, and safety/privacy concerns.
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-[var(--color-text-muted)] pt-2">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Searching Google Maps manually & calling gyms for equipment
                    details
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Lifting heavy weights alone with nobody available to spot
                    heavy sets
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Awkwardly asking strangers for workout partnerships
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Sharing personal phone numbers & social media profiles
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-red-500/5 backdrop-blur-md border-t border-red-500/20 relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-red-400">
                Solo Training Friction & Anxiety
              </span>
              <XCircle className="w-4 h-4 text-red-400" />
            </div>
          </motion.div>

          {/* Card 4: The GYMatch SaaS Revolution (With GYMatch) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-3xl bg-[var(--color-surface)] border border-[var(--color-accent)]/50 hover:border-[var(--color-accent)] transition-all duration-300 shadow-2xl overflow-hidden group flex flex-col justify-between min-h-[420px]"
          >
            <div className="p-8 sm:p-10 relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full border border-[var(--color-accent)]/20">
                  The SaaS Solution
                </span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-[var(--color-foreground)] leading-tight">
                THE GYMATCH REVOLUTION
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Streamlined, privacy-first mobile application connecting gym
                goers and combat athletes globally.
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-[var(--color-foreground)] font-medium pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>
                    Instant live GPS discovery of verified gyms with full
                    amenity breakdown
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>
                    Real-time feed showing active spotters currently at your gym
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>
                    Filter training partners by exact discipline, weight class,
                    or goal
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>
                    Privacy-first temporary chat thread without revealing
                    private contact info
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[var(--color-accent)]/10 backdrop-blur-md border-t border-[var(--color-accent)]/30 relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--color-accent)]">
                Seamless Real-time SaaS Platform
              </span>
              <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
