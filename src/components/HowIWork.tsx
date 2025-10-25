'use client'

import { Layers, Rocket, Search, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export default function HowIWork() {
  const steps = [
    {
      icon: Search,
      title: 'Descubrir',
      subtitle: 'Diagnóstico, datos y metas',
      description: 'Mapeamos procesos, accesos y métricas actuales. Identificamos quick wins y riesgos.',
      items: [
        'Auditoría de datos, sistemas y accesos',
        'Workshops con negocio y tecnología',
        'Inventario de casos priorizado por impacto'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
  icon: Layers,
      title: 'Diseñar',
      subtitle: 'Flow, métricas y gobernanza',
      description: 'Definimos arquitectura de prompts, guardrails, orquestación y métricas.',
      items: [
        'Flows conversacionales y decision tree',
        'Prompt engineering + RAG + evaluaciones',
        'KPIs de negocio, monitoreo y alertas'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Rocket,
      title: 'Desplegar',
      subtitle: 'MVP en 14–30 días',
      description: 'Construimos el agente, integramos APIs y dejamos dashboards de control listos.',
      items: [
        'Implementación técnica y seguridad',
        'Pruebas con datos reales y fine-tuning',
        'Plan de adopción y entrenamiento del equipo'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Escalar',
      subtitle: 'KPIs, automatizaciones y mejora continua',
      description: 'Operamos con playbooks, automatizamos tareas adyacentes y medimos impacto.',
      items: [
        'Panel de performance y alertas de riesgo',
        'Backlog de nuevas automatizaciones',
        'Revisión mensual de negocio + mejoras'
      ],
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="metodologia" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Metodología</h2>
          <p className="text-gray-400 text-lg">
            Descubrir → Diseñar → Desplegar → Escalar
          </p>
        </div>

        <div className="space-y-12 mt-16">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                <div className="flex-1">
                  <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>

                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-cyan-400">{step.subtitle}</h4>
                    </div>

                    <p className="text-gray-300 mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
              )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg italic leading-relaxed">
              "Implementar IA sin drama significa alinear negocio y tecnología, entregar un MVP en semanas y
              acompañar al equipo hasta ver resultados en caja."
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            +500 entregas en banca, retail, salud y educación
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            Operación continua con uptime garantizado y soporte 24/7
          </span>
        </div>
      </div>
    </section>
  )
}
