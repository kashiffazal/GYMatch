import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import PrivacyContentSection from "./components/PrivacyContentSection";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Architecture | GYMatch Data Protection Protocols",
  description:
    "Your privacy is a foundational component of the GYMatch infrastructure. This policy outlines our protocols for data security, location management, and the protection of your personal profile.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        badgeText="LEGAL & DATA PROTECTION"
        badgeIcon={<ShieldCheck className="w-4 h-4" />}
        title={
          <>
            PRIVACY{" "}
            <span className="text-[var(--color-accent)]">ARCHITECTURE</span>
          </>
        }
        description="Your privacy is a foundational component of the GYMatch infrastructure. This policy outlines our protocols for data security, location management, and the protection of your personal profile."
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
