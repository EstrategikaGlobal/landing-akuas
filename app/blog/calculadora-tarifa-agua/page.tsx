import type { Metadata } from 'next'
import { CalculadoraClient } from './CalculadoraClient'

export const metadata: Metadata = {
  title: 'Calculadora de cobro mensual de agua',
  description: 'Calcula cuánto debería cobrar tu APR por el consumo mensual de agua. Ingresa tus tarifas y lecturas del medidor — desglose completo al instante. Gratis y sin registro.',
  alternates: { canonical: 'https://akuas.cl/blog/calculadora-tarifa-agua' },
  openGraph: {
    title: 'Calculadora de cobro mensual de agua — akuas',
    description: 'Herramienta gratuita para APRs: calcula el cobro por consumo de agua con tus tarifas reales.',
    url: 'https://akuas.cl/blog/calculadora-tarifa-agua',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'calculadora tarifa agua APR' }],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://akuas.cl' },
    { '@type': 'ListItem', position: 2, name: 'Recursos', item: 'https://akuas.cl/blog' },
    { '@type': 'ListItem', position: 3, name: 'Calculadora de cobro mensual', item: 'https://akuas.cl/blog/calculadora-tarifa-agua' },
  ],
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de cobro mensual de agua APR',
  url: 'https://akuas.cl/blog/calculadora-tarifa-agua',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CLP' },
  description: 'Calculadora gratuita para APRs chilenos. Calcula el cobro mensual de agua según consumo, tarifas por m³, cargo fijo, saneamiento e IVA.',
  featureList: ['Cálculo por tramos tarifarios', 'Cargo fijo configurable', 'Saneamiento configurable', 'IVA opcional', 'Descarga de boleta en PDF'],
}

export default function CalculadoraTarifaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <CalculadoraClient />
    </>
  )
}
