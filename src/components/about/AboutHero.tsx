import React from 'react';

export const AboutHero = () => {
 return (
  <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[139px] px-0 text-center text-xs text-gosirat-green font-sans mq450:pt-[90px] mq450:pb-[90px] mq450:box-border" data-aos="zoom-in">
   <div className="w-full min-h-[364px] h-auto flex items-start justify-center pt-0 px-[60px] pb-20 box-border max-w-full mq450:px-4 mq450:pb-[52px]">
    <div className="w-full max-w-[1086px] flex flex-col items-center gap-5">
     <div className="h-[29.3px] flex items-start justify-center">
      <div className="self-stretch rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
       <div className="h-[6px] w-[6px] relative rounded-full bg-gosirat-green" />
       <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">
        About GoSirat
       </div>
      </div>
     </div>
     <div className="self-stretch flex flex-col items-center pt-4 px-0 pb-0 text-[64px] text-gosirat-black gap-4">
      <h1 className="m-0 self-stretch relative font-sans font-semibold text-[64px] leading-[100%] tracking-normal text-center text-gosirat-black mq450:text-[38px]">
       Building Safer School Transportation for Every Family
      </h1>
      <p className="m-0 self-stretch relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-center text-gosirat-gray mq450:text-base mq450:leading-[26px]">
       GoSirat was created to make school transportation safer, smarter, and more transparent for parents, schools, and drivers. Our platform combines verified drivers, live GPS tracking, secure QR verification, and real-time updates to give families complete confidence in every school journey.
      </p>
     </div>
    </div>
   </div>
  </section>
 );
};
