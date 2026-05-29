import type { Metadata } from 'next'
import { FuncionalidadesClient } from './FuncionalidadesClient'

export const metadata: Metadata = {
  title: 'Funcionalidades — akuas',
  description: 'Facturación por tramos, gestión de pagos, alertas automáticas de consumo, portal del socio, cortes de servicio, lecturas offline y multi-tenant. Cada módulo resuelve un problema real de los APRs chilenos.',
  alternates: { canonical: 'https://akuas.cl/funcionalidades' },
  openGraph: {
    title: 'Funcionalidades — akuas',
    description: 'Cada módulo de akuas resuelve un problema real de la gestión APR: facturación, pagos, alertas, portal del socio y más.',
    url: 'https://akuas.cl/funcionalidades',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'akuas funcionalidades' }],
  },
}

export default function FuncionalidadesPage() {
  return <FuncionalidadesClient />
}
