"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const services = [
    { label: "Flights", value: "68% (174)", color: "#3B2963", offset: 80 },
    { label: "Hotels", value: "18% (46)", color: "#00C420", offset: 180 },
    { label: "Visa", value: "8% (20)", color: "#2E6CFD", offset: 220 },
    { label: "Tours", value: "4% (10)", color: "#6720EA", offset: 240 },
    { label: "Umrah", value: "2% (6)", color: "#F97E20", offset: 246 },
];

export function BookingByService() {
    const { dark, d } = useTheme();

    return (
        <div className={cn("col-span-1 lg:col-span-6 p-8 rounded-sm border shadow-sm flex flex-col transition-colors duration-300", d.card)}>
            <h3 className={cn("text-[15px] font-black mb-8", d.text)}>Booking by Service <span className={cn("text-[10px] font-bold ml-1", d.subText)}>(This Month)</span></h3>
            <div className="flex-1 flex items-center gap-8">
                <div className="relative w-40 h-40 shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke={dark ? "#ffffff15" : "#E2E8F0"} strokeWidth="18" />
                        {services.map((svc, i) => (
                            <motion.circle
                                key={svc.label}
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke={svc.color}
                                strokeWidth="18"
                                strokeDasharray="251"
                                initial={{ strokeDashoffset: 251 }}
                                animate={{ strokeDashoffset: svc.offset }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                            />
                        ))}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={cn("text-2xl font-black", d.text)}>256</span>
                        <span className={cn("text-[9px] font-bold uppercase", d.subText)}>Total</span>
                    </div>
                </div>
                <div className="flex-1 space-y-3">
                    {services.map((svc) => (
                        <div key={svc.label} className="flex items-center justify-between text-[11px] font-bold">
                            <div className="flex items-center gap-2"><div className={cn("w-3 h-3 rounded-[3px]")} style={{ backgroundColor: svc.color }} /><span className={d.subText}>{svc.label}</span></div>
                            <span className={d.subText}>{svc.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
