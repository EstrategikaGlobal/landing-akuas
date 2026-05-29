'use client'
import { useState } from 'react'
import { SITE_CSS } from '../components/site-css'
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'

const PAGE_CSS = `
/* ── Contacto ── */
.contacto-section { padding: 96px 0; background: var(--paper-2); }
.contacto-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: start; }
.contacto-info h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(22px, 2.4vw, 30px); line-height: 1.15; letter-spacing: -0.025em; color: var(--ink); margin: 0 0 12px; }
.contacto-info .sub { font-family: var(--sans); font-size: 15.5px; line-height: 1.65; color: var(--ink-2); margin: 0 0 32px; }
.contact-link { display: flex; align-items: center; gap: 16px; padding: 20px; border-radius: 16px; text-decoration: none; margin-bottom: 12px; border: 1px solid transparent; transition: transform 0.2s ease, box-shadow 0.2s ease; }
.contact-link:hover { transform: translateY(-3px); box-shadow: 0 12px 28px -12px oklch(0.18 0.02 240 / 0.2); }
.contact-link.wa { background: white; border-color: oklch(0.75 0.15 145 / 0.2); }
.contact-link.em { background: white; border-color: oklch(0.42 0.10 205 / 0.15); }
.contact-link .cl-icon { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; flex-shrink: 0; }
.contact-link.wa .cl-icon { background: #25D366; }
.contact-link.em .cl-icon { background: oklch(0.42 0.10 205 / 0.12); }
.contact-link .cl-label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 3px; }
.contact-link .cl-value { font-family: var(--mono); font-size: 15px; color: var(--ink); font-weight: 500; }
.contact-link .cl-arrow { margin-left: auto; color: var(--muted); flex-shrink: 0; }

.demo-box { margin-top: 24px; padding: 22px 24px; border-radius: 14px; background: oklch(0.42 0.10 205 / 0.07); border: 1px solid oklch(0.42 0.10 205 / 0.14); }
.demo-box-label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ocre); margin-bottom: 14px; }
.demo-box ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.demo-box li { display: flex; align-items: flex-start; gap: 10px; font-family: var(--sans); font-size: 14.5px; color: var(--ink-2); line-height: 1.4; }
.demo-box li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--brote); flex-shrink: 0; margin-top: 5px; }

/* Form */
.form-card { background: var(--paper); border: 1px solid var(--line); border-radius: 20px; padding: 40px; }
.form-card h3 { font-family: var(--serif); font-weight: 500; font-size: 22px; letter-spacing: -0.02em; color: var(--ink); margin: 0 0 28px; }
.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
.form-group input, .form-group select, .form-group textarea {
  width: 100%; font-family: var(--sans); font-size: 15.5px; color: var(--ink);
  background: var(--paper-2); border: 1.5px solid var(--line); border-radius: 10px;
  padding: 13px 16px; outline: none; transition: border-color 0.15s, background 0.15s;
  appearance: none;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--aqua); background: white;
}
.form-group textarea { resize: vertical; min-height: 100px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-submit { width: 100%; padding: 16px; border-radius: 12px; border: none; cursor: pointer; font-family: var(--sans); font-weight: 700; font-size: 16px; background: var(--ocre); color: var(--ink); transition: background 0.15s, transform 0.15s; margin-top: 8px; }
.form-submit:hover:not(:disabled) { background: oklch(0.78 0.13 75); transform: translateY(-1px); }
.form-submit:disabled { opacity: 0.6; cursor: not-allowed; }
.form-success { text-align: center; padding: 40px 24px; }
.form-success h3 { font-family: var(--serif); font-size: 22px; color: var(--ink); margin: 16px 0 8px; }
.form-success p { font-family: var(--sans); font-size: 15px; color: var(--ink-2); }

@media (max-width: 900px) {
  .contacto-grid { grid-template-columns: 1fr; gap: 48px; }
  .contacto-section { padding: 64px 0; }
  .form-row { grid-template-columns: 1fr; }
}
`

function ContactForm() {
  const [estado, setEstado] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [form, setForm] = useState({ nombre: '', apr: '', cargo: '', telefono: '', mensaje: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setEstado('sending')
    try {
      await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setEstado('ok')
    } catch {
      setEstado('error')
    }
  }

  if (estado === 'ok') {
    return (
      <div className="form-card">
        <div className="form-success">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brote)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>
          <h3>¡Mensaje recibido!</h3>
          <p>Te contactamos en menos de 24 horas para coordinar la demo.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card">
      <h3>Solicita una demo gratuita</h3>
      <form onSubmit={submit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Tu nombre</label>
            <input id="nombre" name="nombre" value={form.nombre} onChange={handle} placeholder="María González" required />
          </div>
          <div className="form-group">
            <label htmlFor="cargo">Tu cargo</label>
            <select id="cargo" name="cargo" value={form.cargo} onChange={handle} required>
              <option value="">Selecciona...</option>
              <option>Presidenta/e</option>
              <option>Tesorera/o</option>
              <option>Secretaria/o</option>
              <option>Operador/a</option>
              <option>Otro</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="apr">Nombre del APR o comité</label>
          <input id="apr" name="apr" value={form.apr} onChange={handle} placeholder="APR Las Vertientes" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono (opcional)</label>
          <input id="telefono" name="telefono" value={form.telefono} onChange={handle} placeholder="+56 9 1234 5678" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">¿Qué problema quieres resolver? (opcional)</label>
          <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handle} placeholder="Ej: tardamos 3 días en hacer la facturación mensual..." />
        </div>
        {estado === 'error' && <p style={{ color: 'oklch(0.55 0.2 25)', fontFamily: 'var(--sans)', fontSize: 14, marginBottom: 12 }}>Error al enviar. Escríbenos por WhatsApp.</p>}
        <button type="submit" className="form-submit" disabled={estado === 'sending'}>
          {estado === 'sending' ? 'Enviando...' : 'Solicitar demo gratuita →'}
        </button>
      </form>
    </div>
  )
}

export function ContactoClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + PAGE_CSS }} />
      <SiteNav />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-kicker">Demo gratuita</span>
            <h1>Solicita una demo<br /><em>sin compromiso.</em></h1>
            <p className="lead">30 minutos por videollamada. Te mostramos el sistema con los datos de tu APR. Sin compromiso. Sin tarjeta de crédito.</p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="contacto-section">
        <div className="container">
          <div className="contacto-grid">
            {/* Info */}
            <div className="contacto-info">
              <h2>Respondemos en menos de 24 horas.</h2>
              <p className="sub">Si es urgente, escríbenos directamente por WhatsApp. Generalmente respondemos el mismo día.</p>

              <a href="https://wa.me/56942657280" target="_blank" rel="noopener" className="contact-link wa">
                <span className="cl-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </span>
                <div>
                  <div className="cl-label">WhatsApp</div>
                  <div className="cl-value">+56 9 4265 7280</div>
                </div>
                <span className="cl-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </span>
              </a>

              <a href="mailto:estrategikaa@gmail.com" className="contact-link em">
                <span className="cl-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--aqua)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
                </span>
                <div>
                  <div className="cl-label">Email</div>
                  <div className="cl-value">estrategikaa@gmail.com</div>
                </div>
              </a>

              <div className="demo-box">
                <div className="demo-box-label">En la demo de 30 min</div>
                <ul>
                  {[
                    'Mostramos el sistema con tus socios reales',
                    'Calculamos la factura de un socio en vivo',
                    'Revisamos alertas de consumo del período',
                    'Accedemos al portal del socio desde celular',
                    'Respondemos todas tus preguntas técnicas',
                  ].map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>

            {/* Formulario */}
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
