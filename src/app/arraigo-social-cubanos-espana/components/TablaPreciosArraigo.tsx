"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";

const pricingData = [
  {
    title: "Solo evaluación y orientación",
    price: "Gratis",
    desc: "Te decimos si cumples, qué te falta, y cuánto costaría. Sin compromiso.",
    features: [
      "Revisión de tu caso particular",
      "Cálculo de plazos y viabilidad",
      "Presupuesto cerrado sin sorpresas"
    ],
    highlight: false
  },
  {
    title: "Arraigo social (Expediente completo)",
    price: "Desde [X]€",
    desc: "Si ya tienes todos tus documentos listos y legalizados.",
    features: [
      "Revisión de toda la documentación",
      "Cumplimentación de tasas y formularios",
      "Presentación telemática oficial",
      "Seguimiento hasta la resolución"
    ],
    highlight: true
  },
  {
    title: "Arraigo social + Documentos de Cuba",
    price: "Desde [X]€",
    desc: "La gestión integral. Nosotros nos encargamos de todo.",
    features: [
      "Todo lo incluido en el Expediente completo",
      "Obtención de Antecedentes Penales en Cuba",
      "Legalización en MINJUS (Cuba)",
      "Legalización en Consulado de España (La Habana)"
    ],
    highlight: false
  }
];

export function TablaPreciosArraigo() {
  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="precios">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex w-fit bg-white border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">Transparencia</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            Qué pagas, qué incluye, y qué no.
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed">
            Sin letras pequeñas. Elige el nivel de servicio que necesitas para presentar tu solicitud de arraigo social.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {pricingData.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-3xl p-8 flex flex-col h-full border transition-all ${
                plan.highlight 
                  ? "bg-black border-black text-white shadow-xl lg:-translate-y-2 relative" 
                  : "bg-white border-black/10 text-black shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5A524] text-black text-[12px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Más solicitado
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-[20px] font-bold mb-2 ${plan.highlight ? "text-white" : "text-black"}`}>
                  {plan.title}
                </h3>
                <p className={`text-[14px] font-medium leading-relaxed ${plan.highlight ? "text-white/70" : "text-black/60"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-[2.5rem] font-bold tracking-tight ${plan.highlight ? "text-white" : "text-black"}`}>
                  {plan.price}
                </span>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-[#25D366]" : "text-black/30"}`} />
                    <span className={`text-[15px] font-medium leading-snug ${plan.highlight ? "text-white/90" : "text-black/80"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer y Pago */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center mt-8 md:mt-12">
          <div className="flex-1 w-full">
            <div className="bg-black/5 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start gap-3 md:gap-4">
              <AlertCircle className="w-5 h-5 text-black shrink-0 sm:mt-0.5" />
              <div className="flex flex-col gap-2">
                <p className="text-[14px] md:text-[15px] text-black font-bold mb-1">Lo que NO incluyen los precios (sin sorpresas)</p>
                <ul className="text-[13px] md:text-[14px] text-black/70 font-medium leading-relaxed space-y-1.5">
                  <li>• <strong className="text-black">Tasas de Extranjería</strong> (tasa 790 código 052: actualmente ~38€ — te indicamos el importe exacto al tramitar).</li>
                  <li>• <strong className="text-black">Informe de inserción social</strong> (lo emite tu Ayuntamiento o Comunidad Autónoma; nosotros te orientamos sobre cómo pedirlo).</li>
                  <li>• Certificado de antecedentes penales de otros países donde hayas residido (que no sean Cuba).</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-px md:h-32 bg-black/10 shrink-0 hidden md:block" />
          <div className="shrink-0 md:max-w-[280px]">
            <p className="text-[15px] text-black/80 font-bold mb-2">Forma de pago</p>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-6">
              50% al empezar. 50% cuando el expediente está listo para ser presentado en Extranjería. Aceptamos transferencia, Bizum y tarjeta.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
