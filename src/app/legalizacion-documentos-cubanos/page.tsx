import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { HeroLegalizacion } from "./components/HeroLegalizacion";
import { SituacionesAcordeon } from "./components/SituacionesAcordeon";
import { ProcesoExplicacion } from "./components/ProcesoExplicacion";
import { TablaPreciosLegalizacion } from "./components/TablaPreciosLegalizacion";
import { EscenariosReales } from "./components/EscenariosReales";
import { LegalizacionInversa } from "./components/LegalizacionInversa";
import { FaqLegalizacion } from "./components/FaqLegalizacion";
import { ResenasEspana } from "./components/ResenasEspana";
import { CtaYRelacionados } from "./components/CtaYRelacionados";

export default function LegalizacionDocumentosCubanosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-black/10">
      <Navbar />
      
      <div className="pt-24 lg:pt-32">
        <HeroLegalizacion />
        <SituacionesAcordeon />
        <ProcesoExplicacion />
        <TablaPreciosLegalizacion />
        <EscenariosReales />
        <LegalizacionInversa />
        <FaqLegalizacion />
        <ResenasEspana />
        <CtaYRelacionados />
      </div>

      <Footer />
      <FloatingContact />
    </main>
  );
}
