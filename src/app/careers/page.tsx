import InfoPage from "@/components/InfoPage";

const CareersPage = () => (
    <InfoPage
        title="Careers"
        description="We are building safer school transportation for families, schools, and drivers. Join our team if you are excited about product design, operations, and trust-centered growth."
        ctaLabel="Get in touch"
        ctaHref="/contact-us"
        sections={[
            {
                heading: "Open Positions",
                items: [
                    "Product & Design - Lead the evolution of our platform for parents, schools, and drivers",
                    "Operations & Partnerships - Scale our relationships with school districts and transportation providers",
                    "Community & Support - Build trust with our users across all touchpoints",
                    "Engineering - Build systems that prioritize safety and reliability",
                ],
            },
            {
                heading: "Why Join GoSirat",
                items: [
                    "Impact meaningful work that directly improves child safety and family peace of mind",
                    "Collaborate with a mission-driven team focused on trust and transparency",
                    "Competitive compensation and benefits supporting your growth",
                    "Remote-friendly culture with flexibility to work how you work best",
                ],
            },
        ]}
    >
        <p>
            Send us a note at <a href="mailto:info@gosirat.com" className="text-emerald-600 font-semibold hover:underline">info@gosirat.com</a> with your background and let us know how you'd like to help shape the future of school mobility.
        </p>
    </InfoPage>
);

export default CareersPage;
