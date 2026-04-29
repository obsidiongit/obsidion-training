"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import FlowChart from "@/components/ui/FlowChart";
import {
  ListChecks,
  Search,
  Users,
  Flame,
  Thermometer,
  Snowflake,
  Clock,
  Database,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Mail,
  Globe,
  Share2,
  Send,
  Linkedin,
  MessageCircle,
  MapPin,
  UserPlus,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const SELF_SOURCE_CHANNELS = [
  { channel: "LinkedIn", description: "Connect with business owners, engage with posts, send personalized DMs", icon: Linkedin },
  { channel: "Facebook", description: "Business page research, local business groups, commenting, and DMs", icon: MessageCircle },
  { channel: "Instagram", description: "Engage with local businesses, comment on posts, direct messages", icon: Share2 },
  { channel: "Google Maps / local search", description: "Find businesses with weak or missing online presence", icon: MapPin },
  { channel: "Networking events", description: "Chamber of commerce, industry events, local business mixers", icon: Users },
  { channel: "Referrals", description: "Ask happy contacts to introduce you to other business owners", icon: UserPlus },
  { channel: "Upwork & freelance platforms", description: "Bid on relevant web/marketing projects", icon: Globe },
] as const;

const SUBMIT_FIELDS = [
  { field: "Business name", enter: "Full legal or DBA name", matters: "Accurate records and dedup" },
  { field: "Owner / contact name", enter: "Decision-maker's name", matters: "You need the person who can say yes" },
  { field: "Phone number", enter: "Direct line preferred", matters: "Generic reception numbers waste time" },
  { field: "Industry / vertical", enter: "What they do", matters: "Determines pitch angle and AE handoff" },
  { field: "Website URL", enter: "Their current site (or \"none\")", matters: "Check it before you call" },
  { field: "Source", enter: "How you found them", matters: "Tracks which channels produce results" },
  { field: "Notes", enter: "Context from your conversation", matters: "Gives the team a head start" },
] as const;

const PRIORITIES = [
  {
    level: "Priority 1 — Hot",
    icon: Flame,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20",
    instruction: "Reach out first",
    items: [
      "Scheduled callbacks (someone told you to call back today)",
      "Inbound inquiries (they reached out to us)",
      "Referrals (someone vouched for us)",
      "Prospects who engaged with your content or responded to a DM recently",
    ],
  },
  {
    level: "Priority 2 — Warm",
    icon: Thermometer,
    color: "text-amber-accent",
    bgColor: "bg-amber-accent/10",
    borderColor: "border-amber-accent/20",
    instruction: "Reach out second",
    items: [
      "Previously contacted, showed some interest, no appointment yet",
      "Businesses in industries where Obsidion has strong case studies",
      "Businesses with obviously bad or missing websites",
    ],
  },
  {
    level: "Priority 3 — Cold",
    icon: Snowflake,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    instruction: "Fill your remaining time",
    items: [
      "Fresh prospects you've identified but never contacted",
      "No prior engagement or signal",
      "Volume plays — looking for the ones who respond and engage",
    ],
  },
  {
    level: "Priority 4 — Long-Term",
    icon: Clock,
    color: "text-purple-accent",
    bgColor: "bg-purple-accent/10",
    borderColor: "border-purple-accent/20",
    instruction: "Set reminders and circle back",
    items: [
      "Said \"not now\" but gave a future window",
      "Locked in a contract (note end date, follow up 60 days before)",
      "Expressed interest but timing was off",
    ],
  },
] as const;

const DAILY_WORKFLOW = [
  { label: "Check Email", sublabel: "New assigned leads" },
  { label: "Review Pipeline", sublabel: "Sort by priority" },
  { label: "Work Hot/Warm", sublabel: "Priority 1 & 2" },
  { label: "Cold Prospecting", sublabel: "Priority 3 volume" },
  { label: "Close Out", sublabel: "Log activity & submit leads" },
];

const HYGIENE_RULES = [
  "Never skip a prospect without attempting contact at least 3 times across multiple channels.",
  "Track each touch. Called and left a voicemail? Note it. Sent a DM? Note it.",
  "Don't hoard leads. 30+ days with no movement? Disposition it or escalate.",
  "Flag bad data. Wrong number? Business closed? Remove or mark it so your pipeline stays clean.",
] as const;

/* ─── component ─── */

export default function LeadListsContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Lead Generation"
        title="Lead Generation & Prospecting"
        description="Self-sourcing is the core of your pipeline. Assigned leads come weekly — everything else you build yourself through networking, social media, and outreach."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── You Are Your Own Pipeline ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            You Are Your Own Pipeline
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-purple-accent/20 bg-purple-accent/[0.04] px-6 py-5 space-y-3">
            <p className="text-sm text-foreground leading-relaxed">
              Assigned leads will be sent to you via email <span className="font-semibold">once per week</span> — but
              that&apos;s a supplement, not a strategy. The majority of your pipeline comes from{" "}
              <span className="font-semibold">self-sourcing</span>.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Think of this as business-to-business networking on a personal and digital scale.
              Networking at events, engaging across social media, and running consistent outreach
              is how leads are generated. The SDRs who build their own pipeline always outperform
              the ones who wait for leads to show up.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Where Leads Come From ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Where Leads Come From
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold">Weekly Assigned Leads</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Once per week you&apos;ll receive a batch of leads via email from leadership —
                purchased lists, inbound inquiries, marketing campaigns, and re-engagement leads.
              </p>
              <div className="rounded-lg bg-accent/[0.04] border border-accent/15 px-4 py-3">
                <p className="text-sm font-semibold text-foreground">
                  Work every assigned lead. Don&apos;t cherry-pick. Volume wins.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-accent/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-accent/10 text-emerald-accent">
                  <Search size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold">Self-Sourced Leads</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                This is where the real pipeline lives. You generate leads through networking,
                social media, local search, referrals, and outbound outreach.
              </p>
              <div className="rounded-lg bg-emerald-accent/[0.04] border border-emerald-accent/15 px-4 py-3">
                <p className="text-sm font-semibold text-foreground">
                  Self-sourcing is the bulk of the work — and the bulk of the results.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Self-Sourcing Channels ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Self-Sourcing Channels
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-4">
            These are the platforms and methods you&apos;ll use daily to build your own pipeline.
          </motion.p>

          <div className="space-y-3">
            {SELF_SOURCE_CHANNELS.map((ch) => {
              const Icon = ch.icon;
              return (
                <motion.div
                  key={ch.channel}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-accent/10 text-emerald-accent shrink-0">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{ch.channel}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ch.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── How to Submit a Lead ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            How to Submit a Lead
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-4">
            When you identify a prospect worth pursuing, submit them through the{" "}
            <span className="font-semibold text-foreground">Obsidion Sales Dashboard</span>. Here&apos;s what to include:
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Field</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">What to Enter</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {SUBMIT_FIELDS.map((row) => (
                    <tr key={row.field} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-semibold text-foreground">{row.field}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.enter}</td>
                      <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{row.matters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4 flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Before every call, check the website.</span> If
              it&apos;s outdated, broken, or missing — that&apos;s your opening. If it looks
              great, shift to SEO, follow-up automation, or the mobile app.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Prioritization ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Prioritizing Your Outreach
          </SectionLabel>

          <div className="space-y-4">
            {PRIORITIES.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.level}
                  variants={fadeUp}
                  className={`rounded-2xl border ${p.borderColor} bg-card p-6 shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${p.bgColor} ${p.color}`}>
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{p.level}</h4>
                      <span className="text-xs text-muted-foreground">{p.instruction}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 pl-12">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${p.bgColor} shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Daily Workflow ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Daily Prospecting Workflow
          </SectionLabel>

          <motion.div variants={fadeUp}>
            <FlowChart
              steps={DAILY_WORKFLOW}
              accentClass="bg-accent text-white"
              arrowClass="text-accent"
            />
          </motion.div>
        </motion.section>

        {/* ── Lead Hygiene ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Lead Hygiene Rules
          </SectionLabel>

          <div className="space-y-3">
            {HYGIENE_RULES.map((rule) => (
              <motion.div
                key={rule}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
              >
                <Database size={16} className="text-amber-accent mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── The Math ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            The Math
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Metric</th>
                    <th className="text-right px-5 py-3 font-semibold text-emerald-accent text-xs uppercase tracking-wider">Typical Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Connect rate (someone picks up)", range: "15-20%" },
                    { metric: "Conversations that lead to interest", range: "20-30% of connects" },
                    { metric: "Interested conversations that book", range: "40-60%" },
                    { metric: "Appointments booked per day", range: "1-3 (target), 4-6 (high performer)" },
                  ].map((row) => (
                    <tr key={row.metric} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">{row.metric}</td>
                      <td className="px-5 py-3 text-right font-semibold text-emerald-accent">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4">
            <p className="text-sm font-semibold text-foreground">
              More activity = more conversations = more appointments. If your
              appointment count is low, check your daily volume first. It&apos;s almost always the answer.
            </p>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="lead-lists"
            upNext={[
              { slug: "ambassador-setup", title: "Ambassador Profile Setup" },
              { slug: "products", title: "Product Knowledge (Lite)" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Lead Generation</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
