import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | LegalizaNos",
  description: "Política de Privacidad y protección de datos personales de LegalizaNos.",
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <h1 className="text-[2.5rem] font-bold tracking-tight text-black leading-tight mb-8">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg prose-p:text-black/70 prose-p:font-medium prose-p:leading-relaxed prose-headings:text-black prose-headings:font-bold prose-a:text-black prose-a:font-bold hover:prose-a:underline">
          
          <p>
            En <strong className="text-black">LegalizaNos</strong> estamos comprometidos con la protección de tu privacidad. Esta política explica cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas, en cumplimiento con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
          </p>

          <h2>1. Responsable del Tratamiento</h2>
          <ul>
            <li><strong>Identidad:</strong> LegalizaNos</li>
            <li><strong>Correo electrónico:</strong> info@legalizanos.com</li>
          </ul>

          <h2>2. Finalidad del Tratamiento</h2>
          <p>
            Los datos personales que nos facilites a través del sitio web, correo electrónico o canales de mensajería (WhatsApp) serán tratados para las siguientes finalidades:
          </p>
          <ul>
            <li>Atender tus consultas, dudas o solicitudes de viabilidad (Evaluación gratuita).</li>
            <li>Gestionar los servicios de extranjería, nacionalidad y legalización de documentos encomendados.</li>
            <li>Mantener la comunicación relativa a tu expediente.</li>
            <li>Cumplir con las obligaciones legales derivadas de la prestación de nuestros servicios.</li>
          </ul>

          <h2>3. Legitimación</h2>
          <p>
            La base legal para el tratamiento de tus datos es:
          </p>
          <ul>
            <li><strong>Consentimiento del interesado:</strong> al enviarnos una consulta por WhatsApp o email.</li>
            <li><strong>Ejecución de un contrato:</strong> si decides contratar formalmente nuestros servicios de gestión y tramitación.</li>
            <li><strong>Obligación legal:</strong> para el cumplimiento de obligaciones fiscales y jurídicas.</li>
          </ul>

          <h2>4. Conservación de los Datos</h2>
          <p>
            Los datos personales proporcionados se conservarán mientras se mantenga la relación de prestación de servicios. Una vez finalizada, se mantendrán bloqueados durante el tiempo necesario para cumplir con las obligaciones legales aplicables y para la formulación, ejercicio o defensa de posibles reclamaciones.
          </p>

          <h2>5. Destinatarios (Cesión a terceros)</h2>
          <p>
            No cederemos tus datos a terceros con fines comerciales. Para la correcta prestación del servicio de extranjería y legalizaciones, tus datos y documentos podrán ser comunicados a:
          </p>
          <ul>
            <li>Administraciones Públicas Españolas (Ministerio de Justicia, Oficinas de Extranjería, Policía Nacional).</li>
            <li>Consulados y Embajadas de España.</li>
            <li>Notarías y Registros Civiles, cuando el trámite lo requiera.</li>
          </ul>

          <h2>6. Derechos del Usuario</h2>
          <p>
            Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le conciernan. Como titular de los datos, puedes ejercer los siguientes derechos:
          </p>
          <ul>
            <li>Derecho de <strong>Acceso</strong> a tus datos personales.</li>
            <li>Derecho de <strong>Rectificación</strong> de datos inexactos o incompletos.</li>
            <li>Derecho de <strong>Supresión</strong> (olvido) cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
            <li>Derecho de <strong>Oposición</strong> o limitación del tratamiento en determinadas circunstancias.</li>
            <li>Derecho a la <strong>Portabilidad</strong> de los datos.</li>
          </ul>
          <p>
            Podrás ejercer tus derechos enviando un correo electrónico a <strong>info@legalizanos.com</strong>, adjuntando copia de tu DNI o pasaporte e indicando el derecho que deseas ejercer.
          </p>

          <h2>7. Seguridad</h2>
          <p>
            En LegalizaNos hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad y confidencialidad de tus datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado. Especialmente en el tratamiento de documentos sensibles provenientes de Cuba o España.
          </p>

          <p className="text-sm mt-12 text-black/40">
            Última actualización: Abril de 2026.
          </p>
        </div>

      </div>
    </main>
  );
}
