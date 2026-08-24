"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

export const FAQ_ITEMS = [
  {
    category: "General",
    question: "Where is Gymatch based?",
    answer: "Gymatch Inc. is headquartered in Los Angeles, CA.",
  },
  {
    category: "General",
    question: "Who is the Gymatch platform built for?",
    answer:
      "Gymatch is engineered for a diverse global community of dedicated practitioners. From elite strength athletes and martial artists to traveling professionals and those beginning their fitness journey, our platform provides the infrastructure to connect with partners and facilities regardless of your background.",
  },
  {
    category: "General",
    question: "How do I contact the Gymatch team?",
    answer: (
      <>
        Direct your inquiries to{" "}
        <a
          href="mailto:contact@gymatch.com"
          className="text-[var(--color-accent)] underline hover:opacity-80 transition-opacity"
        >
          contact@gymatch.com
        </a>
        . A representative will respond within 24 hours. For urgent safety
        concerns regarding other users, utilize the in-app &apos;Block&apos; and
        &apos;Report&apos; protocols while our team reviews the account.
      </>
    ),
  },
  {
    category: "General",
    question: "What is Gymatch?",
    answer:
      "Gymatch is a high-performance fitness and social infrastructure that synchronizes dedicated individuals with like-minded training partners. We turn fitness from a solitary routine into a collaborative, community-driven effort, ensuring you have the network required to reach your performance targets anywhere in the world.",
  },
  {
    category: "General",
    question: "What is the origin of the name?",
    answer:
      "Gymatch is the fusion of two core concepts: GYM + MATCH. We developed a name that is globally recognizable, representing the intersection of facility access and partner synchronization.",
  },
  {
    category: "Pricing & Features",
    question: "Is the Gymatch platform free?",
    answer:
      "The Gymatch app is free for all iOS and Android users. You can create a profile and connect with the community at no cost. We offer Spotlight Performance Packages for users, trainers, and facilities looking to leverage enhanced visibility and strategic placement within the global training ecosystem.",
  },
  {
    category: "General",
    question: "What is the team’s experience level?",
    answer:
      "Our team combines years of deep industry expertise in health and fitness with advanced mobile engineering. This hybrid background allows us to build features that are not just technically sound, but optimized for the specific needs of the dedicated athlete.",
  },
  {
    category: "Community",
    question: "Can I share my feedback?",
    answer:
      "Absolutely. We value the input of our practitioners. You can submit your testimonial via 'Settings' in the 'My Profile' section. Approved testimonials are showcased on our homepage to highlight the success of our community.",
  },
  {
    category: "Rewards & Points",
    question: "How does the Spotlight Reward System function?",
    answer:
      'The Spotlight Reward System is your engine for growth. Every time you invite a training partner, colleague, or fellow fitness enthusiast to the platform, you earn reward points. Accumulate these points and you can redeem them for "Spotlight" visibility-placing your profile at the front of the line for thousands of other members across the network to see. It is the fastest way to build your audience, increase your influence, gain massive exposure, and dominate your local training scene if you’re a trainer.',
  },
  {
    category: "Gym Owners & Trainers",
    question: "How do gym owners and trainers benefit from Spotlight?",
    answer:
      "This is your competitive advantage. Our Spotlight packages are designed to turn visibility into immediate revenue. For gym owners and trainers, this is the ultimate growth engine-placing your brand directly in front of a high-intent fitness audience of thousands worldwide. Whether you are looking to fill training slots, drive facility memberships, or launch a new brand, Spotlight provides the immediate, scalable exposure you need to dominate your local market and win big.",
  },
  {
    category: "Gym Owners & Trainers",
    question: "How can I increase gym membership sign-ups?",
    answer:
      "By registering for a Spotlight package, gym owners gain the ability to showcase their facility’s unique value proposition. This includes uploading advanced trainer profiles, displaying exclusive promo codes, posting gym schedules, linking your website, showcasing high-resolution media galleries, and pinning your location on our global discovery engine to attract local and traveling fitness enthusiasts. It is the most effective way to bridge the gap between your facility and the thousands of active users searching for their next training hub.",
  },
];

export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "General",
    "Pricing & Features",
    "Rewards & Points",
    "Gym Owners & Trainers",
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Search & Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions (e.g. points, gym owners, free...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-all shadow-md"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-md shadow-[var(--color-accent)]/20"
                    : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-3"
            >
              <HelpCircle className="w-10 h-10 text-[var(--color-text-muted)] mx-auto opacity-50" />
              <h3 className="font-bebas text-2xl text-[var(--color-foreground)]">
                No Matching Questions
              </h3>
              <p className="text-xs text-[var(--color-text-muted)]">
                Try adjusting your search terms or selecting another category.
              </p>
            </motion.div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden transition-all shadow-md hover:border-[var(--color-accent)]/50"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bebas text-xl sm:text-2xl text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span className="leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--color-accent)] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-[var(--color-border)]/50"
                      >
                        <div className="p-6 pt-4 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed bg-[var(--color-bg-primary)]/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
