"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const months = ["This Month", "Last Month", "March 2024", "February 2024"];

const chartData = {
    "This Month": [
        { date: "01 May 2024", sales: "152,000", profit: "51,000", x: 0, y1: 112, y2: 125 },
        { date: "05 May 2024", sales: "215,400", profit: "66,200", x: 80, y1: 80, y2: 102 },
        { date: "10 May 2024", sales: "298,900", profit: "78,500", x: 160, y1: 58, y2: 112 },
        { date: "15 May 2024", sales: "320,450", profit: "85,420", x: 275, y1: 45, y2: 105 },
        { date: "20 May 2024", sales: "265,000", profit: "71,000", x: 360, y1: 70, y2: 115 },
        { date: "25 May 2024", sales: "418,200", profit: "98,400", x: 440, y1: 30, y2: 90 },
        { date: "31 May 2024", sales: "392,000", profit: "92,500", x: 500, y1: 18, y2: 86 },
    ],
    "Last Month": [
        { date: "01 Apr 2024", sales: "180,000", profit: "58,000", x: 0, y1: 102, y2: 115 },
        { date: "05 Apr 2024", sales: "240,500", profit: "75,000", x: 80, y1: 72, y2: 92 },
        { date: "10 Apr 2024", sales: "310,200", profit: "82,000", x: 160, y1: 52, y2: 105 },
        { date: "15 Apr 2024", sales: "350,800", profit: "92,000", x: 275, y1: 38, y2: 95 },
        { date: "20 Apr 2024", sales: "290,000", profit: "78,000", x: 360, y1: 62, y2: 108 },
        { date: "25 Apr 2024", sales: "450,300", profit: "110,000", x: 440, y1: 25, y2: 82 },
        { date: "30 Apr 2024", sales: "420,000", profit: "102,000", x: 500, y1: 15, y2: 78 },
    ],
    "March 2024": [
        { date: "01 Mar 2024", sales: "130,000", profit: "42,000", x: 0, y1: 122, y2: 130 },
        { date: "05 Mar 2024", sales: "190,000", profit: "58,000", x: 80, y1: 88, y2: 112 },
        { date: "10 Mar 2024", sales: "260,000", profit: "70,000", x: 160, y1: 65, y2: 120 },
        { date: "15 Mar 2024", sales: "280,000", profit: "75,000", x: 275, y1: 50, y2: 115 },
        { date: "20 Mar 2024", sales: "240,000", profit: "65,000", x: 360, y1: 75, y2: 125 },
        { date: "25 Mar 2024", sales: "380,000", profit: "90,000", x: 440, y1: 28, y2: 95 },
        { date: "31 Mar 2024", sales: "350,000", profit: "85,000", x: 500, y1: 22, y2: 90 },
    ],
    "February 2024": [
        { date: "01 Feb 2024", sales: "120,000", profit: "38,000", x: 0, y1: 128, y2: 135 },
        { date: "05 Feb 2024", sales: "165,000", profit: "50,000", x: 80, y1: 95, y2: 115 },
        { date: "10 Feb 2024", sales: "220,000", profit: "62,000", x: 160, y1: 75, y2: 122 },
        { date: "15 Feb 2024", sales: "240,000", profit: "68,000", x: 275, y1: 62, y2: 125 },
        { date: "20 Feb 2024", sales: "200,000", profit: "55,000", x: 360, y1: 85, y2: 128 },
        { date: "25 Feb 2024", sales: "310,000", profit: "78,000", x: 440, y1: 35, y2: 100 },
        { date: "29 Feb 2024", sales: "290,000", profit: "72,000", x: 500, y1: 38, y2: 102 },
    ],
};

const monthLabels = {
    "This Month": ["01 May", "05 May", "10 May", "15 May", "20 May", "25 May", "31 May"],
    "Last Month": ["01 Apr", "05 Apr", "10 Apr", "15 Apr", "20 Apr", "25 Apr", "30 Apr"],
    "March 2024": ["01 Mar", "05 Mar", "10 Mar", "15 Mar", "20 Mar", "25 Mar", "31 Mar"],
    "February 2024": ["01 Feb", "05 Feb", "10 Feb", "15 Feb", "20 Feb", "25 Feb", "29 Feb"],
};

export function SalesOverview() {
    const { dark, d } = useTheme();
    const [selectedMonth, setSelectedMonth] = useState("This Month");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const currentData = chartData[selectedMonth as keyof typeof chartData];
    const labels = monthLabels[selectedMonth as keyof typeof monthLabels];
    const [hoverData, setHoverData] = useState(currentData[3]);

    const generatePath = (data: typeof currentData, key: "y1" | "y2") => {
        const points = data.map((d) => `${d.x},${d[key]}`).join(" L");
        return `M${points} L500,140 L0,140 Z`;
    };

    const generateLinePath = (data: typeof currentData, key: "y1" | "y2") => {
        const points = data.map((d) => `${d.x},${d[key]}`).join(" ");
        return `M${points}`;
    };

    return (
        <div className={cn("col-span-1 lg:col-span-7 rounded-sm border shadow-sm flex flex-col overflow-hidden transition-colors duration-300", d.card)}>
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
                <h3 className={cn("text-[14px] font-black", d.text)}>Sales Overview</h3>
                <div className="flex items-center gap-5">
                    <div className={cn("flex items-center gap-5 text-[9px] font-bold", d.subText)}>
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-600" /> Sales (BDT)</div>
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Profit (BDT)</div>
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className={cn("px-3 py-1.5 rounded-lg border flex items-center gap-1.5 cursor-pointer transition-colors", dark ? "bg-white/10 border-white/10" : "bg-gray-50 border-gray-200")}
                        >
                            <span className={cn("text-[10px] font-black", d.text)}>{selectedMonth}</span>
                            <ChevronDown className={cn("w-3 h-3", d.subText)} />
                        </button>
                        {dropdownOpen && (
                            <div className={cn("absolute top-full right-0 mt-1 w-36 rounded-lg border shadow-lg z-50 py-1.5 transition-colors duration-300", dark ? "bg-[#1a1a5b] border-white/10" : "bg-white border-gray-100")}>
                                {months.map((month) => (
                                    <button
                                        key={month}
                                        onClick={() => {
                                            setSelectedMonth(month);
                                            setDropdownOpen(false);
                                            setHoverData(chartData[month as keyof typeof chartData][3]);
                                        }}
                                        className={cn("w-full px-4 py-1.5 text-[10px] font-bold text-left transition-colors", dark ? "hover:bg-white/5" : "hover:bg-gray-50", selectedMonth === month ? "text-indigo-500" : d.text)}
                                    >
                                        {month}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-1 px-4 pb-4">
                <div className={cn("flex flex-col justify-between text-[9px] font-bold pr-2 pb-5 text-right shrink-0 w-10", d.subText)}>
                    <span>500K</span><span>400K</span><span>300K</span><span>200K</span><span>100K</span><span>0</span>
                </div>
                <div className="flex-1 flex flex-col relative w-full h-full">
                    <div className="relative flex-1 min-h-[140px] w-full">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            {[...Array(6)].map((_, i) => <div key={i} className={cn("w-full border-t", d.gridLine)} />)}
                        </div>

                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 140" preserveAspectRatio="none">
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
                            <path d={generatePath(currentData, "y1")} fill="url(#salesGrad)" />
                            <path d={generateLinePath(currentData, "y1")} fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={generatePath(currentData, "y2")} fill="url(#profitGrad)" />
                            <path d={generateLinePath(currentData, "y2")} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1={hoverData.x} y1="0" x2={hoverData.x} y2="140" stroke="#4F46E5" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" className="transition-all duration-300" />
                            <circle cx={hoverData.x} cy={hoverData.y1} r="4" fill="#4F46E5" stroke="white" strokeWidth="2" className="transition-all duration-300" />
                            <circle cx={hoverData.x} cy={hoverData.y2} r="4" fill="#10B981" stroke="white" strokeWidth="2" className="transition-all duration-300" />
                        </svg>

                        <div className="absolute inset-0 flex z-20">
                            {currentData.map((data) => (
                                <div
                                    key={data.x}
                                    className="flex-1 cursor-crosshair h-full"
                                    onMouseEnter={() => setHoverData(data)}
                                />
                            ))}
                        </div>

                        <div
                            className={cn("absolute top-[5%] rounded-sm shadow-lg border p-3 min-w-[145px] z-10 pointer-events-none transition-all duration-300", d.chartTip)}
                            style={hoverData.x > 250 ? { right: `calc(${100 - (hoverData.x / 500) * 100}% + 10px)` } : { left: `calc(${(hoverData.x / 500) * 100}% + 10px)` }}
                        >
                            <p className={cn("text-[9px] font-black mb-2 leading-none", d.subText)}>{hoverData.date}</p>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-[10px]">
                                    <div className={cn("flex items-center gap-1.5 font-bold", d.subText)}><div className="w-2 h-2 rounded-full bg-indigo-600" /> Sales</div>
                                    <span className={cn("font-black ml-2", d.text)}>{hoverData.sales}</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px]">
                                    <div className={cn("flex items-center gap-1.5 font-bold", d.subText)}><div className="w-2 h-2 rounded-full bg-emerald-500" /> Profit</div>
                                    <span className="font-black text-emerald-500 ml-2">{hoverData.profit}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cn("flex justify-between text-[9px] font-bold pt-1.5 pointer-events-none", d.subText)}>
                        {labels.map((label) => <span key={label}>{label}</span>)}
                    </div>
                </div>
            </div>
        </div>
    );
}