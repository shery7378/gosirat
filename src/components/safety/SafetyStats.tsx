import { FirstAidIcon, HeartPulseIcon, LocationIcon, QrCodeIcon, ShieldCheckIcon, SimpleHouseIcon } from "./SafetyIcons";

const stats = [
    { value: "100%", label: "Verified\nProfessional\nDrivers", Icon: ShieldCheckIcon, color: "green" },
    { value: "24/7", label: "Live GPS Tracking", Icon: LocationIcon, color: "blue" },
    { value: "100%", label: "QR Verified\nPickups & Drop-\noffs", Icon: QrCodeIcon, color: "green" },
    { value: "Real-Time", label: "Journey\nNotifications", Icon: HeartPulseIcon, color: "blue" },
    { value: "First Aid\nReady", label: "Trained Drivers", Icon: FirstAidIcon, color: "green" },
    { value: "Every\nSchool Day", label: "Safe Student\nTransportation", Icon: SimpleHouseIcon, color: "blue" },
];

export default function SafetyStats() {
    return (
        <section id="stats" className="bg-[#FBFAF7] px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1FA463]">Our safety statistics</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-[#0B3D2E] sm:text-4xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                        Trusted numbers, verified safety.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[#4A574F]">
                        GoSirat combines modern technology with professional transportation services to make every ride safer.
                    </p>
                </div>
                <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-[16px] border border-[#E4E9E3]/70 bg-white p-6 flex flex-col items-center justify-start text-center shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                            <div className={`flex h-[38px] w-[38px] items-center justify-center rounded-[10px] ${stat.color === 'green' ? 'bg-[#DCF3E6]/70 text-[#1FA463]' : 'bg-[#DDE9FC]/70 text-[#1D6FE0]'}`}>
                                <stat.Icon />
                            </div>
                            <p className="mt-5 text-[22px] font-extrabold text-[#0B3D2E] whitespace-pre-line leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                                {stat.value}
                            </p>
                            <p className="mt-3 text-[12px] font-mono text-[#4A574F] whitespace-pre-line leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
