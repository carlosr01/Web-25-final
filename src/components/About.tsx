import Image from 'next/image'
import { Reveal } from '@/components/ui/reveal'

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-[#0a0f1e] to-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-[240px_1fr] gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-1.5 shadow-2xl shadow-cyan-500/50">
                  <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-slate-900">
                    <Image
                      src="/assets/Foto-perfil.jpg"
                      alt="Carlos R. - Consultor de IA"
                      width={224}
                      height={224}
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-cyan-400 text-3xl font-bold mb-4">Sobre mí</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Soy Carlos, consultor de soluciones de IA y fundador de <span className="font-semibold text-white">Prompt Advisers</span>.
                  Me especializo en modelado de IA generativa, desarrollo de chatbots y asistentes autónomos, y
                  estrategia de adopción de IA. Mi enfoque: menos humo, más resultados medibles.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Integramos IA en tus operaciones sin traumas: ERP, CRM, Ads, soporte y back-office. Entrenamos a tu equipo,
                  dejamos todo documentado y nos quedamos hasta que el agente entregue valor.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
