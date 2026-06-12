"use client";

import { Layers, Rocket, Search, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/ui/service-card";

const steps = [
  {
    icon: Search,
    eyebrow: "1. Descubrir",
    title: "Diagnóstico de datos y procesos",
    description:
      "Mapeamos tus flujos críticos, accesos y métricas para identificar dónde la IA generará impacto tangible.",
    items: [
      "Workshops con negocio y tecnología",
      "Auditoría de datos, riesgos y cumplimiento",
      "Roadmap priorizado por impacto y esfuerzo",
    ],
  },
  {
    icon: Layers,
    eyebrow: "2. Diseñar",
    title: "Orquestación, prompts y guardrails",
    description:
      "Definimos arquitectura, integraciones y KPIs para lanzar un agente confiable desde el día uno.",
    items: [
      "Flows conversacionales y decision tree",
      "Prompt engineering evaluado con RAG",
      "Monitoreo, alertas y gobierno de calidad",
    ],
  },
  {
    icon: Rocket,
    eyebrow: "3. Desplegar",
    title: "MVP productivo en 14–30 días",
    description:
      "Integramos APIs, entrenamos el modelo con tus datos y liberamos un panel para medir el retorno.",
    items: [
      "Implementación técnica y seguridad",
      "Pruebas con datos reales y usuarios",
      "Plan de adopción y entrenamiento interno",
    ],
  },
  {
    icon: TrendingUp,
    eyebrow: "4. Escalar",
    title: "Operación continua y nuevos casos",
    description:
      "Optimizamos con feedback, automatizamos tareas adyacentes y conectamos métricas con tus OKRs.",
    items: [
      "Panel de performance y alertas",
      "Backlog vivo de automatizaciones",
      "Revisión mensual con negocio y C-level",
    ],
  },
];

export default function HowIWork() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden bg-transparent pb-12 pt-12"
    >
  <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-[rgba(124,58,237,0.25)] to-transparent blur-3xl" />
      <div className="container space-y-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>Metodología</h2>
          <p className="mt-4 text-base text-text-mute sm:text-lg">
            Descubrir → Diseñar → Desplegar → Escalar. Circuito iterativo para liberar ROI desde el primer sprint.
          </p>
        </div>
 
        <div className="grid gap-8 lg:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.eyebrow} delay={index * 0.08}>
              <ServiceCard
                icon={step.icon}
                eyebrow={step.eyebrow}
                title={step.title}
                description={step.description}
                items={step.items}
                accent={index % 2 === 0 ? "primary" : "secondary"}
              />
            </Reveal>
          ))}
        </div>
 
        <Reveal delay={0.25}>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] p-10 text-center shadow-glass-card backdrop-blur-xl transition-all duration-300">
            <p className="text-lg italic leading-relaxed text-text-mute">
              “Implementar IA sin drama es alinear negocio y tecnología, entregar un MVP medible en semanas y
              acompañar al equipo hasta ver impacto directo en caja.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
