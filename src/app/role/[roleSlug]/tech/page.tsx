import TechWeUseContent from "@/components/tech/TechWeUseContent";

export const metadata = {
  title: "Tech We Use — Obsidion Training Hub",
  description:
    "The AE tech stack at Obsidion — Claude AI, Loom VSLs, Apollo.io lead gen, Facebook Ad Library, Miro, and supporting tools.",
};

export default async function TechPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <TechWeUseContent roleSlug={roleSlug} />;
}
