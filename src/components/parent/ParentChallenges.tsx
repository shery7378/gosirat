import Image from "next/image";

export const ParentChallenges = () => {
    return (
        <section className="self-stretch bg-[#1f252e] flex flex-col items-start py-20 px-[60px] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border mq450:px-4 mq450:box-border" data-aos="fade-out">
            <div className="w-full flex flex-col items-start mq450:max-w-full">
                <section className="w-full flex flex-col items-start max-w-[768px] text-left text-xs text-[rgba(255,255,255,0.6)] font-[Inter] mq450:max-w-full">
                    <div className="self-stretch flex flex-col items-start">
                        <div className="relative tracking-[1.92px] leading-[18px] uppercase font-semibold">
                            THE DAILY PARENT CHALLENGE
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start pt-4 px-0 pb-0 text-5xl text-base-white">
                        <h2 className="m-0 w-full relative text-[length:inherit] tracking-[-1.61px] leading-[54px] capitalize font-semibold font-[inherit] inline-block mq450:text-[38px] mq450:leading-[43px] mq450:text-[29px] mq450:leading-8">
                            School mornings shouldn't feel like a guessing game.
                        </h2>
                    </div>
                    <div className="self-stretch flex flex-col items-start pt-5 px-0 pb-0 text-lg text-[rgba(255,255,255,0.7)]">
                        <div className="w-full relative leading-[29.3px] inline-block">
                            Today's parents are juggling work, family and uncertainty — with
                            no real visibility into the most important journey of the day.
                        </div>
                    </div>
                </section>
                <section className="self-stretch flex flex-col items-start pt-12 px-0 pb-0 text-left text-base text-base-white font-[Inter]">
                    <div className="self-stretch flex items-center gap-4 lg:flex-wrap mq750:flex-col">
                        <div className="h-auto flex-1 rounded-[18px] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] border-solid border-[0.7px] box-border flex flex-col items-start py-[23px] px-6 min-w-[308px] mq750:w-full mq750:min-w-0" data-aos="fade-in" data-aos-delay="100">
                            <div className="self-stretch flex flex-col items-start">
                                <div className="relative tracking-[-0.32px] leading-6 font-semibold">
                                    Transportation uncertainty
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm text-[rgba(255,255,255,0.7)]">
                                <div className="w-full relative leading-[22.8px] inline-block">
                                    Not knowing where your child is between home and school.
                                </div>
                            </div>
                        </div>
                        <div className="h-auto flex-1 rounded-[18px] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] border-solid border-[0.7px] box-border flex flex-col items-start py-[23px] px-6 min-w-[308px] mq750:w-full mq750:min-w-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="self-stretch flex flex-col items-start">
                                <div className="relative tracking-[-0.32px] leading-6 font-semibold">
                                    Missed updates
                                </div>
                            </div>
                            <div className="w-full h-auto flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm text-[rgba(255,255,255,0.7)]">
                                <div className="w-full relative leading-[22.8px] inline-block">
                                    Information that arrives too late, or never at all.
                                </div>
                            </div>
                        </div>
                        <div className="h-auto flex-1 rounded-[18px] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] border-solid border-[0.7px] box-border flex flex-col items-start py-[23px] px-6 min-w-[308px] mq750:w-full mq750:min-w-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="self-stretch flex flex-col items-start">
                                <div className="relative tracking-[-0.32px] leading-6 font-semibold">
                                    Safety concerns
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm text-[rgba(255,255,255,0.7)]">
                                <div className="w-full relative leading-[22.8px] inline-block">
                                    No verified record of who picked up or dropped off your
                                    child.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};
