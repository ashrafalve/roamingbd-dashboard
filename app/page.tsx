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
    <div className="h-screen w-screen bg-[#eef0f8] font-archivo flex items-center justify-center overflow-hidden">

      <AnimatePresence>
        {!isExiting && (
          <motion.div
            key="login-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="w-full max-w-[1480px] h-[98vh] min-h-[580px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative z-20"
          >
            <div className="flex-1 flex min-h-0">

              {/* ── Left Hero Panel ── */}
              <div className="relative w-[57%] shrink-0 overflow-hidden rounded-l-[2rem] bg-[#04055e]">
                <Image
                  src="/images/loginpageimage.png"
                  alt="City Skyline"
                  fill
                  sizes="57vw"
                  className="object-contain object-right"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030637]/85 via-[#030637]/30 to-transparent" />

                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                  exit={{ x: -300, opacity: 0, transition: { duration: 0.6 } }}
                  className="relative z-10 flex flex-col h-full p-10 xl:px-16 xl:py-12 gap-8"
                >
                  <div>
                    <Image src="/icons/roaminglogo.png" alt="Roaming Bangladesh" width={140} height={40} className="object-contain brightness-125 mb-1.5" />
                    <p className="text-[8px] font-black tracking-[0.42em] text-white/55 uppercase">B2B Travel Marketplace</p>
                  </div>

                  <div>
                    <h1 className="text-[2rem] xl:text-[2.4rem] font-bold leading-[1.1] tracking-tight text-white mb-3">
                      Your Trusted Travel<br />Business Partner
                    </h1>
                    <p className="text-white/70 text-[12px] font-medium leading-relaxed max-w-[260px]">
                      One platform, endless possiblities,<br />
                      Flights, Hotels, Visa, Tours &amp; Umrah -<br />
                      all in one place.
                    </p>
                  </div>

                  <div className="space-y-4 mt-1">
                    {[
                      { icon: "/icons/flightbooking.png", title: "500+ Airlines", desc: "Global inventory with best negotiated fares" },
                      { icon: "/icons/hotelbooking.png", title: "1M+ Hotels", desc: "Worldwide hotels with exclusive rates" },
                      { icon: "/icons/visaservice.png", title: "Visa Solutions", desc: "Fast & reliable visa processing" },
                      { icon: "/icons/supportcentre.png", title: "24/7 Support", desc: "Our team is always here to help you" },
                    ].map((item, i) => (
                      <motion.div key={item.title} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }} className="flex items-center gap-3.5">
                        <div className="w-[42px] h-[42px] bg-[#371A9A] rounded-[12px] flex items-center justify-center shrink-0 shadow-lg border border-white/10">
                          <Image src={item.icon} alt={item.title} width={20} height={20} className="brightness-200" />
                        </div>
                        <div>
                          <p className="text-[1.1rem] font-bold text-white leading-none mb-0.5">{item.title}</p>
                          <p className="text-[11px] text-white/50 font-semibold leading-tight">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── Right Login Panel ── */}
              <div className="flex-1 flex flex-col bg-white overflow-hidden">
                <div className="flex justify-end p-4 shrink-0">
                  <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-[11px] font-bold text-[#3B2963] bg-white shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-blue-400/40 flex items-center justify-center"><div className="w-1 h-1 bg-blue-600 rounded-full" /></div>
                    English <ChevronDown className="w-2.5 h-2.5 text-slate-300" />
                  </button>
                </div>

                <div className="flex-1 flex items-center justify-center px-10 xl:px-14 overflow-y-auto custom-scrollbar">
                  <div className="w-full max-w-[380px] py-6">
                    <div className="mb-6 text-center lg:text-left">
                      <h2 className="text-[2.2rem] font-bold text-[#3B2963] tracking-tighter leading-tight mb-1.5">Welcome Back!</h2>
                      <p className="text-[#3B2963]/60 text-[12px] font-semibold">Sign in to your Roaming Bangladesh B2B account</p>
                    </div>

                    <div className="flex border-b border-gray-100 mb-6 relative">
                      {[
                        { id: "email", label: "Email Login", icon: "/icons/otp.svg" },
                        { id: "otp", label: "OTP Login", icon: "/icons/email.svg" },
                      ].map(({ id, label, icon }) => (
                        <button
                          key={id}
                          onClick={() => setLoginTab(id as "email" | "otp")}
                          className={cn(
                            "flex-1 pb-3 text-[13px] font-bold flex items-center justify-center gap-2 transition-colors relative",
                            loginTab === id ? "text-[#3B2963]" : "text-slate-300"
                          )}
                        >
                          <img src={icon} alt={label} className={cn("w-3.5 h-3.5", loginTab === id ? "opacity-100" : "opacity-40")} />
                          {label}
                          {loginTab === id && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#3B2963]"
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleSignIn} className="space-y-3.5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-[#3B2963]/70 uppercase tracking-widest block">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-slate-300" />
                          <input type="email" placeholder="agent@company.com" className="w-full py-3 pl-11 pr-4 border border-gray-200 rounded-xl text-[13px] font-medium text-[#3B2963] focus:outline-none focus:border-[#3B2963] bg-white" required />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-[#3B2963]/70 uppercase tracking-widest block">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-slate-300" />
                          <input type={showPassword ? "text" : "password"} placeholder="••••••••••" className="w-full py-3 pl-11 pr-11 border border-gray-200 rounded-xl text-[13px] font-medium text-[#3B2963] focus:outline-none focus:border-[#3B2963] bg-white" required />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                            {showPassword ? <EyeOff className="w-[16px] h-[16px]" /> : <Eye className="w-[16px] h-[16px]" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-0.5">
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                          />
                          <div className={cn(
                            "w-[16px] h-[16px] rounded flex items-center justify-center shrink-0 transition-all border-2",
                            rememberMe ? "bg-[#3B2963] border-[#3B2963]" : "bg-white border-slate-200"
                          )}>
                            <svg className={cn("w-2 h-2 text-white transition-opacity", rememberMe ? "opacity-100" : "opacity-0")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={5}>
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[11px] font-semibold text-[#3B2963]/80">Remember me</span>
                        </label>
                        <a href="#" className="text-[11px] font-bold text-[#3B2963] hover:underline">Forgot password?</a>
                      </div>

                      <button type="submit" className="w-full py-3 bg-[#0E0B64] text-white rounded-xl font-bold text-[14px] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg mt-2">Sign In</button>
                    </form>

                    <div className="relative my-5">
                      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
                      <div className="relative flex justify-center"><span className="bg-white px-3 text-[9px] font-bold text-slate-300 uppercase tracking-widest">Or continue with</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleSignIn()}
                        className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl font-bold text-[12px] text-[#3B2963] hover:bg-slate-50 transition-all"
                      >
                        <Image src="/icons/google.png" alt="Google" width={16} height={16} /> Google
                      </button>
                      <button
                        onClick={() => handleSignIn()}
                        className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl font-bold text-[12px] text-[#3B2963] hover:bg-slate-50 transition-all"
                      >
                        <Image src="/icons/micro.png" alt="Microsoft" width={16} height={16} /> Microsoft
                      </button>
                    </div>

                    <p className="text-center text-[12px] font-semibold text-slate-400 pt-5">
                      Don't have an account?{" "}
                      <a href="#" className="text-[#3B2963] font-black hover:underline">Register Now</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Footer ── */}
            <div className="bg-white border-t border-gray-100 px-10 xl:px-14 py-6 shrink-0 overflow-hidden">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-10">
                  <span className="text-[9px] font-black text-[#3B2963] uppercase tracking-[0.2em] w-44 shrink-0 bg-white z-10 relative">Our Airline Partners</span>
                  <div className="flex-1 overflow-hidden relative">
                    <motion.div className="flex items-center gap-14 min-w-max" animate={{ x: [0, -1200] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                      {[...airlineLogos, ...airlineLogos, ...airlineLogos].map((logo, idx) => (
                        <div key={idx} className="shrink-0"><Image src={logo.src} alt={logo.alt} width={logo.width} height={28} className="h-7 w-auto object-contain" /></div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                <div className="flex items-center gap-10 border-t border-gray-50 pt-6">
                  <span className="text-[9px] font-black text-[#3B2963] uppercase tracking-[0.15em] w-44 shrink-0 leading-tight">Our Accreditations<br />&amp; Licences</span>
                  <div className="flex-1 overflow-hidden relative">
                    <motion.div className="flex items-center gap-24 min-w-max" animate={{ x: [-1200, 0] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                      {[...accreditationLogos, ...accreditationLogos, ...accreditationLogos].map((logo, idx) => (
                        <div key={idx} className="shrink-0 flex items-center justify-center"><Image src={logo.src} alt={logo.alt} width={logo.width} height={30} className="h-8 w-auto object-contain" /></div>
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
