'use client'
import { useState, useMemo } from 'react'
import SiteFooter from '../../components/SiteFooter'

const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const periodLabel = () => { const d = new Date(); const m = MONTHS[d.getMonth()]; return m[0].toUpperCase() + m.slice(1) + ' ' + d.getFullYear() }
const fmt = (n: number) => Math.round(n).toLocaleString('es-CL')
const toNum = (s: string) => { const v = parseFloat(s.replace(/\./g, '').replace(',', '.')); return isNaN(v) || v < 0 ? 0 : v }

const css = `
:root {
  --ink: oklch(0.18 0.02 240); --ink-2: oklch(0.32 0.025 240); --muted: oklch(0.52 0.015 240);
  --line: oklch(0.88 0.012 230); --paper: oklch(0.975 0.012 92); --paper-2: oklch(0.95 0.018 92);
  --aqua: oklch(0.42 0.10 205); --aqua-2: oklch(0.52 0.11 200); --ocre: oklch(0.72 0.13 75);
  --ocre-soft: oklch(0.92 0.06 80); --brote: oklch(0.65 0.10 145);
  --serif: var(--font-bricolage),"Bricolage Grotesque",ui-serif,Georgia,serif;
  --sans:  var(--font-manrope), "Manrope",system-ui,sans-serif;
  --mono:  var(--font-jetbrains),"JetBrains Mono",ui-monospace,monospace;
  --c-fijo: oklch(0.58 0.12 65); --c-apr: oklch(0.42 0.10 205);
  --c-san: oklch(0.65 0.10 145); --c-iva: oklch(0.52 0.04 250);
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }
.container { max-width: 1340px; margin: 0 auto; padding: 0 44px; }
.k { color: var(--ocre); font-style: italic; font-weight: 600; }

.btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 999px; font-family: var(--sans); font-weight: 600; font-size: 15.5px; text-decoration: none; border: 1px solid transparent; cursor: pointer; transition: transform 0.15s ease, background 0.15s ease; white-space: nowrap; }
.btn:hover { transform: translateY(-1px); }
.btn.primary { background: var(--ocre); color: var(--ink); }
.btn.primary:hover { background: oklch(0.78 0.13 75); }
.btn.lg { padding: 17px 30px; font-size: 17px; }
.btn.block { width: 100%; justify-content: center; }
.btn-arrow::after { content: "→"; margin-left: 4px; transition: transform 0.15s; }
.btn:hover .btn-arrow::after { transform: translateX(3px); }

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
.chero::before { content: ""; position: absolute; right: -130px; top: -160px; width: 460px; height: 460px; border-radius: 50%; border: 1.5px solid oklch(0.97 0.012 92 / 0.06); box-shadow: 0 0 0 60px oklch(0.97 0.012 92 / 0.025), 0 0 0 130px oklch(0.97 0.012 92 / 0.02); pointer-events: none; }
.chero-copy { position: relative; z-index: 2; padding: 22px 0 56px; max-width: 760px; }
.crumbs { display: flex; align-items: center; gap: 9px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.06em; color: oklch(0.7 0.02 240); margin-bottom: 24px; }
.crumbs a { color: var(--ocre-soft); text-decoration: none; }
.crumbs a:hover { color: var(--paper); }
.crumbs .sep { opacity: 0.5; }
.chero .tagrow { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
.chero .pill { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; color: var(--ink); background: var(--ocre); padding: 6px 12px; border-radius: 999px; }
.chero .flag { font-family: var(--mono); font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ocre-soft); }
.chero h1 { font-family: var(--serif); font-weight: 500; font-size: clamp(36px, 4.8vw, 64px); line-height: 1.0; letter-spacing: -0.035em; margin: 0 0 18px; text-wrap: balance; }
.chero h1 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.chero .sub { font-family: var(--serif); font-weight: 300; font-size: clamp(17px, 1.9vw, 22px); line-height: 1.4; color: oklch(0.85 0.02 240); margin: 0; max-width: 56ch; text-wrap: pretty; }

/* Calc layout */
.calc-wrap { background: var(--paper); padding: 0 0 96px; }
.calc { display: grid; grid-template-columns: 1fr 1.05fr; gap: 24px; margin-top: -44px; position: relative; z-index: 3; }
.panel { background: var(--paper); border: 1px solid var(--line); border-radius: 22px; box-shadow: 0 30px 60px -42px rgba(0,0,0,0.28); }

/* Form */
.form { padding: 32px 32px 28px; }
.form-head { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.form-head .n { width: 34px; height: 34px; border-radius: 10px; background: var(--aqua); color: var(--paper); display: grid; place-items: center; }
.form-head .n svg { width: 19px; height: 19px; }
.form-head h2 { font-family: var(--serif); font-weight: 500; font-size: 21px; letter-spacing: -0.02em; margin: 0; }
.field { margin-bottom: 18px; }
.field > label { display: block; font-size: 14px; font-weight: 600; color: var(--ink-2); margin-bottom: 7px; }
.field .hint { font-weight: 400; color: var(--muted); font-size: 12.5px; }
.input-wrap { position: relative; }
.input-wrap .cur { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); font-family: var(--mono); font-size: 15px; color: var(--muted); pointer-events: none; }
.input-wrap .unit { position: absolute; right: 15px; top: 50%; transform: translateY(-50%); font-family: var(--mono); font-size: 12.5px; color: var(--muted); pointer-events: none; }
.field input { width: 100%; font-family: var(--mono); font-size: 16px; color: var(--ink); background: var(--paper-2); border: 1px solid var(--line); border-radius: 11px; padding: 13px 15px 13px 34px; -moz-appearance: textfield; transition: border-color 0.15s ease, background 0.15s ease; }
.field input.plain { padding-left: 15px; }
.field input::-webkit-outer-spin-button, .field input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.field input:focus { outline: none; border-color: var(--aqua); background: var(--paper); }
.field.invalid input { border-color: oklch(0.6 0.16 25); background: oklch(0.96 0.03 25); }
.field .err { display: none; font-size: 12.5px; color: oklch(0.55 0.16 25); margin-top: 6px; }
.field.invalid .err { display: block; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

/* Checkbox */
.checkrow { display: flex; align-items: center; gap: 11px; padding: 12px 14px; background: var(--paper-2); border: 1px solid var(--line); border-radius: 11px; cursor: pointer; margin-bottom: 18px; user-select: none; transition: border-color 0.15s; }
.checkrow:hover { border-color: var(--aqua); }
.check-box { width: 22px; height: 22px; border-radius: 6px; border: 1.5px solid var(--muted); display: grid; place-items: center; flex-shrink: 0; transition: background 0.15s, border-color 0.15s; }
.check-box svg { width: 14px; height: 14px; color: var(--paper); opacity: 0; transition: opacity 0.15s; }
.checkrow.checked .check-box { background: var(--aqua); border-color: var(--aqua); }
.checkrow.checked .check-box svg { opacity: 1; }
.checkrow .lab { font-size: 14.5px; font-weight: 500; color: var(--ink-2); }

/* IVA segmented */
.seg-label { display: block; font-size: 14px; font-weight: 600; color: var(--ink-2); margin-bottom: 7px; }
.seg { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; background: var(--paper-2); border: 1px solid var(--line); border-radius: 12px; padding: 5px; }
.seg button { font-family: var(--sans); font-weight: 600; font-size: 14px; color: var(--muted); background: transparent; border: none; border-radius: 8px; padding: 11px 10px; cursor: pointer; transition: background 0.18s, color 0.18s, box-shadow 0.18s; }
.seg button.on { background: var(--paper); color: var(--ink); box-shadow: 0 2px 8px -3px rgba(0,0,0,0.2); }
.seg button .small { display: block; font-size: 11px; font-weight: 500; color: var(--muted); margin-top: 2px; }
.seg button.on .small { color: var(--aqua); }

/* Result */
.result { background: var(--ink); color: var(--paper); border-radius: 22px; padding: 30px 30px 28px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
.result::before { content: ""; position: absolute; right: -90px; top: -90px; width: 260px; height: 260px; border-radius: 50%; background: radial-gradient(circle, oklch(0.42 0.10 205 / 0.4), transparent 70%); pointer-events: none; }
.result-head { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; margin-bottom: 22px; }
.result-head .t { font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ocre-soft); }
.result-head .period { font-family: var(--mono); font-size: 11px; color: oklch(0.72 0.02 240); }
.consumo-card { background: oklch(0.24 0.02 240); border: 1px solid oklch(0.3 0.02 240); border-radius: 14px; padding: 16px 18px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; position: relative; z-index: 1; }
.consumo-card .cl { font-size: 13px; color: oklch(0.7 0.02 240); }
.consumo-card .cl small { display: block; font-family: var(--mono); font-size: 10.5px; color: oklch(0.62 0.02 240); margin-top: 3px; }
.consumo-card .cv { font-family: var(--serif); font-weight: 500; font-size: 30px; letter-spacing: -0.02em; }
.consumo-card .cv small { font-size: 15px; color: var(--ocre); }
.breakdown { position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 12px; padding: 11px 0; border-top: 1px solid oklch(0.3 0.02 240); font-size: 14px; }
.brow:first-child { border-top: none; }
.brow .dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }
.brow .lab { color: oklch(0.88 0.01 240); }
.brow .lab small { color: oklch(0.62 0.02 240); font-family: var(--mono); font-size: 11px; margin-left: 4px; }
.brow .val { margin-left: auto; font-family: var(--mono); font-size: 14px; color: var(--paper); }
.brow.muted .val { color: oklch(0.66 0.02 240); }
.propbar { display: flex; height: 12px; border-radius: 999px; overflow: hidden; margin: 20px 0 8px; background: oklch(0.26 0.02 240); position: relative; z-index: 1; }
.propbar i { height: 100%; transition: width 0.5s cubic-bezier(0.22,0.61,0.36,1); }
.propbar-legend { display: flex; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 10.5px; color: oklch(0.7 0.02 240); position: relative; z-index: 1; }
.propbar-legend span { display: inline-flex; align-items: center; gap: 6px; }
.propbar-legend i { width: 8px; height: 8px; border-radius: 2px; }
.total-box { margin-top: 22px; padding-top: 20px; border-top: 1px dashed oklch(0.35 0.02 240); display: flex; align-items: flex-end; justify-content: space-between; position: relative; z-index: 1; }
.total-box .tl { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ocre-soft); }
.total-box .tl small { display: block; text-transform: none; letter-spacing: 0; font-size: 11px; color: oklch(0.62 0.02 240); margin-top: 4px; }
.total-box .tv { font-family: var(--serif); font-weight: 600; font-size: clamp(38px, 5vw, 54px); line-height: 0.9; letter-spacing: -0.03em; }
.total-box .tv small { font-size: 0.5em; color: var(--ocre); font-weight: 500; }
.result-actions { margin-top: 24px; position: relative; z-index: 1; }
.result-note { font-family: var(--mono); font-size: 11px; color: oklch(0.6 0.02 240); text-align: center; margin-top: 12px; line-height: 1.5; }

/* CTA */
.fcta { background: var(--aqua); color: var(--paper); text-align: center; padding: 104px 0 108px; position: relative; overflow: hidden; margin-top: 30px; }
.fcta::after { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(60% 90% at 50% 50%, transparent 45%, oklch(0.36 0.09 205 / 0.5) 100%); }
.fcta .ripples { position: absolute; inset: 0; display: grid; place-items: center; pointer-events: none; z-index: 1; }
.fcta .ripple { position: absolute; width: 320px; height: 320px; border-radius: 50%; border: 1.5px solid oklch(0.97 0.012 92 / 0.5); opacity: 0; animation: fctaripple 9s ease-out infinite; }
.fcta .ripple:nth-child(1) { animation-delay: 0s; }
.fcta .ripple:nth-child(2) { animation-delay: 3s; }
.fcta .ripple:nth-child(3) { animation-delay: 6s; }
@keyframes fctaripple { 0% { transform: scale(0.18); opacity: 0; } 8% { opacity: 0.5; } 100% { transform: scale(3.4); opacity: 0; } }
.fcta .ripple-dot { position: absolute; width: 22px; height: 22px; border-radius: 50%; background: var(--ocre); box-shadow: 0 0 0 8px oklch(0.72 0.13 75 / 0.2), 0 0 40px 6px oklch(0.72 0.13 75 / 0.35); z-index: 1; }
.fcta-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
.fcta h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(30px, 4vw, 52px); line-height: 1.04; letter-spacing: -0.03em; margin: 0 0 18px; color: var(--paper); text-wrap: balance; }
.fcta h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.fcta p { font-family: var(--serif); font-weight: 300; font-size: clamp(17px, 1.9vw, 23px); line-height: 1.35; color: oklch(0.95 0.018 92 / 0.9); margin: 0 0 34px; }

/* Footer */
footer.foot { background: var(--ink); color: var(--paper); padding: 82px 0 36px; }
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

@media (max-width: 920px) {
  .container { padding: 0 24px; }
  nav.top ul { display: none; }
  nav.top .row { padding: 20px 0; }
  .calc { grid-template-columns: 1fr; margin-top: -28px; }
  .fcta { padding: 72px 0; }
  .foot-grid { grid-template-columns: 1fr; gap: 36px; }
  .foot-legal { justify-content: flex-start; }
}
@media (prefers-reduced-motion: reduce) {
  .propbar i { transition: none; }
  .fcta .ripple { animation: none; opacity: 0.12; transform: scale(1); }
  .fcta .ripple:nth-child(3) { display: none; }
}

/* Print boleta */
.boleta-print { display: none; }
@media print {
  body > *:not(.boleta-print) { display: none !important; }
  .boleta-print { display: block !important; position: static; font-family: "Manrope",system-ui,sans-serif; color: #1A1F29; max-width: 720px; margin: 0 auto; }
  @page { size: A4 portrait; margin: 12mm; }
  .bol-top { display: flex; justify-content: space-between; align-items: center; background: #2A6F87; color: #fff; border-radius: 14px; padding: 20px 24px; }
  .bol-brand { display: flex; align-items: center; gap: 12px; }
  .bol-brand .m { width: 46px; height: 46px; background: #fff; border-radius: 11px; display: grid; place-items: center; }
  .bol-brand .m svg { width: 80%; height: 80%; }
  .bol-brand .w { font-family: "Bricolage Grotesque",Georgia,serif; font-weight: 500; font-size: 34px; letter-spacing: -0.04em; color: #fff; }
  .bol-brand .w b { color: #E8C887; font-style: italic; }
  .bol-top .doc { text-align: right; font-family: "JetBrains Mono",monospace; font-size: 12px; line-height: 1.7; color: #cfe6ef; text-transform: uppercase; letter-spacing: 0.08em; }
  .bol-title { font-family: "Bricolage Grotesque",Georgia,serif; font-weight: 600; font-size: 30px; margin: 30px 0 6px; letter-spacing: -0.02em; }
  .bol-period { display: inline-block; font-family: "JetBrains Mono",monospace; font-size: 15px; color: #2A6F87; font-weight: 500; background: #eaf2f5; padding: 7px 16px; border-radius: 999px; margin-bottom: 30px; }
  .bol-sec-h { font-family: "Bricolage Grotesque",Georgia,serif; font-weight: 600; font-size: 20px; margin: 0 0 16px; }
  .bol-consumo { display: flex; align-items: stretch; border: 2px solid #d9d3c6; border-radius: 14px; overflow: hidden; margin-bottom: 34px; }
  .bol-cc { flex: 1; padding: 18px 20px; text-align: center; }
  .bol-cc.mid { background: #faf7f0; border-left: 2px solid #d9d3c6; border-right: 2px solid #d9d3c6; }
  .bol-cc .l { font-size: 13px; color: #6b6457; margin-bottom: 8px; }
  .bol-cc .v { font-family: "Bricolage Grotesque",Georgia,serif; font-weight: 600; font-size: 30px; line-height: 1; }
  .bol-cc .v small { font-size: 16px; color: #6b6457; font-weight: 500; }
  .bol-cc.hl { background: #2A6F87; }
  .bol-cc.hl .l { color: #cfe6ef; }
  .bol-cc.hl .v { color: #fff; }
  .bol-cc.hl .v small { color: #E8C887; }
  .bol-vchart { display: flex; align-items: flex-end; justify-content: center; gap: 56px; height: 170px; border-bottom: 2px solid #1A1F29; padding: 0 30px; margin-bottom: 14px; }
  .bol-vcol { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; }
  .bol-vcol .bv { font-family: "Bricolage Grotesque",Georgia,serif; font-weight: 600; font-size: 26px; margin-bottom: 10px; line-height: 1; }
  .bol-vcol .bv small { font-size: 14px; color: #6b6457; font-weight: 500; }
  .bol-vcol .bar { width: 104px; border-radius: 9px 9px 0 0; min-height: 6px; }
  .bol-vcol .cap { font-size: 15px; font-weight: 600; color: #1A1F29; margin-top: 12px; }
  .bol-vnote { text-align: center; font-size: 16px; font-weight: 600; padding: 12px; border-radius: 10px; margin-bottom: 34px; }
  .bol-vnote.more { background: #fbf0dd; color: #9a6a1e; }
  .bol-vnote.less { background: #e7f3ec; color: #2f7d52; }
  .bol-vnote.same { background: #eef0f3; color: #5b6472; }
  .bol-drow { display: flex; align-items: center; gap: 12px; padding: 13px 0; border-bottom: 1px solid #ece7db; font-size: 17px; }
  .bol-drow .sw { width: 13px; height: 13px; border-radius: 4px; flex-shrink: 0; }
  .bol-drow .nm { font-weight: 600; }
  .bol-drow .det { font-family: "JetBrains Mono",monospace; font-size: 12.5px; color: #8a8576; }
  .bol-drow .amt { margin-left: auto; font-family: "JetBrains Mono",monospace; font-size: 17px; font-weight: 500; }
  .bol-total-band { background: #1A1F29; color: #fff; border-radius: 14px; padding: 22px 26px; display: flex; justify-content: space-between; align-items: center; margin: 32px 0 26px; }
  .bol-total-band .l { font-family: "Bricolage Grotesque",Georgia,serif; font-weight: 500; font-size: 22px; }
  .bol-total-band .v { font-family: "Bricolage Grotesque",Georgia,serif; font-weight: 700; font-size: 52px; letter-spacing: -0.03em; line-height: 1; }
  .bol-total-band .v small { font-size: 28px; color: #E8C887; }
  .bol-foot { border-top: 1px solid #d9d3c6; padding-top: 16px; font-size: 12.5px; color: #8a8576; line-height: 1.7; font-family: "JetBrains Mono",monospace; }
  .bol-foot b { color: #2A6F87; }
}
`

type FormState = {
  fijo: string; apr: string; san: string
  ant: string; act: string; prevCon: string
  noSan: boolean; ivaOn: boolean
}

export function CalculadoraClient() {
  const [form, setForm] = useState<FormState>({
    fijo: '3200', apr: '450', san: '250',
    ant: '1240', act: '1264', prevCon: '20',
    noSan: false, ivaOn: false,
  })

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const calc = useMemo(() => {
    const fijo = toNum(form.fijo)
    const apr = toNum(form.apr)
    const san = form.noSan ? 0 : toNum(form.san)
    const ant = toNum(form.ant)
    const act = toNum(form.act)
    const consumo = Math.max(0, act - ant)
    const invalid = act < ant && form.act !== '' && form.ant !== ''
    const costFijo = fijo
    const costApr = consumo * apr
    const costSan = consumo * san
    const subtotal = costFijo + costApr + costSan
    const iva = form.ivaOn ? subtotal * 0.19 : 0
    const total = subtotal + iva
    const t = total > 0 ? total : 1
    return { fijo, apr, san, ant, act, consumo, invalid, costFijo, costApr, costSan, iva, total, t }
  }, [form])

  // Boleta
  const boletaItems = () => {
    const items: { nm: string; det: string; val: number; hex: string }[] = [
      { nm: 'Cargo fijo', det: 'mensual', val: calc.costFijo, hex: '#C08A3E' },
      { nm: 'Consumo de agua', det: `${fmt(calc.consumo)} m³ × $${fmt(calc.apr)}`, val: calc.costApr, hex: '#2A6F87' },
    ]
    if (!form.noSan) items.push({ nm: 'Saneamiento', det: `${fmt(calc.consumo)} m³ × $${fmt(calc.san)}`, val: calc.costSan, hex: '#3F9B6B' })
    if (form.ivaOn) items.push({ nm: 'IVA', det: '19%', val: calc.iva, hex: '#6E7CA8' })
    return items
  }

  const handlePrint = () => window.print()

  const prevC = toNum(form.prevCon)
  const maxC = Math.max(prevC, calc.consumo, 1)
  const H = 140
  const prevH = Math.round(prevC / maxC * H)
  const curH = Math.round(calc.consumo / maxC * H)
  const diff = calc.consumo - prevC

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* HERO */}
      <section className="chero">
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

          <div className="chero-copy">
            <div className="crumbs">
              <a href="/blog">Recursos</a>
              <span className="sep">/</span>
              <span>Calculadora</span>
            </div>
            <div className="tagrow">
              <span className="pill">Herramienta</span>
              <span className="flag">Sin registro</span>
            </div>
            <h1>Calculadora de cobro <em>mensual de agua.</em></h1>
            <p className="sub">Ingresa tus tarifas y las lecturas del medidor. Te mostramos el consumo, el desglose de cada cargo y el total a pagar — al instante.</p>
          </div>
        </div>
      </section>

      {/* CALC */}
      <section className="calc-wrap">
        <div className="container">
          <div className="calc">

            {/* FORM */}
            <div className="panel form">
              <div className="form-head">
                <span className="n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h4"/></svg></span>
                <h2>Datos de tu tarifa</h2>
              </div>

              <div className="field">
                <label>Cargo fijo mensual</label>
                <div className="input-wrap"><span className="cur">$</span>
                  <input type="number" value={form.fijo} onChange={set('fijo')} min={0} placeholder="3.200" />
                </div>
              </div>

              <div className="field">
                <label>Cargo variable APR <span className="hint">— por cada m³ consumido</span></label>
                <div className="input-wrap"><span className="cur">$</span>
                  <input type="number" value={form.apr} onChange={set('apr')} min={0} placeholder="450" />
                  <span className="unit">/ m³</span>
                </div>
              </div>

              <div className={`checkrow${form.noSan ? ' checked' : ''}`} onClick={() => setForm(f => ({ ...f, noSan: !f.noSan }))}>
                <span className="check-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"/></svg></span>
                <span className="lab">Mi APR no tiene alcantarillado</span>
              </div>

              {!form.noSan && (
                <div className="field">
                  <label>Cargo variable saneamiento <span className="hint">— por cada m³</span></label>
                  <div className="input-wrap"><span className="cur">$</span>
                    <input type="number" value={form.san} onChange={set('san')} min={0} placeholder="250" />
                    <span className="unit">/ m³</span>
                  </div>
                </div>
              )}

              <div className="two">
                <div className="field">
                  <label>Lectura anterior</label>
                  <div className="input-wrap">
                    <input className="plain" type="number" value={form.ant} onChange={set('ant')} min={0} placeholder="1.240" />
                    <span className="unit">m³</span>
                  </div>
                </div>
                <div className={`field${calc.invalid ? ' invalid' : ''}`}>
                  <label>Lectura actual</label>
                  <div className="input-wrap">
                    <input className="plain" type="number" value={form.act} onChange={set('act')} min={0} placeholder="1.264" />
                    <span className="unit">m³</span>
                  </div>
                  <div className="err">Debe ser mayor o igual a la lectura anterior.</div>
                </div>
              </div>

              <div className="field">
                <label>Consumo del mes anterior <span className="hint">— opcional, para comparar</span></label>
                <div className="input-wrap">
                  <input className="plain" type="number" value={form.prevCon} onChange={set('prevCon')} min={0} placeholder="20" />
                  <span className="unit">m³</span>
                </div>
              </div>

              <div className="field" style={{ marginBottom: 0 }}>
                <span className="seg-label">IVA</span>
                <div className="seg">
                  <button type="button" className={!form.ivaOn ? 'on' : ''} onClick={() => setForm(f => ({ ...f, ivaOn: false }))}>
                    Exento<span className="small">APR</span>
                  </button>
                  <button type="button" className={form.ivaOn ? 'on' : ''} onClick={() => setForm(f => ({ ...f, ivaOn: true }))}>
                    Con IVA<span className="small">19%</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RESULT */}
            <div className="result">
              <div className="result-head">
                <span className="t">Estimación de cobro</span>
                <span className="period">{periodLabel()}</span>
              </div>

              <div className="consumo-card">
                <span className="cl">Consumo del período<small>Lectura actual − anterior</small></span>
                <span className="cv">{fmt(calc.consumo)} <small>m³</small></span>
              </div>

              <div className="breakdown">
                <div className="brow"><span className="dot" style={{ background: 'var(--c-fijo)' }}></span><span className="lab">Cargo fijo</span><span className="val">${fmt(calc.costFijo)}</span></div>
                <div className="brow"><span className="dot" style={{ background: 'var(--c-apr)' }}></span><span className="lab">Consumo APR <small>{fmt(calc.consumo)} × ${fmt(calc.apr)}</small></span><span className="val">${fmt(calc.costApr)}</span></div>
                {!form.noSan && <div className="brow"><span className="dot" style={{ background: 'var(--c-san)' }}></span><span className="lab">Saneamiento <small>{fmt(calc.consumo)} × ${fmt(calc.san)}</small></span><span className="val">${fmt(calc.costSan)}</span></div>}
                {form.ivaOn && <div className="brow muted"><span className="dot" style={{ background: 'var(--c-iva)' }}></span><span className="lab">IVA <small>19%</small></span><span className="val">${fmt(calc.iva)}</span></div>}
              </div>

              <div className="propbar" aria-hidden="true">
                <i style={{ background: 'var(--c-fijo)', width: `${calc.costFijo / calc.t * 100}%` }}></i>
                <i style={{ background: 'var(--c-apr)', width: `${calc.costApr / calc.t * 100}%` }}></i>
                {!form.noSan && <i style={{ background: 'var(--c-san)', width: `${calc.costSan / calc.t * 100}%` }}></i>}
                {form.ivaOn && <i style={{ background: 'var(--c-iva)', width: `${calc.iva / calc.t * 100}%` }}></i>}
              </div>
              <div className="propbar-legend">
                <span><i style={{ background: 'var(--c-fijo)' }}></i>Cargo fijo</span>
                <span><i style={{ background: 'var(--c-apr)' }}></i>Consumo APR</span>
                {!form.noSan && <span><i style={{ background: 'var(--c-san)' }}></i>Saneamiento</span>}
                {form.ivaOn && <span><i style={{ background: 'var(--c-iva)' }}></i>IVA</span>}
              </div>

              <div className="total-box">
                <span className="tl">Total a pagar<small>Estimación mensual</small></span>
                <span className="tv"><small>$</small>{fmt(calc.total)}</span>
              </div>

              <div className="result-actions">
                <button className="btn primary block lg" type="button" onClick={handlePrint}>
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M5 21h14"/></svg>
                  Descargar boleta de ejemplo
                </button>
                <p className="result-note">Estimación referencial. Genera un PDF tipo boleta con estos valores.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="ripples" aria-hidden="true">
          <span className="ripple"></span><span className="ripple"></span><span className="ripple"></span>
          <span className="ripple-dot"></span>
        </div>
        <div className="container">
          <div className="fcta-inner">
            <h2>¿Tu tarifa aún no está definida o necesitas <em>calcularla desde cero?</em></h2>
            <p>El equipo akuas te ayuda a estructurar tus tarifas según tu realidad y la normativa vigente.</p>
            <a href="https://wa.me/56942657280" className="btn primary lg" target="_blank" rel="noopener"><span className="btn-arrow">El equipo akuas te ayuda</span></a>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* PRINT BOLETA */}
      <div className="boleta-print">
        <div className="bol-top">
          <div className="bol-brand">
            <span className="m"><svg viewBox="0 0 100 100"><g fill="none" stroke="#2A6F87" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32"/><circle cx="50" cy="50" r="20"/></g><circle cx="50" cy="50" r="9" fill="#D4A560"/></svg></span>
            <span className="w">a<b>k</b>uas</span>
          </div>
          <div className="doc">Boleta de ejemplo<br/>Documento referencial</div>
        </div>

        <div className="bol-title">Estimación de tu cuenta de agua</div>
        <div className="bol-period">Período: {periodLabel()}</div>

        <div className="bol-sec-h">Tu consumo este mes</div>
        <div className="bol-consumo">
          <div className="bol-cc"><div className="l">Lectura anterior</div><div className="v">{fmt(calc.ant)} <small>m³</small></div></div>
          <div className="bol-cc mid"><div className="l">Lectura actual</div><div className="v">{fmt(calc.act)} <small>m³</small></div></div>
          <div className="bol-cc hl"><div className="l">Consumiste</div><div className="v">{fmt(calc.consumo)} <small>m³</small></div></div>
        </div>

        <div className="bol-sec-h">¿Usaste más o menos agua que antes?</div>
        <div className="bol-vchart">
          <div className="bol-vcol">
            <span className="bv">{fmt(prevC)} <small>m³</small></span>
            <span className="bar" style={{ height: prevH, background: '#9aa0ab' }}></span>
            <span className="cap">Mes anterior</span>
          </div>
          <div className="bol-vcol">
            <span className="bv">{fmt(calc.consumo)} <small>m³</small></span>
            <span className="bar" style={{ height: curH, background: '#2A6F87' }}></span>
            <span className="cap">Este mes</span>
          </div>
        </div>
        <div className={`bol-vnote${diff > 0 ? ' more' : diff < 0 ? ' less' : ' same'}`}>
          {diff > 0 ? `Usaste ${fmt(diff)} m³ más que el mes pasado` : diff < 0 ? `Usaste ${fmt(-diff)} m³ menos que el mes pasado` : 'Usaste lo mismo que el mes pasado'}
        </div>

        <div className="bol-sec-h">El detalle de tu cuenta</div>
        <div>
          {boletaItems().map(it => (
            <div key={it.nm} className="bol-drow">
              <span className="sw" style={{ background: it.hex }}></span>
              <span className="nm">{it.nm}</span>
              <span className="det">{it.det}</span>
              <span className="amt">${fmt(it.val)}</span>
            </div>
          ))}
        </div>

        <div className="bol-total-band">
          <span className="l">Total a pagar</span>
          <span className="v"><small>$</small>{fmt(calc.total)}</span>
        </div>

        <div className="bol-foot">
          Esta es una estimación generada con la calculadora gratuita de akuas · <b>app.akuas.cl</b><br/>
          No constituye una boleta oficial ni un documento tributario. Valores de ejemplo, sin datos del socio ni del APR.
        </div>
      </div>
    </>
  )
}
