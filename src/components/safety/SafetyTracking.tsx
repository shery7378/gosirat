import { CheckIcon } from "./SafetyIcons";

const trackingItems = [
    "Real-time vehicle tracking",
    "Estimated arrival time",
    "Route monitoring",
    "Live journey updates",
    "Peace of mind for parents",
];

export default function SafetyTracking() {
    return (
        <section id="tracking" className="bg-[#FBFAF7] px-6 py-20 lg:px-8">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-12 lg:items-center">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FE0]">Live GPS tracking</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-[#0B3D2E] sm:text-4xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                        Know where your child is anytime.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[#4A574F]">
                        No more guessing. Parents can view the school vehicle in real time, follow its route, check the estimated arrival time, and receive live journey updates directly through the GoSirat app.
                    </p>
                    <div className="mt-8 space-y-3">
                        {trackingItems.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-[14px] border border-[#E4E9E3] bg-[#F1F4F1] px-4 py-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DDE9FC] text-[#1D6FE0]">
                                    <CheckIcon />
                                </span>
                                <span className="text-sm font-medium text-[#0B3D2E]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-[28px] bg-[#0F4C3A] p-6 lg:p-10 shadow-[0_1px_2px_rgba(14,27,22,0.04),0_12px_32px_-12px_rgba(14,27,22,0.12)]">
                    <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto overflow-hidden rounded-[24px] border border-white/5 bg-[#144A39]">
                        {/* Background Grid */}
                        <div className="absolute inset-0 pointer-events-none flex flex-col">
                            <div className="flex-1 border-b border-white/10"></div>
                            <div className="flex-1 border-b border-white/10"></div>
                            <div className="flex-1"></div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none flex">
                            <div className="flex-1 border-r border-white/10"></div>
                            <div className="flex-1 border-r border-white/10"></div>
                            <div className="flex-1"></div>
                        </div>

                        {/* SVG Map Elements */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {/* Dotted path */}
                            <path 
                                d="M 15 75 C 30 40, 60 60, 85 25" 
                                fill="none" 
                                stroke="#8CE0B4" 
                                strokeWidth="1.5" 
                                strokeDasharray="2 3" 
                                strokeLinecap="round" 
                            />
                            {/* Endpoints */}
                            <circle cx="15" cy="75" r="3" fill="white" />
                            <circle cx="85" cy="25" r="3" fill="white" />
                        </svg>
                        
                        {/* Center Icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full border border-[#8CE0B4]/40 flex items-center justify-center">
                                <div className="w-9 h-9 rounded-full border border-[#8CE0B4] flex items-center justify-center bg-[#1FA463] shadow-[0_0_15px_rgba(31,164,99,0.5)]">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* ETA Pill Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 z-10 rounded-[16px] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                            <p className="text-[12px] font-bold tracking-[0.1em] text-white">ETA</p>
                            <p className="mt-1 text-2xl font-bold text-[#8CE0B4]">6 MIN AWAY</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
