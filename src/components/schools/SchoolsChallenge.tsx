import type { NextPage } from "next";

export const SchoolsChallenge: NextPage = () => {
 return (
  <section className="self-stretch bg-[#0c140f] flex flex-col items-center py-[100px] px-[60px] text-center text-xs text-[rgba(244,247,244,0.8)] font-[Inter] mq825:pl-[30px] mq825:pr-[30px] mq825:box-border mq450:pt-[65px] mq450:pb-[65px] mq450:box-border" data-aos="fade-in">
   <div className="self-stretch flex flex-col items-center justify-center w-full">
    <div className="w-full max-w-[833px] flex flex-col items-center text-center">
     <div className="self-stretch h-[29.3px] flex items-center justify-center">
      <div className="h-[29.3px] rounded-[22369600px] bg-[rgba(244,247,244,0.05)] border-[rgba(244,247,244,0.2)] border-solid border-[0.7px] box-border flex items-center py-[5px] px-3.5 gap-2" data-aos="fade-out" data-aos-delay="100">
       <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[rgba(244,247,244,0.8)]" />
       <div className="relative tracking-[1.68px] leading-4 uppercase font-medium inline-block shrink-0">
        The School Transportation Challenge
       </div>
      </div>
     </div>
     <h2 className="m-0 mt-6 self-stretch relative text-5xl tracking-[-1.5px] leading-[60px] capitalize font-semibold text-[#f4f7f4] mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
      School Transportation Shouldn't Be a Daily Challenge
     </h2>
     <div className="flex flex-col items-center justify-center pt-[19.7px] px-0 pb-[0.3px] text-lg text-[rgba(244,247,244,0.7)] w-full">
      <div className="w-full relative leading-7 inline-block text-center mx-auto max-w-[800px]">
       Managing school transportation is challenging. Late buses, missed pick-ups, and limited visibility can impact student safety, parent trust, and daily school operations. GoSirat helps schools simplify transportation management with smart technology and real-time updates.
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};
