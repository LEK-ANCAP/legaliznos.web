import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | LegalizaNos",
  description: "Política de Cookies del sitio web LegalizaNos.",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <h1 className="text-[2.5rem] font-bold tracking-tight text-black leading-tight mb-8">
          Política de Cookies
        </h1>
        
        <div className="flex flex-col gap-5 text-[17px] text-black/70 font-medium leading-relaxed [&>h2]:text-[22px] [&>h2]:font-bold [&>h2]:text-black [&>h2]:mt-8 [&>h2]:mb-2 [&>h3]:text-[19px] [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-6 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>p]:m-0 [&>a]:text-black [&>a]:font-bold hover:[&>a]:underline">
          
          <p>
            En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), <strong className="text-black">LegalizaNos</strong> te informa sobre su política de recogida y tratamiento de cookies.
          </p>

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños ficheros de texto que los sitios web que visitas almacenan en tu dispositivo (ordenador, smartphone, tablet) para mejorar tu experiencia de navegación, recordar tus preferencias y permitir que las páginas funcionen correctamente. Las cookies no contienen información personal sensible.
          </p>

          <h2>2. Tipos de cookies que utiliza este sitio web</h2>
          <p>
            Esta web utiliza cookies de terceros para poder ofrecerte una mejor experiencia y recabar datos estadísticos sobre el uso de la web.
          </p>
          
          <h3>Cookies Técnicas y Estrictamente Necesarias</h3>
          <p>
            Son aquellas esenciales para el correcto funcionamiento de la web, como las necesarias para el sistema de navegación interno (Next.js/React). No recopilan información sobre ti que pueda ser usada con fines de marketing.
          </p>

          <h3>Cookies Analíticas (Terceros)</h3>
          <p>
            Son aquellas que, tratadas por nosotros o por terceros (ej. Google Analytics), nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de servicios que le ofrecemos.
          </p>

          <h2>3. ¿Cómo configurar o desactivar tus cookies?</h2>
          <p>
            En cualquier momento puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador que utilizas. A continuación te proporcionamos los enlaces donde puedes encontrar información sobre cómo configurar la privacidad y el uso de cookies en los navegadores principales:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h2>4. Cambios en la Política de Cookies</h2>
          <p>
            Es posible que actualicemos la Política de Cookies de nuestro Sitio Web en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD), por lo que te recomendamos revisar esta política de forma periódica.
          </p>

          <p className="text-sm mt-12 text-black/40">
            Última actualización: Abril de 2026.
          </p>
        </div>

      </div>
    </main>
  );
}
