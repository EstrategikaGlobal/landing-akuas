import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog y herramientas — akuas",
  description: "Recursos prácticos para APRs: calculadoras de tarifa y morosidad, test de digitalización y guías de gestión.",
};

const articulos = [
  {
    slug: "calculadora-tarifa-agua",
    badge: "Herramienta interactiva",
    titulo: "¿Cuánto debería cobrar tu APR por m³?",
    desc: "Calculadora de factura de agua con los 6 tramos tarifarios reales. Ingresá el consumo en m³, seleccioná si el socio está exento de IVA y obtenés el desglose completo: subtotal por tramo, cargo fijo, IVA y total a cobrar.",
    cta: "Usar calculadora",
  },
  {
    slug: "calculadora-morosidad",
    badge: "Herramienta interactiva",
    titulo: "¿Cuánto pierde tu APR por morosidad?",
    desc: "Estimá el impacto financiero de la morosidad en tu comité. Con el número de socios, el porcentaje de morosos y el consumo promedio, la calculadora proyecta la pérdida mensual, anual y a 3 años.",
    cta: "Calcular pérdida",
  },
  {
    slug: "test-digitalizacion",
    badge: "Test interactivo",
    titulo: "¿Tu APR necesita digitalización?",
    desc: "8 preguntas sobre cómo opera hoy tu comité: registro de lecturas, saldos de socios, tiempo de facturación, acceso a información y capacidad offline. Al final, un diagnóstico basado en tu puntuación.",
    cta: "Hacer el test",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--akua)" }}
        className="pt-32 pb-16 px-5"
      >
        <div className="max-w-4xl mx-auto">
          <p className="label-section mb-4">Recursos para APRs</p>
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
            Herramientas para gestionar mejor tu APR.
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
            Calculadoras y tests gratuitos construidos con la lógica real del
            sistema. Sin registro.
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section style={{ backgroundColor: "var(--niebla)" }} className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articulos.map((a) => (
              <div
                key={a.slug}
                className="rounded-2xl flex flex-col overflow-hidden"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(26,31,41,0.07)",
                }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(42,111,135,0.1)",
                        color: "var(--akua)",
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {a.badge}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-bricolage, sans-serif)",
                      color: "var(--tinta)",
                      fontWeight: 500,
                      fontSize: "1.15rem",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {a.titulo}
                  </h2>
                  <p
                    style={{
                      color: "rgba(26,31,41,0.6)",
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {a.desc}
                  </p>
                </div>
                <div
                  className="px-6 pb-6"
                >
                  <Link
                    href={`/blog/${a.slug}`}
                    className="block text-center py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85"
                    style={{
                      backgroundColor: "var(--akua)",
                      color: "var(--niebla)",
                      fontFamily: "var(--font-manrope, sans-serif)",
                    }}
                  >
                    {a.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
