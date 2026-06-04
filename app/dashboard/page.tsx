"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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

export default function DashboardPage() {
    const [activeItem, setActiveItem] = useState("Dashboard");
    const [dark, setDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <ThemeProvider dark={dark} setDark={setDark}>
            <DashboardContent
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
        </ThemeProvider>
    );
}

function DashboardContent({
    activeItem,
    setActiveItem,
    mobileMenuOpen,
    setMobileMenuOpen
}: any) {
    const { d } = useTheme();

    return (
        <div className={cn("flex h-screen font-archivo overflow-hidden transition-colors duration-500", d.pageBg, d.text)}>
            {/* Backdrop for mobile */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            <Sidebar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <main className="flex-1 flex flex-col overflow-hidden">
                <Header setMobileMenuOpen={setMobileMenuOpen} />

                <div className="flex-1 overflow-y-auto p-4 lg:p-10 space-y-6 scrollbar-none pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col-span-1 lg:col-span-8 space-y-6">
                            <StatsGrid />

                            {/* Sales Overview + Quick Actions */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
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
        </div >
    );
}
