"use client";

import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const reminders = [
    { name: "Umrah Group", sub: "Departure on 20 May 2024", badge: "Tomorrow", color: "bg-red-50 text-red-500", day: "20" },
    { name: "Visa Appointment", sub: "UK Visa - Dubai Center", badge: "5 Days Left", color: "bg-emerald-50 text-emerald-500", day: "25" },
];

export function Reminders() {
    const { dark, d } = useTheme();

    return (
        <div className={cn("p-5 rounded-sm border shadow-sm transition-colors duration-300", d.card)}>
            <h3 className={cn("text-[13px] font-black mb-4 leading-none", d.text)}>Upcoming Reminders</h3>
            <div className="space-y-3">
                {reminders.map((rem, i) => (
                    <div key={i} className={cn("p-4 rounded-xl flex items-center justify-between border border-transparent hover:border-white/10 transition-all", d.reminderBg)}>
                        <div className="flex gap-4">
                            <div className={cn("w-10 h-10 rounded-lg border flex flex-col overflow-hidden text-pink-500 shrink-0", dark ? "bg-white/5 border-white/10" : "bg-white border-gray-100")}>
                                <div className={cn("w-full py-[2px] flex justify-center items-center", dark ? "bg-pink-500/20" : "bg-pink-50")}>
                                    <span className={cn("text-[7px] font-black uppercase", dark ? "text-pink-400" : "text-pink-600")}>MAY</span>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <span className="text-[14px] font-black leading-none">{rem.day}</span>
                                </div>
                            </div>

                            <div className="leading-tight py-0.5">
                                <h4 className={cn("text-[11px] font-black", d.text)}>{rem.name}</h4>
                                <p className={cn("text-[9px] font-bold mt-1", d.subText)}>{rem.sub}</p>
                            </div>
                        </div>
                        <span className={cn("px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter", rem.color)}>{rem.badge}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
