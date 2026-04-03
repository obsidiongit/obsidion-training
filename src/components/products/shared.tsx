"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Quote,
  MessageCircleQuestion,
} from "lucide-react";

/* ─── animation variants ─── */

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

/* ─── SectionLabel ─── */

export function SectionLabel({
  barClass,
  textClass,
  children,
}: {
  barClass: string;
  textClass: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
      <div className={`h-1 w-6 rounded-full ${barClass}`} />
      <h2
        className={`text-xs font-semibold uppercase tracking-wider ${textClass}`}
      >
        {children}
      </h2>
    </motion.div>
  );
}

/* ─── DiagnosticQuestion ─── */

export function DiagnosticQuestion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 sm:px-8 sm:py-6 mt-2"
    >
      <div className="absolute -top-3 left-6">
        <div className="flex h-6 items-center gap-1.5 rounded-full bg-accent px-3">
          <MessageCircleQuestion size={12} className="text-white" />
          <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
            Discovery Question
          </span>
        </div>
      </div>
      <p className="text-base sm:text-lg italic leading-relaxed text-foreground pt-1">
        {children}
      </p>
    </motion.div>
  );
}

/* ─── PitchQuote ─── */

export function PitchQuote({
  children,
  label = "Pitch Framing",
  variant = "accent",
}: {
  children: React.ReactNode;
  label?: string;
  variant?: "accent" | "emerald" | "purple";
}) {
  const styles = {
    accent: {
      bg: "bg-accent/[0.04] border-accent/10",
      icon: "text-accent/30",
      label: "text-accent",
    },
    emerald: {
      bg: "bg-emerald-accent/[0.04] border-emerald-accent/10",
      icon: "text-emerald-accent/30",
      label: "text-emerald-accent",
    },
    purple: {
      bg: "bg-purple-accent/[0.04] border-purple-accent/10",
      icon: "text-purple-accent/30",
      label: "text-purple-accent",
    },
  };

  const s = styles[variant];

  return (
    <motion.div
      variants={fadeUp}
      className={`relative rounded-xl border px-5 py-4 ${s.bg}`}
    >
      <Quote size={16} className={`absolute top-3 left-3 ${s.icon}`} />
      <p className="text-sm italic leading-relaxed text-foreground pl-5">
        &ldquo;{children}&rdquo;
      </p>
      <p
        className={`text-[11px] font-semibold uppercase tracking-wider mt-2 pl-5 ${s.label}`}
      >
        {label}
      </p>
    </motion.div>
  );
}

/* ─── FAQ Accordion ─── */

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            variants={fadeUp}
            className="rounded-xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors cursor-pointer"
            >
              <span className="text-sm font-semibold text-foreground pr-4">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown size={16} className="text-muted-foreground" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Product Page Hero ─── */

export function ProductPageHero({
  backHref,
  backLabel,
  eyebrow,
  title,
  description,
}: {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="relative overflow-hidden border-b bg-muted/20">
      <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-60" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-accent/[0.04] blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-10 sm:pb-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={backHref}
            className="text-sm text-muted-foreground hover:text-accent transition-colors mb-6 inline-flex items-center gap-1.5"
          >
            <ArrowLeft size={14} />
            {backLabel}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-sm font-semibold tracking-wider text-accent uppercase mb-3"
        >
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-3"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="mt-6 h-px w-24 bg-gradient-to-r from-accent via-accent/60 to-transparent origin-left"
        />
      </div>
    </header>
  );
}

/* ─── Product Page Footer ─── */

export function ProductPageFooter() {
  return (
    <footer className="border-t border-border-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground-subtle">
          Obsidion Training Hub &middot; Product Knowledge
        </p>
        <img
          src="/logos/logo.png"
          alt="Obsidion"
          className="h-6 w-auto opacity-30"
        />
      </div>
    </footer>
  );
}

/* ─── Stat Highlight ─── */

export function StatHighlight({
  value,
  label,
  colorClass = "text-accent",
}: {
  value: string;
  label: string;
  colorClass?: string;
}) {
  return (
    <motion.div variants={scaleIn} className="text-center">
      <div className={`text-3xl sm:text-4xl font-black tracking-tight ${colorClass}`}>
        {value}
      </div>
      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">
        {label}
      </div>
    </motion.div>
  );
}
