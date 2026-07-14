import Link from "next/link";

export default function SafetyFAQ() {
    return (
        <section className="bg-[white] px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-[32px] border border-[rgba(23,105,56,0.15)] bg-white p-10 text-center shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176938]">Still have questions?</p>
                <h2 className="mt-4 text-3xl font-extrabold text-[#0c140f] sm:text-4xl">
                    Frequently asked questions.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#57605b]">
                    Find answers to common questions about driver verification, tracking, pickup and drop-off, and emergency support on our main FAQ page.
                </p>
                <Link href="/support" className="cursor-pointer mt-8 border-none py-3.5 px-8 bg-gradient-to-r from-[#176938] to-[#2ecc71] h-[54px] shadow-lg rounded-full inline-flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 no-underline transition-all duration-300 group">
                    <span className="relative text-[17px] leading-[20px] font-bold font-inherit text-[#F7F9F6] tracking-wide">
                        View All FAQs
                    </span>
                    <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
