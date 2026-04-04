import type { QuizQuestion } from "../types";

export const CONTRACTORS_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the average website delivery timeline Obsidion offers contractors?",
    options: ["30 days", "7 days", "2 weeks", "Same day"],
    correctAnswer: 1,
    feedback:
      "7 days is the average. Contractors lose estimates and booked jobs to faster competitors every day their site underperforms. Speed to launch is a primary selling point.",
  },
  {
    id: 2,
    question: "What is the typical setup fee range for a single-territory contractor?",
    options: ["$1,000–$2,000", "$10,000–$15,000", "$5,000–$8,000", "$500 flat"],
    correctAnswer: 2,
    feedback:
      "Single-territory contractors typically range $5,000–$8,000. Multi-trade, multi-location, or franchise operators often land in the $8,000–$12,000 range.",
  },
  {
    id: 3,
    question: "What is the monthly retainer structure Obsidion offers?",
    options: [
      "$197/mo flat rate",
      "$597/mo (Essentials), $997/mo (Growth), $1,497/mo (Premium)",
      "$299/mo",
      "$97/mo per trade",
    ],
    correctAnswer: 1,
    feedback:
      "Three tiers: Essentials ($597), Growth ($997), Premium ($1,497). Match tier to how aggressively they need to grow their service area and review presence.",
  },
  {
    id: 4,
    question:
      "Why is a strong local digital presence especially critical for home service contractors?",
    options: [
      "Contractors do not need websites because everyone uses referrals exclusively.",
      "Most homeowners search online first—especially for urgent, high-trust, high-cost jobs.",
      "Only commercial contractors need a website.",
      "Search engines do not index contractor websites.",
    ],
    correctAnswer: 1,
    feedback:
      "Emergency plumbing, storm-damage roofing, and HVAC failures start with search. Even referred leads Google the contractor before calling. The site must convert that intent into estimates and booked jobs.",
  },
  {
    id: 5,
    question: "What is the setup cost range for a branded mobile app?",
    options: ["$3,000–$5,000", "$15,000–$25,000", "$8,000–$12,000", "$30,000+"],
    correctAnswer: 1,
    feedback:
      "$15,000–$25,000. Best fit for multi-service companies, franchise operators, and contractors with large recurring customer bases—not every single-trade sole operator on day one.",
  },
  {
    id: 6,
    question: "Which statement about paid Meta (Facebook/Instagram) ads and the monthly retainer is correct?",
    options: [
      "The retainer always includes unlimited paid social ad spend.",
      "Hands-on paid Meta campaigns are outside the retainer; the stack focuses on site, SEO, remarketing, and owned channels.",
      "Contractors are never allowed to run Meta ads.",
      "Only roofing companies can run Facebook ads.",
    ],
    correctAnswer: 1,
    feedback:
      "Paid Meta management is not bundled. The retainer covers the systems that make organic and owned-channel revenue reliable—local SEO, automations, reviews, and analytics.",
  },
  {
    id: 7,
    question: "For contractor remarketing, what is often the highest-ROI audience?",
    options: [
      "Completely cold lists purchased from data brokers",
      "People who have never heard of the contractor",
      "Past customers already in the database—seasonal reminders, referral requests, review asks",
      "Only national franchise followers",
    ],
    correctAnswer: 2,
    feedback:
      "Past customers are warm, already trust the contractor, and have ongoing needs. Automated seasonal outreach, referral prompts, and review requests from that list convert at far higher rates than cold acquisition.",
  },
  {
    id: 8,
    question: "What is the correct approach for warm network outreach to a contractor prospect?",
    options: [
      "Send a pricing sheet immediately in the first message.",
      "Check in, understand their current pain (leads, reviews, site performance, slow seasons), then tie Obsidion to that pain.",
      "Lead with a long company history.",
      "Ask if they have budget in the first message.",
    ],
    correctAnswer: 1,
    feedback:
      "Relationship first. Contractors respond when you sound like someone who understands their trade, their seasonal swings, and the difference between a lead that converts and one that wastes their time.",
  },
  {
    id: 9,
    question: "When a prospect says \"We get all our work from referrals,\" what is a strong response?",
    options: [
      "Accept it and end the conversation.",
      "Explain that referrals alone can not protect them when competition increases, slow seasons hit, or they want to grow beyond their current circle.",
      "Insult their referral network.",
      "Offer 50% off immediately.",
    ],
    correctAnswer: 1,
    feedback:
      "Referrals are gold—but they are not scalable and they are not reliable during seasonal dips or expansion phases. Search, maps, and automated referral systems add volume to word of mouth rather than replacing it.",
  },
  {
    id: 10,
    question: "Which channels are especially relevant for prospecting contractor owners?",
    options: [
      "Only LinkedIn",
      "Only billboards and door hangers",
      "Warm network plus Facebook and Instagram where contractors showcase before/after project work",
      "Fax and print directory listings",
    ],
    correctAnswer: 2,
    feedback:
      "Facebook and Instagram are primary proof channels for renovations, roofing, landscaping, and painting—before/after content is the contractor's portfolio. Pair personalized DMs with warm network intros for the best reply rates.",
  },
  {
    id: 11,
    question: "What makes Obsidion credible when talking to a skeptical contractor?",
    options: [
      "Using only generic marketing jargon.",
      "Speaking their world—service areas, emergency calls, seasonal demand, licensing, reviews, and how homeowners actually choose who to hire.",
      "Promising #1 on Google in 48 hours.",
      "Avoiding any mention of pricing.",
    ],
    correctAnswer: 1,
    feedback:
      "Fluency in how they run the business—labor seasonality, estimate-to-close rates, referral dependency, review gaps—beats slides every time. Speed, stack, and proof matter more than buzzwords.",
  },
  {
    id: 12,
    question: "How should you position the full Obsidion stack versus hiring separate vendors?",
    options: [
      "Tell them to hire five different freelancers for a theoretically lower price.",
      "One team owns the site, local SEO, automations, and analytics—less finger-pointing, faster execution, and one bill.",
      "Recommend they only ever buy local SEO.",
      "Suggest they pause all marketing for a year to rebuild.",
    ],
    correctAnswer: 1,
    feedback:
      "Contractors are overwhelmed running crews—they do not have time to manage an SEO vendor, a web designer, and a CRM consultant separately. One accountable partner for the full digital infrastructure is the enterprise experience most never get.",
  },
];
