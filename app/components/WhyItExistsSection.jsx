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
    title: "NEVER TRAIN WITHOUT A SPOTTER",
    description:
      "Pushing heavy bench presses or squat personal records alone is dangerous. GYMatch connects you with verified spotters currently training at your gym.",
    bgImage:
      "/assets/img/muscular-bodybuilder-training-arms-with-barbell-RSUQXF5.jpg",
  },
  {
    icon: Globe,
    title: "TRAVEL & DISCOVER GYMS ANYWHERE",
    description:
      "Whether in London, Miami, LA, or Tokyo-open the app and automatically discover gyms, CrossFit boxes, and martial arts studios around your exact location.",
    bgImage:
      "/assets/img/fit-group-of-people-exercising-on-a-treadmill-in-gym-1.jpg",
  },
  {
    icon: Target,
    title: "MATCH BY DISCIPLINE & GOALS",
    description:
      "Find partners who match your exact training intensity-whether you are training for MMA fight night, bodybuilding hyper-trophy, or yoga flexibility.",
    bgImage: "/assets/img/two-women-boxing-in-the-ring-box-training.jpg",
  },
  {
    icon: Lock,
    title: "PRIVACY-FIRST SOCIAL LAYER",
    description:
      "Your exact home coordinates are never revealed. You only appear as active within specific public gym locations with safe temporary chat channels.",
    bgImage: "/assets/img/cross-training-young-woman-exercising-at-the-gym.jpg",
  },
  {
    icon: HeartHandshake,
    title: "BUILD FITNESS COMMUNITIES",
    description:
      "Connect with local instructors, personal trainers, and gym communities. Transform workouts from a routine chore into an inspiring team effort.",
    bgImage:
      "/assets/img/trainer-giving-advice-to-woman-at-crossfit-gym-P3JM27Z.jpg",
  },
  {
    icon: Shield,
    title: "MODERATION & BLOCK / REPORT",
    description:
      "Built-in safety features ensure respectful interactions. Full block and report tools let you keep your workout experience safe and positive.",
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
            <span>YOUR CHOICE</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            WHY GYMATCH IS{" "}
            <span className="text-[var(--color-accent)]">YOUR CHOICE</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Most fitness apps log workouts or track calories-GYMatch solves the
            human element of fitness: connecting dedicated people to train
            together safely and explore fitness hubs effortlessly.
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
