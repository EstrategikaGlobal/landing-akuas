import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TestDigitalizacion from "../../components/TestDigitalizacion";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Test de digitalización para APRs",
  description:
    "8 preguntas para saber si tu APR necesita digitalización. Diagnóstico gratuito basado en cómo opera hoy tu comité de agua potable rural.",
  alternates: { canonical: "https://akuas.cl/blog/test-digitalizacion" },
  openGraph: {
    title: "¿Tu APR necesita digitalizarse? — akuas",
    description: "Test gratuito de 8 preguntas. Descubre en qué nivel de digitalización está tu comité de agua potable rural.",
    url: "https://akuas.cl/blog/test-digitalizacion",
    images: [{ url: "/opengraph-image.png", width: 512, height: 512, alt: "test digitalización APR" }],
  },
};

export default function TestDigitalizacionPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--akua)" }}
        className="pt-32 pb-16 px-5"
      >
        <div className="max-w-4xl mx-auto">
          <p className="label-section mb-4">Test interactivo</p>
          <h1
            style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              color: "var(--niebla)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
            className="text-4xl sm:text-5xl mb-5"
          >
            ¿Tu APR necesita digitalización?
          </h1>
          <p
            style={{
              color: "rgba(242,238,229,0.75)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "1rem",
              lineHeight: 1.6,
              maxWidth: "520px",
            }}
          >
            8 preguntas sobre cómo opera hoy tu comité. Al final, un diagnóstico
            concreto según tu puntuación. Sin registro, sin datos personales.
          </p>
        </div>
      </section>

      {/* Test */}
      <section style={{ backgroundColor: "var(--niebla)" }} className="py-16 px-5">
        <TestDigitalizacion />
      </section>

      <Footer />
    </>
  );
}
