import type { NextPage } from "next";
import Image from "next/image";

const CTASection: NextPage = () => {
  return (
    <section className="self-stretch bg-[linear-gradient(#176938,#022913)] flex flex-col items-start py-[100px] px-[60px] text-left text-6xl text-[#f8fbf8] font-[Inter] mq450:py-[65px] mq450:px-[30px] mq450:box-border" data-aos="zoom-in">
      <div className="self-stretch flex flex-col items-start">
        <div className="self-stretch flex flex-col items-start gap-4">
          <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-1.5px] leading-[63px] capitalize font-semibold font-[inherit] mq450:text-4xl mq450:leading-[38px] mq450:text-5xl mq450:leading-[50px]">
            Why parents choose GoSirat.
          </h2>
          <div className="relative text-lg leading-7 text-[rgba(248,251,248,0.8)]">
            Proof, not promises. The numbers behind every safer school
            journey.
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start pt-10 px-0 pb-0 text-left text-6xl text-[#f8fbf8] font-[Inter]">
          <div className="self-stretch rounded-[28px] bg-[#2f6244] overflow-hidden flex items-center justify-between flex-wrap content-center gap-5" data-aos="zoom-in" data-aos-delay="100">
            <div className="h-[204px] w-[303.4px] flex flex-col items-start p-10 box-border">
              <div className="self-stretch flex flex-col items-start">
                <h2 className="m-0 relative text-[60px] text-[#f8fbf8] tracking-[-1.5px] leading-[60px] font-semibold font-[Inter] mq450:text-4xl mq450:leading-9 mq450:text-5xl mq450:leading-[48px]">
                  100%
                </h2>
              </div>
              <div className="w-[223.4px] flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[rgba(248,251,248,0.8)]">
                <div className="w-56 relative font-[Inter] font-normal text-[16px] leading-[24px] tracking-[0px] text-[rgba(248,251,248,0.8)] inline-block">
                  Verified drivers across every route
                </div>
              </div>
            </div>
            <div className="h-[204px] w-[303.4px] flex flex-col items-start p-10 box-border">
              <div className="self-stretch flex flex-col items-start">
                <h2 className="m-0 relative text-[60px] text-[#f8fbf8] tracking-[-1.5px] leading-[60px] font-semibold font-[Inter] mq450:text-4xl mq450:leading-9 mq450:text-5xl mq450:leading-[48px]">{`<30s`}</h2>
              </div>
              <div className="w-[223.4px] flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[rgba(248,251,248,0.8)]">
                <div className="w-56 relative font-[Inter] font-normal text-[16px] leading-[24px] tracking-[0px] text-[rgba(248,251,248,0.8)] inline-block">
                  Median pickup notification delay
                </div>
              </div>
            </div>
            <div className="h-[204px] w-[303.4px] flex flex-col items-start p-10 box-border">
              <div className="self-stretch flex flex-col items-start">
                <h2 className="m-0 relative text-[60px] text-[#f8fbf8] tracking-[-1.5px] leading-[60px] font-semibold font-[Inter] mq450:text-4xl mq450:leading-9 mq450:text-5xl mq450:leading-[48px]">
                  24/7
                </h2>
              </div>
              <div className="w-[223.4px] flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[rgba(248,251,248,0.8)]">
                <div className="w-56 relative font-[Inter] font-normal text-[16px] leading-[24px] tracking-[0px] text-[rgba(248,251,248,0.8)] inline-block">
                  Live tracking on every active ride
                </div>
              </div>
            </div>
            <div className="h-[204px] w-[303.4px] flex flex-col items-start p-10 box-border">
              <div className="self-stretch flex flex-col items-start">
                <h2 className="m-0 flex items-center gap-2 relative text-[60px] text-[#f8fbf8] tracking-[-1.5px] leading-[60px] font-semibold font-[Inter] mq450:text-4xl mq450:leading-9 mq450:text-5xl mq450:leading-[48px]">
                  4.9
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 pb-1">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </h2>
              </div>
              <div className="w-[223.4px] flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-[rgba(248,251,248,0.8)]">
                <div className="w-56 relative font-[Inter] font-normal text-[16px] leading-[24px] tracking-[0px] text-[rgba(248,251,248,0.8)] inline-block">
                  Average parent rating across schools
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CTASection;
