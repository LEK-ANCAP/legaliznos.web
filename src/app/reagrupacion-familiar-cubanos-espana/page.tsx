import { Metadata } from "next";
import { HeroReagrupacion } from "./components/HeroReagrupacion";
import { AQuienTraer } from "./components/AQuienTraer";
import { ProcesoReagrupacion } from "./components/ProcesoReagrupacion";
import { RequisitosEconomicos } from "./components/RequisitosEconomicos";
import { TablaPreciosReagrupacion } from "./components/TablaPreciosReagrupacion";
import { TrampasReagrupacion } from "./components/TrampasReagrupacion";
import { FaqReagrupacion } from "./components/FaqReagrupacion";
import { CtaReagrupacion } from "./components/CtaReagrupacion";

export const metadata: Metadata = {
  title: "Reagrupación Familiar Cuba-España — Reúne a tu Familia | LegalizaNos",
  description: "Gestionamos la reagrupación familiar completa para cubanos. Expediente en España + visado en La Habana + seguimiento. Cónyuge, hijos, padres. Consulta gratuita.",
  alternates: {
    canonical: "https://legalizanos.es/reagrupacion-familiar-cubanos-espana",
  },
  openGraph: {
    title: "Reagrupación Familiar Cuba-España — Reúne a tu Familia",
    description: "Gestionamos la reagrupación familiar completa para cubanos. Expediente en España + visado en La Habana.",
    type: "website",
    locale: "es_ES",
    url: "https://legalizanos.es/reagrupacion-familiar-cubanos-espana",
  },
};

export default function ReagrupacionFamiliarPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <HeroReagrupacion />
      <AQuienTraer />
      <ProcesoReagrupacion />
      <RequisitosEconomicos />
      <TablaPreciosReagrupacion />
      <TrampasReagrupacion />
      <FaqReagrupacion />
      <CtaReagrupacion />
    </main>
  );
}
