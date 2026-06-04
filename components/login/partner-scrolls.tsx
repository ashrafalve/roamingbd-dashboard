"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const airlineLogos = [
    { src: "/icons/emirates.png", alt: "Emirates", width: 90 },
    { src: "/icons/qtar.png", alt: "Qatar", width: 100 },
    { src: "/icons/usbangla.png", alt: "US-Bangla", width: 110 },
    { src: "/icons/gulfair.png", alt: "Gulf Air", width: 85 },
    { src: "/icons/turkish.png", alt: "Turkish", width: 100 },
];

const accreditationLogos = [
    { src: "/icons/iata.png", alt: "IATA", width: 54 },
    { src: "/icons/pata.png", alt: "PATA", width: 62 },
    { src: "/icons/atab.png", alt: "ATAB", width: 54 },
    { src: "/icons/RJSC-2018-04-26-10-26-29.png", alt: "RJSC", width: 38 },
    { src: "/icons/DSCC_logo.png", alt: "DSCC", width: 38 },
    { src: "/icons/বাংলাদেশ_বেসামরিক_বিমান_চলাচল_কর্তৃপক্ষের_লোগো.svg.png", alt: "Civil Aviation", width: 38 },
];

export function PartnerScrolls() {
    return (
        <div className="bg-white border-t border-slate-100 px-6 lg:px-14 py-6 lg:py-8 shrink-0 overflow-hidden mt-auto">
            <div className="flex flex-col gap-6 lg:gap-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
                    <span className="text-[9px] font-black text-[#3B2963] uppercase tracking-[0.2em] lg:w-44 shrink-0 bg-white z-10 relative">Our Airline Partners</span>
                    <div className="flex-1 overflow-hidden relative">
                        <motion.div className="flex items-center gap-10 lg:gap-16 min-w-max" animate={{ x: [0, -1200] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                            {[...airlineLogos, ...airlineLogos, ...airlineLogos].map((logo, idx) => (
                                <div key={idx} className="shrink-0"><Image src={logo.src} alt={logo.alt} width={80} height={24} className="h-5 lg:h-7 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" style={{ width: "auto", height: "auto" }} /></div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10 border-t border-slate-50 pt-6">
                    <span className="text-[9px] font-black text-[#3B2963] uppercase tracking-[0.15em] lg:w-48 shrink-0 leading-tight">Our Accreditations<br className="hidden lg:block" />&amp; Licences</span>
                    <div className="flex-1 overflow-hidden relative">
                        <motion.div className="flex items-center gap-20 lg:gap-28 min-w-max" animate={{ x: [-1200, 0] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                            {[...accreditationLogos, ...accreditationLogos, ...accreditationLogos].map((logo, idx) => (
                                <div key={idx} className="shrink-0 flex items-center justify-center"><Image src={logo.src} alt={logo.alt} width={45} height={28} className="h-6 lg:h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" style={{ width: "auto", height: "auto" }} /></div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
