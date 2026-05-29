// CSS compartido entre todas las páginas internas (nav + footer + vars + utilidades)
export const SITE_CSS = `
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
  --sans:  var(--font-manrope),  "Manrope",             system-ui, -apple-system, sans-serif;
  --mono:  var(--font-jetbrains),"JetBrains Mono",      ui-monospace, monospace;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }

/* ── Site Nav ── */
.site-nav { position: sticky; top: 0; z-index: 50; background: var(--ink); border-bottom: 1px solid oklch(0.28 0.025 240); }
.site-nav .row { max-width: 1340px; margin: 0 auto; padding: 18px 44px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.site-brand { display: flex; align-items: center; gap: 11px; text-decoration: none; color: var(--paper); }
.site-brand .mk { width: 36px; height: 36px; background: var(--aqua); border-radius: 9px; display: grid; place-items: center; flex-shrink: 0; }
.site-brand .mk svg { width: 100%; height: 100%; color: var(--paper); }
.site-brand .wm { font-family: var(--serif); font-weight: 500; font-size: 28px; letter-spacing: -0.045em; line-height: 1; }
.site-brand .wm .k { color: var(--ocre); font-style: italic; }
.site-nav ul { display: flex; gap: 30px; list-style: none; margin: 0; padding: 0; }
.site-nav ul a { color: oklch(0.92 0.01 240 / 0.65); text-decoration: none; font-size: 15px; font-weight: 500; transition: color 0.15s; }
.site-nav ul a:hover { color: var(--paper); }
.site-nav ul a.active { color: var(--ocre); }
.site-nav-ctas { display: flex; gap: 10px; align-items: center; }
@media (max-width: 860px) {
  .site-nav ul { display: none; }
  .site-nav .row { padding: 16px 24px; }
}

/* ── Buttons ── */
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 999px; font-family: var(--sans); font-weight: 600; font-size: 14.5px; text-decoration: none; border: 1px solid transparent; cursor: pointer; transition: transform 0.15s ease, background 0.15s ease; white-space: nowrap; }
.btn:hover { transform: translateY(-1px); }
.btn.primary { background: var(--ocre); color: var(--ink); }
.btn.primary:hover { background: oklch(0.78 0.13 75); }
.btn.ghost-light { background: oklch(0.97 0.012 92 / 0.08); color: var(--paper); border-color: oklch(0.97 0.012 92 / 0.28); }
.btn.ghost-light:hover { background: oklch(0.97 0.012 92 / 0.16); }
.btn.lg { padding: 16px 28px; font-size: 16px; }

/* ── Container ── */
.container { max-width: 1340px; margin: 0 auto; padding: 0 44px; }
@media (max-width: 860px) { .container { padding: 0 24px; } }

/* ── Page hero (secciones interiores) ── */
.page-hero { background: var(--aqua); color: var(--paper); padding: 88px 0 72px; position: relative; overflow: hidden; }
.page-hero::before { content: ""; position: absolute; inset: 0; background: radial-gradient(70% 90% at 90% 10%, oklch(0.52 0.11 200 / 0.55) 0%, transparent 65%); pointer-events: none; }
.page-hero-inner { position: relative; z-index: 2; max-width: 800px; }
.page-kicker { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--ocre-soft); font-weight: 500; margin-bottom: 20px; }
.page-kicker::before { content: ""; width: 20px; height: 1px; background: var(--ocre); }
.page-hero h1 { font-family: var(--serif); font-weight: 500; font-size: clamp(38px, 5vw, 68px); line-height: 1.02; letter-spacing: -0.035em; margin: 0 0 20px; color: var(--paper); text-wrap: balance; }
.page-hero h1 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.page-hero .lead { font-family: var(--serif); font-weight: 300; font-size: clamp(17px, 1.8vw, 22px); line-height: 1.5; color: oklch(0.95 0.018 92 / 0.88); margin: 0; max-width: 44ch; text-wrap: pretty; }

/* ── Eyebrow ── */
.eyebrow-s { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--aqua); font-weight: 500; margin-bottom: 18px; }
.eyebrow-s::before { content: ""; width: 18px; height: 1px; background: var(--ocre); }
.eyebrow-s.light { color: var(--ocre-soft); }
.eyebrow-s.light::before { background: oklch(0.92 0.06 80 / 0.5); }

/* ── Section headings ── */
.sec-h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(30px, 3.8vw, 52px); line-height: 1.05; letter-spacing: -0.03em; margin: 0; text-wrap: balance; }
.sec-h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.sec-lead { font-family: var(--serif); font-weight: 300; font-size: clamp(16px, 1.5vw, 20px); line-height: 1.5; color: var(--ink-2); margin: 0; text-wrap: pretty; }

/* ── CTA strip ── */
.cta-strip { background: var(--aqua); color: var(--paper); padding: 100px 0; text-align: center; position: relative; overflow: hidden; }
.cta-strip::after { content: ""; position: absolute; inset: 0; background: radial-gradient(60% 80% at 50% 50%, transparent 40%, oklch(0.36 0.09 205 / 0.45) 100%); pointer-events: none; }
.cta-strip-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
.cta-strip h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(34px, 4.5vw, 62px); line-height: 1.02; letter-spacing: -0.035em; margin: 0 0 16px; color: var(--paper); text-wrap: balance; }
.cta-strip h2 em { color: var(--ocre); font-style: italic; font-weight: 400; }
.cta-strip p { font-family: var(--serif); font-weight: 300; font-size: clamp(16px, 1.6vw, 20px); line-height: 1.45; color: oklch(0.95 0.018 92 / 0.85); margin: 0 auto 32px; max-width: 34ch; }
.cta-strip-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

/* ── Footer ── */
footer.foot { background: var(--ink); color: var(--paper); padding: 72px 0 32px; }
.foot-grid { display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 48px; padding-bottom: 40px; border-bottom: 1px solid oklch(0.3 0.03 240); }
.foot .brand-row { display: flex; align-items: center; gap: 11px; margin-bottom: 16px; }
.foot .brand-row .mk { width: 34px; height: 34px; background: var(--aqua); border-radius: 8px; display: grid; place-items: center; }
.foot .brand-row .mk svg { width: 100%; height: 100%; color: var(--paper); }
.foot .brand-row .wm { font-family: var(--serif); font-weight: 500; font-size: 28px; letter-spacing: -0.045em; }
.foot .brand-row .wm .k { color: var(--ocre); font-style: italic; }
.foot .tagline { font-family: var(--serif); font-weight: 300; font-size: 17px; line-height: 1.45; color: oklch(0.82 0.02 240); margin: 0 0 20px; max-width: 32ch; }
.foot-social { display: flex; gap: 10px; }
.foot-social a { width: 40px; height: 40px; border-radius: 999px; border: 1px solid oklch(0.34 0.03 240); display: grid; place-items: center; color: oklch(0.85 0.02 240); transition: background 0.15s, color 0.15s, border-color 0.15s; }
.foot-social a:hover { background: var(--aqua); border-color: var(--aqua); color: var(--paper); }
.foot-social a svg { width: 18px; height: 18px; }
.foot-col h4 { font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ocre-soft); margin: 0 0 16px; font-weight: 500; }
.foot-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.foot-col a { color: oklch(0.85 0.02 240); text-decoration: none; font-size: 15px; transition: color 0.15s; }
.foot-col a:hover { color: var(--paper); }
.foot-contact a { display: inline-flex; align-items: center; gap: 10px; }
.foot-contact a .ci { width: 16px; height: 16px; color: var(--ocre-soft); flex-shrink: 0; }
.foot-legal { padding-top: 22px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: oklch(0.6 0.02 240); }
.foot-legal .links { display: flex; gap: 20px; }
.foot-legal a { color: inherit; text-decoration: none; }
.foot-legal a:hover { color: oklch(0.85 0.02 240); }
@media (max-width: 860px) {
  .foot-grid { grid-template-columns: 1fr; gap: 32px; }
  .foot-legal { justify-content: flex-start; }
}
`
