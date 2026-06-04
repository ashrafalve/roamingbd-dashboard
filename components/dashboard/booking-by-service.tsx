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
        <div className={cn("col-span-1 lg:col-span-6 p-4 md:p-5 lg:p-8 rounded-sm border shadow-sm flex flex-col transition-colors duration-300", d.card)}>
            <h3 className={cn("text-[13px] md:text-[15px] font-black mb-4 md:mb-6 lg:mb-8", d.text)}>Booking by Service <span className={cn("text-[9px] md:text-[10px] font-bold ml-1", d.subText)}>(This Month)</span></h3>
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0">
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
                        <span className={cn("text-xl sm:text-2xl md:text-3xl font-black", d.text)}>256</span>
                        <span className={cn("text-[8px] sm:text-[9px] font-bold uppercase", d.subText)}>Total</span>
                    </div>
                </div>
                <div className="w-full sm:flex-1 space-y-1.5 sm:space-y-2 md:space-y-3">
                    {services.map((svc) => (
                        <div key={svc.label} className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold">
                            <div className="flex items-center gap-1.5 sm:gap-2"><div className={cn("w-2.5 h-2.5 rounded-[3px]")} style={{ backgroundColor: svc.color }} /><span className={cn(d.subText, "truncate")}>{svc.label}</span></div>
                            <span className={cn(d.subText, "shrink-0 ml-2")}>{svc.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
