import type { NextPage } from "next";

export const SchoolsChallenge: NextPage = () => {
    return (
        <section className="self-stretch bg-[#0c140f] flex flex-col items-center py-[100px] px-[60px] text-left text-xs text-[rgba(244,247,244,0.8)] font-[Inter] mq825:pl-[30px] mq825:pr-[30px] mq825:box-border mq450:pt-[65px] mq450:pb-[65px] mq450:box-border" data-aos="fade-in">
            <div className="self-stretch flex flex-col items-center justify-center w-full">
                <div className="w-full flex flex-col items-start text-left">
                    <div className="self-stretch h-[29.3px] flex items-center justify-start">
                        <div className="h-[29.33px] rounded-[22369600px] bg-[#f4f7f4]/5 border-[#f4f7f4]/20 border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-out" data-aos-delay="100">
                            <div className="h-[6px] w-[6px] relative rounded-[22369600px] bg-[#f4f7f4]" />
                            <div className="relative font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase inline-block shrink-0 text-[#f4f7f4]">
                                The School Transportation Challenge
                            </div>
                        </div>
                    </div>
                    <h2 className="m-0 mt-6 self-stretch relative font-[Inter] font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-left text-[#f4f7f4] mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                        School Transportation Shouldn't Be a Daily Challenge
                    </h2>
                    <div className="flex flex-col items-start justify-center pt-[19.7px] px-0 pb-[0.3px] w-full">
                        <div className="w-full relative font-[Inter] font-normal text-[18px] leading-[28px] tracking-[0px] text-left text-[#f4f7f4]/70">
                            Managing school transportation is challenging. Late buses, missed pick-ups, and limited visibility can impact student safety, parent trust, and daily school operations. GoSirat helps schools simplify transportation management with smart technology and real-time updates.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
