"use client";

import { Calendar, RefreshCcw, Zap, AlertCircle } from "lucide-react";

export function CambiosReglamento() {
  const currentMonthYear = new Date().toLocaleDateString("es-ES", { month: "long", year: "numeric" });

  return (
    <section className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Column: Context */}
          <div className="md:w-1/3 flex flex-col gap-6">
            <div className="inline-flex bg-black/5 rounded-full w-fit px-4 py-1.5">
              <span className="text-[13px] font-bold text-black tracking-tight uppercase">Nuevo Reglamento 2026</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-tight text-black leading-[1.1]">
              El nuevo reglamento de extranjería te beneficia.
            </h2>
            <p className="text-[16px] md:text-[18px] font-medium text-black/60 leading-relaxed">
              Esto es lo que cambió y por qué ahora es el mejor momento para regularizar tu situación en España.
            </p>
          </div>

          {/* Right Column: Cards */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Cambio 1 */}
            <div className="bg-white border border-black/10 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">De 3 años a 2 años</h3>
                <p className="text-[15px] font-medium text-black/60 leading-relaxed">
                  Antes necesitabas 3 años de permanencia. Ahora son 2 años. Si entraste a España antes de abril de 2024, ya cumples el plazo.
                </p>
              </div>
            </div>

            {/* Cambio 2 */}
            <div className="bg-white border border-black/10 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
                <RefreshCcw className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Renovación de 4 años</h3>
                <p className="text-[15px] font-medium text-black/60 leading-relaxed">
                  Antes tu primer arraigo era de 1 año y las renovaciones de 2. Ahora la primera renovación es de 4 años. Llegarás más rápido a la larga duración.
                </p>
              </div>
            </div>

            {/* Cambio 3 (Span 2 cols on md) */}
            <div className="md:col-span-2 bg-[#FFF8F0] border border-[#F5A524]/20 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden items-start">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F5A524]/10 rounded-full blur-[40px] pointer-events-none" />
              <div className="w-12 h-12 bg-white/60 border border-[#F5A524]/20 rounded-2xl flex items-center justify-center shrink-0 relative z-10">
                <Zap className="w-6 h-6 text-[#F5A524] fill-current" />
              </div>
              <div className="relative z-10">
                <h3 className="text-[18px] font-bold text-[#F5A524] mb-2">Regularización extraordinaria (hasta 30 junio 2026)</h3>
                <p className="text-[15px] font-medium text-black/70 leading-relaxed">
                  Si llevas en España desde antes del 1 de enero de 2026 y no tienes papeles, hay un proceso extraordinario abierto temporalmente. Si aplicas, te habilitan a trabajar desde el momento en que presentas la solicitud.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 md:mt-16 bg-black/5 rounded-2xl p-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-black/50 shrink-0 mt-0.5" />
          <p className="text-[13px] md:text-[14px] font-medium text-black/50 leading-relaxed">
            <strong className="text-black/60">Nota:</strong> La normativa de extranjería cambia constantemente. Esta información está actualizada a {currentMonthYear}. Si lees esto meses después, escríbenos para confirmar que sigue vigente.
          </p>
        </div>

      </div>
    </section>
  );
}
