import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MessageCircle, Mail, Phone, Clock, MapPin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto — LegalizaNos, Asesoría Migratoria para Cubanos en España",
  description: "Contacta con LegalizaNos por WhatsApp, teléfono o email. Consulta gratuita sobre legalización de documentos cubanos, arraigo, nacionalidad y reagrupación familiar.",
  alternates: {
    canonical: "https://legalizanos.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-24 lg:pt-32 pb-24 text-foreground selection:bg-black/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-12">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black/80 truncate">Contacto</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA */}
          <div>
            <h1 className="text-[3rem] md:text-[4rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
              Contacto
            </h1>
            
            <p className="text-[19px] md:text-[22px] font-medium text-black/60 leading-relaxed mb-12">
              ¿Tienes dudas sobre tu trámite? ¿Quieres un presupuesto? ¿No sabes por dónde empezar? Escríbenos. La primera consulta es gratuita y te respondemos el mismo día.
            </p>

            <div className="flex flex-col gap-8">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-1">WhatsApp</h3>
                  <p className="text-[15px] text-black/60 font-medium mb-3">Te respondemos en menos de 2 horas en horario laboral.</p>
                  <a 
                    href="https://wa.me/34000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20B858] text-white px-5 py-2.5 rounded-full text-[14px] font-bold transition-all shadow-md"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-1">Teléfono</h3>
                  <p className="text-[15px] text-black/60 font-medium mb-1">+34 000 000 000</p>
                  <p className="text-[14px] text-black/40 font-medium">Lunes a viernes, 9:00 - 19:00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-1">Email</h3>
                  <a href="mailto:info@legalizanos.com" className="text-[15px] font-bold text-black hover:underline mb-1 inline-block">info@legalizanos.com</a>
                  <p className="text-[14px] text-black/40 font-medium">Para documentación y consultas no urgentes.</p>
                </div>
              </div>

              {/* Dónde estamos */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-1">Dónde estamos</h3>
                  <p className="text-[15px] text-black/60 font-medium">Madrid y Valencia — servicio 100% online para toda España e internacional.</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-1">Horario de atención</h3>
                  <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                    Lunes a viernes: 9:00 - 19:00<br/>
                    Sábados: 10:00 - 14:00 (solo WhatsApp)<br/>
                    Domingos: cerrado
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA */}
          <div className="lg:mt-12">
            <div className="bg-white border border-black/10 rounded-[32px] p-8 md:p-10 shadow-sm">
              <h2 className="text-[24px] font-bold text-black mb-6">Envíanos un mensaje</h2>
              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-[14px] font-bold text-black mb-2">Nombre completo</label>
                  <input type="text" className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="Tu nombre" required />
                </div>
                
                <div>
                  <label className="block text-[14px] font-bold text-black mb-2">WhatsApp o Teléfono</label>
                  <input type="tel" className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="+34 600 000 000" required />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-black mb-2">Email <span className="font-medium text-black/40">(opcional)</span></label>
                  <input type="email" className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="tu@email.com" />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-black mb-2">¿Qué necesitas?</label>
                  <select className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Selecciona una opción...</option>
                    <option value="legalizacion">Legalización de documentos cubanos</option>
                    <option value="visados">Visados desde Cuba</option>
                    <option value="arraigo">Arraigo social / residencia</option>
                    <option value="nacionalidad">Nacionalidad española</option>
                    <option value="reagrupacion">Reagrupación familiar</option>
                    <option value="regularizacion">Regularización extraordinaria 2026</option>
                    <option value="otro">Otro trámite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-black mb-2">Mensaje breve <span className="font-medium text-black/40">(opcional)</span></label>
                  <textarea rows={4} className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none" placeholder="Cuéntanos un poco sobre tu caso..."></textarea>
                </div>

                <button type="submit" className="w-full bg-black hover:bg-black/80 text-white rounded-xl px-4 py-4 text-[16px] font-bold transition-colors mt-2">
                  Enviar consulta
                </button>
                <p className="text-[12px] text-center text-black/40 font-medium">
                  Al enviar aceptas nuestra <Link href="/politica-privacidad" className="underline hover:text-black">política de privacidad</Link>.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* ÁREAS DE SERVICIO */}
      <section className="bg-white py-24 border-y border-black/5 mt-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-[2rem] font-bold text-black mb-6">Dónde trabajamos</h2>
          <p className="text-[17px] text-black/60 font-medium mb-12 max-w-2xl mx-auto">
            Nuestro servicio es 100% online. Atendemos desde Madrid y Valencia pero trabajamos con clientes en toda España y en el extranjero.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-black/5">
              <h3 className="text-[18px] font-bold text-black mb-4 flex items-center gap-2"><MapPin className="w-5 h-5"/> En España</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                Madrid · Valencia · Barcelona · Sevilla · Málaga · Bilbao · Zaragoza · y toda España.
              </p>
            </div>
            <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-black/5">
              <h3 className="text-[18px] font-bold text-black mb-4 flex items-center gap-2"><Globe className="w-5 h-5"/> Internacional</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                Cuba · Estados Unidos · México · Canadá · Francia · Alemania · Italia · y cualquier país.
              </p>
            </div>
          </div>

          <p className="text-[15px] text-black/50 font-bold mt-10">
            Si estás fuera de España y necesitas legalizar documentos cubanos, también podemos ayudarte. Enviamos a cualquier dirección internacional.
          </p>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "LegalizaNos — Asesoría Migratoria",
            "description": "Asesoría migratoria especializada en cubanos en España.",
            "url": "https://legalizanos.com",
            "telephone": "+34000000000",
            "email": "info@legalizanos.com",
            "areaServed": ["Madrid", "Valencia", "España"],
            "serviceType": ["Legalización de documentos", "Arraigo social", "Nacionalidad española", "Reagrupación familiar", "Visados"],
            "priceRange": "€€",
            "paymentAccepted": ["Transferencia bancaria", "Bizum", "Tarjeta"],
            "knowsLanguage": ["es", "en"],
            "openingHours": "Mo-Fr 09:00-19:00, Sa 10:00-14:00"
          })
        }}
      />
    </main>
  );
}
