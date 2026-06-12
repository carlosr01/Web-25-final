"use client";

import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase, Calendar, Download, GraduationCap, ShieldCheck, Award } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export default function Resume() {
  const experiences = [
    {
      company: 'Banco de Crédito (BCP)',
      period: 'Nov 2022 – Actualmente',
      role: 'Analista Senior en Soluciones de Proyectos Financieros',
      description: 'Líder en la definición, diseño y despliegue de soluciones de Inteligencia Artificial Generativa y analítica avanzada para el core financiero.',
      achievements: [
        'Despliegue de asistentes conversacionales (Copilot Studio) para deflection de soporte operativo.',
        'Implementación de soluciones seguras NL ➔ SQL para el autoconsumo de data financiera bajo estrictas políticas de guardrails.',
        'Modernización del modelado semántico de datos corporativos en Microsoft Fabric para discoverability de reportes con IA.'
      ]
    },
    {
      company: 'EVOL (TSnet S.A)',
      period: 'Jul 2018 – Oct 2022',
      role: 'Oracle Financial Consultant',
      description: 'Consultoría especializada en implementaciones complejas de Oracle Financials Cloud e integración con almacenes de datos y Data Lakes.',
      achievements: [
        'Liderazgo de módulos de ERP financiero para importantes corporaciones en la región.',
        'Automatización de pipelines de conciliación bancaria y reportería regulatoria.',
        'Optimización de flujos de control y procesos contables con un enfoque ágil.'
      ]
    },
    {
      company: 'Accionar Consultores S.C',
      period: 'Mar 2018 – Jul 2018',
      role: 'Junior Analytics Consultant',
      description: 'Desarrollo de modelos analíticos descriptivos y predictivos para la optimización de procesos operativos y comerciales.',
      achievements: [
        'Modelamiento y análisis estadístico aplicados a decisiones comerciales.',
        'Diseño de dashboards analíticos interactivos para alta gerencia.'
      ]
    }
  ]

  const education = [
    {
      school: 'Universidad de Lima',
      degree: 'Ingeniero Industrial',
      period: '2013 - 2018',
      details: 'Especialización en optimización de procesos de negocio, sistemas de información y analítica aplicada a las finanzas corporativas.'
    }
  ]

  const skillCategories = [
    {
      title: 'Plataformas de IA & NLP',
      skills: ['Microsoft Copilot Studio', 'Azure OpenAI', 'Azure AI Search', 'GenAI RAG Architectures', 'Prompt Engineering']
    },
    {
      title: 'Datos & Business Intelligence',
      skills: ['Microsoft Fabric', 'Power BI', 'DAX Avanzado', 'SQL Premium', 'Modelamiento Semántico']
    },
    {
      title: 'Consultoría & Gestión',
      skills: ['Oracle Financials Cloud', 'Metodologías Ágiles', 'Framework RICE/WSJF', 'Especificación Gherkin', 'Optimización de Procesos']
    }
  ]

  return (
    <section id="trayectoria" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>Trayectoria & Educación</h2>
            <p className="text-slate-200 text-lg max-w-3xl mx-auto">
              Ingeniería de procesos e IA aplicadas al sector financiero y corporativo. Una perspectiva robusta orientada a resultados medibles.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Timeline Section */}
          <div className="space-y-8">
            <Reveal>
              <h3 className="text-2xl font-bold text-secondary-fg flex items-center gap-2.5 mb-6">
                <Briefcase className="h-6 w-6 text-secondary-fg" />
                Experiencia Profesional
              </h3>
            </Reveal>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-12">
              {experiences.map((exp, idx) => (
                <Reveal key={exp.company} delay={idx * 0.1}>
                  <div className="relative">
                    {/* Circle Indicator */}
                    <span className="absolute -left-[31px] top-1.5 h-4.5 w-4.5 rounded-full bg-slate-950 border-2 border-secondary-fg shadow-[0_0_8px_rgba(var(--glow-rgb),0.6)] flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary-fg" />
                    </span>

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-secondary-fg transition-colors">
                        {exp.company}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(var(--glow-rgb),0.08)] px-3 py-1 text-xs font-medium text-secondary-fg border border-[color:var(--border-subtle)]">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    <h5 className="text-base font-semibold text-slate-300 mb-3">{exp.role}</h5>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-sm text-slate-200">
                          <ShieldCheck className="h-4.5 w-4.5 text-secondary-fg/80 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column (Education & Skills) */}
          <div className="space-y-12">
            {/* Education */}
            <div className="space-y-6">
              <Reveal>
                <h3 className="text-2xl font-bold text-secondary-fg flex items-center gap-2.5 mb-6">
                  <GraduationCap className="h-6 w-6 text-secondary-fg" />
                  Educación
                </h3>
              </Reveal>

              {education.map((edu, idx) => (
                <Reveal key={edu.school} delay={idx * 0.1}>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-secondary-fg/30 transition-all duration-300 shadow-glass-card hover:bg-white/[0.03]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-white">{edu.school}</h4>
                      <span className="text-xs font-semibold text-secondary-fg">{edu.period}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-300 mb-2">{edu.degree}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{edu.details}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Core Tech Stack */}
            <div className="space-y-6">
              <Reveal>
                <h3 className="text-2xl font-bold text-secondary-fg flex items-center gap-2.5 mb-6">
                  <Award className="h-6 w-6 text-secondary-fg" />
                  Habilidades & Tecnologías
                </h3>
              </Reveal>

              <div className="space-y-6">
                {skillCategories.map((cat, idx) => (
                  <Reveal key={cat.title} delay={idx * 0.1}>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-3 shadow-glass-card">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cat.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 border border-white/5 hover:border-secondary-fg/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Actions */}
            <Reveal delay={0.3}>
              <div className="bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] transition-all duration-300 rounded-3xl p-6 text-center space-y-4 shadow-glass-card backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white">¿Necesitas detalles completos?</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Descarga mi currículum profesional actualizado para conocer mi stack completo de servicios.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <a href="/docs/Carlos Rivadeneyra cv 06-26.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Descargar CV
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
