import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Necesitaba mis antecedentes penales legalizados para el arraigo. En 2 meses los tenía en casa. Me fueron informando por WhatsApp en todo momento. Precio exacto al que me dijeron.",
    author: "María G.",
    location: "Valencia"
  },
  {
    content: "Había perdido dinero con otra gestoría que dejó de contestar. Con LegalizaT todo fue claro desde el primer mensaje. Me dijeron qué necesitaba, cuánto costaba, y cumplieron el plazo.",
    author: "Carlos M.",
    location: "Madrid"
  },
  {
    content: "Me ayudaron con la reagrupación de mi madre. Desde el expediente aquí hasta el visado en La Habana. Cuando la vi llegar al aeropuerto supe que cada euro había valido la pena.",
    author: "Laura P.",
    location: "Madrid"
  }
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-white border-t border-black/5" id="testimonios">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-8">
            No te lo contamos nosotros. <br className="hidden md:block"/>
            <span className="text-black/40">Te lo cuentan ellos.</span>
          </h2>
          
          <a href="#" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white border border-black/10 hover:border-black/20 rounded-full px-6 py-2.5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F2B035] text-[#F2B035]" />
              ))}
            </div>
            <span className="text-[14px] font-bold text-black group-hover:text-black/70 transition-colors">
              5.0 de reseñas en Google
            </span>
            <span className="text-[14px] text-black/40 font-medium group-hover:text-black transition-colors hidden sm:inline">— compruébalo tú mismo →</span>
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonio, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-[#FAFAFA] border border-black/5 rounded-[32px] p-8 md:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black/60 text-transparent" />
                ))}
              </div>
              
              <p className="text-[16px] md:text-[18px] lg:text-[19px] font-medium text-black/80 leading-relaxed mb-10 grow">
                &quot;{testimonio.content}&quot;
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EAEAEA] flex items-center justify-center font-bold text-black/50 text-[16px]">
                  {testimonio.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-black tracking-tight">{testimonio.author}</h4>
                  <span className="text-[14px] text-black/50 font-medium">{testimonio.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
