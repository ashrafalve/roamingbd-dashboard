"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff, ChevronDown, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LoginForm({ onSignIn }: { onSignIn: (e?: React.FormEvent) => void }) {
    const [showPassword, setShowPassword] = useState(false);
    const [loginTab, setLoginTab] = useState<"email" | "otp">("email");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="flex-1 flex flex-col bg-white p-6 lg:p-0">
            <div className="hidden lg:flex justify-end p-5 shrink-0">
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-sm text-[11px] font-bold text-[#3B2963] bg-white shadow-sm transition-colors hover:bg-slate-50">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-blue-400/40 flex items-center justify-center"><div className="w-1 h-1 bg-blue-600 rounded-full" /></div>
                    English <ChevronDown className="w-2.5 h-2.5 text-slate-300" />
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-center lg:px-10 xl:px-14">
                <div className="w-full max-w-[400px] mx-auto py-8">
                    <div className="mb-8 text-center lg:text-left">
                        <h2 className="text-[1.8rem] lg:text-[2rem] font-black text-[#3B2963] tracking-tighter leading-tight mb-2">Welcome Back!</h2>
                        <p className="text-[#3B2963]/60 text-[11px] font-bold">Sign in to your Roaming Bangladesh B2B account</p>
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
                                    "flex-1 pb-4 text-[11px] font-black flex items-center justify-center gap-2.5 transition-all relative",
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

                    <form onSubmit={onSignIn} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-[#3B2963]/50 uppercase tracking-[0.15em] block">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#3B2963] transition-colors" />
                                <input type="email" placeholder="agent@company.com" className="w-full py-3.5 lg:py-4 pl-12 pr-4 border border-slate-200 rounded-sm text-[13px] font-bold text-[#3B2963] focus:outline-none focus:border-[#3B2963] focus:ring-4 focus:ring-[#3B2963]/5 bg-slate-50/30 transition-all" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-[#3B2963]/50 uppercase tracking-[0.15em] block">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#3B2963] transition-colors" />
                                <input type={showPassword ? "text" : "password"} placeholder="••••••••••" className="w-full py-3.5 lg:py-4 pl-12 pr-12 border border-slate-200 rounded-sm text-[13px] font-bold text-[#3B2963] focus:outline-none focus:border-[#3B2963] focus:ring-4 focus:ring-[#3B2963]/5 bg-slate-50/30 transition-all" required />
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
                                <span className="text-[11px] font-bold text-[#3B2963]/70">Remember me</span>
                            </label>
                            <a href="#" className="text-[11px] font-black text-[#3B2963] hover:underline decoration-2 underline-offset-4">Forgot password?</a>
                        </div>

                        <button type="submit" className="w-full py-4 bg-[#0E0B64] text-white rounded-sm font-black text-[14px] hover:shadow-xl hover:shadow-[#0E0B64]/20 active:scale-[0.98] transition-all mt-4 leading-none">Sign In</button>
                    </form>

                    <div className="relative my-7">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
                        <div className="relative flex justify-center"><span className="bg-white px-4 text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Or continue with</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => onSignIn()}
                            className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-sm font-black text-[12px] text-[#3B2963] hover:bg-slate-50 transition-all active:scale-[0.97]"
                        >
                            <Image src="/icons/google.png" alt="Google" width={18} height={18} style={{ width: "auto", height: "auto" }} /> Google
                        </button>
                        <button
                            onClick={() => onSignIn()}
                            className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-sm font-black text-[12px] text-[#3B2963] hover:bg-slate-50 transition-all active:scale-[0.97]"
                        >
                            <Image src="/icons/micro.png" alt="Microsoft" width={18} height={18} style={{ width: "auto", height: "auto" }} /> Microsoft
                        </button>
                    </div>

                    <p className="text-center text-[11px] font-bold text-slate-400 pt-8">
                        Don&apos;t have an account?{" "}
                        <a href="#" className="text-[#3B2963] font-black hover:underline decoration-2 underline-offset-4">Register Now</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
