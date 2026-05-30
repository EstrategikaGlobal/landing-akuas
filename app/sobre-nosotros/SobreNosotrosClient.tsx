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
  --serif: var(--font-bricolage), "Bricolage Grotesque", ui-serif, Georgia, serif;
  --sans:  var(--font-manrope),  "Manrope",  system-ui, sans-serif;
  --mono:  var(--font-jetbrains),"JetBrains Mono", ui-monospace, monospace;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }
.container { max-width: 1340px; margin: 0 auto; padding: 0 44px; }
.k { color: var(--ocre); font-style: italic; font-weight: 600; }

/* Reveal */
.rv { transition: opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1); opacity: 0; transform: translateY(20px); }
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
.qhero { background: var(--ink); color: var(--paper); position: relative; overflow: hidden; }
.qhero .rings { position: absolute; top: 50%; right: -180px; transform: translateY(-50%); width: 620px; height: 620px; pointer-events: none; opacity: 0.5; }
.qhero .rings span { position: absolute; inset: 0; margin: auto; border-radius: 50%; border: 1.5px solid oklch(0.97 0.012 92 / 0.08); animation: breathe 7s ease-in-out infinite; }
.qhero .rings span:nth-child(1) { width: 620px; height: 620px; }
.qhero .rings span:nth-child(2) { width: 440px; height: 440px; animation-delay: 0.5s; }
.qhero .rings span:nth-child(3) { width: 268px; height: 268px; animation-delay: 1s; }
.qhero .rings .core { width: 70px; height: 70px; border: none; background: radial-gradient(circle, var(--ocre), oklch(0.62 0.13 70)); box-shadow: 0 0 60px 10px oklch(0.72 0.13 75 / 0.35); animation: breathe 7s ease-in-out infinite; }
@keyframes breathe { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.75; } }
.qhero-copy { position: relative; z-index: 2; padding: 60px 0 116px; max-width: 880px; }
.qhero .kicker { display: inline-flex; align-items: center; gap: 11px; font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ocre-soft); background: oklch(0.97 0.012 92 / 0.08); border: 1px solid oklch(0.97 0.012 92 / 0.16); padding: 9px 15px; border-radius: 999px; margin-bottom: 30px; font-weight: 500; }
.qhero .kicker .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ocre); }
.qhero h1 { font-family: var(--serif); font-weight: 500; font-size: clamp(46px, 6.6vw, 104px); line-height: 0.96; letter-spacing: -0.04em; margin: 0 0 26px; text-wrap: balance; }
.qhero h1 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.qhero .sub { font-family: var(--serif); font-weight: 300; font-size: clamp(20px, 2.3vw, 30px); line-height: 1.32; color: oklch(0.88 0.02 240); margin: 0; max-width: 30ch; text-wrap: pretty; }

/* Manifesto */
.manifesto { background: var(--paper); padding: 124px 0; }
.mf-wrap { max-width: 1000px; margin: 0 auto; }
.mf-intro { font-family: var(--mono); font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--aqua); font-weight: 500; display: flex; align-items: center; gap: 12px; margin-bottom: 48px; }
.mf-intro::after { content: ""; flex: 1; height: 1px; background: var(--line); }
.mf-pains { display: flex; flex-direction: column; gap: 4px; margin-bottom: 44px; }
.mf-pain {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(20px, 2.5vw, 31px); line-height: 1.28; letter-spacing: -0.02em;
  color: oklch(0.6 0.015 240); position: relative; width: fit-content; max-width: 100%;
  padding-left: 30px;
  background-image: linear-gradient(oklch(0.74 0.06 70), oklch(0.74 0.06 70));
  background-repeat: no-repeat; background-position: 30px 0.78em; background-size: 0% 1.5px;
  transition: color 0.45s ease, opacity 0.45s ease, background-size 0.5s cubic-bezier(0.22,0.61,0.36,1);
}
.mf-pain::before { content: ""; position: absolute; left: 2px; top: 0.72em; width: 13px; height: 1.5px; background: oklch(0.78 0.04 70); border-radius: 2px; opacity: 0.5; }
.mf-pain.struck { color: oklch(0.74 0.01 240); opacity: 0.65; background-size: 100% 1.5px; }
.mf-turn { font-family: var(--serif); font-weight: 500; font-size: clamp(30px, 4.2vw, 56px); line-height: 1.12; letter-spacing: -0.03em; color: var(--ink); text-wrap: balance; }
.mf-turn em { color: var(--ocre); font-style: italic; font-weight: 400; }
.mf-turn .soft { color: var(--muted); }

/* Principles */
.princ { background: var(--ink); color: var(--paper); padding: 116px 0 124px; }
.pr-head { max-width: 760px; margin: 0 auto 64px; text-align: center; }
.pr-head .eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ocre-soft); font-weight: 500; margin-bottom: 22px; }
.pr-head .eyebrow::before, .pr-head .eyebrow::after { content: ""; width: 22px; height: 1px; background: oklch(0.92 0.06 80 / 0.4); }
.pr-head h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(32px, 4.2vw, 56px); line-height: 1.04; letter-spacing: -0.03em; margin: 0; text-wrap: balance; }
.pr-head h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.pr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.pr-card { background: oklch(0.22 0.02 240); border: 1px solid oklch(0.3 0.02 240); border-radius: 22px; padding: 38px 34px 40px; transition: border-color 0.28s ease, transform 0.28s ease; }
.pr-card:hover { border-color: var(--pc); transform: translateY(-6px); }
.pr-card .ic { width: 56px; height: 56px; border-radius: 15px; background: oklch(0.27 0.02 240); color: var(--pc); display: grid; place-items: center; margin-bottom: 26px; transition: background 0.28s ease, color 0.28s ease; }
.pr-card:hover .ic { background: var(--pc); color: var(--paper); }
.pr-card .ic svg { width: 28px; height: 28px; }
.pr-card .pn { font-family: var(--mono); font-size: 11.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--pc); font-weight: 500; margin-bottom: 12px; }
.pr-card h3 { font-family: var(--serif); font-weight: 500; font-size: 28px; letter-spacing: -0.025em; margin: 0 0 12px; }
.pr-card p { font-size: 16.5px; line-height: 1.55; color: oklch(0.82 0.02 240); margin: 0; text-wrap: pretty; }

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
.fcta .ripple-dot { position: absolute; width: 22px; height: 22px; border-radius: 50%; background: var(--ocre); box-shadow: 0 0 0 8px oklch(0.72 0.13 75 / 0.2), 0 0 40px 6px oklch(0.72 0.13 75 / 0.35); z-index: 1; }
.fcta-inner { position: relative; z-index: 2; max-width: 760px; margin: 0 auto; }
.fcta h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(34px, 4.6vw, 64px); line-height: 1.02; letter-spacing: -0.03em; margin: 0 0 18px; color: var(--paper); text-wrap: balance; }
.fcta h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.fcta p { font-family: var(--serif); font-weight: 300; font-size: clamp(18px, 2vw, 24px); line-height: 1.35; color: oklch(0.95 0.018 92 / 0.9); margin: 0 0 36px; }

/* Footer */
footer.foot { background: var(--ink); color: var(--paper); padding: 82px 0 36px; border-top: 1px solid oklch(0.3 0.03 240); }
.foot-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 48px; padding-bottom: 46px; border-bottom: 1px solid oklch(0.3 0.03 240); }
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
  .qhero .rings { right: -300px; opacity: 0.3; }
  .qhero-copy { padding: 36px 0 80px; }
  .manifesto { padding: 78px 0; }
  .mf-pains { margin-bottom: 38px; }
  .princ { padding: 78px 0 88px; }
  .pr-grid { grid-template-columns: 1fr; gap: 16px; }
  .pr-head { margin-bottom: 44px; }
  .fcta { padding: 78px 0; }
  .foot-grid { grid-template-columns: 1fr; gap: 36px; }
  .foot-legal { justify-content: flex-start; }
}
@media (prefers-reduced-motion: reduce) {
  .rv { transition: none; opacity: 1; transform: none; }
  .qhero .rings span, .qhero .rings .core { animation: none; }
  .fcta .ripple { animation: none; opacity: 0.12; transform: scale(1); }
  .fcta .ripple:nth-child(3), .fcta .ripple:nth-child(4) { display: none; }
}
@media (max-width: 480px) {
  .container { padding: 0 16px; }
  nav.top .row { padding: 16px 16px; }
  .qhero-copy { padding: 24px 0 56px; }
  .manifesto { padding: 56px 0; }
  .princ { padding: 56px 0 64px; }
  .fcta { padding: 60px 0; }
}
`

export function SobreNosotrosClient() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revs = Array.from(document.querySelectorAll<HTMLElement>('.rv'))
    const pains = Array.from(document.querySelectorAll<HTMLElement>('[data-pain]'))

    if (reduce || !('IntersectionObserver' in window)) {
      revs.forEach(el => el.classList.add('on'))
      pains.forEach(el => el.classList.add('struck'))
      return
    }

    // Hero reveals: stagger immediately
    const heroRevs = Array.from(document.querySelectorAll<HTMLElement>('.qhero-copy .rv'))
    const heroTimers = heroRevs.map((el, i) => setTimeout(() => el.classList.add('on'), 120 + i * 150))

    // General scroll reveals
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target) } })
    }, { threshold: 0.2 })
    revs.forEach(el => { if (!heroRevs.includes(el)) io.observe(el) })

    // Pain strike-through stagger
    let painTimers: ReturnType<typeof setTimeout>[] = []
    const pio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          painTimers = pains.map((p, i) => setTimeout(() => p.classList.add('struck'), 250 + i * 420))
          pio.disconnect()
        }
      })
    }, { threshold: 0.5 })
    if (pains[0]) pio.observe(pains[0])

    return () => {
      heroTimers.forEach(clearTimeout)
      painTimers.forEach(clearTimeout)
      io.disconnect()
      pio.disconnect()
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* HERO */}
      <section className="qhero">
        <div className="rings" aria-hidden="true">
          <span></span><span></span><span></span><span className="core"></span>
        </div>
        <div className="container">
          <nav className="top">
            <div className="row">
              <a href="/" className="brand">
                <span className="mk"><svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32"/><circle cx="50" cy="50" r="20"/></g><circle cx="50" cy="50" r="9" fill="var(--ocre)"/></svg></span>
                <span className="wm">a<span className="k">k</span>uas</span>
              </a>
              <ul>
                <li><a href="/funcionalidades">Funcionalidades</a></li>
                <li><a href="/sobre-nosotros" className="active">Quiénes somos</a></li>
                <li><a href="/blog">Recursos</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
              <div className="nav-actions">
                <a href="https://wa.me/56942657280" className="btn primary" target="_blank" rel="noopener">Agendar demo</a>
              </div>
            </div>
          </nav>

          <div className="qhero-copy">
            <span className="kicker rv"><span className="dot"></span>Quiénes somos</span>
            <h1 className="rv">akuas nació <em>desde adentro.</em></h1>
            <p className="sub rv">Conocemos el problema porque lo vivimos.</p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto" id="historia">
        <div className="container">
          <div className="mf-wrap">
            <div className="mf-intro rv">Nuestra historia</div>
            <div className="mf-pains">
              <div className="mf-pain" data-pain="">Lecturas a mano.</div>
              <div className="mf-pain" data-pain="">Cobranzas casa por casa.</div>
              <div className="mf-pain" data-pain="">Cuadernos que se pierden.</div>
              <div className="mf-pain" data-pain="">Planillas que no cuadran.</div>
            </div>
            <p className="mf-turn rv">
              No inventamos nada nuevo. <span className="soft">Sabemos exactamente qué duele y por qué</span> — y construimos akuas <em>para resolverlo.</em>
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="princ" id="principios">
        <div className="container">
          <div className="pr-head">
            <span className="eyebrow">En qué creemos</span>
            <h2 className="rv">Tres cosas que no <em>transamos.</em></h2>
          </div>
          <div className="pr-grid">
            <div className="pr-card rv" style={{ '--pc': 'oklch(0.55 0.13 35)' } as React.CSSProperties}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4V5Z"/><path d="M8.5 8.5h7M8.5 11.5h4"/></svg></span>
              <div className="pn">01 · Cercanía</div>
              <h3>Hablamos como en el comité.</h3>
              <p>Nada de lenguaje de oficina. Si tu comité sabe usar WhatsApp, sabe usar akuas — esa es la vara.</p>
            </div>
            <div className="pr-card rv" style={{ '--pc': 'oklch(0.52 0.09 150)' } as React.CSSProperties}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/></svg></span>
              <div className="pn">02 · Permanencia</div>
              <h3>Lo que se construye, queda.</h3>
              <p>La información del comité no se va con la directiva. Cada dato registrado en akuas es del comité, para siempre.</p>
            </div>
            <div className="pr-card rv" style={{ '--pc': 'oklch(0.58 0.12 65)' } as React.CSSProperties}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4.5"/></svg></span>
              <div className="pn">03 · Verdad</div>
              <h3>Mostramos, no prometemos.</h3>
              <p>Preferimos enseñarte el sistema funcionando con datos reales antes que venderte una promesa bonita.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="ripples" aria-hidden="true">
          <span className="ripple"></span><span className="ripple"></span>
          <span className="ripple"></span><span className="ripple"></span>
          <span className="ripple-dot"></span>
        </div>
        <div className="container">
          <div className="fcta-inner">
            <h2>Construyámoslo <em>contigo.</em></h2>
            <p>Cuéntanos cómo funciona tu comité y te mostramos akuas con datos reales. Una conversación, sin compromiso.</p>
            <a href="https://wa.me/56942657280" className="btn primary lg" target="_blank" rel="noopener"><span className="btn-arrow">Conversemos</span></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
