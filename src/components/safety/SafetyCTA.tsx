import Link from "next/link";

export default function SafetyCTA() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gosirat-green to-[#022913] px-8 py-24 text-white mq825:px-6">
            <div className="relative z-10 mx-auto max-w-[800px] text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-[#F8FBF8]">
                    <span className="h-[6px] w-[6px] rounded-full bg-gosirat-accent" />
                    Get started
                </div>
                <h2 className="mt-4 font-sans font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-white mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                    Give your child a safer ride to school.
                </h2>
                <p className="mt-5 font-sans font-normal text-[18px] leading-[28px] tracking-normal text-[#F8FBF8]/80">
                    Join families across Islamabad and Rawalpindi who trust GoSirat for verified, tracked, and secure school transportation.
                </p>
                <Link href="/register" className="cursor-pointer mt-8 border-none py-5 px-6 bg-gradient-to-r from-gosirat-green to-[#2ecc71] shadow-lg rounded-2xl inline-flex items-center justify-center gap-[7px] hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 no-underline transition-all duration-300 group">
                    <span className="relative text-xl leading-5 font-medium font-sans text-gosirat-bg-light tracking-wide">
                        Register Today
                    </span>
                    <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
