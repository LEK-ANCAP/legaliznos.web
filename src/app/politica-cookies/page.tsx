import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | LegalizaNos",
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
          
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar un sitio web. Sirven para recordar preferencias, analizar el tráfico y mejorar la experiencia de usuario.
          </p>

          <h2>¿Qué cookies usamos?</h2>
          
          <h3>Cookies Técnicas (necesarias)</h3>
          <ul>
            <li><strong>Cookies de sesión:</strong> permiten la navegación por la web. Se eliminan al cerrar el navegador.</li>
            <li><strong>Cookies de preferencias:</strong> recuerdan tus preferencias (idioma, aceptación de cookies).</li>
          </ul>

          <h3>Cookies Analíticas</h3>
          <ul>
            <li><strong>Google Analytics 4:</strong> recopilan información anónima sobre cómo los usuarios navegan por la web (páginas visitadas, tiempo de permanencia, origen del tráfico). Nos ayudan a mejorar la web. No identifican personalmente a ningún usuario.</li>
          </ul>

          <h2>¿Cómo gestionar las cookies?</h2>
          <p>
            Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que desactivar las cookies técnicas puede afectar al funcionamiento de la web.
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Edge</a></li>
          </ul>

          <p>Para más información sobre cookies: <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a></p>

          <h2>Actualizaciones</h2>
          <p>
            Esta política puede actualizarse en función de exigencias legislativas. Te recomendamos revisarla periódicamente.
          </p>

          <p className="text-sm mt-12 text-black/40">
            Última actualización: Abril de 2026.
          </p>
        </div>

      </div>
    </main>
  );
}
