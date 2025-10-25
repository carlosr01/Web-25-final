import { Button } from '@/components/ui/button'
import { ArrowRight, Download, GraduationCap, ShieldCheck } from 'lucide-react'

export default function Resume() {
  const services = [
    {
      title: 'Estrategia & Roadmap de IA',
      description: 'Alineamos casos de uso con objetivos de negocio, priorizamos por ROI y definimos un plan accionable en 90 días.',
    },
    {
      title: 'Ingeniería de Prompts & Evaluación',
      description: 'Diseñamos prompts, guardrails y evaluaciones A/B para garantizar calidad consistente y trazable.',
    },
    {
      title: 'Chatbots & Agentes Autónomos',
      description: 'Atención, finanzas y marketing: conciliación, scoring, campañas, reportes y alertas totalmente automatizadas.',
    },
    {
      title: 'Auditorías de IA',
      description: 'Identificamos quick wins, riesgos y ahorros con un backlog accionable para el siguiente sprint.',
    },
    {
      title: 'Desarrollo de Productos con LLMs',
      description: 'Aplicaciones escalables (incluye agentes de voz) con UX cuidada, métricas de uso y seguridad integrada.',
    },
  ]

  const trainingPrograms = [
    {
      title: 'Programas para innovadores y C-level',
      bullets: [
        'Casos de uso y ROI: de la visión al backlog priorizado',
        'Evaluación y seguridad en agentes: compliance, sesgos y gobernanza',
        'Hands-on para equipos: prompts, métricas y operación diaria',
      ],
    },
  ]

  const deliverables = [
    'Documento de arquitectura y orquestación',
    'Prompts versionados y evaluaciones automáticas',
    'Dashboard de métricas con alertas',
    'Manual de operación + plan de adopción',
  ]

  const results = [
    '-20–40% en tiempos operativos',
    '+15–30% en conversión de leads calificados',
    'Ahorros directos en soporte y back-office',
  ]

  const principles = [
    'Colaboración negocio + tech',
    'Inclusión y responsabilidad de datos',
    'Sostenibilidad en costos y operación',
    'Adopción real: nada de POC eterno',
  ]

  return (
    <section id="formacion" className="py-20 bg-gradient-to-b from-[#0a0f1e] to-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Soluciones de IA a medida</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Integramos IA en tus operaciones sin traumas: ERP, CRM, Ads, soporte y back-office. Entrenamos al equipo,
            dejamos todo documentado y acompañamos hasta ver impacto en indicadores de negocio.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Servicios clave</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="bg-slate-800/40 border border-white/5 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Entregables estándar</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Resultados típicos</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {results.map((result) => (
                    <li key={result} className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Formación & capacitación</h3>
              </div>
              {trainingPrograms.map((program) => (
                <div key={program.title}>
                  <p className="text-gray-300 text-sm mb-4">{program.title}</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {program.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Button asChild variant="outline" size="lg" className="mt-6">
                <a href="https://promptadvisers.ai/formacion" target="_blank" rel="noopener noreferrer">
                  Ver malla
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Principios de trabajo</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
              {principles.map((principle) => (
                <div key={principle} className="bg-slate-800/40 border border-white/5 rounded-2xl p-4">
                  {principle}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-300 text-lg">
              ¿Listo para integrar IA sin drama? Conversemos y armamos tu plan en una semana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia" target="_blank" rel="noopener noreferrer">
                  Agenda una llamada
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="/docs/prompt-advisers-brochure.pdf" download>
                  <Download className="h-5 w-5" />
                  Descarga brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
