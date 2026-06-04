"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Plane } from "lucide-react";

export function LoadingScreen() {
    return (
        <motion.div
            key="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-[#0E0B64] z-50 flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Roaming Logo Reveal */}
            <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="mb-12"
            >
                <div className="text-center">
                    <Image src="/icons/roaminglogo.png" alt="Logo" width={220} height={60} className="brightness-125 mb-2" priority />
                    <p className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">B2B Travel Marketplace</p>
                </div>
            </motion.div>

            {/* Paper Plane Animation */}
            <div className="relative w-72 h-1.5 mt-4">
                <div className="absolute inset-0 bg-white/5 rounded-full" />
                <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-white rounded-full h-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Moving Paper Plane */}
                <motion.div
                    className="absolute -top-7 left-0"
                    initial={{ x: 0 }}
                    animate={{
                        x: [0, 270, -500],
                    }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                        times: [0, 0.8, 1],
                    }}
                >
                    <div className="relative">
                        <Plane className="w-8 h-8 text-white rotate-45" />
                        <motion.div
                            className="absolute top-1/2 right-full h-[1px] bg-gradient-to-l from-white/80 to-transparent mr-2"
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5, 1] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="mt-12 text-white/40 text-[9px] font-black uppercase tracking-[0.4em]"
            >
                Preparing your workspace
            </motion.p>
        </motion.div>
    );
}
