import type { QuizQuestion } from "../types";

export const AUTOMOTIVE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the average delivery time for a website buildout?",
    options: ["3–4 weeks", "7 days", "2 weeks", "Same day"],
    correctAnswer: 1,
    feedback:
      "7 days is the average. Shops lose estimates and appointments to faster competitors when their site and booking flow are slow to launch.",
  },
  {
    id: 2,
    question: "What is the typical setup fee range for a single-location automotive shop?",
    options: ["$2,000–$3,000", "$10,000–$15,000", "$5,000–$8,000", "$1,500 flat"],
    correctAnswer: 2,
    feedback:
      "Single locations typically range $5,000–$8,000. Multi-bay, multi-location, or groups with separate brands often land in $8,000–$12,000.",
  },
  {
    id: 3,
    question: "What is the monthly retainer structure Obsidion offers?",
    options: [
      "$297/mo flat rate",
      "$597/mo (Essentials), $997/mo (Growth), $1,497/mo (Premium)",
      "$199/mo",
      "$97/mo",
    ],
    correctAnswer: 1,
    feedback:
      "Three tiers: Essentials ($597), Growth ($997), Premium ($1,497). Match tier to how aggressively they need SEO, automations, and reporting.",
  },
  {
    id: 4,
    question:
      "Why is a strong website and local presence especially important for repair, body, tire, and detail shops?",
    options: [
      "They cannot use Google at all.",
      "Most customers decide from search, maps, and mobile—often in urgent or emotional moments.",
      "Shops only get customers from drive-bys.",
      "Websites are optional if they have a Facebook page.",
    ],
    correctAnswer: 1,
    feedback:
      "Breakdowns, collisions, and seasonal tire demand start with search and maps. The site must convert that intent into calls, chats, and booked appointments.",
  },
  {
    id: 5,
    question: "What is the setup cost range for a branded mobile app?",
    options: ["$5,000–$7,000", "$15,000–$25,000", "$8,000–$12,000", "$30,000+"],
    correctAnswer: 1,
    feedback:
      "$15,000–$25,000. Best fit for multi-location groups, tire chains, and operators who want home-screen loyalty and push—not every single bay shop on day one.",
  },
  {
    id: 6,
    question: "Which statement about paid Meta (Facebook/Instagram) ads and the monthly retainer is correct?",
    options: [
      "The retainer always includes unlimited paid social ad spend.",
      "Hands-on paid Meta campaigns are outside the retainer; the stack focuses on site, SEO, remarketing, and owned channels.",
      "Shops are never allowed to run Meta ads.",
      "Only tire shops can run Meta ads.",
    ],
    correctAnswer: 1,
    feedback:
      "Paid Meta management is not bundled. The retainer covers the systems that make organic and owned-channel revenue reliable—SEO, automations, reviews, analytics.",
  },
  {
    id: 7,
    question: "For automotive remarketing, what is often the highest-ROI audience?",
    options: [
      "Random cold emails to purchased lists",
      "People who have never heard of the shop",
      "Customers already in the database—service reminders, promotions, win-backs",
      "Only national brand followers",
    ],
    correctAnswer: 2,
    feedback:
      "Owned lists—past ROs, detail clients, fleet contacts—convert far better than cold outreach. Automations around service intervals and seasons print money.",
  },
  {
    id: 8,
    question: "What is the correct approach for warm network outreach?",
    options: [
      "Send a pricing sheet immediately.",
      "Check in, learn their shop’s pain (phones, bookings, reviews, slow site), then tie Obsidion to that pain.",
      "Lead with a long company history.",
      "Ask if they have budget in the first message.",
    ],
    correctAnswer: 1,
    feedback:
      "Relationship first. Shops respond when you sound like someone who understands bays, insurers, and seasonality—not a generic agency blast.",
  },
  {
    id: 9,
    question: "When a prospect says “We already have a website,” what is a strong next step?",
    options: [
      "Accept it and end the conversation.",
      "Ask whether it ranks for money keywords, loads fast on mobile, and turns visitors into booked jobs.",
      "Insult their current designer.",
      "Offer 50% off immediately.",
    ],
    correctAnswer: 1,
    feedback:
      "Shift to outcomes: local pack, appointment requests, photo proof for body/detail, tire fitment and offers. Most sites exist but do not perform.",
  },
  {
    id: 10,
    question: "Which channels are especially relevant for prospecting local shop owners and managers?",
    options: [
      "Only LinkedIn",
      "Only billboards",
      "Warm network plus Instagram/Facebook where shops showcase work and community",
      "Fax",
    ],
    correctAnswer: 2,
    feedback:
      "Instagram and Facebook are visual proof channels for collision, detail, and custom work—pair with warm intros for the best reply rates.",
  },
  {
    id: 11,
    question: "What helps Obsidion sound credible to a skeptical shop owner?",
    options: [
      "Using only generic marketing jargon.",
      "Speaking their world—ROs, DRPs, bays, seasonality, estimates, reviews, and how people actually pick a shop.",
      "Promising #1 on Google in 48 hours.",
      "Avoiding any talk of pricing.",
    ],
    correctAnswer: 1,
    feedback:
      "Fluency in how they run the business beats slides. Speed, stack, and proof matter more than buzzwords.",
  },
  {
    id: 12,
    question: "How should you position the full Obsidion stack vs. hiring separate vendors?",
    options: [
      "Tell them to hire five different freelancers for a lower total price.",
      "One team owns site, local SEO, automations, and analytics—less finger-pointing and faster execution.",
      "Recommend they only ever buy SEO alone.",
      "Suggest they pause all marketing for a year.",
    ],
    correctAnswer: 1,
    feedback:
      "Single accountable partner for the digital infrastructure reduces chaos. That is the enterprise feel small shops want but rarely get.",
  },
];
