export function ConsuladoInfo() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="consulado">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        <header className="mb-12">
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Lo que nadie te dice sobre las citas del <span className="text-black/40">Consulado en La Habana</span>
          </h2>
        </header>

        <div className="prose prose-lg max-w-none text-black/80 prose-headings:text-black prose-strong:text-black">
          <p className="text-[19px] leading-relaxed mb-6">
            El Consulado General de España en La Habana es el cuello de botella de casi todos los visados Cuba-España. Las citas se abren por tandas, se agotan en minutos, y si pierdes la tuya o llevas algo mal, vuelves al final de la cola.
          </p>
          <p className="text-[19px] leading-relaxed mb-10">
            Nuestro equipo en La Habana monitoriza la apertura de citas y gestiona la solicitud en cuanto se abren las plazas. No garantizamos fecha exacta — nadie honesto puede hacerlo — pero sí que tu documentación estará perfecta cuando llegue el momento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#FAFAFA] border-[1.5px] border-black/10 rounded-[2rem] p-8">
              <h3 className="text-[18px] font-bold text-black mb-6">Lo que preparamos para la cita consular:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-[16px] text-black/70">
                  <span className="text-black mt-1">•</span> Formulario de solicitud de visado correctamente cumplimentado
                </li>
                <li className="flex gap-3 text-[16px] text-black/70">
                  <span className="text-black mt-1">•</span> Fotografías con las especificaciones exactas del Consulado
                </li>
                <li className="flex gap-3 text-[16px] text-black/70">
                  <span className="text-black mt-1">•</span> Todos los documentos legalizados y traducidos si es necesario
                </li>
                <li className="flex gap-3 text-[16px] text-black/70">
                  <span className="text-black mt-1">•</span> Comprobantes de medios económicos organizados según lo que piden
                </li>
                <li className="flex gap-3 text-[16px] text-black/70">
                  <span className="text-black mt-1">•</span> Seguro médico que cumpla los requisitos
                </li>
              </ul>
            </div>

            <div className="bg-[#FFF8F0] border-[1.5px] border-[#F5A524]/20 rounded-[2rem] p-8">
              <h3 className="text-[18px] font-bold text-black mb-6">Lo que NO podemos controlar:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-[16px] text-black/70">
                  <span className="text-[#F5A524] mt-1">✗</span> La disponibilidad de citas (depende del Consulado)
                </li>
                <li className="flex gap-3 text-[16px] text-black/70">
                  <span className="text-[#F5A524] mt-1">✗</span> Los tiempos de resolución del visado (15-60 días según tipo)
                </li>
                <li className="flex gap-3 text-[16px] text-black/70">
                  <span className="text-[#F5A524] mt-1">✗</span> Cambios de criterio del Consulado sin aviso previo
                </li>
              </ul>
              <div className="bg-white rounded-xl p-4 border border-[#F5A524]/20">
                <p className="text-[15px] font-bold text-black">
                  Lo que SÍ controlamos: que cuando tengas tu cita, no te falte ni un papel.
                </p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
