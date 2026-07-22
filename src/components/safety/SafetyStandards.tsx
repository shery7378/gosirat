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
        <section className="bg-gradient-to-b from-gosirat-green to-[#022913] px-8 py-20 text-white mq825:px-6" data-aos="fade-up">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-[1200px] text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-[#F8FBF8]">
                        <span className="h-[6px] w-[6px] rounded-full bg-gosirat-accent" />
                        Fleet standards
                    </div>
                    <h2 className="mt-4 font-sans font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-white mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9 whitespace-nowrap">
                        Every vehicle meets safety standards.
                    </h2>
                    <p className="mt-5 font-sans font-normal text-[18px] leading-[28px] tracking-normal text-[#F8FBF8]/80 max-w-[1050px]">
                        Every GoSirat vehicle is regularly inspected and maintained to provide a clean, comfortable, and safe journey for students.
                    </p>
                </div>
                <div className="mt-12 grid gap-5 grid-cols-4 mq825:grid-cols-2 mq450:grid-cols-1">
                    {standards.map((item) => (
                        <div key={item.title} className="rounded-[16px] border border-[#205742] bg-[#164433] p-8 text-center transition-all hover:bg-[#1A4E3B]">
                            <div className="mx-auto flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-gosirat-green/15 text-gosirat-accent-light">
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
