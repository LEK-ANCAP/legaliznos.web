

import { FloatingContact } from "@/components/FloatingContact";
import { HeroVisados } from "./components/HeroVisados";
import { TiposVisadoAcordeon } from "./components/TiposVisadoAcordeon";
import { ConsuladoInfo } from "./components/ConsuladoInfo";
import { TablaPreciosVisados } from "./components/TablaPreciosVisados";
import { FaqVisados } from "./components/FaqVisados";
import { CtaVisados } from "./components/CtaVisados";

export const metadata = {
  title: "Visados para España desde Cuba — Trabajo, Estudios, Familia | LegalizaNos",
  description: "Gestionamos tu visado para España desde Cuba. Trabajo, estudios, búsqueda de empleo y reunificación familiar. Preparamos documentación y coordinamos con el Consulado en La Habana.",
  alternates: {
    canonical: "https://legalizanos.com/visados-cuba-espana",
  },
};

export default function VisadosCubaEspanaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-black/10">

      
      <div className="pt-24 lg:pt-32">
        <HeroVisados />
        <TiposVisadoAcordeon />
        <ConsuladoInfo />
        <TablaPreciosVisados />
        <FaqVisados />
        <CtaVisados />
      </div>


      <FloatingContact />
    </main>
  );
}
