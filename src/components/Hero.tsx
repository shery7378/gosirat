import type { NextPage } from "next";
import Image from "next/image";

const Hero: NextPage = () => {
  return (
    <section className="w-full border-[#176938] border-solid border-b-[6px] box-border overflow-hidden flex flex-col items-start pt-10 px-0 pb-0 mq450:pt-[34px] mq450:h-auto" data-aos="fade-out">
      <div className="self-stretch flex items-start justify-between pt-0 px-[60px] pb-0 box-border [row-gap:20px] max-w-full mq1125:flex-col mq1125:items-center mq450:pb-10 mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
        <section className="flex flex-col items-start gap-5 max-w-full text-center text-xs text-[#176938] font-[Inter] mq450:flex-1 mq450:min-w-full">
          <div className="flex flex-col items-start gap-4 mq1125:items-center">
            <div className="flex flex-col items-start mq1125:items-center">
              <div className="h-[29.3px] flex items-start justify-center">
                <div className="self-stretch rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] flex items-center py-[5px] px-3.5 gap-[5px]" data-aos="fade-out" data-aos-delay="100">
                  <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
                  <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
                    For modern families
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[795px] flex flex-col pt-7 px-0 pb-0 box-border text-left text-6xl text-[#0c140f] mq1125:text-center mq1125:items-center">
                <div className="self-stretch flex flex-col items-center">
                  <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[70px] capitalize font-semibold font-[inherit] mq750:text-5xl mq750:leading-[55px] mq450:text-[34px] mq450:leading-[44px]">
                    Safe & Smart School Transportation
                  </h1>
                  <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[70px] capitalize font-semibold font-[inherit] text-[#176938] mq750:text-5xl mq750:leading-[55px] mq450:text-[34px] mq450:leading-[44px]">
                    for modern families.
                  </h1>
                </div>
                <h3 className="m-0 self-stretch relative text-lg leading-[28px] font-normal font-[inherit] text-[#57605b] mq450:text-base mq450:leading-[26px] mt-4">
                  GoSirat provides safe school transportation and school pick and drop services designed for modern families in Islamabad and Rawalpindi. Our smart transportation platform features verified drivers, live GPS tracking, secure QR verification, real-time notifications, and safe handover to ensure every child's journey is secure. Parents enjoy complete visibility through our Parent App, while schools benefit from efficient transportation management and optimized school transport operations.
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-4 mq450:flex-wrap mt-2 mq1125:justify-center w-full justify-start">
              {/* App Store Button */}
              <a href="#" className="flex items-center justify-center gap-[10px] bg-black border border-[#444] rounded-xl py-2 hover:bg-[#1a1a1a] transition-colors h-[54px] w-[180px] no-underline">
                <svg viewBox="0 0 384 512" className="w-[24px] h-[24px] text-white" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] leading-[12px] text-gray-200 font-medium font-[Inter] uppercase">Download on the</span>
                  <span className="text-[19px] leading-[22px] text-white font-semibold tracking-wide font-[Inter]">App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a href="#" className="flex items-center justify-center gap-[10px] bg-black border border-[#444] rounded-xl py-2 hover:bg-[#1a1a1a] transition-colors h-[54px] w-[180px] no-underline">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-[24px] h-[24px]" data-aos="fade-in" data-aos-delay="100" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] leading-[12px] text-gray-200 font-medium tracking-wide uppercase font-[Inter]">Get it on</span>
                  <span className="text-[19px] leading-[22px] text-white font-semibold tracking-wide font-[Inter]">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center text-sm text-[#57605b] w-full mq1125:items-center">
            <div className="w-full max-w-[574.7px] flex flex-wrap items-start gap-[28.1px] h-auto mq1125:justify-center mt-4">
              <div className="flex items-center gap-[7px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative text-[#176938] shrink-0">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="relative leading-5 font-medium">
                  Verified Drivers
                </div>
              </div>
              <div className="flex items-center gap-[7px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative text-[#176938] shrink-0">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="relative leading-5 font-medium">
                  Live Tracking
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative text-[#176938] shrink-0">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="relative leading-5 font-medium">
                  Secure Handover
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative text-[#176938] shrink-0">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="relative leading-5 font-medium">
                  Eco-Friendly
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="min-h-[505px] w-[474px] flex flex-col items-start relative isolate mq1125:h-[350px] mq1125:w-[350px] mq1125:flex-none mq1125:mx-auto mq1125:mt-10">
          <Image
            className="w-[243px] h-[505px] absolute top-[40px] left-[0px] object-contain shrink-0 mq1125:w-[150px] mq1125:h-[310px] mq1125:left-[0px] mq1125:top-[25px]"
            width={243}
            height={505}
            sizes="100vw"
            alt="GoSirat safe school transport platform overview"
            src="/images/gosirat-home-hero-illustration.webp"
          data-aos="fade-in" data-aos-delay="200" />
          <Image
            className="w-[385px] absolute top-[170px] left-[88px] max-h-full object-contain z-[1] shrink-0 mq1125:w-[240px] mq1125:left-[55px] mq1125:top-[106px]"
            loading="lazy"
            width={385}
            height={385}
            sizes="100vw"
            alt="GoSirat safe school transportation vehicle with verified drivers providing secure school pick and drop services for students."
            src="/images/gosirat-safe-school-transportation.webp"
          data-aos="fade-out" data-aos-delay="300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
