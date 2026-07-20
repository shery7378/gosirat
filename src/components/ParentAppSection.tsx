import type { NextPage } from "next";
import Image from "next/image";

const ParentAppSection: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start p-[60px] box-border max-w-full gap-16 mq1125:p-[40px] mq825:py-[39px] mq825:px-[30px] mq825:box-border mq450:px-4 mq450:pt-[25px] mq450:pb-[25px] mq450:box-border" data-aos="zoom-in">
      <div className="self-stretch h-auto flex items-center justify-between gap-5 max-w-full mq825:flex-col mq825:items-center mq825:gap-8">
        <section className="w-full max-w-2xl flex-1 flex flex-col items-start py-5 px-0 box-border text-left text-xs text-gosirat-green font-sans">
          <div className="self-stretch flex items-start">
            <div className="inline-flex rounded-[30px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
              <div className="h-[6px] w-[6px] relative rounded-full bg-gosirat-green" />
              <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                Parent app
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 text-6xl text-gosirat-black">
            <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-left text-gosirat-black mq825:text-[38px] mq825:leading-[48px] mq450:text-[24px] mq450:leading-[32px] break-words">
              <span className="leading-[100%]">{`Parent App for `}</span>
              <span className="text-gosirat-green leading-[100%]">
                Safe School Transportation
              </span>
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-start pt-5 px-0 pb-0 text-lg text-gosirat-gray">
            <div className="w-full relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-left text-gosirat-gray">
              The GoSirat Parent App gives parents complete control and visibility over their child's school transportation. Track every school pick-up and drop-off with live GPS tracking, receive real-time notifications, monitor attendance, and stay connected throughout every journey. Designed for modern families, our smart school transportation app provides safety, convenience, and peace of mind every day.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0">
            <button className="cursor-pointer [border:none] py-5 px-6 bg-gradient-to-r from-gosirat-green to-[#2ecc71] rounded-2xl flex items-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300">
              <div className="relative text-xl leading-5 font-medium font-sans text-gosirat-bg-light text-left">
                Explore Parent App
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative text-gosirat-bg-light">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
        <div className="flex justify-center items-center w-full max-w-[458px] flex-1">
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

      <section className="self-stretch flex flex-col items-start px-0 pb-0 text-left text-lg text-gosirat-black font-sans">
        <div className="self-stretch grid grid-cols-3 mq975:grid-cols-2 mq650:grid-cols-1 gap-5">
          <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-white border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="fade-in" data-aos-delay="200">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-sans font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-gosirat-darker">
              Manage Children
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-sans font-normal text-[14px] leading-[22.75px] tracking-normal text-gosirat-text">
              Manage every child's profile, school, assigned route, guardians, and transportation details from one simple dashboard.
            </div>
          </div>
        </div>

          <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-white border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="fade-out" data-aos-delay="300">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-sans font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-gosirat-darker">
              Live GPS Vehicle Tracking
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-sans font-normal text-[14px] leading-[22.75px] tracking-normal text-gosirat-text">
              Track your child's school vehicle in real time with accurate GPS location, estimated arrival time (ETA), and route updates.
            </div>
          </div>
        </div>

          <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-white border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="fade-out" data-aos-delay="400">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-sans font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-gosirat-darker">
              Real-Time Ride Notifications
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-sans font-normal text-[14px] leading-[22.75px] tracking-normal text-gosirat-text">
              Receive instant alerts for pickup, journey progress, school arrival, and secure student release to stay informed throughout every trip.
            </div>
          </div>
        </div>

          <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-white border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="zoom-in" data-aos-delay="500">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-sans font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-gosirat-darker">
              Attendance Updates
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-sans font-normal text-[14px] leading-[22.75px] tracking-normal text-gosirat-text">
              View daily attendance records with accurate timestamps for every pickup and drop-off, giving parents complete confidence.
            </div>
          </div>
        </div>

          <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-white border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="fade-out" data-aos-delay="600">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-sans font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-gosirat-darker">
              {`Invoices & Subscriptions`}
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-sans font-normal text-[14px] leading-[22.75px] tracking-normal text-gosirat-text">
              Easily manage transportation plans, renew subscriptions, download invoices, and make payments digitally without paperwork.
            </div>
          </div>
        </div>

          <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-white border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="fade-in" data-aos-delay="100">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-sans font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-gosirat-darker">
              {`Absence & Referrals`}
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-sans font-normal text-[14px] leading-[22.75px] tracking-normal text-gosirat-text">
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
