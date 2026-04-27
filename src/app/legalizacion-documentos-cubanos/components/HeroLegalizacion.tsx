"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/images/hero.png";
import { ChevronRight, Clock, Euro, Globe, MapPin } from "lucide-react";

export function HeroLegalizacion() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-8 lg:mb-12">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <span>Servicios</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black/80 truncate">Documentos cubanos</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Main Content */}
          <div className="text-left flex flex-col items-start lg:col-span-7">
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-[-0.04em] mb-6 leading-[1.05]">
              <span className="text-black">Legalización de documentos cubanos</span>{" "}
              <span className="text-black/40">para trámites en España</span>
            </h1>
            
            <p className="text-[18px] md:text-[20px] text-black/60 max-w-[650px] mb-10 font-medium leading-relaxed tracking-[-0.02em]">
              Obtenemos tu documento en Cuba, lo legalizamos en MINJUS y Consulado, y te lo enviamos a casa. <strong className="text-black font-semibold">Tú no viajas, no llamas a nadie en Cuba, no haces colas.</strong> Nosotros nos encargamos.
            </p>
            
            {/* Quick Stats Row */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-10">
              <div className="flex items-center gap-2">
                <Euro className="w-5 h-5 text-black" />
                <span className="text-[15px] font-bold tracking-tight">250€ <span className="font-medium text-black/50 ml-1">Precio cerrado</span></span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-black/10" />
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-black" />
                <span className="text-[15px] font-bold tracking-tight">2-3 meses <span className="font-medium text-black/50 ml-1">Plazo medio</span></span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-black/10" />
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-black" />
                <span className="text-[15px] font-bold tracking-tight">100% online <span className="font-medium text-black/50 ml-1">Entrega a domicilio</span></span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <a 
                href="https://wa.me/34000000000?text=Hola%2C%20necesito%20legalizar%20un%20documento%20cubano"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-black text-white rounded-full px-8 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.25)] hover:bg-black/90 active:translate-y-0 transition-all duration-300 w-full md:w-auto"
              >
                <span className="text-[16px] font-bold tracking-wide">Pide presupuesto por WhatsApp</span>
                <span className="text-[13px] font-medium opacity-90 hidden sm:block">— te respondemos hoy</span>
              </a>
            </div>
            
          </div>

          {/* Imagen Hero (Adaptada para verse como una pieza flotante) */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[1.1] flex justify-center mt-12 lg:mt-0 perspective-1000 lg:col-span-5">
            {/* Decoración de sombra flotante bajo la imagen */}
            <div className="absolute inset-0 bg-black/10 rounded-[2rem] -rotate-2 scale-100 -z-10 blur-xl translate-y-12 translate-x-4"></div>
            
            <Image
              src={heroImg}
              alt="Legalización de Documentos Cubanos"
              className="rounded-[2rem] object-cover shadow-2xl z-10 rotate-1 border-[6px] border-white/50"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
