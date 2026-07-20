import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | GoSirat School Transportation Platform",
    description: "Read the GoSirat Privacy Policy to learn how we collect, use, protect, and manage personal information for parents, schools, drivers, and students using our school transportation platform.",
    alternates: {
        canonical: "https://gosirat.com/privacy-policy",
    },
};

const PrivacyPolicyPage = () => (
    <InfoPage
        title="Privacy Policy"
        description="GoSirat values your privacy and is committed to protecting the personal information of parents, students, schools, drivers, and all users of our school transportation platform. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our website, mobile applications, and related services."
        ctaLabel="Back home"
        ctaHref="/"
    >
        <div className="space-y-12 text-gray-700 leading-relaxed">
            <div className="text-sm font-medium text-gray-500 bg-gray-50 p-4 rounded-lg inline-block border border-gray-100">
                Effective Date: July 2026<br />
                Last Updated: July 2026
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p>Welcome to GoSirat.</p>
                <p className="mt-2">GoSirat (“GoSirat”, “we”, “our”, or “us”) is committed to protecting the privacy and personal information of parents, children, guardians, schools, and all users of our platform.</p>
                <p className="mt-2">This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you use the GoSirat website, mobile applications, and related services (“Platform”).</p>
                <p className="mt-2">By using GoSirat, you agree to the practices described in this Privacy Policy.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Information We Collect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">👤 Personal Information</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Full Name</li>
                            <li>• Email Address</li>
                            <li>• Mobile Number</li>
                            <li>• CNIC</li>
                            <li>• Profile Photo</li>
                            <li>• Address</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">🧒 Child Information</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Child Name</li>
                            <li>• School</li>
                            <li>• Grade</li>
                            <li>• Pickup Address</li>
                            <li>• Drop-off Address</li>
                            <li>• Medical Information (optional)</li>
                            <li>• Authorized Guardians</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">🚘 Driver Information</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Name</li>
                            <li>• Driving License</li>
                            <li>• Vehicle Details</li>
                            <li>• Identity Verification</li>
                            <li>• Contact Information</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">📍 Ride Information</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• GPS Tracking</li>
                            <li>• Pickup Time</li>
                            <li>• Drop-off Time</li>
                            <li>• Ride History</li>
                            <li>• Assigned Driver</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">📱 Device Information</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Device Type</li>
                            <li>• Browser</li>
                            <li>• IP Address</li>
                            <li>• Operating System</li>
                            <li>• Crash Reports</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">💳 Payment Information</h3>
                        <p className="text-sm text-gray-600">Payments are processed securely through third-party payment providers.</p>
                        <p className="text-sm text-gray-600 mt-2">GoSirat does not store debit card, credit card, or banking credentials.</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">GoSirat uses your information only to provide safe, reliable, and efficient school transportation services.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-gray-700">
                    <div className="flex items-center gap-2"><span>🔹</span> Account Management</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Student Transportation</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Live GPS Tracking</div>
                    <div className="flex items-center gap-2"><span>🔹</span> QR Verification</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Notifications</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Payments</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Customer Support</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Fraud Prevention</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Platform Security</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Legal Compliance</div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
                <p>GoSirat may share information with:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3 mb-4">
                    <li>Verified Guardians</li>
                    <li>Partner Schools</li>
                    <li>Payment Service Providers</li>
                    <li>SMS and Notification Providers</li>
                    <li>Cloud Hosting Providers</li>
                    <li>Government Authorities when legally required</li>
                </ul>
                <p className="font-medium text-gosirat-green bg-gosirat-bg-light border border-gosirat-green/20 p-4 rounded-lg inline-block">GoSirat never sells your personal information to third parties.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                <p>We implement commercially reasonable administrative, technical, and organizational safeguards to protect personal information.</p>
                <p className="mt-2">However, no electronic system is completely secure. Users acknowledge that transmission of information over the internet is at their own risk.</p>
                <p className="mt-2 font-medium">We continuously review our security measures to help protect user information against unauthorized access, loss, misuse, or disclosure.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
                <p>Information is retained only for as long as necessary to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>provide services;</li>
                    <li>comply with legal obligations;</li>
                    <li>resolve disputes;</li>
                    <li>enforce agreements.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Your Privacy Rights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="bg-gosirat-bg-light border border-gosirat-green rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                        <span className="text-2xl mb-2 text-gosirat-green">✔</span>
                        <span className="font-semibold text-gray-900 text-sm">Access Data</span>
                    </div>
                    <div className="bg-gosirat-bg-light border border-gosirat-green rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                        <span className="text-2xl mb-2 text-gosirat-green">✔</span>
                        <span className="font-semibold text-gray-900 text-sm">Correct Information</span>
                    </div>
                    <div className="bg-gosirat-bg-light border border-gosirat-green rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                        <span className="text-2xl mb-2 text-gosirat-green">✔</span>
                        <span className="font-semibold text-gray-900 text-sm">Update Account</span>
                    </div>
                    <div className="bg-gosirat-bg-light border border-gosirat-green rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                        <span className="text-2xl mb-2 text-gosirat-green">✔</span>
                        <span className="font-semibold text-gray-900 text-sm">Delete Account</span>
                    </div>
                    <div className="bg-gosirat-bg-light border border-gosirat-green rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                        <span className="text-2xl mb-2 text-gosirat-green">✔</span>
                        <span className="font-semibold text-gray-900 text-sm">Contact Privacy Team</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p>Children do not directly create GoSirat accounts.</p>
                <p className="mt-2">All child information is provided and managed by parents or authorized guardians.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Policy Updates</h2>
                <p>GoSirat may modify this Privacy Policy at any time.</p>
                <p className="mt-2">Updated versions will be published on the website.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4 text-gray-700">If you have any questions regarding this Privacy Policy or how GoSirat handles your personal information, please contact our Privacy Team.</p>
                <a href="mailto:privacy@gosirat.com" className="inline-flex items-center gap-2 bg-gosirat-green text-white px-6 py-3 rounded-lg font-medium hover:bg-gosirat-green-dark transition-colors">
                    📧 privacy@gosirat.com
                </a>
            </div>

            <div className="pt-8 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Links</h2>
                <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="text-gosirat-green font-medium hover:underline">Contact</Link>
                    <Link href="/support" className="text-gosirat-green font-medium hover:underline">Support</Link>
                    <Link href="/help-center" className="text-gosirat-green font-medium hover:underline">Help Center</Link>
                    <Link href="/terms-and-conditions" className="text-gosirat-green font-medium hover:underline">Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </InfoPage>
);

export default PrivacyPolicyPage;
