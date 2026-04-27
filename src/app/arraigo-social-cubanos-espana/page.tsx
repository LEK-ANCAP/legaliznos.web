import { Metadata } from "next";
import { HeroArraigo } from "./components/HeroArraigo";
import { ChecklistArraigo } from "./components/ChecklistArraigo";
import { CambiosReglamento } from "./components/CambiosReglamento";
import { DocumentosArraigo } from "./components/DocumentosArraigo";
import { TablaPreciosArraigo } from "./components/TablaPreciosArraigo";
import { DenegacionesArraigo } from "./components/DenegacionesArraigo";
import { FaqArraigo } from "./components/FaqArraigo";
import { CtaArraigo } from "./components/CtaArraigo";

export const metadata: Metadata = {
  title: "Arraigo Social para Cubanos en España 2026 — Requisitos y Tramitación | LegalizaNos",
  description: "Tramitamos tu arraigo social en Madrid, Valencia y toda España. Nuevo reglamento 2026: ahora solo 2 años. Expediente completo, documentos cubanos legalizados, seguimiento WhatsApp.",
  alternates: {
    canonical: "https://legalizanos.com/arraigo-social-cubanos-espana",
  },
  openGraph: {
    title: "Arraigo Social para Cubanos en España 2026",
    description: "Tramitamos tu arraigo social en Madrid, Valencia y toda España. Nuevo reglamento 2026: ahora solo 2 años.",
    type: "website",
    locale: "es_ES",
    url: "https://legalizanos.com/arraigo-social-cubanos-espana",
  },
};

export default function ArraigoSocialPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <HeroArraigo />
      <ChecklistArraigo />
      <CambiosReglamento />
      <DocumentosArraigo />
      <TablaPreciosArraigo />
      <DenegacionesArraigo />
      <FaqArraigo />
      <CtaArraigo />
    </main>
  );
}
