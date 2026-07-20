import Image from "next/image";

export const ParentChallenges = () => {
    return (
        <section className="self-stretch bg-gosirat-black flex flex-col items-start py-[100px] px-[60px] mq450:py-[65px] mq450:px-4 mq450:box-border">
            <div className="w-full flex flex-col items-start mq450:max-w-full">
                <section className="w-full flex flex-col items-start max-w-[768px] text-left text-xs font-sans mq450:max-w-full">
                    <div className="self-stretch flex flex-col items-start">
                        <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.1)] border-[rgba(23,105,56,0.3)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="zoom-in" data-aos-delay="100">
                            <div className="h-[6px] w-[6px] rounded-full bg-gosirat-accent" />
                            <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-accent">
                                THE DAILY PARENT CHALLENGE
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0">
                        <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-light mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
                            School Mornings Shouldn't Feel Like a Guessing Game.
                        </h2>
                    </div>
                    <div className="self-stretch flex flex-col items-start pt-5 px-0 pb-0">
                        <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-[#A3ACA6]">
                            Today's parents are balancing work, family, and busy schedules while trying to stay informed about their child's school transportation. GoSirat is designed to give families complete visibility, safer school pick-up and drop-off, and peace of mind from pickup to arrival.
                        </p>
                    </div>
                </section>
                <section className="self-stretch flex flex-col items-start pt-12 px-0 pb-0 text-left text-base text-base-white font-sans">
                    <div className="self-stretch flex items-center gap-4 lg:flex-wrap mq750:flex-col">
                        <div className="h-auto flex-1 rounded-[18px] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] border-solid border-[0.7px] box-border flex flex-col items-start py-[23px] px-6 min-w-[308px] mq750:w-full mq750:min-w-0" data-aos="fade-in" data-aos-delay="100">
                            <div className="self-stretch flex flex-col items-start">
                                <div className="relative tracking-[-0.32px] leading-6 font-semibold">
                                    Transportation uncertainty
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm text-[rgba(255,255,255,0.7)]">
                                <div className="w-full relative leading-[22.8px] inline-block">
                                    Parents shouldn't have to wonder where their child is between home and school. Without live GPS tracking and real-time updates, every school journey can feel uncertain.
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
                                    Important information should arrive at the right time. Parents need instant pickup, journey, arrival, and drop-off notifications—not delayed messages or unanswered questions.
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
                                    Every child deserves a verified and secure handover. GoSirat records pickup and drop-off through QR verification and authorized guardian confirmation, helping schools and parents stay informed and protected.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};
