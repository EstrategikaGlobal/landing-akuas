import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Acceso a la Plataforma | akuas',
  description: 'Selecciona tu tipo de acceso al Sistema de Gestión APR',
  alternates: { canonical: 'https://akuas.cl/acceso' },
}

const cards = [
  {
    icon: '🏢',
    iconSize: 48,
    title: 'Directiva APR',
    subtitle: 'Directivos, operadores y trabajadores del comité',
    href: 'https://app.akuas.cl/admin',
    button: true,
    subtle: false,
  },
  {
    icon: '💧',
    iconSize: 48,
    title: 'Socios y Usuarios',
    subtitle: 'Consulta tus boletas, pagos y consumo de agua',
    href: 'https://app.akuas.cl/socios',
    button: true,
    subtle: false,
  },
  {
    icon: '⚙️',
    iconSize: 32,
    title: 'Equipo AKUAS',
    subtitle: 'Acceso interno para el equipo de gestión',
    href: 'https://app.akuas.cl/akuas',
    button: false,
    subtle: true,
  },
]

export default function AccesoPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'oklch(0.18 0.02 240)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: 'var(--font-manrope), Manrope, system-ui, sans-serif',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: 40 }}>
        <Image
          src="/akuas-lockup-horizontal-reverso.svg"
          alt="akuas"
          width={220}
          height={48}
          priority
        />
      </div>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1
          style={{
            fontFamily: 'var(--font-bricolage), Bricolage Grotesque, system-ui, sans-serif',
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 12px',
            letterSpacing: '-0.02em',
          }}
        >
          ¿Cómo deseas ingresar?
        </h1>
        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.55)',
            margin: 0,
            fontWeight: 400,
          }}
        >
          Selecciona tu perfil de acceso
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          width: '100%',
          maxWidth: 900,
          marginBottom: 48,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.href}
            style={{
              background: card.subtle
                ? 'rgba(255,255,255,0.03)'
                : 'rgba(255,255,255,0.06)',
              border: card.subtle
                ? '1px solid rgba(255,255,255,0.07)'
                : '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: 24,
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 0,
            }}
          >
            {/* Icon */}
            <span
              style={{
                fontSize: card.iconSize,
                lineHeight: 1,
                marginBottom: 20,
                opacity: card.subtle ? 0.6 : 1,
              }}
            >
              {card.icon}
            </span>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-bricolage), Bricolage Grotesque, system-ui, sans-serif',
                fontSize: card.subtle ? 17 : 20,
                fontWeight: 700,
                color: card.subtle ? 'rgba(255,255,255,0.6)' : '#ffffff',
                margin: '0 0 8px',
                letterSpacing: '-0.01em',
              }}
            >
              {card.title}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.4)',
                margin: '0 0 28px',
                lineHeight: 1.5,
                fontWeight: 400,
              }}
            >
              {card.subtitle}
            </p>

            {/* CTA */}
            {card.button ? (
              <a
                href={card.href}
                style={{
                  display: 'inline-block',
                  background: 'oklch(0.42 0.10 205)',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'opacity 0.15s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Ingresar
              </a>
            ) : (
              <a
                href={card.href}
                style={{
                  display: 'inline-block',
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'color 0.15s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                Acceder →
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Back link */}
      <a
        href="https://akuas.cl"
        style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, textDecoration: 'none', marginBottom: 32 }}
      >
        ← Volver a akuas.cl
      </a>

      {/* Footer */}
      <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: 11, margin: 0, letterSpacing: '0.05em' }}>
        AKUAS · Estrategika Global
      </p>
    </main>
  )
}
