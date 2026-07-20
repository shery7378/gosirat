export const HowItWorks = () => {
    return (
        <section className="w-full self-stretch bg-[#0C140F] flex flex-col items-start py-[100px] px-[60px] box-border mq450:py-[65px] mq450:px-4 mq450:box-border" data-aos="zoom-in">
            <section className="w-full flex flex-col items-start text-left text-xs text-base-white font-[Inter]">
                <div className="self-stretch flex flex-col items-start gap-2.5">
                    <div className="self-stretch h-[29.3px] flex items-start">
                        <div className="h-[29.33px] rounded-[22369600px] bg-[rgba(213,240,219,0.1)] border-[rgba(23,105,56,0.3)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="zoom-in" data-aos-delay="100">
                            <div className="h-[6px] w-[6px] rounded-[22369600px] bg-[#2ecc71]" />
                            <div className="font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-[#2ecc71]">
                                How it works
                            </div>
                        </div>
                    </div>
                    <h2 className="m-0 self-stretch relative font-[Inter] font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-[#F4F7F4] mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words mt-4">
                        <span className="">{`GoSirat Parent App Works in `}</span>
                        <span className="text-base-white">
                            5 Simple Steps
                        </span>
                    </h2>
                </div>
            </section>
            <section className="w-full flex flex-col items-start py-5 px-0 box-border text-left text-[100px] text-base-white font-[Inter] mt-10">
                <div className="self-stretch flex items-start justify-between gap-6 flex-wrap mq1125:justify-center mq750:flex-col mq750:items-stretch">
                    {/* Card 1 */}
                    <div className="group flex-1 min-w-[200px] flex flex-col items-start py-7 px-6 box-border mq750:w-full mq750:max-w-none rounded-2xl border border-transparent transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:bg-[#252c38] hover:border-[#176938]/30 hover:shadow-[0_10px_30px_rgba(23,105,56,0.1)] cursor-pointer" data-aos="fade-out" data-aos-delay="200">
                        <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] text-[rgba(244,247,244,0.4)] group-hover:text-[#176938] group-hover:scale-110 origin-left transition-all duration-300 mq450:text-[50px] mq450:text-3xl">
                            01
                        </h2>
                        <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 text-[28px]">
                            <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.5px] font-medium font-[inherit] group-hover:text-white transition-colors duration-300 mq450:text-[22px]">
                                Add Child
                            </h2>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-3 px-0 pb-0 text-sm">
                            <div className="w-full h-auto relative leading-[22.8px] inline-block text-[rgba(255,255,255,0.7)] group-hover:text-white transition-colors duration-300">
                                Create a secure profile for each child by adding their basic information, school details, pickup location, and authorized guardians.
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="group flex-1 min-w-[200px] flex flex-col items-start py-7 px-6 box-border mq750:w-full mq750:max-w-none rounded-2xl border border-transparent transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:bg-[#252c38] hover:border-[#176938]/30 hover:shadow-[0_10px_30px_rgba(23,105,56,0.1)] cursor-pointer" data-aos="zoom-in" data-aos-delay="300">
                        <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] text-[rgba(244,247,244,0.4)] group-hover:text-[#176938] group-hover:scale-110 origin-left transition-all duration-300 mq450:text-[50px] mq450:text-3xl">
                            02
                        </h2>
                        <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 text-[28px]">
                            <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.5px] font-medium font-[inherit] group-hover:text-white transition-colors duration-300 mq450:text-[22px]">
                                Choose Package
                            </h2>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-3 px-0 pb-0 text-sm">
                            <div className="w-full h-auto relative leading-[22.8px] inline-block text-[rgba(255,255,255,0.7)] group-hover:text-white transition-colors duration-300">
                                Select the school transportation package that best fits your child's school schedule, pickup location, and daily travel requirements.
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="group flex-1 min-w-[200px] flex flex-col items-start py-7 px-6 box-border mq750:w-full mq750:max-w-none rounded-2xl border border-transparent transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:bg-[#252c38] hover:border-[#176938]/30 hover:shadow-[0_10px_30px_rgba(23,105,56,0.1)] cursor-pointer" data-aos="fade-out" data-aos-delay="400">
                        <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] text-[rgba(244,247,244,0.4)] group-hover:text-[#176938] group-hover:scale-110 origin-left transition-all duration-300 mq450:text-[50px] mq450:text-3xl">
                            03
                        </h2>
                        <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 text-[28px]">
                            <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.5px] font-medium font-[inherit] group-hover:text-white transition-colors duration-300 mq450:text-[22px]">
                                Match To Route
                            </h2>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-3 px-0 pb-0 text-sm">
                            <div className="w-full h-auto relative leading-[22.8px] inline-block text-[rgba(255,255,255,0.7)] group-hover:text-white transition-colors duration-300">
                                GoSirat intelligently assigns your child to the most efficient route and a verified driver, helping provide safe, reliable, and timely school transportation.
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="group flex-1 min-w-[200px] flex flex-col items-start py-7 px-6 box-border mq750:w-full mq750:max-w-none rounded-2xl border border-transparent transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:bg-[#252c38] hover:border-[#176938]/30 hover:shadow-[0_10px_30px_rgba(23,105,56,0.1)] cursor-pointer" data-aos="fade-in" data-aos-delay="500">
                        <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] text-[rgba(244,247,244,0.4)] group-hover:text-[#176938] group-hover:scale-110 origin-left transition-all duration-300 mq450:text-[50px] mq450:text-3xl">
                            04
                        </h2>
                        <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 text-[28px]">
                            <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.5px] font-medium font-[inherit] group-hover:text-white transition-colors duration-300 mq450:text-[22px]">
                                Track Every Ride
                            </h2>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-3 px-0 pb-0 text-sm">
                            <div className="w-full h-auto relative leading-[22.8px] text-[rgba(255,255,255,0.7)] group-hover:text-white transition-colors duration-300">
                                Use the GoSirat Parent App to monitor your child's school transportation in real time with live GPS tracking, instant notifications, and direct communication when needed.
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="group flex-1 min-w-[200px] flex flex-col items-start py-7 px-6 box-border mq750:w-full mq750:max-w-none rounded-2xl border border-transparent transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:bg-[#252c38] hover:border-[#176938]/30 hover:shadow-[0_10px_30px_rgba(23,105,56,0.1)] cursor-pointer" data-aos="fade-out" data-aos-delay="600">
                        <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] text-[rgba(244,247,244,0.4)] group-hover:text-[#176938] group-hover:scale-110 origin-left transition-all duration-300 mq450:text-[50px] mq450:text-3xl">
                            05
                        </h2>
                        <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 text-[28px]">
                            <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.5px] font-medium font-[inherit] group-hover:text-white transition-colors duration-300 mq450:text-[22px]">
                                Safe Pickup & Drop-Off
                            </h2>
                        </div>
                        <div className="w-full flex flex-col items-start pt-3 px-0 pb-0 box-border text-sm">
                            <div className="self-stretch relative leading-[22.8px] text-[rgba(255,255,255,0.7)] group-hover:text-white transition-colors duration-300">
                                Every pickup and drop-off is securely confirmed using QR verification and authorized guardian confirmation, giving parents complete peace of mind.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};
