import type { NextPage } from "next";
import Image from "@/components/CustomImage";

const GreenImpact: NextPage = () => {
    return (
        <section className="self-stretch bg-white flex flex-col items-center pt-[60px] pb-0 box-border gap-0 shrink-0 max-w-full mq450:gap-5 mq450:pt-[39px]" data-aos="fade-in">
            <section className="self-stretch flex items-stretch justify-between gap-8 max-w-full shrink-0 text-left text-xs text-gosirat-green font-inherit px-[60px] mq450:pl-[30px] mq450:pr-[30px] mq450:box-border mq750:flex-col mq750:items-center mq750:text-center">
                <div className="h-auto w-[700px] flex flex-col items-start max-w-full mq450:min-w-full mq750:flex-1 mq750:items-center">
                    <div className="self-stretch h-[29.3px] flex items-start mq750:justify-center">
                        <div className="inline-flex rounded-[30px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] items-center py-[6px] px-[14px] gap-[8px]" data-aos="zoom-in" data-aos-delay="100">
                            <div className="h-[6px] w-[6px] relative rounded-full bg-gosirat-green" />
                            <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                                Green Initiative
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[584.3px] flex flex-col items-start pt-6 px-0 pb-0 box-border text-6xl text-gosirat-black mq750:items-center">
                        <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-left text-gosirat-black mq825:text-[38px] mq825:leading-[48px] mq450:text-[24px] mq450:leading-[32px] break-words mq750:text-center">
                            <span className="leading-[100%]">{`Eco-Friendly School Transportation for a `}</span>
                            <span className="text-gosirat-green leading-[100%]">Greener Future</span>
                        </h2>
                    </div>
                    <div className="self-stretch flex flex-col items-start pt-[19.7px] px-0 pb-[0.3px] text-lg text-gosirat-gray mq750:text-center">
                        <div className="w-full relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-left text-gosirat-gray mq750:text-center">
                            GoSirat is committed to building a cleaner and more sustainable future through eco-friendly school transportation services. By encouraging shared school rides, reducing traffic congestion, lowering carbon emissions, and optimizing transportation routes, we help families, schools, and communities create a healthier environment while ensuring every child travels safely.
                        </div>
                    </div>
                </div>
                <div className="w-[541px] flex items-stretch justify-center relative isolate max-w-full mq450:min-w-full mq750:flex-1 mt-6">
                    <Image
                        className="w-full h-full object-cover rounded-xl shrink-0 z-10 drop-shadow-2xl"
                        width={630}
                        height={511}
                        sizes="100vw"
                        alt="GoSirat eco-friendly school transportation reducing traffic congestion and carbon emissions through shared school rides."
                        title="GoSirat Eco-Friendly School Transportation"
                        src="/images/gosirat-green-school-transportation.webp"
                        data-aos="fade-out" data-aos-delay="100" />
                </div>
            </section>
            <section className="w-full bg-[#1c2126] py-20 px-[60px] box-border flex justify-center mt-12 mq450:px-6 font-['Inter',_sans-serif]">
                <div className="w-full max-w-full grid grid-cols-3 gap-12 md:gap-16 text-left mq1050:grid-cols-2 mq750:grid-cols-1">
                    <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="m-0 text-[48px] md:text-[56px] font-bold text-white tracking-tight leading-none mb-4">
                            62%
                        </h3>
                        <div className="text-[18px] font-semibold text-gosirat-green mb-3">
                            Fewer Private Car Trips
                        </div>
                        <p className="m-0 text-[14px] leading-[22px] text-[#a1a1aa] font-medium">
                            Shared school transportation helps reduce the number of private vehicles around schools, making roads safer and less congested.
                        </p>
                    </div>

                    <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="m-0 text-[48px] md:text-[56px] font-bold text-white tracking-tight leading-none mb-4 flex items-baseline">
                            1.4M<span className="text-[32px] md:text-[40px] ml-2">kg</span>
                        </h3>
                        <div className="text-[18px] font-semibold text-gosirat-green mb-3">
                            Carbon Emissions Reduced
                        </div>
                        <p className="m-0 text-[14px] leading-[22px] text-[#a1a1aa] font-medium">
                            By replacing individual school commutes with shared transportation, GoSirat helps reduce harmful CO₂ emissions and supports a cleaner environment.
                        </p>
                    </div>

                    <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="m-0 text-[48px] md:text-[56px] font-bold text-white tracking-tight leading-none mb-4">
                            3x
                        </h3>
                        <div className="text-[18px] font-semibold text-gosirat-green mb-3">
                            More Efficient Transportation
                        </div>
                        <p className="m-0 text-[14px] leading-[22px] text-[#a1a1aa] font-medium">
                            Optimized routes and shared school transportation make daily travel significantly more efficient than individual family commutes.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default GreenImpact;
