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
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176938]">Built on trust</p>
                <h2 className="mt-4 text-3xl font-extrabold text-[#0c140f] sm:text-4xl">
                    Safe school transportation starts with trust.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#57605b]">
                    Parents trust us with what matters most — their children. That is why every GoSirat journey is built around safety, transparency, and accountability.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-6 border-t border-[rgba(23,105,56,0.15)] pt-8 text-sm font-semibold text-[#0c140f]">
                    {trustItems.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(213,240,219,0.4)] text-[#176938]">
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
