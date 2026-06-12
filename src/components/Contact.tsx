'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { ArrowUp, CalendarDays, Copy, Download, Linkedin, MessageCircleMore } from 'lucide-react'

const EMAIL = 'carlosrivadeneyra0111@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/crivadeneyera/'
const WHATSAPP = 'https://wa.me/51912822723'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Unable to copy email', error)
    }
  }

  return (
    <section id="contacto" className="pt-16 pb-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Sección principal de llamada a la acción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Hablemos de IA aplicada
          </h2>
          <p className="max-w-2xl mx-auto text-slate-200 text-lg leading-relaxed">
            ¿Listo para integrar IA sin drama? Armemos tu plan de automatización en una semana y prioricemos casos con retorno de inversión real.
          </p>
        </div>

        <Reveal delay={0.15}>
          <div className="mb-20 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="primary"
              size="xl"
              className="min-w-[220px] rounded-full shadow-floating-card hover:scale-[1.02] transition-transform"
            >
              <a href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia" target="_blank" rel="noopener noreferrer" aria-label="Agendar una demo">
                <CalendarDays className="w-5 h-5 mr-2" />
                Agenda una demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="min-w-[220px] rounded-full border-white/10 text-slate-200 hover:text-white hover:bg-white/5 hover:scale-[1.02] transition-transform"
            >
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Visitar LinkedIn">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="xl"
              className="min-w-[220px] rounded-full hover:scale-[1.02] transition-transform"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp">
                <MessageCircleMore className="w-5 h-5 mr-2" />
                WhatsApp Directo
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Grid de navegación del Footer de Alto Nivel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-white/10 pt-16 pb-12">
          {/* Columna 1: Marca y Estado de Agentes */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-2xl font-normal tracking-tight text-white hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Carlos Rivadeneyra<sup className="text-xs">®</sup>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Ingeniería de procesos aplicada con inteligencia artificial de vanguardia. Diseñamos, auditamos e implementamos arquitecturas seguras con retorno real medible.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Explorar</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-slate-400 hover:text-white transition-colors">Sobre mí</a>
              </li>
              <li>
                <a href="#metodologia" className="text-slate-400 hover:text-white transition-colors">Metodología</a>
              </li>
              <li>
                <a href="#roi-calculator" className="text-slate-400 hover:text-white transition-colors">Calculadora de ROI</a>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">Servicios Profesionales</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Recursos */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Contacto & Recursos</h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-text-subtle">Correo corporativo</span>
                <button
                  onClick={handleCopyEmail}
                  className="w-fit inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-2 text-slate-200 transition-all hover:text-secondary-fg hover:bg-white/10"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied ? 'Email copiado' : EMAIL}
                </button>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs text-text-subtle">Currículum Vitae</span>
                <a
                  href="/docs/Carlos Rivadeneyra cv 06-26.pdf"
                  download
                  className="w-fit inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-2 text-slate-200 transition-all hover:text-secondary-fg hover:bg-white/10"
                >
                  <Download className="w-3.5 h-3.5" />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior del Footer */}
        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Prompt Advisers · Carlos Rivadeneyra. Todos los derechos reservados.
            </p>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="rounded-full border-white/10 bg-transparent text-slate-400 hover:text-white hover:bg-white/5 shadow-lg"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
