"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroPanel() {
    return (
        <div className="relative w-full lg:w-[57%] h-auto min-h-[380px] lg:h-auto shrink-0 lg:overflow-y-auto lg:rounded-l-[2rem] bg-[#04055e] flex flex-col">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/loginpageimage.png"
                    alt="City Skyline"
                    fill
                    sizes="(max-width: 1024px) 100vw, 57vw"
                    className="object-cover lg:object-contain lg:object-right"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#030637]/90 via-[#030637]/40 to-transparent" />
            </div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                exit={{ x: -300, opacity: 0, transition: { duration: 0.6 } }}
                className="relative z-10 flex flex-col h-full p-6 lg:p-10 xl:px-16 xl:py-12 gap-8 lg:gap-10"
            >
                <div>
                    <Image src="/icons/roaminglogo.png" alt="Roaming Bangladesh" width={140} height={40} className="object-contain brightness-125 mb-1.5" style={{ width: "auto", height: "auto" }} />
                    <p className="text-[7px] lg:text-[8px] font-black tracking-[0.42em] text-white/55 uppercase">B2B Travel Marketplace</p>
                </div>

                <div className="max-w-[500px]">
                    <h1 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[2.6rem] font-bold leading-[1.1] tracking-tight text-white mb-4">
                        Your Trusted Travel<br className="hidden lg:block" />Business Partner
                    </h1>
                    <p className="text-white/70 text-[11px] lg:text-[13px] font-medium leading-relaxed">
                        One platform, endless possiblities,<br className="hidden sm:block" />
                        Flights, Hotels, Visa, Tours &amp; Umrah - all in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5 pb-6 lg:pb-0">
                    {[
                        { icon: "/icons/flightbooking.png", title: "500+ Airlines", desc: "Global inventory" },
                        { icon: "/icons/hotelbooking.png", title: "1M+ Hotels", desc: "Worldwide hotels" },
                        { icon: "/icons/visaservice.png", title: "Visa Solutions", desc: "Fast processing" },
                        { icon: "/icons/supportcentre.png", title: "24/7 Support", desc: "Always here" },
                    ].map((item, i) => (
                        <motion.div key={item.title} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }} className="flex items-center gap-4">
                            <div className="w-[38px] h-[38px] lg:w-[44px] lg:h-[44px] bg-[#371A9A] rounded-[10px] lg:rounded-[14px] flex items-center justify-center shrink-0 shadow-lg border border-white/10">
                                <Image src={item.icon} alt={item.title} width={20} height={20} className="brightness-200" style={{ width: "auto", height: "auto" }} />
                            </div>
                            <div>
                                <p className="text-[1rem] lg:text-[1.15rem] font-bold text-white leading-none mb-1">{item.title}</p>
                                <p className="text-[10px] lg:text-[11px] text-white/50 font-semibold tracking-wide">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
