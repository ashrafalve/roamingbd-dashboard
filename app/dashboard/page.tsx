"use client";

import Image from "next/image";
import { useState } from "react";
import {
    ChevronRight,
    TrendingUp,
    Search,
    Bell,
    ShieldCheck,
    Menu,
    ChevronDown,
    ArrowRight,
    Globe,
    Lock
} from "lucide-react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function DashboardPage() {
    const [activeItem, setActiveItem] = useState("Dashboard");

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

    const stats = [
        { title: "Total Bookings", value: "256", change: "18.5%", subtext: "vs last 30 days", icon: "/icons/totalbooking.png", iconBg: "bg-indigo-100", color: "#4F46E5" },
        { title: "Total Sales", value: "BDT 1,875,450", change: "22.3%", subtext: "vs last 30 days", icon: "/icons/totalsale.png", iconBg: "bg-emerald-100", color: "#10B981" },
        { title: "Total Profit", value: "BDT 248,750", change: "20.1%", subtext: "vs last 30 days", icon: "/icons/toatlprofit.png", iconBg: "bg-orange-100", color: "#F59E0B" },
        { title: "Wallet Balance", value: "BDT 125,750.00", subtext: "Available Balance", icon: "/icons/walletcoloredicon.png", iconBg: "bg-blue-100", color: "#3B82F6" },
    ];

    return (
        <div className="flex h-screen bg-[#F0F2F8] font-archivo overflow-hidden text-[#3B2963]">

            {/* Sidebar */}
            <aside className="w-[280px] bg-[#0c0c3a] text-white flex flex-col shrink-0 overflow-hidden shadow-2xl relative z-10 transition-all duration-500">
                <div className="p-8 h-full flex flex-col">
                    <div className="mb-10 pl-2 shrink-0">
                        <Image src="/icons/roaminglogo.png" alt="Logo" width={160} height={35} className="object-contain" />
                    </div>

                    <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-none pr-1">
                        {sidebarItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => setActiveItem(item.name)}
                                className={cn(
                                    "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group",
                                    activeItem === item.name ? "bg-[#3B2963] text-white" : "text-white/40 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn("w-5 h-5 flex items-center justify-center transition-all", activeItem === item.name ? "opacity-100" : "opacity-40 group-hover:opacity-100")}>
                                        <Image src={item.icon} alt={item.name} width={18} height={18} className="brightness-0 invert object-contain" />
                                    </div>
                                    <span className="text-[13px] font-bold tracking-tight">{item.name}</span>
                                </div>
                                {item.name !== "Dashboard" && <ChevronRight className="w-3.5 h-3.5 opacity-20 group-hover:opacity-100 transition-all" />}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-8 shrink-0">
                        <div className="bg-[#1a1a5b] rounded-xl p-5 border border-white/5 relative overflow-hidden text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Image src="/icons/supportcentre.png" alt="Support" width={22} height={22} className="brightness-0 invert" />
                            </div>
                            <h4 className="text-[14px] font-black mb-1">24/7 Support</h4>
                            <p className="text-[11px] text-white/40 font-bold mb-4">We are here to help you</p>
                            <button className="w-full py-3 bg-[#3B2963] hover:bg-opacity-80 transition-all rounded-xl text-[12px] font-black border border-white/10">+880 96 1234 5678</button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="h-[90px] shrink-0 px-10 flex items-center justify-between bg-white/40 backdrop-blur-md z-30">
                    <div className="flex items-center gap-6">
                        <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-gray-400">
                            <Menu className="w-5 h-5" />
                        </button>
                        <div>
                            <h2 className="text-[20px] font-black leading-tight flex items-center gap-2">Good Morning, Arif Hossain 👋</h2>
                            <p className="text-[12px] font-bold text-gray-400 mt-1">Here&apos;s what happening with your business today.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="bg-white px-5 py-2.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                            <div className="p-1.5 bg-gray-50 rounded-lg"><Image src="/icons/walletcoloredicon.png" alt="Wallet" width={18} height={18} /></div>
                            <div className="leading-tight">
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Wallet Balance</p>
                                <p className="text-[13px] font-black">BDT 125,750.00</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 ml-4" />
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center relative border border-gray-100 shadow-sm">
                                <Bell className="w-5 h-5 text-gray-400" />
                                <div className="absolute top-0 right-0 bg-[#3B2963] text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">8</div>
                            </button>
                            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                                <div className="text-right leading-none">
                                    <p className="text-[13px] font-black">Arif Hossain</p>
                                    <p className="text-[10px] font-bold text-gray-400 mt-1">Demo Travels</p>
                                </div>
                                <div className="relative">
                                    <Image src="/icons/google.png" alt="User" width={42} height={42} className="rounded-xl border-2 border-white shadow-md grayscale" />
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-300" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-10 space-y-6 scrollbar-none pb-10">
                    <div className="grid grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-white flex items-center gap-5">
                                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center shrink-0", stat.iconBg)}>
                                    <Image src={stat.icon} alt={stat.title} width={28} height={28} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-none mb-1">{stat.title}</p>
                                    <h3 className="text-[20px] font-black tracking-tight leading-none mb-1.5">{stat.value}</h3>
                                    <div className="flex items-center gap-2">
                                        {stat.change && <span className="text-[10px] font-black flex items-center gap-0.5 text-emerald-500"><TrendingUp className="w-3 h-3" /> {stat.change}</span>}
                                        <span className="text-[9px] font-bold text-gray-300 uppercase tracking-tighter">{stat.subtext}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-9 space-y-6">
                            {/* SALES OVERVIEW & QUICK ACTIONS ROW */}
                            <div className="grid grid-cols-12 gap-6 items-stretch">
                                {/* Sales Chart */}
                                <div className="col-span-8 bg-white p-6 rounded-xl border border-white shadow-sm flex flex-col relative overflow-hidden">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-[15px] font-black">Sales Overview</h3>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-6 text-[9px] font-bold">
                                                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> Sales (BDT)</div>
                                                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Profit (BDT)</div>
                                            </div>
                                            <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 flex items-center gap-2 cursor-pointer">
                                                <span className="text-[10px] font-black">This Month</span>
                                                <ChevronDown className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-h-[160px] relative">
                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <path d="M0,80 Q25,30 50,60 T100,20 L100,100 L0,100 Z" fill="url(#grad1)" fillOpacity="0.1" />
                                            <path d="M0,80 Q25,30 50,60 T100,20" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M0,90 Q25,70 50,85 T100,60 L100,100 L0,100 Z" fill="url(#grad2)" fillOpacity="0.1" />
                                            <path d="M0,90 Q25,70 50,85 T100,60" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                                            <defs>
                                                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="transparent" /></linearGradient>
                                                <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#10B981" /><stop offset="100%" stopColor="transparent" /></linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-50 min-w-[150px] z-10 scale-90">
                                            <p className="text-[10px] font-black mb-2 text-gray-400 uppercase tracking-widest leading-none">15 May 2024</p>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between text-[11px] font-bold">
                                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> Sales (BDT)</div>
                                                    <span className="font-black">320,450</span>
                                                </div>
                                                <div className="flex items-center justify-between text-[11px] font-bold">
                                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Profit (BDT)</div>
                                                    <span className="font-black">85,420</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-bold text-gray-400 px-1">
                                            <span>01 May</span><span>05 May</span><span>10 May</span><span>15 May</span><span>20 May</span><span>25 May</span><span>31 May</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="col-span-4 bg-white p-6 rounded-xl border border-white shadow-sm flex flex-col">
                                    <h3 className="text-[15px] font-black mb-4 leading-none">Quick Actions</h3>
                                    <div className="flex-1 grid grid-cols-4 gap-x-2 gap-y-2">
                                        {[
                                            { name: "Book Flight", icon: "/icons/flightbooking.png", color: "bg-purple-50" },
                                            { name: "Book Hotel", icon: "/icons/hotelbooking.png", color: "bg-blue-50" },
                                            { name: "Visa Application", icon: "/icons/visaservice.png", color: "bg-emerald-50" },
                                            { name: "Umrah Package", icon: "/icons/flightbooking.png", color: "bg-orange-50" },
                                            { name: "Add Money", icon: "/icons/walletwhite.png", color: "bg-teal-50" },
                                            { name: "My Bookings", icon: "/icons/bookicon.png", color: "bg-pink-50" },
                                            { name: "PNR Retrieve", icon: "/icons/pnrtools.png", color: "bg-indigo-50" },
                                            { name: "Support Ticket", icon: "/icons/supportcentre.png", color: "bg-red-50" },
                                        ].map((action, i) => (
                                            <button key={i} className="flex flex-col items-center justify-center py-2 px-1 rounded-xl border border-gray-50/50 hover:bg-gray-50/50 hover:border-gray-100 transition-all gap-1.5 group/action">
                                                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover/action:scale-110", action.color)}>
                                                    <Image src={action.icon} alt={action.name} width={16} height={16} className={action.name === "Add Money" ? "" : "brightness-0"} />
                                                </div>
                                                <span className="text-[9px] font-black text-gray-400 group-hover/action:text-[#3B2963] transition-colors text-center leading-tight">{action.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Airlines + Donut */}
                            <div className="grid grid-cols-12 gap-6 items-stretch">
                                <div className="col-span-6 bg-white p-8 rounded-xl border border-white shadow-sm flex flex-col">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-[15px] font-black">Top Airlines <span className="text-[10px] font-bold text-gray-400 ml-1">(This Month)</span></h3>
                                        <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">View All</button>
                                    </div>
                                    <div className="space-y-6">
                                        {[
                                            { name: "Biman Bangladesh", bookings: 56, logo: "/icons/bimanbangladesh.png" },
                                            { name: "Emirates", bookings: 42, logo: "/icons/emirates.png" },
                                            { name: "Qatar Airways", bookings: 38, logo: "/icons/qtar.png" },
                                            { name: "Turkish Airlines", bookings: 31, logo: "/icons/turkish.png" },
                                            { name: "Air Arabia", bookings: 26, logo: "/icons/turkish.png" },
                                        ].map((airline, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <Image src={airline.logo} alt="" width={22} height={22} className="object-contain" />
                                                <div className="flex-1 space-y-1.5">
                                                    <div className="flex items-center justify-between text-[11px] font-black">
                                                        <span>{airline.name}</span>
                                                        <span className="text-gray-400">{airline.bookings} Bookings</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                                        <motion.div initial={{ width: 0 }} animate={{ width: `${airline.bookings * 1.6}%` }} className="h-full bg-[#3B2963] rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-6 bg-white p-8 rounded-xl border border-white shadow-sm flex flex-col">
                                    <h3 className="text-[15px] font-black mb-8">Booking by Service <span className="text-[10px] font-bold text-gray-400 ml-1">(This Month)</span></h3>
                                    <div className="flex-1 flex items-center gap-8">
                                        <div className="relative w-40 h-40">
                                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E2E8F0" strokeWidth="18" />
                                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4F46E5" strokeWidth="18" strokeDasharray="251" strokeDashoffset="62" />
                                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="18" strokeDasharray="251" strokeDashoffset="180" />
                                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F59E0B" strokeWidth="18" strokeDasharray="251" strokeDashoffset="220" />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-2xl font-black">256</span>
                                                <span className="text-[9px] font-bold text-gray-400 uppercase">Total</span>
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
                                                    <div className="flex items-center gap-2">
                                                        <div className={cn("w-3 h-3 rounded-[3px]", svc.color)} />
                                                        <span className="text-gray-500">{svc.label}</span>
                                                    </div>
                                                    <span className="text-gray-400">{svc.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-span-3 space-y-6">
                            <div className="bg-white p-8 rounded-xl border border-white shadow-sm flex flex-col h-[400px]">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-[15px] font-black">Notifications</h3>
                                    <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">View All</button>
                                </div>
                                <div className="space-y-6 overflow-y-auto no-scrollbar">
                                    {[
                                        { title: "Flight Booking Confirmed", desc: "DAC → DXB | EK 584", time: "Just now", icon: "/icons/flightbooking.png", dot: "bg-blue-500" },
                                        { title: "Money Added", desc: "BDT 50,000 added to wallet", time: "16m ago", icon: "/icons/walletwhite.png", dot: "bg-emerald-500" },
                                        { title: "Visa Application Update", desc: "UK Visit Visa is under process", time: "1h ago", icon: "/icons/visaservice.png", dot: "bg-indigo-500" },
                                        { title: "Hotel Booking Confirmed", desc: "Dubai, UAE | 3 Nights", time: "2h ago", icon: "/icons/hotelbooking.png", dot: "bg-orange-500" },
                                    ].map((notif, i) => (
                                        <div key={i} className="flex items-start gap-4 cursor-pointer group/notif leading-none">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 relative">
                                                <Image src={notif.icon} alt="" width={18} height={18} className="brightness-0 opacity-20 group-hover/notif:opacity-50 transition-opacity" />
                                                <div className={cn("absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white", notif.dot)} />
                                            </div>
                                            <div className="flex-1 py-1">
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <h4 className="text-[11px] font-black text-[#3B2963]">{notif.title}</h4>
                                                    <span className="text-[9px] font-bold text-gray-300">{notif.time}</span>
                                                </div>
                                                <p className="text-[10px] font-bold text-gray-400">{notif.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl border border-white shadow-sm">
                                <h3 className="text-[15px] font-black mb-8 leading-none">Upcoming Reminders</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Umrah Group", sub: "Departure on 20 May 2024", badge: "Tomorrow", color: "bg-red-50 text-red-500" },
                                        { name: "Visa Appointment", sub: "UK Visa - Dubai Center", badge: "5 Days Left", color: "bg-emerald-50 text-emerald-500" },
                                    ].map((rem, i) => (
                                        <div key={i} className="p-4 bg-gray-50/50 rounded-xl flex items-center justify-between border border-transparent hover:border-gray-100 transition-all">
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex flex-col items-center justify-center text-[#ff3b9a]">
                                                    <span className="text-[7px] font-black uppercase opacity-40 mb-0.5">MAY</span>
                                                    <span className="text-[15px] font-black leading-none">{i === 0 ? "20" : "25"}</span>
                                                </div>
                                                <div className="leading-tight py-0.5">
                                                    <h4 className="text-[11px] font-black">{rem.name}</h4>
                                                    <p className="text-[9px] font-bold text-gray-400 mt-1">{rem.sub}</p>
                                                </div>
                                            </div>
                                            <span className={cn("px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter", rem.color)}>{rem.badge}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative rounded-xl overflow-hidden h-[240px] group shadow-lg shadow-black/5">
                                <Image src="/images/frameimage1.png" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-yellow-400 text-[#3B2963] rounded-lg text-[9px] font-black uppercase mb-3 w-fit shadow-xl shadow-yellow-400/20">
                                        <ShieldCheck className="w-3 h-3" /> Roaming Premium Agent
                                    </div>
                                    <h3 className="text-base font-black text-white mb-0.5 leading-none">You are on Premium Plan</h3>
                                    <p className="text-white/60 text-[10px] font-bold mb-4">Enjoy exclusive B2B benefits.</p>
                                    <button className="flex items-center gap-2 bg-white text-[#3B2963] px-5 py-2.5 rounded-xl text-[11px] font-black hover:bg-yellow-400 transition-all w-fit group/btn">
                                        View Benefits <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <span>Exchange Rate:</span>
                                <div className="bg-gray-50 px-2.5 py-1 rounded-lg flex items-center gap-2 text-gray-700 border border-gray-100">
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
        </div>
    );
}
