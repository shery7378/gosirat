import Image from "@/components/CustomImage";

export const InstantNotifications = () => {
  return (
    <section className="w-full self-stretch bg-gosirat-light flex flex-col items-center pt-10 pb-0 px-[30px] lg:px-[60px] box-border mq450:px-4 mq450:pt-[34px] overflow-hidden" data-aos="fade-in">
      <div className="w-full max-w-[1440px] flex flex-col items-center relative isolate gap-6">
        <section className="self-stretch flex flex-col items-center gap-3 z-[0] shrink-0 text-left text-xs text-gosirat-green font-sans">
          <div className="h-[26px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] box-border flex items-center py-[4px] px-[12px] gap-[6px] mx-auto" data-aos="fade-in" data-aos-delay="100">
            <div className="h-[5px] w-[5px] relative rounded-full bg-gosirat-green" />
            <div className="relative font-sans font-medium text-[11px] leading-[14px] tracking-[1.68px] uppercase">
              Instant notifications
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center gap-4 text-center mt-3">
            <h2 className="m-0 self-stretch relative font-sans font-semibold text-[36px] leading-tight tracking-[-1px] text-gosirat-black mq825:text-[28px] mq450:text-[24px] mq450:leading-[32px] break-words">
              Calm, Considered Updates — Not A Flood.
            </h2>
            <p className="m-0 self-stretch relative font-sans font-normal text-[16px] leading-[24px] tracking-normal text-gosirat-gray max-w-[800px] mx-auto">
              We notify you when it matters: driver arrival, child boarded, school arrival, school release, and home drop-off. That's it.
            </p>
          </div>
        </section>

        {/* Desktop Overlapping Layout (Hidden on mobile/tablet mq1125) */}
        <div id="desktop-notifications-container" className="w-full max-w-[1200px] h-[500px] flex items-center justify-between relative isolate shrink-0 mq1125:hidden mx-auto px-4 pb-0 mb-0">

          {/* Left Cards */}
          <div className="flex flex-col justify-center items-end gap-8 w-[320px] z-[2]">

            {/* Card 1 */}
            <div className="mr-3" data-aos="fade-right" data-aos-delay="1600" data-aos-duration="800" data-aos-anchor="#desktop-notifications-container">
              <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-sm animate-[float_4s_ease-in-out_infinite]">
                <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0">
                  <svg className="h-5 w-5 relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">
                    Driver on the way
                  </div>
                  <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">
                    Just now · Notification 1
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mr-12" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="800" data-aos-anchor="#desktop-notifications-container">
              <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-sm animate-[float_4.5s_ease-in-out_infinite]">
                <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0">
                  <svg className="h-5 w-5 relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">
                    Released at school · 14:30
                  </div>
                  <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">
                    Just now · Notification 4
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="mr-6" data-aos="fade-right" data-aos-delay="2400" data-aos-duration="800" data-aos-anchor="#desktop-notifications-container">
              <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-sm animate-[float_5s_ease-in-out_infinite]">
                <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0">
                  <svg className="h-5 w-5 relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">
                    Dropped home · 15:02
                  </div>
                  <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">
                    Just now · Notification 5
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Center Phone */}
          <div className="absolute !m-0 top-[20px] left-1/2 transform -translate-x-1/2 z-[1] shrink-0">
            <Image
              className="w-[360px] h-auto"
              loading="lazy"
              width={483}
              height={979}
              title="GoSirat Parent App Real-Time Notifications"
              alt="GoSirat Parent App showing real-time notifications for school transportation, including pickup, school arrival, and safe drop-off."
              src="/images/gosirat-parent-app-notifications.webp"
              data-aos="fade-up" data-aos-delay="800" data-aos-duration="3000" data-aos-easing="linear" data-aos-anchor="#desktop-notifications-container" />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col justify-center items-start gap-8 w-[320px] z-[2]">

            {/* Card 4 */}
            <div className="ml-8" data-aos="fade-left" data-aos-delay="1800" data-aos-duration="800" data-aos-anchor="#desktop-notifications-container">
              <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-sm animate-[float_4.5s_ease-in-out_infinite]">
                <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0">
                  <svg className="h-5 w-5 relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">
                    Driver arrived at your address
                  </div>
                  <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">
                    Just now · Notification 1
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="ml-2" data-aos="fade-left" data-aos-delay="2200" data-aos-duration="800" data-aos-anchor="#desktop-notifications-container">
              <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-sm animate-[float_5s_ease-in-out_infinite]">
                <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0">
                  <svg className="h-5 w-5 relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">
                    Sara picked up · Route 14B
                  </div>
                  <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">
                    Just now · Notification 2
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="ml-6" data-aos="fade-left" data-aos-delay="2600" data-aos-duration="800" data-aos-anchor="#desktop-notifications-container">
              <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-sm animate-[float_4s_ease-in-out_infinite]">
                <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0">
                  <svg className="h-5 w-5 relative text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">
                    Arrived at Al Noor Academy
                  </div>
                  <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">
                    Just now · Notification 3
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile/Tablet Layout (Visible on mq1125 and smaller viewports) */}
        <div id="mobile-notifications-container" className="hidden mq1125:flex flex-col items-center gap-10 w-full px-4 text-left font-sans">
          <Image
            className="w-full max-w-[240px] h-auto object-contain mx-auto"
            width={240}
            height={487}
            title="GoSirat Parent App Real-Time Notifications"
            alt="GoSirat Parent App showing real-time notifications for school transportation, including pickup, school arrival, and safe drop-off."
            src="/images/gosirat-parent-app-notifications.webp"
            data-aos="fade-up" data-aos-delay="800" data-aos-duration="2500" data-aos-easing="ease-out-cubic" data-aos-anchor="#mobile-notifications-container" />
          <div className="flex flex-col gap-4 w-full max-w-[500px]">
            <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04)]" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
              <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
                <svg className="h-5 w-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">Driver on the way</div>
                <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">Just now · Notification 1</div>
              </div>
            </div>

            <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04)]" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
              <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
                <svg className="h-5 w-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">Driver arrived at your address</div>
                <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">Just now · Notification 2</div>
              </div>
            </div>

            <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04)]" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
              <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
                <svg className="h-5 w-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">Sara picked up · Route 14B</div>
                <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">Just now · Notification 3</div>
              </div>
            </div>

            <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04)]" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
              <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
                <svg className="h-5 w-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">Arrived at Al Noor Academy</div>
                <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">Just now · Notification 4</div>
              </div>
            </div>

            <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04)]" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
              <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
                <svg className="h-5 w-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">Released at school · 14:30</div>
                <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">Just now · Notification 5</div>
              </div>
            </div>

            <div className="rounded-[20px] bg-white border-[rgba(0,0,0,0.05)] border-solid border-[0.7px] flex items-center py-[14px] px-6 gap-4 shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04)]" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
              <div className="h-10 w-10 rounded-[14px] bg-[rgba(13,99,50,0.15)] flex items-center justify-center shrink-0" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="300" data-aos-easing="ease-out" data-aos-anchor="#mobile-notifications-container">
                <svg className="h-5 w-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div className="relative leading-tight font-semibold text-gosirat-darker whitespace-nowrap text-[14px]">Dropped home · 15:02</div>
                <div className="relative leading-tight text-[12px] text-gosirat-text mt-0.5">Just now · Notification 6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
