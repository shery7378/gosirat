import Link from "next/link";

export default function SafetyHero() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/safety.png')",
                }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,28,0.74),rgba(9,38,28,0.56)_45%,rgba(8,32,24,0.87))]" />
            <div className="relative z-10 max-w-4xl px-6 py-24 text-center lg:px-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8CE0B4]">
                    <span className="h-2 w-2 rounded-full bg-[#8CE0B4]" />
                    GoSirat safety standards
                </span>
                <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Your child&apos;s safety is our first priority.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                    Every child deserves a safe and worry-free journey to school. GoSirat combines professional drivers, live GPS tracking, secure QR verification, first aid preparedness, and emergency support to deliver trusted school transportation services.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link href="/register" className="rounded-full bg-[#1FA463] px-8 py-3 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(31,164,99,0.55)] transition hover:-translate-y-0.5">
                        Register Today
                    </Link>
                </div>
            </div>
        </section>
    );
}
