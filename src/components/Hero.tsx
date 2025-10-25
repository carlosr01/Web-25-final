'use client'

import type { SVGProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'
import { ArrowRight, CalendarDays } from 'lucide-react'

const heroCards = [
  {
    src: '/assets/Buenos Amigos Robot Photo.jpg',
    title: 'Agentes conversacionales 24/7',
    caption: 'Reservas y atención en tiempo real por voz y texto, de inicio a fin.',
  },
  {
    src: '/assets/Performance Analysis Graphics Laptop.jpg',
    title: 'Dashboards financieros conectados',
    caption: 'KPIs y caja sincronizados con tu ERP o sistemas propios.',
  },
  {
    src: '/assets/Futuristic Business Branding Designs 2.jpeg',
    title: 'Contenido automático con tu marca',
    caption: 'Posts, videos e imágenes para redes, fieles a tu branding.',
  },
  {
    src: '/assets/Black and White Bar Graph.jpg',
    title: 'Cartera de acciones automática',
    caption: 'Portafolios diversificados con análisis continuo para seguir tendencias al alza.',
  },
]

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.21.583 4.281 1.6 6.077L4 29l8.182-1.6C13.908 28.634 14.932 29 16 29c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 22c-.883 0-1.75-.155-2.572-.462l-.184-.07-4.85.95.931-4.76-.095-.192A8.94 8.94 0 0 1 7 15c0-4.963 4.038-9 9-9s9 4.037 9 9-4.038 9-9 9Zm4.34-6.48c-.237-.118-1.406-.696-1.624-.775-.218-.08-.376-.118-.535.118-.158.237-.613.775-.751.934-.138.158-.277.178-.514.059-.237-.118-1-.368-1.905-1.175-.704-.628-1.18-1.404-1.318-1.641-.138-.237-.015-.365.103-.483.106-.106.237-.277.356-.415.118-.138.158-.237.237-.396.079-.158.04-.297-.02-.415-.059-.118-.535-1.293-.733-1.769-.193-.463-.39-.4-.535-.407l-.455-.008c-.158 0-.415.06-.633.295-.218.237-.832.812-.832 1.98 0 1.168.853 2.296.972 2.454.118.158 1.677 2.56 4.065 3.588.568.245 1.011.392 1.357.502.569.181 1.086.156 1.496.095.455-.068 1.406-.574 1.604-1.129.198-.555.198-1.03.138-1.13-.059-.099-.218-.158-.455-.276Z" />
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#050910] pb-20 pt-36 sm:pt-44"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.1),transparent_55%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-16 items-center lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal className="space-y-8 text-center lg:text-left">
            <div className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur will-change-transform">
              <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 motion-safe:before:animate-[chipShimmer_3200ms_linear_infinite] before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)]"
              />
              Agentes de IA que mueven caja y bajan el CAC
            </div>

            <h1
              className={cn(
                'relative z-10 text-5xl font-semibold tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)] sm:text-6xl md:text-7xl',
                'leading-[0.95] bg-gradient-to-b from-white to-zinc-300 bg-clip-text motion-safe:animate-[fadeUp_650ms_cubic-bezier(.22,.61,.36,1)_both]'
              )}
            >
              <span className="relative block px-1">
                <span className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),rgba(236,72,153,0.06),transparent_70%)] blur-3xl opacity-95 [mask-image:radial-gradient(circle,rgba(255,255,255,0.85),transparent_70%)]" />
                Consultor en soluciones de IA{' '}
                <span className="relative inline-block whitespace-nowrap after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[0.2em] after:translate-y-[35%] after:rounded-full after:bg-gradient-to-r after:from-cyan-400/70 after:via-sky-300/60 after:to-purple-400/60 after:opacity-90 after:content-['']">
                  generativa
                </span>
              </span>
            </h1>

            <p className="mx-auto max-w-4xl text-pretty text-lg text-zinc-300/90 md:text-xl lg:mx-0">
              Construyo con IA generativa: chatbots y agentes autónomos que trabajan solos. Hago simple lo
              complejo y lo convierto en producto que la gente usa.
            </p>

            <p className="text-base text-gray-400 md:text-lg">
              Automatizo finanzas y marketing con agentes conectados a tus datos que ejecutan de punta a punta,
              con control, trazabilidad y métricas en tiempo real.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="xl" asChild>
                <Link href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia" target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="h-5 w-5" />
                  Agenda una Demo
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="#casos">
                  <ArrowRight className="h-5 w-5" />
                  Ver casos
                </Link>
              </Button>
              <Button variant="secondary" size="xl" asChild className="justify-center">
                <Link
                  href="https://wa.me/51912822723"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Escríbeme
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            {/* Decorative collage of mockups that reinforces the AI narrative without relying on stock photography */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {heroCards.map((card) => (
                <div
                  key={card.title}
                  className={cn(
                    'group relative w-full aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl transition-transform duration-300 ease-out hover:scale-[1.03]'
                  )}
                >
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050910]/90 via-[#050910]/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-4 sm:p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                      IA Studio
                    </span>
                    <div className="space-y-1">
                      <p className="text-lg font-bold leading-tight text-white sm:text-xl">
                        {card.title}
                      </p>
                      <p className="text-sm text-cyan-100/80">
                        {card.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18} className="lg:col-span-2">
            <dl className="grid grid-cols-1 gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 text-left shadow-[0_30px_60px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl sm:grid-cols-3">
              <div className="space-y-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">Implementaciones</dt>
                <dd className="space-y-1">
                  <p className="text-3xl font-semibold text-white">500+</p>
                  <p className="text-sm text-gray-400">Proyectos end-to-end con agentes en producción.</p>
                </dd>
              </div>
              <div className="space-y-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">Velocidad operativa</dt>
                <dd className="space-y-1">
                  <p className="text-3xl font-semibold text-white">-20–40%</p>
                  <p className="text-sm text-gray-400">Reducción promedio en tiempos críticos.</p>
                </dd>
              </div>
              <div className="space-y-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">Leads calificados</dt>
                <dd className="space-y-1">
                  <p className="text-3xl font-semibold text-white">+15–30%</p>
                  <p className="text-sm text-gray-400">Impacto directo en volumen y calidad comercial.</p>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
