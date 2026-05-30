'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MOB_CSS = `
.burger { display: none; background: none; border: none; cursor: pointer; color: var(--paper); padding: 6px; align-items: center; }
.burger svg { width: 24px; height: 24px; }
@media (max-width: 860px) { .site-nav ul { display: none !important; } .burger { display: flex; } }
.mob-overlay { position: fixed; inset: 0; z-index: 500; background: var(--ink); display: flex; flex-direction: column; transform: translateX(100%); transition: transform 0.32s cubic-bezier(0.22, 0.61, 0.36, 1); }
.mob-overlay.open { transform: none; }
.mob-inner { display: flex; flex-direction: column; height: 100%; padding: 20px 24px 40px; overflow-y: auto; }
.mob-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.mob-head .mob-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--paper); }
.mob-head .mob-brand .mk { width: 34px; height: 34px; background: var(--aqua); border-radius: 8px; display: grid; place-items: center; }
.mob-head .mob-brand .mk svg { width: 100%; height: 100%; color: var(--paper); }
.mob-head .mob-brand .wm { font-family: var(--serif); font-weight: 500; font-size: 26px; letter-spacing: -0.04em; }
.mob-head .mob-brand .wm .k { color: var(--ocre); font-style: italic; }
.mob-close { background: none; border: none; cursor: pointer; color: var(--paper); padding: 6px; display: grid; place-items: center; }
.mob-close svg { width: 26px; height: 26px; }
.mob-links { display: flex; flex-direction: column; flex: 1; }
.mob-links a { font-family: var(--serif); font-weight: 500; font-size: 28px; letter-spacing: -0.025em; color: oklch(0.88 0.01 240 / 0.85); text-decoration: none; display: block; padding: 16px 0; border-bottom: 1px solid oklch(0.28 0.025 240); transition: color 0.15s; }
.mob-links a:last-child { border-bottom: none; }
.mob-links a:hover, .mob-links a.mob-active { color: var(--paper); }
.mob-links a.mob-active { color: var(--ocre); }
.mob-cta { margin-top: 36px; }
.mob-cta a { display: flex; justify-content: center; background: var(--ocre); color: var(--ink); font-family: var(--sans); font-weight: 600; font-size: 17px; padding: 16px; border-radius: 999px; text-decoration: none; transition: background 0.15s; }
.mob-cta a:hover { background: oklch(0.78 0.13 75); }
`

const links = [
  { href: '/funcionalidades', label: 'Funcionalidades' },
  { href: '/sobre-nosotros', label: 'Quiénes somos' },
  { href: '/blog', label: 'Recursos' },
  { href: '/contacto', label: 'Contacto' },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MOB_CSS }} />
      <nav className="site-nav">
        <div className="row">
          <Link href="/" className="site-brand">
            <span className="mk">
              <svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32" /><circle cx="50" cy="50" r="20" /></g><circle cx="50" cy="50" r="9" fill="var(--ocre)" /></svg>
            </span>
            <span className="wm">a<span className="k">k</span>uas</span>
          </Link>
          <ul>
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={pathname.startsWith(l.href) ? 'active' : ''}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="site-nav-ctas">
            <Link href="/contacto" className="btn primary">Agendar demo</Link>
            <button className="burger" onClick={() => setOpen(true)} aria-label="Abrir menú">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mob-overlay${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mob-inner">
          <div className="mob-head">
            <Link href="/" className="mob-brand" onClick={() => setOpen(false)}>
              <span className="mk"><svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round"><circle cx="50" cy="50" r="32"/><circle cx="50" cy="50" r="20"/></g><circle cx="50" cy="50" r="9" fill="var(--ocre)"/></svg></span>
              <span className="wm">a<span className="k">k</span>uas</span>
            </Link>
            <button className="mob-close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div className="mob-links">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname.startsWith(l.href) ? 'mob-active' : ''}
                onClick={() => setOpen(false)}
              >{l.label}</Link>
            ))}
          </div>
          <div className="mob-cta">
            <Link href="/contacto" onClick={() => setOpen(false)}>Agendar demo →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
