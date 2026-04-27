"use client";

import { MapPin, ArrowDown, CheckCircle2 } from "lucide-react";

export function ProcesoReagrupacion() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            Un trámite que ocurre en dos países a la vez.
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto">
            La reagrupación no es un solo trámite, son dos fases conectadas. Así lo gestionamos paso a paso.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          
          {/* FASE 1: ESPAÑA */}
          <div className="flex-1 bg-white border border-black/5 rounded-[32px] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-black/5">
              <div className="bg-[#FAFAFA] p-3 rounded-2xl border border-black/5">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-black/40 tracking-wider uppercase block mb-1">Fase 1 (Tú)</span>
                <h3 className="text-[22px] font-bold text-black leading-tight">En España</h3>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-[14px] shrink-0 mt-1">1</div>
                <div>
                  <p className="font-bold text-black text-[16px]">Revisión de viabilidad</p>
                  <p className="text-[14px] font-medium text-black/60 mt-1">Verificamos tus medios económicos, vivienda y tipo de residencia actual.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-[14px] shrink-0 mt-1">2</div>
                <div>
                  <p className="font-bold text-black text-[16px]">Preparación del expediente</p>
                  <p className="text-[14px] font-medium text-black/60 mt-1">Reunimos empadronamiento, contrato de alquiler, nóminas, vida laboral e IRPF.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-[14px] shrink-0 mt-1">3</div>
                <div>
                  <p className="font-bold text-black text-[16px]">Presentación en Extranjería</p>
                  <p className="text-[14px] font-medium text-black/60 mt-1">Presentamos telemáticamente a través de nuestro registro profesional.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#FFF8F0] p-4 rounded-2xl border border-[#F5A524]/20 mt-2">
                <div className="w-8 h-8 rounded-full bg-[#F5A524] text-black flex items-center justify-center font-bold text-[14px] shrink-0 mt-1">4</div>
                <div>
                  <p className="font-bold text-black text-[16px]">Resolución Favorable</p>
                  <p className="text-[14px] font-bold text-[#F5A524] mt-1">Tarda de 3 a 6 meses (según provincia)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Flecha conectora (Desktop) */}
          <div className="hidden lg:flex items-center justify-center shrink-0">
            <ArrowRightIcon className="w-8 h-8 text-black/20" />
          </div>

          {/* Flecha conectora (Mobile) */}
          <div className="flex lg:hidden justify-center my-[-10px] relative z-10">
            <div className="bg-[#FAFAFA] p-2 rounded-full">
              <ArrowDown className="w-6 h-6 text-black/20" />
            </div>
          </div>

          {/* FASE 2: CUBA */}
          <div className="flex-1 bg-black border border-black rounded-[32px] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10 relative z-10">
              <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-white/40 tracking-wider uppercase block mb-1">Fase 2 (Tu familiar)</span>
                <h3 className="text-[22px] font-bold text-white leading-tight">En Cuba</h3>
              </div>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-[14px] shrink-0 mt-1">5</div>
                <div>
                  <p className="font-bold text-white text-[16px]">Cita en el Consulado</p>
                  <p className="text-[14px] font-medium text-white/60 mt-1">Con la resolución favorable en mano, tu familiar pide cita. <span className="text-[#F5A524]">Aquí es donde el proceso suele atascarse.</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-[14px] shrink-0 mt-1">6</div>
                <div>
                  <p className="font-bold text-white text-[16px]">Asistencia a la cita</p>
                  <p className="text-[14px] font-medium text-white/60 mt-1">Acude con toda la documentación legalizada. La revisamos antes para que no haya fallos.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-[14px] shrink-0 mt-1">7</div>
                <div>
                  <p className="font-bold text-white text-[16px]">Concesión del visado</p>
                  <p className="text-[14px] font-medium text-white/60 mt-1">El Consulado tarda entre 15 y 60 días en emitir la respuesta final y estampar el visado.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#25D366]/10 p-4 rounded-2xl border border-[#25D366]/20 mt-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold text-[14px] shrink-0 mt-1">8</div>
                <div>
                  <p className="font-bold text-white text-[16px]">Viaje a España</p>
                  <p className="text-[14px] font-bold text-[#25D366] mt-1">¡Reagrupación conseguida!</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Banner inferior */}
        <div className="mt-12 bg-white border border-black/5 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-3xl mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8 text-[#25D366] shrink-0" />
          <p className="text-[15px] font-medium text-black/70 leading-relaxed">
            <strong className="text-black">Nosotros gestionamos ambas fases.</strong> En España preparamos y presentamos el expediente. En Cuba, nuestro equipo coordina los documentos, las legalizaciones y asiste en la preparación consular. Todo integrado.
          </p>
        </div>

      </div>
    </section>
  );
}

// Icono simple para la flecha desktop
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
