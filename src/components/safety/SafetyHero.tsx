import Link from "next/link";
import Image from "next/image";

export default function SafetyHero() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-white">
            <Image
                src="/images/gosirat-school-transportation-safety.webp"
                alt="GoSirat safe school transportation with verified drivers and secure student pickup"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,28,0.74),rgba(9,38,28,0.56)_45%,rgba(8,32,24,0.87))]" />
            <div className="relative z-10 max-w-4xl px-8 py-24 text-center mq825:px-6">
                <span className="inline-flex items-center gap-2 rounded-[22369600px] border border-white/20 bg-white/10 px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-[#F8FBF8]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#2ecc71]" />
                    GoSirat safety standards
                </span>
                <h1 className="mt-6 font-[Inter] font-semibold text-[64px] leading-[100%] tracking-[0px] text-center text-white mq825:text-[51px] mq450:text-[38px]">
                    Your child&apos;s safety is our first priority.
                </h1>
                <p className="mx-auto mt-6 max-w-[800px] font-normal text-[20px] leading-[32.5px] text-[#F8FBF8]/80 mq450:text-base mq450:leading-[26px]">
                    Every child deserves a safe and worry-free journey to school. GoSirat combines professional drivers, live GPS tracking, secure QR verification, first aid preparedness, and emergency support to deliver trusted school transportation services.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link href="/register" className="cursor-pointer border-none py-5 px-6 bg-gradient-to-r from-[#176938] to-[#2ecc71] shadow-lg rounded-2xl flex items-center justify-center gap-[7px] hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 no-underline transition-all duration-300 group">
                        <span className="relative text-xl leading-5 font-medium font-[Inter] text-[#F7F9F6] tracking-wide">
                            Register Today
                        </span>
                        <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
