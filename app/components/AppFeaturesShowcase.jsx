"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import { MapPin, Users, Map, Dumbbell, MessageCircle, Heart, ChevronRight, Layers } from "lucide-react";

const FEATURES = [
  {
    id: "geolocation",
    icon: MapPin,
    title: "REAL-TIME GEOLOCATION ENGINE",
    subtitle: "Automatic GPS Detection",
    description:
      "Automatically detects your exact GPS coordinates upon opening the app. Instantly lists nearby gyms, fitness centers, and academies sorted by distance and rating without typing city names.",
    screen: "/assets/app/others/HOME.png",
  },
  {
    id: "partner-feed",
    icon: Users,
    title: "ACTIVE WORKOUT PARTNER FEED",
    subtitle: "Find Spotters At Your Gym",
    description:
      "See who is currently active and available to train at your gym. View workout preferences, experience levels, and send instant 'Invite to Train' requests.",
    screen: "/assets/app/guest/Guest Profile.png",
  },
  {
    id: "interactive-map",
    icon: Map,
    title: "INTERACTIVE LIVE MAP EXPLORER",
    subtitle: "Pinpoint Nearby Fitness Hubs",
    description:
      "Visual map interface displaying live gym markers around you. Tap markers to preview mini gym cards, get instant directions, and see active member counts.",
    screen: "/assets/app/others/Explore.png",
  },
  {
    id: "gym-details",
    icon: Dumbbell,
    title: "DETAILED GYM AMENITIES & INFO",
    subtitle: "Photos, Timings & Features",
    description:
      "Inspect gym photo galleries, operating hours, contact details, user ratings, and verified amenities like sauna, cardio decks, free weights, and parking.",
    screen: "/assets/app/guest/Gym Detail as guest.png",
  },
  {
    id: "temporary-chat",
    icon: MessageCircle,
    title: "LIGHTWEIGHT AUTO-EXPIRING CHAT",
    subtitle: "Safety & Privacy First",
    description:
      "Coordinates workouts cleanly without exposing personal phone numbers or social media. Conversations auto-expire after workout completion for maximum safety.",
    screen: "/assets/app/chats/Active Chat UI.png",
  },
  {
    id: "favorites",
    icon: Heart,
    title: "SAVED FAVORITE GYMS",
    subtitle: "Instant Quick Access",
    description:
      "Save your top gym hubs to your profile for quick navigation, instant partner updates, and fast check-ins whenever you get ready to lift.",
    screen: "/assets/app/others/Fav Screen.png",
  },
];

export default function AppFeaturesShowcase() {
  const [activeFeatureId, setActiveFeatureId] = useState("geolocation");
  const currentFeature = FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section id="features" className="py-20 sm:py-28 bg-[var(--color-surface)]/40 border-y border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Layers className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            EXPLORE <span className="text-[var(--color-accent)]">APP FEATURES</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Click on any feature below to inspect live mobile app screens and capabilities in action.
          </p>
        </div>

        {/* Side-by-Side Interactive Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Feature Buttons */}
          <div className="lg:col-span-7 space-y-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isActive = feature.id === activeFeatureId;

              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeatureId(feature.id)}
                  className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-[var(--color-surface)] border-[var(--color-accent)] shadow-xl shadow-[var(--color-accent)]/10 scale-[1.01]"
                      : "bg-[var(--color-bg-primary)]/60 border-[var(--color-border)] hover:border-[var(--color-accent)]/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold flex-shrink-0 transition-all ${
                        isActive
                          ? "bg-[var(--color-accent)] text-black"
                          : "bg-[var(--color-surface)] text-[var(--color-text-muted)]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-grow space-y-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-bebas text-xl sm:text-2xl tracking-wide ${
                            isActive ? "text-[var(--color-foreground)]" : "text-[var(--color-text-muted)]"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform ${
                            isActive ? "text-[var(--color-accent)] translate-x-1" : "text-[var(--color-text-muted)]/50"
                          }`}
                        />
                      </div>

                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed pt-2"
                        >
                          {feature.description}
                        </motion.p>
                      )}
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
                key={activeFeatureId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="w-full flex justify-center items-center"
              >
                <PhoneMockup
                  src={currentFeature.screen}
                  alt={currentFeature.title}
                  badge={
                    <div className="px-5 py-2.5 rounded-full bg-[var(--color-surface)]/95 backdrop-blur-xl border border-[var(--color-border)] shadow-xl text-center">
                      <div className="text-xs font-bold text-[var(--color-foreground)]">{currentFeature.title}</div>
                      <div className="text-[10px] text-[var(--color-accent)] uppercase tracking-wider">{currentFeature.subtitle}</div>
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
