"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Search,
  Gauge,
  Presentation,
  CalendarCheck,
  CircleCheck,
  CircleAlert,
  CircleX,
  ArrowRight,
  ClipboardList,
  Mail,
  PhoneCall,
  MessageSquare,
  Users,
  Lightbulb,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  scaleIn,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
  ProductPageFooter,
} from "../products/shared";

/* ─── data ─── */

const DISCOVERY_PHASES = [
  {
    phase: "1",
    title: "Intro & Permission",
    time: "0–2 min",
    icon: Phone,
    dotColor: "bg-accent",
    lineColor: "from-accent to-emerald-accent",
    description:
      "Don't assume they remember why you're calling. Name it fast.",
    quote:
      "Hey [Name], thanks for making time — I know 30 minutes is real time. Quick agenda: I want to hear how you're currently handling website, local search, and lead follow-up, share how we typically fix that stack for businesses like yours, and see if it makes sense to go deeper. If it doesn't fit, I'll tell you straight. Sound good?",
    tip: "If they say now isn't great — don't push through it. Reschedule immediately.",
  },
  {
    phase: "2",
    title: "Situation",
    time: "2–10 min",
    icon: Search,
    dotColor: "bg-emerald-accent",
    lineColor: "from-emerald-accent to-amber-accent",
    description:
      "You're mapping their current setup. Think of it like a diagnostic, not an interrogation. One question at a time, then shut up and listen.",
    questions: [
      "Walk me through what happens when someone finds you online today — do you know where you show up?",
      "When a lead comes in after hours or fills out a form, what's the process?",
      "Are you on any kind of marketing retainer right now, or handling it internally?",
      "How long have things been set up the way they are?",
      "What's pushed you to think about this now — something change recently?",
    ],
    tip: "The last question is critical. If there's urgency, name it back to them later.",
  },
  {
    phase: "3",
    title: "Impact",
    time: "10–15 min",
    icon: Gauge,
    dotColor: "bg-amber-accent",
    lineColor: "from-amber-accent to-purple-accent",
    description:
      "This is where most AEs rush. Don't. People buy to solve problems they feel, not ones they've acknowledged intellectually.",
    questions: [
      "So if you're not showing up on maps or organic, how many calls a week do you think you're missing?",
      "If a lead goes cold because no one followed up fast enough, what does one client represent in revenue?",
      "You mentioned your site is outdated — are you sending people there in your outreach anyway? What happens when they land on it?",
    ],
    tip: "You don't need exact numbers. You need them to say something out loud that they haven't said to themselves yet.",
  },
  {
    phase: "4",
    title: "Solution Alignment",
    time: "15–25 min",
    icon: Presentation,
    dotColor: "bg-purple-accent",
    lineColor: "from-purple-accent to-accent",
    description:
      "Don't pitch features. Pitch what they told you. Walk through only the product areas that map to their pain.",
    quote:
      "Based on what you said — especially [specific pain they named] — here's how we typically solve that. Three layers: the site as the hub, local visibility so people find you first, and automated follow-up so leads don't go cold between touchpoints. I'll keep it tight, you steer if I'm off.",
    tip: "One story beats five features. Pick one specific result relevant to their vertical.",
  },
  {
    phase: "5",
    title: "Next Step",
    time: "25–30 min",
    icon: CalendarCheck,
    dotColor: "bg-accent",
    lineColor: "",
    description:
      "The goal is one thing: get them to fill out the Account Creation / Onboarding questionnaire on the Quick Sites page.",
    quote:
      "The way we get started is through a quick onboarding questionnaire — it takes about ten minutes and lets our team scope exactly what you need before we send anything over. I'll drop the link in our follow-up email right after this call. Does that work?",
    tip: "Never end a call without a specific next action tied to a specific date.",
  },
] as const;

const SIGNALS = [
  {
    level: "Green",
    label: "Strong Fit",
    icon: CircleCheck,
    color: "bg-emerald-accent/10 text-emerald-accent border-emerald-accent/20",
    items: [
      "Active pain they can describe in their own words",
      "Recent trigger (new competition, second location, parted with agency)",
      "Decision-maker on the call, or clearly identified",
      "Already spending on marketing and not seeing results",
    ],
  },
  {
    level: "Yellow",
    label: "Proceed but Probe",
    icon: CircleAlert,
    color: "bg-amber-accent/10 text-amber-accent border-amber-accent/20",
    items: [
      "\"We've been meaning to deal with this\" — no urgency yet, dig for the trigger",
      "\"My partner handles that\" — clarify who needs to be in the next conversation",
      "\"We tried something similar\" — ask what went wrong specifically before positioning",
    ],
  },
  {
    level: "Red",
    label: "Disqualify or Deprioritize",
    icon: CircleX,
    color: "bg-destructive/10 text-destructive border-destructive/20",
    items: [
      "No budget and no timeline (\"maybe next quarter\" with no specifics)",
      "Not the decision-maker and unable to loop one in",
      "Locked in a long-term contract with no exit near",
      "Looking for something Obsidion doesn't do (e.g., paid ad management only)",
    ],
  },
] as const;

const TRIAL_CLOSES = [
  "If we could get your site live in under two weeks and start pulling in local search traffic — is that the kind of result that would justify the investment?",
  "It sounds like lead follow-up is the biggest leak right now. If we automated that, what would change?",
  "Is there anything that would make this a no before we even look at scope?",
] as const;

const FOLLOWUP_CADENCE = [
  {
    touch: "1",
    timing: "Day 0",
    channel: "Email",
    channelIcon: Mail,
    description: "Send the Quick Sites questionnaire link + summary of what you talked about",
  },
  {
    touch: "2",
    timing: "Day 3",
    channel: "Email",
    channelIcon: Mail,
    description: "Value-add follow-up — a result, a resource, or a relevant angle. Not \"just checking in.\"",
  },
  {
    touch: "3",
    timing: "Day 7",
    channel: "Call",
    channelIcon: PhoneCall,
    description: "Second attempt with a new angle or a response to something they said on call 1",
  },
  {
    touch: "4",
    timing: "Day 10",
    channel: "Email",
    channelIcon: Mail,
    description: "Reference the questionnaire specifically — \"Takes 10 minutes, gets you a real proposal\"",
  },
  {
    touch: "5",
    timing: "Day 14",
    channel: "Call / DM",
    channelIcon: MessageSquare,
    description: "Final proactive touch before moving to nurture sequence",
  },
] as const;

/* ─── component ─── */

export default function CallFrameworksContent({
  roleSlug,
}: {
  roleSlug: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/on-the-call`}
        backLabel="On the Call"
        eyebrow="On the Call"
        title="Call Frameworks"
        description="The 30-minute discovery structure, qualifying signals, closing language, follow-up cadence, and second-call guidance."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Discovery Call Framework ── */}
        <motion.section
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Discovery Call Framework (30 min)
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-4"
          >
            The goal of a first call isn&apos;t to close — it&apos;s to earn the
            next step. Specifically: get them interested enough to fill out the
            Account Creation questionnaire on the Quick Sites page.
          </motion.p>

          {/* Phase overview table */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm mb-10"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider w-16">
                      Phase
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                      What You&apos;re Doing
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DISCOVERY_PHASES.map((phase) => (
                    <tr
                      key={phase.phase}
                      className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-xs">
                          {phase.phase}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {phase.title}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground">
                        {phase.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Deep-dive timeline */}
          <div className="relative space-y-0">
            {DISCOVERY_PHASES.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.phase}
                  variants={fadeUp}
                  className="relative flex gap-5 sm:gap-8 items-start"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      variants={scaleIn}
                      className={`relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${step.dotColor} text-white shadow-lg`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </motion.div>
                    {i < DISCOVERY_PHASES.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + i * 0.1,
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className={`w-0.5 flex-1 min-h-8 bg-gradient-to-b ${step.lineColor} origin-top`}
                      />
                    )}
                  </div>

                  <div className="pb-10 sm:pb-12 pt-1 max-w-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Phase {step.phase} &middot; {step.time}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {step.quote && (
                      <PitchQuote variant="accent" label="Talk Track">
                        {step.quote}
                      </PitchQuote>
                    )}

                    {"questions" in step && step.questions && (
                      <ul className="space-y-2 mt-1">
                        {step.questions.map((q, qi) => (
                          <li
                            key={qi}
                            className="rounded-lg border border-accent/10 bg-accent/[0.03] px-4 py-3"
                          >
                            <p className="text-sm italic leading-relaxed text-foreground">
                              &ldquo;{q}&rdquo;
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.tip && (
                      <div className="flex items-start gap-2 mt-4">
                        <Lightbulb size={14} className="text-accent mt-0.5 shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Qualifying Signals ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Qualifying Signals
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            Listen for these during the Situation and Impact phases. They tell you
            whether to go deeper or redirect.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={signal.level}
                  variants={fadeUp}
                  className={`rounded-2xl border p-6 ${signal.color}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={20} strokeWidth={2} />
                    <div>
                      <h3 className="text-sm font-bold">{signal.level} Light</h3>
                      <p className="text-xs opacity-70">{signal.label}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {signal.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed opacity-90"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 opacity-50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Closing Framework ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Closing Framework
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            The close for a first call is low-friction: get them to the
            questionnaire. Test the temperature first with trial closes.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-3 mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-accent">
              Trial Close Language
            </h3>
            {TRIAL_CLOSES.map((tc, i) => (
              <div
                key={i}
                className="rounded-xl border border-purple-accent/15 bg-purple-accent/[0.03] px-5 py-4"
              >
                <p className="text-sm italic leading-relaxed text-foreground">
                  &ldquo;{tc}&rdquo;
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-accent mb-3">
              The Questionnaire Handoff
            </h3>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Summarize the 2–3 pain points they named",
                  "Connect each to what Obsidion solves",
                  "Frame questionnaire as scoping, not generic pitch",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-purple-accent/15 bg-purple-accent/[0.03] px-4 py-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-accent text-white font-bold text-xs shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>

              <PitchQuote variant="purple" label="Handoff Script">
                Rather than send you a brochure, our process starts with a quick
                intake form so our team can build something specific to your
                situation. It&apos;s on the Quick Sites page — I&apos;ll send the
                link in my follow-up email right after this. Takes about ten minutes
                and then we&apos;ll have a real starting point.
              </PitchQuote>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Follow-Up Cadence ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Follow-Up Cadence
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-8"
          >
            Track all touches in Notion. Every prospect should have a clear
            status, last contact date, and next action logged.
          </motion.p>

          <div className="relative space-y-0">
            {FOLLOWUP_CADENCE.map((step, i) => {
              const ChannelIcon = step.channelIcon;
              return (
                <motion.div
                  key={step.touch}
                  variants={fadeUp}
                  className="relative flex gap-5 sm:gap-8 items-start"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      variants={scaleIn}
                      className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-amber-accent text-white shadow-lg"
                    >
                      <ChannelIcon size={22} strokeWidth={1.8} />
                    </motion.div>
                    {i < FOLLOWUP_CADENCE.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + i * 0.1,
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="w-0.5 flex-1 min-h-8 bg-gradient-to-b from-amber-accent/60 to-amber-accent/10 origin-top"
                      />
                    )}
                  </div>

                  <div className="pb-8 sm:pb-10 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-accent">
                        Touch {step.touch}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        &middot; {step.timing} &middot; {step.channel}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Day 0 email template */}
          <motion.div variants={fadeUp} className="mt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-accent mb-3">
              Day 0 Email Template
            </h3>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="rounded-xl border border-amber-accent/15 bg-amber-accent/[0.03] px-5 py-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-accent">
                  Subject: Quick follow-up — [their business name]
                </p>
                <div className="text-sm leading-relaxed text-foreground space-y-3">
                  <p>Hey [Name],</p>
                  <p>
                    Good talking through [the thing they mentioned]. Based on what
                    you shared, I think there&apos;s a real fit — especially around
                    [their #1 pain].
                  </p>
                  <p>
                    Next step is the Quick Sites questionnaire: [link]. It takes
                    about 10 minutes and lets our team scope what makes sense for
                    your situation before we put anything in front of you.
                  </p>
                  <p>
                    Happy to walk through it together if that&apos;s easier — just
                    let me know.
                  </p>
                  <p className="text-muted-foreground">[Your name]</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Second Call ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Second Call: Decision-Maker
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Users size={24} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Bringing in the Decision-Maker
                </h3>
                <p className="text-sm text-muted-foreground">
                  When the first call ends with &ldquo;I need to loop in my
                  partner&rdquo;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                "Get the DM's name and role before you hang up",
                "Offer to draft a short summary they can forward",
                "Book the second call with a firm time before leaving the first",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-accent/15 bg-accent/[0.03] px-4 py-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white font-bold text-xs shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground">{step}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <PitchQuote variant="accent" label="Scheduling">
                What&apos;s a time this week or next that works for both of you?
                I&apos;ll send a calendar invite so it&apos;s on both your radars.
              </PitchQuote>
              <PitchQuote variant="accent" label="Opening the Second Call">
                I brought [first contact&apos;s name] up to speed, but I&apos;d
                love to hear it from your side — what does the current website /
                lead process / marketing look like from your perspective?
              </PitchQuote>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <ProductPageFooter />
    </div>
  );
}
