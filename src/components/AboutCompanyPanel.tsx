"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import FounderMessage from "./FounderMessage";

export default function AboutCompanyPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] as const }}
      className="relative h-full"
    >
      {/* Outer glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/10 via-purple-accent/5 to-transparent opacity-60" />

      <div className="relative flex h-full flex-col rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Building2 size={24} strokeWidth={1.8} />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            All Roles
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-3">
          About Obsidion
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Obsidion is a full-service digital infrastructure provider — websites,
          local SEO, remarketing, and branded mobile apps for businesses across
          multiple verticals.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-5">
          Average <span className="font-semibold text-foreground">7-day delivery</span> from
          kickoff to launch. One system, no vendor handoffs.
        </p>

        {/* Founder audio player */}
        <div className="mb-5">
          <FounderMessage />
        </div>

        {/* Read more link */}
        <div className="mt-auto">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
          >
            Learn more about us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
