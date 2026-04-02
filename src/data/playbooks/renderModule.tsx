import type { ReactElement } from "react";
import { notFound } from "next/navigation";

import Module00Welcome from "@/app/playbook/modules/Module00Welcome";
import Module01WhoWeAre from "@/app/playbook/modules/Module01WhoWeAre";
import Module02MarketOpp from "@/app/playbook/modules/Module02MarketOpp";
import Module03Website from "@/app/playbook/modules/Module03Website";
import Module04SEO from "@/app/playbook/modules/Module04SEO";
import Module05Remarketing from "@/app/playbook/modules/Module05Remarketing";
import Module06MobileApp from "@/app/playbook/modules/Module06MobileApp";
import Module07Pricing from "@/app/playbook/modules/Module07Pricing";
import Module08Outreach from "@/app/playbook/modules/Module08Outreach";
import Module09Objections from "@/app/playbook/modules/Module09Objections";
import Module10QuickRef from "@/app/playbook/modules/Module10QuickRef";
import Module11Quiz from "@/app/playbook/modules/Module11Quiz";
import ModuleContractorsStub from "@/app/playbook/modules/ModuleContractorsStub";

export function renderPlaybookModule(slug: string, moduleId: number): ReactElement {
  if (slug === "cannabis") {
    switch (moduleId) {
      case 0:
        return <Module00Welcome />;
      case 1:
        return <Module01WhoWeAre />;
      case 2:
        return <Module02MarketOpp />;
      case 3:
        return <Module03Website />;
      case 4:
        return <Module04SEO />;
      case 5:
        return <Module05Remarketing />;
      case 6:
        return <Module06MobileApp />;
      case 7:
        return <Module07Pricing />;
      case 8:
        return <Module08Outreach />;
      case 9:
        return <Module09Objections />;
      case 10:
        return <Module10QuickRef />;
      case 11:
        return <Module11Quiz />;
      default:
        notFound();
    }
  }

  if (slug === "contractors" && moduleId === 0) {
    return <ModuleContractorsStub />;
  }

  notFound();
}
