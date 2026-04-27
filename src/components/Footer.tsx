import Image from "next/image";
import Link from "next/link";
import logoImg from "@/images/Logo Legalizate.png";
import { Mail, Phone, MapPin, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 md:py-24 border-t border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-6 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity outline-none">
              <div className="relative w-9 h-9 shrink-0">
                <div className="relative w-full h-full overflow-hidden rounded-full bg-white">
                  <Image 
                    src={logoImg} 
                    alt="Logo Legalizanos"
                    fill 
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="font-bold tracking-tight text-white text-xl">Legalizanos</span>
            </Link>
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
              <a href="/legalizacion-documentos-cubanos" className="hover:text-white hover:translate-x-1 transition-all">Legalización documentos</a>
              <a href="/visados-cuba-espana" className="hover:text-white hover:translate-x-1 transition-all">Visados</a>
              <a href="/arraigo-social-cubanos-espana" className="hover:text-white hover:translate-x-1 transition-all">Arraigo / Residencia</a>
              <a href="/nacionalidad-espanola-cubanos" className="hover:text-white hover:translate-x-1 transition-all">Nacionalidad</a>
              <a href="/reagrupacion-familiar-cubanos-espana" className="hover:text-white hover:translate-x-1 transition-all">Reagrupación familiar</a>
              <a href="/servicios" className="hover:text-white hover:translate-x-1 transition-all font-bold mt-2">Todos los servicios →</a>
            </div>
          </div>

          {/* Col 3: Info */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-widest">Información</h4>
            <div className="flex flex-col gap-3.5 text-[15px] font-medium text-white/80">
              <a href="/sobre-nosotros" className="hover:text-white hover:translate-x-1 transition-all">Sobre Nosotros</a>
              <a href="/precios" className="hover:text-white hover:translate-x-1 transition-all">Precios</a>
              <a href="#faq" className="hover:text-white hover:translate-x-1 transition-all">FAQ</a>
              <a href="/blog" className="hover:text-white hover:translate-x-1 transition-all">Blog</a>
              <a href="/contacto" className="hover:text-white hover:translate-x-1 transition-all">Contacto</a>
            </div>
          </div>

          {/* Col 3.5: Áreas de Servicio */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-widest">Áreas de servicio</h4>
            <div className="flex flex-col gap-3.5 text-[15px] font-medium text-white/80">
              <a href="/legalizacion-documentos-madrid" className="hover:text-white hover:translate-x-1 transition-all">Madrid</a>
              <a href="/legalizacion-documentos-valencia" className="hover:text-white hover:translate-x-1 transition-all">Valencia</a>
              <a href="/contacto" className="hover:text-white hover:translate-x-1 transition-all">Toda España</a>
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
              <a href="mailto:info@legalizanos.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-white/80" />
                </div>
                info@legalizanos.com
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
          <p>© 2026 Legalizanos. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="/aviso-legal" className="hover:text-white transition-colors">Aviso legal</a>
            <a href="/politica-privacidad" className="hover:text-white transition-colors">Privacidad</a>
            <a href="/politica-cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
