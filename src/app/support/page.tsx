import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
    title: "GoSirat Support | Help for Parents, Schools & Drivers",
    description: "Get GoSirat support for school transportation services, live ride tracking, account setup, payments, QR verification, and safety assistance for parents, schools, and drivers.",
    alternates: {
        canonical: "https://gosirat.com/support",
    },
};

const SupportPage = () => (
    <div className="support-page">
        <InfoPage
            eyebrow="GoSirat Support"
            title="We're Here to Help"
            description="Need help with GoSirat? Our dedicated support team assists parents, schools, and drivers with school transportation services, account setup, ride tracking, bookings, payments, and safety-related questions. We're committed to providing fast, reliable support to ensure every school journey is safe and stress-free."
            ctaLabel="Visit Help Center"
            ctaHref="/help-center"
        >
            <div className="space-y-10">
                {/* Support Commitment */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        🛟 Support Commitment
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        At GoSirat, your safety and satisfaction are our priority. We respond quickly to safety-related concerns and aim to resolve most support requests within one business day.
                    </p>
                </div>

                {/* Support Channels */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        📞 Support Channels
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">📧 Email Support</h3>
                            <a href="mailto:info@gosirat.com" className="text-emerald-600 font-medium hover:underline block mb-2">
                                info@gosirat.com
                            </a>
                            <p className="text-sm text-gray-600">Typically responds within 2 hours during business hours.</p>
                        </div>
                        
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">📱 In-App Support</h3>
                            <p className="text-sm text-gray-600">Get real-time assistance through the GoSirat app for ride-related questions and urgent transportation support.</p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">📞 Phone Support</h3>
                            <a href="tel:03099104803" className="text-emerald-600 font-medium hover:underline block mb-2">
                                0309 9104803
                            </a>
                            <p className="text-sm text-gray-600">For urgent transportation issues or safety-related assistance.</p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">📚 Help Center</h3>
                            <p className="text-sm text-gray-600">Browse articles, guides, and frequently asked questions anytime to find quick answers about GoSirat's services.</p>
                        </div>
                    </div>
                </div>

                {/* Need More Help? */}
                <div className="border-t border-gray-100 pt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        ❓ Need More Help?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our team is always ready to help parents, schools, and drivers enjoy safe, smart, and reliable school transportation.
                    </p>
                </div>
            </div>
        </InfoPage>
    </div>
);

export default SupportPage;