import type { Metadata } from 'next'
import { CalculadoraClient } from './CalculadoraClient'

export const metadata: Metadata = {
  title: 'Calculadora de cobro mensual de agua',
  description: 'Calcula cuánto debería cobrar tu APR por el consumo mensual de agua. Ingresa tus tarifas y lecturas del medidor — desglose completo al instante.',
  alternates: { canonical: 'https://akuas.cl/blog/calculadora-tarifa-agua' },
  openGraph: {
    title: 'Calculadora de cobro mensual de agua — akuas',
    description: 'Herramienta gratuita para APRs: calcula el cobro por consumo de agua con tus tarifas reales.',
    url: 'https://akuas.cl/blog/calculadora-tarifa-agua',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'calculadora tarifa agua APR' }],
  },
}

export default function CalculadoraTarifaPage() {
  return <CalculadoraClient />
}
