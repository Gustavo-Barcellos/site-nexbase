"use client";

import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";
import { AnimatedBg } from "@/components/animated-bg";
import { PrimaryButton } from "@/components/primary-button";
import { SplineScene } from "@/components/ui/splite";
import { BorderTrail } from "@/components/ui/border-trail";
import { Tilt } from "@/components/ui/tilt";
import { motion } from "framer-motion";

const problems = [
  {
    title: "Demora para responder no WhatsApp",
    description: "Pacientes esperam horas (ou dias) por uma resposta.",
  },
  {
    title: "Paciente agenda e some",
    description: "Faltas e remarcações viram rotina e desorganizam a agenda.",
  },
  {
    title: "Atendimento sem padrão",
    description: "Cada recepcionista responde de um jeito, sem processo.",
  },
  {
    title: "Ninguém confirma as consultas",
    description: "Consultas marcadas sem lembretes = agenda furada.",
  },
  {
    title: "Zero follow-up",
    description: "Ninguém acompanha orçamentos e oportunidades são perdidas.",
  },
  {
    title: "Pós-consulta inexistente",
    description: "Você não mede satisfação nem fortalece vínculo com o paciente.",
  },
];

const solutions = [
  {
    title: "Resposta em segundos, 24/7",
    description:
      "Seu Agente de Atendimento atende automaticamente WhatsApp, site e redes.",
  },
  {
    title: "Fluxos anti no-show",
    description: "Lembretes inteligentes reduzem faltas em até 80%.",
  },
  {
    title: "Atendimento padronizado",
    description: "Mensagens claras, profissionais e alinhadas à sua marca.",
  },
  {
    title: "Confirmação automática",
    description: "Seu agente confirma consultas e preenche os horários vazios.",
  },
  {
    title: "Follow-up estruturado",
    description:
      "Orçamentos e oportunidades são acompanhados até a decisão.",
  },
  {
    title: "Pós-consulta com NPS",
    description: "Coleta feedback real dos pacientes e fortalece recorrência.",
  },
];

const steps = [
  {
    title: "1. Paciente chama sua clínica",
    description:
      "WhatsApp, site ou Instagram: seu Agente responde na hora, sem fila e sem espera.",
  },
  {
    title: "2. Agendamento guiado",
    description:
      "O Agente faz as perguntas certas, oferece horários e registra tudo no fluxo da clínica.",
  },
  {
    title: "3. Confirmação + lembretes",
    description:
      "Antes da consulta, o paciente recebe sequência de lembretes otimizados para reduzir faltas.",
  },
  {
    title: "4. Pós-consulta & NPS",
    description:
      "Depois do atendimento, o paciente recebe pesquisa simples para medir satisfação e abrir novas oportunidades.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-nex-bg text-neutral-50">
      {/* HERO */}
      <section className="relative w-full border-b border-white/10 bg-nex-bg">
        <AnimatedBg />
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
            {/* ESQUERDA – badge, headline, subheadline, chips */}
            <div className="relative z-10 flex flex-col gap-6">
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
                A gente instala um{" "}
                <strong className="font-semibold">
                  Agente de Atendimento com IA
                </strong>{" "}
                que responde seus pacientes em segundos, reduz faltas e enche
                sua agenda — sem você contratar mais ninguém.
              </p>

              <div className="mt-2 flex flex-wrap gap-3 text-xs text-neutral-300">
                <motion.span
                  whileHover={{ scale: 1.04, rotate: -0.5, y: -1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 0.4,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  <span className="h-2 w-2 rounded-full bg-nex-lime" />
                  Atendimento 24/7
                </motion.span>

                <motion.span
                  whileHover={{ scale: 1.04, rotate: -0.5, y: -1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 0.4,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  Redução real de no-show
                </motion.span>

                <motion.span
                  whileHover={{ scale: 1.04, rotate: -0.5, y: -1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 0.4,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  Sem trocar de software
                </motion.span>
              </div>
            </div>

            {/* DIREITA – robô 3D */}
            <div className="relative flex h-[380px] w-full items-center justify-center md:h-[480px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full scale-110 md:scale-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS X SOLUÇÕES */}
      <section className="w-full border-b border-white/10 bg-nex-bg">
        <div id="sobre" className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16 md:px-6 md:py-20">
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Problemas que você vive hoje vs. solução que você deveria ter
              ontem.
            </h2>
            <p className="max-w-2xl text-sm text-neutral-300 md:text-base">
              Se você se enxerga nessas situações, sua clínica não tem problema
              de “marketing”, tem problema de{" "}
              <span className="font-semibold">processo de atendimento.</span>
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Problemas */}
            <div className="space-y-4 rounded-2xl border border-red-500/25 bg-red-500/5 p-5 transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-red-500/10 hover:border-red-500/40">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-300">
                <XCircle className="h-4 w-4" />
                Problemas que drenam dinheiro da sua clínica
              </div>
              <ul className="space-y-3 text-sm text-neutral-200">
                {problems.map((item) => (
                  <li key={item.title} className="space-y-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluções */}
            <div className="relative rounded-2xl border border-nex-teal/60 bg-nex-teal/5 transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-nex-teal/10 hover:border-nex-teal/80">
              <BorderTrail
                className="bg-nex-lime/80"
                size={80}
                style={{
                  boxShadow:
                    "0 0 40px 12px rgba(95,243,140,0.7), 0 0 80px 24px rgba(95,243,140,0.35)",
                }}
              />

              <div className="space-y-4 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-nex-teal">
                  <CheckCircle2 className="h-4 w-4" />
                  O que o Agente de Atendimento passa a fazer por você
                </div>

                <ul className="space-y-3 text-sm text-neutral-200">
                  {solutions.map((item) => (
                    <li key={item.title} className="space-y-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-neutral-400 md:text-sm">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA centralizado abaixo dos cards */}
          <div className="mt-8 flex justify-center">
            <a
              href="#lead-form"
              className="
                inline-flex items-center justify-center
                rounded-full bg-nex-lime px-7 py-3.5
                text-sm font-semibold text-nex-bg
                shadow-[0_0_40px_rgba(95,243,140,0.35)]
                transition-all duration-200 ease-out
                hover:scale-[1.04] hover:bg-nex-lime/90
              "
            >
              Quero destravar o atendimento da minha clínica
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA / FLUXO VISUAL SIMPLIFICADO */}
      <section className="w-full border-b border-white/10 bg-nex-bg">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16 md:px-6 md:py-20">
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Como funciona na prática dentro da sua clínica.
            </h2>
            <p className="max-w-2x1 text-sm text-neutral-300 md:text-base">
              Nada de “robô genérico”. É um fluxo de atendimento desenhado para
              a rotina de clínicas de saúde — do primeiro contato ao
              pós-consulta.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <Tilt
                key={step.title}
                rotationFactor={5}
                className="will-change-transform"
                springOptions={{
                  stiffness: 40,
                  damping: 8,
                  mass: 0.4,
                }}
              >
                <div className="relative flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-neutral-900/60 px-4 py-4">
                  <div className="absolute left-4 top-3 h-1 w-8 rounded-full bg-nex-lime/80" />
                  <h3 className="pt-4 text-sm font-semibold text-neutral-50">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-300">
                    {step.description}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORMULÁRIO */}
      <section id="lead-form" className="w-full bg-nex-bg">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr,minmax(0,1fr)] md:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Vamos transformar o atendimento da sua clínica em uma máquina
                previsível de agendamentos?
              </h2>
              <p className="text-sm text-neutral-300 md:text-base">
                Há mais de 8 anos atuando com automações e negócios digitais.
                Agora, colocamos essa inteligência a serviço de clínicas que
                querem crescer com processo, não com sorte.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Processos validados em operações reais.</li>
                <li>
                  • Redução real de no-show e aumento de aproveitamento da
                  agenda.
                </li>
                <li>
                  • Atendimento mais rápido do que qualquer equipe humana
                  conseguiria manter sozinha.
                </li>
              </ul>
              <p className="text-xs text-neutral-400 md:text-sm">
                Sem compromisso, sem empurroterapia. A gente analisa seu cenário
                e só avança se fizer sentido para o seu momento.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-6 shadow-xl shadow-nex-lime/20">
              <h3 className="text-lg font-semibold tracking-tight">
                Preencha para receber uma análise do atendimento da sua clínica
              </h3>
              <p className="mt-1 text-xs text-neutral-400">
                Leva menos de 1 minuto. Usamos essas informações apenas para
                preparar a conversa.
              </p>

              <form className="mt-6 space-y-4">
                <div className="space-y-1 text-sm">
                  <label className="block text-neutral-200" htmlFor="name">
                    Seu nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 focus:border-nex-lime"
                    placeholder="Ex: Gustavo, Ana..."
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-neutral-200" htmlFor="clinic">
                    Nome da clínica
                  </label>
                  <input
                    id="clinic"
                    type="text"
                    className="w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-nex-lime"
                    placeholder="Ex: Clínica Sorriso Premium"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-neutral-200" htmlFor="whatsapp">
                    WhatsApp para contato
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    className="w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-nex-lime"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <span className="block text-neutral-200">
                    Faturamento mensal atual da clínica
                  </span>
                  <select
                    className="mt-1 w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-nex-lime"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione uma faixa
                    </option>
                    <option>Até R$ 50 mil/mês</option>
                    <option>R$ 50 mil a R$ 100 mil/mês</option>
                    <option>R$ 100 mil a R$ 300 mil/mês</option>
                    <option>Acima de R$ 300 mil/mês</option>
                  </select>
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-neutral-200" htmlFor="pain">
                    Principal problema hoje no atendimento
                  </label>
                  <textarea
                    id="pain"
                    className="min-h-[80px] w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-nex-lime"
                    placeholder="Conte em poucas linhas o que mais te incomoda hoje."
                  />
                </div>

                <PrimaryButton label="Quero analisar o atendimento da minha clínica" />

                <p className="text-[11px] text-neutral-500">
                  Ao enviar, alguém da nossa equipe entra em contato para
                  entender seu cenário e mostrar como o Agente pode funcionar na
                  sua clínica.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
