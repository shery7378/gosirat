import type { NextPage, Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";

// Dynamic imports for below-the-fold components to reduce unused JavaScript and improve LCP/TTI
const TrustAndSafety = dynamic(() => import("@/components/TrustAndSafety"));
const ParentAppSection = dynamic(() => import("@/components/ParentAppSection"));
const GreenImpact = dynamic(() => import("@/components/GreenImpact"));
const DriverAppSection = dynamic(() => import("@/components/DriverAppSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const FeaturesList = dynamic(() => import("@/components/FeaturesList"));
const AppDownload = dynamic(() => import("@/components/AppDownload"));
const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
  title: "Safe & Smart School Transportation Services | GoSirat",
  description: "GoSirat provides safe school transportation and pick-and-drop services with verified drivers, live GPS tracking, QR verification, and secure student travel.",
  alternates: {
    canonical: "https://gosirat.com/",
  },
};

const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-gosirat-light flex flex-col items-center pt-6 px-0 pb-0 box-border leading-normal tracking-normal">
      <WebPageSchema
        title="Safe & Smart School Transportation Services | GoSirat"
        description="GoSirat provides safe school transportation and pick-and-drop services with verified drivers, live GPS tracking, QR verification, and secure student travel."
        url="https://gosirat.com/"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://gosirat.com/" }]} />
      <Hero />
      <TrustAndSafety />
      <ParentAppSection />
      <GreenImpact />
      <DriverAppSection />
      <CTASection />
      <FeaturesList />
      <AppDownload />
      <FAQ />
    </div>
  );
};

export default Homepage;
