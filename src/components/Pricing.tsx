import React from 'react';
import { MessagesSquare, Percent, Wallet, ShieldCheck, Landmark } from 'lucide-react';

const pricingList = [
  {
    service: "Legalización documento cubano (completa)",
    price: "250€",
    time: "2-3 meses",
    includes: "Obtención + MINJUS + Consulado + envío a domicilio"
  },
  {
    service: "Legalización exprés",
    price: "350€",
    time: "1 mes",
    includes: "Lo mismo, con gestión prioritaria"
  },
  {
    service: "Solo Consulado (ya tienes MINJUS)",
    price: "150€",
    time: "3-6 semanas",
    includes: "Legalización consular + envío a domicilio"
  },
  {
    service: "Arraigo social (expediente completo)",
    price: "400€",
    time: "3-6 meses resolución",
    includes: "Evaluación + documentación + presentación + seguimiento"
  },
  {
    service: "Nacionalidad española",
    price: "500€",
    time: "12-18 meses",
    includes: "Expediente completo + docs cubanos + seguimiento"
  },
  {
    service: "Reagrupación familiar",
    price: "600€",
    time: "4-10 meses",
    includes: "Expediente España + coordinación Cuba + visado"
  },
  {
    service: "Visados desde Cuba",
    price: "Consultar",
    time: "Variable",
    includes: "Depende del tipo — evaluamos tu caso gratis"
  }
];

export function Pricing() {
  return (
    <section id="precios" className="relative py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-16 lg:mb-20 max-w-3xl">
          <div className="inline-flex w-fit bg-white border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">Precios</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Precios reales. <br className="hidden md:block"/>
            <span className="text-black/40">Sin la frase &apos;depende del caso&apos;.</span>
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl">
            Todos los precios son cerrados. Te decimos el total exacto antes de empezar para que no haya sorpresas. Además, puedes pagar en <strong className="text-black">2 cuotas sin intereses</strong>.
          </p>
        </div>

        {/* Pricing List (Modern Table) */}
        <div className="bg-white border-[8px] border-[#EAEAEA] rounded-[32px] p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] mb-12">
          
          {/* Table Header (Desktop Only) */}
          <div className="hidden md:flex border-b border-black/10 pb-4 mb-2 gap-6 px-4">
            <div className="w-[35%] text-[12px] font-extrabold text-black/40 uppercase tracking-wider">Servicio</div>
            <div className="w-[15%] text-[12px] font-extrabold text-black/40 uppercase tracking-wider">Desde</div>
            <div className="w-[20%] text-[12px] font-extrabold text-black/40 uppercase tracking-wider">Plazo Medio</div>
            <div className="w-[30%] text-[12px] font-extrabold text-black/40 uppercase tracking-wider">Incluye</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {pricingList.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row md:items-center py-6 gap-4 md:gap-6 px-4 group hover:bg-[#FAFAFA] rounded-xl transition-colors
                  ${index !== pricingList.length - 1 ? 'border-b border-black/5' : ''}
                `}
              >
                
                {/* Mobile Labels are implicit through structure, but we keep it clear */}
                <div className="md:w-[35%]">
                  <h4 className="text-[18px] md:text-[17px] font-bold text-black tracking-tight">{item.service}</h4>
                </div>
                
                <div className="flex items-center gap-3 md:w-[15%]">
                  <div className="bg-[#FAFAFA] group-hover:bg-white border border-black/5 rounded-lg px-3 py-1.5 flex items-center justify-center whitespace-nowrap shadow-sm transition-colors">
                      <span className="text-[15px] font-extrabold text-black tracking-tight">{item.price}</span>
                  </div>
                </div>

                <div className="md:w-[20%] flex items-center gap-2">
                  <span className="md:hidden text-[13px] font-bold text-black/40 uppercase tracking-wider">Plazo:</span>
                  <span className="text-[15px] font-medium text-black/60">{item.time}</span>
                </div>

                <div className="md:w-[30%] flex items-start gap-2">
                  <span className="md:hidden text-[13px] font-bold text-black/40 uppercase tracking-wider mt-0.5">Incluye:</span>
                  <span className="text-[15px] font-medium text-black/70 leading-snug block">{item.includes}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Unified Terms Card */}
        <div className="bg-black rounded-[32px] p-8 md:p-12 mb-16 shadow-2xl flex flex-col md:flex-row gap-10 md:gap-0">
          
          {/* Beneficios Extra */}
          <div className="flex-1 md:pr-12 md:py-2">
            <h4 className="font-extrabold text-white tracking-widest mb-8 uppercase text-[12px] opacity-60">Beneficios al contratar hoy</h4>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="mt-0.5 shrink-0 p-2.5 bg-white/10 rounded-xl border border-white/10">
                  <Percent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                    <strong className="text-white block mb-1.5 text-[17px]">Descuento del 10%</strong> 
                    Al gestionar 3 o más documentos civiles de forma conjunta con nosotros.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="mt-0.5 shrink-0 p-2.5 bg-white/10 rounded-xl border border-white/10">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                    <strong className="text-white block mb-1.5 text-[17px]">Pago flexible en 2 cuotas</strong> 
                    Aportas el 50% al arrancar el trámite e iniciar gestiones, y el 50% restante solo cuando el expediente esté listo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-white/15 mx-4"></div>
          <div className="block md:hidden h-[1px] w-full bg-white/15 my-2"></div>

          {/* Transparencia Total */}
          <div className="flex-1 md:pl-16 md:py-2">
            <h4 className="font-extrabold text-white tracking-widest mb-8 uppercase text-[12px] opacity-60">Transparencia Total</h4>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="mt-0.5 shrink-0 p-2.5 bg-white/10 rounded-xl border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                    <strong className="text-white block mb-1.5 text-[17px]">Cero Costes Ocultos</strong> 
                    Nuestros honorarios de <em>LegalizaT</em> ya incluyen todas las gestiones locales, honorarios y los envíos físicos a España.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="mt-0.5 shrink-0 p-2.5 bg-white/10 rounded-xl border border-white/10">
                  <Landmark className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                    <strong className="text-white block mb-1.5 text-[17px]">Tasas Gubernamentales</strong> 
                    Las tasas obligatorias que cobran los organismos públicos (Consulado, MINJUS, Extranjería) van aparte y se detallan antes de empezar.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto pt-8 border-t border-black/5">
          <h3 className="text-[22px] md:text-[28px] font-bold text-black tracking-tight mb-4">¿Tu caso no encaja aquí?</h3>
          <p className="text-[16px] font-medium text-black/60 mb-8">
            Escríbenos y te hacemos un presupuesto cerrado sin compromiso en menos de 24 horas.
          </p>
          <a 
            href="https://wa.me/34600000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white rounded-full p-1.5 pr-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_15px_25px_rgba(0,0,0,0.25)] hover:bg-neutral-900 active:translate-y-0 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
               <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
               </svg>
            </div>
            <span className="text-[16px] font-bold">Contáctanos por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
