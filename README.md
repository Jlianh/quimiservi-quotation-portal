# Quimiservi · Sitio de cotización

Sitio web de **Quimiservi** — fabricante de productos químicos para mantenimiento
industrial e institucional (línea de lavandería). Funciona como **página de
cotización**: el visitante arma una lista de productos/presentaciones y envía sus
datos para que el equipo comercial lo contacte. La arquitectura está preparada
para evolucionar a e-commerce sin reescribir la UI.

Reconstruido en **Angular 20** (standalone + signals) con **Tailwind CSS v4**,
partiendo de un prototipo previo en React.

---

## Cómo ejecutarlo

```bash
npm install
npm start            # ng serve → http://localhost:4200
# (el puerto 4200 estaba ocupado durante el desarrollo: npm start -- --port 4300)

npm run build        # build de producción en dist/
npm test             # tests unitarios (Karma/Jasmine)
```

Requiere Node 20.19+, 22.12+ o 24.x.

---

## Stack

- **Angular 20** — componentes standalone, señales (`signal`/`computed`/`effect`),
  nuevo control de flujo (`@if`/`@for`/`@let`), `ChangeDetectionStrategy.OnPush`,
  rutas con _lazy loading_.
- **Tailwind CSS v4** — vía `@tailwindcss/postcss` (`.postcssrc.json`). Los tokens
  de marca se definen con `@theme` en `src/styles.css`.
- **lucide-angular** — iconografía.

### Tipografía y licencia de la marca

- **Inter** (Google Fonts) para títulos y texto — es la fuente de toda la página.
- **Ethnocentric** (Typodermic Fonts) solo para el **logotipo "QUIMISERVI"**. La
  licencia gratuita de escritorio de Ethnocentric **prohíbe incrustar la fuente en
  una página web** (`@font-face`), pero permite su uso como logotipo. Por eso el
  wordmark está convertido a **trazos SVG** en
  `shared/components/brand-wordmark/` — el `.otf` nunca se envía al navegador.
  Para regenerarlo: `python scripts/build-wordmark.py` (requiere `fonttools`).
  Para usar Ethnocentric en texto web habría que adquirir una licencia web a
  Typodermic.

---

## Arquitectura (Clean Architecture + SOLID)

El código se organiza por capas, con dependencias apuntando siempre **hacia el
dominio**. La UI nunca conoce de dónde salen los datos ni a dónde se envían.

```
src/app/
├── core/                      # Dominio + lógica de negocio (sin UI)
│   ├── models/                # Tipos del dominio (Product, QuoteItem, …)
│   ├── repositories/          # ProductRepository  (abstracción / puerto)
│   ├── data/                  # PRODUCTS, InMemoryProductRepository, company.data
│   ├── storage/               # StoragePort (abstracción) + LocalStorageAdapter
│   ├── gateways/              # QuoteGateway (abstracción) + DemoQuoteGateway
│   └── services/              # ProductService, QuoteStore, ToastService
├── shared/                    # Componentes presentacionales reutilizables
│   └── components/            # product-card, quantity-stepper, toast-container
├── layout/                    # navbar, footer
├── features/                  # Páginas (lazy): home, products, about, quote
├── app.config.ts              # Composition root: liga abstracciones ↔ implementaciones
└── app.routes.ts              # Tabla de rutas
```

### Cómo se aplican los principios SOLID

- **S — Single Responsibility.** Cada pieza hace una sola cosa: `QuoteStore` solo
  mantiene el estado de la cotización; la persistencia vive en `LocalStorageAdapter`;
  el filtrado del catálogo es una función pura en `ProductService`; los componentes
  solo renderizan.
- **O — Open/Closed.** Para enviar cotizaciones por HTTP o conectar un backend de
  catálogo, se crea una nueva implementación y se cambia **solo** `app.config.ts`.
  Ningún componente se modifica.
- **L — Liskov.** Cualquier implementación de `ProductRepository`, `StoragePort`
  o `QuoteGateway` es intercambiable porque respeta el mismo contrato (mismas
  firmas, devuelve `Observable`).
- **I — Interface Segregation.** Los puertos son pequeños y enfocados
  (`StoragePort` = read/write/remove; `QuoteGateway` = submit), sin métodos de más.
- **D — Dependency Inversion.** Los servicios y componentes dependen de **clases
  abstractas** (puertos), no de implementaciones concretas. El _binding_ ocurre en
  el composition root:

  ```ts
  { provide: ProductRepository, useClass: InMemoryProductRepository }
  { provide: StoragePort,       useClass: LocalStorageAdapter }
  { provide: QuoteGateway,      useClass: DemoQuoteGateway }
  ```

### Flujo de datos

```
Componente → ProductService → ProductRepository (puerto) → InMemoryProductRepository
Componente → QuoteStore (signals) → StoragePort (puerto) → LocalStorageAdapter
Formulario → QuoteGateway (puerto) → DemoQuoteGateway (log + referencia simulada)
```

---

## Páginas

| Ruta              | Descripción                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `/`               | Inicio: hero, cinta de confianza, beneficios, productos, CTA.      |
| `/productos`      | Catálogo con búsqueda y filtro por categoría.                      |
| `/productos/:id`  | Detalle: presentación, cantidad, características, usos.             |
| `/nosotros`       | Quiénes somos, visión y misión.                                    |
| `/cotizacion`     | "Carrito" de cotización + formulario de contacto.                  |

La cotización se guarda en `localStorage` (`quimiservi.quote.v1`) y persiste entre
recargas.

---

## Marca y activos

Los colores, productos e iconos provienen de los activos reales de la empresa
(`archivos quimiservi`), copiados a `public/`:

- **Paleta:** azul/navy de marca (`--color-navy: #031838`) sobre blanco; cada línea
  de producto conserva su color de acento (verde OXI-WHITEX, índigo DETERLAV,
  naranja FORTEX, azul Suavizante).
- **`public/products/`** — fotos reales de cada producto.
- **`public/icons/`** — lockups de iconos renderizados (cinta de confianza).

### Productos (catálogo real)

1. **OXI-WHITEX** — Blanqueador oxigenado (libre de cloro)
2. **DETERLAV** — Detergente para lavadora industrial
3. **FORTEX** — Desengrasante textil
4. **Suavizante Textil** — Suavizante ambientado

Los datos viven en `src/app/core/data/products.data.ts`. Para añadir productos o
migrar a un backend, basta con editar ese archivo o sustituir el repositorio.

---

## De cotización a e-commerce

El modelo `Product` ya contempla campos para crecer. Para habilitar venta online:

1. Implementar `HttpProductRepository` (catálogo) y un `HttpQuoteGateway`/checkout.
2. Cambiar los `useClass` en `app.config.ts`.
3. Añadir precios/stock al modelo y un servicio de carrito de compra (análogo a
   `QuoteStore`).

La UI existente se reutiliza sin cambios estructurales.

---

> Nota de desarrollo: en `ng serve` aparecen advertencias `NG0913` porque los PNG
> de iconos son más grandes que su tamaño renderizado. Son sugerencias de
> rendimiento (no errores); se resuelven optimizando/redimensionando los PNG.
