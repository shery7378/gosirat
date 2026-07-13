import Image from "next/image";

export const ParentStories = ({ isAboutPage = false }: { isAboutPage?: boolean }) => {
    return (
        <section className="
   self-stretch flex flex-col items-start
   py-20 px-16
   mq650:py-14 mq650:px-8
   mq450:py-10 mq450:px-4
  " data-aos="zoom-in">
            <section className="self-stretch flex flex-col items-start gap-2.5 text-left text-xs text-[#176938] font-[Inter]">
                <div className="self-stretch flex items-start">
                    <div className="rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] flex items-center py-[5px] px-3.5 gap-1.5" data-aos="fade-in" data-aos-delay="100">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#176938] shrink-0" />
                        <div className="tracking-[1.68px] leading-4 uppercase font-medium whitespace-nowrap">
                            Stories
                        </div>
                    </div>
                </div>

                <h2 className="
     m-0 relative capitalize font-semibold font-[inherit] text-[#0c140f]
     text-5xl tracking-[-1.5px] leading-[63px]
     mq750:text-[38px] mq750:leading-[50px]
     mq650:text-[32px] mq650:leading-[42px] mq650:tracking-[-1px]
     mq450:text-[26px] mq450:leading-[34px] mq450:tracking-[-0.5px]
    ">
                    <span>{`Heard from `}</span>
                    <span className="text-[#176938]">parents{isAboutPage ? "," : ""}</span>
                    {isAboutPage && <span> drivers and schools.</span>}
                </h2>
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
                        quote="My mornings finally feel calm. I open the app, see the bus on the map, and I know exactly when she'll be at school."
                        name="Aisha M."
                        role="Parent · Grade 3"
                    />
                    {/* Card 2 */}
                    <TestimonialCard
                        quote="Verification at pickup and at the school gate is the part I appreciate most. Nothing is left to chance."
                        name="Hassan K."
                        role="Parent · Grade 6 & 8"
                    />
                    {/* Card 3 */}
                    <TestimonialCard
                        quote="The driver app keeps me focused on the road. The manifest, the QR check, the earnings — everything I need is one tap away."
                        name="Yousef R."
                        role="GoSirat driver, 3 years"
                    />
                </div>
            </div>
        </section>
    );
};

const QuoteIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="#448b61"
        className="w-8 h-8 shrink-0 mb-2 opacity-100"
        aria-hidden="true"
    >
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
    </svg>
);

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
   text-left text-lg text-[#0c140f] font-[Inter]
   h-full
   w-full overflow-hidden
  "
    >
        <QuoteIcon />

        <div className="flex-1 pt-5 mq450:pt-4 w-full">
            <p className="
    m-0 leading-[29.3px]
    text-lg
    mq450:text-base mq450:leading-[26px]
    break-words
    whitespace-normal
   ">
                {quote}
            </p>
        </div>

        <div className="
   pt-8 mq450:pt-6
   border-t border-[#dee3de] mt-8 mq450:mt-6
  ">
            <p className="m-0 text-base leading-6 font-semibold">{name}</p>
            <p className="m-0 text-sm leading-5 text-[#57605b]">{role}</p>
        </div>
    </section>
);