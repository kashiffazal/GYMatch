"use client";

import PageHero from "@/components/PageHero";
import { Sparkles } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <PageHero
      badgeText="About GYMatch Platform"
      badgeIcon={Sparkles}
      title={
        <>
          CONNECT, GET FIT AND <br />
          <span className="text-[var(--color-accent)]">HAVE FUN!</span>
        </>
      }
      description="GYMatch is your Global Connection to the World of Fitness. We bridge millions of people to the international fitness community, inviting members to benefit by partnering with like-minded fitness goers worldwide."
      bgImage="/assets/img/discover-your-own-strengths.webp"
      showStoreButtons={true}
    />
  );
}
