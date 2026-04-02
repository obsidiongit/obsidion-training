import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { ObjectionCard } from "@/components/ui/ObjectionCard";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module12OnTheCall() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 12 — Sales</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">On the Call</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          This module is your live playbook: flow, talk tracks, discovery, and in-the-moment
          objections. Pair it with Outreach Strategy and Objection Handling—those modules anchor
          strategy; this one is execution under pressure.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Call flow framework</h2>
        <StepList>
          <Step number={1} title="Intro & permission">
            Confirm time, name the purpose (&quot;walk through how shops like yours grow local
            demand&quot;), and ask if now still works. If not, reschedule immediately—never steamroll.
          </Step>
          <Step number={2} title="Discovery before pitch">
            Map current site, SEO, follow-up, and referrals. Quantify pain where possible: lost
            calls, no-shows, thin rankings, manual follow-up.
          </Step>
          <Step number={3} title="Tailored pitch">
            Tie each product area to a discovery finding. One story beats five feature bullets.
            Pause for questions every ninety seconds.
          </Step>
          <Step number={4} title="Handle objections live">
            Label, validate, then reframe. See situational examples below—sound human, not scripted.
          </Step>
          <Step number={5} title="Close or next step">
            Propose a specific next step: second call with decision-maker, scope review, or contract
            send. Never end on &quot;I&apos;ll follow up sometime.&quot;
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="info" title="Opening talk track (warm)">
        &quot;Thanks for making the time. I&apos;d love to understand what&apos;s working with how you
        attract and retain customers today, and where it feels brittle—website, Google, or
        follow-up after someone shows interest. I&apos;ll share how we usually fix that stack for
        businesses like yours, and you can tell me if it&apos;s relevant.&quot;
      </HighlightBox>

      <HighlightBox variant="success" title="Discovery prompts">
        <ul className="list-disc list-inside space-y-2">
          <li>When someone searches for what you do in your city, where do you show up—maps, organic, both, neither?</li>
          <li>What happens to a lead who calls after hours or DMs you—who touches it, and how fast?</li>
          <li>If we 10x&apos;d web leads tomorrow, could your team handle the volume without chaos?</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="info" title="Transition to offer">
        &quot;Based on what you said—especially [repeat their pain]—here&apos;s how we typically
        solve that in three layers: the site as the hub, local visibility so people find you, and
        automated follow-up so leads don&apos;t go cold. I&apos;ll keep it tight and you steer if I&apos;m
        off.&quot;
      </HighlightBox>

      <div>
        <h2 className="text-2xl font-bold mb-4">Live objection handling (conversational)</h2>
        <p className="text-muted-foreground mb-6">
          Use these on calls when tone and context matter—the wording is closer to real dialogue
          than the reference rebuttals in the objections module.
        </p>
        <div className="space-y-4">
          <ObjectionCard
            objection="I'm slammed right now—can you email me?"
            rebuttal={
              <p className="text-muted-foreground leading-relaxed">
                &quot;Totally get it. I&apos;ll keep this to two minutes: one question on how you handle
                inbound leads today, and if it&apos;s not a fit I&apos;ll send a one-pager and disappear.
                If I catch you at a bad time, what&apos;s a 15-minute window tomorrow that won&apos;t
                get bumped?&quot;
              </p>
            }
          />
          <ObjectionCard
            objection="Is this a sales call?"
            rebuttal={
              <p className="text-muted-foreground leading-relaxed">
                &quot;Fair label—I&apos;m reaching out because we deploy digital systems for businesses
                in your space. If what we do isn&apos;t useful, I&apos;ll tell you straight. Can I ask
                one question about how you&apos;re growing right now so I don&apos;t waste your time?&quot;
              </p>
            }
          />
          <ObjectionCard
            objection="We tried an agency / vendor and got burned."
            rebuttal={
              <p className="text-muted-foreground leading-relaxed">
                &quot;Sorry that happened—that&apos;s more common than it should be. We&apos;re structured
                around speed, a defined deliverable list, and one team owning site + SEO +
                follow-up. What specifically went wrong last time—timeline, results, or
                communication? I&apos;ll tell you if we&apos;re built differently or if we&apos;re not the
                right fix.&quot;
              </p>
            }
          />
          <ObjectionCard
            objection="Send pricing and I'll think about it."
            rebuttal={
              <p className="text-muted-foreground leading-relaxed">
                &quot;Happy to—pricing without scope usually misquotes you. Two quick details so I send
                the right tier: single location or multi, and are you trying to fix the site, the
                rankings, or the follow-up first? Then I&apos;ll email a clear range and we can book ten
                minutes to align.&quot;
              </p>
            }
          />
        </div>
      </div>

      <NavButtons currentModuleId={12} />
    </div>
  );
}
