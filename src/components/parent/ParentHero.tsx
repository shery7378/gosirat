import Image from "next/image";

export const ParentHero = () => {
    return (
        <section className="self-stretch overflow-hidden flex flex-col items-start pt-10 px-0 pb-5 box-border max-w-full mq450:pt-[26px] mq450:box-border" data-aos="fade-out">
            <div className="self-stretch flex items-center justify-between pt-0 px-[60px] pb-10 box-border gap-10 max-w-full flex-wrap mq450:px-4 mq450:pb-[52px]">
                <section className="flex flex-col items-start py-5 px-0 box-border max-w-full text-center text-xs text-[#176938] font-[Inter] flex-1 min-w-[300px]">
                    <div className="w-full max-w-[657px] flex flex-col items-start gap-6">
                        <div className="w-full max-w-[706px] flex flex-col items-start shrink-0">
                            <div className="h-[29.3px] flex items-start justify-center">
                                <div className="self-stretch rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] flex items-center py-[5px] px-3.5 gap-[5px]" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
                                    <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
                                        Parent App
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center pt-7 px-0 pb-4 gap-4 text-left text-6xl text-[#0c140f]">
                                <div className="self-stretch flex flex-col items-start justify-center">
                                    <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[68px] capitalize font-semibold font-[inherit] mq450:text-[51px] mq450:leading-[59px] mq450:text-[38px] mq450:leading-[44px]">
                                        Never wonder where your child is again.
                                    </h1>
                                </div>
                                <h3 className="m-0 w-full max-w-[641px] relative text-lg leading-[28px] font-normal font-[inherit] text-[#57605b] inline-block mq450:text-base mq450:leading-[26px]">
                                    Open the app. See exactly where your child is. From the
                                    moment the driver arrives until the moment they're safely
                                    back home.
                                </h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 mq450:flex-wrap">
                            <button className="cursor-pointer [border:none] py-5 px-6 bg-gradient-to-r from-[#176938] to-[#2ecc71] rounded-2xl flex items-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300">
                                <div className="relative text-xl leading-5 font-medium font-[Inter] text-[#F7F9F6] text-left">
                                    Register As Parent
                                </div>
                                <svg className="h-4 w-4 relative text-[#F7F9F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                                </svg>
                            </button>
                            <button className="cursor-pointer border-[rgba(0,0,0,0.2)] border-solid border-[1px] py-5 px-[23px] bg-base-white rounded-2xl flex items-center hover:bg-[#e6e6e6] hover:border-[rgba(51,51,51,0.2)] hover:border-solid hover:hover:border-[1px] hover:box-border">
                                <div className="relative text-xl leading-5 font-medium font-[Inter] text-[#0c140f] text-left">
                                    Download App
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="h-[480px] mq825:h-[450px] mq450:h-[350px] flex-1 flex items-start justify-center relative isolate min-w-[300px] max-w-full">
                    <Image
                        className="w-full max-w-[350px] h-auto object-contain shrink-0"
                        loading="lazy"
                        width={350}
                        height={727}
                        sizes="100vw"
                        alt="Parent and driver app mockup showing live bus tracking"
                        src="/images/parent-driver-app-hero-mockup.png"
                    data-aos="fade-in" data-aos-delay="100" />
                </section>
            </div>
        </section>
    );
};
