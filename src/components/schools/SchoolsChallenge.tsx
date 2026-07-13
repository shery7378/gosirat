import type { NextPage } from "next";

export const SchoolsChallenge: NextPage = () => {
 return (
  <section className="self-stretch bg-[#0c140f] flex flex-col items-start py-[100px] px-[60px] text-left text-xs text-[rgba(244,247,244,0.8)] font-[Inter] mq825:pl-[30px] mq825:pr-[30px] mq825:box-border mq450:pt-[65px] mq450:pb-[65px] mq450:box-border" data-aos="fade-in">
   <div className="self-stretch flex flex-col items-start">
    <div className="w-full max-w-[833px] flex flex-col items-start">
     <div className="self-stretch h-[29.3px] flex items-start">
      <div className="h-[29.3px] rounded-[22369600px] bg-[rgba(244,247,244,0.05)] border-[rgba(244,247,244,0.2)] border-solid border-[0.7px] box-border flex items-center py-[5px] px-3.5 gap-2" data-aos="fade-out" data-aos-delay="100">
       <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[rgba(244,247,244,0.8)]" />
       <div className="w-full relative tracking-[1.68px] leading-4 uppercase font-medium inline-block shrink-0">
        The school transportation challenge
       </div>
      </div>
     </div>
     <div className="self-stretch relative text-5xl tracking-[-1.5px] leading-[60px] capitalize font-semibold text-[#f4f7f4] mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
      Transportation is your reputation — and the hardest thing to
      control.
     </div>
     <div className="flex flex-col items-start pt-[19.7px] px-0 pb-[0.3px] text-lg text-[rgba(244,247,244,0.7)] w-full">
      <div className="w-full relative leading-7 inline-block">
       Late buses. Missed pickups. Anxious parents. Operations teams
       stretched thin.
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};
