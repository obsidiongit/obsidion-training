"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Bell,
  Gift,
  ShoppingCart,
  User,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  scaleIn,
  SectionLabel,
  DiagnosticQuestion,
  PitchQuote,
  FAQAccordion,
  ProductPageHero,
  ProductPageFooter,
  StatHighlight,
} from "./shared";

/* ─── data ─── */

const FEATURES = [
  {
    icon: Smartphone,
    title: "Custom Branded App",
    text: "Built and published under the client's brand — their name in the App Store, their colors, their logo. Not a white-label template.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    text: "Direct line to the customer's lock screen. Push open rates run 60–90% vs. ~20% for email. The fastest channel for flash sales and slow-day capacity.",
  },
  {
    icon: Gift,
    title: "Loyalty & Rewards",
    text: "Points, punch cards, spend-based tiers — configurable to the business. Customers track rewards in real time, driving repeat visits.",
  },
  {
    icon: ShoppingCart,
    title: "Online Ordering & Booking",
    text: "Integrated without routing through third-party platforms that take a cut or redirect to competitors. The transaction stays in their ecosystem.",
  },
  {
    icon: User,
    title: "Customer Accounts",
    text: "Order history, saved preferences, loyalty balance, notification settings. Reduces friction on repeat purchases and shows who the best customers are.",
  },
  {
    icon: BarChart3,
    title: "App Analytics",
    text: "Usage data, push open rates, loyalty redemptions, order volume by channel. Turns the app from a feature into a measurable system.",
  },
] as const;

const GREEN_LIGHT = [
  "Restaurants, cafés, or food & bev businesses with regulars",
  "Dispensaries with loyalty-driven clientele and compliance needs",
  "Salons, med spas, or fitness studios with recurring appointments",
  "Any business already running loyalty through a clunky third-party tool",
] as const;

const YELLOW_LIGHT = [
  "Low transaction frequency (e.g., quarterly visits) — loyalty value is weaker, but push notifications may be the hook",
  "High volume but mostly new customers — frame as a growth tool, not retention",
  "Owner is skeptical customers will download — address this directly",
] as const;

const RED_LIGHT = [
  "One-time or very low-frequency purchases (e.g., contractors selling projects)",
  "Very small customer base — not enough volume to justify the channel",
  "Client unwilling to actively promote the app post-launch",
] as const;

const FAQ_ITEMS = [
  {
    question: "\"Do customers actually download apps for local businesses?\"",
    answer:
      "Depends on how much the business promotes it and what's in it for the customer. If there's a loyalty reward tied to downloading — a free item, a discount — adoption rates are strong. Businesses that hand a card at checkout saying 'download our app, get X' see results. The app doesn't sell itself; it's a tool the owner has to activate.",
  },
  {
    question:
      "\"How is this different from just posting on Instagram or sending emails?\"",
    answer:
      "Social media is rented reach — the algorithm decides who sees it. Email gets filtered and ignored. Push notifications go directly to the lock screen of people who specifically opted in. That's a different relationship — your most loyal customers, with a direct line.",
  },
  {
    question: "\"What does it take to get this live?\"",
    answer:
      "We handle the build and App Store submission. From the client's side: branding assets, menu or service list if relevant, and decisions on loyalty program structure. Timeline depends on complexity, but it's not a months-long project.",
  },
  {
    question:
      "\"What if I already use Square, Toast, Mindbody, or another platform?\"",
    answer:
      "We integrate with most major POS and booking platforms, so it's not a rip-and-replace conversation. The app becomes the customer-facing layer — ordering, booking, rewards — while backend tools stay in place.",
  },
  {
    question: "\"Who manages the app after it's live?\"",
    answer:
      "Day-to-day, the client controls push notifications and promotions through their dashboard — designed to be manageable without a tech team. Updates, maintenance, and technical issues run through Obsidion.",
  },
  {
    question: "\"What if customers don't engage with it after download?\"",
    answer:
      "That's usually a push strategy problem, not an app problem. If they're not sending notifications, running loyalty promos, or giving customers a reason to open it, engagement drops. We help set up the first campaigns so there's a playbook to follow.",
  },
];

/* ─── component ─── */

export default function MobileAppProduct({
  roleSlug,
}: {
  roleSlug: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/products`}
        backLabel="All products"
        eyebrow="Product Knowledge"
        title="Mobile App"
        description="Branded iOS and Android app for businesses with repeat customers. Loyalty, push notifications, ordering, and booking — on the customer's phone."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Discovery Question ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <DiagnosticQuestion>
            &ldquo;Right now, when your customers order from you or book an
            appointment — are they doing that through your system or through
            someone else&apos;s app?&rdquo;
          </DiagnosticQuestion>
          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-3xl"
          >
            Most businesses rent access to their customers through someone
            else&apos;s platform — Instagram, DoorDash, Yelp. The Obsidion
            mobile app changes that. It&apos;s a fully branded iOS and Android
            app that lives on their customer&apos;s phone under their name.
          </motion.p>
        </motion.section>

        {/* ── Push Notification Stat ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            <StatHighlight
              value="~20%"
              label="Email Open Rate"
              colorClass="text-muted-foreground"
            />
            <div className="text-center">
              <motion.div
                variants={scaleIn}
                className="text-xs font-bold uppercase tracking-wider text-accent mb-2"
              >
                vs.
              </motion.div>
            </div>
            <StatHighlight
              value="60–90%"
              label="Push Open Rate"
              colorClass="text-emerald-accent"
            />
          </div>

          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground text-center mt-6 max-w-xl mx-auto leading-relaxed"
          >
            When the client wants to promote a flash sale, announce a new
            product, or fill slow-day capacity, push is the fastest channel they
            have.
          </motion.p>
        </motion.section>

        {/* ── What It Does ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            What It Does
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-purple-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent mb-4 transition-colors group-hover:bg-purple-accent group-hover:text-white">
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

        {/* ── Ideal Client Profile — Traffic Light ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Ideal Client Profile
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-8"
          >
            The app is strongest when two factors overlap:{" "}
            <span className="font-semibold text-foreground">
              repeat customers
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              transaction volume
            </span>
            . The more of both, the easier the sell.
          </motion.p>

          <div className="space-y-5">
            {/* Green */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-emerald-accent/20 bg-emerald-accent/[0.03] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-accent/20 text-emerald-accent">
                  <CheckCircle2 size={18} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-emerald-accent">
                    Green Light — Lead With the App
                  </h3>
                </div>
              </div>
              <ul className="space-y-2">
                {GREEN_LIGHT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Yellow */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-amber-accent/20 bg-amber-accent/[0.03] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-accent/20 text-amber-accent">
                  <AlertTriangle size={18} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-amber-accent">
                    Yellow Light — Sellable, But Build the Case
                  </h3>
                </div>
              </div>
              <ul className="space-y-2">
                {YELLOW_LIGHT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Red */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                  <XCircle size={18} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-destructive">
                    Red Light — Deprioritize
                  </h3>
                </div>
              </div>
              <ul className="space-y-2">
                {RED_LIGHT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* ── How to Pitch It ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            How to Pitch It
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            Lead with the branded presence angle. If they&apos;re using a
            third-party platform (or nothing at all), that&apos;s the gap.
          </motion.p>

          <div className="space-y-4">
            <PitchQuote variant="accent" label="Third-Party Gap">
              The problem with third-party platforms is your customer is
              technically on their app, not yours. You&apos;re renting access to
              people who already know you. We put you in the App Store under
              your own name — your brand, your loyalty program, your push
              notifications. That&apos;s a channel you own.
            </PitchQuote>

            <PitchQuote variant="emerald" label="Push Notification ROI">
              Most businesses email promotions and get 20% open rates if
              they&apos;re lucky. Push notifications to people who downloaded
              your app run north of 60%. If you&apos;re trying to fill a slow
              Tuesday or move inventory, that&apos;s the difference.
            </PitchQuote>

            <PitchQuote variant="purple" label="Full-Stack Positioning">
              The app is part of our full-stack tier — it&apos;s built to work
              alongside the site, local SEO, and follow-up system, not as a
              standalone. That context is what makes it worth it.
            </PitchQuote>
          </div>
        </motion.section>

        {/* ── FAQ ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Common Client Questions
          </SectionLabel>

          <FAQAccordion items={FAQ_ITEMS} />
        </motion.section>
      </main>

      <ProductPageFooter />
    </div>
  );
}
