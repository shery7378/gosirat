import Image from "next/image";

export const DriverSafeHandover = () => {
 return (
  <section className="self-stretch bg-gosirat-black flex flex-col items-center py-[100px] px-[60px] box-border max-w-full mq450:py-[65px] mq450:px-4 mq450:box-border">
   <div className="w-full flex items-center justify-between gap-12 lg:flex-wrap-reverse">
    
    <div className="flex-1 flex flex-col items-start gap-6 min-w-[400px] mq450:min-w-full text-base-white">
     <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.1)] border-[rgba(23,105,56,0.3)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
      <div className="h-[6px] w-[6px] rounded-full bg-base-white" />
      <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-[rgba(255,255,255,0.8)]">
       Safe Child Handover
      </div>
     </div>
     <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-light mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
      Secure Student Handover with QR Verification
     </h2>
     <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-light/70 max-w-[600px]">
      Every student pickup, school handover, and drop-off is verified through QR scanning in the GoSirat Driver App, creating a secure record and improving safety throughout every school journey.
     </p>
    </div>

    <div className="flex-1 min-w-[400px] flex justify-end mq450:min-w-full mq450:justify-center">
     <Image
      className="w-full max-w-[500px] h-auto object-contain"
      src="/images/gosirat-driver-app-qr-verification.webp"
      title="GoSirat Driver App QR Verification"
      alt="GoSirat Driver App using QR verification for secure student pickup, school handover, and safe drop-off."
      width={500}
      height={600}
      priority
     data-aos="fade-in" data-aos-delay="100" />
    </div>

   </div>
  </section>
 );
};
