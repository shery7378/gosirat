import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
    title: "Parent App | Live School Bus Tracking & Child Safety | GoSirat",
    description: "Track your child's school journey live, receive instant alerts, manage absences, and enjoy secure QR-based handovers with the GoSirat Parent App.",
    alternates: {
        canonical: "https://gosirat.com/parent-app",
    },
};
import { WebPageSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schemas";
import AppDownload from "../../components/AppDownload";
import FAQ from "../../components/FAQ";

import { ParentHero } from "../../components/parent/ParentHero";
import { ParentChallenges } from "../../components/parent/ParentChallenges";
import { GoSiratSolution } from "../../components/parent/GoSiratSolution";
import { HowItWorks } from "../../components/parent/HowItWorks";
import { LiveTracking } from "../../components/parent/LiveTracking";
import { InstantNotifications } from "../../components/parent/InstantNotifications";
import { AbsenceManagement } from "../../components/parent/AbsenceManagement";
import { SafeHandover } from "../../components/parent/SafeHandover";
import { TransportationPackages } from "../../components/parent/TransportationPackages";
import { ParentStories } from "../../components/parent/ParentStories";

const ParentPage: NextPage = () => {
 return (
  <div className="w-full relative bg-[#f4f7f4] flex flex-col items-center pt-6 px-0 pb-0 box-border leading-[normal] tracking-[normal] overflow-x-hidden">
   <WebPageSchema 
      title="Parent App | Live School Bus Tracking & Child Safety | GoSirat" 
      description="Track your child's school journey live, receive instant alerts, manage absences, and enjoy secure QR-based handovers with the GoSirat Parent App." 
      url="https://gosirat.com/parent-app" 
    />
    <BreadcrumbSchema items={[
      { name: "Home", url: "https://gosirat.com/" },
      { name: "Parent App", url: "https://gosirat.com/parent-app" }
    ]} />
    <FAQSchema faqs={[
      { question: "How do I track the school bus?", answer: "You can track the school bus live through the GoSirat Parent App map interface, which updates in real-time." },
      { question: "Are the drivers verified?", answer: "Yes, all GoSirat drivers undergo strict background checks and training before they can operate our school transport routes." },
      { question: "How does the QR handover work?", answer: "When the bus arrives, the driver scans the parent's unique QR code generated in the app to ensure a secure child handover." }
    ]} />
   <ParentHero />
   <ParentChallenges />
   <GoSiratSolution />
   <HowItWorks />
   <LiveTracking />
   <InstantNotifications />
   <AbsenceManagement />
   <SafeHandover />
   <TransportationPackages />
   <ParentStories />
   <AppDownload />
   <FAQ />
  </div>
 );
};

export default ParentPage;
