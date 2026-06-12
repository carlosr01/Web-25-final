"use client";

import { useState } from "react";
import { Calculator, Clock, Coins, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function ROICalculator() {
  const [analysts, setAnalysts] = useState(5);
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(50);

  // ROI calculations
  const currentCost = analysts * hours * 52 * rate;
  const savings = currentCost * 0.30;
  const optimizedCost = currentCost * 0.70;
  const hoursRecovered = Math.round(analysts * hours * 52 * 0.30);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat("es-PE").format(val);
  };

  return (
    <section id="roi-calculator" className="py-10 bg-transparent relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[rgba(var(--glow-rgb),0.03)] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Calculadora de Ahorro Operativo con IA
            </h2>
            <p className="max-w-2xl mx-auto text-slate-200 text-base md:text-lg leading-relaxed">
              Descubre el impacto financiero directo al automatizar tus procesos manuales, implementar asistentes RAG y optimizar la gobernanza de datos en tu equipo.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders Console Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/[0.02] border border-white/5 shadow-glass-card relative overflow-hidden backdrop-blur-md rounded-3xl p-8 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[rgba(var(--glow-rgb),0.02)] rounded-bl-full pointer-events-none" />
            
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-[color:var(--border-strong)] flex items-center justify-center text-primary shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Parámetros Operativos</h3>
                  <p className="text-xs text-text-subtle">Ingresa los datos actuales de tu equipo</p>
                </div>
              </div>

              {/* Slider 1: Analysts */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="range-analysts" className="text-sm font-medium text-slate-200">
                    Número de Analistas / Operarios
                  </label>
                  <span className="text-lg font-bold text-white">{analysts} personas</span>
                </div>
                <input
                  id="range-analysts"
                  type="range"
                  min="1"
                  max="50"
                  value={analysts}
                  onChange={(e) => setAnalysts(Number(e.target.value))}
                  className="w-full h-1.5 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-slate-400 transition-all focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #64748b ${((analysts - 1) / 49) * 100}%, #1e293b ${((analysts - 1) / 49) * 100}%)`
                  }}
                />
              </div>

              {/* Slider 2: Hours per Week */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="range-hours" className="text-sm font-medium text-slate-200">
                    Horas de Tarea Manual / Semana
                  </label>
                  <span className="text-lg font-bold text-white">{hours} hrs / pers</span>
                </div>
                <input
                  id="range-hours"
                  type="range"
                  min="5"
                  max="40"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-1.5 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-slate-400 transition-all focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #64748b ${((hours - 5) / 35) * 100}%, #1e293b ${((hours - 5) / 35) * 100}%)`
                  }}
                />
              </div>

              {/* Slider 3: Hourly Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="range-rate" className="text-sm font-medium text-slate-200">
                    Costo Horario Promedio (S/)
                  </label>
                  <span className="text-lg font-bold text-white">S/ {rate} / hr</span>
                </div>
                <input
                  id="range-rate"
                  type="range"
                  min="20"
                  max="150"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-1.5 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-slate-400 transition-all focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #64748b ${((rate - 20) / 130) * 100}%, #1e293b ${((rate - 20) / 130) * 100}%)`
                  }}
                />
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-text-subtle flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-secondary-fg flex-shrink-0 mt-0.5" />
              <span>* Fórmulas basadas en un ahorro promedio del 30% en eficiencia operativa tras integrar asistentes inteligentes de IA (deflection, RAG, y automatización segura).</span>
            </div>
          </div>

          {/* Results Visual Console Card */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white/[0.02] border border-white/5 shadow-glass-card relative overflow-hidden backdrop-blur-md rounded-3xl p-8 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
            {/* Scoped CSS to style native inputs smoothly */}
            <style dangerouslySetInnerHTML={{ __html: `
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0 0 10px rgba(var(--glow-rgb), 0.8);
                transition: transform 0.2s;
              }
              input[type="range"]::-webkit-slider-thumb:hover {
                transform: scale(1.2);
              }
            `}} />
            
            <div className="space-y-8">
              {/* Stat Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Projected Annual Savings Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group shadow-[0_4px_20px_rgba(16,185,129,0.05)] transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_4px_30px_rgba(16,185,129,0.12)]">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[rgba(16,185,129,0.02)] rounded-bl-full pointer-events-none" />
                  <Coins className="w-5 h-5 text-emerald-400 mb-4" />
                  <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider block">
                    Ahorro Anual Proyectado
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-emerald-400 block mt-1 tracking-tight">
                    {formatCurrency(savings)}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5 mt-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    30% de optimización de costos
                  </span>
                </div>

                {/* Recovered Hours Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-slate-500/40 hover:shadow-[0_4px_30px_rgba(100,116,139,0.08)]">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-slate-500/5 rounded-bl-full pointer-events-none" />
                  <Clock className="w-5 h-5 text-slate-400 mb-4" />
                  <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider block">
                    Horas Recuperadas / Año
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-white block mt-1 tracking-tight">
                    {formatNumber(hoursRecovered)} hrs
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium block mt-2">
                    Para tareas de alta estrategia
                  </span>
                </div>
              </div>

              {/* Comparative Progress Bar Chart */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-5">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Comparativo de Costos Anuales</h4>
                
                {/* Costo Actual Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-text-subtle font-medium">
                    <span>Costo Operativo Actual</span>
                    <span className="text-slate-200">{formatCurrency(currentCost)}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden border border-white/5">
                    <div 
                      className="h-full bg-slate-600 rounded-full transition-all duration-700 ease-out-expo shadow-[0_0_10px_rgba(100,116,139,0.3)]" 
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                {/* Costo Optimizado Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Costo Optimizado con IA
                    </span>
                    <span className="text-emerald-400 font-bold">{formatCurrency(optimizedCost)}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden border border-white/5">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-700 ease-out-expo shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Premium CTA Box */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/20">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-white text-base">¿Listo para activar este ahorro?</h4>
                <p className="text-xs text-text-subtle">Plan de IA y demo de arquitectura en menos de 14 días.</p>
              </div>
              
              <Button
                asChild
                size="lg"
                className="group/btn w-full sm:w-auto rounded-full border border-[color:var(--border-strong)] bg-primary text-primary-fg shadow-floating-card hover:bg-[color:rgba(124,58,237,0.88)] transition hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <a
                  href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Kickoff IA
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
