import React from 'react';

const steps = [
  {
    num: "01",
    title: "Nos escribes",
    desc: "Nos cuentas qué necesitas por WhatsApp. Te respondemos el mismo día con un plan claro: qué documentos necesitas, cuánto cuesta exactamente, y cuánto va a tardar. Si te convence, arrancamos. Si no, tan amigos."
  },
  {
    num: "02",
    title: "Nos ponemos",
    desc: "Recogemos tus datos, preparamos la documentación y nuestro equipo en La Habana empieza a trabajar. Tú sigues con tu vida. No tienes que ir a ningún sitio ni llamar a nadie en Cuba."
  },
  {
    num: "03",
    title: "Te contamos",
    desc: "Cada vez que tu trámite avanza, te escribimos por WhatsApp. Si hay un retraso, te explicamos por qué. Si necesitamos algo de ti, te lo pedimos claro. Nada de silencio."
  },
  {
    num: "04",
    title: "Te llega",
    desc: "Documento legalizado en PDF por email + original por correo certificado a tu casa. Expediente presentado y resuelto. Familia con visado. Lo que sea que necesitabas: hecho."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-16 lg:mb-24 max-w-2xl">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] text-black leading-tight">
            De tu WhatsApp a tu buzón. <br className="hidden md:block"/> 
            <span className="text-black/40">Así funciona.</span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Continuous Line (Vertical Mobile / Horizontal Desktop) */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-black/[0.06] lg:left-0 lg:right-0 lg:top-4 lg:bottom-auto lg:h-[2px] lg:w-full z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="relative flex flex-row lg:flex-col items-start gap-6 lg:gap-0 group">
                
                {/* Node / Dot */}
                <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border-[2px] border-[#EAEAEA] group-hover:border-black flex items-center justify-center shrink-0 transition-colors duration-500 lg:mb-8 shadow-[0_0_0_8px_var(--bg-section,#FAFAFA)]">
                  <span className="text-[11px] font-extrabold text-black/40 group-hover:text-black tracking-tighter transition-colors duration-500">{step.num}</span>
                </div>
                
                {/* Text Content */}
                <div className="flex-1 mt-0.5 lg:mt-0 lg:pr-6">
                  <h3 className="text-[20px] md:text-[22px] font-bold tracking-tight text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
