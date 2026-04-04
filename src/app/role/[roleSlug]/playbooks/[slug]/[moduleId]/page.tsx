import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
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
  const module = playbook.modules.find((m) => m.id === id);
  if (Number.isNaN(id) || !module) {
    notFound();
  }

  return (
    <>
      {module.readTime && (
        <p className="max-w-4xl flex items-center gap-1.5 text-xs text-muted-foreground mb-6 px-1">
          <Clock size={12} />
          ~{module.readTime} read
        </p>
      )}
      {renderPlaybookModule(slug, id)}
    </>
  );
}
