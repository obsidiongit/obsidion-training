import ProductsOverview from "@/components/products/ProductsOverview";
import ProductKnowledgeLiteContent from "@/components/sdr/ProductKnowledgeLiteContent";

export const metadata = {
  title: "Product Knowledge — Obsidion Training Hub",
  description:
    "Understand every product in the Obsidion stack — what it does, how it works, and why clients need it.",
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  if (roleSlug === "sdr") {
    return <ProductKnowledgeLiteContent roleSlug={roleSlug} />;
  }

  return <ProductsOverview roleSlug={roleSlug} />;
}
