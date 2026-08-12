"use client";

import { motion } from "framer-motion";
import { Video, Play, Rss } from "lucide-react";

const GTV_FEATURES = [
  {
    icon: Video,
    tag: "Blockbuster",
    title: "User Video Sharing",
    desc: "Catch the latest fitness programs where users can upload and share their personal training videos and workout milestones.",
  },
  {
    icon: Play,
    tag: "Teaser",
    title: "YouTube Video Integration",
    desc: "Seamless YouTube integration for sharing inspiring fitness content, exercise technique tutorials, and gym spotlights.",
  },
  {
    icon: Rss,
    tag: "Buzz",
    title: "Live Fitness RSS Feeds",
    desc: "Stay updated with real-time health, nutrition, and workout news aggregated directly into your GYMatch social feed.",
  },
];

export default function AboutGtvSection() {
  return (
    <section className="py-20 sm:py-28 relative bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-ambient-glow-secondary)] rounded-full blur-[160px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Video className="w-4 h-4" />
            <span>GTV Video & Social Suite</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            EXPLORE <span className="text-[var(--color-accent)]">GTV MEDIA FEATURES</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            GYMatch is here to CONNECT you to fitness resources and assist you in managing your regimen through integrated video and social media tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GTV_FEATURES.map((gtv, idx) => {
            const Icon = gtv.icon;
            return (
              <motion.div
                key={gtv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 p-8 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                      {gtv.tag}
                    </span>
                  </div>

                  <h3 className="font-bebas text-2xl text-[var(--color-foreground)] tracking-wide">
                    {gtv.title}
                  </h3>

                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {gtv.desc}
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
