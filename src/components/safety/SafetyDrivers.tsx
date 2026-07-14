import Image from "next/image";
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
        <section id="drivers" className="bg-[white] px-6 py-20 lg:px-8">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-12 lg:items-center">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176938]">Verified drivers</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-[#0c140f] sm:text-4xl">
                        Every driver is carefully verified.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[#57605b]">
                        Our drivers complete a strict verification process before joining GoSirat. We review identity documents, driving records, and professional experience to ensure every child travels with a responsible and qualified driver.
                    </p>
                    <div className="mt-8 space-y-3">
                        {verificationItems.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-[14px] border border-[rgba(23,105,56,0.15)] bg-white px-4 py-3 shadow-sm">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(213,240,219,0.4)] text-[#176938]">
                                    <CheckIcon />
                                </span>
                                <span className="text-sm font-medium text-[#0c140f]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none overflow-hidden rounded-[28px] shadow-lg">
                    <Image 
                        src="/images/gosirat-verified-school-transport-driver.webp" 
                        alt="Verified GoSirat school transport driver ensuring safe student travel" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top" 
                    />
                </div>
            </div>
        </section>
    );
}
