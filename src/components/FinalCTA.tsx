"use client";

import React from 'react';
import { Check, Mail, Phone, MessagesSquare } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-white" id="contacto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col">
            <h2 className="text-[2.5rem] md:text-[4rem] font-bold tracking-[-0.03em] text-black leading-[1.1] mb-8">
              ¿Todo claro?
            </h2>
            <p className="text-[17px] md:text-[19px] font-medium text-black/70 leading-relaxed mb-10 max-w-xl">
              Si ya sabes lo que necesitas, escríbenos y arrancamos hoy. Si aún tienes dudas, escríbenos igualmente — la primera consulta es gratuita y no compromete a nada. Te respondemos el mismo día.
            </p>
            
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span className="text-[16px] md:text-[17px] font-bold text-black">Sin compromiso hasta que tú decidas</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span className="text-[16px] md:text-[17px] font-bold text-black">Precio cerrado antes de empezar</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span className="text-[16px] md:text-[17px] font-bold text-black">Te respondemos hoy, no la semana que viene</span>
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row gap-6">
              <a href="tel:+34600000000" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[12px] font-bold text-black/50 uppercase tracking-widest">Llámanos</span>
                  <span className="block text-[15px] font-bold text-black group-hover:underline">+34 600 000 000</span>
                </div>
              </a>
              <a href="mailto:hola@legalizat.es" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[12px] font-bold text-black/50 uppercase tracking-widest">Escríbenos</span>
                  <span className="block text-[15px] font-bold text-black group-hover:underline">hola@legalizat.es</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="bg-[#FAFAFA] border-[8px] border-[#EAEAEA] rounded-[40px] p-8 md:p-12 shadow-2xl relative">
            
            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-black/50 uppercase tracking-widest pl-1">Tu nombre</label>
                <input 
                  type="text" 
                  className="bg-white border border-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-[16px] font-medium text-black placeholder:text-black/30" 
                  placeholder="Ej. Carlos Mendoza" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-black/50 uppercase tracking-widest pl-1">Tu WhatsApp (o móvil)</label>
                <input 
                  type="tel" 
                  className="bg-white border border-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-[16px] font-medium text-black placeholder:text-black/30" 
                  placeholder="+34 6XX XXX XXX" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-black/50 uppercase tracking-widest pl-1">¿Qué necesitas resolver?</label>
                <select 
                  defaultValue=""
                  className="bg-white border border-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-[16px] font-medium text-black appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>Selecciona una opción...</option>
                  <option value="legalizacion">Legalización documento cubano</option>
                  <option value="visados">Visados</option>
                  <option value="arraigo">Arraigo / Residencia</option>
                  <option value="nacionalidad">Nacionalidad Española</option>
                  <option value="reagrupacion">Reagrupación Familiar</option>
                  <option value="otro">Otro trámite / No estoy seguro</option>
                </select>
              </div>

              <button 
                type="submit"
                className="mt-4 w-full bg-black text-white text-[16px] font-bold py-5 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-transform active:translate-y-0"
              >
                Que me contacten
              </button>

            </form>

            {/* Direct WhatsApp Option */}
            <div className="mt-8 pt-8 border-t border-black/10 text-center">
              <p className="text-[14px] font-medium text-black/60 mb-5">
                ¿Prefieres hablar directamente ahora?
              </p>
              <a 
                href="https://wa.me/34600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white rounded-full p-1.5 pr-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_15px_25px_rgba(0,0,0,0.25)] hover:bg-neutral-900 active:translate-y-0 transition-all duration-300 w-full justify-center sm:w-auto"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-[15px] font-bold">Abrir chat en WhatsApp</span>
              </a>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
