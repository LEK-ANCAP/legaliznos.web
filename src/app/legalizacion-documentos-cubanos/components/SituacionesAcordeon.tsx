"use client";

import { Accordion, Button } from "@heroui/react";
import { ArrowRight, ChevronDown, FileText, HeartHandshake, Home, Users } from "lucide-react";

const situations = [
  {
    id: "arraigo",
    icon: Home,
    title: "Estoy haciendo el arraigo social",
    docs: [
      "Certificado de antecedentes penales de Cuba (obligatorio)",
      "Certificado de nacimiento (si acreditas vínculos familiares)"
    ],
    note: "Plazo recomendado: pídelos con al menos 3 meses de antelación — tienen caducidad.",
    priceText: "Precio paquete arraigo: 250€ por documento",
    cta: "Consultar sobre Arraigo"
  },
  {
    id: "nacionalidad",
    icon: FileText,
    title: "Estoy tramitando la nacionalidad española",
    docs: [
      "Certificado de nacimiento (obligatorio)",
      "Certificado de antecedentes penales (obligatorio)",
      "Certificado de matrimonio (si estás casado/a)"
    ],
    note: "Importante: deben estar vigentes en el momento de la solicitud. Si los pediste hace más de 6 meses, puede que tengas que renovarlos.",
    priceText: "Precio paquete nacionalidad: 250€ por documento",
    cta: "Consultar sobre Nacionalidad"
  },
  {
    id: "reagrupacion",
    icon: Users,
    title: "Quiero reagrupar a mi familia",
    docs: [
      "Certificado de nacimiento del familiar",
      "Certificado de matrimonio (si reagrupas a cónyuge)",
      "Certificado de antecedentes penales del familiar"
    ],
    note: "Nota: estos documentos los necesita TU FAMILIAR para la cita de visado en el Consulado de España en La Habana.",
    priceText: "",
    cta: "Consultar sobre Reagrupación"
  },
  {
    id: "matrimonio",
    icon: HeartHandshake,
    title: "Voy a casarme o registrar pareja de hecho en España",
    docs: [
      "Certificado de nacimiento",
      "Certificado de soltería o estado conyugal",
      "Certificado de divorcio (si hubo matrimonio anterior)"
    ],
    note: "",
    priceText: "",
    cta: "Consultar sobre Matrimonio"
  },
  {
    id: "solo-uno",
    icon: FileText,
    title: "Solo necesito un documento específico",
    docs: [
      "Antecedentes penales",
      "Certificado de nacimiento",
      "Certificado de matrimonio",
      "Certificado de soltería",
      "Certificado de divorcio",
      "Certificado de defunción",
      "Vigencia de matrimonio / estado conyugal",
      "Documentos académicos (títulos)"
    ],
    note: "Si ya sabes exactamente qué documento necesitas.",
    priceText: "",
    cta: "Consultar mi caso por WhatsApp"
  }
];

export function SituacionesAcordeon() {
  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="situaciones">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            ¿Para qué los necesitas? <br className="hidden md:block"/>
            <span className="text-black/40">Eso determina qué pedir.</span>
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl">
            No todos los trámites piden lo mismo. Aquí te decimos exactamente qué necesitas según tu caso.
          </p>
        </div>

        <div className="bg-transparent md:bg-white md:border-[8px] md:border-[#EAEAEA] md:rounded-[32px] md:p-10 md:shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <Accordion className="w-full">
            {situations.map((sit) => {
              const Icon = sit.icon;
              return (
                <Accordion.Item 
                  key={sit.id} 
                  id={sit.id}
                  className="bg-white border border-black/5 mb-4 rounded-3xl px-4 md:px-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                >
                  <Accordion.Heading>
                    <Accordion.Trigger className="flex justify-between items-center w-full py-4 md:py-5 text-left group hover:bg-transparent">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] border border-black/5 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-[17px] md:text-[19px] font-bold text-black tracking-tight leading-snug flex-1">
                          {sit.title}
                        </span>
                      </div>
                      <div className="shrink-0 pl-2">
                        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-data-[open=true]:rotate-180 transition-transform">
                          <ChevronDown className="w-4 h-4 text-black" />
                        </div>
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Heading>
                  <Accordion.Panel>
                    <Accordion.Body>
                      <div className="pl-0 md:pl-16 flex flex-col gap-5 pb-6">
                        <div>
                          <span className="text-[14px] font-bold text-black/40 uppercase tracking-wide mb-3 block">
                            Documentos que necesitas legalizar:
                          </span>
                          <ul className="flex flex-col gap-2">
                            {sit.docs.map((doc: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-[15px] md:text-[16px] text-black/70 font-medium leading-relaxed">
                                <span className="text-black/30 mt-1">•</span>
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {(sit.note || sit.priceText) && (
                          <div className="bg-[#FAFAFA] rounded-2xl p-4 md:p-5 border border-black/5 flex flex-col gap-2">
                            {sit.note && (
                              <p className="text-[14px] text-black/60 font-medium">
                                {sit.note}
                              </p>
                            )}
                            {sit.priceText && (
                              <p className="text-[14px] font-bold text-black">
                                {sit.priceText}
                              </p>
                            )}
                          </div>
                        )}

                        <div className="pt-2">
                          <a 
                            href={`https://wa.me/34000000000?text=Hola%2C%20estoy%20interesado%20en%20los%20documentos%20para%20${encodeURIComponent(sit.title.toLowerCase())}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex"
                          >
                            <Button 
                              className="bg-black text-white font-semibold rounded-full px-6 h-12 flex items-center gap-2 group w-full md:w-auto shadow-md"
                            >
                              {sit.cta}
                              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
