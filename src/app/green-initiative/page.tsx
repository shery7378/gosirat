"use client";

import Link from 'next/link';

export default function EnvironmentPage() {
    return (
        <div className="w-full bg-[#f8fbf8] text-[#0c140f] font-inherit overflow-x-hidden">
            {/* ============ SECTION 1: HERO ============ */}
            <section className="relative flex items-center justify-center text-center overflow-hidden min-h-[720px] h-screen">
                <div className="absolute inset-0">
                    <img
                        src="/images/gosirat-green-school-transportation.webp"
                        alt="GoSirat eco-friendly school transportation creating a greener future with sustainable journeys"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,38,28,0.72)] via-[rgba(9,38,28,0.55)] to-[rgba(8,32,24,0.86)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,76,58,0.5)] to-[rgba(29,111,224,0.28)]"></div>
                </div>

                <div className="relative z-10 max-w-[820px] px-6 text-white flex flex-col items-center">
                    <span className="flex items-center gap-2 text-[#8CE0B4] font-semibold text-[12.5px] uppercase tracking-[.14em] before:content-[''] before:w-4 before:h-0.5 before:bg-[#8CE0B4] before:rounded-[2px] justify-center" data-aos="fade-in">
                        GoSirat Green Initiative
                    </span>
                    <h1 className="font-[Inter] font-semibold text-[64px] leading-[100%] tracking-[0px] text-center text-[#0c140f] mt-[22px]" data-aos="fade-up" data-aos-delay="100">
                        Moving Every Child Toward a Cleaner Tomorrow
                    </h1>
                    <p className="text-[18px] text-[rgba(255,255,255,0.86)] max-w-[600px] mt-[22px] mx-auto leading-[1.7]" data-aos="fade-up" data-aos-delay="200">
                        We provide simple and eco-friendly school transportation to make your daily pick and drop easier. By choosing us, you help reduce traffic and create a cleaner, healthier future for our kids.
                    </p>
                    <div className="flex gap-4 justify-center mt-10 flex-wrap" data-aos="fade-up" data-aos-delay="300">
                        <a href="#cta" className="inline-flex items-center justify-center gap-2.5 font-semibold text-[16.5px] px-10 py-[19px] rounded-full bg-[#176938] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(31,164,99,0.6)] shadow-[0_10px_24px_-8px_rgba(31,164,99,0.55)]">
                            Explore the Green Initiative
                        </a>
                        <a href="#why" className="inline-flex items-center justify-center gap-2.5 font-semibold text-[16.5px] px-10 py-[19px] rounded-full bg-[rgba(255,255,255,0.12)] text-white border-[1.5px] border-[rgba(255,255,255,0.35)] backdrop-blur-[6px] transition-all hover:bg-[rgba(255,255,255,0.2)]">
                            See How It Works
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-[34px] left-1/2 -translate-x-1/2 z-10 text-[rgba(255,255,255,0.75)] flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[.14em] animate-bounce">
                    <span>Scroll</span>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none"><path d="M7 1v15M1 10l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            </section>

            {/* ============ SECTION 2: WHY IT MATTERS ============ */}
            <section className="bg-[#f8fbf8] py-[120px] max-lg:py-[80px]" id="why">
                <div className="w-full mx-auto px-8 max-lg:px-6">
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[72px] max-lg:gap-[48px] items-center">
                        <div data-aos="fade-up">
                            <span className="flex items-center gap-2 text-[#176938] font-semibold text-[12.5px] uppercase tracking-[.14em] before:content-[''] before:w-4 before:h-0.5 before:bg-[#176938] before:rounded-[2px]">
                                Why It Matters
                            </span>
                            <h2 className="mt-4 text-[clamp(30px,3.6vw,42px)] text-[#0c140f] leading-[1.1] tracking-[-0.02em] font-bold">
                                Why Green Transportation Matters
                            </h2>
                            <p className="mt-[18px] text-[17px] text-[#57605b] leading-[1.75]">
                                GoSirat makes your daily pick and drop simple and stress-free. By replacing thousands of individual car trips with our efficient school transportation network, we reduce traffic and pollution—giving families back their time and building a cleaner future for our kids.
                            </p>

                            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
                                <div className="flex flex-col gap-3.5 p-5 rounded-[14px] border border-[rgba(23,105,56,0.15)] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] shrink-0">
                                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 4 7 4 12c0 5 3.5 9 8 9s8-4 8-9c0-2-1-4-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M12 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                                    </div>
                                    <h4 className="text-[15px] text-[#0c140f] font-semibold leading-[1.1]">Reduced Emissions</h4>
                                    <p className="text-[13.5px] text-[#57605b] leading-[1.55]">Fewer vehicles on the road means measurably cleaner air around every school.</p>
                                </div>
                                <div className="flex flex-col gap-3.5 p-5 rounded-[14px] border border-[rgba(23,105,56,0.15)] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] shrink-0">
                                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.8" /><circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.8" /><path d="M8 18h8M6 15.6V8a2 2 0 0 1 2-2h5l4 4v5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                                    </div>
                                    <h4 className="text-[15px] text-[#0c140f] font-semibold leading-[1.1]">Less Congestion</h4>
                                    <p className="text-[13.5px] text-[#57605b] leading-[1.55]">Shared routes stop the heavy traffic jams at school gates and on neighborhood streets, making drop-off times faster and safer for everyone.</p>
                                </div>
                                <div className="flex flex-col gap-3.5 p-5 rounded-[14px] border border-[rgba(23,105,56,0.15)] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] shrink-0">
                                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <h4 className="text-[15px] text-[#0c140f] font-semibold leading-[1.1]">Safer Commutes</h4>
                                    <p className="text-[13.5px] text-[#57605b] leading-[1.55]">Trained drivers and monitored vehicles keep every ride secure and tracked.</p>
                                </div>
                                <div className="flex flex-col gap-3.5 p-5 rounded-[14px] border border-[rgba(23,105,56,0.15)] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] shrink-0">
                                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7.5v5l3.2 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <h4 className="text-[15px] text-[#0c140f] font-semibold leading-[1.1]">Smarter Routing</h4>
                                    <p className="text-[13.5px] text-[#57605b] leading-[1.55]">Our smart planning cuts out wasted time and extra miles from every trip, making each journey as efficient as possible.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full max-w-[500px] xl:max-w-[600px] ml-auto max-lg:mx-auto rounded-[28px] overflow-hidden shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] aspect-[4/5] max-lg:aspect-[16/10] max-lg:order-first" data-aos="fade-up" data-aos-delay="200">
                            <img
                                src="/images/gosirat-green-transportation-reduces-traffic.webp"
                                alt="GoSirat shared school transportation reducing traffic congestion and carbon emissions"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,61,46,0)_40%] to-[rgba(9,30,22,0.82)_100%]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 3: DRIVING POSITIVE ENVIRONMENTAL IMPACT ============ */}
            <section className="bg-white py-[120px] max-lg:py-[80px]" id="impact">
                <div className="max-w-[1240px] mx-auto px-8 max-lg:px-6">
                    <div className="max-w-[640px] mx-auto text-center mb-14" data-aos="fade-up">
                        <span className="flex items-center justify-center gap-2 text-[#176938] font-semibold text-[12.5px] uppercase tracking-[.14em] before:content-[''] before:w-4 before:h-0.5 before:bg-[#176938] before:rounded-[2px]">
                            Our Approach
                        </span>
                        <h2 className="mt-4 text-[clamp(30px,3.6vw,42px)] text-[#0c140f] leading-[1.1] tracking-[-0.02em] font-bold">
                            Driving Positive Environmental Impact
                        </h2>
                        <p className="mt-4 text-[17px] text-[#57605b] leading-[1.7]">
                            Four core principles guide every route, vehicle, and decision at GoSirat, ensuring our service is always reliable, efficient, and focused on your family&apos;s needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
                        <div className="bg-white rounded-[20px] p-9 shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] border border-transparent transition-all hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(14,27,22,0.05),_0_24px_48px_-16px_rgba(14,27,22,0.18)]" data-aos="fade-up">
                            <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mb-5.5">
                                <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 4 7 4 12c0 5 3.5 9 8 9s8-4 8-9c0-2-1-4-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M12 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <h3 className="text-[19.5px] text-[#0c140f] font-bold leading-[1.1] mb-2.5">Lower Carbon Emissions</h3>
                            <p className="text-[14.5px] text-[#57605b] leading-[1.7]">Our smart routes and shared trips use less fuel and lower carbon emissions on every school run, mile after mile.</p>
                        </div>
                        <div className="bg-white rounded-[20px] p-9 shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] border border-transparent transition-all hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(14,27,22,0.05),_0_24px_48px_-16px_rgba(14,27,22,0.18)]" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mb-5.5">
                                <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none"><path d="M4 14l1.5-5A2 2 0 0 1 7.4 7.5h9.2A2 2 0 0 1 18.5 9L20 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><rect x="3" y="14" width="18" height="4.5" rx="1.6" stroke="currentColor" strokeWidth="1.8" /><circle cx="7.5" cy="18.7" r="1.4" stroke="currentColor" strokeWidth="1.8" /><circle cx="16.5" cy="18.7" r="1.4" stroke="currentColor" strokeWidth="1.8" /></svg>
                            </div>
                            <h3 className="text-[19.5px] text-[#0c140f] font-bold leading-[1.1] mb-2.5">Fuel-Efficient Fleet</h3>
                            <p className="text-[14.5px] text-[#57605b] leading-[1.7]">Modern, well-maintained vehicles are engineered for lower consumption and cleaner combustion across every neighborhood route.</p>
                        </div>
                        <div className="bg-white rounded-[20px] p-9 shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] border border-transparent transition-all hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(14,27,22,0.05),_0_24px_48px_-16px_rgba(14,27,22,0.18)]" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mb-5.5">
                                <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" /><circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" /><path d="M6 8.2V13a3 3 0 0 0 3 3h6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M14 13.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <h3 className="text-[19.5px] text-[#0c140f] font-bold leading-[1.1] mb-2.5">Smart Route Optimization</h3>
                            <p className="text-[14.5px] text-[#57605b] leading-[1.7]">Our smart system constantly updates routes to cut out extra miles and wasted time, making every trip as fast and efficient as possible.</p>
                        </div>
                        <div className="bg-white rounded-[20px] p-9 shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] border border-transparent transition-all hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(14,27,22,0.05),_0_24px_48px_-16px_rgba(14,27,22,0.18)]" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mb-5.5">
                                <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.8" /><circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 19c.7-3 2.4-4.6 4.5-4.6s3.8 1.6 4.5 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M13.8 14.6c1.9.2 3.3 1.8 3.9 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <h3 className="text-[19.5px] text-[#0c140f] font-bold leading-[1.1] mb-2.5">Community-Wide Reduction</h3>
                            <p className="text-[14.5px] text-[#57605b] leading-[1.7]">Shared rides remove thousands of individual car trips from local roads and school gates every single week.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 4: COMMITMENT ============ */}
            <section className="bg-[#0c140f] text-white py-[120px] max-lg:py-[80px]" id="commitment">
                <div className="max-w-[1240px] mx-auto px-8 max-lg:px-6">
                    <div className="max-w-[640px] mx-auto text-center mb-14" data-aos="fade-up">
                        <span className="flex items-center justify-center gap-2 text-[#8CE0B4] font-semibold text-[12.5px] uppercase tracking-[.14em] before:content-[''] before:w-4 before:h-0.5 before:bg-[#8CE0B4] before:rounded-[2px]">
                            Our Promise
                        </span>
                        <h2 className="mt-4 text-[clamp(30px,3.6vw,42px)] text-white leading-[1.1] tracking-[-0.02em] font-bold">
                            Our Commitment to a Sustainable Future
                        </h2>
                        <p className="mt-4 text-[17px] text-[rgba(255,255,255,0.72)] leading-[1.7]">
                            Six standing commitments that shape how GoSirat operates today, and how it grows tomorrow.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
                        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-[30px_28px] flex gap-[18px] transition-all hover:bg-[rgba(255,255,255,0.09)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.25)]" data-aos="fade-up">
                            <div className="bg-[rgba(31,164,99,0.22)] text-[#8CE0B4] w-[46px] h-[46px] rounded-xl shrink-0 flex items-center justify-center">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 4 7 4 12c0 5 3.5 9 8 9s8-4 8-9c0-2-1-4-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M12 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <div>
                                <h4 className="text-white text-[16px] mb-2 font-bold leading-[1.1]">Carbon-Conscious Fleet Expansion</h4>
                                <p className="text-[13.5px] text-[rgba(255,255,255,0.65)] leading-[1.6]">Every new vehicle we add must meet high standards for fuel efficiency and low emissions.</p>
                            </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-[30px_28px] flex gap-[18px] transition-all hover:bg-[rgba(255,255,255,0.09)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.25)]" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-[rgba(31,164,99,0.22)] text-[#8CE0B4] w-[46px] h-[46px] rounded-xl shrink-0 flex items-center justify-center">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                            </div>
                            <div>
                                <h4 className="text-white text-[16px] mb-2 font-bold leading-[1.1]">Renewable Energy Partnerships</h4>
                                <p className="text-[13.5px] text-[rgba(255,255,255,0.65)] leading-[1.6]">Working with clean-energy providers to power depots and charging infrastructure.</p>
                            </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-[30px_28px] flex gap-[18px] transition-all hover:bg-[rgba(255,255,255,0.09)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.25)]" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-[rgba(31,164,99,0.22)] text-[#8CE0B4] w-[46px] h-[46px] rounded-xl shrink-0 flex items-center justify-center">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><path d="M4 7l1-3h14l1 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 7l1 12.2A2 2 0 0 0 8 21h8a2 2 0 0 0 2-1.8L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 11v6M14.5 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <div>
                                <h4 className="text-white text-[16px] mb-2 font-bold leading-[1.1]">Zero-Waste Operations Goal</h4>
                                <p className="text-[13.5px] text-[rgba(255,255,255,0.65)] leading-[1.6]">Reducing operational waste across depots, maintenance, and back-office logistics.</p>
                            </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-[30px_28px] flex gap-[18px] transition-all hover:bg-[rgba(255,255,255,0.09)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.25)]" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-[rgba(31,164,99,0.22)] text-[#8CE0B4] w-[46px] h-[46px] rounded-xl shrink-0 flex items-center justify-center">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.8" /><circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 19c.7-3 2.4-4.6 4.5-4.6s3.8 1.6 4.5 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M13.8 14.6c1.9.2 3.3 1.8 3.9 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <div>
                                <h4 className="text-white text-[16px] mb-2 font-bold leading-[1.1]">Local Green Job Creation</h4>
                                <p className="text-[13.5px] text-[rgba(255,255,255,0.65)] leading-[1.6]">Building driver and technician roles within the communities GoSirat serves.</p>
                            </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-[30px_28px] flex gap-[18px] transition-all hover:bg-[rgba(255,255,255,0.09)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.25)]" data-aos="fade-up" data-aos-delay="400">
                            <div className="bg-[rgba(31,164,99,0.22)] text-[#8CE0B4] w-[46px] h-[46px] rounded-xl shrink-0 flex items-center justify-center">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <div>
                                <h4 className="text-white text-[16px] mb-2 font-bold leading-[1.1]">Community Environmental Education</h4>
                                <p className="text-[13.5px] text-[rgba(255,255,255,0.65)] leading-[1.6]">Classroom programs that teach students the value of shared, sustainable travel.</p>
                            </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-[30px_28px] flex gap-[18px] transition-all hover:bg-[rgba(255,255,255,0.09)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.25)]" data-aos="fade-up" data-aos-delay="500">
                            <div className="bg-[rgba(31,164,99,0.22)] text-[#8CE0B4] w-[46px] h-[46px] rounded-xl shrink-0 flex items-center justify-center">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><path d="M4 19V9l6-4 6 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 19v-6h4v6M14 9h5v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                            </div>
                            <div>
                                <h4 className="text-white text-[16px] mb-2 font-bold leading-[1.1]">Transparent Sustainability Reporting</h4>
                                <p className="text-[13.5px] text-[rgba(255,255,255,0.65)] leading-[1.6]">Publishing clear, verifiable progress against every environmental commitment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 5: STATISTICS ============ */}
            <section className="bg-[#f8fbf8] py-[120px] max-lg:py-[80px]" id="stats">
                <div className="max-w-[1240px] mx-auto px-8 max-lg:px-6">
                    <div className="max-w-[640px] mx-auto text-center mb-14" data-aos="fade-up">
                        <span className="flex items-center justify-center gap-2 text-[#176938] font-semibold text-[12.5px] uppercase tracking-[.14em] before:content-[''] before:w-4 before:h-0.5 before:bg-[#176938] before:rounded-[2px]">
                            By the Numbers
                        </span>
                        <h2 className="mt-4 text-[clamp(30px,3.6vw,42px)] text-[#0c140f] leading-[1.1] tracking-[-0.02em] font-bold">
                            Environmental Impact Statistics
                        </h2>
                        <p className="mt-4 text-[17px] text-[#57605b] leading-[1.7]">
                            A snapshot of the measurable difference shared, green transportation is already making.
                        </p>
                    </div>

                    <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 gap-[18px]">
                        <div className="bg-white border border-[rgba(23,105,56,0.15)] rounded-[20px] p-[32px_22px] text-center transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent relative" data-aos="fade-up">
                            <div className="w-[44px] h-[44px] rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mx-auto mb-[18px]">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 4 7 4 12c0 5 3.5 9 8 9s8-4 8-9c0-2-1-4-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M12 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <div className="font-inherit font-extrabold text-[clamp(26px,2.4vw,32px)] text-[#0c140f] leading-[1]">
                                12,400<span className="text-[0.55em] text-[#176938] font-bold">+</span>
                            </div>
                            <div className="mt-2.5 text-[13px] text-[#57605b] font-mono tracking-[0.02em]">Tons CO2 Avoided</div>
                        </div>
                        <div className="bg-white border border-[rgba(23,105,56,0.15)] rounded-[20px] p-[32px_22px] text-center transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent relative" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-[44px] h-[44px] rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mx-auto mb-[18px]">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" /><circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" /><path d="M6 8.2V13a3 3 0 0 0 3 3h6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <div className="font-inherit font-extrabold text-[clamp(26px,2.4vw,32px)] text-[#0c140f] leading-[1]">
                                3.1<span className="text-[0.55em] text-[#176938] font-bold">M km</span>
                            </div>
                            <div className="mt-2.5 text-[13px] text-[#57605b] font-mono tracking-[0.02em]">Optimized Route Distance</div>
                        </div>
                        <div className="bg-white border border-[rgba(23,105,56,0.15)] rounded-[20px] p-[32px_22px] text-center transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent relative" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-[44px] h-[44px] rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mx-auto mb-[18px]">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><path d="M4 14l1.5-5A2 2 0 0 1 7.4 7.5h9.2A2 2 0 0 1 18.5 9L20 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><rect x="3" y="14" width="18" height="4.5" rx="1.6" stroke="currentColor" strokeWidth="1.8" /><circle cx="7.5" cy="18.7" r="1.4" stroke="currentColor" strokeWidth="1.8" /><circle cx="16.5" cy="18.7" r="1.4" stroke="currentColor" strokeWidth="1.8" /></svg>
                            </div>
                            <div className="font-inherit font-extrabold text-[clamp(26px,2.4vw,32px)] text-[#0c140f] leading-[1]">
                                48,000<span className="text-[0.55em] text-[#176938] font-bold">+</span>
                            </div>
                            <div className="mt-2.5 text-[13px] text-[#57605b] font-mono tracking-[0.02em]">Car Trips Removed</div>
                        </div>
                        <div className="bg-white border border-[rgba(23,105,56,0.15)] rounded-[20px] p-[32px_22px] text-center transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent relative" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-[44px] h-[44px] rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mx-auto mb-[18px]">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.8" /><circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 19c.7-3 2.4-4.6 4.5-4.6s3.8 1.6 4.5 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M13.8 14.6c1.9.2 3.3 1.8 3.9 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                            </div>
                            <div className="font-inherit font-extrabold text-[clamp(26px,2.4vw,32px)] text-[#0c140f] leading-[1]">
                                26,500<span className="text-[0.55em] text-[#176938] font-bold">+</span>
                            </div>
                            <div className="mt-2.5 text-[13px] text-[#57605b] font-mono tracking-[0.02em]">Students Served Daily</div>
                        </div>
                        <div className="bg-white border border-[rgba(23,105,56,0.15)] rounded-[20px] p-[32px_22px] text-center transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] hover:border-transparent relative" data-aos="fade-up" data-aos-delay="400">
                            <div className="w-[44px] h-[44px] rounded-xl flex items-center justify-center bg-[rgba(213,240,219,0.4)] text-[#176938] mx-auto mb-[18px]">
                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.3-3.6-8.5S9.6 5.8 12 3.5z" stroke="currentColor" strokeWidth="1.8" /></svg>
                            </div>
                            <div className="font-inherit font-extrabold text-[clamp(26px,2.4vw,32px)] text-[#0c140f] leading-[1]">
                                94<span className="text-[0.55em] text-[#176938] font-bold">%</span>
                            </div>
                            <div className="mt-2.5 text-[13px] text-[#57605b] font-mono tracking-[0.02em]">Fleet Efficiency Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 6: GLOBAL VISION ============ */}
            <section className="bg-white py-[120px] max-lg:py-[80px]" id="global">
                <div className="w-full mx-auto px-8 max-lg:px-6">
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[72px] max-lg:gap-[48px] items-center">
                        <div data-aos="fade-up">
                            <div className="mb-[28px] max-w-[640px] xl:max-w-[720px]">
                                <span className="flex items-center gap-2 text-[#176938] font-semibold text-[12.5px] xl:text-[14px] uppercase tracking-[.14em] before:content-[''] before:w-4 before:h-0.5 before:bg-[#176938] before:rounded-[2px]">
                                    Looking Ahead
                                </span>
                                <h2 className="mt-4 text-[clamp(30px,4vw,56px)] text-[#0c140f] leading-[1.1] tracking-[-0.02em] font-bold">
                                    A Green Standard, Built for the World
                                </h2>
                                <p className="mt-5 text-[17px] md:text-[19px] xl:text-[21px] text-[#57605b] leading-[1.75]">
                                    What starts as smarter school routes in one city becomes a blueprint for sustainable transportation everywhere GoSirat operates.
                                </p>
                            </div>
                            <ul className="flex flex-col gap-5 xl:gap-6 mt-4">
                                <li className="flex items-start gap-4 text-[15px] md:text-[17px] xl:text-[19px] text-[#57605b]">
                                    <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-[#176938] mt-[7px] xl:mt-[9px] shrink-0"></span>
                                    Expanding shared green fleets to new cities and regions.
                                </li>
                                <li className="flex items-start gap-4 text-[15px] md:text-[17px] xl:text-[19px] text-[#57605b]">
                                    <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-[#176938] mt-[7px] xl:mt-[9px] shrink-0"></span>
                                    Standardizing emissions reporting across every market.
                                </li>
                                <li className="flex items-start gap-4 text-[15px] md:text-[17px] xl:text-[19px] text-[#57605b]">
                                    <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-[#176938] mt-[7px] xl:mt-[9px] shrink-0"></span>
                                    Partnering with local governments on clean-mobility policy.
                                </li>
                                <li className="flex items-start gap-4 text-[15px] md:text-[17px] xl:text-[19px] text-[#57605b]">
                                    <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-[#176938] mt-[7px] xl:mt-[9px] shrink-0"></span>
                                    Connecting every route into one global sustainability network.
                                </li>
                            </ul>
                        </div>

                        <div className="relative w-full max-w-[600px] xl:max-w-[700px] ml-auto max-lg:mx-auto rounded-[28px] aspect-[4/3] max-lg:aspect-[16/10] overflow-hidden shadow-[0_1px_2px_rgba(14,27,22,0.04),_0_12px_32px_-12px_rgba(14,27,22,0.12)] bg-gradient-to-br from-[#0c140f] to-[#0A2F24]" data-aos="fade-up" data-aos-delay="200">
                            <img
                                src="/images/sustainable-school-transport-vehicle.webp"
                                alt="GoSirat green electric school transport bus on a city route."
                                loading="lazy"
                                className="w-full h-full object-cover scale-[1.1]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 7: CTA ============ */}
            <section className="relative min-h-[560px] flex items-center justify-center text-center overflow-hidden" id="cta">
                <div className="absolute inset-0">
                    <img
                        src="/images/gosirat-greener-school-future.webp"
                        alt="Students enjoying a greener and sustainable school transportation journey with GoSirat"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,38,28,0.82)] via-[rgba(9,38,28,0.7)] to-[rgba(8,32,24,0.88)]"></div>
                </div>
                <div className="relative z-10 max-w-[640px] px-6 text-white" data-aos="fade-up">
                    <span className="flex items-center justify-center gap-2 text-[#8CE0B4] font-semibold text-[12.5px] uppercase tracking-[.14em] before:content-[''] before:w-4 before:h-0.5 before:bg-[#8CE0B4] before:rounded-[2px]">
                        Get Involved
                    </span>
                    <h2 className="mt-[18px] text-[clamp(30px,4.4vw,46px)] text-white leading-[1.1] tracking-[-0.02em] font-bold">
                        Join the Movement Toward Greener School Journeys
                    </h2>
                    <p className="mt-[18px] max-w-[500px] mx-auto text-[16.5px] text-[rgba(255,255,255,0.82)] leading-[1.7]">
                        Register your school or family today and be part of a cleaner, safer commute for the next generation.
                    </p>
                    <Link href="/register" className="inline-flex items-center justify-center gap-2.5 font-semibold text-[16.5px] px-10 py-[19px] mt-[34px] rounded-full bg-[#176938] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(31,164,99,0.6)] shadow-[0_10px_24px_-8px_rgba(31,164,99,0.55)]">
                        Register Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
