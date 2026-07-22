import Image from "@/components/CustomImage";

export const AbsenceManagement = () => {
    return (
        <section className="self-stretch bg-base-white flex items-center justify-between py-16 px-[60px] box-border gap-10 max-w-full mq1125:flex-col mq1125:items-center mq450:gap-5 mq450:py-[60px] mq450:box-border mq450:flex-wrap mq450:px-4">
            <div className="w-full max-w-[580.3px] flex flex-col items-center justify-center relative isolate mq450:min-w-full mq450:flex-1">
                {/* Main Card: Will Ahmed be absent? */}
                <div className="w-[398px] relative bg-white rounded-[24px] shadow-[0px_12px_24px_rgba(0,0,0,0.08)] border-2 border-solid border-gosirat-green/30 p-6 flex flex-col gap-5 z-[1] shrink-0 font-sans mq450:w-full" data-aos="fade-in" data-aos-delay="100">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-200 rounded-full" />
                    <button className="absolute top-4 right-4 w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors border-none cursor-pointer">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col gap-1.5 mt-2">
                        <h3 className="m-0 text-xl font-bold text-gosirat-text">Will Ahmed be absent?</h3>
                        <p className="m-0 text-[13px] text-gray-500 leading-relaxed">
                            Select the date when the student is absent.<br />
                            The driver won't pickup the child during this time.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-gosirat-text">Select Absent Duration</label>
                        <div className="flex gap-3">
                            <button className="flex-1 py-2.5 bg-white border border-gray-200 rounded-[10px] text-gray-500 text-[13px] font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                                Today
                            </button>
                            <button className="flex-1 py-2.5 bg-gosirat-light border border-gosirat-green rounded-[10px] text-gosirat-green text-[13px] font-bold flex items-center justify-center gap-2 cursor-pointer">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Choose Duration
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-gosirat-text">Select Duration</label>
                        <div className="flex gap-3">
                            <div className="flex-1 px-3 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded-[10px] flex items-center justify-between text-gray-400 text-[13px]">
                                <span>From</span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-1 px-3 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded-[10px] flex items-center justify-between text-gray-400 text-[13px]">
                                <span>To</span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-gosirat-text">Select Reason</label>
                        <div className="w-full px-3 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded-[10px] flex items-center justify-between text-gray-400 text-[13px]">
                            <span>Reason</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    <button className="w-full py-3.5 bg-gosirat-green hover:bg-[#12522b] text-white font-bold rounded-[10px] text-[14px] mt-2 transition-colors border-none cursor-pointer">
                        Confirm Absence
                    </button>
                </div>

                {/* Floating Pill Card: Tomorrow, 5 June */}
                <div className="w-[300px] absolute top-2 right-0 bg-white rounded-[20px] shadow-[0px_16px_32px_rgba(0,0,0,0.12)] border border-gray-100 p-4 flex flex-col gap-3 z-[2] font-sans mq1125:relative mq1125:top-0 mq1125:mt-6 mq1125:right-auto mq450:w-[calc(100%-32px)]">
                    <div className="flex items-start gap-3 w-full">
                        <div className="w-10 h-10 rounded-full bg-[#f0f4f8] flex items-center justify-center shrink-0 mt-1" data-aos="fade-in" data-aos-delay="200">
                            <svg className="w-5 h-5 text-gosirat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex flex-col flex-1">
                            <h4 className="m-0 text-[15px] font-bold text-[#1a2332]">Tomorrow, 5 June</h4>
                            <p className="m-0 text-[13px] text-gray-500 mt-0.5">Fatima · Morning · 7:30 AM</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-300 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className="flex justify-end w-full mt-1">
                        <button className="py-2 px-4 bg-[#fdf8ed] border border-[#f1d8b3] rounded-[10px] text-[#1a2332] text-[13px] font-bold cursor-pointer hover:bg-[#faeed6] transition-colors">
                            Mark Absent
                        </button>
                    </div>
                </div>
            </div>
            <section className="h-auto w-full max-w-[580.3px] flex flex-col items-start text-left text-xs text-gosirat-green-alt font-sans mq1125:mt-10 mq450:min-w-full mq450:flex-1">
                <div className="self-stretch flex flex-col items-start">
                    <div className="h-[29.33px] rounded-full bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] flex items-center py-[6px] px-[14px] gap-[8px]" data-aos="zoom-in" data-aos-delay="100">
                        <div className="h-[6px] w-[6px] rounded-full bg-gosirat-green" />
                        <div className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.68px] uppercase text-gosirat-green">
                            ABSENCE MANAGEMENT
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start pt-6 px-0 pb-0 box-border">
                    <h2 className="m-0 self-stretch relative font-sans font-semibold text-[48px] leading-none capitalize tracking-[-1.5px] text-gosirat-black mq825:text-[38px] mq450:text-[24px] mq450:leading-[32px] break-words">
                        Report Absences in One Tap
                    </h2>
                </div>
                <div className="w-full flex flex-col items-start pt-5 px-0 pb-0 box-border">
                    <p className="m-0 self-stretch relative font-sans font-normal text-[18px] leading-[28px] tracking-normal text-gosirat-gray">
                        Mark your child absent in seconds. The GoSirat Parent App instantly notifies the driver and school, helping keep school transportation routes efficient and up to date.
                    </p>
                </div>
            </section>
        </section>
    );
};
