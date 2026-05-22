import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

/* ── Datos de contenido ── */

const modulos = [
  {
    num: "01",
    titulo: "Facturación mensual",
    desc: "Tarifa por tramos, cargo fijo y costo administrativo. Exención de IVA para socios. Todo calculado desde la lectura.",
  },
  {
    num: "02",
    titulo: "Gestión de pagos",
    desc: "Registra pagos y el saldo se encadena automáticamente. Sin descuadres contables.",
  },
  {
    num: "03",
    titulo: "Alertas de consumo",
    desc: "Detecta fugas, consumo cero, sobreconsumo y consumo alto comparando contra el promedio de tres meses.",
  },
  {
    num: "04",
    titulo: "Portal del socio",
    desc: "Letra grande, lenguaje simple. Cada socio ve cuánto debe, su historial y los meses pendientes.",
  },
  {
    num: "05",
    titulo: "Informes y exportación",
    desc: "Ranking de morosidad, informe financiero consolidado, Excel y PDF con el logo de tu APR.",
  },
  {
    num: "06",
    titulo: "Cortes de servicio",
    desc: "Registra un corte o reposición con un clic. El estado se refleja en todos los módulos.",
  },
  {
    num: "07",
    titulo: "Lecturas offline",
    desc: "Toma lecturas en terreno sin conexión. Se sincronizan al recuperar internet, sin duplicados.",
  },
  {
    num: "08",
    titulo: "Multi-APR",
    desc: "Gestiona varias APRs desde un solo sistema. Cada organización ve únicamente sus propios datos.",
  },
];

const audiencias = [
  {
    titulo: "Comités de Agua Potable Rural",
    desc: "Construido para la estructura tarifaria chilena, exenciones de IVA y la nomenclatura que ya usa tu comité.",
  },
  {
    titulo: "Presidentas y tesoreras",
    desc: "Sin cursos previos. La interfaz guía desde la lectura hasta el cobro en pasos claros.",
  },
  {
    titulo: "Socios rurales",
    desc: "El portal está diseñado para adultos mayores: texto grande y respuesta inmediata a '¿cuánto debo?'.",
  },
  {
    titulo: "APRs de cualquier tamaño",
    desc: "Desde diez conexiones hasta varios cientos. La plataforma escala sin cambiar de sistema.",
  },
];

const planes = [
  {
    nombre: "Starter",
    precio: "Gratis",
    desc: "Para APRs que recién comienzan a digitalizar.",
    items: [
      "Hasta 50 socios",
      "Facturación y pagos",
      "Portal del socio",
      "Exportación Excel",
      "Soporte por correo",
    ],
    destacado: false,
    cta: "Comenzar gratis",
  },
  {
    nombre: "APR",
    precio: "Consultar",
    desc: "La solución completa para APRs en operación.",
    items: [
      "Socios ilimitados",
      "Todo lo de Starter",
      "Alertas de consumo",
      "Cortes de servicio",
      "PDF con logo y colores propios",
      "Lecturas offline en terreno",
      "Informes consolidados",
      "Soporte prioritario",
    ],
    destacado: true,
    cta: "Solicitar demo",
  },
  {
    nombre: "Plataforma",
    precio: "Consultar",
    desc: "Para federaciones y redes de APRs.",
    items: [
      "Multi-APR ilimitado",
      "Todo lo del plan APR",
      "Dashboard plataforma",
      "Estadísticas cruzadas",
      "Onboarding incluido",
      "SLA garantizado",
    ],
    destacado: false,
    cta: "Contactar",
  },
];

/* ── Componente principal ── */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ══ HERO ══ */}
      <section
        style={{ backgroundColor: "var(--akua)" }}
        className="relative pt-32 pb-24 px-5 overflow-hidden"
      >
        {/* Patrón sutil — anillos concéntricos al 6% */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(242,238,229,0.18) 1px, transparent 1px),
                              radial-gradient(circle, rgba(242,238,229,0.08) 8px, transparent 8px),
                              radial-gradient(circle, rgba(242,238,229,0.04) 16px, transparent 16px)`,
            backgroundSize: "80px 80px",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative">
          <p className="label-section mb-5">El sistema del agua rural de Chile</p>

          <h1
            style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              color: "var(--niebla)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
            className="text-5xl sm:text-6xl md:text-7xl mb-6"
          >
            Menos planilla,<br />
            <em style={{ color: "var(--ocre)", fontStyle: "italic" }}>más comunidad.</em>
          </h1>

          <p
            style={{
              color: "rgba(242,238,229,0.8)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
            className="max-w-2xl mx-auto mb-10"
          >
            Su comité no aprende software. Lo operamos juntas. Facturación, cobros,
            alertas de consumo y portal del socio — todo en una sola plataforma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="btn-niebla text-base py-3 px-8">
              Solicitar demo gratis
            </a>
            <a href="#modulos" className="btn-outline-niebla text-base py-3 px-8">
              Ver módulos
            </a>
          </div>
          <p
            style={{ color: "rgba(242,238,229,0.45)", fontFamily: "var(--font-manrope, sans-serif)" }}
            className="mt-5 text-sm"
          >
            Sin tarjeta de crédito. Sin letra chica.
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-2xl mx-auto mt-16 grid grid-cols-3 gap-3 relative">
          {[
            { valor: "100+", etiqueta: "APRs activas" },
            { valor: "Gratis", etiqueta: "Para comenzar" },
            { valor: "24/7", etiqueta: "Portal del socio" },
          ].map((s) => (
            <div
              key={s.etiqueta}
              className="text-center rounded-xl py-4 px-2"
              style={{ backgroundColor: "rgba(242,238,229,0.08)" }}
            >
              <p
                style={{
                  color: "var(--niebla)",
                  fontFamily: "var(--font-bricolage, sans-serif)",
                  fontWeight: 500,
                }}
                className="text-2xl sm:text-3xl"
              >
                {s.valor}
              </p>
              <p
                style={{ color: "rgba(242,238,229,0.6)", fontFamily: "var(--font-manrope, sans-serif)" }}
                className="text-xs mt-1"
              >
                {s.etiqueta}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MÓDULOS ══ */}
      <section id="modulos" style={{ backgroundColor: "var(--niebla)" }} className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="label-section mb-3">Módulos</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--tinta)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl max-w-xl"
            >
              Construido desde adentro de un APR.
            </h2>
            <p
              style={{ color: "rgba(26,31,41,0.6)", fontFamily: "var(--font-manrope, sans-serif)" }}
              className="mt-4 text-base max-w-lg leading-relaxed"
            >
              Cada módulo resuelve un problema real de la gestión diaria — no un caso
              de estudio universitario.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modulos.map((m) => (
              <div
                key={m.num}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ backgroundColor: "white", border: "1px solid rgba(26,31,41,0.07)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.7rem",
                    color: "var(--ocre)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {m.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--akua)",
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  {m.titulo}
                </h3>
                <p
                  style={{
                    color: "rgba(26,31,41,0.65)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARA QUIÉN ══ */}
      <section
        id="para-quien"
        className="py-20 px-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="label-section mb-3">Para quién</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--tinta)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl max-w-xl"
            >
              Hecho para la realidad rural chilena.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {audiencias.map((a) => (
              <div
                key={a.titulo}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "var(--niebla)",
                  border: "1px solid rgba(42,111,135,0.1)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--akua)",
                    fontWeight: 500,
                    fontSize: "1.125rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {a.titulo}
                </h3>
                <p
                  style={{
                    color: "rgba(26,31,41,0.7)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight offline */}
          <div
            className="mt-8 rounded-2xl p-8"
            style={{ backgroundColor: "var(--akua)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontWeight: 500,
                fontSize: "1.35rem",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              ¿Tu APR trabaja en zona sin señal?
            </p>
            <p
              style={{
                color: "rgba(242,238,229,0.8)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                maxWidth: "560px",
              }}
            >
              akuas funciona desde cualquier celular o tablet. Las lecturas de medidor
              se registran offline en terreno y se sincronizan cuando hay conexión.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PLANES ══ */}
      <section id="planes" style={{ backgroundColor: "var(--niebla)" }} className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="label-section mb-3">Planes</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--tinta)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl"
            >
              Comienza gratis. Escala cuando lo necesites.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">
            {planes.map((p) => (
              <div
                key={p.nombre}
                className={`rounded-2xl flex flex-col ${p.destacado ? "sm:-mt-4" : ""}`}
                style={
                  p.destacado
                    ? { backgroundColor: "var(--akua)", boxShadow: "0 8px 32px rgba(42,111,135,0.25)" }
                    : { backgroundColor: "white", border: "1px solid rgba(26,31,41,0.08)" }
                }
              >
                {p.destacado && (
                  <div
                    className="text-center text-xs font-semibold py-2 rounded-t-2xl"
                    style={{
                      backgroundColor: "var(--ocre)",
                      color: "var(--tinta)",
                      fontFamily: "var(--font-jetbrains, monospace)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    MAS POPULAR
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: p.destacado ? "rgba(242,238,229,0.6)" : "var(--ocre)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.nombre}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-bricolage, sans-serif)",
                      fontSize: "2.5rem",
                      fontWeight: 500,
                      color: p.destacado ? "var(--niebla)" : "var(--akua)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.precio}
                  </p>
                  <p
                    style={{
                      color: p.destacado ? "rgba(242,238,229,0.7)" : "rgba(26,31,41,0.55)",
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "0.875rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {p.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5"
                        style={{
                          color: p.destacado ? "rgba(242,238,229,0.9)" : "rgba(26,31,41,0.75)",
                          fontFamily: "var(--font-manrope, sans-serif)",
                          fontSize: "0.875rem",
                        }}
                      >
                        <span
                          style={{
                            color: p.destacado ? "var(--ocre)" : "var(--brote)",
                            marginTop: "2px",
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className="text-center py-3 px-6 rounded-xl font-semibold text-sm block transition-opacity hover:opacity-85"
                    style={
                      p.destacado
                        ? {
                            backgroundColor: "var(--niebla)",
                            color: "var(--akua)",
                            fontFamily: "var(--font-manrope, sans-serif)",
                          }
                        : {
                            backgroundColor: "var(--akua)",
                            color: "var(--niebla)",
                            fontFamily: "var(--font-manrope, sans-serif)",
                          }
                    }
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              color: "rgba(26,31,41,0.5)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "0.875rem",
            }}
            className="text-center mt-7"
          >
            Los planes APR y Plataforma se definen según el número de conexiones.{" "}
            <a
              href="#contacto"
              style={{ color: "var(--akua)", fontWeight: 600 }}
              className="hover:underline"
            >
              Conversemos.
            </a>
          </p>
        </div>
      </section>

      {/* ══ CONTACTO ══ */}
      <section
        id="contacto"
        style={{ backgroundColor: "var(--akua)" }}
        className="py-20 px-5"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="label-section mb-3">Contacto</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
              className="text-3xl sm:text-4xl mb-3"
            >
              Solicita una demo gratuita.
            </h2>
            <p
              style={{
                color: "rgba(242,238,229,0.75)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              Mostramos el sistema con los datos reales de tu APR en
              una videollamada de 30 minutos. Sin compromiso.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
