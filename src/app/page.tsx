import Link from "next/link";
import { getAllPlaybooks } from "@/data/playbooks/registry";

export default function Home() {
  const playbooks = getAllPlaybooks();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-2 pb-2 sm:pt-2.5 sm:pb-2.5">
          <img
            src="/logos/logo.png"
            alt="Obsidion"
            className="block w-auto max-w-full h-auto max-h-[252px] object-contain object-left mb-1.5"
          />
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-1">
            Training playbooks
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Pick a vertical to study. Progress is saved per playbook in this browser.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-5 pb-10 sm:pt-6 sm:pb-12">
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
