"use client";

import { useState } from "react";
import { Link } from "@heroui/react";
import { ArrowRight, Check } from "lucide-react";

const CHECKLIST_ITEMS = [
  "Llevo al menos 2 años viviendo en España de forma continuada.",
  "No me he ido de España más de 90 días en total durante esos 2 años.",
  "No tengo antecedentes penales en España ni en Cuba (o están prescritos).",
  "Puedo demostrar documentalmente dónde he vivido (empadronamiento histórico, médico, envío de dinero, etc).",
  "Tengo UNA de estas tres cosas: un contrato de trabajo (mínimo 20h/semana, 1 año), familiares residentes legales con medios, o un plan de negocio."
];

export function ChecklistArraigo() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(CHECKLIST_ITEMS.length).fill(false));
  const allChecked = checkedItems.every(Boolean);

  const toggleItem = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  const WHATSAPP_NUMBER = "34000000000";
  const MESSAGE = encodeURIComponent(`Hola, acabo de completar el checklist de arraigo social. He marcado ${checkedItems.filter(Boolean).length} de ${CHECKLIST_ITEMS.length} requisitos. Quiero evaluar mi caso gratis.`);
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex bg-black/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[13px] font-bold text-black tracking-tight uppercase">¿Puedo pedir el arraigo?</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6">
            Antes de gastar un euro,<br />comprueba si cumples.
          </h2>
          <p className="text-[17px] md:text-[19px] font-medium text-black/60 leading-relaxed max-w-2xl mx-auto">
            Ningún competidor te da esta herramienta gratis. Evalúate tú mismo primero para saber dónde estás parado.
          </p>
        </div>

        <div className="bg-[#FAFAFA] border border-black/5 rounded-3xl p-6 md:p-10 shadow-sm mb-8">
          <div className="flex flex-col gap-4">
            {CHECKLIST_ITEMS.map((item, index) => {
              const isChecked = checkedItems[index];
              return (
                <button
                  key={index}
                  onClick={() => toggleItem(index)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${
                    isChecked 
                      ? "bg-black text-white border-black shadow-md" 
                      : "bg-white border-black/10 hover:border-black/30 hover:bg-black/5"
                  }`}
                >
                  <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                    isChecked ? "bg-white border-white text-black" : "border-black/20"
                  }`}>
                    {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span className={`text-[15px] md:text-[16px] font-medium leading-relaxed ${
                    isChecked ? "text-white/90" : "text-black/70"
                  }`}>
                    {item}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 pt-8 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/5 rounded-2xl p-6">
              <span className="block text-[18px] text-black font-bold mb-2">Si has marcado todo 🟢</span>
              <p className="text-[14px] text-black/70 font-medium leading-relaxed">
                Probablemente cumples. Pero hay matices que solo vemos cuando revisamos tu caso concreto. La evaluación es gratuita.
              </p>
            </div>
            <div className="bg-black/5 rounded-2xl p-6">
              <span className="block text-[18px] text-black font-bold mb-2">Si NO puedes marcar todo 🔴</span>
              <p className="text-[14px] text-black/70 font-medium leading-relaxed">
                No pasa nada. Te orientamos sobre qué te falta y cómo conseguirlo para que puedas solicitarlo en el futuro.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link 
            href={WHATSAPP_URL}
            className="flex items-center gap-2 bg-black hover:bg-black/80 text-white px-8 py-4 rounded-full text-[16px] font-bold transition-all shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
          >
            Evaluar mi caso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
