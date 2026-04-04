import { notFound } from "next/navigation";
import { getPlaybook } from "@/data/playbooks/registry";
import PlaybookShell from "@/components/PlaybookShell";

export default async function RolePlaybookSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ roleSlug: string; slug: string }>;
}) {
  const { slug } = await params;
  const playbook = getPlaybook(slug);
  if (!playbook) {
    notFound();
  }

  return <PlaybookShell playbook={playbook}>{children}</PlaybookShell>;
}
