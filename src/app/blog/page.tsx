import { Metadata } from "next";
import { Link } from "@heroui/react";
import { ChevronRight, Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | LegalizaNos",
  description: "Blog de actualidad sobre extranjería, nacionalidad y trámites para cubanos en España.",
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        
        <div className="w-20 h-20 bg-black/5 rounded-3xl flex items-center justify-center mb-8">
          <Construction className="w-10 h-10 text-black/40" />
        </div>

        <h1 className="text-[3rem] md:text-[4rem] font-bold tracking-tight text-black leading-tight mb-6">
          Blog en construcción
        </h1>
        
        <p className="text-[18px] md:text-[20px] font-medium text-black/60 leading-relaxed mb-10 max-w-xl mx-auto">
          Estamos preparando artículos muy completos sobre la nueva Ley de Extranjería, consejos para el consulado y guías paso a paso. Vuelve pronto.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-black hover:bg-black/80 text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-lg hover:-translate-y-0.5"
        >
          Volver a la portada
        </Link>
        
      </div>
    </main>
  );
}
