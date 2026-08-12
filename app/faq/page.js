import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import FaqAccordionSection from "./components/FaqAccordionSection";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | GYMatch SaaS App",
  description: "Find answers to common questions about GYMatch app features, spotters, spotlight packages, and referral points.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        badgeText="Got Questions?"
        badgeIcon={<HelpCircle className="w-4 h-4" />}
        title={
          <>
            FREQUENTLY ASKED <br />
            <span className="text-[var(--color-accent)]">QUESTIONS</span>
          </>
        }
        description="Everything you need to know about GYMatch, spotter matching, GPS gym discovery, and spotlight features."
        bgImage="/assets/img/group-of-people-training-in-gym-6FYJXB3.jpg"
        showStoreButtons={false}
      />

      {/* Accordion Section */}
      <FaqAccordionSection />

      {/* Pre-Footer CTA */}
      <PageCta />
    </div>
  );
}
