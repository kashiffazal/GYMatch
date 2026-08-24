"use client";

import { motion } from "framer-motion";
import PrintButton from "@/components/PrintButton";
import {
  ShieldCheck,
  Database,
  Eye,
  Share2,
  Cookie,
  UserCheck,
  Lock,
  Bell,
} from "lucide-react";

export const PRIVACY_SECTIONS = [
  { id: "overview", title: "1. Overview & Scope", icon: ShieldCheck },
  { id: "data-collection", title: "2. Data Collection", icon: Database },
  { id: "operational-usage", title: "3. Operational Data Usage", icon: Eye },
  { id: "third-party-sharing", title: "4. Third-Party Data Integrity", icon: Share2 },
  { id: "tracking-authentication", title: "5. Tracking & Session Authentication", icon: Cookie },
  { id: "user-rights", title: "6. User Privacy Rights", icon: UserCheck },
  { id: "security-retention", title: "7. Security & Retention", icon: Lock },
  { id: "policy-evolution", title: "8. Policy Evolution & Contact", icon: Bell },
];

export default function PrivacyContentSection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Document Header & Quick Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] mb-12 shadow-lg"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-[10px] font-bold uppercase tracking-widest">
                Active Document
              </span>
              <span className="text-xs text-[var(--color-text-muted)] font-medium">Last Updated: May 2024</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-foreground)] font-semibold">
              Governing Gymatch Mobile App & Web Platform Services Worldwide
            </p>
          </div>
          
          <PrintButton label="Print Policy" />
        </motion.div>

        {/* 2-Column Grid Layout: Sticky TOC + Clause Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sticky Table-of-Contents Navigation (lg:col-span-4) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                <h3 className="font-bebas text-2xl text-[var(--color-foreground)] tracking-wide">
                  DOCUMENT SECTIONS
                </h3>
                <span className="text-[10px] font-bold uppercase text-[var(--color-accent)]">Quick Jump</span>
              </div>
              <nav className="flex flex-col gap-1.5 text-xs font-semibold">
                {PRIVACY_SECTIONS.map((section) => {
                  const Icon = section.icon;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-primary)] border border-transparent hover:border-[var(--color-border)] transition-all"
                    >
                      <Icon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </motion.div>

            {/* Data Officer Support Contact Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[var(--color-accent)] tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Data Protection Support</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Have questions about your personal data or wish to submit a data deletion request?
              </p>
              <a
                href="mailto:privacy@gymatch.com"
                className="inline-block text-xs font-bold text-[var(--color-accent)] hover:underline"
              >
                privacy@gymatch.com →
              </a>
            </motion.div>
          </aside>

          {/* Clause Content Cards with scroll-mt-28 (lg:col-span-8) */}
          <main className="lg:col-span-8 space-y-8 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            
            {/* Section 1 */}
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">1. OVERVIEW & SCOPE</h2>
              </div>
              <p>
                At Gymatch, your privacy is treated with the same rigor as our platform security. This policy details how Gymatch Inc. (&ldquo;Gymatch,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, processes, stores, and safeguards personal information across our web interfaces and mobile applications. By creating an account or utilizing our real-time discovery and synchronization tools, you consent to the data practices described herein.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              id="data-collection"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">2. DATA COLLECTION</h2>
              </div>
              <p>
                We collect specific data points to optimize your training experience and ensure the integrity of our network. These include:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">• Account Registration:</strong>{" "}Legal name, verified email, username, and age confirmation (18+).
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">• Performance Profile:</strong>{" "}Training goals, facility preferences, discipline, and bio metrics.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">• Proximity Data:</strong>{" "}Precise GPS coordinates (when enabled) to facilitate real-time facility discovery and partner synchronization.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">• System Telemetry:</strong>{" "}IP address, device specifications, operating system version, and application usage patterns.
                </li>
              </ul>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              id="operational-usage"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">3. OPERATIONAL DATA USAGE</h2>
              </div>
              <p>
                Your information is processed exclusively to support platform operations and enhance your user experience:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">• Proximity Synchronization:</strong>{" "}To provide location-based facility recommendations and partner discovery.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">• Commercial Operations:</strong>{" "}To manage &ldquo;Spotlight&rdquo; promotions, reward points, and premium service delivery.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">• Security & Integrity:</strong>{" "}To prevent fraudulent account creation, mitigate abusive behavior, and ensure community safety.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">• Platform Communication:</strong>{" "}To transmit critical service updates, security alerts, and support notifications.
                </li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              id="third-party-sharing"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">4. THIRD-PARTY DATA INTEGRITY</h2>
              </div>
              <p>
                Gymatch does not monetize your personal contact information through third-party advertising. Data sharing is strictly limited to:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">• Service Providers:</strong>{" "}Trusted vendors required for payment processing (e.g., Stripe/PayPal), push notification services, and secure cloud hosting infrastructure.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">• Legal Compliance:</strong>{" "}When compelled by lawful court order, law enforcement investigation, or to enforce our Terms of Service.
                </li>
              </ul>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              id="tracking-authentication"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">5. TRACKING & SESSION AUTHENTICATION</h2>
              </div>
              <p>
                Our platform utilizes essential session cookies and local storage to maintain your authentication state, optimize interface preferences (e.g., Dark/Light mode), and analyze aggregated traffic metrics. You may manage these preferences via your browser settings.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              id="user-rights"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">6. USER PRIVACY RIGHTS</h2>
              </div>
              <p>
                In accordance with global standards including GDPR and CCPA, you retain absolute authority over your data. You possess the right to access, export, rectify, or permanently purge your profile and associated history at any time via your account settings or by submitting a request to <a href="mailto:privacy@gymatch.com" className="text-[var(--color-accent)] underline hover:opacity-80 transition-opacity">privacy@gymatch.com</a>.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              id="security-retention"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">7. SECURITY & RETENTION</h2>
              </div>
              <p>
                We employ industry-standard SSL/TLS encryption, hardened server architecture, and granular access controls to prevent unauthorized data exposure. User credentials are protected via cryptographic hashing. Personal data is retained only for the duration of your active membership or as required by financial and legal auditing mandates.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              id="policy-evolution"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Bell className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">8. POLICY EVOLUTION & CONTACT</h2>
              </div>
              <p>
                We may periodically update this Privacy Policy to reflect changes in our infrastructure or regulatory requirements. Continued use of the Gymatch platform following such updates constitutes your acceptance of the revised terms. For inquiries, contact us at <a href="mailto:contact@gymatch.com" className="text-[var(--color-accent)] underline hover:opacity-80 transition-opacity">contact@gymatch.com</a> or via physical mail to Gymatch Inc., Los Angeles, CA.
              </p>
            </motion.section>

          </main>

        </div>

      </div>
    </section>
  );
}
