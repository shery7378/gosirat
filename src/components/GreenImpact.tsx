import type { NextPage } from "next";
import Image from "next/image";

const GreenImpact: NextPage = () => {
    return (
        <section className="self-stretch bg-white flex flex-col items-center pt-[60px] pb-0 box-border gap-0 shrink-0 max-w-full mq450:gap-5 mq450:pt-[39px]" data-aos="fade-in">
            <section className="self-stretch flex items-center justify-between gap-8 max-w-full shrink-0 text-left text-xs text-[#176938] font-[Inter] px-[60px] mq450:pl-[30px] mq450:pr-[30px] mq450:box-border mq750:flex-col mq750:items-center mq750:text-center">
                <div className="h-auto w-[700px] flex flex-col items-start max-w-full mq450:min-w-full mq750:flex-1 mq750:items-center">
                    <div className="self-stretch h-[29.3px] flex items-start mq750:justify-center">
                        <div className="h-[29.3px] rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] box-border flex items-center py-[5px] px-3.5 gap-1.5" data-aos="zoom-in" data-aos-delay="100">
                            <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
                            <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
                                Green impact
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[584.3px] flex flex-col items-start pt-6 px-0 pb-0 box-border text-6xl text-[#0c140f] mq750:items-center">
                        <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-1.5px] leading-[63px] capitalize font-semibold font-[inherit] mq750:text-center mq450:text-4xl mq450:leading-[38px] mq450:text-5xl mq450:leading-[50px]">
                            <span className="leading-[63px]">{`A shared ride is a `}</span>
                            <span className="text-[#176938] leading-[63px]">greener</span>
                            <span className="leading-[63px]"> ride.</span>
                        </h2>
                    </div>
                    <div className="self-stretch flex flex-col items-start pt-[19.7px] px-0 pb-[0.3px] text-lg text-[#57605b] mq750:text-center">
                        <div className="self-stretch relative leading-7">
                            Every GoSirat route replaces multiple individual commutes —
                            quieter streets near schools, less traffic, and a meaningful
                            reduction in emissions every single day.
                        </div>
                    </div>
                </div>
                <div className="w-[541px] flex items-center justify-center relative isolate max-w-full mq450:min-w-full mq750:flex-1 mt-6">
                    <Image
                        className="w-full h-auto max-h-[350px] object-contain shrink-0 z-10 drop-shadow-2xl"
                        width={630}
                        height={511}
                        sizes="100vw"
                        alt="Green Impact Mockup"
                        src="/samsung-mockup.png"
                        data-aos="fade-out" data-aos-delay="100" />
                </div>
            </section>
            <section className="w-full self-stretch bg-[#1f252e] flex flex-col items-start py-10 px-[60px] box-border text-left text-6xl text-base-white font-[Inter] mq450:pl-[30px] mq450:pr-[30px] mq450:box-border mx-auto mt-0 relative z-20">
                <div className="self-stretch flex items-center justify-between gap-8 max-w-full flex-wrap mq750:flex-col mq750:items-center mq750:text-center">
                    <div className="h-auto w-full max-w-[389.6px] flex flex-col items-start mq750:items-center">
                        <div className="self-stretch flex flex-col items-start mq750:items-center">
                            <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq450:text-4xl mq450:leading-9 mq450:text-5xl mq450:leading-[48px]">
                                62%
                            </h2>
                        </div>
                        <div className="flex flex-col items-start pt-3 px-0 pb-0 text-sm mq750:items-center">
                            <div className="w-full h-auto flex items-start pt-[0.4px] px-0 pb-0 box-border">
                                <div className="w-full relative leading-5 mq750:text-center">
                                    fewer car trips for families on shared routes
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto w-full max-w-[389.6px] flex flex-col items-start mq750:items-center">
                        <div className="self-stretch flex flex-col items-start mq750:items-center">
                            <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq450:text-4xl mq450:leading-9 mq450:text-5xl mq450:leading-[48px]">
                                1.4M kg
                            </h2>
                        </div>
                        <div className="flex flex-col items-start pt-3 px-0 pb-0 text-sm mq750:items-center">
                            <div className="w-full h-auto flex items-start pt-[0.4px] px-0 pb-0 box-border">
                                <div className="w-full relative leading-5 mq750:text-center">
                                    of CO₂ avoided in the last school year
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto w-full max-w-[389.6px] flex flex-col items-start mq750:items-center">
                        <div className="self-stretch flex flex-col items-start mq750:items-center">
                            <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq450:text-4xl mq450:leading-9 mq450:text-5xl mq450:leading-[48px]">
                                3x
                            </h2>
                        </div>
                        <div className="flex flex-col items-start pt-3 px-0 pb-0 text-sm mq750:items-center">
                            <div className="w-full h-auto flex items-start pt-[0.4px] px-0 pb-0 box-border">
                                <div className="w-full relative leading-5 mq750:text-center">
                                    more efficient than individual school commutes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default GreenImpact;
