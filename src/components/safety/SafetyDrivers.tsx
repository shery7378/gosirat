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
        <section id="drivers" className="bg-[white] px-8 py-20 mq825:px-6">
            <div className="mx-auto grid grid-cols-2 mq825:grid-cols-1 max-w-7xl gap-12 items-center">
                <div className="flex flex-col items-start text-left">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-gosirat-green">
                        <span className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                        Verified drivers
                    </div>
                    <h2 className="mt-4 font-sans font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                        Every driver is carefully verified.
                    </h2>
                    <p className="mt-5 font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray">
                        Our drivers complete a strict verification process before joining GoSirat. We review identity documents, driving records, and professional experience to ensure every child travels with a responsible and qualified driver.
                    </p>
                    <div className="mt-8 space-y-3 w-full">
                        {verificationItems.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-[14px] border border-[rgba(23,105,56,0.15)] bg-white px-4 py-3 shadow-sm">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(213,240,219,0.4)] text-gosirat-green">
                                    <CheckIcon />
                                </span>
                                <span className="text-sm font-medium text-gosirat-black">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative aspect-[4/5] w-full max-w-none mq825:max-w-md mq825:mx-auto overflow-hidden rounded-[28px] shadow-lg">
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
