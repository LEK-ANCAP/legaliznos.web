import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | LegalizaNos",
  description: "Aviso Legal y Condiciones Generales de Uso del sitio web LegalizaNos.",
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <h1 className="text-[2.5rem] font-bold tracking-tight text-black leading-tight mb-8">
          Aviso Legal
        </h1>
        
        <div className="prose prose-lg prose-p:text-black/70 prose-p:font-medium prose-p:leading-relaxed prose-headings:text-black prose-headings:font-bold prose-a:text-black prose-a:font-bold hover:prose-a:underline">
          
          <p>
            El presente Aviso Legal regula el acceso, navegación y uso del sitio web web <strong className="text-black">LegalizaNos</strong> (en adelante, "el Sitio Web").
          </p>

          <h2>1. Datos Identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se hace constar que el Sitio Web es operado bajo la marca comercial <strong className="text-black">LegalizaNos</strong> (en adelante, "el Titular").
          </p>
          <ul>
            <li><strong>Email de contacto:</strong> info@legalizanos.com</li>
          </ul>

          <h2>2. Usuarios</h2>
          <p>
            El acceso y/o uso del Sitio Web atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
          </p>

          <h2>3. Uso del Portal</h2>
          <p>
            El Sitio Web proporciona el acceso a multitud de informaciones, servicios o datos (en adelante, "los contenidos") en Internet pertenecientes al Titular a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
          </p>
          <p>
            Toda la información y material publicado en esta web tiene carácter meramente informativo, orientativo y no constituye en ningún caso asesoramiento jurídico, legal o profesional vinculante. El Titular no se hace responsable de las decisiones tomadas a partir de la información suministrada en la web.
          </p>

          <h2>4. Propiedad Intelectual e Industrial</h2>
          <p>
            El Titular por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
          </p>
          <p>
            En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización del Titular.
          </p>

          <h2>5. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            El Titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>

          <h2>6. Modificaciones</h2>
          <p>
            El Titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
          </p>

          <h2>7. Legislación Aplicable y Jurisdicción</h2>
          <p>
            La relación entre el Titular y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid (España).
          </p>

          <p className="text-sm mt-12 text-black/40">
            Última actualización: Abril de 2026.
          </p>
        </div>

      </div>
    </main>
  );
}
