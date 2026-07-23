import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact GoSirat | School Transportation Support & Partnerships",
  description: "Contact GoSirat for school transportation services, school partnerships, parent support, driver inquiries, and customer assistance. Our team is ready to help.",
  alternates: {
    canonical: "https://gosirat.com/contact-us",
  },
};
import Image from "@/components/CustomImage";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";

const ContactPage: NextPage = () => {
  return (
    <div className="w-full flex flex-col pt-16 pb-20 px-[70px] mq750:px-[35px] mq450:px-5 gap-12 bg-white">
      <WebPageSchema
        title="Contact GoSirat | School Transportation Support & Partnerships"
        description="Contact GoSirat for school transportation services, school partnerships, parent support, driver inquiries, and customer assistance. Our team is ready to help."
        url="https://gosirat.com/contact-us"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://gosirat.com/" },
        { name: "Contact Us", url: "https://gosirat.com/contact-us" }
      ]} />

      <header className="self-stretch flex flex-col items-center gap-3 max-w-full text-left text-[38px] text-gosirat-text-dark font-sans mb-4" data-aos="fade-up">
        <div className="h-[29.3px] flex items-center justify-center">
          <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px]">
            <div className="h-[6px] w-[6px] relative rounded-full bg-gosirat-green" />
            <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
              Contact Support
            </div>
          </div>
        </div>
        <h1 className="m-0 relative font-sans font-semibold text-[64px] leading-[100%] tracking-normal text-center text-gosirat-black inline-block max-w-full">
          Let's Connect
        </h1>
        <h3 className="m-0 relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-center text-gosirat-gray inline-block max-w-[800px]">
          Have questions about GoSirat's school transportation services? Whether you're a parent, school administrator, or driver, our team is ready to help with registrations, partnerships, and support.
        </h3>
      </header>

      <div className="rounded-[40px] max-w-full flex items-start flex-wrap content-center box-border gap-8 leading-normal tracking-normal mq750:gap-4">
        <section className="flex-[1.0796] flex flex-col items-start justify-start min-w-[280px] w-full max-w-[508px] text-left text-[38px] text-gosirat-text-dark font-sans mq450:max-w-full">
          <div className="self-stretch flex flex-col items-center gap-4 max-w-full text-xl text-[#000]">
            <div className="self-stretch min-h-[100px] rounded-xl border-gosirat-green border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] box-border bg-white flex items-center p-6 gap-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20.83" height="20.83" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round" className="text-gosirat-green shrink-0">
                <polyline points="16 2 16 8 22 8"></polyline>
                <line x1="23" y1="1" x2="16" y2="8"></line>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div className="flex-1 flex flex-col items-start gap-1.5">
                <h3 className="m-0 self-stretch relative text-[20px] leading-[20px] font-semibold font-sans text-[#000] mq450:text-base mq450:leading-4">
                  Call Us
                </h3>
                <div className="self-stretch relative text-lg leading-6 font-normal font-sans text-[#000000] tracking-[0%]">
                  +92 309 910 4803
                </div>
              </div>
            </div>
            <div className="self-stretch min-h-[100px] rounded-xl border-gosirat-green border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] box-border bg-white flex items-center p-6 gap-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20.83" height="20.83" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round" className="text-gosirat-green shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <div className="flex-1 flex flex-col items-start gap-1.5">
                <h3 className="m-0 self-stretch relative text-[20px] leading-[20px] font-semibold font-sans text-[#000] mq450:text-base mq450:leading-4">
                  Email Us
                </h3>
                <div className="self-stretch relative text-[18px] leading-[24px] font-normal font-sans text-[#000000] tracking-[0%]">
                  info@gosirat.com
                </div>
              </div>
            </div>
            <div className="self-stretch min-h-[100px] rounded-xl border-gosirat-green border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] box-border bg-white flex items-center p-6 gap-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20.83" height="20.83" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round" className="text-gosirat-green shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div className="flex-1 flex flex-col items-start gap-1.5">
                <h3 className="m-0 self-stretch relative text-[20px] leading-[20px] font-semibold font-sans text-[#000] mq450:text-base mq450:leading-4">
                  Visit Our Office
                </h3>
                <div className="self-stretch relative text-[18px] leading-[24px] font-normal font-sans text-[#000000] tracking-[0%]">
                  Office No. C-03, Bahrain Plaza, Civic Centre, Bahria Town Phase 4, Islamabad, Pakistan
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex-1 rounded-[10px] bg-gosirat-bg-light flex flex-col items-start justify-center p-7 box-border min-w-[280px] w-full max-w-full text-left text-base text-gosirat-gray-light font-sans mq450:flex-1 mq450:pt-5 mq450:pb-5 mq450:box-border shadow-sm">
          <div className="self-stretch flex flex-col items-start gap-5 max-w-full">
            <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
              <input
                className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-sans text-base text-gosirat-text-dark placeholder:text-gosirat-gray-light"
                placeholder="First name"
                type="text"
              />
              <input
                className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-sans text-base text-gosirat-text-dark placeholder:text-gosirat-gray-light"
                placeholder="Last name"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
              <input
                className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-sans text-base text-gosirat-text-dark placeholder:text-gosirat-gray-light"
                placeholder="Email"
                type="email"
              />
              <input
                className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-sans text-base text-gosirat-text-dark placeholder:text-gosirat-gray-light"
                placeholder="Contact"
                type="tel"
              />
            </div>
            <div className="self-stretch rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] flex items-start p-3">
              <textarea
                className="w-full min-h-[164px] [border:none] [outline:none] font-sans text-base bg-[transparent] resize-none text-gosirat-text-dark placeholder:text-gosirat-gray-light leading-[18.2px]"
                placeholder="Type message"
                rows={6}
              />
            </div>
            <button className="cursor-pointer border-none bg-gosirat-green w-full h-[60px] rounded-2xl flex items-center justify-center hover:bg-gosirat-green-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-5 py-3 gap-3 mt-2">
              <div className="relative text-lg font-semibold font-sans text-white text-center">
                Send Message
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
