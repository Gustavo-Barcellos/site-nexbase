"use client";

import React from "react";
import { motion } from "motion/react";
import { MessageCircle, CalendarClock, Bell, SmilePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/animate-ui/components/radix/tooltip";

interface ClinicAutomationFlowProps {
  className?: string;
}

const steps = [
  {
    id: "paciente",
    label: "Paciente",
    sublabel: "WhatsApp / Site / Instagram",
    icon: MessageCircle,
    tooltip:
      "Paciente chama a clínica. Se ele responde, segue no fluxo; se não, a automação faz um lembrete de resgate.",
  },
  {
    id: "agendamento",
    label: "Agendamento",
    sublabel: "perguntas certas + horários",
    icon: CalendarClock,
    tooltip:
      "Fazemos as perguntas essenciais. Se ele escolhe um horário, confirmamos; se não, sugerimos novas opções.",
  },
  {
    id: "lembretes",
    label: "Lembretes",
    sublabel: "confirmação + menos no-show",
    icon: Bell,
    tooltip:
      "Consulta marcada. Se ele confirma, mantemos; se pede mudança, abrimos o fluxo de reagendamento.",
  },
  {
    id: "pos",
    label: "Pós",
    sublabel: "NPS + reativação",
    icon: SmilePlus,
    tooltip:
      "Depois da consulta, enviamos pesquisa rápida. Se a nota é alta, incentivamos retorno; se é baixa, sinalizamos a equipe.",
  },
];

const ClinicAutomationFlow = ({ className }: ClinicAutomationFlowProps) => {
  // estado só para o "popup" no mobile
  const [openMobileId, setOpenMobileId] = React.useState<string | null>(null);

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[900px] flex-col items-center",
        className,
      )}
    >
      {/* Bloco que contém fluxo + círculo */}
      <div className="relative w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 pt-8 pb-16 shadow-[0_0_40px_rgba(0,0,0,0.6)] md:px-10 md:pt-12 md:pb-16">
        <div className="relative w-full">
          {/* Linha horizontal pontilhada (apenas desktop) */}
          <div className="pointer-events-none absolute inset-x-10 top-1/2 -translate-y-1/2 z-0 hidden md:block">
            <svg
              className="h-3 w-full"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <line
                x1="8"
                y1="5"
                x2="92"
                y2="5"
                className="flow-line"
                stroke="currentColor"
                strokeWidth={0.9}
              />
            </svg>
          </div>

          {/* Linha vertical pontilhada (apenas mobile, centralizada) */}
          <div className="pointer-events-none absolute left-1/2 top-3 bottom-3 z-0 -translate-x-1/2 md:hidden">
            <svg
              className="h-full w-3"
              viewBox="0 0 10 100"
              preserveAspectRatio="none"
            >
              <line
                x1="5"
                y1="8"
                x2="5"
                y2="92"
                className="flow-line"
                stroke="currentColor"
                strokeWidth={0.9}
              />
            </svg>
          </div>

          {/* CONTEÚDO: mobile e desktop separados pra não brigar comportamento */}

          <div className="relative z-10 flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-center md:gap-3">
            {/* MOBILE: blocos empilhados + popup por clique */}
            <div className="flex w-full flex-col gap-3 md:hidden">
              {steps.map((step) => (
                <div key={step.id} className="relative w-full">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileId((prev) =>
                        prev === step.id ? null : step.id,
                      )
                    }
                    className="relative flex w-full flex-col items-center gap-1 rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-center transition-colors hover:border-nex-lime/80"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <step.icon className="h-5 w-5 text-nex-lime" />
                      <span className="text-sm font-semibold text-neutral-50">
                        {step.label}
                      </span>
                    </div>
                    <span className="text-[11px] leading-snug text-neutral-300">
                      {step.sublabel}
                    </span>
                  </button>

                  {openMobileId === step.id && (
                    <div className="mt-2 mx-auto max-w-[260px] rounded-lg border border-white/15 bg-neutral-900 px-3 py-2 text-[11px] leading-relaxed text-neutral-100 shadow-lg">
                      {step.tooltip}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* DESKTOP: mesma UI original com Tooltip por hover */}
            <div className="hidden w-full items-center justify-center gap-3 md:flex">
              {steps.map((step) => (
                <Tooltip key={step.id}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="relative flex flex-none w-[190px] flex-col items-start gap-1 rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-left transition-colors hover:border-nex-lime/80"
                    >
                      <div className="flex items-center gap-2">
                        <step.icon className="h-5 w-5 text-nex-lime" />
                        <span className="text-sm font-semibold text-neutral-50">
                          {step.label}
                        </span>
                      </div>
                      <span className="text-[11px] leading-snug text-neutral-300">
                        {step.sublabel}
                      </span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" sideOffset={10} align="center">
                    <p className="max-w-[240px] text-xs text-neutral-100">
                      {step.tooltip}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        {/* Círculo "Secretária virtual" */}
        <motion.div
          className="pointer-events-none absolute left-1/2 bottom-0 z-20 -translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <a
            href="#lead-form"
            className="pointer-events-auto grid h-[70px] w-[70px] place-items-center rounded-full border border-nex-lime/60 bg-nex-lime text-center text-[11px] font-semibold leading-tight text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:brightness-105 hover:shadow-[0_12px_34px_rgba(0,0,0,0.75)] transition"
          >
            Secretária
            <br />
            virtual
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ClinicAutomationFlow;
