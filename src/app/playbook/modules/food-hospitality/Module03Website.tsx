import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module03Website() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 03 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Website Buildout</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The site is the hub: menu clarity, dietary cues, private events, catering, merch, gift
          cards, and location pages for multi-unit brands. It must load fast, read beautifully on
          phones, and push guests toward the action you want—book, order, call, or join the list.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">Hospitality-first UX</h3>
            <p className="text-muted-foreground text-sm">
              Menus, wine lists, brunch vs dinner, truck schedules, and bar programs—structured so
              guests find answers in seconds, not PDF scavenger hunts.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Reservations &amp; waitlist</h3>
            <p className="text-muted-foreground text-sm">
              Deep integration with the tools they use: OpenTable, Resy, Tock, Yelp Guest Manager,
              or native forms—whatever matches their operation.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Catering &amp; events</h3>
            <p className="text-muted-foreground text-sm">
              Dedicated funnels for corporate catering, weddings, and private dining with forms
              that notify the right inbox and trigger instant follow-up.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">POS &amp; ordering handoffs</h3>
            <p className="text-muted-foreground text-sm">
              Square, Toast, Clover, and third-party links where appropriate—presented cleanly so
              guests trust the handoff.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Mobile-first performance</h3>
            <p className="text-muted-foreground text-sm">
              Thumb-friendly navigation, compressed imagery, and fast Core Web Vitals—decisions
              happen walking down the street.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Analytics &amp; CRM</h3>
            <p className="text-muted-foreground text-sm">
              Events, calls, and form fills feed remarketing. You can prove what drove the Friday
              night spike—not just vanity traffic.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why the website matters more here</h2>
        <StepList>
          <Step number={1} title="Search and maps are the front door">
            “Near me,” cuisine type, and neighborhood name queries send guests straight to the site
            and GBP. Confusing menus or missing hours cost covers every week.
          </Step>
          <Step number={2} title="Trust is visual">
            In food and beverage, design signals quality. A dated site reads like a dated kitchen—even
            when the food is excellent.
          </Step>
          <Step number={3} title="Catering and events need proof">
            High-ticket buyers want galleries, packages, and a frictionless inquiry path. The site
            carries sales work the host cannot do on the phone alone.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Key talking point">
        "Your website is your always-on maitre d&apos;—it answers questions, sells the room, and
        captures leads while you run service. We put that system live in about a week."
      </HighlightBox>

      <NavButtons currentModuleId={3} />
    </div>
  );
}
