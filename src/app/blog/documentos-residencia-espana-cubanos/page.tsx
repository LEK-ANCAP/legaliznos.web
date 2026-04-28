import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, MessageCircle, CheckSquare } from "lucide-react";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Documentos para Residencia en España siendo Cubano — Checklist 2026 | LegalizaNos",
  description: "Lista completa de documentos que necesitas para obtener la residencia en España siendo cubano. Arraigo, reagrupación, no lucrativa. Qué legalizar y qué no. Checklist descargable.",
  alternates: {
    canonical: "https://legalizanos.es/blog/documentos-residencia-espana-cubanos",
  },
};

export default function BlogDocumentosResidencia() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Puedo presentar los documentos en otro idioma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si has vivido en otro país y tus antecedentes penales están en otro idioma, necesitan traducción jurada al español. Los documentos cubanos ya están en español y no la necesitan."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo antes debo empezar a reunir documentos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Empieza por los documentos cubanos (30-45 días de gestión). Los demás documentos puedes reunirlos en 1-2 semanas. No dejes los cubanos para el final."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo usar copias digitales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende del trámite. La presentación telemática acepta copias digitales. La presentación presencial suele pedir originales. Nosotros presentamos telemáticamente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si un documento tiene un error?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si detectamos un error (nombre mal escrito, fecha incorrecta) ANTES de presentar, gestionamos la corrección en Cuba. Si Extranjería lo detecta después, emite un requerimiento y tienes 10-15 días para corregirlo."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Documentos necesarios para la residencia en España siendo cubano — checklist 2026",
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
            <span className="text-black/80 truncate">Documentos residencia España</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
              Documentos necesarios para la residencia en España siendo cubano — checklist 2026
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-black/50 border-b border-black/5 pb-6">
              <span>Publicado: Abril 2026</span>
              <span>Última actualización: Hoy</span>
              <span>Lectura: 10 minutos</span>
            </div>
          </header>

          {/* Tabla de Contenidos */}
          <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5 mb-12">
            <h2 className="text-[16px] font-bold text-black mb-4 uppercase tracking-wider">Tabla de contenidos</h2>
            <ol className="space-y-2 text-[15px] font-medium text-black/70">
              <li><a href="#no-todos-iguales" className="hover:text-black hover:underline">1. No todos los permisos piden lo mismo</a></li>
              <li><a href="#checklist-por-tipo" className="hover:text-black hover:underline">2. Checklist por tipo de residencia</a></li>
              <li><a href="#documentos-cubanos" className="hover:text-black hover:underline">3. Los documentos cubanos: qué necesita legalización y qué no</a></li>
              <li><a href="#errores-comunes" className="hover:text-black hover:underline">4. Errores comunes con la documentación</a></li>
              <li><a href="#donde-conseguir" className="hover:text-black hover:underline">5. Dónde conseguir cada documento</a></li>
              <li><a href="#faq" className="hover:text-black hover:underline">6. Preguntas frecuentes</a></li>
            </ol>
          </div>

          <div className="space-y-8 text-[17px] md:text-[18px] text-black/80 font-medium leading-relaxed">
            
            <section id="no-todos-iguales">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">1. No todos los permisos piden lo mismo</h2>
              <p className="mb-4">
                Hay al menos 6 tipos de autorización de residencia en España, y cada uno pide documentos diferentes. El error más común es buscar "documentos para residencia" como si fuera una lista única. No lo es.
              </p>
              <p className="mb-4 font-bold text-black border-l-4 border-[#25D366] pl-4 py-2 bg-[#FAFAFA]">
                Tu primer paso es saber QUÉ tipo de residencia vas a solicitar. Tu segundo paso es reunir exactamente lo que ese tipo pide — ni más, ni menos.
              </p>
            </section>

            <section id="checklist-por-tipo">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">2. Checklist por tipo de residencia</h2>
              
              <div className="space-y-8">
                {/* Arraigo Sociolaboral */}
                <div className="bg-white border-[1.5px] border-black/10 p-6 rounded-3xl shadow-sm">
                  <h3 className="text-[20px] font-bold text-black mb-1"><Link href="/arraigo-social-cubanos-espana" className="hover:underline">ARRAIGO SOCIOLABORAL</Link></h3>
                  <p className="text-[15px] font-semibold text-black/50 mb-4">(2 años en España + contrato)</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Pasaporte completo en vigor (mín. 4 meses validez)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Formulario EX-10 por duplicado</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-[#E63946] shrink-0" /> <span className="font-medium text-black">Certificado de antecedentes penales de Cuba — <Link href="/legalizacion-documentos-cubanos" className="underline hover:text-black/70">legalizado MINJUS + Consulado</Link></span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Certificado de antecedentes penales de España</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Empadronamiento histórico (2 años)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Pruebas complementarias de permanencia (citas médicas, envíos dinero, facturas)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Contrato de trabajo (mín. 20h/semana, 1 año, SMI)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Documentación del empleador (CIF, TC2, IRPF, escrituras)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Justificante de pago tasa 790 código 052</span></li>
                  </ul>
                </div>

                {/* Arraigo Social */}
                <div className="bg-white border-[1.5px] border-black/10 p-6 rounded-3xl shadow-sm">
                  <h3 className="text-[20px] font-bold text-black mb-1">ARRAIGO SOCIAL CON VÍNCULOS FAMILIARES</h3>
                  <p className="text-[15px] font-semibold text-black/50 mb-4">(2 años + familia con residencia)</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Todo lo anterior EXCEPTO contrato de trabajo</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-[#E63946] shrink-0" /> <span className="font-medium text-black">Certificados que acrediten el vínculo familiar — legalizados (nacimiento, matrimonio)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Copia de la autorización de residencia del familiar</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Informe de integración social (Ayuntamiento o CCAA)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Acreditación de medios económicos (200% IPREM)</span></li>
                  </ul>
                </div>

                {/* Reagrupación */}
                <div className="bg-white border-[1.5px] border-black/10 p-6 rounded-3xl shadow-sm">
                  <h3 className="text-[20px] font-bold text-black mb-1"><Link href="/reagrupacion-familiar-cubanos-espana" className="hover:underline">REAGRUPACIÓN FAMILIAR</Link></h3>
                  <p className="text-[15px] font-semibold text-black/50 mb-4">(tu familiar en España te trae)</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-[#E63946] shrink-0" /> <span className="font-medium text-black">Certificado de nacimiento legalizado</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-[#E63946] shrink-0" /> <span className="font-medium text-black">Certificado de matrimonio legalizado (si reagrupas cónyuge)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-[#E63946] shrink-0" /> <span className="font-medium text-black">Certificado de antecedentes penales legalizado</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Certificado médico</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Seguro médico</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>2 fotos tipo pasaporte</span></li>
                  </ul>
                </div>

                {/* Nacionalidad */}
                <div className="bg-white border-[1.5px] border-black/10 p-6 rounded-3xl shadow-sm">
                  <h3 className="text-[20px] font-bold text-black mb-1"><Link href="/nacionalidad-espanola-cubanos" className="hover:underline">NACIONALIDAD ESPAÑOLA POR RESIDENCIA</Link></h3>
                  <p className="text-[15px] font-semibold text-black/50 mb-4">(para quienes ya tienen residencia legal)</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-[#E63946] shrink-0" /> <span className="font-medium text-black">Certificado de nacimiento de Cuba — legalizado MINJUS + Consulado</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-[#E63946] shrink-0" /> <span className="font-medium text-black">Certificado de antecedentes penales de Cuba — legalizado</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Certificado de antecedentes penales de España</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Empadronamiento histórico</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Certificado de aprobación CCSE</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Certificado DELE A2 (cubanos suelen estar exentos por país hispanohablante)</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-black/20 shrink-0" /> <span>Pasaporte y NIE/TIE</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="documentos-cubanos">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">3. Documentos cubanos: qué legalizar</h2>
              <p className="mb-6 font-bold text-black text-[18px]">
                Regla simple: cualquier documento oficial emitido en Cuba que presentes ante una administración española necesita legalización ante el MINJUS y el Consulado de España en La Habana.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-[15px] min-w-[600px] border-collapse border border-black/10 rounded-2xl hidden md:table">
                  <thead>
                    <tr className="bg-black/5 border-b border-black/10">
                      <th className="py-3 px-4 font-bold text-black">Documento</th>
                      <th className="py-3 px-4 font-bold text-black">¿Necesita legalización?</th>
                      <th className="py-3 px-4 font-bold text-black">¿Necesita traducción jurada?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    <tr>
                      <td className="py-3 px-4 font-semibold">Certificado de antecedentes penales de Cuba</td>
                      <td className="py-3 px-4 text-[#E63946] font-bold">SÍ — MINJUS + Consulado</td>
                      <td className="py-3 px-4 text-black/60">NO (está en español)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Certificado de nacimiento cubano</td>
                      <td className="py-3 px-4 text-[#E63946] font-bold">SÍ — MINJUS + Consulado</td>
                      <td className="py-3 px-4 text-black/60">NO</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Certificado de matrimonio cubano</td>
                      <td className="py-3 px-4 text-[#E63946] font-bold">SÍ — MINJUS + Consulado</td>
                      <td className="py-3 px-4 text-black/60">NO</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Título universitario cubano</td>
                      <td className="py-3 px-4 text-[#E63946] font-bold">SÍ — MES/MINED + MINJUS + Consulado</td>
                      <td className="py-3 px-4 text-black/60">NO</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Pasaporte cubano</td>
                      <td className="py-3 px-4 text-black/60">NO (es de identidad)</td>
                      <td className="py-3 px-4 text-black/60">NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6 bg-[#FAFAFA] p-4 rounded-xl border-l-4 border-[#E63946] font-medium text-black">
                Cuba NO está en el Convenio de La Haya. La apostilla NO existe para documentos cubanos. Si alguien te dice "apostilla tus documentos cubanos", desconfía.
              </p>

              <Link href="/legalizacion-documentos-cubanos" className="inline-flex items-center gap-2 font-bold text-black hover:text-black/70 transition-colors">
                Gestionar legalización de documentos cubanos <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            <section id="errores-comunes">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">4. Errores comunes</h2>
              
              <div className="space-y-4">
                <div className="bg-[#FAFAFA] border border-black/5 p-5 rounded-2xl">
                  <h3 className="font-bold text-black text-[18px] mb-2">Error 1: Presentar antecedentes penales caducados</h3>
                  <p className="text-[16px] text-black/70">Los antecedentes penales tienen una vigencia de 3-6 meses según el trámite. Si los pediste hace 8 meses, probablemente te los devuelvan.</p>
                </div>
                <div className="bg-[#FAFAFA] border border-black/5 p-5 rounded-2xl">
                  <h3 className="font-bold text-black text-[18px] mb-2">Error 2: No legalizar los documentos cubanos</h3>
                  <p className="text-[16px] text-black/70">Un certificado de nacimiento cubano sin legalizar no vale nada ante Extranjería o el Registro Civil español. Es papel mojado.</p>
                </div>
                <div className="bg-[#FAFAFA] border border-black/5 p-5 rounded-2xl">
                  <h3 className="font-bold text-black text-[18px] mb-2">Error 3: Confundir legalización con apostilla</h3>
                  <p className="text-[16px] text-black/70">Cuba no tiene apostilla. El proceso es MINJUS + Consulado. Son cosas diferentes.</p>
                </div>
                <div className="bg-[#FAFAFA] border border-black/5 p-5 rounded-2xl">
                  <h3 className="font-bold text-black text-[18px] mb-2">Error 4: Presentar fotocopias en vez de originales</h3>
                  <p className="text-[16px] text-black/70">Extranjería pide originales o copias compulsadas. No vale una fotocopia simple.</p>
                </div>
                <div className="bg-[#FAFAFA] border border-black/5 p-5 rounded-2xl">
                  <h3 className="font-bold text-black text-[18px] mb-2">Error 5: No tener el pasaporte con validez suficiente</h3>
                  <p className="text-[16px] text-black/70">Tu pasaporte debe tener al menos 4 meses de validez en el momento de la solicitud. Si caduca antes, renuévalo primero.</p>
                </div>
              </div>
            </section>

            <section id="donde-conseguir">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">5. Dónde conseguir cada documento</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[15px] border-collapse border border-black/10 rounded-2xl min-w-[500px]">
                  <thead>
                    <tr className="bg-black/5 border-b border-black/10">
                      <th className="py-3 px-4 font-bold text-black">Documento</th>
                      <th className="py-3 px-4 font-bold text-black">Dónde se obtiene</th>
                      <th className="py-3 px-4 font-bold text-black">Plazo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    <tr>
                      <td className="py-3 px-4 font-semibold">Antecedentes penales Cuba (legalizados)</td>
                      <td className="py-3 px-4 font-bold text-[#25D366]">Nosotros lo gestionamos en Cuba</td>
                      <td className="py-3 px-4">30-45 días</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Antecedentes penales España</td>
                      <td className="py-3 px-4">sede.mjusticia.gob.es</td>
                      <td className="py-3 px-4">1-3 días</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Empadronamiento histórico</td>
                      <td className="py-3 px-4">Tu ayuntamiento</td>
                      <td className="py-3 px-4">1-7 días</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Informe de integración social</td>
                      <td className="py-3 px-4">Tu ayuntamiento o CCAA</td>
                      <td className="py-3 px-4">1 mes máx</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Certificado CCSE</td>
                      <td className="py-3 px-4">Instituto Cervantes</td>
                      <td className="py-3 px-4">Convocatorias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-[2rem] font-bold text-black mb-8 mt-12 border-t border-black/10 pt-10">6. Preguntas frecuentes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Puedo presentar los documentos en otro idioma?</h3>
                  <p className="text-black/70">Si has vivido en otro país y tus antecedentes penales están en otro idioma, necesitan traducción jurada al español. Los documentos cubanos ya están en español y no la necesitan.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Cuánto tiempo antes debo empezar a reunir documentos?</h3>
                  <p className="text-black/70">Empieza por los documentos cubanos (30-45 días de gestión). Los demás documentos puedes reunirlos en 1-2 semanas. No dejes los cubanos para el final.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Puedo usar copias digitales?</h3>
                  <p className="text-black/70">Depende del trámite. La presentación telemática acepta copias digitales. La presentación presencial suele pedir originales. Nosotros presentamos telemáticamente.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Qué pasa si un documento tiene un error?</h3>
                  <p className="text-black/70">Si detectamos un error (nombre mal escrito, fecha incorrecta) ANTES de presentar, gestionamos la corrección en Cuba. Si Extranjería lo detecta después, emite un requerimiento y tienes 10-15 días para corregirlo.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Banner */}
        <section className="max-w-[800px] mx-auto px-6 lg:px-8 mt-16">
          <div className="bg-[#25D366] text-white p-8 md:p-12 rounded-[32px] text-center shadow-lg">
            <h2 className="text-[2rem] font-bold mb-4 tracking-tight leading-tight">
              ¿No sabes qué documentos necesitas para tu caso?
            </h2>
            <p className="text-[18px] font-medium text-white/90 mb-8 max-w-2xl mx-auto">
              Te hacemos el checklist personalizado gratis por WhatsApp.
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
            <Link href="/legalizacion-documentos-cubanos" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Legalización de documentos</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Gestionamos todo en Cuba por ti.</p>
            </Link>
            <Link href="/blog/arraigo-social-requisitos-2026-cubanos" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Arraigo social 2026</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Requisitos completos para tu residencia.</p>
            </Link>
            <Link href="/precios" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Precios de servicios</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Transparencia en todos nuestros trámites.</p>
            </Link>
          </div>
        </section>

      </main>

      <FloatingContact />
    </>
  );
}
