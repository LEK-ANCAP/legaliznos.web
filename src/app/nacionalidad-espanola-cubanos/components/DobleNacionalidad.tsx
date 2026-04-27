"use client";

import { Globe2, ArrowRightLeft, ShieldAlert } from "lucide-react";

export function DobleNacionalidad() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="bg-black rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col gap-10 items-start">
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold tracking-tight text-white leading-[1.1]">
                ¿Pierdo la nacionalidad cubana?
              </h2>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <p className="text-[16px] md:text-[18px] font-medium text-white/80 leading-relaxed">
                La doble nacionalidad es la pregunta que todos hacen antes de dar el paso. La respuesta técnica tiene dos caras:
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
                  <ArrowRightLeft className="w-6 h-6 text-white/50 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[15px] font-bold text-white mb-1">Lo que dice Cuba vs España</p>
                    <p className="text-[14px] font-medium text-white/70 leading-relaxed">
                      Cuba no reconoce la doble nacionalidad. Al obtener la española, según la ley cubana vigente, pierdes la cubana. Sin embargo, <strong className="text-white">España sí reconoce la doble nacionalidad</strong> con países iberoamericanos, incluida Cuba. Desde el lado español, no hay absolutamente ningún problema.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 bg-[#F5A524]/10 border border-[#F5A524]/20 rounded-xl p-4">
                <ShieldAlert className="w-5 h-5 text-[#F5A524] shrink-0 mt-0.5" />
                <p className="text-[14px] font-medium text-white/80 leading-relaxed">
                  <strong className="text-[#F5A524]">En la práctica:</strong> una vez tengas el pasaporte español, viajas por el mundo con él. Si en el futuro necesitas hacer trámites dentro de Cuba, consulta con el consulado cubano correspondiente porque la situación legal o la interpretación aduanera puede haber cambiado. Es un tema que conviene conocer antes de decidir, pero que no debería frenarte si tu objetivo es consolidar tu vida y libertad de movimiento en Europa.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
