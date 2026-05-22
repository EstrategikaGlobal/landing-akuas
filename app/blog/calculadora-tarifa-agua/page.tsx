import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CalculadoraTarifa from "../../components/CalculadoraTarifa";

export const metadata = {
  title: "Calculadora de tarifa de agua — akuas",
  description: "Calcula cuánto debería cobrar tu APR por el consumo mensual de agua. Usa los 6 tramos tarifarios reales con cargo fijo e IVA.",
};

export default function CalculadoraTarifaPage() {
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
            ¿Cuánto debería cobrar<br />tu APR por m³?
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
            Ingresá el consumo en m³ del mes, indicá si el socio está exento de IVA
            y la calculadora aplica los 6 tramos tarifarios reales que usa akuas.
          </p>
        </div>
      </section>

      {/* Contexto tarifario */}
      <section style={{ backgroundColor: "white" }} className="py-10 px-5">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-xl p-5 mb-2"
            style={{
              backgroundColor: "var(--niebla)",
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
              Estructura tarifaria por tramos
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { rango: "0–20 m³",    precio: "$850/m³" },
                { rango: "21–40 m³",   precio: "$1.060/m³" },
                { rango: "41–60 m³",   precio: "$1.275/m³" },
                { rango: "61–80 m³",   precio: "$1.490/m³" },
                { rango: "81–100 m³",  precio: "$1.700/m³" },
                { rango: ">100 m³",    precio: "$1.910/m³" },
              ].map((t) => (
                <div
                  key={t.rango}
                  className="flex items-center justify-between rounded-lg px-3 py-2"
                  style={{ backgroundColor: "white", border: "1px solid rgba(26,31,41,0.06)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: "0.78rem",
                      color: "rgba(26,31,41,0.5)",
                    }}
                  >
                    {t.rango}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: "0.85rem",
                      color: "var(--akua)",
                      fontWeight: 500,
                    }}
                  >
                    {t.precio}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section style={{ backgroundColor: "white" }} className="pb-16 px-5">
        <CalculadoraTarifa />
      </section>

      <Footer />
    </>
  );
}
