"use client";

import { Clock, Eye, AlertTriangle } from "lucide-react";

export function PlazosNacionalidad() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col gap-10 items-start">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="w-16 h-16 bg-[#FAFAFA] rounded-2xl flex items-center justify-center border border-black/5 shrink-0">
              <Clock className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-tight text-black leading-[1.1]">
              El Ministerio tiene 1 año para resolver. En la práctica, es otro mundo.
            </h2>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="bg-black/5 rounded-2xl p-5 border border-black/10">
              <p className="text-[15px] font-medium text-black/70 leading-relaxed">
                La ley dice que el Ministerio de Justicia debe resolver en 1 año. Si no responde en ese plazo, opera la presunción favorable — técnicamente, tu nacionalidad está concedida por <strong className="text-black">silencio administrativo</strong>.
              </p>
            </div>
            
            <p className="text-[16px] md:text-[18px] font-medium text-black/70 leading-relaxed">
              Sin embargo, en la práctica, los tiempos varían enormemente según el año, el volumen de solicitudes y tu vía de presentación. En algunos momentos las resoluciones salen en 8-10 meses. En otros, pasan los 18 meses.
            </p>

            <div className="bg-white border border-black/10 rounded-2xl p-6 mt-2 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
              <div className="bg-black p-3 rounded-xl shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[16px] font-bold text-black">Lo que SÍ podemos hacer</h4>
                <p className="text-[15px] font-medium text-black/70 leading-relaxed">
                  Hacerte seguimiento constante del expediente para saber en qué fase está ("Pendiente de informes", "En calificación", etc.) y avisarte en cuanto haya un requerimiento o resolución.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <AlertTriangle className="w-5 h-5 text-[#F5A524] shrink-0 mt-0.5" />
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">
                <strong className="text-black">Nuestra garantía de honestidad:</strong> No prometemos acelerar al Ministerio de Justicia — absolutamente nadie puede hacer eso, desconfía de quien lo prometa. Lo que sí garantizamos es que no te enterarás de tu resolución 3 meses después de que la publicaran.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
