import type { NextPage } from "next";
import Image from "next/image";

const FeaturesList: NextPage = () => {
    return (
        <section className="self-stretch flex flex-col items-start py-[100px] px-[60px] mq825:py-[65px] mq825:px-[30px] mq450:px-4 box-border" data-aos="fade-in">
            <section className="self-stretch flex flex-col items-start gap-2.5 text-left text-xs text-[#176938] font-[Inter]">
                <div className="self-stretch flex items-start">
                    <div className="h-[29.33px] rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-out" data-aos-delay="100">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#176938]" />
                        <div className="relative font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-[#176938]">
                            Testimonials
                        </div>
                    </div>
                </div>
                <h2 className="m-0 mt-6 self-stretch relative font-[Inter] font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-left text-[#0c140f] mq825:text-[38px] mq825:leading-[48px] mq450:text-[24px] mq450:leading-[32px] break-words">
                    Trusted by Parents, Drivers & Schools
                </h2>
                <div className="w-full relative font-[Inter] font-normal text-[18px] leading-[28px] tracking-[0px] text-left text-[#57605b] max-w-[800px] mt-[19.7px]">
                    Families, drivers, and schools trust GoSirat for safe school transportation, live GPS tracking, verified drivers, and secure student pick-up and drop-off. Here's what our community has to say about their experience.
                </div>
            </section>
            <div className="self-stretch flex flex-col items-start pt-16 px-0 pb-0 mq450:pt-[42px] mq450:box-border">
                <div className="self-stretch grid grid-cols-3 mq975:grid-cols-2 mq650:grid-cols-1 gap-5">
                    <section className="flex flex-col shadow-[0px_1px_2px_rgba(16,24,16,0.04),_0px_8px_24px_rgba(16,24,16,0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] p-8 text-left text-lg text-[#0c140f] font-[Inter] h-full w-full overflow-hidden">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={`star1-${star}`} className="w-6 h-6 text-[#176938] fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            ))}
                        </div>
                        <div className="flex-1 w-full pt-1 px-0 pb-0">
                            <div className="w-full relative leading-[29.3px] break-words whitespace-normal inline-block">
                                "GoSirat has made our school mornings stress-free. I can track the vehicle in real time, receive instant notifications, and know exactly when my daughter arrives safely at school. It gives me complete peace of mind."
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0 text-base">
                            <div className="self-stretch border-[#e5e7eb] border-solid border-t-[0.7px] box-border flex flex-col items-start pt-5 px-0 pb-0">
                                <div className="self-stretch flex flex-col items-start">
                                    <div className="relative leading-6 font-semibold">
                                        Aisha M.
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-sm text-[#57605b]">
                                    <div className="relative leading-5">Parent of Grade 3 Student</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col shadow-[0px_1px_2px_rgba(16,24,16,0.04),_0px_8px_24px_rgba(16,24,16,0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] p-8 text-left text-lg text-[#0c140f] font-[Inter] h-full w-full overflow-hidden">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={`star2-${star}`} className="w-6 h-6 text-[#176938] fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            ))}
                        </div>
                        <div className="flex-1 w-full pt-1 px-0 pb-0">
                            <div className="w-full relative leading-[29.3px] break-words whitespace-normal inline-block">
                                "The QR verification system and secure handover are the features I trust the most. Every pickup and drop-off is verified, which makes me feel confident that my children are always safe."
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0 text-base">
                            <div className="self-stretch border-[#e5e7eb] border-solid border-t-[0.7px] box-border flex flex-col items-start pt-5 px-0 pb-0">
                                <div className="self-stretch flex flex-col items-start">
                                    <div className="relative leading-6 font-semibold">
                                        Hassan K.
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-sm text-[#57605b]">
                                    <div className="relative leading-5">Parent of Grade 6 & Grade 8 Students</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col shadow-[0px_1px_2px_rgba(16,24,16,0.04),_0px_8px_24px_rgba(16,24,16,0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] p-8 text-left text-lg text-[#0c140f] font-[Inter] h-full w-full overflow-hidden">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={`star3-${star}`} className="w-6 h-6 text-[#176938] fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            ))}
                        </div>
                        <div className="flex-1 w-full pt-1 px-0 pb-0">
                            <div className="w-full relative leading-[29.3px] break-words whitespace-normal inline-block">
                                "The GoSirat Driver App makes my daily work much easier. Route navigation, student attendance, QR verification, and earnings are all available in one place, allowing me to focus on driving safely."
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0 text-base">
                            <div className="self-stretch border-[#e5e7eb] border-solid border-t-[0.7px] box-border flex flex-col items-start pt-5 px-0 pb-0">
                                <div className="self-stretch flex flex-col items-start">
                                    <div className="relative leading-6 font-semibold">
                                        Yousef R.
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-sm text-[#57605b]">
                                    <div className="relative leading-5">
                                        GoSirat Driver • 3 Years Experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default FeaturesList;

