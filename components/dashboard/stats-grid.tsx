"use client";

import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { Reorder } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";
import { useState } from "react";

const initialStats = [
    { title: "Total Bookings", value: "256", change: "18.5%", subtext: "vs last 30 days", icon: "/icons/totalbooking.png", iconBg: "bg-[#3B2963]", lightestColor: "border-[#3B2963]/20", lightBg: "bg-[#3B2963]/10" },
    { title: "Total Sales", value: "BDT 1,875,450", change: "22.3%", subtext: "vs last 30 days", icon: "/icons/totalsale.png", iconBg: "bg-[#00D420]", lightestColor: "border-[#00D420]/20", lightBg: "bg-[#00D420]/10" },
    { title: "Total Profit", value: "BDT 248,750", change: "20.1%", subtext: "vs last 30 days", icon: "/icons/toatlprofit.png", iconBg: "bg-[#F97E20]", lightestColor: "border-[#F97E20]/20", lightBg: "bg-[#F97E20]/10" },
    { title: "Wallet Balance", value: "BDT 125,750.00", subtext: "Available Balance", icon: "/icons/walletwhite.png", iconBg: "bg-[#2E6CFD]", lightestColor: "border-[#2E6CFD]/20", lightBg: "bg-[#2E6CFD]/10" },
];

export function StatsGrid() {
    const { d } = useTheme();
    const [statsItems, setStatsItems] = useState(initialStats);

    return (
        <Reorder.Group axis="x" values={statsItems} onReorder={setStatsItems} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {statsItems.map((stat) => (
                <Reorder.Item
                    key={stat.title}
                    value={stat}
                    className={cn("p-3 rounded-sm shadow-sm border flex items-center gap-4 transition-colors duration-300 cursor-grab active:cursor-grabbing", d.card)}
                >
                    <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shrink-0", stat.lightBg)}>
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg", stat.iconBg)}>
                            <Image src={stat.icon} alt={stat.title} width={40} height={40} style={{ width: "auto", height: "auto" }} className="brightness-0 invert" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className={cn("text-[8px] font-black uppercase tracking-widest leading-none mb-1", d.text)}>{stat.title}</p>
                        <h3 className={cn("text-[14px] sm:text-[16px] font-black tracking-tight leading-none mb-1 truncate max-w-[120px] sm:max-w-none", d.text)}>{stat.value}</h3>
                        <div className="flex items-center gap-1.5">
                            {stat.change && <span className="text-[9px] font-black flex items-center gap-0.5 text-emerald-500"><TrendingUp className="w-2.5 h-2.5" /> {stat.change}</span>}
                            <span className={cn("text-[8px] font-bold uppercase tracking-tighter", d.subText)}>{stat.subtext}</span>
                        </div>
                    </div>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );
}
