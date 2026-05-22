"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "var(--akuas-primary)" }}
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-2xl tracking-tight">AKUAS</span>
          <span
            style={{ backgroundColor: "var(--akuas-secondary)" }}
            className="text-white text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:inline"
          >
            APR
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "#caracteristicas", label: "Características" },
            { href: "#para-quien", label: "Para quién" },
            { href: "#precios", label: "Precios" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contacto" className="btn-outline-white text-sm py-2 px-4">
            Solicitar demo
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          style={{ backgroundColor: "var(--akuas-primary)" }}
          className="md:hidden border-t border-white/10 px-4 pb-4 flex flex-col gap-3"
        >
          {[
            { href: "#caracteristicas", label: "Características" },
            { href: "#para-quien", label: "Para quién" },
            { href: "#precios", label: "Precios" },
            { href: "#contacto", label: "Solicitar demo" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-base font-medium py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
