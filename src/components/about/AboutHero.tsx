import React from 'react';

export const AboutHero = () => {
 return (
  <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[139px] px-0 text-center text-xs text-[#176938] font-[Inter] mq450:pt-[90px] mq450:pb-[90px] mq450:box-border" data-aos="zoom-in">
   <div className="w-full min-h-[364px] h-auto flex items-start justify-center pt-0 px-[60px] pb-20 box-border max-w-full mq450:px-4 mq450:pb-[52px]">
    <div className="w-full max-w-[1086px] flex flex-col items-center gap-5">
     <div className="h-[29.3px] flex items-start justify-center">
      <div className="self-stretch rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] flex items-center py-[5px] px-3.5 gap-1.5" data-aos="fade-in" data-aos-delay="100">
       <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
       <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
        About GoSirat
       </div>
      </div>
     </div>
     <div className="self-stretch flex flex-col items-center pt-4 px-0 pb-0 text-[64px] text-[#0c140f] gap-4">
      <h1 className="m-0 self-stretch relative text-[length:inherit] capitalize font-semibold font-[inherit] mq450:text-[38px] leading-[1.2]">
       Building Safer School Transportation for Every Family
      </h1>
      <p className="m-0 self-stretch relative text-xl leading-[32.5px] text-[#57605b] mq450:text-base mq450:leading-[26px]">
       GoSirat was created to make school transportation safer, smarter, and more transparent for parents, schools, and drivers. Our platform combines verified drivers, live GPS tracking, secure QR verification, and real-time updates to give families complete confidence in every school journey.
      </p>
     </div>
    </div>
   </div>
  </section>
 );
};
