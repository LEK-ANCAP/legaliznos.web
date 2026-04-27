"use client";

import { Link } from "@heroui/react";
import { ArrowRight, ChevronRight, Clock, ShieldCheck, MapPin, Euro, Zap } from "lucide-react";

export function HeroArraigo() {
  const WHATSAPP_NUMBER = "34000000000";
  const MESSAGE = encodeURIComponent("Hola, quiero evaluar mi caso de arraigo social gratuitamente. Llevo en España al menos 2 años.");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-black/5 blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-black/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[13px] font-medium text-black/50 mb-8 w-full justify-center">
            <Link href="/" className="text-black/50 hover:text-black transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/servicios" className="text-black/50 hover:text-black transition-colors">Servicios</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-black truncate">Arraigo Social</span>
          </nav>

          {/* Banner Urgente */}
          <div className="w-full mb-8">
            <div className="inline-flex items-start md:items-center text-left md:text-center gap-3 bg-[#FFF8F0] border border-[#F5A524]/20 rounded-2xl p-4 md:p-3 md:px-5">
              <Zap className="w-5 h-5 text-[#F5A524] shrink-0 mt-0.5 md:mt-0" />
              <p className="text-[14px] font-medium text-black/80 leading-snug">
                <strong className="text-black">⚡ Regularización extraordinaria 2026:</strong> plazo abierto hasta el 30 de junio de 2026. Si llevas en España desde antes del 1 de enero de 2026, podrías acogerte.{" "}
                <Link href={WHATSAPP_URL} className="text-[#F5A524] font-bold hover:underline">Escríbenos para evaluar tu caso.</Link>
              </p>
            </div>
          </div>

          <h1 className="text-[3rem] md:text-[4.5rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
            Arraigo social para cubanos en España — <span className="text-black/30">requisitos actualizados 2026</span>
          </h1>
          
          <p className="text-[17px] md:text-[20px] text-black/60 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            <strong className="text-black">Buena noticia: el nuevo reglamento de extranjería reduce el plazo de 3 a 2 años.</strong> Si llevas 2 años en España, podrías solicitar la residencia ahora. Te evaluamos el caso gratis para que sepas si cumples.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href={WHATSAPP_URL}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
            >
              ¿Cumplo los requisitos? Evalúa mi caso gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full border-t border-black/5 pt-12">
            <div className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-black/5">
              <Clock className="w-6 h-6 text-black/40 mb-1" />
              <span className="text-[16px] font-bold text-black">2 años</span>
              <span className="text-[13px] text-black/50 font-medium leading-tight">Nuevo mínimo permanencia</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-black/5">
              <Euro className="w-6 h-6 text-black/40 mb-1" />
              <span className="text-[16px] font-bold text-black">Desde [X]€</span>
              <span className="text-[13px] text-black/50 font-medium leading-tight">Expediente completo</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-black/5">
              <ShieldCheck className="w-6 h-6 text-black/40 mb-1" />
              <span className="text-[16px] font-bold text-black">3-6 meses</span>
              <span className="text-[13px] text-black/50 font-medium leading-tight">Plazo medio resolución</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-black/5">
              <MapPin className="w-6 h-6 text-black/40 mb-1" />
              <span className="text-[16px] font-bold text-black">Toda España</span>
              <span className="text-[13px] text-black/50 font-medium leading-tight">Madrid, Valencia y online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
