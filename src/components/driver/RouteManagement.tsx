import Image from "@/components/CustomImage";

import { Container } from "../Container";

export const RouteManagement = () => {
 return (
  <section className="self-stretch bg-white flex flex-col items-center pt-[100px] pb-0 px-[60px] box-border max-w-full mq450:pt-[65px] mq450:pb-0 mq450:px-4 mq450:box-border">
   <Container className="flex items-end justify-between gap-12 lg:flex-wrap">
    <div className="flex-1 min-w-[400px] flex justify-center mq450:min-w-full">
     <Image
      className="w-full max-w-[500px] h-auto object-contain flex"
      src="/images/gosirat-driver-route-management.webp"
      title="GoSirat Driver App Route Management"
      alt="GoSirat Driver App showing route management, turn-by-turn navigation, student manifests, and live schedules for school transportation."
      width={500}
      height={600}
      priority
      data-aos="fade-in" data-aos-delay="100" />
    </div>
    
    <div className="flex-1 flex flex-col items-start gap-6 min-w-[400px] mq450:min-w-full pb-[100px] lg:pb-12 mq450:pb-8 pt-12">
     <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="zoom-in" data-aos-delay="100">
      <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
      <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
       Route Management
      </div>
     </div>
     <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
      Smart Route Management for Every School Journey
     </h2>
     <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray">
      Manage daily routes, student manifests, turn-by-turn navigation, and live schedules from one easy-to-use Driver App. Every route is planned for safe, efficient, and reliable school transportation.
     </p>
    </div>
   </Container>
  </section>
 );
};
