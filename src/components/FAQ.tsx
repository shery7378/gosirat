"use client";

import type { NextPage } from "next";
import { useState } from "react";

const faqData = [
 {
  question: "How does live GPS tracking work?",
  answer:
   "Every GoSirat vehicle is equipped with live GPS tracking. Parents can view the vehicle's real-time location, estimated arrival time (ETA), and receive instant notifications during pickup, the journey, arrival at school, and drop-off through the GoSirat Parent App.",
 },
 {
  question: "How are GoSirat drivers verified?",
  answer:
   "Every GoSirat driver completes identity verification, background checks, and safety screening before joining the platform. Drivers also receive child safety and defensive driving training to provide safe and reliable school transportation services.",
 },
 {
  question: "How does QR child verification work?",
  answer:
   "GoSirat uses a secure QR verification system to confirm each student's identity during pickup and drop-off. This ensures children are safely handed over to authorized guardians and helps prevent unauthorized pickups.",
 },
 {
  question: "What happens if my child is absent?",
  answer:
   "Parents can report planned absences directly through the GoSirat Parent App. Drivers receive real-time updates, allowing routes to be adjusted efficiently while keeping schools informed.",
 },
 {
  question: "What happens during an emergency?",
  answer:
   "Parents receive immediate notifications while our operations team coordinates with drivers and schools to manage the situation safely.",
 },
 {
  question: "Are vehicles inspected regularly?",
  answer:
   "Yes. Every vehicle follows scheduled maintenance and safety inspections before serving students.",
 },
 {
  question: "How do GoSirat transportation packages work?",
  answer:
   "GoSirat offers flexible transportation packages designed for families and schools. Parents can manage subscriptions, view invoices, renew plans, and make payments through the Parent App.",
 },
 {
  question: "Which cities does GoSirat currently serve?",
  answer:
   "GoSirat is initially launching in Islamabad and Rawalpindi, with plans to expand across Pakistan, Saudi Arabia, and other international markets.",
 },
 {
  question: "What safety features does GoSirat provide?",
  answer:
   "GoSirat combines verified drivers, live GPS tracking, QR verification, secure child handover, attendance monitoring, and real-time notifications to provide a safe and reliable school transportation experience.",
 },
 {
  question: "How can I contact GoSirat?",
  answer:
   "You can contact our support team through the Contact page, email, or phone for assistance with registrations, transportation services, or technical support.",
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
      <div className="h-[6px] w-[6px] relative rounded-[22369600px] bg-[#176938]" />
      <div className="relative font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">
       Frequently Asked Questions
      </div>
     </div>
     <h2 className="m-0 relative text-6xl tracking-[-1.5px] leading-[75px] capitalize font-semibold font-[inherit] text-[#0c140f] mq750:text-5xl mq750:leading-[60px] mq450:text-4xl mq450:leading-[45px]">
      Frequently Asked Questions About GoSirat
     </h2>
     <div className="relative text-lg leading-7 text-[#57605b] max-w-[800px] mt-2 font-normal tracking-[0px]">
      Find answers to common questions about GoSirat's school transportation services, including live GPS tracking, verified drivers, QR verification, student safety, attendance, and transportation packages. We're here to help parents, schools, and drivers make every school journey safe and stress-free.
     </div>
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
