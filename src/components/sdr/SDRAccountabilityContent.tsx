"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Activity,
  Database,
  Lightbulb,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Shield,
  Calendar,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const SUCCESS_ITEMS = [
  {
    category: "Activity & Output",
    icon: Activity,
    items: [
      "Hitting your daily appointment target. 1-3 per day is the standard, not a stretch goal.",
      "Consistent outreach activity. Calls, emails, and social touches — every day.",
      "High show rate. Send reminders, qualify properly, confirm the day before.",
      "Self-sourcing leads. Don't wait for the company to hand you every lead.",
    ],
  },
  {
    category: "Process & Discipline",
    icon: Database,
    items: [
      "CRM is always current. Every call logged. Every appointment documented with full handoff notes.",
      "Handoff notes are detailed. The AE should know who, what, why, and which products before the call.",
      "Appointment reminders go out. Every time. No exceptions.",
    ],
  },
  {
    category: "Mindset & Coachability",
    icon: Lightbulb,
    items: [
      "Implementing feedback quickly. When leadership points out a pattern, you adjust. Next call.",
      "Bringing real data to meetings. What's working, what objections you're hearing, which verticals respond.",
      "Owning your numbers. Know your daily stats without looking them up.",
    ],
  },
] as const;

const EXIT_ITEMS = [
  {
    category: "Activity Failures",
    items: [
      "Consistently below 1 appointment per day after ramp. The math doesn't work.",
      "Going dark on activity. Days with no calls, no emails, no social. Silence = absence.",
      "Relying entirely on assigned leads. Never self-sourcing makes your pipeline fragile.",
    ],
  },
  {
    category: "Integrity Failures",
    items: [
      "Booking fake or inflated appointments. Zero tolerance. No second chances.",
      "Misrepresenting Obsidion to prospects. No inventing features or exaggerating results.",
      "Neglecting the CRM. Empty records make your work invisible.",
    ],
  },
  {
    category: "Engagement Failures",
    items: [
      "Missing meetings without communication. Consistent absence signals disengagement.",
      "Not responding to team communication during working hours.",
    ],
  },
] as const;

const CHECKPOINTS = [
  {
    day: "Day 30",
    title: "Foundation Check",
    looking: "Have you learned the system and started producing?",
    items: ["All training completed", "Profiles set up", "CRM active", "Outreach started", "Booking a few per week"],
    notYet: "Full production numbers. You're learning.",
  },
  {
    day: "Day 60",
    title: "Consistency Check",
    looking: "Are you in the game?",
    items: ["1-2 appointments/day consistently", "Show rate above 70%", "CRM current", "All three channels active", "Feedback being implemented"],
    warning: "If activity is still inconsistent, the conversation changes.",
  },
  {
    day: "Day 90",
    title: "Production Check",
    looking: "Are you a producer?",
    items: ["2-3 appointments/day", "Show rate above 75%", "Positive AE feedback", "Self-sourcing some leads", "No persistent process issues"],
    warning: "If you're not here, it's an honest conversation about fit. Not a surprise — you had check-ins at 30 and 60.",
  },
] as const;

/* ─── component ─── */

export default function SDRAccountabilityContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Accountability"
        title="What Wins Here & What Gets You Fired"
        description="No gray areas. The expectations are clear — book qualified appointments, maintain activity, and be someone the team can count on."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── What Success Looks Like ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            What Success Looks Like
          </SectionLabel>

          <div className="space-y-5">
            {SUCCESS_ITEMS.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.category} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-accent/10 text-emerald-accent">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold">{group.category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={14} className="text-emerald-accent mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── What Gets You Exited ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-red-400" textClass="text-red-400">
            What Gets You Exited
          </SectionLabel>

          <div className="space-y-5">
            {EXIT_ITEMS.map((group) => (
              <motion.div key={group.category} variants={fadeUp} className="rounded-2xl border border-red-400/20 bg-card p-6 shadow-sm">
                <h3 className="text-base font-bold mb-4">{group.category}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <XCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Bright Line Framework ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            The Bright Line Framework
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: "Green — Thriving",
                color: "border-emerald-accent/30 bg-emerald-accent/[0.04]",
                textColor: "text-emerald-accent",
                detail: "Targets hit. Activity consistent. CRM clean. Show rate high. AEs closing your appointments.",
              },
              {
                label: "Yellow — At Risk",
                color: "border-amber-accent/30 bg-amber-accent/[0.04]",
                textColor: "text-amber-accent",
                detail: "Activity dropping. Appointments inconsistent. Trend isn't right. Fix it before someone tells you.",
              },
              {
                label: "Red — Exit Track",
                color: "border-red-400/30 bg-red-400/[0.04]",
                textColor: "text-red-400",
                detail: "Multiple areas failing. Low activity. Rare appointments. Coaching hasn't produced change. Sharp visible change required.",
              },
            ].map((zone) => (
              <motion.div key={zone.label} variants={fadeUp} className={`rounded-2xl border ${zone.color} p-6`}>
                <h4 className={`text-sm font-bold ${zone.textColor} mb-2`}>{zone.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{zone.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 30/60/90 Checkpoints ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            30 / 60 / 90-Day Checkpoints
          </SectionLabel>

          <div className="space-y-5">
            {CHECKPOINTS.map((cp) => (
              <motion.div key={cp.day} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent">
                    <Calendar size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{cp.day} — {cp.title}</h4>
                    <span className="text-xs text-muted-foreground">{cp.looking}</span>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {cp.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {"warning" in cp && cp.warning && (
                  <div className="rounded-lg bg-amber-accent/[0.04] border border-amber-accent/15 px-4 py-3">
                    <p className="text-xs text-foreground leading-relaxed">{cp.warning as string}</p>
                  </div>
                )}
                {"notYet" in cp && cp.notYet && (
                  <p className="text-xs text-muted-foreground italic">Not expected yet: {cp.notYet as string}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="accountability"
            upNext={[
              { slug: "meetings", title: "Meeting Cadence" },
              { slug: "certification", title: "Certification" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Accountability</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
