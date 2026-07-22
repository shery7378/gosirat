import type { NextPage } from "next";
import Image from "@/components/CustomImage";

const CTASection: NextPage = () => {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-gosirat-green to-[#022913] flex flex-col items-center py-20 px-[60px] text-left font-['Inter',_sans-serif] mq450:py-12 mq450:px-6 z-10" data-aos="fade-in">
      <div className="w-full max-w-full flex flex-col items-start relative z-10">
        <div className="flex flex-col items-start gap-4 mb-10 max-w-[1000px]">
          <h2 className="m-0 self-stretch relative font-sans font-bold text-[48px] leading-tight tracking-[-1.5px] text-left text-white mq825:text-[38px] mq450:text-[32px]">
            Why Parents Choose GoSirat for Safe School Transportation
          </h2>
          <div className="w-full relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-left text-[#a3b8ad]">
            GoSirat is trusted by parents because we combine safe school transportation, verified drivers, live GPS tracking, QR verification, and real-time notifications into one smart platform. Every feature is designed to provide a safer, more reliable, and stress-free school journey for children and complete peace of mind for families.
          </div>
        </div>

        <div className="w-full bg-[#ffffff15] rounded-[24px] p-12 grid grid-cols-4 gap-10 mq1050:grid-cols-2 mq750:grid-cols-1 border border-[#ffffff10] backdrop-blur-sm">
          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3b8ad] mb-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            <h3 className="m-0 text-[18px] xl:text-[22px] lg:text-[20px] font-bold text-white tracking-tight leading-tight mb-3 whitespace-nowrap">
              100% Verified Drivers
            </h3>
            <div className="text-[15px] leading-[24px] text-[#cbd5e1] font-normal min-h-[72px]">
              Every GoSirat driver passes strict identity verification, background checks, and safety screening.
            </div>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3b8ad] mb-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <h3 className="m-0 text-[18px] xl:text-[22px] lg:text-[20px] font-bold text-white tracking-tight leading-tight mb-3 whitespace-nowrap">
              &lt;30s Fast Notifications
            </h3>
            <div className="text-[15px] leading-[24px] text-[#cbd5e1] font-normal min-h-[72px]">
              Parents receive instant pickup, journey, and drop-off notifications through the GoSirat Parent App.
            </div>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3b8ad] mb-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <h3 className="m-0 text-[18px] xl:text-[22px] lg:text-[20px] font-bold text-white tracking-tight leading-tight mb-3 whitespace-nowrap">
              24/7 Live GPS Tracking
            </h3>
            <div className="text-[15px] leading-[24px] text-[#cbd5e1] font-normal min-h-[72px]">
              Track every active school ride in real time with accurate GPS location updates and estimated arrival times.
            </div>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3b8ad] mb-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <h3 className="m-0 text-[18px] xl:text-[22px] lg:text-[20px] font-bold text-white tracking-tight leading-tight mb-3 whitespace-nowrap">
              4.9/5 Parent Satisfaction
            </h3>
            <div className="text-[15px] leading-[24px] text-[#cbd5e1] font-normal min-h-[72px]">
              Families trust GoSirat for providing safe, reliable, and completely transparent school transportation services.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
