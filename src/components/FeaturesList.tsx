import type { NextPage } from "next";
import Image from "next/image";

const FeaturesList: NextPage = () => {
    return (
        <section className="self-stretch flex flex-col items-start py-20 px-16 mq450:py-[52px] mq450:px-[30px] mq450:box-border" data-aos="fade-in">
            <section className="self-stretch flex flex-col items-start gap-2.5 text-left text-xs text-[#176938] font-[Inter]">
                <div className="self-stretch flex items-start">
                    <div className="rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] box-border flex items-center py-[5px] px-3.5 gap-1.5" data-aos="fade-out" data-aos-delay="100">
                        <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
                        <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
                            Stories
                        </div>
                    </div>
                </div>
                <h2 className="m-0 relative text-6xl tracking-[-1.5px] leading-[63px] capitalize font-semibold font-[inherit] text-[#0c140f] mq450:text-4xl mq450:leading-[38px] mq450:text-5xl mq450:leading-[50px]">
                    <span className="leading-[63px]">{`Heard from `}</span>
                    <span className="text-[#43855E] leading-[63px]">parents,</span>
                    <span className="leading-[63px]"> drivers and schools.</span>
                </h2>
            </section>
            <div className="self-stretch flex flex-col items-start pt-16 px-0 pb-0 mq450:pt-[42px] mq450:box-border">
                <div className="self-stretch grid grid-cols-3 mq975:grid-cols-2 mq650:grid-cols-1 gap-5">
                    <section className="h-full w-full overflow-hidden shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 text-left text-lg text-[#0c140f] font-[Inter]">
                        <svg viewBox="0 0 24 24" fill="#448b61" className="w-12 h-12 shrink-0 relative mb-2 opacity-100">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                        </svg>
                        <div className="flex-1 w-full pt-5 px-0 pb-0">
                            <div className="w-full relative leading-[29.3px] break-words whitespace-normal inline-block">
                                My mornings finally feel calm. I open the app, see the bus
                                on the map, and I know exactly when she'll be at school.
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0 text-base">
                            <div className="self-stretch border-[#dee3de] border-solid border-t-[0.7px] box-border flex flex-col items-start pt-5 px-0 pb-0">
                                <div className="self-stretch flex flex-col items-start">
                                    <div className="relative leading-6 font-semibold">
                                        Aisha M.
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-sm text-[#57605b]">
                                    <div className="relative leading-5">Parent Â· Grade 3</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="h-full w-full overflow-hidden shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 text-left text-lg text-[#0c140f] font-[Inter]">
                        <svg viewBox="0 0 24 24" fill="#448b61" className="w-12 h-12 shrink-0 relative mb-2 opacity-100">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                        </svg>
                        <div className="flex-1 w-full pt-5 px-0 pb-0">
                            <div className="w-full relative leading-[29.3px] break-words whitespace-normal inline-block">
                                Verification at pickup and at the school gate is the part I
                                appreciate most. Nothing is left to chance.
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0 text-base">
                            <div className="self-stretch border-[#dee3de] border-solid border-t-[0.7px] box-border flex flex-col items-start pt-5 px-0 pb-0">
                                <div className="self-stretch flex flex-col items-start">
                                    <div className="relative leading-6 font-semibold">
                                        Hassan K.
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-sm text-[#57605b]">
                                    <div className="relative leading-5">{`Parent Â· Grade 6 & 8`}</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="h-full w-full overflow-hidden shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 text-left text-lg text-[#0c140f] font-[Inter]">
                        <svg viewBox="0 0 24 24" fill="#448b61" className="w-12 h-12 shrink-0 relative mb-2 opacity-100">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                        </svg>
                        <div className="flex-1 w-full pt-5 px-0 pb-0">
                            <div className="w-full relative leading-[29.3px] break-words whitespace-normal inline-block">
                                The driver app keeps me focused on the road. The manifest,
                                the QR check, the earnings â€” everything I need is one tap
                                away.
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0 text-base">
                            <div className="self-stretch border-[#dee3de] border-solid border-t-[0.7px] box-border flex flex-col items-start pt-5 px-0 pb-0">
                                <div className="self-stretch flex flex-col items-start">
                                    <div className="relative leading-6 font-semibold">
                                        Yousef R.
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-sm text-[#57605b]">
                                    <div className="relative leading-5">
                                        GoSirat driver, 3 years
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

