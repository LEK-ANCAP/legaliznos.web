"use client";

import { Accordion } from "@heroui/react";
import Script from "next/script";

const faqs = [
  {
    question: "¿Cuánto tarda el arraigo social en resolverse?",
    answer: "Depende de la provincia. En Madrid puede tardar de 4 a 8 meses, mientras que en Valencia suele ser de 3 a 6 meses. El plazo legal máximo que tiene Extranjería es de 3 meses, pero en la práctica suele tardar más. Si pasan 3 meses sin respuesta, opera el silencio administrativo positivo (técnicamente está aprobado). Te avisamos y guiamos en cada fase del proceso.",
    answerNode: <>Depende de la provincia. Los plazos de arraigo varían: en <a href="/legalizacion-documentos-madrid" className="font-bold underline hover:text-black">Madrid</a> 4-8 meses, en <a href="/legalizacion-documentos-valencia" className="font-bold underline hover:text-black">Valencia</a> 3-5 meses. El plazo legal máximo que tiene Extranjería es de 3 meses, pero en la práctica suele tardar más. Si pasan 3 meses sin respuesta, opera el silencio administrativo positivo (técnicamente está aprobado). Te avisamos y guiamos en cada fase del proceso.</>
  },
  {
    question: "¿Puedo trabajar mientras espero la resolución del arraigo?",
    answer: "No con el arraigo social estándar — hasta que no tengas la resolución favorable y tu TIE (tarjeta de identidad), no puedes trabajar legalmente. Sin embargo, con la regularización extraordinaria de 2026, sí estás habilitado para trabajar desde el mismo momento de la presentación de la solicitud."
  },
  {
    question: "¿Qué contrato necesito para el arraigo social?",
    answer: "Necesitas un contrato con un mínimo de 20 horas semanales y una duración mínima de 1 año, con un salario que sea al menos proporcional al Salario Mínimo Interprofesional (SMI). El contrato debe describir la actividad, incluir los datos completos del empleador, y estar firmado por ambas partes. Nosotros revisamos el contrato antes de presentarlo para asegurar que cumple todos los requisitos."
  },
  {
    question: "¿Y si no tengo contrato de trabajo?",
    answer: "Puedes optar por el arraigo por vínculos familiares (si tienes cónyuge, pareja registrada, padres o hijos con residencia legal en España) siempre que ellos puedan acreditar medios económicos suficientes para mantenerte. Otra opción es presentar un plan de negocio robusto para trabajar por cuenta propia (autónomo). Te asesoramos sobre cuál es la mejor vía según tu situación."
  },
  {
    question: "¿Los antecedentes penales de Cuba caducan?",
    answer: "El documento en sí no tiene fecha de caducidad impresa, pero la oficina de Extranjería suele exigir que tenga menos de 6 meses desde su fecha de expedición. Si tus antecedentes penales tienen más de 6 meses, es muy probable que te los pidan de nuevo actualizados. Nosotros te orientamos sobre los plazos para gestionarlos en el momento justo y que no se te caduquen."
  }
];

export function FaqArraigo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="faq">
      <Script
        id="faq-schema-arraigo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            Preguntas frecuentes sobre el Arraigo Social
          </h2>
          <p className="text-[17px] font-medium text-black/60">
            Resolvemos las dudas más comunes de los cubanos sobre este trámite.
          </p>
        </div>

        <div className="bg-transparent md:bg-[#FAFAFA] md:border md:border-black/5 md:rounded-[32px] md:p-8">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <Accordion.Item 
                key={i} 
                id={`faq-${i}`}
                className="bg-white border-[1.5px] border-black/5 mb-4 rounded-2xl px-4 md:px-6 shadow-sm data-[open=true]:border-black/20 transition-colors"
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="flex justify-between items-center w-full py-5 text-left group hover:bg-transparent">
                    <span className="text-[16px] md:text-[18px] font-bold text-black tracking-tight leading-snug pr-4">
                      {faq.question}
                    </span>
                    <div className="shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center group-data-[open=true]:rotate-180 transition-transform">
                        <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body>
                    <div className="pb-6">
                      <p className="text-[16px] text-black/70 leading-relaxed font-medium">
                        {faq.answerNode || faq.answer}
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
