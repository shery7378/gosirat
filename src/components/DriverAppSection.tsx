import type { NextPage } from "next";
import Image from "next/image";

const DriverAppSection: NextPage = () => {
 return (
  <main className="w-full max-w-[1440px] bg-[#f4f7f4] flex flex-col items-center py-20 px-8 mq450:py-12 mq450:px-4 box-border relative gap-16 mx-auto mt-8" data-aos="zoom-in">
   <section className="flex flex-col items-center gap-4 text-center z-10 relative">
    <div className="rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] flex items-center py-[5px] px-3.5 gap-1.5 mx-auto" data-aos="fade-in" data-aos-delay="100">
     <div className="h-1.5 w-1.5 rounded-full bg-[#176938]" />
     <div className="tracking-[1.68px] leading-4 uppercase font-medium text-xs text-[#176938]">
      Driver app
     </div>
    </div>
    <div className="flex flex-col items-center">
     <h2 className="m-0 text-6xl tracking-[-1.5px] leading-[1.1] capitalize font-semibold text-[#09131A] mq750:text-5xl mq450:text-4xl">
      Driver App for Safe & Smart School Transportation
     </h2>
     <div className="text-lg leading-7 text-[#57605b] max-w-[800px] mt-4">
      The GoSirat Driver App is designed to help drivers deliver safe, efficient, and reliable school transportation services. From smart route navigation and QR verification to student attendance, earnings management, and real-time support, the app simplifies daily operations so drivers can focus on providing a safe and smooth school journey for every student.
     </div>
    </div>
   </section>

   {/* Main Layout Area */}
   <div className="w-full max-w-[1200px] flex flex-col items-center justify-center relative mt-4">

    {/* Desktop Layout - 3 Column Flexbox */}
    <div className="w-full flex mq1125:hidden flex-row items-center justify-between relative z-10 gap-4">

     {/* Left Cards */}
     <div className="flex flex-col gap-10 flex-1 max-w-[330px] items-end relative z-20">
      <div className="w-full bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] translate-x-8 mt-[-60px]" data-aos="zoom-in" data-aos-delay="200">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Smart Route Navigation</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Optimized turn-by-turn navigation helps drivers follow the safest and most efficient routes while reducing travel time and improving school transportation operations.</div>
      </div>

      <div className="w-full bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] -translate-x-9" data-aos="fade-out" data-aos-delay="300">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">QR Verification</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Secure QR code verification confirms every student's identity during pickup and drop-off, ensuring safe and accurate school transportation.</div>
      </div>

      <div className="w-full bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] translate-x-6" data-aos="fade-in" data-aos-delay="400">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Safety Rewards & Incentives</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Drivers receive performance-based rewards for safe driving, punctuality, and positive parent feedback, encouraging high-quality transportation services.</div>
      </div>
     </div>

     {/* Center Phone */}
     <div className="flex-none w-[420px] relative z-10 flex justify-center translate-y-4">
      <Image
       className="w-full h-auto object-contain drop-shadow-2xl scale-[1.1]"
       width={593}
       height={590}
       sizes="100vw"
       alt="GoSirat Driver App showing route navigation, QR verification, student attendance, and school transportation management."
       title="GoSirat Driver App for School Transportation"
       src="/images/gosirat-driver-app-school-transportation.webp"
       priority
      data-aos="fade-in" data-aos-delay="100" />
     </div>

     {/* Right Cards */}
     <div className="flex flex-col gap-10 flex-1 max-w-[330px] items-start relative z-20">
      <div className="w-full bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] translate-x-8 mt-[-40px]" data-aos="fade-in" data-aos-delay="500">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Student Manifest</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Access a complete student list with pickup and drop-off locations, photos, attendance records, and verification status for every journey.</div>
      </div>

      <div className="w-full bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] -translate-x-8" data-aos="fade-in" data-aos-delay="600">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Earnings Dashboard</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">View daily, weekly, and monthly earnings with transparent payment records and detailed trip summaries.</div>
      </div>

      <div className="w-full bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] translate-x-4" data-aos="fade-in" data-aos-delay="100">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Availability & Support</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Update your driving schedule, manage availability, and contact the GoSirat support team whenever assistance is needed.</div>
      </div>
     </div>
    </div>

    {/* Mobile/Tablet Layout */}
    <div className="hidden mq1125:flex flex-col items-center gap-12 w-full">
     <Image
      className="w-full max-w-[320px] h-auto object-contain drop-shadow-xl"
      width={320}
      height={318}
      sizes="100vw"
      alt="GoSirat Driver App showing route navigation, QR verification, student attendance, and school transportation management."
      title="GoSirat Driver App for School Transportation"
      src="/images/gosirat-driver-app-school-transportation.webp"
     data-aos="zoom-in" data-aos-delay="200" />
     <div className="grid grid-cols-2 gap-6 w-full max-w-[800px] mq750:grid-cols-1">
      <div className="bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] flex flex-col h-full" data-aos="zoom-in" data-aos-delay="200">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Smart Route Navigation</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Optimized turn-by-turn navigation helps drivers follow the safest and most efficient routes while reducing travel time and improving school transportation operations.</div>
      </div>
      <div className="bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] flex flex-col h-full" data-aos="fade-in" data-aos-delay="300">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">QR Verification</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Secure QR code verification confirms every student's identity during pickup and drop-off, ensuring safe and accurate school transportation.</div>
      </div>
      <div className="bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] flex flex-col h-full" data-aos="zoom-in" data-aos-delay="400">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Student Manifest</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Access a complete student list with pickup and drop-off locations, photos, attendance records, and verification status for every journey.</div>
      </div>
      <div className="bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] flex flex-col h-full" data-aos="fade-in" data-aos-delay="500">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Earnings Dashboard</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">View daily, weekly, and monthly earnings with transparent payment records and detailed trip summaries.</div>
      </div>
      <div className="bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] flex flex-col h-full" data-aos="zoom-in" data-aos-delay="600">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Safety Rewards & Incentives</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Drivers receive performance-based rewards for safe driving, punctuality, and positive parent feedback, encouraging high-quality transportation services.</div>
      </div>
      <div className="bg-white shadow-[0px_16px_40px_rgba(16,_24,_16,_0.04)] rounded-[24px] p-[26px] flex flex-col h-full" data-aos="zoom-in" data-aos-delay="100">
       <div className="tracking-[-0.45px] leading-7 font-semibold text-[#09131A] text-[17px]">Availability & Support</div>
       <div className="text-[14px] leading-6 text-[#57605b] mt-1.5">Update your driving schedule, manage availability, and contact the GoSirat support team whenever assistance is needed.</div>
      </div>
     </div>
    </div>

   </div>

   <button className="mt-8 cursor-pointer border-none py-4 px-6 bg-gradient-to-r from-[#176938] to-[#2ecc71] rounded-[100px] flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 z-20">
    <div className="text-[17px] leading-5 font-semibold font-[Inter] text-[#f8fbf8]">
     Explore Driver App
    </div>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#f8fbf8]">
     <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
   </button>
  </main>
 );
};

export default DriverAppSection;
