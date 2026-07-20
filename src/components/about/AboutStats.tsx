import React from 'react';

export const AboutStats = () => {
 return (
  <section className="self-stretch bg-[#176938] flex flex-col items-center py-10 px-[60px] text-left text-6xl text-white font-[Inter] mq450:px-4 mq450:box-border" data-aos="fade-in">
   <div className="w-full max-w-[1200px] grid grid-cols-4 mq825:grid-cols-2 mq450:grid-cols-2 gap-8 mq450:gap-6">
    <div className="flex flex-col items-center text-center">
     <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq450:text-[40px] mq450:leading-[48px]">
      10+
     </h2>
     <div className="pt-2 text-[15px] font-medium leading-5 opacity-90">
      Partner schools
     </div>
    </div>
    <div className="flex flex-col items-center text-center">
     <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq450:text-[40px] mq450:leading-[48px]">
      250
     </h2>
     <div className="pt-2 text-[15px] font-medium leading-5 opacity-90">
      Professional drivers
     </div>
    </div>
    <div className="flex flex-col items-center text-center">
     <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq450:text-[40px] mq450:leading-[48px]">
      1K+
     </h2>
     <div className="pt-2 text-[15px] font-medium leading-5 opacity-90">
      Active families
     </div>
    </div>
    <div className="flex flex-col items-center text-center">
     <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq450:text-[40px] mq450:leading-[48px]">
      10K+
     </h2>
     <div className="pt-2 text-[15px] font-medium leading-5 opacity-90">
      Safe trips
     </div>
    </div>
   </div>
  </section>
 );
};
