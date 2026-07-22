import Image from "@/components/CustomImage";

export const LiveTracking = () => {
    return (
        <section className="self-stretch bg-base-white overflow-hidden flex flex-col items-start py-20 px-[60px] box-border max-w-full mq450:py-[52px] mq450:px-4 mq450:box-border mq450:pt-[34px] mq450:pb-[34px] mq450:box-border" data-aos="zoom-in">
            <div className="self-stretch flex items-center justify-between gap-[60px] max-w-full mq1125:flex-col mq450:gap-[30px] mq450:flex-wrap">
                <div className="h-[645px] w-full max-w-[594px] rounded-[28px] bg-[#fcfaf5] overflow-hidden shrink-0 flex flex-col items-start relative isolate mq450:min-w-full mq450:flex-1" data-aos="fade-out" data-aos-delay="100">
                    <Image
                        className="w-[591.4px] h-[371.9px] absolute !m-0 top-[calc(50%_-_308.6px)] left-[calc(50%_-_288.2px)] rounded-[28px] object-contain shrink-0"
                        width={591.4}
                        height={371.9}
                        sizes="100vw"
                        alt="Live GPS tracking in the GoSirat Parent App for school transportation."
                        src="/images/gosirat-live-gps-tracking.webp"
                        data-aos="zoom-in" data-aos-delay="100" />
                    <div className="w-[312.4px] h-[330.9px] absolute !m-0 top-[334.3px] left-[337px] max-h-full z-[1] overflow-hidden flex items-center justify-center shrink-0">
                        <Image
                            className="w-full z-[1] object-cover absolute left-[0px] top-0 h-full [transform:scale(1)]"
                            loading="lazy"
                            width={312.4}
                            height={330.9}
                            sizes="100vw"
                            alt="Live map marker indicating school bus location"
                            src="/images/live-tracking-map-marker.webp"
                            data-aos="fade-out" data-aos-delay="200" />
                    </div>
                    <Image
                        className="w-[347.3px] h-[232.4px] absolute !m-0 top-[401.3px] left-[0px] object-contain z-[2] shrink-0"
                        width={347.3}
                        height={232.4}
                        sizes="100vw"
                        alt="Optimized school transport route path on map"
                        src="/images/live-tracking-route-path.webp"
                        data-aos="zoom-in" data-aos-delay="300" />
                </div>
                <section className="flex flex-col items-start py-5 px-0 box-border min-w-[433px] max-w-[800px] w-full text-left text-xs text-gosirat-green font-sans mq750:min-w-full mq450:min-w-full">
                    <div className="self-stretch flex flex-col items-start gap-2.5">
                        <div className="self-stretch h-[29.3px] flex items-start">
                            <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="fade-in" data-aos-delay="200">
                                <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                                <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">{`Live tracking & handover`}</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-3">
                            <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
                                Track Every School Journey Live
                            </h2>
                        </div>
                        <div className="self-stretch flex flex-col items-start pt-2">
                            <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray">
                                Monitor your child's school transportation in real time with live GPS tracking, ETA, and route updates.
                            </p>
                        </div>
                    </div>
                    <div className="self-stretch h-auto flex flex-col items-start pt-8 px-0 pb-[116.4px] box-border gap-[60px] max-w-full text-[#f8fbf8] mq750:pb-[76px] mq450:pt-[21px] mq450:pb-[76px] mq450:box-border relative">
                        {/* Animated Bus and Zip Line */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block">
                            {/* Zip Line */}
                            <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M 160 62 L 582 110 L 160 230 L 582 278 L 160 398 L 582 446"
                                    fill="none"
                                    stroke="#176938"
                                    strokeWidth="3"
                                    strokeDasharray="8 8"
                                    className="opacity-40 route-path-desktop"
                                />
                            </svg>
                            {/* Bus Icon */}
                            <div className="bus-icon-animated z-10 absolute top-0 left-0">
                                <svg width="72" height="44" viewBox="0 0 72 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#FFE033"/>
                                            <stop offset="50%" stopColor="#FFC107"/>
                                            <stop offset="100%" stopColor="#E6A800"/>
                                        </linearGradient>
                                        <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#FFD000"/>
                                            <stop offset="100%" stopColor="#FFA000"/>
                                        </linearGradient>
                                        <linearGradient id="wheelGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#555"/>
                                            <stop offset="100%" stopColor="#111"/>
                                        </linearGradient>
                                        <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#B3E5FC"/>
                                            <stop offset="100%" stopColor="#4FC3F7"/>
                                        </linearGradient>
                                        <filter id="busShadow">
                                            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#00000044"/>
                                        </filter>
                                    </defs>

                                    {/* Drop Shadow */}
                                    <ellipse cx="36" cy="43" rx="30" ry="3" fill="rgba(0,0,0,0.15)"/>

                                    {/* Main bus body */}
                                    <rect x="2" y="8" width="62" height="28" rx="4" fill="url(#bodyGrad)" filter="url(#busShadow)"/>

                                    {/* Roof highlight */}
                                    <rect x="4" y="8" width="58" height="6" rx="3" fill="url(#roofGrad)"/>
                                    <rect x="6" y="9" width="54" height="2" rx="1" fill="rgba(255,255,255,0.35)"/>

                                    {/* Black stripe */}
                                    <rect x="2" y="22" width="62" height="3" fill="#212121"/>

                                    {/* Windows */}
                                    <rect x="8" y="11" width="10" height="9" rx="1.5" fill="url(#windowGrad)" stroke="#0288D1" strokeWidth="0.5"/>
                                    <rect x="21" y="11" width="10" height="9" rx="1.5" fill="url(#windowGrad)" stroke="#0288D1" strokeWidth="0.5"/>
                                    <rect x="34" y="11" width="10" height="9" rx="1.5" fill="url(#windowGrad)" stroke="#0288D1" strokeWidth="0.5"/>
                                    <rect x="47" y="11" width="10" height="9" rx="1.5" fill="url(#windowGrad)" stroke="#0288D1" strokeWidth="0.5"/>
                                    {/* Window highlights */}
                                    <rect x="9" y="12" width="3" height="2" rx="0.5" fill="rgba(255,255,255,0.6)"/>
                                    <rect x="22" y="12" width="3" height="2" rx="0.5" fill="rgba(255,255,255,0.6)"/>
                                    <rect x="35" y="12" width="3" height="2" rx="0.5" fill="rgba(255,255,255,0.6)"/>
                                    <rect x="48" y="12" width="3" height="2" rx="0.5" fill="rgba(255,255,255,0.6)"/>

                                    {/* Front hood / nose */}
                                    <path d="M64 12 L70 16 L70 32 L64 32 Z" fill="#E6A800" stroke="#C68600" strokeWidth="0.5"/>

                                    {/* Headlight */}
                                    <rect x="65" y="14" width="5" height="5" rx="1" fill="#FFF9C4" stroke="#F9A825" strokeWidth="0.5"/>
                                    <rect x="65.5" y="14.5" width="2" height="2" rx="0.3" fill="white"/>

                                    {/* Rear tail light */}
                                    <rect x="1" y="14" width="3" height="5" rx="1" fill="#EF5350"/>
                                    <rect x="1" y="21" width="3" height="3" rx="0.5" fill="#FF8A65"/>

                                    {/* Bumpers */}
                                    <rect x="2" y="32" width="62" height="3" rx="1" fill="#333"/>
                                    <rect x="64" y="28" width="6" height="7" rx="2" fill="#424242"/>
                                    <rect x="1" y="28" width="3" height="7" rx="1" fill="#424242"/>

                                    {/* Wheels */}
                                    <circle cx="16" cy="38" r="6" fill="url(#wheelGrad)"/>
                                    <circle cx="16" cy="38" r="3.5" fill="#888"/>
                                    <circle cx="16" cy="38" r="1.5" fill="#DDD"/>
                                    <circle cx="54" cy="38" r="6" fill="url(#wheelGrad)"/>
                                    <circle cx="54" cy="38" r="3.5" fill="#888"/>
                                    <circle cx="54" cy="38" r="1.5" fill="#DDD"/>
                                    {/* Wheel bolts */}
                                    <circle cx="16" cy="35.5" r="0.7" fill="#555"/>
                                    <circle cx="16" cy="40.5" r="0.7" fill="#555"/>
                                    <circle cx="13.5" cy="38" r="0.7" fill="#555"/>
                                    <circle cx="18.5" cy="38" r="0.7" fill="#555"/>
                                    <circle cx="54" cy="35.5" r="0.7" fill="#555"/>
                                    <circle cx="54" cy="40.5" r="0.7" fill="#555"/>
                                    <circle cx="51.5" cy="38" r="0.7" fill="#555"/>
                                    <circle cx="56.5" cy="38" r="0.7" fill="#555"/>

                                    {/* SCHOOL BUS text stripe */}
                                    <rect x="8" y="25" width="54" height="6" rx="1" fill="#CC8800" opacity="0.4"/>
                                    <text x="35" y="30" textAnchor="middle" fill="#5D3A00" fontSize="4" fontWeight="bold" fontFamily="Arial">SCHOOL BUS</text>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-start gap-[100px] max-w-full shrink-0 mq450:flex-wrap">
                            <div className="w-full max-w-[329px] shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.6)] border-solid border-[0.7px] box-border flex items-center py-[15px] px-5 gap-4 relative z-10" data-aos="zoom-in" data-aos-delay="300">
                                <div className="h-8 w-8 rounded-full bg-gosirat-green flex items-start pt-[8.6px] pb-[7.4px] pl-[13px] pr-3 box-border shrink-0" data-aos="zoom-in" data-aos-delay="400">
                                    <div className="h-4 w-1.5 relative leading-4 font-semibold inline-block">
                                        1
                                    </div>
                                </div>
                                <div className="h-6 w-[102.6px] flex items-start py-0 px-0 box-border text-base text-gosirat-black">
                                    <div className="mt-[-1px] h-[25px] w-[103px] relative leading-6 font-medium inline-block shrink-0">
                                        Driver Pickup
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start pt-12 px-0 pb-0 box-border max-w-full mq450:pt-0">
                                <div className="w-full max-w-[329px] shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.6)] border-solid border-[0.7px] box-border flex items-center py-[15px] px-5 gap-4 relative z-10" data-aos="fade-in" data-aos-delay="500">
                                    <div className="h-8 w-8 rounded-full bg-gosirat-green flex items-start pt-[8.6px] pb-[7.4px] pl-3 pr-[11px] box-border shrink-0" data-aos="zoom-in" data-aos-delay="600">
                                        <div className="h-4 w-2 relative leading-4 font-semibold inline-block">
                                            2
                                        </div>
                                    </div>
                                    <div className="h-6 w-[150.5px] flex items-start pt-0 pb-px px-0 box-border text-base text-gosirat-black">
                                        <div className="mt-[-1px] h-6 w-[151px] relative leading-6 font-medium inline-block shrink-0">
                                            Live Route Tracking
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-[100px] max-w-full shrink-0 mq450:flex-wrap">
                            <div className="w-full max-w-[329px] shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.6)] border-solid border-[0.7px] box-border flex items-center py-[15px] px-5 gap-4 relative z-10" data-aos="zoom-in" data-aos-delay="100">
                                <div className="h-8 w-8 rounded-full bg-gosirat-green flex items-start pt-[8.7px] pb-[7.3px] pl-3 pr-[11px] box-border shrink-0" data-aos="fade-out" data-aos-delay="200">
                                    <div className="h-4 w-2 relative leading-4 font-semibold inline-block">
                                        3
                                    </div>
                                </div>
                                <div className="h-6 w-[131.2px] flex items-start py-0 px-0 box-border text-base text-gosirat-black">
                                    <div className="mt-[-1px] h-[25px] w-[132px] relative leading-6 font-medium inline-block shrink-0">
                                        School Handover
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start pt-12 px-0 pb-0 box-border max-w-full mq450:pt-0">
                                <div className="w-full max-w-[329px] shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.6)] border-solid border-[0.7px] box-border flex items-center py-[15px] px-5 gap-4 relative z-10" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="h-8 w-8 rounded-full bg-gosirat-green flex items-start pt-[8.7px] px-3 pb-[7.3px] box-border shrink-0" data-aos="fade-out" data-aos-delay="400">
                                        <div className="h-4 w-2 relative leading-4 font-semibold inline-block">
                                            4
                                        </div>
                                    </div>
                                    <div className="h-6 w-[117.1px] flex items-start py-0 px-0 box-border text-base text-gosirat-black">
                                        <div className="mt-[-1px] h-[25px] w-[118px] relative leading-6 font-medium inline-block shrink-0">
                                            School Release
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-[100px] max-w-full shrink-0 mq450:flex-wrap">
                            <div className="w-full max-w-[329px] shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.6)] border-solid border-[0.7px] box-border flex items-center py-[15px] px-5 gap-4 relative z-10" data-aos="fade-in" data-aos-delay="500">
                                <div className="h-8 w-8 rounded-full bg-gosirat-green flex items-start pt-[8.7px] pb-[7.3px] pl-3 pr-[11px] box-border shrink-0" data-aos="fade-out" data-aos-delay="600">
                                    <div className="h-4 w-2 relative leading-4 font-semibold inline-block">
                                        5
                                    </div>
                                </div>
                                <div className="h-6 w-[141.5px] flex items-start pt-0 pb-px px-0 box-border text-base text-gosirat-black">
                                    <div className="mt-[-1px] h-6 w-[142px] relative leading-6 font-medium inline-block shrink-0">
                                        Parent Verification
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start pt-12 px-0 pb-0 box-border max-w-full mq450:pt-0">
                                <div className="w-full max-w-[329px] shadow-[0px_1px_2px_rgba(16,_24,_16,_0.04),_0px_8px_24px_rgba(16,_24,_16,_0.06)] rounded-3xl bg-white border-[rgba(222,227,222,0.6)] border-solid border-[0.7px] box-border flex items-center py-[15px] px-5 gap-4 relative z-10" data-aos="fade-out" data-aos-delay="100">
                                    <div className="h-8 w-8 rounded-full bg-gosirat-green flex items-start pt-[8.7px] pb-[7.3px] pl-3 pr-[11px] box-border shrink-0" data-aos="fade-in" data-aos-delay="200">
                                        <div className="h-4 w-2 relative leading-4 font-semibold inline-block">
                                            6
                                        </div>
                                    </div>
                                    <div className="h-6 w-[168.1px] flex items-start py-0 px-0 box-border text-base text-gosirat-black">
                                        <div className="mt-[-1px] h-[25px] w-[169px] relative leading-6 font-medium inline-block shrink-0">
                                            Child Delivered Safely
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};
