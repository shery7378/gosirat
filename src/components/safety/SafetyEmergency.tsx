import { HeartIcon, ShieldPlusIcon, ThinCheckIcon } from "./SafetyIcons";

const readinessCards = [
    {
        title: "First Aid & Emergency Training",
        text: "GoSirat drivers receive first aid and emergency response training so they can respond quickly and responsibly if an unexpected situation occurs.",
        bullets: ["Basic First Aid", "Child Emergency Response", "Emergency Communication", "Safety Reporting", "Incident Management"],
        accent: false,
    },
    {
        title: "24/7 Emergency Support",
        text: "Although emergencies are rare, we're always prepared. Our operations team follows clear procedures to support drivers, parents, and schools during unexpected situations.",
        bullets: ["Immediate Parent Notifications", "Emergency Contact Support", "Alternative Route Assistance", "Incident Reporting", "24/7 Operational Monitoring"],
        accent: true,
    },
];

export default function SafetyEmergency() {
    return (
        <section id="emergency" className="bg-[white] px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176938]">Prepared, not just reactive</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-[#0c140f] sm:text-4xl">
                        Ready for every situation.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[#57605b]">
                        Safety is more than prevention — it is preparation. GoSirat drivers are trained, and our team is equipped to respond quickly and responsibly if an unexpected situation occurs.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 items-stretch">
                    {readinessCards.map((card) => (
                        <div key={card.title} className="rounded-[24px] border border-[rgba(23,105,56,0.15)]/80 bg-white p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
                            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[rgba(213,240,219,0.4)] text-[#176938]">
                                {card.accent ? <HeartIcon /> : <ShieldPlusIcon />}
                            </div>
                            <h3 className="mt-6 text-[22px] font-bold text-[#0c140f] tracking-tight">{card.title}</h3>
                            <p className="mt-3 text-[15px] leading-7 text-[#57605b]">{card.text}</p>
                            <ul className="mt-8 flex flex-col">
                                {card.bullets.map((bullet, idx) => (
                                    <li key={bullet} className={`flex items-center gap-4 py-[14px] text-[15px] font-medium text-[#0c140f] ${idx !== 0 ? 'border-t border-[rgba(23,105,56,0.15)]/70' : ''}`}>
                                        <span className="text-[#176938] shrink-0">
                                            <ThinCheckIcon />
                                        </span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
