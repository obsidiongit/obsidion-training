"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  DollarSign,
  TrendingUp,
  Layers,
  Shield,
  Trophy,
  Building2,
  AlertTriangle,
  Calendar,
  Users,
  ArrowUpRight,
  Sparkles,
  Target,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  fadeIn,
  scaleIn,
  SectionLabel,
  FAQAccordion,
  ProductPageHero,
  ProductPageFooter,
  StatHighlight,
} from "../products/shared";

/* ─── data ─── */

const COMMISSION_EXAMPLES = [
  { type: "Standard Account", fee: "$1,000", commission: "$400" },
  { type: "Mid-Tier Account", fee: "$5,000", commission: "$2,000" },
  { type: "Enterprise Account", fee: "$10,000", commission: "$4,000" },
] as const;

const MRR_TIERS = [
  { tier: 1, threshold: "$3,000/mo", accounts: "~10", bonus: "$300/mo", annual: "$3,600/yr", pct: "10%" },
  { tier: 2, threshold: "$5,000/mo", accounts: "~17", bonus: "$550/mo", annual: "$6,600/yr", pct: "11%" },
  { tier: 3, threshold: "$10,000/mo", accounts: "~34", bonus: "$1,200/mo", annual: "$14,400/yr", pct: "12%" },
  { tier: 4, threshold: "$20,000/mo", accounts: "~67", bonus: "$2,800/mo", annual: "$33,600/yr", pct: "14%" },
  { tier: 5, threshold: "$40,000/mo", accounts: "~135", bonus: "$6,400/mo", annual: "$76,800/yr", pct: "16%" },
  { tier: 6, threshold: "$75,000/mo", accounts: "~253", bonus: "$13,500/mo", annual: "$162,000/yr", pct: "18%" },
] as const;

const ENTERPRISE_SCENARIO = [
  { type: "Standard ($297/mo)", count: 20, rate: "$297", mrr: "$5,940" },
  { type: "Mid-Tier ($500/mo)", count: 3, rate: "$500", mrr: "$1,500" },
  { type: "Enterprise ($2,000/mo)", count: 2, rate: "$2,000", mrr: "$4,000" },
] as const;

const EARNING_SCENARIOS = [
  { label: "Ramp-Up", pace: "8 deals/mo", setup: "$38,400", mrrBonus: "$16,800", total: "$55,200", color: "text-muted-foreground" },
  { label: "Good", pace: "15 deals/mo", setup: "$72,000", mrrBonus: "$43,200", total: "$115,200", color: "text-emerald-accent" },
  { label: "Great", pace: "20 deals/mo", setup: "$96,000", mrrBonus: "$64,800", total: "$160,800", color: "text-accent" },
  { label: "Elite", pace: "20/mo + enterprise", setup: "$144,000+", mrrBonus: "$108,000+", total: "$252,000+", color: "text-amber-accent" },
] as const;

const POLICIES = [
  {
    icon: Users,
    title: "Account Ownership",
    points: [
      "You own the accounts you close. Monthly revenue counts toward your MRR as long as accounts remain active.",
      "If an account is transferred to another AE, the MRR transfers with it.",
      "Shared or co-sold deals have MRR split as agreed in writing prior to the close.",
    ],
  },
  {
    icon: Shield,
    title: "Churn & Tier Maintenance",
    points: [
      "Bonus tier is evaluated on the 1st of each month based on total active MRR.",
      "1-month grace period: if MRR dips below a tier for a single month, you retain the tier. Two consecutive months below triggers a drop.",
      "This incentivizes retention and proactive account management, not just acquisition.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Commission Clawback",
    points: [
      "If a customer cancels or disputes within 30 days and receives a refund, the 40% front-end commission is deducted from the next pay cycle.",
      "No clawback applies after the 30-day mark.",
    ],
  },
  {
    icon: Calendar,
    title: "Bonus Payment Schedule",
    points: [
      "MRR milestone bonuses are paid monthly, typically on the 15th of the following month.",
      "Front-end commissions are paid on the standard pay cycle following the customer's first successful payment.",
    ],
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "When do I get my first commission check?",
    answer:
      "On the pay cycle following the customer's first successful payment. Commissions don't pay on verbal agreements — the customer must be billed and paid.",
  },
  {
    question: "What if a customer cancels in the first month?",
    answer:
      "If they cancel within 30 days and receive a refund, the front-end commission is clawed back from your next pay cycle. After the 30-day mark, no clawback applies.",
  },
  {
    question: "What happens if my MRR drops below a tier?",
    answer:
      "You get a 1-month grace period. If your MRR stays below the threshold for a second consecutive month, you drop to the qualifying tier. This incentivizes proactive account management and retention.",
  },
  {
    question: "Do enterprise deals have a different commission rate?",
    answer:
      "No. The commission rate is 40% of the setup fee regardless of deal size. Enterprise deals are rewarded through larger setup fees and faster MRR tier progression.",
  },
  {
    question: "How are co-sold deals handled?",
    answer:
      "MRR is split as agreed in writing prior to the close. Get the split documented before the deal closes.",
  },
  {
    question: "What's the draw structure?",
    answer:
      "Base draw/salary details are confirmed in your offer letter. This compensation program covers commission and bonus income on top of your base.",
  },
];

const HOW_IT_WORKS = [
  {
    icon: DollarSign,
    title: "Close a Deal",
    description: "Earn 40% of the setup fee as a one-time front-end commission.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Book",
    description: "Every active account's monthly fee adds to your total MRR.",
  },
  {
    icon: Layers,
    title: "Unlock Tiers",
    description: "Hit MRR thresholds to unlock escalating monthly bonus checks.",
  },
  {
    icon: Trophy,
    title: "Stack & Compound",
    description: "Year 2+ earnings compound — existing accounts keep paying while new deals stack on top.",
  },
] as const;

/* ─── component ─── */

export default function GettingPaidContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Compensation"
        title="Getting Paid & Bonuses"
        description="Your complete comp structure — front-end commissions, MRR bonus tiers, enterprise deal treatment, policies, and earning potential."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── How It Works Overview ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            How It Works
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            The comp plan rewards both new business acquisition and long-term account retention.
            Two income streams work together — close deals for immediate commissions, then build
            recurring revenue for escalating monthly bonuses.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="absolute top-4 right-4 text-3xl font-black text-muted/40 select-none">
                    {i + 1}
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Front-End Commission ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Front-End Commission
          </SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-accent text-white shadow-lg">
                  <DollarSign size={32} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-4xl font-black tracking-tight text-emerald-accent">40%</div>
                  <div className="text-sm text-muted-foreground font-medium">of Setup Fee</div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                  Applies to ALL deal sizes equally
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                  Paid on the cycle after first customer payment
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                  30-day clawback window if customer is refunded
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 border-b border-border bg-emerald-accent/[0.03]">
                <h3 className="font-bold tracking-tight text-sm">Commission Examples</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Deal Type</th>
                      <th className="text-right px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Setup Fee</th>
                      <th className="text-right px-6 py-3 font-semibold text-emerald-accent text-xs uppercase tracking-wider">Your Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMMISSION_EXAMPLES.map((row) => (
                      <tr key={row.type} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">{row.type}</td>
                        <td className="px-6 py-4 text-right text-muted-foreground">{row.fee}</td>
                        <td className="px-6 py-4 text-right font-bold text-emerald-accent">{row.commission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── MRR Bonus Tier System ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            MRR Bonus Tier System
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
            Your monthly bonus is determined by the total Monthly Recurring Revenue across all
            active accounts you manage. As your book of business grows, you unlock higher bonus
            tiers — and receive that bonus check every single month.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4 mb-8 flex items-start gap-3"
          >
            <Sparkles size={18} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Example accounts</span> are based on the standard $297/month rate.
              Enterprise accounts paying $500–$3,000/month count at their actual rate, meaning you can
              reach higher tiers faster with fewer accounts.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider w-16">Tier</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">MRR Threshold</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">~Accounts</th>
                    <th className="text-right px-4 py-3 font-semibold text-accent text-xs uppercase tracking-wider">Monthly Bonus</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden md:table-cell">Annual Value</th>
                  </tr>
                </thead>
                <tbody>
                  {MRR_TIERS.map((row) => (
                    <tr key={row.tier} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-4 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-sm">
                          {row.tier}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-semibold text-foreground">{row.threshold}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground hidden sm:table-cell">{row.accounts}</td>
                      <td className="px-4 py-4 text-right font-bold text-accent">{row.bonus}</td>
                      <td className="px-4 py-4 text-right text-muted-foreground hidden md:table-cell">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Enterprise Deals ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Enterprise &amp; High-Value Deals
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Larger deals follow the same structure — they simply accelerate your tier progression.
            No separate enterprise rate. The system naturally rewards bigger deals through faster
            MRR accumulation.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                {
                  icon: DollarSign,
                  title: "Same 40% Commission",
                  text: "A $10,000 enterprise setup fee = $4,000 commission. Same rate, bigger paycheck.",
                },
                {
                  icon: TrendingUp,
                  title: "Accelerated MRR",
                  text: "Enterprise monthly rates ($500–$3,000/mo) count at full value toward your tier. Fewer accounts, faster progression.",
                },
                {
                  icon: Target,
                  title: "Natural Rewards",
                  text: "No separate tier needed. The math rewards bigger deals automatically through larger commissions and faster MRR growth.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 border-b border-border bg-purple-accent/[0.03]">
                <h3 className="font-bold tracking-tight text-sm">Scenario: Mixed Book of Business</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Account Type</th>
                      <th className="text-center px-3 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">#</th>
                      <th className="text-right px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">MRR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ENTERPRISE_SCENARIO.map((row) => (
                      <tr key={row.type} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="px-5 py-3 font-medium text-foreground text-sm">{row.type}</td>
                        <td className="px-3 py-3 text-center text-muted-foreground">{row.count}</td>
                        <td className="px-5 py-3 text-right text-muted-foreground">{row.mrr}</td>
                      </tr>
                    ))}
                    <tr className="bg-purple-accent/[0.04]">
                      <td className="px-5 py-4 font-bold text-foreground">Total (25 accounts)</td>
                      <td className="px-3 py-4" />
                      <td className="px-5 py-4 text-right font-black text-purple-accent text-base">$11,440/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-4 border-t border-border bg-muted/20">
                <div className="flex items-center gap-2">
                  <ArrowUpRight size={16} className="text-purple-accent" />
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Tier 3 unlocked</span>
                    <span className="text-muted-foreground"> — $1,200/mo bonus, on track for Tier 4</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Earning Potential ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Earning Potential
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Total annual earnings at various performance levels. Assumes $1,000 standard setup fee
            and $297/month accounts. These are commission and bonus income only — no base salary included.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EARNING_SCENARIOS.map((scenario) => (
              <motion.div
                key={scenario.label}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {scenario.pace}
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-4">{scenario.label}</h3>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-muted-foreground">Setup Commissions</span>
                    <span className="text-sm font-semibold text-foreground">{scenario.setup}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-muted-foreground">MRR Bonus</span>
                    <span className="text-sm font-semibold text-foreground">{scenario.mrrBonus}</span>
                  </div>
                  <div className="h-px bg-border" />
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total</span>
                  <span className={`text-xl font-black tracking-tight ${scenario.color}`}>{scenario.total}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-6 rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4 flex items-start gap-3"
          >
            <Trophy size={18} className="text-amber-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Year 2+ compounds.</span> All accounts from Year 1
              continue paying monthly bonuses while new deals stack on top. A closer doing 15–20
              deals/month can realistically hit Tier 3 within 2 months and Tier 4–5 within 6 months.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Rules & Policies ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Rules &amp; Policies
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {POLICIES.map((policy) => {
              const Icon = policy.icon;
              return (
                <motion.div
                  key={policy.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold tracking-tight">{policy.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {policy.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/40 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── FAQ ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Frequently Asked Questions
          </SectionLabel>

          <FAQAccordion items={FAQ_ITEMS} />
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
          <p className="text-xs text-foreground-subtle">
            Obsidion Training Hub &middot; AE Compensation &amp; Bonus Program
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
