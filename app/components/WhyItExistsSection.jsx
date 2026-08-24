"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Flame,
  Lock,
  Globe,
  HeartHandshake,
} from "lucide-react";

const WHY_POINTS = [
  {
    icon: Flame,
    title: "Safety-First Performance",
    description:
      "Mitigate risk during high-intensity sessions. Connect with verified spotters currently training on the floor.",
    bgImage:
      "/assets/img/muscular-bodybuilder-training-arms-with-barbell-RSUQXF5.jpg",
  },
  {
    icon: Globe,
    title: "Global Facility Access",
    description:
      "Whether in London or Tokyo, our proximity engine maps regional studios and training hubs to your immediate location.",
    bgImage:
      "/assets/img/fit-group-of-people-exercising-on-a-treadmill-in-gym-1.jpg",
  },
  {
    icon: Target,
    title: "Precision Alignment",
    description:
      "Sync with partners who match your exact intensity-from combat conditioning and hypertrophy to mobility training.",
    bgImage: "/assets/img/two-women-boxing-in-the-ring-box-training.jpg",
  },
  {
    icon: Lock,
    title: "Encrypted Interaction",
    description:
      "Your privacy is absolute. Appear only within public training zones via ephemeral, secure messaging channels.",
    bgImage: "/assets/img/cross-training-young-woman-exercising-at-the-gym.jpg",
  },
  {
    icon: HeartHandshake,
    title: "Ecosystem Integration",
    description:
      "Engage with local coaches and training circles. Transform isolated routines into collaborative, high-performance efforts.",
    bgImage:
      "/assets/img/trainer-giving-advice-to-woman-at-crossfit-gym-P3JM27Z.jpg",
  },
  {
    icon: Shield,
    title: "Standardized Governance",
    description:
      "Maintain a professional environment with robust moderation, blocking, and reporting protocols to ensure a secure experience.",
    bgImage:
      "/assets/img/fitness-sport-training-gym-success-and-lifestyle-JKSDH2B.jpg",
  },
];

export default function WhyItExistsSection() {
  return (
    <section
      id="why-gymatch"
      className="py-20 sm:py-28 relative overflow-hidden bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]"
    >
      {/* Animated Top-Center Breathing Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Target className="w-4 h-4" />
            <span>Why settle for static tracking?</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            THE GYMATCH{" "}
            <span className="text-[var(--color-accent)]">FRAMEWORK</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Most fitness apps focus on passive logging or calorie tracking.
            GYMatch optimizes the human variable-connecting dedicated
            practitioners to train together securely and navigate training hubs
            with total precision.
          </p>
        </div>

        {/* 6 Feature Pillars Grid with Subtle Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_POINTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 shadow-xl overflow-hidden group hover:-translate-y-1.5 p-8 flex flex-col justify-between"
              >
                {/* Background Photo Overlay */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/90 to-transparent"></div>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-bebas text-2xl text-[var(--color-foreground)] tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
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
