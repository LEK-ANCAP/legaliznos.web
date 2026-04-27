import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legalización de Documentos Cubanos en España — MINJUS y Consulado | Legalizanos",
  description: "Obtenemos y legalizamos tus documentos cubanos ante el MINJUS y el Consulado de España en La Habana. Antecedentes penales, nacimiento, matrimonio y más. Desde 250€. 100% online.",
  alternates: {
    canonical: "https://legalizanos.es/legalizacion-documentos-cubanos",
  },
};

export default function LegalizacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
