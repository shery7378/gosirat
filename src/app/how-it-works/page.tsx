import type { NextPage, Metadata } from "next";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
    title: "How GoSirat Works | Safe School Transportation Platform",
    description: "Learn how GoSirat connects parents, schools, and drivers through verified drivers, live GPS tracking, secure handovers, and smarter school transportation.",
    alternates: {
        canonical: "https://gosirat.com/how-it-works",
    },
};

const HowItWorksPage: NextPage = () => {
    return (
        <div className="w-full relative bg-gosirat-light flex flex-col items-center pt-6 px-0 pb-0 box-border leading-normal tracking-normal">
            <WebPageSchema
                title="How GoSirat Works | Safe School Transportation Platform"
                description="Learn how GoSirat connects parents, schools, and drivers through verified drivers, live GPS tracking, secure handovers, and smarter school transportation."
                url="https://gosirat.com/how-it-works"
            />
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://gosirat.com/" },
                { name: "How it Works", url: "https://gosirat.com/how-it-works" }
            ]} />

            {/* Hero Section */}
            <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
                <div className="rounded-[20px] bg-gosirat-green-light flex items-center py-1.5 px-3.5 gap-2 mb-8" data-aos="fade-in">
                    <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green-dark" />
                    <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green-dark">
                        How GoSirat Works
                    </div>
                </div>

                <h1 className="m-0 font-sans font-semibold text-[64px] leading-[100%] tracking-normal text-center text-gosirat-black mb-8 max-w-4xl" data-aos="fade-up">
                    Safe School Transportation Made Simple
                </h1>

                <p className="m-0 font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-center text-gosirat-gray mb-12 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
                    GoSirat connects parents, schools, and drivers through one smart transportation platform. From verified drivers and live tracking to secure student handovers, every step is designed to make school journeys safer and more transparent.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full" data-aos="fade-up" data-aos-delay="200">
                    <a href="/register" className="bg-gosirat-green-alt text-white font-semibold py-4 px-10 rounded-xl hover:bg-[#0a4f27] transition-colors text-lg inline-block w-full sm:w-auto no-underline">
                        Explore GoSirat Platform
                    </a>
                </div>
            </section>

            {/* Existing Info Sections Re-styled */}
            <section className="w-full max-w-7xl mx-auto px-4 py-12 flex flex-col gap-12 md:gap-16">
                <div className="text-center mb-6" data-aos="fade-up">
                    <h2 className="m-0 text-3xl md:text-4xl font-semibold text-gosirat-darker mb-6">One Platform. Three Connected Experiences.</h2>
                    <p className="m-0 text-lg text-gosirat-text max-w-3xl mx-auto">
                        GoSirat brings parents, schools, and drivers together through a simple workflow that improves communication, safety, and transportation management.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* For Parents */}
                    <div className="bg-white rounded-[22px] p-8 md:p-12 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col hover:shadow-md transition-shadow w-full" data-aos="fade-up">
                        <div className="flex flex-col mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                                <h2 className="m-0 text-2xl font-semibold text-gosirat-darker">For Parents</h2>
                            </div>
                            <h3 className="m-0 text-gosirat-green-alt text-xl font-medium">Complete Visibility From Pickup to Drop-off</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">01</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Create Your Account</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Register securely and complete identity verification.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">02</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Add Your Child</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Create your child's profile, emergency contacts, and transportation preferences.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">03</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Select Your Route</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Choose available school transportation packages and routes.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">04</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Track Every Journey</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Monitor vehicle location, receive ETA updates, and get real-time notifications.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">05</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Confirm Safe Handover</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Verify pickup and drop-off through secure QR or PIN verification.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Schools */}
                    <div className="bg-white rounded-[22px] p-8 md:p-12 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col hover:shadow-md transition-shadow w-full" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex flex-col mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">🏫</span>
                                <h2 className="m-0 text-2xl font-semibold text-gosirat-darker">For Schools</h2>
                            </div>
                            <h3 className="m-0 text-gosirat-green-alt text-xl font-medium">Simplify Transportation Management</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">01</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Register Your School</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Connect your school with the GoSirat transportation platform.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">02</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Manage Routes</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Configure routes, schedules, pickup locations, and student assignments.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">03</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Communicate With Families</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Keep parents updated with real-time transportation information.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">04</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Monitor Operations</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Track vehicles, attendance, and student movement through the dashboard.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">05</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Access Reports</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Review transportation analytics and improve daily operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Drivers */}
                    <div className="bg-white rounded-[22px] p-8 md:p-12 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col hover:shadow-md transition-shadow w-full" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex flex-col mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">🚐</span>
                                <h2 className="m-0 text-2xl font-semibold text-gosirat-darker">For Drivers</h2>
                            </div>
                            <h3 className="m-0 text-gosirat-green-alt text-xl font-medium">Drive With Better Tools and Support</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">01</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Complete Verification</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Submit documents, vehicle details, and complete background checks.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">02</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Complete Training</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Learn child safety procedures, secure handovers, and professional driving standards.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">03</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Receive Routes</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Get assigned school routes with complete trip information.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">04</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Navigate Safely</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Use GoSirat navigation and student manifests during every journey.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-gosirat-green-light font-bold text-3xl">05</div>
                                <div>
                                    <h4 className="m-0 text-lg font-semibold text-gosirat-darker mb-2">Complete Trips</h4>
                                    <p className="m-0 text-gosirat-text leading-relaxed">Confirm pickups, drop-offs, and receive transparent earnings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="w-full bg-white py-20 px-4 mt-8 mb-16 border-y border-[rgba(0,0,0,0.05)]">
                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                    <div className="text-center" data-aos="fade-up">
                        <h2 className="m-0 text-3xl md:text-4xl font-semibold text-gosirat-darker mb-6">Every Ride Is Protected By Safety Technology</h2>
                        <p className="m-0 text-lg text-gosirat-text max-w-3xl mx-auto">
                            Every GoSirat journey includes multiple safety checkpoints to ensure students, parents, and schools stay connected.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        <div className="bg-gosirat-light rounded-[22px] p-8 flex flex-col gap-4 h-full" data-aos="fade-up">
                            <span className="text-4xl">📍</span>
                            <h3 className="m-0 text-xl font-semibold text-gosirat-darker">Live GPS Tracking</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed">Authorized parents can monitor active school journeys in real time.</p>
                        </div>
                        <div className="bg-gosirat-light rounded-[22px] p-8 flex flex-col gap-4 h-full" data-aos="fade-up" data-aos-delay="100">
                            <span className="text-4xl">🔐</span>
                            <h3 className="m-0 text-xl font-semibold text-gosirat-darker">Secure Student Handover</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed">QR verification confirms the right child is picked up and released safely.</p>
                        </div>
                        <div className="bg-gosirat-light rounded-[22px] p-8 flex flex-col gap-4 h-full" data-aos="fade-up" data-aos-delay="200">
                            <span className="text-4xl">📱</span>
                            <h3 className="m-0 text-xl font-semibold text-gosirat-darker">Real-Time Notifications</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed">Parents receive important updates during every stage of the journey.</p>
                        </div>
                        <div className="bg-gosirat-light rounded-[22px] p-8 flex flex-col gap-4 h-full" data-aos="fade-up">
                            <span className="text-4xl">💬</span>
                            <h3 className="m-0 text-xl font-semibold text-gosirat-darker">In-App Communication</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed">Parents, drivers, and schools can communicate when needed.</p>
                        </div>
                        <div className="bg-gosirat-light rounded-[22px] p-8 flex flex-col gap-4 h-full" data-aos="fade-up" data-aos-delay="100">
                            <span className="text-4xl">📋</span>
                            <h3 className="m-0 text-xl font-semibold text-gosirat-darker">Digital Ride Records</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed">Every trip creates a transparent record of attendance and completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 pb-20">
                <div className="flex flex-col items-center justify-center pt-8" data-aos="fade-up">
                    <p className="m-0 text-xl text-gosirat-text mb-8 text-center max-w-2xl font-medium">
                        Ready to experience safer, more connected school transportation?
                    </p>
                    <a href="/register" className="bg-gosirat-green-alt text-white font-semibold py-4 px-10 rounded-xl hover:bg-[#0a4f27] transition-colors text-lg no-underline inline-block">
                        Explore the platform
                    </a>
                </div>
            </section>

            <AppDownload />
        </div>
    );
};

export default HowItWorksPage;