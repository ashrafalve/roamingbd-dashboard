"use client";

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
    <div className="min-h-screen w-full bg-[#eef0f8] font-archivo flex items-center justify-center overflow-y-auto p-0 lg:p-4">
      <AnimatePresence mode="wait">
        {!isExiting ? (
          <motion.div
            key="login-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="w-full lg:max-w-[1480px] h-auto lg:h-[98vh] lg:min-h-[650px] bg-white lg:rounded-[2rem] lg:shadow-2xl flex flex-col relative z-20"
          >
            <div className="flex-1 flex flex-col lg:flex-row min-h-0 lg:overflow-hidden">
              <HeroPanel />
              <LoginForm onSignIn={handleSignIn} />
            </div>
            <PartnerScrolls />
          </motion.div>
        ) : (
          <LoadingScreen />
        )}
      </AnimatePresence>
    </div>
  );
}
