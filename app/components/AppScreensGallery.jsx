"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Sparkles,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import styles from "./AppScreensGallery.module.css";

/* ── Screen Data ─────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: "all", label: "The Full Experience" },
  { id: "discovery", label: "Discovery & Proximity" },
  { id: "matching", label: "Partner Synchronization" },
  { id: "messaging", label: "Secure Coordination" },
];

const SCREENS = [
  {
    id: 1,
    title: "Home Gym Feed",
    category: "discovery",
    src: "/assets/app/others/HOME.png",
    tag: "Main Screen",
    desc: "Discover nearby gyms, filter by activity, and view live active partner counts around your location.",
  },
  {
    id: 2,
    title: "Gym Details & Amenities",
    category: "discovery",
    src: "/assets/app/guest/Gym Detail as guest.png",
    tag: "Amenities",
    desc: "View gym photos, operating hours, equipment list, and active spotters currently at this venue.",
  },
  {
    id: 3,
    title: "Interactive Live Map",
    category: "discovery",
    src: "/assets/app/others/Explore.png",
    tag: "GPS Map",
    desc: "Explore gyms and active training partners visually pinned on an interactive real-time map.",
  },
  {
    id: 4,
    title: "Active Spotter Profile",
    category: "matching",
    src: "/assets/app/guest/Guest Profile.png",
    tag: "Spotter Feed",
    desc: "Inspect user fitness disciplines, goals, weight classes, and active workout status.",
  },
  {
    id: 5,
    title: "Search & Filter Engine",
    category: "discovery",
    src: "/assets/app/others/Filter.png",
    tag: "Smart Filter",
    desc: "Filter by distance radius, gym category, open hours, equipment amenities, and workout styles.",
  },
  {
    id: 6,
    title: "Lightweight Chat UI",
    category: "messaging",
    src: "/assets/app/chats/Active Chat UI.png",
    tag: "Auto-Expiring",
    desc: "Privacy-first direct chat to coordinate workout times safely without exchanging personal phone numbers.",
  },
  {
    id: 7,
    title: "Favorite Gym Hubs",
    category: "matching",
    src: "/assets/app/others/Fav Screen.png",
    tag: "Saved Hubs",
    desc: "Bookmark favorite training hubs and check who is actively training there today.",
  },
  {
    id: 8,
    title: "Guest Conversion Flow",
    category: "messaging",
    src: "/assets/app/guest/guest to user Conversion Flow.png",
    tag: "Onboarding",
    desc: "Quick onboarding flow allowing new members to unlock full community partner matching features.",
  },
];

/* Auto-scroll speed: pixels per frame tick (~60fps) */
const AUTO_SCROLL_SPEED = 0.6;

/* ── Inline Phone Frame (aspect-ratio based, never clips) ── */
function ScreenPhone({
  src,
  alt,
  priority = false,
  contain = false,
  isModal = false,
}) {
  return (
    <div
      className={`relative ${isModal ? "h-[70vh] sm:h-[76vh] md:h-[80vh] max-h-[720px] aspect-[9/19.5]" : "w-full aspect-[9/19.5]"} rounded-[26px] sm:rounded-[36px] border-[5px] sm:border-[7px] border-[#1a1a1e] bg-black shadow-2xl shadow-black/60 ring-1 ring-white/10 overflow-hidden shrink-0`}
    >
      {/* Dynamic Island Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[16px] w-[80px] bg-black rounded-b-[12px] z-30 flex items-center justify-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#111] ring-1 ring-white/10"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#0a192f]/50 ring-1 ring-blue-500/20"></div>
      </div>
      {/* Screen Image */}
      <div className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[26px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={
            contain
              ? "(max-width: 640px) 240px, 320px"
              : "(max-width: 640px) 260px, (max-width: 1024px) 240px, 260px"
          }
          className={`${contain ? "object-contain" : "object-cover object-top"}`}
        />
        {/* Glass Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────────────── */
export default function AppScreensGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedScreen, setSelectedScreen] = useState(null);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef(null);

  /* Close Lightbox on ESC key */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedScreen(null);
    };
    if (selectedScreen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedScreen]);

  /* Track scroll position to show/hide nav arrows */
  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, [activeCategory, updateScrollButtons]);

  /* ── Smooth Auto-Scroll Animation Loop ─────────────────────────── */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      /* Pause auto-scroll when user hovers, lightbox is open, or not visible */
      if (!isHovered && !selectedScreen) {
        el.scrollLeft += AUTO_SCROLL_SPEED;

        /* Loop: when we reach the end, smoothly reset to the start */
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered, selectedScreen, activeCategory]);

  /* Scroll by one card width (manual navigation) */
  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector("[data-screen-card]")?.offsetWidth || 340;
    el.scrollBy({ left: direction * (cardWidth + 32), behavior: "smooth" });
  };

  const filteredScreens =
    activeCategory === "all"
      ? SCREENS
      : SCREENS.filter((s) => s.category === activeCategory);

  return (
    <section
      id="screens"
      className="py-20 sm:py-28 relative overflow-hidden bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-accent)]/5 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Smartphone className="w-4 h-4" />
            <span>Interactive App Showcase</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide leading-tight">
            INTUITIVE INTERFACE{" "}
            <span className="text-[var(--color-accent)]">DESIGN</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Experience the Gymatch mobile ecosystem. Our interface is engineered
            for speed, clarity, and seamless navigation across every core
            training workflow.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`${styles.tabButton} ${activeCategory === cat.id ? styles.tabButtonActive : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Horizontal Carousel (full-bleed, auto-scrolling) ──────── */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Navigation Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll(-1)}
            className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] shadow-xl transition-all duration-300 cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Navigation Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll(1)}
            className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] shadow-xl transition-all duration-300 cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none"></div>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth px-8 sm:px-16 lg:px-24 pb-6 pt-2 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {filteredScreens.map((screen) => (
            <div
              key={screen.id}
              data-screen-card
              className="group flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] snap-center"
            >
              {/* Card Container */}
              <div className="rounded-3xl bg-[var(--color-surface)]/80 backdrop-blur-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 transition-all duration-500 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 flex flex-col h-full">
                {/* Badge & Title Above Phone */}
                <div className="space-y-2 mb-5 text-center shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-[10px] font-extrabold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>{screen.tag}</span>
                  </span>
                  <h3 className="font-bebas text-xl sm:text-2xl text-[var(--color-foreground)] tracking-wide group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                    {screen.title}
                  </h3>
                </div>

                {/* Phone Mockup – Uses Aspect Ratio, Never Clips */}
                <div
                  className="relative cursor-pointer flex justify-center items-center my-auto"
                  onClick={() => setSelectedScreen(screen)}
                >
                  <div className="w-[220px] sm:w-[240px] transition-transform duration-500 group-hover:scale-[1.02]">
                    <ScreenPhone src={screen.src} alt={screen.title} />
                  </div>

                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px] flex items-center justify-center pointer-events-none">
                    <div className="p-3 rounded-full bg-[var(--color-accent)] text-black font-bold shadow-2xl flex items-center gap-2 text-xs uppercase tracking-wider">
                      <ZoomIn className="w-4 h-4" />
                      <span>View</span>
                    </div>
                  </div>
                </div>

                {/* Description Below Phone */}
                <p className="text-[11px] text-[var(--color-text-muted)] text-center leading-relaxed mt-5 pt-4 border-t border-[var(--color-border)] shrink-0">
                  {screen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {filteredScreens.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => {
                const el = scrollRef.current;
                const card = el?.querySelectorAll("[data-screen-card]")[idx];
                card?.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
              className="w-2 h-2 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label={`Go to ${screen.title}`}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox Popup Modal (Full Image Visible, Fit to Viewport) ──── */}
      <AnimatePresence>
        {selectedScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/92 backdrop-blur-xl overflow-hidden"
            onClick={() => setSelectedScreen(null)}
          >
            {/* Fixed Close Button – Always 100% Visible at Top Right */}
            <button
              onClick={() => setSelectedScreen(null)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 text-white hover:text-[var(--color-accent)] hover:bg-white/20 transition-all border border-white/20 z-50 shadow-2xl cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[96vh] flex flex-col items-center justify-center gap-2.5 my-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full-Size Phone – Height bounded so top and bottom fit 100% */}
              <ScreenPhone
                src={selectedScreen.src}
                alt={selectedScreen.title}
                priority
                contain
                isModal
              />

              {/* Info Bar */}
              <div className="text-center space-y-0.5 bg-[var(--color-surface)] border border-[var(--color-border)] px-6 py-2 rounded-2xl max-w-[280px] w-full shadow-xl">
                <div className="text-[10px] font-extrabold uppercase text-[var(--color-accent)] tracking-wider">
                  {selectedScreen.tag}
                </div>
                <h4 className="font-bebas text-xl text-[var(--color-foreground)] leading-none">
                  {selectedScreen.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
