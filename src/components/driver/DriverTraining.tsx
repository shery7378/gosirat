import Image from "next/image";
import { Container } from "../Container";

export const DriverTraining = () => {
    return (
        <section className="self-stretch bg-gosirat-light overflow-hidden flex flex-col items-center pt-[100px] pb-0 px-[60px] mq450:pt-[65px] mq450:pb-0 mq450:px-4 mq450:box-border">
            <Container className="w-full flex flex-col items-center gap-12">
                <div className="flex flex-col items-center text-center gap-6">
                    <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
                        <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                        <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                            Driver Training Program
                        </div>
                    </div>
                    <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
                        Professional Driver Training for Safe School Transportation
                    </h2>
                    <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray max-w-[800px]">
                        Every GoSirat driver completes a comprehensive training program covering defensive driving, child safety, communication, and emergency response before transporting students.
                    </p>
                </div>

                <div className="relative w-full flex justify-center mt-8">
                    <div className="relative w-full max-w-[340px] h-auto shrink-0 -mb-[120px]">
                        <Image
                            className="w-full h-auto object-contain"
                            src="/images/gosirat-driver-training-program.webp"
                            title="GoSirat Driver Training Program"
                            alt="GoSirat driver training program covering defensive driving, child safety, communication, and emergency response."
                            width={340}
                            height={700}
                        data-aos="fade-in" data-aos-delay="100" />

                        {/* Floating Card Left */}
                        <div className="absolute top-[30%] -left-[380px] bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] py-4 px-6 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite] min-w-[260px] lg:hidden xl:flex mq750:hidden">
                            <div className="w-10 h-10 bg-[rgba(213,240,219,0.5)] rounded-full flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <div className="text-[11px] font-bold text-gosirat-green uppercase tracking-[1px] leading-[14px]">Day 2</div>
                                <div className="text-[15px] font-bold text-gosirat-darker leading-[20px] mt-1">Child Safety & Communication</div>
                            </div>
                        </div>

                        {/* Floating Card Right Top */}
                        <div className="absolute top-[20%] -right-[380px] bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] py-4 px-6 flex items-center gap-4 animate-[float_4.5s_ease-in-out_infinite] min-w-[260px] lg:hidden xl:flex mq750:hidden">
                            <div className="w-10 h-10 bg-[rgba(213,240,219,0.5)] rounded-full flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <div className="text-[11px] font-bold text-gosirat-green uppercase tracking-[1px] leading-[14px]">Day 1</div>
                                <div className="text-[15px] font-bold text-gosirat-darker leading-[20px] mt-1">Defensive Driving & Route Safety</div>
                            </div>
                        </div>

                        {/* Floating Card Right Bottom */}
                        <div className="absolute top-[60%] -right-[380px] bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] py-4 px-6 flex items-center gap-4 animate-[float_5s_ease-in-out_infinite] min-w-[260px] lg:hidden xl:flex mq750:hidden">
                            <div className="w-10 h-10 bg-[rgba(213,240,219,0.5)] rounded-full flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <div className="text-[11px] font-bold text-gosirat-green uppercase tracking-[1px] leading-[14px]">Day 3</div>
                                <div className="text-[15px] font-bold text-gosirat-darker leading-[20px] mt-1">First Aid & Emergency Response</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
