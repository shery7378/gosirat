import Image from "next/image";

export const ParentStories = ({ isAboutPage = false }: { isAboutPage?: boolean }) => {
    return (
        <section className="
   self-stretch flex flex-col items-start
   py-20 px-16
   mq650:py-14 mq650:px-8
   mq450:py-10 mq450:px-4
  " data-aos="zoom-in">
            <section className="self-stretch flex flex-col items-start gap-2.5 text-left text-xs text-gosirat-green font-sans">
                <div className="self-stretch flex items-start">
                    <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="100">
                        <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                        <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                            Parent Stories
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start pt-6 px-0 pb-0 box-border">
                    <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
                        Trusted by Families for Safer School Transportation
                    </h2>
                </div>
                <div className="self-stretch flex flex-col items-start pt-5 px-0 pb-0 box-border">
                    <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray max-w-[1050px]">
                        Parents trust GoSirat to make every school journey safer, smarter, and more transparent. From live GPS tracking to verified drivers and secure QR verification, our platform gives families confidence and peace of mind every school day.
                    </p>
                </div>
            </section>

            <div className="self-stretch pt-16 mq650:pt-10 mq450:pt-8">
                <div className="
     grid gap-5
     grid-cols-3
     lg:grid-cols-2
     mq650:grid-cols-1
    ">
                    {/* Card 1 */}
                    <TestimonialCard
                        quote="GoSirat has completely changed our school mornings. Live GPS tracking lets me know exactly where the school vehicle is, and I always receive confirmation when my daughter arrives safely at school."
                        name="Aisha M."
                        role="Parent • Grade 3 Student"
                    />
                    {/* Card 2 */}
                    <TestimonialCard
                        quote="The QR verification and instant notifications give our family complete confidence. Every pickup, school arrival, and home drop-off is recorded, so we always know our children are safe."
                        name="Hassan K."
                        role="Parent • Grade 6 & Grade 8 Students"
                    />
                    {/* Card 3 */}
                    <TestimonialCard
                        quote="Knowing my son's journey is tracked from start to finish gives me real peace of mind. GoSirat has made school transportation safer, more reliable, and completely stress-free for our family."
                        name="Sarah A."
                        role="Parent • Grade 5 Student"
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
                {quote}
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