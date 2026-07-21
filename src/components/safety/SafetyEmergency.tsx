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
        <section id="emergency" className="bg-[white] px-8 py-20 mq825:px-6" data-aos="fade-up">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-[800px] text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-gosirat-green">
                        <span className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                        Prepared, not just reactive
                    </div>
                    <h2 className="mt-4 font-sans font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                        Ready for every situation.
                    </h2>
                    <p className="mt-5 font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray">
                        Safety is more than prevention — it is preparation. GoSirat drivers are trained, and our team is equipped to respond quickly and responsibly if an unexpected situation occurs.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 grid-cols-2 mq825:grid-cols-1 items-stretch">
                    {readinessCards.map((card) => (
                        <div key={card.title} className="rounded-[24px] border border-[rgba(23,105,56,0.15)]/80 bg-white p-10 mq825:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
                            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[rgba(213,240,219,0.4)] text-gosirat-green">
                                {card.accent ? <HeartIcon /> : <ShieldPlusIcon />}
                            </div>
                            <h3 className="mt-6 text-[22px] font-bold text-gosirat-black tracking-tight">{card.title}</h3>
                            <p className="mt-3 text-[15px] leading-7 text-gosirat-gray">{card.text}</p>
                            <ul className="mt-8 flex flex-col">
                                {card.bullets.map((bullet, idx) => (
                                    <li key={bullet} className={`flex items-center gap-4 py-[14px] text-[15px] font-medium text-gosirat-black ${idx !== 0 ? 'border-t border-[rgba(23,105,56,0.15)]/70' : ''}`}>
                                        <span className="text-gosirat-green shrink-0">
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
