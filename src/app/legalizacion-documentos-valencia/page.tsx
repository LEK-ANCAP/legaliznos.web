import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, Zap, Euro, MessageCircle, FileSignature, Users, BookOpen, HeartHandshake, Plane, Info, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Legalización de Documentos Cubanos en Valencia — Asesoría Migratoria | LegalizaNos",
  description: "Legalizamos tus documentos cubanos y tramitamos tu residencia en Valencia. Arraigo, nacionalidad, visados. Oficina en Valencia, servicio online. Consulta gratuita.",
  alternates: {
    canonical: "https://legalizanos.com/legalizacion-documentos-valencia",
  },
};

export default function ValenciaPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-foreground overflow-x-hidden selection:bg-black/10 pb-24 pt-24 lg:pt-32">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-8">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black/80 truncate">Valencia</span>
        </nav>

        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
          Legalización de documentos cubanos y trámites migratorios en Valencia
        </h1>
        
        <p className="text-[19px] md:text-[22px] font-medium text-black/60 leading-relaxed mb-10">
          Somos de Valencia. Tramitamos desde aquí y conocemos cómo funciona la Oficina de Extranjería de la avenida del Cid por dentro. Si necesitas legalizar documentos cubanos, obtener tu residencia o la nacionalidad, hablamos tu idioma — literal y figuradamente.
        </p>

        {/* Datos rápidos */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 shadow-sm">
            <MapPin className="w-4 h-4 text-black" />
            <span className="text-[14px] font-bold text-black/80">Valencia | Estamos aquí, no en una centralita</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 shadow-sm">
            <Zap className="w-4 h-4 text-black" />
            <span className="text-[14px] font-bold text-black/80">Plazos cortos | Resuelve más rápido que Madrid</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 shadow-sm">
            <Euro className="w-4 h-4 text-black" />
            <span className="text-[14px] font-bold text-black/80">Desde 250€ | Precios cerrados</span>
          </div>
        </div>

        <a 
          href="https://wa.me/34000000000?text=Hola%2C%20necesito%20información%20para%20un%20trámite%20en%20Valencia"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          Consulta gratuita para tu caso en Valencia
        </a>
      </section>

      {/* 2. POR QUÉ VALENCIA ES DIFERENTE */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold text-black mb-4">Tramitar en Valencia: la buena noticia</h2>
        <p className="text-[17px] text-black/60 font-medium mb-10">
          Valencia tiene una ventaja que pocas ciudades en España tienen: la Oficina de Extranjería resuelve más rápido que Madrid, Barcelona o Málaga. Si vives aquí, eso juega a tu favor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-[18px] font-bold text-black mb-3">Plazos más cortos</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              Un arraigo social en Valencia suele resolverse en 3-5 meses, frente a los 4-8 de Madrid. No es que Extranjería en Valencia sea más amable — es que tiene menos volumen. Aprovéchalo. Si llevas los 2 años, no esperes más.
            </p>
          </div>
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-[18px] font-bold text-black mb-3">Una oficina principal</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              A diferencia de Madrid, en Valencia la mayoría de trámites pasan por la Oficina de la avenida del Cid, 7. Eso simplifica las cosas: un solo criterio, un solo flujo. Presentamos telemáticamente, pero sabemos cómo funciona la presencial.
            </p>
          </div>
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-[18px] font-bold text-black mb-3">Comunidad creciente</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              Valencia se ha convertido en el destino favorito. Coste de vida más bajo, clima y calidad de vida atraen a muchas familias cubanas. Hay una comunidad que te entiende — y una gestoría que habla tu idioma.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS EN VALENCIA */}
      <section className="bg-white py-24 border-y border-black/5 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold text-black mb-12">Qué hacemos para cubanos en Valencia</h2>
          
          <div className="flex flex-col gap-6">
            <div className="border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
                <FileSignature className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Legalización de documentos cubanos</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                  Obtenemos y legalizamos tus documentos en Cuba (MINJUS + Consulado de España en La Habana) y te los entregamos en tu domicilio en Valencia, Castellón o Alicante. No necesitas ir a Cuba.
                </p>
                <Link href="/legalizacion-documentos-cubanos" className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">Ver detalles y precios <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </div>

            <div className="border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Arraigo social en Valencia</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                  Presentamos tu expediente ante la Oficina de Extranjería de Valencia (avenida del Cid, 7). Los arraigos en la Comunidad Valenciana suelen resolverse en 3-5 meses. Preparamos toda la documentación.
                </p>
                <Link href="/arraigo-social-cubanos-espana" className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">Ver requisitos del arraigo <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </div>

            <div className="border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Nacionalidad española en Valencia</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                  Tu expediente se presenta ante el Ministerio de Justicia. La jura de nacionalidad se realiza en el Registro Civil de Valencia (plaza del Ayuntamiento o Juzgados de Paterna según tu localidad). Te acompañamos hasta ese día.
                </p>
                <Link href="/nacionalidad-espanola-cubanos" className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">Ver proceso de nacionalidad <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </div>

            <div className="border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Reagrupación familiar</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                  El expediente se presenta en la Oficina de Extranjería de Valencia. Gestionamos todo: documentación aquí + coordinación con el Consulado de España en La Habana para el visado de tu familiar.
                </p>
                <Link href="/reagrupacion-familiar-cubanos-espana" className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">Ver reagrupación familiar <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </div>

            <div className="border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Visados desde Cuba</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                  Si alguien en Cuba necesita un visado para venir a Valencia (trabajo, estudios, reunificación), preparamos la documentación y coordinamos con el Consulado en La Habana.
                </p>
                <Link href="/visados-cuba-espana" className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">Evaluar mi caso <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. DÓNDE ESTÁN LAS OFICINAS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold text-black mb-4">Oficinas de Extranjería y consulados en Valencia</h2>
        <p className="text-[17px] text-black/60 font-medium mb-10">
          Nota: Valencia no tiene Consulado de Cuba. Para trámites consulares cubanos (pasaporte, poderes) deberás acudir al de Barcelona o Madrid, salvo que se pueda hacer por representación. Te orientamos.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-black/10">
                <th className="py-4 px-4 text-[14px] font-bold text-black/60 uppercase">Oficina</th>
                <th className="py-4 px-4 text-[14px] font-bold text-black/60 uppercase">Dirección</th>
                <th className="py-4 px-4 text-[14px] font-bold text-black/60 uppercase">Para qué</th>
              </tr>
            </thead>
            <tbody className="text-[15px] text-black/80 font-medium">
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Oficina de Extranjería de Valencia</td>
                <td className="py-4 px-4 text-black/60">Av. del Cid, 7 — 46018 Valencia</td>
                <td className="py-4 px-4">Arraigos, renovaciones, reagrupaciones</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Comisaría de Policía (TIE)</td>
                <td className="py-4 px-4 text-black/60">C/ Zapadores, 50 — 46006 Valencia</td>
                <td className="py-4 px-4">Toma de huellas y recogida de TIE</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Registro Civil de Valencia</td>
                <td className="py-4 px-4 text-black/60">Plaza del Ayuntamiento, 4 — 46002 Valencia</td>
                <td className="py-4 px-4">Inscripción de nacionalidad, jura</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Juzgados de Paterna</td>
                <td className="py-4 px-4 text-black/60">C/ Blasco Ibáñez, 12 — Paterna</td>
                <td className="py-4 px-4">Registro Civil área metropolitana</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Consulado General de Cuba</td>
                <td className="py-4 px-4 text-black/60 text-red-600/80">No hay en Valencia (Ir a BCN o Madrid)</td>
                <td className="py-4 px-4">Trámites consulares cubanos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. FAQ VALENCIA */}
      <section className="bg-white py-24 border-y border-black/5 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold text-black mb-12">Preguntas frecuentes en Valencia</h2>
          
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3">¿Cuánto tarda el arraigo social en Valencia?</h3>
              <p className="text-[16px] text-black/60 font-medium leading-relaxed">
                Menos que en Madrid. Estima 3-5 meses. La Oficina de Extranjería de la avenida del Cid maneja menos volumen que Madrid y suele resolver con mayor agilidad. Algunos casos se han resuelto en menos de 3 meses.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3">¿Tengo que ir a la Oficina de Extranjería de la avenida del Cid?</h3>
              <p className="text-[16px] text-black/60 font-medium leading-relaxed">
                Para la presentación del expediente, no — lo hacemos telemáticamente. Solo necesitas ir presencialmente para la toma de huellas (cita en Comisaría de Zapadores u otra asignada) una vez que te aprueben el arraigo.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3">¿No hay consulado de Cuba en Valencia?</h3>
              <p className="text-[16px] text-black/60 font-medium leading-relaxed">
                No. El Consulado General de Cuba más cercano a Valencia está en Barcelona. Para renovar pasaporte cubano o hacer trámites consulares, puedes ir allí o intentar gestionarlos por representación desde Madrid. Te orientamos sobre la mejor opción.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3">¿Cubrís también Castellón y Alicante?</h3>
              <p className="text-[16px] text-black/60 font-medium leading-relaxed">
                Sí. Nuestro servicio es 100% online, así que cubrimos toda la Comunidad Valenciana. Los arraigos de Castellón y Alicante se tramitan en sus respectivas oficinas de Extranjería, pero la documentación y la preparación es la misma. Enviamos documentos legalizados a cualquier domicilio de la Comunidad Valenciana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-black text-white rounded-[32px] p-10 md:p-16">
          <h2 className="text-[2rem] font-bold mb-4">¿Vives en Valencia y necesitas resolver tus trámites?</h2>
          <p className="text-[17px] text-white/70 font-medium mb-10 max-w-2xl mx-auto">
            Estamos aquí. Cuéntanos tu caso por WhatsApp y te decimos exactamente qué necesitas.
          </p>
          <a 
            href="https://wa.me/34000000000?text=Hola%2C%20necesito%20información%20para%20un%20trámite%20en%20Valencia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Consulta gratuita por WhatsApp
          </a>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-6 text-[14px] font-bold text-black/40">
          <Link href="/legalizacion-documentos-madrid" className="hover:text-black transition-colors">Ver servicios en Madrid</Link>
          <Link href="/legalizacion-documentos-cubanos" className="hover:text-black transition-colors">Toda España</Link>
        </div>
      </section>

    </main>
  );
}
