import InfoPage from "@/components/InfoPage";

const PrivacyPolicyPage = () => (
    <InfoPage
        title="Privacy Policy"
        description="Effective Date: July 2026 | Last Updated: July 2026"
        ctaLabel="Back home"
        ctaHref="/"
    >
        <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.1 Introduction</h2>
                <p>Welcome to GoSirat.</p>
                <p className="mt-2">GoSirat (“GoSirat”, “we”, “our”, or “us”) is committed to protecting the privacy and personal information of parents, children, guardians, schools, and all users of our platform.</p>
                <p className="mt-2">This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you use the GoSirat website, mobile applications, and related services (“Platform”).</p>
                <p className="mt-2">By using GoSirat, you agree to the practices described in this Privacy Policy.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.2 Information We Collect</h2>
                <p>Depending on the services you use, we may collect the following information.</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Personal Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Mobile Number</li>
                    <li>Profile Photograph</li>
                    <li>CNIC (where applicable)</li>
                    <li>Home Address</li>
                    <li>Emergency Contact Details</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Child Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Child Name</li>
                    <li>School</li>
                    <li>Grade/Class</li>
                    <li>Pickup Location</li>
                    <li>Drop-off Location</li>
                    <li>Medical notes (if voluntarily provided)</li>
                    <li>Authorized Pickup Persons</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Guardian Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Name</li>
                    <li>Driving License</li>
                    <li>Vehicle Details</li>
                    <li>Identity Documents</li>
                    <li>Background Verification Documents</li>
                    <li>Contact Details</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Ride Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Ride History</li>
                    <li>Pickup Time</li>
                    <li>Drop-off Time</li>
                    <li>GPS Route</li>
                    <li>Assigned Guardian</li>
                    <li>Vehicle Information</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Device Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Device Type</li>
                    <li>Operating System</li>
                    <li>IP Address</li>
                    <li>Browser Information</li>
                    <li>Device Identifier</li>
                    <li>Crash Reports</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Payment Information</h3>
                <p>Payments are processed securely through third-party payment providers.</p>
                <p className="mt-2">GoSirat does not store debit card, credit card, or banking credentials.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.3 How We Use Your Information</h2>
                <p>Your information may be used to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Create and manage accounts</li>
                    <li>Match parents with verified guardians</li>
                    <li>Facilitate transportation services</li>
                    <li>Enable live ride tracking</li>
                    <li>Process subscriptions</li>
                    <li>Send notifications</li>
                    <li>Improve platform functionality</li>
                    <li>Respond to support requests</li>
                    <li>Prevent fraud</li>
                    <li>Maintain platform security</li>
                    <li>Comply with applicable laws</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.4 Information Sharing</h2>
                <p>GoSirat may share information with:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Verified Guardians</li>
                    <li>Partner Schools</li>
                    <li>Payment Service Providers</li>
                    <li>SMS and Notification Providers</li>
                    <li>Cloud Hosting Providers</li>
                    <li>Government Authorities when legally required</li>
                </ul>
                <p className="mt-3">GoSirat does not sell personal information.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.5 Data Security</h2>
                <p>We implement commercially reasonable administrative, technical, and organizational safeguards to protect personal information.</p>
                <p className="mt-2">However, no electronic system is completely secure. Users acknowledge that transmission of information over the internet is at their own risk.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.6 Data Retention</h2>
                <p>Information is retained only for as long as necessary to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>provide services;</li>
                    <li>comply with legal obligations;</li>
                    <li>resolve disputes;</li>
                    <li>enforce agreements.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.7 User Rights</h2>
                <p>Users may request to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>Access personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Update account details</li>
                    <li>Delete their account (subject to legal obligations)</li>
                    <li>Contact us regarding privacy concerns</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.8 Children's Privacy</h2>
                <p>Children do not directly create GoSirat accounts.</p>
                <p className="mt-2">All child information is provided and managed by parents or authorized guardians.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1.9 Policy Updates</h2>
                <p>GoSirat may modify this Privacy Policy at any time.</p>
                <p className="mt-2">Updated versions will be published on the website.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
                <p>For privacy-related questions:</p>
                <p className="mt-2">Email: <a href="mailto:privacy@gosirat.com" className="text-emerald-600 font-semibold hover:underline">privacy@gosirat.com</a></p>
            </div>
        </div>
    </InfoPage>
);

export default PrivacyPolicyPage;
