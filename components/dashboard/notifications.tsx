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
    const { d } = useTheme();

    return (
        <div className={cn("p-6 rounded-sm border shadow-sm flex flex-col h-[320px] transition-colors duration-300", d.card)}>
            <div className="flex items-center justify-between mb-4">
                <h3 className={cn("text-[15px] font-black", d.text)}>Notifications</h3>
                <button className="text-[10px] font-black text-[#5C21DF] uppercase tracking-widest">View All</button>
            </div>
            <div className="space-y-6 overflow-y-auto no-scrollbar pt-2 pr-2">
                {notifications.map((notif, i) => (
                    <div key={i} className="flex items-start gap-4 cursor-pointer group/notif">
                        <div
                            className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative transition-transform group-hover/notif:scale-105")}
                            style={{ backgroundColor: `${notif.color}15` }}
                        >
                            <div
                                className="w-5 h-5 transition-colors"
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
                                className={cn("absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white")}
                                style={{ backgroundColor: notif.color }}
                            />
                        </div>
                        <div className="flex-1 py-1">
                            <div className="flex items-center justify-between mb-1.5 gap-2">
                                <h4 className={cn("text-[11px] font-black truncate", d.text)}>{notif.title}</h4>
                                <span className={cn("text-[9px] font-bold shrink-0", d.subText)}>{notif.time}</span>
                            </div>
                            <p className={cn("text-[10px] font-bold", d.subText)}>{notif.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
