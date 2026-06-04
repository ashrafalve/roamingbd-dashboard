"use client";

import Image from "next/image";
import { ChevronRight, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

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

export function Sidebar({
    activeItem,
    setActiveItem,
    sidebarOpen,
    setSidebarOpen
}: {
    activeItem: string;
    setActiveItem: (val: string) => void;
    sidebarOpen: boolean;
    setSidebarOpen: (val: boolean) => void;
}) {
    const { d } = useTheme();

    return (
        <aside className={cn(
            "fixed inset-y-0 left-0 z-50 w-[280px] bg-[#0E0B64] text-white flex flex-col shrink-0 overflow-hidden shadow-2xl transition-transform duration-300",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            <div className="p-8 h-full flex flex-col">
                <div className="mb-10 pl-2 shrink-0 flex items-center justify-between">
                    <Image src="/icons/roaminglogo.png" alt="Logo" width={140} height={35} className="object-contain" style={{ width: "auto", height: "auto" }} />
                    <button onClick={() => setSidebarOpen(false)} className="p-2 text-white/40 hover:text-white">
                        <ChevronRight className="w-5 h-5 rotate-180" />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-none pr-1">
                    {sidebarItems.map((item) => {
                        const isActive = activeItem === item.name;
                        return (
                            <button
                                key={item.name}
                                onClick={() => setActiveItem(item.name)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-sm transition-colors duration-200 group relative"
                            >
                                {/* Animated glassmorphic highlight */}
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute inset-0 rounded-sm"
                                        style={{
                                            background: "rgba(255,255,255,0.1)",
                                            backdropFilter: "blur(8px)",
                                            WebkitBackdropFilter: "blur(8px)",
                                            border: "1px solid rgba(255,255,255,0.35)",
                                            boxShadow: "0 0 12px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                    />
                                )}

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={cn(
                                        "w-6 h-6 flex items-center justify-center transition-all",
                                        isActive ? "opacity-100" : "opacity-40 group-hover:opacity-70"
                                    )}>
                                        {item.icon === "/icons/walletwhite.png" ? (
                                            <Wallet className="w-5 h-5" />
                                        ) : (
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={22}
                                                height={22}
                                                className="brightness-0 invert object-contain"
                                                style={{ width: "auto", height: "auto" }}
                                            />
                                        )}
                                    </div>
                                    <span className={cn(
                                        "text-[13px] font-bold tracking-tight transition-colors",
                                        isActive ? "text-white" : "text-white/40 group-hover:text-white/80"
                                    )}>
                                        {item.name}
                                    </span>
                                </div>

                                {item.name !== "Dashboard" && (
                                    <ChevronRight className={cn(
                                        "w-3.5 h-3.5 relative z-10 transition-all",
                                        isActive ? "opacity-60" : "opacity-20 group-hover:opacity-50"
                                    )} />
                                )}
                            </button>
                        );
                    })}
                </nav>

                <div className="mt-8 shrink-0">
                    <div className="bg-white/5 rounded-sm p-5 border border-white/10 text-center backdrop-blur-sm">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Image src="/icons/supportcentre.png" alt="Support" width={22} height={22} className="brightness-0 invert" style={{ width: "auto", height: "auto" }} />
                        </div>
                        <h4 className="text-[14px] font-black mb-1">24/7 Support</h4>
                        <p className="text-[11px] text-white/40 font-bold mb-4">We are here to help you</p>
                        <button className="w-full py-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm transition-all rounded-sm text-[12px] font-black border border-white/20" style={{ boxShadow: "0 0 10px rgba(255,255,255,0.1)" }}>
                            +880 96 1234 5678
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
