import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

/* ── Datos ── */

const problemas = [
  {
    titulo: "Planillas Excel sin historial",
    desc: "Cada mes se sobreescribe la planilla anterior. Si alguien pregunta qué consumió en marzo de 2024, no hay respuesta. Las correcciones no quedan registradas y no hay auditoría.",
  },
  {
    titulo: "Cobros a mano que generan descuadres",
    desc: "El tesorero suma columnas en Excel y el total nunca coincide con el banco. Un pago mal registrado afecta todos los saldos siguientes. Cerrar la facturación mensual tarda 3 días.",
  },
  {
    titulo: "Socios que no saben cuánto deben",
    desc: "El socio llama al presidente para preguntar su saldo. La tesorera revisa papel o Excel y responde de memoria. No hay forma de que el socio consulte su información directamente.",
  },
];

const funcionalidades = [
  {
    num: "01",
    titulo: "Facturación por tramos",
    desc: "6 tramos tarifarios calculados desde la lectura. Cargo fijo, costo administrativo e IVA aplicados según socio. Todo en segundos.",
  },
  {
    num: "02",
    titulo: "Alertas automáticas",
    desc: "Detecta posibles fugas (3x promedio), consumo alto (2x), sobreconsumo (1.5x) y consumo cero. Comparado contra el promedio de los 3 meses anteriores.",
  },
  {
    num: "03",
    titulo: "Portal del socio",
    desc: "Texto en 16px mínimo, botones de 48px. El socio ve en 64px cuánto debe pagar. Historial de consumo, pagos y anuncios del comité.",
  },
  {
    num: "04",
    titulo: "Lecturas offline",
    desc: "El medidor se registra sin internet. La app guarda en el dispositivo y sincroniza al recuperar señal. Sin duplicados por constraint único en la base de datos.",
  },
  {
    num: "05",
    titulo: "Cortes con carta PDF",
    desc: "Candidatos a corte por morosidad o sobreconsumo. Carta legal con plazo de 7 días, datos del APR y firma del presidente. Notificación por email automática.",
  },
  {
    num: "06",
    titulo: "Multi-APR",
    desc: "Cada APR es un tenant independiente con sus propios datos, logo y colores. El panel plataforma muestra estadísticas cruzadas de todas las organizaciones.",
  },
];

const estadisticas = [
  { valor: "6",     etiqueta: "tramos tarifarios configurables" },
  { valor: "4",     etiqueta: "tipos de alerta automática" },
  { valor: "100%",  etiqueta: "offline para lecturas en terreno" },
  { valor: "0 CLP", etiqueta: "para comenzar" },
];

const planItems = [
  "Socios ilimitados",
  "Facturación mensual por tramos",
  "Gestión de pagos con encadenamiento",
  "Alertas de consumo automáticas",
  "Portal del socio senior-first",
  "Cortes de servicio con carta PDF",
  "Lecturas offline en terreno",
  "Informes financieros y Excel/PDF",
  "Auditoría completa de cambios",
  "Multi-APR si se requiere",
  "Branding propio (logo y colores)",
  "Soporte prioritario",
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
            className="text-4xl sm:text-6xl md:text-7xl mb-6"
          >
            El sistema de gestión para APRs<br />
            <em style={{ color: "var(--ocre)", fontStyle: "italic" }}>
              que sí funciona en terreno.
            </em>
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
            Facturación por tramos, cobros sin descuadres, alertas de posibles fugas
            y un portal donde cada socio consulta su saldo sin llamar al presidente.
            Diseñado para la realidad de los Comités de Agua Potable Rural chilenos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-niebla text-base py-3 px-8">
              Solicitar demo
            </Link>
            <Link href="/funcionalidades" className="btn-outline-niebla text-base py-3 px-8">
              Ver funcionalidades
            </Link>
          </div>
          <p
            style={{ color: "rgba(242,238,229,0.4)", fontFamily: "var(--font-manrope, sans-serif)" }}
            className="mt-5 text-sm"
          >
            Sin tarjeta de crédito. Sin letra chica.
          </p>
        </div>
      </section>

      {/* ══ EL PROBLEMA ══ */}
      <section style={{ backgroundColor: "white" }} className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="label-section mb-3">El problema</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--tinta)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl max-w-xl"
            >
              Cómo gestionan hoy la mayoría de los APRs en Chile.
            </h2>
            <p
              style={{ color: "rgba(26,31,41,0.55)", fontFamily: "var(--font-manrope, sans-serif)" }}
              className="mt-4 text-base max-w-lg leading-relaxed"
            >
              No es falta de esfuerzo. Son herramientas que nunca se diseñaron
              para esta tarea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemas.map((p) => (
              <div
                key={p.titulo}
                className="rounded-2xl p-7"
                style={{
                  border: "1px solid rgba(212,165,96,0.25)",
                  backgroundColor: "var(--niebla)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "4px",
                    backgroundColor: "var(--ocre)",
                    borderRadius: "2px",
                    marginBottom: "1.25rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--tinta)",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.titulo}
                </h3>
                <p
                  style={{
                    color: "rgba(26,31,41,0.65)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LA SOLUCIÓN ══ */}
      <section style={{ backgroundColor: "var(--niebla)" }} className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="label-section mb-3">La solución</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--tinta)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl max-w-2xl"
            >
              akuas reemplaza la planilla con un sistema que entiende cómo funciona un APR.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              {[
                {
                  titulo: "Lectura a factura en segundos",
                  texto: "Ingresás el m³ actual y el sistema calcula automáticamente el consumo, aplica los 6 tramos tarifarios, suma cargo fijo y costo administrativo, aplica IVA si el socio no es miembro, y genera el movimiento en la cadena contable. Sin fórmulas. Sin errores.",
                },
                {
                  titulo: "Saldo encadenado desde el primer día",
                  texto: "Cada lectura y cada pago actualizan automáticamente el saldo del socio. Si se corrige una lectura pasada, el sistema recomputa toda la cadena. El descuadre contable desaparece.",
                },
                {
                  titulo: "El socio ve su cuenta sin intermediarios",
                  texto: "Portal web accesible desde cualquier celular. Letra grande, lenguaje simple, saldo en 64px. No más llamadas al presidente para preguntar cuánto se debe.",
                },
              ].map((item) => (
                <div key={item.titulo} className="flex gap-5">
                  <div
                    style={{
                      width: "6px",
                      minWidth: "6px",
                      borderRadius: "3px",
                      backgroundColor: "var(--brote)",
                      marginTop: "4px",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-bricolage, sans-serif)",
                        color: "var(--tinta)",
                        fontWeight: 500,
                        fontSize: "1.05rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.titulo}
                    </h3>
                    <p
                      style={{
                        color: "rgba(26,31,41,0.65)",
                        fontFamily: "var(--font-manrope, sans-serif)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "var(--akua)" }}
            >
              <p className="label-section mb-5">Flujo real de facturación</p>
              {[
                "Ingresá la lectura del medidor",
                "El sistema calcula consumo y tarifa por tramos",
                "Aplica cargo fijo e IVA según tipo de socio",
                "Registra el movimiento en la cadena contable",
                "El saldo del socio se actualiza al instante",
                "El socio lo ve en su portal o en el PDF de boleta",
              ].map((paso, i) => (
                <div key={paso} className="flex items-start gap-4 mb-4 last:mb-0">
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      color: "var(--ocre)",
                      fontSize: "0.75rem",
                      minWidth: "1.5rem",
                      paddingTop: "2px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      color: "rgba(242,238,229,0.85)",
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {paso}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FUNCIONALIDADES ══ */}
      <section id="funcionalidades" style={{ backgroundColor: "white" }} className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="label-section mb-3">Funcionalidades</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--tinta)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl max-w-xl"
            >
              Seis módulos. Seis problemas reales resueltos.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {funcionalidades.map((f) => (
              <div
                key={f.num}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{
                  backgroundColor: "var(--niebla)",
                  border: "1px solid rgba(26,31,41,0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.7rem",
                    color: "var(--ocre)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {f.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--akua)",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                  }}
                >
                  {f.titulo}
                </h3>
                <p
                  style={{
                    color: "rgba(26,31,41,0.65)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/funcionalidades"
              className="btn-akua"
              style={{ display: "inline-block" }}
            >
              Ver todos los módulos en detalle
            </Link>
          </div>
        </div>
      </section>

      {/* ══ ESTADÍSTICAS ══ */}
      <section style={{ backgroundColor: "var(--akua)" }} className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="label-section mb-3">En números</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl"
            >
              Construido con datos reales del sistema.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {estadisticas.map((e) => (
              <div
                key={e.etiqueta}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: "rgba(242,238,229,0.08)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--ocre)",
                    fontSize: "2.5rem",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {e.valor}
                </p>
                <p
                  style={{
                    color: "rgba(242,238,229,0.65)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                  }}
                >
                  {e.etiqueta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLANES ══ */}
      <section id="planes" style={{ backgroundColor: "var(--niebla)" }} className="py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <p className="label-section mb-3">Plan</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--tinta)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl mb-3"
            >
              Un plan. Todo incluido.
            </h2>
            <p
              style={{
                color: "rgba(26,31,41,0.55)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "1rem",
              }}
            >
              Sin versiones recortadas. Sin funcionalidades bloqueadas.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(42,111,135,0.15)" }}
          >
            <div
              className="px-8 py-4 flex items-center justify-between"
              style={{ backgroundColor: "var(--akua)" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(242,238,229,0.6)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Plan APR
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "var(--niebla)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  Consultar
                </p>
              </div>
              <div
                className="px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: "var(--ocre)",
                  color: "var(--tinta)",
                  fontFamily: "var(--font-jetbrains, monospace)",
                  letterSpacing: "0.08em",
                }}
              >
                PRECIO POR CONEXIONES
              </div>
            </div>

            <div
              className="p-8"
              style={{ backgroundColor: "white" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {planItems.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span style={{ color: "var(--brote)", fontWeight: 700, marginTop: "1px" }}>✓</span>
                    <span
                      style={{
                        color: "rgba(26,31,41,0.75)",
                        fontFamily: "var(--font-manrope, sans-serif)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contacto"
                className="block text-center py-4 rounded-xl font-semibold text-base transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "var(--akua)",
                  color: "var(--niebla)",
                  fontFamily: "var(--font-manrope, sans-serif)",
                }}
              >
                Solicitar demo
              </Link>

              <p
                style={{
                  color: "rgba(26,31,41,0.4)",
                  fontFamily: "var(--font-manrope, sans-serif)",
                  fontSize: "0.8rem",
                }}
                className="text-center mt-4"
              >
                El precio varía según el número de conexiones del APR. Conversemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACTO ══ */}
      <section
        id="contacto"
        style={{ backgroundColor: "var(--akua)" }}
        className="py-20 px-5"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="label-section mb-4">Contacto</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
              className="text-3xl sm:text-4xl mb-4"
            >
              Solicita una demo gratuita.
            </h2>
            <p
              style={{
                color: "rgba(242,238,229,0.75)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "1rem",
                lineHeight: 1.65,
                marginBottom: "2rem",
              }}
            >
              Mostramos el sistema con los datos reales de tu APR en una
              videollamada de 30 minutos. Sin compromiso.
            </p>

            <a
              href="https://wa.me/56962104488"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-4 group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    color: "rgba(242,238,229,0.55)",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  WhatsApp
                </p>
                <p
                  style={{
                    color: "var(--niebla)",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "1rem",
                  }}
                >
                  +56 9 6210 4488
                </p>
              </div>
            </a>

            <a
              href="mailto:hola@akuas.cl"
              className="flex items-center gap-3 group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(242,238,229,0.12)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--niebla)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    color: "rgba(242,238,229,0.55)",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    color: "var(--niebla)",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "1rem",
                  }}
                >
                  hola@akuas.cl
                </p>
              </div>
            </a>

            <p
              style={{
                color: "rgba(242,238,229,0.45)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.85rem",
                marginTop: "2rem",
              }}
            >
              Respondemos en menos de 24 horas. Si es urgente, escríbenos por WhatsApp.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
