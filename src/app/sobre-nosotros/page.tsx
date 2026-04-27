import { Metadata } from "next";
import { Link } from "@heroui/react";
import { ChevronRight, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | LegalizaNos",
  description: "Nacimos con un único propósito: eliminar la burocracia y las estafas que sufren los cubanos al emigrar a España. Conoce a nuestro equipo.",
  alternates: {
    canonical: "https://legalizanos.com/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] font-medium text-black/50 mb-12 justify-center">
          <Link href="/" className="text-black/50 hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-black truncate">Sobre Nosotros</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tight text-black leading-[1.05] mb-8">
            No somos un despacho tradicional.
          </h1>
          <p className="text-[19px] md:text-[22px] font-medium text-black/60 leading-relaxed max-w-3xl mx-auto">
            Nacimos con un único propósito: <strong className="text-black">eliminar la burocracia, la desinformación y las estafas</strong> que sufren los cubanos al intentar regularizar su vida en España.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white border border-black/5 rounded-[32px] p-8 md:p-12 shadow-sm mb-24">
          <h2 className="text-[24px] font-bold text-black mb-6">Nuestra Historia</h2>
          <div className="flex flex-col gap-6 text-[16px] text-black/70 leading-relaxed font-medium">
            <p>
              LegalizaNos nace como una iniciativa especializada dentro del grupo <strong className="text-black">Gestoría HOL</strong>, un despacho de referencia en España. Al atender a cientos de clientes de todas las nacionalidades, nos dimos cuenta de un patrón doloroso: la comunidad cubana se enfrentaba a obstáculos únicos.
            </p>
            <p>
              Documentos que caducan por falta de citas, procesos consulares que parecen imposibles en La Habana, y lamentablemente, una red de "tramitadores" informales que cobran fortunas sin garantías legales.
            </p>
            <p>
              Decidimos crear una infraestructura dedicada exclusivamente a resolver este problema. Contamos con un equipo legal en España que presenta los expedientes telemáticamente, y un equipo coordinador en La Habana para la legalización de documentos sobre el terreno.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-24">
          <h2 className="text-[2rem] font-bold text-black mb-10 text-center">Nuestros pilares</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAFAFA] border border-black/10 rounded-3xl p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Transparencia Total</h3>
              <p className="text-[15px] font-medium text-black/60 leading-relaxed">
                Sin promesas falsas de "acelerar al Ministerio". Te decimos los plazos reales, las tasas exactas y las probabilidades reales de tu caso.
              </p>
            </div>

            <div className="bg-black border border-black rounded-3xl p-8 flex flex-col items-center text-center shadow-xl md:-translate-y-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Zap className="w-7 h-7 text-[#F5A524]" />
              </div>
              <h3 className="text-[18px] font-bold text-white mb-3">Rapidez Tecnológica</h3>
              <p className="text-[15px] font-medium text-white/70 leading-relaxed">
                Presentación telemática inmediata en el registro de Extranjería y Justicia. Si nos das los documentos hoy, tu expediente se registra hoy.
              </p>
            </div>

            <div className="bg-[#FAFAFA] border border-black/10 rounded-3xl p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <HeartHandshake className="w-7 h-7 text-[#E63946]" />
              </div>
              <h3 className="text-[18px] font-bold text-black mb-3">Acompañamiento Humano</h3>
              <p className="text-[15px] font-medium text-black/60 leading-relaxed">
                Sabemos la ansiedad que genera esperar un papel. Respondemos por WhatsApp con actualizaciones de estado para que nunca te sientas a la deriva.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border border-black/5 rounded-[32px] p-10 md:p-16 text-center shadow-sm">
          <h2 className="text-[2rem] font-bold text-black mb-4">¿Preparado para dar el paso?</h2>
          <p className="text-[17px] text-black/60 font-medium mb-8">
            Deja tu proceso en manos de profesionales respaldados en España y Cuba.
          </p>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center bg-black hover:bg-black/80 text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
          >
            Ver nuestros servicios
          </Link>
        </div>

      </div>
    </main>
  );
}
