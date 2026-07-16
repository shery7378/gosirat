import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
    title: "GoSirat Help Center | Guides for Parents, Schools & Drivers",
    description: "Visit the GoSirat Help Center for guides, FAQs, and support on school transportation, Parent App, Driver App, live GPS tracking, QR verification, and transportation management.",
    alternates: {
        canonical: "https://gosirat.com/help-center",
    },
};

const HelpCenterPage = () => (
    <div className="help-center-page">
        <InfoPage
            eyebrow="GoSirat Help Center"
            title="How Can We Help You?"
            description="Welcome to the GoSirat Help Center. Find step-by-step guides, frequently asked questions, and helpful resources for parents, schools, and drivers using our school transportation platform. Whether you're getting started, tracking rides, managing transportation, or using GoSirat's features, you'll find the answers here."
            ctaLabel="Contact Support"
            ctaHref="/contact-us"
            sections={[
                {
                    heading: "👨‍👩‍👧‍👦 For Parents",
                    items: [
                        "Create and verify your GoSirat account",
                        "Add children and manage family profiles",
                        "Book and manage school transportation",
                        "Track your child's ride with live GPS tracking",
                        "Receive real-time notifications",
                        "QR verification and secure student handover",
                        "Manage subscriptions, invoices, and payments",
                        "Report absences and update transportation schedules",
                    ],
                },
                {
                    heading: "🏫 For Schools",
                    items: [
                        "Register your school with GoSirat",
                        "Add students, routes, and transportation schedules",
                        "Manage drivers and vehicle assignments",
                        "Live transportation monitoring",
                        "Parent communication tools",
                        "Transportation reports and analytics",
                        "Student attendance and trip history",
                        "School transportation management best practices",
                    ],
                },
                {
                    heading: "🚙 For Drivers",
                    items: [
                        "Driver registration and account verification",
                        "Background checks and onboarding",
                        "Route navigation and optimization",
                        "Accepting and managing trips",
                        "QR verification during pickups and drop-offs",
                        "Earnings, bonuses, and payment history",
                        "Driver ratings and performance insights",
                        "Safety guidelines and emergency procedures",
                    ],
                },
            ]}
        >
            <div className="mt-4 border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold text-gray-900">❓ Still Need Help?</h3>
                <p className="mt-2 text-gray-600">
                    Can't find what you're looking for? Our support team is ready to help. Contact us for assistance with your account, school transportation services, or technical questions.
                </p>
                <div className="mt-4 flex flex-col gap-2 font-medium text-emerald-700">
                    <a href="mailto:info@gosirat.com" className="hover:underline flex items-center gap-2">
                        📧 info@gosirat.com
                    </a>
                    <a href="tel:03099104803" className="hover:underline flex items-center gap-2">
                        📞 0309 9104803
                    </a>
                </div>
            </div>
        </InfoPage>
    </div>
);

export default HelpCenterPage;

