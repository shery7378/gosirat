import type { Metadata } from "next";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";
import SafetyHero from "@/components/safety/SafetyHero";
import SafetyTrust from "@/components/safety/SafetyTrust";
import SafetyDrivers from "@/components/safety/SafetyDrivers";
import SafetyTracking from "@/components/safety/SafetyTracking";
import SafetyHandovers from "@/components/safety/SafetyHandovers";
import SafetyEmergency from "@/components/safety/SafetyEmergency";
import SafetyStandards from "@/components/safety/SafetyStandards";
import SafetyStats from "@/components/safety/SafetyStats";
import SafetyFAQ from "@/components/safety/SafetyFAQ";
import SafetyCTA from "@/components/safety/SafetyCTA";

export const metadata: Metadata = {
    title: "School Transport Safety | GoSirat Islamabad & Rawalpindi",
    description: "Learn about GoSirat's commitment to school transport safety, including verified drivers, real-time tracking, secure handovers, and emergency readiness in Islamabad and Rawalpindi.",
    alternates: {
        canonical: "https://gosirat.com/safety",
    },
};

export default function SafetyPage() {
    return (
        <>
            <WebPageSchema
                title="School Transport Safety | GoSirat Islamabad & Rawalpindi"
                description="Learn about GoSirat's commitment to school transport safety, including verified drivers, real-time tracking, secure handovers, and emergency readiness in Islamabad and Rawalpindi."
                url="https://gosirat.com/safety"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://gosirat.com/" },
                    { name: "Safety", url: "https://gosirat.com/safety" },
                ]}
            />

            <main className="overflow-x-hidden bg-[#FBFAF7] text-[#0E1B16]">
                <SafetyHero />
                <SafetyTrust />
                <SafetyDrivers />
                <SafetyTracking />
                <SafetyHandovers />
                <SafetyEmergency />
                <SafetyStandards />
                <SafetyStats />
                <SafetyFAQ />
                <SafetyCTA />
            </main>
        </>
    );
}
