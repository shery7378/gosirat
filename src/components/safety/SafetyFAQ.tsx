import Link from "next/link";

export default function SafetyFAQ() {
    return (
        <section className="bg-[white] px-8 py-20 mq825:px-6">
            <div className="mx-auto max-w-3xl rounded-[32px] border border-[rgba(23,105,56,0.15)] bg-white p-10 text-center shadow-sm flex flex-col items-center">
                <div className="inline-flex items-center gap-2 rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-[#176938]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#176938]" />
                    Still have questions?
                </div>
                <h2 className="mt-4 font-[Inter] font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-[#0c140f] mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                    Frequently asked questions.
                </h2>
                <p className="mt-5 font-[Inter] font-normal text-[18px] leading-[28px] tracking-[0px] text-[#57605b]">
                    Find answers to common questions about driver verification, tracking, pickup and drop-off, and emergency support on our main FAQ page.
                </p>
                <Link href="/support" className="cursor-pointer mt-8 border-none py-5 px-6 bg-gradient-to-r from-[#176938] to-[#2ecc71] shadow-lg rounded-2xl inline-flex items-center justify-center gap-[7px] hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 no-underline transition-all duration-300 group">
                    <span className="relative text-xl leading-5 font-medium font-[Inter] text-[#F7F9F6] tracking-wide">
                        View All FAQs
                    </span>
                    <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
