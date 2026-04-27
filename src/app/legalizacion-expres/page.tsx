import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@heroui/react";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Legalización Exprés de Documentos Cubanos — Plazos Reducidos | LegalizaNos",
  description: "¿Necesitas tu documento cubano legalizado urgente? Servicio exprés: ~1 mes en vez de 2-3. MINJUS + Consulado con gestión prioritaria. Consulta disponibilidad.",
  alternates: {
    canonical: "https://legalizanos.es/legalizacion-expres",
  },
};

export default function LegalizacionExpresPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Puedo pasar de estándar a exprés si mi trámite se complica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Si empezaste con el estándar y surge una urgencia, podemos intentar acelerar la gestión pasando a exprés. Pagarías la diferencia de precio. Consulta disponibilidad porque depende de en qué fase esté tu documento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Y si el exprés no llega a tiempo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si no podemos cumplir el plazo que te dimos, te lo comunicamos en cuanto lo sepamos — no el día antes. Y te damos opciones: esperar, o valorar alternativas para tu trámite urgente."
        }
      },
      {
        "@type": "Question",
        "name": "¿El exprés tiene menos calidad que el estándar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. El documento legalizado es idéntico. La diferencia es solo el plazo de gestión. Misma legalización, mismo MINJUS, mismo Consulado, mismo envío certificado."
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
          <span className="text-black">Legalización exprés</span>
        </nav>

        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-black leading-[1.05] mb-8">
          Legalización exprés — <br className="hidden md:block"/>
          <span className="text-black/40">cuando no puedes esperar 2 meses</span>
        </h1>

        <p className="text-[17px] md:text-[19px] text-black/70 font-medium leading-relaxed max-w-2xl mb-10">
          Tu cita de extranjería es en 6 semanas. Tu abogado necesita los antecedentes penales ya. Tu expediente de nacionalidad está a punto de caducar. Sabemos por qué tienes prisa. Nuestro servicio exprés reduce los plazos a aproximadamente 1 mes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">~1 mes</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Plazo exprés estimado</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">vs 2-3 meses</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Plazo estándar</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">Desde 350€</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Gestión prioritaria incluida</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">Disponibilidad</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Consultar — depende de Cuba</div>
          </div>
        </div>

        <Link href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] text-white font-bold px-8 h-12 text-[15px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all w-full sm:w-auto">
            Consultar disponibilidad exprés por WhatsApp
          </Button>
        </Link>
      </section>

      {/* 2. CUÁNDO TIENE SENTIDO EL EXPRÉS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">
          ¿Realmente necesitas el exprés? <span className="text-black/40">Te ayudamos a decidir</span>
        </h2>
        <p className="text-[16px] text-black/70 font-medium leading-relaxed mb-8 max-w-3xl">
          No siempre hace falta pagar más por ir más rápido. A veces el plazo estándar es suficiente. Te contamos cuándo SÍ merece la pena:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/5 p-6 rounded-3xl">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-black" />
              <h3 className="text-[18px] font-bold text-black">SÍ necesitas exprés:</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Tienes una cita de Extranjería en menos de 2 meses y necesitas antecedentes penales legalizados",
                "Tu expediente de nacionalidad requiere documentos cubanos que caducan pronto",
                "Te han hecho un requerimiento de documentación con plazo de 10-15 días",
                "Vas a casarte en España y necesitas el certificado de nacimiento/soltería ya",
                "Tienes fecha de vuelo a Cuba cancelada y necesitas los documentos antes de que cambien las condiciones"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] font-medium text-black/70 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/40 shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-[1.5px] border-black/10 p-6 rounded-3xl">
            <div className="flex items-center gap-2 mb-6">
              <XCircle className="w-5 h-5 text-black/40" />
              <h3 className="text-[18px] font-bold text-black/60">NO necesitas exprés (ahorra el dinero):</h3>
            </div>
            <ul className="space-y-4 mb-6">
              {[
                "Tu trámite de arraigo no tiene fecha límite — empieza con el estándar y planifica con tiempo",
                "Estás reuniendo documentación para un trámite futuro (más de 3 meses vista)",
                "Ya tienes todos los documentos menos uno y ese uno no tiene urgencia"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] font-medium text-black/60 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[14px] font-medium text-black/50 leading-relaxed bg-black/5 p-4 rounded-2xl">
              Si no estás seguro, escríbenos. Te decimos honestamente si necesitas el exprés o si puedes ir con el estándar y ahorrarte la diferencia.
            </p>
          </div>
        </div>
      </section>

      {/* 3. QUÉ CAMBIA EN EL EXPRÉS */}
      <section className="bg-[#FAFAFA] py-24 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">
            Mismo proceso, <span className="text-black/40">gestión prioritaria</span>
          </h2>
          <p className="text-[16px] text-black/70 font-medium leading-relaxed mb-10 max-w-3xl">
            El proceso de <Link href="/legalizacion-documentos-cubanos" className="underline font-bold hover:text-black">legalización</Link> es el mismo: obtención del documento en Cuba → legalización MINJUS → legalización Consulado de España en La Habana → envío a tu domicilio. Lo que cambia es cómo lo gestionamos:
          </p>

          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white mb-8">
            <table className="w-full text-left text-[14px] md:text-[15px]">
              <thead>
                <tr className="bg-black/5">
                  <th className="py-4 px-4 md:px-6 font-bold text-black/60">Aspecto</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-black/60">Estándar</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-black">Exprés</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  ["Prioridad en cola de gestión", "Normal", "Prioritaria — tu caso va primero"],
                  ["Gestión en MINJUS", "Turno regular", "Gestión acelerada (cuando es posible)"],
                  ["Cita del Consulado", "Siguiente disponible", "Prioridad en agenda"],
                  ["Envío del documento", "Correo certificado", "Envío urgente"],
                  ["Seguimiento WhatsApp", "Cada avance", "Actualización diaria si es necesario"],
                  ["Plazo estimado", "2-3 meses", "~1 mes"]
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-[#FAFAFA] transition-colors">
                    <td className="py-4 px-4 md:px-6 font-semibold text-black/70">{row[0]}</td>
                    <td className="py-4 px-4 md:px-6 font-medium text-black/60">{row[1]}</td>
                    <td className="py-4 px-4 md:px-6 font-bold text-black">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border-[1.5px] border-black/5 p-6 rounded-2xl">
            <h4 className="font-bold text-black mb-2 text-[15px]">Nota de honestidad:</h4>
            <p className="text-[14.5px] font-medium text-black/60 leading-relaxed">
              El plazo exprés es una estimación, no una garantía. Depende de factores que no controlamos: disponibilidad del registro civil cubano, volumen del MINJUS, citas del Consulado. Hacemos todo lo posible por cumplir el plazo, pero Cuba es Cuba. Si vemos que el exprés no va a poder cumplir tu deadline, te lo decimos inmediatamente para que busques alternativas.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRECIOS EXPRÉS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold tracking-tight text-black mb-8">
          Cuánto cuesta <span className="text-black/40">el servicio exprés</span>
        </h2>

        <div className="mb-10">
          <h3 className="text-[18px] font-bold text-black mb-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-[12px]">1</div>
            Servicio MINJUS + Consulado <span className="text-black/40 font-medium text-[15px]">(legalización completa)</span>
          </h3>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left text-[14px] md:text-[15px] min-w-[600px]">
                <thead>
                  <tr className="bg-black/5">
                    <th className="py-4 px-4 md:px-6 font-bold text-black/60">Categoría</th>
                    <th className="py-4 px-4 md:px-6 font-bold text-black/60">Estándar</th>
                    <th className="py-4 px-4 md:px-6 font-bold text-black">Exprés</th>
                    <th className="py-4 px-4 md:px-6 font-bold text-black/40">Diferencia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {[
                    ["Registrales (nacimiento, matrimonio, defunción, divorcio, soltería)", "Desde 250€", "Desde 350€", "+100€"],
                    ["Antecedentes penales", "Desde 250€", "Desde 350€", "+100€"],
                    ["Médicos (certificado médico, salud)", "Desde 250€", "Desde 350€", "+100€"],
                    ["Académicos (títulos, notas — incluye MES/MINED)", "Desde 380€", "Desde 480€", "+100€"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#FAFAFA] transition-colors">
                      <td className="py-4 px-4 md:px-6 font-semibold text-black/70">{row[0]}</td>
                      <td className="py-4 px-4 md:px-6 font-medium text-black/60">{row[1]}</td>
                      <td className="py-4 px-4 md:px-6 font-bold text-black">{row[2]}</td>
                      <td className="py-4 px-4 md:px-6 font-bold text-black/30">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[18px] font-bold text-black mb-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-[12px]">2</div>
            Servicio Solo Consulado <span className="text-black/40 font-medium text-[15px]">(si ya tienes el MINJUS)</span>
          </h3>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left text-[14px] md:text-[15px] min-w-[600px]">
                <thead>
                  <tr className="bg-black/5">
                    <th className="py-4 px-4 md:px-6 font-bold text-black/60">Categoría</th>
                    <th className="py-4 px-4 md:px-6 font-bold text-black/60">Estándar</th>
                    <th className="py-4 px-4 md:px-6 font-bold text-black">Exprés</th>
                    <th className="py-4 px-4 md:px-6 font-bold text-black/40">Diferencia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {[
                    ["Registrales", "Desde 120€", "Desde 180€", "+60€"],
                    ["Antecedentes penales", "Desde 120€", "Desde 180€", "+60€"],
                    ["Médicos", "Desde 120€", "Desde 180€", "+60€"],
                    ["Académicos", "Desde 150€", "Desde 210€", "+60€"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#FAFAFA] transition-colors">
                      <td className="py-4 px-4 md:px-6 font-semibold text-black/70">{row[0]}</td>
                      <td className="py-4 px-4 md:px-6 font-medium text-black/60">{row[1]}</td>
                      <td className="py-4 px-4 md:px-6 font-bold text-black">{row[2]}</td>
                      <td className="py-4 px-4 md:px-6 font-bold text-black/30">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="text-[15px] font-medium text-black/60 mb-6 bg-black/5 p-4 rounded-2xl w-fit">
          Descuento del 10% en 3+ documentos. Pago: 50% al empezar, 50% cuando esté listo.
        </p>

        <Link href="/precios" className="inline-flex items-center gap-2 font-bold text-black hover:opacity-70 transition-opacity">
          Ver todos los precios detallados <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* 5. FAQ */}
      <section className="bg-white py-24 mb-10 border-t border-black/5">
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
                ¿Puedo pasar de estándar a exprés si mi trámite se complica?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Sí. Si empezaste con el estándar y surge una urgencia, podemos intentar acelerar la gestión pasando a exprés. Pagarías la diferencia de precio. Consulta disponibilidad porque depende de en qué fase esté tu documento.
              </p>
            </div>
            
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿Y si el exprés no llega a tiempo?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Si no podemos cumplir el plazo que te dimos, te lo comunicamos en cuanto lo sepamos — no el día antes. Y te damos opciones: esperar, o valorar alternativas para tu trámite urgente.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿El exprés tiene menos calidad que el estándar?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                No. El documento legalizado es idéntico. La diferencia es solo el plazo de gestión. Misma legalización, mismo MINJUS, mismo Consulado, mismo envío certificado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA + RELACIONADOS */}
      <section className="bg-black py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] font-bold text-white mb-6 leading-tight tracking-tight">
            ¿Tienes urgencia?
          </h2>
          <p className="text-[18px] font-medium text-white/60 mb-10">
            Escríbenos ahora y te confirmamos si el exprés está disponible para tu documento.
          </p>
          <Link href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#25D366] text-white font-bold px-8 h-14 text-[16px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all rounded-2xl w-full sm:w-auto">
              Consultar disponibilidad
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h3 className="text-[15px] font-bold text-black/40 uppercase tracking-widest mb-8 text-center">También te puede interesar</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/legalizacion-documentos-cubanos" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Legalización estándar</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">Si no tienes urgencia y quieres ahorrar en tu trámite.</p>
            </Link>
            <Link href="/precios" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Precios completos</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">Todos los servicios y modalidades disponibles.</p>
            </Link>
            <Link href="/arraigo-social-cubanos-espana" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Arraigo social</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">¿Necesitas antecedentes penales para tu expediente de arraigo?</p>
            </Link>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
