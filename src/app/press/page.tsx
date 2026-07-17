import type { NextPage, Metadata } from "next";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";
import AppDownload from "@/components/AppDownload";

export const metadata: Metadata = {
    title: "GoSirat Press | News, Media & School Transportation Updates",
    description: "Visit the GoSirat Press Center for company news, media inquiries, school transportation insights, safety updates, partnerships, and official brand resources.",
    alternates: {
        canonical: "https://gosirat.com/press",
    },
};

const PressPage: NextPage = () => {
    return (
        <div className="w-full relative bg-[#f4f7f4] flex flex-col items-center pt-6 px-0 pb-0 box-border leading-[normal] tracking-[normal] overflow-hidden">
            <WebPageSchema 
                title="GoSirat Press | News, Media & School Transportation Updates" 
                description="Visit the GoSirat Press Center for company news, media inquiries, school transportation insights, safety updates, partnerships, and official brand resources." 
                url="https://gosirat.com/press" 
            />
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://gosirat.com/" },
                { name: "Press", url: "https://gosirat.com/press" }
            ]} />

            {/* Hero Section */}
            <section className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12 flex flex-col items-center text-center relative">
                <div className="rounded-full bg-[#89b99a]/20 border border-[#89b99a]/40 flex items-center py-2 px-5 gap-2.5 mb-8" data-aos="fade-in">
                    <div className="h-2 w-2 rounded-full bg-[#124225]" />
                    <div className="tracking-[2px] leading-none uppercase font-bold text-[#124225] text-xs">
                        GoSirat Press & Media
                    </div>
                </div>
                
                <h1 className="m-0 font-[Inter] font-semibold text-[64px] leading-[100%] tracking-[0px] text-center text-[#0c140f] mb-8 max-w-5xl" data-aos="fade-up">
                    GoSirat News, Media & Company Updates
                </h1>
                
                <p className="m-0 font-[Inter] font-normal text-[20px] leading-[32.5px] tracking-[0px] text-center text-[#57605b] mb-12 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
                    Welcome to the GoSirat Press Center. Here journalists, media partners, and industry professionals can find company updates, transportation insights, safety information, and partnership opportunities related to the future of safe school transportation.
                </p>
            </section>

            {/* Main Content Areas */}
            <section className="w-full max-w-[1400px] mx-auto px-6 py-12 flex flex-col gap-16 md:gap-24">

                {/* For Media Inquiries */}
                <div className="flex flex-col w-full" data-aos="fade-up">
                    <div className="text-center mb-10">
                        <span className="text-[#0D6332] font-semibold text-sm uppercase tracking-wider block mb-2">For Media Inquiries</span>
                        <h2 className="m-0 text-3xl md:text-4xl font-semibold text-[#09131a]">Stories About Safer School Transportation</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">🛡️</div>
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">School Transportation Safety Stories</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Feature requests and articles about improving student transportation safety, parent visibility, and modern mobility solutions.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">💡</div>
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Safety & Technology Insights</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Expert commentary on child safety, driver verification, QR-based handovers, and transportation technology.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">📢</div>
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Company Announcements</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Updates about GoSirat milestones, product launches, school partnerships, and expansion plans.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">🖼️</div>
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Brand Resources</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Access official GoSirat logos, product images, and approved brand assets.
                            </p>
                        </div>
                    </div>
                </div>

                {/* For Partners */}
                <div className="flex flex-col w-full" data-aos="fade-up">
                    <div className="text-center mb-10">
                        <span className="text-[#0D6332] font-semibold text-sm uppercase tracking-wider block mb-2">For Partners</span>
                        <h2 className="m-0 text-3xl md:text-4xl font-semibold text-[#09131a]">Building the Future of School Mobility Together</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">🏫</div>
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">School Partnerships</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Opportunities for schools and education networks to improve transportation management.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">🚐</div>
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Driver Network Expansion</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Programs to support professional drivers through training, technology, and reliable opportunities.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">💻</div>
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Technology Partnerships</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Integration opportunities, API partnerships, and mobility technology collaborations.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">🌍</div>
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Community Initiatives</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Co-marketing opportunities and collaborations that support safer and smarter transportation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Media Contact Section */}
                <div className="bg-[#09131a] rounded-[32px] p-10 md:p-16 text-white relative overflow-hidden shadow-xl" data-aos="zoom-in">
                    <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/5 rounded-full filter blur-2xl" />
                    <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-400/10 rounded-full filter blur-2xl" />
                    
                    <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="m-0 text-3xl md:text-4xl font-extrabold text-white">Media & Press Inquiries</h2>
                        <p className="m-0 text-lg text-gray-300 leading-relaxed">
                            For interviews, feature requests, company news, and expert commentary, contact our team:
                        </p>
                        <a href="mailto:info@gosirat.com" className="bg-[#0D6332] text-white font-semibold py-4 px-10 rounded-xl hover:bg-[#0a4f27] transition-all text-lg shadow-lg no-underline inline-block mt-4">
                            📩 info@gosirat.com
                        </a>
                        <p className="m-0 text-sm text-gray-400 mt-2">
                            Our team will connect your request with the appropriate spokesperson or department.
                        </p>
                    </div>
                </div>

            </section>

            <AppDownload />
        </div>
    );
};

export default PressPage;
