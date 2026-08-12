"use client";

import { Printer } from "lucide-react";

export default function PrintButton({ label = "Print Document" }) {
  const handlePrint = () => {
    // Force all animated sections to full opacity and transform before print
    const sections = document.querySelectorAll("section, article, main, [id]");
    sections.forEach((sec) => {
      sec.style.opacity = "1";
      sec.style.transform = "none";
    });
    setTimeout(() => {
      window.print();
    }, 50);
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all cursor-pointer shadow-sm active:scale-95 no-print"
    >
      <Printer className="w-4 h-4 text-[var(--color-accent)]" />
      <span>{label}</span>
    </button>
  );
}
