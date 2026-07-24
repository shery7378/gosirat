"use client";

import type { NextPage } from "next";
import Image from "@/components/CustomImage";
import { useState, useEffect } from "react";

const RegisterPage: NextPage = () => {
    const [activeCard, setActiveCard] = useState<'parent' | 'driver' | 'school'>('parent');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [vehicleType, setVehicleType] = useState<string>('');
    const [trackingCode, setTrackingCode] = useState<string>('');

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isSubmitted) {
            timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [isSubmitted]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            const params = url.searchParams;
            // Will check for ?tracking_code=XYZ or ?ref=XYZ, otherwise fallback to the default one you showed
            const code = params.get('tracking_code') || params.get('ref') || '';
            setTrackingCode(code);

            const type = params.get('type');
            if (type === 'driver' || type === 'school' || type === 'parent') {
                setActiveCard(type);
            }

            // Hide the tracking code from the visible URL
            if (params.has('tracking_code') || params.has('ref')) {
                params.delete('tracking_code');
                params.delete('ref');
                window.history.replaceState({}, document.title, url.toString());
            }
        }
    }, []);

    const renderForm = () => {
        if (activeCard === 'parent') {
            return (
                <>
                    <div className="w-full flex flex-col items-start gap-2 mb-2">
                        <h3 className="m-0 text-[28px] leading-8 font-semibold text-gosirat-text-dark font-sans">Register Your Family</h3>
                        <p className="m-0 text-base font-normal text-gosirat-gray font-sans leading-6">Tell us about your family and school transportation needs. We'll help you find the most suitable GoSirat transportation solution.</p>
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="tel"
                            name="phone"
                            placeholder="+92 300 1234567"
                            pattern="^(?:\+92|0092|0)?\d{10}$"
                            title="Pakistan: 11 digits or 10 digits without the leading 0 (after country code)"
                            required
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="text"
                            name="area"
                            placeholder="House No, Street, Area"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="text"
                            name="school_name"
                            placeholder="School name and complete address"
                            required
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <select
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark invalid:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23176938%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_16px_center] pr-10 cursor-pointer"
                            required
                            name="city"
                            defaultValue=""
                        >
                            <option value="" disabled hidden>City</option>
                            <option value="Rawalpindi/Islamabad">Rawalpindi/Islamabad</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="self-stretch rounded-[10px] bg-white border border-gray-300 flex items-start p-4 transition-all duration-300 shadow-sm hover:border-gray-400 focus-within:ring-[3px] focus-within:ring-gosirat-green/20 focus-within:border-gosirat-green">
                        <textarea
                            className="w-full min-h-[164px] [border:none] [outline:none] font-sans text-base bg-[transparent] resize-none text-gosirat-text-dark placeholder:text-gosirat-gray-light leading-[18.2px]"
                            name="message"
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
                        <h3 className="m-0 text-[28px] leading-8 font-semibold text-gosirat-text-dark font-sans">Become a GoSirat Driver</h3>
                        <p className="m-0 text-base font-normal text-gosirat-gray font-sans leading-6">Join our verified driver network and enjoy professional support, transparent earnings, AI-powered green bonuses, and optimized school transportation routes.</p>
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="tel"
                            name="phone"
                            placeholder="+92 300 1234567"
                            pattern="^(?:\+92|0092|0)?\d{10}$"
                            title="Pakistan: 11 digits or 10 digits without the leading 0 (after country code)"
                            required
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <select
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark invalid:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23176938%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_16px_center] pr-10 cursor-pointer"
                            required
                            name="vehicle_type"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option value="" disabled hidden>Select Vehicle Type</option>
                            <option value="own_car">Own Car</option>
                            <option value="need_car">Need a Vehicle</option>
                        </select>
                        <select
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark invalid:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23176938%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_16px_center] pr-10 cursor-pointer"
                            required
                            name="has_license"
                            defaultValue=""
                        >
                            <option value="" disabled hidden>Do you have a driving license?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    {vehicleType === 'own_car' && (
                        <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                            <input
                                className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                                type="text"
                                name="company_name"
                                placeholder="Company Name (e.g., Toyota)"
                                required
                            />
                            <input
                                className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                                type="text"
                                name="car_model"
                                placeholder="Car Model (e.g., Corolla 2020)"
                                required
                            />
                            <input
                                className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                                type="number"
                                name="number_of_seats"
                                placeholder="Number of Seats"
                                min="2"
                                required
                            />
                        </div>
                    )}
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <select
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark invalid:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23176938%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_16px_center] pr-10 cursor-pointer"
                            required
                            name="city"
                            defaultValue=""
                        >
                            <option value="" disabled hidden>City</option>
                            <option value="Rawalpindi/Islamabad">Rawalpindi/Islamabad</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="self-stretch rounded-[10px] bg-white border border-gray-300 flex items-start p-4 transition-all duration-300 shadow-sm hover:border-gray-400 focus-within:ring-[3px] focus-within:ring-gosirat-green/20 focus-within:border-gosirat-green">
                        <textarea
                            className="w-full min-h-[164px] [border:none] [outline:none] font-sans text-base bg-[transparent] resize-none text-gosirat-text-dark placeholder:text-gosirat-gray-light leading-[18.2px]"
                            name="message"
                            placeholder="Tell us about your driving experience, availability, city, or any additional information."
                            rows={6}
                        ></textarea>
                    </div>
                </>
            );
        }

        if (activeCard === 'school') {
            return (
                <>
                    <div className="w-full flex flex-col items-start gap-2 mb-2">
                        <h3 className="m-0 text-[28px] leading-8 font-semibold text-gosirat-text-dark font-sans">Partner With GoSirat</h3>
                        <p className="m-0 text-base font-normal text-gosirat-gray font-sans leading-6">Register your school to provide students and parents with safer, smarter, and more transparent school transportation services.</p>
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="text"
                            name="school_name"
                            placeholder="Enter school name"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="text"
                            name="name"
                            placeholder="Principal / Administrator / Transport Manager"
                            required
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="tel"
                            name="phone"
                            placeholder="+92 300 1234567"
                            pattern="^(?:\+92|0092|0)?\d{10}$"
                            title="Pakistan: 11 digits or 10 digits without the leading 0 (after country code)"
                            required
                        />
                        <input
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark placeholder:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400"
                            type="email"
                            name="email"
                            placeholder="school@example.com"
                        />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start gap-5 max-w-full">
                        <select
                            className="h-[50px] flex-1 rounded-[10px] bg-white border border-gray-300 box-border px-4 w-full min-w-[220px] outline-none focus:ring-[3px] focus:ring-gosirat-green/20 focus:border-gosirat-green font-sans text-base text-gosirat-text-dark invalid:text-[#a0aab2] transition-all duration-300 shadow-sm hover:border-gray-400 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23176938%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_16px_center] pr-10 cursor-pointer"
                            required
                            name="city"
                            defaultValue=""
                        >
                            <option value="" disabled hidden>City</option>
                            <option value="Rawalpindi/Islamabad">Rawalpindi/Islamabad</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="self-stretch rounded-[10px] bg-white border border-gray-300 flex items-start p-4 transition-all duration-300 shadow-sm hover:border-gray-400 focus-within:ring-[3px] focus-within:ring-gosirat-green/20 focus-within:border-gosirat-green">
                        <textarea
                            className="w-full min-h-[164px] [border:none] [outline:none] font-sans text-base bg-[transparent] resize-none text-gosirat-text-dark placeholder:text-gosirat-gray-light leading-[18.2px]"
                            name="message"
                            placeholder="Tell us about your school's transportation requirements, existing transport system, or any questions for our team."
                            rows={6}
                        ></textarea>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="relative rounded-[40px] w-full flex flex-col items-center justify-center py-20 px-[30px] box-border gap-8 leading-normal tracking-normal mq975:gap-4">
            <header className="self-stretch flex flex-col items-center gap-3 max-w-full text-left text-[38px] text-gosirat-text-dark font-sans mb-4" data-aos="fade-up">
                <div className="h-[29.3px] flex items-center justify-center">
                    <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] box-border flex items-center py-[6px] px-[14px] gap-[8px]">
                        <div className="h-[6px] w-[6px] relative rounded-full bg-gosirat-green" />
                        <div className="relative font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                            GoSirat Registration
                        </div>
                    </div>
                </div>
                <h1 className="m-0 relative font-sans font-semibold text-[64px] leading-[100%] tracking-normal text-center text-gosirat-black inline-block max-w-full">
                    Join GoSirat Today
                </h1>
                <p className="m-0 relative font-sans font-normal text-[20px] leading-[32.5px] tracking-normal text-center text-gosirat-gray inline-block max-w-[1200px]">
                    Start your journey with GoSirat. Whether you're a parent looking for safe school transportation, a driver seeking reliable earning opportunities, or a school wanting smarter transportation management, we're here to help. Complete the form below, and our team will contact you within one business day.
                </p>
            </header>
            <div className="w-full max-w-[970px] flex flex-col items-start mt-4 mb-2">
                <h2 className="text-[28px] font-semibold text-gosirat-text-dark font-sans m-0">Choose Your Role</h2>
            </div>
            <section className="w-full flex items-center flex-wrap content-center gap-4 max-w-[970px] text-left text-sm text-gosirat-darker font-sans mq975:max-w-full">
                <div
                    onClick={() => {
                        setActiveCard('parent');
                        setIsSubmitted(false);
                        window.history.pushState(null, '', '?type=parent');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start p-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'parent' ? 'bg-gosirat-bg-light border-gosirat-green border-solid border-[2px] shadow-lg' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px] hover:bg-gosirat-bg-light hover:border-gosirat-green hover:border-[2px] hover:shadow-lg'}`}
                >
                    <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center text-gosirat-green-alt shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start mt-6">
                        <div className="text-base font-semibold text-gosirat-darker">
                            Parent
                        </div>
                        <div className="text-sm font-normal text-gosirat-text leading-5 mt-1">
                            Register your family for safe and reliable school transportation.
                        </div>
                    </div>

                </div>

                <div
                    onClick={() => {
                        setActiveCard('driver');
                        setIsSubmitted(false);
                        window.history.pushState(null, '', '?type=driver');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start p-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'driver' ? 'bg-gosirat-bg-light border-gosirat-green border-solid border-[2px] shadow-lg' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px] hover:bg-gosirat-bg-light hover:border-gosirat-green hover:border-[2px] hover:shadow-lg'}`}
                >
                    <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center text-gosirat-green-alt shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                            <circle cx="7" cy="17" r="2" />
                            <path d="M9 17h6" />
                            <circle cx="17" cy="17" r="2" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start mt-6">
                        <div className="text-base font-semibold text-gosirat-darker">
                            Driver
                        </div>
                        <div className="text-sm font-normal text-gosirat-text leading-5 mt-1">
                            Join our verified driver network and start earning with confidence.
                        </div>
                    </div>

                </div>

                <div
                    onClick={() => {
                        setActiveCard('school');
                        setIsSubmitted(false);
                        window.history.pushState(null, '', '?type=school');
                    }}
                    className={`flex-1 rounded-[18px] box-border flex flex-col items-start p-6 min-w-[235px] min-h-[223px] cursor-pointer transition-all hover:shadow-md ${activeCard === 'school' ? 'bg-gosirat-bg-light border-gosirat-green border-solid border-[2px] shadow-lg' : 'bg-white border-[rgba(0,0,0,0.1)] border-solid border-[0.7px] hover:bg-gosirat-bg-light hover:border-gosirat-green hover:border-[2px] hover:shadow-lg'}`}
                >
                    <div className="w-[44px] h-[44px] rounded-[14px] bg-gosirat-green-alt/10 flex items-center justify-center text-gosirat-green-alt shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 22h16" />
                            <path d="M4 22V4c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v18" />
                            <path d="M10 22v-5h4v5" />
                            <path d="M8 7h.01M16 7h.01M12 7h.01M8 11h.01M16 11h.01M12 11h.01M8 15h.01M16 15h.01M12 15h.01" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-start mt-6">
                        <div className="text-base font-semibold text-gosirat-darker">
                            School
                        </div>
                        <div className="text-sm font-normal text-gosirat-text leading-5 mt-1">
                            Partner with GoSirat to provide safer transportation for your students.
                        </div>
                    </div>

                </div>
            </section>
            {isSubmitted ? (
                <section className="w-full rounded-[10px] bg-[#f0fdf4] border border-[#bbf7d0] flex flex-col items-center justify-center p-12 box-border max-w-[970px] text-center shadow-sm">
                    <div className="w-16 h-16 bg-gosirat-green rounded-full flex items-center justify-center mb-6 shadow-md">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="m-0 text-3xl font-semibold text-gosirat-text-dark font-sans mb-3">Thank You!</h2>
                    <p className="m-0 text-lg text-gosirat-gray font-sans leading-7 max-w-2xl">
                        Your registration has been received successfully. A GoSirat representative will contact you within one business day to discuss the next steps.
                    </p>
                </section>
            ) : (
                <section className="w-full rounded-[10px] bg-[#F3F7F4] flex flex-col items-start justify-center p-7 box-border max-w-[970px] text-left text-base text-gosirat-gray-light font-sans mq450:pt-5 mq450:pb-5 mq450:box-border mq975:max-w-full shadow-sm">
                    <form
                        className="self-stretch flex flex-col items-start gap-5 max-w-full"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const formElement = e.currentTarget;
                            setIsSubmitting(true);
                            setErrorMessage(null);

                            try {
                                const formData = new FormData(formElement);
                                const payload = Object.fromEntries(formData.entries());
                                payload.source = 'Website Register Form';
                                if (trackingCode) {
                                    payload.tracking_code = trackingCode;
                                }

                                const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || 'http://localhost:8000';

                                const response = await fetch(`${apiUrl}/api/leads/capture`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json'
                                    },
                                    body: JSON.stringify(payload)
                                });

                                if (!response.ok) {
                                    const data = await response.json();
                                    throw new Error(data.message || 'Registration failed.');
                                }

                                setIsSubmitted(true);
                                formElement.reset();
                            } catch (err: any) {
                                setErrorMessage(err.message || 'Something went wrong. Please try again.');
                            } finally {
                                setIsSubmitting(false);
                            }
                        }}
                    >
                        <input type="hidden" name="lead_type" value={activeCard} />
                        <input type="hidden" name="tracking_code" value={trackingCode} />
                        <div className="self-stretch flex flex-col items-start gap-5 max-w-full">
                            {renderForm()}
                        </div>
                        <button disabled={isSubmitting} type="submit" className="cursor-pointer border-none bg-gosirat-green w-full h-[60px] rounded-2xl flex items-center justify-center hover:bg-gosirat-green-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-5 py-3 gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
                            <div className="relative text-lg font-semibold font-sans text-white text-center">
                                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                            </div>
                        </button>
                        {errorMessage && (
                            <div className="w-full text-red-500 text-center font-sans mt-2">{errorMessage}</div>
                        )}
                    </form>
                </section>
            )}
        </div>
    );
};

export default RegisterPage;

