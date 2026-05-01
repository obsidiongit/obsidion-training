"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import { publicFile } from "@/lib/basePath";
import {
  BadgeCheck,
  BookOpen,
  UserCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  RotateCcw,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const GATES = [
  {
    number: 1,
    icon: BookOpen,
    title: "Complete All Training Sections",
    description: "Work through every section in the SDR hub. Read them — don't just click through.",
    items: [
      "Your Role as an SDR",
      "Lead Generation & Prospecting",
      "Ambassador Profile Setup",
      "Product Knowledge",
      "Outreach Playbook (all sub-sections)",
      "Getting Paid",
      "Performance Expectations",
      "Daily Structure",
      "Meeting Cadence",
      "Accountability",
    ],
    howToComplete: "Mark each section as visited in the hub. No quiz needed — the assessment gates below confirm retention.",
    color: "accent",
  },
  {
    number: 2,
    icon: UserCircle,
    title: "Ambassador Profiles Set Up",
    description: "LinkedIn, Facebook, and email signature must be fully set up with Obsidion branding before outreach.",
    items: [
      "LinkedIn: Professional photo, Obsidion banner, updated headline, About section, Experience added",
      "Facebook: Professional photo, Obsidion banner, bio updated",
      "Email: Branded signature installed and tested",
    ],
    howToComplete: "Your manager reviews your profiles and confirms they meet the standard.",
    color: "emerald-accent",
  },
  {
    number: 3,
    icon: Phone,
    title: "Mock Cold Call",
    description: "A role-play where you run a cold call with your manager playing the prospect. Open, qualify, handle one objection, book.",
    items: [],
    howToComplete: "Score 70+ out of 100. Unlimited re-attempts — review scripts, practice, schedule another.",
    color: "purple-accent",
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: "Manager Sign-Off",
    description: "Your manager confirms you're ready based on training completion, profile setup, mock call, and general readiness.",
    items: [
      "Can explain what Obsidion does in plain language without a script (≈80% Meta / ~20% rest of stack; website-only is valid)",
      "Understands BANT and can apply it in conversation",
      "Knows how to log activity in the Outreach Dashboard",
    ],
    howToComplete: "A judgment call, not a test. If you're ready, you go live.",
    color: "amber-accent",
  },
] as const;

const MOCK_CALL_RUBRIC = [
  { category: "Opening", detail: "Confident, clear, asks a question that gets them talking", points: 25 },
  { category: "Qualifying", detail: "Uncovers at least 2 BANT signals through conversation", points: 25 },
  { category: "Objection Handling", detail: "Handles one pushback without folding or arguing", points: 25 },
  { category: "Booking", detail: "Asks for the appointment with a specific time", points: 25 },
] as const;

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
  "emerald-accent": { bg: "bg-emerald-accent/10", text: "text-emerald-accent", border: "border-emerald-accent/20" },
  "purple-accent": { bg: "bg-purple-accent/10", text: "text-purple-accent", border: "border-purple-accent/20" },
  "amber-accent": { bg: "bg-amber-accent/10", text: "text-amber-accent", border: "border-amber-accent/20" },
};

/* ─── component ─── */

export default function SDRCertificationContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Certification"
        title="Readiness Check"
        description="You don't touch a live prospect until you've passed this gate. Four gates. Complete them all to go live."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── The Gate ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            The Gate
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5">
            <p className="text-sm text-foreground leading-relaxed">
              Sending an unprepared SDR into outreach wastes leads that could have converted and
              damages the company&apos;s reputation before the AE ever gets a chance. This certification
              is simple. <span className="font-semibold">Four gates. Complete them all to go live.</span>
            </p>
          </motion.div>
        </motion.section>

        {/* ── The Four Gates ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            The Four Gates
          </SectionLabel>

          <div className="space-y-6">
            {GATES.map((gate) => {
              const Icon = gate.icon;
              const c = colorMap[gate.color];
              return (
                <motion.div
                  key={gate.number}
                  variants={fadeUp}
                  className={`rounded-2xl border ${c.border} bg-card p-6 sm:p-8 shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.bg} ${c.text} font-black text-lg`}>
                      {gate.number}
                    </div>
                    <div>
                      <h3 className="text-base font-bold">{gate.title}</h3>
                      <p className="text-xs text-muted-foreground">{gate.description}</p>
                    </div>
                  </div>

                  {gate.items.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {gate.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 size={13} className={`${c.text} mt-0.5 shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className={`rounded-lg bg-muted/30 border border-border/60 px-4 py-3`}>
                    <p className="text-xs text-foreground">
                      <span className="font-semibold">How to complete:</span> {gate.howToComplete}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Mock Call Rubric ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Mock Cold Call Rubric
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Category</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">What We&apos;re Looking For</th>
                    <th className="text-right px-5 py-3 font-semibold text-purple-accent text-xs uppercase tracking-wider">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_CALL_RUBRIC.map((row) => (
                    <tr key={row.category} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-bold text-foreground">{row.category}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.detail}</td>
                      <td className="px-5 py-3 text-right font-bold text-purple-accent">{row.points}</td>
                    </tr>
                  ))}
                  <tr className="bg-purple-accent/[0.04]">
                    <td className="px-5 py-3 font-bold text-foreground">Total</td>
                    <td className="px-5 py-3 text-muted-foreground">Passing threshold: 70 points</td>
                    <td className="px-5 py-3 text-right font-black text-purple-accent">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4">
            <RotateCcw size={16} className="text-emerald-accent mt-0.5 shrink-0" />
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-semibold">Unlimited re-attempts.</span> No penalty. Review the
              material, practice with a teammate, and try again. The goal is to make you ready — not to fail you.
            </p>
          </motion.div>
        </motion.section>

        {/* ── What Happens When You Pass ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            What Happens When You Pass
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-6">
            <h3 className="text-lg font-bold mb-2">You&apos;re certified. You go live.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Your manager signs off, your status is updated, and you start active outreach.
              You&apos;ll still be ramping (days 1-30 expectations apply), but you&apos;re cleared
              to work real leads and book real appointments.
            </p>
            <div className="flex items-start gap-2">
              <Clock size={14} className="text-accent mt-0.5 shrink-0" />
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold">Timeline:</span> You should be certified within your
                first week. If it takes longer than 7 business days, that&apos;s a conversation.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="certification"
            upNext={[
              { slug: "your-role", title: "Your Role as an SDR" },
              { slug: "on-the-call", title: "Outreach Playbook" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Certification</p>
          <img src={publicFile("/logos/logo.png")} alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
