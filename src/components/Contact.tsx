'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { ArrowUp, CalendarDays, Copy, Download, Linkedin, MessageCircleMore } from 'lucide-react'

const EMAIL = 'carlosrivadeneyra0111@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/crivadeneyera/'
const WHATSAPP = 'https://wa.me/51912822723'
const BROCHURE_URL = '/docs/prompt-advisers-brochure.pdf'

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
    <section id="contacto" className="py-20 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hablemos de IA aplicada</h2>
          <p className="text-gray-400 text-lg">
            ¿Listo para integrar IA sin drama? Armemos tu plan en una semana y prioricemos casos con ROI real.
          </p>
        </div>

        <Reveal delay={0.15}>
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="primary"
              size="xl"
              className="min-w-[220px]"
            >
              <a href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia" target="_blank" rel="noopener noreferrer" aria-label="Agendar una demo">
                <CalendarDays className="w-5 h-5" />
                Agenda una demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="min-w-[220px]"
            >
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Visitar LinkedIn">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="xl"
              className="min-w-[220px]"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp">
                <MessageCircleMore className="w-5 h-5" />
                Escríbeme por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="xl"
              className="min-w-[220px]"
            >
              <a href={BROCHURE_URL} download aria-label="Descargar brochure de servicios">
                <Download className="w-5 h-5" />
                Descarga brochure
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="text-center mb-12">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-cyan-400"
            aria-live="polite"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Email copiado' : 'Copiar email'}
          </button>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-400 mb-2">¿Quieres cotizar un proyecto o necesitas una auditoría express?</p>
          <Link
            href="/services"
            className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4"
          >
            Ver servicios
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Prompt Advisers · Carlos Rivadeneyra
            </p>
            <Button
              variant="primary"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="shadow-lg hover:translate-y-0"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
