import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Check, X, MessageCircle, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Precios de Legalización de Documentos Cubanos y Trámites Migratorios | LegalizaNos",
  description: "Precios claros y cerrados para legalización de documentos cubanos, arraigo social, nacionalidad española, reagrupación familiar y visados. Sin sorpresas. Pago en 2 cuotas.",
  alternates: {
    canonical: "https://legalizanos.com/precios",
  },
};

export default function PreciosPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-24 lg:pt-32 pb-24 text-foreground selection:bg-black/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] font-semibold text-black/40 mb-12">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black/80 truncate">Precios</span>
        </nav>

        {/* 1. INTRO */}
        <div className="text-center mb-20">
          <h1 className="text-[3rem] md:text-[4rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
            Precios — sin asteriscos, sin letra pequeña
          </h1>
          <p className="text-[19px] md:text-[22px] font-medium text-black/60 leading-relaxed max-w-3xl mx-auto">
            Todos los precios son cerrados. Te decimos el total antes de empezar. Si algo cambia durante el proceso, te avisamos antes de gastar un euro. <strong className="text-black">Pago en 2 cuotas sin intereses.</strong>
          </p>
        </div>

        {/* 2. LEGALIZACIÓN CUBANOS */}
        <section className="mb-24">
          <h2 className="text-[2rem] font-bold text-black mb-8 text-center md:text-left">Legalización de documentos cubanos</h2>
          
          <div className="flex flex-col gap-12">
            {/* Opcion A */}
            <div className="bg-white border border-black/10 rounded-[32px] overflow-hidden shadow-sm">
              <div className="bg-black text-white p-6 md:p-8">
                <h3 className="text-[22px] font-bold mb-2">Legalización Completa (MINJUS + Consulado)</h3>
                <p className="text-[15px] font-medium text-white/70">
                  Obtenemos el documento en Cuba, lo legalizamos en MINJUS y en el Consulado de España en La Habana, y te lo enviamos a casa.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-black/10 bg-[#FAFAFA]">
                      <th className="py-5 px-6 text-[13px] font-bold text-black/60 uppercase tracking-wide">Categoría</th>
                      <th className="py-5 px-6 text-[13px] font-bold text-black/60 uppercase tracking-wide">Documentos incluidos</th>
                      <th className="py-5 px-6 text-[13px] font-bold text-black/60 uppercase tracking-wide">Estándar</th>
                      <th className="py-5 px-6 text-[13px] font-bold text-black/60 uppercase tracking-wide text-[#E63946]">Exprés</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] text-black/80 font-medium">
                    <tr className="hover:bg-black/5 transition-colors">
                      <td className="py-5 px-6 font-bold text-black">Cualquier tipo</td>
                      <td className="py-5 px-6 text-[14px] text-black/60">Registrales, penales, académicos, médicos...</td>
                      <td className="py-5 px-6 font-bold">250€<br/><span className="text-[12px] font-medium text-black/40">30-45 días</span></td>
                      <td className="py-5 px-6 font-bold text-[#E63946]">350€<br/><span className="text-[12px] font-medium text-black/40">1 mes</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Opcion B */}
            <div className="bg-white border border-black/10 rounded-[32px] overflow-hidden shadow-sm">
              <div className="bg-[#FAFAFA] border-b border-black/10 p-6 md:p-8">
                <h3 className="text-[20px] font-bold text-black mb-2">Solo Consulado de España</h3>
                <p className="text-[15px] font-medium text-black/60">
                  Tu documento ya pasó por el MINJUS. Solo falta la legalización en el Consulado de España en La Habana.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-black/10">
                      <th className="py-4 px-6 text-[13px] font-bold text-black/40 uppercase tracking-wide">Categoría</th>
                      <th className="py-4 px-6 text-[13px] font-bold text-black/40 uppercase tracking-wide">Estándar</th>
                      <th className="py-4 px-6 text-[13px] font-bold text-black/40 uppercase tracking-wide text-[#E63946]">Exprés</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] text-black/80 font-medium">
                    <tr className="hover:bg-black/5 transition-colors">
                      <td className="py-4 px-6 font-bold text-black">Cualquier tipo</td>
                      <td className="py-4 px-6 font-bold">200€<br/><span className="text-[12px] font-medium text-black/40">1 mes</span></td>
                      <td className="py-4 px-6 font-bold text-[#E63946]">250€<br/><span className="text-[12px] font-medium text-black/40">1-2 semanas</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Descuentos */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-6 text-center">
              <p className="text-[15px] font-bold text-[#1DAA51]">
                🎉 Descuentos: 3+ documentos (-10%) | Casos familiares (Precio paquete especial)
              </p>
            </div>
          </div>
        </section>

        {/* 3. EXTRANJERÍA */}
        <section className="mb-24">
          <h2 className="text-[2rem] font-bold text-black mb-8 text-center md:text-left">Extranjería, nacionalidad y otros trámites</h2>
          <div className="bg-white border border-black/10 rounded-[32px] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-black/10 bg-[#FAFAFA]">
                    <th className="py-5 px-6 text-[13px] font-bold text-black/60 uppercase tracking-wide">Servicio</th>
                    <th className="py-5 px-6 text-[13px] font-bold text-black/60 uppercase tracking-wide">Precio</th>
                    <th className="py-5 px-6 text-[13px] font-bold text-black/60 uppercase tracking-wide">Plazo medio</th>
                    <th className="py-5 px-6 text-[13px] font-bold text-black/60 uppercase tracking-wide">Incluye</th>
                  </tr>
                </thead>
                <tbody className="text-[15px] text-black/80 font-medium">
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Arraigo social — expediente completo</td>
                    <td className="py-5 px-6 font-bold">Desde 400€</td>
                    <td className="py-5 px-6 text-black/60">3-6 meses</td>
                    <td className="py-5 px-6 text-[14px]">Evaluación + documentación + presentación + seguimiento</td>
                  </tr>
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Arraigo social + legalización docs</td>
                    <td className="py-5 px-6 font-bold">Desde 600€</td>
                    <td className="py-5 px-6 text-black/60">3-6 meses</td>
                    <td className="py-5 px-6 text-[14px]">Todo anterior + antecedentes penales legalizados</td>
                  </tr>
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Nacionalidad española</td>
                    <td className="py-5 px-6 font-bold">Desde 500€</td>
                    <td className="py-5 px-6 text-black/60">12-18 meses</td>
                    <td className="py-5 px-6 text-[14px]">Expediente completo + docs cubanos + seguimiento hasta jura</td>
                  </tr>
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Reagrupación familiar (1 familiar)</td>
                    <td className="py-5 px-6 font-bold">Desde 400€</td>
                    <td className="py-5 px-6 text-black/60">4-10 meses</td>
                    <td className="py-5 px-6 text-[14px]">Expediente España + coordinación Cuba + visado</td>
                  </tr>
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Familiar adicional (reagrupación)</td>
                    <td className="py-5 px-6 font-bold">+150€</td>
                    <td className="py-5 px-6 text-black/60">—</td>
                    <td className="py-5 px-6 text-[14px]">Documentación por cada familiar extra</td>
                  </tr>
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Visados desde Cuba</td>
                    <td className="py-5 px-6 font-bold text-[#E63946]">Consultar</td>
                    <td className="py-5 px-6 text-black/60">Variable</td>
                    <td className="py-5 px-6 text-[14px]">Cada caso es diferente — evaluación gratuita</td>
                  </tr>
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Documentos Españoles para Cuba</td>
                    <td className="py-5 px-6 font-bold">Desde 95€</td>
                    <td className="py-5 px-6 text-black/60">2-4 semanas</td>
                    <td className="py-5 px-6 text-[14px]">Mº Justicia + MAEC + Consulado Cuba</td>
                  </tr>
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Tramitación Consular en Cuba</td>
                    <td className="py-5 px-6 font-bold text-[#E63946]">Consultar</td>
                    <td className="py-5 px-6 text-black/60">Variable</td>
                    <td className="py-5 px-6 text-[14px]">Gestiones presenciales en Cuba a medida</td>
                  </tr>
                  <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Legalización Exprés</td>
                    <td className="py-5 px-6 font-bold">Desde 350€</td>
                    <td className="py-5 px-6 text-black/60">~1 mes</td>
                    <td className="py-5 px-6 text-[14px]">Gestión prioritaria MINJUS + Consulado</td>
                  </tr>
                  <tr className="hover:bg-black/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-black">Regularización extraordinaria 2026</td>
                    <td className="py-5 px-6 font-bold">Desde 350€</td>
                    <td className="py-5 px-6 text-black/60">3 meses máx</td>
                    <td className="py-5 px-6 text-[14px]">Documentación + presentación + seguimiento</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>

      {/* 4. QUÉ INCLUYEN */}
      <section className="bg-white py-24 border-y border-black/5 mb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2rem] font-bold text-black mb-12 text-center">Para que no haya dudas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* INCLUYE */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#25D366]" />
                </div>
                <h3 className="text-[20px] font-bold text-black">Lo que INCLUYEN nuestros precios</h3>
              </div>
              <ul className="flex flex-col gap-4 text-[16px] text-black/70 font-medium">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Nuestra gestión completa (preparación, presentación, seguimiento)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Comunicación por WhatsApp durante todo el proceso</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Envío certificado del documento a tu domicilio en España</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Resolución de requerimientos si los hay (sin coste extra)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Asesoramiento sobre pasos siguientes</span>
                </li>
              </ul>
            </div>

            {/* NO INCLUYE */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#E63946]/10 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-[#E63946]" />
                </div>
                <h3 className="text-[20px] font-bold text-black">Lo que NO incluyen <span className="text-[15px] font-medium text-black/40 block mt-1">(Te lo detallamos ANTES de empezar)</span></h3>
              </div>
              <ul className="flex flex-col gap-4 text-[16px] text-black/70 font-medium">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                  <span>Tasas oficiales de organismos públicos (MINJUS, Consulado, Extranjería)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                  <span>Traducción jurada si fuera necesaria</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                  <span>Envío internacional fuera de España (disponible con suplemento)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                  <span>Tasas de exámenes (CCSE, DELE) para nacionalidad</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 bg-black/5 rounded-3xl p-6 text-center border border-black/10">
            <p className="text-[16px] font-bold text-black/80">
              Te damos el desglose completo — nuestro precio + tasas oficiales — antes de que decidas. El total que te digamos es el total que pagas.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FORMA DE PAGO */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24 text-center">
        <h2 className="text-[2rem] font-bold text-black mb-6">Cómo se paga</h2>
        
        <div className="bg-black text-white rounded-[32px] p-10 md:p-16 shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 relative z-10">
            <div className="text-center">
              <span className="text-[4rem] font-bold leading-none text-[#25D366]">50%</span>
              <p className="text-[18px] font-bold mt-2">Al empezar</p>
            </div>
            <div className="w-12 h-1 bg-white/20 rounded-full hidden md:block" />
            <div className="text-center">
              <span className="text-[4rem] font-bold leading-none text-white">50%</span>
              <p className="text-[18px] font-bold mt-2">Al terminar</p>
            </div>
          </div>

          <p className="text-[17px] text-white/70 font-medium max-w-2xl mx-auto relative z-10">
            No pagas el segundo tramo hasta que tu documento esté legalizado, tu expediente presentado, o tu trámite resuelto. Si por algún motivo no podemos completar el servicio, te devolvemos la primera cuota.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 text-[15px] font-bold text-black/60">
          <span className="flex items-center gap-2"><CreditCard className="w-5 h-5"/> Transferencia</span>
          <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
          <span className="flex items-center gap-2"><CreditCard className="w-5 h-5"/> Bizum</span>
          <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
          <span className="flex items-center gap-2"><CreditCard className="w-5 h-5"/> Tarjeta</span>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-[2rem] font-bold text-black mb-10 text-center">Preguntas frecuentes sobre precios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <h3 className="text-[18px] font-bold text-black mb-3">¿Los precios pueden cambiar una vez contratado?</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              No. El precio que te damos es cerrado. Si durante el proceso aparece algo inesperado que tiene coste adicional (raro, pero puede pasar), te llamamos ANTES de gastar un euro y tú decides si seguir.
            </p>
          </div>
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <h3 className="text-[18px] font-bold text-black mb-3">¿Hay costes ocultos?</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              No. Las únicas cantidades adicionales son las tasas oficiales de organismos públicos (gobierno cubano, Extranjería española), que son fijas y te las detallamos antes de empezar.
            </p>
          </div>
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <h3 className="text-[18px] font-bold text-black mb-3">¿Qué pasa si no podéis completar el servicio?</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              Te devolvemos la primera cuota. Si el problema es del lado de Cuba (registro civil no encuentra el documento, MINJUS rechaza) y podemos intentar una vía alternativa, te lo proponemos. Si no hay solución, te devolvemos el dinero.
            </p>
          </div>
          <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
            <h3 className="text-[18px] font-bold text-black mb-3">¿Hacéis descuento si necesito varios documentos?</h3>
            <p className="text-[15px] text-black/60 font-medium leading-relaxed">
              Sí. A partir de 3 documentos, -10% sobre el total. Si es una gestión familiar (varios miembros, misma familia), te hacemos precio paquete. Escríbenos y te damos cifra exacta.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-black py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-[2.5rem] font-bold text-white mb-6">¿No sabes cuánto te costaría tu caso?</h2>
          <p className="text-[18px] text-white/70 font-medium mb-10 max-w-2xl mx-auto">
            Escríbenos por WhatsApp con tu situación. Te damos un presupuesto cerrado en menos de 24 horas. Sin compromiso, sin coste, sin venderte nada.
          </p>
          <a 
            href="https://wa.me/34000000000?text=Hola%2C%20quisiera%20pedir%20presupuesto"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir presupuesto gratis
          </a>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Los precios pueden cambiar una vez contratado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. El precio que te damos es cerrado. Si durante el proceso aparece algo inesperado que tiene coste adicional (raro, pero puede pasar), te llamamos ANTES de gastar un euro y tú decides si seguir."
                }
              },
              {
                "@type": "Question",
                "name": "¿Hay costes ocultos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Las únicas cantidades adicionales son las tasas oficiales de organismos públicos (gobierno cubano, Extranjería española), que son fijas y te las detallamos antes de empezar."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué pasa si no podéis completar el servicio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Te devolvemos la primera cuota. Si el problema es del lado de Cuba y podemos intentar una vía alternativa, te lo proponemos. Si no hay solución, te devolvemos el dinero."
                }
              },
              {
                "@type": "Question",
                "name": "¿Hacéis descuento si necesito varios documentos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. A partir de 3 documentos, -10% sobre el total. Si es una gestión familiar (varios miembros, misma familia), te hacemos precio paquete. Escríbenos y te damos cifra exacta."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
