import type { Metadata } from 'next'
import { ContactoClient } from './ContactoClient'

export const metadata: Metadata = {
  title: 'Solicitar demo',
  description: 'Conversa con el equipo akuas sobre tu comité. Demo gratuita, sin compromiso. Escríbenos por WhatsApp, correo o Instagram.',
  alternates: { canonical: 'https://akuas.cl/contacto' },
  openGraph: {
    title: 'Solicitar demo — akuas',
    description: 'Demo gratuita de akuas para tu APR. Sin compromiso ni tecnicismos.',
    url: 'https://akuas.cl/contacto',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'contacto akuas' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Tiene algún costo conversar o ver la demo?', acceptedAnswer: { '@type': 'Answer', text: 'No. La conversación y la demo son gratis y sin compromiso. Primero mostramos akuas funcionando y recién ahí decides si te sirve.' } },
    { '@type': 'Question', name: '¿Cuánto demora dejar akuas andando?', acceptedAnswer: { '@type': 'Answer', text: 'Depende del tamaño del comité, pero la mayoría parte en cuestión de días. Cargamos el padrón de socios y acompañamos en los primeros cobros.' } },
    { '@type': 'Question', name: '¿Necesito comprar equipos o saber de computación?', acceptedAnswer: { '@type': 'Answer', text: 'No. akuas funciona desde el celular o computador que ya tienes. Si tu comité sabe usar WhatsApp, sabe usar akuas.' } },
    { '@type': 'Question', name: '¿De quién son los datos del comité?', acceptedAnswer: { '@type': 'Answer', text: 'Del comité, siempre. La información no se va con la directiva cuando cambia: queda registrada para quienes vengan después.' } },
  ],
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto — akuas',
  url: 'https://akuas.cl/contacto',
  description: 'Solicita una demo gratuita de akuas para tu APR',
  contactOption: { '@type': 'ContactPoint', telephone: '+56-9-4265-7280', contactType: 'customer support', availableLanguage: 'Spanish' },
}

export default function ContactoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactoClient />
    </>
  )
}
