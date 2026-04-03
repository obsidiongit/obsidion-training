"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Zap,
  Smartphone,
  ArrowRight,
  Target,
  Lightbulb,
  Layers,
  ChevronRight,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  fadeIn,
  scaleIn,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
  ProductPageFooter,
} from "./shared";

/* ─── data ─── */

const PRODUCTS = [
  {
    slug: "websites",
    icon: Globe,
    title: "Custom Websites",
    stat: "7-Day Delivery",
    description:
      "The foundation of every client engagement. Custom-built, conversion-focused, live in a week.",
    color: "accent" as const,
    iconBg: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white",
    borderHover: "hover:border-accent/30",
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO Services",
    stat: "Local & GBP",
    description:
      "Makes the website findable for people who don't already know the business exists.",
    color: "emerald" as const,
    iconBg:
      "bg-emerald-accent/10 text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white",
    borderHover: "hover:border-emerald-accent/30",
  },
  {
    slug: "remarketing",
    icon: Zap,
    title: "Remarketing",
    stat: "Automated Follow-Up",
    description:
      "Catches leads that don't convert on the first touch and works them through a sequence.",
    color: "amber" as const,
    iconBg:
      "bg-amber-accent/10 text-amber-accent group-hover:bg-amber-accent group-hover:text-white",
    borderHover: "hover:border-amber-accent/30",
  },
  {
    slug: "mobile-app",
    icon: Smartphone,
    title: "Mobile App",
    stat: "iOS & Android",
    description:
      "Branded app on the customer's phone — loyalty, push notifications, ordering, booking.",
    color: "purple" as const,
    iconBg:
      "bg-purple-accent/10 text-purple-accent group-hover:bg-purple-accent group-hover:text-white",
    borderHover: "hover:border-purple-accent/30",
  },
] as const;

const PIPELINE_STEPS = [
  {
    icon: Globe,
    title: "Website",
    subtitle: "The Hub",
    description: "Everything else is built on top of it.",
    dotColor: "bg-accent",
    lineColor: "from-accent to-emerald-accent",
  },
  {
    icon: Search,
    title: "SEO",
    subtitle: "Make It Findable",
    description: "Brings in customers who don't already know the business.",
    dotColor: "bg-emerald-accent",
    lineColor: "from-emerald-accent to-amber-accent",
  },
  {
    icon: Zap,
    title: "Remarketing",
    subtitle: "Catch What Falls Through",
    description: "Automated follow-up so leads don't go cold.",
    dotColor: "bg-amber-accent",
    lineColor: "from-amber-accent to-purple-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    subtitle: "Lock In the Relationship",
    description: "Turns one-time buyers into loyal regulars.",
    dotColor: "bg-purple-accent",
    lineColor: "",
  },
] as const;

const STARTING_POINTS = [
  {
    id: "fragmented",
    label: "Fragmented Vendors",
    title: "The Fragmented-Vendor Client",
    description:
      "They have a website from one agency, someone doing SEO on the side, no automated follow-up, and maybe an app they're not using. Three vendors, no integration, and nobody owns the outcome.",
    pitch:
      "Right now you're managing vendors. We're one system, one team, one outcome. When something's not performing, there's no finger-pointing between the website person and the SEO person — it's all ours to fix.",
  },
  {
    id: "diy",
    label: "DIY & Neglect",
    title: "The DIY-and-Neglect Client",
    description:
      "They built a Wix site themselves, claimed a GBP listing and never optimized it, follow up on leads manually when they remember, and have no app. No one vendor to blame — just no system at all.",
    pitch:
      "You've got the pieces but nothing's connected and nothing's running on its own. We build the system so it works without you touching it every day.",
  },
] as const;

const PRINCIPLES = [
  {
    icon: Target,
    title: "Sell the Outcome, Not the Feature",
    text: "A prospect doesn't care about schema markup — they care that they show up higher on Google. Lead with what changes, not technical detail.",
  },
  {
    icon: Lightbulb,
    title: "Connect to a Discovery Finding",
    text: "If they didn't mention losing after-hours leads, don't pitch remarketing. The product that maps to their stated pain is the one that closes.",
  },
  {
    icon: Layers,
    title: "The Stack Sells Better Than Any Single Product",
    text: "Individual products are useful entry points. The integrated system is the value proposition. Move from 'we can fix X' to 'here's how the whole thing works together.'",
  },
] as const;

/* ─── component ─── */

export default function ProductsOverview({
  roleSlug,
}: {
  roleSlug: string;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const sp = STARTING_POINTS[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Product Knowledge"
        title="Our Products"
        description="Understand every product in the Obsidion stack — what it does, how it works, and why clients need it."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Product Cards ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            The Four Products
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PRODUCTS.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div key={product.slug} variants={fadeUp}>
                  <Link
                    href={`/role/${roleSlug}/products/${product.slug}`}
                    className={`group block rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ${product.borderHover} hover:shadow-lg`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${product.iconBg}`}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        {product.stat}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more{" "}
                      <ChevronRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── How They Work Together — Pipeline ── */}
        <motion.section
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            How They Work Together
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-10"
          >
            Each product is useful on its own. Together, they&apos;re a system.
            The pitch framing for the integrated stack:
          </motion.p>

          {/* Pipeline visual */}
          <div className="relative">
            {/* Desktop: horizontal */}
            <div className="hidden md:grid grid-cols-4 gap-0 items-start">
              {PIPELINE_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    className="relative flex flex-col items-center text-center px-2"
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.dotColor} text-white shadow-lg mb-4`}
                    >
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {i < PIPELINE_STEPS.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.15,
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className={`absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-gradient-to-r ${step.lineColor} origin-left`}
                      />
                    )}
                    {i < PIPELINE_STEPS.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.15 }}
                        className="absolute top-[26px] right-[-8px] text-muted-foreground"
                      >
                        <ArrowRight size={14} />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile: vertical */}
            <div className="md:hidden space-y-0">
              {PIPELINE_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    className="relative flex gap-4 items-start"
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.dotColor} text-white shadow-lg`}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      {i < PIPELINE_STEPS.length - 1 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + i * 0.1,
                            duration: 0.4,
                          }}
                          className={`w-0.5 h-12 bg-gradient-to-b ${step.lineColor} origin-top mt-2`}
                        />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-base font-bold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div variants={fadeUp} className="mt-8">
            <PitchQuote variant="emerald" label="Integrated Stack Pitch">
              We build the site as the hub, make sure people can find it on
              Google, automate the follow-up so leads don&apos;t slip through, and
              give your best customers a direct line back to you. Each piece
              connects — that&apos;s why it works better as a system than as
              individual tools you&apos;re trying to get to talk to each other.
            </PitchQuote>
          </motion.div>
        </motion.section>

        {/* ── Two Common Starting Points ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Before Obsidion
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            Most prospects come in from one of two places. Knowing which one
            you&apos;re talking to changes how you frame the value.
          </motion.p>

          <motion.div variants={fadeUp}>
            {/* Tab toggle */}
            <div className="flex gap-2 mb-6">
              {STARTING_POINTS.map((point, i) => (
                <button
                  key={point.id}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === i
                      ? "bg-accent text-white shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {point.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={sp.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold tracking-tight mb-3">
                {sp.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {sp.description}
              </p>
              <PitchQuote variant="accent" label="Call Framing">
                {sp.pitch}
              </PitchQuote>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ── What to Know ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Before a Product Conversation
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-purple-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent mb-4 transition-colors group-hover:bg-purple-accent group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </main>

      <ProductPageFooter />
    </div>
  );
}
