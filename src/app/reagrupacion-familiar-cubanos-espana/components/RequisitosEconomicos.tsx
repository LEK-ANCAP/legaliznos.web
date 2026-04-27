"use client";

import { Calculator, FileSpreadsheet, Info } from "lucide-react";

export function RequisitosEconomicos() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            Los números que pide Extranjería.
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto">
            Necesitan ver que puedes mantener a tu familiar sin ayudas públicas. La referencia legal es el IPREM. Sin rodeos, estos son los cálculos orientativos.
          </p>
        </div>

        <div className="bg-[#FAFAFA] border border-black/10 rounded-[32px] p-6 md:p-10 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white p-3 rounded-2xl border border-black/5">
              <Calculator className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-black">Orientación económica (IPREM)</h3>
          </div>

          <div className="flex flex-col gap-4">
            
            <div className="bg-white border border-black/5 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-black">Tú solo (Reagrupante)</span>
                <span className="text-[14px] text-black/50 font-medium">Lo mínimo para mantenerte tú.</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-black/5 text-black px-3 py-1 rounded-lg text-[14px] font-bold">100% IPREM</span>
                <span className="text-[18px] font-bold text-black min-w-[100px] text-right">~600€/mes</span>
              </div>
            </div>

            <div className="bg-white border border-[#25D366]/30 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(37,211,102,0.05)] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#25D366]" />
              <div className="flex flex-col pl-3">
                <span className="text-[16px] font-bold text-black">Traer a 1 familiar</span>
                <span className="text-[14px] text-black/50 font-medium">Ejemplo: tu cónyuge.</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-[#25D366]/10 text-[#25D366] px-3 py-1 rounded-lg text-[14px] font-bold">150% IPREM</span>
                <span className="text-[18px] font-bold text-black min-w-[100px] text-right">~900€/mes</span>
              </div>
            </div>

            <div className="bg-white border border-black/5 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-black">Traer a 2 familiares</span>
                <span className="text-[14px] text-black/50 font-medium">Ejemplo: cónyuge + 1 hijo.</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-black/5 text-black px-3 py-1 rounded-lg text-[14px] font-bold">200% IPREM</span>
                <span className="text-[18px] font-bold text-black min-w-[100px] text-right">~1.200€/mes</span>
              </div>
            </div>

            <div className="mt-2 text-center">
              <p className="text-[14px] text-black/50 font-medium">Cada familiar adicional suma un <strong className="text-black/70">+50% del IPREM</strong>.</p>
            </div>
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 rounded-3xl p-6 flex items-start gap-4 shadow-sm">
            <FileSpreadsheet className="w-6 h-6 text-black/40 shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] font-bold text-black mb-2">¿Cómo se demuestra?</p>
              <p className="text-[14px] text-black/70 font-medium leading-relaxed">
                Extranjería revisará tus nóminas de los últimos 6 meses, tu última declaración de IRPF, tu vida laboral actualizada y que tengas un contrato de trabajo vigente.
              </p>
            </div>
          </div>
          
          <div className="bg-[#FFF8F0] border border-[#F5A524]/20 rounded-3xl p-6 flex items-start gap-4">
            <Info className="w-6 h-6 text-[#F5A524] shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] font-bold text-black mb-2">Importante</p>
              <p className="text-[14px] text-black/70 font-medium leading-relaxed">
                Si tu cónyuge ya está trabajando legalmente en España, sus ingresos se suman a los tuyos. Si tienes ahorros demostrables en el banco, también ayudan al cómputo global. Te calculamos las cifras exactas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
