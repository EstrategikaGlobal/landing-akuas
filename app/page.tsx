import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const features = [
  {
    icon: "📋",
    title: "Facturación mensual",
    desc: "Genera cobros automáticos con tarifas por tramos, cargo fijo y costo administrativo. Exención de IVA para socios.",
  },
  {
    icon: "💳",
    title: "Gestión de pagos",
    desc: "Registra pagos en efectivo, transferencia u otros medios. Encadenamiento de saldos automático, sin descuadres.",
  },
  {
    icon: "🔔",
    title: "Alertas de consumo",
    desc: "Detecta automáticamente fugas, consumo cero, sobreconsumo y consumo alto comparando con el promedio de 3 meses.",
  },
  {
    icon: "👤",
    title: "Portal del cliente",
    desc: "Interfaz diseñada para adultos mayores: letra grande, sin tecnicismos. Cada socio ve su saldo, historial y meses pendientes.",
  },
  {
    icon: "📊",
    title: "Informes y exportación",
    desc: "Ranking de morosidad, informe financiero consolidado, exportación a Excel y PDF con el logo y colores de tu APR.",
  },
  {
    icon: "✂️",
    title: "Cortes de servicio",
    desc: "Registra cortes y reposiciones con un clic. El estado del servicio se refleja en todos los módulos al instante.",
  },
  {
    icon: "📱",
    title: "Modo offline",
    desc: "Toma lecturas de medidor en terreno sin conexión. Se sincronizan automáticamente al recuperar internet.",
  },
  {
    icon: "🏢",
    title: "Multi-APR",
    desc: "Un solo sistema para gestionar varias APRs. Cada organización ve únicamente sus propios datos.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    period: "",
    desc: "Para APRs pequeñas que recién comienzan.",
    color: "var(--akuas-secondary)",
    features: [
      "Hasta 50 clientes",
      "Facturación y pagos",
      "Portal del cliente",
      "Exportación Excel",
      "Soporte por correo",
    ],
    cta: "Comenzar gratis",
    highlighted: false,
  },
  {
    name: "APR",
    price: "Consultar",
    period: "",
    desc: "La solución completa para APRs en operación.",
    color: "var(--akuas-primary)",
    features: [
      "Clientes ilimitados",
      "Todo lo de Starter",
      "Alertas de consumo",
      "Cortes de servicio",
      "Exportación PDF con logo",
      "Modo offline en terreno",
      "Informes consolidados",
      "Soporte prioritario",
    ],
    cta: "Solicitar demo",
    highlighted: true,
  },
  {
    name: "Plataforma",
    price: "Consultar",
    period: "",
    desc: "Para federaciones y redes de APRs.",
    color: "#7c3aed",
    features: [
      "Multi-APR ilimitado",
      "Todo lo del plan APR",
      "Dashboard plataforma",
      "Estadísticas cruzadas",
      "Onboarding incluido",
      "SLA garantizado",
    ],
    cta: "Contactar",
    highlighted: false,
  },
];

const audiences = [
  {
    icon: "🏘️",
    title: "Comités de Agua Potable Rural",
    desc: "Creado específicamente para APRs chilenas. Cumple con la estructura tarifaria, exenciones de IVA y nomenclatura de la SUBDERE.",
  },
  {
    icon: "👩‍💼",
    title: "Administradores y tesoreros",
    desc: "Sin necesidad de conocimientos contables avanzados. La interfaz guía paso a paso desde la lectura hasta el cobro.",
  },
  {
    icon: "👴",
    title: "Socios rurales",
    desc: "El portal del cliente está diseñado pensando en adultos mayores: texto grande, lenguaje simple y respuesta inmediata a '¿cuánto debo?'.",
  },
  {
    icon: "🌿",
    title: "APRs de cualquier tamaño",
    desc: "Desde 10 conexiones hasta varios cientos. La plataforma escala sin cambiar de sistema ni perder historial.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--akuas-primary) 0%, #1a6a96 60%, var(--akuas-secondary) 100%)",
        }}
        className="relative pt-32 pb-24 px-4 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <span
            style={{ backgroundColor: "var(--akuas-secondary)" }}
            className="inline-block text-white text-sm font-semibold px-4 py-1 rounded-full mb-6"
          >
            Plataforma para APRs chilenas
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Gestiona tu APR
            <br />
            <span style={{ color: "#9ae87a" }}>sin complicaciones</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            AKUAS es el sistema integral para Comités de Agua Potable Rural. Facturación, cobros,
            alertas de consumo y portal del cliente — todo en una sola plataforma, sin papeles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="btn-primary text-base py-3 px-8"
              style={{ backgroundColor: "white", color: "var(--akuas-primary)" }}
            >
              Solicitar demo gratis
            </a>
            <a href="#caracteristicas" className="btn-outline-white text-base py-3 px-8">
              Ver características
            </a>
          </div>
          <p className="mt-6 text-white/60 text-sm">Sin tarjeta de crédito. Sin letra chica.</p>
        </div>

        <div className="max-w-3xl mx-auto mt-16 grid grid-cols-3 gap-4 relative">
          {[
            { value: "100+", label: "APRs activas" },
            { value: "0 pesos", label: "Para comenzar" },
            { value: "24/7", label: "Portal del cliente" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur rounded-xl py-4 px-2"
            >
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CARACTERÍSTICAS ── */}
      <section
        id="caracteristicas"
        className="py-20 px-4"
        style={{ backgroundColor: "var(--akuas-surface)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              style={{ color: "var(--akuas-secondary)", fontWeight: 600 }}
              className="text-sm uppercase tracking-widest"
            >
              Módulos
            </span>
            <h2
              style={{ color: "var(--akuas-primary)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
            >
              Todo lo que necesita tu APR
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              Cada módulo fue diseñado junto a administradores de APRs reales para resolver los
              problemas del día a día, no los de un texto universitario.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "var(--akuas-primary)" }}
                >
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ── */}
      <section id="para-quien" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              style={{ color: "var(--akuas-secondary)", fontWeight: 600 }}
              className="text-sm uppercase tracking-widest"
            >
              Para quién
            </span>
            <h2
              style={{ color: "var(--akuas-primary)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
            >
              Hecho para la realidad rural chilena
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              No somos un sistema genérico adaptado. AKUAS nació para APRs y conoce sus
              particularidades: tarifas por tramos, socios exentos de IVA, lecturas en terreno y
              socios que preguntan por WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex gap-5 items-start p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
              >
                <div
                  className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl shrink-0"
                  style={{ backgroundColor: "var(--akuas-surface)" }}
                >
                  {a.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ color: "var(--akuas-primary)" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl p-8 text-white text-center"
            style={{
              background:
                "linear-gradient(135deg, var(--akuas-primary), var(--akuas-secondary))",
            }}
          >
            <h3 className="text-2xl font-bold mb-3">¿Tu APR no tiene computador?</h3>
            <p className="text-white/85 max-w-xl mx-auto text-base leading-relaxed">
              AKUAS funciona desde cualquier teléfono o tablet. Las lecturas de medidor se pueden
              registrar offline en terreno y se sincronizan cuando haya conexión.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <section
        id="precios"
        className="py-20 px-4"
        style={{ backgroundColor: "var(--akuas-surface)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              style={{ color: "var(--akuas-secondary)", fontWeight: 600 }}
              className="text-sm uppercase tracking-widest"
            >
              Planes
            </span>
            <h2
              style={{ color: "var(--akuas-primary)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
            >
              Elige el plan para tu APR
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base">
              Comienza gratis. Escala cuando lo necesites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl flex flex-col ${
                  plan.highlighted
                    ? "shadow-xl scale-105"
                    : "bg-white shadow-sm border border-gray-100"
                }`}
                style={
                  plan.highlighted
                    ? { backgroundColor: "var(--akuas-primary)" }
                    : {}
                }
              >
                {plan.highlighted && (
                  <div
                    className="text-center text-xs font-bold py-2 rounded-t-2xl"
                    style={{ backgroundColor: "var(--akuas-secondary)", color: "white" }}
                  >
                    MAS POPULAR
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <p
                    className={`font-bold text-sm uppercase tracking-widest mb-1 ${
                      plan.highlighted ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p
                    className={`text-4xl font-bold mb-1 ${plan.highlighted ? "text-white" : ""}`}
                    style={!plan.highlighted ? { color: plan.color } : {}}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlighted ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-start gap-2 text-sm ${
                          plan.highlighted ? "text-white/90" : "text-gray-700"
                        }`}
                      >
                        <span
                          className="mt-0.5 shrink-0 text-base"
                          style={{
                            color: plan.highlighted ? "#9ae87a" : "var(--akuas-secondary)",
                          }}
                        >
                          ✓
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className={`text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all block ${
                      plan.highlighted ? "hover:opacity-90" : "border-2"
                    }`}
                    style={
                      plan.highlighted
                        ? { backgroundColor: "white", color: "var(--akuas-primary)" }
                        : { borderColor: plan.color, color: plan.color }
                    }
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Los precios del plan APR y Plataforma se definen según el número de conexiones y
            necesidades de cada organización.{" "}
            <a
              href="#contacto"
              style={{ color: "var(--akuas-primary)" }}
              className="font-medium hover:underline"
            >
              Conversemos.
            </a>
          </p>
        </div>
      </section>

      {/* ── CONTACTO / CTA FINAL ── */}
      <section
        id="contacto"
        style={{
          background:
            "linear-gradient(135deg, var(--akuas-primary) 0%, #1a6a96 100%)",
        }}
        className="py-20 px-4 text-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solicita una demo gratuita</h2>
          <p className="text-white/80 mb-10 text-base leading-relaxed">
            Te mostramos el sistema con los datos reales de tu APR en una videollamada de 30
            minutos. Sin compromiso.
          </p>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
