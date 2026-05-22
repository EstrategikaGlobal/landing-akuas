import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akuas.cl"),
  title: {
    default: "akuas — El sistema del agua rural de Chile",
    template: "%s | akuas",
  },
  description:
    "Software para Comités de Agua Potable Rural. Facturación, pagos, alertas de consumo y portal del socio. Gestión APR digital, simple y sin planillas.",
  keywords: [
    "software APR Chile",
    "gestión agua potable rural",
    "sistema APR",
    "APR digital",
    "facturación agua potable",
    "comité de agua potable rural",
    "sistema gestión APR",
    "agua rural Chile",
  ],
  authors: [{ name: "akuas", url: "https://akuas.cl" }],
  creator: "akuas",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://akuas.cl",
    siteName: "akuas",
    title: "akuas — El sistema del agua rural de Chile",
    description:
      "Software para Comités de Agua Potable Rural. Facturación, pagos y portal del socio. Menos planilla, más comunidad.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 512,
        height: 512,
        alt: "akuas — Software para APR Chile",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "akuas — El sistema del agua rural de Chile",
    description: "Software para APR Chile. Menos planilla, más comunidad.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://akuas.cl",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "akuas",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://akuas.cl",
  description:
    "Sistema integral de gestión para Comités de Agua Potable Rural de Chile. Facturación mensual, registro de pagos, alertas de consumo y portal del socio.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CLP",
    description: "Plan único APR — precio fijo mensual sin comisiones por cobro",
  },
  provider: {
    "@type": "Organization",
    name: "akuas",
    url: "https://akuas.cl",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+56-9-6210-4488",
      contactType: "customer support",
      areaServed: "CL",
      availableLanguage: "Spanish",
    },
  },
  audience: {
    "@type": "Audience",
    audienceType: "Comités de Agua Potable Rural",
    geographicArea: {
      "@type": "Country",
      name: "Chile",
    },
  },
  featureList: [
    "Facturación mensual con tramos tarifarios",
    "Registro de pagos y seguimiento de morosidad",
    "Alertas de consumo anormal",
    "Portal del socio con acceso a historial",
    "Exportación a Excel y PDF",
    "Funcionamiento sin conexión a internet",
  ],
  keywords:
    "software APR, gestión agua potable rural, sistema APR Chile, facturación agua, comité APR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${manrope.variable} ${jetbrains.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
