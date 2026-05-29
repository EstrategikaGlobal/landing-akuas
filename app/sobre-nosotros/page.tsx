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

export default function SobreNosotrosPage() {
  return <SobreNosotrosClient />
}
