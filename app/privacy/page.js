import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import PrivacyContentSection from "./components/PrivacyContentSection";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | GYMatch SaaS App",
  description: "Learn how GYMatch collects, protects, and handles your personal data, location preferences, and workout profile information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        badgeText="Legal & Data Protection"
        badgeIcon={<ShieldCheck className="w-4 h-4" />}
        title={
          <>
            PRIVACY <br />
            <span className="text-[var(--color-accent)]">POLICY</span>
          </>
        }
        description="Your privacy is paramount. Read our comprehensive guidelines on data security, location usage, and personal profile protection."
        bgImage="/assets/img/strong-athlete-with-dumbbells-training-in-gym.jpg"
        showStoreButtons={false}
      />

      {/* Privacy Content Section */}
      <PrivacyContentSection />

      {/* Pre-Footer CTA */}
      <PageCta />
    </div>
  );
}
