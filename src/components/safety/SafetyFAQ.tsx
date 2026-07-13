import Link from "next/link";

export default function SafetyFAQ() {
    return (
        <section className="bg-[#F1F4F1] px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-[32px] border border-[#E4E9E3] bg-white p-10 text-center shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1FA463]">Still have questions?</p>
                <h2 className="mt-4 text-3xl font-extrabold text-[#0B3D2E] sm:text-4xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Frequently asked questions.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#4A574F]">
                    Find answers to common questions about driver verification, tracking, pickup and drop-off, and emergency support on our main FAQ page.
                </p>
                <Link href="/support" className="mt-8 inline-flex rounded-full bg-[#1FA463] px-8 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5">
                    View All FAQs
                </Link>
            </div>
        </section>
    );
}
