"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected cookies
    const cookieConsent = localStorage.getItem("legalizanos_cookie_consent");
    
    if (!cookieConsent) {
      // 10 seconds delay as requested
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
      
      return () => clearTimeout(timer);
    } else if (cookieConsent === "accepted") {
      // Si ya aceptó, cargamos GA al montar
      if (typeof window !== 'undefined') {
        // @ts-ignore
        window.dataLayer = window.dataLayer || [];
        // @ts-ignore
        function gtag(){dataLayer.push(arguments);}
        // @ts-ignore
        gtag('js', new Date());
        // @ts-ignore
        gtag('config', 'G-XXXXXXXXXX'); // Reemplazar con ID real
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("legalizanos_cookie_consent", "accepted");
    setIsVisible(false);
    
    // Aquí cargarías Google Analytics u otras herramientas
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      function gtag(){dataLayer.push(arguments);}
      // @ts-ignore
      gtag('js', new Date());
      // @ts-ignore
      gtag('config', 'G-XXXXXXXXXX'); // Reemplazar con ID real
    }
  };

  const handleReject = () => {
    localStorage.setItem("legalizanos_cookie_consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-[400px] z-[999] bg-white border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-5 rounded-3xl"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 text-black font-bold">
              <Cookie className="w-5 h-5" />
              <span>Privacidad y Cookies</span>
            </div>
            <button 
              onClick={handleReject}
              className="text-black/40 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-[14px] text-black/60 font-medium leading-relaxed mb-5">
            Utilizamos cookies propias y de terceros para mejorar tu experiencia de usuario y analizar el tráfico de la web. Puedes aceptar todas las cookies o configurarlas. 
            <Link href="/politica-cookies" className="text-black underline ml-1 font-bold">Ver política</Link>
          </p>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="flex-1 bg-black text-white rounded-xl py-2.5 text-[14px] font-bold hover:bg-black/80 transition-colors"
            >
              Aceptar todas
            </button>
            <button
              onClick={handleReject}
              className="flex-1 bg-black/5 text-black rounded-xl py-2.5 text-[14px] font-bold hover:bg-black/10 transition-colors"
            >
              Solo esenciales
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
