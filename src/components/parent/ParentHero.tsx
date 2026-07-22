import Image from "@/components/CustomImage";
import Link from "next/link";

export const ParentHero = () => {
    return (
        <section className="self-stretch overflow-hidden flex flex-col items-start pt-10 px-0 pb-5 box-border max-w-full mq450:pt-[26px] mq450:box-border" data-aos="fade-in">
            <div className="self-stretch flex items-center justify-between pt-0 px-[60px] pb-10 box-border gap-10 max-w-full flex-wrap mq450:px-4 mq450:pb-[52px]">
                <section className="flex flex-col items-start py-5 px-0 box-border max-w-full text-center text-xs text-gosirat-green font-sans flex-1 min-w-[300px]">
                    <div className="w-full max-w-[657px] flex flex-col items-start gap-6">
                        <div className="w-full max-w-[706px] flex flex-col items-start shrink-0">
                            <div className="h-[29.33px] flex items-start justify-center">
                                <div className="self-stretch rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                                    <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                                        Parent App
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center pt-7 px-0 pb-4 gap-4 text-left text-6xl text-gosirat-black">
                                <div className="self-stretch flex flex-col items-start justify-center">
                                    <h1 className="m-0 self-stretch relative font-sans font-semibold text-[64px] leading-[100%] tracking-normal text-left text-gosirat-black mq1050:text-left mq825:text-[51px] mq825:leading-[59px] mq450:text-[38px] mq450:leading-[44px]">
                                        Never wonder where your child is again.
                                    </h1>
                                </div>
                                <p className="m-0 w-full relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-left text-gosirat-gray mq450:text-base mq450:leading-[26px]">
                                    Parents trust GoSirat to make every school journey safer, smarter, and more transparent.<br />
                                    From live GPS tracking to verified drivers and secure QR verification, our platform gives families confidence and peace of mind every school day.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 mq450:flex-wrap">
                            <Link href="/register" className="cursor-pointer [border:none] py-5 px-6 bg-gradient-to-r from-gosirat-green to-[#2ecc71] rounded-2xl flex items-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 no-underline">
                                <div className="relative text-xl leading-5 font-medium font-sans text-gosirat-bg-light text-left">
                                    Register As Parent
                                </div>
                                <svg className="h-4 w-4 relative text-gosirat-bg-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                                </svg>
                            </Link>
                            <Link href="/register" className="cursor-pointer border-[rgba(0,0,0,0.2)] border-solid border-[1px] py-5 px-[23px] bg-base-white rounded-2xl flex items-center hover:bg-[#e6e6e6] hover:border-[rgba(51,51,51,0.2)] hover:border-solid hover:hover:border-[1px] hover:box-border no-underline">
                                <div className="relative text-xl leading-5 font-medium font-sans text-gosirat-black text-left">
                                    Download App
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="h-[480px] mq825:h-[450px] mq450:h-[350px] flex-1 flex items-start justify-center relative isolate min-w-[300px] max-w-full">
                    <Image
                        className="w-full max-w-[350px] h-auto object-contain shrink-0"
                        priority
                        fetchPriority="high"
                        width={350}
                        height={727}
                        sizes="100vw"
                        alt="GoSirat Parent App showing live GPS tracking, school pick and drop updates, QR verification, and real-time notifications for parents."
                        title="GoSirat Parent App for Safe School Transportation"
                        src="/images/gosirat-parent-app-live-gps-tracking.webp"
                        data-aos="fade-in" data-aos-delay="100" />
                </section>
            </div>
        </section>
    );
};
