import InfoPage from "@/components/InfoPage";

const PressPage = () => (
    <InfoPage
        title="Press"
        description="Media and partner inquiries for GoSirat can be directed to our team. We are happy to share product updates, safety practices, and customer stories."
        ctaLabel="Contact press team"
        ctaHref="/contact-us"
        sections={[
            {
                heading: "For Media Inquiries",
                items: [
                    "Feature requests and story ideas about school transportation safety",
                    "Expert commentary on child safety, verification standards, and modern transportation",
                    "Company announcements, milestones, and expansion news",
                    "High-resolution logos and brand assets",
                ],
            },
            {
                heading: "For Partners",
                items: [
                    "School district integration and rollout opportunities",
                    "Driver partner network expansion and training programs",
                    "Technology partnerships and API access",
                    "Co-marketing and community collaboration",
                ],
            },
        ]}
    >
        <p>
            Email <a href="mailto:info@gosirat.com" className="text-emerald-600 font-semibold hover:underline">info@gosirat.com</a> with your inquiry and we'll route you to the right team member.
        </p>
    </InfoPage>
);

export default PressPage;
