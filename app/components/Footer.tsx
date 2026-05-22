function AkuasSymbol() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="15.36" stroke="white" strokeWidth="2.88" />
      <circle cx="24" cy="24" r="9.6"   stroke="white" strokeWidth="2.88" />
      <circle cx="24" cy="24" r="3.36"  fill="#D4A560" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--tinta)" }}>
      <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Marca */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <AkuasSymbol />
            <span
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontSize: "1.2rem",
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
            >
              akuas
            </span>
          </div>
          <p
            style={{
              color: "rgba(242,238,229,0.5)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "0.85rem",
              lineHeight: 1.6,
            }}
          >
            El sistema del agua rural de Chile.
          </p>
          <p
            style={{
              color: "var(--ocre)",
              fontFamily: "var(--font-bricolage, sans-serif)",
              fontSize: "0.95rem",
              fontStyle: "italic",
              marginTop: "0.5rem",
            }}
          >
            Menos planilla, más comunidad.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-jetbrains, monospace)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "var(--ocre)",
              textTransform: "uppercase",
              marginBottom: "0.875rem",
            }}
          >
            Navegación
          </p>
          <ul className="space-y-2">
            {[
              { href: "#modulos",    label: "Módulos" },
              { href: "#para-quien", label: "Para quién" },
              { href: "#planes",     label: "Planes" },
              { href: "#contacto",   label: "Contacto" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    color: "rgba(242,238,229,0.55)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.875rem",
                  }}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-jetbrains, monospace)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "var(--ocre)",
              textTransform: "uppercase",
              marginBottom: "0.875rem",
            }}
          >
            Contacto
          </p>
          <a
            href="mailto:hola@akuas.cl"
            style={{
              color: "rgba(242,238,229,0.55)",
              fontFamily: "var(--font-jetbrains, monospace)",
              fontSize: "0.875rem",
            }}
            className="hover:text-white transition-colors block mb-1"
          >
            hola@akuas.cl
          </a>
          <p
            style={{
              color: "rgba(242,238,229,0.35)",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "0.8rem",
            }}
          >
            Santiago de Chile · 2026
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(242,238,229,0.07)",
          fontFamily: "var(--font-jetbrains, monospace)",
          fontSize: "0.7rem",
          color: "rgba(242,238,229,0.25)",
          letterSpacing: "0.05em",
        }}
        className="text-center py-4"
      >
        © {new Date().getFullYear()} akuas™ · Todos los derechos reservados
      </div>
    </footer>
  );
}
