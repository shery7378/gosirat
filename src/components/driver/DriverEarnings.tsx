import Image from "@/components/CustomImage";
import { Container } from "../Container";

export const DriverEarnings = () => {
  return (
    <section className="self-stretch bg-white flex flex-col items-center py-[100px] px-[60px] mq450:py-[65px] mq450:px-4 mq450:box-border">
      <Container className="flex flex-col items-center justify-center gap-12">

        <div className="flex flex-col items-center text-center gap-6 max-w-[800px]">
          <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="zoom-in" data-aos-delay="100">
            <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
            <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
              Green Impact Rewards
            </div>
          </div>
          <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
            Drive Smarter.<br className="hidden mq450:block" /> Earn <span className="text-gosirat-green">Greener.</span>
          </h2>
          <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray max-w-[700px]">
            Our AI measures every driver's environmental impact by analyzing route efficiency and CO₂ emissions. The more you reduce, the more you earn — automatically, every month.
          </p>
        </div>

        <div className="w-full flex items-stretch justify-between gap-12 lg:flex-wrap">
          <div className="flex-1 min-w-[400px] flex flex-col mq450:min-w-full">
            <Image
              className="w-full h-full object-cover rounded-[24px]"
              src="/images/Car_driving_with_human_2K_202607151940 (1).webp"
              title="GoSirat Driver Green Impact Rewards"
              alt="GoSirat Driver App showing AI route analysis, CO2 savings, and monthly green impact rewards."
              width={1000}
              height={1000}
              priority
              data-aos="fade-in" data-aos-delay="200" />
          </div>

          {/* Right Side: Earnings Cards */}
          <div className="flex-1 flex flex-col gap-6 min-w-[400px] mq450:min-w-full" data-aos="fade-in" data-aos-delay="300">

            {/* Card 1: Monthly earnings */}
            <div className="bg-white rounded-[24px] shadow-[0px_8px_32px_rgba(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col gap-6 font-sans">
              <div className="flex flex-col gap-2">
                <div className="text-[14px] font-medium text-gosirat-gray">Monthly earnings</div>
                <div className="text-[42px] font-bold text-gosirat-darker tracking-tight">PKR 70,400</div>
                <div className="flex items-center gap-3 mt-1">
                  <div className="px-3 py-1 bg-gosirat-light rounded-full text-[12px] font-semibold text-gosirat-gray">18 working days</div>
                  <div className="px-3 py-1 bg-[rgba(213,240,219,0.5)] rounded-full text-[12px] font-bold text-gosirat-green flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                    12% vs last month
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-gray-100 w-full" />

              <div className="flex flex-col gap-5">
                {/* Item 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center text-[18px]">🚐</div>
                    <div className="flex flex-col">
                      <div className="text-[15px] font-bold text-gosirat-darker">Base earnings</div>
                      <div className="text-[13px] text-[#8e9893]">22 trips × PKR 2,286</div>
                    </div>
                  </div>
                  <div className="text-[14px] font-bold text-gosirat-darker">PKR 50,292</div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gosirat-light flex items-center justify-center text-[18px]">🌿</div>
                    <div className="flex flex-col">
                      <div className="text-[15px] font-bold text-gosirat-green">Green Impact bonus</div>
                      <div className="text-[13px] text-[#8e9893]">142 kg CO₂ saved</div>
                    </div>
                  </div>
                  <div className="text-[14px] font-bold text-gosirat-green">+PKR 4,400</div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#fff8e1] flex items-center justify-center text-[18px]">🎨</div>
                    <div className="flex flex-col">
                      <div className="text-[15px] font-bold text-gosirat-darker">Branding bonus</div>
                      <div className="text-[13px] text-[#8e9893]">Full vehicle wrap</div>
                    </div>
                  </div>
                  <div className="text-[14px] font-bold text-gosirat-darker">+PKR 2,000</div>
                </div>
              </div>
            </div>

            {/* Card 2: Green Impact score */}
            <div className="bg-white rounded-[24px] shadow-[0px_8px_32px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex items-center gap-6 font-sans">
              {/* Circular Progress (mockup) */}
              <div className="relative w-[72px] h-[72px] flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path className="text-gosirat-green" strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-[18px] font-bold text-gosirat-darker leading-none">82%</span>
                  <span className="text-[9px] font-bold text-[#e6b800]">GOLD</span>
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <div className="text-[13px] text-gosirat-gray">Green Impact score</div>
                <div className="text-[16px] font-bold text-gosirat-darker">Gold Driver tier</div>
                <div className="flex items-center gap-6 mt-2">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#8e9893]">CO₂ saved</span>
                    <span className="text-[13px] font-bold text-gosirat-darker">142 kg</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#8e9893]">Bonus earned</span>
                    <span className="text-[13px] font-bold text-gosirat-green">+PKR 4,400</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full grid grid-cols-4 gap-6 mt-4 lg:grid-cols-2 mq750:grid-cols-1" data-aos="fade-up" data-aos-delay="400">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[20px] border border-gray-100 p-6 flex flex-col items-start gap-4 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.04)] transition-shadow font-sans">
            <div className="w-10 h-10 rounded-xl bg-gosirat-light flex items-center justify-center text-[20px]">
              🤖
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-[16px] font-bold text-gosirat-darker">AI Green Score</h3>
              <p className="m-0 text-[13px] leading-[20px] text-gosirat-gray">
                AI analyzes every trip to calculate your Green Impact Score.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[20px] border border-gray-100 p-6 flex flex-col items-start gap-4 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.04)] transition-shadow font-sans">
            <div className="w-10 h-10 rounded-xl bg-gosirat-light flex items-center justify-center text-[20px]">
              🌱
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-[16px] font-bold text-gosirat-darker">Lower carbon emissions</h3>
              <p className="m-0 text-[13px] leading-[20px] text-gosirat-gray">
                Efficient routes and shared transportation reduce CO₂ emissions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[20px] border border-gray-100 p-6 flex flex-col items-start gap-4 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.04)] transition-shadow font-sans">
            <div className="w-10 h-10 rounded-xl bg-gosirat-light flex items-center justify-center text-[20px]">
              🎯
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-[16px] font-bold text-gosirat-darker">Earn Green Points</h3>
              <p className="m-0 text-[13px] leading-[20px] text-gosirat-gray">
                Reduce more emissions to unlock higher Green Impact rewards.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[20px] border border-gray-100 p-6 flex flex-col items-start gap-4 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.04)] transition-shadow font-sans">
            <div className="w-10 h-10 rounded-xl bg-gosirat-light flex items-center justify-center text-[20px]">
              💰
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-[16px] font-bold text-gosirat-darker">Cash bonuses</h3>
              <p className="m-0 text-[13px] leading-[20px] text-gosirat-gray">
                Green Points are automatically converted into real monthly bonuses.
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};
