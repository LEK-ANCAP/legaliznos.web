"use client";

import { Button } from "@heroui/react";
import { ArrowRight, PlaneTakeoff } from "lucide-react";

export function LegalizacionInversa() {
  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="legalizacion-inversa">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="bg-white border-[1.5px] border-black/10 rounded-[32px] md:rounded-[40px] p-6 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row gap-10 items-center justify-between relative overflow-hidden w-full">
          
          {/* Fondo Decorativo */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="flex-1 flex flex-col items-start relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6 shadow-lg">
              <PlaneTakeoff className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
              ¿Necesitas legalizar documentos españoles para usar en Cuba?
            </h2>
            
            <p className="text-[16px] md:text-[18px] font-medium text-black/70 leading-relaxed max-w-xl mb-8">
              Si necesitas que un documento español tenga validez en Cuba — por ejemplo, un certificado de matrimonio español, un título universitario, o un poder notarial — el proceso es diferente: <strong className="text-black">Ministerio de Justicia de España → MAEC (Ministerio de Asuntos Exteriores) → Consulado de Cuba en España.</strong>
              <br /><br />
              También gestionamos este proceso completo. Es menos común que la legalización de documentos cubanos, pero igual de necesario para muchas familias.
            </p>

            <a 
              href="https://wa.me/34000000000?text=Hola%2C%20necesito%20legalizar%20un%20documento%20español%20para%20Cuba"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline"
                className="font-bold border-2 border-black hover:bg-black hover:text-white rounded-2xl md:rounded-full px-5 md:px-8 h-auto min-h-[3.5rem] py-3 flex items-center justify-center gap-2 group text-[14px] md:text-[16px] w-full sm:w-auto h-auto whitespace-normal"
              >
                <span className="text-center">Consultar legalización España → Cuba</span>
                <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-transform shrink-0 hidden sm:block" />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
