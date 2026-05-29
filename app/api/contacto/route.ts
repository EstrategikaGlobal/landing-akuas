import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { nombre, apr, cargo, telefono, mensaje } = await request.json()

    if (!nombre || typeof nombre !== 'string' || nombre.trim().length < 2) {
      return NextResponse.json({ error: 'Nombre requerido' }, { status: 400 })
    }
    if (!apr || typeof apr !== 'string' || apr.trim().length < 2) {
      return NextResponse.json({ error: 'Nombre del APR requerido' }, { status: 400 })
    }

    // Log lead — add email integration (Resend/Sendgrid) here when ready
    console.log('[contacto]', { nombre, apr, cargo, telefono, mensaje })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
