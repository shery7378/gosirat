import React from 'react';
import Image from 'next/image';

export const AboutTeam = () => {
 return (
  <section className="w-full bg-light-gray-30 overflow-hidden flex flex-col items-start justify-center p-[60px] box-border gap-10 max-w-full text-left text-sm text-black font-[Manrope] mq450:gap-5 mq450:py-[39px] mq450:px-4 mq450:box-border" data-aos="fade-out">
   <div className="w-full max-w-[770px] flex flex-col items-start justify-center gap-3 shrink-0">
    <div className="rounded bg-[rgba(162,255,0,0.4)] border-electric-green border-solid border-[0.5px] hidden items-center justify-center py-[7px] px-3 gap-2">
     <div className="h-1.5 w-1.5 relative rounded-[50%] bg-black" />
     <div className="relative leading-[100%] uppercase font-medium">
      Our team
     </div>
    </div>
    <h2 className="m-0 relative text-[44px] capitalize font-medium font-[Inter] mq450:text-[35px] mq450:text-[26px]">
     Message From Our CEO
    </h2>
   </div>
   <section className="self-stretch flex flex-col md:flex-row items-center md:items-start gap-[30px] max-w-full shrink-0 text-left text-lg text-[#101010] font-[Inter]">
    <div className="flex-1 flex flex-col items-start py-5 px-0 box-border w-full md:min-w-[494px] mq450:gap-4">
     <div className="self-stretch relative tracking-[1px] leading-7 flex flex-col gap-4">
      <span>GoSirat began not as a business idea, but as a father's concern.</span>
      <span>Like many parents, every morning I watched my four year old daughter leave for school. Although I trusted the driver, I found myself asking the same question every single day: "Has she reached school safely?"</span>
      <span>Until I received a call or message, there was always a sense of uncertainty. I realized that thousands of parents experience the same feeling every day, a simple lack of visibility into their child's journey.</span>
      <span>That moment became the inspiration behind GoSirat.</span>
      <span>We envisioned a platform where parents no longer have to wonder. A platform that keeps them informed through real time updates, live tracking, verified guardians, and secure handovers, so they can focus on their day with confidence and peace of mind.</span>
      <span>The name "Sirat" means path or journey. GoSirat represents the path your child follows every day, and our commitment is to make that journey safer, smarter, and more transparent.</span>
      <span>GoSirat is more than a transportation platform. It is our promise to parents that every school journey should be backed by technology, trust, and care.</span>
      <span>Thank you for believing in our vision.<br/>Stay safe. Stay informed. And enjoy the peace of mind you deserve.</span>
     </div>
    </div>
    <div className="h-fit w-full max-w-[530px] rounded-xl bg-white flex flex-col items-center gap-8 text-base text-black font-[Manrope] mq450:gap-4 flex-1 shadow-sm" data-aos="fade-out" data-aos-delay="100">
     <Image
      className="self-stretch relative rounded-lg w-full h-auto object-cover shrink-0"
      loading="lazy"
      width={530}
      height={280}
      sizes="100vw"
      alt="GoSirat team members and founders"
      src="/images/gosirat-team-members.png"
     data-aos="fade-out" data-aos-delay="100" />
     <div className="self-stretch flex flex-col items-center gap-6 shrink-0 px-6 pb-6">
      <div className="w-full max-w-[778px] relative leading-[120%] hidden shrink-0">{`My boys, Tucker and Noah, were training hard and competing year-round. But
the products being marketed to young athletes weren’t made for kids. `}</div>
      <div className="w-full flex flex-col items-start shrink-0 text-xl font-[Inter]">
       <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[120%] capitalize font-semibold font-[inherit] mq450:text-base mq450:leading-[19px]">Muhammad Haroon — Founder & CEO GoSirat</h3>
      </div>
     </div>
     <div className="w-full max-w-[778px] hidden flex-col items-start gap-[26px] shrink-0 text-xl">
      <Image
       className="w-[95.2px] h-[36.7px] relative"
       width={95.2}
       height={36.7}
       sizes="100vw"
       alt=""
       src="/Group-1707479798.svg"
      data-aos="zoom-in" data-aos-delay="200" />
      <div className="self-stretch flex flex-col items-start gap-6">
       <div className="flex flex-col items-start gap-3 shrink-0">
        <div className="self-stretch relative leading-[120%] font-semibold mq450:text-base mq450:leading-[19px]">
         Muhammad Haroon
        </div>
        <div className="relative text-base leading-[100%]">
         -Founder & CEO, GoSirat
        </div>
       </div>
       <div className="relative text-sm leading-[100%] hidden shrink-0">{`Former Collegiate Athlete & Sports Nutrition Specialist`}</div>
      </div>
     </div>
    </div>
   </section>
  </section>
 );
};
