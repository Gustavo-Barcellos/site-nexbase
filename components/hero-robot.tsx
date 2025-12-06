"use client";

import dynamic from "next/dynamic";

const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((mod) => mod.SplineScene),
  {
    ssr: false,
    loading: () => (
      <div className="relative flex h-[380px] w-full items-center justify-center overflow-hidden md:h-[480px]">
        {/* fallback leve enquanto o Spline carrega */}
        <img
          src="/robot-poster.webp"
          alt="Agente virtual Nexbase"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    ),
  },
);

export default function HeroRobot() {
  return (
    <div className="relative flex h-[380px] w-full items-center justify-center overflow-hidden md:h-[480px]">
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="h-full w-full scale-[1.05] md:scale-125 object-cover"
      />
    </div>
  );
}
