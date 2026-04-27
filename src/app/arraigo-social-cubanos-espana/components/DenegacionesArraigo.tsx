"use client";

import { XCircle, Check, Search, Gavel, RefreshCw } from "lucide-react";

export function DenegacionesArraigo() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="md:w-1/3 flex flex-col gap-6">
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold tracking-tight text-black leading-[1.1]">
              Y si sale que no... ¿qué?
            </h2>
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="md:w-2/3 flex flex-col gap-6">
            <p className="text-[16px] md:text-[18px] font-medium text-black/70 leading-relaxed">
              Vamos a ser claros: el arraigo social tiene una tasa de denegación significativa en España. Los motivos más comunes son documentación incompleta, un contrato de trabajo que no cumple los requisitos, o no lograr demostrar la permanencia continuada de 2 años.
            </p>
            
            <p className="text-[16px] md:text-[18px] font-bold text-black leading-relaxed">
              Nosotros minimizamos ese riesgo porque revisamos todo <span className="underline decoration-[#F5A524] decoration-2 underline-offset-4">antes</span> de presentar. Pero si a pesar de eso te deniegan, no te dejamos solo:
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="bg-[#FAFAFA] border border-black/5 p-4 rounded-xl flex items-start gap-3">
                <Search className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <p className="text-[15px] font-medium text-black/70">
                  <strong className="text-black">1. Analizamos la resolución</strong> para entender el motivo exacto por el que Extranjería ha denegado la solicitud.
                </p>
              </div>
              <div className="bg-[#FAFAFA] border border-black/5 p-4 rounded-xl flex items-start gap-3">
                <Gavel className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <p className="text-[15px] font-medium text-black/70">
                  <strong className="text-black">2. Evaluamos los recursos.</strong> Vemos si procede interponer un recurso de reposición o un recurso contencioso-administrativo.
                </p>
              </div>
              <div className="bg-[#FAFAFA] border border-black/5 p-4 rounded-xl flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <p className="text-[15px] font-medium text-black/70">
                  <strong className="text-black">3. Trazamos un plan B.</strong> Si no procede el recurso, te orientamos sobre cuándo y cómo volver a solicitar con éxito.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-black/5 rounded-2xl p-6 flex flex-col gap-3 border border-black/10">
              <span className="text-[14px] font-bold text-black uppercase tracking-wider">Nuestro código ético</span>
              <p className="text-[15px] font-medium text-black/70 leading-relaxed">
                <strong className="text-black">Lo que NO hacemos:</strong> presentar expedientes que sabemos que van a ser denegados solo para cobrar los honorarios. Si vemos en la evaluación inicial que no cumples, te lo decimos de frente y te orientamos sobre qué hacer primero.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
