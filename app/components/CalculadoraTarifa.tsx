"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const TRAMOS = [
  { desde: 0,   hasta: 20,  precio: 850  },
  { desde: 21,  hasta: 40,  precio: 1060 },
  { desde: 41,  hasta: 60,  precio: 1275 },
  { desde: 61,  hasta: 80,  precio: 1490 },
  { desde: 81,  hasta: 100, precio: 1700 },
  { desde: 101, hasta: Infinity, precio: 1910 },
];

function calcularTarifa(consumo: number, esSocio: boolean, cargoFijo: number, costoAdmin: number) {
  const desglose: { tramo: string; m3: number; precio: number; subtotal: number }[] = [];
  let subtotalConsumo = 0;

  for (const t of TRAMOS) {
    if (consumo <= 0) break;
    const limite = t.hasta === Infinity ? consumo : Math.min(consumo, t.hasta) - t.desde + 1;
    if (consumo < t.desde) break;
    const m3EnTramo = Math.min(consumo - t.desde + 1, limite, t.hasta - t.desde + 1);
    if (m3EnTramo <= 0) continue;
    const sub = m3EnTramo * t.precio;
    subtotalConsumo += sub;
    desglose.push({
      tramo: t.hasta === Infinity ? `${t.desde}+ m³` : `${t.desde}–${t.hasta} m³`,
      m3: m3EnTramo,
      precio: t.precio,
      subtotal: sub,
    });
  }

  const baseConCargos = subtotalConsumo + (consumo > 0 ? cargoFijo : costoAdmin);
  const iva = esSocio ? 0 : Math.round(baseConCargos * 0.19);
  const total = baseConCargos + iva;

  return { desglose, subtotalConsumo, baseConCargos, iva, total };
}

// Corrected calculation
function calcularTramoReal(consumo: number) {
  const resultado: { tramo: string; m3: number; precio: number; subtotal: number }[] = [];
  let restante = consumo;

  for (const t of TRAMOS) {
    if (restante <= 0) break;
    const capacidad = t.hasta === Infinity ? restante : (t.hasta - t.desde + 1);
    const m3 = Math.min(restante, capacidad);
    resultado.push({
      tramo: t.hasta === Infinity ? `${t.desde}+ m³` : `${t.desde}–${t.hasta} m³`,
      m3,
      precio: t.precio,
      subtotal: m3 * t.precio,
    });
    restante -= m3;
  }
  return resultado;
}

function calcular(consumo: number, esSocio: boolean, cargoFijo: number, costoAdmin: number) {
  const desglose = calcularTramoReal(consumo);
  const subtotalConsumo = desglose.reduce((s, d) => s + d.subtotal, 0);
  const cargo = consumo > 0 ? cargoFijo : costoAdmin;
  const base = subtotalConsumo + cargo;
  const iva = esSocio ? 0 : Math.round(base * 0.19);
  const total = base + iva;
  return { desglose, subtotalConsumo, cargo, base, iva, total };
}

const fmt = (n: number) => new Intl.NumberFormat("es-CL").format(Math.round(n));

const inputNumStyle: React.CSSProperties = {
  backgroundColor: "white",
  border: "1.5px solid rgba(42,111,135,0.2)",
  borderRadius: "0.5rem",
  padding: "0.6rem 1rem",
  fontFamily: "var(--font-jetbrains, monospace)",
  fontSize: "1rem",
  color: "var(--tinta)",
  width: "100%",
  outline: "none",
};

export default function CalculadoraTarifa() {
  const [consumo, setConsumo] = useState(25);
  const [esSocio, setEsSocio] = useState(true);
  const [cargoFijo, setCargoFijo] = useState(10000);
  const [costoAdmin, setCostoAdmin] = useState(4000);

  const resultado = useMemo(
    () => calcular(consumo, esSocio, cargoFijo, costoAdmin),
    [consumo, esSocio, cargoFijo, costoAdmin]
  );

  return (
    <div className="max-w-3xl mx-auto">
      {/* Inputs */}
      <div
        className="rounded-2xl p-7 mb-6"
        style={{ backgroundColor: "white", border: "1px solid rgba(26,31,41,0.08)" }}
      >
        {/* Consumo slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label
              style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--tinta)",
              }}
            >
              Consumo mensual
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                max={200}
                value={consumo}
                onChange={(e) => setConsumo(Math.max(0, Math.min(200, Number(e.target.value))))}
                style={{ ...inputNumStyle, width: "90px", textAlign: "right" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  color: "rgba(26,31,41,0.5)",
                  fontSize: "0.85rem",
                }}
              >
                m³
              </span>
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={150}
            value={consumo}
            onChange={(e) => setConsumo(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--akua)", height: "6px" }}
          />
          <div
            className="flex justify-between mt-1"
            style={{
              fontFamily: "var(--font-jetbrains, monospace)",
              fontSize: "0.7rem",
              color: "rgba(26,31,41,0.4)",
            }}
          >
            <span>0 m³</span>
            <span>150 m³</span>
          </div>
        </div>

        {/* Toggle socio */}
        <div className="flex items-center justify-between mb-6 p-4 rounded-xl" style={{ backgroundColor: "var(--niebla)" }}>
          <div>
            <p style={{ fontFamily: "var(--font-manrope, sans-serif)", fontWeight: 600, fontSize: "0.9rem", color: "var(--tinta)" }}>
              Tipo de socio
            </p>
            <p style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "0.8rem", color: "rgba(26,31,41,0.5)", marginTop: "2px" }}>
              {esSocio ? "Socio — exento de IVA" : "No-socio — 19% IVA"}
            </p>
          </div>
          <div className="flex gap-2">
            {[{ val: true, label: "Socio" }, { val: false, label: "No-socio" }].map((op) => (
              <button
                key={String(op.val)}
                onClick={() => setEsSocio(op.val)}
                style={{
                  backgroundColor: esSocio === op.val ? "var(--akua)" : "white",
                  color: esSocio === op.val ? "var(--niebla)" : "rgba(26,31,41,0.6)",
                  border: `1.5px solid ${esSocio === op.val ? "var(--akua)" : "rgba(26,31,41,0.15)"}`,
                  borderRadius: "0.5rem",
                  padding: "0.45rem 0.9rem",
                  fontFamily: "var(--font-manrope, sans-serif)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {op.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cargos */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "rgba(26,31,41,0.55)",
                marginBottom: "0.375rem",
              }}
            >
              Cargo fijo mensual ($)
            </label>
            <input
              type="number"
              min={0}
              value={cargoFijo}
              onChange={(e) => setCargoFijo(Math.max(0, Number(e.target.value)))}
              style={inputNumStyle}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "rgba(26,31,41,0.55)",
                marginBottom: "0.375rem",
              }}
            >
              Costo administrativo ($)
            </label>
            <input
              type="number"
              min={0}
              value={costoAdmin}
              onChange={(e) => setCostoAdmin(Math.max(0, Number(e.target.value)))}
              style={inputNumStyle}
            />
          </div>
        </div>
      </div>

      {/* Resultado */}
      <div
        className="rounded-2xl p-7 mb-6"
        style={{ backgroundColor: "var(--akua)" }}
      >
        <p className="label-section mb-4">Resultado</p>

        {/* Desglose por tramo */}
        {resultado.desglose.length > 0 && (
          <div className="mb-5">
            <p
              style={{
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(242,238,229,0.5)",
                marginBottom: "0.75rem",
              }}
            >
              Desglose por tramo
            </p>
            <div className="space-y-2">
              {resultado.desglose.map((d) => (
                <div key={d.tramo} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "0.8rem",
                        color: "rgba(242,238,229,0.55)",
                        minWidth: "70px",
                      }}
                    >
                      {d.tramo}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "0.8rem",
                        color: "rgba(242,238,229,0.55)",
                      }}
                    >
                      {d.m3} m³ × ${fmt(d.precio)}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: "0.85rem",
                      color: "rgba(242,238,229,0.85)",
                      fontWeight: 500,
                    }}
                  >
                    ${fmt(d.subtotal)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Líneas de resumen */}
        <div
          style={{ borderTop: "1px solid rgba(242,238,229,0.15)", paddingTop: "1rem" }}
          className="space-y-2 mb-5"
        >
          {[
            { label: "Subtotal consumo", valor: resultado.subtotalConsumo },
            { label: consumo > 0 ? "Cargo fijo" : "Costo administrativo", valor: resultado.cargo },
          ].map((l) => (
            <div key={l.label} className="flex justify-between">
              <span
                style={{
                  fontFamily: "var(--font-manrope, sans-serif)",
                  fontSize: "0.875rem",
                  color: "rgba(242,238,229,0.6)",
                }}
              >
                {l.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  fontSize: "0.875rem",
                  color: "rgba(242,238,229,0.8)",
                }}
              >
                ${fmt(l.valor)}
              </span>
            </div>
          ))}
          {!esSocio && (
            <div className="flex justify-between">
              <span
                style={{
                  fontFamily: "var(--font-manrope, sans-serif)",
                  fontSize: "0.875rem",
                  color: "rgba(242,238,229,0.6)",
                }}
              >
                IVA 19%
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  fontSize: "0.875rem",
                  color: "rgba(242,238,229,0.8)",
                }}
              >
                ${fmt(resultado.iva)}
              </span>
            </div>
          )}
          {esSocio && (
            <div className="flex justify-between">
              <span
                style={{
                  fontFamily: "var(--font-manrope, sans-serif)",
                  fontSize: "0.875rem",
                  color: "rgba(242,238,229,0.45)",
                }}
              >
                IVA (exento — socio)
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  fontSize: "0.875rem",
                  color: "rgba(242,238,229,0.45)",
                }}
              >
                $0
              </span>
            </div>
          )}
        </div>

        {/* Total */}
        <div
          className="flex items-center justify-between rounded-xl p-4"
          style={{ backgroundColor: "rgba(242,238,229,0.1)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--niebla)",
            }}
          >
            Total a cobrar
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains, monospace)",
              fontSize: "1.75rem",
              color: "var(--ocre)",
              fontWeight: 500,
            }}
          >
            ${fmt(resultado.total)}
          </span>
        </div>
      </div>

      {/* Nota y CTA */}
      <div
        className="rounded-2xl p-6 text-center"
        style={{ backgroundColor: "var(--niebla)", border: "1px solid rgba(42,111,135,0.1)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-manrope, sans-serif)",
            fontSize: "0.9rem",
            color: "rgba(26,31,41,0.65)",
            lineHeight: 1.65,
            marginBottom: "1.25rem",
          }}
        >
          Este es el cálculo que akuas hace automáticamente para cada socio cada mes,
          desde la lectura del medidor hasta el monto final. Sin fórmulas manuales.
        </p>
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
