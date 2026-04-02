import { CANNABIS_MODULES, CANNABIS_MODULE_SECTIONS } from "./cannabis/modules";
import { CANNABIS_QUIZ_QUESTIONS } from "./cannabis/quiz";
import { CONTRACTORS_MODULES, CONTRACTORS_MODULE_SECTIONS } from "./contractors/modules";
import { FOOD_HOSPITALITY_MODULES, FOOD_HOSPITALITY_MODULE_SECTIONS } from "./food-hospitality/modules";
import { FOOD_HOSPITALITY_QUIZ_QUESTIONS } from "./food-hospitality/quiz";
import { SALON_MEDSPA_MODULES, SALON_MEDSPA_MODULE_SECTIONS } from "./salon-medspa/modules";
import { SALON_MEDSPA_QUIZ_QUESTIONS } from "./salon-medspa/quiz";
import { AUTOMOTIVE_MODULES, AUTOMOTIVE_MODULE_SECTIONS } from "./automotive/modules";
import { AUTOMOTIVE_QUIZ_QUESTIONS } from "./automotive/quiz";
import type { PlaybookDefinition } from "./types";

export const PLAYBOOKS: PlaybookDefinition[] = [
  {
    slug: "cannabis",
    title: "Cannabis",
    sidebarLabel: "Cannabis Playbook",
    description:
      "Sales guide for the cannabis vertical: product, pitch, pricing, outreach, and objections.",
    modules: CANNABIS_MODULES,
    moduleSections: CANNABIS_MODULE_SECTIONS,
    quizModuleId: 11,
    quizQuestions: CANNABIS_QUIZ_QUESTIONS,
    quizPassCount: 9,
    completionTitle: "Cannabis Playbook",
  },
  {
    slug: "food-hospitality",
    title: "Food & Hospitality",
    sidebarLabel: "Food & Hospitality Playbook",
    description:
      "Sales guide for restaurants, bars, catering, food trucks, and hospitality: product, pitch, pricing, outreach, and objections.",
    modules: FOOD_HOSPITALITY_MODULES,
    moduleSections: FOOD_HOSPITALITY_MODULE_SECTIONS,
    quizModuleId: 11,
    quizQuestions: FOOD_HOSPITALITY_QUIZ_QUESTIONS,
    quizPassCount: 9,
    completionTitle: "Food & Hospitality Playbook",
  },
  {
    slug: "salon-medspa",
    title: "Salon & Med Spa",
    sidebarLabel: "Salon & Med Spa Playbook",
    description:
      "Sales guide for salons, day spas, and med spas: booking, local SEO, retention, pricing, outreach, and objections.",
    modules: SALON_MEDSPA_MODULES,
    moduleSections: SALON_MEDSPA_MODULE_SECTIONS,
    quizModuleId: 11,
    quizQuestions: SALON_MEDSPA_QUIZ_QUESTIONS,
    quizPassCount: 9,
    completionTitle: "Salon & Med Spa Playbook",
  },
  {
    slug: "automotive",
    title: "Automotive",
    sidebarLabel: "Automotive Playbook",
    description:
      "Sales guide for auto repair, detailing, body/collision, and tire shops: product, pitch, pricing, outreach, and objections.",
    modules: AUTOMOTIVE_MODULES,
    moduleSections: AUTOMOTIVE_MODULE_SECTIONS,
    quizModuleId: 11,
    quizQuestions: AUTOMOTIVE_QUIZ_QUESTIONS,
    quizPassCount: 9,
    completionTitle: "Automotive Playbook",
  },
  {
    slug: "contractors",
    title: "Contractors",
    sidebarLabel: "Contractors Playbook",
    description:
      "Training for home services and contractor verticals. Content is being added—check back soon.",
    modules: CONTRACTORS_MODULES,
    moduleSections: CONTRACTORS_MODULE_SECTIONS,
    quizModuleId: null,
    quizQuestions: [],
    quizPassCount: 0,
    completionTitle: "Contractors Playbook",
  },
];

export function getPlaybook(slug: string): PlaybookDefinition | undefined {
  return PLAYBOOKS.find((p) => p.slug === slug);
}

export function getAllPlaybooks(): PlaybookDefinition[] {
  return PLAYBOOKS;
}
