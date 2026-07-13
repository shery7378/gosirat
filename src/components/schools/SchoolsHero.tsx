import type { NextPage } from "next";
import Image from "next/image";

export const SchoolsHero: NextPage = () => {
 return (
  <section className="self-stretch overflow-hidden flex flex-col items-start pt-10 px-0 pb-5 text-left text-xl text-[#F7F9F6] font-[Inter] mq825:pt-[52px] mq825:box-border" data-aos="fade-in">
   <div className="self-stretch flex items-start justify-center pt-0 px-[60px] pb-10 mq1125:pl-[30px] mq1125:pr-[30px] mq1125:box-border mq450:pb-[52px] mq450:box-border">
    <div className="w-full max-w-[924px] flex flex-col items-center gap-5">
     <section className="self-stretch flex flex-col items-center text-center text-xs text-[#176938] font-[Inter]">
      <div className="w-full flex flex-col items-center max-w-full">
       <div className="h-[29.3px] flex items-start justify-center">
        <div className="self-stretch rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] flex items-center py-[5px] px-3.5 gap-1.5" data-aos="zoom-in" data-aos-delay="100">
         <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
         <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
          For modern families
         </div>
        </div>
       </div>
       <div className="self-stretch flex flex-col items-center pt-7 px-0 pb-0 text-6xl text-[#0c140f] mq750:text-5xl mq450:text-4xl">
        <h1 className="m-0 self-stretch relative text-[length:inherit] capitalize font-semibold font-[inherit] mq825:text-[51px] mq450:text-[38px] mq750:text-center leading-[68px]">
         Safe school transportation
        </h1>
        <div className="self-stretch relative text-lg leading-[28px] text-[#57605b] mq450:text-base mq450:leading-[26px] mq750:text-center mt-4">
         Verified drivers, live tracking, secure handover and
         real-time updates — every school ride engineered around your
         child's safety.
        </div>
       </div>
      </div>
     </section>
     <div className="flex items-center">
      <div className="rounded-2xl bg-gradient-to-r from-[#176938] to-[#2ecc71] flex items-center py-5 px-6 gap-[7px] cursor-pointer hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300" data-aos="zoom-in" data-aos-delay="200">
       <h3 className="m-0 relative text-[length:inherit] leading-5 font-medium font-[inherit] text-white">
        Register Your School
       </h3>
       <svg
         width="16"
         height="16"
         viewBox="0 0 24 24"
         fill="none"
         stroke="#F7F9F6"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
        >
         <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
     </div>
     <div className="flex flex-col items-center justify-center text-center text-sm text-[#57605b] w-full">
      <div className="w-full max-w-[600px] flex flex-wrap justify-center items-center gap-[28.1px] h-auto mx-auto">
       <div className="flex items-center gap-[7px]">
        <Image
         className="h-4 w-4 relative"
         width={16}
         height={16}
         sizes="100vw"
         alt=""
         src="/Icon.svg"
        data-aos="fade-in" data-aos-delay="100" />
        <div className="relative leading-5 font-medium">
         Verified Drivers
        </div>
       </div>
       <div className="flex items-center gap-[7px]">
        <Image
         className="h-4 w-4 relative"
         width={16}
         height={16}
         sizes="100vw"
         alt=""
         src="/Icon.svg"
        data-aos="zoom-in" data-aos-delay="200" />
        <div className="relative leading-5 font-medium">
         Live Tracking
        </div>
       </div>
       <div className="flex items-center gap-2">
        <Image
         className="h-4 w-4 relative"
         width={16}
         height={16}
         sizes="100vw"
         alt=""
         src="/Icon.svg"
        data-aos="fade-out" data-aos-delay="300" />
        <div className="relative leading-5 font-medium">
         Secure Handover
        </div>
       </div>
       <div className="flex items-center gap-2">
        <Image
         className="h-4 w-4 relative"
         width={16}
         height={16}
         sizes="100vw"
         alt=""
         src="/Icon.svg"
        data-aos="fade-out" data-aos-delay="400" />
        <div className="relative leading-5 font-medium">
         Eco-Friendly
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};
