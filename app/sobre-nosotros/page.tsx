import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sobre nosotros — akuas",
  description: "akuas nació de observar cómo gestionan su APR los comités de agua potable rural en Chile. Construido para que cada comité opere con la misma rigurosidad que una empresa.",
};

const valores = [
  {
    titulo: "Funcionalidad antes que apariencia",
    desc: "Cada funcionalidad existe porque resuelve un problema real, no para parecer más completo. Si algo no lo usa nadie, no está en el sistema.",
  },
  {
    titulo: "Diseñado para quien lo usa, no para quien lo vende",
    desc: "La tesorera del comité no debería necesitar un curso. El socio adulto mayor no debería necesitar lentes nuevos para leer su saldo.",
  },
  {
    titulo: "Los datos son del APR",
    desc: "El comité puede exportar todo su historial en cualquier momento — clientes, lecturas, pagos, movimientos. Sin retención de datos, sin cobros de salida.",
  },
  {
    titulo: "Confiabilidad sobre velocidad",
    desc: "Preferimos que el sistema haga menos cosas y las haga bien, a que prometa todo y falle en lo fundamental: que el saldo cuadre.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--akua)" }}
        className="pt-32 pb-16 px-5"
      >
        <div className="max-w-4xl mx-auto">
          <p className="label-section mb-4">Sobre nosotros</p>
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
            Construido desde adentro de un APR.
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
            No es un producto de software que se adaptó para APRs. akuas se construyó
            observando cómo operan realmente los comités de agua potable rural en Chile.
          </p>
        </div>
      </section>

      {/* Origen */}
      <section style={{ backgroundColor: "white" }} className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="label-section mb-4">El origen</p>
          <h2
            style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              color: "var(--tinta)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
            }}
            className="text-2xl sm:text-3xl"
          >
            El problema era siempre el mismo.
          </h2>
          <div
            className="space-y-5"
            style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "1rem",
              color: "rgba(26,31,41,0.7)",
              lineHeight: 1.75,
            }}
          >
            <p>
              La tesorera del comité trabaja con una planilla Excel que heredó de quien
              la antecedió. Cada mes sobreescribe las columnas del mes anterior. Si alguien
              pregunta qué consumió en marzo de 2023, la respuesta es "ya no está".
            </p>
            <p>
              La facturación mensual tarda 3 días. Se calcula a mano el consumo de cada
              socio, se aplica la tarifa por tramos con una fórmula que nadie sabe bien
              si está correcta, y se suma el cargo fijo. El IVA se aplica o no según
              recuerde quién ingresó a ese socio hace años.
            </p>
            <p>
              Los socios llaman al presidente para preguntar cuánto deben. El presidente
              llama a la tesorera. La tesorera busca en el Excel. A veces el número
              coincide con lo que recuerda el socio. A veces no.
            </p>
            <p>
              En zonas con cobertura intermitente, el operador toma lecturas en papel
              y las transcribe de vuelta al Excel cuando llega. Las correcciones no
              quedan registradas en ningún lado.
            </p>
            <p>
              akuas existe para que ningún comité tenga que trabajar así.
            </p>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section style={{ backgroundColor: "var(--niebla)" }} className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "var(--akua)" }}
          >
            <p className="label-section mb-4">Misión</p>
            <p
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontWeight: 500,
                fontSize: "1.4rem",
                letterSpacing: "-0.025em",
                lineHeight: 1.45,
              }}
            >
              Que cada comité de agua rural en Chile pueda gestionar su APR con
              la misma rigurosidad que una empresa, sin necesitar a un contador.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section style={{ backgroundColor: "white" }} className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="label-section mb-4">Valores</p>
          <h2
            style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              color: "var(--tinta)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              marginBottom: "2rem",
            }}
            className="text-2xl sm:text-3xl"
          >
            Lo que guía cada decisión de producto.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {valores.map((v) => (
              <div
                key={v.titulo}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "var(--niebla)",
                  border: "1px solid rgba(42,111,135,0.1)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "3px",
                    backgroundColor: "var(--brote)",
                    borderRadius: "2px",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--tinta)",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  {v.titulo}
                </h3>
                <p
                  style={{
                    color: "rgba(26,31,41,0.65)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section style={{ backgroundColor: "var(--akua)" }} className="py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-section mb-4">Hablemos</p>
          <h2
            style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              color: "var(--niebla)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
            className="text-3xl sm:text-4xl"
          >
            ¿Reconocés tu APR en alguna de estas situaciones?
          </h2>
          <p
            style={{
              color: "rgba(242,238,229,0.7)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "1rem",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            Te mostramos el sistema en 30 minutos. Sin compromiso y sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-niebla text-base py-3 px-10">
              Solicitar demo
            </Link>
            <a
              href="https://wa.me/56962104488"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-niebla text-base py-3 px-10"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
