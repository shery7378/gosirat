import type { NextPage } from "next";

export const SchoolsStats: NextPage = () => {
 return (
  <section className="self-stretch bg-[#176938] flex flex-col items-start py-[100px] px-[60px] box-border max-w-full text-left text-5xl text-[#f8fbf8] font-[Inter] mq825:py-[65px] mq825:px-[30px] mq825:box-border" data-aos="fade-in">
   <div className="self-stretch flex items-start justify-between gap-5 max-w-full mq1400:flex-wrap mq1400:gap-5">
    <div className="w-full max-w-[609px] flex flex-col items-start gap-4 mq825:min-w-full mq1400:flex-1">
     <div className="h-[29.33px] rounded-[22369600px] bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in">
      <div className="h-[6px] w-[6px] relative rounded-[22369600px] bg-[#2ecc71]" />
      <div className="relative font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-white">
       Why Schools Trust GoSirat
      </div>
     </div>
     <h2 className="m-0 self-stretch relative font-[Inter] font-semibold text-[48px] leading-none tracking-[-1.5px] capitalize mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
      Helping Schools Build Parent Trust Every Day
     </h2>
     <div className="self-stretch relative text-lg leading-7 text-[rgba(248,251,248,0.8)]">
      GoSirat helps schools deliver safe, transparent, and reliable school transportation with live tracking, verified drivers, and real-time parent updates—building confidence with every journey.
     </div>
    </div>
    <section className="w-full max-w-[626px] rounded-[28px] overflow-hidden shrink-0 flex items-center flex-wrap content-center gap-4 text-left text-6xl text-[#f8fbf8] font-[Inter] mq825:min-w-full mq1400:flex-1">
     <div className="flex-1 min-w-[200px] rounded-[14px] bg-[#397f55] flex flex-col items-start p-10 mq450:min-w-full" data-aos="zoom-in" data-aos-delay="100">
      <div className="self-stretch flex flex-col items-start">
       <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq825:text-5xl mq825:leading-[48px] mq450:text-4xl mq450:leading-9">
        😊 97%
       </h2>
      </div>
      <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[rgba(248,251,248,0.8)]">
       <div className="w-full relative leading-6 inline-block">
        Parent Satisfaction
       </div>
      </div>
     </div>
     <div className="flex-1 min-w-[200px] rounded-[14px] bg-[#397f55] flex flex-col items-start p-10 mq450:min-w-full" data-aos="zoom-in" data-aos-delay="200">
      <div className="self-stretch flex flex-col items-start">
       <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq825:text-5xl mq825:leading-[48px] mq450:text-4xl mq450:leading-9">
        📞 82%
       </h2>
      </div>
      <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[rgba(248,251,248,0.8)]">
       <div className="w-full relative leading-6 inline-block">
        Fewer Transportation Inquiries
       </div>
      </div>
     </div>
     <div className="flex-1 min-w-[200px] rounded-[14px] bg-[#397f55] flex flex-col items-start p-10 mq450:min-w-full" data-aos="zoom-in" data-aos-delay="300">
      <div className="self-stretch flex flex-col items-start">
       <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq825:text-5xl mq825:leading-[48px] mq450:text-4xl mq450:leading-9">
        🏫 40+
       </h2>
      </div>
      <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[rgba(248,251,248,0.8)]">
       <div className="w-full relative leading-6 inline-block">
        School Partners
       </div>
      </div>
     </div>
     <div className="flex-1 min-w-[200px] rounded-[14px] bg-[#397f55] flex flex-col items-start p-10 mq450:min-w-full" data-aos="fade-in" data-aos-delay="400">
      <div className="self-stretch flex flex-col items-start">
       <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-[60px] font-semibold font-[inherit] mq825:text-5xl mq825:leading-[48px] mq450:text-4xl mq450:leading-9">
        ⭐ 4.9
       </h2>
      </div>
      <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[rgba(248,251,248,0.8)]">
       <div className="w-full relative leading-6 inline-block">
        Average Parent Rating
       </div>
      </div>
     </div>
    </section>
   </div>
  </section>
 );
};
