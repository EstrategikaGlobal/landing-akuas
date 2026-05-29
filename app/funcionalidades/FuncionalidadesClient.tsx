'use client'
import Link from 'next/link'
import { SITE_CSS } from '../components/site-css'
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'

const PAGE_CSS = `
/* ── Funcionalidades ── */
.func-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; margin-bottom: 80px; }
.func-tab { background: var(--paper); padding: 28px 24px; cursor: pointer; transition: background 0.2s; }
.func-tab:hover { background: var(--paper-2); }
.func-tab .num { font-family: var(--mono); font-size: 11px; color: var(--ocre); letter-spacing: 0.12em; margin-bottom: 8px; }
.func-tab h3 { font-family: var(--serif); font-weight: 500; font-size: 17px; line-height: 1.2; letter-spacing: -0.02em; margin: 0; color: var(--ink); }

.module-section { padding: 96px 0; border-top: 1px solid var(--line); }
.module-section:first-of-type { border-top: none; }
.module-section.alt { background: var(--paper-2); }
.module-layout { display: grid; grid-template-columns: 1.4fr 1fr; gap: 80px; align-items: start; }
.module-num { font-family: var(--mono); font-size: 11px; color: var(--ocre); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 14px; display: flex; align-items: center; gap: 12px; }
.module-num::after { content: ""; flex: 0 0 24px; height: 1px; background: var(--ocre); opacity: 0.5; }
.module-section h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(26px, 3vw, 40px); line-height: 1.08; letter-spacing: -0.03em; color: var(--aqua); margin: 0 0 8px; }
.module-subtitle { font-family: var(--serif); font-weight: 300; font-size: clamp(15px, 1.4vw, 18px); line-height: 1.4; color: var(--muted); font-style: italic; margin: 0 0 28px; }
.module-body p { font-family: var(--sans); font-size: 16px; line-height: 1.72; color: var(--ink-2); margin: 0 0 16px; }
.module-body p:last-child { margin-bottom: 0; }
.module-card { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 28px; position: sticky; top: 88px; }
.module-card-alt { background: var(--paper-2); }
.module-card-label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ocre); margin-bottom: 18px; }
.module-card ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.module-card li { display: flex; align-items: flex-start; gap: 10px; font-family: var(--sans); font-size: 14.5px; line-height: 1.45; color: var(--ink-2); }
.module-card li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--brote); flex-shrink: 0; margin-top: 5px; }
@media (max-width: 900px) {
  .func-grid { grid-template-columns: 1fr 1fr; }
  .module-layout { grid-template-columns: 1fr; gap: 40px; }
  .module-card { position: static; }
  .module-section { padding: 64px 0; }
}
@media (max-width: 580px) {
  .func-grid { grid-template-columns: 1fr; }
}
`

const modulos = [
  {
    num: '01', titulo: 'Facturación mensual',
    subtitulo: 'Desde la lectura al cobro, sin intervención manual.',
    parrafos: [
      'akuas aplica la estructura tarifaria oficial: 6 tramos de consumo con precio por m³ desde $850 (0–20 m³) hasta $1.910 (más de 100 m³). Al ingresar la lectura del medidor, el sistema calcula automáticamente el consumo, determina en qué tramos cae y calcula el subtotal.',
      'El cargo fijo mensual, el costo administrativo sin consumo y el cargo de habilitación para primera conexión se suman antes de aplicar IVA. Los socios están exentos de IVA; los no-socios pagan 19% sobre el total.',
      'Los seis tipos de lectura cubren todos los casos reales: Normal, Inicial, Nuevo Cliente, Cambio de Medidor, Estimada y Relectura. Cada tipo tiene su lógica propia.',
    ],
    items: ['6 tramos tarifarios: $850 – $1.910 por m³', 'Cargo fijo, habilitación y costo administrativo configurables', 'Exención automática de IVA para socios', '6 tipos de lectura con lógica diferenciada', 'Corrección con cascada y recompute de saldos', 'Anulación con mantenimiento de cadena contable', 'Importación masiva desde Excel con validación previa'],
  },
  {
    num: '02', titulo: 'Gestión de pagos',
    subtitulo: 'Saldo encadenado. Ningún pago queda en el aire.',
    parrafos: [
      'Cada pago registrado genera un movimiento en la cadena contable del socio. El saldo se actualiza automáticamente. Si el pago se elimina, el sistema revierte el movimiento y recomputa toda la cadena desde el origen.',
      'El sistema soporta efectivo, transferencia bancaria y pago online. Para transferencias aparecen campos opcionales de referencia bancaria y fecha banco para conciliación posterior.',
      'Cada pago genera un recibo PDF con folio único, logo y colores del APR. El recibo se imprime o envía digitalmente.',
    ],
    items: ['Encadenamiento automático de saldos sin descuadre', 'Recibo PDF con folio único por pago', 'Efectivo, transferencia y pago online', 'Campos de conciliación bancaria opcionales', 'Importación masiva de pagos desde Excel', 'Eliminación con reversión completa', 'Triple validación anti-duplicados'],
  },
  {
    num: '03', titulo: 'Alertas de consumo',
    subtitulo: 'La fuga que el medidor registra antes de que el socio lo note.',
    parrafos: [
      'akuas compara el consumo del mes actual contra el promedio de los 3 meses anteriores. Si el consumo es 3 veces o más el promedio, el sistema levanta una alerta de posible fuga — representando pérdidas de miles de pesos para el socio y de red para el APR.',
      'Las alertas se clasifican en cuatro niveles: Posible Fuga (≥3x promedio), Consumo Alto (≥2x), Sobreconsumo (≥1.5x o más de 50 m³) y Consumo Cero.',
      'El dashboard muestra todas las alertas con nombre de socio, consumo actual, promedio y porcentaje de desviación.',
    ],
    items: ['4 niveles: Fuga, Alto, Sobreconsumo, Cero', 'Comparación vs promedio de 3 meses', 'Umbral de sobreconsumo configurable (default 50 m³)', 'Solo incluye meses desde fecha de ingreso', 'Vista unificada de alertas en el dashboard', 'Información completa por alerta'],
  },
  {
    num: '04', titulo: 'Portal del socio',
    subtitulo: 'Diseñado para que un adulto mayor pueda usarlo sin ayuda.',
    parrafos: [
      'El portal tiene una regla de diseño no negociable: cada acción mínimo 48px de alto, texto de cuerpo mínimo 16px, saldo actual en 64px con la pregunta directa "¿Cuánto debo pagar?". Sin tablas complicadas.',
      'El historial de consumo muestra los últimos 13 meses en un gráfico de área. Los meses pendientes muestran exactamente qué meses tienen deuda, por coincidencia exacta con el mes cancelado de cada pago.',
      'El socio puede ver anuncios vigentes del comité, descargar su cartola en PDF y solicitar cambio de datos. Todo desde el celular.',
    ],
    items: ['Saldo en 64px: "¿Cuánto debo pagar?"', 'Texto mínimo 16px, botones mínimo 48px', 'Historial de consumo: gráfico 13 meses', 'Meses pendientes por coincidencia exacta', 'Historial completo de movimientos', 'Anuncios del comité (informativo, alerta, urgente)', 'Descarga de cartola en PDF', 'Solicitud de cambio de datos'],
  },
  {
    num: '05', titulo: 'Cortes de servicio',
    subtitulo: 'Del candidato al corte a la carta legal, en un flujo.',
    parrafos: [
      'El módulo identifica automáticamente los candidatos: socios con morosidad de 2 o más meses o consumo de 100 m³ o más. El listado incluye deuda total, meses adeudados y última lectura.',
      'Al registrar un corte, el estado cambia a "Cortado" y genera una carta PDF legal con plazo reglamentario de 7 días, datos del APR, monto adeudado e instrucciones de pago.',
      'La reconexión se registra con el cobro de $25.000 de reposición sumado al saldo pendiente. El estado vuelve a "Activo".',
    ],
    items: ['Candidatos automáticos: morosidad ≥2 meses o consumo ≥100 m³', 'Carta de corte PDF con datos legales', 'Notificación por email al momento del corte', 'Reconexión con cobro automático de $25.000', 'Estado del servicio reflejado en todos los módulos', 'Tres estados: Activo, Cortado, Suspendido'],
  },
  {
    num: '06', titulo: 'Dashboard administrativo',
    subtitulo: 'El resumen financiero del APR en una pantalla.',
    parrafos: [
      'Muestra en tiempo real: clientes activos, deuda total acumulada, eficiencia de cobranza, metros cúbicos distribuidos y pérdidas de red estimadas.',
      'El ranking de morosidad muestra los 5 mayores deudores. La antigüedad de deuda clasifica a todos en cuatro categorías: al día, 1 mes de atraso, 2-3 meses y crítico.',
      'La detección de desajuste contable compara saldos almacenados contra el cálculo independiente. Si hay diferencia, aparece un banner con botón de recompute que corrige toda la cadena.',
    ],
    items: ['Métricas: deuda, eficiencia cobranza, m³ distribuidos', 'Cobertura de lecturas del mes (%)', 'Top 5 deudores con detalle', 'Antigüedad de deuda por categorías', 'Detección y corrección de desajuste contable', 'Exportación a Excel y PDF en todas las secciones'],
  },
  {
    num: '07', titulo: 'Lecturas offline',
    subtitulo: 'El medidor no espera señal de celular.',
    parrafos: [
      'El módulo funciona sin conexión. Al abrir con internet, descarga la lista de socios, última lectura de cada medidor y tarifas (IndexedDB). En terreno sin señal, el operador registra lecturas normalmente y el sistema calcula localmente.',
      'Al recuperar internet, el operador sincroniza manualmente. El sistema verifica si ya existe una lectura para ese socio y mes, evitando duplicados en zonas con cobertura intermitente.',
      'La red de seguridad final es un índice único en la base de datos: ninguna combinación de cliente + mes puede repetirse para lecturas vigentes.',
    ],
    items: ['Funciona sin conexión (IndexedDB)', 'Cálculo local de tarifas y total', 'Dedup automático por constraint único en DB', 'Lista de socios y lecturas cacheadas', 'Sync manual al recuperar internet', 'Foto del medidor opcional (sube al sincronizar)'],
  },
  {
    num: '08', titulo: 'Multi-tenant',
    subtitulo: 'Cada APR aislada. Una plataforma centralizada.',
    parrafos: [
      'Cada APR tiene su propio tenant: datos completamente separados, logo propio, colores de marca y configuración de tarifas independiente. Aislamiento implementado con Row Level Security en cada tabla.',
      'Los socios y administradores de un APR solo ven su propia organización. El sistema usa el tenant del usuario autenticado para filtrar automáticamente todas las consultas.',
      'El panel AKUAS Plataforma permite ver estadísticas agregadas de todas las APRs: socios totales, facturación del mes y cobertura de lecturas.',
    ],
    items: ['Aislamiento completo por RLS en base de datos', 'Logo, colores y nombre propio por APR', 'Configuración de tarifas independiente', 'Panel plataforma para estadísticas cruzadas', 'Sin límite de APRs por instalación', 'Onboarding de nueva APR en pasos simples'],
  },
]

export function FuncionalidadesClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + PAGE_CSS }} />
      <SiteNav />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-kicker">Funcionalidades</span>
            <h1>Cada módulo resuelve<br />un problema <em>real.</em></h1>
            <p className="lead">No hay funcionalidades de relleno. Cada módulo existe porque un APR lo necesitaba para operar mejor.</p>
          </div>
        </div>
      </section>

      {/* Índice rápido */}
      <div style={{ background: 'var(--paper-2)', borderBottom: '1px solid var(--line)' }}>
        <div className="container" style={{ padding: '0 44px' }}>
          <div className="func-grid">
            {modulos.map(m => (
              <a key={m.num} href={`#mod-${m.num}`} className="func-tab" style={{ textDecoration: 'none' }}>
                <div className="num">{m.num}</div>
                <h3>{m.titulo}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Módulos */}
      {modulos.map((m, i) => (
        <section key={m.num} id={`mod-${m.num}`} className={`module-section${i % 2 === 1 ? ' alt' : ''}`} style={{ background: i % 2 === 1 ? 'var(--paper-2)' : 'var(--paper)' }}>
          <div className="container">
            <div className="module-layout">
              <div className="module-body">
                <div className="module-num">{m.num}</div>
                <h2>{m.titulo}</h2>
                <p className="module-subtitle">{m.subtitulo}</p>
                {m.parrafos.map((p, j) => <p key={j}>{p}</p>)}
              </div>
              <div>
                <div className={`module-card${i % 2 === 1 ? ' module-card-alt' : ''}`}>
                  <div className="module-card-label">Qué incluye</div>
                  <ul>
                    {m.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-inner">
            <span className="eyebrow-s light">Siguiente paso</span>
            <h2>Velo funcionando con<br />los datos de <em>tu APR.</em></h2>
            <p>30 minutos, sin compromiso. Con tus socios, tus tarifas y tu logo.</p>
            <div className="cta-strip-btns">
              <Link href="/contacto" className="btn primary lg">Solicitar demo</Link>
              <a href="https://wa.me/56942657280" className="btn ghost-light lg" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
