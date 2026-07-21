import Image from "next/image";
import Link from "next/link";

export const DriverHero = () => {
 return (
  <section className="self-stretch overflow-hidden flex flex-col items-start pt-10 px-0 pb-5 box-border max-w-full mq450:pt-[26px] mq450:box-border">
   <div className="self-stretch flex items-center justify-between pt-0 px-[60px] pb-10 box-border gap-10 max-w-full flex-wrap mq825:px-[30px] mq450:px-4 mq450:pb-[52px]">
    <section className="flex flex-col items-start py-5 px-0 box-border max-w-full text-left text-xs text-gosirat-green font-sans flex-1 min-w-[300px] mq1050:min-w-full mq1050:items-center mq1050:text-center">
     <div className="w-full max-w-[657px] flex flex-col items-start gap-6 mq1050:items-center">
      <div className="w-full max-w-[706px] flex flex-col items-start shrink-0 mq1050:items-center">
       <div className="h-[29.3px] flex items-start justify-start mq1050:justify-center">
        <div className="self-stretch rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
         <div className="h-[6px] w-[6px] relative rounded-full bg-gosirat-green" />
         <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">
          Driver App
         </div>
        </div>
       </div>
       <div className="self-stretch flex flex-col items-start justify-center pt-7 px-0 pb-4 gap-4 text-left text-6xl text-gosirat-black mq1050:items-center mq1050:text-center mq750:text-5xl mq450:text-4xl">
        <div className="self-stretch flex flex-col items-start justify-center mq1050:items-center">
         <h1 className="m-0 self-stretch relative font-sans font-semibold text-[64px] leading-[100%] tracking-normal text-left text-gosirat-black mq1050:text-center mq825:text-[51px] mq825:leading-[59px] mq450:text-[38px] mq450:leading-[44px]">
          Driver App for Safe School Transportation
         </h1>
        </div>
        <h3 className="m-0 self-stretch relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-left text-gosirat-gray mq1050:text-center mq450:text-base mq450:leading-[26px] mt-4 max-w-[800px]">
         Join the GoSirat Driver App and become part of a trusted school transportation network. Manage assigned routes, verify student pick-up and drop-off with QR verification, navigate efficiently, and earn with confidence through a safe, reliable, and transparent platform.
        </h3>
       </div>
      </div>
      <div className="flex items-center justify-start mq1050:justify-center gap-4 shrink-0 flex-wrap w-full">
       <Link href="/register" className="cursor-pointer [border:none] py-5 px-6 bg-gradient-to-r from-gosirat-green to-[#2ecc71] rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 mq450:w-full no-underline">
        <div className="relative text-xl leading-5 font-medium font-sans text-gosirat-bg-light text-center">
         Become a Driver
        </div>
        <svg className="h-4 w-4 relative text-gosirat-bg-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
        </svg>
       </Link>
       <Link href="/register" className="cursor-pointer border-[rgba(0,0,0,0.2)] border-solid border-[1px] py-5 px-[23px] bg-base-white rounded-2xl flex items-center justify-center hover:bg-[#e6e6e6] hover:border-[rgba(51,51,51,0.2)] hover:border-solid hover:hover:border-[1px] hover:box-border mq450:w-full no-underline">
        <div className="relative text-xl leading-5 font-medium font-sans text-gosirat-black text-center">
         Download the Driver App
        </div>
       </Link>
      </div>
     </div>
    </section>
    <section className="h-[480px] mq825:h-[450px] mq450:h-[350px] flex-1 flex items-start justify-center relative isolate min-w-[300px] max-w-full mq1050:min-w-full">
     <Image
      className="w-full max-w-[350px] h-auto object-contain shrink-0"
      loading="lazy"
      width={350}
      height={727}
      sizes="100vw"
      title="GoSirat Driver App for School Transportation"
      alt="GoSirat Driver App showing route management, QR verification, navigation, and student pickup for safe school transportation."
      src="/images/gosirat-driver-app-hero.webp"
     data-aos="zoom-in" data-aos-delay="100" />
    </section>
   </div>
  </section>
 );
};
