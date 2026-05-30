import type { Metadata } from 'next'
import { FuncionalidadesClient } from './FuncionalidadesClient'

export const metadata: Metadata = {
  title: 'Funcionalidades',
  description: 'Facturación por tramos, gestión de pagos, alertas automáticas de consumo, portal del socio, cortes de servicio, lecturas offline y multi-tenant. Cada módulo resuelve un problema real de los APRs chilenos.',
  alternates: { canonical: 'https://akuas.cl/funcionalidades' },
  openGraph: {
    title: 'Funcionalidades — akuas',
    description: 'Cada módulo de akuas resuelve un problema real de la gestión APR: facturación, pagos, alertas, portal del socio y más.',
    url: 'https://akuas.cl/funcionalidades',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'akuas funcionalidades' }],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://akuas.cl' },
    { '@type': 'ListItem', position: 2, name: 'Funcionalidades', item: 'https://akuas.cl/funcionalidades' },
  ],
}

const softwareFeatures = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'akuas',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://akuas.cl',
  featureList: [
    'Facturación mensual automática por tramos tarifarios',
    'Gestión de pagos con saldo encadenado',
    'Alertas automáticas de consumo anormal',
    'Portal del socio optimizado para adultos mayores',
    'Centro de cortes de servicio con carta PDF legal',
    'Dashboard administrativo con detección de desajuste contable',
    'Lecturas de medidor sin conexión a internet',
    'Multi-tenant: cada APR con sus propios datos y colores',
  ],
}

export default function FuncionalidadesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareFeatures) }} />
      <FuncionalidadesClient />
    </>
  )
}
