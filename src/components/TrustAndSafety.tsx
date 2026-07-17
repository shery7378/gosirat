import type { NextPage } from "next";

const TrustAndSafety: NextPage = () => {
 return (
  <section className="self-stretch bg-white flex flex-col items-center p-16 w-full box-border mq450:py-10 mq450:px-4" data-aos="zoom-in">
   <section className="self-stretch flex flex-col items-center text-center text-xs text-[#176938] font-[Inter]">
    <div className="flex flex-col items-center gap-2.5 max-w-4xl w-full">
     <div className="flex items-center rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] py-[5px] px-3.5 gap-1.5" data-aos="fade-out" data-aos-delay="100">
      <div className="h-[6px] w-[6px] relative rounded-[22369600px] bg-[#176938]" />
      <div className="relative font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">{`Trust & safety`}</div>
     </div>
     <h2 className="m-0 relative text-6xl tracking-[-1.5px] leading-[75px] capitalize font-semibold font-[inherit] text-[#0c140f] mq750:text-5xl mq750:leading-[60px] mq450:text-4xl mq450:leading-[45px]">
      <span className="leading-[75px]">{`Safe School Transportation Built Around `}</span>
      <span className="text-[#176938] leading-[75px]">
       Child Safety
      </span>
     </h2>
     <div className="relative text-lg leading-7 text-[#57605b] mt-2">
      At GoSirat, child safety is the foundation of everything we do. Our safe school transportation services combine verified drivers, professional training, live GPS tracking, QR verification, and real-time parent notifications to ensure every school journey is secure. From pickup to drop-off, every interaction is verified, recorded, and visible, giving parents and schools complete peace of mind.
     </div>
    </div>
   </section>
   <div className="self-stretch flex flex-col items-start pt-10 px-0 pb-0">
    <div className="self-stretch flex flex-col items-start gap-5">
     <div className="self-stretch grid grid-cols-3 mq975:grid-cols-2 mq650:grid-cols-1 gap-5 text-left text-xs text-[rgba(23,105,56,0.7)] font-[Inter]">
      <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 gap-5" data-aos="zoom-in" data-aos-delay="200">
       <div className="self-stretch flex items-center justify-between gap-5">
        <div className="tracking-[1.2px] leading-4 font-semibold">
         01
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#176938]" />
       </div>
       <div className="flex flex-col items-start text-2xl text-[#0c140f]">
        <h3 className="m-0 text-[length:inherit] tracking-[-0.6px] leading-[30px] font-semibold font-[inherit] mq450:text-[19px] mq450:leading-6 break-words whitespace-normal">
         Verified Drivers
        </h3>
       </div>
       <div className="flex flex-col items-start text-[15px] text-[#57605b] mt-auto">
        <div className="leading-[24.4px] inline-block break-words whitespace-normal">
         Every GoSirat driver completes background checks, identity verification, and regular re-screening to ensure the highest standards of safe school transportation.
        </div>
       </div>
      </div>

      <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 gap-5" data-aos="fade-in" data-aos-delay="300">
       <div className="self-stretch flex items-center justify-between gap-5">
        <div className="tracking-[1.2px] leading-4 font-semibold">
         02
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#176938]" />
       </div>
       <div className="flex flex-col items-start text-2xl text-[#0c140f]">
        <h3 className="m-0 text-[length:inherit] tracking-[-0.6px] leading-[30px] font-semibold font-[inherit] mq450:text-[19px] mq450:leading-6 break-words whitespace-normal">
         {`Training & Certification`}
        </h3>
       </div>
       <div className="flex flex-col items-start text-[15px] text-[#57605b] mt-auto">
        <div className="leading-[24.4px] inline-block break-words whitespace-normal">
         Drivers receive professional child safety, defensive driving, and emergency response training before providing school pick-and-drop services.
        </div>
       </div>
      </div>

      <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 gap-5" data-aos="fade-out" data-aos-delay="400">
       <div className="self-stretch flex items-center justify-between gap-5">
        <div className="tracking-[1.2px] leading-4 font-semibold">
         03
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#176938]" />
       </div>
       <div className="flex flex-col items-start text-2xl text-[#0c140f]">
        <h3 className="m-0 text-[length:inherit] tracking-[-0.6px] leading-[30px] font-semibold font-[inherit] mq450:text-[19px] mq450:leading-6 break-words whitespace-normal">
         Secure Child Verification
        </h3>
       </div>
       <div className="flex flex-col items-start text-[15px] text-[#57605b] mt-auto">
        <div className="leading-[24.4px] inline-block break-words whitespace-normal">
         QR-based verification confirms every student's identity during pickup and drop-off, ensuring children are always handed over safely to authorized guardians.
        </div>
       </div>
      </div>

      <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 gap-5" data-aos="fade-in" data-aos-delay="500">
       <div className="self-stretch flex items-center justify-between gap-5">
        <div className="tracking-[1.2px] leading-4 font-semibold">
         04
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#176938]" />
       </div>
       <div className="flex flex-col items-start text-2xl text-[#0c140f]">
        <h3 className="m-0 text-[length:inherit] tracking-[-0.6px] leading-[30px] font-semibold font-[inherit] mq450:text-[19px] mq450:leading-6 break-words whitespace-normal">
         Live GPS Tracking
        </h3>
       </div>
       <div className="flex flex-col items-start text-[15px] text-[#57605b] mt-auto">
        <div className="leading-[24.4px] inline-block break-words whitespace-normal">
         Parents can monitor every school journey with live GPS tracking, real-time location updates, and accurate arrival notifications through the GoSirat Parent App.
        </div>
       </div>
      </div>

      <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 gap-5" data-aos="zoom-in" data-aos-delay="600">
       <div className="self-stretch flex items-center justify-between gap-5">
        <div className="tracking-[1.2px] leading-4 font-semibold">
         05
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#176938]" />
       </div>
       <div className="flex flex-col items-start text-2xl text-[#0c140f]">
        <h3 className="m-0 text-[length:inherit] tracking-[-0.6px] leading-[30px] font-semibold font-[inherit] mq450:text-[19px] mq450:leading-6 break-words whitespace-normal">
         Real-Time Parent Notifications
        </h3>
       </div>
       <div className="flex flex-col items-start text-[15px] text-[#57605b] mt-auto">
        <div className="leading-[24.4px] inline-block break-words whitespace-normal">
         Receive instant notifications when your child is picked up, en route, arrives at school, or is safely released, keeping you informed throughout every journey.
        </div>
       </div>
      </div>

      <div className="h-full w-full shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-[28px] bg-white border-[rgba(222,227,222,0.7)] border-solid border-[0.7px] box-border flex flex-col items-start p-8 gap-5" data-aos="fade-out" data-aos-delay="100">
       <div className="self-stretch flex items-center justify-between gap-5">
        <div className="tracking-[1.2px] leading-4 font-semibold">
         06
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#176938]" />
       </div>
       <div className="flex flex-col items-start text-2xl text-[#0c140f]">
        <h3 className="m-0 text-[length:inherit] tracking-[-0.6px] leading-[30px] font-semibold font-[inherit] mq450:text-[19px] mq450:leading-6 break-words whitespace-normal">
         Secure School Release
        </h3>
       </div>
       <div className="flex flex-col items-start text-[15px] text-[#57605b] mt-auto">
        <div className="leading-[24.4px] inline-block break-words whitespace-normal">
         Students are released only to verified guardians using secure digital verification, ensuring every school pickup and drop-off is safe and properly recorded.
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default TrustAndSafety;
