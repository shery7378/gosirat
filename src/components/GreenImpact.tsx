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
            <section className="w-full relative overflow-hidden bg-[#06110a] flex flex-col items-center py-20 px-[60px] box-border text-left font-['Inter',_sans-serif] mq450:px-6 mt-12">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#176938] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#22c55e] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

                <div className="w-full max-w-[1200px] grid grid-cols-3 gap-8 relative z-10 mq1050:grid-cols-2 mq750:grid-cols-1">
                    
                    {/* Card 1 */}
                    <div className="flex flex-col items-start p-8 rounded-[24px] bg-[#ffffff05] border border-[#ffffff15] backdrop-blur-xl hover:-translate-y-2 hover:bg-[#ffffff08] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#176938] to-[#0d3b20] flex items-center justify-center text-[24px] shadow-lg mb-6">
                            🌱
                        </div>
                        <h3 className="m-0 text-[40px] font-bold text-white tracking-tight leading-none mb-2">
                            62%
                        </h3>
                        <div className="text-[18px] font-semibold text-[#4ade80] mb-4">
                            Fewer Private Car Trips
                        </div>
                        <p className="m-0 text-[15px] leading-[24px] text-[#a1a1aa]">
                            Shared school transportation helps reduce the number of private vehicles around schools, making roads safer and less congested.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-start p-8 rounded-[24px] bg-[#ffffff05] border border-[#ffffff15] backdrop-blur-xl hover:-translate-y-2 hover:bg-[#ffffff08] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#176938] to-[#0d3b20] flex items-center justify-center text-[24px] shadow-lg mb-6">
                            🌍
                        </div>
                        <h3 className="m-0 text-[40px] font-bold text-white tracking-tight leading-none mb-2">
                            1.4M<span className="text-[24px] ml-1">kg</span>
                        </h3>
                        <div className="text-[18px] font-semibold text-[#4ade80] mb-4">
                            Carbon Emissions Reduced
                        </div>
                        <p className="m-0 text-[15px] leading-[24px] text-[#a1a1aa]">
                            By replacing individual school commutes with shared transportation, GoSirat helps reduce harmful CO₂ emissions and supports a cleaner environment.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-start p-8 rounded-[24px] bg-[#ffffff05] border border-[#ffffff15] backdrop-blur-xl hover:-translate-y-2 hover:bg-[#ffffff08] transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#176938] to-[#0d3b20] flex items-center justify-center text-[24px] shadow-lg mb-6">
                            ⚡
                        </div>
                        <h3 className="m-0 text-[40px] font-bold text-white tracking-tight leading-none mb-2">
                            3x
                        </h3>
                        <div className="text-[18px] font-semibold text-[#4ade80] mb-4">
                            More Efficient Transportation
                        </div>
                        <p className="m-0 text-[15px] leading-[24px] text-[#a1a1aa]">
                            Optimized routes and shared school transportation make daily travel significantly more efficient than individual family commutes.
                        </p>
                    </div>

                </div>
            </section>
        </section>
    );
};

export default GreenImpact;
