import { CANNABIS_MODULES, CANNABIS_MODULE_SECTIONS } from "./cannabis/modules";
import { CANNABIS_QUIZ_QUESTIONS } from "./cannabis/quiz";
import { CONTRACTORS_MODULES, CONTRACTORS_MODULE_SECTIONS } from "./contractors/modules";
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
