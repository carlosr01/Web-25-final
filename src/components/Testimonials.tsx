'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

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
    <section id="resultados" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>Resultados y prueba social</h2>
          <p className="text-center text-slate-200 mb-12">
            +500 entregas exitosas en banca, retail, salud y educación. De pilotos ágiles a despliegues productivos con uptime y soporte.
          </p>
        </Reveal>
 
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="bg-white/[0.02] border border-white/5 shadow-glass-card hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <Quote aria-hidden className="w-12 h-12 text-secondary-fg mb-6" />
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8">
                {current.quote}
              </p>
              <div className="flex items-center gap-4">
                <div aria-hidden className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-fg to-primary"></div>
                <div>
                  <h4 className="font-semibold text-white text-lg">{current.name}</h4>
                  <p className="text-secondary-fg text-sm">{current.role}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 active:bg-primary/80 flex items-center justify-center text-primary-fg transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:left-0 sm:-translate-x-4"
              aria-label="Ver testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 active:bg-primary/80 flex items-center justify-center text-primary-fg transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:right-0 sm:translate-x-4"
              aria-label="Ver siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fg/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                    index === currentIndex ? 'bg-secondary-fg/20' : 'bg-white/5 hover:bg-white/10 active:bg-white/15'
                  )}
                  aria-label={`Mostrar testimonio ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : undefined}
                >
                  <span
                    className={cn(
                      'h-2.5 w-2.5 rounded-full transition-transform',
                      index === currentIndex ? 'bg-secondary-fg scale-110' : 'bg-slate-400/70'
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
