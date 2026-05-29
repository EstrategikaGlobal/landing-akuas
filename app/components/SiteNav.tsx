'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/funcionalidades', label: 'Funcionalidades' },
  { href: '/sobre-nosotros', label: 'Quiénes somos' },
  { href: '/blog', label: 'Recursos' },
]

export default function SiteNav() {
  const pathname = usePathname()
  return (
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
          <Link href="/contacto" className="btn ghost-light">Contacto</Link>
          <Link href="/contacto" className="btn primary">Agendar demo</Link>
        </div>
      </div>
    </nav>
  )
}
