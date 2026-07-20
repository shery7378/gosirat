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
        <section id="tracking" className="bg-gosirat-bg-light px-8 py-20 mq825:px-6">
            <div className="mx-auto grid grid-cols-2 mq825:grid-cols-1 max-w-7xl gap-12 items-center">
                <div className="flex flex-col items-start text-left">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-gosirat-green">
                        <span className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                        Live GPS tracking
                    </div>
                    <h2 className="mt-4 font-sans font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                        Know where your child is anytime.
                    </h2>
                    <p className="mt-5 font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray">
                        No more guessing. Parents can view the school vehicle in real time, follow its route, check the estimated arrival time, and receive live journey updates directly through the GoSirat app.
                    </p>
                    <div className="mt-8 space-y-3 w-full">
                        {trackingItems.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-[14px] border border-[rgba(23,105,56,0.15)] bg-[white] px-4 py-3">
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
                        src="/images/Phone_with_live_tracking_map_202607131952.webp" 
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
