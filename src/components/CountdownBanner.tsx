"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Timer } from "lucide-react";
import { Button } from "@heroui/react";

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-06-30T23:59:59").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-[#FFF8F0] border-l-4 border-[#F5A524] p-5 md:p-6 rounded-r-2xl mb-12 shadow-sm animate-pulse min-h-[140px]" />
    );
  }

  return (
    <div className="bg-[#FFF8F0] border-l-4 border-[#F5A524] p-5 md:p-6 rounded-r-2xl mb-12 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A524]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-[#F5A524]/20 flex flex-shrink-0 items-center justify-center">
          {timeLeft ? (
            <Timer className="w-6 h-6 text-[#F5A524]" />
          ) : (
            <AlertCircle className="w-6 h-6 text-red-500" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-[18px] font-bold text-black mb-1 flex flex-wrap items-center gap-2">
            ⚡ PLAZO ABIERTO
            {timeLeft && (
              <span className="inline-flex items-center bg-[#F5A524] text-white text-[12px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                Quedan {timeLeft.days} días
              </span>
            )}
          </h3>
          <p className="text-[15px] font-medium text-black/70 leading-relaxed mb-4 md:mb-0">
            Solicitudes desde el 16 de abril hasta el 30 de junio de 2026. Desde que presentas la solicitud puedes trabajar legalmente. No esperes a las últimas semanas — el colapso es previsible.
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <a 
            href="https://wa.me/34600000000?text=Hola%2C%20quiero%20saber%20si%20puedo%20acogerme%20a%20la%20regularización%20extraordinaria"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <Button className="bg-[#F5A524] text-white font-bold rounded-xl h-12 w-full px-6 shadow-md shadow-[#F5A524]/20 whitespace-normal leading-snug">
              ¿Puedo acogerme? Consulta gratis
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
