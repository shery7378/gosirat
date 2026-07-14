import type { NextPage } from "next";
import Image from "next/image";

const CTASection: NextPage = () => {
  return (
    <section className="self-stretch bg-[linear-gradient(#176938,#022913)] flex flex-col items-start py-[100px] px-[60px] text-left text-6xl text-[#f8fbf8] font-[Inter] mq450:py-[65px] mq450:px-[30px] mq450:box-border" data-aos="zoom-in">
      <div className="self-stretch flex flex-col items-start">
        <div className="self-stretch flex flex-col items-start gap-4">
          <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-1.5px] leading-[63px] capitalize font-semibold font-[inherit] mq450:text-4xl mq450:leading-[38px] mq450:text-5xl mq450:leading-[50px]">
            Why Parents Choose GoSirat for Safe School Transportation
          </h2>
          <div className="relative text-lg leading-7 text-[rgba(248,251,248,0.8)] max-w-[1000px]">
            GoSirat is trusted by parents because we combine safe school transportation, verified drivers, live GPS tracking, QR verification, and real-time notifications into one smart platform. Every feature is designed to provide a safer, more reliable, and stress-free school journey for children and complete peace of mind for families.
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start pt-10 px-0 pb-0 text-left text-6xl text-[#f8fbf8] font-[Inter]">
          <div className="self-stretch rounded-[28px] bg-[#2f6244] overflow-hidden flex items-start justify-between flex-wrap content-start gap-5 p-10" data-aos="zoom-in" data-aos-delay="100">
            <div className="flex-1 min-w-[250px] flex flex-col items-start gap-3">
              <h2 className="m-0 relative text-[32px] text-[#f8fbf8] tracking-[-1px] leading-[1.2] font-semibold font-[Inter]">
                🛡️ 100% Verified Drivers
              </h2>
              <div className="w-full relative font-[Inter] font-normal text-[15px] leading-[24px] text-[rgba(248,251,248,0.8)]">
                Every GoSirat driver completes identity verification, background checks, and safety screening before transporting students.
              </div>
            </div>
            <div className="flex-1 min-w-[250px] flex flex-col items-start gap-3">
              <h2 className="m-0 relative text-[32px] text-[#f8fbf8] tracking-[-1px] leading-[1.2] font-semibold font-[Inter]">
                ⚡ &lt;30 Seconds Fast Parent Notifications
              </h2>
              <div className="w-full relative font-[Inter] font-normal text-[15px] leading-[24px] text-[rgba(248,251,248,0.8)]">
                Parents receive instant pickup, journey, arrival, and drop-off notifications through the GoSirat Parent App.
              </div>
            </div>
            <div className="flex-1 min-w-[250px] flex flex-col items-start gap-3">
              <h2 className="m-0 relative text-[32px] text-[#f8fbf8] tracking-[-1px] leading-[1.2] font-semibold font-[Inter]">
                🌱 24/7 Live GPS Tracking
              </h2>
              <div className="w-full relative font-[Inter] font-normal text-[15px] leading-[24px] text-[rgba(248,251,248,0.8)]">
                Track every active school ride in real time with accurate GPS location updates and estimated arrival times.
              </div>
            </div>
            <div className="flex-1 min-w-[250px] flex flex-col items-start gap-3">
              <h2 className="m-0 relative text-[32px] text-[#f8fbf8] tracking-[-1px] leading-[1.2] font-semibold font-[Inter]">
                ⭐ 4.9/5 Parent Satisfaction
              </h2>
              <div className="w-full relative font-[Inter] font-normal text-[15px] leading-[24px] text-[rgba(248,251,248,0.8)]">
                Families trust GoSirat for providing safe, reliable, and transparent school transportation services.
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CTASection;
