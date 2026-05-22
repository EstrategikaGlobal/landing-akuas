"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "white",
  border: "1.5px solid rgba(42,111,135,0.2)",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  color: "var(--tinta)",
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "0.9rem",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "rgba(26,31,41,0.6)",
  marginBottom: "0.375rem",
};

export default function ContactoForm() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{
          backgroundColor: "white",
          border: "1.5px solid rgba(93,167,127,0.3)",
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "rgba(93,167,127,0.12)" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brote)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-bricolage, sans-serif)",
            fontWeight: 500,
            fontSize: "1.2rem",
            color: "var(--tinta)",
            marginBottom: "0.5rem",
          }}
        >
          Mensaje recibido.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-manrope, sans-serif)",
            fontSize: "0.9rem",
            color: "rgba(26,31,41,0.6)",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
          }}
        >
          Te contactaremos en menos de 24 horas para coordinar la demo.
          Si necesitás respuesta más rápida, escríbenos por WhatsApp.
        </p>
        <a
          href="https://wa.me/56962104488"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-3 px-7 rounded-xl font-semibold text-sm transition-opacity hover:opacity-85"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            fontFamily: "var(--font-manrope, sans-serif)",
          }}
        >
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      style={{
        backgroundColor: "white",
        borderRadius: "1.25rem",
        padding: "2rem",
        border: "1px solid rgba(26,31,41,0.08)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Nombre *</label>
          <input type="text" placeholder="Su nombre" required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>APR u organización *</label>
          <input type="text" placeholder="APR El Manzano" required style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Correo electrónico *</label>
        <input type="email" placeholder="correo@ejemplo.cl" required style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Número de conexiones (aprox.)</label>
        <select style={inputStyle}>
          <option value="">Seleccionar</option>
          <option value="1-50">1 – 50 conexiones</option>
          <option value="51-150">51 – 150 conexiones</option>
          <option value="151-300">151 – 300 conexiones</option>
          <option value="300+">Más de 300 conexiones</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Mensaje (opcional)</label>
        <textarea
          rows={4}
          placeholder="Cuéntanos brevemente cómo gestionan hoy la facturación o qué problema les gustaría resolver..."
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl font-semibold text-base transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "var(--akua)",
          color: "var(--niebla)",
          fontFamily: "var(--font-manrope, sans-serif)",
        }}
      >
        Solicitar demo
      </button>

      <p
        style={{
          color: "rgba(26,31,41,0.4)",
          fontFamily: "var(--font-manrope, sans-serif)",
          fontSize: "0.78rem",
          textAlign: "center",
        }}
      >
        Respondemos en menos de 24 horas. Sin compromiso.
      </p>
    </form>
  );
}
