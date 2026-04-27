import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Nosotros — LegalizaNos, Asesoría Migratoria para Cubanos | LegalizaNos",
  description: "Somos un equipo de 2 personas especializadas en trámites migratorios para cubanos en España. Sin centralitas, sin robots. Personas reales que entienden tu situación.",
  alternates: {
    canonical: "https://legalizanos.com/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-24 lg:pt-32 pb-24 text-foreground selection:bg-black/10">
      
      {/* 1. INTRO */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-8">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black/80 truncate">Sobre Nosotros</span>
        </nav>

        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.05] mb-8">
          Quiénes somos — y por qué hacemos esto
        </h1>
        
        <div className="flex flex-col gap-6 text-[19px] md:text-[22px] font-medium text-black/60 leading-relaxed">
          <p>
            LegalizaNos es una asesoría migratoria fundada por dos personas que conocen los trámites migratorios porque los han vivido. No somos un despacho de 90 abogados. No tenemos centralita. No tienes que pasar por 3 departamentos para saber en qué punto está tu documento.
          </p>
          <p>
            Somos <strong className="text-black">Humberto</strong> en Valencia y <strong className="text-black">Amanda</strong> en Madrid. Cuando nos escribes por WhatsApp, te contestamos nosotros. Cuando tu documento avanza, te avisamos nosotros. Cuando algo se complica, te lo explicamos nosotros.
          </p>
          <p>
            Nos especializamos en un solo nicho: cubanos en España que necesitan legalizar documentos, obtener su residencia, o reunir a su familia. No hacemos declaraciones de la renta. No llevamos nóminas. No tramitamos permisos de obra. Hacemos una cosa y la hacemos bien.
          </p>
        </div>
      </section>

      {/* 2. POR QUÉ SOLO CUBANOS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold text-black mb-6">Porque conocemos Cuba</h2>
        <div className="bg-white border border-black/10 rounded-[32px] p-8 md:p-12 shadow-sm text-[17px] text-black/70 font-medium leading-relaxed flex flex-col gap-5">
          <p>
            Los trámites migratorios para cubanos tienen particularidades que las gestorías generalistas no manejan bien. Cuba no está en el Convenio de La Haya — la apostilla no vale. El MINJUS tiene sus propios plazos y su propia lógica. Los registros civiles cubanos pierden documentos. El Consulado de España en La Habana es un cuello de botella constante.
          </p>
          <p>
            Si no conoces estas cosas, cometes errores que le cuestan meses al cliente. Nosotros las conocemos porque las vivimos todos los días. Tenemos equipo en La Habana que gestiona directamente las obtenciones y legalizaciones. No subcontratamos a intermediarios — gestionamos nosotros.
          </p>
          <p>
            Eso no significa que solo atendamos a cubanos. Si eres de otro país y necesitas ayuda con tu residencia o nacionalidad en España, también podemos ayudarte. Pero nuestro conocimiento más profundo está en el corredor Cuba-España.
          </p>
        </div>
      </section>

      {/* 3. CÓMO TRABAJAMOS */}
      <section className="bg-white py-24 border-y border-black/5 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold text-black mb-10 text-center">Tres cosas que nos definen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-bold text-black">Te decimos cuánto cuesta antes de empezar</h3>
              <p className="text-[15px] font-medium text-black/60 leading-relaxed">
                Sin consultas de pago para darte un precio. Sin 'depende del caso' como respuesta. Te damos un número cerrado por WhatsApp antes de que te comprometas a nada. Si no te convence, tan amigos.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-bold text-black">Te contamos qué pasa con tu trámite</h3>
              <p className="text-[15px] font-medium text-black/60 leading-relaxed">
                Cada vez que tu documento avanza — o se retrasa — te escribimos por WhatsApp. No tienes que perseguirnos. No tienes que llamar para preguntar. Si hay un problema, te lo decimos el mismo día, no cuando ya es tarde.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-bold text-black">No presentamos expedientes abocados al fracaso</h3>
              <p className="text-[15px] font-medium text-black/60 leading-relaxed">
                Si revisamos tu caso y vemos que no cumples los requisitos, te lo decimos. No te cobramos para presentar algo que van a denegar. Te orientamos sobre qué te falta. Preferimos perder un cliente hoy que perder su confianza para siempre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EQUIPO */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold text-black mb-8 text-center">Las personas detrás de tu trámite</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          <div className="bg-[#FAFAFA] border border-black/10 rounded-[32px] p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-black/5 rounded-full mb-6 overflow-hidden flex items-center justify-center">
              <span className="text-[32px]">🧔🏻‍♂️</span>
            </div>
            <h3 className="text-[20px] font-bold text-black mb-1">Humberto</h3>
            <span className="text-[13px] font-bold text-black/40 uppercase tracking-wider mb-6">Fundador · Valencia</span>
            <p className="text-[15px] font-medium text-black/60 leading-relaxed">
              Abogado y especialista en extranjería. Entiendo el laberinto burocrático porque tuve que cruzarlo yo mismo hace años. Mi objetivo es que tú no cometas los mismos errores que yo cometí.
            </p>
          </div>

          <div className="bg-[#FAFAFA] border border-black/10 rounded-[32px] p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-black/5 rounded-full mb-6 overflow-hidden flex items-center justify-center">
              <span className="text-[32px]">👩🏽‍💻</span>
            </div>
            <h3 className="text-[20px] font-bold text-black mb-1">Amanda</h3>
            <span className="text-[13px] font-bold text-black/40 uppercase tracking-wider mb-6">Cofundadora · Madrid</span>
            <p className="text-[15px] font-medium text-black/60 leading-relaxed">
              Especialista en gestión documental y operaciones consulares. Mi trabajo es asegurarme de que el papel que necesitas de Cuba llegue a tus manos en España de la manera más rápida posible.
            </p>
          </div>

        </div>

        <p className="text-[16px] text-center font-bold text-black/50">
          Cuando nos escribes, te contesta alguno de nosotros dos. No un bot. No un becario. No una centralita.
        </p>
      </section>

      {/* 6. CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-black text-white rounded-[32px] p-10 md:p-16 shadow-xl">
          <h2 className="text-[2rem] font-bold mb-6">¿Quieres saber si podemos ayudarte?</h2>
          <p className="text-[17px] text-white/70 font-medium mb-10 max-w-2xl mx-auto">
            Cuéntanos tu caso. Si podemos, te decimos cómo. Si no podemos, te decimos por qué.
          </p>
          <a 
            href="https://wa.me/34000000000?text=Hola%2C%20necesito%20información%20sobre%20un%20trámite"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
