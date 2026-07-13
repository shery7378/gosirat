import Image from "next/image";
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
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none overflow-hidden rounded-[28px] shadow-lg">
                    <Image 
                        src="/Phone_with_live_tracking_map_202607131952.jpeg" 
                        alt="Live GPS tracking on GoSirat App" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center" 
                    />
                </div>
            </div>
        </section>
    );
}
