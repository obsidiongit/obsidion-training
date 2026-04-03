import Link from "next/link";
import { Building2, Zap, Globe, Users, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About Obsidion — Training Hub",
};

const DIFFERENTIATORS = [
  {
    icon: "Zap",
    title: "Speed",
    text: "Average 7-day delivery from kickoff to launch. Competitors take 6–12 weeks.",
  },
  {
    icon: "Building2",
    title: "Proven Systems",
    text: "Every site is custom-built, optimized for performance, and integrated with the tools businesses use daily.",
  },
  {
    icon: "Globe",
    title: "Industry Knowledge",
    text: "We understand compliance, consumer behavior, POS systems, and the specific limitations businesses face in regulated and competitive markets.",
  },
  {
    icon: "Users",
    title: "Full-Service Framework",
    text: "One system for website, SEO, remarketing, and mobile apps. No handoffs between vendors.",
  },
] as const;

const ICON_MAP: Record<string, typeof Zap> = { Zap, Building2, Globe, Users };

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-accent transition-colors mb-4 inline-flex items-center gap-1.5"
          >
            <ArrowLeft size={14} />
            Back to Training Hub
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-2">
            About Obsidion
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Company history, mission, values, and what makes us different.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Who is Obsidion?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Obsidion is a full-service digital infrastructure provider. We build
            websites, manage local SEO, automate remarketing, and deploy branded
            mobile apps for businesses across multiple verticals. Our mission is
            to give every local business the same digital firepower that
            enterprise brands take for granted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((d) => {
              const Icon = ICON_MAP[d.icon];
              return (
                <div
                  key={d.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold">{d.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-border bg-muted/10 p-8 text-center">
          <p className="text-muted-foreground">
            More sections coming soon — positioning, company culture, and org
            chart.
          </p>
        </section>
      </main>
    </div>
  );
}
