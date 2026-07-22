import type { NextPage } from "next";
import Image from "@/components/CustomImage";
import Link from "next/link";
import { Container } from "./Container";

interface AppDownloadProps {
    hideImage?: boolean;
    label?: string;
    heading?: string;
    description?: string;
}

const AppDownload: React.FC<AppDownloadProps> = ({
    hideImage,
    label = "DOWNLOAD",
    heading = "Start Your Safer School Journey Today.",
    description = "GoSirat is two apps that work together — for parents, and for the drivers they trust."
}) => {
    return (
        <section className="w-full flex flex-col items-center py-16 px-[60px] box-border mq725:px-[30px] mq450:py-10 mq450:px-4 mx-auto" data-aos="zoom-in">
            <div className="w-full rounded-[24px] md:rounded-[40px] bg-[#114b27] overflow-hidden flex flex-col md:flex-row items-center justify-between relative box-border min-h-0 md:min-h-[464px]">

                {/* Text Section (Left Column) */}
                <div className="flex flex-col gap-6 z-10 relative w-full md:w-[50%] min-[1050px]:w-[45%] items-start text-left py-12 px-6 sm:px-8 md:py-24 md:pl-12 md:pr-4 min-[1050px]:pl-16">
                    <div className="flex flex-col gap-4 w-full items-start">
                        <div className="inline-flex rounded-[30px] bg-white/20 items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
                            <div className="h-[6px] w-[6px] relative rounded-full bg-gray-300" />
                            <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-white">
                                {label}
                            </div>
                        </div>

                        <h2 className="m-0 mt-6 self-stretch relative font-sans font-bold text-[56px] leading-[1.1] tracking-[-1.5px] text-left text-white mq825:text-[42px] mq825:leading-[48px] mq450:text-[32px] mq450:leading-[1.2] break-words max-w-[550px]">
                            {heading}
                        </h2>

                        <div className="w-full relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-left text-[rgba(255,255,255,0.85)] max-w-[500px] mt-2">
                            {description}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap w-full justify-start mt-6">
                        {/* App Store Button */}
                        <a href="#" className="flex items-center justify-center gap-[10px] bg-black border border-black rounded-[12px] py-2 hover:bg-gray-900 transition-colors h-[54px] w-[170px] no-underline">
                            <svg viewBox="0 0 384 512" className="w-[24px] h-[24px] text-white" fill="currentColor">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[10px] leading-[12px] text-gray-200 font-medium font-sans">Download on the</span>
                                <span className="text-[18px] leading-[20px] text-white font-semibold tracking-wide font-sans">App Store</span>
                            </div>
                        </a>

                        {/* Google Play Button */}
                        <a href="#" className="flex items-center justify-center gap-[10px] bg-black border border-black rounded-[12px] py-2 hover:bg-gray-900 transition-colors h-[54px] w-[170px] no-underline">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-[22px] h-[22px]" data-aos="fade-in" data-aos-delay="100" />
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[10px] leading-[12px] text-gray-200 font-medium tracking-wide uppercase font-sans">GET IT ON</span>
                                <span className="text-[18px] leading-[20px] text-white font-semibold tracking-wide font-sans">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Image Section (Right Column) */}
                {!hideImage && (
                    <div className="absolute right-0 top-0 bottom-0 h-full w-[50%] min-[1050px]:w-[55%] hidden md:block pointer-events-none">
                        <img
                            src="/images/gosirat-parent-app-mockup.webp"
                            alt="Parent using GoSirat App"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default AppDownload;
