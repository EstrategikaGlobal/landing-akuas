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
  --p-bg:   oklch(0.2  0.02 240);
  --p-side: oklch(0.15 0.02 240);
  --p-card: oklch(0.25 0.02 240);
  --p-card2:oklch(0.28 0.022 240);
  --p-line: oklch(0.33 0.02 240);
  --p-tx:   oklch(0.93 0.01 240);
  --p-mut:  oklch(0.66 0.02 240);
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }
.container { max-width: 1340px; margin: 0 auto; padding: 0 44px; }
.k { color: var(--ocre); font-style: italic; font-weight: 600; }

/* Buttons */
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 999px; font-family: var(--sans); font-weight: 600; font-size: 15.5px; text-decoration: none; border: 1px solid transparent; cursor: pointer; transition: transform 0.15s ease, background 0.15s ease; white-space: nowrap; }
.btn:hover { transform: translateY(-1px); }
.btn.primary { background: var(--ocre); color: var(--ink); }
.btn.primary:hover { background: oklch(0.78 0.13 75); }
.btn.ghost-light { background: oklch(0.97 0.012 92 / 0.08); color: var(--paper); border-color: oklch(0.97 0.012 92 / 0.28); }
.btn.ghost-light:hover { background: oklch(0.97 0.012 92 / 0.16); }
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
.fhero { background: var(--ink); color: var(--paper); position: relative; overflow: hidden; }
.fhero::before { content: ""; position: absolute; right: -120px; top: -120px; width: 460px; height: 460px; border-radius: 50%; border: 1.5px solid oklch(0.97 0.012 92 / 0.06); box-shadow: 0 0 0 60px oklch(0.97 0.012 92 / 0.025), 0 0 0 130px oklch(0.97 0.012 92 / 0.02); pointer-events: none; }
.fhero-copy { position: relative; z-index: 2; padding: 28px 0 70px; max-width: 820px; }
.fhero .kicker { display: inline-flex; align-items: center; gap: 11px; font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ocre-soft); background: oklch(0.97 0.012 92 / 0.08); border: 1px solid oklch(0.97 0.012 92 / 0.16); padding: 9px 15px; border-radius: 999px; margin-bottom: 26px; font-weight: 500; }
.fhero .kicker .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ocre); }
.fhero h1 { font-family: var(--serif); font-weight: 500; font-size: clamp(38px, 5.2vw, 74px); line-height: 0.99; letter-spacing: -0.035em; margin: 0 0 20px; text-wrap: balance; }
.fhero h1 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.fhero .sub { font-family: var(--serif); font-weight: 300; font-size: clamp(18px, 2vw, 23px); line-height: 1.4; color: oklch(0.85 0.02 240); margin: 0; max-width: 52ch; text-wrap: pretty; }

/* Showcase */
.showcase { background: var(--ink); color: var(--paper); padding: 0 0 104px; position: relative; }
.sc-grid { display: grid; grid-template-columns: 0.92fr 1.25fr; gap: 30px; align-items: stretch; }
.sc-nav { display: flex; flex-direction: column; gap: 10px; }
.sc-intro { margin-bottom: 8px; }
.sc-intro .eyebrow { display: inline-flex; align-items: center; gap: 9px; font-family: var(--mono); font-size: 11.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ocre-soft); font-weight: 500; margin-bottom: 14px; }
.sc-intro h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(27px, 2.7vw, 38px); line-height: 1.04; letter-spacing: -0.025em; margin: 0; text-wrap: balance; }

.sc-group { width: 100%; text-align: left; background: oklch(0.22 0.02 240); border: 1px solid oklch(0.3 0.02 240); border-radius: 16px; padding: 16px 18px; cursor: pointer; color: var(--paper); font-family: inherit; transition: background 0.25s ease, border-color 0.25s ease; overflow: hidden; }
.sc-group:hover { background: oklch(0.25 0.02 240); }
.sc-group .gp-top { display: flex; align-items: center; gap: 13px; }
.sc-group .gp-ic { width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0; display: grid; place-items: center; background: oklch(0.28 0.02 240); color: var(--gc); transition: background 0.25s ease, color 0.25s ease; }
.sc-group .gp-ic svg { width: 22px; height: 22px; }
.sc-group .gp-name { font-family: var(--serif); font-weight: 500; font-size: 20px; letter-spacing: -0.02em; }
.sc-group .gp-i { margin-left: auto; font-family: var(--mono); font-size: 11px; color: var(--p-mut); }
.sc-group .gp-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.35s cubic-bezier(0.22,0.61,0.36,1); }
.sc-group .gp-body-in { overflow: hidden; }
.sc-group .gp-desc { font-size: 14.5px; line-height: 1.5; color: oklch(0.8 0.02 240); margin: 13px 0 12px; }
.sc-group .gp-mods { display: flex; flex-wrap: wrap; gap: 7px; }
.sc-group .gp-mods span { font-family: var(--mono); font-size: 11px; letter-spacing: 0.02em; color: var(--paper); background: color-mix(in oklch, var(--gc) 30%, transparent); border: 1px solid color-mix(in oklch, var(--gc) 45%, transparent); padding: 5px 10px; border-radius: 999px; }
.sc-group .gp-prog { height: 3px; border-radius: 999px; background: oklch(0.3 0.02 240); margin-top: 14px; overflow: hidden; opacity: 0; }
.sc-group .gp-prog i { display: block; height: 100%; width: 0; background: var(--gc); border-radius: 999px; }
.sc-group.active { background: oklch(0.24 0.02 240); border-color: var(--gc); }
.sc-group.active .gp-ic { background: var(--gc); color: var(--paper); }
.sc-group.active .gp-body { grid-template-rows: 1fr; }
.sc-group.active .gp-prog { opacity: 1; }
.sc-group.active .gp-prog i { animation: scprog 5s linear forwards; }
.showcase.paused .sc-group.active .gp-prog i { animation-play-state: paused; }
@keyframes scprog { from { width: 0; } to { width: 100%; } }

/* Window */
.sc-stage { position: relative; }
.sc-window { background: var(--p-bg); border: 1px solid oklch(0.3 0.02 240); border-radius: 18px; overflow: hidden; box-shadow: 0 50px 90px -40px rgba(0,0,0,0.6); height: 100%; min-height: 472px; display: flex; flex-direction: column; }
.sc-bar { display: flex; align-items: center; gap: 7px; padding: 13px 16px; background: var(--p-side); border-bottom: 1px solid var(--p-line); }
.sc-bar .d { width: 10px; height: 10px; border-radius: 50%; background: oklch(0.36 0.02 240); }
.sc-bar .url { margin-left: 10px; flex: 1; background: oklch(0.2 0.02 240); border-radius: 7px; padding: 5px 13px; font-family: var(--mono); font-size: 11px; color: var(--p-mut); }
.sc-app { flex: 1; display: grid; grid-template-columns: 168px 1fr; min-height: 0; }
.sc-side { background: var(--p-side); border-right: 1px solid var(--p-line); padding: 14px 11px; display: flex; flex-direction: column; gap: 3px; }
.sc-side .sb-brand { display: flex; align-items: center; gap: 8px; padding: 4px 8px 14px; }
.sc-side .sb-brand .m { width: 22px; height: 22px; background: var(--aqua); border-radius: 6px; display: grid; place-items: center; }
.sc-side .sb-brand .m svg { width: 100%; height: 100%; color: var(--paper); }
.sc-side .sb-brand .w { font-family: var(--serif); font-weight: 500; font-size: 17px; letter-spacing: -0.04em; color: var(--paper); }
.sc-side .sb-brand .w .k { color: var(--ocre); font-style: italic; }
.sb-item { display: flex; align-items: center; gap: 9px; padding: 8px 10px; border-radius: 8px; font-size: 12.5px; color: var(--p-mut); transition: background 0.2s, color 0.2s; cursor: pointer; }
.sb-item svg { width: 15px; height: 15px; flex-shrink: 0; }
.sb-item.on { background: oklch(0.26 0.02 240); color: var(--p-tx); font-weight: 600; }
.sb-item.on .dotc { margin-left: auto; width: 7px; height: 7px; border-radius: 50%; background: var(--gc); }
.sb-sep { height: 1px; background: var(--p-line); margin: 9px 6px; }
.sb-foot { margin-top: auto; }
.sc-main { position: relative; padding: 0; overflow: hidden; }
.sc-screen { position: absolute; inset: 0; padding: 20px 22px; opacity: 0; transform: translateY(12px); transition: opacity 0.5s ease, transform 0.5s ease; pointer-events: none; display: flex; flex-direction: column; gap: 12px; overflow: hidden; }
.sc-screen.active { opacity: 1; transform: none; pointer-events: auto; }

/* UI primitives */
.ui-h { display: flex; justify-content: space-between; align-items: flex-start; }
.ui-h .t { font-family: var(--serif); font-weight: 500; font-size: 19px; letter-spacing: -0.02em; color: var(--p-tx); }
.ui-h .t small { display: block; font-family: var(--mono); font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--p-mut); margin-top: 4px; font-weight: 400; }
.ui-pill { font-family: var(--mono); font-size: 9.5px; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 11px; border-radius: 999px; font-weight: 500; background: oklch(0.4 0.1 150); color: oklch(0.92 0.05 150); white-space: nowrap; }
.ui-pill.ocre { background: oklch(0.45 0.1 70); color: oklch(0.93 0.06 80); }
.ui-k3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; }
.ui-k { background: var(--p-card); border: 1px solid var(--p-line); border-radius: 11px; padding: 12px 13px; }
.ui-k .lab { font-family: var(--mono); font-size: 8.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--p-mut); }
.ui-k .num { font-family: var(--serif); font-weight: 500; font-size: 24px; line-height: 1; margin-top: 6px; color: var(--p-tx); }
.ui-k .num small { font-size: 14px; color: var(--ocre); }
.ui-k .sub { font-family: var(--mono); font-size: 9px; color: oklch(0.7 0.1 150); margin-top: 5px; }
.ui-chart { background: var(--aqua); border-radius: 11px; padding: 13px 15px; flex: 1; display: flex; flex-direction: column; min-height: 96px; }
.ui-chart .ct { font-family: var(--mono); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: oklch(0.92 0.03 200); }
.ui-chart svg { width: 100%; flex: 1; margin-top: 6px; }
.ui-card { background: var(--p-card); border: 1px solid var(--p-line); border-radius: 11px; padding: 13px 15px; }
.ui-row { display: flex; align-items: center; gap: 10px; padding: 9px 0; border-top: 1px solid var(--p-line); font-size: 13px; color: var(--p-tx); }
.ui-row:first-child { border-top: none; }
.ui-row .nm { font-weight: 500; }
.ui-row .mn { margin-left: auto; font-family: var(--mono); font-size: 11px; color: var(--p-mut); }
.ui-tag { font-family: var(--mono); font-size: 8.5px; padding: 2px 8px; border-radius: 999px; letter-spacing: 0.08em; text-transform: uppercase; }
.ui-tag.ok { background: oklch(0.34 0.08 150); color: oklch(0.86 0.1 150); }
.ui-tag.late { background: oklch(0.36 0.09 75); color: oklch(0.9 0.1 75); }
.ui-tag.cut { background: oklch(0.4 0.13 25); color: oklch(0.92 0.09 25); }
.ui-meter { width: 60px; height: 6px; border-radius: 999px; background: oklch(0.3 0.02 240); overflow: hidden; }
.ui-meter i { display: block; height: 100%; border-radius: 999px; background: var(--gc); }
.ui-input { background: var(--p-card); border: 1px solid var(--p-line); border-radius: 10px; padding: 11px 13px; display: flex; align-items: center; justify-content: space-between; }
.ui-input .lab { font-size: 12px; color: var(--p-mut); }
.ui-input .val { font-family: var(--mono); font-size: 13px; color: var(--p-tx); }
.ui-input .val b { color: var(--ocre); }
.ui-arrow { text-align: center; color: var(--p-mut); font-size: 13px; line-height: 1; }
.ui-btn { align-self: flex-start; background: var(--ocre); color: var(--ink); font-family: var(--sans); font-weight: 600; font-size: 12.5px; padding: 9px 16px; border-radius: 999px; }
.ui-alert { display: flex; align-items: center; gap: 10px; background: oklch(0.32 0.07 70); border: 1px solid oklch(0.42 0.09 70); border-radius: 10px; padding: 10px 13px; color: oklch(0.93 0.06 80); font-size: 12.5px; }
.ui-alert svg { width: 17px; height: 17px; flex-shrink: 0; }
.ui-search { background: var(--p-card); border: 1px solid var(--p-line); border-radius: 9px; padding: 8px 12px; font-family: var(--mono); font-size: 11px; color: var(--p-mut); display: flex; align-items: center; gap: 8px; }
.ui-search svg { width: 14px; height: 14px; }
.ui-doc { background: oklch(0.96 0.012 92); border-radius: 10px; padding: 15px 17px; color: var(--ink); flex: 1; display: flex; flex-direction: column; gap: 9px; }
.ui-doc .dh { display: flex; justify-content: space-between; align-items: center; }
.ui-doc .dh .dt { font-family: var(--serif); font-weight: 600; font-size: 15px; }
.ui-doc .dh .dn { font-family: var(--mono); font-size: 9px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; }
.ui-doc .dline { height: 7px; border-radius: 3px; background: oklch(0.9 0.012 92); }
.ui-doc .dline.s { width: 60%; }
.ui-doc .dbadges { display: flex; gap: 7px; margin-top: auto; }
.ui-doc .db { font-family: var(--mono); font-size: 9px; letter-spacing: 0.06em; text-transform: uppercase; background: oklch(0.92 0.05 150); color: oklch(0.4 0.1 150); padding: 4px 9px; border-radius: 999px; display: flex; align-items: center; gap: 5px; }
.ui-msg { background: var(--p-card); border: 1px solid var(--p-line); border-radius: 11px; padding: 13px 15px; }
.ui-msg .mt { font-family: var(--serif); font-weight: 500; font-size: 15px; color: var(--p-tx); margin-bottom: 5px; }
.ui-msg .mb { font-size: 12.5px; color: var(--p-mut); line-height: 1.45; }

.sc-foot { margin-top: 30px; display: flex; align-items: center; gap: 14px; flex-wrap: wrap; font-family: var(--mono); font-size: 12px; letter-spacing: 0.04em; color: oklch(0.72 0.02 240); }
.sc-foot .lbl { color: var(--ocre-soft); letter-spacing: 0.14em; text-transform: uppercase; font-size: 11px; }
.sc-foot .dotsep { width: 4px; height: 4px; border-radius: 50%; background: oklch(0.4 0.02 240); }

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
.fcta-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
.fcta h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(34px, 4.6vw, 62px); line-height: 1.02; letter-spacing: -0.03em; margin: 0 0 18px; color: var(--paper); text-wrap: balance; }
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

@media (max-width: 980px) {
  .container { padding: 0 24px; }
  nav.top ul { display: none; }
  nav.top .row { padding: 20px 0; }
  .fhero-copy { padding: 16px 0 56px; }
  .sc-grid { grid-template-columns: 1fr; gap: 22px; }
  .sc-window { min-height: 440px; }
  .fcta { padding: 72px 0; }
  .foot-grid { grid-template-columns: 1fr; gap: 36px; }
  .foot-legal { justify-content: flex-start; }
}
@media (max-width: 540px) {
  .sc-app { grid-template-columns: 1fr; }
  .sc-side { display: none; }
  .sc-window { min-height: 410px; }
}
@media (prefers-reduced-motion: reduce) {
  .sc-screen { transition: none; }
  .sc-group .gp-body { transition: none; }
  .sc-group.active .gp-prog i { animation: none; width: 100%; }
  .fcta .ripple { animation: none; opacity: 0.12; transform: scale(1); }
  .fcta .ripple:nth-child(3), .fcta .ripple:nth-child(4) { display: none; }
}
`

const gcMap = [
  'oklch(0.42 0.10 205)',
  'oklch(0.52 0.09 150)',
  'oklch(0.58 0.12 65)',
  'oklch(0.46 0.07 250)',
  'oklch(0.55 0.13 35)',
  'oklch(0.48 0.07 180)',
] as const

type GC = typeof gcMap[number]
const gc = (i: number): React.CSSProperties => ({ '--gc': gcMap[i] } as React.CSSProperties)

export function FuncionalidadesClient() {
  useEffect(() => {
    const groups = Array.from(document.querySelectorAll<HTMLElement>('.sc-group'))
    const screens = Array.from(document.querySelectorAll<HTMLElement>('.sc-screen'))
    const sideItems = Array.from(document.querySelectorAll<HTMLElement>('.sb-item[data-side]'))
    const section = document.getElementById('showcase')
    const urlEl = document.getElementById('scUrl')
    const urls = ['app.akuas.cl / panel','app.akuas.cl / clientes','app.akuas.cl / operacion','app.akuas.cl / gestion','app.akuas.cl / comunicacion','app.akuas.cl / reportes']
    const n = groups.length
    let cur = 0
    let timer: ReturnType<typeof setInterval> | null = null
    const DELAY = 5000
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function fmt(v: number, dec: number) {
      const s = v.toFixed(dec)
      const parts = s.split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      return parts.join(',')
    }
    function countUp(el: HTMLElement) {
      const target = parseFloat(el.getAttribute('data-count') || '')
      if (isNaN(target)) return
      const dec = parseInt(el.getAttribute('data-dec') || '0', 10)
      const pre = el.getAttribute('data-pre') || ''
      const suf = el.getAttribute('data-suf') || ''
      if (reduce) { el.textContent = pre + fmt(target, dec) + suf; return }
      const dur = 850; let start: number | null = null
      function step(t: number) {
        if (!start) start = t
        const p = Math.min((t - start) / dur, 1)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = pre + fmt(target * e, dec) + suf
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    function setActive(i: number) {
      cur = (i + n) % n
      groups.forEach((g, k) => g.classList.toggle('active', k === cur))
      screens.forEach((s, k) => s.classList.toggle('active', k === cur))
      sideItems.forEach((s, k) => s.classList.toggle('on', k === cur))
      if (urlEl) urlEl.textContent = urls[cur] || urls[0]
      const active = screens[cur]
      if (active) active.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp)
    }
    function start() { if (reduce) return; stop(); timer = setInterval(() => setActive(cur + 1), DELAY) }
    function stop() { if (timer) { clearInterval(timer); timer = null } }

    const gClean: (() => void)[] = []
    groups.forEach(g => {
      const h = () => { setActive(+(g.getAttribute('data-i') || '0')); start() }
      g.addEventListener('click', h); gClean.push(() => g.removeEventListener('click', h))
    })
    const sClean: (() => void)[] = []
    sideItems.forEach(s => {
      const h = () => { setActive(+(s.getAttribute('data-side') || '0')); start() }
      s.addEventListener('click', h); sClean.push(() => s.removeEventListener('click', h))
    })
    const onEnter = () => { stop(); section?.classList.add('paused') }
    const onLeave = () => { section?.classList.remove('paused'); start() }
    section?.addEventListener('mouseenter', onEnter)
    section?.addEventListener('mouseleave', onLeave)

    setActive(0); start()

    return () => {
      stop()
      gClean.forEach(f => f()); sClean.forEach(f => f())
      section?.removeEventListener('mouseenter', onEnter)
      section?.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* HERO */}
      <section className="fhero">
        <div className="container">
          <nav className="top">
            <div className="row">
              <a href="/" className="brand">
                <span className="mk"><svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32"/><circle cx="50" cy="50" r="20"/></g><circle cx="50" cy="50" r="9" fill="var(--ocre)"/></svg></span>
                <span className="wm">a<span className="k">k</span>uas</span>
              </a>
              <ul>
                <li><a href="/funcionalidades" className="active">Funcionalidades</a></li>
                <li><a href="/sobre-nosotros">Quiénes somos</a></li>
                <li><a href="/blog">Recursos</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
              <div className="nav-actions">
                <a href="https://wa.me/56942657280" className="btn primary" target="_blank" rel="noopener">Agendar demo</a>
              </div>
            </div>
          </nav>
          <div className="fhero-copy">
            <span className="kicker"><span className="dot"></span>Funcionalidades</span>
            <h1>Todo lo que tu comité necesita, <em>en un solo lugar.</em></h1>
            <p className="sub">Mira akuas funcionando. Elige un área y observa la pantalla real que usan dirigentes, tesoreros y operadores cada día.</p>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="showcase" id="showcase">
        <div className="container">
          <div className="sc-grid">

            {/* LEFT: navigator */}
            <div className="sc-nav" id="scNav">
              <div className="sc-intro">
                <span className="eyebrow">El sistema, por dentro</span>
                <h2>Un recorrido por akuas.</h2>
              </div>

              <button className="sc-group active" data-i="0" style={gc(0)}>
                <div className="gp-top">
                  <span className="gp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></span>
                  <span className="gp-name">Principal</span>
                  <span className="gp-i">01</span>
                </div>
                <div className="gp-body"><div className="gp-body-in">
                  <p className="gp-desc">El pulso del comité de un vistazo: cuánto se facturó, se pagó y queda pendiente.</p>
                  <div className="gp-mods"><span>Resumen financiero</span><span>Alertas de consumo</span><span>Recomputar saldos</span></div>
                  <div className="gp-prog"><i></i></div>
                </div></div>
              </button>

              <button className="sc-group" data-i="1" style={gc(1)}>
                <div className="gp-top">
                  <span className="gp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16c.5-1.5 1.6-2.2 3-2.2s2.5.7 3 2.2"/><path d="M14 9.5h4M14 13h4"/></svg></span>
                  <span className="gp-name">Clientes</span>
                  <span className="gp-i">02</span>
                </div>
                <div className="gp-body"><div className="gp-body-in">
                  <p className="gp-desc">Tus socios siempre al día, con un portal donde cada uno se atiende solo.</p>
                  <div className="gp-mods"><span>Padrón de socios</span><span>Portal de autoatención</span><span>Historial por socio</span></div>
                  <div className="gp-prog"><i></i></div>
                </div></div>
              </button>

              <button className="sc-group" data-i="2" style={gc(2)}>
                <div className="gp-top">
                  <span className="gp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16a8 8 0 0 1 16 0"/><path d="M12 16l4-3.5"/><path d="M4 16h1.5M18.5 16H20"/></svg></span>
                  <span className="gp-name">Operación</span>
                  <span className="gp-i">03</span>
                </div>
                <div className="gp-body"><div className="gp-body-in">
                  <p className="gp-desc">Del medidor al pago, sin sacar cuentas a mano. La boleta se genera sola.</p>
                  <div className="gp-mods"><span>Lecturas</span><span>Boletas</span><span>Pagos</span><span>Control de caja</span></div>
                  <div className="gp-prog"><i></i></div>
                </div></div>
              </button>

              <button className="sc-group" data-i="3" style={gc(3)}>
                <div className="gp-top">
                  <span className="gp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18"/><path d="M6 20v-7M12 20V5M18 20v-9"/></svg></span>
                  <span className="gp-name">Gestión</span>
                  <span className="gp-i">04</span>
                </div>
                <div className="gp-body"><div className="gp-body-in">
                  <p className="gp-desc">Lo importante, priorizado: deuda ordenada, cortes y alertas de posible fuga.</p>
                  <div className="gp-mods"><span>Morosidad</span><span>Centro de cortes</span><span>Alertas de consumo</span></div>
                  <div className="gp-prog"><i></i></div>
                </div></div>
              </button>

              <button className="sc-group" data-i="4" style={gc(4)}>
                <div className="gp-top">
                  <span className="gp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10v4l10 4V6L4 10Z"/><path d="M14 8c2 .5 3 1.8 3 4s-1 3.5-3 4"/><path d="M6 14.5v2.5a1.5 1.5 0 0 0 3 0v-1.5"/></svg></span>
                  <span className="gp-name">Comunicación</span>
                  <span className="gp-i">05</span>
                </div>
                <div className="gp-body"><div className="gp-body-in">
                  <p className="gp-desc">Un mensaje y toda la comunidad enterada: cortes, asambleas, recordatorios.</p>
                  <div className="gp-mods"><span>Anuncios</span><span>Documentos</span></div>
                  <div className="gp-prog"><i></i></div>
                </div></div>
              </button>

              <button className="sc-group" data-i="5" style={gc(5)}>
                <div className="gp-top">
                  <span className="gp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 3.5h6v2.5H9z"/><path d="M9 12.5l1.8 1.8L14 11"/></svg></span>
                  <span className="gp-name">Reportes</span>
                  <span className="gp-i">06</span>
                </div>
                <div className="gp-body"><div className="gp-body-in">
                  <p className="gp-desc">El Informe de Gestión con un clic, ordenado y listo para la fiscalización.</p>
                  <div className="gp-mods"><span>Informe de Gestión</span><span>Listo para SISS</span><span>Subdirección de SSR</span></div>
                  <div className="gp-prog"><i></i></div>
                </div></div>
              </button>
            </div>

            {/* RIGHT: product window */}
            <div className="sc-stage">
              <div className="sc-window">
                <div className="sc-bar">
                  <span className="d"></span><span className="d"></span><span className="d"></span>
                  <span className="url" id="scUrl">app.akuas.cl / panel</span>
                </div>
                <div className="sc-app">
                  <aside className="sc-side">
                    <div className="sb-brand">
                      <span className="m"><svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32"/><circle cx="50" cy="50" r="20"/></g><circle cx="50" cy="50" r="9" fill="var(--ocre)"/></svg></span>
                      <span className="w">a<span className="k">k</span>uas</span>
                    </div>
                    <div className="sb-item on" data-side="0" style={gc(0)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg><span>Panel</span><span className="dotc"></span></div>
                    <div className="sb-item" data-side="1" style={gc(1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/></svg><span>Clientes</span><span className="dotc"></span></div>
                    <div className="sb-item" data-side="2" style={gc(2)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M4 16a8 8 0 0 1 16 0"/><path d="M12 16l4-3.5"/></svg><span>Operación</span><span className="dotc"></span></div>
                    <div className="sb-item" data-side="3" style={gc(3)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M3 20h18"/><path d="M6 20v-7M12 20V5M18 20v-9"/></svg><span>Gestión</span><span className="dotc"></span></div>
                    <div className="sb-item" data-side="4" style={gc(4)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M4 10v4l10 4V6L4 10Z"/></svg><span>Comunicación</span><span className="dotc"></span></div>
                    <div className="sb-item" data-side="5" style={gc(5)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 12.5l1.8 1.8L14 11"/></svg><span>Reportes</span><span className="dotc"></span></div>
                    <div className="sb-sep"></div>
                    <div className="sb-foot">
                      <div className="sb-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/></svg><span>Soporte</span></div>
                      <div className="sb-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M21 12h-2M5 12H3"/></svg><span>Configuración</span></div>
                    </div>
                  </aside>

                  <div className="sc-main" id="scMain">
                    {/* 0 Principal */}
                    <div className="sc-screen active" data-i="0">
                      <div className="ui-h"><div className="t">Buenos días, Rosa<small>APR El Manzano · Lunes 12</small></div><span className="ui-pill">92% al día</span></div>
                      <div className="ui-k3">
                        <div className="ui-k"><div className="lab">Facturado</div><div className="num" data-count="4.2" data-dec="1" data-pre="$" data-suf="M">$4,2M</div><div className="sub">+12% vs abril</div></div>
                        <div className="ui-k"><div className="lab">Pagado</div><div className="num" data-count="2.4" data-dec="1" data-pre="$" data-suf="M">$2,4M</div></div>
                        <div className="ui-k"><div className="lab">Pendiente</div><div className="num" data-count="1.8" data-dec="1" data-pre="$" data-suf="M">$1,8M</div></div>
                      </div>
                      <div className="ui-chart">
                        <div className="ct">Recaudación · 6 meses</div>
                        <svg viewBox="0 0 300 70" preserveAspectRatio="none">
                          <defs><linearGradient id="g0" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.97 0.012 92 / 0.5)"/><stop offset="100%" stopColor="oklch(0.97 0.012 92 / 0)"/></linearGradient></defs>
                          <path d="M0 50 L50 44 L100 47 L150 33 L200 36 L250 24 L300 27 L300 70 L0 70 Z" fill="url(#g0)"/>
                          <path d="M0 50 L50 44 L100 47 L150 33 L200 36 L250 24 L300 27" fill="none" stroke="var(--ocre)" strokeWidth="2"/>
                          <circle cx="250" cy="24" r="3.2" fill="var(--ocre)"/>
                        </svg>
                      </div>
                    </div>

                    {/* 1 Clientes */}
                    <div className="sc-screen" data-i="1">
                      <div className="ui-h"><div className="t">Padrón de socios<small>412 socios activos</small></div><span className="ui-pill">Portal activo</span></div>
                      <div className="ui-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>Buscar socio por nombre, RUT o medidor…</div>
                      <div className="ui-card" style={{ flex: 1 }}>
                        <div className="ui-row"><span className="nm">Rosa Pérez L.</span><span className="mn">Med. 0218</span><span className="ui-tag ok">al día</span></div>
                        <div className="ui-row"><span className="nm">Juan Soto V.</span><span className="mn">Med. 0331</span><span className="ui-tag late">mora</span></div>
                        <div className="ui-row"><span className="nm">María Lefimán</span><span className="mn">Med. 0142</span><span className="ui-tag ok">al día</span></div>
                        <div className="ui-row"><span className="nm">Pedro Ñancupil</span><span className="mn">Med. 0507</span><span className="ui-tag ok">al día</span></div>
                        <div className="ui-row"><span className="nm">Aurora Méndez</span><span className="mn">Med. 0089</span><span className="ui-tag ok">al día</span></div>
                      </div>
                    </div>

                    {/* 2 Operación */}
                    <div className="sc-screen" data-i="2">
                      <div className="ui-h"><div className="t">Nueva lectura<small>Medidor 0218 · Rosa Pérez</small></div><span className="ui-pill ocre">En terreno</span></div>
                      <div className="ui-input"><span className="lab">Lectura anterior</span><span className="val">1.240 m³</span></div>
                      <div className="ui-input"><span className="lab">Lectura actual</span><span className="val">1.264 m³</span></div>
                      <div className="ui-arrow">↓ akuas calcula</div>
                      <div className="ui-input" style={{ background: 'oklch(0.28 0.03 205)' }}><span className="lab">Consumo · 24 m³</span><span className="val"><b>$12.480</b></span></div>
                      <div className="ui-row" style={{ border: 'none', gap: '10px' }}><span className="ui-tag ok">Boleta generada</span><span className="ui-tag ok">Pago registrado</span></div>
                    </div>

                    {/* 3 Gestión */}
                    <div className="sc-screen" data-i="3" style={gc(3)}>
                      <div className="ui-h"><div className="t">Morosidad<small>Ordenada de mayor a menor</small></div><span className="ui-pill ocre">8% en mora</span></div>
                      <div className="ui-card">
                        <div className="ui-row"><span className="nm">Juan Soto V.</span><div className="ui-meter"><i style={{ width: '100%' }}></i></div><span className="mn">$24.200</span><span className="ui-tag cut">cortar</span></div>
                        <div className="ui-row"><span className="nm">Luis Cariqueo</span><div className="ui-meter"><i style={{ width: '74%' }}></i></div><span className="mn">$18.700</span><span className="ui-tag cut">cortar</span></div>
                        <div className="ui-row"><span className="nm">Ana Millán</span><div className="ui-meter"><i style={{ width: '52%' }}></i></div><span className="mn">$13.100</span><span className="ui-tag late">12 d</span></div>
                        <div className="ui-row"><span className="nm">Carla Pinto</span><div className="ui-meter"><i style={{ width: '33%' }}></i></div><span className="mn">$8.400</span><span className="ui-tag late">5 d</span></div>
                      </div>
                      <div className="ui-alert"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/></svg>Consumo inusual en 3 medidores — posible fuga.</div>
                    </div>

                    {/* 4 Comunicación */}
                    <div className="sc-screen" data-i="4">
                      <div className="ui-h"><div className="t">Anuncios<small>Mensaje a la comunidad</small></div><span className="ui-pill">412 socios</span></div>
                      <div className="ui-msg">
                        <div className="mt">Corte programado · jueves 9 a 13 h</div>
                        <div className="mb">Estimadas vecinas y vecinos: por mantención del estanque, el servicio se suspende el jueves de 9 a 13 h. Disculpen las molestias.</div>
                      </div>
                      <div className="ui-btn">Enviar a 412 socios →</div>
                      <div className="ui-row" style={{ border: 'none' }}><span className="nm" style={{ display: 'flex', alignItems: 'center', gap: 7 }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l5 5v13H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/></svg>Acta asamblea marzo</span><span className="mn">PDF</span></div>
                      <div className="ui-row" style={{ paddingTop: 0, border: 'none' }}><span className="nm" style={{ display: 'flex', alignItems: 'center', gap: 7 }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l5 5v13H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/></svg>Reglamento interno</span><span className="mn">PDF</span></div>
                    </div>

                    {/* 5 Reportes */}
                    <div className="sc-screen" data-i="5">
                      <div className="ui-h"><div className="t">Informe de Gestión<small>Período 2026 · mensual</small></div><span className="ui-pill">Auditoría</span></div>
                      <div className="ui-doc">
                        <div className="dh"><span className="dt">Informe de Gestión APR</span><span className="dn">N° 0042</span></div>
                        <div className="dline"></div><div className="dline"></div><div className="dline s"></div>
                        <div className="dline"></div><div className="dline s"></div>
                        <div className="dbadges"><span className="db">SISS</span><span className="db">Subdirección SSR</span></div>
                      </div>
                      <div className="ui-btn">Generar PDF →</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="sc-foot">
            <span className="lbl">Además</span>
            <span>Soporte AKUAS</span><span className="dotsep"></span>
            <span>Usuarios y permisos</span><span className="dotsep"></span>
            <span>Auditoría</span><span className="dotsep"></span>
            <span>Configuración del APR</span>
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
            <h2>¿Quieres verlo en acción?</h2>
            <p>Te mostramos akuas funcionando con datos de un comité real, en una demo corta y sin compromiso.</p>
            <a href="https://wa.me/56942657280" className="btn primary lg" target="_blank" rel="noopener"><span className="btn-arrow">Solicitar demo</span></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
