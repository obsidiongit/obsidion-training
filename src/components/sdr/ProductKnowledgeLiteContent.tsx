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

const PAGE_TLDR = {
  tldr: "Obsidion sells growth help: mostly paid ads (Facebook and Instagram) plus site, SEO, follow-up, and sometimes an app. You book meetings; AEs scope and price.",
  meansForYou: [
    "On live calls, lead with \"ads\" or \"paid advertising\" until they are already talking channels — then name Meta precisely (this page is where you learn that map).",
    "Match the stack to their pain; do not assume they know what \"Meta\" means.",
    "If you do not know a detail, hand off to the specialist — never guess pricing or tech.",
  ],
} as const;

const PRODUCTS = [
  {
    icon: Lightbulb,
    title: "Meta Ad Management (Primary — ~80%)",
    oneLiner: "We build the creatives and run your Meta (Facebook and Instagram) campaigns inside your own ad account — so spend and performance stay visible.",
    whenToMention: "Default pitch angle: they're boosting, running ads, paying an agency, or want to scale demand beyond referrals.",
    painSignals: [
      "\"We boost posts but it doesn't do anything\"",
      "\"Our agency won't give us access to our own ad account\"",
      "\"We're running Facebook/Instagram ads and don't know if they're working\"",
    ],
    tldr: "Creatives + campaign management in their own Meta (Facebook/Instagram) ad account — full visibility on spend.",
    meansForYou: [
      "This is the product name you use when explaining what we do internally or after they’ve mentioned ads.",
      "Outreach cold open: say “paid ads” or “advertising” first; clarify Meta/Facebook/Instagram once they’re engaged.",
    ],
    color: "accent",
  },
  {
    icon: Globe,
    title: "Custom Websites",
    oneLiner: "We build custom websites for businesses — not templates. Your site goes live within a week.",
    whenToMention: "Lead with this when the site is the loudest pain or they only need a rebuild — not every deal is Meta-first. Also supports Meta: bad landing pages waste ad spend.",
    painSignals: [
      "\"Our website is old / embarrassing / we need to redo it\"",
      "\"We built it ourselves on Wix / Squarespace and it's not working\"",
      "\"We don't even have a website\"",
    ],
    tldr: "Custom sites fast — not templates; often paired with ads so clicks don’t land on a broken page.",
    meansForYou: [
      "Valid to book on site-only pain — no need to force ads into the opener.",
      "If they’re also running ads, tie site quality to wasted spend.",
    ],
    color: "emerald-accent",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    oneLiner: "We make sure your business shows up when people Google what you do in your area.",
    whenToMention: "Organic and Maps visibility — often layered with paid, not instead of it.",
    painSignals: [
      "\"I don't think we show up on Google\"",
      "\"Our competitors are everywhere online and we're invisible\"",
      "\"We get all our business from referrals\" (zero online visibility)",
    ],
    tldr: "Local/organic visibility — Google and Maps — complements paid, doesn’t replace it for every business.",
    meansForYou: [
      "Say “showing up on Google” or “search” with owners; reserve “SEO” if they use the word.",
      "Don’t open cold calls with ranking quizzes — use Product Knowledge to speak credibly once they’re talking.",
    ],
    color: "purple-accent",
  },
  {
    icon: RefreshCw,
    title: "Remarketing (Automated Follow-Up)",
    oneLiner: "We automate the follow-up so leads don't go cold after the first contact.",
    whenToMention: "After ads drive clicks, follow-up catches what doesn't convert on the first visit.",
    painSignals: [
      "\"People call but don't end up coming in\"",
      "\"We're bad at following up\"",
      "\"Leads just kind of disappear\"",
    ],
    tldr: "Automated follow-up so inquiries don’t die after the first touch — stacks behind traffic from ads and other channels.",
    meansForYou: [
      "Plain language: “follow-up” or “staying in touch” before jargon.",
      "Strong when they admit leads slip through the cracks.",
    ],
    color: "amber-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    oneLiner: "We build a branded app for your business — loyalty, push notifications, ordering — all under your name.",
    whenToMention: "Repeat customers, third-party fees, or loyalty — not the default SDR opener.",
    painSignals: [
      "\"We use DoorDash / UberEats and the fees are killing us\"",
      "\"We want a loyalty program but haven't set one up\"",
      "\"We want our customers to order directly from us\"",
    ],
    tldr: "Branded app for loyalty, ordering, notifications — for repeat customers and cutting third-party fees.",
    meansForYou: [
      "Not a cold-call opener; use when they bring up delivery apps, loyalty, or repeat orders.",
      "Book and note “app angle” for the AE — don’t demo features.",
    ],
    color: "purple-accent",
  },
] as const;

const CHEAT_SHEET = [
  { product: "Meta ads", oneLiner: "Creatives + campaigns in your ad account — full visibility.", trigger: "\"Boosting / agency / don't know if ads work\"" },
  { product: "Website", oneLiner: "Custom sites — not templates. Live in about a week.", trigger: "\"Site is old / bad / wasting ad clicks\"" },
  { product: "SEO", oneLiner: "Show up on Google in your area.", trigger: "\"Invisible vs competitors / Maps\"" },
  { product: "Remarketing", oneLiner: "Automate follow-up so leads don't go cold.", trigger: "\"Leads disappear / no system\"" },
  { product: "Mobile App", oneLiner: "Branded app — loyalty, orders, notifications.", trigger: "\"Third-party fees / loyalty\"" },
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
        description="Roughly 80% of conversations lean on Meta; the other ~20% is website, SEO, remarketing, and app — still real deals. If they only need a site, that's valid. Enough to book the meeting — the AE handles the deep dive."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── TL;DR (page) ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-purple-accent/25 bg-purple-accent/[0.06] px-6 py-5"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-purple-accent mb-2">TL;DR</p>
            <p className="text-sm text-foreground leading-relaxed font-medium mb-4">{PAGE_TLDR.tldr}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
              What this means for you
            </p>
            <ul className="space-y-2">
              {PAGE_TLDR.meansForYou.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

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

        {/* ── The Five Products ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            What We Offer (≈80/20)
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-6">
            Default to Meta when paid ads or scaling is in play. The rows below are the full stack — not five
            equal openers. If their pain is website-only or visibility without ads yet, lead there; do not force Meta.
          </motion.p>

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

                  <div className={`mt-5 rounded-xl border ${c.border} ${c.badgeBg} px-4 py-3`}>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">TL;DR</p>
                    <p className="text-sm text-foreground leading-relaxed">{product.tldr}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground mt-3 mb-1.5">
                      What this means for you
                    </p>
                    <ul className="space-y-1.5">
                      {product.meansForYou.map((line) => (
                        <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className={`mt-1.5 h-1 w-1 rounded-full ${c.bg} shrink-0`} />
                          {line}
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
              &ldquo;Most of what we do for growth leans on Meta — Facebook and Instagram — with
              creatives and campaigns in your own ad account. The website and follow-up make sure you
              don&apos;t waste that spend. Some owners need a site or SEO first — that&apos;s fine too. SEO
              and the app layer on when they fit. One team owns the stack.&rdquo;
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
