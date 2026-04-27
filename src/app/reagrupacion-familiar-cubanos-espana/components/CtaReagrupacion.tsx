"use client";

import { Link } from "@heroui/react";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export function CtaReagrupacion() {
  const WHATSAPP_NUMBER = "34000000000";
  const PHONE_NUMBER = "+34 000 000 000";
  const MESSAGE = encodeURIComponent("Hola, quiero consultar la viabilidad de mi caso para reagrupar a un familiar en España.");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F5A524]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mb-8 shadow-xl -rotate-6">
          <MessageCircle className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
          No esperes más para reunir a tu familia.
        </h2>
        
        <p className="text-[18px] md:text-[20px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto mb-10">
          Cuéntanos tu situación: a quién quieres traer, cuáles son tus ingresos (aprox), y cuánto llevas en España. Te decimos honestamente si es viable y cuánto tardará.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href={WHATSAPP_URL}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-10 py-5 rounded-full text-[18px] font-bold transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
          >
            Consulta gratuita por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-black/10 hover:border-black/30 text-black px-8 py-5 rounded-full text-[16px] font-bold transition-all"
          >
            <Phone className="w-5 h-5" />
            Llamar ahora al {PHONE_NUMBER}
          </a>
        </div>

        {/* Cross-linking */}
        <div className="mt-20 flex flex-col gap-4 text-left w-full max-w-2xl bg-[#FAFAFA] p-8 rounded-3xl border border-black/5">
          <p className="text-[14px] font-bold text-black uppercase tracking-wider mb-2">Trámites conectados</p>
          
          <Link 
            href="/legalizacion-documentos-cubanos"
            className="flex items-center justify-between group p-3 hover:bg-white rounded-xl transition-colors"
          >
            <span className="text-[15px] font-medium text-black/80 group-hover:text-black">
              Tu familiar necesitará documentos legales de Cuba
            </span>
            <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
          </Link>
          
          <div className="h-px w-full bg-black/5" />
          
          <Link 
            href="/nacionalidad-espanola-cubanos"
            className="flex items-center justify-between group p-3 hover:bg-white rounded-xl transition-colors"
          >
            <span className="text-[15px] font-medium text-black/80 group-hover:text-black">
              Si quieres la nacionalidad para poder reagrupar a tus padres
            </span>
            <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
          </Link>

          <div className="h-px w-full bg-black/5" />
          
          <Link 
            href="/visados-cuba-espana"
            className="flex items-center justify-between group p-3 hover:bg-white rounded-xl transition-colors"
          >
            <span className="text-[15px] font-medium text-black/80 group-hover:text-black">
              Si tu familiar prefiere venir con un visado de trabajo o estudios
            </span>
            <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
          </Link>
        </div>

      </div>
    </section>
  );
}
