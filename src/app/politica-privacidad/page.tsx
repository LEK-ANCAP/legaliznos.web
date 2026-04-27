import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | LegalizaNos",
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <h1 className="text-[2.5rem] font-bold tracking-tight text-black leading-tight mb-8">
          Política de Privacidad
        </h1>
        
        <div className="flex flex-col gap-5 text-[17px] text-black/70 font-medium leading-relaxed [&>h2]:text-[22px] [&>h2]:font-bold [&>h2]:text-black [&>h2]:mt-8 [&>h2]:mb-2 [&>h3]:text-[19px] [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-6 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>p]:m-0 [&>a]:text-black [&>a]:font-bold hover:[&>a]:underline">
          
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos:
          </p>

          <h2>Responsable del Tratamiento</h2>
          <ul>
            <li><strong>Identidad:</strong> LegalizaNos</li>
            <li><strong>Email:</strong> info@legalizanos.com</li>
          </ul>

          <h2>Finalidad del Tratamiento</h2>
          <p>
            Los datos personales facilitados a través de formularios, WhatsApp, email o teléfono serán tratados con las siguientes finalidades:
          </p>
          <ul>
            <li>Gestionar consultas y solicitudes de información.</li>
            <li>Preparar presupuestos y propuestas de servicio.</li>
            <li>Prestar los servicios de asesoría migratoria contratados.</li>
            <li>Enviar comunicaciones relacionadas con los servicios contratados.</li>
          </ul>

          <h2>Legitimación</h2>
          <ul>
            <li>Consentimiento del interesado.</li>
            <li>Ejecución de un contrato o precontrato.</li>
            <li>Interés legítimo del responsable.</li>
          </ul>

          <h2>Destinatarios</h2>
          <p>
            No se cederán datos a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, envío postal del documento legalizado).
          </p>

          <h2>Conservación</h2>
          <p>
            Los datos se conservarán mientras dure la relación comercial y durante los plazos legales obligatorios (generalmente 5 años tras la finalización del servicio).
          </p>

          <h2>Derechos</h2>
          <p>
            Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando un email a <strong>info@legalizanos.com</strong> indicando "PROTECCIÓN DE DATOS" en el asunto, adjuntando copia de su DNI o documento identificativo.
          </p>
          <p>
            También puede presentar reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
          </p>

          <h2>Medidas de Seguridad</h2>
          <p>
            Se han adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>

          <p className="text-sm mt-12 text-black/40">
            Última actualización: Abril de 2026.
          </p>
        </div>

      </div>
    </main>
  );
}
