import Link from "next/link";
import { getAllPlaybooks } from "@/data/playbooks/registry";

export default function Home() {
  const playbooks = getAllPlaybooks();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="overflow-hidden mb-6" style={{ height: "72px", width: "220px" }}>
            <img
              src="/logos/logo.png"
              alt="Obsidion"
              className="block w-full h-full object-contain object-left"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-3">
            Training playbooks
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Pick a vertical to study. Progress is saved per playbook in this browser.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <ul className="space-y-4">
          {playbooks.map((pb) => (
            <li key={pb.slug}>
              <Link
                href={`/playbooks/${pb.slug}/0`}
                className="block rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm hover:border-accent/40 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {pb.title} Playbook
                    </h2>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{pb.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-accent whitespace-nowrap shrink-0">
                    Open →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
