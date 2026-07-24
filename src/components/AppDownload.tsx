import type { NextPage } from "next";
import Image from "@/components/CustomImage";
import Link from "next/link";
import { Container } from "./Container";

interface AppDownloadProps {
    hideImage?: boolean;
    label?: string;
    heading?: React.ReactNode;
    description?: React.ReactNode;
    primaryCtaText?: string;
    primaryCtaLink?: string;
}

const AppDownload: React.FC<AppDownloadProps> = ({
    hideImage,
    label = "Download",
    heading = (
        <>
            Start Your Safe School<br />
            Transportation Journey Today
        </>
    ),
    description = (
        <>
            Experience smart and reliable school transportation. GoSirat<br className="hidden md:block" />
            offers live GPS tracking, verified drivers, and real-time notifications<br className="hidden md:block" />
            to ensure every journey is secure from pick-up to drop-off.
        </>
    ),
    primaryCtaText = "Register Now",
    primaryCtaLink = "/register"
}) => {
    return (
        <section className="w-full flex flex-col items-center py-16 px-[60px] box-border mq725:px-[30px] mq450:py-10 mq450:px-4 mx-auto" data-aos="zoom-in">
            <div className="w-full rounded-[24px] md:rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center justify-between relative box-border min-h-0 md:min-h-[464px] bg-[linear-gradient(179.47deg,#176938_0.48%,#022913_98.43%)]">

                {/* Text Section (Left Column) */}
                <div className="flex flex-col gap-6 z-10 relative w-full min-[1050px]:w-[55%] xl:w-[50%] items-start text-left py-12 px-6 sm:px-8 md:py-24 md:px-12 min-[1050px]:pl-16 min-[1050px]:pr-4">
                    <div className="flex flex-col gap-4 w-full items-start">
                        <div className="inline-flex rounded-[30px] bg-white/20 items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
                            <div className="h-[6px] w-[6px] relative rounded-full bg-gray-300" />
                            <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-white">
                                {label}
                            </div>
                        </div>

                        <h2 className="m-0 mt-6 self-stretch relative font-sans font-bold text-[28px] min-[1150px]:text-[32px] leading-[1.15] tracking-[-1.5px] text-left text-white mq825:text-[24px] mq825:leading-[32px] mq450:text-[22px] mq450:leading-[1.2] break-words max-w-full">
                            {heading}
                        </h2>

                        <div className="w-full relative font-sans font-normal text-[15px] leading-[23px] tracking-[0px] text-left text-[#F8FBF8]/80 max-w-full mt-4">
                            {description}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-8 flex-wrap w-full justify-start mt-6">
                        {/* App Store Button */}
                        <a href="#" className="flex items-center justify-center gap-[8px] sm:gap-[10px] bg-black border border-black rounded-[12px] py-2 hover:bg-gray-900 transition-colors h-[48px] sm:h-[54px] w-[130px] sm:w-[170px] no-underline">
                            <svg viewBox="0 0 384 512" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-white" fill="currentColor">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[9px] sm:text-[10px] leading-[10px] sm:leading-[12px] text-gray-200 font-medium font-sans">Download on the</span>
                                <span className="text-[15px] sm:text-[18px] leading-[16px] sm:leading-[20px] text-white font-semibold tracking-wide font-sans">App Store</span>
                            </div>
                        </a>

                        {/* Google Play Button */}
                        <a href="#" className="flex items-center justify-center gap-[8px] sm:gap-[10px] bg-black border border-black rounded-[12px] py-2 hover:bg-gray-900 transition-colors h-[48px] sm:h-[54px] w-[130px] sm:w-[170px] no-underline">
                            <img src="/images/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" data-aos="fade-in" data-aos-delay="100" />
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[9px] sm:text-[10px] leading-[10px] sm:leading-[12px] text-gray-200 font-medium tracking-wide uppercase font-sans">GET IT ON</span>
                                <span className="text-[15px] sm:text-[18px] leading-[16px] sm:leading-[20px] text-white font-semibold tracking-wide font-sans">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Image Section (Right Column) */}
                {!hideImage && (
                    <div className="absolute inset-0 w-full h-full hidden min-[1050px]:block pointer-events-none">
                        <img
                            src="/images/gosirat-parent-app-mockup.webp"
                            alt="Parent using GoSirat App"
                            className="absolute md:left-[65%] min-[1050px]:left-[55%] xl:left-[728px] top-[-131px] w-[966px] h-[969px] max-w-none object-cover"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default AppDownload;
