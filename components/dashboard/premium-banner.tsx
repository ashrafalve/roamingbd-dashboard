"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function PremiumBanner() {
    const { dark } = useTheme();

    return (
        <div className="relative overflow-hidden h-[265px] group shadow-2xl bg-[#030637]">
            <Image src="/images/frameimage1.png" alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="object-contain transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 p-10 flex flex-col justify-between">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Image src="/icons/kingicon.png" alt="King" width={32} height={32} className="shrink-0" style={{ width: "auto", height: "auto" }} />
                        <h3 className="text-[18px] font-black text-white tracking-tight leading-none">Roaming Premium Agent</h3>
                    </div>
                    <p className="text-[13px] font-bold text-white/90 tracking-tight">You are on Premium Plan</p>
                </div>
                <button className={cn("flex items-center gap-3 px-6 py-2.5 rounded-sm text-[14px] font-black transition-all w-fit shadow-2xl group/btn", dark ? "bg-white/10 backdrop-blur-md text-white hover:bg-white/20" : "bg-gray-50/95 backdrop-blur-sm text-[#3B2963] hover:bg-white")}>
                    View Benefits <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
