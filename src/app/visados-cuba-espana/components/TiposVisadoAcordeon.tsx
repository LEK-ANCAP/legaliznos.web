"use client";

import { Accordion, Button } from "@heroui/react";
import { ChevronDown, Briefcase, GraduationCap, Search, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const visados = [
  {
    id: "trabajo",
    icon: Briefcase,
    emoji: "✈️",
    title: "Tengo una oferta de trabajo en España",
    subtitle: "Visado de trabajo por cuenta ajena",
    para_quien: "Cubanos que tienen un empleador en España dispuesto a contratarlos.",
    que_hace_falta: "El empleador presenta la solicitud de autorización de residencia y trabajo ante Extranjería. Una vez aprobada, tú solicitas el visado en el Consulado de España en La Habana.",
    documentos: "Antecedentes penales, certificado médico.",
    plazo: "3-6 meses (autorización + cita consular + visado).",
    complicado: "El empleador debe demostrar que no encontró candidatos en España para ese puesto (situación nacional de empleo). Hay excepciones para determinadas profesiones.",
    cta: "Evaluar mi caso",
    link: "https://wa.me/34000000000?text=Hola%2C%20tengo%20una%20oferta%20de%20trabajo%20y%20necesito%20visado"
  },
  {
    id: "estudios",
    icon: GraduationCap,
    emoji: "🎓",
    title: "Quiero ir a estudiar a España",
    subtitle: "Visado de estudios",
    para_quien: "Cubanos aceptados en un programa educativo en España (universidad, máster, formación profesional).",
    que_hace_falta: "Carta de admisión del centro educativo, seguro médico, medios económicos suficientes, alojamiento.",
    documentos: "Antecedentes penales, títulos académicos (si aplica).",
    plazo: "2-4 meses antes del inicio del curso.",
    complicado: "Demostrar medios económicos (el IPREM como referencia: unos 600€/mes). Las citas del Consulado se agotan rápido cerca del inicio del curso.",
    cta: "Evaluar mi caso",
    link: "https://wa.me/34000000000?text=Hola%2C%20quiero%20estudiar%20en%20España%20y%20necesito%20visado"
  },
  {
    id: "busqueda",
    icon: Search,
    emoji: "🔍",
    title: "Quiero ir a España a buscar trabajo",
    subtitle: "Visado de búsqueda de empleo",
    para_quien: "Cubanos que quieren ir a España a buscar empleo sin tener una oferta previa.",
    que_hace_falta: "Cualificación profesional o experiencia acreditada, medios económicos para mantenerse durante la búsqueda (3 meses), seguro médico.",
    documentos: "No especificado explícitamente, pero típicamente antecedentes penales y titulación legalizada.",
    plazo: "Autorización de 3 meses, prorrogable a 12 si encuentras empleo.",
    complicado: "Es un visado relativamente nuevo y poco conocido. Las plazas son limitadas y se publican por orden ministerial.",
    nota: "Este visado te permite buscar empleo legalmente, no trabajar directamente. Una vez encuentres empleo, se convierte en autorización de residencia y trabajo.",
    cta: "Evaluar mi caso",
    link: "https://wa.me/34000000000?text=Hola%2C%20me%20interesa%20el%20visado%20de%20búsqueda%20de%20empleo"
  },
  {
    id: "reunificacion",
    icon: Users,
    emoji: "👨‍👩‍👧",
    title: "Mi familia en España me quiere traer",
    subtitle: "Visado de reunificación familiar",
    para_quien: "Familiares (cónyuge, hijos, padres) de cubanos que ya tienen residencia legal en España.",
    que_hace_falta: "Tu familiar en España presenta el expediente de reagrupación ante Extranjería. Una vez aprobado, tú solicitas el visado en el Consulado.",
    documentos: "Certificado de nacimiento, matrimonio, antecedentes penales — todos legalizados.",
    plazo: "4-10 meses (expediente en España + cita consular).",
    complicado: "",
    cta: "Ver página completa de Reagrupación Familiar",
    link: "/reagrupacion-familiar-cubanos-espana",
    isInternalLink: true
  }
];

export function TiposVisadoAcordeon() {
  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="tipos-visado">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Depende de para qué vienes. <br className="hidden md:block"/>
            <span className="text-black/40">Aquí te explicamos cada uno.</span>
          </h2>
        </div>

        <div className="bg-transparent md:bg-white md:border-[8px] md:border-[#EAEAEA] md:rounded-[32px] md:p-10 md:shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <Accordion className="w-full">
            {visados.map((visado) => {
              const Icon = visado.icon;
              return (
                <Accordion.Item 
                  key={visado.id} 
                  id={visado.id}
                  className="bg-white border border-black/5 mb-4 rounded-3xl px-4 md:px-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                >
                  <Accordion.Heading>
                    <Accordion.Trigger className="flex justify-between items-center w-full py-4 md:py-5 text-left group hover:bg-transparent">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] border border-black/5 flex items-center justify-center shrink-0 text-xl">
                          {visado.emoji}
                        </div>
                        <span className="text-[17px] md:text-[19px] font-bold text-black tracking-tight leading-snug flex-1">
                          {visado.title}
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
                          <span className="text-[16px] font-bold text-[#25D366] tracking-tight mb-4 block">
                            {visado.subtitle}
                          </span>
                          <ul className="flex flex-col gap-4">
                            <li className="text-[15px] text-black/70 leading-relaxed">
                              <strong className="text-black">Para quién:</strong> {visado.para_quien}
                            </li>
                            <li className="text-[15px] text-black/70 leading-relaxed">
                              <strong className="text-black">Qué hace falta:</strong> {visado.que_hace_falta}
                            </li>
                            {visado.documentos && (
                              <li className="text-[15px] text-black/70 leading-relaxed">
                                <strong className="text-black">Documentos a legalizar:</strong> {visado.documentos}
                              </li>
                            )}
                            <li className="text-[15px] text-black/70 leading-relaxed">
                              <strong className="text-black">Plazo orientativo:</strong> {visado.plazo}
                            </li>
                            {visado.complicado && (
                              <li className="text-[15px] text-black/70 leading-relaxed">
                                <strong className="text-black">Lo complicado:</strong> {visado.complicado}
                              </li>
                            )}
                          </ul>
                        </div>

                        {visado.nota && (
                          <div className="bg-[#FAFAFA] rounded-2xl p-4 md:p-5 border border-black/5 flex flex-col gap-2 mt-2">
                            <p className="text-[14px] text-black/60 font-medium">
                              <strong className="text-black">Nota:</strong> {visado.nota}
                            </p>
                          </div>
                        )}

                        <div className="pt-4">
                          {visado.isInternalLink ? (
                            <Link href={visado.link} className="inline-block">
                              <Button 
                                className="bg-black text-white font-bold rounded-xl px-6 h-12 flex items-center gap-2"
                              >
                                {visado.cta} <ArrowRight className="w-4 h-4" />
                              </Button>
                            </Link>
                          ) : (
                            <a href={visado.link} target="_blank" rel="noreferrer" className="inline-block">
                              <Button 
                                className="bg-[#25D366] text-white font-bold rounded-xl px-6 h-12 flex items-center gap-2"
                              >
                                {visado.cta} <ArrowRight className="w-4 h-4" />
                              </Button>
                            </a>
                          )}
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
