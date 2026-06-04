"use client";

import { TrendingUp, ShieldCheck } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function Footer() {
    const { d } = useTheme();

    return (
        <div className={cn("pt-6 border-t flex flex-col lg:flex-row items-center justify-between text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 gap-4", d.subText, d.divider)}>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                <div className="flex items-center gap-2">
                    <span>Exchange Rate:</span>
                    <div className={cn("px-2.5 py-1 rounded-lg flex items-center gap-2 border transition-colors", d.footerRate)}>
                        USD 1 = BDT 117.50 <TrendingUp className="w-3 h-3 text-emerald-500" /> <span className="text-emerald-500">0.25%</span>
                    </div>
                </div>
                <div className="text-center lg:text-left">Last Login: 15 May 2024, 10:30 AM (IP: 103.45.67.89)</div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                <div className="flex items-center gap-2 text-emerald-500"><ShieldCheck className="w-4 h-4" /> Secure</div>
                <div className="text-center lg:text-left">Roaming Bangladesh © 2024 All rights reserved.</div>
            </div>
        </div>
    );
}
