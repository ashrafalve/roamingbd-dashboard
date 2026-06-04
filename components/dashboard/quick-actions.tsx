"use client";

import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const actions = [
    { name: "Book Flight", icon: "/icons/flightbooking.png", color: "#6720EA" },
    { name: "Book Hotel", icon: "/icons/hotelbooking.png", color: "#2E6CFD" },
    { name: "Visa Application", icon: "/icons/visaservice.png", color: "#00D420" },
    { name: "Umrah Package", icon: "/icons/umrahpackage.png", color: "#000000" },
    { name: "Add Money", icon: "/icons/walletwhite.png", color: "#08A89C" },
    { name: "My Bookings", icon: "/icons/bookicon.png", color: "#A00FD6" },
    { name: "PNR Retriview", icon: "/icons/pnrtools.png", color: "#03068B" },
    { name: "Support Ticket", icon: "/icons/supportcentre.png", color: "#F60C10" },
];

export function QuickActions() {
    const { d } = useTheme();

    return (
        <div className={cn("col-span-1 lg:col-span-5 p-4 lg:p-5 rounded-sm border shadow-sm flex flex-col transition-colors duration-300 overflow-hidden", d.card)}>
            <h2 className={cn("text-[16px] lg:text-[18px] font-black mb-4 tracking-tight shrink-0", d.text)}>Quick Actions</h2>
            <div className="flex-1 grid grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-3 content-start">
                {actions.map((action, i) => (
                    <button key={i} className={cn("flex flex-col items-center justify-center p-1.5 lg:p-2.5 rounded-md border transition-all gap-1 group/action hover:shadow-md min-w-0", d.actionCard, d.actionHov)}>
                        <div
                            className="w-9 h-9 lg:w-11 lg:h-11 rounded-[14px] flex items-center justify-center shrink-0 transition-transform group-hover/action:scale-105"
                            style={{ backgroundColor: `${action.color}1A` }}
                        >
                            <div
                                className="w-5 h-5 lg:w-5 lg:h-5 shrink-0"
                                style={{
                                    backgroundColor: action.color,
                                    maskImage: `url(${action.icon})`,
                                    WebkitMaskImage: `url(${action.icon})`,
                                    maskSize: 'contain',
                                    WebkitMaskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    WebkitMaskPosition: 'center'
                                }}
                            />
                        </div>
                        <span className={cn("text-[9px] lg:text-[10px] font-black text-center leading-tight break-words w-full px-1", d.text)}>{action.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

