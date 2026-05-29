# akuas — Paquete de logo

Sistema de marca **akuas** · v.01 · Mayo 2026

---

## ¿Qué hay aquí?

11 archivos SVG (vectoriales, escalables, editables) y 9 PNG (rasterizados, listos para uso digital).

```
logo-files/
├── SVG (vectoriales, recomendados)
│   ├── akuas-simbolo-positivo.svg        Solo los anillos · sobre niebla
│   ├── akuas-simbolo-reverso.svg         Solo los anillos · sobre akua
│   ├── akuas-simbolo-mono.svg            Solo los anillos · una tinta
│   ├── akuas-monograma-positivo.svg      Símbolo dentro de cuadrado akua
│   ├── akuas-monograma-reverso.svg       Símbolo dentro de cuadrado niebla
│   ├── akuas-monograma-tinta.svg         Símbolo dentro de cuadrado tinta
│   ├── akuas-lockup-horizontal-positivo.svg   Lockup completo · USO PREDETERMINADO
│   ├── akuas-lockup-horizontal-reverso.svg    Lockup sobre fondo akua
│   ├── akuas-lockup-horizontal-mono.svg       Lockup en una tinta
│   ├── akuas-lockup-vertical-positivo.svg     Lockup apilado · tarjetas, sellos
│   └── akuas-lockup-vertical-reverso.svg      Lockup apilado · fondo oscuro
│
└── PNG (rasterizados, fallback digital)
    ├── akuas-monograma-positivo@1024.png
    ├── akuas-monograma-positivo@512.png
    ├── akuas-monograma-positivo@256.png
    ├── akuas-monograma-reverso@1024.png
    ├── akuas-monograma-tinta@1024.png
    ├── akuas-simbolo-positivo@1024.png
    ├── akuas-simbolo-reverso@1024.png
    ├── akuas-favicon@64.png
    └── akuas-favicon@32.png
```

---

## Cuál usar

| Contexto | Archivo recomendado |
|---|---|
| **Web · header, hero** | `akuas-lockup-horizontal-positivo.svg` |
| **Web · footer (sobre akua)** | `akuas-lockup-horizontal-reverso.svg` |
| **App icon · favicon** | `akuas-favicon@64.png` · `akuas-monograma-positivo@512.png` |
| **Avatar redes sociales** | `akuas-monograma-positivo@1024.png` |
| **Tarjeta de presentación** | `akuas-lockup-vertical-positivo.svg` |
| **Imprenta (offset, plot)** | Cualquier SVG — exportar a PDF desde Illustrator/Affinity |
| **Bordado / serigrafía 1 tinta** | `akuas-lockup-horizontal-mono.svg` |
| **Documento Word / PPT** | PNG @1024 — son los más universales |

---

## Tipografía del wordmark

La palabra **"akuas"** está dispuesta en **Bricolage Grotesque** (Google Fonts, gratuita y de uso libre).

### Si abres el SVG en Illustrator / Affinity / Figma:

**Opción A — Instalar la fuente (recomendado, mantiene editabilidad):**
1. Descarga gratis desde [fonts.google.com/specimen/Bricolage+Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)
2. Instala los pesos *Medium 500* y *SemiBold 600*
3. Abre el SVG — el wordmark se ve correcto

**Opción B — Convertir el texto a contornos (más seguro para imprenta):**
- **Illustrator:** Selecciona el texto → Tipo → `Crear contornos` (Cmd/Ctrl + Shift + O)
- **Affinity Designer:** Selecciona el texto → `Capa → Convertir a curvas` (Cmd/Ctrl + Enter)
- **Figma:** Selecciona el texto → click derecho → `Outline stroke` (no aplica) — usa Plugin "Convert to Outlines" o copia el texto al menú `Object → Outline` (Cmd/Ctrl + Shift + O)
- **Inkscape:** Selecciona el texto → `Trayecto → Objeto a trayecto` (Cmd/Ctrl + Shift + C)

Una vez convertido a contornos, el archivo **ya no necesita la fuente instalada** para verse bien — útil para enviar a imprenta.

> Si no instalas Bricolage Grotesque y abres el SVG, el texto cae a la tipografía sans-serif del sistema. El resto del logo (símbolo) sigue siendo correcto.

---

## Colores oficiales

| Nombre | OKLCH | HEX | RGB | CMYK |
|---|---|---|---|---|
| **Akua** (primario) | oklch(.42 .10 205) | `#2A6F87` | 42 / 111 / 135 | 76 / 32 / 24 / 32 |
| **Ocre** (acento) | oklch(.72 .13 75) | `#D4A560` | 212 / 165 / 96 | 17 / 35 / 68 / 2 |
| **Niebla** (papel) | oklch(.95 .018 92) | `#F2EEE5` | 242 / 238 / 229 | 4 / 4 / 9 / 0 |
| **Tinta** (texto) | oklch(.18 .02 240) | `#1A1F29` | 26 / 31 / 41 | 76 / 64 / 49 / 82 |

---

## Construcción del símbolo

El símbolo se construye en una caja de 100×100 unidades:

```
Centro (dot)        — radio 0.07 · fill ocre
Anillo medio        — radio 0.20 · stroke 0.06x
Anillo exterior     — radio 0.32 · stroke 0.06x
Stroke linecap      — round
```

Las proporciones del lockup horizontal son **1 : 2.6** (alto:ancho). El gap entre el monograma y el wordmark debe ser de **0.4x** la altura del símbolo.

---

## Espacio libre (clear space)

Mínimo obligatorio alrededor del lockup: **1X** (donde X = altura del símbolo). Recomendado: **1.5X** para portadas y aplicaciones de gran formato.

---

## Tamaños mínimos

| Medio | Lockup horizontal | Monograma |
|---|---|---|
| Pantalla | 120 px ancho | 32 px lado |
| Imprenta | 22 mm ancho | 8 mm lado |
| Bordado | — | 14 mm lado |

Por debajo de estos valores, usar la versión solo símbolo. Para impresión en bordado o bajo relieve, aumentar el stroke en **+15%** para conservar lectura.

---

## ¿Qué NO hacer

- ✗ No deformar (estirar horizontal/vertical)
- ✗ No rotar
- ✗ No recolorear fuera de la paleta oficial
- ✗ No vaciar contornos (el wordmark va sólido)
- ✗ No agregar sombras, brillos o biselados
- ✗ No usar sobre fotografías ni patrones
- ✗ No reorganizar (el símbolo va siempre a la izquierda o arriba)
- ✗ No recrear desde cero — si falta un archivo, escribir a `hola@akuas.cl`

---

## Contacto

Sistema de marca **akuas** · Mayo 2026 · Santiago de Chile
Contacto técnico: `hola@akuas.cl`

Si necesitas un formato no listado (AI, EPS, PDF), avísanos y lo generamos.
