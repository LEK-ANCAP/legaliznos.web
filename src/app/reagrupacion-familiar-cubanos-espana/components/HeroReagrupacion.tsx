"use client";

import { Link } from "@heroui/react";
import { ArrowRight, ChevronRight, Clock, Network, Euro, Users } from "lucide-react";

export function HeroReagrupacion() {
  const WHATSAPP_NUMBER = "34000000000";
  const MESSAGE = encodeURIComponent("Hola, me gustaría evaluar mi caso gratuitamente para reagrupar a mi familia desde Cuba.");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#F5A524]/5 blur-[120px]" />
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
            <span className="text-black truncate">Reagrupación Familiar</span>
          </nav>

          <h1 className="text-[3rem] md:text-[4.5rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
            Reagrupación familiar Cuba-España — <span className="text-black/30">reúne a tu familia</span>
          </h1>
          
          <p className="text-[17px] md:text-[20px] text-black/60 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            Es el trámite más largo, más complejo y más importante que vas a hacer. <strong className="text-black">Gestionamos todo:</strong> tu expediente aquí, los documentos de tu familiar en Cuba, la cita del Consulado en La Habana, y el visado. Hasta que llegue.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href={WHATSAPP_URL}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
            >
              Consulta gratuita — evaluamos tu caso
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full border-t border-black/5 pt-12">
            <div className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-black/5">
              <Clock className="w-6 h-6 text-black/40 mb-1" />
              <span className="text-[16px] font-bold text-black text-center">4-10 meses</span>
              <span className="text-[13px] text-black/50 font-medium leading-tight text-center">Proceso completo estimado</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-black/5">
              <Network className="w-6 h-6 text-black/40 mb-1" />
              <span className="text-[16px] font-bold text-black text-center">2 fases</span>
              <span className="text-[13px] text-black/50 font-medium leading-tight text-center">Expediente España + visado Cuba</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-black/5">
              <Euro className="w-6 h-6 text-black/40 mb-1" />
              <span className="text-[16px] font-bold text-black text-center">Desde [X]€</span>
              <span className="text-[13px] text-black/50 font-medium leading-tight text-center">Gestión completa</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-black/5">
              <Users className="w-6 h-6 text-black/40 mb-1" />
              <span className="text-[16px] font-bold text-black text-center">Coordinación</span>
              <span className="text-[13px] text-black/50 font-medium leading-tight text-center">Equipo en España + La Habana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
