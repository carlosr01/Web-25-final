"use client";

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

interface Project {
  title: string;
  sector: string;
  description: string;
  image: string;
  bullets: string[];
  link: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Precise and smooth 3D tilt based on cursor position relative to card center
    const maxTilt = 4; // elegant subtle perspective skew
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white/[0.02] hover:bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 hover:border-[color:var(--border-glow)] transition-all duration-300 shadow-glass-card"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(var(--glow-rgb), 0.12), 0 0 35px -5px rgba(var(--glow-rgb), 0.08)"
          : "",
        transition: isHovered
          ? "transform 0.08s ease-out, border-color 0.3s ease, box-shadow 0.3s ease"
          : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Spotlight neon glow trail */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, var(--accent-glow), transparent 80%)`,
          }}
        />
      )}
      
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-transparent" />
      </div>

      <div className="p-8">
        <div className="mb-3">
          <span className="text-sm text-secondary-fg font-medium uppercase tracking-wider">{project.sector}</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary-fg transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-300 mb-6 leading-relaxed text-sm">
          {project.description}
        </p>
        <ul className="space-y-2 text-slate-300 mb-6">
          {project.bullets.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary-fg flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/5 border border-white/10 hover:border-secondary-fg/40 text-secondary-fg hover:text-secondary-fg/80 hover:bg-[rgba(var(--glow-rgb),0.15)] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fg focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          Ver caso
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: 'Chatbot de Onboarding y Self-learning',
      sector: 'Banca / Finanzas',
      description: 'Diseñado y desplegado con Copilot Studio, conectado a políticas y catálogos internos para deflection de soporte y aceleración del aprendizaje del equipo.',
      image: '/assets/Robot Teacher Correcting Error.jpg',
      bullets: [
        'Deflection de soporte mediante Copilot Studio + FAQs',
        'Reducción drástica del tiempo de inducción del nuevo personal',
        'Definición de conectores y acciones con gobierno robusto de datos'
      ],
      link: 'https://crivadeneyra.com/casos/onboarding',
    },
    {
      title: 'Autoconsumo de Información NL ➔ SQL',
      sector: 'Banca / Inteligencia de Datos',
      description: 'Consultas guiadas con lenguaje natural a bases de datos SQL relacionales mediante conectores premium, prompts optimizados y políticas estrictas de guardrails y auditoría.',
      image: '/assets/Line Graph Black and White.jpg',
      bullets: [
        'Traducción segura de lenguaje natural a SQL optimizado',
        'Control de permisos granular por origen y rol del usuario',
        'Respuestas 100% trazables y auditables para auditorías financieras'
      ],
      link: 'https://crivadeneyra.com/casos/nl-to-sql',
    },
    {
      title: 'Modelado Semántico AI-Ready',
      sector: 'Inteligencia de Negocios / Fabric',
      description: 'Unificación de términos de negocio, relaciones y medidas DAX complejas, preparando la infraestructura analítica para la consulta conversacional y Microsoft Copilot.',
      image: '/assets/Performance Analysis Graphics Laptop.jpg',
      bullets: [
        'Medidas DAX de alta complejidad optimizadas para rapidez',
        'Discoverability conversacional para reportes dinámicos',
        'Integración nativa con Copilot Q&A corporativo'
      ],
      link: 'https://crivadeneyra.com/casos/modelamiento-semantico',
    },
    {
      title: 'Arquitectura RAG Corporativa',
      sector: 'Arquitectura de Datos / Azure',
      description: 'Diseño y despliegue de pipelines con Azure AI Search y Azure OpenAI, chunking inteligente, embeddings híbridos y telemetría avanzada de costos, precisión y latencia.',
      image: '/assets/Network Icons Wallpaper.jpg',
      bullets: [
        'Búsqueda semántica híbrida con Azure OpenAI + AI Search',
        'Telemetría en caliente de precisión, costo de tokens y latencia',
        'Implementación de estrictas políticas de acceso y seguridad corporativa'
      ],
      link: 'https://crivadeneyra.com/casos/rag-corporativo',
    }
  ]

  return (
    <section id="casos" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>Casos y resultados</h2>
          <p className="text-center text-slate-200 mb-16">
            De pilotos ágiles a despliegues productivos con alta disponibilidad. Impacto medible y robusto desde la primera semana.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
