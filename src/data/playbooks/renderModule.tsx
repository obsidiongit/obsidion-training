import type { ReactElement } from "react";
import { notFound } from "next/navigation";

import Module00Welcome from "@/app/playbook/modules/Module00Welcome";
import Module01WhoWeAre from "@/app/playbook/modules/Module01WhoWeAre";
import Module02TechWeUse from "@/app/playbook/modules/Module02TechWeUse";
import Module02MarketOpp from "@/app/playbook/modules/Module02MarketOpp";
import Module03Website from "@/app/playbook/modules/Module03Website";
import Module04SEO from "@/app/playbook/modules/Module04SEO";
import Module05Remarketing from "@/app/playbook/modules/Module05Remarketing";
import Module06MobileApp from "@/app/playbook/modules/Module06MobileApp";
import Module07Pricing from "@/app/playbook/modules/Module07Pricing";
import Module08Outreach from "@/app/playbook/modules/Module08Outreach";
import Module09Compensation from "@/app/playbook/modules/Module09Compensation";
import Module10Performance from "@/app/playbook/modules/Module10Performance";
import Module09Objections from "@/app/playbook/modules/Module09Objections";
import Module10QuickRef from "@/app/playbook/modules/Module10QuickRef";
import Module12OnTheCall from "@/app/playbook/modules/Module12OnTheCall";
import Module15Assets from "@/app/playbook/modules/Module15Assets";
import Module11Quiz from "@/app/playbook/modules/Module11Quiz";
import ModuleContractorsStub from "@/app/playbook/modules/ModuleContractorsStub";
import Module00WelcomeAutomotive from "@/app/playbook/modules/Module00WelcomeAutomotive";
import Module01WhoWeAreAutomotive from "@/app/playbook/modules/Module01WhoWeAreAutomotive";
import Module02MarketOppAutomotive from "@/app/playbook/modules/Module02MarketOppAutomotive";
import Module03WebsiteAutomotive from "@/app/playbook/modules/Module03WebsiteAutomotive";
import Module04SEOAutomotive from "@/app/playbook/modules/Module04SEOAutomotive";
import Module05RemarketingAutomotive from "@/app/playbook/modules/Module05RemarketingAutomotive";
import Module06MobileAppAutomotive from "@/app/playbook/modules/Module06MobileAppAutomotive";
import Module07PricingAutomotive from "@/app/playbook/modules/Module07PricingAutomotive";
import Module08OutreachAutomotive from "@/app/playbook/modules/Module08OutreachAutomotive";
import Module09ObjectionsAutomotive from "@/app/playbook/modules/Module09ObjectionsAutomotive";
import Module10QuickRefAutomotive from "@/app/playbook/modules/Module10QuickRefAutomotive";

import SalonModule00Welcome from "@/app/playbook/modules/salon-medspa/Module00Welcome";
import SalonModule01WhoWeAre from "@/app/playbook/modules/salon-medspa/Module01WhoWeAre";
import SalonModule02MarketOpp from "@/app/playbook/modules/salon-medspa/Module02MarketOpp";
import SalonModule03Website from "@/app/playbook/modules/salon-medspa/Module03Website";
import SalonModule04SEO from "@/app/playbook/modules/salon-medspa/Module04SEO";
import SalonModule05Remarketing from "@/app/playbook/modules/salon-medspa/Module05Remarketing";
import SalonModule06MobileApp from "@/app/playbook/modules/salon-medspa/Module06MobileApp";
import SalonModule07Pricing from "@/app/playbook/modules/salon-medspa/Module07Pricing";
import SalonModule08Outreach from "@/app/playbook/modules/salon-medspa/Module08Outreach";
import SalonModule09Objections from "@/app/playbook/modules/salon-medspa/Module09Objections";
import SalonModule10QuickRef from "@/app/playbook/modules/salon-medspa/Module10QuickRef";
import SalonModule11Quiz from "@/app/playbook/modules/salon-medspa/Module11Quiz";

import FhModule00Welcome from "@/app/playbook/modules/food-hospitality/Module00Welcome";
import FhModule01WhoWeAre from "@/app/playbook/modules/food-hospitality/Module01WhoWeAre";
import FhModule02MarketOpp from "@/app/playbook/modules/food-hospitality/Module02MarketOpp";
import FhModule03Website from "@/app/playbook/modules/food-hospitality/Module03Website";
import FhModule04SEO from "@/app/playbook/modules/food-hospitality/Module04SEO";
import FhModule05Remarketing from "@/app/playbook/modules/food-hospitality/Module05Remarketing";
import FhModule06MobileApp from "@/app/playbook/modules/food-hospitality/Module06MobileApp";
import FhModule07Pricing from "@/app/playbook/modules/food-hospitality/Module07Pricing";
import FhModule08Outreach from "@/app/playbook/modules/food-hospitality/Module08Outreach";
import FhModule09Objections from "@/app/playbook/modules/food-hospitality/Module09Objections";
import FhModule10QuickRef from "@/app/playbook/modules/food-hospitality/Module10QuickRef";
import FhModule11Quiz from "@/app/playbook/modules/food-hospitality/Module11Quiz";

export function renderPlaybookModule(slug: string, moduleId: number): ReactElement {
  if (slug === "cannabis") {
    switch (moduleId) {
      case 0:
        return <Module00Welcome />;
      case 1:
        return <Module01WhoWeAre />;
      case 2:
        return <Module02TechWeUse />;
      case 3:
        return <Module02MarketOpp />;
      case 4:
        return <Module03Website />;
      case 5:
        return <Module04SEO />;
      case 6:
        return <Module05Remarketing />;
      case 7:
        return <Module06MobileApp />;
      case 8:
        return <Module07Pricing />;
      case 9:
        return <Module09Compensation />;
      case 10:
        return <Module10Performance />;
      case 11:
        return <Module08Outreach />;
      case 12:
        return <Module12OnTheCall />;
      case 13:
        return <Module09Objections />;
      case 14:
        return <Module10QuickRef />;
      case 15:
        return <Module15Assets />;
      case 16:
        return <Module11Quiz />;
      default:
        notFound();
    }
  }

  if (slug === "salon-medspa") {
    switch (moduleId) {
      case 0:
        return <SalonModule00Welcome />;
      case 1:
        return <SalonModule01WhoWeAre />;
      case 2:
        return <Module02TechWeUse />;
      case 3:
        return <SalonModule02MarketOpp />;
      case 4:
        return <SalonModule03Website />;
      case 5:
        return <SalonModule04SEO />;
      case 6:
        return <SalonModule05Remarketing />;
      case 7:
        return <SalonModule06MobileApp />;
      case 8:
        return <SalonModule07Pricing />;
      case 9:
        return <Module09Compensation />;
      case 10:
        return <Module10Performance />;
      case 11:
        return <SalonModule08Outreach />;
      case 12:
        return <Module12OnTheCall />;
      case 13:
        return <SalonModule09Objections />;
      case 14:
        return <SalonModule10QuickRef />;
      case 15:
        return <Module15Assets />;
      case 16:
        return <SalonModule11Quiz />;
      default:
        notFound();
    }
  }

  if (slug === "food-hospitality") {
    switch (moduleId) {
      case 0:
        return <FhModule00Welcome />;
      case 1:
        return <FhModule01WhoWeAre />;
      case 2:
        return <Module02TechWeUse />;
      case 3:
        return <FhModule02MarketOpp />;
      case 4:
        return <FhModule03Website />;
      case 5:
        return <FhModule04SEO />;
      case 6:
        return <FhModule05Remarketing />;
      case 7:
        return <FhModule06MobileApp />;
      case 8:
        return <FhModule07Pricing />;
      case 9:
        return <Module09Compensation />;
      case 10:
        return <Module10Performance />;
      case 11:
        return <FhModule08Outreach />;
      case 12:
        return <Module12OnTheCall />;
      case 13:
        return <FhModule09Objections />;
      case 14:
        return <FhModule10QuickRef />;
      case 15:
        return <Module15Assets />;
      case 16:
        return <FhModule11Quiz />;
      default:
        notFound();
    }
  }

  if (slug === "automotive") {
    switch (moduleId) {
      case 0:
        return <Module00WelcomeAutomotive />;
      case 1:
        return <Module01WhoWeAreAutomotive />;
      case 2:
        return <Module02TechWeUse />;
      case 3:
        return <Module02MarketOppAutomotive />;
      case 4:
        return <Module03WebsiteAutomotive />;
      case 5:
        return <Module04SEOAutomotive />;
      case 6:
        return <Module05RemarketingAutomotive />;
      case 7:
        return <Module06MobileAppAutomotive />;
      case 8:
        return <Module07PricingAutomotive />;
      case 9:
        return <Module09Compensation />;
      case 10:
        return <Module10Performance />;
      case 11:
        return <Module08OutreachAutomotive />;
      case 12:
        return <Module12OnTheCall />;
      case 13:
        return <Module09ObjectionsAutomotive />;
      case 14:
        return <Module10QuickRefAutomotive />;
      case 15:
        return <Module15Assets />;
      case 16:
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
