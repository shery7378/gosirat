import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppDownload from "@/components/AppDownload";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Schemas";

export const metadata: Metadata = {
    title: "School Safety Events | GoSirat Rawalpindi & Islamabad",
    description: "Join GoSirat's school safety events covering traffic awareness, first aid, road safety, and eco-friendly transport for families in Rawalpindi and Islamabad.",
    alternates: {
        canonical: "https://gosirat.com/events",
    },
    openGraph: {
        title: "School Safety Events | GoSirat Rawalpindi & Islamabad",
        description: "Join GoSirat's school safety events covering traffic awareness, first aid, road safety, and eco-friendly transport for families in Rawalpindi and Islamabad.",
        url: "https://gosirat.com/events",
        images: [
            {
                url: "/images/GoSirat-school-safety-event.jpeg",
                width: 1200,
                height: 630,
                alt: "School Safety Events | GoSirat Rawalpindi & Islamabad",
            },
        ],
    },
};

const eventHighlights = [
    {
        icon: "🚦",
        title: "Traffic Awareness Events",
        text: "At GoSirat, we organize traffic awareness events to help students, parents, and drivers learn how to stay safe on the road. Our sessions cover road signs, traffic signals, zebra crossings, school zones, and safe road crossing. These activities help children build safe travel habits and support better school transportation services in Rawalpindi and Islamabad.",
    },
    {
        icon: "⛑",
        title: "First Aid & Emergency Training",
        text: "Safety comes first at GoSirat. We provide first aid and emergency training to help drivers and school staff respond quickly during emergencies. The training includes basic first aid, emergency communication, and child safety procedures to make every school pick-and-drop service safer and more reliable.",
    },
    {
        icon: "🚦",
        title: "Green Environment Program",
        text: "GoSirat supports a cleaner and greener future. Our shared school transportation services help reduce traffic, save fuel, and lower air pollution. We also encourage students to take part in environmental activities that promote clean and healthy communities across Rawalpindi and Islamabad.",
    },
    {
        icon: "🚦",
        title: "Road Safety with Traffic Police",
        text: "GoSirat promotes road safety by supporting awareness programs with schools and traffic authorities. Students learn about traffic rules, safe driving, road signs, and responsible road behavior. These sessions help create a safer environment for everyone using our school transportation services.",
    },
    {
        icon: "🚦",
        title: "Traffic Rules & Road Safety",
        text: "Knowing the traffic rules is important for every student and driver. GoSirat teaches children about traffic lights, pedestrian crossings, speed limits, and school bus safety. This knowledge helps make our school transportation and pick-and-drop services safer every day.",
    },
    {
        icon: "🚑",
        title: "Accident Prevention",
        text: "Many road accidents can be avoided by following safety rules and driving carefully. GoSirat focuses on accident prevention through verified drivers, GPS live tracking, QR child verification, regular vehicle checks, and driver training. Our goal is to provide safe and trusted school transportation services for families in Rawalpindi and Islamabad.",
    },
];

const eventBenefits = [
    "Build safer travel habits for students and families",
    "Create stronger awareness around emergency readiness and responsible driving",
    "Support cleaner, greener communities through shared transportation",
    "Strengthen trust between schools, parents, drivers, and local authorities",
];

export default function EventsPage() {
    return (
        <div className="w-full relative bg-[#f8fbf8] flex flex-col items-center pt-6 px-0 pb-0 box-border leading-[normal] tracking-[normal] overflow-x-hidden">
            <WebPageSchema
                title="School Safety Events | GoSirat Rawalpindi & Islamabad"
                description="Join GoSirat's school safety events covering traffic awareness, first aid, road safety, and eco-friendly transport for families in Rawalpindi and Islamabad."
                url="https://gosirat.com/events"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://gosirat.com/" },
                    { name: "Events", url: "https://gosirat.com/events" },
                ]}
            />

            <section className="self-stretch overflow-hidden flex flex-col items-start pt-10 px-0 pb-5 box-border max-w-full">
                <div className="self-stretch flex items-center justify-between pt-0 px-[60px] pb-10 box-border gap-10 max-w-full flex-wrap mq450:px-4 mq450:pb-[52px]">
                    <section className="flex flex-col items-start py-5 px-0 box-border max-w-full text-center text-xs text-[#176938] font-[Inter] flex-1 min-w-[300px]">
                        <div className="w-full max-w-[657px] flex flex-col items-start gap-6">
                            <div className="w-full max-w-[706px] flex flex-col items-start shrink-0">
                                <div className="h-[29.3px] flex items-start justify-center">
                                    <div className="self-stretch rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.7px] flex items-center py-[5px] px-3.5 gap-[5px]" data-aos="zoom-in" data-aos-delay="100">
                                        <div className="h-1.5 w-1.5 relative rounded-[22369600px] bg-[#176938]" />
                                        <div className="relative tracking-[1.68px] leading-4 uppercase font-medium">
                                            School Safety Events
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-center pt-7 px-0 pb-4 gap-4 text-left text-6xl text-[#0c140f]">
                                    <div className="self-stretch flex flex-col items-start justify-center">
                                        <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[68px] capitalize font-semibold font-[inherit] mq450:text-[51px] mq450:leading-[59px] mq450:text-[38px] mq450:leading-[44px]">
                                            Community safety programs that help every ride start and end safely.
                                        </h1>
                                    </div>
                                    <h3 className="m-0 w-full max-w-[641px] relative text-lg leading-[28px] font-normal font-[inherit] text-[#57605b] inline-block mq450:text-base mq450:leading-[26px]">
                                        GoSirat brings families, schools, authorities, and drivers together through practical events focused on safe travel, emergency readiness, and greener transport in Rawalpindi and Islamabad.
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0 mq450:flex-wrap">
                                <Link href="/contact-us" className="cursor-pointer border-none py-5 px-6 bg-gradient-to-r from-[#176938] to-[#2ecc71] rounded-2xl flex items-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 no-underline">
                                    <div className="relative text-xl leading-5 font-medium font-[Inter] text-[#F7F9F6] text-left">
                                        Arrange an event
                                    </div>
                                    <svg className="h-4 w-4 relative text-[#F7F9F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                                    </svg>
                                </Link>
                                <Link href="/safety" className="cursor-pointer border-[rgba(0,0,0,0.2)] border-solid border-[1px] py-5 px-[23px] bg-white rounded-2xl flex items-center hover:bg-[#e6e6e6] hover:border-[rgba(51,51,51,0.2)] transition-all duration-300 no-underline">
                                    <div className="relative text-xl leading-5 font-medium font-[Inter] text-[#0c140f] text-left">
                                        Explore safety standards
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="flex-1 flex items-center justify-center relative min-w-[300px] max-w-md xl:max-w-lg mx-auto w-full">
                        <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(23,105,56,0.15)]">
                            <Image
                                className="object-cover object-top"
                                loading="lazy"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                alt="GoSirat school safety event illustration"
                                src="/images/GoSirat-school-safety-event.jpeg"
                                data-aos="fade-in"
                                data-aos-delay="100"
                            />
                        </div>
                    </section>
                </div>
            </section>

            <section className="w-full px-[60px] py-8 mq450:px-4">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {eventHighlights.map((event) => (
                        <div key={event.title} className="rounded-[28px] border border-[rgba(23,105,56,0.15)] bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(213,240,219,0.4)] text-xl text-[#176938]">
                                {event.icon}
                            </div>
                            <h2 className="text-xl font-semibold text-[#0c140f]">{event.title}</h2>
                            <p className="mt-3 text-base leading-7 text-[#57605b]">{event.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full px-[60px] py-8 mq450:px-4">
                <div className="rounded-[32px] border border-[rgba(23,105,56,0.15)] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:p-10">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#176938]">Why families and schools join</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0c140f] sm:text-4xl">
                                Practical learning that makes school transport safer every day.
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-[#57605b]">
                                These community events are built to help children, parents, and staff understand the habits and systems that protect them on the road.
                            </p>
                        </div>
                        <div className="rounded-[24px] bg-[rgba(213,240,219,0.4)] p-6">
                            <ul className="space-y-3">
                                {eventBenefits.map((benefit) => (
                                    <li key={benefit} className="flex gap-3 text-[#57605b]">
                                        <span className="mt-1 text-[#176938]">✓</span>
                                        <span className="leading-7">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-[60px] py-8 mq450:px-4">
                <div className="rounded-[32px] bg-[#176938] p-10 text-white shadow-[0_20px_60px_rgba(23,105,56,0.2)] lg:p-12">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f8fbf8]">Community outreach</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Bring a safety event to your school or community.
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-[rgba(248,251,248,0.8)]">
                            We collaborate with schools, parents, and local authorities to deliver practical awareness programs that strengthen trust and promote safer road behavior.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link href="/contact-us" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#176938] transition hover:bg-[rgba(213,240,219,0.4)]">
                                Contact us
                            </Link>
                            <Link href="/register" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                Join GoSirat
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <AppDownload />
        </div>
    );
}
