import { CheckIcon, ShieldIcon } from "./SafetyIcons";

const verificationItems = [
    "Identity verification",
    "Driving license verification",
    "Background screening",
    "Child safety training",
    "Regular performance reviews",
];

export default function SafetyDrivers() {
    return (
        <section id="drivers" className="bg-[#F1F4F1] px-6 py-20 lg:px-8">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-12 lg:items-center">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1FA463]">Verified drivers</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-[#0B3D2E] sm:text-4xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                        Every driver is carefully verified.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[#4A574F]">
                        Our drivers complete a strict verification process before joining GoSirat. We review identity documents, driving records, and professional experience to ensure every child travels with a responsible and qualified driver.
                    </p>
                    <div className="mt-8 space-y-3">
                        {verificationItems.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-[14px] border border-[#E4E9E3] bg-white px-4 py-3 shadow-sm">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DCF3E6] text-[#1FA463]">
                                    <CheckIcon />
                                </span>
                                <span className="text-sm font-medium text-[#0B3D2E]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-[28px] bg-[#0F4C3A] p-8 shadow-[0_1px_2px_rgba(14,27,22,0.04),0_12px_32px_-12px_rgba(14,27,22,0.12)]">
                    <div className="rounded-[24px] border border-white/20 bg-white/10 p-8 text-center text-white">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#8CE0B4]/40 bg-[#1FA463]/20">
                            <ShieldIcon />
                        </div>
                        <h3 className="mt-6 text-2xl font-semibold" style={{ fontFamily: "Manrope, sans-serif" }}>
                            Strong safety standards
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-white/80">
                            Each ride is backed by verified personnel, clear policies, and operational oversight that is designed to protect children from departure to arrival.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
