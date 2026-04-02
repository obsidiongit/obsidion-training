import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

const btnClass =
  "inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Module15Assets() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 15 — Reference</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Downloadable Assets</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Approved brand files for proposals, decks, and email. If something is missing or out of
          date, ping marketing in the main channel before improvising.
        </p>
      </div>

      <CardGrid cols={2}>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">Company logo — PNG</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Raster logo for slides, docs, and social headers where SVG is not supported.
          </p>
          <a href="/assets/logo.png" download className={btnClass}>
            Download PNG
          </a>
        </Card>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">Company logo — SVG</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Vector logo for web, proposals, and anything that needs infinite scaling.
          </p>
          <a href="/assets/logo.svg" download className={btnClass}>
            Download SVG
          </a>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Email banner</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Wide banner for newsletters and outbound campaigns—use as-is, no cropping to off-brand
            sizes.
          </p>
          <a href="/assets/email-banner.png" download className={btnClass}>
            Download banner
          </a>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Email footer / signature</h3>
          <p className="text-muted-foreground text-sm mb-4">
            HTML snippet you can paste into your mail client or hand to IT for a standardized
            signature block.
          </p>
          <a href="/assets/email-footer.html" download className={btnClass}>
            Download HTML
          </a>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Brand guidelines</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Colors, typography, clear space, and do / don&apos;t examples for client-facing
            materials.
          </p>
          <a href="/assets/brand-guidelines.pdf" download className={btnClass}>
            Download PDF
          </a>
        </Card>
      </CardGrid>

      <HighlightBox variant="info" title="Version control">
        File names stay stable so this page does not break; when marketing ships a new kit, they
        replace the files in <code className="text-xs bg-muted px-1 py-0.5 rounded">/public/assets/</code>{" "}
        and announce the change in Slack.
      </HighlightBox>

      <NavButtons currentModuleId={15} />
    </div>
  );
}
