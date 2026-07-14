import Link from "next/link";

export default function SafetyCTA() {
    return (
        <section className="relative overflow-hidden bg-[#0c140f] px-6 py-24 text-white lg:px-8">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,28,0.82),rgba(9,38,28,0.7)_50%,rgba(8,32,24,0.88))]" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8CE0B4]">Get started</p>
                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                    Give your child a safer ride to school.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/80">
                    Join families across Islamabad and Rawalpindi who trust GoSirat for verified, tracked, and secure school transportation.
                </p>
                <Link href="/register" className="cursor-pointer mt-8 border-none py-3.5 px-8 bg-gradient-to-r from-[#176938] to-[#2ecc71] h-[54px] shadow-lg rounded-full inline-flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 no-underline transition-all duration-300 group">
                    <span className="relative text-[17px] leading-[20px] font-bold font-inherit text-[#F7F9F6] tracking-wide">
                        Register Today
                    </span>
                    <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
