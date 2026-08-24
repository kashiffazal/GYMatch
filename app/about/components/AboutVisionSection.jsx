"use client";

import { motion } from "framer-motion";
import { Compass, Users, Target, Globe } from "lucide-react";

const VISION_PILLARS = [
  {
    icon: Compass,
    title: (
      <>
        GYM & STUDIO <br /> DISCOVERY
      </>
    ),
    desc: "Connect to gyms, dojos, CrossFit boxes, or yoga studios wherever you are-whether visiting across town or across the globe.",
  },
  {
    icon: Users,
    title: (
      <>
        INSTANT WORKOUT <br /> PARTNERS
      </>
    ),
    desc: "Find compatible spotters and training partners matching your exact workout goals, intensity, and schedule.",
  },
  {
    icon: Target,
    title: (
      <>
        FITNESS EXPERTS <br /> & COACHES
      </>
    ),
    desc: "Your source for certified personal trainers, coaches, nutritionists, and health experts to guide your fitness regimen.",
  },
  {
    icon: Globe,
    title: (
      <>
        GLOBAL FITNESS <br /> NETWORK
      </>
    ),
    desc: "Connecting millions of fitness enthusiasts across the globe. Fitness is a universal language spoken worldwide.",
  },
];

export default function AboutVisionSection() {
  return (
    <section className="py-20 sm:py-28 relative bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-ambient-glow)] rounded-full blur-[160px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Compass className="w-4 h-4" />
            <span>Our Vision</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide leading-tight">
            BRIDGING THE WORLD OF <br />
            <span className="text-[var(--color-accent)]">HEALTH & FITNESS</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            We&apos;ll connect you to a gym, dojo, studio, or workout partner
            wherever you are-whether visiting across town or across the globe.
            Let GYMatch be your ultimate fitness connector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VISION_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 p-8 shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bebas text-2xl text-[var(--color-foreground)] tracking-wide leading-tight min-h-[56px] flex items-center">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
