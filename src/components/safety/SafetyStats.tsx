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
        <section id="stats" className="bg-[#f8fbf8] px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176938]">Our safety statistics</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-[#0c140f] sm:text-4xl">
                        Trusted numbers, verified safety.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[#57605b]">
                        GoSirat combines modern technology with professional transportation services to make every ride safer.
                    </p>
                </div>
                <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
