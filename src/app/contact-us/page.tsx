import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact GoSirat | School Transportation Support & Partnerships",
    description: "Contact GoSirat for school transportation services, school partnerships, parent support, driver inquiries, and customer assistance. Our team is ready to help.",
    alternates: {
        canonical: "https://gosirat.com/contact-us",
    },
};
import Image from "next/image";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";

const ContactPage: NextPage = () => {
 return (
  <div className="w-full flex flex-col pt-16 pb-20 px-[70px] mq750:px-[35px] gap-12 bg-white">
   <WebPageSchema 
      title="Contact GoSirat | School Transportation Support & Partnerships" 
      description="Contact GoSirat for school transportation services, school partnerships, parent support, driver inquiries, and customer assistance. Our team is ready to help." 
      url="https://gosirat.com/contact-us" 
    />
    <BreadcrumbSchema items={[
      { name: "Home", url: "https://gosirat.com/" },
      { name: "Contact Us", url: "https://gosirat.com/contact-us" }
    ]} />

    <div className="w-full flex flex-col items-center text-center gap-4 max-w-[800px] mx-auto" data-aos="fade-up">
      <div className="h-[29.3px] flex items-center justify-center">
        <div className="h-[29.3px] rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] box-border flex items-center py-[5px] px-3.5 gap-1.5">
          <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
          <div className="relative text-xs text-[#176938] tracking-[1.68px] leading-4 uppercase font-medium">
            Contact GoSirat
          </div>
        </div>
      </div>
      <h1 className="m-0 self-stretch relative text-[46px] leading-[1.2] capitalize font-semibold font-[Inter] text-[#0c140f] mq450:text-[32px] mq750:text-[40px]">
        Let's Connect
      </h1>
      <p className="m-0 self-stretch relative text-lg leading-7 text-[#57605b] font-normal font-[Inter]">
        Have questions about GoSirat's school transportation services? Whether you're a parent, school administrator, or driver, our team is ready to help with registrations, partnerships, and support.
      </p>
    </div>

    <div className="rounded-[40px] max-w-full flex items-start flex-wrap content-center box-border gap-8 leading-[normal] tracking-[normal] mq750:gap-4">
     <section className="flex-[1.0796] flex flex-col items-start justify-start min-w-[335px] max-w-[508px] text-left text-[38px] text-[#101828] font-[Inter] mq450:max-w-full">
      <div className="self-stretch flex flex-col items-center gap-4 max-w-full text-xl text-[#000]">
       <div className="self-stretch min-h-[100px] h-auto rounded-xl border-[#176938] border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-center py-[25px] px-[18px]">
        <div className="h-12 flex items-center gap-4">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#176938] shrink-0">
          <polyline points="16 2 16 8 22 8"></polyline>
          <line x1="23" y1="1" x2="16" y2="8"></line>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
         </svg>
         <div className="w-[161.5px] flex flex-col items-start gap-1.5">
          <h3 className="m-0 self-stretch relative text-[length:inherit] leading-5 capitalize font-semibold font-[inherit] mq450:text-base mq450:leading-4">
           Call Us
          </h3>
          <div className="self-stretch relative text-lg leading-6">
           +92 309 9104803
          </div>
         </div>
        </div>
       </div>
       <div className="self-stretch min-h-[100px] h-auto rounded-xl border-[#176938] border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] box-border overflow-hidden shrink-0 flex items-center py-6 px-[18px]">
        <div className="w-full flex items-center py-0 pl-0 pr-[26px] box-border gap-4">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#176938] shrink-0">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
         </svg>
         <div className="flex-1 flex flex-col items-start gap-1.5">
          <div className="self-stretch relative leading-5 capitalize font-semibold mq450:text-base mq450:leading-4">
           Email Us
          </div>
          <input
           className="w-full [border:none] [outline:none] font-[Inter] text-lg bg-[transparent] self-stretch h-6 relative leading-6 text-[#000] text-left flex items-center p-0"
           placeholder="info@gosirat.com"
           type="text"
          />
         </div>
        </div>
       </div>
       <div className="self-stretch min-h-[100px] h-auto rounded-xl border-[#176938] border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] box-border overflow-hidden shrink-0 flex items-center pt-[23px] px-[18px] pb-[25px] max-w-full">
        <div className="flex-1 flex items-center gap-4 max-w-full mq450:items-start">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#176938] shrink-0 mq450:mt-1">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
         </svg>
         <div className="flex-1 flex flex-col items-start gap-1.5 w-full max-w-full">
          <h3 className="m-0 self-stretch relative text-[length:inherit] leading-5 capitalize font-semibold font-[inherit] mq450:text-base mq450:leading-4">
           Visit Our Office
          </h3>
          <div className="self-stretch relative text-lg leading-6">
           Office No. C-03, Bahrain Plaza, Civic Centre, Bahria Town Phase 4, Islamabad, Pakistan
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
     <section className="flex-1 rounded-[10px] bg-[#f3f7f4] flex flex-col items-start justify-center p-7 box-border min-w-[335px] max-w-full text-left text-base text-[#bababa] font-[Inter] mq450:flex-1 mq450:pt-5 mq450:pb-5 mq450:box-border">
      <div className="self-stretch flex flex-col items-start gap-7 max-w-full">
       <div className="self-stretch flex flex-col items-start gap-3.5 max-w-full">
         <div className="self-stretch flex flex-col items-start max-w-full">
          <div className="self-stretch flex items-center justify-center relative isolate gap-3 max-w-full mq450:flex-wrap">
           <input
            className="border-[rgba(0,0,0,0.25)] border-solid border-[1px] [outline:none] w-full bg-white h-[50px] flex-[1] relative rounded-lg box-border min-w-[100px] max-w-full z-[0] px-3 text-[#101828] placeholder:text-[#bababa] mq450:min-w-full"
            placeholder="First name"
            type="text"
           />
           <div className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border flex items-center py-0 px-3 max-w-full z-[2] min-w-[100px] mq450:min-w-full">
           <input
            className="w-full [border:none] [outline:none] font-[Inter] text-base bg-[transparent] h-[19px] relative leading-[18.2px] capitalize text-[#101828] placeholder:text-[#bababa] text-left flex items-center p-0"
            placeholder="Last name"
            type="text"
           />
          </div>
         </div>
         </div>
         <div className="self-stretch flex items-start pt-0.5 px-0 pb-0 box-border gap-3 max-w-full mq450:flex-col">
          <div className="h-[53px] w-full rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border flex items-center p-4 max-w-full">
          <input
           className="w-full [border:none] [outline:none] font-[Inter] text-base bg-[transparent] h-[19px] relative leading-[18.2px] capitalize text-[#101828] placeholder:text-[#bababa] text-left flex items-center p-0"
           placeholder="Email"
           type="email"
           />
          </div>
          <div className="h-[53px] w-full rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border flex items-center p-4 max-w-full">
           <input
           className="w-full [border:none] [outline:none] font-[Inter] text-base bg-[transparent] h-[19px] relative leading-[18.2px] capitalize text-[#101828] placeholder:text-[#bababa] text-left flex items-center p-0"
           placeholder="Contact"
           type="tel"
          />
          </div>
         </div>
         <div className="self-stretch rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] flex items-start pt-[15px] px-[15px] pb-[164px]">
         <textarea 
          className="w-full [border:none] [outline:none] font-[Inter] text-base bg-[transparent] resize-none text-[#101828] placeholder:text-[#bababa] capitalize leading-[18.2px]"
          placeholder="Type message"
          rows={1}
         ></textarea>
        </div>
       </div>
       <button className="cursor-pointer [border:none] py-3 px-5 bg-[#176938] self-stretch rounded-xl flex flex-col items-center justify-center hover:bg-[#3d8f5e] transition-colors">
        <div className="relative text-2xl uppercase font-semibold font-[Inter] text-white text-center flex items-center justify-center mq450:text-[19px]">
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
