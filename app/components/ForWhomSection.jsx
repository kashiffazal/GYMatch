"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Shield,
  UserCheck,
  Globe,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import styles from "./ForWhomSection.module.css";

const PERSONAS = [
  {
    id: "lifters",
    title: "Heavy Lifters & Bodybuilders",
    tagline: "Execute peak performance without the risk.",
    icon: Dumbbell,
    image:
      "/assets/img/muscular-bodybuilder-training-arms-with-barbell-RSUQXF5.jpg",
    badge: "Live Partner Synchronization",
    bullets: [
      "Locate reliable, experienced spotters at your exact facility.",
      "Align with powerlifters sharing your strength benchmarks.",
      "Safely execute peak sets without training in isolation.",
    ],
  },
  {
    id: "combat",
    title: "Boxing, MMA & BJJ Practitioners",
    tagline: "Match with partners in your weight class.",
    icon: Shield,
    image: "/assets/img/two-women-boxing-in-the-ring-box-training.jpg",
    badge: "Technical Training Network",
    bullets: [
      "Discover boxing rings, MMA cages, and specialized studios nearby.",
      "Coordinate technical drills, BJJ sessions, and tactical training.",
      "Connect with disciplined martial arts enthusiasts.",
    ],
  },
  {
    id: "trainers",
    title: "Personal Trainers & Instructors",
    tagline: "Scale your local practice effortlessly.",
    icon: UserCheck,
    image:
      "/assets/img/trainer-giving-advice-to-woman-at-crossfit-gym-P3JM27Z.jpg",
    badge: "Professional Trainer Showcase",
    bullets: [
      "Promote your profile directly within the Gymatch ecosystem.",
      "Connect with new clientele active within your immediate training radius.",
      "Host group sessions and specialized training blocks to build your business.",
    ],
  },
  {
    id: "travelers",
    title: "Travelers & Fitness Nomads",
    tagline: "Train seamlessly anywhere in the world.",
    icon: Globe,
    image:
      "/assets/img/fit-group-of-people-exercising-on-a-treadmill-in-gym-1.jpg",
    badge: "Global Proximity Engine",
    bullets: [
      "Automatic live location discovery from Tokyo to London to Miami to LA and beyond.",
      "Compare gym day passes, amenities, and hours.",
      "Connect with local gym members for insider spots.",
    ],
  },
];

export default function ForWhomSection() {
  return (
    <section className="py-20 sm:py-28 relative bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] overflow-hidden">
      {/* Dual Counter-Pulsing Ambient Halos */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[var(--color-accent)]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Sparkles className="w-4 h-4" />
            <span>Target Audience</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            ENGINEERED FOR THE{" "}
            <span className="text-[var(--color-accent)]">DEDICATED</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Whether you are pushing heavy iron, training for martial arts,
            coaching clients, or traveling abroad-Gymatch is the infrastructure
            built for those who treat performance as a discipline.
          </p>
        </div>

        {/* 4 Crystal Persona Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PERSONAS.map((persona, index) => {
            const Icon = persona.icon;

            return (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.personaCard}
              >
                {/* Full Background Photo */}
                <Image
                  src={persona.image}
                  alt={persona.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Dark Crystal Glass Overlay */}
                <div className={styles.glassOverlay}></div>

                {/* Card Content */}
                <div className="relative z-20 p-8 sm:p-10 space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)] text-black flex items-center justify-center font-bold shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${styles.crystalBadge}`}
                    >
                      {persona.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-tight pt-2">
                    {persona.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-accent)] font-semibold italic">
                    &ldquo;{persona.tagline}&rdquo;
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    {persona.bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
