import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export const SchoolsVisibility: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start p-[60px] box-border max-w-full gap-16 mq825:py-[39px] mq825:px-[30px] mq825:box-border mq450:px-4 mq450:pt-[25px] mq450:pb-[25px] mq450:box-border" data-aos="zoom-in">
      <div className="self-stretch h-auto flex items-center justify-between gap-5 max-w-full mq1400:flex-col mq1400:items-center mq1400:gap-8">
        <section className="w-full max-w-[713px] flex flex-col items-start py-5 px-0 box-border text-left text-xs text-[#176938] font-[Inter] mq1400:text-center mq1400:items-center">
          <div className="self-stretch flex flex-col items-start mq1400:items-center">
            <div className="self-stretch flex flex-col items-start gap-2.5 mq1400:items-center">
              <div className="min-h-[29px] h-auto rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px] text-center flex-wrap justify-center" data-aos="fade-out" data-aos-delay="100">
                <div className="h-[6px] w-[6px] relative rounded-[22369600px] bg-[#176938]" />
                <div className="relative font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">
                  Why Visibility Matters
                </div>
              </div>
              <h2 className="m-0 self-stretch relative font-[Inter] font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-[#0c140f] mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] mq1400:text-center break-words">
                Complete Visibility. <span className="text-[#176938]">Better School Transportation.</span>
              </h2>
              <div className="self-stretch relative font-[Inter] font-normal text-[18px] leading-[28px] tracking-[0px] text-[#57605b] mq1400:text-center">
                Monitor every vehicle, student, and route in real time. The GoSirat school transportation platform helps schools improve safety, streamline operations, and keep parents informed with live updates.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start pt-8 px-0 pb-0 mq1400:items-center">
            <Link href="/register" className="cursor-pointer no-underline py-5 px-6 bg-gradient-to-r from-[#176938] to-[#2ecc71] rounded-2xl flex items-center gap-[7px] hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300">
              <div className="relative text-xl leading-5 font-medium font-[Inter] text-[#F7F9F6] text-left">
                Register Your School
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F7F9F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
        <Image
          className="h-auto w-full max-w-[458px] relative object-contain mq1400:mx-auto mt-6 -mb-[150px] mq1400:-mb-[100px] z-0"
          loading="lazy"
          width={458}
          height={448}
          sizes="100vw"
          alt="GoSirat school transportation dashboard showing live routes, student tracking, verified handovers, and transportation analytics."
          title="GoSirat School Transportation Management Dashboard"
          src="/images/gosirat-school-transportation-dashboard.webp"
          data-aos="fade-out" data-aos-delay="100" />
      </div>
      <section className="self-stretch flex items-center justify-start flex-wrap content-center gap-4 text-left text-lg text-[#09131a] font-[Inter] mq1400:justify-center relative z-10">
        <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-[#fff] border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="zoom-in" data-aos-delay="200">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-[#0d6332]/10 flex items-center justify-center" data-aos="zoom-in" data-aos-delay="300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-[Inter] font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-[#09131A]">
              Live routes
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-[Inter] font-normal text-[14px] leading-[22.75px] tracking-[0px] text-[#202A32]">
              See every route, every vehicle, every minute.
            </div>
          </div>
        </div>
        <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-[#fff] border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="fade-out" data-aos-delay="400">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-[#0d6332]/10 flex items-center justify-center" data-aos="fade-out" data-aos-delay="500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-[Inter] font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-[#09131A]">
              Verified handovers
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-[Inter] font-normal text-[14px] leading-[22.75px] tracking-[0px] text-[#202A32]">
              A permanent record of every pickup and release.
            </div>
          </div>
        </div>
        <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-[#fff] border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="zoom-in" data-aos-delay="600">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-[#0d6332]/10 flex items-center justify-center" data-aos="fade-out" data-aos-delay="100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-[Inter] font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-[#09131A]">
              Student visibility
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-[Inter] font-normal text-[14px] leading-[22.75px] tracking-[0px] text-[#202A32]">
              Know who is onboard, who is at school, and who is home.
            </div>
          </div>
        </div>
        <div className="min-h-[202.8px] h-auto flex-1 rounded-[22px] bg-[#fff] border-[rgba(0,0,0,0.6)] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[245px] mq450:max-w-full" data-aos="fade-in" data-aos-delay="200">
          <div className="self-stretch h-16 flex items-start pt-0 px-0 pb-5 box-border">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-[#0d6332]/10 flex items-center justify-center" data-aos="fade-in" data-aos-delay="300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#176938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <line x1="18" x2="18" y1="20" y2="10" />
                <line x1="12" x2="12" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="14" />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="relative font-[Inter] font-semibold text-[18px] leading-[28px] tracking-[-0.45px] text-[#09131A]">
              Operational analytics
            </div>
          </div>
          <div className="w-full flex flex-col items-start pt-2 px-0 pb-0 box-border">
            <div className="w-full relative font-[Inter] font-normal text-[14px] leading-[22.75px] tracking-[0px] text-[#202A32]">
              Trends, incidents and parent satisfaction in one place.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
