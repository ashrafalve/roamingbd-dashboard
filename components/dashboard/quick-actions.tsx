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
        <div className={cn("col-span-1 lg:col-span-5 p-5 rounded-sm border shadow-sm flex flex-col transition-colors duration-300", d.card)}>
            <h2 className={cn("text-[20px] font-black mb-6 tracking-tight", d.text)}>Quick Actions</h2>
            <div className="flex-1 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3">
                {actions.map((action, i) => (
                    <button key={i} className={cn("flex flex-col items-center justify-center p-3 rounded-md border transition-all gap-2 group/action hover:shadow-md", d.actionCard, d.actionHov)}>
                        <div
                            className="w-12 h-12 rounded-[18px] flex items-center justify-center transition-transform group-hover/action:scale-105"
                            style={{ backgroundColor: `${action.color}1A` }}
                        >
                            <div
                                className="w-6 h-6"
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
                        <span className={cn("text-[11px] font-black text-center leading-tight whitespace-normal", d.text)}>{action.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
