export default function SiteFooter() {
  return (
    <footer className="foot">
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
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.52 14.15c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" /></svg>
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
              <li><a href="/funcionalidades">Funcionalidades</a></li>
              <li><a href="/sobre-nosotros">Quiénes somos</a></li>
              <li><a href="/blog">Recursos</a></li>
              <li><a href="/contacto">Agendar demo</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-legal">
          <div>© 2026 akuas</div>
          <div className="links">
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
