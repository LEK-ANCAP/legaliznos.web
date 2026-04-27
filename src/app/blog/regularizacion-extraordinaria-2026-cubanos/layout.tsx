import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regularización Extraordinaria 2026 para Cubanos en España — Requisitos, Plazos y Cómo Solicitarla | LegalizaNos",
  description: "¿Eres cubano en España sin papeles? La regularización extraordinaria 2026 te permite residir y trabajar legalmente. Plazo hasta el 30 de junio. Te explicamos todo.",
  alternates: {
    canonical: "https://legalizanos.com/blog/regularizacion-extraordinaria-2026-cubanos",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Regularización Extraordinaria 2026 para Cubanos en España",
    description: "¿Eres cubano en España sin papeles? La regularización extraordinaria 2026 te permite residir y trabajar legalmente.",
    url: "https://legalizanos.com/blog/regularizacion-extraordinaria-2026-cubanos",
    images: ["/og-regularizacion.jpg"],
    type: "article",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Regularización extraordinaria 2026: lo que necesitas saber si eres cubano en España",
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Legalizanos",
        "url": "https://legalizanos.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Legalizanos",
        "logo": {
          "@type": "ImageObject",
          "url": "https://legalizanos.com/logo.png"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Puedo trabajar desde que presento la solicitud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Desde que tu solicitud es admitida a trámite, recibes una autorización provisional para residir y trabajar. No necesitas esperar a la resolución definitiva."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto dura el permiso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1 año. Después debes solicitar una modificación a un permiso de residencia ordinario (residencia y trabajo, arraigo, etc.)."
          }
        },
        {
          "@type": "Question",
          "name": "Soy cubano y no tengo pasaporte vigente. ¿Puedo solicitar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Puedes presentar copia de pasaporte, cédula de inscripción o título de viaje reconocido."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito antecedentes penales de Cuba?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende. Si llevas más de 5 años en España, no. Si llevas menos, puedes presentar una declaración jurada mientras se gestionan los antecedentes."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo solicitar si tengo un arraigo en trámite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si ya tienes un arraigo social, sociolaboral o similar en trámite, se te concederá automáticamente sin necesidad de presentar nueva solicitud."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo incluir a mi familia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Puedes solicitar para toda tu unidad de convivencia (cónyuge, pareja, hijos menores) en la misma cita. Los menores reciben autorización de 5 años."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si me deniegan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Puedes recurrir. Pero si preparas bien la documentación, el riesgo es bajo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta la regularización?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El trámite en sí no tiene tasas. Las ONGs y sindicatos habilitados pueden ayudar gratuitamente."
          }
        },
        {
          "@type": "Question",
          "name": "¿Es lo mismo que el arraigo social?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. El arraigo social requiere 2 años de permanencia + contrato de trabajo. La regularización extraordinaria requiere 5 meses de permanencia ininterrumpida y no necesita contrato."
          }
        }
      ]
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
