import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CountdownBanner } from "@/components/CountdownBanner";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2, AlertTriangle, FileText, CalendarClock, Phone } from "lucide-react";
import { Button } from "@heroui/react";

export default function RegularizacionBlog() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <article className="max-w-[800px] mx-auto px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-black/80">Regularización 2026</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
              Regularización extraordinaria 2026: lo que necesitas saber si eres cubano en España
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-black/50 border-b border-black/5 pb-6">
              <span>Publicado: 18 Abr 2026</span>
              <span>Última actualización: Hoy</span>
              <span className="w-full text-black/40 mt-1">
                * Información basada en el Real Decreto 316/2026 publicado en BOE el 15 de abril de 2026.
              </span>
            </div>
          </header>

          <CountdownBanner />

          {/* Intro */}
          <div className="prose prose-lg max-w-none text-black/80 prose-headings:text-black prose-a:text-black hover:prose-a:text-black/70 prose-strong:text-black mb-16">
            <p className="text-[19px] leading-relaxed mb-6">
              Si eres cubano y llevas viviendo en España sin papeles desde antes del 1 de enero de 2026, este artículo puede cambiar tu situación legal. El 14 de abril de 2026, el Gobierno aprobó el Real Decreto 316/2026 que abre un proceso de regularización extraordinaria para extranjeros que ya viven en España. No es un rumor ni un borrador: está publicado en el BOE y las solicitudes ya se pueden presentar.
            </p>
            <p className="text-[19px] leading-relaxed mb-6 font-bold">
              Lo más importante: desde el momento en que tu solicitud es admitida a trámite, puedes trabajar legalmente en España. No tienes que esperar a la resolución.
            </p>
            <p className="text-[19px] leading-relaxed">
              El plazo cierra el 30 de junio de 2026. Es improrrogable. A continuación te explicamos todo lo que necesitas saber como cubano en España — sin jerga jurídica, sin rodeos, y con los pasos concretos para solicitarla.
            </p>
          </div>

          {/* Section 1: Requisitos */}
          <section className="mb-16">
            <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">Requisitos para la regularización extraordinaria 2026</h2>
            <p className="text-[17px] text-black/70 mb-8">Para acceder necesitas cumplir TODOS estos requisitos:</p>
            
            <div className="flex flex-col gap-4">
              <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#17C964] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px] text-black mb-2">Llegaste a España antes del 1 de enero de 2026</h3>
                    <p className="text-[16px] text-black/70">Tienes que poder demostrarlo con documentos fechados. No basta con decirlo — necesitas pruebas. Más abajo te explicamos cuáles.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#17C964] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px] text-black mb-2">Llevas al menos 5 meses en España de forma ININTERRUMPIDA</h3>
                    <p className="text-[16px] text-black/70">En el momento de presentar la solicitud debes demostrar que llevas al menos 5 meses sin salir de España. Atención: ininterrumpida significa CERO salidas del país — ni un viaje de fin de semana a Portugal, ni un vuelo a visitar familia. Si saliste, puede que no cumplas.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#17C964] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px] text-black mb-2">No tienes antecedentes penales</h3>
                    <p className="text-[16px] text-black/70">Ni en España, ni en Cuba, ni en ningún país donde hayas vivido los últimos 5 años. Pero ojo: si los tienes y son cancelables (ya cumpliste la pena y los plazos), se pueden cancelar antes de presentar la solicitud.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#17C964] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px] text-black mb-2">Estás en situación irregular</h3>
                    <p className="text-[16px] text-black/70">Si tienes una estancia legal (estudiante, búsqueda de empleo, residencia no lucrativa), NO puedes acogerte a esta regularización. Tampoco si tienes una solicitud de residencia en trámite (renovación, modificación, etc.).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5A524]/10 border border-[#F5A524]/20 rounded-2xl p-6 mt-6 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-[#F5A524] shrink-0" />
              <div>
                <h4 className="font-bold text-[16px] text-[#F5A524] mb-1">EXCEPCIÓN IMPORTANTE para cubanos con arraigo en trámite:</h4>
                <p className="text-[15px] text-[#935D0F]">
                  Si ya presentaste un arraigo social, sociolaboral u otro arraigo antes de esta regularización, el gobierno ha establecido que se te concederá automáticamente — sin necesidad de hacer una nueva solicitud. Siempre que no tengas antecedentes penales.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Documentos */}
          <section className="mb-16">
            <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">Documentos que sirven como prueba de permanencia</h2>
            <p className="text-[17px] text-black/70 mb-8">
              La norma permite documentos públicos o privados, siempre que contengan tu nombre completo y una fecha. Cuantos más tengas, mejor. Estos son los más comunes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-[1.5px] border-black/10 rounded-2xl p-6">
                <h3 className="font-bold text-[18px] text-black mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-black" />
                  Documentos FUERTES
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-[15px] text-black/70">
                    <span className="text-black">•</span> Certificado de empadronamiento histórico (el más importante)
                  </li>
                  <li className="flex gap-2 text-[15px] text-black/70">
                    <span className="text-black">•</span> Documentación médica (citas, informes de urgencias)
                  </li>
                  <li className="flex gap-2 text-[15px] text-black/70">
                    <span className="text-black">•</span> Solicitud de asilo presentada antes del 1 de enero
                  </li>
                </ul>
              </div>

              <div className="bg-white border-[1.5px] border-black/10 rounded-2xl p-6">
                <h3 className="font-bold text-[18px] text-black mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-black/50" />
                  Documentos COMPLEMENTARIOS
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> Envíos de dinero (Western Union, Ria)</li>
                  <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> Facturas a tu nombre (luz, agua, móvil)</li>
                  <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> Justificantes de recarga de abono transporte</li>
                  <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> Contrato de alquiler (incluso no titular si apareces)</li>
                  <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> Extractos bancarios</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-[16px] text-red-600 mb-3">❌ Documentos que NO sirven:</h4>
              <ul className="space-y-2">
                <li className="text-[15px] text-red-900/80">Testimonios de vecinos o amigos (no son documentos)</li>
                <li className="text-[15px] text-red-900/80">Capturas de WhatsApp sin fecha verificable</li>
                <li className="text-[15px] text-red-900/80">Fotos sin metadatos de ubicación y fecha</li>
              </ul>
            </div>

            <p className="text-[17px] text-black/70 italic bg-[#FAFAFA] p-6 rounded-2xl">
              <strong>Consejo práctico:</strong> Reúne TODO lo que tengas con tu nombre y una fecha. No descartes nada. La combinación de varios documentos débiles puede ser tan efectiva como un empadronamiento. Y empieza a reunirlos HOY — no el día antes del 30 de junio.
            </p>
          </section>

          {/* Section 3: Penales */}
          <section className="mb-16">
            <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">Antecedentes penales de Cuba para la regularización</h2>
            <p className="text-[17px] text-black/70 mb-6">
              Aquí es donde la regularización se complica para los cubanos. El decreto pide certificado de antecedentes penales de tu país de origen. Para los cubanos, eso significa obtener y legalizar antecedentes penales de Cuba — un proceso que normalmente tarda 2-3 meses.
            </p>
            <p className="text-[17px] font-bold text-black mb-6">¿Pero tengo que esperar 2-3 meses si el plazo cierra el 30 de junio?</p>
            <p className="text-[17px] text-black/70 mb-6">No necesariamente. El decreto contempla dos opciones:</p>

            <div className="space-y-6 mb-8">
              <div className="pl-6 border-l-2 border-black/10">
                <h3 className="font-bold text-[18px] text-black mb-2">Opción A — Ya llevas más de 5 años en España:</h3>
                <p className="text-[16px] text-black/70">Si puedes demostrar que llevas en España de forma continuada los últimos 5 años, NO necesitas aportar los antecedentes penales de Cuba. Solo los de España (que se solicitan al Ministerio de Justicia y tardan pocos días).</p>
              </div>
              <div className="pl-6 border-l-2 border-black/10">
                <h3 className="font-bold text-[18px] text-black mb-2">Opción B — Llevas menos de 5 años en España:</h3>
                <p className="text-[16px] text-black/70">Necesitas los antecedentes de Cuba. Pero puedes presentar una declaración jurada de que no tienes antecedentes penales + una autorización para que el Gobierno español los solicite directamente a las autoridades cubanas. Si pasan 3 meses sin que el Ministerio reciba el certificado, te requerirán para que tú los aportes en 15 días.</p>
              </div>
            </div>

            <div className="bg-black text-white rounded-2xl p-8 text-center flex flex-col items-center">
              <p className="text-[18px] font-medium leading-relaxed mb-6">
                <strong>Lo que recomendamos:</strong> Presenta la solicitud YA con la declaración jurada. Mientras, empieza a gestionar tus antecedentes penales cubanos legalizados (MINJUS + Consulado) por si te los piden después. Así cubres ambos frentes.
              </p>
              <a href="/legalizacion-documentos-cubanos" className="w-full sm:w-auto">
                <Button className="bg-white text-black font-bold h-12 px-6 rounded-xl w-full sm:w-auto">
                  Tramitar antecedentes legalizados
                </Button>
              </a>
            </div>
          </section>

          {/* Section 4: Cómo presentar */}
          <section className="mb-16">
            <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">Dónde y cómo presentar la solicitud de regularización</h2>
            <p className="text-[17px] text-black/70 mb-8">Hay dos vías: online y presencial. Las dos están abiertas desde el 16 de abril de 2026.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-[18px] text-black mb-4">VÍA ONLINE (recomendada)</h3>
                <ol className="list-decimal list-outside ml-4 space-y-2 text-[15px] text-black/70 mb-4">
                  <li>Entra en el portal de la Regularización del Ministerio de Inclusión</li>
                  <li>Necesitas Cl@ve, certificado digital, o DNI electrónico para acceder</li>
                  <li>Si no tienes Cl@ve, alguien que sí lo tenga puede solicitar cita para ti</li>
                  <li>Rellena el formulario específico de regularización</li>
                  <li>Adjunta toda la documentación escaneada</li>
                  <li>Envía la solicitud</li>
                </ol>
                <p className="text-[14px] text-black/50 italic">¿No tienes Cl@ve ni certificado digital? Un representante legal puede presentar tu solicitud telemáticamente por ti.</p>
              </div>

              <div>
                <h3 className="font-bold text-[18px] text-black mb-4">VÍA PRESENCIAL (cita obligatoria)</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-[15px] text-black/70 mb-4">
                  <li><strong>Oficinas de la Seguridad Social:</strong> (al menos 1 por provincia) — de 16:00 a 19:00h</li>
                  <li><strong>Oficinas de Correos:</strong> (en capitales y municipios &gt;50k hab.) — de 8:30 a 17:30h</li>
                  <li><strong>Oficinas de Extranjería:</strong> (Madrid, Alicante, Valencia, Almería, Murcia) — de 16:00 a 19:00h</li>
                </ul>
                <p className="text-[14px] text-black/50 italic">Cita previa: se solicita en el portal de la Regularización con Cl@ve, o llamando al teléfono 060 (horario 9:30-14:00 y 16:30-19:30, lunes a viernes).</p>
              </div>
            </div>

            <div className="bg-red-50 text-red-800 p-4 rounded-xl text-[15px] font-medium border border-red-100">
              <strong>IMPORTANTE:</strong> No vayas sin cita previa — no te atenderán. Y no esperes a la última semana de junio. Con medio millón de personas potencialmente elegibles, el colapso de las últimas semanas es previsible.
            </div>
          </section>

          {/* Section 5 & 6 */}
          <section className="mb-16">
            <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">Una vez presentada tu solicitud: qué esperar</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[18px] text-black mb-2">Lo que ocurre inmediatamente:</h3>
                <p className="text-[16px] text-black/70">Desde que tu solicitud es admitida a trámite, recibes una autorización provisional para residir y trabajar en España — por cuenta ajena o por cuenta propia. Esto significa que puedes firmar un contrato de trabajo legalmente sin esperar a la resolución definitiva. También te asignan un Número de Seguridad Social.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-[18px] text-black mb-2">Plazo de resolución:</h3>
                <p className="text-[16px] text-black/70">El plazo máximo de resolución es de 3 meses. Si en 3 meses no te contestan, se aplica silencio administrativo positivo — tu solicitud se entiende concedida.</p>
              </div>

              <div>
                <h3 className="font-bold text-[18px] text-black mb-2">Si te la conceden:</h3>
                <p className="text-[16px] text-black/70">La autorización tiene vigencia de 1 año. Te da derecho a residir y trabajar en cualquier sector y en cualquier lugar de España. Dentro del mes siguiente a la resolución favorable, debes solicitar tu TIE (Tarjeta de Identidad de Extranjero) en la Policía Nacional.</p>
              </div>
            </div>

            <div className="mt-12 bg-[#FAFAFA] border border-black/10 rounded-2xl p-8">
              <h2 className="text-[1.5rem] font-bold text-black mb-4">Regularización para tu familia e hijos menores</h2>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> Se puede solicitar la regularización para toda la unidad familiar en una misma cita.</li>
                <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> Los menores reciben una autorización de residencia de <strong>5 AÑOS</strong> (no 1 año como los adultos).</li>
                <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> No necesitan cumplir el requisito de 5 meses de permanencia.</li>
                <li className="flex gap-2 text-[15px] text-black/70"><span className="text-black">•</span> Si tus padres, cónyuge o pareja registrada conviven contigo, también pueden incluirse.</li>
              </ul>
              <p className="text-[15px] font-bold text-black">Esto es especialmente importante: no dejes a tus hijos fuera de la solicitud. La autorización de 5 años les da estabilidad escolar y sanitaria.</p>
            </div>
          </section>

          {/* Section 7: Errores */}
          <section className="mb-16">
            <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">Los 7 errores que pueden costarte la regularización</h2>
            
            <div className="grid gap-4">
              {[
                { n: 1, t: "Esperar a última hora", d: "El plazo cierra el 30 de junio. Presenta cuanto antes." },
                { n: 2, t: "Salir de España antes de presentar", d: "Si sales del país — aunque sea un día — puedes romper el requisito de 5 meses ininterrumpidos." },
                { n: 3, t: "No tener suficientes pruebas de permanencia", d: "Un empadronamiento solo no basta. Reúne todo lo que puedas: facturas, citas, envíos de dinero." },
                { n: 4, t: "Confundir 'ininterrumpida' con 'continuada'", d: "Ininterrumpida significa CERO salidas. Es diferente al arraigo social, que permite hasta 90 días de ausencia." },
                { n: 5, t: "No solicitar los antecedentes penales a tiempo", d: "Si llevas menos de 5 años, los necesitarás. Empieza a gestionarlos ahora en paralelo." },
                { n: 6, t: "Presentar si tienes otra solicitud en trámite", d: "Renovaciones o modificaciones te descalifican — salvo que sea un arraigo (que se concederá automáticamente)." },
                { n: 7, t: "Ir a presentar presencialmente sin cita", d: "No te atenderán. La cita es obligatoria. Solicítala con tiempo." }
              ].map(err => (
                <div key={err.n} className="flex gap-4 p-4 border-b border-black/5 last:border-0">
                  <span className="text-[24px] font-bold text-black/20 shrink-0">0{err.n}</span>
                  <div>
                    <h3 className="font-bold text-[16px] text-black">{err.t}</h3>
                    <p className="text-[15px] text-black/60">{err.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: CTA */}
          <section className="mb-16 bg-[#FAFAFA] border border-black/5 rounded-[32px] p-8 md:p-12 text-center">
            <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">¿Necesitas ayuda con tu solicitud?</h2>
            <p className="text-[17px] text-black/70 mb-8 max-w-2xl mx-auto">
              Somos una asesoría migratoria especializada en cubanos en España. Esto es lo que podemos hacer por ti con la regularización extraordinaria:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-10">
              <div className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-black shrink-0" /><span className="text-[15px] font-medium">Evaluación gratuita de tu caso</span></div>
              <div className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-black shrink-0" /><span className="text-[15px] font-medium">Preparación del expediente completo</span></div>
              <div className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-black shrink-0" /><span className="text-[15px] font-medium">Presentación telemática por ti</span></div>
              <div className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-black shrink-0" /><span className="text-[15px] font-medium">Gestión de Penales Cubanos</span></div>
            </div>

            <a 
              href="https://wa.me/34600000000?text=Hola%2C%20necesito%20ayuda%20con%20la%20regularización%20extraordinaria"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button className="bg-black text-white font-bold rounded-full h-14 px-8 w-full sm:w-auto text-[16px] shadow-lg shadow-black/20 hover:-translate-y-1 transition-all">
                Evalúa tu caso gratis — te respondemos hoy
              </Button>
            </a>
          </section>

          {/* Section 9: FAQ */}
          <section className="mb-16">
            <h2 className="text-[2rem] font-bold tracking-tight text-black mb-8">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Puedo trabajar desde que presento la solicitud?", a: "Sí. Desde que tu solicitud es admitida a trámite, recibes una autorización provisional para residir y trabajar. No necesitas esperar a la resolución definitiva." },
                { q: "¿Cuánto dura el permiso?", a: "1 año. Después debes solicitar una modificación a un permiso de residencia ordinario (residencia y trabajo, arraigo, etc.). Si durante ese año has trabajado y puedes demostrarlo, la renovación es sencilla." },
                { q: "Soy cubano y no tengo pasaporte vigente. ¿Puedo solicitar?", a: "Puedes presentar copia de pasaporte, cédula de inscripción o título de viaje reconocido. Si tu pasaporte está caducado, consulta con nosotros — hay opciones." },
                { q: "¿Puedo solicitar si tengo un arraigo en trámite?", a: "Si ya tienes un arraigo social, sociolaboral o similar en trámite, se te concederá automáticamente sin necesidad de presentar nueva solicitud. Siempre que no tengas antecedentes penales." },
                { q: "¿Cuánto cuesta la regularización?", a: "El trámite en sí no tiene tasas. Las ONGs y sindicatos habilitados pueden ayudar gratuitamente. Si contratas un profesional como nosotros para preparar y presentar tu expediente, el precio es desde [X]€." },
                { q: "¿Es lo mismo que el arraigo social?", a: "No. El arraigo social requiere 2 años de permanencia + contrato de trabajo. La regularización extraordinaria requiere 5 meses de permanencia ininterrumpida y no necesita contrato. Son vías diferentes." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-black/10 pb-6">
                  <h3 className="font-bold text-[18px] text-black mb-2">{faq.q}</h3>
                  <p className="text-[16px] text-black/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10: Timeline */}
          <section className="mb-16 bg-[#FAFAFA] border border-black/5 rounded-3xl p-8">
            <h2 className="text-[1.5rem] font-bold tracking-tight text-black mb-8 text-center">Fechas clave que no puedes olvidar</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start relative gap-8 md:gap-0">
              <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-black/10 z-0"></div>
              
              <div className="relative z-10 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-black/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-[12px]">Abr</span>
                </div>
                <div className="text-left md:text-center md:w-24">
                  <p className="font-bold text-[13px] text-black">14 abril</p>
                  <p className="text-[12px] text-black/50">Aprobado RD</p>
                </div>
              </div>

              <div className="relative z-10 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 shadow-lg shadow-black/20">
                  <CalendarClock className="w-5 h-5 text-white" />
                </div>
                <div className="text-left md:text-center md:w-24">
                  <p className="font-bold text-[13px] text-black">16 abril</p>
                  <p className="text-[12px] text-black/50">Abren citas</p>
                </div>
              </div>

              <div className="relative z-10 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2">
                <div className="w-12 h-12 rounded-full bg-[#F5A524] flex items-center justify-center shrink-0 shadow-lg shadow-[#F5A524]/20">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left md:text-center md:w-24">
                  <p className="font-bold text-[13px] text-[#F5A524]">30 junio</p>
                  <p className="text-[12px] text-black/50">CIERRA PLAZO</p>
                </div>
              </div>

              <div className="relative z-10 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-black/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-[12px]">+3M</span>
                </div>
                <div className="text-left md:text-center md:w-24">
                  <p className="font-bold text-[13px] text-black">Resolución</p>
                  <p className="text-[12px] text-black/50">Máximo 3 meses</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 11: Internal Linking */}
          <section className="border-t border-black/10 pt-12">
            <h2 className="text-[1.5rem] font-bold tracking-tight text-black mb-6">Artículos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/legalizacion-documentos-cubanos" className="bg-[#FAFAFA] hover:bg-black/5 p-5 rounded-2xl transition-colors border border-black/5">
                <h3 className="font-bold text-[15px] text-black mb-2">Legalización de documentos cubanos</h3>
                <p className="text-[13px] text-black/60">Si necesitas antecedentes penales legalizados para la regularización.</p>
              </Link>
              <Link href="/arraigo-social-cubanos-espana" className="bg-[#FAFAFA] hover:bg-black/5 p-5 rounded-2xl transition-colors border border-black/5">
                <h3 className="font-bold text-[15px] text-black mb-2">Arraigo social 2026</h3>
                <p className="text-[13px] text-black/60">La otra vía para obtener residencia si llevas 2+ años en España.</p>
              </Link>
              <Link href="/nacionalidad-espanola-cubanos" className="bg-[#FAFAFA] hover:bg-black/5 p-5 rounded-2xl transition-colors border border-black/5">
                <h3 className="font-bold text-[15px] text-black mb-2">Nacionalidad española</h3>
                <p className="text-[13px] text-black/60">El siguiente paso después de obtener tu residencia.</p>
              </Link>
            </div>
          </section>

        </article>
      </main>
      
      <Footer />
    </>
  );
}
