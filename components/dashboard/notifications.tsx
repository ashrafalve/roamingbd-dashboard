"use client";

import Image from "next/image";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const notifications = [
    { title: "Flight Booking Confirmed", desc: "DAC → DXB | EK 584", time: "Just now", icon: "/icons/flightbooking.png", color: "#3b82f6" },
    { title: "Money Added", desc: "BDT 50,000 added to wallet", time: "16m ago", icon: "/icons/walletwhite.png", color: "#10b981" },
    { title: "Visa Application Update", desc: "UK Visit Visa is under process", time: "1h ago", icon: "/icons/visaservice.png", color: "#6366f1" },
    { title: "Hotel Booking Confirmed", desc: "Dubai, UAE | 3 Nights", time: "2h ago", icon: "/icons/hotelbooking.png", color: "#f97316" },
];

export function Notifications() {
    const { dark, d } = useTheme();

    return (
        <div className={cn("p-4 md:p-5 lg:p-6 rounded-sm border shadow-sm flex flex-col h-[280px] md:h-[300px] lg:h-[320px] transition-colors duration-300 overflow-x-hidden", d.card)}>
            <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className={cn("text-[13px] md:text-[14px] lg:text-[15px] font-black", d.text)}>Notifications</h3>
                <button className="text-[9px] md:text-[10px] font-black text-[#5C21DF] uppercase tracking-widest">View All</button>
            </div>
            <div className="space-y-3 md:space-y-4 lg:space-y-5 overflow-y-auto scrollbar-none pr-1 pt-1">
                {notifications.map((notif, i) => (
                    <div key={i} className="flex items-start gap-3 cursor-pointer group/notif">
                        <div
                            className={cn("w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 relative transition-transform group-hover/notif:scale-105")}
                            style={{ backgroundColor: `${notif.color}15` }}
                        >
                            <div
                                className="w-4 h-4 md:w-5 md:h-5 transition-colors"
                                style={{
                                    backgroundColor: notif.color,
                                    maskImage: `url(${notif.icon})`,
                                    WebkitMaskImage: `url(${notif.icon})`,
                                    maskSize: 'contain',
                                    WebkitMaskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    WebkitMaskPosition: 'center'
                                }}
                            />
                            <div
                                className={cn("absolute -top-0.5 -right-0.5 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full border border-white")}
                                style={{ backgroundColor: notif.color }}
                            />
                        </div>
                        <div className="flex-1 py-1 min-w-0">
                            <div className="flex items-center justify-between mb-1 gap-2">
                                <h4 className={cn("text-[10px] md:text-[11px] font-black truncate", d.text)}>{notif.title}</h4>
                                <span className={cn("text-[8px] md:text-[9px] font-bold shrink-0", d.subText)}>{notif.time}</span>
                            </div>
                            <p className={cn("text-[9px] md:text-[10px] font-bold transition-colors truncate", dark ? "text-[#a27df0]" : "text-[#5C21DF]")}>{notif.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
