"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Light/Dark Theme"
      className={`relative inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] cursor-pointer shadow-md ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-[#D9FF00] transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-800 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
