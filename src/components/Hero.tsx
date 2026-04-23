import Image from "next/image";
import heroImg from "@/images/hero.png";
import { MessageCircle, Clock, Globe } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Texto Hero */}
          <div className="text-left flex flex-col items-start pt-8 lg:col-span-7">
            
            {/* Top Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-black/5 shadow-sm rounded-full px-3 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-bold text-black/80 tracking-wide uppercase">Atención Exprés Disponible</span>
            </div>

            {/* Typography */}
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.2rem] font-bold tracking-[-0.04em] mb-6 leading-[1.05]">
              <span className="text-black/40">Legaliza tus documentos y</span>{" "}
              <span className="text-black">regularízate en España</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-[18px] text-black/60 max-w-[600px] mb-12 font-medium leading-relaxed tracking-[-0.04em]">
              <strong className="text-black font-semibold">Legalización de documentos cubanos, arraigo, nacionalidad, visados y reagrupación familiar.</strong> Todo online, con seguimiento por WhatsApp y precios cerrados desde el primer minuto.
            </p>
            
            {/* CTA Pill mimicking reference: Black pill with inner circle avatar/icon */}
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/34000000000?text=Hola%2C%20quiero%20hacer%20una%20consulta%20gratuita"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white rounded-full p-1.5 pr-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_15px_25px_rgba(0,0,0,0.5)] hover:bg-neutral-900 active:translate-y-0 transition-all duration-300"
              >
                {/* Inner Icon mimicking the Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="22" height="22" className="fill-current text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-[15px] font-bold">Consulta gratuita</span>
              </a>
            </div>

            {/* Micro-stats / Trust badges (Row) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 mt-10 pt-6 border-t border-black/5 w-full">
              {/* Stat 1 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-black">
                  <Clock className="w-[18px] h-[18px] stroke-[2.5px]" />
                  <span className="font-bold text-[15px] tracking-tight">1-2 meses</span>
                </div>
                <span className="text-[15.5px] text-black/50 font-medium leading-snug pr-4">
                  Plazo de legalización
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-black">
                  <Globe className="w-[18px] h-[18px] stroke-[2.5px]" />
                  <span className="font-bold text-[15px] tracking-tight">100% online</span>
                </div>
                <span className="text-[15.5px] text-black/50 font-medium leading-snug pr-4">
                  Tú no viajas a Cuba
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-black">
                  <MessageCircle className="w-[18px] h-[18px] stroke-[2.5px]" />
                  <span className="font-bold text-[15px] tracking-tight">WhatsApp</span>
                </div>
                <span className="text-[15.5px] text-black/50 font-medium leading-snug">
                  Seguimiento en cada paso
                </span>
              </div>
            </div>

          </div>
          
          {/* Imagen Hero (Adaptada para verse como una pieza flotante) */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[1.1] flex justify-center mt-12 lg:mt-0 perspective-1000 lg:col-span-5">
            {/* Decoración de sombra flotante bajo la imagen */}
            <div className="absolute inset-0 bg-black/10 rounded-[2rem] -rotate-2 scale-100 -z-10 blur-xl translate-y-12 translate-x-4"></div>
            
            <Image
              src={heroImg}
              alt="Asesoría Migratoria y Legalización de Documentos"
              className="rounded-[2rem] object-cover shadow-2xl z-10 rotate-1 border-[6px] border-white/50"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
        </div>
      </div>
      
      {/* Hero section ends here */}
    </section>
  );
}
