import { CleanIcon, FireIcon, FirstAidIcon, GarageIcon, LocationIcon, SeatBeltIcon, ShieldIcon } from "./SafetyIcons";

const standards = [
    { title: "Regular Maintenance", Icon: ShieldIcon },
    { title: "GPS Installed", Icon: LocationIcon },
    { title: "Seat Belts", Icon: SeatBeltIcon },
    { title: "Emergency First Aid Kit", Icon: FirstAidIcon },
    { title: "Fire Extinguisher", Icon: FireIcon },
    { title: "Clean Interior", Icon: CleanIcon },
    { title: "Safety Inspection Schedule", Icon: GarageIcon },
];

export default function SafetyStandards() {
    return (
        <section className="bg-[#0B3D2E] px-6 py-20 text-white lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8CE0B4]">Fleet standards</p>
                    <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                        Every vehicle meets safety standards.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-white/75">
                        Every GoSirat vehicle is regularly inspected and maintained to provide a clean, comfortable, and safe journey for students.
                    </p>
                </div>
                <div className="mt-12 grid gap-5 grid-cols-2 md:grid-cols-4">
                    {standards.map((item) => (
                        <div key={item.title} className="rounded-[16px] border border-[#205742] bg-[#164433] p-8 text-center transition-all hover:bg-[#1A4E3B]">
                            <div className="mx-auto flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#1FA463]/15 text-[#8CE0B4]">
                                <item.Icon />
                            </div>
                            <p className="mt-6 text-[14px] font-bold tracking-wide text-white">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
