import InfoPage from "@/components/InfoPage";

const CookiesPage = () => (
    <InfoPage
        title="Cookie Policy"
        description="Effective Date: July 2026 | Last Updated: July 2026"
        ctaLabel="Back home"
        ctaHref="/"
    >
        <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">What Are Cookies?</h2>
                <p>Cookies are small text files stored on your device to improve website functionality and user experience.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Cookies</h2>
                <p>GoSirat uses cookies to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Remember user preferences</li>
                    <li>Improve website performance</li>
                    <li>Analyze visitor behavior</li>
                    <li>Enhance security</li>
                    <li>Maintain login sessions</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Cookies</h2>
                <p>Some services integrated into the website may place their own cookies, including:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Analytics providers</li>
                    <li>Payment providers</li>
                    <li>Embedded services</li>
                </ul>
                <p className="mt-3">These providers maintain their own privacy policies.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Managing Cookies</h2>
                <p>Users may disable cookies through browser settings.</p>
                <p className="mt-2">Disabling cookies may affect certain website features.</p>
            </div>
        </div>
    </InfoPage>
);

export default CookiesPage;