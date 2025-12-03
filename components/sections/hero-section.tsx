"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroRobot from "@/components/hero-robot";

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-white/10 bg-nex-bg">
      <div className="relative mx-auto w-full max-w-5xl px-4 pt-10 pb-16 md:px-6 md:pt-14 md:pb-20">
        {/* NAV / LOGO + LINKS SUPERIORES */}
        <header className="relative z-20 mb-10 flex items-center justify-between">
          {/* Logo à esquerda */}
          <div className="flex items-center gap-2">
            <Image
              src="/nexbase-logo-large.png"
              alt="Nexbase"
              width={140}
              height={140}
              priority
              className="h-12 w-auto"
            />
            <span className="text-lg font-semibold text-neutral-200">
              Nexbase
            </span>
          </div>

          {/* Links à direita */}
          <nav className="flex items-center gap-4 text-xs md:text-sm">
            <a
              href="#sobre"
              className="text-neutral-300 transition-colors hover:text-white"
            >
              Sobre
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-full
                        border border-nex-lime/60 bg-nex-lime/10
                        px-3.5 py-1.5 font-semibold text-nex-lime
                        shadow-[0_0_18px_rgba(95,243,140,0.35)]
                        transition-all duration-200
                        hover:scale-[1.03] hover:bg-nex-lime hover:text-nex-bg
                        hover:shadow-[0_0_26px_rgba(95,243,140,0.55)]"
            >
              Agendar análise
            </a>
          </nav>
        </header>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* ESQUERDA */}
          <div className="relative z-10 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <motion.span
              whileHover={{ scale: 1.04, rotate: -0.5, y: -1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 0.4,
              }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-nex-lime/40 bg-nex-lime/10 px-3 py-1 text-xs font-medium text-nex-lime"
            >
              Menos tarefas, mais crescimento
            </motion.span>

            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Sua clínica perde dinheiro todo dia por causa de{" "}
              <span className="text-nex-lime">
                atendimento lento e sem processo.
              </span>
            </h1>

            <p className="max-w-2xl text-sm text-neutral-300 md:text-base">
              Todo minuto que sua equipe demora para responder um paciente é um
              procedimento a menos fechado - e um concorrente ganhando no seu
              lugar.
            </p>
          </div>

          {/* DIREITA */}
          <HeroRobot />
        </div>
      </div>
    </section>
  );
}
