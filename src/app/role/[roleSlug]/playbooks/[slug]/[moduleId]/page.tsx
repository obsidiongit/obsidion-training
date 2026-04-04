import { notFound } from "next/navigation";
import { getAllPlaybooks, getPlaybook } from "@/data/playbooks/registry";
import { renderPlaybookModule } from "@/data/playbooks/renderModule";

export function generateStaticParams() {
  return getAllPlaybooks().flatMap((pb) =>
    pb.modules.map((m) => ({
      slug: pb.slug,
      moduleId: String(m.id),
    })),
  );
}

export default async function RolePlaybookModulePage({
  params,
}: {
  params: Promise<{ roleSlug: string; slug: string; moduleId: string }>;
}) {
  const { slug, moduleId } = await params;
  const playbook = getPlaybook(slug);
  if (!playbook) {
    notFound();
  }

  const id = parseInt(moduleId, 10);
  if (Number.isNaN(id) || !playbook.modules.some((m) => m.id === id)) {
    notFound();
  }

  return renderPlaybookModule(slug, id);
}
