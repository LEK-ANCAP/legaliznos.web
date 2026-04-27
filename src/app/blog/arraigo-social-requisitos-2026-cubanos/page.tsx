import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Arraigo Social para Cubanos en España 2026 — Guía Completa de Requisitos | LegalizaNos",
  description: "Todo sobre el arraigo social para cubanos: nuevo plazo de 2 años, arraigo sociolaboral, documentos cubanos necesarios, antecedentes penales MINJUS. Guía actualizada abril 2026.",
  alternates: {
    canonical: "https://legalizanos.es/blog/arraigo-social-requisitos-2026-cubanos",
  },
};

export default function BlogArraigoRequisitos() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Puedo trabajar mientras espero la resolución del arraigo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Con el arraigo sociolaboral o social estándar, no puedes trabajar hasta que tengas la resolución favorable y tu TIE. Con la regularización extraordinaria 2026, sí puedes trabajar desde la presentación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se puede hacer el arraigo como autónomo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, pero solo a través del arraigo social (no el sociolaboral). Deberás presentar un plan de negocio y acreditar medios económicos. El arraigo sociolaboral es solo para trabajo por cuenta ajena."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito traducción jurada de mis documentos cubanos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los documentos cubanos están en español, así que generalmente no necesitan traducción jurada. Lo que SÍ necesitan es legalización (MINJUS + Consulado). Si tienes documentos en otro idioma (de otros países donde hayas vivido), esos sí necesitan traducción jurada."
        }
      },
      {
        "@type": "Question",
        "name": "¿Las ausencias de 90 días son seguidas o en total?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En total. Puedes haber hecho varios viajes cortos, pero si suman más de 90 días en los 2 años, no cumples. Guarda billetes de avión, sellos de pasaporte, y cualquier prueba de que estabas en España."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mi pareja de hecho cuenta como vínculo familiar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, si está registrada como pareja de hecho en un registro oficial español. La convivencia sin registro no cuenta como vínculo familiar a efectos del arraigo social."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arraigo social para cubanos en España — guía completa 2026",
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
            <span className="text-black/80 truncate">Arraigo social requisitos 2026</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
              Arraigo social para cubanos en España — guía completa 2026
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-black/50 border-b border-black/5 pb-6">
              <span>Publicado: Abril 2026</span>
              <span>Última actualización: Hoy</span>
              <span>Lectura: 12 minutos</span>
            </div>
          </header>

          {/* Tabla de Contenidos */}
          <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5 mb-12">
            <h2 className="text-[16px] font-bold text-black mb-4 uppercase tracking-wider">Tabla de contenidos</h2>
            <ol className="space-y-2 text-[15px] font-medium text-black/70">
              <li><a href="#cambios-2026" className="hover:text-black hover:underline">1. Qué ha cambiado en 2026 (y por qué te beneficia)</a></li>
              <li><a href="#tipos-arraigo" className="hover:text-black hover:underline">2. Los 3 tipos de arraigo que existen ahora</a></li>
              <li><a href="#requisitos-sociolaboral" className="hover:text-black hover:underline">3. Requisitos del arraigo sociolaboral (el más común)</a></li>
              <li><a href="#requisitos-social" className="hover:text-black hover:underline">4. Requisitos del arraigo social (con vínculos familiares)</a></li>
              <li><a href="#documentos-cubanos" className="hover:text-black hover:underline">5. Los documentos cubanos que necesitas (y que nadie te explica bien)</a></li>
              <li><a href="#presentacion" className="hover:text-black hover:underline">6. Dónde y cómo presentar la solicitud</a></li>
              <li><a href="#plazos" className="hover:text-black hover:underline">7. Cuánto tarda la resolución por provincia</a></li>
              <li><a href="#denegacion" className="hover:text-black hover:underline">8. Qué hacer si te deniegan</a></li>
              <li><a href="#comparativa" className="hover:text-black hover:underline">9. Arraigo vs regularización extraordinaria — cuál te conviene</a></li>
              <li><a href="#faq" className="hover:text-black hover:underline">10. Preguntas frecuentes</a></li>
            </ol>
          </div>

          <div className="space-y-8 text-[17px] md:text-[18px] text-black/80 font-medium leading-relaxed">
            
            <section id="cambios-2026">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">1. Qué ha cambiado en 2026</h2>
              <p className="mb-4">
                Si llevas tiempo buscando información sobre el <Link href="/arraigo-social-cubanos-espana" className="text-black font-bold underline decoration-black/20 hover:decoration-black transition-all">arraigo social</Link>, habrás visto que muchas webs siguen diciendo que necesitas 3 años de permanencia. Eso ya no es así.
              </p>
              <p className="mb-4">
                Con la entrada en vigor del nuevo Reglamento de Extranjería (Real Decreto 1155/2024), el plazo mínimo de permanencia se ha reducido de 3 a 2 años para todos los tipos de arraigo (excepto el familiar, que no exige tiempo mínimo). Esto entró en vigor el 20 de mayo de 2025.
              </p>
              <p className="mb-4">
                Además, se ha creado una nueva figura: el arraigo sociolaboral, que sustituye en gran medida al antiguo arraigo social con contrato. Y el arraigo social "clásico" sigue existiendo, pero ahora está reservado para quienes acreditan vínculos familiares o medios económicos propios (sin contrato de trabajo por cuenta ajena).
              </p>
              <p className="mb-4 font-bold text-black border-l-4 border-[#25D366] pl-4 bg-[#FAFAFA] py-2">
                ¿Qué significa esto para ti como cubano en España? Si llegaste antes de abril de 2024 y has estado viviendo aquí desde entonces, ya cumples el plazo de 2 años.
              </p>
            </section>

            <section id="tipos-arraigo">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">2. Los 3 tipos de arraigo</h2>
              <p className="mb-6">Antes había un solo "arraigo social". Ahora hay tres modalidades principales, cada una para una situación diferente:</p>
              
              <div className="space-y-6">
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5">
                  <h3 className="text-[20px] font-bold text-black mb-2">Arraigo sociolaboral (nuevo)</h3>
                  <p className="text-[16px] text-black/60 mb-3 font-semibold">— tienes o puedes conseguir un contrato de trabajo</p>
                  <ul className="list-disc pl-5 space-y-2 text-[16px]">
                    <li>2 años de permanencia continuada</li>
                    <li>Contrato de trabajo: mínimo 20h semanales, salario mínimo SMI o según convenio, duración mínima 1 año</li>
                    <li>Sin necesidad de informe de integración social</li>
                    <li>NO permite trabajar como autónomo</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5">
                  <h3 className="text-[20px] font-bold text-black mb-2">Arraigo social (reformado)</h3>
                  <p className="text-[16px] text-black/60 mb-3 font-semibold">— tienes familia con residencia legal en España</p>
                  <ul className="list-disc pl-5 space-y-2 text-[16px]">
                    <li>2 años de permanencia continuada</li>
                    <li>Vínculos familiares con residencia legal: cónyuge, pareja registrada, padres, hijos</li>
                    <li>Medios económicos: mínimo 100% IPREM (~600€/mes) por el familiar + 100% por ti</li>
                    <li>O trabajo por cuenta propia (autónomo) si acreditas medios</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5">
                  <h3 className="text-[20px] font-bold text-black mb-2">Arraigo familiar</h3>
                  <p className="text-[16px] text-black/60 mb-3 font-semibold">— tienes un hijo español o eres hijo de español de origen</p>
                  <ul className="list-disc pl-5 space-y-2 text-[16px]">
                    <li>SIN requisito de tiempo mínimo</li>
                    <li>Si tienes un hijo menor con nacionalidad española</li>
                    <li>Si eres hijo de padre o madre español de origen</li>
                    <li>Autorización de hasta 5 años directamente</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 italic text-black/60">Si no sabes cuál te corresponde, la evaluación es gratuita. Nos cuentas tu situación y te decimos cuál es tu mejor vía.</p>
            </section>

            <section id="requisitos-sociolaboral">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">3. Requisitos del arraigo sociolaboral</h2>
              <p className="mb-6">Este es el más común para cubanos que llevan 2+ años en España y tienen o pueden conseguir empleo. Los requisitos son acumulativos — tienes que cumplir TODOS:</p>
              
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-black font-bold">□</span> <div><strong className="text-black">2 años de permanencia continuada:</strong> Ausencias máximas: 90 días en total en esos 2 años. Se demuestra con: empadronamiento histórico, citas médicas, envíos de dinero, facturas, recibos de transporte.</div></li>
                <li className="flex gap-3"><span className="text-black font-bold">□</span> <div><strong className="text-black">No tener antecedentes penales:</strong> Ni en España ni en Cuba ni en ningún país donde hayas vivido los últimos 5 años antes de entrar en España. Los antecedentes de Cuba deben estar legalizados ante el MINJUS y el Consulado de España en La Habana. Si llevas más de 5 años en España: solo necesitas los de España.</div></li>
                <li className="flex gap-3"><span className="text-black font-bold">□</span> <div><strong className="text-black">Contrato de trabajo:</strong> Mínimo 20 horas semanales (antes eran 30). Salario: al menos el SMI proporcional a la jornada. Duración: mínimo 1 año. Firmado por ambas partes. El empleador debe acreditar solvencia económica. Se admiten varios contratos que sumen los requisitos.</div></li>
                <li className="flex gap-3"><span className="text-black font-bold">□</span> <div><strong className="text-black">No ser solicitante de asilo:</strong> Si tienes una solicitud de protección internacional en trámite, no puedes pedir arraigo. El tiempo como solicitante de asilo no cuenta para los 2 años.</div></li>
                <li className="flex gap-3"><span className="text-black font-bold">□</span> <div><strong className="text-black">No tener prohibición de entrada en España.</strong></div></li>
              </ul>
            </section>

            <section id="requisitos-social">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">4. Requisitos del arraigo social con vínculos</h2>
              <p className="mb-4">Si no tienes contrato pero sí tienes familia con residencia legal en España:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mismos requisitos de permanencia (2 años) y antecedentes penales.</li>
                <li>Vínculos familiares con personas extranjeras con residencia legal: cónyuge, pareja de hecho registrada, familiares en primer grado (padres o hijos).</li>
                <li>Medios económicos: 200% del IPREM total (100% por tu familiar + 100% por ti) — unos 1.200€/mes.</li>
                <li>Los medios deben estar disponibles en España y proceder de los familiares mencionados.</li>
                <li>Informe de integración social: emitido por tu Comunidad Autónoma o Ayuntamiento.</li>
              </ul>
            </section>

            <section id="documentos-cubanos">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">5. Los documentos cubanos (lo que nadie explica bien)</h2>
              <p className="mb-4">Aquí es donde la mayoría de las gestorías generalistas fallan con los cubanos. Te dicen "trae tus antecedentes penales" sin explicarte que los de Cuba necesitan un proceso específico:</p>
              
              <div className="bg-black text-white p-6 rounded-2xl mb-6">
                <h3 className="text-[18px] font-bold mb-3">Antecedentes penales de Cuba (obligatorio)</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px] font-medium text-white/80">
                  <li>Hay que obtenerlos en Cuba (registro de antecedentes)</li>
                  <li>Legalizarlos en el MINJUS (Ministerio de Justicia de Cuba)</li>
                  <li>Legalizarlos en el Consulado de España en La Habana</li>
                  <li>Plazo: 2-3 meses de gestión</li>
                  <li>Caducidad: generalmente 6 meses desde la expedición</li>
                  <li className="text-white font-bold">Cuba NO está en el Convenio de La Haya — la apostilla NO vale</li>
                </ul>
              </div>

              <p className="mb-6 font-bold text-[#E63946]">Si te dicen "apostilla tus antecedentes cubanos", desconfía. No existe ese trámite para Cuba.</p>

              <p className="mb-4"><strong>Si acreditas vínculos familiares, también necesitarás:</strong></p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Certificado de nacimiento legalizado (para probar parentesco)</li>
                <li>Certificado de matrimonio legalizado (para probar cónyuge)</li>
              </ul>

              <p className="mb-4">Nosotros gestionamos la obtención y legalización de todos estos documentos. Nuestro equipo en La Habana se encarga de todo sin que viajes.</p>
              
              <Link href="/legalizacion-documentos-cubanos" className="inline-flex items-center gap-2 font-bold text-black hover:text-black/70 transition-colors">
                Ver servicio de legalización de documentos cubanos <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            <section id="presentacion">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">6. Dónde y cómo presentar</h2>
              <p className="mb-6">La solicitud se presenta en la Oficina de Extranjería de la provincia donde tengas tu domicilio habitual.</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#FAFAFA] border border-black/5 p-6 rounded-2xl">
                  <h3 className="font-bold text-black mb-3">Presentación telemática (recomendada)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-[15px]">
                    <li>A través de la sede electrónica del Ministerio de Inclusión</li>
                    <li>Necesitas certificado digital, Cl@ve o DNI electrónico</li>
                    <li>O un representante legal puede presentar por ti</li>
                  </ul>
                </div>
                <div className="bg-[#FAFAFA] border border-black/5 p-6 rounded-2xl">
                  <h3 className="font-bold text-black mb-3">Presentación presencial</h3>
                  <ul className="list-disc pl-5 space-y-1 text-[15px]">
                    <li>Con cita previa en tu Oficina de Extranjería</li>
                    <li>Formulario EX-10 por duplicado</li>
                    <li>Pago de tasa: Modelo 790, código 052 (~38€)</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-bold text-black mb-3">Documentación a presentar:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Formulario EX-10</li>
                <li>Pasaporte completo en vigor (mínimo 4 meses validez)</li>
                <li>Certificado de antecedentes penales legalizado</li>
                <li>Pruebas de permanencia 2 años (empadronamiento histórico + complementarios)</li>
                <li>Contrato de trabajo (si es arraigo sociolaboral)</li>
                <li>Documentación de vínculos familiares + medios económicos (si es arraigo social)</li>
                <li>Informe de integración social (si no tienes vínculos familiares)</li>
                <li>Justificante de pago de tasa</li>
              </ul>
            </section>

            <section id="plazos">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">7. Cuánto tarda la resolución por provincia</h2>
              <p className="mb-6">Los plazos de resolución varían enormemente según la provincia. Estos son los datos reales que vemos en nuestros expedientes:</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-[15px] border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-black/20">
                      <th className="py-3 font-bold text-black">Provincia</th>
                      <th className="py-3 font-bold text-black">Plazo estimado</th>
                      <th className="py-3 font-bold text-black">Comentario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    <tr>
                      <td className="py-3 font-semibold text-black"><Link href="/legalizacion-documentos-madrid" className="underline hover:text-black/70">Madrid</Link></td>
                      <td className="py-3">4-8 meses</td>
                      <td className="py-3 text-black/60">La más lenta por volumen. Varias oficinas (Silva, García de Paredes, Aluche)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-black"><Link href="/legalizacion-documentos-valencia" className="underline hover:text-black/70">Valencia</Link></td>
                      <td className="py-3">3-5 meses</td>
                      <td className="py-3 text-black/60">Más ágil. Una sola oficina principal (av. del Cid)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-black">Barcelona</td>
                      <td className="py-3">4-7 meses</td>
                      <td className="py-3 text-black/60">Alta demanda, plazos similares a Madrid</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-black">Sevilla</td>
                      <td className="py-3">3-6 meses</td>
                      <td className="py-3 text-black/60">Variable</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-black">Málaga</td>
                      <td className="py-3">3-6 meses</td>
                      <td className="py-3 text-black/60">Variable</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-black">Otras provincias</td>
                      <td className="py-3">2-4 meses</td>
                      <td className="py-3 text-black/60">Generalmente más rápidas por menor volumen</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4">Plazo legal máximo: 3 meses. Si no responden en 3 meses, opera el silencio administrativo positivo — técnicamente tu arraigo está concedido. Pero en la práctica, en Madrid y Barcelona casi nunca se resuelve en 3 meses.</p>
            </section>

            <section id="denegacion">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">8. Qué hacer si te deniegan</h2>
              <p className="mb-4">Los motivos más comunes de denegación:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Documentación incompleta o caducada (especialmente antecedentes penales)</li>
                <li>Contrato que no cumple requisitos (jornada insuficiente, salario bajo convenio)</li>
                <li>No demostrar los 2 años de permanencia (huecos en el empadronamiento)</li>
                <li>Antecedentes penales sin cancelar</li>
                <li>Empleador sin solvencia acreditada</li>
              </ul>
              <p className="mb-4"><strong>Si te deniegan:</strong></p>
              <ol className="list-decimal pl-5 space-y-2 mb-6">
                <li>Analiza la resolución — el motivo exacto determina tus opciones</li>
                <li>Recurso de reposición (1 mes de plazo) ante el mismo órgano</li>
                <li>Recurso contencioso-administrativo ante los tribunales</li>
                <li>O corregir el defecto y presentar nueva solicitud</li>
              </ol>
              <p className="italic bg-[#FAFAFA] p-4 rounded-xl border-l-4 border-black text-black/70">
                Nosotros revisamos todo ANTES de presentar para minimizar el riesgo. Si vemos que no cumples, te lo decimos y te orientamos.
              </p>
            </section>

            <section id="comparativa">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">9. Arraigo vs regularización extraordinaria</h2>
              <p className="mb-6">Si estás leyendo esto en 2026, hay otra vía abierta: la <Link href="/blog/regularizacion-extraordinaria-2026-cubanos" className="text-black font-bold underline hover:text-black/70">regularización extraordinaria</Link>. ¿Cuál te conviene?</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-[15px] border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-black/5">
                      <th className="py-3 px-4 font-bold text-black">Criterio</th>
                      <th className="py-3 px-4 font-bold text-black">Arraigo sociolaboral</th>
                      <th className="py-3 px-4 font-bold text-black">Regularización ext. 2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    <tr>
                      <td className="py-3 px-4 font-bold text-black/70">Tiempo en España</td>
                      <td className="py-3 px-4">2 años</td>
                      <td className="py-3 px-4">5 meses ininterrumpidos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-black/70">Contrato necesario</td>
                      <td className="py-3 px-4">Sí (20h, 1 año, SMI)</td>
                      <td className="py-3 px-4">No</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-black/70">Plazo solicitud</td>
                      <td className="py-3 px-4">Sin límite</td>
                      <td className="py-3 px-4">Hasta 30 junio 2026</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-black/70">Puedes trabajar...</td>
                      <td className="py-3 px-4">Después de la resolución</td>
                      <td className="py-3 px-4">Desde la presentación</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-black/70">Duración permiso</td>
                      <td className="py-3 px-4">1 año (renovable)</td>
                      <td className="py-3 px-4">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-black text-white p-6 rounded-2xl mb-6">
                <ul className="space-y-3">
                  <li><strong>Si llevas 5+ meses pero menos de 2 años:</strong> regularización extraordinaria.</li>
                  <li><strong>Si llevas 2+ años y tienes contrato:</strong> arraigo sociolaboral (más estable a largo plazo).</li>
                  <li><strong>Si cumples ambos:</strong> depende de tu prisa y tu situación. Te asesoramos.</li>
                </ul>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-[2rem] font-bold text-black mb-8 mt-12 border-t border-black/10 pt-10">10. Preguntas frecuentes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Puedo trabajar mientras espero la resolución del arraigo?</h3>
                  <p className="text-black/70">Con el arraigo sociolaboral o social estándar, no puedes trabajar hasta que tengas la resolución favorable y tu TIE. Con la regularización extraordinaria 2026, sí puedes trabajar desde la presentación.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Se puede hacer el arraigo como autónomo?</h3>
                  <p className="text-black/70">Sí, pero solo a través del arraigo social (no el sociolaboral). Deberás presentar un plan de negocio y acreditar medios económicos. El arraigo sociolaboral es solo para trabajo por cuenta ajena.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Necesito traducción jurada de mis documentos cubanos?</h3>
                  <p className="text-black/70">Los documentos cubanos están en español, así que generalmente no necesitan traducción jurada. Lo que SÍ necesitan es legalización (MINJUS + Consulado). Si tienes documentos en otro idioma (de otros países donde hayas vivido), esos sí necesitan traducción jurada.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Las ausencias de 90 días son seguidas o en total?</h3>
                  <p className="text-black/70">En total. Puedes haber hecho varios viajes cortos, pero si suman más de 90 días en los 2 años, no cumples. Guarda billetes de avión, sellos de pasaporte, y cualquier prueba de que estabas en España.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Mi pareja de hecho cuenta como vínculo familiar?</h3>
                  <p className="text-black/70">Sí, si está registrada como pareja de hecho en un registro oficial español. La convivencia sin registro no cuenta como vínculo familiar a efectos del arraigo social.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Banner */}
        <section className="max-w-[800px] mx-auto px-6 lg:px-8 mt-16">
          <div className="bg-[#25D366] text-white p-8 md:p-12 rounded-[32px] text-center shadow-lg">
            <h2 className="text-[2rem] font-bold mb-4 tracking-tight leading-tight">
              ¿Quieres saber si cumples los requisitos del arraigo?
            </h2>
            <p className="text-[18px] font-medium text-white/90 mb-8 max-w-2xl mx-auto">
              Te evaluamos gratis por WhatsApp. Te decimos qué tipo de arraigo te conviene, qué documentos necesitas, y cuánto va a costar.
            </p>
            <a 
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Evaluar mi caso gratis
            </a>
          </div>
        </section>

        {/* RELATED CONTENT */}
        <section className="max-w-[800px] mx-auto px-6 lg:px-8 mt-16">
          <h3 className="text-[15px] font-bold text-black/40 uppercase tracking-widest mb-6">También te puede interesar</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/legalizacion-documentos-cubanos" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Legalización de antecedentes penales</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Imprescindible para tu expediente de arraigo.</p>
            </Link>
            <Link href="/blog/regularizacion-extraordinaria-2026-cubanos" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Regularización Extraordinaria 2026</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">La otra vía legal rápida aprobada recientemente.</p>
            </Link>
            <Link href="/arraigo-social-cubanos-espana" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Tramitación completa de arraigo</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Precios y qué incluye nuestro servicio legal.</p>
            </Link>
          </div>
        </section>

      </main>

      <FloatingContact />
    </>
  );
}
