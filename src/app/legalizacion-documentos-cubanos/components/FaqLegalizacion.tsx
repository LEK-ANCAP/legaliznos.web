"use client";

import { Accordion } from "@heroui/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Se puede apostillar un documento cubano?",
    answer: "No. Cuba no está en el Convenio de La Haya, así que la apostilla no aplica. El equivalente es la legalización consular: MINJUS + Consulado de España en La Habana. Si alguien te ofrece 'apostillar' un documento cubano, desconfía — no existe ese trámite."
  },
  {
    question: "¿Cuánto cuesta legalizar antecedentes penales de Cuba?",
    answer: "Con nuestro servicio completo (obtención + MINJUS + Consulado + envío a domicilio), desde 250€. El precio incluye todo excepto las tasas oficiales del gobierno cubano, que te detallamos antes de empezar. Pago en 2 cuotas sin intereses."
  },
  {
    question: "¿Cuánto tarda la legalización de documentos cubanos?",
    answer: "Plazo estándar: 2-3 meses. Servicio exprés: aproximadamente 1 mes. Estos plazos dependen de la situación en Cuba en cada momento (disponibilidad del registro, volumen del MINJUS, citas del Consulado). Te damos una estimación realista al empezar y te informamos si hay cambios."
  },
  {
    question: "¿Necesito ir a Cuba para legalizar mis documentos?",
    answer: <>No. Solo necesitamos una foto clara de tu carnet de identidad cubano. Nuestro equipo en La Habana gestiona todo lo presencial: registro civil, MINJUS, y Consulado. Te enviamos tus documentos legalizados a tu domicilio en <a href="/legalizacion-documentos-madrid" className="font-bold underline hover:text-black">Madrid</a>, <a href="/legalizacion-documentos-valencia" className="font-bold underline hover:text-black">Valencia</a> o cualquier punto de España.</>
  },
  {
    question: "¿Cuánto tiempo tienen de validez los documentos legalizados?",
    answer: "Depende del trámite para el que los necesites. Para extranjería (arraigo, renovaciones), generalmente 6 meses desde la expedición. Para nacionalidad, algunos documentos tienen validez de 3-6 meses. Te asesoramos para que no se te caduquen antes de poder usarlos."
  },
  {
    question: "¿Puedo legalizar un documento que ya tengo en mis manos?",
    answer: "Sí, si tu documento ya fue obtenido en Cuba pero solo necesita la legalización en MINJUS y/o Consulado, ofrecemos el servicio de 'solo legalización' a un precio reducido. Escríbenos con una foto del documento y te decimos qué pasos le faltan."
  },
  {
    question: "¿Qué pasa si el documento tiene errores (nombre mal escrito, fecha incorrecta)?",
    answer: "Si detectamos un error en el documento antes de legalizarlo, te lo comunicamos y gestionamos la corrección en el registro civil cubano. Mejor detectar un error ahora que cuando Extranjería te devuelva el expediente por un dato incorrecto."
  },
  {
    question: "¿Legalizáis documentos académicos (títulos universitarios)?",
    answer: "Sí, pero los documentos académicos tienen un paso extra: antes del MINJUS, deben ser legalizados por el Ministerio de Educación Superior (MES) si son universitarios, o por el Ministerio de Educación (MINED) si son de enseñanza media. Gestionamos todo el proceso completo."
  }
];

export function FaqLegalizacion() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer : "No. Solo necesitamos una foto clara de tu carnet de identidad cubano. Nuestro equipo en La Habana gestiona todo lo presencial: registro civil, MINJUS, y Consulado. Te enviamos tus documentos legalizados a tu domicilio en Madrid, Valencia o cualquier punto de España."
      }
    }))
  };

  return (
    <section className="relative py-24 bg-white" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Dudas sobre legalización <br className="hidden md:block"/>
            <span className="text-black/40">de documentos cubanos</span>
          </h2>
        </div>

        <div className="w-full">
          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item 
                key={index} 
                id={`faq-${index}`}
                aria-label={faq.question}
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="w-full text-left flex justify-between items-center gap-4 hover:bg-transparent py-4 focus:outline-none">
                    <span className="text-[17px] md:text-[19px] font-bold text-black tracking-tight leading-snug">
                      {faq.question}
                    </span>
                    <div className="shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-data-[open=true]:rotate-180 transition-transform">
                      <ChevronDown className="w-4 h-4 text-black" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body>
                    <div className="text-[15px] md:text-[16px] text-black/70 font-medium leading-relaxed pb-8 pt-0">
                      {faq.answer}
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
