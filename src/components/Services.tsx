"use client";

import { ArrowRight } from "lucide-react";

// Utilizamos imágenes de stock (Unsplash) con corte abstracto y limpio para mantener la vibra premium y no añadir latencia con imágenes pesadas en el repo.
const servicesList = [
  {
    id: "legalizacion",
    image: "/legalizaciones.jpg",
    badge: "Legalizaciones",
    visible: "Necesito documentos de Cuba legalizados para España",
    expanded: "Antecedentes penales, nacimiento, matrimonio, soltería, divorcio, títulos. Los obtenemos en Cuba, legalizamos en MINJUS y Consulado, y te los enviamos a casa.",
    dato: "Desde 250€ · 2-3 meses · 100% online",
    cta: "Ver detalles y precios",
    href: "#legalizacion",
    colSpan: "md:col-span-12 lg:col-span-12",
    isHorizontal: true
  },
  {
    id: "visados",
    image: "/visados.png",
    badge: "Visados",
    visible: "Quiero traer a alguien de Cuba o venir yo a España",
    expanded: "Visados de trabajo, estudios, búsqueda de empleo y reunificación familiar. Preparamos la documentación y coordinamos con el Consulado en La Habana.",
    dato: "Consulta gratuita · Cada caso es distinto",
    cta: "Evaluar mi caso gratis",
    href: "#visados",
    colSpan: "md:col-span-12 lg:col-span-4"
  },
  {
    id: "residencia",
    image: "/residencia.png",
    badge: "Residencia",
    visible: "Estoy en España sin papeles y quiero regularizarme",
    expanded: "Arraigo social, laboral o familiar. Preparamos tu expediente completo, revisamos cada documento y presentamos ante Extranjería. Te acompañamos hasta la resolución.",
    dato: "Desde 400€ · 3-6 meses",
    cta: "Ver requisitos",
    href: "#residencia",
    colSpan: "md:col-span-12 lg:col-span-4"
  },
  {
    id: "nacionalidad",
    image: "/nacionalidad.jpg",
    badge: "Nacionalidad",
    visible: "Llevo años aquí y quiero el pasaporte español",
    expanded: "Expediente de nacionalidad por residencia. Desde la documentación hasta la jura. Incluye gestión de documentos cubanos legalizados si los necesitas.",
    dato: "Desde 500€ · 12-18 meses media",
    cta: "Evaluar si cumplo requisitos",
    href: "#nacionalidad",
    colSpan: "md:col-span-12 lg:col-span-4"
  }
];

function ServiceCard({ item }: { item: typeof servicesList[0] & { isHorizontal?: boolean } }) {
  const isHorizontal = item.isHorizontal || false;

  return (
    <a 
      href={item.href}
      className={`group flex ${isHorizontal ? 'flex-col lg:flex-row' : 'flex-col'} bg-white border-[8px] border-[#EAEAEA] rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 will-change-transform cursor-pointer ${item.colSpan}`}
    >
      
      {/* Mobile/Vertical Image Block */}
      <div className={`relative shrink-0 w-full ${isHorizontal ? 'h-[220px] lg:hidden' : 'h-[220px]'}`}>
        <div className="absolute top-5 right-5 z-20 bg-[#EAEAEA] rounded-full px-3.5 py-1.5 flex items-center justify-center">
          <span className="text-[12px] font-extrabold tracking-tight text-black">{item.badge}</span>
        </div>
        
        {/* Usamos img local con máscara CSS para el fundido exacto al blanco de la tarjeta */}
        <img 
          src={item.image} 
          alt={item.badge} 
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[800ms] ease-out origin-center"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 95%)', 
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 95%)' 
          }}
        />
      </div>

      {/* Desktop Horizontal Image Block */}
      {isHorizontal && (
        <div className="relative hidden lg:block w-[45%] shrink-0">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <img 
              src={item.image} 
              alt={item.badge} 
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[800ms] ease-out origin-center"
              style={{ 
                WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)', 
                maskImage: 'linear-gradient(to right, black 40%, transparent 100%)' 
              }}
            />
          </div>
        </div>
      )}

      {/* Text Content Block */}
      <div className={`flex flex-col flex-1 px-8 pb-10 relative z-10 ${isHorizontal ? 'lg:py-16 lg:pr-16 lg:pl-10 lg:justify-center' : ''}`}>
        
        {isHorizontal && (
          <div className="hidden lg:flex bg-[#EAEAEA] rounded-full px-3.5 py-1.5 items-center justify-center w-fit mb-5">
            <span className="text-[12px] font-extrabold tracking-tight text-black">{item.badge}</span>
          </div>
        )}

        <h3 className={`font-bold tracking-tight text-black leading-[1.25] mb-3 max-w-[95%] ${isHorizontal ? 'text-[24px] lg:text-[40px] lg:leading-[1.1] lg:mb-5' : 'text-[20px] md:text-[23px]'}`}>
          {item.visible}
        </h3>
        
        <p className={`font-medium text-black/60 leading-relaxed mb-8 ${isHorizontal ? 'text-[16px] lg:text-[18px]' : 'text-[15px]'}`}>
          {item.expanded}
        </p>
        
        {/* Bottom CTA & Meta */}
        <div className="mt-auto flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 bg-[#FAFAFA] border border-black/5 rounded-xl px-3 py-1.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
            <span className="text-[13px] font-bold text-black/70 tracking-tight">{item.dato}</span>
          </div>
          
          <div className="inline-flex items-center gap-2 text-[15px] font-bold text-black mt-2 w-fit group-hover:text-black/60 transition-colors">
            {item.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </div>
        </div>
      </div>
      
    </a>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Text Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="bg-white border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <span className="text-[13px] font-bold text-black tracking-tight">Servicios</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] text-black leading-tight">
            ¿Qué trámite necesitas resolver?
          </h2>
        </div>

        {/* Bento Grid layout matching the images concept */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {servicesList.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
