import { Metadata } from "next";
import { Link } from "@heroui/react";
import { ChevronRight, FileText, Globe2, Home, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Todos los Servicios | LegalizaNos",
  description: "Especialistas en extranjería, nacionalidad y legalizaciones para cubanos en España. Conoce todos nuestros servicios.",
  alternates: {
    canonical: "https://legalizanos.com/servicios",
  },
};

const servicios = [
  {
    title: "Legalización de Documentos",
    description: "Obtención y legalización completa en Cuba (MINREX, Consulado) para que tengan validez total en España.",
    href: "/legalizacion-documentos-cubanos",
    icon: FileText,
    color: "bg-black",
    iconColor: "text-white",
  },
  {
    title: "Visados desde Cuba",
    description: "Visados de estudio, búsqueda de empleo, trabajo y nómada digital. Gestión directa desde La Habana.",
    href: "/visados-cuba-espana",
    icon: Globe2,
    color: "bg-white",
    iconColor: "text-black",
  },
  {
    title: "Arraigo y Residencia",
    description: "Nuevos reglamentos de Arraigo Social, Familiar y Laboral. Te ayudamos a regularizar tu estatus en España.",
    href: "/arraigo-social-cubanos-espana",
    icon: Home,
    color: "bg-white",
    iconColor: "text-black",
  },
  {
    title: "Nacionalidad Española",
    description: "El paso definitivo. Por residencia, opción o Ley de Memoria Democrática (LMD). Expediente completo.",
    href: "/nacionalidad-espanola-cubanos",
    icon: Heart,
    color: "bg-white",
    iconColor: "text-[#E63946]", // Just a visual pop
  },
  {
    title: "Reagrupación Familiar",
    description: "Trae a tu cónyuge, hijos o padres. Coordinamos el expediente en España y la cita consular en Cuba.",
    href: "/reagrupacion-familiar-cubanos-espana",
    icon: Heart,
    color: "bg-black",
    iconColor: "text-white",
  }
];

export default function ServiciosPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F5A524]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs & Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <nav className="flex items-center gap-2 text-[13px] font-medium text-black/50 mb-8 justify-center">
            <Link href="/" className="text-black/50 hover:text-black transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-black truncate">Servicios</span>
          </nav>

          <h1 className="text-[3rem] md:text-[4.5rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
            Todos nuestros servicios.
          </h1>
          <p className="text-[18px] md:text-[20px] font-medium text-black/60 leading-relaxed">
            Desde el primer papel que necesitas sacar en La Habana, hasta el momento en que juras la nacionalidad española.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, idx) => (
            <Link 
              key={idx}
              href={servicio.href}
              className={`group flex flex-col justify-between p-8 rounded-[32px] border transition-all duration-300 hover:-translate-y-1 ${
                servicio.color === 'bg-black' 
                  ? 'bg-black border-black text-white hover:shadow-2xl hover:shadow-black/20' 
                  : 'bg-white border-black/5 text-black hover:shadow-xl hover:border-black/20'
              } ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}`}
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  servicio.color === 'bg-black' ? 'bg-white/10' : 'bg-[#FAFAFA] border border-black/5'
                }`}>
                  <servicio.icon className={`w-7 h-7 ${servicio.iconColor}`} />
                </div>
                <h3 className="text-[24px] font-bold tracking-tight leading-tight mb-3">
                  {servicio.title}
                </h3>
                <p className={`text-[15px] font-medium leading-relaxed ${
                  servicio.color === 'bg-black' ? 'text-white/70' : 'text-black/60'
                }`}>
                  {servicio.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 font-bold text-[14px] uppercase tracking-wider">
                Ver servicio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-white border border-black/5 rounded-[32px] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-sm flex flex-col items-center">
          <h2 className="text-[2rem] font-bold text-black mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-[17px] text-black/60 font-medium mb-8 max-w-lg">
            Si tu caso es distinto o muy complejo, cuéntanoslo directamente. Nuestro equipo lo analizará.
          </p>
          <a
            href="https://wa.me/34000000000?text=Hola,%20tengo%20una%20consulta%20especial%20sobre%20extranjer%C3%ADa."
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:-translate-y-0.5"
          >
            Hacer consulta especial por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </main>
  );
}
