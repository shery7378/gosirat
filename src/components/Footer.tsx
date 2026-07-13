import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface FooterLink {
    label: string;
    href: string;
    icon?: string;
}

const footerSections: Array<{ title: string; links: FooterLink[] }> = [
    {
        title: "Company",
        links: [
            { label: "About", href: "/about-us" },
            { label: "Schools", href: "/schools" },
            { label: "Careers", href: "/careers" },
            { label: "Press", href: "/press" },
        ],
    },
    {
        title: "Product",
        links: [
            { label: "Parent App", href: "/parent-app" },
            { label: "Driver App", href: "/driver-app" },
            { label: "Safety", href: "/safety" },
            { label: "How it works", href: "/how-it-works" },
        ],
    },
    {
        title: "Contact",
        links: [
            { label: "Support", href: "/support", icon: "shield" },
            { label: "Help center", href: "/help-center", icon: "help" },
            { label: "info@gosirat.com", href: "mailto:info@gosirat.com", icon: "mail" },
            { label: "03099104803", href: "tel:03099104803", icon: "phone" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms", href: "/terms" },
            { label: "Cookies", href: "/cookies" },
            { label: "Disclosures", href: "/disclosures" },
        ],
    },
];

const socialLinks = [
    { href: "https://www.instagram.com/gosiratofficial/", label: "Instagram", icon: "instagram" },
    { href: "https://x.com/GoSiratOfficial", label: "X", icon: "x" },
    { href: "https://www.linkedin.com/company/gosiratofficial/", label: "LinkedIn", icon: "linkedin" },
    { href: "https://www.youtube.com/@GoSiratOfficial", label: "YouTube", icon: "youtube" },
    { href: "https://www.facebook.com/gosiratofficial/", label: "Facebook", icon: "facebook" },
    { href: "https://www.tiktok.com/@gosiratofficial", label: "TikTok", icon: "tiktok" },
];

const renderIcon = (icon: string) => {
    switch (icon) {
        case "shield":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            );
        case "help":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            );
        case "mail":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            );
        case "phone":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            );
        case "instagram":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            );
        case "x":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4" /></svg>
            );
        case "linkedin":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            );
        case "youtube":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            );
        case "facebook":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v9h4v-9h3.5l.5-4H13V7a1 1 0 0 1 1-1h3V2z" /></svg>
            );
        case "tiktok":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
            );
        default:
            return null;
    }
};

const Footer: NextPage = () => {
    return (
        <div className="mt-auto box-border flex max-w-full flex-col border-t-[0.7px] border-solid border-gray-200 bg-white px-[60px] py-0 leading-[normal] tracking-[normal] shadow-[0_-4px_20px_rgba(23,105,56,0.15)] mq725:box-border mq725:px-[30px]">
            <footer className="box-border flex w-full flex-col items-start gap-4 px-0 pb-6 pt-16 text-left text-base text-gray-900 font-[Inter] mq725:box-border mq725:pb-6 mq725:pt-12">
                <div className="flex max-w-full flex-wrap items-start justify-between gap-12 self-stretch py-0 px-0 [row-gap:32px] lg:flex-nowrap mq1050:flex-col mq1050:items-center">
                    <div className="flex shrink-0 max-w-[350px] flex-col items-start gap-6 mq1050:items-center mq1050:text-center">
                        <Image
                            className="relative h-auto w-[250px] object-contain"
                            loading="lazy"
                            width={250}
                            height={78}
                            alt="GoSirat Logo"
                            src="/logo.png"
                            unoptimized
                            data-aos="fade-out"
                            data-aos-delay="100"
                        />
                        <div className="flex w-full flex-col items-start gap-4 mq1050:items-center">
                            <div className="relative inline-block leading-5 text-gray-600">
                                Safe school transportation for modern families. Built around verified drivers, live tracking and secure handover.
                            </div>
                        </div>
                    </div>

                    <div className="flex min-w-[500px] max-w-full flex-1 flex-wrap items-start justify-between gap-4 pt-6 text-gray-900 mq1050:min-w-full mq1050:justify-center mq1050:text-center">
                        {footerSections.map((section) => (
                            <div key={section.title} className="flex w-[142.4px] flex-col items-start mq725:items-center">
                                <div className="flex flex-col items-start self-stretch mq725:items-center">
                                    <div className="relative text-[15px] font-semibold leading-5 tracking-[-0.35px]">
                                        {section.title}
                                    </div>
                                </div>
                                <div className="flex flex-col items-start self-stretch pt-4 pb-0 px-0 text-gray-600 mq725:items-center">
                                    {section.links.map((link) => {
                                        const content = (
                                            <div className="flex items-center gap-2 leading-5">
                                                {link.icon ? renderIcon(link.icon) : null}
                                                <span>{link.label}</span>
                                            </div>
                                        );

                                        return (
                                            <div key={link.label} className="flex flex-col items-start self-stretch pt-1 first:pt-0 mq725:items-center">
                                                {link.href.startsWith("http") ? (
                                                    <a href={link.href} className="relative leading-5 transition-colors hover:text-gray-900">
                                                        {content}
                                                    </a>
                                                ) : (
                                                    <Link href={link.href} className="relative leading-5 transition-colors hover:text-gray-900">
                                                        {content}
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 mb-4 flex justify-start self-stretch mq1050:justify-center">
                    <div className="flex shrink-0 flex-row gap-4 mq1050:flex-wrap mq1050:justify-center">
                        <a href="/register" className="flex h-[54px] w-[160px] shrink-0 items-center justify-center gap-[10px] rounded-xl border border-[#444] bg-black py-2 transition-colors hover:bg-[#1a1a1a]">
                            <svg viewBox="0 0 384 512" className="h-[20px] w-[20px] text-white" fill="currentColor">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[9px] font-medium leading-[11px] text-gray-200">Download on the</span>
                                <span className="text-[17px] font-semibold leading-[20px] tracking-wide text-white">App Store</span>
                            </div>
                        </a>

                        <a href="/register" className="flex h-[54px] w-[160px] shrink-0 items-center justify-center gap-[10px] rounded-xl border border-[#444] bg-black py-2 transition-colors hover:bg-[#1a1a1a]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="h-[20px] w-[20px]" data-aos="fade-in" data-aos-delay="200" />
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[9px] font-medium uppercase leading-[11px] tracking-wide text-gray-200">Get it on</span>
                                <span className="text-[17px] font-semibold leading-[20px] tracking-wide text-white">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="mt-2 flex flex-col items-center self-stretch text-gray-600">
                    <div className="box-border flex w-full max-w-full items-center justify-between gap-4 border-t-[0.7px] border-solid border-gray-200 px-0 pb-0 pt-4 [row-gap:16px] mq650:flex-col mq650:items-center mq650:text-center">
                        <div className="flex items-start mq650:justify-center">
                            <div className="relative flex-1 leading-5">Â© 2026 GoSirat. All rights reserved.</div>
                        </div>
                        <div className="flex flex-wrap items-center gap-[19.6px] text-gray-500 mq650:justify-center">
                            {socialLinks.map((link) => (
                                <a key={link.label} href={link.href} className="flex cursor-pointer items-start transition-colors hover:text-gray-900" aria-label={link.label} target="_blank" rel="noreferrer">
                                    {renderIcon(link.icon)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
