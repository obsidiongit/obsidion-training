"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import { publicFile } from "@/lib/basePath";
import {
  DollarSign,
  TrendingUp,
  Target,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Trophy,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  FAQAccordion,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const COMP_PARTS = [
  { component: "Base salary", detail: "$45,000/year — paid on a regular pay schedule regardless of performance" },
  { component: "Per-appointment bonus", detail: "A bonus for every qualified appointment where the prospect shows up" },
  { component: "Close bonus", detail: "A percentage of the deal value when an AE closes an appointment you booked" },
] as const;

const EARNING_SCENARIOS = [
  { level: "Ramping", pace: "1 appt/day", monthly: "~22", totalComp: "~$55,000-$60,000", color: "text-muted-foreground" },
  { level: "Solid", pace: "2 appts/day", monthly: "~44", totalComp: "~$65,000-$75,000", color: "text-emerald-accent" },
  { level: "Strong", pace: "3 appts/day", monthly: "~66", totalComp: "~$75,000-$85,000", color: "text-accent" },
  { level: "High Performer", pace: "4-6 appts/day", monthly: "~88-132", totalComp: "$85,000+", color: "text-amber-accent" },
] as const;

const INCREASE_BONUS = [
  "Booking with decision makers (not gatekeepers)",
  "Including detailed handoff notes so the AE walks in prepared",
  "Following the BANT framework consistently",
  "Sending appointment reminders to reduce no-shows",
  "Prioritizing hot and warm leads over cold volume",
] as const;

const COST_MONEY = [
  "Booking unqualified prospects who waste the AE's time",
  "Not sending reminders (higher no-show rate)",
  "Sloppy notes that leave the AE blind on the call",
  "Chasing quantity without quality",
] as const;

const FAQ_ITEMS = [
  { question: "When do I get my first bonus check?", answer: "On the pay cycle following your first qualified appointment that the prospect attends. Exact timing will be confirmed during onboarding." },
  { question: "What if the prospect no-shows?", answer: "No per-appointment bonus for that meeting. Appointment reminders and proper qualifying directly affect your paycheck." },
  { question: "What if the AE doesn't close the deal?", answer: "You still get the per-appointment bonus for any qualified appointment where the prospect shows up. The close bonus only applies when the deal actually closes." },
  { question: "Is there a cap on bonuses?", answer: "No. The more you book, the more you earn. There is no ceiling." },
  { question: "Do I get credit if a prospect comes back months later?", answer: "Attribution window to be defined. Expected to follow a standard lookback period — details confirmed during onboarding." },
];

/* ─── component ─── */

export default function SDRGettingPaidContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Compensation"
        title="Getting Paid"
        description="Base salary + per-appointment bonuses + close bonuses. How the math works and how to maximize your earnings."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── How You Make Money ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            How You Make Money
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            This role has a base salary plus bonuses. The base gives you stability while you ramp.
            But the real money comes from the bonus structure — the more appointments you book and
            the more those appointments close, the more you earn.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {COMP_PARTS.map((part, i) => (
              <motion.div
                key={part.component}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <span className="text-lg font-black">{i + 1}</span>
                </div>
                <h3 className="text-base font-bold mb-2">{part.component}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{part.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Base Salary ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Base Salary
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-accent/20 bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-accent text-white shadow-lg">
                <DollarSign size={32} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-4xl font-black tracking-tight text-emerald-accent">$45K</div>
                <div className="text-sm text-muted-foreground font-medium">per year</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your floor — you earn this regardless of how many appointments you book. It&apos;s
              designed to give you stability while you ramp up. But don&apos;t treat it as the goal.
              The goal is to earn well above your base through the bonus structure.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Per-Appointment Bonus ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Per-Appointment Bonus
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Every time you book a qualified appointment and the prospect shows up, you earn a bonus.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-accent/20 bg-emerald-accent/[0.04] p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-emerald-accent" />
                <h4 className="text-sm font-bold">What Counts</h4>
              </div>
              <ul className="space-y-2">
                {[
                  "You used BANT criteria to qualify",
                  "The prospect attended the meeting",
                  "They were a legitimate decision maker with a real need",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-red-400/20 bg-red-400/[0.04] p-6">
              <div className="flex items-center gap-2 mb-3">
                <XCircle size={18} className="text-red-400" />
                <h4 className="text-sm font-bold">What Doesn&apos;t Count</h4>
              </div>
              <ul className="space-y-2">
                {[
                  "No-shows (prospect didn't attend)",
                  "Unqualified leads (not a decision maker, no real need)",
                  "Fake or duplicate bookings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* ── What the Math Looks Like ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            What the Math Looks Like
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EARNING_SCENARIOS.map((s) => (
              <motion.div
                key={s.level}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{s.pace}</div>
                <h3 className="text-lg font-bold tracking-tight mb-4">{s.level}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-muted-foreground">Monthly appts</span>
                    <span className="text-sm font-semibold">{s.monthly}</span>
                  </div>
                  <div className="h-px bg-border" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Comp</span>
                  <span className={`text-base font-black tracking-tight ${s.color}`}>{s.totalComp}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-purple-accent/20 bg-purple-accent/[0.04] px-5 py-4 flex items-start gap-3">
            <Trophy size={18} className="text-purple-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              Target range for a solid-to-strong SDR: <span className="font-bold">$65,000-$85,000</span> in
              total annual compensation. High performers who consistently book 4+ and whose appointments close well will earn above that.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Maximize Earnings ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            How to Maximize Your Earnings
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-accent/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={18} className="text-emerald-accent" />
                <h4 className="text-sm font-bold">Things That Increase Your Bonus</h4>
              </div>
              <ul className="space-y-2">
                {INCREASE_BONUS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-red-400/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={18} className="text-red-400" />
                <h4 className="text-sm font-bold">Things That Cost You Money</h4>
              </div>
              <ul className="space-y-2">
                {COST_MONEY.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* ── FAQ ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Frequently Asked Questions
          </SectionLabel>
          <FAQAccordion items={FAQ_ITEMS} />
        </motion.section>

        {/* ── Bottom Line ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-6">
            <h3 className="text-lg font-bold mb-2">The Bottom Line</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              $45K base gives you a floor. The bonus structure gives you a ceiling that&apos;s entirely
              in your control. An SDR booking 2-3 qualified appointments a day with good close rates is
              earning $65K-$85K. Push to 4-6 a day and qualify well, and you&apos;re earning more.
              More quality appointments = more money.
            </p>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="getting-paid"
            upNext={[
              { slug: "performance", title: "Performance Expectations" },
              { slug: "accountability", title: "Accountability" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Compensation</p>
          <img src={publicFile("/logos/logo.png")} alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
