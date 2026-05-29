import type { Metadata } from 'next'
import { HomeClient } from './components/HomeClient'

export const metadata: Metadata = {
  title: { absolute: 'akuas — el sistema del agua rural' },
  description: 'El sistema de gestión hecho para los Comités de Agua Potable Rural de Chile. Socios, lecturas, boletas y pagos en un solo lugar, claro y simple.',
  alternates: { canonical: 'https://akuas.cl' },
}

export default function HomePage() {
  return <HomeClient />
}
