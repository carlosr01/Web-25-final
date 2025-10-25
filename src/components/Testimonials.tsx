'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const TESTIMONIALS = [
  {
    name: 'María Ortega',
    role: 'Directora de Operaciones · Banca',
    quote:
      'Pasamos de cierres manuales y sábados trabajando a conciliaciones automatizadas con alertas. En tres semanas el agente estaba en producción y midiendo impacto.',
  },
  {
    name: 'Leonardo Méndez',
    role: 'Head of Growth · Fintech',
    quote:
      'El agente de marketing toma decisiones con datos reales. Bajamos CAC 24%, el equipo confía porque cada acción viene con explicación y métricas.',
  },
  {
    name: 'Ana Beltrán',
    role: 'CX Lead · Retail',
    quote:
      'Automatizamos 60% de tickets sin perder tono de marca. Nos dejaron playbooks, dashboard y capacitación; hoy escalamos casos nuevos sin depender de terceros.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = TESTIMONIALS[currentIndex]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section id="resultados" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Resultados y prueba social</h2>
          <p className="text-center text-gray-400 mb-12">
            +500 entregas exitosas en banca, retail, salud y educación. De pilotos ágiles a despliegues productivos con uptime y soporte.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <Quote className="w-12 h-12 text-cyan-400 mb-6" />
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                {current.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600"></div>
                <div>
                  <h4 className="font-semibold text-white text-lg">{current.name}</h4>
                  <p className="text-cyan-400 text-sm">{current.role}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors shadow-lg"
              aria-label="Ver testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors shadow-lg"
              aria-label="Ver siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-gray-600 w-2'}`}
                  aria-label={`Mostrar testimonio ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
