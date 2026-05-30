import type { Metadata } from 'next'
import { HomeClient } from './components/HomeClient'

export const metadata: Metadata = {
  title: { absolute: 'akuas — el sistema del agua rural' },
  description: 'El sistema de gestión hecho para los Comités de Agua Potable Rural de Chile. Socios, lecturas, boletas y pagos en un solo lugar, claro y simple.',
  alternates: { canonical: 'https://akuas.cl' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿akuas emite boletas que acepta el SII?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. akuas genera boletas electrónicas automáticas después de cada lectura de medidor.' } },
    { '@type': 'Question', name: '¿Puedo gestionar los cortes sin ir al terreno?', acceptedAnswer: { '@type': 'Answer', text: 'akuas muestra en todo momento quién está en mora y quién necesita corte, para que cuando salgas al terreno sepas exactamente a qué domicilio ir.' } },
    { '@type': 'Question', name: '¿Los informes sirven para la SISS y la Subdirección?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. El módulo de Auditoría genera los reportes que exigen la SISS y la Subdirección de SSR, ordenados y listos para presentar.' } },
    { '@type': 'Question', name: '¿Qué pasa si tengo un problema y no sé cómo resolverlo?', acceptedAnswer: { '@type': 'Answer', text: 'akuas tiene soporte directo desde la plataforma. El equipo akuas está a un clic desde el mismo sistema.' } },
  ],
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'akuas',
  url: 'https://akuas.cl',
  description: 'Sistema de gestión para Comités de Agua Potable Rural de Chile',
  potentialAction: { '@type': 'SearchAction', target: 'https://akuas.cl/?q={search_term_string}', 'query-input': 'required name=search_term_string' },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <HomeClient />
    </>
  )
}
