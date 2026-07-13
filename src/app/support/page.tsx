import InfoPage from "@/components/InfoPage";

const SupportPage = () => (
    <InfoPage
        title="Support"
        description="Our support team is available to help parents, schools, and drivers with onboarding, ride questions, and account assistance."
        ctaLabel="Visit help center"
        ctaHref="/help-center"
        sections={[
            {
                heading: "Support Channels",
                items: [
                    "Email: info@gosirat.com (typically responds within 2 hours)",
                    "In-app support chat for urgent ride assistance",
                    "Phone: 03099104803 for critical issues",
                    "Help Center articles and FAQs available 24/7",
                ],
            },
            {
                heading: "Common Support Topics",
                items: [
                    "Account setup, verification, and profile management",
                    "Booking, trip tracking, and handover confirmation",
                    "Payment methods, billing, and receipts",
                    "Safety concerns and incident reporting",
                ],
            },
        ]}
    >
        <p>We prioritize rapid response for all safety-related concerns and aim to resolve most issues within one business day.</p>  </InfoPage>
);

export default SupportPage;