"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type PrimaryButtonProps = {
  label: string;
  className?: string;
};

export function PrimaryButton({ label, className }: PrimaryButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/30 transition focus:outline-none",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <ArrowRight className="h-4 w-4" />
      </span>
      <motion.span
        initial={{ x: "-120%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-emerald-400/0 via-emerald-200/40 to-emerald-400/0"
      />
    </motion.button>
  );
}
