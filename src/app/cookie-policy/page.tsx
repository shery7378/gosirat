import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cookie Policy | GoSirat School Transportation Platform",
    description: "Learn how GoSirat uses cookies to improve website performance, security, user experience, analytics, and login sessions on our school transportation platform.",
    alternates: {
        canonical: "https://gosirat.com/cookie-policy",
    },
};

const CookiePolicyPage = () => (
    <InfoPage
        title="Cookie Policy"
        description="This Cookie Policy explains how GoSirat uses cookies and similar technologies to improve your experience, enhance website performance, maintain security, and provide a better school transportation platform for parents, schools, and drivers."
        ctaLabel="Back home"
        ctaHref="/"
    >
        <div className="space-y-12 text-gray-700 leading-relaxed">
            <div className="text-sm font-medium text-gray-500 bg-gray-50 p-4 rounded-lg inline-block border border-gray-100">
                Effective Date: July 2026<br />
                Last Updated: July 2026
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
                <p>Cookies are small text files stored on your computer, smartphone, or other device when you visit a website. They help websites remember your preferences, improve functionality, enhance security, and provide a better browsing experience.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How GoSirat Uses Cookies</h2>
                <p className="mb-4">GoSirat uses cookies to improve the performance and functionality of our website and services.</p>
                <p className="mb-4">We use cookies to:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-gray-700">
                    <div className="flex items-center gap-2"><span>🔹</span> Remember your preferences and settings.</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Keep you securely signed in.</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Improve website speed and performance.</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Analyze website traffic and visitor behavior.</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Enhance website security.</div>
                    <div className="flex items-center gap-2"><span>🔹</span> Improve the overall user experience.</div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Types of Cookies We Use</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">⚙️ Essential Cookies</h3>
                        <p className="text-sm text-gray-600">Required for the website to function properly, including login sessions and security.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">📊 Performance & Analytics Cookies</h3>
                        <p className="text-sm text-gray-600">Help us understand how visitors use our website so we can improve performance and user experience.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">🎨 Functional Cookies</h3>
                        <p className="text-sm text-gray-600">Remember your language, preferences, and settings for future visits.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">🔒 Security Cookies</h3>
                        <p className="text-sm text-gray-600">Help protect user accounts and detect suspicious activity.</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <p>Some trusted third-party services integrated into GoSirat may place cookies on your device, including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3 mb-4">
                    <li>Analytics providers</li>
                    <li>Payment service providers</li>
                    <li>Embedded content providers</li>
                    <li>Customer support services</li>
                </ul>
                <p>These third parties maintain their own privacy policies and cookie practices.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
                <p>You can control or disable cookies through your web browser settings at any time.</p>
                <p className="mt-2">Please note that disabling certain cookies may affect website functionality, login sessions, and some GoSirat features.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Cookie Policy</h2>
                <p>GoSirat may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our services.</p>
                <p className="mt-2">Any updates will be published on this page with the latest revision date.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4 text-gray-700">If you have any questions about our Cookie Policy or how GoSirat uses cookies, please contact us.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:privacy@gosirat.com" className="inline-flex items-center justify-center gap-2 bg-[#176938] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#12532c] transition-colors">
                        📧 privacy@gosirat.com
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
                    <Link href="/terms-and-conditions" className="text-[#176938] font-medium hover:underline">Terms & Conditions</Link>
                    <Link href="/support" className="text-[#176938] font-medium hover:underline">Support</Link>
                    <Link href="/help-center" className="text-[#176938] font-medium hover:underline">Help Center</Link>
                    <Link href="/contact" className="text-[#176938] font-medium hover:underline">Contact</Link>
                </div>
            </div>
        </div>
    </InfoPage>
);

export default CookiePolicyPage;