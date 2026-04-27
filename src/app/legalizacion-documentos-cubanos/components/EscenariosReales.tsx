import { AlertTriangle } from "lucide-react";

export function EscenariosReales() {
  return (
    <section className="relative py-24 bg-white" id="escenarios">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex w-fit bg-[#FAFAFA] border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">Transparencia Radical</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Seamos honestos: <br className="hidden md:block" />
            <span className="text-black/40">no todo sale perfecto siempre.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Escenario 1 */}
          <div className="bg-[#FAFAFA] border border-black/5 rounded-[32px] p-8 lg:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow">
            <h3 className="text-[19px] md:text-[21px] font-bold text-black tracking-tight leading-snug mb-4">
              "El registro civil no encuentra el documento"
            </h3>
            <p className="text-[16px] text-black/70 font-medium leading-relaxed">
              Pasa más de lo que debería. Los archivos en Cuba se pierden, se deterioran, o están mal digitalizados. Cuando esto ocurre, nuestro equipo en La Habana gestiona la búsqueda ampliada en otros registros o solicita la reconstrucción del acta. Te informamos del retraso y del nuevo plazo estimado. <strong className="text-black">No te cobramos extra por la gestión adicional.</strong>
            </p>
          </div>

          {/* Escenario 2 */}
          <div className="bg-[#FAFAFA] border border-black/5 rounded-[32px] p-8 lg:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow">
            <h3 className="text-[19px] md:text-[21px] font-bold text-black tracking-tight leading-snug mb-4">
              "El MINJUS tarda más de lo normal"
            </h3>
            <p className="text-[16px] text-black/70 font-medium leading-relaxed">
              Cuba es Cuba. Los plazos del MINJUS pueden variar según el volumen de trabajo, problemas técnicos, o simplemente el ritmo de la administración cubana. Si tu documento se retrasa más allá del plazo estimado, <strong className="text-black">te avisamos proactivamente por WhatsApp.</strong> No te enterarás por sorpresa.
            </p>
          </div>

          {/* Escenario 3 */}
          <div className="bg-[#FAFAFA] border border-black/5 rounded-[32px] p-8 lg:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow">
            <h3 className="text-[19px] md:text-[21px] font-bold text-black tracking-tight leading-snug mb-4">
              "Las citas del Consulado se agotan"
            </h3>
            <p className="text-[16px] text-black/70 font-medium leading-relaxed">
              El Consulado de España en La Habana tiene un sistema de citas que se satura constantemente. Nuestro equipo monitoriza la disponibilidad y <strong className="text-black">gestiona las citas en cuanto se abren.</strong> Si hay retrasos por falta de disponibilidad, te informamos y te damos nuevo plazo.
            </p>
          </div>

        </div>

        {/* Cierre */}
        <div className="mt-12 bg-black text-white rounded-[24px] md:rounded-[32px] p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center">
          <AlertTriangle className="w-8 h-8 text-white/50 mb-6" />
          <p className="text-[17px] md:text-[20px] font-medium leading-relaxed text-white/90">
            Te contamos esto porque preferimos que sepas cómo funciona el proceso real — con sus complicaciones — a que te vendamos una fantasía de "todo en 15 días sin problemas". <strong className="text-white">Gestionamos lo difícil para que tú no tengas que hacerlo</strong>, pero no te prometemos que Cuba va a funcionar perfectamente. Lo que sí te prometemos es que no te vamos a dejar a oscuras.
          </p>
        </div>

      </div>
    </section>
  );
}
