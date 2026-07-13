import InfoPage from "@/components/InfoPage";

const DisclosuresPage = () => (
    <InfoPage
        title="Disclaimer"
        description="Effective Date: July 2026 | Last Updated: July 2026"
        ctaLabel="Back home"
        ctaHref="/"
    >
        <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Technology Platform Disclaimer</h2>
                <p>GoSirat is solely a technology platform that facilitates coordination between parents, schools, and independent transportation Guardians.</p>
                <p className="mt-2">GoSirat does not provide transportation services.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">No Transportation Liability</h2>
                <p>Transportation services are provided exclusively by independent Guardians.</p>
                <p className="mt-2">GoSirat shall not be responsible for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Operation of vehicles</li>
                    <li>Driving behavior</li>
                    <li>Traffic violations</li>
                    <li>Vehicle maintenance</li>
                    <li>Mechanical failures</li>
                    <li>Road accidents</li>
                    <li>Delays</li>
                    <li>Injuries</li>
                    <li>Loss of property</li>
                    <li>Guardian conduct</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">No Warranty</h2>
                <p>The Platform is provided on an “AS IS” and “AS AVAILABLE” basis.</p>
                <p className="mt-2">GoSirat makes no warranties regarding:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Continuous availability</li>
                    <li>Accuracy</li>
                    <li>Reliability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Error-free operation</li>
                    <li>Compatibility with every device</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
                <p>GoSirat relies on third-party providers for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>GPS</li>
                    <li>Maps</li>
                    <li>Payment processing</li>
                    <li>Cloud hosting</li>
                    <li>SMS</li>
                    <li>Push notifications</li>
                </ul>
                <p className="mt-3">GoSirat is not responsible for failures or interruptions caused by third-party providers.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">User Responsibility</h2>
                <p>Users remain responsible for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Verifying pickup information</li>
                    <li>Maintaining accurate account information</li>
                    <li>Supervising children where appropriate</li>
                    <li>Reporting incidents promptly</li>
                    <li>Exercising reasonable judgment when using the Platform</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to Legal Documents</h2>
                <p>GoSirat reserves the right to modify these legal documents at any time.</p>
                <p className="mt-2">Continued use of the Platform constitutes acceptance of any revised versions.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
                <p>GoSirat</p>
                <p className="mt-2">Email: <a href="mailto:info@gosirat.com" className="text-emerald-600 font-semibold hover:underline">info@gosirat.com</a></p>
                <p className="mt-2">Website: <a href="https://www.gosirat.com" className="text-emerald-600 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">www.gosirat.com</a></p>
                <p className="mt-2">© 2026 GoSirat. All Rights Reserved.</p>
            </div>
        </div>
    </InfoPage>
);

export default DisclosuresPage;
