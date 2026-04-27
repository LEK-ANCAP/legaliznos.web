"use client";

import { Accordion } from "@heroui/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "sin-estar-cuba",
    question: "¿Puedo gestionar el visado sin estar en Cuba?",
    answer: "La cita del Consulado debe hacerla la persona que solicita el visado, presencialmente en La Habana. Lo que sí hacemos es preparar TODA la documentación desde España para que cuando tu familiar o tú vayáis a la cita, solo tengáis que entregar el sobre. Sin improvisar nada."
  },
  {
    id: "cuanto-tarda",
    question: "¿Cuánto tarda en salir el visado una vez hecha la cita?",
    answer: "Depende del tipo. Visados de estudios: 15-30 días. Visados de trabajo o reagrupación: 30-60 días. El Consulado puede pedir documentación adicional, lo que alarga el plazo. Si eso pasa, te avisamos y preparamos lo que pidan."
  },
  {
    id: "denegacion",
    question: "¿Qué pasa si me deniegan el visado?",
    answer: "Si te deniegan, analizamos el motivo y evaluamos si cabe recurso o nueva solicitud. Los motivos más comunes de denegación son: documentación incompleta (por eso revisamos todo antes), medios económicos insuficientes, o dudas sobre el propósito del viaje. Si vemos riesgo alto de denegación antes de empezar, te lo decimos."
  },
  {
    id: "visado-empleo",
    question: "¿El visado de búsqueda de empleo me permite trabajar directamente?",
    answer: "No. Te permite residir en España durante 3 meses (prorrogable a 12) mientras buscas empleo. Una vez encuentres trabajo y firmes contrato, se convierte en autorización de residencia y trabajo. Es un primer paso, no un permiso de trabajo directo."
  }
];

export function FaqVisados() {
  // JSON-LD for SEO (Rich Snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="relative py-24 bg-white" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
            <HelpCircle className="w-6 h-6 text-black/60" />
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Preguntas <span className="text-black/40">Frecuentes</span>
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl">
            Resolvemos las dudas más comunes sobre la gestión de visados desde Cuba hacia España.
          </p>
        </div>

        <div className="bg-transparent md:bg-[#FAFAFA] md:border md:border-black/5 md:rounded-[32px] md:p-8">
          <Accordion className="w-full">
            {faqs.map((faq) => (
              <Accordion.Item 
                key={faq.id} 
                id={faq.id}
                className="bg-white border-[1.5px] border-black/5 mb-4 rounded-2xl px-4 md:px-6 shadow-sm data-[open=true]:border-black/20 transition-colors"
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="flex justify-between items-center w-full py-5 text-left group hover:bg-transparent">
                    <span className="text-[16px] md:text-[18px] font-bold text-black tracking-tight leading-snug pr-4">
                      {faq.question}
                    </span>
                    <div className="shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center group-data-[open=true]:rotate-180 transition-transform">
                        <ChevronDown className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body>
                    <div className="pb-6">
                      <p className="text-[16px] text-black/70 leading-relaxed font-medium">
                        {faq.answer}
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
