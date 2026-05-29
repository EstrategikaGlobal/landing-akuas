import type { Metadata } from 'next'
import { ContactoClient } from './ContactoClient'

export const metadata: Metadata = {
  title: 'Solicitar demo — akuas',
  description: 'Agenda una demo gratuita de akuas para tu APR. 30 minutos por videollamada, sin compromiso. También puedes escribirnos por WhatsApp o email.',
  alternates: { canonical: 'https://akuas.cl/contacto' },
  openGraph: {
    title: 'Solicitar demo — akuas',
    description: 'Demo gratuita de 30 minutos para tu APR. Sin compromiso ni tarjeta de crédito.',
    url: 'https://akuas.cl/contacto',
    images: [{ url: '/opengraph-image.png', width: 512, height: 512, alt: 'contacto akuas' }],
  },
}

export default function ContactoPage() {
  return <ContactoClient />
}
