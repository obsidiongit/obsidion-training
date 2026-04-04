import type { ReactElement } from "react";
import { notFound } from "next/navigation";

import Module00Welcome from "@/app/playbook/modules/Module00Welcome";
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
import Module00WelcomeAutomotive from "@/app/playbook/modules/Module00WelcomeAutomotive";
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

import CtrModule00Welcome from "@/app/playbook/modules/contractors/Module00Welcome";
import CtrModule01MarketOpp from "@/app/playbook/modules/contractors/Module01MarketOpp";
import CtrModule02Website from "@/app/playbook/modules/contractors/Module02Website";
import CtrModule03SEO from "@/app/playbook/modules/contractors/Module03SEO";
import CtrModule04Remarketing from "@/app/playbook/modules/contractors/Module04Remarketing";
import CtrModule05MobileApp from "@/app/playbook/modules/contractors/Module05MobileApp";
import CtrModule06Pricing from "@/app/playbook/modules/contractors/Module06Pricing";
import CtrModule07Outreach from "@/app/playbook/modules/contractors/Module07Outreach";
import CtrModule08Objections from "@/app/playbook/modules/contractors/Module08Objections";
import CtrModule09QuickRef from "@/app/playbook/modules/contractors/Module09QuickRef";
import CtrModule10Quiz from "@/app/playbook/modules/contractors/Module10Quiz";

export function renderPlaybookModule(slug: string, moduleId: number): ReactElement {
  if (slug === "cannabis") {
    switch (moduleId) {
      case 0:
        return <Module00Welcome />;
      case 1:
        return <Module02MarketOpp />;
      case 2:
        return <Module03Website />;
      case 3:
        return <Module04SEO />;
      case 4:
        return <Module05Remarketing />;
      case 5:
        return <Module06MobileApp />;
      case 6:
        return <Module07Pricing />;
      case 7:
        return <Module08Outreach />;
      case 8:
        return <Module09Objections />;
      case 9:
        return <Module10QuickRef />;
      case 10:
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
        return <SalonModule02MarketOpp />;
      case 2:
        return <SalonModule03Website />;
      case 3:
        return <SalonModule04SEO />;
      case 4:
        return <SalonModule05Remarketing />;
      case 5:
        return <SalonModule06MobileApp />;
      case 6:
        return <SalonModule07Pricing />;
      case 7:
        return <SalonModule08Outreach />;
      case 8:
        return <SalonModule09Objections />;
      case 9:
        return <SalonModule10QuickRef />;
      case 10:
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
        return <FhModule02MarketOpp />;
      case 2:
        return <FhModule03Website />;
      case 3:
        return <FhModule04SEO />;
      case 4:
        return <FhModule05Remarketing />;
      case 5:
        return <FhModule06MobileApp />;
      case 6:
        return <FhModule07Pricing />;
      case 7:
        return <FhModule08Outreach />;
      case 8:
        return <FhModule09Objections />;
      case 9:
        return <FhModule10QuickRef />;
      case 10:
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
        return <Module02MarketOppAutomotive />;
      case 2:
        return <Module03WebsiteAutomotive />;
      case 3:
        return <Module04SEOAutomotive />;
      case 4:
        return <Module05RemarketingAutomotive />;
      case 5:
        return <Module06MobileAppAutomotive />;
      case 6:
        return <Module07PricingAutomotive />;
      case 7:
        return <Module08OutreachAutomotive />;
      case 8:
        return <Module09ObjectionsAutomotive />;
      case 9:
        return <Module10QuickRefAutomotive />;
      case 10:
        return <Module11Quiz />;
      default:
        notFound();
    }
  }

  if (slug === "contractors") {
    switch (moduleId) {
      case 0:
        return <CtrModule00Welcome />;
      case 1:
        return <CtrModule01MarketOpp />;
      case 2:
        return <CtrModule02Website />;
      case 3:
        return <CtrModule03SEO />;
      case 4:
        return <CtrModule04Remarketing />;
      case 5:
        return <CtrModule05MobileApp />;
      case 6:
        return <CtrModule06Pricing />;
      case 7:
        return <CtrModule07Outreach />;
      case 8:
        return <CtrModule08Objections />;
      case 9:
        return <CtrModule09QuickRef />;
      case 10:
        return <CtrModule10Quiz />;
      default:
        notFound();
    }
  }

  notFound();
}
