"use client";

import { Heart, Baby, Users, Activity } from "lucide-react";

export function AQuienTraer() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex bg-black/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">¿A quién puedes traer?</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            No todos los familiares son reagrupables.
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto">
            Esto es lo que dice la ley exactamente sobre a quién puedes reagrupar y qué te van a pedir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Cónyuge */}
          <div className="bg-[#FAFAFA] border border-black/10 rounded-[32px] p-8 shadow-sm flex flex-col h-full">
            <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-[22px] font-bold text-black mb-4 leading-tight">
              Cónyuge o pareja registrada
            </h3>
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed">
              <p><strong className="text-black">Requisito:</strong> matrimonio legal o pareja registrada. Si el matrimonio fue en Cuba, debe estar legalizado e inscrito en el Registro Civil español o Consulado correspondiente.</p>
              <div className="bg-white p-4 rounded-xl border border-black/5 mt-2">
                <p><strong className="text-black block mb-1">Documentos cubanos:</strong> certificado de matrimonio legalizado, certificado de nacimiento legalizado, antecedentes penales legalizados.</p>
              </div>
            </div>
          </div>

          {/* Hijos menores */}
          <div className="bg-[#FAFAFA] border border-black/10 rounded-[32px] p-8 shadow-sm flex flex-col h-full">
            <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <Baby className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-[22px] font-bold text-black mb-4 leading-tight">
              Hijos menores de 18 años
            </h3>
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed">
              <p><strong className="text-black">Requisito:</strong> ser padre/madre con la patria potestad. Si el otro progenitor está en Cuba (o en otro país), puede ser necesario un poder notarial o consentimiento expreso para que el menor resida en España.</p>
              <div className="bg-white p-4 rounded-xl border border-black/5 mt-2">
                <p><strong className="text-black block mb-1">Documentos cubanos:</strong> certificado de nacimiento legalizado del menor. Antecedentes penales legalizados (solo si el menor tiene más de 16 años).</p>
              </div>
            </div>
          </div>

          {/* Padres */}
          <div className="bg-black border border-black rounded-[32px] p-8 shadow-xl flex flex-col h-full relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-[40px] pointer-events-none" />
            <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-[22px] font-bold text-white mb-4 leading-tight relative z-10">
              Padres (ascendientes)
            </h3>
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-white/70 relative z-10">
              <p><strong className="text-white">Requisito:</strong> generalmente necesitas tener tarjeta de <strong className="text-white">residencia de larga duración</strong> (5 años en España). Debes demostrar de forma fehaciente que tus padres dependen económicamente de ti mediante el envío de remesas durante el último año.</p>
              <p className="text-[#F5A524] font-medium italic">Lo que debes saber: es la reagrupación más difícil de conseguir. Los requisitos económicos son más altos y Extranjería es muy estricta. Pero preparándolo bien, se puede hacer.</p>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 mt-2">
                <p><strong className="text-white block mb-1">Documentos cubanos:</strong> certificado de nacimiento legalizado del reagrupante (para demostrar vínculo), certificado de nacimiento legalizado del padre/madre, antecedentes penales legalizados.</p>
              </div>
            </div>
          </div>

          {/* Hijos mayores con discapacidad */}
          <div className="bg-[#FAFAFA] border border-black/10 rounded-[32px] p-8 shadow-sm flex flex-col h-full">
            <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <Activity className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-[22px] font-bold text-black mb-4 leading-tight">
              Hijos mayores de 18 con discapacidad
            </h3>
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed">
              <p><strong className="text-black">Requisito:</strong> acreditar médica y legalmente la discapacidad, y demostrar que el hijo no es objetivamente capaz de proveer a sus propias necesidades debido a su estado de salud.</p>
              <div className="bg-white p-4 rounded-xl border border-black/5 mt-2">
                <p><strong className="text-black block mb-1">Documentos clave:</strong> toda la documentación médica debidamente legalizada, informes periciales, certificado de nacimiento y antecedentes penales (todo legalizado en MINJUS y MINREX).</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
