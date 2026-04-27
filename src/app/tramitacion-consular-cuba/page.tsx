import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@heroui/react";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Tramitación Consular en Cuba desde España — Equipo en La Habana | LegalizaNos",
  description: "Nuestro equipo en La Habana gestiona tus trámites presenciales en Cuba: citas consulares, obtención de documentos, legalizaciones. Sin que viajes. 100% a distancia.",
  alternates: {
    canonical: "https://legalizanos.es/tramitacion-consular-cuba",
  },
};

export default function TramitacionConsularCubaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Puedo enviar documentos a Cuba para que los gestionen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Si tienes un documento que necesitas entregar en un organismo cubano, podemos recibirlo en La Habana y hacer la gestión. Te indicamos cómo enviarlo de forma segura."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tarda una gestión en Cuba?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende del trámite. Obtener un documento del registro civil: 1-3 semanas. Legalización MINJUS: 2-4 semanas. Cita del Consulado: variable (depende de disponibilidad). Te damos estimación específica para tu caso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Gestionáis en toda Cuba o solo en La Habana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro equipo está en La Habana, que es donde están el MINJUS, el Consulado de España, y las oficinas centrales. Para documentos de registros civiles de otras provincias, podemos gestionar la solicitud centralizada si está disponible, o coordinamos con contactos locales. Depende del caso — consúltanos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo contratar solo la gestión en Cuba sin la legalización?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Si solo necesitas obtener un documento del registro civil (sin legalizarlo) o hacer un trámite específico en La Habana, podemos hacerlo como servicio independiente. Escríbenos con el detalle."
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
          <span className="text-black">Tramitación consular en Cuba</span>
        </nav>

        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-black leading-[1.05] mb-8">
          Tramitación consular en Cuba — <br className="hidden md:block"/>
          <span className="text-black/40">gestionamos por ti sin que viajes</span>
        </h1>

        <p className="text-[17px] md:text-[19px] text-black/70 font-medium leading-relaxed max-w-3xl mb-10">
          ¿Necesitas hacer gestiones presenciales en Cuba pero no puedes viajar? Nuestro equipo en La Habana va por ti. Citas en el Consulado de España, obtención de documentos en registros civiles, legalizaciones en el MINJUS, y todo lo que necesite presencia física en la isla.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">La Habana</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Equipo propio, no intermediarios</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">100% a distancia</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Tú no viajas</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">Consulta gratis</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Te decimos si podemos gestionarlo</div>
          </div>
          <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-black/5">
            <div className="text-[18px] font-bold text-black mb-1">WhatsApp</div>
            <div className="text-[13px] font-medium text-black/50 leading-tight">Coordinación directa contigo</div>
          </div>
        </div>

        <Link href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] text-white font-bold px-8 h-12 text-[15px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all w-full sm:w-auto">
            ¿Qué necesitas gestionar en Cuba?
          </Button>
        </Link>
      </section>

      {/* 2. QUÉ GESTIONAMOS EN CUBA */}
      <section className="bg-[#FAFAFA] py-24 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold tracking-tight text-black mb-12">
            Todo lo que necesita <br className="hidden md:block"/>
            <span className="text-black/40">que alguien vaya presencialmente</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-[1.5px] border-black/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center mb-6">
                <span className="text-[20px]">📄</span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Obtención de documentos en registros civiles</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                Certificados de nacimiento, matrimonio, defunción, divorcio, soltería. Vamos al registro civil correspondiente, solicitamos el documento, verificamos que los datos son correctos, y te lo enviamos.
              </p>
              <p className="text-[13px] text-black/40 font-medium">
                Nota: los registros civiles en Cuba son caóticos. Archivos que no aparecen, sistemas caídos, horarios que cambian. Nuestro equipo conoce cómo funcionan y tiene experiencia gestionando los problemas habituales.
              </p>
            </div>

            <div className="bg-white border-[1.5px] border-black/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center mb-6">
                <span className="text-[20px]">🏛️</span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Legalización en el MINJUS</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                El Ministerio de Justicia de Cuba (MINJUS) es el primer paso obligatorio para legalizar cualquier documento cubano para uso en España. Llevamos tus documentos, los presentamos, y recogemos la legalización cuando esté lista.
              </p>
              <Link href="/legalizacion-documentos-cubanos#proceso" className="text-[14px] font-bold text-black hover:underline inline-flex items-center gap-1">
                ¿Qué es el MINJUS y por qué es necesario? <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white border-[1.5px] border-black/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center mb-6">
                <span className="text-[20px]">🇪🇸</span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Citas en el Consulado de España en La Habana</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                El segundo paso de la legalización: presentar el documento ya legalizado por el MINJUS en el <Link href="/visados-cuba-espana" className="underline hover:text-black font-bold">Consulado de España en La Habana</Link>. Las citas son limitadísimas — se abren por tandas y se agotan en minutos. Nuestro equipo monitoriza la apertura de citas y gestiona la presentación.
              </p>
            </div>

            <div className="bg-white border-[1.5px] border-black/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/10 flex items-center justify-center mb-6">
                <span className="text-[20px]">📝</span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Otros trámites presenciales</h3>
              <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                Poderes notariales ante notaría cubana, gestiones ante el MINREX, recogida de documentos en cualquier organismo público cubano. Si necesita presencia en La Habana, podemos hacerlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POR QUÉ NO USAMOS INTERMEDIARIOS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">
          Equipo propio en La Habana — <br className="hidden md:block"/>
          <span className="text-black/40">no subcontratamos a desconocidos</span>
        </h2>
        
        <p className="text-[16px] text-black/70 font-medium leading-relaxed mb-6">
          En este sector, muchas gestorías &quot;con presencia en Cuba&quot; en realidad subcontratan a personas individuales que van de un registro a otro cobrando por gestión. No tienen control sobre la calidad, los plazos ni la comunicación.
        </p>
        
        <p className="text-[16px] text-black/70 font-medium leading-relaxed mb-8">
          Nosotros tenemos equipo propio en La Habana. Personas que trabajan con nosotros de forma estable, que conocen los registros civiles, que tienen relación con el MINJUS, y que saben cuándo se abren las citas del Consulado.
        </p>

        <h3 className="text-[18px] font-bold text-black mb-4">¿Qué significa esto para ti?</h3>
        <div className="space-y-4">
          <div className="bg-white border border-black/10 p-5 rounded-2xl flex gap-4">
            <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
            <p className="text-[15px] text-black/70 font-medium">Si hay un problema con tu documento (error de datos, archivo perdido), no te enteras 3 semanas después — lo detectamos el mismo día.</p>
          </div>
          <div className="bg-white border border-black/10 p-5 rounded-2xl flex gap-4">
            <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
            <p className="text-[15px] text-black/70 font-medium">Si el MINJUS se retrasa, te avisamos con contexto real (no un genérico &quot;estamos esperando&quot;).</p>
          </div>
          <div className="bg-white border border-black/10 p-5 rounded-2xl flex gap-4">
            <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
            <p className="text-[15px] text-black/70 font-medium">Si el Consulado cambia de criterio, nos adaptamos porque estamos ahí, no a 7.000 km.</p>
          </div>
        </div>
      </section>

      {/* 4. EL PROBLEMA DE CUBA */}
      <section className="bg-black py-24 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold tracking-tight text-white mb-8">
            Gestionar trámites en Cuba desde España <br className="hidden md:block"/>
            <span className="text-white/50">es casi imposible por tu cuenta</span>
          </h2>
          
          <p className="text-[16px] text-white/80 font-medium leading-relaxed mb-6">
            Si has intentado llamar a un registro civil en Cuba, ya sabes de qué hablamos. Los teléfonos no funcionan. Los emails no se contestan. Los horarios cambian sin aviso. Los sistemas se caen. Y si necesitas ir presencialmente, el vuelo <Link href="/legalizacion-documentos-madrid" className="underline hover:text-white">Madrid</Link>-La Habana cuesta más de 600€ — sin contar alojamiento, transporte y los días de trabajo perdidos.
          </p>

          <p className="text-[16px] text-white/80 font-medium leading-relaxed">
            Por eso ofrecemos este servicio. No porque sea complicado ir al MINJUS — es complicado ir al MINJUS y que todo salga bien a la primera. Nuestro equipo está ahí todos los días. Conocen las personas, los procesos, y los atajos legales. Eso es lo que pagas: no el desplazamiento, sino la experiencia de saber cómo funciona Cuba por dentro.
          </p>
        </div>
      </section>

      {/* 5. PRECIOS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold tracking-tight text-black mb-6">
          Cuánto cuesta que <span className="text-black/40">gestionemos en Cuba por ti</span>
        </h2>
        
        <p className="text-[16px] text-black/70 font-medium leading-relaxed mb-6">
          Los precios de tramitación consular están incluidos en nuestros servicios principales de legalización de documentos cubanos. No es un servicio aparte — cuando contratas una legalización completa (MINJUS + Consulado), la gestión en Cuba está incluida.
        </p>

        <div className="mb-8">
          <Link href="/precios" className="inline-flex items-center gap-2 font-bold text-black hover:opacity-70 transition-opacity">
            Ver <Link href="/precios" className="underline hover:text-black/70">precios de legalización</Link> de documentos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl">
          <p className="text-[15px] font-medium text-black/70">
            Si necesitas una gestión en Cuba que NO es una legalización (por ejemplo, obtener un documento sin legalizarlo, hacer un trámite notarial, o gestionar algo ante el MINREX), escríbenos para presupuesto personalizado.
          </p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-white py-24 border-t border-black/5 mb-10">
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
                ¿Puedo enviar documentos a Cuba para que los gestionen?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Sí. Si tienes un documento que necesitas entregar en un organismo cubano, podemos recibirlo en La Habana y hacer la gestión. Te indicamos cómo enviarlo de forma segura.
              </p>
            </div>
            
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿Cuánto tarda una gestión en Cuba?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Depende del trámite. Obtener un documento del registro civil: 1-3 semanas. Legalización MINJUS: 2-4 semanas. Cita del Consulado: variable (depende de disponibilidad). Te damos estimación específica para tu caso.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿Gestionáis en toda Cuba o solo en La Habana?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Nuestro equipo está en La Habana, que es donde están el MINJUS, el Consulado de España, y las oficinas centrales. Para documentos de registros civiles de otras provincias, podemos gestionar la solicitud centralizada si está disponible, o coordinamos con contactos locales. Depende del caso — consúltanos.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                ¿Puedo contratar solo la gestión en Cuba sin la legalización?
              </h3>
              <p className="text-[16px] text-black/70 font-medium leading-relaxed">
                Sí. Si solo necesitas obtener un documento del registro civil (sin legalizarlo) o hacer un trámite específico en La Habana, podemos hacerlo como servicio independiente. Escríbenos con el detalle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA + RELACIONADOS */}
      <section className="bg-black py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] font-bold text-white mb-6 leading-tight tracking-tight">
            ¿Necesitas que alguien gestione algo por ti en Cuba?
          </h2>
          <p className="text-[18px] font-medium text-white/60 mb-10">
            Cuéntanos qué necesitas y te decimos si podemos hacerlo, cuánto cuesta y cuánto tarda.
          </p>
          <Link href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#25D366] text-white font-bold px-8 h-14 text-[16px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all rounded-2xl w-full sm:w-auto">
              Consultar por WhatsApp
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h3 className="text-[15px] font-bold text-black/40 uppercase tracking-widest mb-8 text-center">También te puede interesar</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/legalizacion-documentos-cubanos" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Legalización completa</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">El servicio principal que incluye toda la gestión en Cuba.</p>
            </Link>
            <Link href="/legalizacion-expres" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Legalización exprés</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">Si necesitas la gestión en Cuba lo más rápido posible.</p>
            </Link>
            <Link href="/visados-cuba-espana" className="bg-[#FAFAFA] border border-black/5 p-6 rounded-3xl hover:border-black/20 hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-black text-[16px] mb-2 group-hover:underline">Visados desde Cuba</h4>
              <p className="text-[14px] font-medium text-black/60 leading-relaxed">Coordinación con el Consulado en La Habana para tu visado.</p>
            </Link>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
