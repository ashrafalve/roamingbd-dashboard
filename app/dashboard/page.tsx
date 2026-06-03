"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    ChevronRight, TrendingUp, Bell, ShieldCheck,
    Menu, ChevronDown, ArrowRight, Moon, Sun, Settings, LogOut
} from "lucide-react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function DashboardPage() {
    const [activeItem, setActiveItem] = useState("Dashboard");
    const [dark, setDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const router = useRouter();

    const initialStats = [
        { title: "Total Bookings", value: "256", change: "18.5%", subtext: "vs last 30 days", icon: "/icons/totalbooking.png", iconBg: "bg-[#3B2963]", lightestColor: "border-[#3B2963]/20", lightBg: "bg-[#3B2963]/10" },
        { title: "Total Sales", value: "BDT 1,875,450", change: "22.3%", subtext: "vs last 30 days", icon: "/icons/totalsale.png", iconBg: "bg-[#00D420]", lightestColor: "border-[#00D420]/20", lightBg: "bg-[#00D420]/10" },
        { title: "Total Profit", value: "BDT 248,750", change: "20.1%", subtext: "vs last 30 days", icon: "/icons/toatlprofit.png", iconBg: "bg-[#F97E20]", lightestColor: "border-[#F97E20]/20", lightBg: "bg-[#F97E20]/10" },
        { title: "Wallet Balance", value: "BDT 125,750.00", subtext: "Available Balance", icon: "/icons/walletwhite.png", iconBg: "bg-[#2E6CFD]", lightestColor: "border-[#2E6CFD]/20", lightBg: "bg-[#2E6CFD]/10" },
    ];

    const [statsItems, setStatsItems] = useState(initialStats);

    const d = {
        // page bg
        pageBg: dark ? "bg-[#0f0f1a]" : "bg-[#F0F2F8]",
        // text
        text: dark ? "text-white" : "text-[#3B2963]",
        subText: dark ? "text-white/40" : "text-gray-400",
        // card
        card: dark ? "bg-[#1a1a2e] border-white/5" : "bg-white border-white",
        // header
        header: dark ? "bg-[#12122a]/80 border-white/5" : "bg-white/40",
        hBtn: dark ? "bg-white/10 border-white/10 text-white/60" : "bg-white border-gray-100 text-gray-400",
        // wallet pill
        walletPill: dark ? "bg-white/10 border-white/10" : "bg-white border-gray-100",
        // divider
        divider: dark ? "border-white/10" : "border-gray-100",
        // sidebar active
        sideActive: "bg-[#3B2963] text-white",
        // chart utils
        gridLine: dark ? "border-white/5" : "border-gray-50",
        chartTip: dark ? "bg-[#1a1a2e] border-white/10" : "bg-white border-gray-100",
        // notif icon bg
        notifIcon: dark ? "bg-white/10" : "bg-gray-50",
        // reminder card
        reminderBg: dark ? "bg-white/5" : "bg-gray-50/50",
        // footer
        footerBg: dark ? "bg-[#0f0f1a] border-white/10" : "border-gray-100",
        footerRate: dark ? "bg-white/10 border-white/10 text-white/70" : "bg-gray-50 border-gray-100 text-gray-700",
        // progress bar bg
        barBg: dark ? "bg-white/10" : "bg-gray-50",
        // action hover
        actionHov: dark ? "hover:bg-white/10 hover:border-white/10" : "hover:bg-gray-50 hover:border-gray-100",
        quickLabel: dark ? "text-white/50 group-hover/action:text-white" : "text-gray-400 group-hover/action:text-[#3B2963]",
    };

    const sidebarItems = [
        { name: "Dashboard", icon: "/icons/dashboard.png" },
        { name: "Flight Booking", icon: "/icons/flightbooking.png" },
        { name: "Hotel Booking", icon: "/icons/hotelbooking.png" },
        { name: "Visa Services", icon: "/icons/visaservice.png" },
        { name: "Tours & Activities", icon: "/icons/tourandactivities.png" },
        { name: "Umrah Packages", icon: "/icons/flightbooking.png" },
        { name: "My Bookings", icon: "/icons/bookicon.png" },
        { name: "Wallet & Finance", icon: "/icons/walletwhite.png" },
        { name: "Markup & Settings", icon: "/icons/markup.png" },
        { name: "Reports", icon: "/icons/reports.png" },
        { name: "PNR Tools", icon: "/icons/pnrtools.png" },
        { name: "CRM", icon: "/icons/dashboard.png" },
        { name: "Support Center", icon: "/icons/supportcentre.png" },
        { name: "Settings", icon: "/icons/settings.png" },
    ];



    return (
        <div className={cn("flex h-screen font-archivo overflow-hidden transition-colors duration-500", d.pageBg, d.text)}>
            {/* Backdrop for mobile */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* ── Sidebar ── */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-[280px] bg-[#0c0c3a] text-white flex flex-col shrink-0 overflow-hidden shadow-2xl transition-transform duration-300 lg:relative lg:translate-x-0",
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-8 h-full flex flex-col">
                    <div className="mb-10 pl-2 shrink-0 flex items-center justify-between">
                        <Image src="/icons/roaminglogo.png" alt="Logo" width={140} height={35} className="object-contain" style={{ height: "auto" }} />
                        <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden p-2 text-white/40 hover:text-white">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </button>
                    </div>
                    <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-none pr-1">
                        {sidebarItems.map((item) => (
                            <button key={item.name} onClick={() => setActiveItem(item.name)}
                                className={cn("w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 group",
                                    activeItem === item.name ? d.sideActive : "text-white/40 hover:bg-white/5 hover:text-white")}>
                                <div className="flex items-center gap-4">
                                    <div className={cn("w-6 h-6 flex items-center justify-center transition-all",
                                        activeItem === item.name ? "opacity-100" : "opacity-40 group-hover:opacity-100")}>
                                        <Image src={item.icon} alt={item.name} width={22} height={22} className="brightness-0 invert object-contain" style={{ width: "auto", height: "auto" }} />
                                    </div>
                                    <span className="text-[13px] font-bold tracking-tight">{item.name}</span>
                                </div>
                                {item.name !== "Dashboard" && <ChevronRight className="w-3.5 h-3.5 opacity-20 group-hover:opacity-100 transition-all" />}
                            </button>
                        ))}
                    </nav>
                    <div className="mt-8 shrink-0">
                        <div className="bg-[#1a1a5b] rounded-xl p-5 border border-white/5 text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Image src="/icons/supportcentre.png" alt="Support" width={22} height={22} className="brightness-0 invert" style={{ width: "auto", height: "auto" }} />
                            </div>
                            <h4 className="text-[14px] font-black mb-1">24/7 Support</h4>
                            <p className="text-[11px] text-white/40 font-bold mb-4">We are here to help you</p>
                            <button className="w-full py-3 bg-[#3B2963] hover:bg-opacity-80 transition-all rounded-xl text-[12px] font-black border border-white/10">+880 96 1234 5678</button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* ── Main Content ── */}
            <main className="flex-1 flex flex-col overflow-hidden">

                {/* Header */}
                <header className={cn("h-[90px] shrink-0 px-4 lg:px-10 flex items-center justify-between backdrop-blur-md z-30 border-b transition-colors duration-500", d.header, d.divider)}>
                    <div className="flex items-center gap-4 lg:gap-6">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className={cn("w-11 h-11 rounded-full flex items-center justify-center shadow-sm border transition-colors duration-300 lg:hidden", d.hBtn)}
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <div className="hidden sm:block">
                            <h2 className="text-[16px] lg:text-[20px] font-black leading-tight flex items-center gap-2">
                                Good Morning, Arif Dossier
                                <Image src="/icons/hi.png" alt="hi" width={24} height={24} className="inline-block" style={{ width: "auto", height: "auto" }} />
                            </h2>
                            <p className={cn("text-[10px] lg:text-[12px] font-bold mt-1", d.subText)}>Here&apos;s what happening with your business today.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        {/* Wallet */}
                        <div className={cn("px-3 lg:px-5 py-2.5 rounded-xl border shadow-sm flex items-center gap-2 lg:gap-4 transition-colors duration-300", d.walletPill)}>
                            <div className={cn("p-1.5 rounded-lg shrink-0", dark ? "bg-white/10" : "bg-gray-50")}>
                                <Image src="/icons/walletcoloredicon.png" alt="Wallet" width={18} height={18} style={{ width: "auto", height: "auto" }} />
                            </div>
                            <div className="leading-tight">
                                <p className={cn("text-[8px] lg:text-[9px] font-black uppercase tracking-widest leading-none mb-1", d.subText)}>Wallet Balance</p>
                                <p className="text-[11px] lg:text-[13px] font-black whitespace-nowrap">BDT 125,750.00</p>
                            </div>
                            <ChevronRight className={cn("w-4 h-4 ml-2 lg:ml-4 hidden sm:block", d.subText)} />
                        </div>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDark(!dark)}
                            className={cn(
                                "relative w-[52px] h-[28px] rounded-full border transition-all duration-500 flex items-center px-1 shrink-0",
                                dark ? "bg-[#3B2963] border-[#3B2963]" : "bg-gray-100 border-gray-200"
                            )}
                        >
                            <motion.div
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                className={cn(
                                    "w-5 h-5 rounded-full flex items-center justify-center shadow-md",
                                    dark ? "bg-white ml-auto" : "bg-white ml-0"
                                )}
                            >
                                {dark
                                    ? <Moon className="w-3 h-3 text-[#3B2963]" />
                                    : <Sun className="w-3 h-3 text-amber-500" />
                                }
                            </motion.div>
                        </button>

                        {/* Bell */}
                        <button className={cn("w-11 h-11 rounded-full flex items-center justify-center relative border shadow-sm transition-colors duration-300", d.hBtn)}>
                            <Bell className="w-5 h-5" />
                            <div className="absolute top-0 right-0 bg-[#3B2963] text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">8</div>
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative ml-2">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className={cn("flex items-center gap-3 pl-4 border-l transition-colors duration-300", d.divider)}
                            >
                                <div className="text-right leading-none hidden sm:block">
                                    <p className="text-[13px] font-black">Arif Dossier</p>
                                    <p className={cn("text-[10px] font-bold mt-1", d.subText)}>Premium Agent</p>
                                </div>
                                <div className="relative group">
                                    <div className={cn("w-11 h-11 rounded-xl border-2 overflow-hidden transition-all", profileOpen ? "border-[#3B2963]" : "border-transparent px-0.5 shadow-md")}>
                                        <Image src="/images/profile_headshot.png" alt="Profile" width={40} height={40} className="w-full h-full rounded-lg object-cover" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {profileOpen && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className={cn(
                                                "absolute right-0 mt-3 w-56 rounded-xl border shadow-xl z-50 p-2 transition-colors duration-300",
                                                dark ? "bg-[#1a1a5b] border-white/10" : "bg-white border-gray-100"
                                            )}
                                        >
                                            <div className="px-4 py-3 border-b border-gray-100/10 mb-1 lg:hidden">
                                                <p className="text-[12px] font-black leading-none mb-1">Arif Dossier</p>
                                                <p className={cn("text-[8px] font-bold uppercase", d.subText)}>Premium Agent</p>
                                            </div>
                                            <button className={cn("w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[11px] font-bold transition-colors", dark ? "hover:bg-white/5" : "hover:bg-gray-50")}>
                                                <Settings className="w-4 h-4" /> Settings
                                            </button>
                                            <button
                                                onClick={() => router.push("/")}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[11px] font-bold text-red-500 hover:bg-red-50 transition-colors"
                                            >
                                                <LogOut className="w-4 h-4" /> Logout
                                            </button>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 lg:p-10 space-y-6 scrollbar-none pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col-span-1 lg:col-span-8 space-y-6">
                            <Reorder.Group axis="x" values={statsItems} onReorder={setStatsItems} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                {statsItems.map((stat) => (
                                    <Reorder.Item
                                        key={stat.title}
                                        value={stat}
                                        className={cn("p-3 rounded-sm shadow-sm border flex items-center gap-4 transition-colors duration-300 cursor-grab active:cursor-grabbing", d.card, stat.lightestColor)}
                                    >
                                        <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shrink-0", stat.lightBg)}>
                                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg", stat.iconBg)}>
                                                <Image src={stat.icon} alt={stat.title} width={40} height={40} style={{ width: "auto", height: "auto" }} className="brightness-0 invert" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className={cn("text-[8px] font-black uppercase tracking-widest leading-none mb-1", d.subText)}>{stat.title}</p>
                                            <h3 className="text-[16px] font-black tracking-tight leading-none mb-1">{stat.value}</h3>
                                            <div className="flex items-center gap-1.5">
                                                {stat.change && <span className="text-[9px] font-black flex items-center gap-0.5 text-emerald-500"><TrendingUp className="w-2.5 h-2.5" /> {stat.change}</span>}
                                                <span className={cn("text-[8px] font-bold uppercase tracking-tighter", d.subText)}>{stat.subtext}</span>
                                            </div>
                                        </div>
                                    </Reorder.Item>
                                ))}
                            </Reorder.Group>

                            {/* Sales Overview + Quick Actions */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                                {/* Sales Chart */}
                                {/* Sales Chart */}
                                <div className={cn("col-span-1 lg:col-span-7 rounded-sm border shadow-sm flex flex-col overflow-hidden transition-colors duration-300", d.card)}>
                                    <div className="flex items-center justify-between px-6 pt-5 pb-2">
                                        <h3 className="text-[14px] font-black">Sales Overview</h3>
                                        <div className="flex items-center gap-5">
                                            <div className={cn("flex items-center gap-5 text-[9px] font-bold", d.subText)}>
                                                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-600" /> Sales (BDT)</div>
                                                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Profit (BDT)</div>
                                            </div>
                                            <div className={cn("px-3 py-1.5 rounded-lg border flex items-center gap-1.5 cursor-pointer transition-colors", dark ? "bg-white/10 border-white/10" : "bg-gray-50 border-gray-100")}>
                                                <span className="text-[10px] font-black">This Month</span>
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
                                                <div className={cn("absolute left-[44%] top-[5%] rounded-xl shadow-lg border p-3 min-w-[145px] z-10 pointer-events-none transition-colors duration-300", d.chartTip)}>
                                                    <p className={cn("text-[9px] font-black mb-2 leading-none", d.subText)}>15 May 2024</p>
                                                    <div className="space-y-1.5">
                                                        <div className="flex items-center justify-between text-[10px]">
                                                            <div className={cn("flex items-center gap-1.5 font-bold", d.subText)}><div className="w-2 h-2 rounded-full bg-indigo-600" /> Sales (BDT)</div>
                                                            <span className="font-black">320,450</span>
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

                                {/* Quick Actions */}
                                <div className={cn("col-span-1 lg:col-span-5 p-5 rounded-sm border shadow-sm flex flex-col transition-colors duration-300", d.card)}>
                                    <h2 className="text-[20px] font-black mb-6 text-[#3B2963]">Quick Actions</h2>
                                    <div className="flex-1 grid grid-cols-4 gap-3">
                                        {[
                                            { name: "Book Flight", icon: "/icons/flightbooking.png", color: "#6720EA" },
                                            { name: "Book Hotel", icon: "/icons/hotelbooking.png", color: "#2E6CFD" },
                                            { name: "Visa Application", icon: "/icons/visaservice.png", color: "#00D420" },
                                            { name: "Umrah Package", icon: "/icons/umrahpackage.png", color: "#000000" },
                                            { name: "Add Money", icon: "/icons/walletwhite.png", color: "#08A89C" },
                                            { name: "My Bookings", icon: "/icons/bookicon.png", color: "#A00FD6" },
                                            { name: "PNR Retriview", icon: "/icons/pnrtools.png", color: "#03068B" },
                                            { name: "Support Ticket", icon: "/icons/supportcentre.png", color: "#F60C10" },
                                        ].map((action, i) => (
                                            <button key={i} className="flex flex-col items-center justify-center p-3 rounded-md border border-gray-200 bg-[#FAFAFA] transition-all gap-2 group/action hover:shadow-sm hover:border-gray-300">
                                                <div
                                                    className="w-12 h-12 rounded-[18px] flex items-center justify-center transition-transform group-hover/action:scale-105"
                                                    style={{ backgroundColor: `${action.color}1A` }}
                                                >
                                                    <div
                                                        className="w-6 h-6"
                                                        style={{
                                                            backgroundColor: action.color,
                                                            maskImage: `url(${action.icon})`,
                                                            WebkitMaskImage: `url(${action.icon})`,
                                                            maskSize: 'contain',
                                                            WebkitMaskSize: 'contain',
                                                            maskRepeat: 'no-repeat',
                                                            WebkitMaskRepeat: 'no-repeat',
                                                            maskPosition: 'center',
                                                            WebkitMaskPosition: 'center'
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-[11px] font-black text-[#3B2963] text-center leading-tight whitespace-normal">{action.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Airlines + Donut */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
                                <div className={cn("col-span-1 lg:col-span-6 p-8 rounded-sm border shadow-sm flex flex-col transition-colors duration-300", d.card)}>
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-[15px] font-black">Top Airlines <span className={cn("text-[10px] font-bold ml-1", d.subText)}>(This Month)</span></h3>
                                        <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest">View All</button>
                                    </div>
                                    <div className="space-y-6">
                                        {[
                                            { name: "Biman Bangladesh", bookings: 56, logo: "/icons/bimanbangladesh.png" },
                                            { name: "Emirates", bookings: 42, logo: "/icons/emirates.png" },
                                            { name: "Qatar Airways", bookings: 38, logo: "/icons/qtar.png" },
                                            { name: "Turkish Airlines", bookings: 31, logo: "/icons/turkish.png" },
                                            { name: "Air Arabia", bookings: 26, logo: "/icons/turkish.png" },
                                        ].map((a, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <Image src={a.logo} alt="" width={22} height={22} className="object-contain" style={{ width: "auto", height: "auto" }} />
                                                <div className="flex-1 space-y-1.5">
                                                    <div className="flex items-center justify-between text-[11px] font-black">
                                                        <span>{a.name}</span>
                                                        <span className={d.subText}>{a.bookings} Bookings</span>
                                                    </div>
                                                    <div className={cn("h-1.5 w-full rounded-full overflow-hidden", d.barBg)}>
                                                        <motion.div initial={{ width: 0 }} animate={{ width: `${a.bookings * 1.6}%` }} className="h-full bg-[#3B2963] rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={cn("col-span-1 lg:col-span-6 p-8 rounded-sm border shadow-sm flex flex-col transition-colors duration-300", d.card)}>
                                    <h3 className="text-[15px] font-black mb-8">Booking by Service <span className={cn("text-[10px] font-bold ml-1", d.subText)}>(This Month)</span></h3>
                                    <div className="flex-1 flex items-center gap-8">
                                        <div className="relative w-40 h-40">
                                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                                <circle cx="50" cy="50" r="40" fill="transparent" stroke={dark ? "#ffffff15" : "#E2E8F0"} strokeWidth="18" />
                                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4F46E5" strokeWidth="18" strokeDasharray="251" strokeDashoffset="62" />
                                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="18" strokeDasharray="251" strokeDashoffset="180" />
                                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F59E0B" strokeWidth="18" strokeDasharray="251" strokeDashoffset="220" />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-2xl font-black">256</span>
                                                <span className={cn("text-[9px] font-bold uppercase", d.subText)}>Total</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            {[
                                                { label: "Flights", value: "68% (174)", color: "bg-indigo-600" },
                                                { label: "Hotels", value: "18% (46)", color: "bg-blue-400" },
                                                { label: "Visa", value: "8% (20)", color: "bg-orange-500" },
                                                { label: "Tours", value: "4% (10)", color: "bg-emerald-500" },
                                                { label: "Umrah", value: "2% (6)", color: "bg-orange-800" },
                                            ].map((svc) => (
                                                <div key={svc.label} className="flex items-center justify-between text-[11px] font-bold">
                                                    <div className="flex items-center gap-2"><div className={cn("w-3 h-3 rounded-[3px]", svc.color)} /><span className={d.subText}>{svc.label}</span></div>
                                                    <span className={d.subText}>{svc.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-span-1 lg:col-span-4 space-y-6">
                            {/* Notifications */}
                            <div className={cn("p-8 rounded-sm border shadow-sm flex flex-col h-[400px] transition-colors duration-300", d.card)}>
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-[15px] font-black">Notifications</h3>
                                    <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest">View All</button>
                                </div>
                                <div className="space-y-6 overflow-y-auto no-scrollbar">
                                    {[
                                        { title: "Flight Booking Confirmed", desc: "DAC → DXB | EK 584", time: "Just now", icon: "/icons/flightbooking.png", dot: "bg-blue-500" },
                                        { title: "Money Added", desc: "BDT 50,000 added to wallet", time: "16m ago", icon: "/icons/walletwhite.png", dot: "bg-emerald-500" },
                                        { title: "Visa Application Update", desc: "UK Visit Visa is under process", time: "1h ago", icon: "/icons/visaservice.png", dot: "bg-indigo-500" },
                                        { title: "Hotel Booking Confirmed", desc: "Dubai, UAE | 3 Nights", time: "2h ago", icon: "/icons/hotelbooking.png", dot: "bg-orange-500" },
                                    ].map((notif, i) => (
                                        <div key={i} className="flex items-start gap-4 cursor-pointer group/notif">
                                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative", d.notifIcon)}>
                                                <Image src={notif.icon} alt="" width={18} height={18} className="brightness-0 opacity-20 group-hover/notif:opacity-50 transition-opacity" style={{ width: "auto", height: "auto" }} />
                                                <div className={cn("absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white", notif.dot)} />
                                            </div>
                                            <div className="flex-1 py-1">
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <h4 className="text-[11px] font-black">{notif.title}</h4>
                                                    <span className={cn("text-[9px] font-bold", d.subText)}>{notif.time}</span>
                                                </div>
                                                <p className={cn("text-[10px] font-bold", d.subText)}>{notif.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reminders */}
                            <div className={cn("p-8 rounded-sm border shadow-sm transition-colors duration-300", d.card)}>
                                <h3 className="text-[15px] font-black mb-8 leading-none">Upcoming Reminders</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Umrah Group", sub: "Departure on 20 May 2024", badge: "Tomorrow", color: "bg-red-50 text-red-500", day: "20" },
                                        { name: "Visa Appointment", sub: "UK Visa - Dubai Center", badge: "5 Days Left", color: "bg-emerald-50 text-emerald-500", day: "25" },
                                    ].map((rem, i) => (
                                        <div key={i} className={cn("p-4 rounded-xl flex items-center justify-between border border-transparent hover:border-white/10 transition-all", d.reminderBg)}>
                                            <div className="flex gap-4">
                                                <div className={cn("w-10 h-10 rounded-lg border flex flex-col items-center justify-center text-pink-500", dark ? "bg-white/5 border-white/10" : "bg-white border-gray-100")}>
                                                    <span className={cn("text-[7px] font-black uppercase opacity-40 mb-0.5", d.subText)}>MAY</span>
                                                    <span className="text-[15px] font-black leading-none">{rem.day}</span>
                                                </div>
                                                <div className="leading-tight py-0.5">
                                                    <h4 className="text-[11px] font-black">{rem.name}</h4>
                                                    <p className={cn("text-[9px] font-bold mt-1", d.subText)}>{rem.sub}</p>
                                                </div>
                                            </div>
                                            <span className={cn("px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter", rem.color)}>{rem.badge}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Premium Banner */}
                            <div className="relative rounded-2xl overflow-hidden h-[260px] group shadow-2xl bg-[#030637]">
                                <Image src="/images/frameimage1.png" alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="object-contain transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 p-10 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <Image src="/icons/kingicon.png" alt="King" width={32} height={32} className="shrink-0" />
                                            <h3 className="text-[18px] font-black text-white tracking-tight leading-none">Roaming Premium Agent</h3>
                                        </div>
                                        <p className="text-[13px] font-bold text-white/90 tracking-tight">You are on Premium Plan</p>
                                    </div>
                                    <button className="flex items-center gap-3 bg-gray-50/95 backdrop-blur-sm text-[#3B2963] px-6 py-2.5 rounded-lg text-[14px] font-black hover:bg-white transition-all w-fit shadow-2xl group/btn">
                                        View Benefits <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={cn("pt-6 border-t flex items-center justify-between text-[11px] font-bold uppercase tracking-wider transition-colors duration-300", d.subText, d.divider)}>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <span>Exchange Rate:</span>
                                <div className={cn("px-2.5 py-1 rounded-lg flex items-center gap-2 border transition-colors", d.footerRate)}>
                                    USD 1 = BDT 117.50 <TrendingUp className="w-3 h-3 text-emerald-500" /> <span className="text-emerald-500">0.25%</span>
                                </div>
                            </div>
                            <div>Last Login: 15 May 2024, 10:30 AM (IP: 103.45.67.89)</div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 text-emerald-500"><ShieldCheck className="w-4 h-4" /> Secure</div>
                            <div>Roaming Bangladesh © 2024 All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
}
