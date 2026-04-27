"use client";

import { Accordion } from "@heroui/react";
import Script from "next/script";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cuántos años necesito para la nacionalidad siendo cubano?",
    answer: "El plazo general es de 10 años de residencia legal y continuada. Sin embargo, hay excepciones importantes: si estás casado/a con un ciudadano/a español/a, el plazo se reduce a solo 1 año de residencia. Si puedes acogerte a la Ley de Memoria Democrática por tener ascendencia española (padres o abuelos españoles de origen), los plazos y requisitos cambian completamente. Te evaluamos gratis para determinar con exactitud tu vía."
  },
  {
    question: "¿Qué es el examen CCSE y cómo aprobarlo?",
    answer: "El CCSE (Conocimientos Constitucionales y Socioculturales de España) es un examen obligatorio de 25 preguntas tipo test sobre la Constitución, la organización del Estado, la cultura y la sociedad española. Se aprueba con un mínimo de 15 aciertos. Se realiza presencialmente en centros oficiales del Instituto Cervantes. Hay manuales y aplicaciones oficiales de preparación gratuitos. Con la preparación adecuada, la inmensa mayoría de nuestros clientes lo aprueba a la primera."
  },
  {
    question: "¿Si me deniegan la nacionalidad puedo volver a pedirla?",
    answer: "Sí, absolutamente. Puedes presentar una nueva solicitud de nacionalidad cuando hayas corregido el motivo exacto de la denegación. Los motivos más comunes suelen ser: presentación de documentación caducada o sin legalizar, ausencias de España superiores a las permitidas por ley, o tener antecedentes penales no cancelados. Analizamos tu caso en detalle desde el principio precisamente para evitar pasar por una denegación."
  },
  {
    question: "¿Dónde se realiza la jura de nacionalidad?",
    answer: "La jura se realiza en el Registro Civil de tu ciudad o ante notario. Si estás en Madrid o Valencia, te orientamos sobre cuál te corresponde y cómo sacar la cita rápidamente.",
    answerNode: <>La jura se realiza en el Registro Civil de tu ciudad o ante notario. Si estás en <a href="/legalizacion-documentos-madrid" className="font-bold underline hover:text-black">Madrid</a> o <a href="/legalizacion-documentos-valencia" className="font-bold underline hover:text-black">Valencia</a>, te orientamos sobre cuál te corresponde y cómo sacar la cita rápidamente.</>
  }
];

export function FaqNacionalidad() {
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
    <section className="relative py-24 bg-white" id="faq">
      <Script
        id="faq-schema-nacionalidad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
            <HelpCircle className="w-6 h-6 text-black/60" />
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-[17px] font-medium text-black/60">
            Resolvemos las dudas más comunes sobre la nacionalidad española.
          </p>
        </div>

        <div className="bg-transparent md:bg-[#FAFAFA] md:border md:border-black/5 md:rounded-[32px] md:p-8">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <Accordion.Item 
                key={i} 
                id={`faq-nacionalidad-${i}`}
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
