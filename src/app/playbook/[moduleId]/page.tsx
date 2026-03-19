import { PLAYBOOK_MODULES } from '@/data/playbook-modules';
import { notFound } from 'next/navigation';

import Module00Welcome from '../modules/Module00Welcome';
import Module01WhoWeAre from '../modules/Module01WhoWeAre';
import Module02MarketOpp from '../modules/Module02MarketOpp';
import Module03Website from '../modules/Module03Website';
import Module04SEO from '../modules/Module04SEO';
import Module05Remarketing from '../modules/Module05Remarketing';
import Module06MobileApp from '../modules/Module06MobileApp';
import Module07Pricing from '../modules/Module07Pricing';
import Module08Outreach from '../modules/Module08Outreach';
import Module09Objections from '../modules/Module09Objections';
import Module10QuickRef from '../modules/Module10QuickRef';
import Module11Quiz from '../modules/Module11Quiz';
// ... other modules will be added here as they are built

export function generateStaticParams() {
  return PLAYBOOK_MODULES.map((module) => ({
    moduleId: module.id.toString(),
  }));
}

export default async function PlaybookModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const id = parseInt(moduleId, 10);
  const module = PLAYBOOK_MODULES.find((m) => m.id === id);

  if (!module) {
    notFound();
  }

  // Render the appropriate module component based on ID
  switch (id) {
    case 0: return <Module00Welcome />;
    case 1: return <Module01WhoWeAre />;
    case 2: return <Module02MarketOpp />;
    case 3: return <Module03Website />;
    case 4: return <Module04SEO />;
    case 5: return <Module05Remarketing />;
    case 6: return <Module06MobileApp />;
    case 7: return <Module07Pricing />;
    case 8: return <Module08Outreach />;
    case 9: return <Module09Objections />;
    case 10: return <Module10QuickRef />;
    case 11: return <Module11Quiz />;
    default:
      return (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              {module.title}
            </h1>
          </div>
          <div className="p-8 border rounded-xl bg-muted/20 text-muted-foreground shadow-sm">
            <p className="text-center py-20">
              Module {id} content is currently being migrated.
            </p>
          </div>
        </div>
      );
  }
}
