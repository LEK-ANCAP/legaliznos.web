import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Cita Previa Extranjería 2026 — Tutorial Paso a Paso para Cubanos | LegalizaNos",
  description: "Guía paso a paso para conseguir cita previa en Extranjería en 2026. Cl@ve, sede electrónica, trucos para pillar cita en Madrid y Valencia. Con capturas.",
  alternates: {
    canonical: "https://legalizanos.es/blog/cita-previa-extranjeria-tutorial",
  },
};

export default function BlogCitaPreviaTutorial() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Puedo ir sin cita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Sin cita no te atienden. La única excepción son emergencias documentadas (vuelo inminente, documento que caduca hoy)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo antes puedo pedir cita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El sistema suele mostrar citas para las próximas 2-4 semanas. No puedes pedir cita para dentro de 3 meses."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué hago si llevo semanas sin encontrar cita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Opciones: seguir intentando con los trucos anteriores, llamar al 060, o contratar a un profesional que presente telemáticamente por ti (nosotros lo hacemos para arraigos, renovaciones y nacionalidad)."
        }
      },
      {
        "@type": "Question",
        "name": "¿La cita de Extranjería y la de Policía son lo mismo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No siempre. La cita de 'Extranjería' es para presentar solicitudes (arraigo, renovaciones). La de 'Policía — Expedición de TIE' es para la toma de huellas después de la aprobación. Son trámites diferentes con citas diferentes."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cómo conseguir cita previa en Extranjería — tutorial paso a paso",
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
            <span className="text-black/80 truncate">Cita previa Extranjería</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
              Cómo conseguir cita previa en Extranjería — tutorial paso a paso
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
              <li><a href="#para-que-cita" className="hover:text-black hover:underline">1. Para qué necesitas cita en Extranjería (y para qué no)</a></li>
              <li><a href="#sistema-citas" className="hover:text-black hover:underline">2. El sistema de citas: cómo funciona</a></li>
              <li><a href="#paso-a-paso" className="hover:text-black hover:underline">3. Paso a paso: conseguir cita online</a></li>
              <li><a href="#clave" className="hover:text-black hover:underline">4. El problema de Cl@ve (y cómo solucionarlo)</a></li>
              <li><a href="#trucos" className="hover:text-black hover:underline">5. Trucos para pillar cita cuando no hay disponibilidad</a></li>
              <li><a href="#provincias" className="hover:text-black hover:underline">6. Citas por provincia: Madrid vs Valencia</a></li>
              <li><a href="#faq" className="hover:text-black hover:underline">7. Preguntas frecuentes</a></li>
            </ol>
          </div>

          <div className="space-y-8 text-[17px] md:text-[18px] text-black/80 font-medium leading-relaxed">
            
            <section id="para-que-cita">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">1. Para qué necesitas cita (y para qué no)</h2>
              <p className="mb-6">
                No todos los trámites de extranjería requieren cita presencial. Muchos se pueden hacer telemáticamente. Aquí te aclaramos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border-[1.5px] border-black/10 p-5 rounded-2xl">
                  <h3 className="font-bold text-black mb-3">SÍ necesitas cita presencial para:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-black/70">
                    <li>Toma de huellas para la TIE (después de que te aprueben arraigo, reagrupación, etc.)</li>
                    <li>Recogida de la TIE</li>
                    <li>Algunos trámites que la Oficina de Extranjería no permite hacer online</li>
                  </ul>
                </div>
                
                <div className="bg-white border-[1.5px] border-black/10 p-5 rounded-2xl">
                  <h3 className="font-bold text-black mb-3">NO necesitas cita presencial para:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-black/70">
                    <li>Presentar solicitud de <Link href="/arraigo-social-cubanos-espana" className="underline font-bold text-black hover:text-black/70">arraigo social</Link> (telemática)</li>
                    <li>Presentar solicitud de <Link href="/nacionalidad-espanola-cubanos" className="underline font-bold text-black hover:text-black/70">nacionalidad española</Link></li>
                    <li>Presentar solicitud de <Link href="/reagrupacion-familiar-cubanos-espana" className="underline font-bold text-black hover:text-black/70">reagrupación familiar</Link></li>
                    <li>Renovar tu autorización de residencia</li>
                  </ul>
                </div>
              </div>

              <p className="mb-4 font-bold text-black border-l-4 border-black pl-4 py-2 bg-[#FAFAFA]">
                Si contratas un servicio con nosotros, presentamos todo de forma telemática. La única cita presencial que necesitarás es la toma de huellas DESPUÉS de que te aprueben.
              </p>
            </section>

            <section id="sistema-citas">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">2. El sistema de citas</h2>
              <p className="mb-4">
                Las citas de Extranjería se solicitan a través de la sede electrónica: <a href="https://sede.administracionespublicas.gob.es" target="_blank" rel="noopener noreferrer" className="text-black font-bold underline">sede.administracionespublicas.gob.es</a>
              </p>
              <p className="mb-4">
                El problema: las citas se abren por tandas (no hay un horario fijo), se agotan en minutos, y el sistema se satura constantemente. Es frustrante. Lo sabemos.
              </p>
            </section>

            <section id="paso-a-paso">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">3. Paso a paso: conseguir cita online</h2>
              
              <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-black/5">
                <ol className="list-decimal pl-5 space-y-3 font-medium text-[16px]">
                  <li><strong className="text-black">Paso 1:</strong> Entra en sede.administracionespublicas.gob.es</li>
                  <li><strong className="text-black">Paso 2:</strong> Selecciona provincia (ej: Madrid, Valencia)</li>
                  <li><strong className="text-black">Paso 3:</strong> Selecciona el trámite (ej: "Policía — Toma de huellas", "Policía — Expedición de tarjeta de identidad de extranjero")</li>
                  <li><strong className="text-black">Paso 4:</strong> Introduce tu NIE o número de pasaporte + nombre y apellidos</li>
                  <li><strong className="text-black">Paso 5:</strong> Si hay citas disponibles, selecciona fecha y hora</li>
                  <li><strong className="text-black">Paso 6:</strong> Confirma y guarda el justificante (PDF o captura de pantalla)</li>
                </ol>
              </div>
              <p className="mt-4 italic text-black/60">Si en el paso 5 aparece "No hay citas disponibles en este momento", no desesperes. Sigue leyendo.</p>
            </section>

            <section id="clave">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">4. El problema de Cl@ve</h2>
              <p className="mb-4">
                Muchos trámites telemáticos de extranjería requieren identificación con Cl@ve (certificado digital del gobierno). Para los cubanos, obtener Cl@ve puede ser un problema:
              </p>
              
              <div className="bg-white border-[1.5px] border-black/10 p-5 rounded-2xl mb-6">
                <h3 className="font-bold text-black mb-3 text-[18px]">Cómo obtener Cl@ve:</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-black/70">
                  <li>Online en clave.gob.es si tienes DNI español o NIE con certificado electrónico</li>
                  <li>Presencialmente en una oficina de la Seguridad Social, Hacienda, o cualquier oficina habilitada — con cita previa y pasaporte/NIE en vigor</li>
                  <li>A través de un representante legal (abogado o gestor con certificado digital)</li>
                </ul>
              </div>

              <p className="mb-4 font-medium text-black">
                Si estás en situación irregular y no tienes NIE, obtener Cl@ve es complicado. En ese caso, un representante legal puede presentar solicitudes telemáticas por ti. Nosotros lo hacemos para todos nuestros clientes.
              </p>
            </section>

            <section id="trucos">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">5. Trucos para pillar cita</h2>
              <p className="mb-6">Estos no son trucos mágicos — son estrategias que funcionan:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-black text-[18px]">1. Intenta a primera hora de la mañana (7:00-8:00)</h3>
                  <p className="text-[16px] text-black/70">Las citas nuevas suelen publicarse entre las 7:00 y las 9:00 de la mañana. A las 10:00 ya suelen estar agotadas.</p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-[18px]">2. Intenta los lunes y después de festivos</h3>
                  <p className="text-[16px] text-black/70">Los lunes y los días después de festivos suelen liberar más citas porque se reprograman las de la semana.</p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-[18px]">3. Refresca la página constantemente</h3>
                  <p className="text-[16px] text-black/70">Las citas que otros usuarios no confirman o cancelan vuelven al sistema. Refrescar cada 30-60 segundos puede funcionar.</p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-[18px]">4. Prueba diferentes trámites</h3>
                  <p className="text-[16px] text-black/70">A veces la cita que necesitas está bajo un nombre de trámite diferente al que esperas. Prueba variaciones.</p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-[18px]">5. Intenta en comisarías menos saturadas</h3>
                  <p className="text-[16px] text-black/70">En Madrid, en vez de intentar en las comisarías céntricas, prueba en Leganés, Alcorcón, Getafe. En Valencia, prueba en localidades del área metropolitana.</p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-[18px]">6. Usa el teléfono 060</h3>
                  <p className="text-[16px] text-black/70">Puedes solicitar cita llamando al 060 (horario 9:30-14:00 y 16:30-19:30, L-V). A veces tienen disponibilidad que no aparece en la web.</p>
                </div>
              </div>
            </section>

            <section id="provincias">
              <h2 className="text-[2rem] font-bold text-black mb-6 mt-12">6. Citas por provincia</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAFAFA] border border-black/5 p-6 rounded-2xl">
                  <h3 className="text-[20px] font-bold text-black mb-3"><Link href="/legalizacion-documentos-madrid" className="hover:underline">Madrid</Link></h3>
                  <p className="text-[16px] text-black/70">Las citas en Madrid son las más difíciles de conseguir de toda España. Hay varias comisarías (Centro, Arganzuela, Aluche, Leganés, Alcobendas) y todas están saturadas. <strong>Consejo:</strong> intenta en comisarías de la periferia sur (Leganés, Getafe, Móstoles) — suelen tener más disponibilidad.</p>
                </div>
                <div className="bg-[#FAFAFA] border border-black/5 p-6 rounded-2xl">
                  <h3 className="text-[20px] font-bold text-black mb-3"><Link href="/legalizacion-documentos-valencia" className="hover:underline">Valencia</Link></h3>
                  <p className="text-[16px] text-black/70">Más fácil que Madrid, pero no sencillo. La comisaría principal para extranjería es la de la calle Zapadores. También puedes intentar en Paterna o Torrent si no hay citas en Valencia ciudad.</p>
                </div>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-[2rem] font-bold text-black mb-8 mt-12 border-t border-black/10 pt-10">7. Preguntas frecuentes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Puedo ir sin cita?</h3>
                  <p className="text-black/70">No. Sin cita no te atienden. La única excepción son emergencias documentadas (vuelo inminente, documento que caduca hoy).</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Cuánto tiempo antes puedo pedir cita?</h3>
                  <p className="text-black/70">El sistema suele mostrar citas para las próximas 2-4 semanas. No puedes pedir cita para dentro de 3 meses.</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿Qué hago si llevo semanas sin encontrar cita?</h3>
                  <p className="text-black/70">Opciones: seguir intentando con los trucos anteriores, llamar al 060, o contratar a un profesional que presente telemáticamente por ti (nosotros lo hacemos para arraigos, renovaciones y nacionalidad).</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-black mb-2">¿La cita de Extranjería y la de Policía son lo mismo?</h3>
                  <p className="text-black/70">No siempre. La cita de "Extranjería" es para presentar solicitudes (arraigo, renovaciones). La de "Policía — Expedición de TIE" es para la toma de huellas después de la aprobación. Son trámites diferentes con citas diferentes.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Banner */}
        <section className="max-w-[800px] mx-auto px-6 lg:px-8 mt-16">
          <div className="bg-[#25D366] text-white p-8 md:p-12 rounded-[32px] text-center shadow-lg">
            <h2 className="text-[2rem] font-bold mb-4 tracking-tight leading-tight">
              ¿No consigues cita?
            </h2>
            <p className="text-[18px] font-medium text-white/90 mb-8 max-w-2xl mx-auto">
              Nosotros presentamos tu solicitud telemáticamente sin que tengas que pisar Extranjería.
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
            <Link href="/blog/arraigo-social-requisitos-2026-cubanos" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Arraigo social 2026</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Requisitos completos para aplicar este año.</p>
            </Link>
            <Link href="/arraigo-social-cubanos-espana" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Tramitación de arraigo</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Lo presentamos telemáticamente por ti.</p>
            </Link>
            <Link href="/precios" className="bg-white border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group shadow-sm">
              <h4 className="font-bold text-black text-[15px] leading-tight mb-2 group-hover:underline">Preguntas frecuentes</h4>
              <p className="text-[13px] font-medium text-black/60 leading-relaxed">Dudas sobre trámites migratorios resueltas.</p>
            </Link>
          </div>
        </section>

      </main>

      <FloatingContact />
    </>
  );
}
