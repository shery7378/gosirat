import React from 'react';
import Image from 'next/image';

export const AboutTeam = () => {
      return (
            <section className="w-full bg-light-gray-30 overflow-hidden flex flex-col items-start justify-center p-[60px] box-border gap-10 max-w-full text-left text-sm text-black font-manrope mq450:gap-5 mq450:py-[39px] mq450:px-4 mq450:box-border" data-aos="fade-out">
                  <div className="w-full max-w-[770px] flex flex-col items-start justify-center gap-3 shrink-0">
                        <div className="rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center justify-center py-[6px] px-[14px] gap-[8px] text-gosirat-green">
                              <div className="h-[6px] w-[6px] relative rounded-full bg-gosirat-green" />
                              <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase">
                                    Message from Our Founder & CEO
                              </div>
                        </div>
                        <h2 className="m-0 relative text-[44px] capitalize font-medium font-sans mq450:text-[35px] mq450:text-[26px]">
                              A Personal Mission to Make Every School Journey Safer
                        </h2>
                  </div>
                  <section className="self-stretch flex flex-col md:flex-row items-center md:items-start gap-[30px] max-w-full shrink-0 text-left text-lg text-[#101010] font-sans">
                        <div className="flex-1 flex flex-col items-start py-5 px-0 box-border w-full md:min-w-[494px] mq450:gap-4">
                              <div className="self-stretch relative tracking-[1px] leading-7 flex flex-col gap-4">
                                    <span className="font-semibold">GoSirat was born from a simple question that many parents ask every day: "Has my child reached school safely?" That question inspired us to build a smarter, safer, and more transparent school transportation platform for families, schools, and drivers.</span>
                                    <span>Like many parents, I watched my four-year-old daughter leave for school each morning. Although I trusted the driver, there was always a moment of uncertainty until I received confirmation that she had arrived safely.</span>
                                    <span>I soon realized this wasn't just my concern—it was a concern shared by thousands of parents every day. Families deserved more than hope; they deserved visibility, trust, and peace of mind. That vision became GoSirat.</span>
                                    <span>We built a school transportation platform that combines live GPS tracking, verified drivers, secure QR verification, and real-time notifications so parents always know where their child is and schools can manage transportation with confidence.</span>
                                    <span>The name "Sirat" means path or journey. For us, it represents every child's daily journey and our commitment to making that journey safer, smarter, and more transparent.</span>
                                    <span>GoSirat is more than technology—it is our promise to every parent, school, and driver that student safety will always come first.</span>
                                    <span>Thank you for believing in our vision. Together, we're building a future where every school journey is backed by trust, innovation, and care.</span>
                              </div>
                        </div>
                        <div className="h-fit w-full max-w-[530px] rounded-xl bg-white flex flex-col items-center gap-8 text-base text-black font-manrope mq450:gap-4 flex-1 shadow-sm" data-aos="fade-out" data-aos-delay="100">
                              <Image
                                    className="self-stretch relative rounded-lg w-full h-auto object-cover shrink-0"
                                    loading="lazy"
                                    width={530}
                                    height={280}
                                    sizes="100vw"
                                    alt="Muhammad Haroon, Founder and CEO of GoSirat, sharing the vision for safer and smarter school transportation."
                                    title="Muhammad Haroon Founder and CEO of GoSirat"
                                    src="/images/muhammad-haroon-founder-ceo-gosirat.webp"
                                    data-aos="fade-out" data-aos-delay="100" />
                              <div className="self-stretch flex flex-col items-center gap-6 shrink-0 px-6 pb-6">
                                    <div className="w-full max-w-[778px] relative leading-[120%] hidden shrink-0">{`My boys, Tucker and Noah, were training hard and competing year-round. But
the products being marketed to young athletes weren’t made for kids. `}</div>
                                    <div className="w-full flex flex-col items-start shrink-0 text-xl font-sans">
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
