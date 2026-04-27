"use client";

import { Link } from "@heroui/react";
import { ArrowRight, FileWarning, ShieldAlert } from "lucide-react";

export function DocumentosArraigo() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="bg-black rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            
            <div className="md:w-1/3 flex flex-col gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                <ShieldAlert className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold tracking-tight text-white leading-[1.1]">
                La parte que las gestorías generalistas no manejan bien.
              </h2>
            </div>

            <div className="md:w-2/3 flex flex-col gap-6">
              <p className="text-[16px] md:text-[18px] font-medium text-white/80 leading-relaxed">
                Para el arraigo social necesitas el certificado de antecedentes penales de Cuba, <strong className="text-white">legalizado ante el MINJUS y el Consulado de España en La Habana.</strong>
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
                <FileWarning className="w-6 h-6 text-[#F5A524] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <p className="text-[15px] font-bold text-white mb-1">Cuidado con los plazos</p>
                  <p className="text-[14px] font-medium text-white/70 leading-relaxed">
                    No vale una copia. No vale un documento sin legalizar. Y tiene caducidad: si lo pediste hace más de 6 meses, Extranjería te lo puede denegar. Si acreditas vínculos familiares, también necesitarás certificados de nacimiento o matrimonio legalizados.
                  </p>
                </div>
              </div>

              <p className="text-[15px] md:text-[16px] font-medium text-white/60 leading-relaxed mt-2">
                La mayoría de las gestorías te dicen "trae tus antecedentes penales" pero no te explican este laberinto. <strong className="text-white">Nosotros gestionamos la legalización de todos tus documentos cubanos</strong> como parte del servicio de arraigo.
              </p>

              <div className="mt-4">
                <Link 
                  href="/legalizacion-documentos-cubanos"
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-white hover:text-white/80 underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all"
                >
                  ¿Solo necesitas legalizar documentos cubanos?
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
