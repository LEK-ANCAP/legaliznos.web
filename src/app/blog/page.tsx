import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, Clock } from "lucide-react";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Blog sobre Extranjería y Trámites para Cubanos | LegalizaNos",
  description: "Guías, tutoriales y novedades sobre extranjería, arraigo, nacionalidad y legalización de documentos para cubanos en España.",
  alternates: {
    canonical: "https://legalizanos.es/blog",
  },
};

const articles = [
  {
    title: "Regularización extraordinaria 2026: lo que necesitas saber",
    description: "Si eres cubano y llevas viviendo en España sin papeles desde antes del 1 de enero de 2026, este artículo puede cambiar tu situación legal. Requisitos y plazos.",
    href: "/blog/regularizacion-extraordinaria-2026-cubanos",
    date: "18 Abr 2026",
    readTime: "8 min",
    category: "Novedades"
  },
  {
    title: "Arraigo social para cubanos en España — guía completa 2026",
    description: "Todo sobre el arraigo social: nuevo plazo de 2 años, arraigo sociolaboral, documentos cubanos necesarios y cómo legalizar antecedentes penales en el MINJUS.",
    href: "/blog/arraigo-social-requisitos-2026-cubanos",
    date: "20 Abr 2026",
    readTime: "12 min",
    category: "Residencia"
  },
  {
    title: "¿Cuánto tarda la nacionalidad española? Los plazos reales",
    description: "Plazos reales de la nacionalidad española por residencia en 2026. Cuánto tarda por vía, qué hacer si se retrasa, y cómo afecta ser cubano al proceso.",
    href: "/blog/cuanto-tarda-nacionalidad-espanola",
    date: "20 Abr 2026",
    readTime: "8 min",
    category: "Nacionalidad"
  },
  {
    title: "Cómo conseguir cita previa en Extranjería — tutorial",
    description: "Guía paso a paso para conseguir cita previa en Extranjería. Cl@ve, sede electrónica y trucos para pillar cita en Madrid, Valencia y otras provincias.",
    href: "/blog/cita-previa-extranjeria-tutorial",
    date: "20 Abr 2026",
    readTime: "10 min",
    category: "Guías"
  },
  {
    title: "Documentos para residencia en España — checklist 2026",
    description: "Lista completa de documentos que necesitas para obtener la residencia en España siendo cubano. Arraigo, reagrupación, no lucrativa. Qué legalizar y qué no.",
    href: "/blog/documentos-residencia-espana-cubanos",
    date: "20 Abr 2026",
    readTime: "10 min",
    category: "Documentación"
  }
];

export default function BlogIndexPage() {
  return (
    <>
      <main className="pt-32 pb-24 bg-[#FAFAFA] min-h-screen selection:bg-black/10 text-foreground">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-black/80">Blog</span>
          </nav>

          <header className="mb-16">
            <h1 className="text-[3rem] md:text-[4rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
              Blog de LegalizaNos
            </h1>
            <p className="text-[18px] md:text-[20px] font-medium text-black/60 max-w-2xl leading-relaxed">
              Guías claras, actualizadas y sin jerga legal sobre extranjería, nacionalidad y legalización de documentos para cubanos en España.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link 
                key={index} 
                href={article.href}
                className="bg-white border border-black/5 rounded-[32px] p-8 hover:border-black/20 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col h-full"
              >
                <div className="mb-4">
                  <span className="inline-block bg-[#FAFAFA] text-black/60 border border-black/10 px-3 py-1 rounded-full text-[13px] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                
                <h2 className="text-[22px] font-bold text-black leading-tight mb-4 group-hover:underline decoration-2 underline-offset-4">
                  {article.title}
                </h2>
                
                <p className="text-[16px] text-black/60 font-medium leading-relaxed mb-8 flex-grow">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between text-[14px] font-medium text-black/40 pt-6 border-t border-black/5 mt-auto">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-black opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      
      <FloatingContact />
    </>
  );
}
