"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import {
  Sparkles,
  MapPin,
  Users,
  Shield,
  Zap,
  Compass,
  Clock,
  ArrowRight,
} from "lucide-react";
import styles from "./AdvantageSection.module.css";

const LEFT_ADVANTAGES = [
  {
    icon: MapPin,
    title: "Instant GPS Detection",
    description:
      "Automatic live GPS discovery anywhere in the world. No manual city typing or location setup required.",
  },
  {
    icon: Users,
    title: "Active Spotter Feed",
    description:
      "Real-time feed showing members looking for training partners currently active at your specific gym.",
  },
  {
    icon: Shield,
    title: "Privacy Protected Chat",
    description:
      "Temporary auto-expiring workout threads keep your home address and personal phone numbers private.",
  },
];

const RIGHT_ADVANTAGES = [
  {
    icon: Clock,
    title: "24/7 Gym Discovery",
    description:
      "Explore operating hours, guest passes, equipment lists, and amenities for gyms around you round-the-clock.",
  },
  {
    icon: Zap,
    title: "Discipline Matching",
    description:
      "Filter partners by exact training style-Heavy Bodybuilding, Boxing, MMA Sparring, CrossFit, or Yoga.",
  },
  {
    icon: Compass,
    title: "Spotlight Trainers",
    description:
      "Connect with certified local personal trainers and fitness instructors active in your community.",
  },
];

export default function AdvantageSection() {
  return (
    <section
      className={
        styles.sectionContainer + " border-b border-[var(--color-border)]"
      }
    >
      {/* Radiating Inner-to-Outer Ripple Radar Rings */}
      <div
        className={`${styles.rippleRing} ${styles.ringBase} ${styles.ring1}`}
      ></div>
      <div
        className={`${styles.rippleRing} ${styles.ringBase} ${styles.ring2}`}
      ></div>
      <div
        className={`${styles.rippleRing} ${styles.ringBase} ${styles.ring3}`}
      ></div>
      <div
        className={`${styles.rippleRing} ${styles.ringBase} ${styles.ring4}`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Sparkles className="w-4 h-4" />
            <span>What's the benefits of GYMatch?</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl text-[var(--color-foreground)] tracking-wide">
            GYMATCH PLATFORM <br />
            <span className="text-[var(--color-accent)]">ADVANTAGE</span>
          </h2>
        </div>

        {/* Grid: 3 Left Cards, Centered Phone, 3 Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 3 Advantage Cards */}
          <div className="lg:col-span-4 space-y-6">
            {LEFT_ADVANTAGES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={styles.floatingCard}
                >
                  <div className={styles.iconBox}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bebas text-2xl text-[var(--color-foreground)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Centered Phone Mockup with Radiating Ring Aura */}
          <div className="lg:col-span-4 relative flex justify-center py-6">
            <PhoneMockup
              src="/assets/app/others/HOME.png"
              alt="GYMatch Advantage Phone Mockup"
              priority={true}
            />
          </div>

          {/* Right 3 Advantage Cards */}
          <div className="lg:col-span-4 space-y-6">
            {RIGHT_ADVANTAGES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={styles.floatingCard}
                >
                  <div className={styles.iconBox}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bebas text-2xl text-[var(--color-foreground)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#features"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 shadow-xl shadow-[var(--color-accent)]/20 hover:scale-105"
          >
            <span>EXPLORE MORE OUR FEATURES</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
