import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CalculadoraMorosidad from "../../components/CalculadoraMorosidad";

export const metadata = {
  title: "Calculadora de morosidad APR — akuas",
  description: "Calcula cuánto pierde tu APR por socios morosos. Proyección mensual, anual y a 3 años según número de socios, porcentaje de morosidad y consumo promedio.",
};

export default function CalculadoraMorosidadPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--akua)" }}
        className="pt-32 pb-16 px-5"
      >
        <div className="max-w-4xl mx-auto">
          <p className="label-section mb-4">Herramienta interactiva</p>
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
            ¿Cuánto pierde tu APR<br />por morosidad?
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
            Con el número de socios, el porcentaje de morosos y el consumo promedio,
            esta calculadora proyecta el impacto financiero real de la morosidad
            en tu comité.
          </p>
        </div>
      </section>

      {/* Calculadora */}
      <section style={{ backgroundColor: "var(--niebla)" }} className="py-16 px-5">
        <CalculadoraMorosidad />
      </section>

      <Footer />
    </>
  );
}
