import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "¿Cuánto Tarda la Nacionalidad Española? Plazos Reales 2026 para Cubanos | LegalizaNos",
  description: "Plazos reales de la nacionalidad española por residencia en 2026. Cuánto tarda por vía, qué hacer si se retrasa, y cómo afecta ser cubano. Datos actualizados.",
  alternates: {
    canonical: "https://legalizanos.es/blog/cuanto-tarda-nacionalidad-espanola",
  },
};

export default function BlogCuantoTardaNacionalidad() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿El tiempo como irregular cuenta para los 10 años?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Los 10 años deben ser de residencia LEGAL. El tiempo sin papeles no cuenta. Si obtuviste el arraigo en 2020, tu reloj empezó en 2020."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo acelerar el proceso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay vía oficial para acelerar la resolución del Ministerio. Lo que sí puedes hacer es presentar un expediente impecable para evitar requerimientos (que añaden meses) y tener los documentos cubanos legalizados de antemano."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el CCSE y es difícil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es un examen de 25 preguntas sobre España (Constitución, cultura, sociedad). Se aprueba con 15 aciertos. Hay manuales gratuitos del Instituto Cervantes. La mayoría de nuestros clientes lo aprueba a la primera. Cuesta ~85€."
        }
      },
      {
        "@type": "Question",
        "name": "¿Pierdo la nacionalidad cubana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cuba no reconoce la doble nacionalidad. España sí la reconoce con países iberoamericanos. En la práctica, una vez tengas el pasaporte español, viajas con él. Consulta al consulado cubano sobre tu situación específica."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Cuánto tarda la nacionalidad española? Los plazos que nadie te cuenta",
    "datePublished": "2026-04-20T00:00:00+02:00",
    "dateModified": new Date().toISOString(),
    "author": [{
        "@type": "Organization",
        "name": "LegalizaNos",
        "url": "https://legalizanos.es"
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-32 pb-24 bg-[#FAFAFA] min-h-screen selection:bg-black/10 text-foreground">
        <article className="max-w-[800px] mx-auto px-6 lg:px-8 bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-black/80 truncate">Cuánto tarda nacionalidad española</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
              ¿Cuánto tarda la nacionalidad española? Los plazos que nadie te cuenta
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-black/50 border-b border-black/5 pb-6">
              <span>Publicado: Abril 2026</span>
              <span>Última actualización: Hoy</span>
              <span>Lectura: 8 minutos</span>
            </div>
          </header>

          {/* Tabla de Contenidos */}
          <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5 mb-12">
            <h2 className="text-[16px] font-bold text-black mb-4 uppercase tracking-wider">Tabla de contenidos</h2>
            <ol className="space-y-2 text-[15px] font-medium text-black/70">
              <li><a href="#ley-vs-realidad" className="hover:text-black hover:underline">1. Lo que dice la ley vs lo que pasa de verdad</a></li>
              <li><a href="#plazos-por-via" className="hover:text-black hover:underline">2. Plazos por vía de acceso</a></li>
              <li><a href="#fases-del-proceso" className="hover:text-black hover:underline">3. Fases del proceso y cuánto dura cada una</a></li>
              <li><a href="#retrasos" className="hover:text-black hover:underline">4. Qué hacer si se retrasa</a></li>
              <li><a href="#afecta-ser-cubano" className="hover:text-black hover:underline">5. Cómo afecta ser cubano (documentos + tiempos extra)</a></li>
              <li><a href="#faq" className="hover:text-black hover:underline">6. Preguntas frecuentes</a></li>
            </ol>
          </div>

          <div className="space-y-8 text-[17px] md:text-[18px] text-black/80 font-medium leading-relaxed">
            
            <section id="ley-vs-realidad">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">1. Lo que dice la ley vs la realidad</h2>
              <p className="mb-4">
                La ley dice que el Ministerio de Justicia tiene un plazo máximo de 1 año para resolver tu solicitud de <Link href="/nacionalidad-espanola-cubanos" className="text-black font-bold underline decoration-black/20 hover:decoration-black transition-all">nacionalidad española</Link>. Si no responde en ese plazo, opera la presunción favorable — técnicamente, tu nacionalidad está concedida por silencio administrativo positivo.
              </p>
              <p className="mb-4">
                En la práctica, los tiempos han variado enormemente en los últimos años. Ha habido épocas con resoluciones en 8-10 meses y épocas donde se superaban los 2 años. En 2026, los plazos se están estabilizando, pero siguen siendo impredecibles.
              </p>
              <p className="mb-4 font-bold text-black border-l-4 border-[#25D366] pl-4 bg-[#FAFAFA] py-2">
                Lo que sí podemos decirte: el tiempo total desde que empiezas a preparar el expediente hasta que juras como español es más largo de lo que la mayoría piensa, porque hay fases previas y posteriores a la resolución.
              </p>
            </section>

            <section id="plazos-por-via">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">2. Plazos por vía de acceso</h2>
              
              <div className="overflow-x-auto mb-6 border border-black/10 rounded-2xl">
                <table className="w-full text-left text-[15px] min-w-[600px] border-collapse">
                  <thead>
                    <tr className="bg-black/5 border-b border-black/10">
                      <th className="py-4 px-4 font-bold text-black">Vía</th>
                      <th className="py-4 px-4 font-bold text-black">Residencia necesaria</th>
                      <th className="py-4 px-4 font-bold text-black">Resolución media</th>
                      <th className="py-4 px-4 font-bold text-black">Total estimado (prep. + res. + jura)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-black">General</td>
                      <td className="py-3 px-4">10 años</td>
                      <td className="py-3 px-4">12-18 meses</td>
                      <td className="py-3 px-4 text-black/60 font-bold">14-22 meses</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-black">Matrimonio con español/a</td>
                      <td className="py-3 px-4">1 año</td>
                      <td className="py-3 px-4">10-15 meses</td>
                      <td className="py-3 px-4 text-black/60 font-bold">12-18 meses</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-black">Ley de Memoria Democrática</td>
                      <td className="py-3 px-4">No requiere</td>
                      <td className="py-3 px-4">8-14 meses</td>
                      <td className="py-3 px-4 text-black/60 font-bold">10-16 meses</td>
                    </tr>
                    <tr className="bg-[#25D366]/5">
                      <td className="py-3 px-4 font-bold text-black">Países iberoamericanos (Cuba)</td>
                      <td className="py-3 px-4">2 años</td>
                      <td className="py-3 px-4">12-18 meses</td>
                      <td className="py-3 px-4 text-black font-bold">14-22 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4 text-[15px] bg-[#FAFAFA] p-4 rounded-xl">
                <strong className="text-black">Nota para cubanos:</strong> Cuba es país iberoamericano, pero la vía de 2 años NO aplica al arraigo social — se requieren 2 años de residencia LEGAL. Si entraste con arraigo (residencia temporal), necesitas renovar y acumular los 2 años desde que te concedieron la residencia, no desde que llegaste a España.
              </p>
            </section>

            <section id="fases-del-proceso">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">3. Fases del proceso</h2>
              
              <div className="space-y-6">
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-bold text-black/10 text-[40px] leading-none select-none">1</div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Preparación del expediente <span className="text-[16px] text-black/60">(1-3 meses)</span></h3>
                  <ul className="list-disc pl-5 space-y-1 text-[16px]">
                    <li>Obtener y legalizar documentos cubanos (nacimiento, antecedentes) — 30-45 días si empiezas de cero</li>
                    <li>Aprobar examen CCSE (convocatorias cada 2-3 meses)</li>
                    <li>Reunir documentación complementaria</li>
                    <li><strong>Consejo:</strong> empieza por los documentos cubanos — son lo que más tarda</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-bold text-black/10 text-[40px] leading-none select-none">2</div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Presentación <span className="text-[16px] text-black/60">(1 día)</span></h3>
                  <ul className="list-disc pl-5 space-y-1 text-[16px]">
                    <li>Presentación telemática del expediente</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-bold text-black/10 text-[40px] leading-none select-none">3</div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Espera de resolución <span className="text-[16px] text-[#E63946] font-bold">(8-18 meses)</span></h3>
                  <ul className="list-disc pl-5 space-y-1 text-[16px]">
                    <li>El Ministerio de Justicia revisa tu expediente</li>
                    <li>Pueden pedir documentación adicional (requerimientos)</li>
                    <li>Si pasa 1 año sin respuesta: silencio administrativo positivo</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-bold text-black/10 text-[40px] leading-none select-none">4</div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Resolución favorable → Jura <span className="text-[16px] text-black/60">(1-3 meses)</span></h3>
                  <ul className="list-disc pl-5 space-y-1 text-[16px]">
                    <li>Una vez concedida, tienes 180 días para jurar/prometer ante el Registro Civil</li>
                    <li>La cita de jura puede tardar 1-3 meses según el Registro Civil</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-bold text-black/10 text-[40px] leading-none select-none">5</div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Después de la jura <span className="text-[16px] text-black/60">(1-2 meses)</span></h3>
                  <ul className="list-disc pl-5 space-y-1 text-[16px]">
                    <li>Inscripción en el Registro Civil</li>
                    <li>Solicitud de DNI y pasaporte español</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 font-bold text-black border-l-4 border-black pl-4 py-2">Total realista: desde que decides tramitar la nacionalidad hasta que tienes el pasaporte español en la mano, cuenta con 18-30 meses. No es rápido, pero es definitivo.</p>
            </section>

            <section id="retrasos">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">4. Qué hacer si se retrasa</h2>
              <p className="mb-6">Si han pasado 12 meses desde que presentaste y no tienes respuesta:</p>
              
              <div className="space-y-4">
                <div className="bg-white border-[1.5px] border-black/10 p-5 rounded-2xl">
                  <h3 className="font-bold text-black mb-2">Opción 1: Esperar</h3>
                  <p className="text-[15px] text-black/70">Muchas resoluciones llegan entre el mes 12 y el 18. Si no tienes urgencia, esperar es legítimo.</p>
                </div>
                <div className="bg-white border-[1.5px] border-black/10 p-5 rounded-2xl">
                  <h3 className="font-bold text-black mb-2">Opción 2: Reclamar por silencio administrativo</h3>
                  <p className="text-[15px] text-black/70">Pasados 12 meses, puedes considerar que tu nacionalidad ha sido concedida por silencio positivo. Puedes iniciar el procedimiento de jura directamente. En la práctica, algunos Registros Civiles aceptan esto y otros piden que esperes la resolución expresa.</p>
                </div>
                <div className="bg-white border-[1.5px] border-black/10 p-5 rounded-2xl">
                  <h3 className="font-bold text-black mb-2">Opción 3: Recurso contencioso-administrativo</h3>
                  <p className="text-[15px] text-black/70">Si pasan 18+ meses, puedes presentar recurso ante los tribunales para que obliguen al Ministerio a resolver. Esto requiere abogado y procurador.</p>
                </div>
              </div>
              <p className="mt-6 italic bg-black/5 p-4 rounded-xl">Lo que hacemos nosotros: seguimiento periódico del estado de tu expediente. Te avisamos cuando hay movimiento y te orientamos sobre cuándo tiene sentido reclamar.</p>
            </section>

            <section id="afecta-ser-cubano">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">5. Cómo afecta ser cubano</h2>
              <p className="mb-4">Ser cubano añade tiempo al proceso por una razón principal: tus documentos cubanos necesitan legalización especial.</p>
              
              <h3 className="text-[18px] font-bold text-black mb-2 mt-6">Los documentos que necesitas legalizar:</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Certificado de nacimiento (MINJUS + Consulado) — 30-45 días</li>
                <li>Certificado de antecedentes penales (MINJUS + Consulado) — 30-45 días</li>
              </ul>
              
              <p className="mb-4">Estos documentos tienen caducidad. Si los pides demasiado pronto, pueden caducar antes de que el Ministerio revise tu expediente. Si los pides demasiado tarde, retrasan la presentación.</p>
              
              <div className="bg-black text-white p-6 rounded-2xl mb-6">
                <h3 className="text-[18px] font-bold mb-2">Estrategia que recomendamos:</h3>
                <p className="text-[15px] font-medium text-white/80">Pide los documentos cubanos en cuanto decidas tramitar la nacionalidad. Preséntalo todo junto. Si el Ministerio tarda más de 6 meses en revisar y tus antecedentes caducan, ya veremos si te los piden de nuevo — pero al menos no retrasaste la presentación.</p>
              </div>

              <Link href="/legalizacion-documentos-cubanos" className="inline-flex items-center gap-2 font-bold text-black hover:text-black/70 transition-colors">
                Gestionar documentos cubanos para nacionalidad <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            <section id="faq">
              <h2 className="text-[2rem] font-bold text-black mb-8 mt-12 border-t border-black/10 pt-10">6. Preguntas frecuentes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿El tiempo como irregular cuenta para los 10 años?</h3>
                  <p className="text-black/70">No. Los 10 años deben ser de residencia LEGAL. El tiempo sin papeles no cuenta. Si obtuviste el arraigo en 2020, tu reloj empezó en 2020.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Puedo acelerar el proceso?</h3>
                  <p className="text-black/70">No hay vía oficial para acelerar la resolución del Ministerio. Lo que sí puedes hacer es presentar un expediente impecable para evitar requerimientos (que añaden meses) y tener los documentos cubanos legalizados de antemano.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Qué es el CCSE y es difícil?</h3>
                  <p className="text-black/70">Es un examen de 25 preguntas sobre España (Constitución, cultura, sociedad). Se aprueba con 15 aciertos. Hay manuales gratuitos del Instituto Cervantes. La mayoría de nuestros clientes lo aprueba a la primera. Cuesta ~85€.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Pierdo la nacionalidad cubana?</h3>
                  <p className="text-black/70">Cuba no reconoce la doble nacionalidad. España sí la reconoce con países iberoamericanos. En la práctica, una vez tengas el pasaporte español, viajas con él. Consulta al consulado cubano sobre tu situación específica.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Banner */}
        <section className="max-w-[800px] mx-auto px-6 lg:px-8 mt-16">
          <div className="bg-[#25D366] text-white p-8 md:p-12 rounded-[32px] text-center shadow-lg">
            <h2 className="text-[2rem] font-bold mb-4 tracking-tight leading-tight">
              ¿Quieres saber si puedes solicitar la nacionalidad?
            </h2>
            <p className="text-[18px] font-medium text-white/90 mb-8 max-w-2xl mx-auto">
              Te orientamos gratis por WhatsApp sobre los plazos y documentos.
            </p>
            <a 
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Consulta gratis
            </a>
          </div>
        </section>

        {/* RELATED CONTENT */}
        <section className="max-w-[800px] mx-auto px-6 lg:px-8 mt-16">
          <h3 className="text-[15px] font-bold text-black/40 uppercase tracking-widest mb-6">También te puede interesar</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/nacionalidad-espanola-cubanos" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Tramitación de nacionalidad</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Servicio completo para cubanos en España.</p>
            </Link>
            <Link href="/legalizacion-documentos-cubanos" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Documentos para nacionalidad</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Legalizamos tus certificados desde Cuba.</p>
            </Link>
            <Link href="/arraigo-social-cubanos-espana" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Arraigo social</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">El primer paso legal hacia la nacionalidad.</p>
            </Link>
          </div>
        </section>

      </main>

      <FloatingContact />
    </>
  );
}
