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
            <div className="relative z-10 max-w-4xl px-6 py-24 text-center lg:px-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8CE0B4]">
                    <span className="h-2 w-2 rounded-full bg-[#8CE0B4]" />
                    GoSirat safety standards
                </span>
                <h1 className="mt-6 font-[Inter] font-semibold text-[64px] leading-[100%] tracking-[0px] text-center text-[#0c140f] sm:text-5xl lg:text-6xl">
                    Your child&apos;s safety is our first priority.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                    Every child deserves a safe and worry-free journey to school. GoSirat combines professional drivers, live GPS tracking, secure QR verification, first aid preparedness, and emergency support to deliver trusted school transportation services.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link href="/register" className="cursor-pointer border-none py-3.5 px-8 bg-gradient-to-r from-[#176938] to-[#2ecc71] h-[54px] shadow-lg rounded-full flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 no-underline transition-all duration-300 group">
                        <span className="relative text-[17px] leading-[20px] font-bold font-inherit text-[#F7F9F6] tracking-wide">
                            Register Today
                        </span>
                        <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
