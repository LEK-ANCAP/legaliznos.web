"use client";

import { CheckCircle2, AlertCircle, Zap } from "lucide-react";
import { Tabs, Tab } from "@heroui/react";

const tableConsulado = [
  { doc: "Documentos Registrales", desc: "Certificados de nacimiento, matrimonio, soltería, divorcio, defunción...", priceStd: "200€", priceExp: "250€", timeStd: "1 mes", timeExp: "1-2 semanas" },
  { doc: "Antecedentes Penales", desc: "Certificado de antecedentes penales", priceStd: "200€", priceExp: "250€", timeStd: "1 mes", timeExp: "1-2 semanas" },
  { doc: "Documentos Médicos", desc: "Certificados Médicos, No Inhabilitado, Título de medicina, etc", priceStd: "200€", priceExp: "250€", timeStd: "1 mes", timeExp: "1-2 semanas" },
  { doc: "Documentos Académicos", desc: "Títulos, certificaciones de notas, planes de estudio...", priceStd: "200€", priceExp: "250€", timeStd: "1 mes", timeExp: "1-2 semanas" },
];

const tableCompleta = [
  { doc: "Documentos Registrales", desc: "Certificados de nacimiento, matrimonio, soltería, divorcio, defunción...", priceStd: "250€", priceExp: "350€", timeStd: "30-45 días", timeExp: "1 mes" },
  { doc: "Antecedentes Penales", desc: "Certificado de antecedentes penales", priceStd: "250€", priceExp: "350€", timeStd: "30-45 días", timeExp: "1 mes" },
  { doc: "Documentos Médicos", desc: "Certificados Médicos, No Inhabilitado, Título de medicina, etc", priceStd: "250€", priceExp: "350€", timeStd: "30-45 días", timeExp: "1 mes" },
  { doc: "Documentos Académicos", desc: "Títulos, certificaciones de notas, planes de estudio...", priceStd: "250€", priceExp: "350€", timeStd: "30-45 días", timeExp: "1 mes" },
];

export function TablaPreciosLegalizacion() {
  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="precios">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex w-fit bg-white border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">Transparencia</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Lo que cuesta. <br />
            <span className="text-black/40">Sin asteriscos.</span>
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed">
            Conoce el precio exacto para legalizar tus certificados cubanos en el MINJUS y Consulado de España.
          </p>
        </div>

        <div className="mb-12">
          <Tabs className="w-full" defaultSelectedKey="completo">
            <Tabs.ListContainer>
              <Tabs.List 
                aria-label="Servicios de legalización"
                className="bg-white p-2 border border-black/5 shadow-sm rounded-full mx-auto flex w-fit *:h-12 *:px-8 *:text-[15px] *:font-bold *:data-[selected=true]:text-white *:text-black/60 relative"
              >
                <Tabs.Tab id="completo" className="relative z-10 flex items-center justify-center">
                  MINJUS + Consulado
                  <Tabs.Indicator className="absolute inset-0 bg-black rounded-full shadow-sm z-[-1]" />
                </Tabs.Tab>
                <Tabs.Tab id="consulado" className="relative z-10 flex items-center justify-center">
                  Solo Consulado
                  <Tabs.Indicator className="absolute inset-0 bg-black rounded-full shadow-sm z-[-1]" />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>
            
            <p className="text-center text-[14px] md:text-[15px] text-black/50 font-medium mt-4 mb-2">
              Selecciona qué tipo de servicio necesitas
            </p>

            {/* SERVICIO 1: COMPLETO (MINJUS + Consulado) */}
            <Tabs.Panel id="completo">
              <div className="pt-8">
                <div className="md:bg-white md:border md:border-black/10 md:rounded-3xl md:p-8 md:shadow-[0_8px_30px_rgba(0,0,0,0.03)] mb-6">
                  <div className="mb-6 px-2 md:p-0">
                    <p className="text-[16px] md:text-[18px] text-black/80 font-medium leading-relaxed">
                      Gestionamos todo: obtención del documento en Cuba, legalización en el MINJUS, y legalización en el Consulado. <strong className="text-black">Tú no haces nada.</strong>
                    </p>
                  </div>
                  
                  {/* Vista Móvil (Cards) */}
                  <div className="md:hidden flex flex-col gap-4 mt-6">
                    {tableCompleta.map((row, idx) => (
                      <div key={idx} className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
                        <div className="mb-4">
                          <span className="block font-bold text-[16px] text-black mb-1">{row.doc}</span>
                          <span className="block text-[14px] text-black/60 font-medium leading-snug">{row.desc}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="bg-[#FAFAFA] rounded-xl p-4 border border-black/5 flex items-center justify-between">
                            <div>
                              <span className="block text-[12px] font-bold text-black/40 uppercase tracking-wider mb-0.5">Estándar</span>
                              <span className="block text-[13px] font-medium text-black/50">{row.timeStd}</span>
                            </div>
                            <span className="block font-bold text-[18px] text-black">{row.priceStd}</span>
                          </div>
                          <div className="bg-black rounded-xl p-4 border border-black flex items-center justify-between relative overflow-hidden shadow-md">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F5A524]/20 to-transparent pointer-events-none" />
                            <div className="relative z-10">
                              <span className="flex items-center gap-1.5 text-[12px] font-bold text-[#F5A524] uppercase tracking-wider mb-0.5">
                                <Zap className="w-3.5 h-3.5 fill-current" /> Exprés
                              </span>
                              <span className="block text-[13px] font-medium text-white/70">{row.timeExp}</span>
                            </div>
                            <span className="block font-bold text-[18px] text-white relative z-10">{row.priceExp}</span>
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
                          <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-black/50 uppercase tracking-wider w-[50%]">Categoría de documento</th>
                          <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-black/50 uppercase tracking-wider">Estándar</th>
                          <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-[#F5A524] uppercase tracking-wider">
                            <div className="flex items-center gap-1"><Zap className="w-4 h-4 fill-current" /> Exprés</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableCompleta.map((row, idx) => (
                          <tr key={idx} className="border-b border-black/5 last:border-0 hover:bg-[#FAFAFA] transition-colors">
                            <td className="py-5 px-4 align-top">
                              <span className="block font-bold text-[16px] text-black mb-1">{row.doc}</span>
                              <span className="block text-[14px] text-black/60 font-medium leading-snug">{row.desc}</span>
                            </td>
                            <td className="py-5 px-4 align-top">
                              <span className="block font-bold text-[15px] text-black mb-1">{row.priceStd}</span>
                              <span className="block text-[14px] font-medium text-black/50">{row.timeStd}</span>
                            </td>
                            <td className="py-5 px-4 align-top">
                              <span className="block font-bold text-[15px] text-black mb-1">{row.priceExp}</span>
                              <span className="block text-[14px] font-medium text-black/50">{row.timeExp}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-black/5 flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                      <p className="text-[14px] md:text-[15px] font-medium text-black/70">
                        <strong className="text-black">Incluye:</strong> obtención del documento en registro civil/organismo cubano + legalización MINJUS + legalización Consulado + envío certificado a domicilio.
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-2xl p-4 px-5">
                      <p className="text-[13px] font-medium text-black/60">
                        <strong className="text-black">Nota para académicos:</strong> los documentos académicos requieren un paso previo de legalización por el Ministerio de Educación Superior (MES) si son universitarios, o por el Ministerio de Educación (MINED) si son de enseñanza media. Está incluido en el precio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel id="consulado">
              <div className="pt-8">
                <div className="md:bg-white md:border md:border-black/10 md:rounded-3xl md:p-8 md:shadow-[0_8px_30px_rgba(0,0,0,0.03)] mb-6">
                  <div className="mb-6 px-2 md:p-0">
                    <p className="text-[16px] md:text-[18px] text-black/80 font-medium leading-relaxed">
                      Tu documento ya pasó por el MINJUS. Solo falta la legalización en el Consulado de España en La Habana.
                    </p>
                  </div>
                  
                  {/* Vista Móvil (Cards) */}
                  <div className="md:hidden flex flex-col gap-4 mt-6">
                    {tableConsulado.map((row, idx) => (
                      <div key={idx} className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
                        <div className="mb-4">
                          <span className="block font-bold text-[16px] text-black mb-1">{row.doc}</span>
                          <span className="block text-[14px] text-black/60 font-medium leading-snug">{row.desc}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="bg-[#FAFAFA] rounded-xl p-4 border border-black/5 flex items-center justify-between">
                            <div>
                              <span className="block text-[12px] font-bold text-black/40 uppercase tracking-wider mb-0.5">Estándar</span>
                              <span className="block text-[13px] font-medium text-black/50">{row.timeStd}</span>
                            </div>
                            <span className="block font-bold text-[18px] text-black">{row.priceStd}</span>
                          </div>
                          <div className="bg-black rounded-xl p-4 border border-black flex items-center justify-between relative overflow-hidden shadow-md">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F5A524]/20 to-transparent pointer-events-none" />
                            <div className="relative z-10">
                              <span className="flex items-center gap-1.5 text-[12px] font-bold text-[#F5A524] uppercase tracking-wider mb-0.5">
                                <Zap className="w-3.5 h-3.5 fill-current" /> Exprés
                              </span>
                              <span className="block text-[13px] font-medium text-white/70">{row.timeExp}</span>
                            </div>
                            <span className="block font-bold text-[18px] text-white relative z-10">{row.priceExp}</span>
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
                          <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-black/50 uppercase tracking-wider w-[50%]">Categoría de documento</th>
                          <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-black/50 uppercase tracking-wider">Estándar</th>
                          <th className="pb-4 pt-2 px-4 text-[13px] font-bold text-[#F5A524] uppercase tracking-wider">
                            <div className="flex items-center gap-1"><Zap className="w-4 h-4 fill-current" /> Exprés</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableConsulado.map((row, idx) => (
                          <tr key={idx} className="border-b border-black/5 last:border-0 hover:bg-[#FAFAFA] transition-colors">
                            <td className="py-5 px-4 align-top">
                              <span className="block font-bold text-[16px] text-black mb-1">{row.doc}</span>
                              <span className="block text-[14px] text-black/60 font-medium leading-snug">{row.desc}</span>
                            </td>
                            <td className="py-5 px-4 align-top">
                              <span className="block font-bold text-[15px] text-black mb-1">{row.priceStd}</span>
                              <span className="block text-[14px] font-medium text-black/50">{row.timeStd}</span>
                            </td>
                            <td className="py-5 px-4 align-top">
                              <span className="block font-bold text-[15px] text-black mb-1">{row.priceExp}</span>
                              <span className="block text-[14px] font-medium text-black/50">{row.timeExp}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 bg-[#FAFAFA] rounded-2xl p-5 border border-black/5 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                    <p className="text-[14px] md:text-[15px] font-medium text-black/70">
                      <strong className="text-black">Incluye:</strong> gestión de cita consular + legalización en Consulado de España en La Habana + envío certificado a tu domicilio.
                    </p>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

          </Tabs>
        </div>

        {/* Descuentos */}
        <div className="bg-white border border-black/5 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] mb-12">
          <h3 className="text-[18px] font-bold text-black tracking-tight mb-6">Descuentos aplicables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-xl border border-black/5">
              <span className="text-[15px] font-bold text-black/80">3 o más documentos en la misma solicitud</span>
              <span className="text-[15px] font-black text-black bg-black/5 px-3 py-1 rounded-lg">-10% sobre el total</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-xl border border-black/5">
              <span className="text-[15px] font-bold text-black/80">Descuento familiar (misma familia, misma gestión)</span>
              <span className="text-[15px] font-black text-black bg-black/5 px-3 py-1 rounded-lg">Consultar precio cerrado</span>
            </div>
          </div>
        </div>

        {/* Disclaimer y Pago */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center mt-8 md:mt-12">
          <div className="flex-1 w-full">
            <div className="bg-black/5 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start gap-3 md:gap-4">
              <AlertCircle className="w-5 h-5 text-black shrink-0 sm:mt-0.5" />
              <div className="flex flex-col gap-2">
                <p className="text-[14px] md:text-[15px] text-black font-bold mb-1">Lo que NO incluyen los precios (sin sorpresas)</p>
                <ul className="text-[13px] md:text-[14px] text-black/70 font-medium leading-relaxed space-y-1.5">
                  <li>• <strong className="text-black">Subsanación de errores registrales</strong> — si tu certificado original tiene errores en nombres o fechas y requiere rectificación, este trámite tiene un coste aparte.</li>
                  <li>• Traducción jurada si fuera necesaria para algún trámite específico.</li>
                  <li>• Envío internacional fuera de España (disponible con suplemento).</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-px md:h-32 bg-black/10 shrink-0" />
          <div className="shrink-0 md:max-w-[280px]">
            <p className="text-[15px] text-black/80 font-bold mb-2">Forma de pago</p>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed mb-6">
              50% al empezar. 50% cuando tu documento está listo para enviar. Aceptamos transferencia, Bizum, tarjeta y efectivo (en Cuba, Valencia o Madrid).
            </p>
            <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
              <p className="text-[13px] font-bold text-black mb-1">¿No sabes qué servicio elegir?</p>
              <p className="text-[13px] text-black/60 font-medium leading-snug">
                Escríbenos con una foto del documento y te decimos qué le falta.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
