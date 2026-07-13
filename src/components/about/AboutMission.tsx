import React from 'react';

export const AboutMission = () => {
 return (
  <main className="self-stretch flex flex-col items-start w-full overflow-hidden" data-aos="fade-out">
   <section className="self-stretch bg-white flex flex-col items-center py-[60px] px-4 box-border gap-2.5 text-center text-5xl text-[#101010] font-[Inter]">
    <div className="flex flex-col items-center gap-2.5 w-full max-w-[1064px]">
     <div className="relative leading-[48px] capitalize font-semibold mq450:text-[38px] mq450:leading-[38px] mq450:text-[29px] mq450:leading-[29px]">
      The old way doesn't work anymore.
     </div>
     <div className="w-full relative text-lg leading-[29.3px] text-[#6b6b6b] inline-block">
      For years, school transportation has operated with limited
      visibility, fragmented communication, and little accountability.
      Parents wait for updates, schools struggle to track movement, and
      drivers work without a connected system.
     </div>
    </div>
    <div className="flex items-center justify-center pt-3 px-0 pb-0 text-4xl text-[#6b6b6b] w-full max-w-[1064px]">
     <div className="w-full relative capitalize font-semibold inline-block shrink-0 mq450:text-[29px] mq450:text-[22px]">
      GoSirat was built to change that.
     </div>
    </div>
   </section>
   <div className="self-stretch min-h-[411px] h-auto bg-white flex items-stretch justify-between flex-wrap content-start gap-0 [row-gap:20px] mq1125:h-auto mq1125:gap-0">
    <section className="self-stretch flex-1 bg-[#fffee9] flex flex-col items-center justify-center py-10 px-4 md:py-6 md:px-[60px] box-border min-w-full md:min-w-[468px] text-left text-xs text-[#0d4a22] font-[Inter]">
     <div className="w-full max-w-[588.3px] flex flex-col">
      <div className="self-stretch flex items-start pt-[1.7px] px-0 pb-3 box-border">
       <div className="h-[25.3px] rounded-[22369600px] bg-[#d9f3dd] border-[rgba(43,114,65,0.2)] border-solid border-[0.7px] box-border flex items-center py-[3px] px-3 gap-2" data-aos="fade-in" data-aos-delay="100">
        <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#2b7241]" />
        <div className="relative tracking-[0.6px] leading-4 uppercase font-semibold">
         Our story
        </div>
       </div>
      </div>
      <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-4xl text-[#121e17]">
       <h2 className="m-0 relative text-[length:inherit] tracking-[-0.9px] leading-[1.2] font-bold font-[inherit] mq450:text-[29px] mq450:leading-8 mq450:text-[22px] mq450:leading-6">
        The problem we saw.
       </h2>
      </div>
      <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[#57605b]">
       <div className="w-full relative leading-[26px] inline-block">
        School transportation was an unsolved corner of family life:
        untracked vehicles, unverified drivers, no visibility for
        parents, and no real partnership with schools. We watched our
        own friends and family worry every morning — and we decided the
        technology to fix it already existed.
       </div>
      </div>
     </div>
    </section>
    <section className="self-stretch flex-1 flex flex-col items-center justify-center py-10 px-4 md:py-6 md:px-[60px] box-border min-w-full md:min-w-[468px] text-left text-xs text-[#0d4a22] font-[Inter]">
     <div className="w-full max-w-[588.3px] flex flex-col">
      <div className="self-stretch flex items-start pt-[1.7px] px-0 pb-3 box-border">
       <div className="h-[25.3px] rounded-[22369600px] bg-[#d9f3dd] border-[rgba(43,114,65,0.2)] border-solid border-[0.7px] box-border flex items-center py-[3px] px-3 gap-[7px]" data-aos="fade-in" data-aos-delay="200">
        <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#2b7241]" />
        <div className="relative tracking-[0.6px] leading-4 uppercase font-semibold">
         Why we built GoSirat
        </div>
       </div>
      </div>
      <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-4xl text-[#121e17]">
       <h2 className="m-0 relative text-[length:inherit] tracking-[-0.9px] leading-[1.2] font-bold font-[inherit] mq450:text-[29px] mq450:leading-8 mq450:text-[22px] mq450:leading-6">
        Three audiences, one trust loop.
       </h2>
      </div>
      <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[#57605b]">
       <div className="w-full relative leading-[26px] inline-block">
        Parents need visibility. Drivers need stability and respect.
        Schools need operational control. When all three are connected
        by one verified system, trust compounds — and the school day
        starts and ends calmly.
       </div>
      </div>
     </div>
    </section>
   </div>
  </main>
 );
};
