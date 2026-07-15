import type { NextPage } from "next";
import Image from "next/image";

const CTASection: NextPage = () => {
  return (
    <section className="w-full relative overflow-hidden bg-[#06140b] flex flex-col items-center py-[120px] px-[60px] text-left font-['Inter',_sans-serif] mq450:py-[80px] mq450:px-6 z-10" data-aos="fade-in">
      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#176938] rounded-full mix-blend-screen filter blur-[200px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#22c55e] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1200px] flex flex-col items-start relative z-10">
        <div className="flex flex-col items-start gap-6 max-w-[800px] mb-16">
          <h2 className="m-0 text-[48px] text-white tracking-tight leading-[1.1] font-bold mq450:text-[36px]">
            Why Parents Choose GoSirat for <span className="text-[#4ade80]">Safe School Transportation</span>
          </h2>
          <div className="text-[18px] leading-[32px] text-[#a3b8ad]">
            GoSirat is trusted by parents because we combine safe school transportation, verified drivers, live GPS tracking, QR verification, and real-time notifications into one smart platform. Every feature is designed to provide a safer, more reliable, and stress-free school journey for children and complete peace of mind for families.
          </div>
        </div>

        <div className="w-full grid grid-cols-4 gap-6 mq1050:grid-cols-2 mq750:grid-cols-1">
          {/* Feature 1 */}
          <div className="flex flex-col items-start p-8 rounded-[24px] bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:-translate-y-2 hover:bg-[#ffffff0a] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#176938] to-[#0a2e18] flex items-center justify-center text-[24px] shadow-lg mb-6">
              🛡️
            </div>
            <h3 className="m-0 text-[22px] font-bold text-white tracking-tight leading-[1.3] mb-4">
              100% Verified Drivers
            </h3>
            <div className="text-[15px] leading-[26px] text-[#a1a1aa]">
              Every GoSirat driver completes identity verification, background checks, and safety screening before transporting students.
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start p-8 rounded-[24px] bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:-translate-y-2 hover:bg-[#ffffff0a] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#176938] to-[#0a2e18] flex items-center justify-center text-[24px] shadow-lg mb-6">
              ⚡
            </div>
            <h3 className="m-0 text-[22px] font-bold text-white tracking-tight leading-[1.3] mb-4">
              &lt;30s Fast Parent Notifications
            </h3>
            <div className="text-[15px] leading-[26px] text-[#a1a1aa]">
              Parents receive instant pickup, journey, arrival, and drop-off notifications through the GoSirat Parent App.
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start p-8 rounded-[24px] bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:-translate-y-2 hover:bg-[#ffffff0a] transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#176938] to-[#0a2e18] flex items-center justify-center text-[24px] shadow-lg mb-6">
              📍
            </div>
            <h3 className="m-0 text-[22px] font-bold text-white tracking-tight leading-[1.3] mb-4">
              24/7 Live GPS Tracking
            </h3>
            <div className="text-[15px] leading-[26px] text-[#a1a1aa]">
              Track every active school ride in real time with accurate GPS location updates and estimated arrival times.
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start p-8 rounded-[24px] bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:-translate-y-2 hover:bg-[#ffffff0a] transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#176938] to-[#0a2e18] flex items-center justify-center text-[24px] shadow-lg mb-6">
              ⭐
            </div>
            <h3 className="m-0 text-[22px] font-bold text-white tracking-tight leading-[1.3] mb-4">
              4.9/5 Parent Satisfaction
            </h3>
            <div className="text-[15px] leading-[26px] text-[#a1a1aa]">
              Families trust GoSirat for providing safe, reliable, and transparent school transportation services.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
