'use client'
import { useEffect } from 'react'

/* ─── CSS embebido — aislado a esta página ─────────────────────────────── */
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
  --sans: var(--font-manrope), "Manrope", system-ui, -apple-system, sans-serif;
  --mono: var(--font-jetbrains), "JetBrains Mono", ui-monospace, monospace;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--ink); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }
.k { color: var(--ocre); font-style: italic; font-weight: 600; }

/* ===== HERO ===== */
.hero {
  position: relative; min-height: 100svh; min-height: 100vh;
  overflow: hidden; background: var(--ink);
  display: flex; flex-direction: column;
}
.carousel { position: absolute; inset: 0; z-index: 0; }
.slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1.1s ease; pointer-events: none; }
.slide.active { opacity: 1; pointer-events: auto; z-index: 1; }
.slide img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center; transform: scale(1.06); transition: transform 7s ease-out; }
.slide.active img { transform: scale(1); }
.scrim {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background:
    linear-gradient(95deg, oklch(0.16 0.02 240 / 0.92) 0%, oklch(0.16 0.02 240 / 0.78) 32%, oklch(0.16 0.02 240 / 0.35) 62%, oklch(0.16 0.02 240 / 0.08) 100%),
    linear-gradient(0deg, oklch(0.16 0.02 240 / 0.55) 0%, oklch(0.16 0.02 240 / 0) 38%);
}

/* ===== NAV ===== */
nav.top { position: relative; z-index: 5; }
nav.top .row { max-width: 1340px; margin: 0 auto; padding: 26px 44px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--paper); }
.brand .mk { width: 38px; height: 38px; background: var(--aqua); border-radius: 10px; display: grid; place-items: center; }
.brand .mk svg { width: 100%; height: 100%; color: var(--paper); }
.brand .wm { font-family: var(--serif); font-weight: 500; font-size: 30px; letter-spacing: -0.045em; line-height: 1; }
.brand .wm .k { color: var(--ocre); }
nav.top ul { display: flex; gap: 34px; list-style: none; margin: 0; padding: 0; }
nav.top ul a { color: oklch(0.92 0.01 240 / 0.85); text-decoration: none; font-size: 15.5px; font-weight: 500; transition: color 0.15s; }
nav.top ul a:hover { color: var(--paper); }
.nav-actions { display: flex; gap: 12px; align-items: center; }
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 999px; font-family: var(--sans); font-weight: 600; font-size: 15.5px; text-decoration: none; border: 1px solid transparent; cursor: pointer; transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease; white-space: nowrap; }
.btn:hover { transform: translateY(-1px); }
.btn.primary { background: var(--ocre); color: var(--ink); }
.btn.primary:hover { background: oklch(0.78 0.13 75); }
.btn.ghost-light { background: oklch(0.97 0.012 92 / 0.08); color: var(--paper); border-color: oklch(0.97 0.012 92 / 0.28); backdrop-filter: blur(4px); }
.btn.ghost-light:hover { background: oklch(0.97 0.012 92 / 0.16); }
.btn.lg { padding: 17px 30px; font-size: 17px; }
.btn-arrow::after { content: "→"; margin-left: 4px; transition: transform 0.15s; }
.btn:hover .btn-arrow::after { transform: translateX(3px); }

/* ===== HERO CONTENT ===== */
.hero-inner { position: relative; z-index: 4; flex: 1; max-width: 1340px; width: 100%; margin: 0 auto; padding: 12px 44px 64px; display: flex; align-items: center; }
.hero-copy { max-width: 660px; }
.eyebrow { display: inline-flex; align-items: center; gap: 11px; font-family: var(--mono); font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--ocre-soft); background: oklch(0.97 0.012 92 / 0.08); border: 1px solid oklch(0.97 0.012 92 / 0.16); padding: 9px 16px; border-radius: 999px; margin-bottom: 30px; font-weight: 500; backdrop-filter: blur(4px); }
.eyebrow .dot { width: 8px; height: 8px; background: var(--ocre); border-radius: 999px; box-shadow: 0 0 0 4px oklch(0.72 0.13 75 / 0.25); }
.hero h1 { font-family: var(--serif); font-weight: 500; font-size: clamp(46px, 6.4vw, 92px); line-height: 0.98; letter-spacing: -0.035em; margin: 0 0 26px; color: var(--paper); text-wrap: balance; }
.hero h1 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.hero .lead { font-family: var(--serif); font-weight: 300; font-size: clamp(19px, 2vw, 25px); line-height: 1.4; color: oklch(0.92 0.01 240 / 0.9); margin: 0 0 40px; max-width: 46ch; text-wrap: pretty; }
.cta-row { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
.cta-note { display: flex; align-items: center; gap: 9px; font-family: var(--mono); font-size: 12.5px; color: oklch(0.92 0.01 240 / 0.7); letter-spacing: 0.04em; text-transform: uppercase; margin-left: 6px; }
.cta-note::before { content: ""; width: 7px; height: 7px; border-radius: 999px; background: var(--brote); box-shadow: 0 0 0 3px oklch(0.65 0.10 145 / 0.3); }

/* ===== CAROUSEL CONTROLS ===== */
.hero-controls { position: absolute; z-index: 6; right: 44px; bottom: 40px; display: flex; align-items: center; gap: 18px; }
.dots { display: flex; gap: 10px; }
.dots button { width: 36px; height: 5px; border-radius: 999px; border: none; background: oklch(0.97 0.012 92 / 0.3); cursor: pointer; padding: 0; transition: background 0.2s; }
.dots button.active { background: var(--ocre); }
.dots button:hover { background: oklch(0.97 0.012 92 / 0.6); }
.arrows { display: flex; gap: 9px; }
.arrows button { width: 50px; height: 50px; border-radius: 999px; border: 1px solid oklch(0.97 0.012 92 / 0.3); background: oklch(0.16 0.02 240 / 0.4); color: var(--paper); cursor: pointer; display: grid; place-items: center; backdrop-filter: blur(6px); transition: background 0.15s, border-color 0.15s; }
.arrows button:hover { background: var(--aqua); border-color: var(--aqua); }
.arrows button svg { width: 20px; height: 20px; }
.slide-caption { position: absolute; z-index: 6; left: 44px; bottom: 44px; font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.1em; text-transform: uppercase; color: oklch(0.92 0.01 240 / 0.78); display: flex; align-items: center; gap: 12px; }
.slide-caption .idx { color: var(--ocre); }
.slide-caption .bar { width: 30px; height: 1px; background: oklch(0.97 0.012 92 / 0.4); }

/* ===== STATS STRIP ===== */
section.stats { background: var(--aqua); color: var(--paper); overflow: hidden; }
section.stats .container { padding-left: 0; padding-right: 0; }
.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
.stat { padding: 52px 48px; display: flex; flex-direction: column; gap: 10px; position: relative; }
.stat + .stat { border-left: 1px solid oklch(0.97 0.012 92 / 0.18); }
.stat .v { font-family: var(--serif); font-weight: 500; font-size: clamp(38px, 4.4vw, 58px); line-height: 0.95; letter-spacing: -0.035em; color: var(--paper); display: flex; align-items: baseline; gap: 4px; }
.stat .v .plus { color: var(--ocre); }
.stat .l { font-family: var(--sans); font-weight: 400; font-size: clamp(15px, 1.3vw, 18px); line-height: 1.4; color: oklch(0.95 0.018 92 / 0.85); max-width: 24ch; text-wrap: pretty; }
.stat .tag { font-family: var(--mono); font-size: 11.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ocre-soft); font-weight: 500; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; }
.stat .tag::before { content: ""; width: 7px; height: 7px; border-radius: 999px; border: 2px solid var(--ocre); }

/* ===== CONTAINERS ===== */
.container { max-width: 1340px; margin: 0 auto; padding: 0 44px; }

/* ===== PUENTE ===== */
section.puente { background: var(--aqua); color: var(--paper); position: relative; overflow: hidden; padding: 156px 0 160px; text-align: center; }
section.puente::after { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(60% 80% at 50% 50%, transparent 40%, oklch(0.36 0.09 205 / 0.55) 100%); }
.ripples { position: absolute; inset: 0; display: grid; place-items: center; pointer-events: none; z-index: 1; }
.ripple { position: absolute; width: 320px; height: 320px; border-radius: 50%; border: 1.5px solid oklch(0.97 0.012 92 / 0.55); opacity: 0; animation: ripple 9s ease-out infinite; }
.ripple:nth-child(1) { animation-delay: 0s; }
.ripple:nth-child(2) { animation-delay: 2.25s; }
.ripple:nth-child(3) { animation-delay: 4.5s; }
.ripple:nth-child(4) { animation-delay: 6.75s; }
@keyframes ripple { 0% { transform: scale(0.18); opacity: 0; } 8% { opacity: 0.5; } 100% { transform: scale(3.6); opacity: 0; } }
.ripple-dot { position: absolute; width: 22px; height: 22px; border-radius: 50%; background: var(--ocre); box-shadow: 0 0 0 8px oklch(0.72 0.13 75 / 0.2), 0 0 40px 6px oklch(0.72 0.13 75 / 0.35); z-index: 1; }
.puente-inner { position: relative; z-index: 2; max-width: 980px; margin: 0 auto; }
.puente .kicker { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ocre-soft); font-weight: 500; margin-bottom: 30px; }
.puente .kicker::before, .puente .kicker::after { content: ""; width: 26px; height: 1px; background: oklch(0.92 0.06 80 / 0.5); }
.puente h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(38px, 5.2vw, 74px); line-height: 1.02; letter-spacing: -0.035em; margin: 0; color: var(--paper); text-wrap: balance; }
.puente h2 .ak { font-weight: 600; }
.puente h2 .ak .k { color: var(--ocre); font-style: italic; font-weight: 600; }
.puente .line2 { font-family: var(--serif); font-weight: 300; font-size: clamp(21px, 2.4vw, 32px); line-height: 1.3; letter-spacing: -0.02em; color: oklch(0.95 0.018 92 / 0.92); margin: 26px auto 0; max-width: 30ch; text-wrap: balance; }
.puente .line2 em { color: var(--ocre); font-style: italic; font-weight: 400; }

/* ===== SOLUCION ===== */
section.solucion { background: var(--paper); color: var(--ink); padding: 116px 0 124px; }
.sol-panel { border: 1px solid var(--line); border-radius: 26px; overflow: hidden; display: grid; grid-template-columns: repeat(4, 1fr); background: var(--paper); }
.sol-col { padding: 42px 34px 46px; display: flex; flex-direction: column; gap: 14px; border-left: 1px solid var(--line); position: relative; }
.sol-col:first-child { border-left: none; }
.sol-col .n { font-family: var(--serif); font-weight: 500; font-size: 30px; line-height: 1; letter-spacing: -0.02em; color: var(--ocre); display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
.sol-col .n::after { content: ""; flex: 1; height: 1px; background: var(--line); }
.sol-col h3 { font-family: var(--serif); font-weight: 500; font-size: 24px; line-height: 1.1; letter-spacing: -0.02em; margin: 0; }
.sol-col p { margin: 0; font-size: 16px; line-height: 1.55; color: var(--ink-2); }
.sol-col.feat { background: var(--aqua); color: var(--paper); }
.sol-col.feat .n { color: var(--ocre); }
.sol-col.feat .n::after { background: oklch(0.97 0.012 92 / 0.25); }
.sol-col.feat h3 { color: var(--paper); }
.sol-col.feat p { color: oklch(0.95 0.018 92 / 0.88); }
.sol-col.feat .pill { align-self: flex-start; font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 500; color: var(--ink); background: var(--ocre); padding: 5px 11px; border-radius: 999px; margin-bottom: 4px; }
.sol-col { transition: background 0.3s ease; }
.sol-col .n, .sol-col h3 { transition: color 0.3s ease; }
.sol-col:not(.feat):hover { background: var(--paper-2); }
.sol-col:not(.feat):hover .n { color: var(--aqua); }
.sol-col.feat:hover { background: var(--aqua-2); }
.sol-col > * { opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1); }
.sol-panel.reveal .sol-col > * { opacity: 1; transform: none; }
.sol-panel.reveal .sol-col:nth-child(1) > * { transition-delay: 0.05s; }
.sol-panel.reveal .sol-col:nth-child(2) > * { transition-delay: 0.17s; }
.sol-panel.reveal .sol-col:nth-child(3) > * { transition-delay: 0.29s; }
.sol-panel.reveal .sol-col:nth-child(4) > * { transition-delay: 0.41s; }

/* ===== SPLIT ===== */
section.split { background: var(--paper-2); color: var(--ink); padding: 116px 0 124px; border-top: 1px solid var(--line); }
.sp-head { text-align: center; max-width: 760px; margin: 0 auto 56px; }
.sp-head .sec-eyebrow { justify-content: center; }
.sp-head .sec-eyebrow::after { content: ""; width: 22px; height: 1px; background: var(--ocre); }
.sp-head h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(34px, 4.4vw, 60px); line-height: 1.02; letter-spacing: -0.03em; margin: 0; text-wrap: balance; }
.sp-head h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.sp-stage { position: relative; display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line); border-radius: 26px; overflow: hidden; min-height: 640px; }
.sp-side { padding: 30px 34px 40px; position: relative; }
.sp-side.sin { background: oklch(0.91 0.006 255); }
.sp-side.con { background: var(--ink); color: var(--paper); }
.sp-label { display: inline-flex; align-items: center; gap: 9px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 500; padding: 8px 15px; border-radius: 999px; margin-bottom: 28px; }
.sp-side.sin .sp-label { color: var(--muted); background: oklch(0.85 0.006 255); }
.sp-side.sin .sp-label::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--muted); }
.sp-side.con .sp-label { color: var(--ink); background: var(--ocre); }
.sp-side.con .sp-label::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--aqua); }
.sp-item { transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1); }
.sp-stage.sp-armed .sp-side.sin .sp-item { opacity: 0; transform: translateX(-34px); }
.sp-stage.sp-armed .sp-side.con .sp-item { opacity: 0; transform: translateX(34px); }
.sp-stage .sp-item.on { opacity: 1 !important; transform: none !important; }

/* chaos (left) */
.chaos { display: flex; flex-direction: column; padding-top: 4px; }
.chaos .sp-item:nth-child(1) { align-self: flex-start; margin-left: 4%; z-index: 3; }
.chaos .sp-item:nth-child(2) { align-self: flex-end; margin-top: -50px; margin-right: 4%; z-index: 2; }
.chaos .sp-item:nth-child(3) { align-self: flex-start; margin-top: -30px; margin-left: 22%; z-index: 6; }
.chaos .sp-item:nth-child(4) { align-self: flex-end; margin-top: -55px; margin-right: 18%; z-index: 5; }
.chaos .sp-item:nth-child(5) { align-self: flex-start; margin-top: -35px; margin-left: 8%; z-index: 7; }
.chaos .sp-item:nth-child(6) { align-self: flex-end; margin-top: -60px; margin-right: 2%; z-index: 8; }
.chaos .sp-item:nth-child(7) { align-self: flex-start; margin-top: -45px; margin-left: 40%; z-index: 9; }
.chaos-card { background: var(--paper); border: 1px solid oklch(0.83 0.008 255); border-radius: 12px; box-shadow: 0 16px 28px -18px rgba(0,0,0,0.32); }
.chaos-card.note { padding: 15px 17px; width: 234px; transform: rotate(-11deg); }
.chaos-card.xls { padding: 12px; width: 220px; transform: rotate(9deg); }
.chaos-card.sticky { width: 150px; min-height: 118px; padding: 14px 15px; transform: rotate(12deg); background: oklch(0.92 0.10 95); border-color: oklch(0.83 0.10 95); box-shadow: 0 14px 26px -16px rgba(0,0,0,0.3); display: flex; align-items: center; }
.chaos-card.receipt { width: 158px; padding: 12px 14px; transform: rotate(-9deg); }
.chaos-card.cuaderno { width: 178px; padding: 13px 14px; transform: rotate(5deg); background: oklch(0.99 0.004 95); border-color: oklch(0.86 0.008 95); box-shadow: 0 14px 26px -16px rgba(0,0,0,0.28); }
.chaos-card.nota2 { width: 128px; min-height: 96px; padding: 12px 13px; transform: rotate(-14deg); background: oklch(0.88 0.08 270); border-color: oklch(0.78 0.08 270); box-shadow: 0 12px 22px -14px rgba(0,0,0,0.3); display: flex; align-items: center; }
.chaos-card .hd { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 9px; display: flex; align-items: center; gap: 7px; }
.chaos-card .hd::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--ocre); }
.note .scrawl { font-family: var(--serif); font-style: italic; font-size: 19px; line-height: 1.3; color: var(--ink-2); letter-spacing: -0.01em; }
.note .scrawl s { color: oklch(0.6 0.14 25); text-decoration-thickness: 2px; }
.sticky .scrawl2 { font-family: var(--serif); font-style: italic; font-size: 17px; line-height: 1.25; color: oklch(0.42 0.07 60); }
.nota2 .scrawl3 { font-family: var(--serif); font-style: italic; font-size: 15px; line-height: 1.25; color: oklch(0.28 0.06 270); }
.receipt .lines { font-family: var(--mono); font-size: 10px; color: var(--muted); line-height: 1.7; }
.receipt .lines .big { font-size: 14px; color: var(--ink-2); }
.cuaderno .lines2 { font-family: var(--mono); font-size: 10px; color: var(--ink-2); line-height: 1.85; }
.cuaderno .lines2 s { color: oklch(0.55 0.15 25); text-decoration-thickness: 1.5px; }
.xls .grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; border: 1px solid oklch(0.8 0.01 255); border-radius: 4px; overflow: hidden; font-family: var(--mono); font-size: 10px; }
.xls .grid div { padding: 5px 7px; border-right: 1px solid oklch(0.86 0.008 255); border-top: 1px solid oklch(0.86 0.008 255); color: var(--ink-2); white-space: nowrap; }
.xls .grid div:nth-child(-n+3) { border-top: none; background: oklch(0.88 0.006 255); color: var(--muted); font-weight: 500; }
.xls .grid .err { background: oklch(0.92 0.08 25); color: oklch(0.5 0.18 25); font-weight: 600; }
.wa { display: flex; flex-direction: column; gap: 6px; align-items: flex-start; width: 78%; }
.wa .bubble { background: oklch(0.88 0.06 150); color: oklch(0.3 0.05 150); padding: 8px 13px; border-radius: 13px 13px 13px 4px; font-size: 12.5px; line-height: 1.3; box-shadow: 0 8px 16px -10px rgba(0,0,0,0.3); max-width: 92%; }
.wa .bubble.me { background: var(--paper); color: var(--ink-2); align-self: flex-end; border-radius: 13px 13px 4px 13px; }

/* dashboard (right) */
.dash { display: flex; flex-direction: column; gap: 10px; }
.dash-top { display: flex; justify-content: space-between; align-items: center; }
.dash-top .g { font-family: var(--serif); font-weight: 500; font-size: 18px; letter-spacing: -0.02em; }
.dash-top .g small { display: block; font-family: var(--mono); font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: oklch(0.66 0.02 240); margin-top: 3px; font-weight: 400; }
.dash-pill { background: var(--brote); color: var(--paper); font-family: var(--mono); font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 11px; border-radius: 999px; font-weight: 500; }
.dash-kpis { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
.dash-kpi { background: oklch(0.24 0.02 240); border: 1px solid oklch(0.3 0.02 240); border-radius: 10px; padding: 11px 12px; }
.dash-kpi .k { font-family: var(--mono); font-size: 8.5px; letter-spacing: 0.1em; text-transform: uppercase; color: oklch(0.68 0.02 240); }
.dash-kpi .v { font-family: var(--serif); font-weight: 500; font-size: 22px; line-height: 1; margin-top: 5px; }
.dash-kpi .v small { color: var(--ocre); font-size: 13px; }
.dash-kpi .d { font-family: var(--mono); font-size: 9px; color: var(--brote); margin-top: 4px; letter-spacing: 0.03em; }
.dash-kpi .d.warn { color: var(--ocre); }
.dash-duo { display: grid; grid-template-columns: 1.5fr 1fr; gap: 8px; }
.dash-chart { background: var(--aqua); border-radius: 10px; padding: 12px 14px; }
.dash-chart .ct { font-family: var(--mono); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: oklch(0.92 0.03 200); }
.dash-chart svg { width: 100%; height: 52px; display: block; margin-top: 8px; }
.dash-mini { background: oklch(0.24 0.02 240); border: 1px solid oklch(0.3 0.02 240); border-radius: 10px; padding: 11px 12px; display: flex; flex-direction: column; gap: 8px; justify-content: center; }
.dash-mini .k { font-family: var(--mono); font-size: 8.5px; letter-spacing: 0.1em; text-transform: uppercase; color: oklch(0.68 0.02 240); }
.dash-mini .v { font-family: var(--serif); font-weight: 500; font-size: 22px; line-height: 1; }
.dash-mini .bar { height: 6px; border-radius: 999px; background: oklch(0.3 0.02 240); overflow: hidden; }
.dash-mini .bar i { display: block; height: 100%; width: 92%; background: var(--brote); border-radius: 999px; }
.dash-list { background: oklch(0.24 0.02 240); border: 1px solid oklch(0.3 0.02 240); border-radius: 10px; padding: 6px 14px; }
.dash-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 7px 0; border-top: 1px solid oklch(0.3 0.02 240); font-size: 13px; }
.dash-row:first-of-type { border-top: none; }
.dash-row .nm { font-weight: 500; }
.dash-row .mn { font-family: var(--mono); font-size: 11px; color: oklch(0.7 0.02 240); margin-left: auto; }
.dash-row .st { font-family: var(--mono); font-size: 9px; padding: 2px 8px; border-radius: 999px; letter-spacing: 0.08em; text-transform: uppercase; }
.st.ok { background: oklch(0.32 0.08 150); color: oklch(0.86 0.1 150); }
.st.late { background: oklch(0.34 0.08 75); color: oklch(0.9 0.1 75); }
.sp-vs { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) scale(0.5); opacity: 0; z-index: 6; transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.34, 1.4, 0.5, 1); }
.sp-vs.on { opacity: 1; transform: translate(-50%, -50%) scale(1); }
.sp-vs .badge { width: 64px; height: 64px; border-radius: 50%; background: var(--paper); border: 1px solid var(--line); box-shadow: 0 18px 36px -16px rgba(0,0,0,0.4); display: grid; place-items: center; }
.sp-vs .badge svg { width: 38px; height: 38px; }

/* ===== FAQ ===== */
section.faq { background: var(--paper); color: var(--ink); padding: 116px 0 130px; border-top: 1px solid var(--line); }
.faq-head { text-align: center; max-width: 720px; margin: 0 auto 52px; }
.faq-head .sec-eyebrow { justify-content: center; }
.faq-head .sec-eyebrow::after { content: ""; width: 22px; height: 1px; background: var(--ocre); }
.faq-head h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(34px, 4.4vw, 60px); line-height: 1.02; letter-spacing: -0.03em; margin: 0; text-wrap: balance; }
.faq-head h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.faq-list { max-width: 880px; margin: 0 auto; border-top: 1px solid var(--line); }
.faq-item { border-bottom: 1px solid var(--line); }
.faq-q { width: 100%; background: none; border: none; cursor: pointer; text-align: left; display: grid; grid-template-columns: 34px 1fr 26px; gap: 18px; align-items: center; padding: 28px 6px; font-family: inherit; color: var(--ink); }
.faq-q .qn { font-family: var(--mono); font-size: 13px; color: var(--ocre); letter-spacing: 0.1em; font-weight: 500; }
.faq-q .qt { font-family: var(--serif); font-weight: 500; font-size: clamp(19px, 2.1vw, 26px); letter-spacing: -0.02em; line-height: 1.2; transition: color 0.2s ease; }
.faq-q:hover .qt { color: var(--aqua); }
.faq-ic { position: relative; width: 24px; height: 24px; flex-shrink: 0; justify-self: end; }
.faq-ic::before, .faq-ic::after { content: ""; position: absolute; background: var(--aqua); border-radius: 2px; transition: transform 0.3s ease, opacity 0.3s ease; }
.faq-ic::before { left: 0; top: 50%; width: 24px; height: 2.5px; transform: translateY(-50%); }
.faq-ic::after { top: 0; left: 50%; width: 2.5px; height: 24px; transform: translateX(-50%); }
.faq-item.open .faq-ic::after { opacity: 0; transform: translateX(-50%) scaleY(0); }
.faq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.38s cubic-bezier(0.22, 0.61, 0.36, 1); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a-inner { overflow: hidden; }
.faq-a p { margin: 0; padding: 2px 52px 30px; font-size: 17px; line-height: 1.6; color: var(--ink-2); max-width: 64ch; text-wrap: pretty; }
.faq-a p b { color: var(--ink); font-weight: 600; }

/* ===== CTA FINAL ===== */
section.cta-final { background: var(--aqua); color: var(--paper); position: relative; overflow: hidden; padding: 132px 0 136px; text-align: center; }
section.cta-final::after { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(60% 85% at 50% 50%, transparent 42%, oklch(0.36 0.09 205 / 0.5) 100%); }
.cta-inner { position: relative; z-index: 2; max-width: 860px; margin: 0 auto; }
.cta-final .kicker { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ocre-soft); font-weight: 500; margin-bottom: 28px; }
.cta-final .kicker::before, .cta-final .kicker::after { content: ""; width: 26px; height: 1px; background: oklch(0.92 0.06 80 / 0.5); }
.cta-final h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(40px, 5.4vw, 78px); line-height: 1.0; letter-spacing: -0.035em; margin: 0; color: var(--paper); text-wrap: balance; }
.cta-final h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.cta-final .csub { font-family: var(--serif); font-weight: 300; font-size: clamp(19px, 2.1vw, 27px); line-height: 1.35; color: oklch(0.95 0.018 92 / 0.92); margin: 24px auto 0; max-width: 30ch; text-wrap: pretty; }
.cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 40px; }
.cta-reassure { display: flex; gap: 8px 22px; justify-content: center; align-items: center; flex-wrap: wrap; margin-top: 34px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: oklch(0.95 0.018 92 / 0.78); }
.cta-reassure span { display: inline-flex; align-items: center; gap: 9px; }
.cta-reassure span::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--ocre); }

/* ===== FOOTER ===== */
footer.foot { background: var(--ink); color: var(--paper); padding: 82px 0 36px; }
.foot-grid { display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 48px; padding-bottom: 46px; border-bottom: 1px solid oklch(0.3 0.03 240); }
.foot .brand-row { display: flex; align-items: center; gap: 11px; margin-bottom: 18px; }
.foot .brand-row .mk { width: 36px; height: 36px; background: var(--aqua); border-radius: 9px; display: grid; place-items: center; }
.foot .brand-row .mk svg { width: 100%; height: 100%; color: var(--paper); }
.foot .brand-row .wm { font-family: var(--serif); font-weight: 500; font-size: 30px; letter-spacing: -0.045em; }
.foot .brand-row .wm .k { color: var(--ocre); font-style: italic; }
.foot .tagline { font-family: var(--serif); font-weight: 300; font-size: 19px; line-height: 1.4; color: oklch(0.82 0.02 240); margin: 0 0 22px; max-width: 34ch; text-wrap: pretty; }
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

/* ===== PROBLEMA ===== */
section.problema { background: var(--paper-2); color: var(--ink); padding: 116px 0 124px; border-top: 1px solid var(--line); }
.sec-head { display: grid; grid-template-columns: 1.35fr 1fr; gap: 56px; align-items: end; margin-bottom: 72px; }
.sec-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--aqua); font-weight: 500; margin-bottom: 22px; }
.sec-eyebrow::before { content: ""; width: 22px; height: 1px; background: var(--ocre); }
.sec-head h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(36px, 4.4vw, 62px); line-height: 1.02; letter-spacing: -0.03em; margin: 0; text-wrap: balance; }
.sec-head h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.sec-head .sub { font-family: var(--serif); font-weight: 300; font-size: clamp(18px, 1.6vw, 22px); line-height: 1.45; color: var(--ink-2); margin: 0; text-wrap: pretty; }
.prob-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.prob-card { background: var(--paper); border: 1px solid var(--line); border-radius: 22px; padding: 34px 32px 30px; display: flex; flex-direction: column; gap: 18px; transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1), box-shadow 0.28s ease, border-color 0.28s ease; }
.prob-card:hover { transform: translateY(-7px); box-shadow: 0 28px 54px -28px oklch(0.18 0.02 240 / 0.38); border-color: var(--aqua); }
.prob-card .top { display: flex; align-items: center; gap: 14px; }
.prob-card .ic { width: 52px; height: 52px; flex-shrink: 0; border-radius: 14px; background: var(--paper-2); border: 1px solid var(--line); display: grid; place-items: center; color: var(--aqua); transition: background 0.28s ease, color 0.28s ease, border-color 0.28s ease, transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1); }
.prob-card:hover .ic { background: var(--aqua); color: var(--paper); border-color: var(--aqua); transform: scale(1.08) rotate(-4deg); }
.prob-card .ic svg { width: 26px; height: 26px; }
.prob-card .num { font-family: var(--mono); font-size: 12px; color: var(--ocre); letter-spacing: 0.16em; font-weight: 500; text-transform: uppercase; }
.prob-card h3 { font-family: var(--serif); font-weight: 500; font-size: 25px; line-height: 1.1; letter-spacing: -0.02em; margin: 2px 0 0; }
.prob-card p { margin: 0; font-size: 16.5px; line-height: 1.5; color: var(--ink-2); }
.prob-card .quote { margin-top: auto; padding: 16px 18px; background: var(--paper-2); border-left: 3px solid var(--ocre); border-radius: 0 10px 10px 0; font-family: var(--serif); font-style: italic; font-weight: 400; font-size: 15.5px; line-height: 1.4; color: var(--ink-2); transition: border-left-width 0.28s ease, padding-left 0.28s ease, color 0.28s ease; }
.prob-card:hover .quote { border-left-width: 5px; padding-left: 20px; color: var(--ink); }
.prob-foot { margin-top: 56px; padding-top: 36px; border-top: 1px solid var(--line); display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
.prob-foot .big { font-family: var(--serif); font-weight: 500; font-size: clamp(48px, 6vw, 76px); line-height: 0.9; letter-spacing: -0.035em; color: var(--aqua); }
.prob-foot .big small { font-size: 0.42em; color: var(--ocre); font-weight: 500; }
.prob-foot .txt { font-family: var(--serif); font-weight: 300; font-size: clamp(19px, 2vw, 26px); line-height: 1.3; color: var(--ink-2); max-width: 30ch; text-wrap: pretty; }
.prob-foot .txt b { color: var(--ink); font-weight: 600; }
.prob-foot-note { flex-basis: 100%; margin-top: 6px; font-family: var(--mono); font-size: 11.5px; letter-spacing: 0.05em; color: var(--muted); display: flex; align-items: center; gap: 9px; }
.prob-foot-note::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--ocre); flex-shrink: 0; }

@media (prefers-reduced-motion: reduce) {
  .prob-card, .prob-card:hover, .prob-card .ic, .prob-card:hover .ic, .slide img { transition: none; transform: none; }
  .ripple { animation: none; opacity: 0.12; transform: scale(1); }
  .ripple:nth-child(3), .ripple:nth-child(4) { display: none; }
  .sol-col > * { opacity: 1 !important; transform: none !important; transition: none !important; }
}

@media (max-width: 1100px) {
  .sol-panel { grid-template-columns: 1fr 1fr; }
  .sol-col:nth-child(3) { border-left: none; }
  .sol-col:nth-child(3), .sol-col:nth-child(4) { border-top: 1px solid var(--line); }
  .sol-col.feat { border-top-color: transparent; }
}

@media (max-width: 860px) {
  nav.top ul { display: none; }
  nav.top .row { padding: 20px 24px; }
  .hero-inner { padding: 8px 24px 96px; align-items: flex-start; padding-top: 8vh; }
  .scrim { background: linear-gradient(0deg, oklch(0.16 0.02 240 / 0.92) 0%, oklch(0.16 0.02 240 / 0.6) 45%, oklch(0.16 0.02 240 / 0.3) 100%); }
  .hero-controls { right: 24px; bottom: 24px; }
  .slide-caption { display: none; }
  .cta-row .btn { flex: 1; justify-content: center; }
  .container { padding: 0 24px; }
  .stats-grid { grid-template-columns: 1fr; }
  .stat { padding: 36px 24px; }
  .stat + .stat { border-left: none; border-top: 1px solid oklch(0.97 0.012 92 / 0.18); }
  section.problema { padding: 80px 0 88px; }
  section.puente { padding: 96px 0 100px; }
  section.solucion { padding: 80px 0 88px; }
  .sol-panel { grid-template-columns: 1fr; }
  .sol-col { border-left: none !important; border-top: 1px solid var(--line); }
  .sol-col:first-child { border-top: none; }
  section.split { padding: 80px 0 88px; }
  .sp-stage { grid-template-columns: 1fr; min-height: 0; }
  .sp-vs { display: none; }
  .sp-side.con { border-top: 1px solid oklch(0.3 0.02 240); }
  .chaos-card.note, .chaos-card.xls { width: auto; max-width: 260px; }
  .wa { width: 100%; }
  section.faq { padding: 78px 0 90px; }
  .faq-q { grid-template-columns: 26px 1fr 22px; gap: 13px; padding: 22px 2px; }
  .faq-a p { padding: 2px 2px 26px; }
  section.cta-final { padding: 88px 0 92px; }
  .foot-grid { grid-template-columns: 1fr; gap: 36px; }
  .foot-legal { justify-content: flex-start; }
  .sec-head { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; align-items: start; }
  .prob-grid { grid-template-columns: 1fr; }
  .prob-foot { gap: 16px; }
}
`

export function HomeClient() {
  /* ── Carousel ─────────────────────────────────────────────────────────── */
  useEffect(() => {
    const slides = Array.from(document.querySelectorAll<HTMLElement>('.slide'))
    const dotsWrap = document.getElementById('dots')
    const caption = document.getElementById('slideCaption')
    if (!slides.length || !dotsWrap || !caption) return

    const idxEl = caption.querySelector<HTMLElement>('.idx')
    const txtEl = caption.querySelector<HTMLElement>('.txt')
    const n = slides.length
    let cur = 0
    let timer: ReturnType<typeof setInterval> | null = null
    const DELAY = 6000

    slides.forEach((_, i) => {
      const b = document.createElement('button')
      if (i === 0) b.className = 'active'
      b.addEventListener('click', () => go(i, true))
      dotsWrap.appendChild(b)
    })
    const dots = Array.from(dotsWrap.children) as HTMLElement[]

    const pad = (x: number) => (x < 10 ? '0' : '') + x

    function render() {
      slides.forEach((s, i) => s.classList.toggle('active', i === cur))
      dots.forEach((d, i) => d.classList.toggle('active', i === cur))
      if (idxEl) idxEl.textContent = `${pad(cur + 1)} / ${pad(n)}`
      if (txtEl) txtEl.textContent = slides[cur].getAttribute('data-caption') || ''
    }

    function go(i: number, manual: boolean) {
      cur = (i + n) % n
      render()
      if (manual) restart()
    }

    function restart() {
      if (timer) clearInterval(timer)
      timer = setInterval(() => go(cur + 1, false), DELAY)
    }

    const nextBtn = document.getElementById('next')
    const prevBtn = document.getElementById('prev')
    const hero = document.querySelector<HTMLElement>('.hero')
    const onNext = () => go(cur + 1, true)
    const onPrev = () => go(cur - 1, true)
    const onEnter = () => { if (timer) clearInterval(timer) }
    const onLeave = () => restart()

    nextBtn?.addEventListener('click', onNext)
    prevBtn?.addEventListener('click', onPrev)
    hero?.addEventListener('mouseenter', onEnter)
    hero?.addEventListener('mouseleave', onLeave)

    render()
    restart()

    return () => {
      if (timer) clearInterval(timer)
      nextBtn?.removeEventListener('click', onNext)
      prevBtn?.removeEventListener('click', onPrev)
      hero?.removeEventListener('mouseenter', onEnter)
      hero?.removeEventListener('mouseleave', onLeave)
      dotsWrap.innerHTML = ''
    }
  }, [])

  /* ── Sol panel reveal ─────────────────────────────────────────────────── */
  useEffect(() => {
    const panel = document.querySelector<HTMLElement>('.sol-panel')
    if (!panel) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) { panel.classList.add('reveal'); return }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { panel.classList.add('reveal'); io.disconnect() } })
    }, { threshold: 0.25 })
    io.observe(panel)
    return () => io.disconnect()
  }, [])

  /* ── Split scroll animation ───────────────────────────────────────────── */
  useEffect(() => {
    const stage = document.getElementById('spStage')
    if (!stage) return
    const items = Array.from(stage.querySelectorAll<HTMLElement>('.sp-item'))
    const vs = stage.querySelector<HTMLElement>('.sp-vs')
    const maxStep = items.reduce((m, el) => Math.max(m, +(el.getAttribute('data-rev') || 0)), 0)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('requestAnimationFrame' in window)) {
      items.forEach(el => el.classList.add('on'))
      vs?.classList.add('on')
      return
    }
    stage.classList.add('sp-armed')
    let ticking = false

    function update() {
      ticking = false
      const r = stage!.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.max(0, Math.min(1, (vh * 0.82 - r.top) / (vh * 0.64)))
      const count = Math.floor(p * (maxStep + 1))
      items.forEach(el => el.classList.toggle('on', p > 0.02 && +(el.getAttribute('data-rev') || 0) <= count))
      vs?.classList.toggle('on', p > 0.12)
    }

    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', update) }
  }, [])

  /* ── FAQ accordion ────────────────────────────────────────────────────── */
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.faq-item'))
    const cleanups: (() => void)[] = []
    items.forEach(item => {
      const btn = item.querySelector<HTMLButtonElement>('.faq-q')
      if (!btn) return
      const handler = () => {
        const isOpen = item.classList.contains('open')
        items.forEach(other => { other.classList.remove('open'); other.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false') })
        if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true') }
      }
      btn.addEventListener('click', handler)
      cleanups.push(() => btn.removeEventListener('click', handler))
    })
    return () => cleanups.forEach(fn => fn())
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="carousel" id="carousel">
          <div className="slide active" data-caption="Todo el sistema, sobre tu territorio">
            <img src="/inicio.png" alt="Vista aérea de un valle rural con la red de agua" />
          </div>
          <div className="slide" data-caption="Lecturas en terreno, desde el celular">
            <img src="/inicio3.png" alt="Operario de un APR revisando datos en una tablet junto a un pozo" />
          </div>
          <div className="slide" data-caption="La boleta, clara y a la mano">
            <img src="/Inicio4.png" alt="Manos de una persona mayor con la boleta en papel y la app en el celular" />
          </div>
          <div className="slide" data-caption="Tu panel, en cualquier pantalla">
            <img src="/inicio2.png" alt="El panel de akuas en un computador y una tablet" />
          </div>
        </div>

        <div className="scrim"></div>

        <nav className="top">
          <div className="row">
            <a href="#" className="brand">
              <span className="mk">
                <svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32" /><circle cx="50" cy="50" r="20" /></g><circle cx="50" cy="50" r="9" fill="var(--ocre)" /></svg>
              </span>
              <span className="wm">a<span className="k">k</span>uas</span>
            </a>
            <ul>
              <li><a href="/funcionalidades">Funcionalidades</a></li>
              <li><a href="/sobre-nosotros">Quiénes somos</a></li>
              <li><a href="/blog">Recursos</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
            <div className="nav-actions">
              <a href="#contacto" className="btn ghost-light">Contacto</a>
              <a href="#demo" className="btn primary">Agendar demo</a>
            </div>
          </div>
        </nav>

        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow"><span className="dot"></span>El sistema del agua rural</span>
            <h1>El agua no para.<br /><em>Tu gestión tampoco.</em></h1>
            <p className="lead">El sistema de gestión hecho para los Comités de Agua Potable Rural de Chile. Socios, lecturas, boletas y pagos — en un solo lugar, claro y simple.</p>
          </div>
        </div>

        <div className="slide-caption" id="slideCaption">
          <span className="idx">01 / 04</span>
          <span className="bar"></span>
          <span className="txt">Todo el sistema, sobre tu territorio</span>
        </div>

        <div className="hero-controls">
          <div className="dots" id="dots"></div>
          <div className="arrows">
            <button id="prev" aria-label="Anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg></button>
            <button id="next" aria-label="Siguiente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg></button>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="tag">El sector</div>
              <div className="v"><span className="plus">+</span>2.000</div>
              <div className="l">APR activos en Chile dando agua a sus comunidades.</div>
            </div>
            <div className="stat">
              <div className="tag">El impacto</div>
              <div className="v">Miles</div>
              <div className="l">de familias rurales con agua segura cada día.</div>
            </div>
            <div className="stat">
              <div className="tag">El marco</div>
              <div className="v">Ley 20.998</div>
              <div className="l">vigente desde 2020, que ordena y formaliza los servicios sanitarios rurales.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMA ===== */}
      <section className="problema" id="problema">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="sec-eyebrow">El problema</span>
              <h2>Hoy el comité vive entre el cuaderno, el Excel y <em>mil WhatsApp.</em></h2>
            </div>
            <p className="sub">Tres herramientas que no se hablan entre sí. La información se reparte, se repite y, tarde o temprano, se pierde.</p>
          </div>

          <div className="prob-grid">
            <div className="prob-card">
              <div className="top">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h11a2 2 0 0 1 2 2v15a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M4 7h2M4 12h2M4 17h2" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>
                </span>
                <div>
                  <div className="num">01 · El cuaderno</div>
                  <h3>Datos que se pierden con la directiva.</h3>
                </div>
              </div>
              <p>Cuando cambia el presidente o el tesorero, el cuaderno se va con él. Cada nueva directiva empieza de cero.</p>
              <div className="quote">&ldquo;Mi suegra fue presidenta. El cuaderno se perdió cuando ella se enfermó.&rdquo;</div>
            </div>

            <div className="prob-card">
              <div className="top">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M3 14.5h18M9 4v16M15 4v16" /></svg>
                </span>
                <div>
                  <div className="num">02 · El Excel</div>
                  <h3>Planillas que solo entiende quien las hizo.</h3>
                </div>
              </div>
              <p>Fórmulas frágiles, copias por correo y versiones que no calzan. Una celda mal puesta y la asamblea no termina nunca.</p>
              <div className="quote">&ldquo;Las socias se aburren cuadrando cifras. Después no quieren venir a la próxima.&rdquo;</div>
            </div>

            <div className="prob-card">
              <div className="top">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4V5Z" /><path d="M8.5 9h7M8.5 12.5h4" /></svg>
                </span>
                <div>
                  <div className="num">03 · Los WhatsApp</div>
                  <h3>Cobros y avisos repartidos en mil mensajes.</h3>
                </div>
              </div>
              <p>El tesorero anota lecturas, escribe boletas a mano y recorre el sector casa por casa para entregarlas y cobrar.</p>
              <div className="quote">&ldquo;A veces vuelvo tres veces a la misma casa porque no había nadie.&rdquo;</div>
            </div>
          </div>

          <div className="prob-foot">
            <div className="big">12<small> horas</small></div>
            <div className="txt">es lo que pierde cada comité al mes en trámites que <b>akuas resuelve en minutos.</b></div>
            <div className="prob-foot-note">Estimación basada en entrevistas con comités.</div>
          </div>
        </div>
      </section>

      {/* ===== PUENTE ===== */}
      <section className="puente" id="solucion">
        <div className="ripples" aria-hidden="true">
          <span className="ripple"></span>
          <span className="ripple"></span>
          <span className="ripple"></span>
          <span className="ripple"></span>
          <span className="ripple-dot"></span>
        </div>
        <div className="container">
          <div className="puente-inner">
            <span className="kicker">El cambio</span>
            <h2><span className="ak">a<span className="k">k</span>uas</span> reúne todo en un solo lugar.</h2>
            <p className="line2">Para que el comité funcione, <em>aunque cambie la directiva.</em></p>
          </div>
        </div>
      </section>

      {/* ===== SOLUCION ===== */}
      <section className="solucion" id="producto">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="sec-eyebrow">La solución</span>
              <h2>El comité entero cabe en <em>cuatro funciones.</em></h2>
            </div>
            <p className="sub">Sin tecnicismos ni curva de aprendizaje. Si tu comité sabe usar WhatsApp, sabe usar akuas.</p>
          </div>
          <div className="sol-panel">
            <div className="sol-col">
              <div className="n">01</div>
              <h3>Socios en un padrón vivo</h3>
              <p>Todos los socios, sus medidores y su historial en un registro ordenado que no se pierde cuando cambia la directiva.</p>
            </div>
            <div className="sol-col">
              <div className="n">02</div>
              <h3>Lecturas y boletas en segundos</h3>
              <p>Anota la lectura desde el celular: akuas calcula el consumo y genera la boleta de cada socio al instante, sin sacar cuentas a mano.</p>
            </div>
            <div className="sol-col">
              <div className="n">03</div>
              <h3>Pagos y morosidad al instante</h3>
              <p>Registra los pagos, mira quién está al día y quién no, y programa los avisos sin recorrer el sector casa por casa.</p>
            </div>
            <div className="sol-col feat">
              <span className="pill">El que más tranquiliza</span>
              <div className="n">04</div>
              <h3>Listo para la DOH</h3>
              <p>Informes de auditoría completos con un clic. Todo lo que exige la Subdirección, ordenado y listo para presentar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPLIT ===== */}
      <section className="split" id="diferencia">
        <div className="container">
          <div className="sp-head">
            <span className="sec-eyebrow">El antes y el después</span>
            <h2>El mismo comité, sin el <em>caos.</em></h2>
          </div>
          <div className="sp-stage" id="spStage">
            <div className="sp-side sin">
              <span className="sp-item sp-label" data-rev="0">Sin akuas</span>
              <div className="chaos">
                <div className="sp-item" data-rev="1">
                  <div className="chaos-card note">
                    <div className="hd">Boleta a mano</div>
                    <div className="scrawl">N°218 · R. Pérez<br />24 m³ → <s>$13.200</s> $12.480?</div>
                  </div>
                </div>
                <div className="sp-item" data-rev="2">
                  <div className="chaos-card xls">
                    <div className="hd">cobros_2026_final_v3.xls</div>
                    <div className="grid">
                      <div>Socio</div><div>m³</div><div>Total</div>
                      <div>J. Soto</div><div>31</div><div>$16.100</div>
                      <div>M. L.</div><div>—</div><div className="err">#¡REF!</div>
                    </div>
                  </div>
                </div>
                <div className="sp-item" data-rev="3">
                  <div className="wa">
                    <div className="bubble">¿Ya pagó la cuenta del agua?</div>
                    <div className="bubble me">no me ha llegado el papel…</div>
                    <div className="bubble">lo tengo anotado en el cuaderno</div>
                    <div className="bubble me">¿cuánto era?</div>
                    <div className="bubble">espera que busco</div>
                  </div>
                </div>
                <div className="sp-item" data-rev="4">
                  <div className="chaos-card sticky">
                    <div className="scrawl2">¡Ojo!<br />falta cerrar<br />mayo</div>
                  </div>
                </div>
                <div className="sp-item" data-rev="4">
                  <div className="chaos-card receipt">
                    <div className="hd">Recibo s/n</div>
                    <div className="lines">····· ··· ···<br />medidor: ?<br /><span className="big">total: $——</span></div>
                  </div>
                </div>
                <div className="sp-item" data-rev="5">
                  <div className="chaos-card cuaderno">
                    <div className="hd">Cuaderno</div>
                    <div className="lines2">
                      R. Pérez → $12.480<br />
                      <s>J. Soto → pagó?</s><br />
                      M. López → debe 2<br />
                      <s>L. Castro → ok</s><br />
                      P. Núñez → ????
                    </div>
                  </div>
                </div>
                <div className="sp-item" data-rev="5">
                  <div className="chaos-card nota2">
                    <div className="scrawl3">URGENTE<br />asamblea<br />martes!!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sp-side con">
              <span className="sp-item sp-label" data-rev="0">Con akuas</span>
              <div className="dash">
                <div className="sp-item" data-rev="1">
                  <div className="dash-top">
                    <div className="g">APR El Manzano<small>Panel · Lunes 12 de mayo</small></div>
                    <span className="dash-pill">92% al día</span>
                  </div>
                </div>
                <div className="sp-item" data-rev="2">
                  <div className="dash-kpis">
                    <div className="dash-kpi"><div className="k">Recaudado</div><div className="v">$4,2<small>M</small></div><div className="d">+12% vs abril</div></div>
                    <div className="dash-kpi"><div className="k">Por cobrar</div><div className="v">$1,8<small>M</small></div><div className="d warn">12 boletas</div></div>
                    <div className="dash-kpi"><div className="k">Socios al día</div><div className="v">92<small>%</small></div><div className="d">380 de 412</div></div>
                    <div className="dash-kpi"><div className="k">Lecturas hoy</div><div className="v">38</div><div className="d">+38 cargadas</div></div>
                  </div>
                </div>
                <div className="sp-item" data-rev="3">
                  <div className="dash-duo">
                    <div className="dash-chart">
                      <div className="ct">Recaudación · 6 meses</div>
                      <svg viewBox="0 0 300 60" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="spg" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="oklch(0.97 0.012 92 / 0.5)" />
                            <stop offset="100%" stopColor="oklch(0.97 0.012 92 / 0)" />
                          </linearGradient>
                        </defs>
                        <path d="M0 42 L50 36 L100 39 L150 27 L200 30 L250 20 L300 23 L300 60 L0 60 Z" fill="url(#spg)" />
                        <path d="M0 42 L50 36 L100 39 L150 27 L200 30 L250 20 L300 23" fill="none" stroke="var(--ocre)" strokeWidth="2" />
                        <circle cx="250" cy="20" r="3" fill="var(--ocre)" />
                      </svg>
                    </div>
                    <div className="dash-mini">
                      <div className="k">Cobranza del mes</div>
                      <div className="v">92%</div>
                      <div className="bar"><i></i></div>
                    </div>
                  </div>
                </div>
                <div className="sp-item" data-rev="4">
                  <div className="dash-list">
                    <div className="dash-row"><span className="nm">Rosa Pérez L.</span><span className="mn">$12.480</span><span className="st ok">pagada</span></div>
                    <div className="dash-row"><span className="nm">Juan Soto V.</span><span className="mn">$16.100</span><span className="st late">5 días</span></div>
                    <div className="dash-row"><span className="nm">María L.</span><span className="mn">$18.700</span><span className="st ok">pagada</span></div>
                    <div className="dash-row"><span className="nm">Pedro N.</span><span className="mn">$11.200</span><span className="st ok">pagada</span></div>
                  </div>
                </div>
                <div className="sp-item" data-rev="4">
                  <div className="dash-kpis">
                    <div className="dash-kpi"><div className="k">Cortes activos</div><div className="v">3</div><div className="d warn">pendientes</div></div>
                    <div className="dash-kpi"><div className="k">Alertas consumo</div><div className="v">2</div><div className="d warn">posible fuga</div></div>
                    <div className="dash-kpi"><div className="k">Gastos del mes</div><div className="v">$84<small>k</small></div><div className="d">electricidad</div></div>
                    <div className="dash-kpi"><div className="k">Socios totales</div><div className="v">412</div><div className="d">+3 este mes</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sp-vs" aria-hidden="true">
              <div className="badge">
                <svg viewBox="0 0 100 100"><g fill="none" stroke="var(--aqua)" strokeWidth="9" strokeLinecap="round"><circle cx="50" cy="50" r="32" /><circle cx="50" cy="50" r="20" /></g><circle cx="50" cy="50" r="8" fill="var(--ocre)" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq-head">
            <span className="sec-eyebrow">Preguntas frecuentes</span>
            <h2>Lo que nos preguntan en cada <em>demo.</em></h2>
          </div>
          <div className="faq-list">
            <div className="faq-item open">
              <button className="faq-q" aria-expanded="true">
                <span className="qn">01</span>
                <span className="qt">¿akuas emite boletas que acepta el SII?</span>
                <span className="faq-ic" aria-hidden="true"></span>
              </button>
              <div className="faq-a"><div className="faq-a-inner"><p>Sí. akuas genera boletas electrónicas automáticas después de cada lectura.</p></div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false">
                <span className="qn">02</span>
                <span className="qt">¿Puedo gestionar los cortes sin ir al terreno?</span>
                <span className="faq-ic" aria-hidden="true"></span>
              </button>
              <div className="faq-a"><div className="faq-a-inner"><p>akuas te muestra en todo momento quién está en mora, el ranking de deuda y quién necesita corte, para que cuando salgas al terreno ya sepas exactamente a qué domicilio ir y con qué información. <b>Sin perder tiempo ni hacer visitas innecesarias.</b></p></div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false">
                <span className="qn">03</span>
                <span className="qt">¿Los informes de akuas sirven para la SISS y la Subdirección?</span>
                <span className="faq-ic" aria-hidden="true"></span>
              </button>
              <div className="faq-a"><div className="faq-a-inner"><p>Sí. El módulo de Auditoría e Informe de Gestión genera los reportes que exigen la SISS y la Subdirección de SSR, ordenados y listos para presentar en cualquier fiscalización.</p></div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false">
                <span className="qn">04</span>
                <span className="qt">¿Qué pasa si tengo un problema y no sé cómo resolverlo?</span>
                <span className="faq-ic" aria-hidden="true"></span>
              </button>
              <div className="faq-a"><div className="faq-a-inner"><p>akuas tiene soporte directo desde la plataforma. No necesitas llamar a nadie externo — <b>el equipo akuas está a un clic</b> desde el mismo sistema.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="cta-final" id="demo">
        <div className="ripples" aria-hidden="true">
          <span className="ripple"></span>
          <span className="ripple"></span>
          <span className="ripple"></span>
          <span className="ripple"></span>
        </div>
        <div className="container">
          <div className="cta-inner">
            <span className="kicker">Demos sin compromiso</span>
            <h2>Hablemos del agua de <em>tu comité.</em></h2>
            <p className="csub">Una demo corta, por videollamada o presencial. Vemos si akuas le sirve a tu comité.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/56942657280" className="btn primary lg" target="_blank" rel="noopener"><span className="btn-arrow">Agendar una demo</span></a>
              <a href="https://wa.me/56942657280" className="btn ghost-light lg" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
            </div>
            <div className="cta-reassure">
              <span>Sin compromiso</span>
              <span>Migramos tus datos</span>
              <span>Soporte siempre incluido</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="foot" id="contacto">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-lead">
              <div className="brand-row">
                <span className="mk"><svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32" /><circle cx="50" cy="50" r="20" /></g><circle cx="50" cy="50" r="9" fill="var(--ocre)" /></svg></span>
                <span className="wm">a<span className="k">k</span>uas</span>
              </div>
              <p className="tagline">El sistema del agua rural, hecho para los comités de Agua Potable Rural.</p>
              <div className="foot-social">
                <a href="https://wa.me/56942657280" target="_blank" rel="noopener" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" /></svg>
                </a>
                <a href="https://www.instagram.com/akuas.cl" target="_blank" rel="noopener" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg>
                </a>
                <a href="mailto:estrategikaa@gmail.com" aria-label="Correo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
                </a>
              </div>
            </div>
            <div className="foot-col">
              <h4>Explora</h4>
              <ul>
                <li><a href="#producto">La solución</a></li>
                <li><a href="#diferencia">El antes y el después</a></li>
                <li><a href="#faq">Preguntas frecuentes</a></li>
                <li><a href="#demo">Agendar una demo</a></li>
              </ul>
            </div>
            <div className="foot-col foot-contact">
              <h4>Contacto</h4>
              <ul>
                <li><a href="https://wa.me/56942657280" target="_blank" rel="noopener"><svg className="ci" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z" /></svg>+56 9 4265 7280</a></li>
                <li><a href="mailto:estrategikaa@gmail.com"><svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>estrategikaa@gmail.com</a></li>
                <li><a href="https://www.instagram.com/akuas.cl" target="_blank" rel="noopener"><svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg>@akuas.cl</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-legal">
            <div>© 2026 akuas</div>
            <div className="links">
              <a href="#">Términos</a>
              <a href="#">Privacidad</a>
              <a href="#contacto">Datos de socios</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
