"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "WHAT IS GYMATCH AND HOW DOES IT WORK?",
    answer:
      "GYMatch is a real-time location-based gym discovery engine and social partner app. When you open the app, it automatically detects your live GPS coordinates, displays nearby gyms, and shows active workout partners currently available for training.",
  },
  {
    question: "DO I NEED AN ACCOUNT TO BROWSE NEARBY GYMS?",
    answer:
      "No! GYMatch includes a full Guest Mode. Anyone can open the app without signing up to browse nearby gyms, inspect map markers, view amenities, and check directions. Creating a free account is only required when you want to send 'Invite to Train' requests or chat with workout partners.",
  },
  {
    question: "IS MY EXACT GPS LOCATION SHARED WITH OTHER USERS?",
    answer:
      "Never. Privacy is a top priority. GYMatch never shares your live home coordinates or continuous background movement. You only appear as active within specific public gym locations when you explicitly toggle 'Find Workout Partner' mode.",
  },
  {
    question: "HOW DO I MATCH WITH A WORKOUT PARTNER OR SPOTTER?",
    answer:
      "Select your gym on the app, enable 'Find Workout Partner', and browse the active partner feed. Filter by workout style (Heavy Lifting, MMA, Yoga, Cardio) and experience level. Send an 'Invite to Train' request, and upon acceptance, a lightweight temporary chat opens to coordinate your session.",
  },
  {
    question: "HOW CAN PERSONAL TRAINERS AND GYM OWNERS USE GYMATCH?",
    answer:
      "Personal trainers can feature spotlight listings on gym detail pages to connect with local clientele looking for expert coaching. Gym owners can list their facilities, showcase amenities, and run targeted promotions to nearby fitness enthusiasts.",
  },
  {
    question: "IS GYMATCH AVAILABLE ON BOTH IOS AND ANDROID?",
    answer:
      "Yes! GYMatch is officially available for download worldwide on the Apple App Store for iOS devices and Google Play Store for Android smartphones.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            FREQUENTLY ASKED <span className="text-[var(--color-accent)]">QUESTIONS</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Everything you need to know about the GYMatch mobile application and platform.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[var(--color-surface)] border-[var(--color-accent)] shadow-xl"
                    : "bg-[var(--color-surface)]/60 border-[var(--color-border)] hover:border-[var(--color-accent)]/40"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  type="button"
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bebas text-xl sm:text-2xl text-[var(--color-foreground)] tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[var(--color-accent)] text-black rotate-180"
                        : "bg-[var(--color-bg-primary)] text-[var(--color-foreground)] border border-[var(--color-border)]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]/40 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
