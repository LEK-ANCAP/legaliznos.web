"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Necesito estar en Cuba para legalizar mis documentos?",
    answer: "No. Solo necesitamos una foto de tu carnet de identidad cubano. Nuestro equipo en La Habana hace todo lo presencial. Tú te quedas en España y recibes el documento en tu casa."
  },
  {
    question: "¿Cuánto tarda?",
    answer: "Legalización completa: 2-3 meses. Exprés: 1 mes. Arraigo: 3-6 meses de resolución. Nacionalidad: 12-18 meses. Son plazos reales basados en lo que vemos día a día, no lo que dice la ley en teoría."
  },
  {
    question: "¿Me vais a cobrar más de lo que me digáis?",
    answer: "No. El precio que te damos por WhatsApp es el precio final. Si durante el trámite aparece algo inesperado que tiene coste extra, te llamamos ANTES de gastar un euro. Así de simple."
  },
  {
    question: "¿Por qué debería fiarme de una gestoría online?",
    answer: "Pregunta justa. Trabajamos con contrato escrito. Emitimos factura legal. Tenemos reseñas verificables en Google que puedes leer ahora mismo. Y nuestro sistema de pago en 2 cuotas significa que no pagas el segundo tramo hasta que tu documento esté listo."
  },
  {
    question: "¿Qué es eso del MINJUS y el Consulado? ¿No vale la apostilla?",
    answer: "Cuba no está en el Convenio de La Haya, así que la apostilla no funciona para documentos cubanos. Lo que hay que hacer es legalizar el documento primero en el MINJUS (Ministerio de Justicia de Cuba) y después en el Consulado de España en La Habana. Dos pasos. Nosotros hacemos los dos."
  },
  {
    question: "¿Y si me deniegan el arraigo o la nacionalidad?",
    answer: "Antes de presentar nada, evaluamos tu caso gratis. Si vemos que no cumples los requisitos todavía, te lo decimos y te orientamos sobre qué hacer para cumplirlos. No presentamos expedientes a ver qué pasa — eso sería tirarte el dinero."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // SEO JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA]" id="faq">
      
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col text-center mb-16 lg:mb-20">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Lo que nos preguntan siempre
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto">
            Y lo que respondemos de verdad. Sin jerga legal ni frases de abogado.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white border rounded-[20px] transition-all duration-300 overflow-hidden
                  ${isOpen ? 'border-black/20 shadow-md shadow-black/5' : 'border-black/5 hover:border-black/10'}
                `}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex justify-between items-center gap-6 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-[17px] md:text-[19px] font-bold text-black tracking-tight leading-snug pr-4">
                    {faq.question}
                  </h3>
                  <div 
                    className={`shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FAFAFA]' : ''}`}
                  >
                    <ChevronDown className="w-4 h-4 text-black" />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-[15px] md:text-[16px] text-black/70 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
