import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { ArrowLeft, CheckCircle, CircleDot, Cpu, FileSearch, LineChart, Workflow } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios de IA | Prompt Advisers',
  description:
    'Consultoría en soluciones de IA. Roadmaps, auditorías, ingeniería de prompts, chatbots y agentes autónomos. Implementamos MVPs en 14–30 días con adopción asegurada.',
}

const SERVICES = [
  {
    icon: FileSearch,
    title: 'Estrategia & Roadmap de IA',
    description: 'Alineamos casos de uso con objetivos de negocio, priorizamos por ROI y dejamos un plan accionable en 90 días.',
    features: [
      'Workshops con negocio y tecnología',
      'Inventario de procesos y datos',
      'Matriz de impacto vs. esfuerzo',
      'Modelo de gobierno y riesgos',
    ],
  },
  {
    icon: Workflow,
    title: 'Ingeniería de Prompts & Evaluación',
    description: 'Diseñamos prompts, guardrails y métricas. Evaluamos calidad con datos reales y automatizamos las mejoras.',
    features: [
      'Arquitectura de prompts y RAG',
      'Guardrails, políticas y seguridad',
      'Evaluaciones automáticas y A/B',
      'Playbooks para operación diaria',
    ],
  },
  {
    icon: Cpu,
    title: 'Chatbots & Agentes Autónomos',
    description: 'Construimos agentes para finanzas, soporte y marketing que ejecutan tareas punta a punta con trazabilidad.',
    features: [
      'Integración con ERP, CRM y APIs internas',
      'Orquestación de flujos y tareas humanas',
      'Alertas y panel de monitoreo en tiempo real',
      'Entrenamiento y documentación para tu equipo',
    ],
  },
  {
    icon: CircleDot,
    title: 'Auditorías de IA',
    description: 'Identificamos quick wins, riesgos y ahorros. Backlog priorizado para ejecutar en el siguiente sprint.',
    features: [
      'Revisión de infraestructura y costos',
      'Análisis de compliance y privacidad',
      'Mapeo de riesgos y mitigaciones',
      'Roadmap de automatizaciones inmediatas',
    ],
  },
  {
    icon: LineChart,
    title: 'Desarrollo de Productos con LLMs',
    description: 'Aplicaciones escalables (web, móvil y voz) con métricas de negocio, monitoreo y seguridad desde el día uno.',
    features: [
      'MVP en 14–30 días',
      'UX y contenidos alineados a marca',
      'Observabilidad, logging y alertas',
      'Plan de escalado y optimización continua',
    ],
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Descubrir',
    description: 'Diagnóstico express: datos, sistemas, métricas actuales y objetivos de negocio.',
  },
  {
    step: '02',
    title: 'Diseñar',
    description: 'Flows, métricas, riesgos y plan de adopción. Priorizamos quick wins y definimos guardrails.',
  },
  {
    step: '03',
    title: 'Desplegar',
    description: 'MVP funcional en 14–30 días con entrenamiento, documentación y monitoreo en vivo.',
  },
  {
    step: '04',
    title: 'Escalar',
    description: 'KPIs, automatizaciones adyacentes y mejora continua con reuniones de seguimiento.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050910] to-[#0a0f1e] pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(var(--glow-rgb),0.15),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <Button variant="ghost" size="sm" asChild className="mb-8 w-fit text-slate-100">
              <Link href="/#hero">
                <ArrowLeft aria-hidden="true" className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
            </Button>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Servicios de IA que{' '}
              <span className="bg-gradient-to-r from-secondary-fg to-primary bg-clip-text text-transparent">
                mueven las métricas del negocio
              </span>
            </h1>

            <p className="text-xl text-slate-200 max-w-3xl">
              Roadmaps, auditorías, agentes autónomos y productos con LLMs. Implementamos con tu stack, dejamos playbooks
              claros y acompañamos hasta asegurar adopción.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-secondary-fg/20 transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-fg to-primary flex items-center justify-center flex-shrink-0">
                        <Icon aria-hidden="true" className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-slate-200">{service.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-slate-100">
                          <CheckCircle aria-hidden="true" className="w-5 h-5 text-secondary-fg flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-[#0a0f1e] to-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Metodología en 4 pasos</h2>
              <p className="text-slate-200 text-lg max-w-2xl mx-auto">
                Descubrir → Diseñar → Desplegar → Escalar. Entregamos MVPs en semanas y operamos con métricas claras.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {PROCESS_STEPS.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.1}>
                <div className="relative flex items-start gap-6 bg-slate-800/30 rounded-2xl p-6 border border-white/5 hover:border-secondary-fg/20 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-fg to-primary flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-200">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para integrar IA sin drama?
              </h2>
              <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
                Conversemos y prioricemos casos de uso con ROI real. Preparamos tu roadmap, ejecutamos el MVP y entrenamos al equipo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" asChild>
                  <Link href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia" target="_blank" rel="noopener noreferrer">
                    Agenda una demo
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/#metodologia">Ver metodología</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
