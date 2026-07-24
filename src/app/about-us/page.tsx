import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
  title: "About GoSirat | Safe School Transportation Platform",
  description: "Learn about GoSirat, a smart school transportation platform providing verified drivers, live GPS tracking, QR verification, and safer student transportation for parents and schools.",
  alternates: {
    canonical: "https://gosirat.com/about-us",
  },
};
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutVision } from "@/components/about/AboutVision";
import { AboutCommitments } from "@/components/about/AboutCommitments";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutTeam } from "@/components/about/AboutTeam";
import { ParentStories } from "@/components/parent/ParentStories";
import AppDownload from "@/components/AppDownload";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";

const AboutPage: NextPage = () => {
  return (
    <div className="w-full relative bg-gosirat-light flex flex-col items-center pt-6 px-0 pb-0 box-border leading-normal tracking-normal">
      <WebPageSchema
        title="About GoSirat | Safe School Transportation Platform"
        description="Learn about GoSirat, a smart school transportation platform providing verified drivers, live GPS tracking, QR verification, and safer student transportation for parents and schools."
        url="https://gosirat.com/about-us"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://gosirat.com/" },
        { name: "About", url: "https://gosirat.com/about-us" }
      ]} />
      <AboutHero />
      <div className="w-full bg-white">
        <AboutMission />
      </div>
      <AboutVision />
      <AboutCommitments />
      <AboutStats />
      <div className="w-full bg-white">
        <AboutTeam />
      </div>
      <ParentStories isAboutPage={true} />
      <div className="w-full bg-white">
        <AppDownload />
      </div>
    </div>
  );
};

export default AboutPage;
