import Image from "next/image";
import logoImg from "@/images/Logo Legalizate.png";
import { Mail, Phone, MapPin, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 md:py-24 border-t border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-6 lg:pr-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                  <Image 
                  src={logoImg} 
                  alt="Logo LegalizaT"
                  fill 
                  sizes="32px"
                  className="object-cover invert brightness-0 p-1"
                  />
              </div>
              <span className="font-bold tracking-tight text-white text-xl">LegalizaT</span>
            </div>
            <p className="text-[15px] text-white/60 font-medium leading-relaxed">
              Asesoría migratoria especializada para cubanos en España. Sin sorpresas ni letras pequeñas.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white/50" />
              </div>
              <span className="text-[13px] font-bold text-white/40 uppercase tracking-widest">Pago Seguro</span>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-widest">Servicios</h4>
            <div className="flex flex-col gap-3.5 text-[15px] font-medium text-white/80">
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Legalización documentos</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Visados</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Arraigo / Residencia</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Nacionalidad</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Reagrupación familiar</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all font-bold mt-2">Todos los servicios →</a>
            </div>
          </div>

          {/* Col 3: Info */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-widest">Información</h4>
            <div className="flex flex-col gap-3.5 text-[15px] font-medium text-white/80">
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Sobre Nosotros</a>
              <a href="#precios" className="hover:text-white hover:translate-x-1 transition-all">Precios</a>
              <a href="#faq" className="hover:text-white hover:translate-x-1 transition-all">FAQ</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Blog</a>
              <a href="#contacto" className="hover:text-white hover:translate-x-1 transition-all">Contacto</a>
            </div>
          </div>

          {/* Col 4: Contacto */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-widest">Atención al cliente</h4>
            <div className="flex flex-col gap-4 text-[15px] font-medium text-white/80">
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                WhatsApp / Teléfono
              </a>
              <a href="mailto:hola@legalizat.es" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-white/80" />
                </div>
                hola@legalizat.es
              </a>
              <div className="flex items-start gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white/80" />
                </div>
                <span className="text-white/60 leading-tight pt-1.5">Madrid · Valencia <br/> <span className="text-white/40">Toda España (Online)</span></span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-white/40 font-medium tracking-wide">
          <p>© 2026 LegalizaT. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
