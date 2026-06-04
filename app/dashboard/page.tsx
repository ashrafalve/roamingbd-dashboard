"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider, useTheme } from "@/lib/theme-context";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { SalesOverview } from "@/components/dashboard/sales-overview";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { TopAirlines } from "@/components/dashboard/top-airlines";
import { BookingByService } from "@/components/dashboard/booking-by-service";
import { Notifications } from "@/components/dashboard/notifications";
import { Reminders } from "@/components/dashboard/reminders";
import { PremiumBanner } from "@/components/dashboard/premium-banner";
import { Footer } from "@/components/dashboard/footer";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export default function DashboardPage() {
    const [activeItem, setActiveItem] = useState("Dashboard");
    const [dark, setDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <ThemeProvider dark={dark} setDark={setDark}>
            <DashboardContent
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
        </ThemeProvider>
    );
}

type DashboardContentProps = {
    activeItem: string;
    setActiveItem: (val: string) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (val: boolean) => void;
    sidebarOpen: boolean;
    setSidebarOpen: (val: boolean) => void;
};

function DashboardContent({
    activeItem,
    setActiveItem,
    mobileMenuOpen,
    setMobileMenuOpen,
    sidebarOpen,
    setSidebarOpen
}: DashboardContentProps) {
    const { d } = useTheme();
    useEffect(() => {
        const handleResize = () => {
            const shouldOpen = window.innerWidth >= 1300;
            setSidebarOpen(shouldOpen);
            if (!shouldOpen) setMobileMenuOpen(false);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn("flex h-screen font-archivo overflow-hidden transition-colors duration-500 w-full", d.pageBg, d.text)}
        >
            {/* Backdrop for mobile */}
            <AnimatePresence>
                {mobileMenuOpen && sidebarOpen && (
                    <div
                        onClick={() => { setMobileMenuOpen(false); setSidebarOpen(false); }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                suppressHydrationWarning
                className={cn("hidden lg:flex fixed top-1/2 -translate-y-1/2 z-40 p-1.5 rounded-r-lg border border-l-0 shadow-sm transition-all duration-300", d.hBtn, sidebarOpen ? "left-[280px]" : "left-0")}
            >
                <ChevronRight className={cn("w-4 h-4 transition-transform", sidebarOpen ? "rotate-180" : "")} />
            </button>

            <Sidebar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <main className={cn("flex-1 flex flex-col overflow-hidden transition-all duration-300", sidebarOpen ? "lg:ml-[280px]" : "")}>
                <Header setMobileMenuOpen={setMobileMenuOpen} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <div className="flex-1 overflow-y-auto p-4 lg:p-10 space-y-6 scrollbar-none pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col-span-1 lg:col-span-8 space-y-6">
                            <StatsGrid />

                            {/* Sales Overview + Quick Actions */}
                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
                                <SalesOverview />
                                <QuickActions />
                            </div>

                            {/* Airlines + Donut */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
                                <TopAirlines />
                                <BookingByService />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-span-1 lg:col-span-4 space-y-6">
                            <Notifications />
                            <Reminders />
                            <PremiumBanner />
                        </div>
                    </div>

                    <Footer />
                </div>
            </main>
        </motion.div>
    );
}
