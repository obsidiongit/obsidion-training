import Link from "next/link";
import { notFound } from "next/navigation";

const PRODUCTS: Record<string, { title: string; description: string }> = {
  websites: { title: "Custom Websites", description: "Purpose-built sites optimized for speed, conversion, and industry integrations." },
  seo: { title: "SEO Services", description: "Local SEO, Google Business Profile, on-page and technical optimization." },
  remarketing: { title: "Remarketing", description: "Automated follow-up campaigns — email, SMS, and ad retargeting." },
  "mobile-app": { title: "Mobile App", description: "Branded mobile apps with loyalty, ordering, booking, and push notifications." },
};

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((productSlug) => ({ productSlug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ roleSlug: string; productSlug: string }>;
}) {
  const { roleSlug, productSlug } = await params;
  const product = PRODUCTS[productSlug];
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Link href={`/role/${roleSlug}/products`} className="text-sm text-muted-foreground hover:text-accent transition-colors mb-6 inline-block">
          ← All products
        </Link>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Product Knowledge</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{product.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">{product.description}</p>
        <div className="rounded-2xl border border-dashed border-border bg-muted/10 p-8 text-center">
          <p className="text-muted-foreground">Content coming soon — see <code className="text-xs bg-muted px-1.5 py-0.5 rounded">content/roles/account-executive/product-knowledge/{productSlug}.md</code> for the outline.</p>
        </div>
      </div>
    </div>
  );
}
