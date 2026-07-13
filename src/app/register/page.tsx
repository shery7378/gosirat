"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const RegisterPage: NextPage = () => {
    const [activeCard, setActiveCard] = useState<'parent' | 'driver' | 'school'>('parent');

    const formLabels = {
        parent: {
            first: 'School',
            second: 'Number Of Children',
            message: 'Tell us about your family and school transportation needs.',
        },
        driver: {
            first: 'Vehicle Type',
            second: 'Driver License Number',
            message: 'Tell us about your driving experience and availability.',
        },
        school: {
            first: 'School Name',
            second: 'Number Of Students',
            message: 'Tell us about your school partnership requirements.',
        },
    } as const;

    return (
        <div className="relative rounded-[40px] w-full flex flex-col items-center justify-center py-20 px-[30px] box-border gap-8 leading-[normal] tracking-[normal] mq975:gap-4">
            <header className="self-stretch flex flex-col items-center gap-3 max-w-full text-left text-[38px] text-[#101828] font-[Inter]">
                <h1 className="m-0 relative text-[length:inherit] leading-[46px] capitalize font-semibold font-[inherit] inline-block max-w-full">
                    Tell us a little about you.
                </h1>
                <h3 className="m-0 relative text-xl capitalize font-normal font-[inherit] inline-block max-w-full">
                    We'll get back to you within one business day with next steps.
                </h3>
            </header>
            <section className="w-full flex items-center flex-wrap content-center gap-4 max-w-[970px] text-left text-sm text-[#09131a] font-[Inter] mq975:max-w-full">
                <div
                    onClick={() => {
                        setActiveCard('parent');
                        window.history.pushState(null, '', '?type=parent');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start justify-center py-[21px] px-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'parent' ? 'bg-[#f3f7f4] border-[#176938] border-solid border-[2px]' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px]'}`}
                >
                    <div className="w-12 h-12 rounded-[14px] bg-[#e3ebe5] flex items-center justify-center text-[#176938] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start pt-5 px-0 pb-0 box-border text-base">
                        <div className="relative leading-6 font-semibold inline-block min-w-[92px]">
                            I'm a parent
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start pt-1 px-0 pb-0 box-border text-[#202A32]">
                        <div className="relative leading-5">
                            Register your family for GoSirat.
                        </div>
                    </div>

                </div>
                <div
                    onClick={() => {
                        setActiveCard('driver');
                        window.history.pushState(null, '', '?type=driver');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start justify-center p-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'driver' ? 'bg-[#f3f7f4] border-[#176938] border-solid border-[2px]' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px]'}`}
                >
                    <div className="w-12 h-12 rounded-[14px] bg-[#e3ebe5] flex items-center justify-center text-[#176938] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                            <circle cx="7" cy="17" r="2" />
                            <path d="M9 17h6" />
                            <circle cx="17" cy="17" r="2" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start pt-5 px-0 pb-0 box-border text-base">
                        <div className="relative leading-6 font-semibold inline-block min-w-[87px]">
                            I'm a driver
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start pt-1 px-0 pb-0 box-border text-[#202A32]">
                        <div className="relative leading-5">
                            Join the verified driver network.
                        </div>
                    </div>

                </div>
                <div
                    onClick={() => {
                        setActiveCard('school');
                        window.history.pushState(null, '', '?type=school');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start justify-center p-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'school' ? 'bg-[#f3f7f4] border-[#176938] border-solid border-[2px]' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px]'}`}
                >
                    <div className="w-12 h-12 rounded-[14px] bg-[#e3ebe5] flex items-center justify-center text-[#176938] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 22h16" />
                            <path d="M4 22V4c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v18" />
                            <path d="M10 22v-5h4v5" />
                            <path d="M8 7h.01M16 7h.01M12 7h.01M8 11h.01M16 11h.01M12 11h.01M8 15h.01M16 15h.01M12 15h.01" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start pt-5 px-0 pb-0 box-border text-base">
                        <div className="relative leading-6 font-semibold inline-block min-w-[93px]">
                            I'm a school
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start pt-1 px-0 pb-0 box-border text-[#202A32]">
                        <div className="relative leading-5">Partner with GoSirat.</div>
                    </div>

                </div>
            </section>
            <section className="w-full rounded-[10px] bg-[#f3f7f4] flex flex-col items-start justify-center p-7 box-border max-w-[970px] text-left text-base text-[#bababa] font-[Inter] mq450:pt-5 mq450:pb-5 mq450:box-border mq975:max-w-full">
                <div className="self-stretch flex flex-col items-start gap-7 max-w-full">
                    <div className="self-stretch flex flex-col items-start gap-3.5 max-w-full">
                        <div className="self-stretch flex items-start gap-3 max-w-full mq750:flex-wrap mq450:flex-col">
                            <input
                                className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border p-4 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                                type="text"
                                placeholder="Full Name"
                            />
                            <input
                                className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border p-4 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                                type="text"
                                placeholder="Phone Number (WhatsApp)"
                            />
                        </div>
                        <div className="self-stretch flex items-start gap-3 max-w-full mq750:flex-wrap mq450:flex-col">
                            <input
                                className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border p-4 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                                type="text"
                                placeholder={formLabels[activeCard].first}
                            />
                            <input
                                className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border p-4 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                                type="text"
                                placeholder={formLabels[activeCard].second}
                            />
                        </div>
                        <div className="self-stretch rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] flex items-start pt-[15px] px-[15px] pb-[164px]">
                            <textarea
                                className="w-full [border:none] [outline:none] font-[Inter] text-base bg-[transparent] resize-none text-[#101828] placeholder:text-[#bababa] capitalize leading-[18.2px]"
                                placeholder={formLabels[activeCard].message}
                                rows={1}
                            ></textarea>
                        </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-3 px-5 bg-[#176938] self-stretch rounded-xl flex flex-col items-center justify-center hover:bg-[#3d8f5e] transition-colors">
                        <div className="w-36 relative text-2xl uppercase font-semibold font-[Inter] text-white text-center flex items-center justify-center mq450:text-[19px]">
                            SUBMIT
                        </div>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;
