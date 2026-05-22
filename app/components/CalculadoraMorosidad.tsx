"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const fmt = (n: number) =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(Math.round(n));

const fmtNum = (n: number) => new Intl.NumberFormat("es-CL").format(Math.round(n));

export default function CalculadoraMorosidad() {
  const [totalSocios, setTotalSocios] = useState(80);
  const [pctMorosos, setPctMorosos] = useState(20);
  const [consumoPromedio, setConsumoPromedio] = useState(18);
  const [tarifaPromedio, setTarifaPromedio] = useState(850);

  const resultado = useMemo(() => {
    const morosos = Math.round(totalSocios * (pctMorosos / 100));
    const perdidaMensual = morosos * consumoPromedio * tarifaPromedio;
    const perdidaAnual = perdidaMensual * 12;
    const perdida3anos = perdidaAnual * 3;
    return { morosos, perdidaMensual, perdidaAnual, perdida3anos };
  }, [totalSocios, pctMorosos, consumoPromedio, tarifaPromedio]);

  const sliderStyle: React.CSSProperties = { width: "100%", accentColor: "var(--ocre)", height: "6px" };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-manrope, sans-serif)",
    fontWeight: 600,
    fontSize: "0.9rem",
    color: "var(--tinta)",
  };

  const valueStyle: React.CSSProperties = {
    fontFamily: "var(--font-jetbrains, monospace)",
    fontSize: "0.95rem",
    color: "var(--akua)",
    fontWeight: 500,
  };

  const subLabelStyle: React.CSSProperties = {
    fontFamily: "var(--font-jetbrains, monospace)",
    fontSize: "0.68rem",
    color: "rgba(26,31,41,0.35)",
    letterSpacing: "0.06em",
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Inputs */}
      <div
        className="rounded-2xl p-7 mb-6"
        style={{ backgroundColor: "white", border: "1px solid rgba(26,31,41,0.08)" }}
      >
        <div className="space-y-6">
          {/* Total socios */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label style={labelStyle}>Total de socios</label>
              <span style={valueStyle}>{fmtNum(totalSocios)}</span>
            </div>
            <input
              type="range"
              min={10}
              max={500}
              step={5}
              value={totalSocios}
              onChange={(e) => setTotalSocios(Number(e.target.value))}
              style={sliderStyle}
            />
            <div className="flex justify-between mt-1">
              <span style={subLabelStyle}>10</span>
              <span style={subLabelStyle}>500</span>
            </div>
          </div>

          {/* % morosos */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label style={labelStyle}>Porcentaje de socios morosos</label>
              <span style={valueStyle}>{pctMorosos}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={60}
              value={pctMorosos}
              onChange={(e) => setPctMorosos(Number(e.target.value))}
              style={sliderStyle}
            />
            <div className="flex justify-between mt-1">
              <span style={subLabelStyle}>0%</span>
              <span style={subLabelStyle}>60%</span>
            </div>
          </div>

          {/* Consumo promedio */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label style={labelStyle}>Consumo promedio mensual por socio</label>
              <span style={valueStyle}>{consumoPromedio} m³</span>
            </div>
            <input
              type="range"
              min={5}
              max={80}
              value={consumoPromedio}
              onChange={(e) => setConsumoPromedio(Number(e.target.value))}
              style={sliderStyle}
            />
            <div className="flex justify-between mt-1">
              <span style={subLabelStyle}>5 m³</span>
              <span style={subLabelStyle}>80 m³</span>
            </div>
          </div>

          {/* Tarifa promedio */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label style={labelStyle}>Tarifa promedio ($/m³)</label>
              <span style={valueStyle}>${fmtNum(tarifaPromedio)}/m³</span>
            </div>
            <input
              type="range"
              min={500}
              max={2000}
              step={50}
              value={tarifaPromedio}
              onChange={(e) => setTarifaPromedio(Number(e.target.value))}
              style={sliderStyle}
            />
            <div className="flex justify-between mt-1">
              <span style={subLabelStyle}>$500/m³</span>
              <span style={subLabelStyle}>$2.000/m³</span>
            </div>
          </div>
        </div>

        {/* Morosos resultado inline */}
        <div
          className="mt-5 rounded-xl px-5 py-3 flex items-center gap-3"
          style={{ backgroundColor: "rgba(212,165,96,0.1)", border: "1px solid rgba(212,165,96,0.25)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains, monospace)",
              fontSize: "1.5rem",
              color: "var(--ocre)",
              fontWeight: 500,
            }}
          >
            {fmtNum(resultado.morosos)}
          </span>
          <span
            style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "0.875rem",
              color: "rgba(26,31,41,0.55)",
            }}
          >
            socios morosos de {fmtNum(totalSocios)} totales
          </span>
        </div>
      </div>

      {/* Cards resultado */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Pérdida mensual", valor: resultado.perdidaMensual, sub: "Por mes no cobrado" },
          { label: "Pérdida anual",   valor: resultado.perdidaAnual,   sub: "Si persiste 12 meses" },
          { label: "Pérdida en 3 años", valor: resultado.perdida3anos, sub: "Proyección acumulada" },
        ].map((c) => (
          <div
            key={c.label}
            className="rounded-2xl p-5 text-center"
            style={{ backgroundColor: "var(--akua)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(242,238,229,0.5)",
                marginBottom: "0.5rem",
              }}
            >
              {c.label}
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "1.5rem",
                color: "var(--ocre)",
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              {fmt(c.valor)}
            </p>
            <p
              style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.78rem",
                color: "rgba(242,238,229,0.45)",
              }}
            >
              {c.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Qué puede hacer akuas */}
      <div
        className="rounded-2xl p-7 mb-6"
        style={{ backgroundColor: "var(--niebla)", border: "1px solid rgba(42,111,135,0.1)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-jetbrains, monospace)",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ocre)",
            marginBottom: "1rem",
          }}
        >
          Qué puede hacer akuas
        </p>
        <div className="space-y-3">
          {[
            {
              titulo: "Ranking de morosidad en tiempo real",
              texto: "Identifica al instante quiénes adeudan más, cuántos meses llevan y el monto exacto. Sin revisar planillas.",
            },
            {
              titulo: "Antigüedad de deuda por categorías",
              texto: "Clasifica automáticamente: al día, 1 mes, 2-3 meses y crítico (más de 3 meses). El directivo ve dónde actuar primero.",
            },
            {
              titulo: "Cortes sugeridos con carta PDF",
              texto: "El sistema identifica candidatos a corte según morosidad. Genera la carta legal con un clic y envía notificación por email.",
            },
          ].map((item) => (
            <div key={item.titulo} className="flex gap-3">
              <span
                style={{
                  color: "var(--brote)",
                  fontWeight: 700,
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "var(--tinta)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {item.titulo}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.85rem",
                    color: "rgba(26,31,41,0.6)",
                    lineHeight: 1.55,
                  }}
                >
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/contacto"
          className="btn-akua"
          style={{ display: "inline-block" }}
        >
          Solicitar demo
        </Link>
      </div>
    </div>
  );
}
