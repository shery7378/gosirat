import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms & Conditions | GoSirat School Transportation Platform",
    description: "Read the GoSirat Terms & Conditions to understand your rights, responsibilities, subscriptions, platform usage, and legal policies for our school transportation services.",
    alternates: {
        canonical: "https://gosirat.com/terms-and-conditions",
    },
};

const TermsPage = () => (
    <InfoPage
        title="Terms & Conditions"
        description="These Terms & Conditions govern your access to and use of the GoSirat website, mobile applications, and school transportation platform. By using GoSirat, you agree to comply with these terms and our applicable policies. Please read them carefully before using our services."
        ctaLabel="Back home"
        ctaHref="/"
    >
        <div className="space-y-12 text-gray-700 leading-relaxed">
            <div className="text-sm font-medium text-gray-500 bg-gray-50 p-4 rounded-lg inline-block border border-gray-100">
                Effective Date: July 2026<br />
                Last Updated: July 2026
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using GoSirat, you agree to these Terms & Conditions.</p>
                <p className="mt-2">If you disagree with any provision, you must discontinue use of the Platform.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Nature of the Platform</h2>
                <p>GoSirat is a technology platform that connects parents, schools, and independent transportation providers. GoSirat does not own, lease, or operate transportation vehicles and is not a transportation company or common carrier.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Independent Transportation Providers</h2>
                <p>Drivers are independent service providers and remain responsible for:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Driving safely</li>
                    <li>Vehicle maintenance</li>
                    <li>Valid licenses</li>
                    <li>Insurance</li>
                    <li>Traffic law compliance</li>
                    <li>Passenger safety</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Parent Responsibilities</h2>
                <p>Parents agree to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Provide accurate child information.</li>
                    <li>Maintain updated pickup/drop-off locations.</li>
                    <li>Keep emergency contacts current.</li>
                    <li>Ensure subscription payments are made on time.</li>
                    <li>Review assigned Guardian information.</li>
                    <li>Report safety concerns promptly.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. School Responsibilities</h2>
                <p>Partner schools remain responsible for:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Student attendance</li>
                    <li>Campus supervision</li>
                    <li>Internal release procedures</li>
                    <li>Student verification</li>
                    <li>Compliance with school policies</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payments & Subscriptions</h2>
                <p>Subscription fees are processed through approved payment providers.</p>
                <p className="mt-2">Failure to pay may result in suspension or termination of services.</p>
                <p className="mt-2">Subscription fees are securely processed through approved payment providers.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Platform Availability</h2>
                <p>GoSirat strives for continuous availability but does not guarantee uninterrupted service.</p>
                <p className="mt-2">Temporary interruptions may occur due to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Maintenance</li>
                    <li>Network issues</li>
                    <li>Third-party failures</li>
                    <li>Force majeure events</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Driver Verification</h2>
                <p>GoSirat performs verification using available documentation and screening procedures.</p>
                <p className="mt-2">Verification should not be interpreted as a guarantee of future conduct, driving behavior, or performance.</p>
                <p className="mt-2">Parents acknowledge that no screening process can eliminate all risks.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. GPS Tracking</h2>
                <p>GPS tracking depends on:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Mobile networks</li>
                    <li>GPS satellites</li>
                    <li>Device hardware</li>
                    <li>Internet connectivity</li>
                    <li>Third-party mapping services</li>
                </ul>
                <p className="mt-3">GoSirat does not guarantee complete accuracy or uninterrupted tracking.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. QR Verification</h2>
                <p>QR verification is an additional safety feature.</p>
                <p className="mt-2">It does not constitute a legal guarantee of identity or prevent all unauthorized actions.</p>
                <p className="mt-2">Parents and schools should continue exercising reasonable caution.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, GoSirat, its directors, officers, employees, affiliates, contractors, licensors, and partners shall not be liable for:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Traffic accidents</li>
                    <li>Personal injury</li>
                    <li>Death</li>
                    <li>Property damage</li>
                    <li>Delays</li>
                    <li>Missed pickups</li>
                    <li>Vehicle breakdowns</li>
                    <li>Guardian misconduct</li>
                    <li>School administrative decisions</li>
                    <li>Internet interruptions</li>
                    <li>GPS inaccuracies</li>
                    <li>Data loss</li>
                    <li>Business interruption</li>
                    <li>Emotional distress</li>
                    <li>Indirect, incidental, special, exemplary, punitive, or consequential damages</li>
                </ul>
                <p className="mt-3">Where liability cannot legally be excluded, GoSirat's maximum aggregate liability shall not exceed the total amount paid by the user to GoSirat during the three (3) months immediately preceding the event giving rise to the claim.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
                <p>Users agree to defend, indemnify, and hold harmless GoSirat and its directors, officers, employees, affiliates, contractors, and partners against any claims, losses, damages, liabilities, legal fees, or expenses arising from:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>misuse of the Platform;</li>
                    <li>violation of these Terms;</li>
                    <li>disputes between users;</li>
                    <li>inaccurate information provided by users;</li>
                    <li>violation of applicable laws.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Force Majeure</h2>
                <p>GoSirat shall not be liable for failures caused by events beyond its reasonable control, including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Natural disasters</li>
                    <li>Government actions</li>
                    <li>Civil unrest</li>
                    <li>Pandemics</li>
                    <li>Telecommunications failures</li>
                    <li>Internet outages</li>
                    <li>Power failures</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law</h2>
                <p>These Terms shall be governed by the laws of the Islamic Republic of Pakistan.</p>
                <p className="mt-2">These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the Islamic Republic of Pakistan.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4 text-gray-700">If you have questions about these Terms & Conditions, please contact us:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:legal@gosirat.com" className="inline-flex items-center justify-center gap-2 bg-[#176938] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#12532c] transition-colors">
                        📧 legal@gosirat.com
                    </a>
                    <a href="tel:03099104803" className="inline-flex items-center justify-center gap-2 bg-white border border-[#176938] text-[#176938] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        📞 0309 9104803
                    </a>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
                <div className="flex flex-wrap gap-4">
                    <Link href="/privacy-policy" className="text-[#176938] font-medium hover:underline">Privacy Policy</Link>
                    <Link href="/contact" className="text-[#176938] font-medium hover:underline">Contact</Link>
                    <Link href="/support" className="text-[#176938] font-medium hover:underline">Support</Link>
                    <Link href="/help-center" className="text-[#176938] font-medium hover:underline">Help Center</Link>
                </div>
            </div>
        </div>
    </InfoPage>
);

export default TermsPage;
