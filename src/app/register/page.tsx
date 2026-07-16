"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const RegisterPage: NextPage = () => {
    const [activeCard, setActiveCard] = useState<'parent' | 'driver' | 'school'>('parent');

    const renderForm = () => {
        if (activeCard === 'parent') {
            return (
                <>
                    <div className="self-stretch flex items-start gap-5 max-w-full mq750:flex-wrap mq450:flex-col">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Full Name"
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Phone or WhatsApp (e.g. +92 300 1234567)"
                        />
                    </div>
                    <div className="self-stretch flex items-start gap-5 max-w-full mq750:flex-wrap mq450:flex-col">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Pickup Address"
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="School Drop Off Address"
                        />
                    </div>
                    <div className="self-stretch flex items-start gap-5 max-w-full mq750:flex-wrap mq450:flex-col">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="City"
                        />
                    </div>
                    <div className="self-stretch rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] flex items-start pt-3 px-3 pb-[164px]">
                        <textarea
                            className="w-full [border:none] [outline:none] font-[Inter] text-base bg-[transparent] resize-none text-[#101828] placeholder:text-[#bababa] leading-[18.2px]"
                            placeholder="Message"
                            rows={1}
                        ></textarea>
                    </div>
                </>
            );
        }

        if (activeCard === 'driver') {
            return (
                <>
                    <div className="self-stretch flex items-start gap-5 max-w-full mq750:flex-wrap mq450:flex-col">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Full Name"
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Phone or WhatsApp"
                        />
                    </div>
                    <div className="self-stretch flex items-start gap-5 max-w-full mq750:flex-wrap mq450:flex-col">
                        <select className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] invalid:text-[#bababa]">
                            <option value="" disabled selected hidden>Vehicle</option>
                            <option value="own_car">Own Car</option>
                            <option value="own_hiroof">Own Hi-Roof / Carry Daba</option>
                            <option value="own_van">Own Van / Minibus</option>
                            <option value="own_coaster">Own Coaster / Bus</option>
                            <option value="need_car">Need a Vehicle</option>
                        </select>
                        <select className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] invalid:text-[#bababa]">
                            <option value="" disabled selected hidden>Driving License</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="self-stretch flex items-start gap-5 max-w-full mq750:flex-wrap mq450:flex-col">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="City"
                        />
                    </div>
                    <div className="self-stretch rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] flex items-start pt-3 px-3 pb-[164px]">
                        <textarea
                            className="w-full [border:none] [outline:none] font-[Inter] text-base bg-[transparent] resize-none text-[#101828] placeholder:text-[#bababa] leading-[18.2px]"
                            placeholder="Details"
                            rows={1}
                        ></textarea>
                    </div>
                </>
            );
        }

        if (activeCard === 'school') {
            return (
                <>
                    <div className="self-stretch flex items-start gap-5 max-w-full mq750:flex-wrap mq450:flex-col">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="School Name"
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Contact Person Name"
                        />
                    </div>
                    <div className="self-stretch flex items-start gap-5 max-w-full mq750:flex-wrap mq450:flex-col">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Phone / Contact"
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[200px] mq450:min-w-full [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="City"
                        />
                    </div>
                    <div className="self-stretch rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] flex items-start pt-3 px-3 pb-[164px]">
                        <textarea
                            className="w-full [border:none] [outline:none] font-[Inter] text-base bg-[transparent] resize-none text-[#101828] placeholder:text-[#bababa] leading-[18.2px]"
                            placeholder="Message"
                            rows={1}
                        ></textarea>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="relative rounded-[40px] w-full flex flex-col items-center justify-center py-20 px-[30px] box-border gap-8 leading-[normal] tracking-[normal] mq975:gap-4">
            <header className="self-stretch flex flex-col items-center gap-3 max-w-full text-left text-[38px] text-[#101828] font-[Inter]">
                <h1 className="m-0 relative text-[length:inherit] leading-[46px] capitalize font-semibold font-[inherit] inline-block max-w-full text-center">
                    Tell us a little about you.
                </h1>
                <h3 className="m-0 relative text-xl capitalize font-normal font-[inherit] inline-block max-w-full text-center text-gray-500">
                    We'll get back to you within one business day with next steps.
                </h3>
            </header>
            <section className="w-full flex items-center flex-wrap content-center gap-4 max-w-[970px] text-left text-sm text-[#09131a] font-[Inter] mq975:max-w-full">
                <div
                    onClick={() => {
                        setActiveCard('parent');
                        window.history.pushState(null, '', '?type=parent');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start p-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'parent' ? 'bg-[#f3f7f4] border-[#176938] border-solid border-[2px] shadow-lg' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px] hover:bg-[#f3f7f4] hover:border-[#176938] hover:border-[2px] hover:shadow-lg'}`}
                >
                    <div className="w-[44px] h-[44px] rounded-[14px] bg-[#0D6332]/10 flex items-center justify-center text-[#0D6332] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start mt-6">
                        <div className="text-base font-semibold text-[#09131a]">
                            I'm a parent
                        </div>
                        <div className="text-sm font-normal text-[#202A32] leading-5 mt-1">
                            Register your family for GoSirat.
                        </div>
                    </div>

                </div>

                <div
                    onClick={() => {
                        setActiveCard('driver');
                        window.history.pushState(null, '', '?type=driver');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start p-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'driver' ? 'bg-[#f3f7f4] border-[#176938] border-solid border-[2px] shadow-lg' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px] hover:bg-[#f3f7f4] hover:border-[#176938] hover:border-[2px] hover:shadow-lg'}`}
                >
                    <div className="w-[44px] h-[44px] rounded-[14px] bg-[#0D6332]/10 flex items-center justify-center text-[#0D6332] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                            <circle cx="7" cy="17" r="2" />
                            <path d="M9 17h6" />
                            <circle cx="17" cy="17" r="2" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start mt-6">
                        <div className="text-base font-semibold text-[#09131a]">
                            I'm a driver
                        </div>
                        <div className="text-sm font-normal text-[#202A32] leading-5 mt-1">
                            Join the verified driver network.
                        </div>
                    </div>

                </div>

                <div
                    onClick={() => {
                        setActiveCard('school');
                        window.history.pushState(null, '', '?type=school');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start p-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'school' ? 'bg-[#f3f7f4] border-[#176938] border-solid border-[2px] shadow-lg' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px] hover:bg-[#f3f7f4] hover:border-[#176938] hover:border-[2px] hover:shadow-lg'}`}
                >
                    <div className="w-[44px] h-[44px] rounded-[14px] bg-[#0D6332]/10 flex items-center justify-center text-[#0D6332] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 22h16" />
                            <path d="M4 22V4c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v18" />
                            <path d="M10 22v-5h4v5" />
                            <path d="M8 7h.01M16 7h.01M12 7h.01M8 11h.01M16 11h.01M12 11h.01M8 15h.01M16 15h.01M12 15h.01" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start mt-6">
                        <div className="text-base font-semibold text-[#09131a]">
                            I'm a school
                        </div>
                        <div className="text-sm font-normal text-[#202A32] leading-5 mt-1">
                            Partner with GoSirat.
                        </div>
                    </div>

                </div>
            </section>
            <section className="w-full rounded-[10px] bg-[#F3F7F4] flex flex-col items-start justify-center p-7 box-border max-w-[970px] text-left text-base text-[#bababa] font-[Inter] mq450:pt-5 mq450:pb-5 mq450:box-border mq975:max-w-full shadow-sm">
                <div className="self-stretch flex flex-col items-start gap-5 max-w-full">
                    <div className="self-stretch flex flex-col items-start gap-5 max-w-full">
                        {renderForm()}
                    </div>
                    <button className="cursor-pointer border-none bg-[#176938] w-full h-[60px] rounded-2xl flex items-center justify-center hover:bg-[#12532c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-5 py-3 gap-3">
                        <div className="relative text-lg font-semibold font-[Inter] text-white text-center">
                            Submit Here
                        </div>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;

