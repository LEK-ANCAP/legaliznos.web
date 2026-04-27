import { Button } from "@heroui/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function CtaVisados() {
  return (
    <section className="relative py-24 bg-white border-t border-black/5" id="contacto">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="bg-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/10">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tight text-white mb-6 leading-tight">
              Cada visado es diferente.
            </h2>
            
            <p className="text-[17px] md:text-[19px] text-white/70 mb-10 leading-relaxed font-medium">
              Cuéntanos tu situación y te decimos qué tipo necesitas, qué documentos preparar, y cuánto va a costar.
            </p>
            
            <a 
              href="https://wa.me/34000000000?text=Hola%2C%20necesito%20evaluar%20mi%20caso%20para%20un%20visado%20a%20España"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-[#25D366] text-white font-bold rounded-xl h-14 px-8 text-[16px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-all">
                Evaluar mi caso gratis
              </Button>
            </a>
          </div>
        </div>

        {/* Internal Linking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/reagrupacion-familiar-cubanos-espana"
            className="group bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 hover:bg-black/5 hover:border-black/10 transition-colors"
          >
            <h3 className="text-[14px] font-bold text-black/50 uppercase tracking-wider mb-2">Reagrupación</h3>
            <p className="text-[16px] font-bold text-black mb-4 pr-4">
              ¿Tu familiar en España quiere traerte?
            </p>
            <div className="flex items-center gap-2 text-[14px] font-bold text-black group-hover:text-[#F5A524] transition-colors">
              Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href="/legalizacion-documentos-cubanos"
            className="group bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 hover:bg-black/5 hover:border-black/10 transition-colors"
          >
            <h3 className="text-[14px] font-bold text-black/50 uppercase tracking-wider mb-2">Legalizaciones</h3>
            <p className="text-[16px] font-bold text-black mb-4 pr-4">
              ¿Necesitas legalizar documentos para el visado?
            </p>
            <div className="flex items-center gap-2 text-[14px] font-bold text-black group-hover:text-[#F5A524] transition-colors">
              Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href="/arraigo-social-cubanos-espana"
            className="group bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 hover:bg-black/5 hover:border-black/10 transition-colors"
          >
            <h3 className="text-[14px] font-bold text-black/50 uppercase tracking-wider mb-2">Arraigo</h3>
            <p className="text-[16px] font-bold text-black mb-4 pr-4">
              ¿Ya estás en España y necesitas regularizarte?
            </p>
            <div className="flex items-center gap-2 text-[14px] font-bold text-black group-hover:text-[#F5A524] transition-colors">
              Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
