"use client";

import { Clock, Heart, FileText, AlertCircle } from "lucide-react";

export function ViasNacionalidad() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex bg-black/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">¿Por qué vía puedes solicitar?</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            No todas las vías son iguales.<br />La tuya depende de tu situación.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Vía 1: 10 años */}
          <div className="bg-[#FAFAFA] border border-black/10 rounded-[32px] p-8 shadow-sm flex flex-col h-full">
            <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-[22px] font-bold text-black mb-2 leading-tight">
              "Llevo 10 años con residencia legal"
            </h3>
            <span className="text-[14px] font-bold text-black/40 uppercase tracking-wider mb-6 block">Nacionalidad por residencia (vía general)</span>
            
            <div className="flex-1 flex flex-col gap-4 text-[15px] leading-relaxed">
              <p><strong className="text-black">Para quién:</strong> cubanos con 10 años de residencia legal y continuada en España.</p>
              <p><strong className="text-black">Requisitos:</strong> residencia legal ininterrumpida, buena conducta cívica, grado suficiente de integración (examen CCSE).</p>
              <p><strong className="text-black">Documentos cubanos:</strong> certificado de nacimiento legalizado + antecedentes penales legalizados.</p>
            </div>
            
            <div className="mt-8 bg-black/5 rounded-2xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-black/50 shrink-0 mt-0.5" />
              <p className="text-[14px] font-medium text-black/70 leading-relaxed">
                <strong className="text-black">Lo que debes saber:</strong> las ausencias de España no pueden superar 90 días por año ni 6 meses continuados. Si sales mucho, puede afectar.
              </p>
            </div>
          </div>

          {/* Vía 2: Matrimonio */}
          <div className="bg-black border border-black rounded-[32px] p-8 shadow-xl flex flex-col h-full relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-[40px] pointer-events-none" />
            <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-[22px] font-bold text-white mb-2 leading-tight relative z-10">
              "Estoy casado/a con un/a español/a"
            </h3>
            <span className="text-[14px] font-bold text-white/40 uppercase tracking-wider mb-6 block relative z-10">Plazo reducido — 1 año</span>
            
            <div className="flex-1 flex flex-col gap-4 text-[15px] leading-relaxed text-white/70 relative z-10">
              <p><strong className="text-white">Para quién:</strong> cubanos casados con ciudadano/a español/a con 1 año de residencia legal en España.</p>
              <p><strong className="text-white">Requisitos:</strong> matrimonio vigente, convivencia real (no vale solo el papel), 1 año de residencia legal.</p>
              <p><strong className="text-white">Documentos cubanos:</strong> certificado de nacimiento + antecedentes penales + certificado de matrimonio (si fue en Cuba). Todos legalizados en MINJUS y Consulado.</p>
            </div>
            
            <div className="mt-8 bg-white/10 border border-white/10 rounded-2xl p-4 flex items-start gap-3 relative z-10">
              <AlertCircle className="w-5 h-5 text-[#F5A524] shrink-0 mt-0.5" />
              <p className="text-[14px] font-medium text-white/80 leading-relaxed">
                <strong className="text-white">Importante:</strong> si el matrimonio fue en Cuba, necesitas legalizarlo para inscribirlo en el Registro Civil español antes de solicitar la nacionalidad.
              </p>
            </div>
          </div>

          {/* Vía 3: Ascendencia */}
          <div className="bg-[#FAFAFA] border border-black/10 rounded-[32px] p-8 shadow-sm flex flex-col h-full">
            <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-[22px] font-bold text-black mb-2 leading-tight">
              "Tengo ascendencia española"
            </h3>
            <span className="text-[14px] font-bold text-black/40 uppercase tracking-wider mb-6 block">Nacionalidad por origen (LMD)</span>
            
            <div className="flex-1 flex flex-col gap-4 text-[15px] leading-relaxed">
              <p><strong className="text-black">Para quién:</strong> cubanos con padres o abuelos españoles de origen (incluso si perdieron la nacionalidad en algún momento).</p>
              <p><strong className="text-black">Requisitos:</strong> acreditar la línea de ascendencia española con documentos oficiales del Registro Civil español.</p>
              <p><strong className="text-black">Lo que debes saber:</strong> esta vía tiene plazos específicos y documentación particular. Evaluamos minuciosamente si aplicas.</p>
            </div>
            
            <div className="mt-8 bg-black/5 rounded-2xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-black/50 shrink-0 mt-0.5" />
              <p className="text-[14px] font-medium text-black/70 leading-relaxed">
                <strong className="text-black">Nota:</strong> a diferencia de las otras vías, esta vía por la Ley de Memoria Democrática no requiere haber vivido en España.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
