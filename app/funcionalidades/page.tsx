import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Funcionalidades — akuas",
  description: "Cada módulo de akuas resuelve un problema real de la gestión de APRs: facturación, pagos, alertas, portal del socio, cortes, offline y multi-tenant.",
};

const modulos = [
  {
    num: "01",
    titulo: "Facturación mensual",
    subtitulo: "Desde la lectura al cobro, sin intervención manual.",
    parrafos: [
      "akuas aplica la estructura tarifaria oficial: 6 tramos de consumo con precio por m³ desde $850 (0–20 m³) hasta $1.910 (más de 100 m³). Al ingresar la lectura del medidor, el sistema calcula automáticamente el consumo, determina en qué tramos cae y calcula el subtotal.",
      "El cargo fijo mensual ($10.000 por defecto, configurable), el costo administrativo sin consumo ($4.000) y el cargo de habilitación para primera conexión ($15.000) se suman antes de aplicar IVA. Los socios están exentos de IVA; los no-socios pagan 19% sobre el total.",
      "Los seis tipos de lectura cubren todos los casos reales: Normal, Inicial (primera conexión), Nuevo Cliente (sin historial previo en el sistema), Cambio de Medidor, Estimada y Relectura. Cada tipo tiene su lógica propia: el Inicial cobra habilitación sin consumo, el Nuevo Cliente arranca con lectura anterior en 0 sin habilitación.",
    ],
    items: [
      "6 tramos tarifarios: $850 – $1.910 por m³",
      "Cargo fijo, cargo habilitación y costo administrativo configurables",
      "Exención automática de IVA para socios",
      "6 tipos de lectura con lógica diferenciada",
      "Corrección de lecturas con cascada de 1 nivel y recompute de saldos",
      "Anulación de lectura con mantenimiento de cadena contable",
      "Importación masiva desde Excel con validación previa completa",
    ],
  },
  {
    num: "02",
    titulo: "Gestión de pagos",
    subtitulo: "Saldo encadenado. Ningún pago queda en el aire.",
    parrafos: [
      "Cada pago registrado genera un movimiento en la cadena contable del socio. El saldo se actualiza automáticamente: monto_abono resta de la deuda acumulada. Si el pago se elimina, el sistema revierte el movimiento y recomputa toda la cadena desde el origen.",
      "El sistema soporta tres métodos de pago: efectivo, transferencia bancaria y pago online. Cuando el método es transferencia u online, aparecen campos opcionales para referencia bancaria y fecha banco — útiles para conciliación bancaria posterior sin flujo automatizado.",
      "Para cada pago se puede generar un recibo PDF con folio único (REC-xxxxxx), logo y colores del APR, y datos completos del movimiento. El recibo se imprime o envía digitalmente al socio.",
    ],
    items: [
      "Encadenamiento automático de saldos sin descuadre",
      "Recibo PDF con folio único por pago",
      "Tres métodos de pago: efectivo, transferencia, online",
      "Campos de conciliación bancaria opcionales",
      "Importación masiva de pagos desde Excel",
      "Eliminación con reversión completa de movimiento y saldo",
      "Tres capas de validación anti-duplicados",
    ],
  },
  {
    num: "03",
    titulo: "Alertas automáticas de consumo",
    subtitulo: "La fuga que el medidor registra antes de que el socio lo note.",
    parrafos: [
      "akuas compara el consumo del mes actual contra el promedio de los 3 meses anteriores. Si el consumo es 3 veces o más el promedio, el sistema levanta una alerta de posible fuga — esto puede representar miles de pesos adicionales al mes para el socio y pérdidas de red para el APR.",
      "Las alertas se clasifican en cuatro niveles: Posible Fuga (≥3x promedio), Consumo Alto (≥2x promedio), Sobreconsumo (≥1.5x promedio o más de 50 m³ — umbral configurable) y Consumo Cero (0 m³ cuando el promedio histórico supera 5 m³).",
      "El dashboard administrativo muestra todas las alertas del período con nombre de socio, consumo actual, consumo promedio y porcentaje de desviación. El administrador puede actuar directamente desde la alerta: revisar la lectura, contactar al socio o iniciar un proceso de corte.",
    ],
    items: [
      "4 niveles: Fuga, Consumo Alto, Sobreconsumo, Cero",
      "Comparación automática contra promedio de 3 meses",
      "Umbral de sobreconsumo configurable (default: 50 m³)",
      "Solo incluye meses desde la fecha de ingreso al APR",
      "Vista unificada de alertas en el dashboard admin",
      "Información de consumo actual, promedio y desviación",
    ],
  },
  {
    num: "04",
    titulo: "Portal del socio",
    subtitulo: "Diseñado para que un adulto mayor pueda usarlo sin ayuda.",
    parrafos: [
      "El portal del socio tiene una regla de diseño no negociable: cada elemento de acción tiene mínimo 48px de alto, el texto de cuerpo tiene mínimo 16px, y el saldo actual se muestra en 64px con la pregunta directa '¿Cuánto debo pagar?'. No hay que buscar el número ni interpretar tablas.",
      "El historial de consumo muestra los últimos 13 meses en un gráfico de área. El historial de movimientos lista cronológicamente todos los cargos y abonos con fechas y montos. La sección de meses pendientes muestra exactamente qué meses tienen deuda, sin aproximaciones FIFO — coincide exacto con el mes_cancelado de cada pago.",
      "El socio puede ver los anuncios vigentes del comité, descargar su cartola en PDF y solicitar cambio de datos de contacto. Todo desde el mismo celular que usa para WhatsApp.",
    ],
    items: [
      "Saldo en 64px: '¿Cuánto debo pagar?'",
      "Texto mínimo 16px, botones mínimo 48px",
      "Historial de consumo: área chart 13 meses",
      "Meses con saldo pendiente por coincidencia exacta",
      "Historial completo de movimientos y pagos",
      "Anuncios del comité (informativo, alerta, urgente)",
      "Descarga de cartola en PDF",
      "Solicitud de cambio de datos",
    ],
  },
  {
    num: "05",
    titulo: "Cortes de servicio",
    subtitulo: "Del candidato al corte a la carta legal, en un flujo.",
    parrafos: [
      "El módulo de cortes identifica automáticamente los candidatos: socios con morosidad de 2 o más meses o consumo igual o superior a 100 m³. El listado incluye deuda total, meses adeudados y última lectura para que el directivo tome la decisión con información completa.",
      "Al registrar un corte, el sistema cambia el estado del servicio a 'Cortado' y genera una carta PDF legal con el plazo reglamentario de 7 días, los datos del APR, nombre del socio, monto adeudado, instrucciones de pago y espacio para firma del presidente. La carta se puede imprimir o enviar por email automáticamente.",
      "La reconexión se registra con el cobro de $25.000 de reposición, que se suma al saldo pendiente del socio. El estado vuelve a 'Activo' y el sistema registra la fecha de reconexión para el historial.",
    ],
    items: [
      "Candidatos automáticos: morosidad ≥2 meses o consumo ≥100 m³",
      "Carta de corte PDF con datos legales y firma",
      "Notificación por email al momento del corte",
      "Reconexión con cobro automático de $25.000",
      "Estado del servicio reflejado en todos los módulos",
      "Tres estados: Activo, Cortado, Suspendido",
    ],
  },
  {
    num: "06",
    titulo: "Dashboard administrativo",
    subtitulo: "El resumen financiero del APR en una pantalla.",
    parrafos: [
      "El dashboard muestra en tiempo real: total de clientes activos, deuda total acumulada, eficiencia de cobranza (% pagado sobre total facturado), metros cúbicos distribuidos en el período y pérdidas de red estimadas. La cobertura de lecturas del mes indica qué porcentaje de socios ya tiene factura emitida.",
      "El ranking de morosidad muestra los 5 mayores deudores con monto, meses adeudados y fecha del último pago. La antigüedad de deuda clasifica a todos los socios en cuatro categorías: al día, 1 mes de atraso, 2-3 meses y crítico (más de 3 meses), con totales por categoría.",
      "El módulo de detección de desajuste contable compara la suma de saldos almacenados contra el cálculo independiente de total facturado menos total pagado. Si hay diferencia, muestra un banner rojo con botón 'Recomputar saldos' que corrige toda la cadena de todos los socios en secuencia.",
    ],
    items: [
      "Métricas: deuda total, eficiencia cobranza, m³ distribuidos",
      "Cobertura de lecturas del mes (%)",
      "Top 5 deudores con detalle",
      "Antigüedad de deuda por categorías",
      "Detección y corrección de desajuste contable",
      "Actividad reciente del sistema",
      "Gastos operativos por categoría",
      "Exportación a Excel y PDF en todas las secciones",
    ],
  },
  {
    num: "07",
    titulo: "Lecturas offline",
    subtitulo: "El medidor no espera señal de celular.",
    parrafos: [
      "El módulo de lecturas funciona completamente sin conexión a internet. Al abrir la aplicación con conexión, el sistema descarga la lista de socios, la última lectura de cada medidor y las tarifas vigentes en el dispositivo (IndexedDB). En terreno, sin señal, el operador registra lecturas normalmente y el sistema calcula consumo, tramos y total localmente.",
      "Al recuperar internet, el operador sincroniza manualmente. El sistema verifica en la base de datos si ya existe una lectura para ese socio y mes (evita duplicados en zonas con cobertura intermitente). Si otro dispositivo ya sincronizó la misma lectura, la marca como sincronizada sin duplicar.",
      "La red de seguridad final es un índice único parcial en la base de datos: ninguna combinación de id_cliente + año_mes puede repetirse para lecturas vigentes (no anuladas), sin importar qué pase en el código. El sistema rechaza el duplicado a nivel de base de datos.",
    ],
    items: [
      "Funciona sin conexión (IndexedDB)",
      "Cálculo local de tarifas y total",
      "Dedup automático por constraint único en DB",
      "Lista de socios y últimas lecturas cacheadas",
      "Sync manual al recuperar internet",
      "Foto del medidor opcional (sube al sincronizar)",
      "Solo lecturas offline; pagos siempre requieren conexión",
    ],
  },
  {
    num: "08",
    titulo: "Multi-tenant",
    subtitulo: "Cada APR aislada. Una plataforma centralizada.",
    parrafos: [
      "Cada APR que se incorpora a akuas tiene su propio tenant: datos completamente separados, logo propio, colores de marca, nombre corto y configuración de tarifas independiente. El aislamiento se implementa con Row Level Security (RLS) en cada tabla — ninguna consulta puede ver datos de otra organización.",
      "Los socios y administradores de un APR solo ven su propia organización. No hay configuración ni permisos manuales requeridos — el sistema usa el tenant del usuario autenticado para filtrar automáticamente todos los datos en todas las consultas.",
      "El panel AKUAS Plataforma permite a los operadores de la plataforma ver estadísticas agregadas de todas las APRs: socios totales, facturación del mes, porcentaje de cobertura de lecturas y deuda acumulada por organización. Acceso solo para el rol de superadmin.",
    ],
    items: [
      "Aislamiento completo por RLS en base de datos",
      "Logo, colores y nombre propio por APR",
      "Configuración de tarifas independiente por tenant",
      "Panel plataforma para estadísticas cruzadas",
      "Sin límite de APRs por instalación",
      "Onboarding de nueva APR en 4 pasos SQL",
      "Subdominios o rutas separadas por organización",
    ],
  },
];

export default function FuncionalidadesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--akua)" }}
        className="pt-32 pb-16 px-5"
      >
        <div className="max-w-4xl mx-auto">
          <p className="label-section mb-4">Funcionalidades</p>
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
            Cada módulo resuelve un problema real.
          </h1>
          <p
            style={{
              color: "rgba(242,238,229,0.75)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              maxWidth: "560px",
            }}
          >
            No hay funcionalidades de relleno. Cada módulo existe porque un APR
            lo necesitaba para operar mejor, no para tener más ítems en una lista.
          </p>
        </div>
      </section>

      {/* Módulos */}
      {modulos.map((m, idx) => (
        <section
          key={m.num}
          className="py-16 px-5"
          style={{ backgroundColor: idx % 2 === 0 ? "white" : "var(--niebla)" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: "0.7rem",
                      color: "var(--ocre)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {m.num}
                  </span>
                  <div
                    style={{
                      height: "1px",
                      flex: 1,
                      maxWidth: "40px",
                      backgroundColor: "var(--ocre)",
                      opacity: 0.4,
                    }}
                  />
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--akua)",
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    marginBottom: "0.375rem",
                  }}
                  className="text-2xl sm:text-3xl"
                >
                  {m.titulo}
                </h2>
                <p
                  style={{
                    color: "rgba(26,31,41,0.5)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  {m.subtitulo}
                </p>
                {m.parrafos.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      color: "rgba(26,31,41,0.7)",
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="lg:col-span-2">
                <div
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: idx % 2 === 0 ? "var(--niebla)" : "white",
                    border: "1px solid rgba(42,111,135,0.1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ocre)",
                      marginBottom: "1rem",
                    }}
                  >
                    Qué incluye
                  </p>
                  <ul className="space-y-2.5">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          style={{
                            color: "var(--brote)",
                            fontWeight: 700,
                            marginTop: "1px",
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span
                          style={{
                            color: "rgba(26,31,41,0.7)",
                            fontFamily: "var(--font-manrope, sans-serif)",
                            fontSize: "0.875rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA final */}
      <section style={{ backgroundColor: "var(--akua)" }} className="py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-section mb-4">Siguiente paso</p>
          <h2
            style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              color: "var(--niebla)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
            className="text-3xl sm:text-4xl mb-5"
          >
            Velo funcionando con los datos de tu APR.
          </h2>
          <p
            style={{
              color: "rgba(242,238,229,0.7)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            30 minutos, sin compromiso. Te mostramos cómo queda con tus socios,
            tus tarifas y tu logo.
          </p>
          <Link href="/contacto" className="btn-niebla text-base py-3 px-10">
            Solicitar demo
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
