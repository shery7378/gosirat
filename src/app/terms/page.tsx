import InfoPage from "@/components/InfoPage";

const TermsPage = () => (
    <InfoPage
        title="Terms & Conditions"
        description="Effective Date: July 2026 | Last Updated: July 2026"
        ctaLabel="Back home"
        ctaHref="/"
    >
        <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.1 Acceptance</h2>
                <p>By accessing or using GoSirat, you agree to these Terms & Conditions.</p>
                <p className="mt-2">If you disagree with any provision, you must discontinue use of the Platform.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.2 Nature of the Platform</h2>
                <p>GoSirat is a technology platform that facilitates communication and coordination between parents, educational institutions, and independent transportation service providers (“Guardians”).</p>
                <p className="mt-2">GoSirat does not own, lease, operate, or manage transportation vehicles and is not a transportation company or common carrier.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.3 Independent Guardians</h2>
                <p>Guardians operate as independent service providers.</p>
                <p className="mt-2">Nothing in these Terms creates:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Employment</li>
                    <li>Partnership</li>
                    <li>Joint Venture</li>
                    <li>Agency Relationship</li>
                </ul>
                <p className="mt-3">between GoSirat and any Guardian.</p>
                <p className="mt-2">Each Guardian remains solely responsible for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Driving</li>
                    <li>Vehicle maintenance</li>
                    <li>Licenses</li>
                    <li>Insurance</li>
                    <li>Compliance with traffic laws</li>
                    <li>Passenger safety</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.4 Parent Responsibilities</h2>
                <p>Parents agree to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Provide accurate child information.</li>
                    <li>Maintain updated pickup/drop-off locations.</li>
                    <li>Keep emergency contacts current.</li>
                    <li>Ensure subscription payments are made on time.</li>
                    <li>Review assigned Guardian information.</li>
                    <li>Report safety concerns promptly.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.5 School Responsibilities</h2>
                <p>Partner schools remain responsible for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Student attendance</li>
                    <li>Campus supervision</li>
                    <li>Internal release procedures</li>
                    <li>Student verification</li>
                    <li>Compliance with school policies</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.6 Payments</h2>
                <p>Subscription fees are processed through approved payment providers.</p>
                <p className="mt-2">Failure to pay may result in suspension or termination of services.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.7 Platform Availability</h2>
                <p>GoSirat strives for continuous availability but does not guarantee uninterrupted service.</p>
                <p className="mt-2">Temporary interruptions may occur due to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Maintenance</li>
                    <li>Network issues</li>
                    <li>Third-party failures</li>
                    <li>Force majeure events</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.8 Guardian Verification</h2>
                <p>GoSirat performs verification using available documentation and screening procedures.</p>
                <p className="mt-2">Verification should not be interpreted as a guarantee of future conduct, driving behavior, or performance.</p>
                <p className="mt-2">Parents acknowledge that no screening process can eliminate all risks.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.9 GPS Tracking</h2>
                <p>GPS tracking depends on:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Mobile networks</li>
                    <li>GPS satellites</li>
                    <li>Device hardware</li>
                    <li>Internet connectivity</li>
                    <li>Third-party mapping services</li>
                </ul>
                <p className="mt-3">GoSirat does not guarantee complete accuracy or uninterrupted tracking.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.10 QR Verification</h2>
                <p>QR verification is an additional safety feature.</p>
                <p className="mt-2">It does not constitute a legal guarantee of identity or prevent all unauthorized actions.</p>
                <p className="mt-2">Parents and schools should continue exercising reasonable caution.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.11 Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, GoSirat, its directors, officers, employees, affiliates, contractors, licensors, and partners shall not be liable for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
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
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.12 Indemnification</h2>
                <p>Users agree to defend, indemnify, and hold harmless GoSirat and its directors, officers, employees, affiliates, contractors, and partners against any claims, losses, damages, liabilities, legal fees, or expenses arising from:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>misuse of the Platform;</li>
                    <li>violation of these Terms;</li>
                    <li>disputes between users;</li>
                    <li>inaccurate information provided by users;</li>
                    <li>violation of applicable laws.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.13 Force Majeure</h2>
                <p>GoSirat shall not be liable for failures caused by events beyond its reasonable control, including:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
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
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2.14 Governing Law</h2>
                <p>These Terms shall be governed by the laws of the Islamic Republic of Pakistan.</p>
            </div>
        </div>
    </InfoPage>
);

export default TermsPage;
