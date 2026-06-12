"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

const stats = [
  { label: "Trayectoria", value: "5+ Años" },
  { label: "Ahorro Operativo", value: "20-40%" },
  { label: "Especialización", value: "Finanzas & Ops" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-36 bg-transparent"
    >
      <div className="container relative max-w-7xl mx-auto px-6 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center">
          {/* Columna Principal Alineada a la Izquierda */}
          <div className="space-y-10 flex flex-col items-start text-left w-full">
            {/* Título Principal con animación de entrada fluida */}
            <h1
              id="hero-heading"
              className="text-5xl sm:text-7xl lg:text-[76px] leading-[0.95] tracking-[-2.46px] font-normal text-white animate-fade-rise text-balance w-full"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Modelando el <em className="italic text-[#a8a8a8]">futuro</em> de los negocios <br className="hidden sm:inline" />
              con <em className="italic text-[#a8a8a8]">inteligencia artificial.</em>
            </h1>

            {/* Párrafo de Biografía con animación con retraso */}
            <p className="max-w-2xl text-balance text-base leading-relaxed text-[#a8a8a8] md:text-lg animate-fade-rise-delay">
              Mi nombre es Carlos Rivadeneyra ingeniero especializado en IA y finanzas que ayudo a las personas a dominar los agentes de IA, crear automatizaciones y convertir sus habilidades en ingresos.
            </p>

            {/* Botones de Llamada a la Acción (CTA) */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto animate-fade-rise-delay-2">
              {/* CTA Primario - Vidrio Líquido */}
              <a
                href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-8 py-3.5 text-base text-white hover:scale-[1.03] transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <CalendarDays className="h-5 w-5 text-white" aria-hidden />
                Kickoff gratuito 1:1
              </a>
              
              {/* CTA Secundario - Vidrio Translúcido */}
              <Link
                href="/services"
                className="rounded-full border border-white/10 bg-transparent px-8 py-3.5 text-base text-[#a8a8a8] hover:text-white hover:border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Ver servicios
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>

            {/* Tarjeta de Estadísticas de Impacto */}
            <div className="w-full mt-4 animate-fade-rise-delay-2">
              <dl className="grid grid-cols-1 gap-6 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03] p-6 text-left shadow-glass-card backdrop-blur-xl sm:grid-cols-3 transition-all duration-300">
                {stats.map((item) => (
                  <div key={item.label} className="space-y-2 text-left sm:pl-6 sm:first:pl-0 sm:border-l sm:first:border-l-0 border-white/10">
                    <dt className="text-xs font-semibold uppercase tracking-[0.32em] text-text-subtle">
                      {item.label}
                    </dt>
                    <dd className="text-3xl font-semibold text-text">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
          {/* Espacio reservado a la derecha en pantallas grandes para lucir el video de fondo */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
