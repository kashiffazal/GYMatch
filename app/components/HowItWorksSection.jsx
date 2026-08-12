"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import {
  Navigation,
  Users,
  Send,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    id: 1,
    icon: Navigation,
    title: "1. AUTO GPS LOCATION DETECTION",
    subtitle: "Open the App & Allow Location Access",
    description:
      "GYMatch automatically retrieves your live GPS coordinates. Instant local gym listings update dynamically based on whether you are at home or traveling.",
    screen: "/assets/app/others/HOME.png",
  },
  {
    id: 2,
    icon: Users,
    title: "2. DISCOVER GYMS & ACTIVE SPOTTERS",
    subtitle: "Explore Gym Details & Active Feed",
    description:
      "Browse gym photos, amenities, hours, and live partner feeds. See how many people are currently looking for a training partner at that specific gym.",
    screen: "/assets/app/guest/Gym Detail as guest.png",
  },
  {
    id: 3,
    icon: Send,
    title: "3. SEND INSTANT 'INVITE TO TRAIN'",
    subtitle: "Select Compatible Workout Partners",
    description:
      "Review profiles based on workout goals, experience level, and favorite routines. Send an 'Invite to Train' request with a single tap.",
    screen: "/assets/app/guest/Guest Profile.png",
  },
  {
    id: 4,
    icon: MessageSquare,
    title: "4. TEMPORARY CHAT & CRUSH WORKOUT",
    subtitle: "Coordinate & Hit The Gym Together",
    description:
      "Once accepted, a lightweight auto-expiring chat thread opens for training coordination. Meet up, spot each other, and achieve your fitness goals!",
    screen: "/assets/app/chats/Active Chat UI.png",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = STEPS.find((s) => s.id === activeStep) || STEPS[0];

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 bg-[var(--color-surface)]/70 bg-gradient-to-b from-[var(--color-surface)]/80 to-[var(--color-surface)]/40 border-b border-[var(--color-border)] relative overflow-hidden"
    >
      {/* Drifting Left-to-Right Ambient Accent Glow */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-[var(--color-accent)]/10 rounded-full blur-[150px] pointer-events-none animate-drift-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Navigation className="w-4 h-4" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            HOW TO USE{" "}
            <span className="text-[var(--color-accent)]">GYMATCH</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Getting started takes under 30 seconds. Follow these 4 easy steps to
            find your next gym and workout partner.
          </p>
        </div>

        {/* Interactive Step Switcher & Phone Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Steps List */}
          <div className="lg:col-span-7 space-y-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === activeStep;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-6 sm:p-8 rounded-3xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-[var(--color-surface)] border-[var(--color-accent)] shadow-2xl shadow-[var(--color-accent)]/10 scale-[1.01]"
                      : "bg-[var(--color-surface)]/60 border-[var(--color-border)] hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-surface)]"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 transition-all ${
                        isActive
                          ? "bg-[var(--color-accent)] text-black"
                          : "bg-[var(--color-surface)] text-[var(--color-text-muted)]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5 flex-grow">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-bebas text-2xl tracking-wide ${
                            isActive
                              ? "text-[var(--color-foreground)]"
                              : "text-[var(--color-text-muted)]"
                          }`}
                        >
                          {step.title}
                        </h3>
                        {isActive && (
                          <ArrowRight className="w-5 h-5 text-[var(--color-accent)]" />
                        )}
                      </div>

                      <div className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                        {step.subtitle}
                      </div>

                      <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed pt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Phone Preview */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[660px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.35 }}
                className="w-full flex justify-center items-center"
              >
                <PhoneMockup
                  src={currentStep.screen}
                  alt={`Step ${currentStep.id}: ${currentStep.title}`}
                  className="shadow-2xl"
                  badge={
                    <div className="px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bebas text-lg tracking-wider shadow-xl">
                      STEP {currentStep.id} OF 4
                    </div>
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
