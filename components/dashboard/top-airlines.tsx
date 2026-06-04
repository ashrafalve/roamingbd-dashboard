"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const airlines = [
    { name: "Biman Bangladesh", bookings: 56, logo: "/icons/bimanbangladesh.png" },
    { name: "Emirates", bookings: 42, logo: "/icons/image 22.png" },
    { name: "Qatar Airways", bookings: 38, logo: "/icons/qtar.png" },
    { name: "Turkish Airlines", bookings: 31, logo: "/icons/668e9c2de53bd3953c0fabc5.png" },
    { name: "Air Arabia", bookings: 26, logo: "/icons/668e67f0847a2841c9ada85d.png" },
];

export function TopAirlines() {
    const { dark, d } = useTheme();

    return (
        <div className={cn("col-span-1 lg:col-span-6 p-8 rounded-sm border shadow-sm flex flex-col transition-colors duration-300", d.card)}>
            <div className="flex items-center justify-between mb-8">
                <h3 className={cn("text-[15px] font-black", d.text)}>Top Airlines <span className={cn("text-[10px] font-bold ml-1", d.subText)}>(This Month)</span></h3>
                <button className="text-[10px] font-black text-[#5C21DF] uppercase tracking-widest">View All</button>
            </div>
            <div className="space-y-6">
                {airlines.map((a, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 border overflow-hidden", dark ? "bg-white/5 border-white/10" : "bg-transparent border-gray-100")}>
                            <Image src={a.logo} alt="" width={24} height={24} className="object-contain mix-blend-multiply dark:mix-blend-normal" style={{ width: "auto", height: "auto" }} />
                        </div>
                        <div className="flex-1 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] font-black gap-2">
                                <span className={cn("truncate", d.text)}>{a.name}</span>
                                <span className={cn("shrink-0", d.subText)}>{a.bookings} Bookings</span>
                            </div>
                            <div className={cn("h-1.5 w-full rounded-full overflow-hidden", d.barBg)}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${a.bookings * 1.6}%` }}
                                    transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                                    className="h-full bg-[#3B2963] rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
