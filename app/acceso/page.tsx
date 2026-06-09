import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Acceso a la Plataforma | akuas',
  description: 'Selecciona tu tipo de acceso al Sistema de Gestión APR',
  alternates: { canonical: 'https://akuas.cl/acceso' },
}

export default function AccesoPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'oklch(0.18 0.02 240)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: 'var(--font-manrope), Manrope, system-ui, sans-serif',
    }}>

      <style>{`
        .acceso-card { transition: transform 0.2s, border-color 0.2s; }
        .acceso-card:hover { transform: translateY(-3px); border-color: rgba(255,255,255,0.25) !important; }
        .acceso-btn { transition: opacity 0.15s; }
        .acceso-btn:hover { opacity: 0.82; }
        .acceso-link { transition: color 0.15s; }
        .acceso-link:hover { color: rgba(255,255,255,0.65) !important; }
        .acceso-back { transition: color 0.15s; }
        .acceso-back:hover { color: rgba(255,255,255,0.6) !important; }
      `}</style>

      {/* Logo */}
      <div style={{ marginBottom: 40 }}>
        <Image src="/akuas-lockup-horizontal-reverso.svg" alt="akuas" width={220} height={48} priority />
      </div>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{
          fontFamily: 'var(--font-bricolage), Bricolage Grotesque, system-ui, sans-serif',
          fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: '#ffffff',
          margin: '0 0 12px', letterSpacing: '-0.02em',
        }}>
          ¿Cómo deseas ingresar?
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', margin: 0, fontWeight: 400 }}>
          Selecciona tu perfil de acceso
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 20, width: '100%', maxWidth: 900, marginBottom: 48,
      }}>

        {/* Card 1 — Directiva APR */}
        <div className="acceso-card" style={{
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 24, padding: '36px 28px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        }}>
          <span style={{ fontSize: 48, lineHeight: 1, marginBottom: 20 }}>🏢</span>
          <h2 style={{
            fontFamily: 'var(--font-bricolage), Bricolage Grotesque, system-ui, sans-serif',
            fontSize: 20, fontWeight: 700, color: '#ffffff', margin: '0 0 8px', letterSpacing: '-0.01em',
          }}>Directiva APR</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: '0 0 28px', lineHeight: 1.5 }}>
            Directivos, operadores y trabajadores del comité
          </p>
          <a href="https://app.akuas.cl/admin" className="acceso-btn" style={{
            display: 'inline-block', background: 'oklch(0.42 0.10 205)', color: '#ffffff',
            padding: '12px 28px', borderRadius: 999, fontWeight: 700, fontSize: 14,
            textDecoration: 'none', letterSpacing: '0.01em',
          }}>
            Ingresar
          </a>
        </div>

        {/* Card 2 — Socios y Usuarios */}
        <div className="acceso-card" style={{
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 24, padding: '36px 28px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        }}>
          <span style={{ fontSize: 48, lineHeight: 1, marginBottom: 20 }}>💧</span>
          <h2 style={{
            fontFamily: 'var(--font-bricolage), Bricolage Grotesque, system-ui, sans-serif',
            fontSize: 20, fontWeight: 700, color: '#ffffff', margin: '0 0 8px', letterSpacing: '-0.01em',
          }}>Socios y Usuarios</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: '0 0 28px', lineHeight: 1.5 }}>
            Consulta tus boletas, pagos y consumo de agua
          </p>
          <a href="https://app.akuas.cl/socios" className="acceso-btn" style={{
            display: 'inline-block', background: 'oklch(0.42 0.10 205)', color: '#ffffff',
            padding: '12px 28px', borderRadius: 999, fontWeight: 700, fontSize: 14,
            textDecoration: 'none', letterSpacing: '0.01em',
          }}>
            Ingresar
          </a>
        </div>

        {/* Card 3 — Equipo AKUAS (sutil) */}
        <div className="acceso-card" style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 24, padding: '36px 28px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        }}>
          <span style={{ fontSize: 32, lineHeight: 1, marginBottom: 20, opacity: 0.6 }}>⚙️</span>
          <h2 style={{
            fontFamily: 'var(--font-bricolage), Bricolage Grotesque, system-ui, sans-serif',
            fontSize: 17, fontWeight: 700, color: 'rgba(255,255,255,0.55)', margin: '0 0 8px',
          }}>Equipo AKUAS</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: '0 0 28px', lineHeight: 1.5 }}>
            Acceso interno para el equipo de gestión
          </p>
          <a href="https://app.akuas.cl/akuas" className="acceso-link" style={{
            color: 'rgba(255,255,255,0.3)', fontSize: 13, fontWeight: 600, textDecoration: 'none',
          }}>
            Acceder →
          </a>
        </div>

      </div>

      {/* Back */}
      <a href="https://akuas.cl" className="acceso-back" style={{
        color: 'rgba(255,255,255,0.25)', fontSize: 12, textDecoration: 'none', marginBottom: 32,
      }}>
        ← Volver a akuas.cl
      </a>

      <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: 11, margin: 0, letterSpacing: '0.05em' }}>
        AKUAS · Estrategika Global
      </p>
    </main>
  )
}
