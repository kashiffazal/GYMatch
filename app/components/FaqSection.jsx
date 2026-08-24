"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What is GYMatch and How Does It Work?",
    answer:
      "GYMatch serves as a real-time, location-based gym discovery engine and social partner app. Upon launching the app, it automatically detects your current GPS coordinates, showcasing nearby gyms and highlighting active workout partners available to train with.",
  },
  {
    question: "Do I Need an Account to Browse Nearby Gyms?",
    answer:
      "No! GYMatch offers a full Guest Mode. Users can access the app without signing up to explore nearby gyms, view map markers, check amenities, and obtain directions. A free account is only necessary for sending 'Invite to Train' requests or engaging in chats with workout partners.",
  },
  {
    question: "Is My Exact GPS Location Shared with Other Users?",
    answer:
      "Absolutely not. Your privacy is paramount. GYMatch does not share your home coordinates or continuous movement data. You will only appear as active at specific public gym locations when you choose to enable 'Find Workout Partner' mode.",
  },
  {
    question: "How Do I Match with a Workout Partner or Spotter?",
    answer:
      "Select your gym within the app, activate 'Find Workout Partner,' and browse the active partner feed. You can filter by workout style (Heavy Lifting, MMA, Yoga, Cardio) and experience level. Send an 'Invite to Train' request, and upon acceptance, a temporary chat opens to coordinate your session.",
  },
  {
    question: "How Can Personal Trainers and Gym Owners Utilize GYMatch?",
    answer:
      "Personal trainers can showcase spotlight listings on gym detail pages to connect with local clients seeking expert coaching. Gym owners can list their facilities, highlight amenities, and run targeted promotions to attract nearby fitness enthusiasts.",
  },
  {
    question: "Is GYMatch Available on Both iOS and Android?",
    answer:
      "Yes! GYMatch is available for download worldwide on the Apple App Store for iOS devices and the Google Play Store for Android smartphones.",
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
            <span>Your Inquiry Hub</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            EXPLORE OUR COMPREHENSIVE{" "}
            <span className="text-[var(--color-accent)]">FAQ</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Discover everything you need to know about the GYMatch mobile
            application and platform.
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
