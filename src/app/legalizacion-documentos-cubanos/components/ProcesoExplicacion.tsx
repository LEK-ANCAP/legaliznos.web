import { Building2, FileCheck, Landmark, Mail } from "lucide-react";

export function ProcesoExplicacion() {
  return (
    <section className="relative py-24 lg:py-32 bg-white" id="proceso">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Texto */}
          <div className="flex flex-col">
            <div className="inline-flex w-fit bg-[#FAFAFA] border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="text-[13px] font-bold text-black tracking-tight uppercase">El Proceso Real</span>
            </div>
            
            <h2 className="text-[2.5rem] md:text-[3.2rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-8">
              Cuba no tiene apostilla. <br />
              <span className="text-black/40">Esto es lo que hay que hacer.</span>
            </h2>

            <div className="space-y-6 text-[17px] md:text-[19px] text-black/70 font-medium leading-relaxed">
              <p>
                Si buscas "apostillar documentos cubanos" en Google, encontrarás mucha confusión. La realidad es simple: <strong className="text-black">Cuba no forma parte del Convenio de La Haya</strong>, así que la apostilla no existe para documentos cubanos. Lo que sí existe es la legalización consular, un proceso en dos pasos.
              </p>
              
              <p>
                Primero, el documento pasa por el <strong className="text-black">MINJUS</strong> — el Ministerio de Justicia de Cuba. Esto certifica que el documento es auténtico y fue emitido por una autoridad competente cubana.
              </p>
              
              <p>
                Después, el documento se presenta en el <strong className="text-black">Consulado de España en La Habana</strong>, donde se legaliza para que tenga validez en territorio español.
              </p>
              
              <p>
                Sin estos dos pasos, tu documento cubano es un papel sin valor legal en España. Extranjería no lo acepta. El Registro Civil no lo acepta. Ninguna administración española lo acepta.
              </p>
              
              <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 mt-8">
                <p className="text-[16px] text-black/80">
                  <strong className="text-black block mb-2 font-bold">¿El problema?</strong>
                  Hacer esto desde España es prácticamente imposible por tu cuenta. Las colas en el MINJUS son kilométricas. Las citas del Consulado se agotan en minutos. Y los registros civiles cubanos son un desastre donde los archivos se pierden y los horarios cambian sin aviso.
                </p>
                <p className="text-[16px] text-black font-semibold mt-4">
                  Por eso existimos. Tenemos equipo en La Habana que hace todo esto por ti mientras tú sigues con tu vida en España.
                </p>
              </div>
            </div>
          </div>

          {/* Diagrama Visual */}
          <div className="bg-[#FAFAFA] border border-black/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
            {/* Elemento de fondo decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold text-black tracking-tight">El viaje de tu documento</h3>
                <p className="text-[15px] text-black/50 font-medium">De Cuba a tu buzón, sin que tengas que viajar.</p>
              </div>

              {/* Steps */}
              <div className="flex flex-col relative mt-4">
                {/* Linea conectora vertical */}
                <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-black/5" />

                {/* Paso 1 */}
                <div className="flex gap-6 relative z-10 mb-8">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-sm relative">
                    <Building2 className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-[13px] font-bold text-black/40 uppercase tracking-wider mb-1">Paso 1</span>
                    <span className="text-[18px] font-bold text-black tracking-tight mb-1">Registro Civil de Cuba</span>
                    <span className="text-[15px] text-black/60 font-medium">Obtención del documento original.</span>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="flex gap-6 relative z-10 mb-8">
                  <div className="w-14 h-14 rounded-full bg-white border-[1.5px] border-black/20 flex items-center justify-center shrink-0 shadow-sm relative">
                    <Landmark className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-[13px] font-bold text-black/40 uppercase tracking-wider mb-1">Paso 2</span>
                    <span className="text-[18px] font-bold text-black tracking-tight mb-1">MINJUS</span>
                    <span className="text-[15px] text-black/60 font-medium">Legalización nacional cubana.</span>
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="flex gap-6 relative z-10 mb-8">
                  <div className="w-14 h-14 rounded-full bg-white border-[1.5px] border-black/20 flex items-center justify-center shrink-0 shadow-sm relative">
                    <FileCheck className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-[13px] font-bold text-black/40 uppercase tracking-wider mb-1">Paso 3</span>
                    <span className="text-[18px] font-bold text-black tracking-tight mb-1">Consulado de España</span>
                    <span className="text-[15px] text-black/60 font-medium">Legalización consular (en La Habana).</span>
                  </div>
                </div>

                {/* Paso 4 */}
                <div className="flex gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.2)] relative">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-[13px] font-bold text-black/40 uppercase tracking-wider mb-1">Paso 4</span>
                    <span className="text-[18px] font-bold text-black tracking-tight mb-1">Tu buzón en España</span>
                    <span className="text-[15px] text-black/60 font-medium">Documento legal y listo para usar.</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
