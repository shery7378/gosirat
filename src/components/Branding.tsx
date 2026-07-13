import type { NextPage } from "next";
import Image from "next/image";

const Branding: NextPage = () => {
    return (
        <div className="w-full bg-[#0c140f] overflow-hidden py-10 text-center text-lg text-[#FFFFFF] font-['Manrope',_sans-serif] px-4 md:px-12 box-border flex flex-col items-center gap-12" data-aos="zoom-in">
            <div className="w-full relative tracking-[-0.012em] leading-[160%] font-semibold">
                Trusted by Over 100 Company Worldwide
            </div>
            <div className="w-full flex overflow-hidden py-5 relative">
                {/* First Marquee Track */}
                <div className="flex shrink-0 animate-marquee gap-24 pr-24 items-center">
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="Logo" src="/logilipusm.svg" />
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="Safety organization partner logo" src="/partner-logo-4.svg" />
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="Educational institution partner logo" src="/partner-logo-3.svg" />
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="School partner logo" src="/partner-logo-1.svg" />
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="Trusted transport partner logo" src="/partner-logo-2.svg" />
                </div>
                {/* Second Marquee Track (Duplicate for seamless loop) */}
                <div className="flex shrink-0 animate-marquee gap-24 pr-24 items-center" aria-hidden="true">
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="Logo" src="/logilipusm.svg" />
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="Safety organization partner logo" src="/partner-logo-4.svg" />
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="Educational institution partner logo" src="/partner-logo-3.svg" />
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="School partner logo" src="/partner-logo-1.svg" />
                    <Image className="h-10 w-[180px] relative brightness-0 invert object-contain" loading="lazy" width={180} height={40} alt="Trusted transport partner logo" src="/partner-logo-2.svg" />
                </div>
            </div>
        </div>
    );
};

export default Branding;
