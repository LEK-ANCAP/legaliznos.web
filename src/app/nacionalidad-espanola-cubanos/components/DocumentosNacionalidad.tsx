"use client";

import { Link } from "@heroui/react";
import { ArrowRight, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

export function DocumentosNacionalidad() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            El expediente pide más documentos de los que crees.
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto">
            El secreto para no desesperarse es el orden. Te los hemos organizado por urgencia, no por tipo.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          
          {/* Bloque 1: Urgente */}
          <div className="bg-[#FFF8F0] border border-[#F5A524]/20 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A524]/10 rounded-full blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="bg-white/80 p-2 rounded-xl border border-[#F5A524]/20">
                <AlertTriangle className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-black">Consigue primero (los que más tardan)</h3>
            </div>
            
            <div className="flex flex-col gap-4 relative z-10">
              <div className="bg-white border border-black/5 rounded-2xl p-5 flex items-start md:items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F5A524] shrink-0 mt-2 md:mt-0" />
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
                  <span className="text-[16px] font-bold text-black">Certificado de nacimiento cubano</span>
                  <span className="text-[13px] font-bold text-[#F5A524] bg-[#F5A524]/10 px-3 py-1 rounded-full w-fit">Tarda 30-45 días</span>
                </div>
              </div>
              <div className="bg-white border border-black/5 rounded-2xl p-5 flex items-start md:items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F5A524] shrink-0 mt-2 md:mt-0" />
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
                  <span className="text-[16px] font-bold text-black">Certificado de antecedentes penales cubano</span>
                  <span className="text-[13px] font-bold text-[#F5A524] bg-[#F5A524]/10 px-3 py-1 rounded-full w-fit">Tarda 30-45 días</span>
                </div>
              </div>
              <p className="text-[14px] text-black/60 font-medium px-2 mt-1">
                * Ambos deben estar estrictamente legalizados por el MINJUS y el Consulado de España en La Habana.
              </p>
            </div>
          </div>

          {/* Bloque 2: Después */}
          <div className="bg-[#FAFAFA] border border-black/5 rounded-3xl p-6 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl border border-black/5">
                <CheckCircle2 className="w-6 h-6 text-black/40" />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-black">Prepara después (más rápido)</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-black/5 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black/30 shrink-0 mt-2" />
                <span className="text-[15px] font-medium text-black/80">Certificado de empadronamiento histórico.</span>
              </div>
              <div className="bg-white border border-black/5 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black/30 shrink-0 mt-2" />
                <span className="text-[15px] font-medium text-black/80">Antecedentes penales de España (Ministerio de Justicia).</span>
              </div>
              <div className="bg-white border border-black/5 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black/30 shrink-0 mt-2" />
                <span className="text-[15px] font-medium text-black/80">Aprobación del examen CCSE (conocimientos constitucionales).</span>
              </div>
              <div className="bg-white border border-black/5 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black/30 shrink-0 mt-2" />
                <span className="text-[15px] font-medium text-black/80">Aprobación del DELE A2 <span className="text-black/50">(los cubanos suelen estar exentos al ser hispanohablantes)</span>.</span>
              </div>
            </div>
          </div>

          {/* Consejo Práctico */}
          <div className="bg-black rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-start gap-4 relative z-10 w-full md:w-2/3">
              <Lightbulb className="w-8 h-8 text-[#F5A524] shrink-0" />
              <div className="flex flex-col gap-2">
                <span className="text-[16px] font-bold text-white">Consejo práctico de nuestros expertos</span>
                <p className="text-[15px] font-medium text-white/70 leading-relaxed">
                  "Empieza siempre por los documentos cubanos. Son los que más tardan y los que más problemas dan. Todo lo demás (exámenes, padrón) se puede ir preparando y aprobando mientras esperamos a que lleguen las legalizaciones de Cuba."
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-end">
              <Link 
                href="/legalizacion-documentos-cubanos"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-[14px] font-bold transition-transform hover:-translate-y-0.5"
              >
                Legalizar mis documentos ahora
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
