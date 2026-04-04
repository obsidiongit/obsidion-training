import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";
import { PullQuote } from "@/components/ui/PullQuote";

export default function Module04SEO() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 05 — Products</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Local SEO</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Google allows dispensaries on its platform. This represents the largest legal advertising channel available, yet most operators fail to utilize it effectively.
        </p>
      </div>

      <PullQuote author="Strategic Focus">
        "When a user searches 'dispensary near me,' the top result secures the transaction. We position our clients in that spot."
      </PullQuote>

      <StatRow>
        <StatBox value="300%+" label="Increase in inbound calls" sublabel="Active client results, within 60 days" />
        <StatBox value="3–4x" label="Growth in online ordering" sublabel="Active client results, via SEO + site funnel" />
        <StatBox value="#1" label="Local pack ranking goal" sublabel="Top 3 captures 75% of clicks" variant="accent" />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Google Business Profile</h3>
            <p className="text-muted-foreground text-sm">
              We build, optimize, and actively manage the GBP. We handle hours, photos, posts, attributes, and Q&A to maximize local visibility.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">On-Page & Technical SEO</h3>
            <p className="text-muted-foreground text-sm">
              We engineer every page with targeted keywords, schema markup, and advanced site speed protocols. We optimize menus and location pages for high-intent searches.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Online Ordering Funnel</h3>
            <p className="text-muted-foreground text-sm">
              Proper site architecture combined with local SEO multiplies ordering sessions by 3–4x. The website functions as an active sales funnel, not a static brochure.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Call Volume Growth</h3>
            <p className="text-muted-foreground text-sm">
              We execute local SEO tactics—citation building and proximity signals—to drive inbound call volume. Clients routinely see 300%+ increases within 60 days.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Review Generation</h3>
            <p className="text-muted-foreground text-sm">
              The system sends automated SMS review requests after each visit. More reviews generate higher map pack rankings, driving additional traffic.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Reputation Management</h3>
            <p className="text-muted-foreground text-sm">
              We monitor reviews across Google, Weedmaps, and Leafly. We respond, flag issues, and maintain a polished public profile.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="The Revenue Math">
        A dispensary processing $100K/month that increases call volume by 300% and online ordering by 3x generates hundreds of thousands of dollars in new annual revenue. The SEO retainer returns its cost within the first quarter.
      </HighlightBox>

      <NavButtons currentModuleId={5} />
    </div>
  );
}
