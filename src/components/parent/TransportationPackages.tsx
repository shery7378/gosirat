"use client";
import { useState } from "react";

export const TransportationPackages = () => {
  const [activeCard, setActiveCard] = useState(0);

  const packages = [
    {
      type: "Special Needs",
      title: "1 Seater",
      description: "Private transportation designed for students who need extra care, comfort, and personalized support.",
    },
    {
      type: "Shared Ride",
      title: "3 Seater",
      description: "A small shared ride for nearby families, offering a safe and comfortable school journey.",
    },
    {
      type: "Shared Ride",
      title: "7 Seater",
      description: "An efficient shared transportation option for siblings, neighbors, and nearby students.",
    },
    {
      type: "School Van",
      title: "Van",
      description: "A reliable school transportation service with a professional driver and attendant for larger routes.",
    },
  ];

  return (
    <section className="self-stretch bg-base-white flex flex-col items-start py-[102.4px] px-[60px] text-left text-xs text-[#0D6332] font-[Inter] mq450:py-[67px] mq450:px-4 mq450:box-border" data-aos="fade-in">
      <div className="w-full flex flex-col items-start">
        <div className="flex flex-col items-start">
          <div className="self-stretch flex flex-col items-start">
            <div className="h-[29.33px] rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
                <div className="h-[6px] w-[6px] rounded-[22369600px] bg-[#176938]" />
                <div className="font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-[#176938]">
                    TRANSPORTATION PACKAGES
                </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 box-border">
              <h2 className="m-0 self-stretch relative font-[Inter] font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-[#0c140f] mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
                Choose the Ride That Fits Your Family.
              </h2>
          </div>
          <div className="self-stretch flex flex-col items-start pt-5 px-0 pb-0 box-border">
              <p className="m-0 self-stretch relative font-[Inter] font-normal text-[18px] leading-[28px] tracking-[0px] text-[#57605b] max-w-[800px]">
                Select the school transportation package that best matches your child's travel needs, schedule, and comfort. GoSirat offers safe, flexible, and reliable school pick-up and drop-off services for every family.
              </p>
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start pt-12 px-0 pb-0 text-left text-xs text-[#0D6332] font-[Inter]">
          <div className="self-stretch flex items-center justify-start flex-wrap content-center gap-4">
            {packages.map((pkg, index) => {
              const isActive = activeCard === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`h-[166.8px] flex-1 rounded-[22px] border-solid border-[0.7px] box-border flex flex-col items-start py-[27px] px-7 min-w-[255px] cursor-pointer transition-all duration-300 ${isActive
                    ? "bg-[#0D6332] border-[#0D6332] text-[rgba(255,255,255,0.7)] shadow-lg"
                    : "bg-[#f4f7f4] border-[rgba(0,0,0,0.05)] text-[#0D6332] hover:bg-[#e8ece8]"
                    }`}
                >
                  <div className="self-stretch flex flex-col items-start">
                    <div className="relative tracking-[1.2px] leading-4 uppercase">
                      {pkg.type}
                    </div>
                  </div>
                  <div
                    className={`self-stretch flex flex-col items-start pt-2 px-0 pb-0 text-2xl ${isActive ? "text-base-white" : "text-[#09131a]"
                      }`}
                  >
                    <div className="self-stretch flex flex-col items-start">
                      <h3 className="m-0 relative text-[length:inherit] tracking-[-0.48px] leading-8 font-semibold font-[inherit] mq450:text-[19px] mq450:leading-[26px]">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`w-full flex flex-col items-start pt-2 px-0 pb-0 box-border text-sm ${isActive ? "text-[rgba(255,255,255,0.8)]" : "text-[#202A32]"
                      }`}
                  >
                    <div className="w-full relative leading-[22.8px] inline-block">
                      {pkg.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};
