"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

export const FAQ_ITEMS = [
  {
    category: "General",
    question: "Where is GYMatch located?",
    answer: "GYMatch Inc. is based in Los Angeles, CA.",
  },
  {
    category: "General",
    question: "What type of people use GYMatch?",
    answer: "GYMatch is loved by all types of people because of its easy navigation and cool gym location features. This APP will allow you to search for new gym buddies, invite your friends from Facebook, or upload encouraging Instagram images from a hard leg workout day at the gym! This is definitely a gym friendly APP which is utilized by any and everyone worldwide and from many different backgrounds. Everyone from fitness buffs, novice beginners, and mothers, to traveling corporate executives on the go looking for a gym right away can easily use GYMatch!",
  },
  {
    category: "General",
    question: "How do we get in touch with a GYMatch rep?",
    answer: "Please feel free to send us an email at contact@gymatch.com and one of our GYMatch representatives will contact you within 24hrs. If this is an emergency and have to do with another user then please utilize the 'block' feature on the APP until we have had some time to review his/her account details.",
  },
  {
    category: "General",
    question: "What is GYMatch?",
    answer: "GYMatch, the highly sought after Fitness & Social Networking app that matches people with like-minded gym-buddies and helps to turn Fitness & Health into a community effort. Find the perfect workout partner in your local area to help you get fit and keep you on track. No matter where you are in the world, the GYMatch Fitness app will help you find the right people to help you stay fit, trim and healthy!",
  },
  {
    category: "General",
    question: "How did your company get its name?",
    answer: "GYMatch got its name by putting two common words together. GYM + MATCH = GYMatch! We wanted to come up with a name that could be easily recognizable no matter where you are in the world. That's the GYMatch way!",
  },
  {
    category: "Pricing & Features",
    question: "Is GYMatch free?",
    answer: "The GYMatch APP is 100% free for all iPhone and Android users that want to download it, create a profile and connect with other gym buddies worldwide! There are optional spotlight services which allow users and facilities to gain enhanced visibility.",
  },
  {
    category: "General",
    question: "How much experience does your company have?",
    answer: "GYMatch is a modern platform in terms of brand building for a mobile APP but our team has many years in the health and fitness industry. This experience has allowed us to come up with the best Social and Fitness features for this amazing APP! We are experts in the fitness industry and created it based on experience with the fitness guru in mind!",
  },
  {
    category: "Community",
    question: "Can anyone upload a testimonial?",
    answer: "Yes, definitely! Please check out our testimonials section on the homepage or settings. If you like us and want to share your comments then feel free to share your testimonial too! Your testimonial will appear in rotation on the GYMatch homepage under 'Testimonials' for all to see. Just go to 'My Profile' and click on 'Settings' in the app to submit.",
  },
  {
    category: "Rewards & Points",
    question: "How do GYMatch points work? What can I get with my points?",
    answer: "GYMatch points is a reward based system which 'rewards' you for referring any of your family, friends, colleagues or other fitness buddies on the APP. Your cumulative points can earn you 'FREE' spotlight face time! Meaning you can be seen by everyone at any given time! Just invite your friends through Facebook or Instagram to download the app and list you as their referral. MORE points mean MORE face time on Spotlight!",
  },
  {
    category: "Gym Owners & Trainers",
    question: "How can Gym Owners and Trainers benefit by signing up for GYMatch?",
    answer: "GYM Owners and Trainers can benefit immensely from signing up for a Spotlight package as this will increase their visibility to thousands of GYM enthusiasts who would not have known about them beforehand. This immediate exposure leads to increased sales and paid personal training clients locally and internationally.",
  },
  {
    category: "Gym Owners & Trainers",
    question: "I am a gym owner, how can GYMatch help me get more members to sign up?",
    answer: "The GYMatch APP will allow you to be seen by everyone thereby increasing your visibility not only to your immediate clientele but new members worldwide. Once a GYM owner registers for a spotlight package, they get the opportunity to tell the GYM community more about themselves, upload images of their trainers, display discount promo codes, and link their location on the GPS locator map!",
  },
];

export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "General", "Pricing & Features", "Rewards & Points", "Gym Owners & Trainers"];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
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
              <h3 className="font-bebas text-2xl text-[var(--color-foreground)]">No Matching Questions</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Try adjusting your search terms or selecting another category.</p>
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
