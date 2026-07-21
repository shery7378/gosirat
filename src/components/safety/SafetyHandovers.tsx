import { SchoolIcon, SimpleHouseIcon } from "./SafetyIcons";

const processSteps = [
    { title: "Home pickup", accent: false },
    { title: "School arrival", accent: true },
    { title: "School release", accent: false },
    { title: "Home drop-off", accent: true },
];

export default function SafetyHandovers() {
    return (
        <section id="verification" className="bg-gosirat-bg-light px-8 py-24 mq825:px-6" data-aos="fade-up">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-[800px] text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-gosirat-green">
                        <span className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                        SECURE HANDOVERS
                    </div>
                    <h2 className="mt-4 font-sans font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                        Every Pickup. Every Drop-off.<br />Verified.
                    </h2>
                    <p className="mt-5 font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray">
                        Every student handover is protected with secure QR verification. Only authorized parents or guardians can hand over or receive a child, creating a secure digital record for every journey.
                    </p>
                </div>
                
                <div className="relative mt-20">
                    {/* Dotted connecting line */}
                    <div className="absolute top-10 left-[12.5%] right-[12.5%] h-[2px] border-t-[2px] border-dashed border-[rgba(23,105,56,0.15)] block mq825:hidden"></div>
                    
                    <div className="grid grid-cols-4 mq825:grid-cols-2 mq450:grid-cols-1 gap-10 relative z-10">
                        {processSteps.map((step, index) => (
                            <div key={step.title} className="flex flex-col items-center text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[rgba(23,105,56,0.15)]/50">
                                    <div className="flex items-center justify-center text-gosirat-green">
                                        {step.title.includes("School") ? <SchoolIcon /> : <SimpleHouseIcon />}
                                    </div>
                                </div>
                                <p className="mt-8 text-[11px] font-extrabold uppercase tracking-[0.15em] text-gosirat-green">
                                    STEP 0{index + 1}
                                </p>
                                <h3 className="mt-2 text-[15px] font-bold text-gosirat-black">{step.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-center gap-3 text-sm font-medium text-gosirat-gray">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gosirat-accent-light" aria-hidden="true">
                        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                        <circle cx="6.5" cy="17.5" r="1.5" fill="currentColor" />
                        <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor" />
                    </svg>
                    Every scan is securely recorded with date and time.
                </div>
            </div>
        </section>
    );
}
