import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactoForm from "../components/ContactoForm";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Solicitar demo",
  description:
    "Solicita una demo de akuas o escríbenos por WhatsApp. Respondemos en menos de 24 horas.",
  alternates: { canonical: "https://akuas.cl/contacto" },
  openGraph: {
    title: "Solicitar demo — akuas",
    description: "Agenda una demo gratuita de akuas para tu APR. Respondemos en menos de 24 horas.",
    url: "https://akuas.cl/contacto",
    images: [{ url: "/opengraph-image.png", width: 512, height: 512, alt: "contacto akuas" }],
  },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--akua)" }}
        className="pt-32 pb-16 px-5"
      >
        <div className="max-w-4xl mx-auto">
          <p className="label-section mb-4">Contacto</p>
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
            Solicita una demo gratuita.
          </h1>
          <p
            style={{
              color: "rgba(242,238,229,0.75)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              maxWidth: "520px",
            }}
          >
            30 minutos por videollamada. Te mostramos el sistema con los datos
            de tu APR. Sin compromiso. Sin tarjeta de crédito.
          </p>
        </div>
      </section>

      {/* Dos columnas */}
      <section style={{ backgroundColor: "var(--niebla)" }} className="py-16 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--tinta)",
                fontWeight: 500,
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Respondemos en menos de 24 horas.
            </p>
            <p
              style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.95rem",
                color: "rgba(26,31,41,0.65)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Si es urgente, escríbenos directamente por WhatsApp. Generalmente
              respondemos el mismo día.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/56962104488"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 mb-4 transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(37,211,102,0.25)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(26,31,41,0.4)",
                    marginBottom: "2px",
                  }}
                >
                  WhatsApp
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "1.05rem",
                    color: "var(--tinta)",
                    fontWeight: 500,
                  }}
                >
                  +56 9 6210 4488
                </p>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  color: "#25D366",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hola@akuas.cl"
              className="flex items-center gap-4 rounded-2xl p-5 mb-8 transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(42,111,135,0.15)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(42,111,135,0.1)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--akua)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(26,31,41,0.4)",
                    marginBottom: "2px",
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "1.05rem",
                    color: "var(--tinta)",
                    fontWeight: 500,
                  }}
                >
                  hola@akuas.cl
                </p>
              </div>
            </a>

            {/* Qué pasa en la demo */}
            <div
              className="rounded-2xl p-5"
              style={{
                backgroundColor: "rgba(42,111,135,0.07)",
                border: "1px solid rgba(42,111,135,0.12)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ocre)",
                  marginBottom: "0.75rem",
                }}
              >
                En la demo de 30 min
              </p>
              {[
                "Mostramos el sistema con tus socios reales",
                "Calculamos la factura de un socio en vivo",
                "Revisamos alertas de consumo del período",
                "Accedemos al portal del socio desde celular",
                "Respondemos todas tus preguntas técnicas",
              ].map((paso) => (
                <div key={paso} className="flex items-start gap-2.5 mb-2 last:mb-0">
                  <span style={{ color: "var(--brote)", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>✓</span>
                  <span
                    style={{
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "0.875rem",
                      color: "rgba(26,31,41,0.7)",
                    }}
                  >
                    {paso}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <ContactoForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
