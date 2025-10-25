import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export default function Portfolio() {
  const projects = [
    {
      title: 'Agente financiero omnicanal',
      sector: 'Banca regional',
      description: 'Automatizamos conciliaciones, cash alerts y reportería diaria conectada a ERP y Slack.',
      image: '/assets/gpt.png',
      bullets: [
        '55% menos tiempo en conciliaciones y cierres',
        'Alertas de riesgo de caja en tiempo real',
        '+18 pts en NPS interno del equipo financiero'
      ],
      link: 'https://promptadvisers.ai/casos/banca',
    },
    {
      title: 'Scoring y nurturing con IA',
      sector: 'Fintech de préstamos',
      description: 'Agentes que califican leads, ejecutan campañas y generan reportes de performance diarios.',
      image: '/assets/getty-images-LaU3HadwEeE-unsplash.jpg',
      bullets: [
        '+27% en conversión de leads a solicitud',
        'Tiempo de respuesta comercial bajó a 3 minutos',
        'Dashboard de métricas con trazabilidad completa'
      ],
      link: 'https://promptadvisers.ai/casos/fintech',
    },
    {
      title: 'Asistente de soporte 24/7',
      sector: 'Retail omnicanal',
      description: 'Chatbots y agentes autónomos que resuelven soporte de primera línea y escalan tickets complejos.',
      image: '/assets/Blue Robot on Table.jpg',
      bullets: [
        '40% de reducción en costos de back-office',
        'CSAT creció 12 puntos en 6 semanas',
        'Integración con CRM, WhatsApp Business y Zendesk'
      ],
      link: 'https://promptadvisers.ai/casos/retail',
    },
    {
      title: 'IA para marketing de rendimiento',
      sector: 'Edtech global',
      description: 'Agente autónomo que administra pauta, genera creatividades y redistribuye presupuesto en caliente.',
      image: '/assets/Network Icons Wallpaper.jpg',
      bullets: [
        'CAC bajó 22% en el trimestre',
        'Copys y creatividades generadas con guardrails',
        'Reporte ejecutivo diario con decisiones explicadas'
      ],
      link: 'https://promptadvisers.ai/casos/edtech',
    }
  ]

  return (
    <section id="casos" className="py-20 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Casos y resultados</h2>
          <p className="text-center text-gray-400 mb-16">
            De pilotos ágiles a despliegues productivos con uptime y soporte. Impacto medible desde la semana uno.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-3">
                    <span className="text-sm text-cyan-400 font-medium">{project.sector}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    {project.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Ver caso
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
