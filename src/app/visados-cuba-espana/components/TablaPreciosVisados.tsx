import { CheckCircle2, Info } from "lucide-react";

const tablePrecios = [
  {
    servicio: "Gestión visado de trabajo",
    precio: "Desde [X]€",
    incluye: "Preparación documentación + legalización docs cubanos + coordinación Consulado"
  },
  {
    servicio: "Gestión visado de estudios",
    precio: "Desde [X]€",
    incluye: "Preparación documentación + orientación admisión + legalización + coordinación"
  },
  {
    servicio: "Gestión visado búsqueda de empleo",
    precio: "Desde [X]€",
    incluye: "Evaluación de elegibilidad + documentación + legalización"
  },
  {
    servicio: "Gestión visado reunificación (parte Cuba)",
    precio: "Desde [X]€",
    incluye: "Documentos del familiar + coordinación cita consular"
  }
];

export function TablaPreciosVisados() {
  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="precios">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Cuánto cuesta <span className="text-black/40">gestionar tu visado</span>
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl">
            Transparencia total desde el principio. Evaluación inicial gratuita, y si vemos que tu caso no es viable, te lo decimos sin cobrar nada.
          </p>
        </div>

        <div className="pt-8">
          <div className="md:bg-white md:border md:border-black/10 md:rounded-3xl md:p-8 md:shadow-[0_8px_30px_rgba(0,0,0,0.03)] mb-6">
            
            {/* Vista Móvil (Cards) */}
            <div className="md:hidden flex flex-col gap-4">
              {tablePrecios.map((row, idx) => (
                <div key={idx} className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
                  <div className="mb-4">
                    <span className="block font-bold text-[18px] text-black mb-1">{row.servicio}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#FAFAFA] rounded-xl p-4 border border-black/5 flex items-center justify-between">
                      <span className="block text-[13px] font-bold text-black/40 uppercase tracking-wider">Precio base</span>
                      <span className="block font-bold text-[20px] text-black">{row.precio}</span>
                    </div>
                    <div className="bg-[#FFF8F0] rounded-xl p-4 border border-[#F5A524]/20">
                      <span className="block text-[12px] font-bold text-[#F5A524] uppercase tracking-wider mb-2">Qué incluye</span>
                      <span className="block text-[14px] font-medium text-black/70 leading-relaxed">{row.incluye}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vista Escritorio (Tabla) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-black/50 uppercase tracking-wider w-[35%]">Servicio</th>
                    <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-black/50 uppercase tracking-wider w-[20%]">Precio</th>
                    <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-black/50 uppercase tracking-wider w-[45%]">Qué incluye</th>
                  </tr>
                </thead>
                <tbody>
                  {tablePrecios.map((row, idx) => (
                    <tr key={idx} className="border-b border-black/5 last:border-0 hover:bg-[#FAFAFA] transition-colors">
                      <td className="py-5 px-4 align-top">
                        <span className="block font-bold text-[16px] text-black">{row.servicio}</span>
                      </td>
                      <td className="py-5 px-4 align-top">
                        <span className="block font-bold text-[18px] text-black">{row.precio}</span>
                      </td>
                      <td className="py-5 px-4 align-top">
                        <span className="block text-[15px] font-medium text-black/70 leading-relaxed">{row.incluye}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-black/5 flex gap-3">
                <Info className="w-5 h-5 text-black/40 shrink-0 mt-0.5" />
                <p className="text-[14px] md:text-[15px] font-medium text-black/70">
                  <strong className="text-black">Nota:</strong> las tasas consulares del Consulado de España se pagan aparte directamente al Consulado. Te indicamos el importe exacto antes de empezar.
                </p>
              </div>
              <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-black/5 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <p className="text-[14px] md:text-[15px] font-medium text-black/70">
                  <strong className="text-black">Condiciones de pago:</strong> 50% al empezar, 50% cuando la documentación esté lista para la cita.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
