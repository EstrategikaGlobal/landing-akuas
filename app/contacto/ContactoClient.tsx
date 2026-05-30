'use client'
import { useState, useEffect } from 'react'
import SiteFooter from '../components/SiteFooter'

const css = `
:root {
  --ink: oklch(0.18 0.02 240); --ink-2: oklch(0.32 0.025 240); --muted: oklch(0.52 0.015 240);
  --line: oklch(0.88 0.012 230); --paper: oklch(0.975 0.012 92); --paper-2: oklch(0.95 0.018 92);
  --aqua: oklch(0.42 0.10 205); --aqua-2: oklch(0.52 0.11 200); --ocre: oklch(0.72 0.13 75);
  --ocre-soft: oklch(0.92 0.06 80); --brote: oklch(0.65 0.10 145);
  --serif: var(--font-bricolage),"Bricolage Grotesque",ui-serif,Georgia,serif;
  --sans:  var(--font-manrope),"Manrope",system-ui,sans-serif;
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
.chero { background: var(--ink); color: var(--paper); position: relative; overflow: hidden; }
.chero .rings { position: absolute; top: 50%; right: -200px; transform: translateY(-50%); width: 640px; height: 640px; pointer-events: none; opacity: 0.5; }
.chero .rings span { position: absolute; inset: 0; margin: auto; border-radius: 50%; border: 1.5px solid oklch(0.97 0.012 92 / 0.08); animation: breathe 7s ease-in-out infinite; }
.chero .rings span:nth-child(1) { width: 640px; height: 640px; }
.chero .rings span:nth-child(2) { width: 452px; height: 452px; animation-delay: 0.5s; }
.chero .rings span:nth-child(3) { width: 276px; height: 276px; animation-delay: 1s; }
.chero .rings .core { width: 72px; height: 72px; border: none; background: radial-gradient(circle, var(--ocre), oklch(0.62 0.13 70)); box-shadow: 0 0 60px 10px oklch(0.72 0.13 75 / 0.35); animation: breathe 7s ease-in-out infinite; }
@keyframes breathe { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.75; } }
.chero-copy { position: relative; z-index: 2; padding: 56px 0 96px; max-width: 800px; }
.chero .kicker { display: inline-flex; align-items: center; gap: 11px; font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ocre-soft); background: oklch(0.97 0.012 92 / 0.08); border: 1px solid oklch(0.97 0.012 92 / 0.16); padding: 9px 15px; border-radius: 999px; margin-bottom: 28px; font-weight: 500; }
.chero .kicker .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ocre); }
.chero h1 { font-family: var(--serif); font-weight: 500; font-size: clamp(44px, 6vw, 92px); line-height: 0.97; letter-spacing: -0.04em; margin: 0 0 24px; text-wrap: balance; }
.chero h1 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.chero .sub { font-family: var(--serif); font-weight: 300; font-size: clamp(19px, 2.2vw, 28px); line-height: 1.34; color: oklch(0.88 0.02 240); margin: 0; max-width: 40ch; text-wrap: pretty; }

/* Contact body */
.cbody { background: var(--paper); padding: 96px 0 116px; }
.cgrid { display: grid; grid-template-columns: 0.82fr 1.18fr; gap: 56px; align-items: start; }
.csec-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--aqua); font-weight: 500; margin-bottom: 20px; }
.csec-eyebrow::before { content: ""; width: 22px; height: 1px; background: var(--ocre); }
.cleft h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(30px, 3.4vw, 44px); line-height: 1.04; letter-spacing: -0.03em; margin: 0 0 16px; text-wrap: balance; }
.cleft h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.cleft .lead { font-size: 17px; line-height: 1.55; color: var(--ink-2); margin: 0 0 34px; max-width: 40ch; text-wrap: pretty; }

.channels { display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px; }
.chan { display: flex; align-items: center; gap: 16px; background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 17px 19px; text-decoration: none; color: var(--ink); transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
.chan:hover { transform: translateY(-3px); border-color: var(--cc); box-shadow: 0 22px 40px -26px oklch(0.18 0.02 240 / 0.4); }
.chan .ci { width: 48px; height: 48px; border-radius: 13px; flex-shrink: 0; display: grid; place-items: center; background: var(--paper-2); border: 1px solid var(--line); color: var(--cc); transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease; }
.chan:hover .ci { background: var(--cc); color: var(--paper); border-color: var(--cc); }
.chan .ci svg { width: 24px; height: 24px; }
.chan .ct { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.chan .ct .lab { font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
.chan .ct .val { font-family: var(--serif); font-weight: 500; font-size: 19px; letter-spacing: -0.02em; }
.chan .arr { margin-left: auto; color: var(--muted); font-size: 17px; transition: transform 0.2s ease, color 0.2s ease; }
.chan:hover .arr { color: var(--cc); transform: translateX(3px); }

.steps { border-top: 1px solid var(--line); padding-top: 30px; }
.steps .st-h { font-family: var(--mono); font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ocre); font-weight: 500; margin-bottom: 22px; }
.step { display: grid; grid-template-columns: 38px 1fr; gap: 16px; position: relative; padding-bottom: 22px; }
.step:last-child { padding-bottom: 0; }
.step::before { content: ""; position: absolute; left: 18px; top: 38px; bottom: -4px; width: 1.5px; background: var(--line); }
.step:last-child::before { display: none; }
.step .sn { width: 38px; height: 38px; border-radius: 50%; background: var(--paper); border: 1.5px solid var(--aqua); color: var(--aqua); display: grid; place-items: center; font-family: var(--serif); font-weight: 600; font-size: 17px; position: relative; z-index: 1; }
.step .stt { font-family: var(--serif); font-weight: 500; font-size: 18px; letter-spacing: -0.015em; margin: 6px 0 4px; }
.step .std { font-size: 14.5px; line-height: 1.5; color: var(--ink-2); text-wrap: pretty; }

/* Form card */
.form-card { background: var(--paper); border: 1px solid var(--line); border-radius: 24px; padding: 38px 38px 34px; box-shadow: 0 40px 80px -50px oklch(0.18 0.02 240 / 0.5); }
.form-card .fc-head { display: flex; align-items: center; gap: 13px; margin-bottom: 6px; }
.form-card .fc-head .wa-ic { width: 42px; height: 42px; border-radius: 12px; background: oklch(0.55 0.13 150); color: var(--paper); display: grid; place-items: center; flex-shrink: 0; }
.form-card .fc-head .wa-ic svg { width: 24px; height: 24px; }
.form-card .fc-head h3 { font-family: var(--serif); font-weight: 500; font-size: 26px; letter-spacing: -0.025em; margin: 0; }
.form-card .fc-note { font-size: 14.5px; line-height: 1.5; color: var(--ink-2); margin: 0 0 26px; padding-left: 55px; text-wrap: pretty; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 18px; }
.field { display: flex; flex-direction: column; gap: 7px; }
.field.full { grid-column: 1 / -1; }
.field label { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); font-weight: 500; }
.field label .req { color: var(--ocre); }
.field input, .field select, .field textarea { font-family: var(--sans); font-size: 15.5px; color: var(--ink); background: var(--paper-2); border: 1px solid var(--line); border-radius: 11px; padding: 12px 14px; width: 100%; transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease; }
.field input::placeholder, .field textarea::placeholder { color: oklch(0.62 0.015 240); }
.field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: var(--aqua); background: var(--paper); box-shadow: 0 0 0 3px oklch(0.42 0.10 205 / 0.13); }
.field textarea { resize: vertical; min-height: 96px; line-height: 1.5; }
.field select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2375787f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 13px center; background-size: 17px; padding-right: 40px; cursor: pointer; }
.field.invalid input, .field.invalid textarea, .field.invalid select { border-color: oklch(0.6 0.18 25); box-shadow: 0 0 0 3px oklch(0.6 0.18 25 / 0.12); }
.form-foot { margin-top: 24px; display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.form-foot .submit { display: inline-flex; align-items: center; gap: 9px; background: oklch(0.55 0.13 150); color: var(--paper); border: none; cursor: pointer; font-family: var(--sans); font-weight: 600; font-size: 16px; padding: 15px 26px; border-radius: 999px; transition: transform 0.15s ease, background 0.15s ease; }
.form-foot .submit:hover { transform: translateY(-1px); background: oklch(0.6 0.14 150); }
.form-foot .submit svg { width: 20px; height: 20px; }
.form-foot .hint { font-family: var(--mono); font-size: 11.5px; letter-spacing: 0.04em; color: var(--muted); line-height: 1.5; max-width: 30ch; }
.form-err { display: none; font-size: 13.5px; color: oklch(0.5 0.16 25); margin-top: 14px; }
.form-err.show { display: block; }

/* FAQ */
section.faq { background: var(--paper-2); color: var(--ink); padding: 104px 0 116px; border-top: 1px solid var(--line); }
.faq-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
.faq-head h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(32px, 4.2vw, 56px); line-height: 1.02; letter-spacing: -0.03em; margin: 0; text-wrap: balance; }
.faq-head h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.faq-list { max-width: 880px; margin: 0 auto; border-top: 1px solid var(--line); }
.faq-item { border-bottom: 1px solid var(--line); }
.faq-q { width: 100%; background: none; border: none; cursor: pointer; text-align: left; display: grid; grid-template-columns: 34px 1fr 26px; gap: 18px; align-items: center; padding: 26px 6px; font-family: inherit; color: var(--ink); }
.faq-q .qn { font-family: var(--mono); font-size: 13px; color: var(--ocre); letter-spacing: 0.1em; font-weight: 500; }
.faq-q .qt { font-family: var(--serif); font-weight: 500; font-size: clamp(18px, 2vw, 24px); letter-spacing: -0.02em; line-height: 1.2; transition: color 0.2s ease; }
.faq-q:hover .qt { color: var(--aqua); }
.faq-ic { position: relative; width: 24px; height: 24px; flex-shrink: 0; justify-self: end; }
.faq-ic::before, .faq-ic::after { content: ""; position: absolute; background: var(--aqua); border-radius: 2px; transition: transform 0.3s ease, opacity 0.3s ease; }
.faq-ic::before { left: 0; top: 50%; width: 24px; height: 2.5px; transform: translateY(-50%); }
.faq-ic::after { top: 0; left: 50%; width: 2.5px; height: 24px; transform: translateX(-50%); }
.faq-item.open .faq-ic::after { opacity: 0; transform: translateX(-50%) scaleY(0); }
.faq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.38s cubic-bezier(0.22,0.61,0.36,1); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a-inner { overflow: hidden; }
.faq-a p { margin: 0; padding: 2px 52px 28px; font-size: 16.5px; line-height: 1.6; color: var(--ink-2); max-width: 64ch; text-wrap: pretty; }
.faq-a p b { color: var(--ink); font-weight: 600; }

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
.foot-legal { padding-top: 26px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: oklch(0.6 0.02 240); }
.foot-legal .links { display: flex; gap: 22px; }
.foot-legal a { color: inherit; text-decoration: none; }
.foot-legal a:hover { color: oklch(0.85 0.02 240); }

@media (max-width: 980px) {
  .container { padding: 0 24px; }
  nav.top ul { display: none; }
  nav.top .row { padding: 20px 0; }
  .chero .rings { right: -320px; opacity: 0.3; }
  .chero-copy { padding: 36px 0 72px; }
  .cbody { padding: 64px 0 80px; }
  .cgrid { grid-template-columns: 1fr; gap: 44px; }
  .form-card { padding: 30px 26px 28px; }
  section.faq { padding: 72px 0 84px; }
  .faq-q { grid-template-columns: 26px 1fr 22px; gap: 13px; padding: 22px 2px; }
  .faq-a p { padding: 2px 2px 26px; }
  .fcta { padding: 78px 0; }
  .foot-grid { grid-template-columns: 1fr; gap: 36px; }
  .foot-legal { justify-content: flex-start; }
}
@media (max-width: 540px) {
  .form-grid { grid-template-columns: 1fr; }
  .form-card .fc-note { padding-left: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .rv { opacity: 1; transform: none; transition: none; }
  .chero .rings span, .chero .rings .core { animation: none; }
  .fcta .ripple { animation: none; opacity: 0.12; transform: scale(1); }
  .fcta .ripple:nth-child(3), .fcta .ripple:nth-child(4) { display: none; }
}
@media (max-width: 480px) {
  .container { padding: 0 16px; }
  nav.top .row { padding: 16px 16px; }
  .chero-copy { padding: 24px 0 52px; }
  .cbody { padding: 44px 0 60px; }
  .form-card { padding: 20px 16px 18px; }
  .form-card .fc-note { padding-left: 0; }
  .channels { gap: 10px; }
  .chan { padding: 13px 14px; gap: 12px; }
  .chan .ct .val { font-size: 16px; }
  .fcta { padding: 60px 0; }
}
`

const WA = '56942657280'

export function ContactoClient() {
  const [form, setForm] = useState({ nombre: '', comite: '', region: '', socios: '', telefono: '', mensaje: '' })
  const [errors, setErrors] = useState({ nombre: false, comite: false })
  const [showErr, setShowErr] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  // Scroll reveal + FAQ
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revs = Array.from(document.querySelectorAll<HTMLElement>('.rv'))
    if (reduce || !('IntersectionObserver' in window)) { revs.forEach(el => el.classList.add('on')); return }
    const heroRevs = Array.from(document.querySelectorAll<HTMLElement>('.chero-copy .rv'))
    const timers = heroRevs.map((el, i) => setTimeout(() => el.classList.add('on'), 120 + i * 150))
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target) } })
    }, { threshold: 0.15 })
    revs.forEach(el => { if (!heroRevs.includes(el)) io.observe(el) })
    return () => { timers.forEach(clearTimeout); io.disconnect() }
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = { nombre: !form.nombre.trim(), comite: !form.comite.trim() }
    setErrors(errs)
    if (errs.nombre || errs.comite) { setShowErr(true); return }
    setShowErr(false)
    const lines = [
      'Hola akuas, quiero saber más sobre el sistema.',
      '',
      `Nombre: ${form.nombre}`,
      `Comité / APR: ${form.comite}`,
      ...(form.region ? [`Región o comuna: ${form.region}`] : []),
      ...(form.socios ? [`Socios: ${form.socios}`] : []),
      ...(form.telefono ? [`Teléfono: ${form.telefono}`] : []),
      ...(form.mensaje ? ['', form.mensaje] : []),
    ]
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  }

  const faqs = [
    { q: '¿Tiene algún costo conversar o ver la demo?', a: 'No. La conversación y la demo son <b>gratis y sin compromiso</b>. Primero te mostramos akuas funcionando y recién ahí decides si te sirve.' },
    { q: '¿Cuánto demora dejar akuas andando?', a: 'Depende del tamaño del comité, pero la mayoría parte en <b>cuestión de días</b>. Nosotros cargamos el padrón de socios contigo y te acompañamos en los primeros cobros.' },
    { q: '¿Necesito comprar equipos o saber de computación?', a: 'No. akuas funciona desde el <b>celular o computador que ya tienes</b>. Si tu comité sabe usar WhatsApp, sabe usar akuas — esa es nuestra vara.' },
    { q: '¿De quién son los datos del comité?', a: 'Del comité, siempre. La información <b>no se va con la directiva</b> cuando cambia: queda registrada y disponible para quienes vengan después.' },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* HERO */}
      <section className="chero">
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
                <li><a href="/sobre-nosotros">Quiénes somos</a></li>
                <li><a href="/blog">Recursos</a></li>
                <li><a href="/contacto" className="active">Contacto</a></li>
              </ul>
              <div className="nav-actions">
                <a href="https://wa.me/56942657280" className="btn primary" target="_blank" rel="noopener">Agendar demo</a>
              </div>
            </div>
          </nav>
          <div className="chero-copy">
            <span className="kicker rv"><span className="dot"></span>Contacto</span>
            <h1 className="rv">Conversemos sobre <em>tu comité.</em></h1>
            <p className="sub rv">Cuéntanos cómo funciona hoy y te mostramos akuas con datos reales. Sin compromiso y sin tecnicismos.</p>
          </div>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="cbody">
        <div className="container">
          <div className="cgrid">

            {/* LEFT */}
            <div className="cleft">
              <span className="csec-eyebrow rv">Escríbenos directo</span>
              <h2 className="rv">Por donde te <em>acomode más.</em></h2>
              <p className="lead rv">Atendemos personas, no tickets. Elige el canal que prefieras y te respondemos a la brevedad.</p>

              <div className="channels rv">
                <a className="chan" href="https://wa.me/56942657280" target="_blank" rel="noopener" style={{ '--cc': 'oklch(0.55 0.13 150)' } as React.CSSProperties}>
                  <span className="ci"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg></span>
                  <span className="ct"><span className="lab">WhatsApp · lo más rápido</span><span className="val">+56 9 4265 7280</span></span>
                  <span className="arr">→</span>
                </a>
                <a className="chan" href="mailto:estrategikaa@gmail.com" style={{ '--cc': 'oklch(0.42 0.10 205)' } as React.CSSProperties}>
                  <span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span>
                  <span className="ct"><span className="lab">Correo</span><span className="val">estrategikaa@gmail.com</span></span>
                  <span className="arr">→</span>
                </a>
                <a className="chan" href="https://www.instagram.com/akuas.cl" target="_blank" rel="noopener" style={{ '--cc': 'oklch(0.55 0.13 35)' } as React.CSSProperties}>
                  <span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg></span>
                  <span className="ct"><span className="lab">Instagram</span><span className="val">@akuas.cl</span></span>
                  <span className="arr">→</span>
                </a>
              </div>

              <div className="steps rv">
                <div className="st-h">Qué pasa después</div>
                {[
                  { n: '1', t: 'Te escuchamos', d: 'Una conversación corta para entender cómo funciona tu comité hoy.' },
                  { n: '2', t: 'Te mostramos akuas', d: 'Una demo con datos reales de un APR, para que veas el sistema funcionando de verdad.' },
                  { n: '3', t: 'Lo dejamos andando', d: 'Cargamos tu padrón y te acompañamos en los primeros pasos, a tu ritmo.' },
                ].map(s => (
                  <div key={s.n} className="step">
                    <span className="sn">{s.n}</span>
                    <div><div className="stt">{s.t}</div><div className="std">{s.d}</div></div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="cright rv">
              <div className="form-card">
                <div className="fc-head">
                  <span className="wa-ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg></span>
                  <h3>Cuéntanos de tu comité</h3>
                </div>
                <p className="fc-note">Completa los datos y al enviar se abre WhatsApp con tu mensaje listo. Tú solo aprietas enviar.</p>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-grid">
                    <div className={`field full${errors.nombre ? ' invalid' : ''}`}>
                      <label htmlFor="f-nombre">Tu nombre <span className="req">*</span></label>
                      <input type="text" id="f-nombre" value={form.nombre} onChange={set('nombre')} placeholder="Ej. Rosa Pérez" autoComplete="name" />
                    </div>
                    <div className={`field full${errors.comite ? ' invalid' : ''}`}>
                      <label htmlFor="f-comite">Nombre del comité / APR <span className="req">*</span></label>
                      <input type="text" id="f-comite" value={form.comite} onChange={set('comite')} placeholder="Ej. APR El Manzano" />
                    </div>
                    <div className="field">
                      <label htmlFor="f-region">Región o comuna</label>
                      <input type="text" id="f-region" value={form.region} onChange={set('region')} placeholder="Ej. Maule, San Clemente" />
                    </div>
                    <div className="field">
                      <label htmlFor="f-socios">N° aproximado de socios</label>
                      <select id="f-socios" value={form.socios} onChange={set('socios')}>
                        <option value="">Selecciona…</option>
                        <option value="Menos de 100 socios">Menos de 100</option>
                        <option value="Entre 100 y 300 socios">100 – 300</option>
                        <option value="Entre 300 y 600 socios">300 – 600</option>
                        <option value="Entre 600 y 1.000 socios">600 – 1.000</option>
                        <option value="Más de 1.000 socios">Más de 1.000</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="f-telefono">Teléfono</label>
                      <input type="tel" id="f-telefono" value={form.telefono} onChange={set('telefono')} placeholder="Ej. +56 9 1234 5678" autoComplete="tel" />
                    </div>
                    <div className="field full">
                      <label htmlFor="f-mensaje">Mensaje o consulta</label>
                      <textarea id="f-mensaje" value={form.mensaje} onChange={set('mensaje')} placeholder="Cuéntanos qué necesitas o qué te gustaría ver en la demo…" />
                    </div>
                  </div>
                  <div className="form-foot">
                    <button type="submit" className="submit">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Z"/></svg>
                      Enviar por WhatsApp
                    </button>
                    <span className="hint">Se abre WhatsApp con tu mensaje escrito. Nada se envía solo.</span>
                  </div>
                  {showErr && <p className="form-err show">Por favor completa tu nombre y el nombre del comité.</p>}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="faq-head">
            <span className="csec-eyebrow rv">Antes de escribir</span>
            <h2 className="rv">Dudas <em>frecuentes.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="qn">0{i + 1}</span>
                  <span className="qt">{f.q}</span>
                  <span className="faq-ic" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner"><p dangerouslySetInnerHTML={{ __html: f.a }} /></div></div>
              </div>
            ))}
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
            <h2>¿Prefieres que te <em>llamemos?</em></h2>
            <p>Déjanos un WhatsApp y coordinamos una hora que te acomode. Una conversación, sin compromiso.</p>
            <a href="https://wa.me/56942657280" className="btn primary lg" target="_blank" rel="noopener"><span className="btn-arrow">Escribir por WhatsApp</span></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
