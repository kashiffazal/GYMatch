"use client";

import PageCta from "@/components/PageCta";
import { Sparkles, Globe, Users, ShieldCheck } from "lucide-react";

const ABOUT_METRICS = [
  { icon: Globe, text: "50K+ Fitness Hubs" },
  { icon: Users, text: "30,000+ Active Spotters" },
  { icon: ShieldCheck, text: "Free iOS & Android" },
];

export default function AboutCtaSection() {
  return (
    <PageCta
      badgeText="Join The Movement"
      badgeIcon={Sparkles}
      title={
        <>
          JOIN THE GLOBAL{" "}
          <span className="text-[var(--color-accent)]">FITNESS MOVEMENT</span>
        </>
      }
      description="Connect with 30,000+ spotters and explore 50K+ fitness hubs across the globe. Download GYMatch today and start discovering gyms and training partners worldwide."
      bgImage="/assets/img/beautiful-fit-people-working-out-in-gym-together-6FHVDS2-1.webp"
      metricPills={ABOUT_METRICS}
      showStoreButtons={true}
    />
  );
}
