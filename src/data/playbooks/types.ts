export type ModuleSection =
  | "Foundation"
  | "Products"
  | "Sales"
  | "Reference"
  | "Assessment";

export interface PlaybookModule {
  id: number;
  title: string;
  eyebrow: string;
  section: ModuleSection;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
}

/** Serializable playbook metadata passed to client shell */
export interface PlaybookClientConfig {
  slug: string;
  title: string;
  sidebarLabel: string;
  description: string;
  modules: PlaybookModule[];
  moduleSections: ModuleSection[];
  quizModuleId: number | null;
  quizQuestions: QuizQuestion[];
  quizPassCount: number;
}

export interface PlaybookDefinition extends PlaybookClientConfig {
  completionTitle: string;
}
