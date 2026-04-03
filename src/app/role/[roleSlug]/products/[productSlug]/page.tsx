import { notFound } from "next/navigation";
import WebsitesProduct from "@/components/products/WebsitesProduct";
import SEOProduct from "@/components/products/SEOProduct";
import RemarketingProduct from "@/components/products/RemarketingProduct";
import MobileAppProduct from "@/components/products/MobileAppProduct";

const VALID_SLUGS = ["websites", "seo", "remarketing", "mobile-app"] as const;
type ProductSlug = (typeof VALID_SLUGS)[number];

const PRODUCT_META: Record<ProductSlug, { title: string; description: string }> = {
  websites: {
    title: "Custom Websites — Obsidion Training Hub",
    description:
      "Custom-built sites optimized for speed, conversion, and the client's specific industry.",
  },
  seo: {
    title: "SEO Services — Obsidion Training Hub",
    description:
      "Local SEO and Google Business Profile optimization that makes the website findable.",
  },
  remarketing: {
    title: "Remarketing — Obsidion Training Hub",
    description:
      "Automated follow-up via email, SMS, and ad retargeting for leads that don't convert immediately.",
  },
  "mobile-app": {
    title: "Mobile App — Obsidion Training Hub",
    description:
      "Branded iOS and Android app with loyalty, push notifications, ordering, and booking.",
  },
};

export function generateStaticParams() {
  return VALID_SLUGS.map((productSlug) => ({ productSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const meta = PRODUCT_META[productSlug as ProductSlug];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

const PRODUCT_COMPONENTS: Record<
  ProductSlug,
  React.ComponentType<{ roleSlug: string }>
> = {
  websites: WebsitesProduct,
  seo: SEOProduct,
  remarketing: RemarketingProduct,
  "mobile-app": MobileAppProduct,
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ roleSlug: string; productSlug: string }>;
}) {
  const { roleSlug, productSlug } = await params;

  if (!VALID_SLUGS.includes(productSlug as ProductSlug)) {
    notFound();
  }

  const Component = PRODUCT_COMPONENTS[productSlug as ProductSlug];
  return <Component roleSlug={roleSlug} />;
}
