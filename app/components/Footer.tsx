export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--akuas-primary)" }} className="text-white/70 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-xl mb-2">AKUAS</p>
          <p className="text-sm leading-relaxed">
            Plataforma integral de gestión para Comités de Agua Potable Rural de Chile.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Navegación</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: "#caracteristicas", label: "Características" },
              { href: "#para-quien", label: "¿Para quién?" },
              { href: "#precios", label: "Precios" },
              { href: "#contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Contacto</p>
          <p className="text-sm">
            <a href="mailto:estrategikaa@gmail.com" className="hover:text-white transition-colors">
              estrategikaa@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs">
        © {new Date().getFullYear()} AKUAS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
