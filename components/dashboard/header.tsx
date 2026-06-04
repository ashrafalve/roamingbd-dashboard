"use client";

import Image from "next/image";
import { Menu, Moon, Sun, Bell, ChevronRight, Settings, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header({
    setMobileMenuOpen
}: {
    setMobileMenuOpen: (val: boolean) => void;
}) {
    const { dark, setDark, d } = useTheme();
    const [profileOpen, setProfileOpen] = useState(false);
    const router = useRouter();

    return (
        <header className={cn("h-[70px] lg:h-[90px] shrink-0 px-3 lg:px-10 flex items-center justify-between backdrop-blur-md z-30 border-b transition-colors duration-500", d.header, d.divider)}>
            <div className="flex items-center gap-4 lg:gap-6">
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className={cn("w-11 h-11 rounded-full flex items-center justify-center shadow-sm border transition-colors duration-300 lg:hidden", d.hBtn)}
                >
                    <Menu className="w-5 h-5" />
                </button>
                <div className="hidden sm:block">
                    <h2 className={cn("text-[16px] lg:text-[20px] font-black leading-tight flex items-center gap-2", d.text)}>
                        Good Morning, Sarah Dossier
                        <Image src="/icons/hi.png" alt="hi" width={24} height={24} className="inline-block" style={{ width: "auto", height: "auto" }} />
                    </h2>
                    <p className={cn("text-[10px] lg:text-[12px] font-bold mt-1", d.subText)}>Here&apos;s what happening with your business today.</p>
                </div>
            </div>

            <div className="flex items-center gap-5">
                {/* Wallet */}
                <div className={cn("px-2 lg:px-5 py-2 lg:py-4 rounded-sm border shadow-sm flex items-center gap-1.5 lg:gap-4 transition-colors duration-300", d.walletPill)}>
                    <div className={cn("p-1.5 rounded-sm shrink-0", dark ? "bg-white/10" : "bg-gray-50")}>
                        <Image src="/icons/walletcoloredicon.png" alt="Wallet" width={18} height={18} style={{ width: "auto", height: "auto" }} />
                    </div>
                    <div className="leading-tight">
                        <p className={cn("text-[7px] lg:text-[9px] font-black uppercase tracking-widest leading-none mb-1", d.text)}>Wallet</p>
                        <p className={cn("text-[10px] lg:text-[13px] font-black whitespace-nowrap", d.text)}>BDT 125,750</p>
                    </div>
                    <ChevronRight className={cn("w-4 h-4 ml-2 lg:ml-4 hidden sm:block", d.subText)} />
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDark(!dark)}
                    className={cn(
                        "relative w-[44px] lg:w-[52px] h-[24px] lg:h-[28px] rounded-full border transition-all duration-500 flex items-center px-1 shrink-0",
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
                <button className={cn("w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center relative border shadow-sm transition-colors duration-300", d.hBtn)}>
                    <Bell className={cn("w-5 h-5", dark ? "text-white" : "text-[#3B2963]")} />
                    <div className="absolute top-0 right-0 bg-[#3B2963] text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">8</div>
                </button>

                {/* Profile Dropdown */}
                <div className="relative ml-2">
                    <button
                        onClick={() => setProfileOpen(!profileOpen)}
                        className={cn("flex items-center gap-3 pl-4 border-l transition-colors duration-300", d.divider)}
                    >
                        <div className="text-right leading-none hidden sm:block">
                            <p className={cn("text-[13px] font-black", d.text)}>Sarah Dossier</p>
                            <p className={cn("text-[10px] font-bold mt-1", d.subText)}>Premium Agent</p>
                        </div>
                        <div className="relative group">
                            <div className={cn("w-9 h-9 lg:w-11 lg:h-11 rounded-full border-2 overflow-hidden transition-all", profileOpen ? (dark ? "border-white" : "border-[#3B2963]") : "border-transparent px-0.5 shadow-md")}>
                                <Image src="/images/profile_girl_headshot.png" alt="Profile" width={40} height={40} className="w-full h-full rounded-full object-cover" style={{ width: "auto", height: "auto" }} />
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
                                        "absolute right-0 mt-3 w-56 rounded-sm border shadow-xl z-50 p-2 transition-colors duration-300",
                                        dark ? "bg-[#1a1a5b] border-white/10" : "bg-white border-gray-100"
                                    )}
                                >
                                    <div className="px-4 py-3 border-b border-gray-100/10 mb-1 lg:hidden">
                                        <p className="text-[12px] font-black leading-none mb-1">Sarah Dossier</p>
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
    );
}
