import type { Metadata } from 'next'
import { SobreNosotrosClient } from './SobreNosotrosClient'

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description: 'akuas nació de observar cómo gestionan su APR los comités de agua potable rural en Chile. Construido para que cada comité opere con la misma rigurosidad que una empresa, sin necesitar un contador.',
  alternates: { canonical: 'https://akuas.cl/sobre-nosotros' },
  openGraph: {
    title: 'Quiénes somos — akuas',
    description: 'Conoce la historia y los valores detrás de akuas, el software para APR de Chile.',
    url: 'https://akuas.cl/sobre-nosotros',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'sobre akuas' }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'akuas',
  url: 'https://akuas.cl',
  logo: 'https://akuas.cl/akuas-monograma-positivo.svg',
  description: 'Empresa de tecnología especializada en software de gestión para Comités de Agua Potable Rural de Chile.',
  contactPoint: { '@type': 'ContactPoint', telephone: '+56-9-4265-7280', contactType: 'customer support', availableLanguage: 'Spanish', areaServed: 'CL' },
  sameAs: ['https://www.instagram.com/akuas.cl'],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://akuas.cl' },
    { '@type': 'ListItem', position: 2, name: 'Quiénes somos', item: 'https://akuas.cl/sobre-nosotros' },
  ],
}

export default function SobreNosotrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SobreNosotrosClient />
    </>
  )
}
