"use client";

import { Accordion } from "@heroui/react";
import Script from "next/script";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tarda la reagrupación familiar con Cuba?",
    answer: "El proceso total suele tardar entre 4 y 10 meses. Se divide en dos fases: Fase España (resolución del expediente) que toma unos 3-6 meses, y Fase Cuba (conseguir cita y visado) que suma 1-4 meses adicionales. Las capitales grandes como Madrid suelen ser más lentas por el volumen de extranjería. Valencia puede ser algo más rápida. Te daremos una estimación específica según tu provincia."
  },
  {
    question: "¿Puedo reagrupar a mis padres?",
    answer: "Sí, pero es el escenario más complejo. Generalmente necesitas poseer una residencia de larga duración (5+ años) o ser español, y sobre todo, debes demostrar con documentos bancarios que dependen económicamente de ti (envío regular de remesas durante al menos un año previo). Los requisitos económicos (IPREM) son notablemente más altos. Es difícil, pero muy factible si se prepara correctamente."
  },
  {
    question: "¿Mi familiar puede trabajar al llegar a España?",
    answer: "Sí. A diferencia de otros visados que requieren trámites extras, el visado de reagrupación familiar ya incluye por defecto la autorización para trabajar. Tu cónyuge o hijo en edad laboral podrá empezar a trabajar por cuenta ajena (y en muchos casos por cuenta propia) desde el momento en que pise España y obtenga su tarjeta TIE."
  },
  {
    question: "¿Qué pasa si me deniegan la reagrupación?",
    answer: "Los motivos más comunes de denegación son: medios económicos insuficientes según el IPREM, vivienda declarada como inadecuada, o aportar documentación incompleta/caducada de Cuba. Si te la deniegan, nosotros analizamos jurídicamente el motivo, evaluamos si cabe un recurso de reposición o alzada, y si no, te orientamos sobre qué mejorar para presentar una nueva solicitud sin repetir el error."
  },
  {
    question: "¿Puede mi familiar venir con visado de turista y quedarse?",
    answer: "Rotundamente no. El visado de estancia (turista) NO se puede convertir en residencia por reagrupación familiar estando en España. Es un error gravísimo y muy común. Tu familiar tendría que salir de España, volver obligatoriamente a Cuba, y solicitar allí el visado específico de reagrupación en el Consulado. Hazlo bien desde el principio para evitar perder tiempo, dinero y arriesgar una deportación."
  }
];

export function FaqReagrupacion() {
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
        id="faq-schema-reagrupacion"
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
            Dudas reales de clientes reales sobre cómo traer a su familia desde Cuba.
          </p>
        </div>

        <div className="bg-transparent md:bg-[#FAFAFA] md:border md:border-black/5 md:rounded-[32px] md:p-8">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <Accordion.Item 
                key={i} 
                id={`faq-reagrupacion-${i}`}
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
