"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedBgProps = {
  className?: string;
};

export function AnimatedBg({ className }: AnimatedBgProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: 0.9, scale: 1.1 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute -inset-[20%] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.28),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)] blur-3xl"
      />
    </div>
  );
}