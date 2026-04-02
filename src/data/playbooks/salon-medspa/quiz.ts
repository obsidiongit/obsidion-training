import type { QuizQuestion } from "../types";

export const SALON_MEDSPA_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the average delivery time for a website buildout?",
    options: ["3–4 weeks", "7 days", "2 weeks", "Same day"],
    correctAnswer: 1,
    feedback:
      "7 days is the average. This timeline separates Obsidion from agencies that take months.",
  },
  {
    id: 2,
    question: "What is the setup fee range for a single-location salon or med spa?",
    options: ["$2,000–$3,000", "$10,000–$15,000", "$5,000–$8,000", "$1,500 flat"],
    correctAnswer: 2,
    feedback:
      "Single locations range from $5,000 to $8,000. Multi-location groups typically land at $8,000–$12,000.",
  },
  {
    id: 3,
    question: "What is the monthly retainer structure (Essentials / Growth / Premium)?",
    options: [
      "$297/mo flat rate",
      "$597/mo (Essentials), $997/mo (Growth), $1,497/mo (Premium)",
      "$199/mo",
      "$97/mo",
    ],
    correctAnswer: 1,
    feedback:
      "Three tiers: Essentials ($597), Growth ($997), Premium ($1,497)—aligned with our other vertical playbooks.",
  },
  {
    id: 4,
    question:
      "Why is a high-performance website especially important for salons and med spas?",
    options: [
      "Salons rarely use the internet.",
      "Booking, local search, and trust happen online—often before social ever converts.",
      "Websites are cheaper than business cards.",
      "Google bans beauty businesses.",
    ],
    correctAnswer: 1,
    feedback:
      "Clients discover you via search and maps, compare services and providers, and book online. A weak site leaks appointments to competitors.",
  },
  {
    id: 5,
    question: "What is the typical setup investment range for a branded mobile app?",
    options: ["$5,000–$7,000", "$15,000–$25,000", "$8,000–$12,000", "$30,000+"],
    correctAnswer: 1,
    feedback:
      "$15,000–$25,000. Position it as a premium asset for multi-location groups and high-volume brands.",
  },
  {
    id: 6,
    question: "Can salon and med spa apps generally be listed on the App Store and Google Play?",
    options: [
      "No, beauty apps are banned.",
      "Yes, when structured around booking, loyalty, and compliant marketing—not misleading clinical claims.",
      "Only on Android.",
      "Only with a medical license.",
    ],
    correctAnswer: 1,
    feedback:
      "Yes. Apps focused on booking, reminders, loyalty, and promotions are routinely approved; med spa copy must stay policy-safe.",
  },
  {
    id: 7,
    question: "Which item is typically excluded from the standard monthly retainer?",
    options: [
      "Local SEO execution",
      "SMS and email automations",
      "Paid Meta ad media spend (the actual ad budget)",
      "Review generation workflows",
    ],
    correctAnswer: 2,
    feedback:
      "The retainer covers infrastructure, SEO, remarketing tooling, hosting, and reputation workflows—not unlimited paid ad spend.",
  },
  {
    id: 8,
    question: "What is the correct approach for warm network outreach?",
    options: [
      "Send a menu PDF immediately.",
      "Check in, listen for operational pain (no-shows, booking, reviews), then tie Obsidion to that pain.",
      "Lead with a discount code.",
      "Ask if they have budget in the first message.",
    ],
    correctAnswer: 1,
    feedback:
      "Relationship first. Owners live on the floor—earn context, then position the full stack as the fix for empty chairs and leaky funnels.",
  },
  {
    id: 9,
    question: "When a prospect says “We already have a website,” what is the strongest pivot?",
    options: [
      "Agree and exit the conversation.",
      "Ask whether it ranks for high-intent local searches and converts bookings automatically.",
      "Insult their current designer.",
      "Offer 50% off.",
    ],
    correctAnswer: 1,
    feedback:
      "Shift to performance: local pack, service pages, booking flow, speed, and follow-up. Offer a quick audit if useful.",
  },
  {
    id: 10,
    question: "What is often the highest-ROI marketing motion for an established salon or med spa?",
    options: [
      "Billboard advertising",
      "Cold print mailers only",
      "Re-engaging the existing client list (SMS, email, loyalty, win-backs)",
      "Buying a bigger sign",
    ],
    correctAnswer: 2,
    feedback:
      "The database you already paid to acquire is the profit center—fill the calendar, bring back lapsing guests, and increase frequency.",
  },
  {
    id: 11,
    question: "What most strongly supports Obsidion’s credibility in beauty and wellness?",
    options: [
      "A generic portfolio of random industries.",
      "Deep familiarity with booking systems, local SEO for services, and how salons and med spas actually operate.",
      "Lowest price in the market.",
      "Only doing logo design.",
    ],
    correctAnswer: 1,
    feedback:
      "Operators smell generic agencies immediately. Speak their stack—scheduling, reviews, memberships—and show systems, not slides.",
  },
  {
    id: 12,
    question: "Which channel is often most effective for cold outreach to independent owners?",
    options: ["Fax", "LinkedIn only", "Instagram DMs (personalized)", "Yellow Pages"],
    correctAnswer: 2,
    feedback:
      "Owners and lead providers live on Instagram. Personalized DMs that reference their work beat spray-and-pray templates.",
  },
];
