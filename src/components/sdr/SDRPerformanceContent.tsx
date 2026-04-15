"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import FlowChart from "@/components/ui/FlowChart";
import {
  Target,
  TrendingUp,
  Calendar,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const CORE_METRIC = [
  { level: "Minimum", pace: "1", what: "You're doing the job. Barely. This keeps you employed but won't make you real money." },
  { level: "Solid", pace: "2", what: "You're performing. Bonuses are meaningful. Pipeline is healthy." },
  { level: "Strong", pace: "3", what: "This is the target. You're a reliable producer and your comp reflects it." },
  { level: "High Performer", pace: "4-6", what: "You're outperforming. Leadership notices. AE conversations start happening." },
] as const;

const WEEKLY_TARGETS = [
  { metric: "Appointments booked", min: "5", solid: "10", strong: "15" },
  { metric: "Appointments held (showed up)", min: "4", solid: "8", strong: "12+" },
  { metric: "Show rate", min: "70%+", solid: "80%+", strong: "85%+" },
] as const;

const RAMP = [
  {
    phase: "Days 1-30",
    title: "Learn the System, Start Outreach",
    goal: "Book your first appointments. Target 1/day by end of month.",
    items: [
      "Complete all training sections",
      "Set up ambassador profiles",
      "Start making outreach calls by end of week 1",
      "Shadow AE calls when possible",
      "Focus on learning the rhythm, not perfecting every call",
    ],
  },
  {
    phase: "Days 31-60",
    title: "Build Consistency",
    goal: "Consistent 1-2 appointments/day with 70%+ show rate.",
    items: [
      "Full outreach activity every day — calls, emails, social",
      "Booking 1-2 appointments per day consistently",
      "CRM is clean — every touch logged",
      "Start tracking which channels and talk tracks work best",
    ],
  },
  {
    phase: "Days 61-90",
    title: "Full Production",
    goal: "Consistent 2-3 appointments/day. Below 1/day at day 90 is a conversation about fit.",
    items: [
      "Hitting 2-3 appointments per day",
      "Show rate above 75%",
      "AEs giving positive feedback on quality",
      "Personal rhythm established — best call times, channels, openers",
      "Pipeline of callbacks and follow-ups is self-sustaining",
    ],
  },
] as const;

const DIAGNOSTIC = [
  { situation: "High calls, low conversations", meaning: "Call times or list quality need work", fix: "Try different times, check list freshness" },
  { situation: "High conversations, low bookings", meaning: "Qualifying or booking ask needs work", fix: "Review scripts and objection handling" },
  { situation: "High bookings, high no-shows", meaning: "Qualifying is loose or reminders aren't going out", fix: "Tighten BANT, send day-before reminders" },
  { situation: "High bookings, low AE close rate", meaning: "Appointments aren't qualified well enough", fix: "Review BANT, get feedback from AEs" },
  { situation: "Low everything", meaning: "Volume is the problem", fix: "More calls. Period." },
] as const;

/* ─── component ─── */

export default function SDRPerformanceContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Performance"
        title="Performance Expectations"
        description="1-3 qualified appointments per day. That's the job. Everything else — calls, emails, social, CRM — is the engine that gets you there."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Core Metric ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            The Core Metric — Appointments Per Day
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_METRIC.map((item) => (
              <motion.div
                key={item.level}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="text-3xl font-black text-accent mb-1">{item.pace}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{item.level}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.what}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Weekly Targets ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Weekly Targets
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Metric</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Minimum</th>
                    <th className="text-center px-4 py-3 font-semibold text-emerald-accent text-xs uppercase tracking-wider">Solid</th>
                    <th className="text-center px-4 py-3 font-semibold text-accent text-xs uppercase tracking-wider">Strong</th>
                  </tr>
                </thead>
                <tbody>
                  {WEEKLY_TARGETS.map((row) => (
                    <tr key={row.metric} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">{row.metric}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground">{row.min}</td>
                      <td className="px-4 py-3 text-center font-semibold text-emerald-accent">{row.solid}</td>
                      <td className="px-4 py-3 text-center font-bold text-accent">{row.strong}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Ramp Schedule ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Ramp Schedule — 30 / 60 / 90 Days
          </SectionLabel>

          <div className="space-y-5">
            {RAMP.map((phase, i) => (
              <motion.div
                key={phase.phase}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent font-black text-sm">
                    {(i + 1) * 30}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{phase.phase}: {phase.title}</h4>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="rounded-lg bg-purple-accent/[0.04] border border-purple-accent/15 px-4 py-3">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Goal:</span> {phase.goal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Diagnostic Table ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            What the Numbers Tell You
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Situation</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">What It Means</th>
                    <th className="text-left px-5 py-3 font-semibold text-amber-accent text-xs uppercase tracking-wider">What to Do</th>
                  </tr>
                </thead>
                <tbody>
                  {DIAGNOSTIC.map((row) => (
                    <tr key={row.situation} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">{row.situation}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.meaning}</td>
                      <td className="px-5 py-3 text-foreground font-medium">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="performance"
            upNext={[
              { slug: "accountability", title: "Accountability" },
              { slug: "meetings", title: "Meeting Cadence" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Performance</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
