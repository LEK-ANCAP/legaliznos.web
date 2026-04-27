"use client";

import { Home, CalendarClock, FileWarning, ShieldAlert } from "lucide-react";

export function TrampasReagrupacion() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          <div className="md:w-1/3 flex flex-col gap-6">
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-tight text-black leading-[1.1]">
              La reagrupación tiene trampas ocultas.
            </h2>
            <div className="w-16 h-16 bg-[#FAFAFA] rounded-2xl flex items-center justify-center border border-black/5">
              <ShieldAlert className="w-8 h-8 text-[#F5A524]" />
            </div>
            <p className="text-[16px] font-medium text-black/60 leading-relaxed">
              No queremos asustarte, queremos prepararte. Estas son las tres razones principales por las que los expedientes se atascan o deniegan.
            </p>
          </div>

          <div className="md:w-2/3 flex flex-col gap-6">
            
            {/* Trampa 1 */}
            <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-sm">
              <div className="bg-white p-3 rounded-xl border border-black/5 shrink-0 mt-1">
                <Home className="w-6 h-6 text-black/60" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-bold text-black">Trampa 1: Informe de vivienda</h4>
                <p className="text-[15px] font-medium text-black/70 leading-relaxed">
                  Algunas comunidades autónomas exigen un "informe de adecuación de vivienda" (emitido por el ayuntamiento o notario) que acredite que tu casa tiene espacio suficiente para el familiar y cumple condiciones de habitabilidad. No todas lo piden, pero si la tuya sí, puede añadir 1-2 meses extra al proceso solo para conseguir el papel. Te lo confirmamos antes de empezar.
                </p>
              </div>
            </div>

            {/* Trampa 2 */}
            <div className="bg-black border border-black/10 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-xl">
              <div className="bg-white/10 p-3 rounded-xl border border-white/10 shrink-0 mt-1">
                <CalendarClock className="w-6 h-6 text-[#F5A524]" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-bold text-white">Trampa 2: El cuello de botella en La Habana</h4>
                <p className="text-[15px] font-medium text-white/70 leading-relaxed">
                  Las citas del Consulado de España en La Habana son el punto más lento y desesperante de todo el proceso. Puedes tener la resolución favorable en España en 3 meses, y luego esperar otros 3 meses para conseguir la cita consular. <strong className="text-white">Nadie puede controlar ni acelerar eso.</strong> Pero sí podemos preparar toda la documentación para que cuando salga la ansiada cita, tu familiar no pierda ni un segundo por un error técnico.
                </p>
              </div>
            </div>

            {/* Trampa 3 */}
            <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-sm">
              <div className="bg-white p-3 rounded-xl border border-black/5 shrink-0 mt-1">
                <FileWarning className="w-6 h-6 text-black/60" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-bold text-black">Trampa 3: Documentos caducados (efecto dominó)</h4>
                <p className="text-[15px] font-medium text-black/70 leading-relaxed">
                  Si el expediente en España tarda más de lo esperado en resolverse, o la cita en el Consulado se retrasa, los documentos cubanos que legalizaste al principio (que tienen fecha de caducidad) pueden vencerse antes de presentarlos. Lo prevenimos calculando los tiempos matemáticamente antes de mandar a pedir cada papel en Cuba.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
