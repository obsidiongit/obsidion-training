"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  GitBranch,
  Link2,
  Phone,
  ShoppingBag,
  UserX,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  scaleIn,
  SectionLabel,
  DiagnosticQuestion,
  PitchQuote,
  FAQAccordion,
  ProductPageHero,
  ProductPageFooter,
} from "./shared";

/* ─── data ─── */

const FEATURES = [
  {
    icon: Mail,
    title: "Automated Email Sequences",
    text: "Triggered by visitor behavior — form submissions, link clicks, appointment no-shows, or time-based re-engagement. Runs on its own once configured.",
  },
  {
    icon: MessageSquare,
    title: "SMS Follow-Up",
    text: "For opt-in leads, SMS gets added at key points. Response rates on SMS are significantly higher than email — when email fails, a text often gets the response.",
  },
  {
    icon: GitBranch,
    title: "Lead Nurture Workflows",
    text: "For prospects not ready to buy now, nurture sequences keep the business in front of them — relevant content, check-ins, seasonal offers — until timing is right.",
  },
  {
    icon: Link2,
    title: "CRM Integration",
    text: "Every touchpoint is logged. Triggers based on CRM status changes. When a lead responds, the sequence pauses and routes to the owner.",
  },
] as const;

interface WorkflowStep {
  timing: string;
  channel: string;
  channelIcon: typeof Mail;
  message: string;
}

interface Workflow {
  id: string;
  title: string;
  icon: typeof Mail;
  trigger: string;
  note?: string;
  steps: WorkflowStep[];
}

const WORKFLOWS: Workflow[] = [
  {
    id: "new-lead",
    title: "New Lead",
    icon: Mail,
    trigger:
      "Contact form submitted, quote request, or inquiry landing page conversion.",
    note: "As soon as a lead responds at any step, the automated sequence pauses and routes to the owner. The sequence is the safety net — the owner still closes the deal.",
    steps: [
      {
        timing: "Immediate",
        channel: "Email",
        channelIcon: Mail,
        message: "Acknowledgment — \"Got your message, we'll be in touch shortly\"",
      },
      {
        timing: "Immediate",
        channel: "CRM Alert",
        channelIcon: Phone,
        message: "Owner/AE notification to call now",
      },
      {
        timing: "Day 1",
        channel: "Email",
        channelIcon: Mail,
        message: "Follow-up — restate what they asked about, prompt next step",
      },
      {
        timing: "Day 3",
        channel: "SMS",
        channelIcon: MessageSquare,
        message: "\"Hey [Name], still looking into [service]? Happy to help.\"",
      },
      {
        timing: "Day 7",
        channel: "Email",
        channelIcon: Mail,
        message: "Closing the loop — \"Still interested or not the right time?\"",
      },
      {
        timing: "Day 10",
        channel: "SMS",
        channelIcon: MessageSquare,
        message: "Final touch before moving to nurture",
      },
      {
        timing: "Day 14+",
        channel: "Nurture",
        channelIcon: GitBranch,
        message: "Long-form re-engagement sequence",
      },
    ],
  },
  {
    id: "missed-call",
    title: "Missed Call",
    icon: Phone,
    trigger: "Inbound call goes unanswered during or after business hours.",
    note: "The immediate SMS after a missed call is one of the highest-converting touches in the system. Most businesses lose these leads entirely.",
    steps: [
      {
        timing: "Within 60 sec",
        channel: "SMS",
        channelIcon: MessageSquare,
        message: "\"Hey, saw you called — what can I help you with?\"",
      },
      {
        timing: "Day 1",
        channel: "Email",
        channelIcon: Mail,
        message: "Follow-up — \"Tried to reach you, still happy to connect\"",
      },
      {
        timing: "Day 3",
        channel: "SMS",
        channelIcon: MessageSquare,
        message: "Second attempt, different angle",
      },
      {
        timing: "Day 7",
        channel: "Email",
        channelIcon: Mail,
        message: "Final follow-up before moving to nurture",
      },
    ],
  },
  {
    id: "post-purchase",
    title: "Post-Purchase",
    icon: ShoppingBag,
    trigger:
      "Transaction completed, service delivered, or appointment marked complete in CRM.",
    note: "The review request at Day 1 is time-sensitive — that's when the experience is freshest. Businesses that automate this step consistently outpace competitors on Google review count.",
    steps: [
      {
        timing: "Day 1",
        channel: "Email",
        channelIcon: Mail,
        message: "Thank you + review request (link to Google)",
      },
      {
        timing: "Day 7",
        channel: "Email",
        channelIcon: Mail,
        message: "Check-in — \"How did everything go?\"",
      },
      {
        timing: "Day 30",
        channel: "Email/SMS",
        channelIcon: MessageSquare,
        message: "Re-engagement — loyalty reward, referral ask, seasonal promo",
      },
      {
        timing: "Day 60",
        channel: "Email",
        channelIcon: Mail,
        message: "Soft upsell or rebooking prompt",
      },
    ],
  },
  {
    id: "re-engagement",
    title: "Re-Engagement",
    icon: UserX,
    trigger:
      "No activity (purchase, booking, or open) within 30, 60, or 90 days depending on the industry.",
    note: "Suppression at the end matters. Continuing to email unengaged contacts hurts deliverability across the whole list.",
    steps: [
      {
        timing: "Day 0",
        channel: "Email",
        channelIcon: Mail,
        message: "\"We miss you\" — acknowledge the gap, offer a reason to return",
      },
      {
        timing: "Day 7",
        channel: "SMS",
        channelIcon: MessageSquare,
        message: "Shorter version of the same message",
      },
      {
        timing: "Day 14",
        channel: "Email",
        channelIcon: Mail,
        message: "Final outreach — limited-time offer or direct ask",
      },
      {
        timing: "Day 21",
        channel: "System",
        channelIcon: GitBranch,
        message: "Move to suppressed list — protect sender reputation",
      },
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "\"We already send emails — how is this different?\"",
    answer:
      "Sending a newsletter is broadcast marketing — same message to everyone. Behavioral sequences are triggered by what a specific person did: filled a form, missed a call, hasn't come back in 60 days. The message is relevant to where they are. That's why conversion rates are higher.",
  },
  {
    question: "\"Do I need to write all the content myself?\"",
    answer:
      "No — we build the sequences and write the copy as part of the setup. You review and approve, but you're not starting from a blank page. Once live, it runs without you writing anything new.",
  },
  {
    question: "\"What if customers opt out of SMS?\"",
    answer:
      "Opt-outs are handled automatically — anyone who replies STOP gets removed from SMS sequences immediately. Compliance is built into the system from day one.",
  },
  {
    question: "\"How does it know when to trigger?\"",
    answer:
      "It's connected to your CRM and website. Form fills create leads and fire sequences. Missed calls fire the missed call trigger. Completed transactions start post-purchase. The triggers are defined at setup — no manual switches day-to-day.",
  },
  {
    question: "\"What's a realistic conversion rate on these sequences?\"",
    answer:
      "Depends on industry, offer, and lead warmth. The honest answer: it's almost always better than zero follow-up, which is what most businesses have. The missed call SMS alone — going out within 60 seconds — recovers leads that would have called the next person.",
  },
  {
    question: "\"Does this replace my CRM, or work with it?\"",
    answer:
      "Works with it. The sequences run through your Obsidion CRM — if you're already using something else, we assess integrations before committing. The goal isn't more tools; it's automatic follow-up regardless of what's in place.",
  },
];

/* ─── component ─── */

export default function RemarketingProduct({
  roleSlug,
}: {
  roleSlug: string;
}) {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const wf = WORKFLOWS[activeWorkflow];

  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/products`}
        backLabel="All products"
        eyebrow="Product Knowledge"
        title="Remarketing"
        description="Automated follow-up via email, SMS, and ad retargeting. Catches leads that don't convert on the first touch."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Why It Matters ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <DiagnosticQuestion>
            &ldquo;If a lead fills out a form on your site tonight at 9pm, what
            happens — who sees it, and how fast do they follow up?&rdquo;
          </DiagnosticQuestion>
          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-3xl"
          >
            Most owners will either describe a manual process, admit it&apos;s
            inconsistent, or go quiet. The follow-up window is short — leads
            contacted within five minutes are dramatically more likely to
            convert. Most small businesses contact leads hours later, or not at
            all.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4">
            <PitchQuote variant="accent" label="Follow-Up Pitch">
              The system picks it up the moment it comes in — email goes out in
              seconds, SMS follows if they don&apos;t respond, and you get a
              notification to jump in when they engage. The leads don&apos;t go
              cold waiting on a manual follow-up.
            </PitchQuote>
          </motion.div>
        </motion.section>

        {/* ── What It Does ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            What It Does
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-amber-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-accent/10 text-amber-accent mb-4 transition-colors group-hover:bg-amber-accent group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Workflow Sequences ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Workflow Sequences
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            These are the core automated sequences. Each can be adjusted for
            vertical, tone, and trigger logic — but these are the starting
            points.
          </motion.p>

          {/* Workflow tabs */}
          <motion.div variants={fadeUp}>
            <div className="flex flex-wrap gap-2 mb-6">
              {WORKFLOWS.map((w, i) => {
                const Icon = w.icon;
                return (
                  <button
                    key={w.id}
                    onClick={() => setActiveWorkflow(i)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      activeWorkflow === i
                        ? "bg-accent text-white shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Icon size={14} />
                    {w.title}
                  </button>
                );
              })}
            </div>

            {/* Active workflow content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={wf.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
              >
                {/* Trigger */}
                <div className="px-6 py-4 border-b border-border bg-muted/30">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Trigger
                  </p>
                  <p className="text-sm text-foreground">{wf.trigger}</p>
                </div>

                {/* Steps */}
                <div className="p-6">
                  <div className="space-y-0">
                    {wf.steps.map((step, i) => {
                      const ChannelIcon = step.channelIcon;
                      return (
                        <div
                          key={i}
                          className="relative flex gap-4 items-start"
                        >
                          {/* Connector */}
                          <div className="flex flex-col items-center shrink-0 w-10">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                              <ChannelIcon size={16} strokeWidth={2} />
                            </div>
                            {i < wf.steps.length - 1 && (
                              <div className="w-px h-6 bg-border" />
                            )}
                          </div>

                          {/* Content */}
                          <div className="pb-6 pt-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="text-xs font-bold bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                                {step.timing}
                              </span>
                              <span className="text-xs font-semibold text-muted-foreground">
                                {step.channel}
                              </span>
                            </div>
                            <p className="text-sm text-foreground leading-relaxed">
                              {step.message}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {wf.note && (
                    <div className="mt-4 rounded-xl bg-accent/[0.04] border border-accent/10 px-5 py-3">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                        Key Rule
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {wf.note}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* ── Ad Retargeting ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Ad Retargeting
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent">
                <MonitorSmartphone size={22} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Display &amp; Social Retargeting
                </h3>
                <p className="text-xs text-muted-foreground">
                  Separate layer from email/SMS — triggered by site visits
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              {[
                {
                  step: "1",
                  label: "Pixel tracks visitor",
                  detail: "Placed on the client's website",
                },
                {
                  step: "2",
                  label: "Visitor leaves without converting",
                  detail: "No form fill, no call, no booking",
                },
                {
                  step: "3",
                  label: "Ads follow them",
                  detail: "Google Display, Facebook, Instagram for 30 days",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  variants={scaleIn}
                  className="relative rounded-xl border border-border bg-muted/30 p-4 text-center"
                >
                  <div className="text-2xl font-black text-purple-accent mb-2">
                    {s.step}
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {s.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.detail}</p>
                  {i < 2 && (
                    <ArrowRight
                      size={14}
                      className="hidden sm:block absolute top-1/2 -right-3 text-muted-foreground"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <PitchQuote variant="purple" label="How to Explain It">
              You know how you look at something online and then you start
              seeing ads for it everywhere? That&apos;s retargeting. We set that
              up for your business. Someone visits your site, doesn&apos;t book
              or fill out a form, and then for the next 30 days your brand
              follows them around the internet. Most of your competitors
              aren&apos;t doing this for a business your size.
            </PitchQuote>

            <div className="mt-6 rounded-xl bg-amber-accent/[0.04] border border-amber-accent/10 px-5 py-3">
              <p className="text-xs font-semibold text-amber-accent uppercase tracking-wider mb-1">
                When to Pitch It
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Retargeting is most valuable when the client already has
                meaningful web traffic. Without traffic, there&apos;s nothing to
                retarget. Lead with email/SMS for low-traffic businesses;
                introduce retargeting once the traffic foundation is there.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* ── FAQ ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Common Client Questions
          </SectionLabel>

          <FAQAccordion items={FAQ_ITEMS} />
        </motion.section>
      </main>

      <ProductPageFooter />
    </div>
  );
}
