import { FirstAidIcon, HeartPulseIcon, LocationIcon, QrCodeIcon, ShieldCheckIcon, SimpleHouseIcon } from "./SafetyIcons";

const stats = [
    { value: "100%", label: "Verified Professional Drivers", Icon: ShieldCheckIcon, color: "green" },
    { value: "24/7", label: "Live GPS Tracking", Icon: LocationIcon, color: "blue" },
    { value: "100%", label: "QR Verified Pickups & Drop-offs", Icon: QrCodeIcon, color: "green" },
    { value: "Real-Time", label: "Journey Notifications", Icon: HeartPulseIcon, color: "blue" },
    { value: "First Aid Ready", label: "Trained Drivers", Icon: FirstAidIcon, color: "green" },
    { value: "Every School Day", label: "Safe Student Transportation", Icon: SimpleHouseIcon, color: "blue" },
];

export default function SafetyStats() {
    return (
        <section id="stats" className="bg-[#f8fbf8] px-8 py-20 mq825:px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-[800px] text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-[#176938]">
                        <span className="h-[6px] w-[6px] rounded-full bg-[#176938]" />
                        Our safety statistics
                    </div>
                    <h2 className="mt-4 font-[Inter] font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-[#0c140f] mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                        Trusted numbers, verified safety.
                    </h2>
                    <p className="mt-5 font-[Inter] font-normal text-[18px] leading-[28px] tracking-[0px] text-[#57605b]">
                        GoSirat combines modern technology with professional transportation services to make every ride safer.
                    </p>
                </div>
                <div className="mt-12 grid gap-4 grid-cols-6 mq1125:grid-cols-3 mq825:grid-cols-2 mq450:grid-cols-1">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-[16px] border border-[rgba(23,105,56,0.15)]/70 bg-white p-6 flex flex-col items-center justify-start text-center shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[rgba(213,240,219,0.4)]/70 text-[#176938]">
                                <stat.Icon />
                            </div>
                            <p className="mt-5 text-[20px] font-bold font-inherit text-[#0c140f] leading-tight">
                                {stat.value}
                            </p>
                            <p className="mt-3 text-[14px] font-medium font-inherit text-[#57605b] leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
