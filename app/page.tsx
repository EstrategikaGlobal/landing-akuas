import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import HeroCarousel from "./components/HeroCarousel";

export const metadata: Metadata = {
  title: "akuas — El sistema del agua rural de Chile",
  description:
    "Software para Comités de Agua Potable Rural. Facturación mensual, pagos, alertas de consumo y portal del socio. Menos planilla, más comunidad.",
  alternates: { canonical: "https://akuas.cl" },
  openGraph: {
    title: "akuas — El sistema del agua rural de Chile",
    description: "Software para APR Chile. Menos planilla, más comunidad.",
    url: "https://akuas.cl",
    images: [{ url: "/opengraph-image.png", width: 512, height: 512, alt: "akuas" }],
  },
};

/* ── Módulos del producto ── */

function IconFacturacion() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function IconAlertas() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function IconPortal() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconTarifas() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

const modulos = [
  {
    titulo: "Facturación por tramos",
    desc: "6 tramos tarifarios calculados automáticamente desde la lectura. Cargo fijo, costo administrativo e IVA aplicados en segundos.",
    Icon: IconFacturacion,
  },
  {
    titulo: "Alertas de consumo",
    desc: "Detecta posibles fugas (3× promedio), consumo alto (2×), sobreconsumo (1.5×) y consumo cero. Comparado contra los 3 meses anteriores.",
    Icon: IconAlertas,
  },
  {
    titulo: "Portal del socio",
    desc: "El socio ve su saldo, historial de consumo y avisos del comité desde cualquier celular. Sin llamar al presidente.",
    Icon: IconPortal,
  },
  {
    titulo: "Tarifas configurables",
    desc: "Estructura tarifaria adaptable al reglamento de cada APR. Hasta 6 tramos, cargo fijo diferenciado por tipo de socio.",
    Icon: IconTarifas,
  },
];

const impactoStats = [
  { valor: "< 5 min", etiqueta: "de lectura a boleta" },
  { valor: "0 CLP",   etiqueta: "para comenzar" },
  { valor: "100%",    etiqueta: "offline en terreno" },
  { valor: "6",       etiqueta: "tramos tarifarios" },
];

const beneficios = [
  {
    titulo: "Sin descuadres contables",
    desc: "Cada lectura y pago actualiza el saldo automáticamente. Si se corrige una lectura pasada, el sistema recomputa toda la cadena.",
  },
  {
    titulo: "Disponible sin internet",
    desc: "Lecturas en terreno sin señal. La app guarda en el dispositivo y sincroniza al recuperar cobertura. Sin duplicados.",
  },
  {
    titulo: "Auditoría completa",
    desc: "Cada cambio queda registrado con quién lo hizo y cuándo. Transparencia total ante la asamblea y la DOH.",
  },
];

/* ── Componente principal ── */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ══ 1. HERO CARRUSEL ══ */}
      <HeroCarousel />

      {/* ══ 2. PRODUCTO ══ */}
      <section style={{ backgroundColor: "white" }} className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>
              <p className="label-section mb-4">El software</p>
              <h2
                style={{
                  fontFamily: "var(--font-bricolage, sans-serif)",
                  color: "var(--tinta)",
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                }}
                className="text-3xl sm:text-4xl mb-5"
              >
                akuas reemplaza la planilla con un sistema que entiende cómo funciona un APR.
              </h2>
              <p
                style={{
                  color: "rgba(26,31,41,0.6)",
                  fontFamily: "var(--font-manrope, sans-serif)",
                  lineHeight: 1.65,
                }}
                className="text-base mb-8 max-w-md"
              >
                Construido para la realidad chilena: tramos tarifarios según normativa,
                lecturas offline en zonas sin señal y un portal pensado para socios adultos mayores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/funcionalidades" className="btn-akua">
                  Ver todos los módulos
                </Link>
                <Link
                  href="/contacto"
                  style={{
                    color: "var(--akua)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    textDecoration: "none",
                  }}
                >
                  Solicitar demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Grid de módulos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modulos.map(({ titulo, desc, Icon }) => (
                <div
                  key={titulo}
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: "var(--niebla)",
                    border: "1px solid rgba(26,31,41,0.07)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(42,111,135,0.1)", color: "var(--akua)" }}
                  >
                    <Icon />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage, sans-serif)",
                      color: "var(--tinta)",
                      fontWeight: 500,
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {titulo}
                  </h3>
                  <p
                    style={{
                      color: "rgba(26,31,41,0.6)",
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. IMPACTO ══ */}
      <section style={{ backgroundColor: "var(--akua)" }} className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="label-section mb-3">Impacto</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
              className="text-3xl sm:text-4xl"
            >
              Menos trabajo administrativo.
              <br />
              <em style={{ color: "var(--ocre)", fontStyle: "italic" }}>
                Más tiempo para la comunidad.
              </em>
            </h2>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {impactoStats.map((e) => (
              <div
                key={e.etiqueta}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: "rgba(242,238,229,0.08)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--ocre)",
                    fontSize: "2.25rem",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {e.valor}
                </p>
                <p
                  style={{
                    color: "rgba(242,238,229,0.65)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                  }}
                >
                  {e.etiqueta}
                </p>
              </div>
            ))}
          </div>

          {/* Beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beneficios.map((b) => (
              <div
                key={b.titulo}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "rgba(242,238,229,0.06)",
                  border: "1px solid rgba(242,238,229,0.1)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "3px",
                    backgroundColor: "var(--ocre)",
                    borderRadius: "2px",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    color: "var(--niebla)",
                    fontWeight: 500,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {b.titulo}
                </h3>
                <p
                  style={{
                    color: "rgba(242,238,229,0.6)",
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. EQUIPO / CONFIANZA ══ */}
      <section className="relative overflow-hidden" style={{ minHeight: "500px" }}>
        <Image
          src="/Inicio4.png"
          alt="Técnico de APR revisando medidor en zona rural de Chile"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,31,41,0.9) 0%, rgba(42,111,135,0.65) 55%, rgba(26,31,41,0.15) 100%)",
          }}
        />
        <div
          className="relative z-10 max-w-6xl mx-auto px-5 py-28 flex items-center"
          style={{ minHeight: "500px" }}
        >
          <div className="max-w-xl">
            <p className="label-section mb-4">Confianza</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
              className="text-3xl sm:text-4xl mb-5"
            >
              Construido con quienes trabajan
              <br />
              <em style={{ color: "var(--ocre)", fontStyle: "italic" }}>
                el agua rural todos los días.
              </em>
            </h2>
            <p
              style={{
                color: "rgba(242,238,229,0.8)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "1rem",
                lineHeight: 1.65,
                marginBottom: "1.75rem",
              }}
            >
              Trabajamos junto a dirigentes, tesoreros y técnicos de APR para entender
              los problemas reales: señal débil en terreno, socios adultos mayores, asambleas
              que piden transparencia. Cada módulo nació de una conversación real.
            </p>
            <div className="flex items-center gap-4">
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundColor: "var(--ocre)",
                  borderRadius: "1px",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  color: "var(--ocre)",
                  fontFamily: "var(--font-bricolage, sans-serif)",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                }}
              >
                Menos planilla, más comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. CTA FINAL + CONTACTO ══ */}
      <section
        style={{ backgroundColor: "var(--akua)" }}
        className="py-20 px-5"
        id="contacto"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Texto + datos de contacto */}
          <div>
            <p className="label-section mb-4">Comenzar</p>
            <h2
              style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                color: "var(--niebla)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
              className="text-3xl sm:text-4xl mb-4"
            >
              Solicita una demo gratuita.
            </h2>
            <p
              style={{
                color: "rgba(242,238,229,0.75)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "1rem",
                lineHeight: 1.65,
                marginBottom: "2rem",
              }}
            >
              Mostramos el sistema con los datos reales de tu APR en una
              videollamada de 30 minutos. Sin compromiso.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/56962104488"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-4"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    color: "rgba(242,238,229,0.55)",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  WhatsApp
                </p>
                <p
                  style={{
                    color: "var(--niebla)",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "1rem",
                  }}
                >
                  +56 9 6210 4488
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hola@akuas.cl"
              className="flex items-center gap-3"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(242,238,229,0.12)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--niebla)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    color: "rgba(242,238,229,0.55)",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    color: "var(--niebla)",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "1rem",
                  }}
                >
                  hola@akuas.cl
                </p>
              </div>
            </a>

            <p
              style={{
                color: "rgba(242,238,229,0.45)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "0.85rem",
                marginTop: "2rem",
              }}
            >
              Respondemos en menos de 24 horas. Si es urgente, escríbenos por WhatsApp.
            </p>
          </div>

          {/* Formulario */}
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
