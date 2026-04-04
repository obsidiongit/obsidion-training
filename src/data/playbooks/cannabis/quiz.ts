import type { QuizQuestion } from "../types";

export const CANNABIS_QUIZ_QUESTIONS: QuizQuestion[] = [
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
    question: "What is the setup fee range for a single-location dispensary?",
    options: ["$2,000–$3,000", "$10,000–$15,000", "$5,000–$8,000", "$1,500 flat"],
    correctAnswer: 2,
    feedback:
      "Single locations range from $5,000 to $8,000. Multi-location setups increase to $8,000–$12,000.",
  },
  {
    id: 3,
    question: "What is the monthly retainer structure for cannabis clients?",
    options: [
      "$297/mo flat rate",
      "$597/mo (Essentials), $997/mo (Growth), $1,497/mo (Premium)",
      "$199/mo",
      "$97/mo",
    ],
    correctAnswer: 1,
    feedback:
      "Three tiers: Essentials ($597), Growth ($997), Premium ($1,497). This accounts for the complexity and revenue potential of the market.",
  },
  {
    id: 4,
    question: "Why is a functional website more critical for a dispensary than a standard business?",
    options: [
      "Cannabis is trendy.",
      "Meta and Google restrict paid advertising for cannabis.",
      "Their customers spend more time online.",
      "Websites cost less in the cannabis industry.",
    ],
    correctAnswer: 1,
    feedback:
      "Advertising restrictions force dispensaries to rely on organic search and their website as the primary acquisition channels.",
  },
  {
    id: 5,
    question: "What is the setup cost for a branded mobile app?",
    options: ["$5,000–$7,000", "$15,000–$25,000", "$8,000–$12,000", "$30,000+"],
    correctAnswer: 1,
    feedback:
      "$15,000–$25,000. Position this as a premium asset for multi-location operators and MSOs.",
  },
  {
    id: 6,
    question: "Can cannabis dispensary apps be listed on the App Store or Google Play?",
    options: [
      "No, they are universally banned.",
      "Yes, provided they do not process cannabis transactions directly.",
      "Only on Android devices.",
      "Only with a state-issued digital license.",
    ],
    correctAnswer: 1,
    feedback: "Yes. Apps built around loyalty, booking, and push notifications are compliant.",
  },
  {
    id: 7,
    question: "Which service is explicitly excluded from the monthly retainer?",
    options: [
      "SEO management",
      "Remarketing automations",
      "Paid Facebook ad campaigns",
      "Review generation",
    ],
    correctAnswer: 2,
    feedback:
      "Paid Meta campaigns are excluded. The retainer handles SEO, remarketing, hosting, reviews, and analytics.",
  },
  {
    id: 8,
    question: "What is the correct approach for warm network outreach?",
    options: [
      "Send a pricing sheet immediately.",
      "Initiate a check-in and identify their operational frustration before pitching.",
      "Lead with the Obsidion website link.",
      "Ask directly if they have budget available.",
    ],
    correctAnswer: 1,
    feedback:
      "Start with the relationship. Find the operational pain point, then present Obsidion as the specific solution.",
  },
  {
    id: 9,
    question:
      "When a prospect states 'We already have a website,' what is the proper response?",
    options: [
      "Accept the answer and move on.",
      "Ask if it ranks in local search and captures leads automatically.",
      "Critique their current design.",
      "Offer a discount.",
    ],
    correctAnswer: 1,
    feedback:
      "Shift focus to performance. Most sites exist but fail to work. Propose a performance audit to uncover gaps.",
  },
  {
    id: 10,
    question: "What is the highest-ROI marketing channel for cannabis businesses?",
    options: [
      "Instagram paid ads",
      "Google paid search",
      "Remarketing to the existing customer database",
      "Influencer partnerships",
    ],
    correctAnswer: 2,
    feedback:
      "Paid acquisition is heavily restricted. SMS, email, and loyalty programs active the existing customer base without ad spend.",
  },
  {
    id: 11,
    question: "What establishes Obsidion's credibility in the cannabis space?",
    options: [
      "A dedicated cannabis section on the agency website.",
      "Operational and ownership background inside the cannabis industry.",
      "Extensive research into industry reports.",
      "A portfolio of logos.",
    ],
    correctAnswer: 1,
    feedback: "Operational and ownership background. Credibility comes from having run these businesses.",
  },
  {
    id: 12,
    question: "Which platform is most effective for cold outreach to dispensary owners?",
    options: ["LinkedIn", "Twitter / X", "Instagram DMs", "Cold email"],
    correctAnswer: 2,
    feedback:
      "Instagram is where operators spend time. DMs must be personalized with a specific question, not a generic pitch.",
  },
  {
    id: 13,
    question: "A prospect says 'I need to think about it.' What is the correct response?",
    options: [
      "Thank them and say you'll follow up next week.",
      "Ask what specific concern is still unresolved and address it directly.",
      "Offer a discount to accelerate the decision.",
      "Send them the full pricing sheet and wait.",
    ],
    correctAnswer: 1,
    feedback:
      "'I need to think about it' almost always means one specific concern hasn't been resolved. Ask what that is. Do not let the conversation end without naming the blocker.",
  },
  {
    id: 14,
    question: "What is the correct 3-touch follow-up sequence after a first conversation?",
    options: [
      "Day 1 check-in, Day 3 proposal, Day 7 price drop",
      "Day 3 value touch, Day 7 direct ask, Day 14 final push",
      "Day 2 email, Day 5 call, Day 10 voicemail",
      "One follow-up call after 2 weeks",
    ],
    correctAnswer: 1,
    feedback:
      "Day 3: send something useful. Day 7: direct ask for next steps. Day 14: final push before moving to monthly check-in. Most deals die because nobody followed up at all.",
  },
  {
    id: 15,
    question: "During a discovery call, which question best uncovers a prospect's ROI potential?",
    options: [
      "How many employees do you have?",
      "What social media platforms are you using?",
      "If you could double your online ordering volume in 90 days, what would that be worth to the business?",
      "Have you heard of Obsidion before?",
    ],
    correctAnswer: 2,
    feedback:
      "Anchoring to revenue impact before you name a price is essential. This question makes the cost of inaction concrete and positions your fee as a fraction of the potential return.",
  },
];
