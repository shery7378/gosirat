"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header: NextPage = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full sticky top-0 box-border z-50">
            <div className="w-full bg-white/80 backdrop-blur-xl shadow-md shadow-[#176938]/30 box-border flex items-center justify-between px-[60px] mq725:px-[30px] py-4 gap-0 leading-normal tracking-normal transition-all duration-300">
                <Link href="/" className="shrink-0 cursor-pointer z-50 transform hover:scale-105 transition-transform duration-300">
                    <Image
                        className="w-48 md:w-56 h-auto relative max-h-full object-contain"
                        priority
                        fetchPriority="high"
                        width={160}
                        height={51}
                        sizes="100vw"
                        alt="Logo"
                        src="/images/logo.webp"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="m-0 flex-1 flex items-center justify-center gap-8 mq1400:gap-6 mq1275:gap-4 max-w-full text-left text-base text-gray-700 font-sans mq1125:hidden">
                    <Link href="/" className="group flex items-center justify-center py-1 px-0 box-border no-underline text-inherit cursor-pointer transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                        <div className={`relative whitespace-nowrap leading-5 font-medium transition-colors duration-300 ${pathname === '/' ? 'text-gosirat-green' : 'group-hover:text-gosirat-green'}`}>Discover</div>
                    </Link>
                    <div className="group relative flex items-center justify-center py-1 px-0 box-border no-underline text-inherit cursor-pointer transform transition-all duration-300">
                        <Link href="/about-us" className={`relative whitespace-nowrap leading-5 font-medium transition-colors duration-300 flex items-center gap-1 ${pathname.startsWith('/about-us') || pathname === '/safety' || pathname === '/green-initiative' ? 'text-gosirat-green' : 'group-hover:text-gosirat-green'}`}>
                            About Us
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl bg-white shadow-xl border border-[#E4E9E3]/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 gap-1 z-50">
                            <Link href="/about-us" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/about-us' ? 'text-gosirat-green bg-[#F1F4F1]' : 'text-gray-700 hover:bg-[#F1F4F1] hover:text-gosirat-green'}`}>
                                About Us
                            </Link>
                            <Link href="/safety" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/safety' ? 'text-gosirat-green bg-[#F1F4F1]' : 'text-gray-700 hover:bg-[#F1F4F1] hover:text-gosirat-green'}`}>
                                Safety
                            </Link>
                            <Link href="/green-initiative" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/green-initiative' ? 'text-gosirat-green bg-[#F1F4F1]' : 'text-gray-700 hover:bg-[#F1F4F1] hover:text-gosirat-green'}`}>
                                Green Initiative
                            </Link>
                        </div>
                    </div>
                    <Link href="/parent-app" className="group flex items-center justify-center py-1 px-0 box-border no-underline text-inherit cursor-pointer transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                        <div className={`relative whitespace-nowrap leading-5 font-medium transition-colors duration-300 ${pathname === '/parent-app' ? 'text-gosirat-green' : 'group-hover:text-gosirat-green'}`}>Parent App</div>
                    </Link>
                    <Link href="/driver-app" className="group flex items-center justify-center py-1 px-0 box-border no-underline text-inherit cursor-pointer transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                        <div className={`relative whitespace-nowrap leading-5 shrink-0 font-medium transition-colors duration-300 ${pathname === '/driver-app' ? 'text-gosirat-green' : 'group-hover:text-gosirat-green'}`}>Driver App</div>
                    </Link>
                    <Link href="/events" className="group flex items-center justify-center py-1 px-0 box-border no-underline text-inherit cursor-pointer transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                        <div className={`relative whitespace-nowrap leading-5 font-medium transition-colors duration-300 ${pathname === '/events' ? 'text-gosirat-green' : 'group-hover:text-gosirat-green'}`}>Events</div>
                    </Link>
                    <Link href="/schools" className="group flex items-center justify-center py-1 px-0 box-border no-underline text-inherit cursor-pointer transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                        <div className={`relative whitespace-nowrap leading-5 font-medium transition-colors duration-300 ${pathname === '/schools' ? 'text-gosirat-green' : 'group-hover:text-gosirat-green'}`}>Schools</div>
                    </Link>
                    <Link href="/contact-us" className="group flex items-center justify-center py-1 px-0 box-border no-underline text-inherit cursor-pointer transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                        <div className={`relative whitespace-nowrap leading-5 font-medium transition-colors duration-300 ${pathname === '/contact-us' ? 'text-gosirat-green' : 'group-hover:text-gosirat-green'}`}>Contact Us</div>
                    </Link>
                </nav>

                {/* Desktop Register Button */}
                <Link href="/register" className="shrink-0 cursor-pointer [border:none] py-3.5 px-7 bg-gradient-to-r from-gosirat-green to-[#2ecc71] h-[52px] shadow-md rounded-2xl flex items-center box-border gap-2 hover:shadow-lg hover:-translate-y-1 hover:scale-105 active:scale-95 no-underline transition-all duration-300 mq1125:hidden group">
                    <div className="relative text-base leading-5 font-semibold font-sans text-white text-left">
                        Register Here
                    </div>
                    <svg
                        className="h-5 w-5 relative text-white transform group-hover:translate-x-1.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 12h16m0 0l-6-6m6 6l-6 6"
                        />
                    </svg>
                </Link>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="hidden mq1125:flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl bg-gosirat-green text-white border-none cursor-pointer hover:bg-[#3d8f5e] transition-colors focus:outline-none z-50"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Drawer Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-gosirat-light z-[60] flex flex-col pt-24 pb-24 px-8 transition-all duration-300 overflow-y-auto h-[100dvh]">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-[rgba(23,105,56,0.1)] text-gosirat-green flex items-center justify-center border-none cursor-pointer hover:bg-[rgba(23,105,56,0.2)] transition-colors focus:outline-none"
                        aria-label="Close Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <nav className="flex flex-col gap-6 text-left text-lg text-gosirat-black font-sans flex-1">
                        <Link onClick={() => setIsOpen(false)} href="/" className={`py-2 border-b border-[rgba(23,105,56,0.1)] no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/' ? 'text-gosirat-green' : 'text-inherit'}`}>
                            Discover
                        </Link>
                        <div className="flex flex-col border-b border-[rgba(23,105,56,0.1)]">
                            <button 
                                onClick={() => setIsAboutOpen(!isAboutOpen)} 
                                className="flex items-center justify-between py-2 bg-transparent border-none w-full text-left cursor-pointer focus:outline-none"
                            >
                                <span className={`font-medium transition-colors text-lg font-sans ${pathname.startsWith('/about-us') || pathname === '/safety' || pathname === '/green-initiative' ? 'text-gosirat-green' : 'text-inherit'}`}>
                                    About Us
                                </span>
                                <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${isAboutOpen ? 'max-h-48 opacity-100 mb-3' : 'max-h-0 opacity-0 mb-0'}`}>
                                <div className="flex flex-col pl-4 gap-4 mt-2 border-l-2 border-[rgba(23,105,56,0.1)] ml-2">
                                    <Link onClick={() => setIsOpen(false)} href="/about-us" className={`text-base no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/about-us' ? 'text-gosirat-green' : 'text-gray-600'}`}>
                                        Overview
                                    </Link>
                                    <Link onClick={() => setIsOpen(false)} href="/safety" className={`text-base no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/safety' ? 'text-gosirat-green' : 'text-gray-600'}`}>
                                        Safety
                                    </Link>
                                    <Link onClick={() => setIsOpen(false)} href="/green-initiative" className={`text-base no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/green-initiative' ? 'text-gosirat-green' : 'text-gray-600'}`}>
                                        Green Initiative
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link onClick={() => setIsOpen(false)} href="/parent-app" className={`py-2 border-b border-[rgba(23,105,56,0.1)] no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/parent-app' ? 'text-gosirat-green' : 'text-inherit'}`}>
                            Parent App
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/driver-app" className={`py-2 border-b border-[rgba(23,105,56,0.1)] no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/driver-app' ? 'text-gosirat-green' : 'text-inherit'}`}>
                            Driver App
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/events" className={`py-2 border-b border-[rgba(23,105,56,0.1)] no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/events' ? 'text-gosirat-green' : 'text-inherit'}`}>
                            Events
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/schools" className={`py-2 border-b border-[rgba(23,105,56,0.1)] no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/schools' ? 'text-gosirat-green' : 'text-inherit'}`}>
                            Schools
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/contact-us" className={`py-2 border-b border-[rgba(23,105,56,0.1)] no-underline font-medium hover:text-gosirat-green transition-colors ${pathname === '/contact-us' ? 'text-gosirat-green' : 'text-inherit'}`}>
                            Contact Us
                        </Link>
                    </nav>

                    <Link onClick={() => setIsOpen(false)} href="/register" className="cursor-pointer [border:none] py-4 px-6 bg-gradient-to-r from-gosirat-green to-[#2ecc71] shrink-0 h-[60px] shadow-[0px_8px_24px_rgba(16,_24,_16,_0.1)] rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95 no-underline transition-all duration-300 w-full mt-auto group">
                        <span className="text-lg leading-6 font-semibold font-sans text-white">
                            Register Here
                        </span>
                        <svg
                            className="h-6 w-6 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 12h16m0 0l-6-6m6 6l-6 6"
                            />
                        </svg>
                    </Link>
                </div>
            )}
        </header>
    );
};
export default Header;
