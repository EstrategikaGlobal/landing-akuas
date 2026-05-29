'use client'
import { useEffect } from 'react'
import SiteFooter from '../components/SiteFooter'

const css = `
:root {
  --ink: oklch(0.18 0.02 240);
  --ink-2: oklch(0.32 0.025 240);
  --muted: oklch(0.52 0.015 240);
  --line: oklch(0.88 0.012 230);
  --paper: oklch(0.975 0.012 92);
  --paper-2: oklch(0.95 0.018 92);
  --aqua: oklch(0.42 0.10 205);
  --aqua-2: oklch(0.52 0.11 200);
  --ocre: oklch(0.72 0.13 75);
  --ocre-soft: oklch(0.92 0.06 80);
  --brote: oklch(0.65 0.10 145);
  --serif: var(--font-bricolage),"Bricolage Grotesque",ui-serif,Georgia,serif;
  --sans:  var(--font-manrope), "Manrope",system-ui,sans-serif;
  --mono:  var(--font-jetbrains),"JetBrains Mono",ui-monospace,monospace;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }
.container { max-width: 1340px; margin: 0 auto; padding: 0 44px; }
.k { color: var(--ocre); font-style: italic; font-weight: 600; }

/* Reveal */
.rv { opacity: 0; transform: translateY(20px); transition: opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1); }
.rv.on { opacity: 1; transform: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 999px; font-family: var(--sans); font-weight: 600; font-size: 15.5px; text-decoration: none; border: 1px solid transparent; cursor: pointer; transition: transform 0.15s ease, background 0.15s ease; white-space: nowrap; }
.btn:hover { transform: translateY(-1px); }
.btn.primary { background: var(--ocre); color: var(--ink); }
.btn.primary:hover { background: oklch(0.78 0.13 75); }
.btn.lg { padding: 17px 30px; font-size: 17px; }
.btn-arrow::after { content: "→"; margin-left: 4px; transition: transform 0.15s; }
.btn:hover .btn-arrow::after { transform: translateX(3px); }

/* Nav */
nav.top { position: relative; z-index: 5; }
nav.top .row { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 26px 0; }
.brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--paper); }
.brand .mk { width: 38px; height: 38px; background: var(--aqua); border-radius: 10px; display: grid; place-items: center; }
.brand .mk svg { width: 100%; height: 100%; color: var(--paper); }
.brand .wm { font-family: var(--serif); font-weight: 500; font-size: 30px; letter-spacing: -0.045em; line-height: 1; }
.brand .wm .k { color: var(--ocre); }
nav.top ul { display: flex; gap: 32px; list-style: none; margin: 0; padding: 0; }
nav.top ul a { color: oklch(0.92 0.01 240 / 0.85); text-decoration: none; font-size: 15.5px; font-weight: 500; transition: color 0.15s; }
nav.top ul a:hover { color: var(--paper); }
nav.top ul a.active { color: var(--paper); position: relative; }
nav.top ul a.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -7px; height: 2px; background: var(--ocre); border-radius: 2px; }
.nav-actions { display: flex; gap: 12px; align-items: center; }

/* Hero */
.rhero { background: var(--ink); color: var(--paper); position: relative; overflow: hidden; }
.rhero::before { content: ""; position: absolute; right: -120px; top: -120px; width: 460px; height: 460px; border-radius: 50%; border: 1.5px solid oklch(0.97 0.012 92 / 0.06); box-shadow: 0 0 0 60px oklch(0.97 0.012 92 / 0.025), 0 0 0 130px oklch(0.97 0.012 92 / 0.02); pointer-events: none; }
.rhero-copy { position: relative; z-index: 2; padding: 30px 0 70px; max-width: 820px; }
.rhero .kicker { display: inline-flex; align-items: center; gap: 11px; font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ocre-soft); background: oklch(0.97 0.012 92 / 0.08); border: 1px solid oklch(0.97 0.012 92 / 0.16); padding: 9px 15px; border-radius: 999px; margin-bottom: 26px; font-weight: 500; }
.rhero .kicker .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ocre); }
.rhero h1 { font-family: var(--serif); font-weight: 500; font-size: clamp(40px, 5.6vw, 80px); line-height: 0.99; letter-spacing: -0.035em; margin: 0 0 20px; text-wrap: balance; }
.rhero h1 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.rhero .sub { font-family: var(--serif); font-weight: 300; font-size: clamp(18px, 2vw, 23px); line-height: 1.4; color: oklch(0.85 0.02 240); margin: 0; max-width: 56ch; text-wrap: pretty; }

/* Listing */
.listing { background: var(--paper); padding: 64px 0 104px; }

/* Featured card */
.feat-link { text-decoration: none; color: inherit; display: block; }
.feat { display: grid; grid-template-columns: 1.15fr 1fr; gap: 0; border: 1px solid var(--line); border-radius: 24px; overflow: hidden; background: var(--paper); transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease; margin-bottom: 52px; }
.feat-link:hover .feat { border-color: var(--aqua); box-shadow: 0 30px 60px -38px rgba(0,0,0,0.3); transform: translateY(-4px); }
.feat-body { padding: 46px 44px; display: flex; flex-direction: column; }
.feat .tagrow { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
.feat-tag { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; color: var(--paper); background: var(--cc); padding: 6px 12px; border-radius: 999px; }
.feat .feat-flag { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ocre); font-weight: 500; display: flex; align-items: center; gap: 7px; }
.feat .feat-flag::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--ocre); box-shadow: 0 0 0 3px oklch(0.72 0.13 75 / 0.25); }
.feat h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(28px, 3.2vw, 44px); line-height: 1.04; letter-spacing: -0.03em; margin: 0 0 16px; text-wrap: balance; }
.feat p { font-size: 17px; line-height: 1.55; color: var(--ink-2); margin: 0 0 26px; max-width: 46ch; text-wrap: pretty; }
.feat .feat-foot { margin-top: auto; display: flex; align-items: center; gap: 16px; }
.feat .read { font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: 0.04em; }
.feat .go { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 16px; color: var(--aqua); }
.feat .go::after { content: "→"; transition: transform 0.18s ease; }
.feat-link:hover .feat .go::after { transform: translateX(4px); }

/* Visual side */
.feat-visual { background: var(--ink); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 36px; min-height: 340px; }
.feat-visual::after { content: ""; position: absolute; inset: 0; background: radial-gradient(70% 80% at 70% 30%, oklch(0.42 0.10 205 / 0.55), transparent 70%); pointer-events: none; }
.calc-mini { position: relative; z-index: 1; width: 100%; max-width: 290px; background: oklch(0.23 0.02 240); border: 1px solid oklch(0.32 0.02 240); border-radius: 16px; padding: 20px; box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6); }
.calc-mini .cm-row { display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; color: oklch(0.7 0.02 240); padding: 7px 0; border-bottom: 1px solid oklch(0.3 0.02 240); }
.calc-mini .cm-row .v { font-family: var(--mono); color: oklch(0.92 0.01 240); }
.calc-mini .cm-total { display: flex; justify-content: space-between; align-items: baseline; margin-top: 14px; }
.calc-mini .cm-total .lab { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ocre-soft); }
.calc-mini .cm-total .amt { font-family: var(--serif); font-weight: 500; font-size: 32px; color: var(--paper); letter-spacing: -0.02em; }
.calc-mini .cm-total .amt small { color: var(--ocre); font-size: 18px; }
.calc-mini .cm-bar { display: flex; height: 8px; border-radius: 999px; overflow: hidden; margin-top: 14px; }
.calc-mini .cm-bar i { height: 100%; }

/* More soon */
.more-soon { margin-top: 48px; padding: 64px 32px; border: 1px dashed var(--line); border-radius: 22px; background: var(--paper-2); text-align: center; display: flex; flex-direction: column; align-items: center; }
.more-soon .ms-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--ocre); box-shadow: 0 0 0 5px oklch(0.72 0.13 75 / 0.18); margin-bottom: 20px; }
.more-soon .ms-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--aqua); font-weight: 500; margin-bottom: 14px; }
.more-soon p { font-family: var(--serif); font-weight: 300; font-size: clamp(19px, 2vw, 26px); line-height: 1.35; color: var(--ink-2); margin: 0; max-width: 38ch; text-wrap: pretty; }

/* CTA */
.fcta { background: var(--aqua); color: var(--paper); text-align: center; padding: 116px 0 120px; position: relative; overflow: hidden; }
.fcta::after { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(60% 90% at 50% 50%, transparent 45%, oklch(0.36 0.09 205 / 0.5) 100%); }
.fcta .ripples { position: absolute; inset: 0; display: grid; place-items: center; pointer-events: none; z-index: 1; }
.fcta .ripple { position: absolute; width: 320px; height: 320px; border-radius: 50%; border: 1.5px solid oklch(0.97 0.012 92 / 0.5); opacity: 0; animation: fctaripple 9s ease-out infinite; }
.fcta .ripple:nth-child(1) { animation-delay: 0s; }
.fcta .ripple:nth-child(2) { animation-delay: 2.25s; }
.fcta .ripple:nth-child(3) { animation-delay: 4.5s; }
.fcta .ripple:nth-child(4) { animation-delay: 6.75s; }
@keyframes fctaripple { 0% { transform: scale(0.18); opacity: 0; } 8% { opacity: 0.5; } 100% { transform: scale(3.4); opacity: 0; } }
.fcta-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
.fcta h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(34px, 4.6vw, 62px); line-height: 1.02; letter-spacing: -0.03em; margin: 0 0 18px; color: var(--paper); text-wrap: balance; }
.fcta h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.fcta p { font-family: var(--serif); font-weight: 300; font-size: clamp(18px, 2vw, 24px); line-height: 1.35; color: oklch(0.95 0.018 92 / 0.9); margin: 0 0 36px; }

/* Footer */
footer.foot { background: var(--ink); color: var(--paper); padding: 82px 0 36px; border-top: 1px solid oklch(0.3 0.03 240); }
.foot-grid { display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 48px; padding-bottom: 46px; border-bottom: 1px solid oklch(0.3 0.03 240); }
.foot .brand-row { display: flex; align-items: center; gap: 11px; margin-bottom: 18px; }
.foot .brand-row .mk { width: 36px; height: 36px; background: var(--aqua); border-radius: 9px; display: grid; place-items: center; }
.foot .brand-row .mk svg { width: 100%; height: 100%; color: var(--paper); }
.foot .brand-row .wm { font-family: var(--serif); font-weight: 500; font-size: 30px; letter-spacing: -0.045em; }
.foot .brand-row .wm .k { color: var(--ocre); font-style: italic; }
.foot .tagline { font-family: var(--serif); font-weight: 300; font-size: 19px; line-height: 1.4; color: oklch(0.82 0.02 240); margin: 0 0 22px; max-width: 34ch; }
.foot-social { display: flex; gap: 10px; }
.foot-social a { width: 42px; height: 42px; border-radius: 999px; border: 1px solid oklch(0.34 0.03 240); display: grid; place-items: center; color: oklch(0.85 0.02 240); transition: background 0.15s, color 0.15s, border-color 0.15s; }
.foot-social a:hover { background: var(--aqua); border-color: var(--aqua); color: var(--paper); }
.foot-social a svg { width: 19px; height: 19px; }
.foot-col h4 { font-family: var(--mono); font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ocre-soft); margin: 0 0 18px; font-weight: 500; }
.foot-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; }
.foot-col a { color: oklch(0.85 0.02 240); text-decoration: none; font-size: 15.5px; transition: color 0.15s; }
.foot-col a:hover { color: var(--paper); }
.foot-contact a { display: inline-flex; align-items: center; gap: 11px; }
.foot-contact a .ci { width: 17px; height: 17px; color: var(--ocre-soft); flex-shrink: 0; }
.foot-legal { padding-top: 26px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: oklch(0.6 0.02 240); }
.foot-legal .links { display: flex; gap: 22px; }
.foot-legal a { color: inherit; text-decoration: none; }
.foot-legal a:hover { color: oklch(0.85 0.02 240); }

@media (max-width: 860px) {
  .container { padding: 0 24px; }
  nav.top ul { display: none; }
  nav.top .row { padding: 20px 0; }
  .rhero-copy { padding: 16px 0 56px; }
  .listing { padding: 48px 0 72px; }
  .feat { grid-template-columns: 1fr; }
  .feat-visual { min-height: 240px; order: -1; }
  .feat-body { padding: 32px 26px; }
  .fcta { padding: 72px 0; }
  .foot-grid { grid-template-columns: 1fr; gap: 36px; }
  .foot-legal { justify-content: flex-start; }
}
@media (prefers-reduced-motion: reduce) {
  .rv { opacity: 1; transform: none; transition: none; }
  .fcta .ripple { animation: none; opacity: 0.12; transform: scale(1); }
  .fcta .ripple:nth-child(3), .fcta .ripple:nth-child(4) { display: none; }
}
`

export function BlogClient() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revs = Array.from(document.querySelectorAll<HTMLElement>('.rv'))
    if (reduce || !('IntersectionObserver' in window)) {
      revs.forEach(el => el.classList.add('on'))
      return
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target) } })
    }, { threshold: 0.15 })
    revs.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* HERO */}
      <section className="rhero">
        <div className="container">
          <nav className="top">
            <div className="row">
              <a href="/" className="brand">
                <span className="mk"><svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32"/><circle cx="50" cy="50" r="20"/></g><circle cx="50" cy="50" r="9" fill="var(--ocre)"/></svg></span>
                <span className="wm">a<span className="k">k</span>uas</span>
              </a>
              <ul>
                <li><a href="/funcionalidades">Funcionalidades</a></li>
                <li><a href="/sobre-nosotros">Quiénes somos</a></li>
                <li><a href="/blog" className="active">Recursos</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
              <div className="nav-actions">
                <a href="https://wa.me/56942657280" className="btn primary" target="_blank" rel="noopener">Agendar demo</a>
              </div>
            </div>
          </nav>

          <div className="rhero-copy">
            <span className="kicker"><span className="dot"></span>Recursos</span>
            <h1>Recursos para <em>tu comité.</em></h1>
            <p className="sub">Guías claras, herramientas y respuestas — escritas en simple, para que administrar tu APR sea más fácil. Empieza por las que más se usan.</p>
          </div>
        </div>
      </section>

      {/* LISTING */}
      <section className="listing">
        <div className="container">

          {/* Featured card */}
          <a className="feat-link rv" href="/blog/calculadora-tarifa-agua" style={{ '--cc': 'oklch(0.58 0.12 65)' } as React.CSSProperties}>
            <article className="feat">
              <div className="feat-body">
                <div className="tagrow">
                  <span className="feat-tag">Herramienta</span>
                  <span className="feat-flag">Interactivo</span>
                </div>
                <h2>Calculadora de cobro mensual de agua</h2>
                <p>Ingresa tus tarifas y las lecturas del medidor: te calcula el consumo, el desglose de cargos y el total a pagar al instante. Descarga una boleta de ejemplo en PDF.</p>
                <div className="feat-foot">
                  <span className="go">Abrir la calculadora</span>
                  <span className="read">Sin registro</span>
                </div>
              </div>
              <div className="feat-visual">
                <div className="calc-mini" aria-hidden="true">
                  <div className="cm-row"><span>Cargo fijo</span><span className="v">$3.200</span></div>
                  <div className="cm-row"><span>Consumo · 24 m³</span><span className="v">$10.800</span></div>
                  <div className="cm-row"><span>Saneamiento</span><span className="v">$6.000</span></div>
                  <div className="cm-total">
                    <span className="lab">Total a pagar</span>
                    <span className="amt"><small>$</small>20.000</span>
                  </div>
                  <div className="cm-bar">
                    <i style={{ width: '16%', background: 'oklch(0.58 0.12 65)' }}></i>
                    <i style={{ width: '54%', background: 'oklch(0.42 0.10 205)' }}></i>
                    <i style={{ width: '30%', background: 'oklch(0.65 0.10 145)' }}></i>
                  </div>
                </div>
              </div>
            </article>
          </a>

          {/* Más recursos en camino */}
          <div className="more-soon rv">
            <span className="ms-dot" aria-hidden="true"></span>
            <span className="ms-eyebrow">Más recursos en camino</span>
            <p>Estamos preparando guías, tutoriales y plantillas para tu comité.<br />La calculadora es la primera — vuelve pronto.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="ripples" aria-hidden="true">
          <span className="ripple"></span><span className="ripple"></span>
          <span className="ripple"></span><span className="ripple"></span>
        </div>
        <div className="container">
          <div className="fcta-inner">
            <h2>¿Te quedó una duda <em>sin resolver?</em></h2>
            <p>El equipo akuas conoce el día a día de los comités. Escríbenos y te ayudamos — sin compromiso.</p>
            <a href="https://wa.me/56942657280" className="btn primary lg" target="_blank" rel="noopener"><span className="btn-arrow">Conversemos por WhatsApp</span></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
