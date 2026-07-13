"use client";

import type { NextPage } from "next";
import { useState } from "react";

const faqData = [
 {
  question: "How does live tracking work?",
  answer:
   "Every GoSirat vehicle streams its location continuously while a route is active. You see the bus on the map, the ETA, and milestone alerts at pickup, on route, arrival and release.",
 },
 {
  question: "How are drivers verified?",
  answer:
   "Drivers go through application, training, certification, identity verification and continuous re-screening. Documents and certifications are revalidated on a schedule.",
 },
 {
  question: "How does child verification work?",
  answer:
   "Each pickup and handover uses a QR code unique to the child. The driver scans it; the parent and school receive confirmation in real time.",
 },
 {
  question: "What happens if my child is absent?",
  answer:
   "Report the absence inside the parent app before the route starts. The driver is notified automatically and the day is recorded in attendance.",
 },
 {
  question: "How do transportation packages work?",
  answer:
   "Choose a package that matches your school days and routine. Manage renewals, invoices and any changes directly from the app.",
 },
];

const FAQ: NextPage = () => {
 const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

 const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
 };

 return (
  <section className="self-stretch flex flex-col items-center py-20 px-16 box-border w-full mq450:py-10 mq450:px-4" data-aos="zoom-in">
   <div className="w-full flex flex-col items-center max-w-full">
    <section className="self-stretch flex flex-col items-center gap-4 text-center text-xs text-[#176938] font-[Inter]">
     <div className="flex items-center rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] py-[5px] px-3.5 gap-1.5" data-aos="zoom-in" data-aos-delay="100">
      <div className="h-1.5 w-1.5 relative rounded-full bg-[#176938]" />
      <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
       FAQ
      </div>
     </div>
     <h2 className="m-0 relative text-6xl tracking-[-1.5px] leading-[75px] capitalize font-semibold font-[inherit] text-[#0c140f] mq750:text-5xl mq750:leading-[60px] mq450:text-4xl mq450:leading-[45px]">
      Questions, answered.
     </h2>
    </section>
    
    <div className="w-full max-w-5xl flex flex-col items-start pt-14 mq450:pt-8 box-border">
     <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start w-full overflow-hidden" data-aos="fade-out" data-aos-delay="200">
      {faqData.map((faq, index) => {
       const isOpen = openIndex === index;
       return (
        <section
         key={index}
         className={`self-stretch flex flex-col items-start pt-7 px-8 pb-[27px] mq450:px-5 mq450:pt-5 mq450:pb-5 text-left text-lg text-[#0c140f] font-[Inter] w-full ${
          index !== faqData.length - 1
           ? "border-[#dee3de] border-solid border-b-[0.7px]"
           : ""
         }`}
        >
         <div
          className="self-stretch flex items-center justify-between gap-5 cursor-pointer w-full"
          onClick={() => toggleFAQ(index)}
         >
          <div className="flex-1 flex items-start pt-0 pb-[0.4px] px-0 box-border">
           <div className="relative leading-7 font-semibold break-words whitespace-normal">
            {faq.question}
           </div>
          </div>
          {isOpen ? (
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <circle cx="16" cy="16" r="16" fill="#176938" />
            <path d="M11 11L21 21M11 21L21 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
           </svg>
          ) : (
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <circle cx="16" cy="16" r="15" stroke="#dee3de" strokeWidth="1.5" />
            <path d="M16 10V22M10 16H22" stroke="#57605b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
           </svg>
          )}
         </div>
         <div
          className={`flex flex-col items-start px-0 text-[15px] text-[#57605b] overflow-hidden transition-all duration-300 w-full ${
           isOpen ? "max-h-[500px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0"
          }`}
         >
          <div className="w-full max-w-3xl flex items-start pt-0 px-0 pb-[1.2px] box-border">
           <div className="w-full relative leading-[24.4px] break-words whitespace-normal">
            {faq.answer}
           </div>
          </div>
         </div>
        </section>
       );
      })}
     </div>
    </div>
   </div>
  </section>
 );
};
export default FAQ;
