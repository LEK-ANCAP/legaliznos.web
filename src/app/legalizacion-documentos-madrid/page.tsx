import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, Clock, Euro, MessageCircle, FileSignature, Users, BookOpen, HeartHandshake, Plane, Info, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Legalización de Documentos Cubanos en Madrid — Asesoría Migratoria | LegalizaNos",
  description: "Legalizamos tus documentos cubanos y tramitamos tu residencia en Madrid. Arraigo, nacionalidad, visados. 100% online con seguimiento WhatsApp. Consulta gratuita.",
  alternates: {
    canonical: "https://legalizanos.com/legalizacion-documentos-madrid",
  },
};

export default function MadridPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-foreground overflow-x-hidden selection:bg-black/10 pb-24 pt-24 lg:pt-32">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-8">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black/80 truncate">Madrid</span>
        </nav>

        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
          Legalización de documentos cubanos y trámites migratorios en Madrid
        </h1>
        
        <p className="text-[19px] md:text-[22px] font-medium text-black/60 leading-relaxed mb-10">
          Si vives en Madrid y necesitas legalizar documentos de Cuba, tramitar tu arraigo o conseguir la nacionalidad, podemos ayudarte. Gestionamos todo online — pero conocemos Madrid. Sabemos cómo trabaja cada oficina de Extranjería, qué plazos manejan y qué piden.
        </p>

        {/* Datos rápidos */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 shadow-sm">
            <MapPin className="w-4 h-4 text-black" />
            <span className="text-[14px] font-bold text-black/80">Madrid | Tu gestoría migratoria en la capital</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 shadow-sm">
            <Info className="w-4 h-4 text-black" />
            <span className="text-[14px] font-bold text-black/80">100% online | Sin desplazarte</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 shadow-sm">
            <Euro className="w-4 h-4 text-black" />
            <span className="text-[14px] font-bold text-black/80">Desde 250€ | Precios cerrados</span>
          </div>
        </div>

        <a 
          href="https://wa.me/34000000000?text=Hola%2C%20necesito%20información%20para%20un%20trámite%20en%20Madrid"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          Consulta gratuita para tu caso en Madrid
        </a>
      </section>

      {/* 2. POR QUÉ MADRID ES DIFERENTE */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold text-black mb-4">Tramitar en Madrid: lo que debes saber</h2>
        <p className="text-[17px] text-black/60 font-medium mb-10">
          Madrid concentra el mayor número de solicitudes de extranjería de toda España. Eso tiene consecuencias directas para ti:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-[18px] font-bold text-black mb-3">Oficinas saturadas</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              Madrid tiene varias oficinas (Silva, García de Paredes, Aluche, Leganés, Alcobendas). Cada una tiene sus propios plazos y criterios. Nosotros preparamos tu expediente según lo que pide cada delegación.
            </p>
          </div>
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-[18px] font-bold text-black mb-3">Plazos más largos</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              Por volumen, Madrid suele ser la provincia más lenta. Lo que en Valencia tarda 3 meses, en Madrid puede tardar 6. Te lo decimos para que planifiques bien y empieces cuanto antes.
            </p>
          </div>
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-[18px] font-bold text-black mb-3">Consulado de Cuba</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              Ubicado en Paseo de la Habana 194. Ojo: las citas son limitadísimas y cambian de criterio sin aviso. No es lo mismo que el Consulado en La Habana. Te orientamos sobre cuál necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS EN MADRID */}
      <section className="bg-white py-24 border-y border-black/5 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold text-black mb-12">Qué hacemos para cubanos en Madrid</h2>
          
          <div className="flex flex-col gap-6">
            <div className="border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
                <FileSignature className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Legalización de documentos cubanos</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                  Obtenemos y legalizamos tus documentos en Cuba (MINJUS + Consulado de España en La Habana) y te los entregamos en tu domicilio en Madrid. Antecedentes penales, nacimiento, matrimonio, títulos académicos y más. No necesitas ir a Cuba ni al Consulado.
                </p>
                <Link href="/legalizacion-documentos-cubanos" className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">Ver detalles y precios <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </div>

            <div className="border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Arraigo social en Madrid</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                  Los arraigos en Madrid se presentan telemáticamente ante la Oficina correspondiente a tu zona. Dependiendo de si vives en Madrid capital, Leganés o Alcobendas, la oficina y plazos cambian. Sabemos cuál te corresponde.
                </p>
                <Link href="/arraigo-social-cubanos-espana" className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">Ver requisitos del arraigo <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </div>

            <div className="border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black mb-2">Nacionalidad española en Madrid</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-4">
                  Tu expediente de nacionalidad se presenta ante el Ministerio de Justicia (sede central en Madrid). Los documentos cubanos deben estar legalizados y vigentes. Te orientamos sobre los plazos reales (actualmente 10-18 meses).
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
                  El expediente se presenta en la Oficina de Extranjería de Madrid. Una vez aprobado, tu familiar solicita el visado en el Consulado de España en La Habana. Gestionamos ambas fases.
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
                  Si tu familiar en Cuba necesita un visado para venir a Madrid (trabajo, estudios, reunificación), preparamos toda la documentación y coordinamos con el Consulado en La Habana.
                </p>
                <Link href="/visados-cuba-espana" className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">Evaluar mi caso <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. DÓNDE ESTÁN LAS OFICINAS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold text-black mb-4">Oficinas de Extranjería y consulados en Madrid</h2>
        <p className="text-[17px] text-black/60 font-medium mb-10">
          No necesitas ir tú a ninguna de estas oficinas — nosotros presentamos todo telemáticamente. Pero es útil que sepas dónde están por si necesitas cita presencial para la toma de huellas (TIE) o la jura de nacionalidad.
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
                <td className="py-4 px-4 font-bold">Extranjería Madrid (Silva)</td>
                <td className="py-4 px-4 text-black/60">C/ Silva, 6 — 28013 Madrid</td>
                <td className="py-4 px-4">Arraigos, renovaciones, reagrupaciones</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Extranjería Madrid (García de Paredes)</td>
                <td className="py-4 px-4 text-black/60">C/ García de Paredes, 65 — 28010 Madrid</td>
                <td className="py-4 px-4">Arraigos, autorizaciones</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Comisaría de Policía (TIE)</td>
                <td className="py-4 px-4 text-black/60">Varía según distrito</td>
                <td className="py-4 px-4">Toma de huellas y recogida de TIE</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Registro Civil de Madrid</td>
                <td className="py-4 px-4 text-black/60">C/ Pradillo, 66 — 28002 Madrid</td>
                <td className="py-4 px-4">Inscripción de nacionalidad, jura</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Consulado General de Cuba</td>
                <td className="py-4 px-4 text-black/60">Paseo de la Habana, 194 — 28036 Madrid</td>
                <td className="py-4 px-4">Trámites consulares cubanos</td>
              </tr>
              <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                <td className="py-4 px-4 font-bold">Ministerio de Justicia</td>
                <td className="py-4 px-4 text-black/60">C/ San Bernardo, 45 — 28015 Madrid</td>
                <td className="py-4 px-4">Nacionalidad española (sede central)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. FAQ MADRID */}
      <section className="bg-white py-24 border-y border-black/5 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold text-black mb-12">Preguntas frecuentes en Madrid</h2>
          
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3">¿Cuánto tarda el arraigo social en Madrid?</h3>
              <p className="text-[16px] text-black/60 font-medium leading-relaxed">
                Más que la media nacional. Estima 4-8 meses desde la presentación. La Oficina de Extranjería de Madrid está saturada por volumen de solicitudes. Si pasan 3 meses sin respuesta, técnicamente opera el silencio administrativo positivo, pero en Madrid pocas veces se resuelve en ese plazo.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3">¿Puedo tramitar todo online sin ir a ninguna oficina?</h3>
              <p className="text-[16px] text-black/60 font-medium leading-relaxed">
                La presentación del expediente la hacemos nosotros de forma telemática. Lo único que requiere presencia física es la toma de huellas para el TIE (después de que te aprueben) y la jura de nacionalidad. Para ambas necesitas cita previa en Madrid.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3">¿Es más caro tramitar en Madrid que en otras ciudades?</h3>
              <p className="text-[16px] text-black/60 font-medium leading-relaxed">
                Nuestros precios son los mismos para toda España. Lo que cambia es el plazo de resolución — Madrid suele ser más lento. El coste extra real es el tiempo de espera, no el dinero.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-black mb-3">¿Hay comunidad cubana grande en Madrid?</h3>
              <p className="text-[16px] text-black/60 font-medium leading-relaxed">
                Madrid tiene la segunda mayor comunidad cubana de España después de las islas. Hay comunidades fuertes en barrios como Tetuán, Usera, Carabanchel, Leganés y Alcorcón. Si conoces a alguien que necesite legalizar documentos o regularizarse, envíale nuestra web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-black text-white rounded-[32px] p-10 md:p-16">
          <h2 className="text-[2rem] font-bold mb-4">¿Vives en Madrid y necesitas resolver tus trámites?</h2>
          <p className="text-[17px] text-white/70 font-medium mb-10 max-w-2xl mx-auto">
            Cuéntanos tu caso por WhatsApp. Te decimos qué necesitas, cuánto cuesta, y cuánto va a tardar en Madrid específicamente.
          </p>
          <a 
            href="https://wa.me/34000000000?text=Hola%2C%20necesito%20información%20para%20un%20trámite%20en%20Madrid"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Consulta gratuita por WhatsApp
          </a>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-6 text-[14px] font-bold text-black/40">
          <Link href="/legalizacion-documentos-valencia" className="hover:text-black transition-colors">Ver servicios en Valencia</Link>
          <Link href="/legalizacion-documentos-cubanos" className="hover:text-black transition-colors">Toda España</Link>
        </div>
      </section>

    </main>
  );
}
