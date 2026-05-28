"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/inicio.png",
    alt: "Panel de administración akuas — facturación y lecturas de medidores",
    titulo: "El sistema de gestión para APRs",
    acento: "que sí funciona en terreno.",
    sub: "Facturación por tramos, cobros sin descuadres y alertas automáticas de posibles fugas.",
  },
  {
    src: "/inicio2.png",
    alt: "akuas — módulo de lecturas offline y sincronización de medidores en zonas rurales",
    titulo: "Lecturas en terreno,",
    acento: "facturación al instante.",
    sub: "Registra medidores sin internet. Sincroniza al recuperar señal. Sin duplicados, sin errores.",
  },
  {
    src: "/inicio3.png",
    alt: "Portal del socio akuas — historial de consumo y saldo actualizado",
    titulo: "El socio consulta su saldo",
    acento: "sin llamar al presidente.",
    sub: "Portal web accesible desde cualquier celular. Letra grande, saldo destacado, lenguaje simple.",
  },
  {
    src: "/Inicio4.png",
    alt: "Técnico de APR en terreno usando akuas en zonas rurales de Chile",
    titulo: "Hecho para la realidad",
    acento: "del APR chileno.",
    sub: "Señal débil, zonas remotas, socios adultos mayores. Todo contemplado desde el primer día.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(next, 5000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [current, paused, next]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: "580px", maxHeight: "900px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrusel"
      aria-label="Presentación de akuas"
    >
      {/* Slides track */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
          willChange: "transform",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${slides.length}`}
            aria-hidden={i !== current}
            className="relative flex-shrink-0 w-full h-full"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="100vw"
            />
            {/* Gradient overlay */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(26,31,41,0.82) 0%, rgba(42,111,135,0.72) 45%, rgba(42,111,135,0.18) 100%)",
              }}
            />
            {/* Content */}
            <div className="absolute inset-0 flex items-center px-5 pt-16">
              <div className="max-w-6xl mx-auto w-full">
                <div className="max-w-xl">
                  <p className="label-section mb-5">El sistema del agua rural de Chile</p>
                  <h1
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-bricolage, sans-serif)",
                      color: "var(--niebla)",
                      fontWeight: 500,
                      letterSpacing: "-0.04em",
                      lineHeight: 1.1,
                      fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                    }}
                  >
                    {slide.titulo}
                    <br />
                    <em style={{ color: "var(--ocre)", fontStyle: "italic" }}>{slide.acento}</em>
                  </h1>
                  <p
                    className="mb-8 max-w-lg"
                    style={{
                      color: "rgba(242,238,229,0.85)",
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "1.05rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {slide.sub}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contacto" className="btn-niebla text-base py-3 px-8">
                      Solicitar demo
                    </Link>
                    <Link href="/funcionalidades" className="btn-outline-niebla text-base py-3 px-8">
                      Ver funcionalidades
                    </Link>
                  </div>
                  <p
                    style={{ color: "rgba(242,238,229,0.4)", fontFamily: "var(--font-manrope, sans-serif)" }}
                    className="mt-4 text-sm"
                  >
                    Sin tarjeta de crédito. Sin letra chica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        style={{
          width: "42px",
          height: "42px",
          backgroundColor: "rgba(242,238,229,0.13)",
          border: "1px solid rgba(242,238,229,0.3)",
          color: "var(--niebla)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Siguiente slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        style={{
          width: "42px",
          height: "42px",
          backgroundColor: "rgba(242,238,229,0.13)",
          border: "1px solid rgba(242,238,229,0.3)",
          color: "var(--niebla)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2.5"
        role="tablist"
        aria-label="Navegación de slides"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            style={{
              height: "8px",
              width: i === current ? "28px" : "8px",
              backgroundColor: i === current ? "var(--ocre)" : "rgba(242,238,229,0.38)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
