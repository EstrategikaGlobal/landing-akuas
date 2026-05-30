import type { Metadata } from 'next'
import { ContactoClient } from './ContactoClient'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Conversa con el equipo akuas sobre tu comité. Demo gratuita, sin compromiso. Escríbenos por WhatsApp, correo o Instagram.',
  alternates: { canonical: 'https://akuas.cl/contacto' },
  openGraph: {
    title: 'Contacto — akuas',
    description: 'Demo gratuita de akuas para tu APR. Sin compromiso ni tecnicismos.',
    url: 'https://akuas.cl/contacto',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'contacto akuas' }],
  },
}

export default function ContactoPage() {
  return <ContactoClient />
}
