import type { ReactNode } from "react";
import Link from "next/link";

interface InfoPageProps {
    title: string;
    description: string;
    eyebrow?: string;
    ctaLabel?: string;
    ctaHref?: string;
    children?: ReactNode;
    sections?: Array<{
        heading: string;
        items: string[];
    }>;
}

export default function InfoPage({
    title,
    description,
    eyebrow = "GoSirat",
    ctaLabel,
    ctaHref,
    children,
    sections,
}: InfoPageProps) {
    return (
        <main className="min-h-screen bg-gosirat-light px-6 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-4xl flex-col rounded-3xl border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
                    {eyebrow}
                </p>
                <h1 className="mt-4 font-sans font-semibold text-4xl leading-[100%] tracking-normal text-center text-gosirat-black sm:text-[64px]">
                    {title}
                </h1>
                <p className="mt-6 font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-center text-gosirat-gray">{description}</p>

                {children && <div className="mt-8 space-y-6 text-gray-700">{children}</div>}

                {sections && sections.length > 0 && (
                    <div className="mt-10 space-y-8">
                        {sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    {section.heading}
                                </h2>
                                <ul className="space-y-3">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex gap-3">
                                            <span className="text-emerald-600 font-semibold">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {ctaLabel && ctaHref && (
                    <div className="mt-10">
                        <Link
                            href={ctaHref}
                            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                        >
                            {ctaLabel}
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}
