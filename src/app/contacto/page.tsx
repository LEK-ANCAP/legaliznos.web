import { Metadata } from "next";
import { Link } from "@heroui/react";
import { ChevronRight, MessageCircle, Mail, PhoneCall, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | LegalizaNos",
  description: "Hablemos de tu caso. Primera evaluación gratuita y sin compromiso. Contáctanos por WhatsApp, teléfono o email.",
  alternates: {
    canonical: "https://legalizanos.es/contacto",
  },
};

export default function ContactoPage() {
  const WHATSAPP_NUMBER = "34000000000";
  const PHONE_NUMBER = "+34 000 000 000";
  const EMAIL = "info@legalizanos.com";

  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#25D366]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] font-medium text-black/50 mb-12 justify-center">
          <Link href="/" className="text-black/50 hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-black truncate">Contacto</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
            Hablemos de tu caso.
          </h1>
          <p className="text-[19px] md:text-[22px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto">
            La primera evaluación de viabilidad es totalmente <strong className="text-black">gratuita y sin compromiso</strong>. Te decimos si cumples los requisitos antes de que gastes un euro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white border border-[#25D366]/30 rounded-[32px] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(37,211,102,0.05)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#25D366] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h2 className="text-[20px] font-bold text-black mb-2">Vía WhatsApp</h2>
            <p className="text-[15px] font-medium text-black/60 mb-6">El canal más rápido. Te pediremos los datos básicos para evaluar tu situación.</p>
            <span className="mt-auto text-[15px] font-bold text-[#25D366] bg-[#25D366]/10 px-4 py-2 rounded-full group-hover:bg-[#25D366] group-hover:text-black transition-colors">
              Escribir ahora
            </span>
          </a>

          {/* Email */}
          <a 
            href={`mailto:${EMAIL}`}
            className="group bg-white border border-black/10 rounded-[32px] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-black/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#FAFAFA] border border-black/5 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-[20px] font-bold text-black mb-2">Vía Email</h2>
            <p className="text-[15px] font-medium text-black/60 mb-6">Ideal si tienes que enviar documentos escaneados para que los revisemos.</p>
            <span className="mt-auto text-[15px] font-bold text-black">{EMAIL}</span>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${WHATSAPP_NUMBER}`}
            className="group bg-white border border-black/10 rounded-[32px] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-black/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#FAFAFA] border border-black/5 rounded-2xl flex items-center justify-center mb-6">
              <PhoneCall className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-[20px] font-bold text-black mb-2">Llamada Telefónica</h2>
            <p className="text-[15px] font-medium text-black/60 mb-6">Si prefieres explicar tu situación de viva voz, estamos disponibles.</p>
            <span className="mt-auto text-[15px] font-bold text-black">{PHONE_NUMBER}</span>
          </a>

        </div>

        {/* Info Box */}
        <div className="bg-black/5 border border-black/10 rounded-[32px] p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
            <Clock className="w-7 h-7 text-black" />
          </div>
          <div>
            <h3 className="text-[18px] font-bold text-black mb-2">Horario y tiempos de respuesta</h3>
            <p className="text-[15px] font-medium text-black/70 leading-relaxed mb-4">
              Atendemos las consultas por orden de llegada. Nuestro horario de atención central es de <strong className="text-black">Lunes a Viernes (09:00 - 18:00 hora de España peninsular)</strong>. Fuera de ese horario puedes dejarnos el mensaje y te responderemos al siguiente día hábil.
            </p>
            <p className="text-[14px] font-bold text-black/50 uppercase tracking-wide">
              Respuesta media: 2 a 4 horas hábiles
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
