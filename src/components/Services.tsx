"use client";

import { ArrowRight, ChevronDown, FileSignature, Plane, Users, BookOpen } from "lucide-react";
import { Accordion, Button, Chip } from "@heroui/react";
import Link from "next/link";

const servicesList = [
  {
    id: "legalizacion",
    icon: FileSignature,
    badge: "Legalizaciones",
    visible: "Necesito documentos de Cuba legalizados para España",
    expanded: "Obtenemos, legalizamos y te enviamos cualquier documento desde Cuba.",
    docTypes: ["Registrales", "MINJUS", "MINSAP", "Docentes", "INASS", "Notariales"],
    dato: "Desde 250€",
    plazo: "2-3 meses",
    cta: "Ver detalles y precios",
    href: "/legalizacion-documentos-cubanos",
  },
  {
    id: "visados",
    icon: Plane,
    badge: "Visados",
    visible: "Quiero traer a alguien de Cuba o venir yo a España",
    expanded: "Visados de trabajo, estudios, búsqueda de empleo y reunificación familiar. Preparamos la documentación y coordinamos con el Consulado en La Habana.",
    dato: "Consulta gratuita",
    cta: "Evaluar mi caso gratis",
    href: "/visados-cuba-espana",
  },
  {
    id: "residencia",
    icon: Users,
    badge: "Residencia",
    visible: "Estoy en España sin papeles y quiero regularizarme",
    expanded: "Arraigo social, laboral o familiar. Preparamos tu expediente completo, revisamos cada documento y presentamos ante Extranjería. Te acompañamos hasta la resolución.",
    dato: "Desde 400€",
    plazo: "3-6 meses",
    cta: "Ver requisitos",
    href: "/arraigo-social-cubanos-espana",
  },
  {
    id: "nacionalidad",
    icon: BookOpen,
    badge: "Nacionalidad",
    visible: "Llevo años aquí y quiero el pasaporte español",
    expanded: "Expediente de nacionalidad por residencia. Desde la documentación hasta la jura. Incluye gestión de documentos cubanos legalizados si los necesitas.",
    dato: "Desde 500€",
    plazo: "12-18 meses media",
    cta: "Evaluar si cumplo requisitos",
    href: "/nacionalidad-espanola-cubanos",
  }
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32 bg-[#F4F4F5]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Text Header */}
        <div className="flex flex-col items-center justify-center text-center mx-auto mb-12 lg:mb-16">
          <div className="bg-white border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <span className="text-[13px] font-bold text-black tracking-tight">Servicios</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] text-black leading-tight">
            ¿Qué trámite necesitas resolver?
          </h2>
        </div>

        {/* Accordion Layout */}
        <Accordion className="w-full" defaultExpandedKeys={["legalizacion"]}>
          {servicesList.map((item) => {
            const Icon = item.icon;
            return (
              <Accordion.Item 
                key={item.id} 
                id={item.id}
                className="bg-white border border-black/5 mb-4 rounded-3xl px-4 md:px-6 py-1 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="flex justify-between items-center w-full py-5 text-left group hover:bg-transparent">
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="w-5 h-5 text-black" strokeWidth={2.5} />
                          <span className="text-[12px] font-extrabold tracking-tight text-black/50 uppercase">{item.badge}</span>
                        </div>
                        <h3 className="text-[14px] md:text-xl font-bold tracking-tight text-black pr-2 leading-snug">
                          {item.visible}
                        </h3>
                      </div>
                    </div>
                    <div className="shrink-0 pl-2">
                      <div className="w-8 h-8 rounded-full bg-[#F4F4F5] flex items-center justify-center group-hover:bg-black/5 transition-colors group-data-[open=true]:rotate-180">
                        <ChevronDown className="w-4 h-4 text-black/50" />
                      </div>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body>
                    <div className="pb-6 pt-2 px-0 md:pr-4">
                      <p className="font-medium text-black/60 leading-relaxed mb-6 text-[15px] md:text-[16px]">
                        {item.expanded}
                      </p>

                      {item.docTypes && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.docTypes.map(doc => (
                            <span key={doc} className="bg-black/5 text-black/70 px-3 py-1 rounded-md text-[13px] font-semibold">
                              {doc}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-black/5">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="inline-flex items-center gap-2 bg-[#F4F4F5] rounded-xl px-3 py-1.5 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
                            <span className="text-[13px] font-bold text-black/70 tracking-tight">{item.dato}</span>
                          </div>
                          {item.plazo && (
                            <div className="inline-flex items-center gap-2 bg-[#F4F4F5] rounded-xl px-3 py-1.5 w-fit">
                              <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
                              <span className="text-[13px] font-bold text-black/70 tracking-tight">{item.plazo}</span>
                            </div>
                          )}
                        </div>
                        <Link href={item.href} className="w-full sm:w-auto">
                          <Button className="bg-black text-white font-bold w-full">
                            {item.cta} <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>

      </div>
    </section>
  );
}
