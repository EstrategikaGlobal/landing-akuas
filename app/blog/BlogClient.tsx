'use client'
import Link from 'next/link'
import { SITE_CSS } from '../components/site-css'
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'

const PAGE_CSS = `
/* ── Blog / Recursos ── */
.blog-section { padding: 96px 0; background: var(--paper-2); }
.recursos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 80px; }
.recurso-card { background: var(--paper); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; transition: transform 0.25s ease, box-shadow 0.25s ease; }
.recurso-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px -24px oklch(0.18 0.02 240 / 0.28); }
.recurso-card-body { padding: 32px 28px; flex: 1; display: flex; flex-direction: column; }
.recurso-badge { display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--aqua); background: oklch(0.42 0.10 205 / 0.1); padding: 5px 12px; border-radius: 999px; margin-bottom: 18px; font-weight: 500; }
.recurso-card h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(18px, 1.8vw, 22px); line-height: 1.2; letter-spacing: -0.02em; color: var(--ink); margin: 0 0 14px; }
.recurso-card p { font-family: var(--sans); font-size: 15px; line-height: 1.65; color: var(--ink-2); margin: 0; flex: 1; }
.recurso-card-footer { padding: 0 28px 28px; }
.recurso-card-footer a { display: block; text-align: center; padding: 13px; border-radius: 12px; font-family: var(--sans); font-size: 14.5px; font-weight: 600; text-decoration: none; background: var(--aqua); color: var(--paper); transition: background 0.15s; }
.recurso-card-footer a:hover { background: var(--aqua-2); }

.guia-section { padding: 96px 0; background: var(--paper); border-top: 1px solid var(--line); }
.guia-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
.guia-item { border: 1px solid var(--line); border-radius: 16px; padding: 28px; display: flex; gap: 20px; align-items: flex-start; transition: border-color 0.2s, background 0.2s; }
.guia-item:hover { border-color: var(--aqua); background: var(--paper-2); }
.guia-icon { width: 44px; height: 44px; border-radius: 12px; background: oklch(0.42 0.10 205 / 0.1); display: grid; place-items: center; flex-shrink: 0; color: var(--aqua); }
.guia-icon svg { width: 22px; height: 22px; }
.guia-body { flex: 1; }
.guia-body h3 { font-family: var(--serif); font-weight: 500; font-size: 17px; line-height: 1.2; letter-spacing: -0.02em; color: var(--ink); margin: 0 0 8px; }
.guia-body p { font-family: var(--sans); font-size: 14px; line-height: 1.6; color: var(--ink-2); margin: 0; }
.guia-tag { display: inline-block; font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }

@media (max-width: 900px) { .recursos-grid { grid-template-columns: 1fr; } }
@media (max-width: 760px) { .guia-grid { grid-template-columns: 1fr; } .blog-section { padding: 64px 0; } .guia-section { padding: 64px 0; } }
`

const articulos = [
  {
    slug: 'calculadora-tarifa-agua',
    badge: 'Herramienta interactiva',
    titulo: '¿Cuánto debería cobrar tu APR por m³?',
    desc: 'Calculadora de factura de agua con los 6 tramos tarifarios reales. Ingresa el consumo en m³, selecciona si el socio está exento de IVA y obtén el desglose completo: subtotal por tramo, cargo fijo, IVA y total a cobrar.',
    cta: 'Usar calculadora',
  },
  {
    slug: 'calculadora-morosidad',
    badge: 'Herramienta interactiva',
    titulo: '¿Cuánto pierde tu APR por morosidad?',
    desc: 'Estima el impacto financiero de la morosidad en tu comité. Con el número de socios, el porcentaje de morosos y el consumo promedio, la calculadora proyecta la pérdida mensual, anual y a 3 años.',
    cta: 'Calcular pérdida',
  },
  {
    slug: 'test-digitalizacion',
    badge: 'Test interactivo',
    titulo: '¿Tu APR necesita digitalización?',
    desc: '8 preguntas sobre cómo opera hoy tu comité: registro de lecturas, saldos de socios, tiempo de facturación, acceso a información y capacidad offline. Al final, un diagnóstico basado en tu puntuación.',
    cta: 'Hacer el test',
  },
]

const guias = [
  {
    titulo: 'Ley 20.998: qué cambia para tu APR',
    desc: 'La ley de servicios sanitarios rurales en lenguaje simple. Qué exige, qué plazos hay y cómo akuas ayuda a cumplir.',
    tag: 'Marco legal',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h11a2 2 0 0 1 2 2v15a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>,
  },
  {
    titulo: 'Cómo reducir la morosidad sin salir al terreno',
    desc: 'Estrategias que usan los APRs con mejor cobranza: alertas tempranas, comunicación directa y cortes oportunos.',
    tag: 'Gestión',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    titulo: 'La tarifa por tramos explicada paso a paso',
    desc: 'Cómo funciona el sistema de 6 tramos tarifarios, cuándo aplica cada precio y cómo se suma el cargo fijo.',
    tag: 'Facturación',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="8"/><path d="M10 6v1.5M10 12.5V14M7.5 8.5c0-1 1-1.5 2.5-1.5s2.5.5 2.5 1.8c0 1.2-1.5 1.7-2.5 2.2-1 .5-2.5 1-2.5 2.2 0 1.2 1 1.8 2.5 1.8s2.5-.5 2.5-1.5"/></svg>,
  },
  {
    titulo: 'Preparar tu APR para una inspección de la DOH',
    desc: 'Qué documentos piden, qué datos tienen que estar actualizados y cómo los informes de akuas cubren los requerimientos.',
    tag: 'Cumplimiento',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-4Z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
]

export function BlogClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + PAGE_CSS }} />
      <SiteNav />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-kicker">Recursos para APRs</span>
            <h1>Herramientas para<br />gestionar mejor <em>tu APR.</em></h1>
            <p className="lead">Calculadoras y tests gratuitos construidos con la lógica real del sistema. Sin registro.</p>
          </div>
        </div>
      </section>

      {/* Herramientas interactivas */}
      <section className="blog-section">
        <div className="container">
          <span className="eyebrow-s">Herramientas interactivas</span>
          <h2 className="sec-h2" style={{ marginBottom: 40, marginTop: 8 }}>Calculadoras y tests<br />para tu comité.</h2>
          <div className="recursos-grid">
            {articulos.map(a => (
              <div key={a.slug} className="recurso-card">
                <div className="recurso-card-body">
                  <span className="recurso-badge">{a.badge}</span>
                  <h2>{a.titulo}</h2>
                  <p>{a.desc}</p>
                </div>
                <div className="recurso-card-footer">
                  <Link href={`/blog/${a.slug}`}>{a.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guías */}
      <section className="guia-section">
        <div className="container">
          <span className="eyebrow-s">Guías y lectura</span>
          <h2 className="sec-h2" style={{ marginTop: 8 }}>Todo lo que necesitas<br />saber para operar un APR.</h2>
          <div className="guia-grid">
            {guias.map(g => (
              <div key={g.titulo} className="guia-item">
                <div className="guia-icon">{g.icon}</div>
                <div className="guia-body">
                  <span className="guia-tag">{g.tag}</span>
                  <h3>{g.titulo}</h3>
                  <p>{g.desc}</p>
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
            <span className="eyebrow-s light">¿Quieres verlo en acción?</span>
            <h2>El sistema que hace todo<br />esto <em>automáticamente.</em></h2>
            <p>30 minutos de demo, sin compromiso, con los datos de tu APR.</p>
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
