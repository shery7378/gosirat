import type { NextPage } from "next";
import Image from "next/image";

export const SchoolsPartners: NextPage = () => {
 return (
  <section className="self-stretch bg-[#fff] overflow-hidden flex flex-col items-center pt-10 px-12 pb-0 box-border gap-6 max-w-full mq825:pl-6 mq825:pr-6 mq825:box-border" data-aos="fade-in">
   <section className="self-stretch overflow-hidden flex items-end justify-between gap-5 max-w-full shrink-0 text-left text-xs text-[#176938] font-[Inter] mq1400:flex-wrap mq1400:gap-5">
    <div className="h-auto w-full max-w-[700px] flex flex-col items-start mq1125:min-w-full mq1400:flex-1">
     <div className="self-stretch h-[29.3px] flex items-start">
      <div className="h-[29.3px] rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] box-border flex items-center py-[5px] px-3.5 gap-1.5" data-aos="fade-in" data-aos-delay="100">
       <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
       <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
        SCHOOL PARTNERS
       </div>
      </div>
     </div>
     <div className="w-full max-w-[584.3px] flex flex-col items-start pt-6 px-0 pb-0 box-border text-5xl text-[#0c140f]">
      <h2 className="m-0 w-full relative text-[length:inherit] tracking-[-1.5px] capitalize font-semibold font-[inherit] mq825:text-[38px] mq450:text-[29px]">
       Our trusted school partners
      </h2>
     </div>
     <div className="self-stretch flex flex-col items-start pt-[19.7px] px-0 pb-[0.3px] text-lg text-[#57605b]">
      <div className="self-stretch relative leading-7">
       Every GoSirat route replaces multiple individual commutes —
       quieter streets near schools, less traffic, and a meaningful
       reduction in emissions every single day.
      </div>
     </div>
    </div>
    <div className="h-[329px] w-[541px] rounded-[14px] flex items-start pt-[0.4px] px-0 pb-0 box-border relative isolate max-w-full mq825:min-w-full mq1400:flex-1 overflow-hidden mq1125:h-[220px] mq1125:w-[350px] mq1125:mx-auto">
     <Image
      className="h-[511px] w-[630px] absolute !!m-[0 important] top-[0px] left-[-112px] object-cover shrink-0 mq1125:h-[300px] mq1125:w-[370px] mq1125:left-[-10px]"
      width={630}
      height={511}
      sizes="100vw"
      alt="Mockup"
      src="/samsung-mockup.png"
     data-aos="fade-out" data-aos-delay="100" />
     <div className="ml-[-134.7px] h-[328.7px] w-[675.7px] relative shadow-[0px_2px_4px_rgba(16,_24,_16,_0.05),_0px_24px_60px_rgba(16,_24,_16,_0.1)] rounded-[28px] overflow-hidden shrink-0 z-[1] mq1125:hidden" data-aos="fade-out" data-aos-delay="200" />
    </div>
   </section>
   <div className="w-full max-w-[1434px] flex flex-col items-center py-5 px-[60px] box-border gap-10 shrink-0 mq825:gap-5 mq825:pl-[30px] mq825:pr-[30px] mq825:box-border">
    {/* Row 1 */}
    <div className="self-stretch flex items-center justify-center py-5 px-0 gap-[100px] opacity-[0.8] mq825:gap-[30px] flex-wrap mq450:gap-[20px]">
     <Image className="h-10 w-[202px] relative shrink-0" width={202} height={40} alt="Logo" src="/logilipusm.svg" data-aos="fade-in" data-aos-delay="200" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="School partner logo" src="/partner-logo-1.svg" data-aos="fade-in" data-aos-delay="300" />
     <Image className="h-10 w-[164px] relative shrink-0" width={164} height={40} alt="Trusted transport partner logo" src="/partner-logo-2.svg" data-aos="fade-in" data-aos-delay="400" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="Educational institution partner logo" src="/partner-logo-3.svg" data-aos="zoom-in" data-aos-delay="500" />
     <Image className="h-10 w-[220px] relative shrink-0" width={220} height={40} alt="Safety organization partner logo" src="/partner-logo-4.svg" data-aos="fade-in" data-aos-delay="100" />
    </div>
    {/* Row 2 */}
    <div className="self-stretch flex items-center justify-center py-5 px-0 gap-[100px] opacity-[0.8] mq825:gap-[30px] flex-wrap mq450:gap-[20px]">
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="School partner logo" src="/partner-logo-1.svg" data-aos="fade-in" data-aos-delay="200" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="Educational institution partner logo" src="/partner-logo-3.svg" data-aos="zoom-in" data-aos-delay="300" />
     <Image className="h-10 w-[220px] relative shrink-0" width={220} height={40} alt="Safety organization partner logo" src="/partner-logo-4.svg" data-aos="fade-out" data-aos-delay="400" />
     <Image className="h-10 w-[164px] relative shrink-0" width={164} height={40} alt="Trusted transport partner logo" src="/partner-logo-2.svg" data-aos="fade-in" data-aos-delay="500" />
     <Image className="h-10 w-[202px] relative shrink-0" width={202} height={40} alt="Logo" src="/logilipusm.svg" data-aos="zoom-in" data-aos-delay="100" />
    </div>
    {/* Row 3 */}
    <div className="self-stretch flex items-center justify-center py-5 px-0 gap-[100px] opacity-[0.8] mq825:gap-[30px] flex-wrap mq450:gap-[20px]">
     <Image className="h-10 w-[164px] relative shrink-0" width={164} height={40} alt="Trusted transport partner logo" src="/partner-logo-2.svg" data-aos="fade-in" data-aos-delay="200" />
     <Image className="h-10 w-[202px] relative shrink-0" width={202} height={40} alt="Logo" src="/logilipusm.svg" data-aos="fade-in" data-aos-delay="300" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="School partner logo" src="/partner-logo-1.svg" data-aos="zoom-in" data-aos-delay="400" />
     <Image className="h-10 w-[220px] relative shrink-0" width={220} height={40} alt="Safety organization partner logo" src="/partner-logo-4.svg" data-aos="fade-out" data-aos-delay="500" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="Educational institution partner logo" src="/partner-logo-3.svg" data-aos="zoom-in" data-aos-delay="100" />
    </div>
    {/* Row 4 */}
    <div className="self-stretch flex items-center justify-center py-5 px-0 gap-[100px] opacity-[0.8] mq825:gap-[30px] flex-wrap mq450:gap-[20px]">
     <Image className="h-10 w-[202px] relative shrink-0" width={202} height={40} alt="Logo" src="/logilipusm.svg" data-aos="fade-in" data-aos-delay="200" />
     <Image className="h-10 w-[220px] relative shrink-0" width={220} height={40} alt="Safety organization partner logo" src="/partner-logo-4.svg" data-aos="fade-out" data-aos-delay="300" />
     <Image className="h-10 w-[164px] relative shrink-0" width={164} height={40} alt="Trusted transport partner logo" src="/partner-logo-2.svg" data-aos="zoom-in" data-aos-delay="400" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="Educational institution partner logo" src="/partner-logo-3.svg" data-aos="zoom-in" data-aos-delay="500" />
     <Image className="h-10 w-[166px] relative shrink-0" width={166} height={40} alt="School partner logo" src="/partner-logo-1.svg" data-aos="fade-out" data-aos-delay="100" />
    </div>
   </div>
  </section>
 );
};
