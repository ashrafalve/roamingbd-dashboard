"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ChevronDown, Mail, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginTab, setLoginTab] = useState<"email" | "otp">("email");
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };

  const airlineLogos = [
    { src: "/icons/emirates.png", alt: "Emirates", width: 90 },
    { src: "/icons/qtar.png", alt: "Qatar", width: 100 },
    { src: "/icons/usbangla.png", alt: "US-Bangla", width: 110 },
    { src: "/icons/gulfair.png", alt: "Gulf Air", width: 85 },
    { src: "/icons/turkish.png", alt: "Turkish", width: 100 },
    { src: "/icons/bimanbangladesh.png", alt: "Biman", width: 100 },
  ];

  const accreditationLogos = [
    { src: "/icons/iata.png", alt: "IATA", width: 54 },
    { src: "/icons/pata.png", alt: "PATA", width: 62 },
    { src: "/icons/atab.png", alt: "ATAB", width: 54 },
    { src: "/icons/RJSC-2018-04-26-10-26-29.png", alt: "RJSC", width: 38 },
    { src: "/icons/DSCC_logo.png", alt: "DSCC", width: 38 },
    { src: "/icons/বাংলাদেশ_বেসামরিক_বিমান_চলাচল_কর্তৃপক্ষের_লোগো.svg.png", alt: "Civil Aviation", width: 38 },
  ];

  return (
    <div className="min-h-screen w-full bg-[#eef0f8] font-archivo flex items-center justify-center overflow-y-auto p-0 lg:p-4">

      <AnimatePresence>
        {!isExiting && (
          <motion.div
            key="login-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="w-full lg:max-w-[1480px] h-auto lg:h-[98vh] lg:min-h-[650px] bg-white lg:rounded-[2rem] lg:shadow-2xl flex flex-col relative z-20"
          >
            <div className="flex-1 flex flex-col lg:flex-row min-h-0 lg:overflow-hidden">

              {/* ── Left Hero Panel ── */}
              <div className="relative w-full lg:w-[57%] h-auto min-h-[380px] lg:h-auto shrink-0 overflow-hidden lg:rounded-l-[2rem] bg-[#04055e] flex flex-col">
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
                    <Image src="/icons/roaminglogo.png" alt="Roaming Bangladesh" width={140} height={40} className="object-contain brightness-125 mb-1.5" style={{ height: "auto" }} />
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

              {/* ── Right Login Panel ── */}
              <div className="flex-1 flex flex-col bg-white p-6 lg:p-0">
                <div className="hidden lg:flex justify-end p-5 shrink-0">
                  <button className="flex items-center gap-2 px-3 spy-1.5 border border-slate-200 rounded-lg text-[11px] font-bold text-[#3B2963] bg-white shadow-sm transition-colors hover:bg-slate-50">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-blue-400/40 flex items-center justify-center"><div className="w-1 h-1 bg-blue-600 rounded-full" /></div>
                    English <ChevronDown className="w-2.5 h-2.5 text-slate-300" />
                  </button>
                </div>

                <div className="flex-1 flex flex-col justify-center lg:px-10 xl:px-14">
                  <div className="w-full max-w-[400px] mx-auto py-8">
                    <div className="mb-8 text-center lg:text-left">
                      <h2 className="text-[2.2rem] lg:text-[2.4rem] font-black text-[#3B2963] tracking-tighter leading-tight mb-2">Welcome Back!</h2>
                      <p className="text-[#3B2963]/60 text-[13px] font-bold">Sign in to your Roaming Bangladesh B2B account</p>
                    </div>

                    <div className="flex border-b border-slate-100 mb-8 relative">
                      {[
                        { id: "email", label: "Email Login", icon: "/icons/otp.svg" },
                        { id: "otp", label: "OTP Login", icon: "/icons/email.svg" },
                      ].map(({ id, label, icon }) => (
                        <button
                          key={id}
                          onClick={() => setLoginTab(id as "email" | "otp")}
                          className={cn(
                            "flex-1 pb-4 text-[13px] font-black flex items-center justify-center gap-2.5 transition-all relative",
                            loginTab === id ? "text-[#3B2963]" : "text-slate-300 hover:text-slate-400"
                          )}
                        >
                          <img src={icon} alt={label} className={cn("w-4 h-4", loginTab === id ? "opacity-100" : "opacity-30")} />
                          {label}
                          {loginTab === id && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3B2963]"
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#3B2963]/50 uppercase tracking-[0.15em] block">Email Address</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#3B2963] transition-colors" />
                          <input type="email" placeholder="agent@company.com" className="w-full py-3.5 lg:py-4 pl-12 pr-4 border border-slate-200 rounded-xl text-[14px] font-bold text-[#3B2963] focus:outline-none focus:border-[#3B2963] focus:ring-4 focus:ring-[#3B2963]/5 bg-slate-50/30 transition-all" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#3B2963]/50 uppercase tracking-[0.15em] block">Password</label>
                        <div className="relative group">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#3B2963] transition-colors" />
                          <input type={showPassword ? "text" : "password"} placeholder="••••••••••" className="w-full py-3.5 lg:py-4 pl-12 pr-12 border border-slate-200 rounded-xl text-[14px] font-bold text-[#3B2963] focus:outline-none focus:border-[#3B2963] focus:ring-4 focus:ring-[#3B2963]/5 bg-slate-50/30 transition-all" required />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#3B2963] transition-colors">
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <label className="flex items-center gap-2.5 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                          />
                          <div className={cn(
                            "w-[18px] h-[18px] rounded-md flex items-center justify-center shrink-0 transition-all border-2",
                            rememberMe ? "bg-[#3B2963] border-[#3B2963]" : "bg-white border-slate-200 group-hover:border-slate-300"
                          )}>
                            <svg className={cn("w-2.5 h-2.5 text-white transition-opacity", rememberMe ? "opacity-100" : "opacity-0")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={5}>
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[12px] font-bold text-[#3B2963]/70">Remember me</span>
                        </label>
                        <a href="#" className="text-[12px] font-black text-[#3B2963] hover:underline decoration-2 underline-offset-4">Forgot password?</a>
                      </div>

                      <button type="submit" className="w-full py-4 bg-[#0E0B64] text-white rounded-xl font-black text-[15px] hover:shadow-xl hover:shadow-[#0E0B64]/20 active:scale-[0.98] transition-all mt-4 leading-none">Sign In</button>
                    </form>

                    <div className="relative my-7">
                      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
                      <div className="relative flex justify-center"><span className="bg-white px-4 text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">Or continue with</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => handleSignIn()}
                        className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl font-black text-[13px] text-[#3B2963] hover:bg-slate-50 transition-all active:scale-[0.97]"
                      >
                        <Image src="/icons/google.png" alt="Google" width={18} height={18} style={{ width: "auto", height: "auto" }} /> Google
                      </button>
                      <button
                        onClick={() => handleSignIn()}
                        className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl font-black text-[13px] text-[#3B2963] hover:bg-slate-50 transition-all active:scale-[0.97]"
                      >
                        <Image src="/icons/micro.png" alt="Microsoft" width={18} height={18} style={{ width: "auto", height: "auto" }} /> Microsoft
                      </button>
                    </div>

                    <p className="text-center text-[13px] font-bold text-slate-400 pt-8">
                      Don't have an account?{" "}
                      <a href="#" className="text-[#3B2963] font-black hover:underline decoration-2 underline-offset-4">Register Now</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Footer ── */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
