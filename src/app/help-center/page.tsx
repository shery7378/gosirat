import InfoPage from "@/components/InfoPage";

const HelpCenterPage = () => (
    <InfoPage
        title="Help Center"
        description="Find guidance for families, schools, and drivers using the GoSirat platform. This page is your starting point for common questions and next steps."
        ctaLabel="Contact us"
        ctaHref="/contact-us"
        sections={[
            {
                heading: "For Parents",
                items: [
                    "Getting started with the Parent App - account creation and verification",
                    "Booking rides for your children with flexible scheduling options",
                    "Live tracking and real-time ride status updates",
                    "Secure handover confirmation and pickup notifications",
                ],
            },
            {
                heading: "For Schools",
                items: [
                    "School district integration and staff coordination",
                    "Managing student pickup/dropoff schedules and routes",
                    "Parent communication and compliance reporting",
                    "Transportation analytics and trip history",
                ],
            },
            {
                heading: "For Drivers",
                items: [
                    "Driver application, background verification, and onboarding",
                    "Navigation, route optimization, and trip acceptance",
                    "Safe handover protocols and child supervision best practices",
                    "Earnings, ratings, and performance insights",
                ],
            },
        ]}
    >
        <p>
            Browse our full knowledge base or reach out to <a href="mailto:info@gosirat.com" className="text-emerald-600 font-semibold hover:underline">info@gosirat.com</a> if you can't find what you need.
        </p>
    </InfoPage>
);

export default HelpCenterPage;
