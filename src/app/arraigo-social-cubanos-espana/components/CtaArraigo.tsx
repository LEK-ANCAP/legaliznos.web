"use client";

import { Link } from "@heroui/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaArraigo() {
  const WHATSAPP_NUMBER = "34000000000";
  const MESSAGE = encodeURIComponent("Hola, llevo al menos 2 años en España sin papeles y quiero evaluar gratis mi caso para el arraigo social.");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mb-8 shadow-xl -rotate-6">
          <MessageCircle className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
          ¿Llevas 2+ años en España sin papeles?
        </h2>
        
        <p className="text-[18px] md:text-[20px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto mb-10">
          Evalúa tu caso gratis. Te decimos si cumples los requisitos para el arraigo social hoy mismo, sin compromiso.
        </p>

        <Link 
          href={WHATSAPP_URL}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-10 py-5 rounded-full text-[18px] font-bold transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
        >
          Evaluar mi caso por WhatsApp
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Cross-linking */}
        <div className="mt-20 flex flex-col gap-4 text-left w-full max-w-2xl bg-[#FAFAFA] p-8 rounded-3xl border border-black/5">
          <p className="text-[14px] font-bold text-black uppercase tracking-wider mb-2">Otros trámites relacionados</p>
          
          <Link 
            href="/legalizacion-documentos-cubanos"
            className="flex items-center justify-between group p-3 hover:bg-white rounded-xl transition-colors"
          >
            <span className="text-[15px] font-medium text-black/80 group-hover:text-black">
              ¿Necesitas legalizar antecedentes penales para el arraigo?
            </span>
            <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
          </Link>
          
          <div className="h-px w-full bg-black/5" />
          
          <Link 
            href="/nacionalidad-espanola-cubanos"
            className="flex items-center justify-between group p-3 hover:bg-white rounded-xl transition-colors"
          >
            <span className="text-[15px] font-medium text-black/80 group-hover:text-black">
              ¿Ya tienes residencia y quieres la nacionalidad?
            </span>
            <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
          </Link>

          <div className="h-px w-full bg-black/5" />
          
          <Link 
            href="/blog/regularizacion-extraordinaria-2026"
            className="flex items-center justify-between group p-3 hover:bg-white rounded-xl transition-colors"
          >
            <span className="text-[15px] font-medium text-black/80 group-hover:text-[#F5A524]">
              ¿Prefieres la regularización extraordinaria 2026?
            </span>
            <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-[#F5A524] transition-colors" />
          </Link>
        </div>

      </div>
    </section>
  );
}
