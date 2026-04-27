import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | LegalizaNos",
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <h1 className="text-[2.5rem] font-bold tracking-tight text-black leading-tight mb-8">
          Aviso Legal
        </h1>
        
        <div className="flex flex-col gap-5 text-[17px] text-black/70 font-medium leading-relaxed [&>h2]:text-[22px] [&>h2]:font-bold [&>h2]:text-black [&>h2]:mt-8 [&>h2]:mb-2 [&>h3]:text-[19px] [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-6 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>p]:m-0 [&>a]:text-black [&>a]:font-bold hover:[&>a]:underline">
          
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa:
          </p>

          <ul>
            <li><strong>Titular:</strong> LegalizaNos</li>
            <li><strong>Email:</strong> info@legalizanos.com</li>
            <li><strong>Web:</strong> https://legalizanos.com</li>
            <li><strong>Actividad:</strong> Asesoría migratoria y gestión de trámites administrativos.</li>
          </ul>

          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena de todas las condiciones incluidas en este Aviso Legal, la Política de Privacidad y la Política de Cookies.
          </p>
          <p>
            LegalizaNos se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web sin obligación de avisar previamente.
          </p>

          <h2>Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, código fuente) son propiedad de LegalizaNos o de sus legítimos propietarios, quedando prohibida su reproducción total o parcial sin autorización expresa.
          </p>

          <h2>Exclusión de garantías y responsabilidad</h2>
          <p>
            LegalizaNos no se hace responsable de los daños o perjuicios que pudieran derivarse del uso de la información publicada en esta web. Los plazos y datos sobre trámites administrativos son orientativos y pueden variar según la legislación vigente y los organismos competentes.
          </p>

          <h2>Legislación aplicable</h2>
          <p>
            Las relaciones establecidas entre el titular de la web y el usuario se regirán por la normativa española vigente.
          </p>

          <p className="text-sm mt-12 text-black/40">
            Última actualización: Abril de 2026.
          </p>
        </div>

      </div>
    </main>
  );
}
