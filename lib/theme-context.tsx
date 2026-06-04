"use client";

import { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
    dark: boolean;
    setDark: (val: boolean) => void;
    d: {
        pageBg: string;
        text: string;
        subText: string;
        card: string;
        header: string;
        hBtn: string;
        walletPill: string;
        divider: string;
        sideActive: string;
        gridLine: string;
        chartTip: string;
        notifIcon: string;
        reminderBg: string;
        footerBg: string;
        footerRate: string;
        barBg: string;
        actionHov: string;
        quickLabel: string;
        actionCard: string;
    };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
    children,
    dark,
    setDark
}: {
    children: ReactNode;
    dark: boolean;
    setDark: (val: boolean) => void
}) {
    const d = {
        pageBg: dark ? "bg-[#0f0f1a]" : "bg-[#F0F2F8]",
        text: dark ? "text-white" : "text-[#3B2963]",
        subText: dark ? "text-[#a27df0]" : "text-[#5C21DF]",
        card: dark ? "bg-[#1a1a2e] border-white/5" : "bg-white border-slate-200",
        header: dark ? "bg-[#12122a]/80 border-white/5" : "bg-white/40",
        hBtn: dark ? "bg-white/10 border-white/10 text-white/60" : "bg-white border-gray-100 text-gray-400",
        walletPill: dark ? "bg-white/10 border-white/10" : "bg-white border-gray-100",
        divider: dark ? "border-white/10" : "border-gray-100",
        sideActive: "bg-[#3B2963] text-white",
        gridLine: dark ? "border-white/5" : "border-gray-50",
        chartTip: dark ? "bg-[#1a1a2e] border-white/10" : "bg-white border-gray-100",
        notifIcon: dark ? "bg-white/10" : "bg-gray-50",
        reminderBg: dark ? "bg-white/5" : "bg-gray-50/50",
        footerBg: dark ? "bg-[#0f0f1a] border-white/10" : "border-gray-100",
        footerRate: dark ? "bg-white/10 border-white/10 text-white/70" : "bg-gray-50 border-gray-100 text-gray-700",
        barBg: dark ? "bg-white/10" : "bg-gray-50",
        actionHov: dark ? "hover:bg-white/10 hover:border-white/10" : "hover:bg-gray-50 hover:border-gray-100",
        quickLabel: dark ? "text-white/50 group-hover/action:text-white" : "text-gray-400 group-hover/action:text-[#3B2963]",
        actionCard: dark ? "bg-white/5 border-white/10 shadow-none" : "bg-[#FAFAFA] border-gray-200 shadow-sm",
    };

    return (
        <ThemeContext.Provider value={{ dark, setDark, d }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
