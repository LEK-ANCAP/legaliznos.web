import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Legalización de Documentos Españoles para Cuba — MAEC + Consulado Cubano | LegalizaNos",
  description: "Legalizamos documentos españoles para que tengan validez en Cuba. Ministerio de Justicia, MAEC y Consulado de Cuba en España. Certificados, títulos, poderes notariales.",
  alternates: {
    canonical: "https://legalizanos.es/legalizacion-documentos-espanoles-cuba",
  },
};

export default function DocumentosEspanolesCubaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Es lo mismo que la apostilla de La Haya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Cuba no está en el Convenio de La Haya, así que la apostilla no vale para documentos destinados a Cuba. El proceso equivalente es la legalización a través del MAEC y el Consulado de Cuba. Si necesitas apostillar un documento español para OTRO país (que sí esté en el convenio), eso es diferente y también podemos ayudarte."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tarda el proceso completo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Normalmente entre 2 y 4 semanas. El paso que más varía es el Consulado de Cuba en España — depende del volumen de trabajo que tengan. Te damos estimación antes de empezar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo hacer el trámite yo solo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Técnicamente sí, pero implica ir presencialmente al Ministerio de Justicia, después al MAEC, y después al Consulado de Cuba. Son 3 desplazamientos en 3 organismos diferentes, cada uno con sus horarios y colas. Nosotros hacemos todo por ti."
        }
      },
      {
        "@type": "Question",
        "name": "¿También enviáis el documento a Cuba?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, podemos enviar el documento legalizado directamente a Cuba por mensajería certificada internacional. El coste de envío es aparte y te lo indicamos antes."
        }
      }
    ]
  };

  return (
    <main className="bg-white min-h-screen pt-24 lg:pt-32 pb-24 text-foreground selection:bg-black/10">
      
      {/* 1. HERO */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] font-bold text-black/40 mb-8 tracking-wide">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/precios" className="hover:text-black transition-colors">Servicios</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-black line-clamp-1">Documentos españoles para Cuba</span>
        </nav>

        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-black leading-[1.05] mb-8">
          Legalización de documentos <br className="hidden md:block"/>
          <span className="text-black/40">españoles para usar en Cuba</span>
        </h1>

        <p className="text-[17px] md:text-[19px] text-black/70 font-medium leading-relaxed max-w-3xl mb-10">
          ¿Necesitas que un documento español tenga validez legal en Cuba? El proceso es diferente al de los documentos cubanos. Pasa por el Ministerio de Justicia de España, el MAEC y el Consulado de Cuba en España. Nosotros gestionamos los tres pasos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">3 pasos</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Mº Justicia + MAEC + Consulado Cuba</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">Desde 95€</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Legalización completa</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">2-4 semanas</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Plazo estimado</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">Sin viajar a Cuba</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Todo se gestiona en España</div>
          </div>
        </div>

        <Link href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] text-white font-bold px-8 h-12 text-[15px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all w-full sm:w-auto">
            Consulta gratuita por WhatsApp
          </Button>
        </Link>
      </section>

      {/* 2. ¿CUÁNDO NECESITAS ESTO? */}
      <section className="bg-[#FAFAFA] py-24 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold tracking-tight text-black mb-12">
            Situaciones en las que necesitas <br className="hidden md:block"/>
            <span className="text-black/40">legalizar un documento español para Cuba</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-[1.5px] border-black/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center mb-6">
                <span className="text-[20px]">💍</span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Me casé en España y necesito que el matrimonio tenga validez en Cuba</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                Tu certificado de matrimonio español necesita legalización para que Cuba lo reconozca. Gestionamos todo el proceso: Ministerio de Justicia → MAEC → Consulado de Cuba en España.
              </p>
            </div>

            <div className="bg-white border-[1.5px] border-black/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center mb-6">
                <span className="text-[20px]">🎓</span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Estudié en España y quiero que mi título valga en Cuba</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                Títulos universitarios, másteres, diplomas de formación profesional. Los legalizamos para que Cuba los reconozca. Si además necesitas homologación en Cuba, te orientamos sobre el proceso allá.
              </p>
            </div>

            <div className="bg-white border-[1.5px] border-black/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center mb-6">
                <span className="text-[20px]">⚖️</span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Necesito enviar un poder notarial a Cuba</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                Para gestiones a distancia en Cuba (venta de propiedades, herencias, representación legal), necesitas un poder notarial español legalizado. Lo gestionamos desde la notaría hasta el Consulado de Cuba.
              </p>
            </div>

            <div className="bg-white border-[1.5px] border-black/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center mb-6">
                <span className="text-[20px]">📋</span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Tengo un proceso legal en Cuba que requiere documentos españoles</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                Herencias, divorcios, adopciones, reclamaciones. Cualquier documento español que necesite validez en Cuba debe pasar por esta legalización. Certificados del Registro Civil, resoluciones judiciales, documentos notariales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EL PROCESO INVERSO */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">
          Cuba → España usa MINJUS + Consulado español. <br className="hidden lg:block"/>
          <span className="text-black/40">España → Cuba usa otro camino.</span>
        </h2>
        
        <p className="text-[16px] text-black/70 font-medium leading-relaxed mb-12">
          Si ya legalizaste <Link href="/legalizacion-documentos-cubanos" className="underline font-bold hover:text-black">documentos cubanos para España</Link>, conoces el proceso MINJUS + Consulado de España en La Habana. Para documentos españoles hacia Cuba, el proceso es al revés:
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 mb-12">
          {/* Paso 1 */}
          <div className="flex-1 bg-black/5 rounded-3xl p-6 relative w-full md:w-auto">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-[14px] mb-4">1</div>
            <h4 className="font-bold text-black mb-2">Ministerio de Justicia</h4>
            <p className="text-[14px] font-medium text-black/60">Legalización del documento</p>
            <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
              <ArrowRight className="w-3.5 h-3.5 text-black/40" />
            </div>
            <div className="block md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm rotate-90">
              <ArrowRight className="w-3.5 h-3.5 text-black/40" />
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex-1 bg-black/5 rounded-3xl p-6 relative w-full md:w-auto md:ml-2">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-[14px] mb-4">2</div>
            <h4 className="font-bold text-black mb-2">MAEC</h4>
            <p className="text-[14px] font-medium text-black/60">Legalización diplomática</p>
            <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
              <ArrowRight className="w-3.5 h-3.5 text-black/40" />
            </div>
            <div className="block md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm rotate-90">
              <ArrowRight className="w-3.5 h-3.5 text-black/40" />
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex-1 bg-[#25D366]/10 rounded-3xl p-6 relative w-full md:w-auto md:ml-2">
            <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-[14px] mb-4">3</div>
            <h4 className="font-bold text-black mb-2">Consulado de Cuba</h4>
            <p className="text-[14px] font-medium text-black/60">Legalización consular cubana</p>
          </div>
        </div>

        <p className="text-[15px] font-medium text-black/60 bg-[#FAFAFA] p-5 rounded-2xl mb-8">
          <strong className="text-black">Nota:</strong> A diferencia de los documentos cubanos (que necesitan MINJUS cubano + Consulado español), aquí todo se gestiona dentro de España. No necesitas enviar nada a Cuba hasta que esté completamente legalizado.
        </p>

        <h3 className="text-[18px] font-bold text-black mb-4">Documentos que requieren paso previo adicional:</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3 text-[15px] font-medium text-black/70"><span className="w-1.5 h-1.5 rounded-full bg-black/40 shrink-0 mt-2" /> Documentos notariales (poderes, escrituras) → primero legalización por el Colegio Notarial</li>
          <li className="flex gap-3 text-[15px] font-medium text-black/70"><span className="w-1.5 h-1.5 rounded-full bg-black/40 shrink-0 mt-2" /> Documentos judiciales → primero legalización por el Tribunal Superior de Justicia</li>
          <li className="flex gap-3 text-[15px] font-medium text-black/70"><span className="w-1.5 h-1.5 rounded-full bg-black/40 shrink-0 mt-2" /> Documentos académicos → primero legalización por la universidad o el Ministerio de Educación</li>
        </ul>

        <p className="text-[15px] font-bold text-black border-l-2 border-black pl-4">
          Puede parecer complejo, pero nosotros sabemos qué pasos necesita cada tipo de documento. Tú nos lo entregas y nosotros hacemos el recorrido.
        </p>
      </section>

      {/* 4. DOCUMENTOS MÁS COMUNES */}
      <section className="bg-[#FAFAFA] py-24 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold tracking-tight text-black mb-8">
            Qué documentos españoles <span className="text-black/40">legalizamos para Cuba</span>
          </h2>

          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left text-[14px] md:text-[15px] min-w-[600px]">
                <thead>
                  <tr className="bg-black/5">
                    <th className="py-4 px-4 md:px-6 font-bold text-black/60">Tipo</th>
                    <th className="py-4 px-4 md:px-6 font-bold text-black/60">Ejemplos</th>
                    <th className="py-4 px-4 md:px-6 font-bold text-black">Paso previo necesario</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {[
                    ["Registrales", "Certificado de nacimiento, matrimonio, defunción emitidos por el Registro Civil español", "Ninguno — directo a Mº Justicia"],
                    ["Notariales", "Poderes notariales, escrituras, testamentos, actas notariales", "Colegio Notarial → luego Mº Justicia"],
                    ["Académicos", "Título universitario, máster, FP, certificado de notas", "Universidad/Ministerio Educación → luego Mº Justicia"],
                    ["Judiciales", "Sentencias de divorcio, adopción, resoluciones judiciales", "TSJ → luego Mº Justicia"],
                    ["Administrativos", "Certificados de empadronamiento, vida laboral, Seguridad Social", "Depende del organismo emisor"]
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-[#FAFAFA] transition-colors">
                      <td className="py-4 px-4 md:px-6 font-semibold text-black/70">{row[0]}</td>
                      <td className="py-4 px-4 md:px-6 font-medium text-black/60">{row[1]}</td>
                      <td className="py-4 px-4 md:px-6 font-bold text-black/80">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRECIOS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold tracking-tight text-black mb-8">
          Cuánto cuesta legalizar <br className="hidden md:block"/>
          <span className="text-black/40">documentos españoles para Cuba</span>
        </h2>

        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white mb-6">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left text-[14px] md:text-[15px] min-w-[600px]">
              <thead>
                <tr className="bg-black/5">
                  <th className="py-4 px-4 md:px-6 font-bold text-black/60">Servicio</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-black">Precio</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-black/60">Plazo</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-black/60">Incluye</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  ["Legalización completa (Mº Justicia + MAEC + Consulado Cuba)", "Desde 95€", "2-4 semanas", "Gestión de los 3 pasos + envío"],
                  ["Con paso previo (notarial/judicial/académico)", "Desde 125€", "2-5 semanas", "Paso previo + los 3 pasos + envío"],
                  ["Envío a Cuba (opcional)", "+X€", "Variable", "Envío certificado internacional"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAFAFA] transition-colors">
                    <td className="py-4 px-4 md:px-6 font-semibold text-black/70">{row[0]}</td>
                    <td className="py-4 px-4 md:px-6 font-bold text-black">{row[1]}</td>
                    <td className="py-4 px-4 md:px-6 font-medium text-black/60">{row[2]}</td>
                    <td className="py-4 px-4 md:px-6 font-medium text-black/60">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-[15px] font-medium text-black/60 mb-6 bg-black/5 p-4 rounded-2xl w-fit">
          Pago: 50% al empezar, 50% cuando esté listo. El precio no incluye las tasas oficiales del MAEC y del Consulado de Cuba, que te detallamos antes de empezar.
        </p>

        <Link href="/precios" className="inline-flex items-center gap-2 font-bold text-black hover:opacity-70 transition-opacity">
          Ver todos los precios <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* 6. FAQ */}
      <section className="bg-[#FAFAFA] py-24 mb-10 border-t border-black/5">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold tracking-tight text-black mb-10 text-center">
            Preguntas <span className="text-black/40">Frecuentes</span>
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿Es lo mismo que la <Link href="/legalizacion-documentos-cubanos#faq" className="underline hover:text-black/70">apostilla</Link> de La Haya?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                No. Cuba no está en el Convenio de La Haya, así que la apostilla no vale para documentos destinados a Cuba. El proceso equivalente es la legalización a través del MAEC y el Consulado de Cuba. Si necesitas apostillar un documento español para OTRO país (que sí esté en el convenio), eso es diferente y también podemos ayudarte.
              </p>
            </div>
            
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿Cuánto tarda el proceso completo?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Normalmente entre 2 y 4 semanas. El paso que más varía es el <Link href="/legalizacion-documentos-madrid" className="underline hover:text-black/70">Consulado de Cuba en España</Link> — depende del volumen de trabajo que tengan. Te damos estimación antes de empezar.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿Puedo hacer el trámite yo solo?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Técnicamente sí, pero implica ir presencialmente al Ministerio de Justicia, después al MAEC, y después al Consulado de Cuba. Son 3 desplazamientos en 3 organismos diferentes, cada uno con sus horarios y colas. Nosotros hacemos todo por ti.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿También enviáis el documento a Cuba?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Sí, podemos enviar el documento legalizado directamente a Cuba por mensajería certificada internacional. El coste de envío es aparte y te lo indicamos antes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA + RELACIONADOS */}
      <section className="bg-black py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] font-bold text-white mb-6 leading-tight tracking-tight">
            ¿Necesitas que un documento español tenga validez en Cuba?
          </h2>
          <p className="text-[18px] font-medium text-white/60 mb-10">
            Cuéntanos qué documento es y para qué lo necesitas. Te damos presupuesto cerrado.
          </p>
          <Link href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#25D366] text-white font-bold px-8 h-14 text-[16px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all rounded-2xl w-full sm:w-auto">
              Consulta gratuita
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h3 className="text-[15px] font-bold text-black/40 uppercase tracking-widest mb-8 text-center">También te puede interesar</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/legalizacion-documentos-cubanos" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Docs cubanos para España</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">El proceso inverso: legalización de documentos cubanos.</p>
            </Link>
            <Link href="/tramitacion-consular-cuba" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Tramitación en Cuba</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">Gestiones presenciales en La Habana sin que tengas que viajar.</p>
            </Link>
            <Link href="/precios" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Precios completos</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">Todos los servicios y modalidades disponibles.</p>
            </Link>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
