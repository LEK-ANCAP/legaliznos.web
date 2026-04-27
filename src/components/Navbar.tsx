"use client";

import { useState, useEffect, useRef } from "react";
import { Button, Dropdown, Label, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/images/Logo Legalizate.png";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, X } from "lucide-react";

const JumpingDots = () => (
  <div className="flex gap-[3px] items-center justify-center p-1 cursor-pointer">
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, delay: 0, ease: "easeInOut" }}
      className="w-[5px] h-[5px] bg-black/50 rounded-full"
    />
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, delay: 0.15, ease: "easeInOut" }}
      className="w-[5px] h-[5px] bg-black/50 rounded-full"
    />
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
      className="w-[5px] h-[5px] bg-black/50 rounded-full"
    />
  </div>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMobileOpen(false); // Close mobile menu when back to top
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 250); // Grace period to stop jitter loops
  };

  // Desktop Expansion logic: Expand if Not scrolled OR if hovered.
  const isExpandedDesktop = !isScrolled || isHovered;

  return (
    <>
      {/* Efecto difuminado (Blur Mask) premium para cuando haces scroll hacia arriba */}
      <div 
        className="fixed top-0 left-0 right-0 h-32 z-40 pointer-events-none backdrop-blur-[6px] transition-opacity duration-700"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          opacity: isScrolled ? 1 : 0
        }}
      />
      
      {/* Efecto difuminado (Blur Mask) sutil para el fondo (Floating Contact) */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-28 z-40 pointer-events-none backdrop-blur-[4px] transition-opacity duration-700"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 10%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 10%, transparent 100%)",
          opacity: isScrolled ? 1 : 0
        }}
      />

      <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
        
        {/* Hover Wrapper (creates a larger invisible hit area) */}
        <div 
          className="pointer-events-auto flex justify-center p-[6px] -m-[6px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Nav Pill */}
          <motion.nav 
            layout
            className="bg-white/70 backdrop-blur-2xl border-[1.5px] border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.06),0_2px_10px_rgb(0,0,0,0.03)] rounded-full h-14 flex items-center justify-between p-1 pl-4 transition-colors relative"
          >
            {/* Left: Logo & Brand */}
            <motion.div layout className="flex items-center gap-2.5 pr-2">
              <div className="relative w-9 h-9 shrink-0">
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  <Image 
                    src={logoImg} 
                    alt="Logo Legalizanos"
                    fill 
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              </div>
              <motion.span layout className="font-semibold text-sm tracking-tight pr-2">
                Legalizanos
              </motion.span>
            </motion.div>

          <AnimatePresence initial={false}>
            {/* 1. DESKTOP ITEMS (Links + CTA) */}
            {isExpandedDesktop && (
                <motion.div 
                  key="desktop-extended"
                  initial={{ opacity: 0, filter: "blur(4px)", width: 0 }}
                  animate={{ opacity: 1, filter: "blur(0px)", width: "auto" }}
                  exit={{ opacity: 0, filter: "blur(4px)", width: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="hidden md:flex items-center overflow-hidden"
                >
                  <div className="flex items-center w-max">
                    {/* Links */}
                <div className="flex items-center gap-5 text-sm font-semibold text-black px-5 whitespace-nowrap">
                  <Dropdown>
                    <Dropdown.Trigger>
                      <div className="flex items-center gap-1 hover:text-black/50 transition-colors cursor-pointer outline-none group data-[open=true]:text-black/50">
                        Servicios
                        <svg className="w-3 h-3 opacity-50 group-data-[open=true]:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </Dropdown.Trigger>
                    <Dropdown.Popover className="min-w-[260px] bg-white border-[1.5px] border-black/10 shadow-xl rounded-2xl p-1">
                      <Dropdown.Menu aria-label="Servicios" className="flex flex-col gap-1 w-full outline-none">
                        <Dropdown.Item key="doc" href="/legalizacion-documentos-cubanos" textValue="Legalización de Documentos" className="rounded-xl py-2 px-3 hover:bg-black/5 transition-colors cursor-pointer data-[hover=true]:bg-black/5">
                          <Label className="cursor-pointer">Legalización de Documentos</Label>
                        </Dropdown.Item>
                        <Dropdown.Item key="visados" href="/visados-cuba-espana" textValue="Visados desde Cuba" className="rounded-xl py-2 px-3 hover:bg-black/5 transition-colors cursor-pointer data-[hover=true]:bg-black/5">
                          <Label className="cursor-pointer">Visados desde Cuba</Label>
                        </Dropdown.Item>
                        <Dropdown.Item key="arraigo" href="/arraigo-social-cubanos-espana" textValue="Arraigo Social y Residencia" className="rounded-xl py-2 px-3 hover:bg-black/5 transition-colors cursor-pointer data-[hover=true]:bg-black/5">
                          <Label className="cursor-pointer">Arraigo Social y Residencia</Label>
                        </Dropdown.Item>
                        <Dropdown.Item key="nacionalidad" href="/nacionalidad-espanola-cubanos" textValue="Nacionalidad Española" className="rounded-xl py-2 px-3 hover:bg-black/5 transition-colors cursor-pointer data-[hover=true]:bg-black/5">
                          <Label className="cursor-pointer">Nacionalidad Española</Label>
                        </Dropdown.Item>
                        <Dropdown.Item key="reagrupacion" href="/reagrupacion-familiar-cubanos-espana" textValue="Reagrupación Familiar" className="rounded-xl py-2 px-3 hover:bg-black/5 transition-colors cursor-pointer data-[hover=true]:bg-black/5">
                          <Label className="cursor-pointer">Reagrupación Familiar</Label>
                        </Dropdown.Item>
                        
                        <Separator className="my-1 bg-black/10 h-[1px] w-full" />
                        
                        <Dropdown.Item id="all" textValue="Todos los servicios" className="rounded-xl py-2 px-3 hover:bg-black/5 transition-colors cursor-pointer data-[hover=true]:bg-black/5">
                          <div className="flex items-center gap-2">
                            <Label className="font-bold cursor-pointer">Todos los servicios</Label>
                            <span className="text-black/50">→</span>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Popover>
                  </Dropdown>
                  <a href="/sobre-nosotros" className="hover:text-black/50 transition-colors">Sobre Nosotros</a>
                  <a href="/precios" className="hover:text-black/50 transition-colors">Precios</a>
                  <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a>
                </div>
                    {/* CTA */}
                    <div className="pr-1">
                      <Link 
                        href="/contacto" 
                        className="inline-flex items-center justify-center h-[38px] bg-black text-white px-6 rounded-full text-[14px] font-bold hover:bg-black/80 hover:-translate-y-0.5 transition-all shadow-md leading-none"
                      >
                        Contacto
                      </Link>
                    </div>
                  </div>
                </motion.div>
            )}

            {/* 2. DESKTOP COMPACT ICON */}
            {isScrolled && !isExpandedDesktop && (
              <motion.div 
                key="desktop-compact"
                initial={{ opacity: 0, scale: 0.5, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: "auto" }}
                exit={{ opacity: 0, scale: 0.5, width: 0 }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className="hidden md:flex items-center pl-2 pr-2"
              >
                <JumpingDots />
              </motion.div>
            )}

            {/* 3. MOBILE INITIAL CTA (Not scrolled) */}
            {!isScrolled && (
              <motion.div 
                key="mobile-initial"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="flex md:hidden items-center overflow-hidden pr-1"
              >
                <Link 
                  href="/contacto" 
                  className="inline-flex items-center justify-center h-[38px] bg-black text-white px-5 rounded-full text-[14px] font-bold hover:bg-black/80 transition-colors shadow-md leading-none"
                >
                  Contacto
                </Link>
              </motion.div>
            )}

            {/* 4. MOBILE COMPACT ICON (Always when scrolled) */}
            {isScrolled && (
              <motion.div 
                key="mobile-compact"
                initial={{ opacity: 0, scale: 0.5, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: "auto" }}
                exit={{ opacity: 0, scale: 0.5, width: 0 }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className="flex md:hidden items-center pl-2 pr-3 cursor-pointer"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMobileOpen ? 90 : 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                >
                  {isMobileOpen ? (
                    <X className="w-5 h-5 text-black" />
                  ) : (
                    <JumpingDots />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.nav>
        </div>

        {/* Mobile Dropdown Menu (Only when scrolled and opened) */}
        <AnimatePresence>
          {isMobileOpen && isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="mt-4 md:hidden pointer-events-auto bg-white/80 backdrop-blur-2xl border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-3xl w-full max-w-[280px] flex flex-col p-2 gap-1 overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-2 overflow-y-auto max-h-[60vh] custom-scrollbar">
                
                {/* Accordion or nested list for mobile */}
                <div className="flex flex-col">
                  <span className="px-4 py-2 text-[12px] font-bold text-black/40 uppercase tracking-wider">Servicios</span>
                  <div className="flex flex-col gap-1 pl-2">
                    <a href="/legalizacion-documentos-cubanos" onClick={() => setIsMobileOpen(false)} className="px-4 py-2 hover:bg-black/5 rounded-xl text-[14px] font-semibold text-black transition-colors">Legalización de Documentos</a>
                    <a href="/visados-cuba-espana" onClick={() => setIsMobileOpen(false)} className="px-4 py-2 hover:bg-black/5 rounded-xl text-[14px] font-semibold text-black transition-colors">Visados desde Cuba</a>
                    <a href="/arraigo-social-cubanos-espana" onClick={() => setIsMobileOpen(false)} className="px-4 py-2 hover:bg-black/5 rounded-xl text-[14px] font-semibold text-black transition-colors">Arraigo Social y Residencia</a>
                    <a href="/nacionalidad-espanola-cubanos" onClick={() => setIsMobileOpen(false)} className="px-4 py-2 hover:bg-black/5 rounded-xl text-[14px] font-semibold text-black transition-colors">Nacionalidad Española</a>
                    <a href="/reagrupacion-familiar-cubanos-espana" onClick={() => setIsMobileOpen(false)} className="px-4 py-2 hover:bg-black/5 rounded-xl text-[14px] font-semibold text-black transition-colors">Reagrupación Familiar</a>
                    <a href="/servicios" onClick={() => setIsMobileOpen(false)} className="px-4 py-2 hover:bg-black/5 rounded-xl text-[14px] font-bold text-black transition-colors flex items-center gap-2">Todos los servicios <span className="opacity-50">→</span></a>
                  </div>
                </div>

                <div className="h-[1px] bg-black/5 mx-4 my-2" />
                
                <a href="/sobre-nosotros" onClick={() => setIsMobileOpen(false)} className="px-4 py-3 hover:bg-black/5 rounded-2xl text-[15px] font-semibold text-black transition-colors">Sobre Nosotros</a>
                <a href="/precios" onClick={() => setIsMobileOpen(false)} className="px-4 py-3 hover:bg-black/5 rounded-2xl text-[15px] font-semibold text-black transition-colors">Precios</a>
                <a href="/blog" onClick={() => setIsMobileOpen(false)} className="px-4 py-3 hover:bg-black/5 rounded-2xl text-[15px] font-semibold text-black transition-colors">Blog</a>

              </div>
              <div className="p-2 pt-1 mt-1 border-t border-black/5">
                <Link
                  href="/contacto"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-black text-white px-4 py-4 rounded-2xl text-[15px] font-bold hover:bg-black/80 transition-colors w-full"
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
