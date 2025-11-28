"use client";

import React from "react";
import { motion } from "motion/react";
import {
  MessageCircle,
  CalendarClock,
  Bell,
  SmilePlus,
} from "lucide-react";
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
  return (
    <div
      className={cn(
        "relative flex w-full max-w-[940px] flex-col items-center",
        className
      )}
    >
      {/* Bloco que contém fluxo + círculo */}
      <div className="relative w-full rounded-2xl border border-white/10 bg-neutral-950 px-10 pt-12 pb-16 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <div className="relative w-full">
          {/* Linha única pontilhada animada, atrás dos blocos */}
          <div className="pointer-events-none absolute inset-x-10 top-1/2 -translate-y-1/2 z-0">
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

          {/* Linha de blocos com tooltips (fica por cima da linha) */}
          <div className="relative z-10 flex w-full items-center justify-center gap-7">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <Tooltip>
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
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Círculo "Secretária virtual" – ligeiramente fora, clicável, sem scroll local */}
        <motion.div
          className="pointer-events-none absolute left-1/2 bottom-0 z-20 -translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          {/* wrapper clicável, mas sem quebrar animação */}
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
