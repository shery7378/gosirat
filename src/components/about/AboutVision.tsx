import React from 'react';
import Image from 'next/image';

export const AboutVision = () => {
  return (
    <section className="self-stretch bg-gosirat-green py-16 px-4 md:py-24 md:px-12 lg:px-16 font-sans" data-aos="fade-up">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-10">

        {/* Text Column */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5 md:gap-6 w-full md:w-[55%]">
          <div className="rounded-full bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.25)] border-solid border-[0.67px] flex items-center justify-center py-[6px] px-[14px] gap-[8px] text-white" data-aos="fade-in" data-aos-delay="100">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <div className="leading-5 uppercase font-semibold text-xs tracking-[0.6px]">
              Our Vision
            </div>
          </div>
          <h2 className="m-0 w-full relative text-[32px] leading-[1.2] md:text-[40px] lg:text-[48px] capitalize font-bold text-white md:pr-4">
            Creating a Safer Future for Every School Journey
          </h2>
          <p className="m-0 w-full relative text-[16px] leading-[28px] md:text-[18px] lg:text-[20px] md:leading-[32px] text-[#e0f2e5] md:pr-4">
            Our vision is to make school transportation safer, smarter, and more transparent for every family. We strive to ensure that parents always know where their child is through live GPS tracking, verified drivers, and secure technology—making every school journey safe, connected, and worry-free.
          </p>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-[45%] relative rounded-3xl md:rounded-[32px] overflow-hidden shadow-xl md:shadow-2xl border border-[rgba(255,255,255,0.1)] bg-[#0c4020]" data-aos="zoom-in" data-aos-delay="200">
          <Image
            src="/images/gosirat-vision-safe-school-transportation.webp"
            alt="Parent tracking a child's school journey with the GoSirat app while a GoSirat vehicle safely transports students to school."
            title="GoSirat Vision for Safe School Transportation"
            width={1064}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};
