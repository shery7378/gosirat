import type { NextPage } from "next";
import Image from "next/image";

const GreenImpact: NextPage = () => {
    return (
        <section className="self-stretch bg-white flex flex-col items-center pt-[60px] pb-0 box-border gap-0 shrink-0 max-w-full mq450:gap-5 mq450:pt-[39px]" data-aos="fade-in">
            <section className="self-stretch flex items-center justify-between gap-8 max-w-full shrink-0 text-left text-xs text-[#176938] font-inherit px-[60px] mq450:pl-[30px] mq450:pr-[30px] mq450:box-border mq750:flex-col mq750:items-center mq750:text-center">
                <div className="h-auto w-[700px] flex flex-col items-start max-w-full mq450:min-w-full mq750:flex-1 mq750:items-center">
                    <div className="self-stretch h-[29.3px] flex items-start mq750:justify-center">
                        <div className="h-[29.3px] rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] box-border flex items-center py-[5px] px-3.5 gap-1.5" data-aos="zoom-in" data-aos-delay="100">
                            <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
                            <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
                                Green Initiative
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[584.3px] flex flex-col items-start pt-6 px-0 pb-0 box-border text-6xl text-[#0c140f] mq750:items-center">
                        <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-1.5px] leading-[63px] capitalize font-semibold font-[inherit] mq750:text-center mq450:text-4xl mq450:leading-[38px] mq450:text-5xl mq450:leading-[50px]">
                            <span className="leading-[63px]">{`Eco-Friendly School Transportation for a `}</span>
                            <span className="text-[#176938] leading-[63px]">Greener Future</span>
                        </h2>
                    </div>
                    <div className="self-stretch flex flex-col items-start pt-[19.7px] px-0 pb-[0.3px] text-lg text-[#57605b] mq750:text-center">
                        <div className="self-stretch relative leading-7">
                            GoSirat is committed to building a cleaner and more sustainable future through eco-friendly school transportation services. By encouraging shared school rides, reducing traffic congestion, lowering carbon emissions, and optimizing transportation routes, we help families, schools, and communities create a healthier environment while ensuring every child travels safely.
                        </div>
                    </div>
                </div>
                <div className="w-[541px] flex items-center justify-center relative isolate max-w-full mq450:min-w-full mq750:flex-1 mt-6">
                    <Image
                        className="w-full h-auto max-h-[350px] object-contain shrink-0 z-10 drop-shadow-2xl"
                        width={630}
                        height={511}
                        sizes="100vw"
                        alt="GoSirat eco-friendly school transportation reducing traffic congestion and carbon emissions through shared school rides."
                        title="GoSirat Eco-Friendly School Transportation"
                        src="/images/gosirat-green-school-transportation.png"
                        data-aos="fade-out" data-aos-delay="100" />
                </div>
            </section>
            <section className="w-full self-stretch bg-[#1f252e] flex flex-col items-start py-10 px-[60px] box-border text-left text-6xl text-base-white font-inherit mq450:pl-[30px] mq450:pr-[30px] mq450:box-border mx-auto mt-0 relative z-20">
                <div className="self-stretch flex items-start justify-between gap-8 max-w-full flex-wrap mq750:flex-col mq750:items-center mq750:text-center">
                    <div className="h-auto w-full max-w-[389.6px] flex flex-col items-start mq750:items-center">
                        <div className="self-stretch flex flex-col items-start mq750:items-center">
                            <h2 className="m-0 relative text-2xl tracking-[-0.5px] leading-8 font-semibold font-[inherit] text-green-400 mq450:text-xl mq450:leading-7">
                                🌱 62% Fewer Private Car Trips
                            </h2>
                        </div>
                        <div className="flex flex-col items-start pt-3 px-0 pb-0 text-sm mq750:items-center">
                            <div className="w-full h-auto flex items-start pt-[0.4px] px-0 pb-0 box-border">
                                <div className="w-full relative leading-6 mq750:text-center text-gray-300">
                                    Shared school transportation helps reduce the number of private vehicles around schools, making roads safer and less congested.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto w-full max-w-[389.6px] flex flex-col items-start mq750:items-center">
                        <div className="self-stretch flex flex-col items-start mq750:items-center">
                            <h2 className="m-0 relative text-2xl tracking-[-0.5px] leading-8 font-semibold font-[inherit] text-green-400 mq450:text-xl mq450:leading-7">
                                🌍 1.4M kg Carbon Emissions Reduced
                            </h2>
                        </div>
                        <div className="flex flex-col items-start pt-3 px-0 pb-0 text-sm mq750:items-center">
                            <div className="w-full h-auto flex items-start pt-[0.4px] px-0 pb-0 box-border">
                                <div className="w-full relative leading-6 mq750:text-center text-gray-300">
                                    By replacing individual school commutes with shared transportation, GoSirat helps reduce harmful CO₂ emissions and supports a cleaner environment.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto w-full max-w-[389.6px] flex flex-col items-start mq750:items-center">
                        <div className="self-stretch flex flex-col items-start mq750:items-center">
                            <h2 className="m-0 relative text-2xl tracking-[-0.5px] leading-8 font-semibold font-[inherit] text-green-400 mq450:text-xl mq450:leading-7">
                                🌱 3× More Efficient Transportation
                            </h2>
                        </div>
                        <div className="flex flex-col items-start pt-3 px-0 pb-0 text-sm mq750:items-center">
                            <div className="w-full h-auto flex items-start pt-[0.4px] px-0 pb-0 box-border">
                                <div className="w-full relative leading-6 mq750:text-center text-gray-300">
                                    Optimized routes and shared school transportation make daily travel significantly more efficient than individual family commutes.
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
