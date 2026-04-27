import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carlos M.",
    location: "Valencia",
    text: "Pedí mis antecedentes penales legalizados para el arraigo. En 2 meses y medio los tenía en casa. Me fueron informando por WhatsApp cada vez que avanzaba algo. Precio exacto al que me dijeron al empezar."
  },
  {
    name: "Yanet F.",
    location: "Madrid",
    text: "Había pagado a otra persona que desapareció con mi dinero. Con Legalizanos me mandaron el contrato antes de cobrarme nada. Y cuando hubo un retraso en el MINJUS, me avisaron el mismo día en vez de dejarme esperando."
  },
  {
    name: "Eduardo R.",
    location: "Barcelona",
    text: "Necesitaba nacimiento, antecedentes y matrimonio para la nacionalidad. Me hicieron precio por los tres juntos y me los fueron enviando según iban saliendo. Todo impecable."
  }
];

export function ResenasEspana() {
  return (
    <section className="relative py-24 bg-[#FAFAFA]" id="resenas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex w-fit bg-white border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">Opiniones</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.2rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-6">
            Clientes que legalizaron <br className="hidden md:block" />
            <span className="text-black/40">sus documentos con nosotros</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-white border border-black/5 rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
                ))}
              </div>
              <p className="text-[16px] text-black/80 font-medium leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex flex-col mt-auto border-t border-black/5 pt-6">
                <span className="text-[16px] font-bold text-black">{review.name}</span>
                <span className="text-[14px] font-medium text-black/50">{review.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
