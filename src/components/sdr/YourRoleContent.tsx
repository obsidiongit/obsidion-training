"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import FlowChart from "@/components/ui/FlowChart";
import {
  MapPin,
  Users,
  Phone,
  Mail,
  MessageCircle,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Target,
  TrendingUp,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const PIPELINE_STEPS = [
  { label: "Find the Lead", sublabel: "You (SDR)", icon: Target },
  { label: "Start a Conversation", sublabel: "You (SDR)", icon: Phone },
  { label: "Qualify (BANT)", sublabel: "You (SDR)", icon: ClipboardCheck },
  { label: "Book the Appt", sublabel: "You (SDR)", icon: MapPin },
  { label: "AE Closes", sublabel: "Account Executive", icon: TrendingUp },
];

const BANT = [
  {
    letter: "B",
    label: "Budget",
    meaning: "They can afford the service",
    signals: "Already spending on marketing, have revenue, not a brand-new startup with no cash flow",
  },
  {
    letter: "A",
    label: "Authority",
    meaning: "You're talking to the decision maker",
    signals: "They're the owner, partner, or the person who signs off on marketing spend",
  },
  {
    letter: "N",
    label: "Need",
    meaning: "They have a real problem Obsidion solves",
    signals: "Meta spend is opaque or underperforming; website is bad; invisible on Google; leads slip through; OR they only need a site rebuild — all valid",
  },
  {
    letter: "T",
    label: "Timeline",
    meaning: "They're ready to act, not \"someday\"",
    signals: "Mentioned a goal, a deadline, a season, or frustration that's costing them now",
  },
] as const;

const CHANNELS = [
  {
    icon: Phone,
    title: "Phone",
    description: "Cold calls, warm follow-ups, voicemails. This is your primary weapon.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Outreach sequences, follow-ups after calls, value-add touches.",
    color: "bg-emerald-accent/10 text-emerald-accent",
  },
  {
    icon: MessageCircle,
    title: "Social",
    description: "LinkedIn and Facebook DMs, profile engagement, ambassador-style outreach.",
    color: "bg-purple-accent/10 text-purple-accent",
  },
] as const;

const SUCCESS_METRICS = [
  { metric: "1–3 qualified appointments per day", detail: "This is your target. High performers hit 4–6." },
  { metric: "Prospects show up", detail: "If your appointments no-show at a high rate, your qualification needs work." },
  { metric: "AEs are closing your appointments", detail: "If AEs can't close what you book, qualification or notes need more depth." },
  { metric: "Activity is consistent", detail: "Calls, emails, and social every single day. Not just on good days." },
] as const;

const ROLE_IS_NOT = [
  "Not a closing role. You don't negotiate pricing, run demos, or ask for the sale.",
  "Not a passive role. Nobody is handing you inbound leads. You go find the conversations.",
  "Not a \"figure it out\" role. There's a playbook, scripts, and a daily structure. Follow the system first.",
] as const;

const ROLE_VOICE_TLDR = {
  tldr: "With owners, lead with growth and plain words — ads, advertising. Name Meta (Facebook/Instagram) when you are explaining what we do, not as every opener.",
  meansForYou: [
    "Product Knowledge (Lite) stays specific about Meta; cold conversations stay understandable.",
    "If they only need a website or SEO, that path is still valid — do not force ads into every first sentence.",
  ],
} as const;

/* ─── component ─── */

export default function YourRoleContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Role Overview"
        title="Your Role as an SDR"
        description="Speak with business owners about how Obsidion helps them grow and scale — more revenue, not just 'a nicer website.' Paid advertising (usually on Meta) is the usual focus; the rest of the stack still matters. Foundation for everything else."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── What You Do ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            What You Do
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 mb-8">
            <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">
              You find them. You qualify them. You book the meeting. The AE closes the deal.
            </p>
          </motion.div>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Your job is to talk with business owners about what Obsidion offers to help them{" "}
            <span className="font-semibold text-foreground">grow and scale</span> — more customers,
            more revenue, a bigger operation. They did not go into business to stay flat. You are
            not closing deals or quoting full projects; you open the door and hand off with context.
            The AE walks through it.
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-accent/25 bg-emerald-accent/[0.06] px-5 py-4 mb-8">
            <h3 className="text-sm font-bold text-foreground mb-2">The ≈80/20 rule (how we talk about product)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Roughly 80%</span> of strong conversations
              lean on <span className="font-semibold text-foreground">Meta (Facebook and Instagram) ads</span>{" "}
              — creatives, campaigns, and visibility inside their ad account. That is where a lot of
              revenue comes from for us and for them.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              <span className="font-semibold text-foreground">Roughly 20%</span> — still important — is
              everything else: custom website, local SEO, remarketing, app. If someone{" "}
              <span className="font-semibold text-foreground">only needs a website</span> or a
              visibility fix with no ads yet, that is still a real deal. Match the conversation to
              their pain; do not force Meta into every opener.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-purple-accent/25 bg-purple-accent/[0.06] px-5 py-4 mb-8"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-purple-accent mb-1">TL;DR</p>
            <p className="text-sm text-foreground leading-relaxed font-medium mb-3">{ROLE_VOICE_TLDR.tldr}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              What this means for you
            </p>
            <ul className="space-y-2">
              {ROLE_VOICE_TLDR.meansForYou.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">The Sales Pipeline</h3>
            <FlowChart
              steps={PIPELINE_STEPS}
              accentClass="bg-accent text-white"
              arrowClass="text-accent"
            />
          </motion.div>
        </motion.section>

        {/* ── The Handoff ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            The Handoff
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            When you book an appointment, you schedule the meeting, attach your notes, and step away.
            The AE takes it from there. Your notes matter — the AE walks in cold without them.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-accent/20 bg-emerald-accent/[0.04] p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-emerald-accent" />
                <h4 className="text-sm font-bold text-foreground">Good Handoff Notes</h4>
              </div>
              <ul className="space-y-2">
                {[
                  "Business name, owner name, location",
                  "What they do and how big they are",
                  "What problem they mentioned",
                  "Which Obsidion products map to their pain",
                  "Any timeline or urgency they mentioned",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-red-400/20 bg-red-400/[0.04] p-6">
              <div className="flex items-center gap-2 mb-3">
                <XCircle size={18} className="text-red-400" />
                <h4 className="text-sm font-bold text-foreground">Bad Handoff Notes</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                &ldquo;Seemed interested.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                That&apos;s not a handoff — that&apos;s a guess. The AE has nothing to work with.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4 flex items-start gap-3">
            <ArrowRight size={16} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Want to grow into an AE role?</span>
              {" "}
              You can sit in on AE calls — it&apos;s optional but highly encouraged. Talk to your manager about joining live calls.
            </p>
          </motion.div>
        </motion.section>

        {/* ── BANT Qualification ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            BANT Qualification
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Not every conversation is a qualified appointment. You get credit when the prospect
            meets BANT criteria. You don&apos;t need all four rock-solid — but you need at least two
            or three strong signals.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BANT.map((item) => (
              <motion.div
                key={item.letter}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent font-black text-lg">
                    {item.letter}
                  </div>
                  <h4 className="text-base font-bold">{item.label}</h4>
                </div>
                <p className="text-sm text-foreground font-medium mb-2">{item.meaning}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold">Listen for:</span> {item.signals}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={15} className="text-emerald-accent" />
                <span className="text-sm font-bold text-foreground">Counts</span>
              </div>
              <p className="text-sm text-muted-foreground">Prospect shows up AND met the BANT criteria you identified.</p>
            </div>
            <div className="rounded-xl border border-red-400/20 bg-red-400/[0.04] px-5 py-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle size={15} className="text-red-400" />
                <span className="text-sm font-bold text-foreground">Doesn&apos;t Count</span>
              </div>
              <p className="text-sm text-muted-foreground">No-shows, or clearly unqualified (not a decision maker, no real business, no need).</p>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Your Three Channels ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Your Three Channels
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            You have three ways to reach prospects. You&apos;ll use all three, every day. Phone opens the
            most doors, email keeps the conversation going, and social builds trust.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${channel.color} mb-4`}>
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h4 className="text-base font-bold mb-2">{channel.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{channel.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── What Success Looks Like ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            What Success Looks Like
          </SectionLabel>

          <div className="space-y-4">
            {SUCCESS_METRICS.map((item) => (
              <motion.div
                key={item.metric}
                variants={fadeUp}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">{item.metric}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── What This Role Is Not ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-red-400" textClass="text-red-400">
            What This Role Is Not
          </SectionLabel>

          <div className="space-y-3">
            {ROLE_IS_NOT.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-400/[0.04] px-5 py-4"
              >
                <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
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
              Find owners who want to grow, map what Obsidion can do (usually Meta-first — but not
              always), confirm fit, and put them on an AE&apos;s calendar with notes they can use. Do
              that 1–3 times a day, every day, and the money follows. The Outreach section shows how
              to sound organic — not a one-trick pitch.
            </p>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="your-role"
            upNext={[
              { slug: "on-the-call", title: "Outreach Playbook" },
              { slug: "lead-lists", title: "Lead Generation & Prospecting" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">
            Obsidion Training Hub &middot; SDR Role Overview
          </p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
