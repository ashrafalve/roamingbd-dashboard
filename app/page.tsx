"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HeroPanel } from "@/components/login/hero-panel";
import { LoginForm } from "@/components/login/login-form";
import { PartnerScrolls } from "@/components/login/partner-scrolls";
import { LoadingScreen } from "@/components/login/loading-screen";

export default function LoginPage() {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 3800);
  };

  return (
    <div className="min-h-screen w-full relative lg:bg-[#eef0f8] font-archivo flex items-start justify-center overflow-y-auto py-4 px-4 lg:py-6">
      {/* Background Image purely for Mobile */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image src="/images/loginpageimage.png" alt="Bg" fill className="object-cover brightness-[0.3]" priority />
      </div>

      <AnimatePresence mode="wait">
        {!isExiting ? (
          <motion.div
            key="login-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="w-full max-w-[450px] lg:max-w-[1480px] h-auto lg:min-h-[650px] bg-white rounded-2xl lg:rounded-[2rem] shadow-2xl flex flex-col relative z-20"
          >
            <div className="flex-1 flex flex-col lg:flex-row min-h-0 lg:overflow-y-auto">
              <div className="hidden lg:contents">
                <HeroPanel />
              </div>
              <LoginForm onSignIn={handleSignIn} />
            </div>
            <div className="hidden lg:block">
              <PartnerScrolls />
            </div>
          </motion.div>
        ) : (
          <LoadingScreen />
        )}
      </AnimatePresence>
    </div>
  );
}
