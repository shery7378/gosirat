import Link from "next/link";

export default function SafetyCTA() {
    return (
        <section className="relative overflow-hidden bg-[#0B3D2E] px-6 py-24 text-white lg:px-8">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,28,0.82),rgba(9,38,28,0.7)_50%,rgba(8,32,24,0.88))]" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8CE0B4]">Get started</p>
                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Give your child a safer ride to school.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/80">
                    Join families across Islamabad and Rawalpindi who trust GoSirat for verified, tracked, and secure school transportation.
                </p>
                <Link href="/register" className="mt-8 inline-flex rounded-full bg-[#1FA463] px-8 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5">
                    Register Today
                </Link>
            </div>
        </section>
    );
}
