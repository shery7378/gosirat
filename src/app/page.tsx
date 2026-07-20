import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
  title: "Safe & Smart School Transportation Services | GoSirat",
  description: "GoSirat provides safe school transportation and pick-and-drop services with verified drivers, live GPS tracking, QR verification, and secure student travel.",
  alternates: {
    canonical: "https://gosirat.com/",
  },
};
import Hero from "@/components/Hero";
// import Branding from "@/components/Branding";
import TrustAndSafety from "@/components/TrustAndSafety";
import ParentAppSection from "@/components/ParentAppSection";
import GreenImpact from "@/components/GreenImpact";
import DriverAppSection from "@/components/DriverAppSection";
import CTASection from "@/components/CTASection";
import FeaturesList from "@/components/FeaturesList";
import AppDownload from "@/components/AppDownload";
import FAQ from "@/components/FAQ";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";

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
      {/* <Branding /> */}
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
