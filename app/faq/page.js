import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import FaqAccordionSection from "./components/FaqAccordionSection";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | GYMatch Infrastructure",
  description:
    "Get the insights you need on GYMatch infrastructure, partner synchronization, facility discovery, and professional spotlight features.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        badgeText="THE GYMATCH PROTOCOL"
        badgeIcon={<HelpCircle className="w-4 h-4" />}
        title={
          <>
            EVERYTHING YOU NEED{" "}
            <span className="text-[var(--color-accent)]">TO KNOW</span>
          </>
        }
        description="Get the insights you need on GYMatch infrastructure, partner synchronization, facility discovery, and professional spotlight features."
        bgImage="/assets/img/page-title-faq.webp"
        showStoreButtons={false}
      />

      {/* Accordion Section */}
      <FaqAccordionSection />

      {/* Pre-Footer CTA */}
      <PageCta />
    </div>
  );
}
