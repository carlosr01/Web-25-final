import Image from 'next/image'
import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre-mi" className="py-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="bg-white/[0.02] border border-white/5 shadow-glass-card hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-md rounded-3xl p-12">
            <div className="grid md:grid-cols-[300px_1fr] gap-10 items-center">
              <div className="relative group mx-auto md:mx-0">
                <div className="absolute -inset-2 bg-gradient-to-br from-secondary-fg via-primary to-primary/30 rounded-full blur-md opacity-60 group-hover:opacity-90 group-hover:blur-lg transition-all duration-700"></div>
                <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-secondary-fg to-primary p-2 theme-glow-shadow group-hover:scale-[1.02] transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-slate-900/80 group-hover:ring-slate-800/60 transition-all duration-500">
                    <Image
                      src="/assets/Foto-perfil.jpg"
                      alt="Carlos Rivadeneyra - AI Solutions Consultant"
                      width={288}
                      height={288}
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-secondary-fg text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>Sobre mí</h2>
                <p className="text-slate-200 text-lg leading-relaxed mb-4">
                  Mi nombre es <span className="font-semibold text-white">Carlos Rivadeneyra</span> ingeniero especializado en IA y finanzas que ayudo a las personas a dominar los agentes de IA, crear automatizaciones y convertir sus habilidades en ingresos.
                </p>
                <p className="text-slate-200 text-base leading-relaxed mb-4">
                  Soy un ingeniero especializado en IA y finanzas que ayudo a las personas a dominar los agentes de IA, crear automatizaciones y convertir sus habilidades en ingresos. Cuento con más de 5 años de experiencia liderando roadmaps de GenAI, diseñando arquitecturas RAG y modernizando modelos semánticos en Fabric/Power BI.
                </p>
                <p className="text-slate-200 text-base leading-relaxed mb-6">
                  Mi enfoque combina la optimización de procesos de ingeniería con tecnología de vanguardia para asegurar implementaciones robustas de IA que generen un retorno operativo real de entre el 20% y 40%, impulsando la adopción y la cultura de datos en las organizaciones.
                </p>

                {/* Acciones de Descarga */}
                <div className="mt-8 border-t border-white/5 pt-8 flex flex-col lg:flex-row gap-6 items-center justify-between w-full">
                  <div className="text-left w-full lg:w-auto">
                    <h4 className="text-2xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>¿Necesitas detalles completos?</h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      Descarga mi currículum profesional con mi experiencia detallada.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
                    <Button size="lg" className="w-full sm:w-auto h-11" asChild>
                      <a href="/docs/Carlos Rivadeneyra cv 06-26.pdf" download>
                        <Download className="h-4.5 w-4.5 mr-2" />
                        Descargar CV
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
