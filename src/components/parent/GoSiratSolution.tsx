import Image from "next/image";

export const GoSiratSolution = () => {
    return (
        <section className="self-stretch flex flex-col items-start py-[100px] px-[60px] box-border max-w-full mq450:py-[65px] mq450:px-4 mq450:box-border" data-aos="fade-in">
            <div className="w-full h-auto flex items-end justify-between py-0 px-0 box-border gap-[135.7px] flex-wrap xl:gap-10 lg:gap-10 mq1125:gap-10 mq1125:flex-col mq1125:items-center mq450:gap-[34px] mq450:px-0 mq450:box-border">
                <section className="h-auto w-full max-w-[580.3px] flex flex-col items-start text-left text-xs text-gosirat-green-alt font-sans flex-1 min-w-[300px]">
                    <div className="w-full h-auto flex flex-col items-start max-w-[768px] mq450:max-w-full">
                        <div className="self-stretch flex flex-col items-start shrink-0">
                            <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="zoom-in" data-aos-delay="100">
                                <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                                <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                                    THE GOSIRAT SOLUTION
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pt-6 px-0 pb-0 box-border shrink-0">
                            <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
                                One App. Every Answer. Every Morning.
                            </h2>
                        </div>
                        <div className="w-full flex flex-col items-start pt-5 px-0 pb-0 box-border shrink-0">
                            <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray">
                                Track your child's school transportation in real time, receive instant notifications, verify every pick-up and drop-off through QR verification, and manage payments with complete transparency.
                            </p>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0 shrink-0">
                            <div className="flex items-center gap-4 mq450:flex-wrap">
                                <a href="#" className="flex items-center justify-center gap-[10px] bg-gosirat-green-alt rounded-xl py-2 px-6 hover:bg-[#0a4f27] transition-colors h-[54px] no-underline">
                                    <span className="text-base text-white font-semibold tracking-wide">Download Parent App</span>
                                </a>

                                <a href="/register" className="flex items-center justify-center gap-[10px] bg-transparent border-[1.5px] border-[#0D6332] rounded-xl py-2 px-6 hover:bg-[rgba(13,99,50,0.05)] transition-colors h-[54px] no-underline">
                                    <span className="text-base text-gosirat-green-alt font-semibold tracking-wide">Register as a Parent</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-4 max-w-full text-left text-lg text-gosirat-darker font-sans flex-1 min-w-[300px] mq750:grid-cols-1">
                    <div className="w-full h-full rounded-[22px] bg-white border-[rgba(0,0,0,0.8)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="fade-out" data-aos-delay="100">
                        <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
                            <div className="h-11 w-11 rounded-[14px] bg-[rgba(13,99,50,0.1)] flex items-center justify-center" data-aos="fade-out" data-aos-delay="200">
                                <svg className="h-[18px] w-full relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start">
                            <div className="relative tracking-[-0.45px] leading-7 font-semibold text-gosirat-darker">
                                Live GPS Tracking
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm text-gosirat-text flex-1">
                            <div className="w-full relative leading-[22.8px] inline-block">
                                Track your child's school transportation in real time with accurate GPS location updates.
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full rounded-[22px] bg-white border-[rgba(0,0,0,0.8)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="zoom-in" data-aos-delay="500">
                        <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
                            <div className="h-11 w-11 rounded-[14px] bg-[rgba(13,99,50,0.1)] flex items-center justify-center" data-aos="zoom-in" data-aos-delay="600">
                                <svg className="h-[18px] w-full relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start">
                            <div className="relative tracking-[-0.45px] leading-7 font-semibold text-gosirat-darker">
                                Instant Notifications
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm text-gosirat-text flex-1">
                            <div className="w-full relative leading-[22.8px] inline-block">
                                Receive real-time alerts for vehicle arrival, pickup, journey progress, school arrival, and drop-off so you always know where your child is.
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full rounded-[22px] bg-white border-[rgba(0,0,0,0.8)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="fade-in" data-aos-delay="300">
                        <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
                            <div className="h-11 w-11 rounded-[14px] bg-[rgba(13,99,50,0.1)] flex items-center justify-center" data-aos="fade-in" data-aos-delay="400">
                                <svg className="h-[18px] w-full relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start">
                            <div className="relative tracking-[-0.45px] leading-7 font-semibold text-gosirat-darker">
                                Secure QR Verification
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm text-gosirat-text flex-1">
                            <div className="w-full relative leading-[22.8px] inline-block">
                                Every student pickup and drop-off is verified through secure QR verification, ensuring children are handed over safely to authorized guardians.
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full rounded-[22px] bg-white border-[rgba(0,0,0,0.8)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="fade-out" data-aos-delay="100">
                        <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
                            <div className="h-11 w-11 rounded-[14px] bg-[rgba(13,99,50,0.1)] flex items-center justify-center" data-aos="fade-in" data-aos-delay="200">
                                <svg className="h-[18px] w-full relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start">
                            <div className="relative tracking-[-0.45px] leading-7 font-semibold text-gosirat-darker">
                                Transparent Billing
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm text-gosirat-text flex-1">
                            <div className="w-full relative leading-[22.8px] inline-block">
                                View transportation packages, invoices, payment history, and subscription details in one place with secure and transparent digital billing.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};
