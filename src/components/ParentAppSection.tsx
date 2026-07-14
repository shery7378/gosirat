import type { NextPage } from "next";
import Image from "next/image";

const ParentAppSection: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start p-16 box-border shrink-0 w-full mq450:py-8 mq450:px-4" data-aos="fade-in">
      <div className="self-stretch flex items-center justify-between gap-10 w-full mq750:flex-col mq750:gap-5">
        <section className="w-full max-w-2xl flex flex-col items-start py-5 px-0 box-border text-left text-xs text-[#176938] font-[Inter] mq750:flex-1">
          <div className="self-stretch flex items-start">
            <div className="rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] box-border flex items-center py-[5px] px-3.5 gap-[5px]" data-aos="fade-in" data-aos-delay="100">
              <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
              <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
                Parent app
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 text-6xl text-[#0c140f]">
            <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-1.5px] leading-[63px] capitalize font-semibold font-[inherit] mq750:text-5xl mq750:leading-[50px] mq450:text-4xl mq450:leading-[38px]">
              <span className="leading-[63px]">{`Parent App for `}</span>
              <span className="text-[#176938] leading-[63px]">
                Safe School Transportation
              </span>
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-start pt-5 px-0 pb-0 text-lg text-[#57605b]">
            <div className="self-stretch relative leading-7">
              The GoSirat Parent App gives parents complete control and visibility over their child's school transportation. Track every school pick-up and drop-off with live GPS tracking, receive real-time notifications, monitor attendance, and stay connected throughout every journey. Designed for modern families, our smart school transportation app provides safety, convenience, and peace of mind every day.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0">
            <button className="cursor-pointer [border:none] py-5 px-6 bg-gradient-to-r from-[#176938] to-[#2ecc71] rounded-2xl flex items-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300">
              <div className="relative text-xl leading-5 font-medium font-[Inter] text-[#F7F9F6] text-left">
                Explore Parent App
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative text-[#F7F9F6]">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
        <div className="flex justify-center items-center w-full max-w-[458px]">
          <Image
            className="h-auto w-full relative object-contain"
            loading="lazy"
            width={458}
            height={448}
            sizes="100vw"
            alt="GoSirat Parent App showing live GPS tracking, school pick and drop updates, attendance monitoring, and real-time notifications."
            title="GoSirat Parent App for School Transportation"
            src="/images/gosirat-parent-app-school-transportation.webp"
            data-aos="fade-out" data-aos-delay="100" />
        </div>
      </div>

      <section className="self-stretch flex flex-col items-start px-0 pb-0 text-left text-lg text-[#0c140f] font-[Inter]">
        <div className="self-stretch grid grid-cols-3 mq975:grid-cols-2 mq650:grid-cols-1 gap-5">
          <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="fade-in" data-aos-delay="200">
            <div className="self-stretch flex items-center gap-3">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 relative shrink-0">
                <circle cx="18" cy="18" r="18" fill="#dcece2" />
                <path d="M12 18.5L16.5 23L25 13" stroke="#176938" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex-1 flex items-start pt-0 pb-[0.3px] px-0 box-border">
                <div className="w-full relative tracking-[-0.45px] leading-7 font-semibold text-[#09131A] inline-block break-words whitespace-normal">
                  Manage Children
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pt-3 px-0 pb-0 box-border text-[15px] text-[#57605b]">
              <div className="w-full relative leading-[24.4px] inline-block break-words whitespace-normal">
                Manage every child's profile, school, assigned route, guardians, and transportation details from one simple dashboard.
              </div>
            </div>
          </div>

          <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="fade-out" data-aos-delay="300">
            <div className="self-stretch flex items-center gap-3">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 relative shrink-0">
                <circle cx="18" cy="18" r="18" fill="#dcece2" />
                <path d="M12 18.5L16.5 23L25 13" stroke="#176938" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex-1 flex items-start pt-0 pb-[0.3px] px-0 box-border">
                <div className="w-full relative tracking-[-0.45px] leading-7 font-semibold text-[#09131A] inline-block break-words whitespace-normal">
                  Live GPS Vehicle Tracking
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pt-3 px-0 pb-0 box-border text-[15px] text-[#57605b]">
              <div className="w-full relative leading-[24.4px] inline-block break-words whitespace-normal">
                Track your child's school vehicle in real time with accurate GPS location, estimated arrival time (ETA), and route updates.
              </div>
            </div>
          </div>

          <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="fade-out" data-aos-delay="400">
            <div className="self-stretch flex items-center gap-3">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 relative shrink-0">
                <circle cx="18" cy="18" r="18" fill="#dcece2" />
                <path d="M12 18.5L16.5 23L25 13" stroke="#176938" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex-1 flex items-start pt-0 pb-[0.3px] px-0 box-border">
                <div className="w-full relative tracking-[-0.45px] leading-7 font-semibold text-[#09131A] inline-block break-words whitespace-normal">
                  Real-Time Ride Notifications
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pt-3 px-0 pb-0 box-border text-[15px] text-[#57605b]">
              <div className="w-full relative leading-[24.4px] inline-block break-words whitespace-normal">
                Receive instant alerts for pickup, journey progress, school arrival, and secure student release to stay informed throughout every trip.
              </div>
            </div>
          </div>

          <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="zoom-in" data-aos-delay="500">
            <div className="self-stretch flex items-center gap-3">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 relative shrink-0">
                <circle cx="18" cy="18" r="18" fill="#dcece2" />
                <path d="M12 18.5L16.5 23L25 13" stroke="#176938" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex-1 flex items-start pt-0 pb-[0.3px] px-0 box-border">
                <div className="w-full relative tracking-[-0.45px] leading-7 font-semibold text-[#09131A] inline-block break-words whitespace-normal">
                  Attendance Updates
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pt-3 px-0 pb-0 box-border text-[15px] text-[#57605b]">
              <div className="w-full relative leading-[24.4px] inline-block break-words whitespace-normal">
                View daily attendance records with accurate timestamps for every pickup and drop-off, giving parents complete confidence.
              </div>
            </div>
          </div>

          <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="fade-out" data-aos-delay="600">
            <div className="self-stretch flex items-center gap-3">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 relative shrink-0">
                <circle cx="18" cy="18" r="18" fill="#dcece2" />
                <path d="M12 18.5L16.5 23L25 13" stroke="#176938" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex-1 flex items-start pt-0 pb-[0.3px] px-0 box-border">
                <div className="w-full relative tracking-[-0.45px] leading-7 font-semibold text-[#09131A] inline-block break-words whitespace-normal">
                  {`Invoices & Subscriptions`}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pt-3 px-0 pb-0 box-border text-[15px] text-[#57605b]">
              <div className="w-full relative leading-[24.4px] inline-block break-words whitespace-normal">
                Easily manage transportation plans, renew subscriptions, download invoices, and make payments digitally without paperwork.
              </div>
            </div>
          </div>

          <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7" data-aos="fade-in" data-aos-delay="100">
            <div className="self-stretch flex items-center gap-3">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 relative shrink-0">
                <circle cx="18" cy="18" r="18" fill="#dcece2" />
                <path d="M12 18.5L16.5 23L25 13" stroke="#176938" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex-1 flex items-start pt-0 pb-[0.3px] px-0 box-border">
                <div className="w-full relative tracking-[-0.45px] leading-7 font-semibold text-[#09131A] inline-block break-words whitespace-normal">
                  {`Absence & Referrals`}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pt-3 px-0 pb-0 box-border text-[15px] text-[#57605b]">
              <div className="w-full relative leading-[24.4px] inline-block break-words whitespace-normal">
                Report planned absences in advance and invite other families to GoSirat through our referral program to earn rewards.
              </div>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
};

export default ParentAppSection;
