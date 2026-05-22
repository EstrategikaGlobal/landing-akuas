import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AKUAS — Plataforma de Gestión para APRs",
  description:
    "Sistema integral para Comités de Agua Potable Rural. Facturación, pagos, alertas de consumo y portal de clientes en una sola plataforma.",
  keywords: ["APR", "agua potable rural", "gestión APR", "facturación agua", "comité de agua"],
  openGraph: {
    title: "AKUAS — Plataforma de Gestión para APRs",
    description: "Sistema integral para Comités de Agua Potable Rural.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
