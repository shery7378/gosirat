import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Disclaimer | GoSirat School Transportation Platform",
    description: "Read the GoSirat Disclaimer to understand the platform's role, user responsibilities, third-party services, and legal limitations for our school transportation platform.",
    alternates: {
        canonical: "https://gosirat.com/disclaimer",
    },
};

const DisclaimerPage = () => (
    <InfoPage
        title="Disclaimer"
        description="This Disclaimer explains the scope of GoSirat's services, the responsibilities of users and independent transportation providers, and the limitations of liability when using our school transportation platform. Please read this page carefully before using GoSirat."
        ctaLabel="Back home"
        ctaHref="/"
    >
        <div className="space-y-12 text-gray-700 leading-relaxed">
            <div className="text-sm font-medium text-gray-500 bg-gray-50 p-4 rounded-lg inline-block border border-gray-100">
                Effective Date: July 2026<br />
                Last Updated: July 2026
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Technology Platform Disclaimer</h2>
                <p>GoSirat is a technology platform that connects parents, schools, and independent transportation providers. We provide tools such as live GPS tracking, QR verification, notifications, and transportation management to improve communication and safety.</p>
                <p className="mt-2 font-medium text-gray-900 bg-gray-50 p-4 rounded-lg inline-block border border-gray-200">GoSirat does not own, operate, lease, or manage transportation vehicles and does not directly provide transportation services.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Transportation Responsibility</h2>
                <p className="mb-4">Transportation services are provided solely by independent transportation providers.</p>
                <p className="mb-4 font-medium text-gray-900">GoSirat is not responsible for:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-gray-700">
                    <div className="flex items-center gap-2"><span>❌</span> Vehicle operation</div>
                    <div className="flex items-center gap-2"><span>❌</span> Driving behavior</div>
                    <div className="flex items-center gap-2"><span>❌</span> Traffic violations</div>
                    <div className="flex items-center gap-2"><span>❌</span> Vehicle maintenance</div>
                    <div className="flex items-center gap-2"><span>❌</span> Mechanical failures</div>
                    <div className="flex items-center gap-2"><span>❌</span> Road accidents</div>
                    <div className="flex items-center gap-2"><span>❌</span> Service delays</div>
                    <div className="flex items-center gap-2"><span>❌</span> Personal injury</div>
                    <div className="flex items-center gap-2"><span>❌</span> Property loss or damage</div>
                    <div className="flex items-center gap-2"><span>❌</span> Driver conduct</div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. No Warranty</h2>
                <p className="mb-4">The GoSirat platform is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
                <p className="mb-4 font-medium text-gray-900">We do not guarantee:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-gray-700">
                    <div className="flex items-center gap-2"><span>🔹</span> Continuous platform availability</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Error-free operation</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Accuracy of information</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Compatibility with every device</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Uninterrupted service</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Fitness for a particular purpose</div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
                <p>GoSirat relies on trusted third-party providers for certain services, including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3 mb-4">
                    <li>GPS and mapping services</li>
                    <li>Payment processing</li>
                    <li>Cloud hosting</li>
                    <li>SMS delivery</li>
                    <li>Push notifications</li>
                </ul>
                <p>GoSirat is not responsible for service interruptions or failures caused by third-party providers.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Responsibilities</h2>
                <p>Users are responsible for:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Providing accurate account information</li>
                    <li>Keeping pickup and drop-off details updated</li>
                    <li>Supervising children where appropriate</li>
                    <li>Reviewing assigned driver information</li>
                    <li>Reporting safety concerns promptly</li>
                    <li>Using the platform responsibly and in accordance with applicable laws</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Disclaimer</h2>
                <p>GoSirat may update this Disclaimer from time to time to reflect changes in our services, technology, or legal requirements.</p>
                <p className="mt-2">Updated versions will be published on this page with the latest revision date.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4 text-gray-700">If you have any questions regarding this Disclaimer or our legal policies, please contact us.</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    <a href="mailto:info@gosirat.com" className="inline-flex items-center justify-center gap-2 bg-gosirat-green text-white px-6 py-3 rounded-lg font-medium hover:bg-gosirat-green-dark transition-colors">
                        📧 info@gosirat.com
                    </a>
                    <a href="tel:03099104803" className="inline-flex items-center justify-center gap-2 bg-white border border-gosirat-green text-gosirat-green px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        📞 0309 9104803
                    </a>
                    <a href="https://gosirat.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white border border-gosirat-green text-gosirat-green px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        🌐 https://gosirat.com
                    </a>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
                <div className="flex flex-wrap gap-4">
                    <Link href="/privacy-policy" className="text-gosirat-green font-medium hover:underline">Privacy Policy</Link>
                    <Link href="/terms-and-conditions" className="text-gosirat-green font-medium hover:underline">Terms & Conditions</Link>
                    <Link href="/cookie-policy" className="text-gosirat-green font-medium hover:underline">Cookie Policy</Link>
                    <Link href="/support" className="text-gosirat-green font-medium hover:underline">Support</Link>
                    <Link href="/help-center" className="text-gosirat-green font-medium hover:underline">Help Center</Link>
                    <Link href="/contact" className="text-gosirat-green font-medium hover:underline">Contact</Link>
                </div>
            </div>
        </div>
    </InfoPage>
);

export default DisclaimerPage;
