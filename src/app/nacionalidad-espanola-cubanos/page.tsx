import { Metadata } from "next";
import { HeroNacionalidad } from "./components/HeroNacionalidad";
import { ViasNacionalidad } from "./components/ViasNacionalidad";
import { DocumentosNacionalidad } from "./components/DocumentosNacionalidad";
import { TablaPreciosNacionalidad } from "./components/TablaPreciosNacionalidad";
import { PlazosNacionalidad } from "./components/PlazosNacionalidad";
import { DobleNacionalidad } from "./components/DobleNacionalidad";
import { FaqNacionalidad } from "./components/FaqNacionalidad";
import { CtaNacionalidad } from "./components/CtaNacionalidad";

export const metadata: Metadata = {
  title: "Nacionalidad Española para Cubanos por Residencia | LegalizaNos",
  description: "Tramitamos tu nacionalidad española por residencia. Expediente completo, documentos cubanos legalizados, CCSE, seguimiento hasta la jura. Para cubanos en Madrid, Valencia y toda España.",
  alternates: {
    canonical: "https://legalizanos.com/nacionalidad-espanola-cubanos",
  },
  openGraph: {
    title: "Nacionalidad Española para Cubanos por Residencia",
    description: "Tramitamos tu nacionalidad española por residencia. Expediente completo, documentos cubanos legalizados, seguimiento hasta la jura.",
    type: "website",
    locale: "es_ES",
    url: "https://legalizanos.com/nacionalidad-espanola-cubanos",
  },
};

export default function NacionalidadCubanosPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <HeroNacionalidad />
      <ViasNacionalidad />
      <DocumentosNacionalidad />
      <TablaPreciosNacionalidad />
      <PlazosNacionalidad />
      <DobleNacionalidad />
      <FaqNacionalidad />
      <CtaNacionalidad />
    </main>
  );
}
