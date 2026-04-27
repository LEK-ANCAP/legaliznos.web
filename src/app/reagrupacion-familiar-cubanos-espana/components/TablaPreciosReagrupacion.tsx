"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";

const pricingData = [
  {
    title: "Evaluación inicial",
    price: "Gratis",
    desc: "Te decimos si cumples los requisitos antes de que gastes un euro.",
    features: [
      "Revisión de tu nómina e IRPF",
      "Cálculo exacto del IPREM",
      "Viabilidad según tu vivienda y provincia"
    ],
    highlight: false
  },
  {
    title: "Reagrupación completa (1 familiar)",
    price: "Desde [X]€",
    desc: "El servicio estrella. Gestionamos todo el proceso en ambos países.",
    features: [
      "Expediente en España (Fase 1)",
      "Coordinación de documentos (Cuba)",
      "Preparación de cita consular (Fase 2)",
      "Seguimiento hasta concesión del visado"
    ],
    highlight: true
  },
  {
    title: "Reagrupación + Legalización Docs Cuba",
    price: "Desde [X]€",
    desc: "Si tu familiar no tiene sus documentos listos en Cuba.",
    features: [
      "Todo lo incluido en la Reagrupación completa",
      "Obtención y legalización de nacimiento",
      "Legalización de matrimonio (si aplica)",
      "Antecedentes penales legalizados"
    ],
    highlight: false
  }
];

export function TablaPreciosReagrupacion() {
  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="precios">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex w-fit bg-white border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">Transparencia Total</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            Inversión clara para reunir a tu familia.
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed">
            Un servicio integral que coordina tu expediente aquí y el visado allá.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5A524] text-black text-[12px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
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

        {/* Familiar Adicional Banner */}
        <div className="bg-white border border-[#25D366]/30 rounded-2xl p-6 flex items-center justify-between gap-4 mb-12 shadow-[0_4px_20px_rgba(37,211,102,0.05)] max-w-4xl mx-auto">
          <div>
            <p className="text-[16px] font-bold text-black">¿Vas a reagrupar a más de un familiar a la vez?</p>
            <p className="text-[14px] font-medium text-black/60 mt-1">Por ejemplo: esposa y dos hijos.</p>
          </div>
          <div className="shrink-0 text-right">
            <span className="block text-[18px] font-bold text-[#25D366]">+[X]€</span>
            <span className="block text-[13px] font-medium text-black/50">Por cada familiar extra</span>
          </div>
        </div>

        {/* Disclaimer y Pago */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center mt-8 md:mt-12">
          <div className="flex-1 w-full">
            <div className="bg-black/5 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start gap-3 md:gap-4">
              <AlertCircle className="w-5 h-5 text-black shrink-0 sm:mt-0.5" />
              <div className="flex flex-col gap-2">
                <p className="text-[14px] md:text-[15px] text-black font-bold mb-1">Lo que NO incluyen los precios</p>
                <ul className="text-[13px] md:text-[14px] text-black/70 font-medium leading-relaxed space-y-1.5">
                  <li>• Tasa oficial de Extranjería (~38€ por familiar).</li>
                  <li>• Tasas consulares para el visado en La Habana (variable).</li>
                </ul>
                <p className="text-[13px] md:text-[14px] text-black/70 font-medium mt-2 italic">
                  Te indicamos el coste total exacto con las tasas actualizadas antes de firmar nada.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-px md:h-32 bg-black/10 shrink-0 hidden md:block" />
          <div className="shrink-0 md:max-w-[280px]">
            <p className="text-[15px] text-black/80 font-bold mb-2">Forma de pago</p>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-6">
              Posibilidad de pago fraccionado adaptado a las dos fases del proceso (Fase España / Fase Cuba).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
