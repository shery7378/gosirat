import { CheckIcon } from "./SafetyIcons";

const trustItems = [
    "Verified drivers",
    "Live GPS tracking",
    "QR verified rides",
    "24/7 support",
];

export default function SafetyTrust() {
    return (
        <section className="px-8 py-16 mq825:px-6">
            <div className="mx-auto max-w-[800px] text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-2 rounded-[22369600px] bg-[rgba(213,240,219,0.4)] border-[rgba(23,105,56,0.15)] border-solid border-[0.67px] px-[14px] py-[6px] text-[12px] font-medium uppercase tracking-[1.68px] text-[#176938]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#176938]" />
                    Built on trust
                </div>
                <h2 className="mt-4 font-[Inter] font-semibold text-[48px] leading-[63px] tracking-[-1.5px] text-[#0c140f] mq825:text-[38px] mq825:leading-[48px] mq450:text-[29px] mq450:leading-9">
                    Safe school transportation starts with trust.
                </h2>
                <p className="mt-5 font-[Inter] font-normal text-[18px] leading-[28px] tracking-[0px] text-[#57605b]">
                    Parents trust us with what matters most — their children. That is why every GoSirat journey is built around safety, transparency, and accountability.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-6 border-t border-[rgba(23,105,56,0.15)] pt-8 text-sm font-semibold text-[#0c140f]">
                    {trustItems.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(213,240,219,0.4)] text-[#176938]">
                                <CheckIcon />
                            </span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
