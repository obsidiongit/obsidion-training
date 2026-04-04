import AssetsContent from "@/components/assets/AssetsContent";

export const metadata = {
  title: "Downloadable Assets — Obsidion Training Hub",
  description:
    "Approved brand files for proposals, decks, social profiles, and email — logos, banners, email signatures, and guidelines.",
};

export default async function AssetsPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <AssetsContent roleSlug={roleSlug} />;
}
