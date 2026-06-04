"use client";

import { ChevronDown } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function SalesOverview() {
    const { dark, d } = useTheme();

    return (
        <div className={cn("col-span-1 lg:col-span-7 rounded-sm border shadow-sm flex flex-col overflow-hidden transition-colors duration-300", d.card)}>
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
                <h3 className={cn("text-[14px] font-black", d.text)}>Sales Overview</h3>
                <div className="flex items-center gap-5">
                    <div className={cn("flex items-center gap-5 text-[9px] font-bold", d.subText)}>
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-600" /> Sales (BDT)</div>
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Profit (BDT)</div>
                    </div>
                    <div className={cn("px-3 py-1.5 rounded-lg border flex items-center gap-1.5 cursor-pointer transition-colors", dark ? "bg-white/10 border-white/10" : "bg-gray-50 border-gray-100")}>
                        <span className={cn("text-[10px] font-black", d.text)}>This Month</span>
                        <ChevronDown className={cn("w-3 h-3", d.subText)} />
                    </div>
                </div>
            </div>
            <div className="flex flex-1 px-4 pb-4">
                <div className={cn("flex flex-col justify-between text-[9px] font-bold pr-2 pb-5 text-right shrink-0 w-10", d.subText)}>
                    <span>500K</span><span>400K</span><span>300K</span><span>200K</span><span>100K</span><span>0</span>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="relative flex-1 min-h-[140px]">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            {[...Array(6)].map((_, i) => <div key={i} className={cn("w-full border-t", d.gridLine)} />)}
                        </div>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 140" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.01" />
                                </linearGradient>
                                <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.01" />
                                </linearGradient>
                            </defs>
                            <path d="M0,112 C40,95 80,30 140,68 C200,105 240,20 300,45 C360,70 400,55 460,22 L500,18 L500,140 L0,140 Z" fill="url(#salesGrad)" />
                            <path d="M0,112 C40,95 80,30 140,68 C200,105 240,20 300,45 C360,70 400,55 460,22 L500,18" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0,125 C60,120 100,102 160,112 C220,122 260,95 320,105 C380,115 420,100 500,86 L500,140 L0,140 Z" fill="url(#profitGrad)" />
                            <path d="M0,125 C60,120 100,102 160,112 C220,122 260,95 320,105 C380,115 420,100 500,86" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="275" y1="0" x2="275" y2="140" stroke="#4F46E5" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                            <circle cx="275" cy="45" r="4" fill="#4F46E5" stroke="white" strokeWidth="2" />
                            <circle cx="275" cy="105" r="4" fill="#10B981" stroke="white" strokeWidth="2" />
                        </svg>
                        <div className={cn("absolute left-[44%] top-[5%] rounded-sm shadow-lg border p-3 min-w-[145px] z-10 pointer-events-none transition-colors duration-300", d.chartTip)}>
                            <p className={cn("text-[9px] font-black mb-2 leading-none", d.subText)}>15 May 2024</p>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-[10px]">
                                    <div className={cn("flex items-center gap-1.5 font-bold", d.subText)}><div className="w-2 h-2 rounded-full bg-indigo-600" /> Sales (BDT)</div>
                                    <span className={cn("font-black", d.text)}>320,450</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px]">
                                    <div className={cn("flex items-center gap-1.5 font-bold", d.subText)}><div className="w-2 h-2 rounded-full bg-emerald-500" /> Profit (BDT)</div>
                                    <span className="font-black text-emerald-500">85,420</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cn("flex justify-between text-[9px] font-bold pt-1.5", d.subText)}>
                        <span>01 May</span><span>05 May</span><span>10 May</span><span>15 May</span><span>20 May</span><span>25 May</span><span>31 May</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
