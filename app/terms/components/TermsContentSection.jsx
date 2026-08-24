"use client";

import { motion } from "framer-motion";
import PrintButton from "@/components/PrintButton";
import {
  FileText,
  ShieldAlert,
  CreditCard,
  Scale,
  Lock,
  RefreshCw,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

export const TERMS_SECTIONS = [
  { id: "legal-agreement", title: "1. Legal Agreement", icon: FileText },
  { id: "definitions", title: "2. Definitions", icon: Scale },
  { id: "registration", title: "3. Account Registration", icon: RefreshCw },
  { id: "warranty-disclaimer", title: "4. Warranty & Liability", icon: ShieldAlert },
  { id: "spotlight-refunds", title: "5. Spotlight Refunds", icon: CreditCard },
  { id: "payments-invoices", title: "6. Payments & Invoices", icon: CreditCard },
  { id: "fraud-monitoring", title: "7. Fraud Monitoring", icon: AlertTriangle },
  { id: "general-terms", title: "8. General Compliance", icon: Lock },
];

export default function TermsContentSection() {
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
              <span className="text-xs text-[var(--color-text-muted)] font-medium">Original Posting: June 14, 2013</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-foreground)] font-semibold">
              Governing All Website Sub-Domains & Mobile Applications
            </p>
          </div>
          
          <PrintButton label="Print Terms" />
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
                {TERMS_SECTIONS.map((section) => {
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

            {/* Legal Support Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[var(--color-accent)] tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Legal Support Desk</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Questions regarding invoice processing, spotlight purchases, or member account policies?
              </p>
              <a
                href="mailto:legal@gymatch.com"
                className="inline-block text-xs font-bold text-[var(--color-accent)] hover:underline"
              >
                legal@gymatch.com →
              </a>
            </motion.div>
          </aside>

          {/* Clause Content Cards with scroll-mt-28 (lg:col-span-8) */}
          <main className="lg:col-span-8 space-y-8 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            
            {/* Section 1 */}
            <motion.section
              id="legal-agreement"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">1. LEGAL AGREEMENT & AMENDMENTS</h2>
              </div>
              <p>
                This web page represents a legal document that serves as our Terms and Conditions and governs the legal terms of our website, http://www.GYMatch.com, sub-domains, and associated web-based and mobile applications (collectively, &ldquo;Website&rdquo;), owned and operated by GYMatch.
              </p>
              <p>
                These Terms and Conditions, along with our Privacy Policy, mobile license agreements, and posted guidelines (&ldquo;Legal Terms&rdquo;), constitute the entire agreement between you and GYMatch. By using our Website, you agree to fully comply with and be bound by our Legal Terms. If you do not accept these terms, you must immediately discontinue use of our Website and mobile app.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              id="definitions"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">2. DEFINITIONS</h2>
              </div>
              <p>
                The terms &ldquo;us&rdquo; or &ldquo;we&rdquo; or &ldquo;our&rdquo; refers to GYMatch. A &ldquo;Visitor&rdquo; is someone who browses our Website without registering. A &ldquo;Member&rdquo; is an individual who has completed registration with us to use our Service. Our &ldquo;Service&rdquo; represents the functionality and spotter discovery tools offered through our Website and apps to Members. All graphics, text, audio, video, and data offered are collectively known as &ldquo;Content&rdquo;.
              </p>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              id="registration"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">3. ACCOUNT REGISTRATION INFORMATION</h2>
              </div>
              <p>
                To complete the sign-up process, you must provide your full legal name, current address, a valid email address, member name, and confirm that you are 18 years of age or older. You are responsible for keeping your password secure and for all activities under your account. Transmitting worms, viruses, or destructive code is strictly prohibited and will result in instant account termination.
              </p>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              id="warranty-disclaimer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">4. WARRANTY DISCLAIMER & LIMITATION OF LIABILITY</h2>
              </div>
              <p>
                We will not be liable for indirect, special, or consequential damages, or any loss of revenue, profits, or data arising in connection with this Agreement. This site and its services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. GYMatch makes no express or implied warranties or representations regarding fitness, merchantability, or uninterrupted service operation.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              id="spotlight-refunds"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">5. SPOTLIGHT REFUNDS</h2>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-foreground)] font-semibold text-xs">
                IMPORTANT: By ordering or using the GYMatch Spotlight feature, you understand and agree that we offer NO REFUNDS under any circumstances. All purchases for Spotlight placement are final.
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              id="payments-invoices"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">6. PAYMENTS AND INVOICES</h2>
              </div>
              <p>
                GYMatch reserves sole discretion to specify payment terms. Unless credit terms are agreed upon, payment must be received via Credit Card, PayPal, or Wire Transfer prior to order acceptance. Invoices are due within 15 days of the invoice date. Undisputed overdue balances incur a late charge penalty of 1% per month.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              id="fraud-monitoring"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">7. FRAUD MONITORING</h2>
              </div>
              <p>
                Fraudulent activities are actively monitored. If fraud or fake profile impersonation is detected, GYMatch shall resort to all remedies available by law, and the offending user shall be responsible for all costs and legal fees arising from such activities.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              id="general-terms"
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
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">8. GENERAL COMPLIANCE & GOVERNING LAW</h2>
              </div>
              <p>
                Our Legal Terms shall be treated as performed in California, United States, and governed by California law without regard to conflict of law principles. Any legal action by you must be instituted within one (1) year after the cause of action arose or be forever barred.
              </p>
            </motion.section>

          </main>

        </div>

      </div>
    </section>
  );
}
