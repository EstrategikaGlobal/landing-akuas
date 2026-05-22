"use client";

import { useState } from "react";
import Link from "next/link";

function AkuasSymbol({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="15.36" stroke="white" strokeWidth="2.88" />
      <circle cx="24" cy="24" r="9.6"   stroke="white" strokeWidth="2.88" />
      <circle cx="24" cy="24" r="3.36"  fill="#D4A560" />
    </svg>
  );
}

const navLinks = [
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/blog",            label: "Blog" },
  { href: "/sobre-nosotros",  label: "Sobre nosotros" },
  { href: "/contacto",        label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "var(--akua)" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo lockup */}
        <Link href="/" className="flex items-center gap-3" aria-label="akuas">
          <AkuasSymbol size={32} />
          <span
            style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              color: "var(--niebla)",
              fontSize: "1.35rem",
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            akuas
          </span>
        </Link>

        {/* Nav escritorio */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: "rgba(242,238,229,0.75)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="hidden md:inline-block btn-outline-niebla text-sm py-2 px-4"
        >
          Solicitar demo
        </Link>

        {/* Hamburger móvil */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--niebla)" }}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div
          style={{ backgroundColor: "var(--akua)", borderTop: "1px solid rgba(242,238,229,0.1)" }}
          className="md:hidden px-5 pb-4 flex flex-col gap-3"
        >
          {[...navLinks, { href: "/contacto", label: "Solicitar demo" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: "rgba(242,238,229,0.85)", fontFamily: "var(--font-manrope, sans-serif)" }}
              className="py-1 text-base font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
