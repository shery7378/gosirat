import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
    title: "School Transportation Management System | GoSirat",
    description: "Improve school transportation with live vehicle tracking, verified handovers, operational analytics, and better communication for parents.",
    alternates: {
        canonical: "https://gosirat.com/schools",
    },
};

import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";
import { SchoolsHero } from "@/components/schools/SchoolsHero";
import { SchoolsChallenge } from "@/components/schools/SchoolsChallenge";
import { SchoolsVisibility } from "@/components/schools/SchoolsVisibility";
import { SchoolsPartners } from "@/components/schools/SchoolsPartners";
import { SchoolsStats } from "@/components/schools/SchoolsStats";
import { ParentStories } from "@/components/parent/ParentStories";
import AppDownload from "@/components/AppDownload";
import FAQ from "@/components/FAQ";

const SchoolsPage: NextPage = () => {
 return (
  <div className="w-full relative bg-gosirat-light flex flex-col items-center pt-6 px-0 pb-0 box-border leading-normal tracking-normal">
   <WebPageSchema 
      title="School Transportation Management System | GoSirat" 
      description="Improve school transportation with live vehicle tracking, verified handovers, operational analytics, and better communication for parents." 
      url="https://gosirat.com/schools" 
    />
    <BreadcrumbSchema items={[
      { name: "Home", url: "https://gosirat.com/" },
      { name: "Schools", url: "https://gosirat.com/schools" }
    ]} />
   <SchoolsHero />
   <SchoolsChallenge />
   <SchoolsVisibility />
   <SchoolsPartners />
   <SchoolsStats />
   <ParentStories isAboutPage={false} />
   <AppDownload hideImage={false} />
   <FAQ />
  </div>
 );
};

export default SchoolsPage;
