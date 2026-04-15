"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Globe,
  Search,
  RefreshCw,
  Smartphone,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const PRODUCTS = [
  {
    icon: Globe,
    title: "Custom Websites",
    oneLiner: "We build custom websites for businesses — not templates. Your site goes live in about a week.",
    whenToMention: "The prospect's website is outdated, ugly, slow, or doesn't exist.",
    painSignals: [
      "\"Our website is old / embarrassing / we need to redo it\"",
      "\"We built it ourselves on Wix / Squarespace and it's not working\"",
      "\"We don't even have a website\"",
    ],
    color: "accent",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    oneLiner: "We make sure your business shows up when people Google what you do in your area.",
    whenToMention: "The prospect isn't showing up on Google, or they don't know where they rank.",
    painSignals: [
      "\"I don't think we show up on Google\"",
      "\"Our competitors are everywhere online and we're invisible\"",
      "\"We get all our business from referrals\" (zero online visibility)",
    ],
    color: "emerald-accent",
  },
  {
    icon: RefreshCw,
    title: "Remarketing (Automated Follow-Up)",
    oneLiner: "We automate the follow-up so leads don't go cold after the first contact.",
    whenToMention: "The prospect mentions losing leads, forgetting to follow up, or no system for staying in touch.",
    painSignals: [
      "\"People call but don't end up coming in\"",
      "\"We're bad at following up\"",
      "\"Leads just kind of disappear\"",
    ],
    color: "purple-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    oneLiner: "We build a branded app for your business — loyalty, push notifications, ordering — all under your name.",
    whenToMention: "The prospect has repeat customers and relies on third-party platforms that take a cut.",
    painSignals: [
      "\"We use DoorDash / UberEats and the fees are killing us\"",
      "\"We want a loyalty program but haven't set one up\"",
      "\"We want our customers to order directly from us\"",
    ],
    color: "amber-accent",
  },
] as const;

const CHEAT_SHEET = [
  { product: "Website", oneLiner: "We build custom websites — not templates. Live in a week.", trigger: "\"Our site is old / bad / missing\"" },
  { product: "SEO", oneLiner: "We get you showing up on Google in your area.", trigger: "\"We don't show up online / competitors do\"" },
  { product: "Remarketing", oneLiner: "We automate follow-up so leads don't go cold.", trigger: "\"Leads disappear / we forget to follow up\"" },
  { product: "Mobile App", oneLiner: "A branded app — loyalty, orders, notifications.", trigger: "\"Fees from third-party apps / want loyalty\"" },
] as const;

const colorMap: Record<string, { bg: string; text: string; border: string; badgeBg: string }> = {
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20", badgeBg: "bg-accent/[0.04]" },
  "emerald-accent": { bg: "bg-emerald-accent/10", text: "text-emerald-accent", border: "border-emerald-accent/20", badgeBg: "bg-emerald-accent/[0.04]" },
  "purple-accent": { bg: "bg-purple-accent/10", text: "text-purple-accent", border: "border-purple-accent/20", badgeBg: "bg-purple-accent/[0.04]" },
  "amber-accent": { bg: "bg-amber-accent/10", text: "text-amber-accent", border: "border-amber-accent/20", badgeBg: "bg-amber-accent/[0.04]" },
};

/* ─── component ─── */

export default function ProductKnowledgeLiteContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Product Knowledge"
        title="Product Knowledge (Lite)"
        description="Elevator pitches for every product — enough to book the meeting. The AE handles the deep dive."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── You Don't Need to Be the Expert ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            You Don&apos;t Need to Be the Expert
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 mb-6">
            <p className="text-sm text-foreground leading-relaxed">
              You need enough knowledge to have a 2-minute conversation that sounds credible — and
              to recognize when a prospect&apos;s pain maps to one of Obsidion&apos;s products.
              Your job is to book the meeting. The AE handles the deep dive.
            </p>
          </motion.div>
        </motion.section>

        {/* ── The Four Products ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            The Four Products
          </SectionLabel>

          <div className="space-y-6">
            {PRODUCTS.map((product) => {
              const Icon = product.icon;
              const c = colorMap[product.color];
              return (
                <motion.div
                  key={product.title}
                  variants={fadeUp}
                  className={`rounded-2xl border ${c.border} bg-card p-6 sm:p-8 shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight">{product.title}</h3>
                  </div>

                  <div className={`rounded-xl ${c.badgeBg} border ${c.border} px-5 py-4 mb-4`}>
                    <p className="text-sm font-medium text-foreground italic">
                      &ldquo;{product.oneLiner}&rdquo;
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <span className="font-semibold text-foreground">When to mention it:</span>{" "}
                    {product.whenToMention}
                  </p>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pain signals to listen for:</span>
                    <ul className="mt-2 space-y-1.5">
                      {product.painSignals.map((signal) => (
                        <li key={signal} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${c.bg} shrink-0`} />
                          {signal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── How They Work Together ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            How They Work Together
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-purple-accent/20 bg-purple-accent/[0.04] px-6 py-5">
            <p className="text-sm text-foreground leading-relaxed italic">
              &ldquo;The website is the foundation — it&apos;s where everything lives. SEO makes
              sure people can find it on Google. Remarketing follows up with the ones who don&apos;t
              buy right away. And the app keeps your best customers coming back. They all connect.&rdquo;
            </p>
          </motion.div>
        </motion.section>

        {/* ── Cheat Sheet ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Call Cheat Sheet
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Keep this open during calls:
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Product</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">One-Liner</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Use When They Say...</th>
                  </tr>
                </thead>
                <tbody>
                  {CHEAT_SHEET.map((row) => (
                    <tr key={row.product} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-bold text-foreground">{row.product}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.oneLiner}</td>
                      <td className="px-5 py-3 text-muted-foreground italic hidden sm:table-cell">{row.trigger}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* ── What You Don't Need to Know ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            If They Ask Something You Don&apos;t Know
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5">
            <div className="flex items-start gap-3">
              <MessageCircle size={18} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground leading-relaxed italic mb-3">
                  &ldquo;Great question — that&apos;s exactly the kind of thing our specialist covers
                  in the meeting. Let me get you on the calendar so they can walk you through it properly.&rdquo;
                </p>
                <p className="text-sm font-semibold text-foreground">Never guess. Never make something up. Book the meeting.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="products"
            upNext={[
              { slug: "on-the-call", title: "Outreach Playbook" },
              { slug: "getting-paid", title: "Getting Paid" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Product Knowledge</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
