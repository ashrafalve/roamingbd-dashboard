"use client";

import { TrendingUp, ShieldCheck } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function Footer() {
    const { d } = useTheme();

    return (
        <div className={cn("pt-4 border-t flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 gap-3", d.subText, d.divider)}>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                <div className="flex items-center gap-2">
                    <span>Exchange Rate:</span>
                    <div className={cn("px-2 py-0.5 rounded flex items-center gap-1.5 border transition-colors text-[9px] sm:text-[10px]", d.footerRate)}>
                        USD 1 = BDT 117.50 <TrendingUp className="w-3 h-3 text-emerald-500" /> <span className="text-emerald-500">0.25%</span>
                    </div>
                </div>
                <div className="text-center md:text-left hidden sm:block">Last Login: 15 May 2024, 10:30 AM</div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                <div className="flex items-center gap-1.5 text-emerald-500"><ShieldCheck className="w-3.5 h-3.5" /> Secure</div>
                <div className="text-center md:text-left">Roaming Bangladesh © 2026</div>
            </div>
        </div>
    );
}
