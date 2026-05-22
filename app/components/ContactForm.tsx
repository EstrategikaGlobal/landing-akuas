"use client";

export default function ContactForm() {
  return (
    <form
      className="bg-white/10 backdrop-blur rounded-2xl p-8 text-left space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full bg-white/15 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">
            APR / Organización
          </label>
          <input
            type="text"
            placeholder="Nombre de tu APR"
            className="w-full bg-white/15 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="correo@ejemplo.cl"
          className="w-full bg-white/15 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">
          Número de conexiones (aprox.)
        </label>
        <select className="w-full bg-white/15 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 text-sm">
          <option value="" className="text-gray-800">
            Seleccionar
          </option>
          <option value="1-50" className="text-gray-800">
            1 – 50
          </option>
          <option value="51-150" className="text-gray-800">
            51 – 150
          </option>
          <option value="151-300" className="text-gray-800">
            151 – 300
          </option>
          <option value="300+" className="text-gray-800">
            Más de 300
          </option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-xl font-bold text-base transition-all hover:opacity-90"
        style={{ backgroundColor: "var(--akuas-secondary)", color: "white" }}
      >
        Enviar solicitud
      </button>
      <p className="text-white/50 text-xs text-center">
        Te contactaremos en menos de 24 horas.
      </p>
    </form>
  );
}
