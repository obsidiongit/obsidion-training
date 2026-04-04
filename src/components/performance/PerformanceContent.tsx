"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Phone,
  TrendingUp,
  Target,
  Trophy,
  AlertTriangle,
  Calendar,
  BarChart3,
  Clock,
  Flame,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Headphones,
  Search,
  LifeBuoy,
  Sparkles,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  scaleIn,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const INCOME_SCENARIOS = [
  { label: "Barely Surviving", deals: "4–6", commissions: "~$24,000", mrr: "~$3,600", total: "~$27,600", color: "text-red-400" },
  { label: "Ramp-Up", deals: "8", commissions: "$38,400", mrr: "$16,800", total: "$55,200", color: "text-muted-foreground" },
  { label: "Solid", deals: "15", commissions: "$72,000", mrr: "$43,200", total: "$115,200", color: "text-emerald-accent" },
  { label: "Crushing It", deals: "20", commissions: "$96,000", mrr: "$64,800", total: "$160,800", color: "text-accent" },
  { label: "Elite", deals: "20+ w/ enterprise", commissions: "$144,000+", mrr: "$108,000+", total: "$252,000+", color: "text-amber-accent" },
] as const;

const DIAL_TIERS = [
  { level: "Minimum", dials: "150", meaning: "This is the floor. Below this, you are not doing the job.", color: "text-red-400", bgColor: "bg-red-400" },
  { level: "Competitive", dials: "200–250", meaning: "This is where consistent closers operate.", color: "text-accent", bgColor: "bg-accent" },
  { level: "Elite", dials: "300+", meaning: "The reps making $200K+ are here. Every single one.", color: "text-amber-accent", bgColor: "bg-amber-accent" },
] as const;

const FUNNEL_METRICS = [
  { metric: "Live conversations (15–20% connect)", at150: "22–30", at250: "37–50", at300: "45–60" },
  { metric: "Qualified discoveries / day", at150: "4–6", at250: "7–10", at300: "9–12" },
  { metric: "Demos booked / week", at150: "8–12", at250: "15–22", at300: "20–28" },
  { metric: "Deals closed / month (30–40% close)", at150: "8–12", at250: "15–22", at300: "20–28" },
] as const;

const DAILY_SCORECARD = [
  { metric: "Outbound dials", min: "150", comp: "200–250", elite: "300+" },
  { metric: "Live conversations", min: "22", comp: "37", elite: "45+" },
  { metric: "Qualified discoveries", min: "4", comp: "7", elite: "9+" },
  { metric: "Demos / deep dives booked", min: "2", comp: "3–4", elite: "5+" },
  { metric: "Follow-up touches sent", min: "10", comp: "15", elite: "20+" },
  { metric: "CRM entries logged", min: "All", comp: "All", elite: "All" },
] as const;

const WEEKLY_TARGETS = [
  { metric: "Total dials (5-day week)", min: "750", comp: "1,000–1,250", elite: "1,500+" },
  { metric: "Demos held", min: "8", comp: "15", elite: "20+" },
  { metric: "Proposals / questionnaires sent", min: "4", comp: "8", elite: "12+" },
  { metric: "Deals closed", min: "2", comp: "3–5", elite: "5–7" },
] as const;

const MONTHLY_TARGETS = [
  { metric: "Total dials", min: "3,300", comp: "5,000–5,500", elite: "6,600+" },
  { metric: "Demos held", min: "32", comp: "60", elite: "80+" },
  { metric: "New deals closed", min: "8", comp: "15", elite: "20+" },
  { metric: "New MRR added", min: "$2,376", comp: "$4,455", elite: "$5,940+" },
  { metric: "Setup commission earned", min: "$3,200", comp: "$6,000", elite: "$8,000+" },
] as const;

const MRR_TIERS = [
  { tier: 1, threshold: "$3,000/mo", accounts: "~10", bonus: "$300/mo", annual: "$3,600/yr" },
  { tier: 2, threshold: "$5,000/mo", accounts: "~17", bonus: "$550/mo", annual: "$6,600/yr" },
  { tier: 3, threshold: "$10,000/mo", accounts: "~34", bonus: "$1,200/mo", annual: "$14,400/yr" },
  { tier: 4, threshold: "$20,000/mo", accounts: "~67", bonus: "$2,800/mo", annual: "$33,600/yr" },
  { tier: 5, threshold: "$40,000/mo", accounts: "~135", bonus: "$6,400/mo", annual: "$76,800/yr" },
  { tier: 6, threshold: "$75,000/mo", accounts: "~253", bonus: "$13,500/mo", annual: "$162,000/yr" },
] as const;

const TIER_TIMELINE = [
  { level: "Minimum (8 deals/mo)", t1: "Month 2", t2: "Month 3", t3: "Month 5" },
  { level: "Competitive (15 deals/mo)", t1: "Month 1", t2: "Month 2", t3: "Month 3" },
  { level: "Elite (20+ deals/mo)", t1: "Month 1", t2: "Month 1", t3: "Month 2" },
] as const;

const RAMP_PHASES = [
  {
    phase: "Days 1–30",
    title: "Learn the Playbook, Start Dialing",
    color: "text-accent",
    bgColor: "bg-accent",
    borderColor: "border-accent/20",
    bgTint: "bg-accent/[0.04]",
    targets: [
      "Complete full training playbook and product knowledge modules",
      "Shadow live calls in week 1 — on the phone yourself by day 3–5",
      "Dial target from week 2 onward: 100–150/day (building to full volume)",
      "Run first qualified discoveries and book first demos",
      "Walk a prospect through the full value story without slides by day 14",
    ],
    closes: "2–6 (you're learning, but you're still dialing)",
  },
  {
    phase: "Days 31–60",
    title: "Pipeline Has Real Depth",
    color: "text-emerald-accent",
    bgColor: "bg-emerald-accent",
    borderColor: "border-emerald-accent/20",
    bgTint: "bg-emerald-accent/[0.04]",
    targets: [
      "Full dial volume: 150–200+ dials/day, no excuses",
      "Pipeline should have 15–25 active opportunities at various stages",
      "Weekly cadence locked in: discovery, demos, follow-ups, closes",
      "CRM is clean — every deal has a stage, a next step, and notes",
      "Approaching or clearing Tier 1 MRR ($3,000/month)",
    ],
    closes: "6–12",
  },
  {
    phase: "Days 61–90",
    title: "Full Production or Serious Conversation",
    color: "text-amber-accent",
    bgColor: "bg-amber-accent",
    borderColor: "border-amber-accent/20",
    bgTint: "bg-amber-accent/[0.04]",
    targets: [
      "Full activity benchmarks: 200+ dials/day",
      "Closing 8+ deals/month consistently",
      "Pipeline is self-sustaining — new opps replacing closed ones weekly",
      "MRR tracking toward Tier 2 ($5,000/month)",
      "If not at minimum benchmarks by day 90, direct conversation about fit",
    ],
    closes: "8+ consistently",
  },
] as const;

const REVIEW_CADENCE = [
  {
    icon: Calendar,
    freq: "Weekly",
    title: "Pipeline Review (1:1 with Manager)",
    color: "text-accent",
    bgColor: "bg-accent/10",
    points: [
      "Bring your pipeline view and your numbers — dials, conversations, demos, closes",
      "Bring 2–3 call recordings for coaching (wins and losses)",
      "This is where you get better — a tuning session, not a gotcha session",
      "If dials are below minimum, expect this to be the first topic",
    ],
  },
  {
    icon: BarChart3,
    freq: "Monthly",
    title: "Performance Scorecard",
    color: "text-emerald-accent",
    bgColor: "bg-emerald-accent/10",
    points: [
      "Full month activity vs. benchmarks",
      "Revenue generated (commissions + MRR progress)",
      "Pipeline health: new opportunities in vs. deals closed out",
      "Trajectory check: are you on pace for the next MRR tier?",
    ],
  },
  {
    icon: Trophy,
    freq: "Quarterly",
    title: "Formal Review",
    color: "text-purple-accent",
    bgColor: "bg-purple-accent/10",
    points: [
      "Total revenue impact and comp earned",
      "MRR tier status and trajectory",
      "Territory and vertical performance breakdown",
      "Honest assessment: what's working, what's not, what changes",
    ],
  },
] as const;

const WINNING_HABITS = [
  { icon: Zap, title: "Speed to Follow-Up", text: "Same-day recap emails with the questionnaire link. Day 3 value-add touch. Day 7 call with a new angle." },
  { icon: Target, title: "Honest Forecasting", text: "Your pipeline should reflect reality, not optimism. If a deal is dead, kill it. A clean pipeline is a productive pipeline." },
  { icon: ArrowUpRight, title: "Multi-Threading", text: "When the deal matters, don't hang your commission on one contact. Get above and beside your champion." },
  { icon: CheckCircle2, title: "Clean Handoffs", text: "When a deal closes, delivery gets everything they need. No ambiguity. This protects your MRR because happy clients don't churn." },
  { icon: Search, title: "Log Everything", text: "If it's not in the CRM, it didn't happen. Calls, next steps, objections, competitor intel — all of it." },
] as const;

const RECOVERY_STEPS = [
  { icon: Phone, title: "Check your dials first", text: "Nine times out of ten, the problem is volume, not skill." },
  { icon: MessageSquare, title: "Bring it to your 1:1", text: "Your manager can help with list quality, talk tracks, and territory strategy — but only if you surface the issue early." },
  { icon: Headphones, title: "Listen to your own calls", text: "The recordings exist for a reason. Compare your calls to the top performers." },
  { icon: LifeBuoy, title: "Audit your follow-up", text: "Deals don't die on the first call — they die in the follow-up gap." },
] as const;

/* ─── helper: 3-tier table ─── */

function ThreeTierTable({
  headers,
  rows,
  accentColor = "accent",
}: {
  headers: [string, string, string, string];
  rows: readonly { metric: string; min: string; comp: string; elite: string }[];
  accentColor?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {headers.map((h, i) => (
                <th
                  key={h}
                  className={`${i === 0 ? "text-left" : "text-center"} px-4 py-3 font-semibold text-xs uppercase tracking-wider ${
                    i === 3 ? `text-${accentColor}` : "text-muted-foreground"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.metric} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{row.metric}</td>
                <td className="px-4 py-3 text-center text-muted-foreground">{row.min}</td>
                <td className="px-4 py-3 text-center text-foreground font-semibold">{row.comp}</td>
                <td className="px-4 py-3 text-center font-bold text-amber-accent">{row.elite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

/* ─── component ─── */

export default function PerformanceContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Performance"
        title="Performance Expectations"
        description="Activity minimums, revenue targets, ramp milestones, review cadence, and what it takes to thrive in a commission-only role."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── The Reality of Commission-Only ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-red-400" textClass="text-red-400">
            The Reality of Commission-Only
          </SectionLabel>

          <motion.div variants={fadeUp} className="space-y-4 max-w-3xl mb-8">
            <p className="text-muted-foreground leading-relaxed">
              This is a commission-only position. No base salary. No draw. No safety net.
              You eat what you kill — period. The reps who thrive here treat the phone like
              a weapon and outwork everyone in the room.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your income is determined by exactly two things:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: Flame,
                title: "Front-End Commissions",
                text: "40% of every setup fee you close. A standard $1,000 setup puts $400 in your pocket. A $10,000 enterprise setup puts $4,000. No cap.",
                color: "text-emerald-accent",
                bg: "bg-emerald-accent/10",
              },
              {
                icon: TrendingUp,
                title: "MRR Bonus Tiers",
                text: "Every active customer's monthly fee stacks toward your MRR total. Hit the thresholds, unlock escalating monthly bonuses that compound over time.",
                color: "text-accent",
                bg: "bg-accent/10",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold tracking-tight mb-4">What the Math Looks Like</h3>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Scenario</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Deals/Mo</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Commissions</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden md:table-cell">MRR Bonus</th>
                    <th className="text-right px-4 py-3 font-semibold text-amber-accent text-xs uppercase tracking-wider">Total Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {INCOME_SCENARIOS.map((row) => (
                    <tr key={row.label} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">{row.label}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground">{row.deals}</td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">{row.commissions}</td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden md:table-cell">{row.mrr}</td>
                      <td className={`px-4 py-3 text-right font-bold ${row.color}`}>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 rounded-xl border border-red-400/20 bg-red-400/[0.04] px-5 py-4 flex items-start gap-3"
          >
            <AlertTriangle size={18} className="text-red-400 mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              Look at &ldquo;Barely Surviving.&rdquo; That&rsquo;s 4–6 deals a month — less than $30K a year. That&rsquo;s
              not a career, that&rsquo;s a warning sign. The gap between broke and $250K+ is not talent — it&rsquo;s
              dial volume and consistency.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Daily Activity — Non-Negotiable Minimums ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Daily Activity — Non-Negotiable Minimums
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            This is an outbound, high-volume sales role. Connect rates in this space mean you
            need massive dial volume to generate enough live conversations to fill a pipeline that
            actually pays your bills.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {DIAL_TIERS.map((tier) => (
              <motion.div
                key={tier.level}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className={`text-xs font-semibold uppercase tracking-wider ${tier.color} mb-2`}>
                  {tier.level}
                </div>
                <div className={`text-4xl font-black tracking-tight ${tier.color} mb-3`}>
                  {tier.dials}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">dials / day</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{tier.meaning}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4 mb-10 flex items-start gap-3"
          >
            <Phone size={18} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">150 dials per day is not a stretch goal</span> — it is the
              minimum standard to remain in this seat.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold tracking-tight mb-4">How the Funnel Works</h3>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm mb-10"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Metric</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">At 150/Day</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">At 250/Day</th>
                    <th className="text-center px-4 py-3 font-semibold text-amber-accent text-xs uppercase tracking-wider">At 300/Day</th>
                  </tr>
                </thead>
                <tbody>
                  {FUNNEL_METRICS.map((row) => (
                    <tr key={row.metric} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{row.metric}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground">{row.at150}</td>
                      <td className="px-4 py-3 text-center text-foreground font-semibold">{row.at250}</td>
                      <td className="px-4 py-3 text-center font-bold text-amber-accent">{row.at300}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold tracking-tight mb-4">Daily Activity Scorecard</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Track these every single day. No exceptions.</p>
          </motion.div>

          <ThreeTierTable
            headers={["Metric", "Minimum", "Competitive", "Elite"]}
            rows={DAILY_SCORECARD}
          />

          <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            If your CRM isn&rsquo;t updated by end of day, it didn&rsquo;t happen. Every conversation gets logged.
            Every demo gets a next step. Every follow-up gets scheduled.
          </motion.p>
        </motion.section>

        {/* ── Weekly & Monthly Benchmarks ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Weekly &amp; Monthly Benchmarks
          </SectionLabel>

          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold tracking-tight mb-4">Weekly Targets</h3>
          </motion.div>

          <ThreeTierTable
            headers={["Metric", "Minimum", "Competitive", "Elite"]}
            rows={WEEKLY_TARGETS}
          />

          <div className="h-10" />

          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold tracking-tight mb-4">Monthly Targets</h3>
          </motion.div>

          <ThreeTierTable
            headers={["Metric", "Minimum", "Competitive", "Elite"]}
            rows={MONTHLY_TARGETS}
          />

          <motion.div
            variants={fadeUp}
            className="mt-6 rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4 flex items-start gap-3"
          >
            <Sparkles size={18} className="text-emerald-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              Monthly MRR numbers assume standard $297/month accounts. Enterprise deals ($500–$3,000/month)
              accelerate your MRR tier progression dramatically — one $2,000/month enterprise account is
              worth nearly seven standard accounts toward your bonus threshold.
            </p>
          </motion.div>
        </motion.section>

        {/* ── MRR Tier Progression ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            MRR Tier Progression — Your Compounding Engine
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Front-end commissions pay the bills. MRR bonuses build wealth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm mb-10"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider w-16">Tier</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">MRR Threshold</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">~Accounts</th>
                    <th className="text-right px-4 py-3 font-semibold text-purple-accent text-xs uppercase tracking-wider">Monthly Bonus</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden md:table-cell">Annual Value</th>
                  </tr>
                </thead>
                <tbody>
                  {MRR_TIERS.map((row) => (
                    <tr key={row.tier} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-4 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent font-bold text-sm">
                          {row.tier}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-semibold text-foreground">{row.threshold}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground hidden sm:table-cell">{row.accounts}</td>
                      <td className="px-4 py-4 text-right font-bold text-purple-accent">{row.bonus}</td>
                      <td className="px-4 py-4 text-right text-muted-foreground hidden md:table-cell">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold tracking-tight mb-4">Timeline to Tier at Different Activity Levels</h3>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Activity Level</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Tier 1 (~10 accts)</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Tier 2 (~17 accts)</th>
                    <th className="text-center px-4 py-3 font-semibold text-purple-accent text-xs uppercase tracking-wider">Tier 3 (~34 accts)</th>
                  </tr>
                </thead>
                <tbody>
                  {TIER_TIMELINE.map((row) => (
                    <tr key={row.level} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{row.level}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground">{row.t1}</td>
                      <td className="px-4 py-3 text-center text-foreground font-semibold">{row.t2}</td>
                      <td className="px-4 py-3 text-center font-bold text-purple-accent">{row.t3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 rounded-xl border border-purple-accent/20 bg-purple-accent/[0.04] px-5 py-4 flex items-start gap-3"
          >
            <TrendingUp size={18} className="text-purple-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              The rep who dials 300/day hits Tier 3 in two months. The rep who dials 150/day hits Tier 3 in five months.
              That&rsquo;s a <span className="font-semibold">$14,400/year bonus difference</span> — earned or lost purely on effort.
            </p>
          </motion.div>
        </motion.section>

        {/* ── 30/60/90 Ramp Expectations ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Ramp Expectations — 30 / 60 / 90 Days
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
            There is no &ldquo;ramp protection.&rdquo; There is no reduced quota for your first few months.
            You are commission-only from day one. That said, here&rsquo;s what a realistic ramp looks like
            if you&rsquo;re putting in the work:
          </motion.p>

          <div className="space-y-6">
            {RAMP_PHASES.map((phase) => (
              <motion.div
                key={phase.phase}
                variants={fadeUp}
                className={`rounded-2xl border ${phase.borderColor} ${phase.bgTint} p-6 sm:p-8 shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex h-8 items-center rounded-full ${phase.bgColor} px-3`}>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{phase.phase}</span>
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">{phase.title}</h3>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {phase.targets.map((target, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${phase.bgColor} shrink-0`} />
                      {target}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 pt-3 border-t border-border/30">
                  <Target size={16} className={phase.color} />
                  <span className="text-sm font-semibold text-foreground">
                    Realistic closes this month:
                  </span>
                  <span className={`text-sm font-bold ${phase.color}`}>{phase.closes}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeUp} className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            This is not meant to scare you. It&rsquo;s meant to respect your time. If the volume isn&rsquo;t there by
            month three, this role is going to cause you more pain than reward — and both sides deserve honesty about that.
          </motion.p>
        </motion.section>

        {/* ── Review Cadence ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Review Cadence
          </SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEW_CADENCE.map((review) => {
              const Icon = review.icon;
              return (
                <motion.div
                  key={review.freq}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${review.bgColor} ${review.color}`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className={`text-xs font-semibold uppercase tracking-wider ${review.color}`}>{review.freq}</div>
                      <h3 className="text-sm font-bold tracking-tight">{review.title}</h3>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {review.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${review.bgColor} shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── What Separates the Reps Who Make It ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            What Separates the Reps Who Make It
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-amber-accent/20 bg-amber-accent/[0.04] px-6 py-5 mb-8">
            <p className="text-base font-semibold leading-relaxed text-foreground">
              They dial. That&rsquo;s the secret. The reps making $150K–$250K+ are not smarter than you.
              They are not more talented. They pick up the phone more. They do it when they don&rsquo;t feel
              like it. They do it first thing in the morning and at 4:45 PM.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-muted-foreground leading-relaxed mb-6">Beyond raw volume, the habits that compound:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WINNING_HABITS.map((habit) => {
              const Icon = habit.icon;
              return (
                <motion.div
                  key={habit.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-amber-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-accent/10 text-amber-accent mb-4 transition-colors group-hover:bg-amber-accent group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-bold tracking-tight mb-2">{habit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{habit.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── If You're Falling Behind ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            If You&rsquo;re Falling Behind
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Don&rsquo;t wait for someone to tap you on the shoulder. If your numbers are off pace:
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {RECOVERY_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-6 rounded-xl border border-border bg-muted/20 px-5 py-4"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              The reps who wash out almost always share the same trait: they waited too long to ask for
              help because they thought the numbers would magically improve. They won&rsquo;t. Dial volume
              and coaching fix pipelines. Hope doesn&rsquo;t.
            </p>
          </motion.div>
        </motion.section>

        {/* ── The Bottom Line ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            The Bottom Line
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-emerald-accent/20 bg-emerald-accent/[0.04] p-6 sm:p-8"
          >
            <p className="text-base leading-relaxed text-foreground mb-4">
              This role will pay you more than most salaried positions — if you work it. The comp plan
              has no ceiling. The MRR tiers compound year over year. A rep who builds a $40,000/month
              book of business is earning <span className="font-bold text-emerald-accent">$6,400/month in bonus alone</span> — on
              top of every new commission they close.
            </p>
            <p className="text-base leading-relaxed text-foreground mb-6">
              But none of that happens at 35 dials a day. It happens at 150. It happens at 250. It
              happens when you treat this like the opportunity it is and put in the reps — literally.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-accent text-white shadow-lg">
                <Phone size={24} strokeWidth={1.8} />
              </div>
              <p className="text-xl font-black tracking-tight text-foreground">Pick up the phone.</p>
            </div>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="performance"
            upNext={[
              { slug: "getting-paid", title: "Getting Paid & Bonuses" },
              { slug: "accountability", title: "Accountability" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">
            Obsidion Training Hub &middot; AE Performance Expectations
          </p>
          <img
            src="/logos/logo.png"
            alt="Obsidion"
            className="h-6 w-auto opacity-30"
          />
        </div>
      </footer>
    </div>
  );
}
