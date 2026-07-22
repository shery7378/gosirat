import React from 'react';
import Image from "@/components/CustomImage";

export const AboutMission = () => {
  return (
    <main className="self-stretch flex flex-col items-start w-full overflow-hidden" data-aos="fade-out">
      <section className="self-stretch bg-white flex flex-col items-center py-[60px] px-4 box-border gap-2.5 text-center text-5xl text-[#101010] font-sans">
        <div className="flex flex-col items-center gap-2.5 w-full max-w-[1064px]">
          <h2 className="m-0 relative text-[length:inherit] leading-[48px] capitalize font-semibold mq450:text-[38px] mq450:leading-[38px] mq450:text-[29px] mq450:leading-[29px]">
            The Old Way Was No Longer Enough
          </h2>
          <div className="w-full relative text-lg leading-[29.3px] text-[#6b6b6b] inline-block mb-10">
            Traditional school transportation often lacked visibility, communication, and accountability. Parents had limited information about their children's journeys, schools struggled to manage transportation efficiently, and drivers worked without a connected system. GoSirat was created to bring safety, transparency, and smart school transportation together on one platform.
          </div>
        </div>
        <div className="w-full max-w-[1200px] flex justify-center mt-4 mb-8 px-4" data-aos="zoom-in">
          <Image
            src="/images/gosirat-story-split-illustration.webp"
            alt="GoSirat Before and After School Commute"
            width={1200}
            height={500}
            className="w-full h-auto rounded-2xl shadow-xl object-cover border border-[#e5e7eb]"
          />
        </div>
      </section>
      <div className="self-stretch min-h-[411px] h-auto bg-white flex items-stretch justify-between flex-wrap content-start gap-0 [row-gap:20px] mq1125:h-auto mq1125:gap-0">
        <section className="self-stretch flex-1 bg-[#fffee9] flex flex-col items-center justify-center py-10 px-4 md:py-6 md:px-[60px] box-border min-w-full md:min-w-[468px] text-left text-xs text-[#0d4a22] font-sans">
          <div className="w-full max-w-[588.3px] flex flex-col">
            <div className="self-stretch flex items-start pt-[1.7px] px-0 pb-3 box-border">
              <div className="h-[29.33px] rounded-full bg-[#d9f3dd] border-[rgba(43,114,65,0.2)] border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
                <div className="h-[6px] w-[6px] relative rounded-full bg-[#2b7241]" />
                <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">
                  Our story
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-4xl text-[#121e17]">
              <h2 className="m-0 relative text-[length:inherit] tracking-[-0.9px] leading-[1.2] font-bold font-[inherit] mq450:text-[29px] mq450:leading-8 mq450:text-[22px] mq450:leading-6">
                The Challenge We Saw
              </h2>
            </div>
            <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-gosirat-gray">
              <div className="w-full relative leading-[26px] inline-block">
                School transportation should never leave parents wondering where their children are. Yet many families experienced limited tracking, poor communication, and no reliable way to verify student pick-up and drop-off. Schools also faced operational challenges without a centralized transportation management system
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex-1 flex flex-col items-center justify-center py-10 px-4 md:py-6 md:px-[60px] box-border min-w-full md:min-w-[468px] text-left text-xs text-[#0d4a22] font-sans">
          <div className="w-full max-w-[588.3px] flex flex-col">
            <div className="self-stretch flex items-start pt-[1.7px] px-0 pb-3 box-border">
              <div className="h-[29.33px] rounded-full bg-[#d9f3dd] border-[rgba(43,114,65,0.2)] border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="200">
                <div className="h-[6px] w-[6px] relative rounded-full bg-[#2b7241]" />
                <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">
                  Our Solution
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-4xl text-[#121e17]">
              <h2 className="m-0 relative text-[length:inherit] tracking-[-0.9px] leading-[1.2] font-bold font-[inherit] mq450:text-[29px] mq450:leading-8 mq450:text-[22px] mq450:leading-6">
                Why We Built GoSirat
              </h2>
            </div>
            <div className="w-full flex flex-col items-start pt-4 px-0 pb-0 box-border text-base text-gosirat-gray">
              <div className="w-full relative leading-[26px] inline-block">
                We believe every school journey should be safe, connected, and transparent. GoSirat brings parents, schools, and drivers together through one smart platform with verified drivers, live GPS tracking, QR verification, and real-time communication—creating trust and confidence in every journey
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
