import type { NextPage, Metadata } from "next";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";
import AppDownload from "@/components/AppDownload";
import Image from "@/components/CustomImage";

export const metadata: Metadata = {
    title: "Careers at GoSirat | Join Our School Transportation Team",
    description: "Explore careers at GoSirat and help build safer school transportation. Join our team in product design, engineering, operations, partnerships, or customer support.",
    alternates: {
        canonical: "https://gosirat.com/careers",
    },
};

const CareersPage: NextPage = () => {
    return (
        <div className="w-full relative bg-gosirat-light flex flex-col items-center pt-6 px-0 pb-0 box-border leading-normal tracking-normal overflow-x-hidden">
            <WebPageSchema
                title="Careers at GoSirat | Join Our School Transportation Team"
                description="Explore careers at GoSirat and help build safer school transportation. Join our team in product design, engineering, operations, partnerships, or customer support."
                url="https://gosirat.com/careers"
            />
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://gosirat.com/" },
                { name: "Careers", url: "https://gosirat.com/careers" }
            ]} />

            {/* Hero Section */}
            <section className="self-stretch flex flex-col items-center text-center pt-10 px-[60px] pb-[60px] box-border max-w-full mq825:px-[30px] mq450:px-4 mq450:pt-5 mq450:pb-10">
                <div className="rounded-[20px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px] mb-8" data-aos="zoom-in">
                    <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                    <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                        Careers at GoSirat
                    </div>
                </div>

                <h1 className="m-0 font-sans font-semibold text-[64px] leading-[100%] tracking-normal text-center text-gosirat-black mb-8 mq825:text-[51px] mq450:text-[38px] max-w-[900px]" data-aos="fade-up">
                    Build the Future of School Transportation
                </h1>

                <p className="m-0 font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-center text-gosirat-gray mb-12 max-w-[800px] mq450:text-base mq450:leading-[26px]" data-aos="fade-up" data-aos-delay="100">
                    Join GoSirat and help transform school transportation through innovation, safety, and technology. We're building a platform that connects parents, schools, and drivers with live GPS tracking, verified drivers, secure QR verification, and smarter transportation management. If you're passionate about creating meaningful impact, we'd love to hear from you.
                </p>

                <div className="w-full max-w-[1200px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(23,105,56,0.15)] mb-4 relative h-[400px] mq825:h-[300px] mq450:h-[250px]" data-aos="zoom-in" data-aos-delay="200">
                    <Image
                        src="/images/gosirat-careers-team.webp"
                        alt="GoSirat team collaborating to build safer school transportation technology for parents, schools, and drivers."
                        title="Careers at GoSirat School Transportation Platform"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Main Content Areas */}
            <section className="self-stretch px-[60px] py-12 flex flex-col gap-16 box-border max-w-full mq825:px-[30px] mq450:px-4 mq450:gap-10">

                {/* Open Positions */}
                <div className="flex flex-col w-full" data-aos="fade-up">
                    <h2 className="m-0 text-[48px] font-sans font-semibold tracking-[-1.5px] text-gosirat-black mb-10 text-center mq825:text-[38px] mq450:text-[24px]">Open Positions</h2>
                    <div className="grid grid-cols-4 gap-6 mq1050:grid-cols-2 mq825:grid-cols-1">
                        <div className="bg-white rounded-[28px] p-8 border border-[rgba(23,105,56,0.15)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col h-full hover:shadow-md transition-shadow">
                            <h3 className="m-0 text-xl font-semibold text-gosirat-green-alt mb-4">📢 Marketing Team</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed flex-1">
                                Help more parents and schools discover GoSirat. Promote our safe school transportation services through digital marketing, social media, and community campaigns.
                            </p>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 border border-[rgba(23,105,56,0.15)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col h-full hover:shadow-md transition-shadow">
                            <h3 className="m-0 text-xl font-semibold text-gosirat-green-alt mb-4">🤝 Operations & Partnerships</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed flex-1">
                                Work with schools and transportation partners to keep school transportation running smoothly, safely, and on time every day.
                            </p>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 border border-[rgba(23,105,56,0.15)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col h-full hover:shadow-md transition-shadow">
                            <h3 className="m-0 text-xl font-semibold text-gosirat-green-alt mb-4">💬 Community & Customer Support</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed flex-1">
                                Support parents, schools, and drivers by answering questions, solving problems, and providing the best GoSirat experience.
                            </p>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 border border-[rgba(23,105,56,0.15)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col h-full hover:shadow-md transition-shadow">
                            <h3 className="m-0 text-xl font-semibold text-gosirat-green-alt mb-4">🚌 Transport Managers</h3>
                            <p className="m-0 text-gosirat-text leading-relaxed flex-1">
                                Manage drivers, plan school routes, monitor daily trips, and make sure every school transportation journey is safe, reliable, and on time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Join GoSirat */}
                <div className="flex flex-col w-full" data-aos="fade-up">
                    <h2 className="m-0 text-[48px] font-sans font-semibold tracking-[-1.5px] text-gosirat-black mb-10 text-center mq825:text-[38px] mq450:text-[24px]">Why Join GoSirat?</h2>
                    <div className="grid grid-cols-4 gap-6 mq1050:grid-cols-2 mq825:grid-cols-1">
                        <div className="bg-white rounded-[28px] p-8 border border-[rgba(23,105,56,0.15)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🛡️</span>
                                <h3 className="m-0 text-xl font-semibold text-gosirat-darker">Make a Real Impact</h3>
                            </div>
                            <p className="m-0 text-gosirat-text leading-relaxed flex-1">
                                Help create safer school transportation for children, families, schools, and communities.
                            </p>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 border border-[rgba(23,105,56,0.15)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🚀</span>
                                <h3 className="m-0 text-xl font-semibold text-gosirat-darker">Grow With Innovation</h3>
                            </div>
                            <p className="m-0 text-gosirat-text leading-relaxed flex-1">
                                Work on modern technologies that improve transportation management, live tracking, and student safety.
                            </p>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 border border-[rgba(23,105,56,0.15)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🤝</span>
                                <h3 className="m-0 text-xl font-semibold text-gosirat-darker">Mission-Driven Team</h3>
                            </div>
                            <p className="m-0 text-gosirat-text leading-relaxed flex-1">
                                Join a collaborative team focused on trust, transparency, and continuous improvement.
                            </p>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 border border-[rgba(23,105,56,0.15)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🌍</span>
                                <h3 className="m-0 text-xl font-semibold text-gosirat-darker">Flexible Work Culture</h3>
                            </div>
                            <p className="m-0 text-gosirat-text leading-relaxed flex-1">
                                Enjoy a supportive, flexible, and growth-oriented environment where your ideas matter.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA Section */}
            <section className="self-stretch bg-white px-[60px] py-[100px] text-center flex flex-col items-center box-border max-w-full mq825:px-[30px] mq450:py-[65px] mq450:px-4">
                <h2 className="m-0 text-[48px] font-sans font-semibold tracking-[-1.5px] text-gosirat-black mb-6 mq825:text-[38px] mq450:text-[24px]" data-aos="fade-up">Ready to Make a Difference?</h2>
                <p className="m-0 font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-gosirat-gray mb-10 max-w-[800px] mq450:text-base mq450:leading-[26px]" data-aos="fade-up" data-aos-delay="100">
                    Join us in building the future of safe school transportation. We'd love to hear your story.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-[400px]" data-aos="fade-up" data-aos-delay="200">
                    <a href="mailto:info@gosirat.com" className="cursor-pointer border-none py-4 px-6 bg-gradient-to-r from-gosirat-green to-[#2ecc71] rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 no-underline w-full">
                        <div className="relative text-xl leading-5 font-medium font-sans text-gosirat-bg-light text-center">
                            Apply Now
                        </div>
                        <svg className="h-4 w-4 relative text-gosirat-bg-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                        </svg>
                    </a>
                </div>
            </section>

            <AppDownload />
        </div>
    );
};

export default CareersPage;
