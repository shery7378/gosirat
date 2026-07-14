import { SchoolIcon, SimpleHouseIcon } from "./SafetyIcons";

const processSteps = [
    { title: "Home pickup", accent: false },
    { title: "School arrival", accent: true },
    { title: "School release", accent: false },
    { title: "Home drop-off", accent: true },
];

export default function SafetyHandovers() {
    return (
        <section id="verification" className="bg-[#f8fbf8] px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-[#176938]">
                        <span className="h-[2px] w-5 bg-[#176938]"></span>
                        SECURE HANDOVERS
                    </div>
                    <h2 className="mt-6 text-4xl font-extrabold text-[#0c140f] sm:text-5xl leading-[1.2]">
                        Every Pickup. Every Drop-off.<br />Verified.
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#57605b]">
                        Every student handover is protected with secure QR verification. Only authorized parents or guardians can hand over or receive a child, creating a secure digital record for every journey.
                    </p>
                </div>
                
                <div className="relative mt-20">
                    {/* Dotted connecting line */}
                    <div className="absolute top-10 left-[12.5%] right-[12.5%] h-[2px] border-t-[2px] border-dashed border-[rgba(23,105,56,0.15)] hidden md:block"></div>
                    
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-4 relative z-10">
                        {processSteps.map((step, index) => (
                            <div key={step.title} className="flex flex-col items-center text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[rgba(23,105,56,0.15)]/50">
                                    <div className="flex items-center justify-center text-[#176938]">
                                        {step.title.includes("School") ? <SchoolIcon /> : <SimpleHouseIcon />}
                                    </div>
                                </div>
                                <p className="mt-8 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#176938]">
                                    STEP 0{index + 1}
                                </p>
                                <h3 className="mt-2 text-[15px] font-bold text-[#0c140f]">{step.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-center gap-3 text-sm font-medium text-[#57605b]">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#8CE0B4]" aria-hidden="true">
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
