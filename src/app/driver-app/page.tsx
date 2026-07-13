import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
    title: "Driver App | Become a Verified School Driver | GoSirat",
    description: "Join the GoSirat driver network to earn reliable income with optimized routes, transparent payments, and professional support.",
    alternates: {
        canonical: "https://gosirat.com/driver-app",
    },
};
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";
import AppDownload from "../../components/AppDownload";
import FAQ from "../../components/FAQ";

import { DriverHero } from "../../components/driver/DriverHero";
import { DriverChallenges } from "../../components/driver/DriverChallenges";
import { GoSiratSolution } from "../../components/parent/GoSiratSolution";
import { DriverVerification } from "../../components/driver/DriverVerification";
import { DriverTraining } from "../../components/driver/DriverTraining";
import { RouteManagement } from "../../components/driver/RouteManagement";
import { DriverSafeHandover } from "../../components/driver/DriverSafeHandover";
import { DriverEarnings } from "../../components/driver/DriverEarnings";
import { ParentStories } from "../../components/parent/ParentStories";

const DriverPage: NextPage = () => {
 return (
  <div className="w-full relative bg-[#f4f7f4] flex flex-col items-center pt-6 px-0 pb-0 box-border leading-[normal] tracking-[normal]">
   <WebPageSchema 
      title="Driver App | Become a Verified School Driver | GoSirat" 
      description="Join the GoSirat driver network to earn reliable income with optimized routes, transparent payments, and professional support." 
      url="https://gosirat.com/driver-app" 
    />
    <BreadcrumbSchema items={[
      { name: "Home", url: "https://gosirat.com/" },
      { name: "Driver App", url: "https://gosirat.com/driver-app" }
    ]} />
   <DriverHero />
   <DriverChallenges />
   {/* <GoSiratSolution /> */}
   <DriverVerification />
   <DriverTraining />
   <RouteManagement />
   <DriverSafeHandover />
   <DriverEarnings />
   <ParentStories />
   <AppDownload />
   <FAQ />
  </div>
 );
};

export default DriverPage;
