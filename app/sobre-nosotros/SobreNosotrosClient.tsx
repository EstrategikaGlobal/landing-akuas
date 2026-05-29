'use client'
import Link from 'next/link'
import { SITE_CSS } from '../components/site-css'
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'

const PAGE_CSS = `
/* ── Sobre nosotros ── */
.sn-section { padding: 96px 0; background: var(--paper); }
.sn-section.alt { background: var(--paper-2); }
.sn-section.dark { background: var(--ink); }
.sn-prose { max-width: 680px; }
.sn-prose p { font-family: var(--sans); font-size: 17px; line-height: 1.75; color: var(--ink-2); margin: 0 0 20px; }
.sn-prose p:last-child { margin: 0; }
.sn-prose p.highlight { font-family: var(--serif); font-weight: 300; font-size: clamp(19px, 2vw, 24px); line-height: 1.4; color: var(--ink); }

.mission-box { background: var(--aqua); border-radius: 20px; padding: 48px 52px; max-width: 760px; position: relative; overflow: hidden; }
.mission-box::before { content: ""; position: absolute; top: -40px; right: -40px; width: 200px; height: 200px; border-radius: 50%; background: oklch(0.52 0.11 200 / 0.4); }
.mission-box blockquote { font-family: var(--serif); font-weight: 400; font-size: clamp(20px, 2.2vw, 27px); line-height: 1.42; color: var(--paper); margin: 0; position: relative; z-index: 2; text-wrap: pretty; }
.mission-box blockquote em { color: var(--ocre); font-style: italic; }

.valores-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 48px; }
.valor-card { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 32px 28px; }
.valor-card .accent { width: 28px; height: 3px; background: var(--brote); border-radius: 2px; margin-bottom: 18px; }
.valor-card h3 { font-family: var(--serif); font-weight: 500; font-size: 19px; line-height: 1.2; letter-spacing: -0.02em; color: var(--ink); margin: 0 0 12px; }
.valor-card p { font-family: var(--sans); font-size: 15px; line-height: 1.65; color: var(--ink-2); margin: 0; }

.timeline { display: flex; flex-direction: column; gap: 0; max-width: 660px; }
.tl-item { display: grid; grid-template-columns: 48px 1fr; gap: 24px; padding-bottom: 40px; position: relative; }
.tl-item:last-child { padding-bottom: 0; }
.tl-item::before { content: ""; position: absolute; left: 23px; top: 28px; bottom: 0; width: 1px; background: var(--line); }
.tl-item:last-child::before { display: none; }
.tl-dot { width: 48px; height: 48px; border-radius: 50%; background: var(--aqua); display: grid; place-items: center; flex-shrink: 0; font-family: var(--mono); font-size: 11px; color: var(--paper); font-weight: 500; letter-spacing: 0.05em; }
.tl-body h3 { font-family: var(--serif); font-weight: 500; font-size: 19px; letter-spacing: -0.02em; color: var(--ink); margin: 10px 0 8px; }
.tl-body p { font-family: var(--sans); font-size: 15.5px; line-height: 1.65; color: var(--ink-2); margin: 0; }

@media (max-width: 760px) {
  .valores-grid { grid-template-columns: 1fr; }
  .mission-box { padding: 32px; }
  .sn-section { padding: 64px 0; }
}
`

const valores = [
  { titulo: 'Funcionalidad antes que apariencia', desc: 'Cada función existe porque resuelve un problema real. Si algo no lo usa nadie, no está en el sistema.' },
  { titulo: 'Diseñado para quien lo usa', desc: 'La tesorera del comité no debería necesitar un curso. El socio adulto mayor no debería necesitar lentes nuevos para leer su saldo.' },
  { titulo: 'Los datos son del APR', desc: 'El comité puede exportar todo su historial en cualquier momento. Sin retención de datos, sin cobros de salida.' },
  { titulo: 'Confiabilidad sobre velocidad', desc: 'Preferimos que el sistema haga menos cosas y las haga bien, a que prometa todo y falle en lo fundamental: que el saldo cuadre.' },
]

export function SobreNosotrosClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + PAGE_CSS }} />
      <SiteNav />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-kicker">Quiénes somos</span>
            <h1>Construido desde<br /><em>adentro</em> de un APR.</h1>
            <p className="lead">No es un producto de software que se adaptó para APRs. akuas se construyó observando cómo operan realmente los comités de agua potable rural en Chile.</p>
          </div>
        </div>
      </section>

      {/* El problema original */}
      <section className="sn-section">
        <div className="container">
          <span className="eyebrow-s">El origen</span>
          <h2 className="sec-h2" style={{ marginBottom: 32 }}>El problema era<br />siempre el mismo.</h2>
          <div className="sn-prose">
            <p className="highlight">La tesorera del comité trabaja con una planilla Excel que heredó de quien la antecedió. Cada mes sobreescribe las columnas del mes anterior.</p>
            <p>Si alguien pregunta qué consumió en marzo de 2023, la respuesta es "ya no está". La facturación mensual tarda 3 días. Se calcula a mano el consumo de cada socio, se aplica la tarifa por tramos con una fórmula que nadie sabe bien si está correcta, y se suma el cargo fijo.</p>
            <p>Los socios llaman al presidente para preguntar cuánto deben. El presidente llama a la tesorera. La tesorera busca en el Excel. A veces el número coincide con lo que recuerda el socio. A veces no.</p>
            <p>En zonas con cobertura intermitente, el operador toma lecturas en papel y las transcribe de vuelta al Excel cuando llega. Las correcciones no quedan registradas en ningún lado.</p>
            <p><strong>akuas existe para que ningún comité tenga que trabajar así.</strong></p>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="sn-section alt">
        <div className="container">
          <span className="eyebrow-s">Misión</span>
          <div className="mission-box" style={{ marginTop: 32 }}>
            <blockquote>
              Que cada comité de agua rural en Chile pueda gestionar su APR con la misma rigurosidad que una empresa, <em>sin necesitar a un contador.</em>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="sn-section">
        <div className="container">
          <span className="eyebrow-s">Valores</span>
          <h2 className="sec-h2" style={{ marginTop: 8 }}>Lo que guía cada<br />decisión de producto.</h2>
          <div className="valores-grid">
            {valores.map(v => (
              <div key={v.titulo} className="valor-card">
                <div className="accent" />
                <h3>{v.titulo}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo construimos */}
      <section className="sn-section alt">
        <div className="container">
          <span className="eyebrow-s">Nuestro proceso</span>
          <h2 className="sec-h2" style={{ marginBottom: 48, marginTop: 8 }}>Construido con quienes<br />trabajan el agua todos los días.</h2>
          <div className="timeline">
            {[
              { step: '01', titulo: 'Observar antes de diseñar', desc: 'Visitamos comités, acompañamos asambleas y miramos cómo operan los tesoreros mes a mes. Cada módulo nació de una necesidad real observada en terreno.' },
              { step: '02', titulo: 'Validar con usuarios reales', desc: 'Cada funcionalidad se probó con presidentes y tesoreros de APRs rurales antes de llegar al sistema. El criterio de aceptación: que lo use alguien sin instrucciones.' },
              { step: '03', titulo: 'Iterar en producción', desc: 'akuas mejora con cada APR que se incorpora. Las solicitudes de soporte son el principal insumo del roadmap de producto.' },
              { step: '04', titulo: 'Mantener simple', desc: 'Cuando hay que decidir entre agregar una función y simplificar otra, elegimos simplificar. La complejidad tiene un costo que pagan los usuarios, no el software.' },
            ].map(t => (
              <div key={t.step} className="tl-item">
                <div className="tl-dot">{t.step}</div>
                <div className="tl-body">
                  <h3>{t.titulo}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-inner">
            <span className="eyebrow-s light">Hablemos</span>
            <h2>¿Reconocés tu APR<br />en alguna de estas <em>situaciones?</em></h2>
            <p>30 minutos, por videollamada. Sin compromiso y sin costo.</p>
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
