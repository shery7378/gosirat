import type { NextPage } from "next";
import Image from "@/components/CustomImage";

const FeaturesList: NextPage = () => {
    return (
        <section className="self-stretch flex flex-col items-start py-[100px] px-[60px] mq825:py-[65px] mq825:px-[30px] mq450:px-4 box-border" data-aos="fade-in">
            <section className="self-stretch flex flex-col items-start gap-2.5 text-left text-xs text-gosirat-green font-sans">
                <div className="self-stretch flex items-start">
                    <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-out" data-aos-delay="100">
                        <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                        <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                            Testimonials
                        </div>
                    </div>
                </div>
                <h2 className="m-0 mt-6 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-left text-gosirat-black mq825:text-[38px] mq825:leading-[48px] mq450:text-[24px] mq450:leading-[32px] break-words">
                    Trusted by Parents, Drivers & Schools
                </h2>
                <div className="w-full relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-left text-gosirat-gray max-w-[1050px] mt-[19.7px]">
                    Families, drivers, and schools trust GoSirat for safe school transportation, live GPS tracking, verified drivers, and secure student pick-up and drop-off. Here's what our community has to say about their experience.
                </div>
            </section>
            <div className="self-stretch flex flex-col items-start pt-16 px-0 pb-0 mq450:pt-[42px] mq450:box-border">
                <div className="self-stretch grid grid-cols-3 mq975:grid-cols-2 mq650:grid-cols-1 gap-5">
                    {/* Card 1 */}
                    <TestimonialCard
                        quote="GoSirat has made our school mornings stress-free. I can track the vehicle in real time, receive instant notifications, and know exactly when my daughter arrives safely at school. It gives me complete peace of mind."
                        name="Aisha M."
                        role="Parent of Grade 3 Student"
                    />
                    {/* Card 2 */}
                    <TestimonialCard
                        quote="The QR verification system and secure handover are the features I trust the most. Every pickup and drop-off is verified, which makes me feel confident that my children are always safe."
                        name="Hassan K."
                        role="Parent of Grade 6 & Grade 8 Students"
                    />
                    {/* Card 3 */}
                    <TestimonialCard
                        quote="The GoSirat Driver App makes my daily work much easier. Route navigation, student attendance, QR verification, and earnings are all available in one place, allowing me to focus on driving safely."
                        name="Yousef R."
                        role="GoSirat Driver • 3 Years Experience"
                    />
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({
    quote,
    name,
    role,
}: {
    quote: string;
    name: string;
    role: string;
}) => (
    <section
        className="
   flex flex-col
   shadow-[0px_1px_2px_rgba(16,24,16,0.04),_0px_8px_24px_rgba(16,24,16,0.06)]
   rounded-[28px] bg-white
   border-[rgba(222,227,222,0.7)] border-solid border-[0.7px]
   p-8
   mq650:p-6
   mq450:p-5
   text-left text-lg text-gosirat-black font-sans
   h-full
   w-full overflow-hidden
  "
    >
        <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-gosirat-green fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
            ))}
        </div>

        <div className="flex-1 pt-5 mq450:pt-4 w-full">
            <p className="
    m-0 relative font-sans font-normal text-[18px] leading-[29.25px] tracking-normal text-gosirat-black
    mq450:text-[16px] mq450:leading-[26px]
    break-words whitespace-normal
   ">
                "{quote}"
            </p>
        </div>

        <div className="
   pt-8 mq450:pt-6
   border-t border-[#dee3de] mt-8 mq450:mt-6
  ">
            <p className="m-0 text-base leading-6 font-semibold">{name}</p>
            <p className="m-0 text-sm leading-5 text-gosirat-gray">{role}</p>
        </div>
    </section>
);
export default FeaturesList;

