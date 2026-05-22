"use client";

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(242,238,229,0.1)",
  border: "1px solid rgba(242,238,229,0.2)",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  color: "var(--niebla)",
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "0.9rem",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "rgba(242,238,229,0.7)",
  marginBottom: "0.375rem",
};

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        backgroundColor: "rgba(242,238,229,0.07)",
        borderRadius: "1rem",
        padding: "2rem",
        border: "1px solid rgba(242,238,229,0.1)",
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Nombre</label>
          <input type="text" placeholder="Su nombre" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>APR u organización</label>
          <input type="text" placeholder="APR El Manzano" style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Correo electrónico</label>
        <input type="email" placeholder="correo@ejemplo.cl" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Número de conexiones (aprox.)</label>
        <select style={inputStyle}>
          <option value="" className="text-gray-800">Seleccionar</option>
          <option value="1-50"   className="text-gray-800">1 – 50</option>
          <option value="51-150" className="text-gray-800">51 – 150</option>
          <option value="151-300" className="text-gray-800">151 – 300</option>
          <option value="300+"   className="text-gray-800">Más de 300</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl font-semibold text-base transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "var(--ocre)",
          color: "var(--tinta)",
          fontFamily: "var(--font-manrope, sans-serif)",
        }}
      >
        Enviar solicitud
      </button>

      <p
        style={{
          color: "rgba(242,238,229,0.35)",
          fontFamily: "var(--font-manrope, sans-serif)",
          fontSize: "0.78rem",
        }}
        className="text-center"
      >
        Le contactaremos en menos de 24 horas.
      </p>
    </form>
  );
}
