import React from 'react';


export const AboutVision = () => {
 return (
  <section className="self-stretch bg-[#176938] flex flex-col items-center justify-center py-[120px] px-[60px] text-center text-sm text-[#101010] font-[Manrope] mq450:gap-5 mq450:pt-[78px] mq450:pb-[78px] mq450:box-border mq1125:pl-[30px] mq1125:pr-[30px] mq1125:box-border" data-aos="fade-out">
    <div className="flex flex-col items-center gap-[29px] w-full">
     <div className="w-[122.6px] h-[37.3px] rounded-[22369600px] bg-white border-none box-border flex items-center justify-center py-[7px] px-4 gap-2 text-[#176938]" data-aos="fade-in" data-aos-delay="100">
      <div className="flex flex-col items-start pt-0.5 px-0 pb-0">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
       </svg>
      </div>
      <div className="flex items-start pt-0 pb-[0.4px] pl-px pr-0">
       <div className="h-5 w-[65px] relative leading-5 capitalize inline-block font-medium">
        Our vision
       </div>
      </div>
     </div>
     <div className="flex flex-col items-center py-0 px-0 md:px-[38px] gap-5 text-4xl text-white w-full">
      <h2 className="m-0 w-full max-w-[924px] relative text-[length:inherit] leading-[1.2] md:leading-[48px] capitalize font-semibold font-[inherit] inline-block mq450:text-[29px] mq450:leading-[38px] mq450:text-[22px] mq450:leading-[29px]">
       A world where parents never wonder where their child is on the way to school — because the answer is always one tap away.
      </h2>
      <div className="w-full relative text-lg leading-[1.6] capitalize font-medium text-white">
       That's what we're building. Child Safety over anything.
      </div>
     </div>
    </div>
  </section>
 );
};
