import type { QuizQuestion } from "../types";

export const FOOD_HOSPITALITY_QUIZ_QUESTIONS: QuizQuestion[] = [
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
    question: "What is the setup fee range for a single-location restaurant, bar, or brick-and-mortar concept?",
    options: ["$2,000–$3,000", "$10,000–$15,000", "$5,000–$8,000", "$1,500 flat"],
    correctAnswer: 2,
    feedback:
      "Single locations range from $5,000 to $8,000. Multi-concept or multi-location setups increase to $8,000–$12,000.",
  },
  {
    id: 3,
    question: "What is the monthly retainer structure for Food & Hospitality clients?",
    options: [
      "$297/mo flat rate",
      "$597/mo (Essentials), $997/mo (Growth), $1,497/mo (Premium)",
      "$199/mo",
      "$97/mo",
    ],
    correctAnswer: 1,
    feedback:
      "Three tiers: Essentials ($597), Growth ($997), Premium ($1,497). Same stack as other verticals, tuned for reservations, events, and repeat visits.",
  },
  {
    id: 4,
    question: "Why is a high-performing website especially important for independent restaurants and bars?",
    options: [
      "Food photos are optional.",
      "Most guests decide where to go from search, maps, and the site—often on mobile, in the moment.",
      "They never use Google.",
      "Social media replaces the need for a site.",
    ],
    correctAnswer: 1,
    feedback:
      "Local search, menus, hours, and booking flows happen on the phone. A weak site loses covers before they ever walk in.",
  },
  {
    id: 5,
    question: "What is the setup cost for a branded mobile app?",
    options: ["$5,000–$7,000", "$15,000–$25,000", "$8,000–$12,000", "$30,000+"],
    correctAnswer: 1,
    feedback:
      "$15,000–$25,000. Position as a premium asset for groups, multi-location brands, and high-frequency concepts.",
  },
  {
    id: 6,
    question: "What should a hospitality app emphasize to stay store-compliant with app platforms?",
    options: [
      "Processing all orders and alcohol sales inside the app only.",
      "Loyalty, reservations, push notifications, and deep links to approved ordering flows—not bypassing platform or liquor rules.",
      "Apps are not allowed for restaurants.",
      "Only iOS, never Android.",
    ],
    correctAnswer: 1,
    feedback:
      "Structure around loyalty, bookings, content, and compliant handoffs. Policies vary by concept and region—position Obsidion as building to spec, not guessing.",
  },
  {
    id: 7,
    question: "Which item is typically outside the core monthly retainer scope (same as other verticals)?",
    options: [
      "Google Business Profile management",
      "Remarketing automations",
      "Fully managed paid Meta ad campaigns (when not part of an agreed add-on)",
      "Review generation",
    ],
    correctAnswer: 2,
    feedback:
      "Paid social is often a separate line item or add-on. The retainer focuses on site, SEO, automations, hosting, reviews, and analytics unless you scope otherwise.",
  },
  {
    id: 8,
    question: "What is the correct approach for warm network outreach?",
    options: [
      "Send a pricing sheet immediately.",
      "Initiate a check-in and identify operational frustration before pitching.",
      "Lead with the Obsidion website link.",
      "Ask directly if they have budget available.",
    ],
    correctAnswer: 1,
    feedback:
      "Start with the relationship. Find the pain (no-shows, slow Tuesdays, catering leads, weak Google presence), then position Obsidion as the fix.",
  },
  {
    id: 9,
    question: "When a prospect says 'We already have a website,' what is the strongest next move?",
    options: [
      "Accept the answer and move on.",
      "Ask whether it ranks, converts reservations or leads, and ties into email/SMS—not whether it merely exists.",
      "Critique their design unprompted.",
      "Offer a discount immediately.",
    ],
    correctAnswer: 1,
    feedback:
      "Shift to outcomes: local pack, menu clarity, speed, events/catering funnels, and automation. Offer an audit if appropriate.",
  },
  {
    id: 10,
    question: "What is often the highest-ROI marketing lever for restaurants with an existing guest list?",
    options: [
      "Billboard only",
      "Untargeted print",
      "Remarketing: SMS, email, and loyalty to drive repeat visits and fill slow shifts",
      "Deleting their Google listing",
    ],
    correctAnswer: 2,
    feedback:
      "Owned audience beats cold reach for most independents. Reactivating regulars and VIPs compounds faster than chasing strangers.",
  },
  {
    id: 11,
    question: "What strengthens Obsidion’s credibility in Food & Hospitality?",
    options: [
      "Only using stock food photography.",
      "Systems built for real operations: reservations, events, catering, trucks, and multi-location—plus fast deployment.",
      "Avoiding POS or booking integrations.",
      "Promising viral TikToks only.",
    ],
    correctAnswer: 1,
    feedback:
      "Credibility comes from the full stack, speed, and understanding how guests actually discover and book them—not from generic pretty sites.",
  },
  {
    id: 12,
    question: "Which channels work best for cold outreach to chefs, owners, and operators?",
    options: [
      "Only fax",
      "Instagram DMs and in-person networking—personalized, never spray-and-pray",
      "Mass LinkedIn InMail with no research",
      "Comment spam on competitor pages",
    ],
    correctAnswer: 1,
    feedback:
      "Operators live on Instagram and in the community. Short, specific DMs and local networking outperform generic blasts.",
  },
];
