import { Container } from "../Container";

export const DriverEarnings = () => {
 return (
  <section className="self-stretch bg-white flex flex-col items-center py-[100px] px-[60px] mq450:py-[65px] mq450:px-4 mq450:box-border" data-aos="fade-out">
   <Container className="flex items-center justify-between gap-12 lg:flex-wrap">
    
    <div className="flex-1 min-w-[400px] flex justify-center mq450:min-w-full">
     <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0px_16px_32px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col font-[Inter]" data-aos="zoom-in" data-aos-delay="100">
      
      {/* Green Header */}
      <div className="bg-[#176938] p-6 text-white flex flex-col gap-2">
       <div className="text-[28px] font-bold">PKR 70,400</div>
       <div className="text-[13px] text-[rgba(255,255,255,0.8)]">
        Earned so far this month - 18 working days
       </div>
       <div className="text-[13px] font-semibold text-[#a5d6a7] mt-2 flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        +12% Vs Last Month
       </div>
      </div>

      {/* White Body */}
      <div className="p-6 flex flex-col gap-6">
       
       {/* Item 1 */}
       <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
         <div className="w-10 h-10 rounded-full bg-[#f4f7f4] flex items-center justify-center shrink-0" data-aos="zoom-in" data-aos-delay="200">
          <svg className="w-5 h-5 text-[#176938]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
         </div>
         <div className="flex flex-col">
          <div className="text-[15px] font-bold text-[#09131a]">Base salary</div>
          <div className="text-[13px] text-[#57605b] mt-0.5">28 trips × PKR 2,286</div>
         </div>
        </div>
        <div className="text-[14px] font-bold text-[#1a73e8] mt-1">PKR 64,000</div>
       </div>

       {/* Item 2 */}
       <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
         <div className="w-10 h-10 rounded-full bg-[#f4f7f4] flex items-center justify-center shrink-0" data-aos="zoom-in" data-aos-delay="300">
          <svg className="w-5 h-5 text-[#176938]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
         </div>
         <div className="flex flex-col">
          <div className="text-[15px] font-bold text-[#09131a]">Green impact bonus</div>
          <div className="text-[13px] text-[#57605b] mt-0.5">142 kg CO₂ saved</div>
         </div>
        </div>
        <div className="text-[14px] font-bold text-[#1a73e8] mt-1">PKR 4,400</div>
       </div>

       {/* Item 3 */}
       <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
         <div className="w-10 h-10 rounded-full bg-[#f4f7f4] flex items-center justify-center shrink-0" data-aos="fade-in" data-aos-delay="400">
          <svg className="w-5 h-5 text-[#176938]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
         </div>
         <div className="flex flex-col">
          <div className="text-[15px] font-bold text-[#09131a]">Branding bonus</div>
          <div className="text-[13px] text-[#57605b] mt-0.5">Full vehicle wrap</div>
         </div>
        </div>
        <div className="text-[14px] font-bold text-[#1a73e8] mt-1">PKR 2,000</div>
       </div>

      </div>
     </div>
    </div>
    
    <div className="flex-1 flex flex-col items-start gap-6 min-w-[400px] mq450:min-w-full">
     <div className="h-[29.3px] rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] flex items-center py-[5px] px-3.5 gap-[5px]" data-aos="zoom-in" data-aos-delay="500">
      <div className="h-1.5 w-1.5 rounded-[22369600px] bg-[#176938]" />
      <div className="tracking-[1.68px] leading-4 uppercase font-medium text-xs text-[#176938]">
       Earnings
      </div>
     </div>
     <h2 className="m-0 text-5xl tracking-[-1.5px] leading-[1.2] font-semibold text-[#09131a] mq450:text-[38px]">
      Transparent. Predictable.<br />Paid On Time.
     </h2>
     <p className="m-0 text-lg leading-[29px] text-[#202A32] max-w-[500px]">
      Base salary, performance bonuses and complete history — visible in your app, every day.
     </p>
    </div>

   </Container>
  </section>
 );
};
