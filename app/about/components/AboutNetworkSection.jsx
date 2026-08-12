"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const NETWORK_PILLARS = [
  {
    title: (
      <>
        50K+ <br /> FITNESS HUBS
      </>
    ),
    subtitle: "Real-time GPS cataloging of gyms, dojos, and studios globally.",
  },
  {
    title: (
      <>
        30,000+ <br /> ACTIVE SPOTTERS
      </>
    ),
    subtitle: "Verified community members ready to train and spot heavy sets.",
  },
  {
    title: (
      <>
        PRIVACY-FIRST <br /> SAFETY
      </>
    ),
    subtitle: "Auto-expiring chat channels keep your private contact details safe.",
  },
  {
    title: (
      <>
        ZERO MEMBERSHIP <br /> BARRIERS
      </>
    ),
    subtitle: "100% free app download for iOS and Android devices.",
  },
];

export default function AboutNetworkSection() {
  return (
    <section className="py-20 sm:py-28 relative bg-[var(--color-section-bg)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <ShieldCheck className="w-4 h-4" />
            <span>Global Platform Impact</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            BUILT FOR THE <span className="text-[var(--color-accent)]">GLOBAL COMMUNITY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NETWORK_PILLARS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-3 shadow-lg hover:border-[var(--color-accent)]/60 transition-colors flex flex-col justify-between"
            >
              <div className="font-bebas text-3xl sm:text-4xl text-[var(--color-accent)] leading-tight min-h-[72px] flex items-center justify-center">
                {item.title}
              </div>
              <div className="text-xs text-[var(--color-text-muted)] font-medium leading-relaxed">
                {item.subtitle}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
