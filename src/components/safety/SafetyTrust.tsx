import { CheckIcon } from "./SafetyIcons";

const trustItems = [
    "Verified drivers",
    "Live GPS tracking",
    "QR verified rides",
    "24/7 support",
];

export default function SafetyTrust() {
    return (
        <section className="px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1FA463]">Built on trust</p>
                <h2 className="mt-4 text-3xl font-extrabold text-[#0B3D2E] sm:text-4xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Safe school transportation starts with trust.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4A574F]">
                    Parents trust us with what matters most — their children. That is why every GoSirat journey is built around safety, transparency, and accountability.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-6 border-t border-[#E4E9E3] pt-8 text-sm font-semibold text-[#0B3D2E]">
                    {trustItems.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DCF3E6] text-[#1FA463]">
                                <CheckIcon />
                            </span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
