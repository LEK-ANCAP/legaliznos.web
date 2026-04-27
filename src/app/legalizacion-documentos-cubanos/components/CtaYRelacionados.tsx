"use client";

import { Button } from "@heroui/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CtaYRelacionados() {
  return (
    <section className="relative py-24 bg-white" id="cta-relacionados">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* CTA Doble */}
        <div className="bg-[#FAFAFA] border border-black/5 rounded-[32px] p-8 md:p-12 lg:p-16 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-4">
              ¿Sabes qué documento necesitas? <br className="hidden md:block"/>
              <span className="text-black/40">Te damos precio exacto hoy.</span>
            </h2>
            <p className="text-[17px] md:text-[19px] font-medium text-black/60">
              ¿No sabes qué necesitas? También. Te orientamos gratis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Opcion 1 */}
            <div className="bg-white border border-black/10 rounded-[24px] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[18px] font-bold text-black mb-6">"Ya sé qué necesito"</span>
              <a 
                href="https://wa.me/34000000000?text=Hola%2C%20necesito%20presupuesto%20para%20legalizar%20un%20documento"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button 
                  className="bg-black text-white font-bold rounded-2xl md:rounded-full h-auto min-h-[3.5rem] py-3 w-full text-[15px] md:text-[16px] shadow-md hover:bg-black/90 whitespace-normal leading-snug"
                >
                  Pedir presupuesto por WhatsApp
                </Button>
              </a>
            </div>

            {/* Opcion 2 */}
            <div className="bg-white border border-black/10 rounded-[24px] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[18px] font-bold text-black mb-6">"No estoy seguro/a"</span>
              <a 
                href="https://wa.me/34000000000?text=Hola%2C%20necesito%20orientación%20sobre%20qué%20documentos%20pedir"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button 
                  variant="outline"
                  className="border-2 border-black text-black font-bold rounded-2xl md:rounded-full h-auto min-h-[3.5rem] py-3 w-full text-[15px] md:text-[16px] hover:bg-black hover:text-white whitespace-normal leading-snug"
                >
                  Que me orienten gratis
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-[15px] font-medium text-black/50 leading-relaxed">
              📞 También puedes llamar al <strong className="text-black whitespace-nowrap">600 000 000</strong> <br className="sm:hidden" />o escribir a <strong className="text-black">info@legalizanos.es</strong>
            </p>
          </div>
        </div>

        {/* Enlazado Interno */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[2rem] font-bold tracking-[-0.03em] text-black mb-8 text-center md:text-left">
            Otros servicios que probablemente necesites
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Link href="/arraigo-social-cubanos-espana" className="group">
              <div className="bg-[#FAFAFA] border border-black/5 rounded-[24px] p-8 h-full flex flex-col hover:border-black/20 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-[19px] font-bold text-black tracking-tight group-hover:underline">Arraigo social</h4>
                  <ArrowUpRight className="w-5 h-5 text-black/30 group-hover:text-black transition-colors" />
                </div>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                  ¿Necesitas legalizar documentos para tu arraigo? La mayoría de nuestros clientes de arraigo empiezan por aquí.
                </p>
              </div>
            </Link>

            <Link href="/nacionalidad-espanola-cubanos" className="group">
              <div className="bg-[#FAFAFA] border border-black/5 rounded-[24px] p-8 h-full flex flex-col hover:border-black/20 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-[19px] font-bold text-black tracking-tight group-hover:underline">Nacionalidad española</h4>
                  <ArrowUpRight className="w-5 h-5 text-black/30 group-hover:text-black transition-colors" />
                </div>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                  La legalización de tu nacimiento y antecedentes es el primer paso para la nacionalidad.
                </p>
              </div>
            </Link>

            <Link href="/reagrupacion-familiar-cubanos-espana" className="group">
              <div className="bg-[#FAFAFA] border border-black/5 rounded-[24px] p-8 h-full flex flex-col hover:border-black/20 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-[19px] font-bold text-black tracking-tight group-hover:underline">Reagrupación familiar</h4>
                  <ArrowUpRight className="w-5 h-5 text-black/30 group-hover:text-black transition-colors" />
                </div>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                  Tu familiar en Cuba necesitará documentos legalizados para la cita de visado.
                </p>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
