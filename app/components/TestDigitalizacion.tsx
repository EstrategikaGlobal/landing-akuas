"use client";

import { useState } from "react";
import Link from "next/link";

const preguntas = [
  {
    id: 1,
    pregunta: "¿Cómo registran las lecturas de medidor?",
    opciones: [
      { texto: "En papel o libreta",               pts: 0 },
      { texto: "En Excel o planilla digital",       pts: 1 },
      { texto: "En un sistema digital específico",  pts: 3 },
    ],
  },
  {
    id: 2,
    pregunta: "¿Saben en tiempo real cuánto debe cada socio?",
    opciones: [
      { texto: "No",                                               pts: 0 },
      { texto: "Sí, pero con cálculo manual o revisando Excel",   pts: 1 },
      { texto: "Sí, el sistema lo calcula automáticamente",       pts: 3 },
    ],
  },
  {
    id: 3,
    pregunta: "¿Tienen historial de consumo de los últimos 2 años?",
    opciones: [
      { texto: "No",         pts: 0 },
      { texto: "Parcial",    pts: 1 },
      { texto: "Completo",   pts: 3 },
    ],
  },
  {
    id: 4,
    pregunta: "¿Cuánto tiempo tarda la facturación mensual completa?",
    opciones: [
      { texto: "Más de 2 días",         pts: 0 },
      { texto: "Entre 1 y 2 días",      pts: 1 },
      { texto: "Menos de 4 horas",      pts: 3 },
    ],
  },
  {
    id: 5,
    pregunta: "¿Los socios pueden consultar su saldo sin llamar al comité?",
    opciones: [
      { texto: "No, nos llaman a nosotros",                    pts: 0 },
      { texto: "Solo si los llamamos nosotros primero",        pts: 1 },
      { texto: "Sí, tienen acceso propio a su información",    pts: 3 },
    ],
  },
  {
    id: 6,
    pregunta: "¿Detectan automáticamente posibles fugas de agua?",
    opciones: [
      { texto: "No",                                                    pts: 0 },
      { texto: "A veces, si alguien lo nota al revisar los datos",      pts: 1 },
      { texto: "Sí, con alertas automáticas por desviación de consumo", pts: 3 },
    ],
  },
  {
    id: 7,
    pregunta: "¿Pueden tomar lecturas sin señal de celular?",
    opciones: [
      { texto: "No, necesitamos internet para registrar",          pts: 0 },
      { texto: "Usamos papel y luego transcribimos al llegar",     pts: 1 },
      { texto: "Sí, tenemos sistema que funciona offline",         pts: 3 },
    ],
  },
  {
    id: 8,
    pregunta: "¿Tienen respaldo digital de todos los pagos recibidos?",
    opciones: [
      { texto: "No",                                              pts: 0 },
      { texto: "En Excel, pero sin comprobantes adjuntos",        pts: 1 },
      { texto: "Sí, con comprobantes y historial por socio",      pts: 3 },
    ],
  },
];

const resultados = [
  {
    rango: "0-8",
    titulo: "Gestión básica con herramientas que no son las correctas",
    texto: "Tu APR opera como el 70% de los comités rurales — con herramientas que no se diseñaron para esta tarea. Papel, Excel y cálculos manuales funcionan hasta cierto punto, pero generan descuadres, pérdida de historial y socios sin acceso a su información. akuas puede transformar tu gestión en menos de una semana.",
    colorBg: "rgba(212,165,96,0.12)",
    colorBorder: "rgba(212,165,96,0.3)",
  },
  {
    rango: "9-16",
    titulo: "Gestión digital parcial con brechas por cerrar",
    texto: "Tu APR ya usa herramientas digitales, pero probablemente sigues perdiendo tiempo en tareas que podrían automatizarse. Los cálculos manuales de tarifas, la falta de alertas automáticas y la ausencia de portal para socios son las brechas más comunes. akuas cierra esas brechas sin reemplazar lo que ya funciona.",
    colorBg: "rgba(93,167,127,0.1)",
    colorBorder: "rgba(93,167,127,0.3)",
  },
  {
    rango: "17-24",
    titulo: "Gestión avanzada lista para el siguiente nivel",
    texto: "Tu APR tiene una gestión avanzada. Si ya usas un sistema digital, akuas puede llevarla al siguiente nivel con automatización completa de alertas de consumo, portal propio para socios, lecturas offline y análisis financiero en tiempo real. Si todavía no usas akuas, hay margen para mejorar.",
    colorBg: "rgba(42,111,135,0.1)",
    colorBorder: "rgba(42,111,135,0.25)",
  },
];

function getResultado(score: number) {
  if (score <= 8) return resultados[0];
  if (score <= 16) return resultados[1];
  return resultados[2];
}

export default function TestDigitalizacion() {
  const [respuestas, setRespuestas] = useState<Record<number, number>>({});
  const [completado, setCompletado] = useState(false);

  const totalRespondidas = Object.keys(respuestas).length;
  const progreso = Math.round((totalRespondidas / preguntas.length) * 100);
  const score = Object.values(respuestas).reduce((a, b) => a + b, 0);
  const resultado = getResultado(score);

  function seleccionar(pregId: number, pts: number) {
    setRespuestas((prev) => ({ ...prev, [pregId]: pts }));
  }

  function enviar() {
    if (totalRespondidas < preguntas.length) return;
    setCompletado(true);
    setTimeout(() => {
      document.getElementById("resultado-test")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function reiniciar() {
    setRespuestas({});
    setCompletado(false);
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Barra de progreso */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span
            style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "0.85rem",
              color: "rgba(26,31,41,0.55)",
            }}
          >
            {totalRespondidas} de {preguntas.length} preguntas respondidas
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains, monospace)",
              fontSize: "0.8rem",
              color: "var(--akua)",
            }}
          >
            {progreso}%
          </span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(42,111,135,0.12)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progreso}%`, backgroundColor: "var(--akua)" }}
          />
        </div>
      </div>

      {/* Preguntas */}
      <div className="space-y-6 mb-8">
        {preguntas.map((p, idx) => (
          <div
            key={p.id}
            className="rounded-2xl overflow-hidden"
            style={{
              border: `1.5px solid ${respuestas[p.id] !== undefined ? "rgba(42,111,135,0.25)" : "rgba(26,31,41,0.08)"}`,
              backgroundColor: "white",
            }}
          >
            <div
              className="px-6 py-4"
              style={{
                backgroundColor: respuestas[p.id] !== undefined ? "rgba(42,111,135,0.04)" : "var(--niebla)",
                borderBottom: "1px solid rgba(26,31,41,0.06)",
              }}
            >
              <div className="flex items-start gap-3">
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.7rem",
                    color: "var(--ocre)",
                    letterSpacing: "0.1em",
                    paddingTop: "3px",
                    flexShrink: 0,
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "var(--tinta)",
                    lineHeight: 1.35,
                  }}
                >
                  {p.pregunta}
                </p>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {p.opciones.map((op) => {
                const seleccionado = respuestas[p.id] === op.pts;
                return (
                  <button
                    key={op.texto}
                    onClick={() => !completado && seleccionar(p.id, op.pts)}
                    disabled={completado}
                    className="w-full text-left rounded-xl px-4 py-3 transition-all"
                    style={{
                      backgroundColor: seleccionado ? "var(--akua)" : "transparent",
                      border: `1.5px solid ${seleccionado ? "var(--akua)" : "rgba(26,31,41,0.1)"}`,
                      cursor: completado ? "default" : "pointer",
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "0.9rem",
                      color: seleccionado ? "var(--niebla)" : "rgba(26,31,41,0.7)",
                      fontWeight: seleccionado ? 600 : 400,
                    }}
                  >
                    {op.texto}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Botón enviar */}
      {!completado && (
        <div className="text-center mb-8">
          <button
            onClick={enviar}
            disabled={totalRespondidas < preguntas.length}
            className="py-4 px-12 rounded-xl font-semibold text-base transition-all"
            style={{
              backgroundColor: totalRespondidas === preguntas.length ? "var(--akua)" : "rgba(26,31,41,0.1)",
              color: totalRespondidas === preguntas.length ? "var(--niebla)" : "rgba(26,31,41,0.35)",
              fontFamily: "var(--font-manrope, sans-serif)",
              cursor: totalRespondidas === preguntas.length ? "pointer" : "not-allowed",
            }}
          >
            {totalRespondidas < preguntas.length
              ? `Responde las ${preguntas.length - totalRespondidas} pregunta${preguntas.length - totalRespondidas !== 1 ? "s" : ""} restante${preguntas.length - totalRespondidas !== 1 ? "s" : ""}`
              : "Ver resultado"}
          </button>
        </div>
      )}

      {/* Resultado */}
      {completado && (
        <div id="resultado-test" className="mt-4">
          <div
            className="rounded-2xl p-7 mb-5"
            style={{
              backgroundColor: resultado.colorBg,
              border: `1.5px solid ${resultado.colorBorder}`,
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ocre)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Tu puntuación
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "2rem",
                    color: "var(--akua)",
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  {score}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "rgba(26,31,41,0.4)",
                      marginLeft: "4px",
                    }}
                  >
                    / 24
                  </span>
                </p>
              </div>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                fontWeight: 500,
                fontSize: "1.2rem",
                color: "var(--tinta)",
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              {resultado.titulo}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.9rem",
                color: "rgba(26,31,41,0.7)",
                lineHeight: 1.65,
              }}
            >
              {resultado.texto}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="py-4 px-8 rounded-xl font-semibold text-base text-center transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--akua)",
                color: "var(--niebla)",
                fontFamily: "var(--font-manrope, sans-serif)",
              }}
            >
              Solicitar demo
            </Link>
            <button
              onClick={reiniciar}
              className="py-4 px-8 rounded-xl font-semibold text-base transition-all hover:opacity-80"
              style={{
                backgroundColor: "transparent",
                color: "var(--akua)",
                border: "1.5px solid var(--akua)",
                fontFamily: "var(--font-manrope, sans-serif)",
                cursor: "pointer",
              }}
            >
              Repetir test
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
