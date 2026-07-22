import type { NextPage } from "next";
import Image from "@/components/CustomImage";

export const SchoolsPartners: NextPage = () => {
 return (
  <section className="self-stretch bg-white overflow-hidden flex flex-col items-center pt-10 px-12 pb-0 box-border gap-6 max-w-full mq825:pl-6 mq825:pr-6 mq825:box-border mq450:px-4" data-aos="fade-in">
   <section className="self-stretch overflow-hidden flex items-center justify-between gap-10 max-w-full shrink-0 text-left text-xs text-gosirat-green font-sans mq1400:flex-wrap mq1400:gap-10">
    <div className="h-auto w-full max-w-[700px] flex flex-col items-start mq1125:min-w-full mq1400:flex-1">
      <div className="self-stretch h-[29.3px] flex items-start">
       <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
        <div className="h-[6px] w-[6px] relative rounded-full bg-gosirat-green" />
        <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">
         School Partners
        </div>
       </div>
      </div>
      <div className="w-full max-w-[584.3px] flex flex-col items-start pt-6 px-0 pb-0 box-border text-5xl text-gosirat-black">
       <h2 className="m-0 w-full relative font-sans font-semibold text-[48px] leading-none tracking-[-1.5px] capitalize text-gosirat-black mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
        Our Trusted School Partners
       </h2>
      </div>
      <div className="self-stretch flex flex-col items-start pt-[19.7px] px-0 pb-[0.3px] text-lg text-gosirat-gray">
        <div className="self-stretch relative leading-7">
         Every GoSirat route replaces multiple individual commutes — quieter streets near schools, less traffic, and a meaningful reduction in emissions every single day.
        </div>
      </div>
    </div>
    <div className="flex-1 w-full flex items-center justify-center relative isolate max-w-full mq825:min-w-full mq1400:flex-1 mq1125:mx-auto">
     <div className="w-full max-w-[675px] h-[328px] rounded-[28px] bg-white shadow-[0px_24px_60px_0px_rgba(16,24,16,0.10),0px_2px_4px_0px_rgba(16,24,16,0.05)] overflow-hidden flex items-start justify-center">
      <Image
       className="w-full h-auto object-contain shrink-0"
       width={630}
       height={511}
       sizes="100vw"
       title="GoSirat Trusted School Partners"
       alt="Schools partnering with GoSirat for safe school transportation, verified drivers, live GPS tracking, and student transportation management."
       src="/images/gosirat-school-partners.webp"
       data-aos="fade-out" data-aos-delay="100" />
     </div>
    </div>
   </section>
   {/* 
   <div className="w-full max-w-[1434px] flex flex-col items-center py-5 px-[60px] box-border gap-10 shrink-0 mq825:gap-5 mq825:pl-[30px] mq825:pr-[30px] mq825:box-border">
    <div className="self-stretch flex items-center justify-center py-5 px-0 gap-[100px] opacity-[0.8] mq825:gap-[30px] flex-wrap mq450:gap-[20px]">
     <Image className="h-10 w-[202px] relative shrink-0" width={202} height={40} alt="Logo" src="/images/logilipusm.svg" data-aos="fade-in" data-aos-delay="200" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="School partner logo" src="/images/partner-logo-1.svg" data-aos="fade-in" data-aos-delay="300" />
     <Image className="h-10 w-[164px] relative shrink-0" width={164} height={40} alt="Trusted transport partner logo" src="/images/partner-logo-2.svg" data-aos="fade-in" data-aos-delay="400" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="Educational institution partner logo" src="/images/partner-logo-3.svg" data-aos="zoom-in" data-aos-delay="500" />
     <Image className="h-10 w-[220px] relative shrink-0" width={220} height={40} alt="Safety organization partner logo" src="/images/partner-logo-4.svg" data-aos="fade-in" data-aos-delay="100" />
    </div>
    <div className="self-stretch flex items-center justify-center py-5 px-0 gap-[100px] opacity-[0.8] mq825:gap-[30px] flex-wrap mq450:gap-[20px]">
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="School partner logo" src="/images/partner-logo-1.svg" data-aos="fade-in" data-aos-delay="200" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="Educational institution partner logo" src="/images/partner-logo-3.svg" data-aos="zoom-in" data-aos-delay="300" />
     <Image className="h-10 w-[220px] relative shrink-0" width={220} height={40} alt="Safety organization partner logo" src="/images/partner-logo-4.svg" data-aos="fade-out" data-aos-delay="400" />
     <Image className="h-10 w-[164px] relative shrink-0" width={164} height={40} alt="Trusted transport partner logo" src="/images/partner-logo-2.svg" data-aos="fade-in" data-aos-delay="500" />
     <Image className="h-10 w-[202px] relative shrink-0" width={202} height={40} alt="Logo" src="/images/logilipusm.svg" data-aos="zoom-in" data-aos-delay="100" />
    </div>
    <div className="self-stretch flex items-center justify-center py-5 px-0 gap-[100px] opacity-[0.8] mq825:gap-[30px] flex-wrap mq450:gap-[20px]">
     <Image className="h-10 w-[164px] relative shrink-0" width={164} height={40} alt="Trusted transport partner logo" src="/images/partner-logo-2.svg" data-aos="fade-in" data-aos-delay="200" />
     <Image className="h-10 w-[202px] relative shrink-0" width={202} height={40} alt="Logo" src="/images/logilipusm.svg" data-aos="fade-in" data-aos-delay="300" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="School partner logo" src="/images/partner-logo-1.svg" data-aos="zoom-in" data-aos-delay="400" />
     <Image className="h-10 w-[220px] relative shrink-0" width={220} height={40} alt="Safety organization partner logo" src="/images/partner-logo-4.svg" data-aos="fade-out" data-aos-delay="500" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="Educational institution partner logo" src="/images/partner-logo-3.svg" data-aos="zoom-in" data-aos-delay="100" />
    </div>
    <div className="self-stretch flex items-center justify-center py-5 px-0 gap-[100px] opacity-[0.8] mq825:gap-[30px] flex-wrap mq450:gap-[20px]">
     <Image className="h-10 w-[202px] relative shrink-0" width={202} height={40} alt="Logo" src="/images/logilipusm.svg" data-aos="fade-in" data-aos-delay="200" />
     <Image className="h-10 w-[220px] relative shrink-0" width={220} height={40} alt="Safety organization partner logo" src="/images/partner-logo-4.svg" data-aos="fade-out" data-aos-delay="300" />
     <Image className="h-10 w-[164px] relative shrink-0" width={164} height={40} alt="Trusted transport partner logo" src="/images/partner-logo-2.svg" data-aos="zoom-in" data-aos-delay="400" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="Educational institution partner logo" src="/images/partner-logo-3.svg" data-aos="zoom-in" data-aos-delay="500" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="School partner logo" src="/images/partner-logo-1.svg" data-aos="fade-out" data-aos-delay="100" />
    </div>
   </div>
   */}
  </section>
 );
};
