import type { Metadata } from 'next'
import { BlogClient } from './BlogClient'

export const metadata: Metadata = {
  title: 'Recursos para APRs',
  description: 'Calculadoras gratuitas, tests de diagnóstico y guías prácticas para comités de Agua Potable Rural de Chile. Todo sobre Ley 20.998, facturación por tramos y gestión de morosidad.',
  alternates: { canonical: 'https://akuas.cl/blog' },
  openGraph: {
    title: 'Recursos para APRs — akuas',
    description: 'Calculadoras, test de digitalización y guías de gestión para Comités de Agua Potable Rural.',
    url: 'https://akuas.cl/blog',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'akuas recursos' }],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://akuas.cl' },
    { '@type': 'ListItem', position: 2, name: 'Recursos', item: 'https://akuas.cl/blog' },
  ],
}

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Recursos para APRs',
  url: 'https://akuas.cl/blog',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Calculadora de cobro mensual de agua', url: 'https://akuas.cl/blog/calculadora-tarifa-agua' },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <BlogClient />
    </>
  )
}
