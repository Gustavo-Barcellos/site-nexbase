"use client";

import { useState } from "react";
import Image from "next/image";
import HeroSection from "@/components/sections/hero-section";

const behaviorResults = [
  {
    behavior: "Demora para responder no WhatsApp",
    result:
      "Pacientes desistem, procuram outra clínica e você perde consultas todos os dias.",
  },
  {
    behavior: "Pacientes esperam horas (ou dias) por uma resposta",
    result:
      "A percepção de profissionalismo cai e o paciente já chega desconfiado — quando chega.",
  },
  {
    behavior: "Paciente agenda e some",
    result:
      "Você perde tempo guardando horário e fica com “buracos” na agenda sem faturar.",
  },
  {
    behavior: "Faltas e remarcações viram rotina e desorganizam a agenda",
    result:
      "Sua equipe vive apagando incêndio e ninguém consegue prever o faturamento da semana.",
  },
  {
    behavior: "Atendimento sem padrão",
    result:
      "Informações saem erradas, orçamento se perde e cada paciente recebe uma experiência diferente.",
  },
  {
    behavior: "Cada recepcionista responde de um jeito, sem processo",
    result:
      "Nada é escalável: a operação depende de pessoas, não de um sistema que funcione.",
  },
  {
    behavior: "Ninguém confirma as consultas",
    result:
      "A agenda fura, o profissional fica parado e o dinheiro daquele horário simplesmente some.",
  },
  {
    behavior: "Consultas marcadas sem lembretes = agenda furada",
    result:
      "A taxa de presença despenca e a clínica perde faturamento fácil de evitar.",
  },
  {
    behavior: "Zero follow-up",
    result:
      "Orçamentos esfriam, oportunidades morrem e a clínica deixa dinheiro na mesa diariamente.",
  },
  {
    behavior: "Ninguém acompanha orçamentos e oportunidades são perdidas",
    result:
      "Você investe em marketing para gerar leads… que não viram pacientes.",
  },
  {
    behavior: "Pós-consulta inexistente",
    result:
      "Você não fideliza o paciente e perde retorno, indicações e ticket recorrente.",
  },
  {
    behavior: "Você não mede satisfação nem fortalece vínculo com o paciente",
    result:
      "A clínica vira apenas mais uma opção — e não a referência preferida do paciente.",
  },
];

const solutions = [
  {
    title: "Resposta em segundos, 24/7",
    description:
      "Seu Agente de Atendimento responde imediatamente — no WhatsApp, site e redes sociais — sem fila, sem espera e sem depender da equipe.",
  },
  {
    title: "Fluxos anti no-show",
    description:
      "Lembretes automáticos e inteligentes reduzem faltas em até 80%, mantendo sua agenda cheia e previsível.",
  },
  {
    title: "Atendimento padronizado",
    description:
      "Todas as mensagens seguem um padrão profissional, humanizado e alinhado à sua clínica, garantindo consistência e autoridade.",
  },
  {
    title: "Confirmação automática de consultas",
    description:
      "Seu agente confirma horários, reage a cancelamentos e preenche vagas livres sem esforço da equipe.",
  },
  {
    title: "Follow-up estruturado",
    description:
      "Orçamentos são acompanhados com cadência estratégica, garantindo que nenhuma oportunidade esfrie ou se perca no caminho.",
  },
  {
    title: "Pós-consulta com NPS integrado",
    description:
      "Coleta feedback real dos pacientes, identifica pontos de melhoria e aumenta a fidelização e a recorrência automaticamente.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    whatsapp: "",
    revenue: "",
    pain: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const pageUrl = typeof window !== "undefined" ? window.location.href : null;

    const payload = {
      name: formData.name,
      clinic: formData.clinic,
      whatsapp: formData.whatsapp,
      revenue: formData.revenue,
      pain: formData.pain,
      pageUrl,
    };

    try {
      const res = await fetch("https://n8n1.oxidass.com/webhook/nexbase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar para o webhook");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        clinic: "",
        whatsapp: "",
        revenue: "",
        pain: "",
      });
    } catch (err) {
      console.error("Erro no envio para webhook:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-nex-bg text-neutral-50">
      {/* HERO */}
      <HeroSection />

      {/* COMPORTAMENTOS = RESULTADO */}
      <section className="w-full border-b border-white/10 bg-nex-bg">
        <div
          id="sobre"
          className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16 md:px-6 md:py-20"
        >
          <header className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Comportamentos = Resultado
            </h2>
          </header>

          {/* AQUI: centralizado no mobile, alinhado à esquerda no desktop */}
          <div className="space-y-4 text-sm text-neutral-200 text-center md:text-left">
            {behaviorResults.map((item) => (
              <div
                key={item.behavior}
                className="space-y-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
              >
                <p className="font-medium">{item.behavior}</p>
                <p className="text-xs text-neutral-400 md:text-sm">
                  {item.result}
                </p>
              </div>
            ))}
          </div>

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

      {/* SOLUÇÕES */}
      <section className="w-full border-b border-white/10 bg-nex-bg">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight md:text-left md:text-3xl">
            Soluções
          </h2>

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-14">
            {/* COLUNA DE TEXTO */}
            <div className="space-y-6 text-sm text-neutral-300 md:text-base text-center md:text-left">
              <div>
                <p className="font-semibold text-neutral-100">
                  Resposta em segundos, 24/7
                </p>
                <p>
                  Seu Agente de Atendimento responde imediatamente — no
                  WhatsApp, site e redes sociais — sem fila, sem espera e sem
                  depender da equipe.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Fluxos anti no-show
                </p>
                <p>
                  Lembretes automáticos e inteligentes reduzem faltas em até
                  80%, mantendo sua agenda cheia e previsível.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Atendimento padronizado
                </p>
                <p>
                  Todas as mensagens seguem um padrão profissional, humanizado e
                  alinhado à sua clínica, garantindo consistência e autoridade.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Confirmação automática de consultas
                </p>
                <p>
                  Seu agente confirma horários, reage a cancelamentos e preenche
                  vagas livres sem esforço da equipe.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Follow-up estruturado
                </p>
                <p>
                  Orçamentos são acompanhados com cadência estratégica,
                  garantindo que nenhuma oportunidade esfrie ou se perca no
                  caminho.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Pós-consulta com NPS integrado
                </p>
                <p>
                  Coleta feedback real dos pacientes, identifica pontos de
                  melhoria e aumenta a fidelização e a recorrência
                  automaticamente.
                </p>
              </div>
            </div>

            {/* IMAGEM — CRESCIDA, MAIS À DIREITA, MAIOR NO DESKTOP */}
            <div className="relative flex justify-center md:justify-end">
              <div className="w-full max-w-[520px] md:max-w-[640px] lg:max-w-[760px] translate-x-0 md:translate-x-6 lg:translate-x-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400 text-center md:text-left">
                  Exemplo de fluxo
                </p>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-xl shadow-black/40">
                  <Image
                    src="/template-n8n.png"
                    alt="Fluxo de automações da Nexbase"
                    width={2000}
                    height={1200}
                    quality={100}
                    priority={false}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + FORMULÁRIO */}
      <section id="lead-form" className="w-full bg-nex-bg">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr,minmax(0,1fr)] md:items-start">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Com respostas instantâneas, confirmações automáticas e follow-up
                contínuo, sua clínica opera no máximo desempenho. Já dá pra
                imaginar essa realidade acontecendo diariamente aí dentro.
              </h2>
              <p className="text-sm text-neutral-300 md:text-base">
                Há mais de 8 anos atuando com automações e negócios digitais.
                Agora, colocamos essa inteligência a serviço de clínicas que
                querem crescer com processo, não com sorte.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300 text-left">
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
            </div>

            <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-6 shadow-xl shadow-nex-lime/20">
              <h3 className="text-lg font-semibold tracking-tight">
                Preencha para receber uma análise do atendimento da sua clínica
              </h3>
              <p className="mt-1 text-xs text-neutral-400">
                Leva menos de 1 minuto. Usamos essas informações apenas para
                preparar a conversa.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1 text-sm">
                  <label className="block text-neutral-200" htmlFor="name">
                    Seu nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 focus:border-nex-lime"
                    placeholder="Ex: Gustavo, Ana..."
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-neutral-200" htmlFor="clinic">
                    Nome da clínica
                  </label>
                  <input
                    id="clinic"
                    name="clinic"
                    type="text"
                    required
                    className="w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-nex-lime"
                    placeholder="Ex: Clínica Sorriso Premium"
                    value={formData.clinic}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        clinic: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-neutral-200" htmlFor="whatsapp">
                    WhatsApp para contato
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    className="w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 focus:border-nex-lime"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        whatsapp: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <span className="block text-neutral-200">
                    Faturamento mensal atual da clínica
                  </span>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    className="mt-1 w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-nex-lime"
                    value={formData.revenue}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        revenue: e.target.value,
                      }))
                    }
                  >
                    <option value="" disabled>
                      Selecione uma faixa
                    </option>
                    <option>Até R$ 100 mil/mês</option>
                    <option>De R$ 100 mil a R$ 500 mil/mês</option>
                    <option>De R$ 500 mil a R$ 1 milhão/mês</option>
                    <option>Acima de R$ 1 milhão/mês</option>
                  </select>
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-neutral-200" htmlFor="pain">
                    Principal problema hoje no atendimento
                  </label>
                  <textarea
                    id="pain"
                    name="pain"
                    required
                    className="min-h-[80px] w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-nex-lime"
                    placeholder="Conte em poucas linhas o que mais te incomoda hoje."
                    value={formData.pain}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, pain: e.target.value }))
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    relative flex w-full items-center justify-center gap-2 overflow-hidden
                    rounded-full bg-nex-lime px-5 py-3 text-sm font-semibold text-nex-bg
                    shadow-[0_0_28px_rgba(95,243,140,0.45)]
                    transition-transform duration-150 ease-out
                    ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:scale-[1.02] active:scale-[0.98]"
                    }
                  `}
                >
                  {isSubmitting
                    ? "Enviando..."
                    : "Quero aumentar o faturamento da minha clínica"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-[11px] text-emerald-400">
                    Dados enviados com sucesso. Em breve entramos em contato.
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-[11px] text-red-400">
                    Tivemos um problema ao enviar. Tente novamente em alguns
                    instantes.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
