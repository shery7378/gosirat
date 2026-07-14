import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

interface AppDownloadProps {
    hideImage?: boolean;
}

const AppDownload: React.FC<AppDownloadProps> = ({ hideImage }) => {
    return (
        <section className="w-full flex flex-col items-center p-16 box-border mq450:py-10 mq450:px-4 mx-auto" data-aos="zoom-in">
            <Container className="w-full rounded-[40px] bg-[#176938] overflow-hidden flex flex-col items-center text-center justify-center py-24 px-8 relative min-h-[464px] box-border">
                
                {/* Text Section */}
                <div className="flex flex-col gap-8 z-10 relative w-full max-w-4xl items-center text-center">
                    <div className="flex flex-col gap-4 w-full items-center">
                        <div className="rounded-[20px] bg-[rgba(255,255,255,0.2)] flex items-center py-1.5 px-3.5 gap-2" data-aos="fade-in" data-aos-delay="100">
                            <div className="h-1.5 w-1.5 rounded-full bg-white" />
                            <div className="tracking-[1.68px] leading-4 uppercase font-semibold text-white text-xs">
                                Download the App
                            </div>
                        </div>

                        <h2 className="m-0 text-[50px] tracking-[-1.5px] leading-[60px] capitalize font-semibold text-[#f8fbf8] mq750:text-4xl mq450:text-3xl w-full">
                            Start Your Safe School Transportation Journey Today
                        </h2>

                        <div className="text-lg leading-[28px] text-[rgba(248,251,248,0.8)] mt-2 w-full font-medium max-w-[800px]">
                            Download the GoSirat Parent App or Driver App and experience safe, smart, and reliable school transportation services. With live GPS tracking, verified drivers, QR verification, real-time notifications, and secure student pick-up and drop-off, GoSirat makes every school journey safer for parents, students, schools, and drivers.
                        </div>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap w-full justify-center mt-6">
                        <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-white rounded-[14px] h-[54px] px-7 no-underline shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300">
                            <span className="text-[17px] font-bold font-[Inter] text-[#176938] tracking-tight">
                                Register Now
                            </span>
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#176938] shadow-[0_2px_8px_rgba(23,105,56,0.4)] group-hover:bg-[#12552d] transition-colors duration-300">
                                <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                        {/* App Store Button */}
                        <a href="#" className="flex items-center justify-center gap-[10px] bg-black border border-[#444] rounded-[14px] py-2 hover:bg-[#1a1a1a] transition-colors h-[54px] w-[180px] no-underline">
                            <svg viewBox="0 0 384 512" className="w-[24px] h-[24px] text-white" fill="currentColor">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[10px] leading-[12px] text-gray-200 font-medium">Download on the</span>
                                <span className="text-[19px] leading-[22px] text-white font-semibold tracking-wide">App Store</span>
                            </div>
                        </a>

                        {/* Google Play Button */}
                        <a href="#" className="flex items-center justify-center gap-[10px] bg-black border border-[#444] rounded-[14px] py-2 hover:bg-[#1a1a1a] transition-colors h-[54px] w-[180px] no-underline">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-[24px] h-[24px]" data-aos="fade-in" data-aos-delay="100" />
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[10px] leading-[12px] text-gray-200 font-medium tracking-wide uppercase">GET IT ON</span>
                                <span className="text-[19px] leading-[22px] text-white font-semibold tracking-wide">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AppDownload;
