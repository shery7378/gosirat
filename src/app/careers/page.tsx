import type { NextPage, Metadata } from "next";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";
import AppDownload from "@/components/AppDownload";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Careers at GoSirat | Join Our School Transportation Team",
    description: "Explore careers at GoSirat and help build safer school transportation. Join our team in product design, engineering, operations, partnerships, or customer support.",
    alternates: {
        canonical: "https://gosirat.com/careers",
    },
};

const CareersPage: NextPage = () => {
    return (
        <div className="w-full relative bg-[#f4f7f4] flex flex-col items-center pt-6 px-0 pb-0 box-border leading-[normal] tracking-[normal]">
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
            <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
                <div className="rounded-[20px] bg-[#89b99a] flex items-center py-1.5 px-3.5 gap-2 mb-8" data-aos="fade-in">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#124225]" />
                    <div className="tracking-[1.68px] leading-4 uppercase font-bold text-[#124225] text-xs">
                        Careers at GoSirat
                    </div>
                </div>

                <h1 className="m-0 text-[38px] md:text-[54px] tracking-[-1.61px] leading-[1.1] capitalize font-semibold text-[#09131a] mb-8" data-aos="fade-up">
                    Build the Future of School Transportation
                </h1>

                <p className="m-0 text-lg md:text-xl text-[#202A32] leading-[1.6] max-w-3xl mb-12" data-aos="fade-up" data-aos-delay="100">
                    Join GoSirat and help transform school transportation through innovation, safety, and technology. We're building a platform that connects parents, schools, and drivers with live GPS tracking, verified drivers, secure QR verification, and smarter transportation management. If you're passionate about creating meaningful impact, we'd love to hear from you.
                </p>

                <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-lg mb-16 relative h-[400px] md:h-[500px]" data-aos="zoom-in" data-aos-delay="200">
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
            <section className="w-full max-w-[1400px] mx-auto px-4 py-12 flex flex-col gap-16 md:gap-24">

                {/* Open Positions */}
                <div className="flex flex-col w-full" data-aos="fade-up">
                    <h2 className="m-0 text-3xl md:text-4xl font-semibold text-[#09131a] mb-10 text-center">Open Positions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Product & Design</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Design intuitive experiences that help parents, schools, and drivers enjoy safer and smarter school transportation.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Operations & Partnerships</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Build relationships with schools, transportation providers, and strategic partners to expand GoSirat's impact.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Community & Customer Support</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Deliver outstanding support, strengthen customer relationships, and help families and schools get the most from GoSirat.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                            <h3 className="m-0 text-xl font-semibold text-[#0D6332] mb-4">Engineering</h3>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Develop secure, reliable, and scalable technology that powers safe school transportation and real-time communication.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Join GoSirat */}
                <div className="flex flex-col w-full" data-aos="fade-up">
                    <h2 className="m-0 text-3xl md:text-4xl font-semibold text-[#09131a] mb-10 text-center">Why Join GoSirat?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🛡️</span>
                                <h3 className="m-0 text-xl font-semibold text-[#09131a]">Make a Real Impact</h3>
                            </div>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Help create safer school transportation for children, families, schools, and communities.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🚀</span>
                                <h3 className="m-0 text-xl font-semibold text-[#09131a]">Grow With Innovation</h3>
                            </div>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Work on modern technologies that improve transportation management, live tracking, and student safety.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🤝</span>
                                <h3 className="m-0 text-xl font-semibold text-[#09131a]">Mission-Driven Team</h3>
                            </div>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Join a collaborative team focused on trust, transparency, and continuous improvement.
                            </p>
                        </div>
                        <div className="bg-white rounded-[22px] p-8 border border-[rgba(0,0,0,0.1)] shadow-sm flex flex-col gap-4 h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🌍</span>
                                <h3 className="m-0 text-xl font-semibold text-[#09131a]">Flexible Work Culture</h3>
                            </div>
                            <p className="m-0 text-[#202A32] leading-relaxed flex-1">
                                Enjoy a supportive, flexible, and growth-oriented environment where your ideas matter.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA Section */}
            <section className="w-full max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center">
                <h2 className="m-0 text-3xl md:text-4xl font-semibold text-[#09131a] mb-6" data-aos="fade-up">Ready to Make a Difference?</h2>
                <p className="m-0 text-lg text-[#202A32] mb-10 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                    Join us in building the future of safe school transportation. We'd love to hear your story.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full" data-aos="fade-up" data-aos-delay="200">
                    <a href="mailto:info@gosirat.com" className="bg-[#0D6332] text-white font-semibold py-4 px-10 rounded-xl hover:bg-[#0a4f27] transition-colors text-lg inline-block w-full sm:w-auto no-underline">
                        Apply Now
                    </a>
                </div>
            </section>

            <AppDownload />
        </div>
    );
};

export default CareersPage;
