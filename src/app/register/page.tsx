"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const RegisterPage: NextPage = () => {
    const [activeCard, setActiveCard] = useState<'parent' | 'driver' | 'school'>('parent');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderForm = () => {
        if (activeCard === 'parent') {
            return (
                <>
                    <div className="w-full flex flex-col items-start gap-2 mb-2">
                        <h3 className="m-0 text-[28px] leading-8 font-semibold text-[#101828] font-[Inter]">Register Your Family</h3>
                        <p className="m-0 text-base font-normal text-[#57605b] font-[Inter] leading-6">Tell us about your family and school transportation needs. We'll help you find the most suitable GoSirat transportation solution.</p>
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Enter your full name"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="tel"
                            placeholder="+92 300 1234567"
                            pattern="^(?:\+92|0092|0)?\d{10}$"
                            title="Pakistan: 11 digits or 10 digits without the leading 0 (after country code)"
                            required
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="House No, Street, Area"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="School name and complete address"
                            required
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="City"
                            required
                        />
                    </div>
                    <div className="self-stretch rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] flex items-start p-3">
                        <textarea
                            className="w-full min-h-[164px] [border:none] [outline:none] font-[Inter] text-base bg-[transparent] resize-none text-[#101828] placeholder:text-[#bababa] leading-[18.2px]"
                            placeholder="Tell us about your child's transportation requirements, preferred pickup time, or any special instructions."
                            rows={6}
                        ></textarea>
                    </div>
                </>
            );
        }

        if (activeCard === 'driver') {
            return (
                <>
                    <div className="w-full flex flex-col items-start gap-2 mb-2">
                        <h3 className="m-0 text-[28px] leading-8 font-semibold text-[#101828] font-[Inter]">Become a GoSirat Driver</h3>
                        <p className="m-0 text-base font-normal text-[#57605b] font-[Inter] leading-6">Join our verified driver network and enjoy professional support, transparent earnings, AI-powered green bonuses, and optimized school transportation routes.</p>
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Enter your full name"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="tel"
                            placeholder="+92 300 1234567"
                            pattern="^(?:\+92|0092|0)?\d{10}$"
                            title="Pakistan: 11 digits or 10 digits without the leading 0 (after country code)"
                            required
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <select 
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] invalid:text-[#bababa]"
                            required
                            defaultValue=""
                        >
                            <option value="" disabled hidden>Select Vehicle Type</option>
                            <option value="own_car">Own Car</option>
                            <option value="own_hiroof">Own Hi-Roof / Carry Daba</option>
                            <option value="own_van">Own Van / Minibus</option>
                            <option value="own_coaster">Own Coaster / Bus</option>
                            <option value="need_car">Need a Vehicle</option>
                        </select>
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Enter your driving license number"
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="City"
                            required
                        />
                    </div>
                </>
            );
        }

        if (activeCard === 'school') {
            return (
                <>
                    <div className="w-full flex flex-col items-start gap-2 mb-2">
                        <h3 className="m-0 text-[28px] leading-8 font-semibold text-[#101828] font-[Inter]">Partner With GoSirat</h3>
                        <p className="m-0 text-base font-normal text-[#57605b] font-[Inter] leading-6">Register your school to provide students and parents with safer, smarter, and more transparent school transportation services.</p>
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Enter school name"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="Principal / Administrator / Transport Manager"
                            required
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="tel"
                            placeholder="+92 300 1234567"
                            pattern="^(?:\+92|0092|0)?\d{10}$"
                            title="Pakistan: 11 digits or 10 digits without the leading 0 (after country code)"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="email"
                            placeholder="school@example.com"
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] box-border px-3 w-full min-w-[220px] [outline:none] font-[Inter] text-base text-[#101828] placeholder:text-[#bababa]"
                            type="text"
                            placeholder="City"
                            required
                        />
                    </div>
                    <div className="self-stretch rounded-lg bg-white border-[rgba(0,0,0,0.25)] border-solid border-[1px] flex items-start p-3">
                        <textarea
                            className="w-full min-h-[164px] [border:none] [outline:none] font-[Inter] text-base bg-[transparent] resize-none text-[#101828] placeholder:text-[#bababa] leading-[18.2px]"
                            placeholder="Tell us about your school's transportation requirements, existing transport system, or any questions for our team."
                            rows={6}
                        ></textarea>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="relative rounded-[40px] w-full flex flex-col items-center justify-center py-20 px-[30px] box-border gap-8 leading-[normal] tracking-[normal] mq975:gap-4">
            <header className="self-stretch flex flex-col items-center gap-3 max-w-full text-left text-[38px] text-[#101828] font-[Inter] mb-4" data-aos="fade-up">
                <div className="h-[29.3px] flex items-center justify-center">
                    <div className="h-[29.33px] rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px]">
                        <div className="h-[6px] w-[6px] relative rounded-[22369600px] bg-[#176938]" />
                        <div className="relative font-[Inter] font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-[#176938]">
                            GoSirat Registration
                        </div>
                    </div>
                </div>
                <h1 className="m-0 relative font-[Inter] font-semibold text-[64px] leading-[100%] tracking-[0px] text-center text-[#0c140f] inline-block max-w-full">
                    Join GoSirat Today
                </h1>
                <p className="m-0 relative font-[Inter] font-normal text-[20px] leading-[32.5px] tracking-[0px] text-center text-[#57605b] inline-block max-w-[800px]">
                    Start your journey with GoSirat. Whether you're a parent looking for safe school transportation, a driver seeking reliable earning opportunities, or a school wanting smarter transportation management, we're here to help. Complete the form below, and our team will contact you within one business day.
                </p>
            </header>
            <div className="w-full max-w-[970px] flex flex-col items-start mt-4 mb-2">
                <h2 className="text-[28px] font-semibold text-[#101828] font-[Inter] m-0">Choose Your Role</h2>
            </div>
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
                            Parent
                        </div>
                        <div className="text-sm font-normal text-[#202A32] leading-5 mt-1">
                            Register your family for safe and reliable school transportation.
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
                            Driver
                        </div>
                        <div className="text-sm font-normal text-[#202A32] leading-5 mt-1">
                            Join our verified driver network and start earning with confidence.
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
                            School
                        </div>
                        <div className="text-sm font-normal text-[#202A32] leading-5 mt-1">
                            Partner with GoSirat to provide safer transportation for your students.
                        </div>
                    </div>

                </div>
            </section>
            {isSubmitted ? (
                <section className="w-full rounded-[10px] bg-[#f0fdf4] border border-[#bbf7d0] flex flex-col items-center justify-center p-12 box-border max-w-[970px] text-center shadow-sm">
                    <div className="w-16 h-16 bg-[#176938] rounded-full flex items-center justify-center mb-6 shadow-md">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="m-0 text-3xl font-semibold text-[#101828] font-[Inter] mb-3">Thank You!</h2>
                    <p className="m-0 text-lg text-[#57605b] font-[Inter] leading-7 max-w-2xl">
                        Your registration has been received successfully. A GoSirat representative will contact you within one business day to discuss the next steps.
                    </p>
                </section>
            ) : (
                <section className="w-full rounded-[10px] bg-[#F3F7F4] flex flex-col items-start justify-center p-7 box-border max-w-[970px] text-left text-base text-[#bababa] font-[Inter] mq450:pt-5 mq450:pb-5 mq450:box-border mq975:max-w-full shadow-sm">
                    <form 
                        className="self-stretch flex flex-col items-start gap-5 max-w-full"
                        onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                    >
                        <div className="self-stretch flex flex-col items-start gap-5 max-w-full">
                            {renderForm()}
                        </div>
                        <button type="submit" className="cursor-pointer border-none bg-[#176938] w-full h-[60px] rounded-2xl flex items-center justify-center hover:bg-[#12532c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-5 py-3 gap-3">
                            <div className="relative text-lg font-semibold font-[Inter] text-white text-center">
                                Submit Registration
                            </div>
                        </button>
                    </form>
                </section>
            )}
        </div>
    );
};

export default RegisterPage;

