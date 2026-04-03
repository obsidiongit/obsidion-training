import Link from "next/link";

const PRODUCTS = [
  { slug: "websites", title: "Custom Websites", description: "Purpose-built sites optimized for speed, conversion, and industry integrations." },
  { slug: "seo", title: "SEO Services", description: "Local SEO, Google Business Profile, on-page and technical optimization." },
  { slug: "remarketing", title: "Remarketing", description: "Automated follow-up campaigns — email, SMS, and ad retargeting." },
  { slug: "mobile-app", title: "Mobile App", description: "Branded mobile apps with loyalty, ordering, booking, and push notifications." },
] as const;

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Link href={`/role/${roleSlug}`} className="text-sm text-muted-foreground hover:text-accent transition-colors mb-6 inline-block">
          ← Back to hub
        </Link>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Product Knowledge</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our Products</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Understand every product in the Obsidion stack — what it does, how it works, and why clients need it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={`/role/${roleSlug}/products/${product.slug}`}
              className="block rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                {product.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
